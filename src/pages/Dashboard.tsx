
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Book, 
  BookOpen, 
  Code, 
  Home, 
  BarChart, 
  Settings,
  User
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import LanguageSelection from '@/components/LanguageSelection';
import AIMascot from '@/components/AIMascot';
import { useLearning } from '@/contexts/LearningContext';
import { Button } from '@/components/ui/button';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

const Dashboard = () => {
  const navigate = useNavigate();
  const { selectedLanguage, progress, resetLearning } = useLearning();
  
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="h-screen flex overflow-hidden">
        <Sidebar className="border-r border-border">
          <SidebarHeader className="border-b border-border">
            <div className="flex items-center gap-2 px-2">
              <BookOpen className="h-6 w-6" />
              <div className="font-semibold text-lg">CodeMaster</div>
              <SidebarTrigger className="ml-auto" />
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive tooltip="Dashboard">
                  <Home />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => navigate('/learn')} tooltip="Learning">
                  <Book />
                  <span>Learning Path</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Practice">
                  <Code />
                  <span>Practice</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Progress">
                  <BarChart />
                  <span>Progress</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter className="border-t border-border mt-auto">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Profile">
                  <User />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset className="overflow-y-auto pb-10">
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
              
              {selectedLanguage ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Progress</CardTitle>
                      <CardDescription>Track your learning journey</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Completion</span>
                        <span className="text-sm font-medium">{progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-300" 
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => navigate('/learn')}
                      >
                        Continue Learning
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Language</CardTitle>
                      <CardDescription>Your selected programming language</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-secondary">
                        {selectedLanguage.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{selectedLanguage.name}</h3>
                        <p className="text-sm text-muted-foreground">{selectedLanguage.tagline}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={resetLearning}
                      >
                        Change Language
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Stats</CardTitle>
                      <CardDescription>Your learning activity</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Topics Completed</span>
                        <span className="font-medium">{Math.round((progress / 100) * 10)}/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time Spent</span>
                        <span className="font-medium">2h 15m</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Active</span>
                        <span className="font-medium">Today</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="secondary" className="w-full">
                        View Detailed Stats
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ) : (
                <LanguageSelection />
              )}
            </motion.div>
          </div>
          
          <AIMascot />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
