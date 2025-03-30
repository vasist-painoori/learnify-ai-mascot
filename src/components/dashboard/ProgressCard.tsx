
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProgressCardProps {
  progress: number;
}

const ProgressCard = ({ progress }: ProgressCardProps) => {
  const navigate = useNavigate();

  return (
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
  );
};

export default ProgressCard;
