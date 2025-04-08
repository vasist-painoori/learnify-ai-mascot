
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BarChart2, Clock, Calendar } from 'lucide-react';
import DetailedStatsModal from './DetailedStatsModal';

interface StatsCardProps {
  progress: number;
}

const StatsCard = ({ progress }: StatsCardProps) => {
  const [showStatsModal, setShowStatsModal] = useState(false);
  const completedTopics = Math.round((progress / 100) * 10);

  return (
    <>
      <Card className="overflow-hidden border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900/30 pb-2">
          <div className="flex justify-between items-center">
            <CardTitle>Quick Stats</CardTitle>
            <BarChart2 className="h-5 w-5 text-blue-500" />
          </div>
          <CardDescription>Your learning activity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <span>Topics Completed</span>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="font-medium bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-md text-blue-800 dark:text-blue-300">
                    {completedTopics}/10
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>You've completed {completedTopics} out of 10 topics</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span>Time Spent</span>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="font-medium bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-md text-green-800 dark:text-green-300 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 2h 15m
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Total time spent learning</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
              <span>Last Active</span>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="font-medium bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-md text-purple-800 dark:text-purple-300 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> Today
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your last learning session was today</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
        <CardFooter className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/10 dark:to-gray-900/20 pt-2">
          <Button 
            variant="default" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => setShowStatsModal(true)}
          >
            View Detailed Stats
          </Button>
        </CardFooter>
      </Card>

      <DetailedStatsModal
        open={showStatsModal}
        onOpenChange={setShowStatsModal}
        progress={progress}
      />
    </>
  );
};

export default StatsCard;
