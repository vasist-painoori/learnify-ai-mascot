
import React from 'react';
import { useLearning } from '@/contexts/LearningContext';
import AIMascot from '@/components/AIMascot';
import DashboardContent from '@/components/dashboard/DashboardContent';

const Dashboard = () => {
  const { selectedLanguage, progress, resetLearning } = useLearning();
  
  return (
    <div className="h-screen flex overflow-hidden">
      <main className="flex-1 overflow-y-auto pb-10 w-full">
        <DashboardContent
          selectedLanguage={selectedLanguage}
          progress={progress}
          resetLearning={resetLearning}
        />
        
        <AIMascot />
      </main>
    </div>
  );
};

export default Dashboard;
