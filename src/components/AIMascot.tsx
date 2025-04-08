
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send, X, MessageCircle } from 'lucide-react';
import { useLearning } from '@/contexts/LearningContext';
import { toast } from 'sonner';

interface Message {
  type: 'user' | 'ai';
  text: string;
}

const AIMascot = () => {
  const { selectedLanguage, currentTopic } = useLearning();
  const [isOpen, setIsOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [conversation, setConversation] = useState<Message[]>(() => {
    // Load conversation from localStorage if available
    const savedConversation = localStorage.getItem('codebuddy-conversation');
    return savedConversation ? JSON.parse(savedConversation) : [];
  });
  const [isTyping, setIsTyping] = useState(false);
  const [apiKey, setApiKey] = useState<string>(() => {
    return localStorage.getItem('openai-api-key') || '';
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Save conversation to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('codebuddy-conversation', JSON.stringify(conversation));
  }, [conversation]);

  // Save API key to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('openai-api-key', apiKey);
  }, [apiKey]);
  
  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation, isTyping]);
  
  // Intro message when mascot opens
  useEffect(() => {
    if (isOpen && conversation.length === 0) {
      setIsTyping(true);
      
      const greeting = selectedLanguage 
        ? `Hi there! I'm CodeBuddy, your AI coding assistant. I see you're learning ${selectedLanguage.name}. How can I help you with your coding journey today?`
        : "Hi there! I'm CodeBuddy, your AI coding assistant. How can I help you with your coding journey today?";
      
      // Simulate typing
      setTimeout(() => {
        setConversation([{
          type: 'ai',
          text: greeting
        }]);
        setIsTyping(false);
      }, 1000);
    }
  }, [isOpen, selectedLanguage, conversation.length]);

  const fetchAIResponse = async (userMessage: string) => {
    if (!apiKey) {
      toast.error("Please enter an OpenAI API key in the settings");
      setIsTyping(false);
      return;
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are CodeBuddy, a helpful coding assistant. The user is learning programming. ${
                selectedLanguage 
                  ? `They are currently learning ${selectedLanguage.name}.` 
                  : ''
              } ${
                currentTopic 
                  ? `They are specifically studying: ${currentTopic.title}. 
                     Here is some context about this topic: ${currentTopic.description}` 
                  : ''
              } Be concise, helpful, and provide code examples when relevant.`
            },
            ...conversation.map(msg => ({
              role: msg.type === 'user' ? 'user' : 'assistant',
              content: msg.text
            })),
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to fetch AI response');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return "I'm sorry, I encountered an error while processing your request. Please try again later.";
    }
  };

  const handleSendMessage = async () => {
    if (!messageText.trim()) return;
    
    // Add user message
    const userMessage = messageText.trim();
    setConversation(prev => [...prev, {
      type: 'user',
      text: userMessage
    }]);
    
    setIsTyping(true);
    setMessageText('');
    
    // Fetch AI response
    const aiResponse = await fetchAIResponse(userMessage);
    
    setConversation(prev => [...prev, {
      type: 'ai',
      text: aiResponse || "I'm sorry, I couldn't generate a response. Please try again."
    }]);
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  const clearConversation = () => {
    setConversation([]);
    toast.success("Conversation history cleared");
  };

  return (
    <>
      {/* Chat button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-primary hover:bg-primary/90"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-full sm:w-96 h-[500px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl bg-white dark:bg-gray-900 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-primary/5">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                  <span className="text-sm font-bold">AI</span>
                </div>
                <div>
                  <h3 className="font-medium">CodeBuddy</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Your coding assistant</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearConversation}
                  className="h-8 w-8 text-gray-500"
                  title="Clear conversation"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {conversation.map((message, index) => (
                <div 
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none'
                    }`}
                  >
                    <p className="whitespace-pre-wrap text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 dark:bg-gray-800 rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-pulse" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-pulse" style={{ animationDelay: '200ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-pulse" style={{ animationDelay: '400ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* API Key input area (only if not set) */}
            {!apiKey && (
              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-800">
                <div className="flex flex-col">
                  <label htmlFor="api-key" className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Enter your OpenAI API key:
                  </label>
                  <input
                    id="api-key"
                    type="password"
                    value={apiKey}
                    onChange={handleApiKeyChange}
                    className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="sk-..."
                  />
                </div>
              </div>
            )}
            
            {/* Input area */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center">
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question..."
                  className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  rows={1}
                  style={{ minHeight: '40px', maxHeight: '120px' }}
                />
                <Button 
                  size="icon"
                  onClick={handleSendMessage}
                  disabled={!messageText.trim() || isTyping}
                  className="ml-2 flex-shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIMascot;
