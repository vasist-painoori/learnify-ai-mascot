
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Activity, Clock, CalendarDays } from 'lucide-react';

interface DetailedStatsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  progress: number;
}

const DetailedStatsModal = ({ open, onOpenChange, progress }: DetailedStatsModalProps) => {
  // Generate some sample data based on the progress
  const completedTopics = Math.round((progress / 100) * 10);
  
  const activityData = [
    { name: 'Mon', topics: Math.floor(Math.random() * 2) },
    { name: 'Tue', topics: Math.floor(Math.random() * 3) },
    { name: 'Wed', topics: Math.floor(Math.random() * 2) },
    { name: 'Thu', topics: Math.floor(Math.random() * 3) },
    { name: 'Fri', topics: Math.floor(Math.random() * 2) },
    { name: 'Sat', topics: Math.floor(Math.random() * 3) },
    { name: 'Sun', topics: Math.floor(Math.random() * 2) },
  ];

  const sessionHistory = [
    { date: '2025-04-08', duration: '45 min', topics: 2 },
    { date: '2025-04-07', duration: '30 min', topics: 1 },
    { date: '2025-04-05', duration: '60 min', topics: 3 },
    { date: '2025-04-03', duration: '25 min', topics: 1 },
    { date: '2025-04-01', duration: '15 min', topics: 1 },
  ];

  const chartConfig = {
    topics: {
      label: 'Topics Completed',
      theme: {
        light: '#3b82f6',
        dark: '#60a5fa'
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Detailed Statistics</DialogTitle>
          <DialogDescription>
            Your complete learning activity and progress
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-6">
          {/* Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900/50 shadow-sm hover:shadow-md transition-all duration-300">
              <Activity className="h-10 w-10 text-blue-500" />
              <div>
                <p className="text-muted-foreground text-sm">Completion</p>
                <p className="text-2xl font-bold">{progress}%</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 border rounded-lg bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-gray-900/50 shadow-sm hover:shadow-md transition-all duration-300">
              <Clock className="h-10 w-10 text-green-500" />
              <div>
                <p className="text-muted-foreground text-sm">Total Time</p>
                <p className="text-2xl font-bold">2h 15m</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 border rounded-lg bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-900/50 shadow-sm hover:shadow-md transition-all duration-300">
              <CalendarDays className="h-10 w-10 text-purple-500" />
              <div>
                <p className="text-muted-foreground text-sm">Last Session</p>
                <p className="text-2xl font-bold">Today</p>
              </div>
            </div>
          </div>
          
          {/* Activity Chart */}
          <div className="border rounded-lg p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/80 shadow-sm">
            <h3 className="font-medium mb-4">Weekly Activity</h3>
            <div className="h-64">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activityData}>
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Bar
                      dataKey="topics"
                      fill="var(--color-topics)"
                      radius={[4, 4, 0, 0]}
                      name="topics"
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>
          
          {/* Session History Table */}
          <div className="border rounded-lg p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/80 shadow-sm">
            <h3 className="font-medium mb-4">Recent Sessions</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Topics Completed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sessionHistory.map((session, index) => (
                  <TableRow key={index}>
                    <TableCell>{session.date}</TableCell>
                    <TableCell>{session.duration}</TableCell>
                    <TableCell>{session.topics}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailedStatsModal;
