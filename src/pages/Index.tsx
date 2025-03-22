
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Zap, Sparkles, ArrowRight, Layers, CheckCircle } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      title: "Expert Learning Paths",
      description: "Structured paths designed to take you from beginner to expert in multiple programming languages."
    },
    {
      icon: <Code className="h-6 w-6 text-purple-500" />,
      title: "Interactive Code Editor",
      description: "Practice what you learn in our built-in code editor with real-time feedback and execution."
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Flashcards",
      description: "Reinforce your knowledge with our intelligent flashcard system using spaced repetition."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-green-500" />,
      title: "AI-Powered Assistance",
      description: "Get help when you're stuck with our AI programming assistant that explains concepts clearly."
    }
  ];

  const languages = [
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "Python", color: "bg-blue-500" },
    { name: "Java", color: "bg-red-500" },
    { name: "C#", color: "bg-purple-500" },
    { name: "C++", color: "bg-blue-700" },
    { name: "TypeScript", color: "bg-blue-400" },
    { name: "Go", color: "bg-teal-500" },
    { name: "Rust", color: "bg-amber-600" }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              Learn coding the modern way
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Our platform combines the best learning techniques with cutting-edge technology to help you master programming faster.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow card-hover"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Languages section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Available Languages</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Choose from a variety of programming languages to begin your learning journey
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className={`px-6 py-3 rounded-full ${language.color} bg-opacity-10 text-sm font-medium hover:bg-opacity-20 transition-all duration-300`}>
                  {language.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="rounded-full">
              <Link to="/dashboard">
                Start Learning Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* How it works section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our step-by-step approach makes learning programming languages efficient and enjoyable
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <Layers className="h-6 w-6 text-primary" />,
                title: "Choose a Language",
                description: "Select the programming language you want to learn from our diverse catalog."
              },
              {
                step: "02",
                icon: <BookOpen className="h-6 w-6 text-primary" />,
                title: "Follow the Path",
                description: "Work through our expertly crafted learning path with interactive lessons and exercises."
              },
              {
                step: "03",
                icon: <CheckCircle className="h-6 w-6 text-primary" />,
                title: "Master the Skills",
                description: "Practice with quizzes, flashcards, and coding challenges to solidify your knowledge."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="relative p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
              >
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {item.step}
                </div>
                <div className="mb-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to start your coding journey?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of learners who are building their future through programming skills.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="rounded-full">
              <Link to="/dashboard">
                Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 text-primary">
                <span className="text-xl font-bold">LearnifyAI</span>
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} LearnifyAI. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                About
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                Contact
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                Privacy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
