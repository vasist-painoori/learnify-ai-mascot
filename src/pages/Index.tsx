
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Topbar from '@/components/Topbar';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Printer } from 'lucide-react';

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Topbar />
      <div className="container mx-auto px-4 pt-16">
        <Hero />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <Code className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Programming Lessons</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Learn popular programming languages with our interactive courses
                </p>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2">•</span> Step-by-step guided learning paths
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2">•</span> Interactive code examples and exercises
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2">•</span> Quizzes to test your knowledge
              </li>
            </ul>
            <Link to="/dashboard">
              <Button className="w-full">
                <BookOpen className="mr-2 h-4 w-4" /> Explore Programming Courses
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-start mb-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <Printer className="h-6 w-6 text-green-600 dark:text-green-300" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">3D Printing Courses</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Master the art of 3D printing with comprehensive guides
                </p>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2">•</span> Learn hardware fundamentals
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2">•</span> Material guides and settings
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2">•</span> Troubleshooting and optimization techniques
              </li>
            </ul>
            <Link to="/3d-printing/basics">
              <Button className="w-full" variant="outline">
                <Printer className="mr-2 h-4 w-4" /> Start 3D Printing Lessons
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
