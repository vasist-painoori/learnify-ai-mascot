
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Language } from '@/data/languages';

interface LanguageCardProps {
  selectedLanguage: Language;
  onReset: () => void;
}

const LanguageCard = ({ selectedLanguage, onReset }: LanguageCardProps) => {
  return (
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
          onClick={onReset}
        >
          Change Language
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LanguageCard;
