
import React from 'react';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { useLearning } from '@/contexts/LearningContext';
import AIMascot from '@/components/AIMascot';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardContent from '@/components/dashboard/DashboardContent';

const Dashboard = () => {
  const { selectedLanguage, progress, resetLearning } = useLearning();
  
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="h-screen flex overflow-hidden">
        <DashboardSidebar />
        
        <SidebarInset className="overflow-y-auto pb-10">
          <DashboardContent
            selectedLanguage={selectedLanguage}
            progress={progress}
            resetLearning={resetLearning}
          />
          
          <AIMascot />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
