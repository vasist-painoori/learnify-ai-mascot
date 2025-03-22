
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import LanguageSelection from '@/components/LanguageSelection';
import AIMascot from '@/components/AIMascot';

const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Your Learning Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Choose a programming language to begin your learning journey
            </p>
          </div>
          
          <LanguageSelection />
        </motion.div>
      </div>
      
      <AIMascot />
    </div>
  );
};

export default Dashboard;
