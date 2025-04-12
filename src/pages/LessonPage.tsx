
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
      case 'custom-supports':
        return {
          title: 'Custom Supports',
          content: `
            <h2>Mastering Custom Supports</h2>
            <p>Custom supports are crucial for complex 3D prints, allowing you to improve print quality while minimizing post-processing work.</p>
            <h3>When to Use Custom Supports</h3>
            <ul>
              <li>Complex overhangs and bridges</li>
              <li>Detailed models with fine features</li>
              <li>Prints that require minimal support marks</li>
            </ul>
            <h3>Popular Slicer Support Settings</h3>
            <p>Learn how to configure custom supports in popular slicers:</p>
            <ul>
              <li>Cura: Support blockers and enforcers</li>
              <li>PrusaSlicer: Paint-on supports</li>
              <li>Simplify3D: Support pillar placement</li>
            </ul>
          `
        };
      case 'bed-adhesion':
        return {
          title: 'Bed Adhesion',
          content: `
            <h2>Perfect Bed Adhesion Techniques</h2>
            <p>Good bed adhesion is the foundation of successful 3D printing. This guide covers everything you need to know about getting prints to stick properly.</p>
            <h3>Common Bed Surfaces</h3>
            <ul>
              <li>Glass beds: Smooth finish, requires adhesives</li>
              <li>PEI sheets: Excellent adhesion for many materials</li>
              <li>Buildtak: Strong adhesion for most filaments</li>
              <li>Magnetic flexible beds: Easy print removal</li>
            </ul>
            <h3>Adhesion Helpers</h3>
            <p>Different materials that can help with adhesion:</p>
            <ul>
              <li>Glue stick: Works well with PLA on glass</li>
              <li>Hairspray: Good for ABS on glass</li>
              <li>Blue painter's tape: Budget-friendly option</li>
              <li>Specialized 3D printing adhesives: Premium solutions</li>
            </ul>
          `
        };
      case '3d-scanning':
        return {
          title: '3D Scanning',
          content: `
            <h2>Introduction to 3D Scanning</h2>
            <p>3D scanning technology allows you to create digital models from physical objects, opening up new possibilities for 3D printing projects.</p>
            <h3>Types of 3D Scanners</h3>
            <ul>
              <li>Laser triangulation scanners</li>
              <li>Structured light scanners</li>
              <li>Photogrammetry systems</li>
              <li>Smartphone-based scanning apps</li>
            </ul>
            <h3>Scanning Process</h3>
            <p>Basic steps for successful 3D scanning:</p>
            <ol>
              <li>Prepare the object (remove reflective surfaces)</li>
              <li>Calibrate the scanner</li>
              <li>Perform the scan</li>
              <li>Process the point cloud data</li>
              <li>Convert to a solid mesh</li>
              <li>Clean up and repair the mesh</li>
              <li>Export for 3D printing</li>
            </ol>
          `
        };
      case 'finishing':
        return {
          title: 'Print Finishing',
          content: `
            <h2>Post-Processing and Finishing Techniques</h2>
            <p>Transform your raw 3D prints into professional-looking finished pieces with these techniques.</p>
            <h3>Sanding Methods</h3>
            <p>Progressive sanding with different grits:</p>
            <ol>
              <li>Start with 120-220 grit for rough surfaces</li>
              <li>Progress to 400-600 grit for smoother results</li>
              <li>Finish with 800-2000 grit for polishing preparation</li>
            </ol>
            <h3>Surface Treatments</h3>
            <ul>
              <li>Filler primers to hide layer lines</li>
              <li>Epoxy coatings for smooth, durable finishes</li>
              <li>Acetone vapor smoothing for ABS</li>
              <li>Polyurethane clear coats for protection</li>
            </ul>
            <h3>Painting Techniques</h3>
            <p>Achieve professional results with proper painting:</p>
            <ul>
              <li>Proper priming techniques</li>
              <li>Airbrushing for smooth finishes</li>
              <li>Brush painting tips and tricks</li>
              <li>Weathering and detail work</li>
            </ul>
          `
        };
      case 'upgrades':
        return {
          title: 'Printer Upgrades',
          content: `
            <h2>Essential 3D Printer Upgrades</h2>
            <p>Improve your 3D printer's performance, reliability and print quality with these valuable upgrades.</p>
            <h3>Hotend Upgrades</h3>
            <ul>
              <li>All-metal hotends for high-temperature printing</li>
              <li>Hardened steel nozzles for abrasive filaments</li>
              <li>Ruby-tipped nozzles for extreme durability</li>
              <li>Direct drive vs. Bowden extruder setups</li>
            </ul>
            <h3>Motion System Improvements</h3>
            <ul>
              <li>Linear rails for smoother, more precise movement</li>
              <li>Belt tensioners for consistent tension</li>
              <li>Stepper motor dampers for noise reduction</li>
              <li>TMC stepper drivers for silent operation</li>
            </ul>
            <h3>Control and Safety Upgrades</h3>
            <ul>
              <li>Mainboard upgrades with 32-bit processors</li>
              <li>Automatic bed leveling sensors</li>
              <li>Filament runout sensors</li>
              <li>Power loss recovery systems</li>
              <li>Thermal runaway protection</li>
            </ul>
          `
        };
      case 'materials':
        return {
          title: '3D Printing Materials',
          content: `
            <h2>Advanced 3D Printing Materials</h2>
            <p>Beyond basic filaments, discover specialized materials that enable unique properties and applications.</p>
            <h3>Engineering-Grade Filaments</h3>
            <ul>
              <li><strong>Nylon</strong>: Strong, durable, with excellent layer adhesion</li>
              <li><strong>Polycarbonate</strong>: Extremely durable with high impact resistance</li>
              <li><strong>PEEK</strong>: Ultra high-performance for industrial applications</li>
              <li><strong>PEI/ULTEM</strong>: High temperature resistance and strength</li>
            </ul>
            <h3>Composite Filaments</h3>
            <ul>
              <li>Carbon fiber reinforced: Enhanced rigidity</li>
              <li>Wood-filled: Natural wood appearance and properties</li>
              <li>Metal-filled: Metallic appearance and weight</li>
              <li>Ceramic-filled: Unique textures and properties</li>
            </ul>
            <h3>Specialty Materials</h3>
            <ul>
              <li>Conductive filaments for electronic applications</li>
              <li>Magnetic filaments for interactive projects</li>
              <li>Color-changing materials (heat, UV, or light sensitive)</li>
              <li>Dissolvable support materials (PVA, HIPS)</li>
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
