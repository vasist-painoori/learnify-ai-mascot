
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLearning } from '@/contexts/LearningContext';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Home, BookOpen, Award, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { selectedLanguage, progress, resetLearning } = useLearning();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-primary" onClick={resetLearning}>
          <span className="text-xl font-bold">LearnifyAI</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
              location.pathname === '/' 
                ? 'text-primary font-medium' 
                : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
            }`}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link 
            to="/dashboard" 
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
              location.pathname === '/dashboard' 
                ? 'text-primary font-medium' 
                : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
            }`}
          >
            <BookOpen size={18} />
            <span>Dashboard</span>
          </Link>
        </nav>

        {/* User progress */}
        {selectedLanguage && (
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex flex-col">
              <span className="text-sm text-gray-600 dark:text-gray-300">Learning {selectedLanguage.name}</span>
              <div className="w-40 h-2 mt-1">
                <Progress value={progress} className="h-2" />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[61px] left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 px-3 py-2 rounded-md transition-colors"
              onClick={closeMenu}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link 
              to="/dashboard" 
              className="flex items-center space-x-2 px-3 py-2 rounded-md transition-colors"
              onClick={closeMenu}
            >
              <BookOpen size={18} />
              <span>Dashboard</span>
            </Link>
            {selectedLanguage && (
              <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                <span className="text-sm text-gray-600 dark:text-gray-300">Learning {selectedLanguage.name}</span>
                <div className="w-full h-2 mt-1">
                  <Progress value={progress} className="h-2" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
