
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send, X, MessageCircle } from 'lucide-react';
import { useLearning } from '@/contexts/LearningContext';

const AIMascot = () => {
  const { selectedLanguage, currentTopic } = useLearning();
  const [isOpen, setIsOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [conversation, setConversation] = useState<Array<{type: 'user' | 'ai', text: string}>>([]);
  const [isTyping, setIsTyping] = useState(false);
  
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

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    
    // Add user message
    setConversation([...conversation, {
      type: 'user',
      text: messageText
    }]);
    
    setIsTyping(true);
    setMessageText('');
    
    // Simulate AI response
    setTimeout(() => {
      let response = "I'm here to help with your coding questions. Could you be more specific about what you'd like to learn?";
      
      // Provide contextual responses based on current topic
      if (currentTopic) {
        if (messageText.toLowerCase().includes('example')) {
          response = `Here's an example related to ${currentTopic.title}:\n\n${currentTopic.codeExamples[0]?.code || "Let me prepare a custom example for you..."}`;
        } else if (messageText.toLowerCase().includes('explain')) {
          response = `${currentTopic.title} is a fundamental concept. ${currentTopic.description}\n\nWould you like me to elaborate on any specific part?`;
        } else {
          response = `I see you're learning about ${currentTopic.title}. ${currentTopic.description}\n\nDo you have any specific questions about this topic?`;
        }
      }
      
      setConversation(prev => [...prev, {
        type: 'ai',
        text: response
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
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
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
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
            </div>
            
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
                  disabled={!messageText.trim()}
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
