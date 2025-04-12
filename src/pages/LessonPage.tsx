
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Topbar from '@/components/Topbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Simple lesson content placeholder - in a real app, this would come from a database or API
const getLessonContent = (category: string, topic: string) => {
  if (category === '3d-printing') {
    switch (topic) {
      case 'basics':
        return {
          title: '3D Printer Basics',
          content: `
            <h2>Getting Started with 3D Printing</h2>
            <p>3D printing is an additive manufacturing process that creates three-dimensional objects by depositing materials layer by layer. This guide will help you understand the fundamentals of 3D printing technology.</p>
            <h3>Types of 3D Printers</h3>
            <p>There are several types of 3D printers available for different purposes:</p>
            <ul>
              <li><strong>FDM (Fused Deposition Modeling)</strong>: The most common type, melts plastic filament and extrudes it layer by layer</li>
              <li><strong>SLA (Stereolithography)</strong>: Uses a laser to cure liquid resin into hardened plastic</li>
              <li><strong>SLS (Selective Laser Sintering)</strong>: Uses a laser to sinter powdered material</li>
            </ul>
          `
        };
      case 'filaments':
        return {
          title: 'Filament Types',
          content: `
            <h2>Understanding 3D Printing Filaments</h2>
            <p>Choosing the right filament is crucial for successful 3D printing. Different materials have different properties and applications.</p>
            <h3>Common Filament Types</h3>
            <ul>
              <li><strong>PLA (Polylactic Acid)</strong>: Biodegradable, easy to print, low warping</li>
              <li><strong>ABS (Acrylonitrile Butadiene Styrene)</strong>: Durable, heat-resistant, but prone to warping</li>
              <li><strong>PETG (Polyethylene Terephthalate Glycol)</strong>: Good balance between strength and printability</li>
              <li><strong>TPU (Thermoplastic Polyurethane)</strong>: Flexible, elastic material</li>
            </ul>
          `
        };
      // Additional topics would follow the same pattern
      default:
        return {
          title: 'Coming Soon',
          content: '<p>This lesson content is currently under development. Please check back later!</p>'
        };
    }
  } else if (category === 'programming') {
    switch (topic) {
      case 'javascript':
        return {
          title: 'JavaScript Programming',
          content: `
            <h2>Introduction to JavaScript</h2>
            <p>JavaScript is a high-level, interpreted programming language that is one of the core technologies of the World Wide Web.</p>
            <h3>Key Concepts</h3>
            <ul>
              <li><strong>Variables and Data Types</strong>: let, const, var, strings, numbers, booleans, arrays, objects</li>
              <li><strong>Functions</strong>: Regular functions, arrow functions, callbacks</li>
              <li><strong>DOM Manipulation</strong>: Interacting with HTML elements</li>
              <li><strong>Async JavaScript</strong>: Promises, async/await, fetch API</li>
            </ul>
            <pre><code>
// Example JavaScript code
function greeting(name) {
  return \`Hello, \${name}!\`;
}

console.log(greeting('World'));
            </code></pre>
          `
        };
      case 'python':
        return {
          title: 'Python Programming',
          content: `
            <h2>Introduction to Python</h2>
            <p>Python is a high-level, interpreted programming language known for its readability and versatility.</p>
            <h3>Key Concepts</h3>
            <ul>
              <li><strong>Variables and Data Types</strong>: strings, numbers, lists, dictionaries, tuples</li>
              <li><strong>Control Flow</strong>: if/else statements, loops</li>
              <li><strong>Functions</strong>: Defining and calling functions</li>
              <li><strong>Modules and Libraries</strong>: Importing and using libraries</li>
            </ul>
            <pre><code>
# Example Python code
def greeting(name):
    return f"Hello, {name}!"

print(greeting("World"))
            </code></pre>
          `
        };
      // Additional topics would follow the same pattern
      default:
        return {
          title: 'Coming Soon',
          content: '<p>This lesson content is currently under development. Please check back later!</p>'
        };
    }
  } else {
    return {
      title: 'Topic Not Found',
      content: '<p>The requested lesson could not be found.</p>'
    };
  }
};

const LessonPage = () => {
  const { category, topic } = useParams();
  const lessonContent = getLessonContent(category || '', topic || '');

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Topbar />
      <div className="container mx-auto pt-16 px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => window.history.back()}
            className="rounded-full"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6">{lessonContent.title}</h1>
          <div 
            className="prose dark:prose-invert max-w-none" 
            dangerouslySetInnerHTML={{ __html: lessonContent.content }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LessonPage;
