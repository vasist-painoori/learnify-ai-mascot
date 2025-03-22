
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { languages, Language } from '@/data/languages';
import { useNavigate } from 'react-router-dom';
import { useLearning } from '@/contexts/LearningContext';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const LanguageSelection = () => {
  const { setSelectedLanguage } = useLearning();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectLanguage = (language: Language) => {
    setSelectedCard(language.id);
    
    // Slight delay for animation to complete before navigating
    setTimeout(() => {
      setSelectedLanguage(language);
      navigate('/learn');
    }, 400);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Choose a Language</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
          Select the programming language you want to learn
        </p>

        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search languages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 staggered-fade-in">
          <AnimatePresence>
            {filteredLanguages.map((language) => (
              <motion.div
                key={language.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={`relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 ${
                  selectedCard === language.id ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div 
                  className="p-6 h-full flex flex-col bg-white dark:bg-gray-900 cursor-pointer card-hover"
                  onClick={() => handleSelectLanguage(language)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${language.color} bg-opacity-20`}>
                      {language.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg">{language.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{language.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow">
                    {language.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {language.applications.slice(0, 3).map((app, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                      >
                        {app}
                      </span>
                    ))}
                    {language.applications.length > 3 && (
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                        +{language.applications.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredLanguages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 mb-4">No languages found matching "{searchQuery}"</p>
            <Button 
              variant="outline" 
              onClick={() => setSearchQuery('')}
            >
              Clear search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelection;
