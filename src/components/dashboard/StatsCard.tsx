
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
import DetailedStatsModal from './DetailedStatsModal';

interface StatsCardProps {
  progress: number;
}

const StatsCard = ({ progress }: StatsCardProps) => {
  const [showStatsModal, setShowStatsModal] = useState(false);
  const completedTopics = Math.round((progress / 100) * 10);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
          <CardDescription>Your learning activity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>Topics Completed</span>
            <span className="font-medium">{completedTopics}/10</span>
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
          <Button 
            variant="secondary" 
            className="w-full"
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
