
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, RefreshCw } from 'lucide-react';

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  readOnly?: boolean;
  onRun?: (code: string) => void;
}

const CodeEditor = ({ 
  initialCode = '', 
  language = 'javascript',
  readOnly = false,
  onRun 
}: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const runCode = () => {
    setIsRunning(true);
    setError(null);
    setOutput('');

    try {
      if (onRun) {
        onRun(code);
        return;
      }

      // Only execute JavaScript in the browser
      if (language === 'javascript') {
        const oldConsoleLog = console.log;
        const oldConsoleError = console.error;
        let logs: string[] = [];

        // Override console.log to capture output
        console.log = (...args) => {
          logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
          ).join(' '));
        };

        console.error = (...args) => {
          logs.push(`Error: ${args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
          ).join(' ')}`);
        };

        try {
          // Create a function from the code and execute it
          const executionFunction = new Function(code);
          executionFunction();
          setOutput(logs.join('\n'));
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        } finally {
          // Restore original console functions
          console.log = oldConsoleLog;
          console.error = oldConsoleError;
        }
      } else {
        setOutput(`Code execution for ${language} is simulated. In a real environment, this would run server-side.`);
      }
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    setError(null);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {language.charAt(0).toUpperCase() + language.slice(1)} Editor
          </span>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetCode}
            className="h-8 text-xs"
          >
            <RefreshCw className="h-3 w-3 mr-1" />
            Reset
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            onClick={runCode}
            disabled={isRunning || readOnly}
            className="h-8 text-xs"
          >
            <Play className="h-3 w-3 mr-1" />
            Run
          </Button>
        </div>
      </div>
      
      <div className="p-0">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-t-lg overflow-hidden">
          <textarea
            value={code}
            onChange={handleCodeChange}
            readOnly={readOnly}
            className="w-full font-mono text-sm p-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none resize-none border-none h-60"
            placeholder={`Write your ${language} code here...`}
            spellCheck="false"
          />
        </div>
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="bg-gray-100 dark:bg-gray-800 p-2 text-xs font-medium text-gray-700 dark:text-gray-300">
          Output
        </div>
        <div className="p-4 font-mono text-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 h-36 overflow-auto">
          {isRunning ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin h-4 w-4 border-2 border-gray-300 dark:border-gray-700 border-t-gray-600 dark:border-t-gray-300 rounded-full"></div>
              <span>Running code...</span>
            </div>
          ) : error ? (
            <div className="text-red-500 whitespace-pre-wrap">{error}</div>
          ) : output ? (
            <div className="whitespace-pre-wrap">{output}</div>
          ) : (
            <div className="text-gray-400 dark:text-gray-600">Code output will appear here</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
