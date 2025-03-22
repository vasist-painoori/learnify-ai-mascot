
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute right-0 top-0 h-full w-full opacity-10"
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full"
            >
              Master programming with AI guidance
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
            >
              Learn to code <span className="text-primary">faster</span> with interactive AI
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Master programming languages through interactive lessons, 
              flashcards, and hands-on coding guided by our AI tutor.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="rounded-full text-white px-8 font-medium">
                <Link to="/dashboard">
                  Get Started <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-gray-300 dark:border-gray-700">
                <a href="#features">
                  Learn more
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 blur-lg opacity-70"></div>
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="px-6 py-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    AI
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">CodeMentor AI</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Your personal coding tutor</p>
                  </div>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 dark:text-gray-200">How would I create a simple function in JavaScript?</p>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-4 mb-6">
                  <p className="text-gray-800 dark:text-gray-200">
                    In JavaScript, you can create a function using the <code>function</code> keyword:
                  </p>
                  <pre className="bg-gray-800 text-gray-200 p-3 rounded-md mt-2 overflow-x-auto">
                    <code>{`function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice"));  // Hello, Alice!`}</code>
                  </pre>
                  <p className="mt-3 text-gray-800 dark:text-gray-200">
                    You can also create an arrow function:
                  </p>
                  <pre className="bg-gray-800 text-gray-200 p-3 rounded-md mt-2 overflow-x-auto">
                    <code>{`const greet = (name) => {
  return "Hello, " + name + "!";
};`}</code>
                  </pre>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Try it yourself</span>
                  </div>
                  <Button size="sm" variant="outline">Next lesson</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
