import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Topbar from '@/components/Topbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, XCircle, FlaskConical } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { printingLessons } from '@/data/lessons/3d-printing';
import { programmingLessons } from '@/data/lessons/programming';
import { CodingQuiz, LessonData, LessonSection } from '@/data/lessons/types';

const CodingQuizSection = ({ quiz }: { quiz: CodingQuiz }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);

  const checkAnswer = () => {
    const cleaned = userAnswer.trim().toLowerCase();
    const expected = quiz.expectedOutput.trim().toLowerCase();
    setResult(cleaned === expected ? 'correct' : 'incorrect');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-10 p-6 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10"
    >
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <FlaskConical className="h-5 w-5 text-primary" />
        Coding Challenge
      </h3>
      <p className="mb-3 text-foreground/90 text-[15px] leading-relaxed">{quiz.question}</p>
      <div className="mb-4 p-3 rounded-lg bg-muted/50 border border-border/50">
        <p className="text-sm text-muted-foreground">💡 <strong>Hint:</strong> {quiz.hint}</p>
      </div>

      <label className="text-sm font-semibold mb-2 block text-foreground/80">Your Answer:</label>
      <Textarea
        value={userAnswer}
        onChange={(e) => { setUserAnswer(e.target.value); setResult(null); }}
        placeholder="Type the expected output here..."
        className="mb-4 font-mono text-sm bg-background"
        rows={2}
      />

      <Button onClick={checkAnswer} disabled={!userAnswer.trim()} size="lg">
        Check Answer
      </Button>

      {result === 'correct' && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-4 p-4 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 flex items-center gap-3">
          <CheckCircle className="h-6 w-6 flex-shrink-0" />
          <div><strong>Correct!</strong> Great job — you nailed it! 🎉</div>
        </motion.div>
      )}
      {result === 'incorrect' && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-4 p-4 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
          <div className="flex items-center gap-3 mb-2">
            <XCircle className="h-6 w-6 flex-shrink-0" />
            <strong>Not quite — try again!</strong>
          </div>
          <p className="text-sm ml-9">Expected: <code className="font-mono bg-black/10 dark:bg-white/10 px-2 py-0.5 rounded">{quiz.expectedOutput}</code></p>
        </motion.div>
      )}
    </motion.div>
  );
};

const SectionBlock = ({ section, index }: { section: LessonSection; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
  >
    <h2 className="text-xl font-bold mb-3 text-foreground">{section.heading}</h2>
    <p className="text-[15px] leading-relaxed text-foreground/85 mb-4">{section.body}</p>
    {section.code && (
      <div className="rounded-xl overflow-hidden border border-border/60 mb-2">
        <div className="px-4 py-2 bg-muted/70 border-b border-border/40 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="ml-2 text-xs text-muted-foreground font-mono">{section.code.language}</span>
        </div>
        <pre className="p-4 bg-muted/30 overflow-x-auto text-sm font-mono leading-relaxed">
          <code>{section.code.snippet}</code>
        </pre>
        <div className="px-4 py-3 bg-muted/20 border-t border-border/30 text-sm text-muted-foreground">
          {section.code.explanation}
        </div>
      </div>
    )}
  </motion.div>
);

const LessonPage = () => {
  const { topic } = useParams<{ topic: string }>();
  const location = useLocation();

  // Derive category from URL path
  const category = location.pathname.startsWith('/3d-printing') ? '3d-printing' : 'programming';

  if (!topic) {
    return (
      <div className="min-h-screen bg-background pt-16">
        <Topbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
          <Link to="/"><Button><ArrowLeft className="h-4 w-4 mr-2" /> Go Home</Button></Link>
        </div>
      </div>
    );
  }

  const lessons = category === '3d-printing' ? printingLessons : programmingLessons;
  const lesson: LessonData | undefined = lessons[topic];

  if (!lesson) {
    return (
      <div className="min-h-screen bg-background pt-16">
        <Topbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Coming Soon!</h1>
          <p className="text-muted-foreground mb-4">This lesson is being prepared.</p>
          <Link to="/"><Button><ArrowLeft className="h-4 w-4 mr-2" /> Go Home</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <Topbar />

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm" className="rounded-full">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8 leading-tight">{lesson.title}</h1>

          <div className="space-y-10">
            {lesson.sections.map((section, i) => (
              <SectionBlock key={i} section={section} index={i} />
            ))}
          </div>

          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <h2 className="text-xl font-bold mb-4">Visual Reference</h2>
            <div dangerouslySetInnerHTML={{ __html: lesson.diagram }} />
          </motion.div>

          {/* Coding Quiz */}
          <CodingQuizSection quiz={lesson.codingQuiz} />
        </motion.div>
      </div>
    </div>
  );
};

export default LessonPage;
