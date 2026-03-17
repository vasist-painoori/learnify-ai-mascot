
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Topbar from '@/components/Topbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

interface CodingQuiz {
  question: string;
  hint: string;
  expectedOutput: string;
}

interface LessonData {
  title: string;
  content: string;
  diagram: string;
  codingQuiz: CodingQuiz;
}

const CodingQuizSection = ({ quiz }: { quiz: CodingQuiz }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);

  const checkAnswer = () => {
    const cleaned = userAnswer.trim().toLowerCase();
    const expected = quiz.expectedOutput.trim().toLowerCase();
    setResult(cleaned === expected ? 'correct' : 'incorrect');
  };

  return (
    <div className="mt-8 p-6 rounded-xl border-2 border-primary/30 bg-primary/5">
      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
        🧪 Coding Quiz
      </h3>
      <p className="mb-3 text-foreground/80">{quiz.question}</p>
      <p className="text-sm text-muted-foreground mb-4">💡 Hint: {quiz.hint}</p>
      
      <label className="text-sm font-medium mb-2 block">Your answer (expected output):</label>
      <Textarea
        value={userAnswer}
        onChange={(e) => { setUserAnswer(e.target.value); setResult(null); }}
        placeholder="Type the expected output here..."
        className="mb-4 font-mono text-sm"
        rows={3}
      />
      
      <Button onClick={checkAnswer} disabled={!userAnswer.trim()}>
        Check Answer
      </Button>
      
      {result === 'correct' && (
        <div className="mt-4 p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 flex items-center gap-2">
          <CheckCircle className="h-5 w-5" /> Correct! Well done! 🎉
        </div>
      )}
      {result === 'incorrect' && (
        <div className="mt-4 p-3 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="h-5 w-5" /> Not quite. Try again!
          </div>
          <p className="text-sm">Expected output: <code className="font-mono bg-black/10 dark:bg-white/10 px-1 rounded">{quiz.expectedOutput}</code></p>
        </div>
      )}
    </div>
  );
};

const getLessonContent = (category: string, topic: string): LessonData | null => {
  if (category === '3d-printing') {
    const lessons: Record<string, LessonData> = {
      'basics': {
        title: '3D Printer Basics',
        content: `
          <h2>Getting Started with 3D Printing</h2>
          <p>3D printing is an additive manufacturing process that builds objects layer by layer from digital models. Unlike traditional manufacturing which cuts away material (subtractive), 3D printers deposit material precisely where it's needed. The most common type for beginners is FDM (Fused Deposition Modeling), which melts plastic filament and extrudes it through a heated nozzle onto a build platform.</p>
          <p>Every FDM printer has five essential components: the <strong>extruder</strong> (pushes filament), the <strong>hot end</strong> (melts it), the <strong>build plate</strong> (printing surface), <strong>stepper motors</strong> (precise movement on X/Y/Z axes), and the <strong>controller board</strong> (the brain coordinating everything). Understanding these parts helps you troubleshoot issues and get better prints from day one.</p>
        `,
        diagram: `
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:16px;background:#f0f4ff;border-radius:12px;border:2px solid #6366f1;">
            <div style="font-weight:bold;color:#4338ca;">FDM 3D Printing Process Flow</div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center;">
              <div style="padding:8px 16px;background:#6366f1;color:white;border-radius:8px;font-size:13px;">3D Model (.STL)</div>
              <span>→</span>
              <div style="padding:8px 16px;background:#6366f1;color:white;border-radius:8px;font-size:13px;">Slicer Software</div>
              <span>→</span>
              <div style="padding:8px 16px;background:#6366f1;color:white;border-radius:8px;font-size:13px;">G-Code</div>
              <span>→</span>
              <div style="padding:8px 16px;background:#6366f1;color:white;border-radius:8px;font-size:13px;">Printer</div>
              <span>→</span>
              <div style="padding:8px 16px;background:#6366f1;color:white;border-radius:8px;font-size:13px;">Finished Object</div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;width:100%;max-width:500px;">
              <div style="padding:8px;background:#e0e7ff;border-radius:8px;text-align:center;font-size:12px;"><strong>X-Axis</strong><br/>Left ↔ Right</div>
              <div style="padding:8px;background:#e0e7ff;border-radius:8px;text-align:center;font-size:12px;"><strong>Y-Axis</strong><br/>Front ↔ Back</div>
              <div style="padding:8px;background:#e0e7ff;border-radius:8px;text-align:center;font-size:12px;"><strong>Z-Axis</strong><br/>Up ↔ Down</div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "Given a 3D print with layer height of 0.2mm and a model that is 20mm tall, how many layers will the printer need? Write just the number.",
          hint: "Divide total height by layer height: 20 / 0.2",
          expectedOutput: "100"
        }
      },
      'filaments': {
        title: 'Filament Types',
        content: `
          <h2>Understanding 3D Printing Filaments</h2>
          <p>Choosing the right filament determines your print's strength, flexibility, temperature resistance, and appearance. PLA is the go-to beginner material — it's biodegradable, prints at low temperatures (190-220°C), and rarely warps. PETG is a great step up, offering more strength and slight flexibility while remaining easy to print. ABS is tougher and heat-resistant but requires an enclosure due to warping and fumes.</p>
          <p>For specialty applications, TPU gives rubber-like flexibility for phone cases or gaskets, Nylon provides excellent strength and wear resistance for mechanical parts, and PC (Polycarbonate) offers the highest impact resistance and temperature tolerance. Always store filament in airtight containers with desiccant — most materials absorb moisture which causes bubbling and poor print quality.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#f0fdf4;border-radius:12px;border:2px solid #22c55e;">
            <div style="font-weight:bold;color:#15803d;text-align:center;margin-bottom:12px;">Filament Comparison Chart</div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
              <div style="padding:10px;background:#dcfce7;border-radius:8px;text-align:center;">
                <div style="font-weight:bold;font-size:14px;">PLA</div>
                <div style="font-size:11px;">Easy • 190-220°C</div>
                <div style="font-size:11px;">Strength: ★★☆☆</div>
                <div style="font-size:11px;">Heat: ★☆☆☆</div>
              </div>
              <div style="padding:10px;background:#dcfce7;border-radius:8px;text-align:center;">
                <div style="font-weight:bold;font-size:14px;">PETG</div>
                <div style="font-size:11px;">Medium • 230-250°C</div>
                <div style="font-size:11px;">Strength: ★★★☆</div>
                <div style="font-size:11px;">Heat: ★★☆☆</div>
              </div>
              <div style="padding:10px;background:#dcfce7;border-radius:8px;text-align:center;">
                <div style="font-weight:bold;font-size:14px;">ABS</div>
                <div style="font-size:11px;">Hard • 220-250°C</div>
                <div style="font-size:11px;">Strength: ★★★☆</div>
                <div style="font-size:11px;">Heat: ★★★☆</div>
              </div>
              <div style="padding:10px;background:#dcfce7;border-radius:8px;text-align:center;">
                <div style="font-weight:bold;font-size:14px;">TPU</div>
                <div style="font-size:11px;">Medium • 220-250°C</div>
                <div style="font-size:11px;">Flexible: ★★★★</div>
                <div style="font-size:11px;">Heat: ★★☆☆</div>
              </div>
              <div style="padding:10px;background:#dcfce7;border-radius:8px;text-align:center;">
                <div style="font-weight:bold;font-size:14px;">Nylon</div>
                <div style="font-size:11px;">Hard • 240-260°C</div>
                <div style="font-size:11px;">Strength: ★★★★</div>
                <div style="font-size:11px;">Heat: ★★★☆</div>
              </div>
              <div style="padding:10px;background:#dcfce7;border-radius:8px;text-align:center;">
                <div style="font-weight:bold;font-size:14px;">PC</div>
                <div style="font-size:11px;">Expert • 260-310°C</div>
                <div style="font-size:11px;">Strength: ★★★★</div>
                <div style="font-size:11px;">Heat: ★★★★</div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "A spool of PLA filament weighs 1kg and costs $20. You print a model that uses 150g. How much did the filament cost for that print? Write the answer as: $X.XX",
          hint: "Cost per gram = $20 / 1000g, then multiply by 150g",
          expectedOutput: "$3.00"
        }
      },
      'slicers': {
        title: 'Slicer Software',
        content: `
          <h2>Mastering Slicer Software</h2>
          <p>A slicer converts your 3D model into G-code — the machine instructions your printer understands. It "slices" the model into horizontal layers and calculates the exact path the nozzle should follow. Popular free options include Cura (beginner-friendly with a huge community) and PrusaSlicer (excellent for advanced users). The slicer is where you control the most critical print settings.</p>
          <p>The three settings that impact your print the most are <strong>layer height</strong> (0.1mm for detail, 0.2mm standard, 0.3mm for speed), <strong>infill percentage</strong> (10-20% for decorative items, 40-100% for strong parts), and <strong>print speed</strong> (slower = better quality). Supports are auto-generated scaffolding for overhangs beyond 45°. Always preview your sliced model before printing to catch potential issues.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#fef3c7;border-radius:12px;border:2px solid #f59e0b;">
            <div style="font-weight:bold;color:#b45309;text-align:center;margin-bottom:12px;">Slicer Workflow</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:32px;height:32px;background:#f59e0b;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;flex-shrink:0;">1</div>
                <div style="padding:8px 12px;background:#fef9c3;border-radius:8px;flex:1;font-size:13px;"><strong>Import</strong> — Load .STL/.OBJ model</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:32px;height:32px;background:#f59e0b;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;flex-shrink:0;">2</div>
                <div style="padding:8px 12px;background:#fef9c3;border-radius:8px;flex:1;font-size:13px;"><strong>Orient</strong> — Position for strength & minimal supports</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:32px;height:32px;background:#f59e0b;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;flex-shrink:0;">3</div>
                <div style="padding:8px 12px;background:#fef9c3;border-radius:8px;flex:1;font-size:13px;"><strong>Configure</strong> — Set layer height, infill, speed, supports</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:32px;height:32px;background:#f59e0b;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;flex-shrink:0;">4</div>
                <div style="padding:8px 12px;background:#fef9c3;border-radius:8px;flex:1;font-size:13px;"><strong>Preview</strong> — Check layer-by-layer visualization</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:32px;height:32px;background:#f59e0b;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:14px;flex-shrink:0;">5</div>
                <div style="padding:8px 12px;background:#fef9c3;border-radius:8px;flex:1;font-size:13px;"><strong>Export</strong> — Save G-code to SD card or send via USB/Wi-Fi</div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "A model is 30mm tall. At 0.2mm layer height, the print takes 2 hours. If you switch to 0.3mm layer height (making it 1.5x faster per layer), approximately how many minutes will it take? Round to nearest whole number.",
          hint: "At 0.3mm: 30/0.3 = 100 layers vs 30/0.2 = 150 layers. Time ratio = 100/150 = 2/3 of original time.",
          expectedOutput: "80"
        }
      },
      'troubleshooting': {
        title: 'Print Troubleshooting',
        content: `
          <h2>Common 3D Printing Problems and Solutions</h2>
          <p>The most frequent issue beginners face is <strong>first layer adhesion failure</strong> — the print doesn't stick to the bed. This is almost always caused by an improperly leveled bed or the nozzle being too far from the surface. The fix is methodical bed leveling (paper test method), cleaning the surface with isopropyl alcohol, and ensuring proper bed temperature. A good first layer is the foundation of every successful print.</p>
          <p>Other common problems include <strong>stringing</strong> (thin threads between parts — fix with retraction settings), <strong>warping</strong> (corners lifting — use heated bed, brim, or enclosure), and <strong>layer shifts</strong> (misaligned layers — check belt tension and stepper motor current). The golden rule of troubleshooting: change only one setting at a time, then test. This way you know exactly what fixed the problem.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#fef2f2;border-radius:12px;border:2px solid #ef4444;">
            <div style="font-weight:bold;color:#dc2626;text-align:center;margin-bottom:12px;">Troubleshooting Decision Tree</div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="padding:8px 20px;background:#ef4444;color:white;border-radius:8px;font-size:13px;font-weight:bold;">Print Failed?</div>
              <div style="width:2px;height:12px;background:#ef4444;"></div>
              <div style="display:flex;gap:20px;align-items:flex-start;">
                <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                  <div style="padding:6px 12px;background:#fee2e2;border-radius:6px;font-size:12px;text-align:center;">First layer issue?</div>
                  <div style="padding:6px 12px;background:#fecaca;border-radius:6px;font-size:11px;text-align:center;">→ Re-level bed<br/>→ Clean surface<br/>→ Adjust Z-offset</div>
                </div>
                <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                  <div style="padding:6px 12px;background:#fee2e2;border-radius:6px;font-size:12px;text-align:center;">Stringing?</div>
                  <div style="padding:6px 12px;background:#fecaca;border-radius:6px;font-size:11px;text-align:center;">→ ↑ Retraction<br/>→ ↓ Temperature<br/>→ Enable combing</div>
                </div>
                <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                  <div style="padding:6px 12px;background:#fee2e2;border-radius:6px;font-size:12px;text-align:center;">Warping?</div>
                  <div style="padding:6px 12px;background:#fecaca;border-radius:6px;font-size:11px;text-align:center;">→ ↑ Bed temp<br/>→ Add brim/raft<br/>→ Use enclosure</div>
                </div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "Your retraction distance is set to 5mm and retraction speed to 40mm/s. How long does one retraction take in milliseconds? Write just the number.",
          hint: "Time = Distance / Speed. Convert seconds to milliseconds by multiplying by 1000.",
          expectedOutput: "125"
        }
      },
      'design': {
        title: 'Model Design',
        content: `
          <h2>3D Model Design for Printing</h2>
          <p>Designing for 3D printing is different from general 3D modeling because you must account for physical limitations. The most important rule is <strong>minimum wall thickness</strong> — walls should be at least 2x your nozzle diameter (typically 0.8mm with a 0.4mm nozzle). Overhangs beyond 45° require support structures, which leave marks on the surface. Smart designers orient parts to minimize overhangs or use chamfers instead.</p>
          <p>For beginners, TinkerCAD (browser-based, free) is perfect for simple models using basic shapes. Fusion 360 offers professional parametric modeling with a free hobbyist license. When exporting, ensure your model is "manifold" (watertight with no holes in the mesh). Always add 0.2-0.3mm tolerance gaps for parts that need to fit together — printers aren't perfectly precise, and materials expand slightly.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#f0f9ff;border-radius:12px;border:2px solid #0ea5e9;">
            <div style="font-weight:bold;color:#0369a1;text-align:center;margin-bottom:12px;">Design Rules for 3D Printing</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
              <div style="padding:10px;background:#e0f2fe;border-radius:8px;text-align:center;">
                <div style="font-size:24px;">📐</div>
                <div style="font-weight:bold;font-size:13px;">Wall Thickness</div>
                <div style="font-size:11px;">Min 0.8mm (2x nozzle)</div>
              </div>
              <div style="padding:10px;background:#e0f2fe;border-radius:8px;text-align:center;">
                <div style="font-size:24px;">📏</div>
                <div style="font-weight:bold;font-size:13px;">Overhangs</div>
                <div style="font-size:11px;">Max 45° without support</div>
              </div>
              <div style="padding:10px;background:#e0f2fe;border-radius:8px;text-align:center;">
                <div style="font-size:24px;">🔩</div>
                <div style="font-weight:bold;font-size:13px;">Tolerances</div>
                <div style="font-size:11px;">0.2-0.3mm for fit</div>
              </div>
              <div style="padding:10px;background:#e0f2fe;border-radius:8px;text-align:center;">
                <div style="font-size:24px;">🌉</div>
                <div style="font-weight:bold;font-size:13px;">Bridges</div>
                <div style="font-size:11px;">Keep under 5mm span</div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "You're designing a box with a 0.4mm nozzle. The minimum wall thickness should be 2x the nozzle diameter. If you want 3 perimeter walls, what is the total wall thickness in mm? Write as X.Xmm",
          hint: "Min wall per perimeter = 0.4mm. Total = 0.4 × 3 = ?",
          expectedOutput: "1.2mm"
        }
      },
      'post-processing': {
        title: 'Post-Processing',
        content: `
          <h2>Post-Processing Techniques</h2>
          <p>Post-processing transforms rough 3D prints into professional-looking pieces. The basic workflow starts with <strong>support removal</strong> (flush cutters and pliers), followed by <strong>sanding</strong> — start at 80-120 grit to remove layer lines, progress through 220-400 grit for smoothness, and finish at 600-800+ for a polished feel. Wet sanding with water gives the best results and prevents clogging.</p>
          <p>For advanced finishing, ABS can be vapor-smoothed with acetone (never heat it — use a sealed container with acetone-soaked paper towels). Apply filler primer spray to hide remaining layer lines, then paint with spray, brush, or airbrush. Always clean prints with isopropyl alcohol before painting. A clear coat (matte or gloss) protects the finish and gives a professional look.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#faf5ff;border-radius:12px;border:2px solid #a855f7;">
            <div style="font-weight:bold;color:#7c3aed;text-align:center;margin-bottom:12px;">Post-Processing Pipeline</div>
            <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;justify-content:center;">
              <div style="padding:8px 12px;background:#ede9fe;border-radius:8px;font-size:12px;text-align:center;"><strong>1. Remove</strong><br/>Supports</div>
              <span style="font-size:18px;">→</span>
              <div style="padding:8px 12px;background:#ede9fe;border-radius:8px;font-size:12px;text-align:center;"><strong>2. Sand</strong><br/>80→400 grit</div>
              <span style="font-size:18px;">→</span>
              <div style="padding:8px 12px;background:#ede9fe;border-radius:8px;font-size:12px;text-align:center;"><strong>3. Fill</strong><br/>Primer/Filler</div>
              <span style="font-size:18px;">→</span>
              <div style="padding:8px 12px;background:#ede9fe;border-radius:8px;font-size:12px;text-align:center;"><strong>4. Paint</strong><br/>Spray/Brush</div>
              <span style="font-size:18px;">→</span>
              <div style="padding:8px 12px;background:#ede9fe;border-radius:8px;font-size:12px;text-align:center;"><strong>5. Seal</strong><br/>Clear Coat</div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "You sand a print using these grits in order: 80, 120, 220, 400, 800. How many sanding steps is that? And if each step takes 5 minutes, what's the total time? Write as: X steps, XX minutes",
          hint: "Count the grits listed, then multiply by 5.",
          expectedOutput: "5 steps, 25 minutes"
        }
      },
      'settings': {
        title: 'Advanced Settings',
        content: `
          <h2>Advanced 3D Printer Settings</h2>
          <p>Beyond basic settings, <strong>Linear/Pressure Advance</strong> compensates for pressure buildup in the nozzle, eliminating blobs at corners and improving dimensional accuracy. To calibrate flow rate, print a single-wall cube, measure the wall thickness with calipers, then adjust: New Flow = (Expected ÷ Measured) × Current Flow. This ensures your printer extrudes exactly the right amount of material.</p>
          <p><strong>Adaptive layer heights</strong> vary layer thickness based on geometry — thin layers for curves, thick for straight walls — cutting print time while keeping detail. <strong>Ironing</strong> passes the hot nozzle over top surfaces at low flow (5-10%) to create glass-smooth tops. For infill, gyroid pattern gives the best strength-to-weight ratio, while cubic works well for all-around strength.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#f0fdf4;border-radius:12px;border:2px solid #22c55e;">
            <div style="font-weight:bold;color:#15803d;text-align:center;margin-bottom:12px;">Advanced Settings Impact</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
              <div style="padding:10px;background:#dcfce7;border-radius:8px;">
                <div style="font-weight:bold;font-size:13px;">Pressure Advance</div>
                <div style="font-size:11px;">✓ Cleaner corners</div>
                <div style="font-size:11px;">✓ Better dimensions</div>
              </div>
              <div style="padding:10px;background:#dcfce7;border-radius:8px;">
                <div style="font-weight:bold;font-size:13px;">Adaptive Layers</div>
                <div style="font-size:11px;">✓ Faster prints</div>
                <div style="font-size:11px;">✓ Detail where needed</div>
              </div>
              <div style="padding:10px;background:#dcfce7;border-radius:8px;">
                <div style="font-weight:bold;font-size:13px;">Ironing</div>
                <div style="font-size:11px;">✓ Smooth top surfaces</div>
                <div style="font-size:11px;">✓ 5-10% flow rate</div>
              </div>
              <div style="padding:10px;background:#dcfce7;border-radius:8px;">
                <div style="font-weight:bold;font-size:13px;">Gyroid Infill</div>
                <div style="font-size:11px;">✓ Best strength/weight</div>
                <div style="font-size:11px;">✓ Good for flex parts</div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "Your current flow rate is 100%. You print a single-wall cube expecting 0.4mm walls, but measure 0.44mm. What should the new flow rate be? Round to nearest whole number and add %.",
          hint: "New flow = (Expected / Measured) × Current = (0.4 / 0.44) × 100",
          expectedOutput: "91%"
        }
      },
      'multi-material': {
        title: 'Multi-Material Printing',
        content: `
          <h2>Multi-Material and Multi-Color Printing</h2>
          <p>Multi-material printing lets you combine different colors or materials in a single print. The simplest method is a <strong>manual filament change</strong> — the slicer pauses at a specific layer, you swap filament, and printing resumes. For automated changes, systems like Prusa's MMU or Bambu Lab's AMS splice multiple filaments before they reach the extruder, allowing color changes within the same layer.</p>
          <p>The main challenge is <strong>purging</strong> — old material must be fully flushed before the new one prints cleanly. This is handled by purge towers (blocks printed alongside your model). Material compatibility matters too: PLA bonds well with PETG, but PLA and TPU don't stick together. Dual-extruder printers avoid purging by using separate nozzles, but require precise calibration of the offset between heads.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#fff7ed;border-radius:12px;border:2px solid #f97316;">
            <div style="font-weight:bold;color:#c2410c;text-align:center;margin-bottom:12px;">Multi-Material Methods</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div style="display:flex;gap:8px;align-items:stretch;">
                <div style="flex:1;padding:10px;background:#ffedd5;border-radius:8px;text-align:center;">
                  <div style="font-weight:bold;font-size:13px;">Manual Swap</div>
                  <div style="font-size:11px;">Simple • Layer-based only • Free</div>
                </div>
                <div style="flex:1;padding:10px;background:#ffedd5;border-radius:8px;text-align:center;">
                  <div style="font-weight:bold;font-size:13px;">Filament Splicer</div>
                  <div style="font-size:11px;">Automated • Within layers • ~$300</div>
                </div>
                <div style="flex:1;padding:10px;background:#ffedd5;border-radius:8px;text-align:center;">
                  <div style="font-weight:bold;font-size:13px;">Dual Extruder</div>
                  <div style="font-size:11px;">No purging • Complex cal. • $500+</div>
                </div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "A purge tower uses 3mm³ of filament per color change. Your print has 4 colors and makes 120 color changes total. How many mm³ of filament is wasted on purging? Write just the number.",
          hint: "Total purge = number of color changes × purge per change",
          expectedOutput: "360"
        }
      },
      'large-format': {
        title: 'Large Format Printing',
        content: `
          <h2>Large Format 3D Printing</h2>
          <p>Large format printing creates objects beyond typical printer volumes (300mm+). The key challenge is <strong>warping</strong> — larger parts have more thermal contraction forces, making material choice critical. PLA and PETG warp less than ABS. An enclosure maintaining consistent temperature is almost mandatory. Using larger nozzles (0.6-1.0mm) dramatically reduces print time — a 0.8mm nozzle with 0.4mm layers prints roughly 4x faster than a standard 0.4mm nozzle at 0.2mm layers.</p>
          <p>For objects exceeding your printer's build volume, <strong>segment the model</strong> into interlocking pieces. Design dovetail or pin joints at the split points, add 0.2mm tolerance for the joints, and glue them together after printing. Print duration can span days, so use a printer with power failure recovery and monitor remotely with a camera. Plan filament — a 30cm cube at 15% infill can easily use 500g+ of material.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#ecfeff;border-radius:12px;border:2px solid #06b6d4;">
            <div style="font-weight:bold;color:#0e7490;text-align:center;margin-bottom:12px;">Large Print Strategy</div>
            <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;justify-content:center;">
              <div style="padding:8px 12px;background:#cffafe;border-radius:8px;font-size:12px;text-align:center;">
                <strong>Design</strong><br/>Segment if needed
              </div>
              <span>→</span>
              <div style="padding:8px 12px;background:#cffafe;border-radius:8px;font-size:12px;text-align:center;">
                <strong>Optimize</strong><br/>Large nozzle + thick layers
              </div>
              <span>→</span>
              <div style="padding:8px 12px;background:#cffafe;border-radius:8px;font-size:12px;text-align:center;">
                <strong>Environment</strong><br/>Enclosure + stable temp
              </div>
              <span>→</span>
              <div style="padding:8px 12px;background:#cffafe;border-radius:8px;font-size:12px;text-align:center;">
                <strong>Monitor</strong><br/>Camera + power backup
              </div>
              <span>→</span>
              <div style="padding:8px 12px;background:#cffafe;border-radius:8px;font-size:12px;text-align:center;">
                <strong>Assemble</strong><br/>Glue segments
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "A model is 450mm tall. Your printer's max Z is 300mm. You split it into equal segments. How many segments do you need? (Round up to next whole number)",
          hint: "450 / 300 = 1.5, but you can't print half a segment, so round up.",
          expectedOutput: "2"
        }
      },
      'maintenance': {
        title: 'Maintenance & Care',
        content: `
          <h2>3D Printer Maintenance</h2>
          <p>Regular maintenance prevents most printing failures. <strong>Before every print</strong>: check bed level and clean the surface with isopropyl alcohol. <strong>Weekly</strong>: clean the nozzle exterior with a brass brush while hot, check belt tension (they should twang like a guitar string, not be loose or overtight), and remove debris from linear rails. <strong>Monthly</strong>: lubricate linear rails with PTFE-based lubricant and clean cooling fans with compressed air.</p>
          <p>The most common maintenance task is <strong>clearing nozzle clogs</strong>. Use the "cold pull" method: heat to printing temperature, push clean filament through, cool to ~90°C while keeping pressure, then pull the filament out — it should come out with debris. For stubborn clogs, use acupuncture needles or replace the nozzle entirely. Keep spare nozzles on hand — they're cheap and wear out over time, especially with abrasive filaments like carbon fiber.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#fdf4ff;border-radius:12px;border:2px solid #d946ef;">
            <div style="font-weight:bold;color:#a21caf;text-align:center;margin-bottom:12px;">Maintenance Schedule</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:90px;padding:6px;background:#f5d0fe;border-radius:6px;font-size:12px;font-weight:bold;text-align:center;">Every Print</div>
                <div style="flex:1;padding:6px 10px;background:#fae8ff;border-radius:6px;font-size:12px;">Check bed level • Clean surface • Inspect first layer</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:90px;padding:6px;background:#f5d0fe;border-radius:6px;font-size:12px;font-weight:bold;text-align:center;">Weekly</div>
                <div style="flex:1;padding:6px 10px;background:#fae8ff;border-radius:6px;font-size:12px;">Clean nozzle • Check belts • Remove debris from rails</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:90px;padding:6px;background:#f5d0fe;border-radius:6px;font-size:12px;font-weight:bold;text-align:center;">Monthly</div>
                <div style="flex:1;padding:6px 10px;background:#fae8ff;border-radius:6px;font-size:12px;">Lubricate rails • Clean fans • Check for loose screws</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:90px;padding:6px;background:#f5d0fe;border-radius:6px;font-size:12px;font-weight:bold;text-align:center;">Quarterly</div>
                <div style="flex:1;padding:6px 10px;background:#fae8ff;border-radius:6px;font-size:12px;">Deep clean extruder • Check wiring • Inspect belts • Update firmware</div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "A brass nozzle lasts about 500 print hours. You print an average of 4 hours per day, 5 days a week. After how many weeks should you replace the nozzle?",
          hint: "Hours per week = 4 × 5 = 20. Weeks = 500 / 20",
          expectedOutput: "25"
        }
      },
      'custom-supports': {
        title: 'Custom Supports',
        content: `
          <h2>Custom Support Structures</h2>
          <p>Auto-generated supports work for most prints, but custom supports give you control over exactly where support material goes. This reduces waste, improves surface finish on supported areas, and makes removal easier. In PrusaSlicer, you can paint supports directly onto the model. In Cura, support blockers let you prevent supports in specific areas while enforcing them in others.</p>
          <p><strong>Tree supports</strong> are a game-changer — they grow branch-like structures from the build plate up to overhangs, using less material and leaving fewer marks than traditional grid supports. For best results, use a support interface (a denser layer between support and model) with 0.1-0.2mm gap for easy removal. Organic supports in newer slicers combine tree-like efficiency with traditional reliability.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#f0f9ff;border-radius:12px;border:2px solid #3b82f6;">
            <div style="font-weight:bold;color:#1d4ed8;text-align:center;margin-bottom:12px;">Support Types Comparison</div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
              <div style="padding:10px;background:#dbeafe;border-radius:8px;text-align:center;">
                <div style="font-weight:bold;font-size:13px;">Grid/Linear</div>
                <div style="font-size:11px;">✓ Reliable</div>
                <div style="font-size:11px;">✗ More material</div>
                <div style="font-size:11px;">✗ Harder removal</div>
              </div>
              <div style="padding:10px;background:#dbeafe;border-radius:8px;text-align:center;">
                <div style="font-weight:bold;font-size:13px;">Tree</div>
                <div style="font-size:11px;">✓ Less material</div>
                <div style="font-size:11px;">✓ Easy removal</div>
                <div style="font-size:11px;">✗ Slower to slice</div>
              </div>
              <div style="padding:10px;background:#dbeafe;border-radius:8px;text-align:center;">
                <div style="font-weight:bold;font-size:13px;">Custom Painted</div>
                <div style="font-size:11px;">✓ Full control</div>
                <div style="font-size:11px;">✓ Minimal waste</div>
                <div style="font-size:11px;">✗ Manual effort</div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "A print uses 30g of support material with grid supports. Tree supports use 40% less material. How many grams of support would tree supports use?",
          hint: "40% less means you use 60% of the original: 30 × 0.6",
          expectedOutput: "18"
        }
      },
      'bed-adhesion': {
        title: 'Bed Adhesion',
        content: `
          <h2>Mastering Bed Adhesion</h2>
          <p>Good bed adhesion means your print sticks during printing but releases easily when done. The <strong>build surface</strong> matters most: PEI sheets (smooth or textured) are the gold standard — PLA sticks when hot and pops off when cooled. Glass beds give perfectly flat first layers but need adhesive helpers. Magnetic flexible plates let you flex the surface to pop prints off easily.</p>
          <p>Beyond the surface, your <strong>first layer settings</strong> are critical. Print the first layer slower (20mm/s), slightly squished (Z-offset tuning), and hotter (bed temp +5°C from normal). A <strong>brim</strong> adds thin rings around your print's base for extra grip — great for tall/narrow prints. A <strong>raft</strong> prints a thick platform underneath — useful for warpy materials but wastes material and affects bottom surface quality.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#fffbeb;border-radius:12px;border:2px solid #eab308;">
            <div style="font-weight:bold;color:#a16207;text-align:center;margin-bottom:12px;">Adhesion Methods</div>
            <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
              <div style="padding:10px;background:#fef9c3;border-radius:8px;text-align:center;min-width:100px;">
                <div style="font-weight:bold;font-size:13px;">Skirt</div>
                <div style="font-size:11px;">Lines around print</div>
                <div style="font-size:11px;">Tests extrusion</div>
                <div style="font-size:11px;">No added grip</div>
              </div>
              <div style="padding:10px;background:#fef9c3;border-radius:8px;text-align:center;min-width:100px;">
                <div style="font-weight:bold;font-size:13px;">Brim</div>
                <div style="font-size:11px;">Flat rings on base</div>
                <div style="font-size:11px;">Good grip</div>
                <div style="font-size:11px;">Easy to remove</div>
              </div>
              <div style="padding:10px;background:#fef9c3;border-radius:8px;text-align:center;min-width:100px;">
                <div style="font-weight:bold;font-size:13px;">Raft</div>
                <div style="font-size:11px;">Full platform below</div>
                <div style="font-size:11px;">Best grip</div>
                <div style="font-size:11px;">Wastes material</div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "A brim with 8 lines at 0.4mm line width adds how many mm of extra width around the print on each side? Write as X.Xmm",
          hint: "Total brim width = number of lines × line width = 8 × 0.4",
          expectedOutput: "3.2mm"
        }
      },
      '3d-scanning': {
        title: '3D Scanning',
        content: `
          <h2>3D Scanning for Printing</h2>
          <p>3D scanning captures real-world objects as digital models you can modify and reprint. <strong>Photogrammetry</strong> is the most accessible method — take 50-200 photos of an object from all angles, then software like Meshroom (free) or RealityCapture stitches them into a 3D model. It works best on textured, matte objects in diffused lighting. Shiny or transparent objects need to be coated with scanning spray first.</p>
          <p>Dedicated <strong>structured light scanners</strong> (like Creality Scan or Revopoint) project patterns onto objects and capture the deformation to calculate 3D geometry. They're faster and more precise than photogrammetry but cost $300-2000+. After scanning, you'll need to clean the mesh — fill holes, smooth noise, and reduce polygon count — using MeshMixer or Blender before the model is print-ready.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#f0fdf4;border-radius:12px;border:2px solid #10b981;">
            <div style="font-weight:bold;color:#047857;text-align:center;margin-bottom:12px;">3D Scanning Pipeline</div>
            <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;justify-content:center;">
              <div style="padding:8px 12px;background:#d1fae5;border-radius:8px;font-size:12px;text-align:center;"><strong>Capture</strong><br/>Photos or Scanner</div>
              <span>→</span>
              <div style="padding:8px 12px;background:#d1fae5;border-radius:8px;font-size:12px;text-align:center;"><strong>Process</strong><br/>Generate Point Cloud</div>
              <span>→</span>
              <div style="padding:8px 12px;background:#d1fae5;border-radius:8px;font-size:12px;text-align:center;"><strong>Mesh</strong><br/>Create 3D Surface</div>
              <span>→</span>
              <div style="padding:8px 12px;background:#d1fae5;border-radius:8px;font-size:12px;text-align:center;"><strong>Clean</strong><br/>Fix Holes & Noise</div>
              <span>→</span>
              <div style="padding:8px 12px;background:#d1fae5;border-radius:8px;font-size:12px;text-align:center;"><strong>Print</strong><br/>Slice & Fabricate</div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "For photogrammetry, you take 120 photos at 12MB each. What's the total storage needed in GB? Round to 1 decimal place and add GB.",
          hint: "Total MB = 120 × 12 = 1440MB. Convert to GB: 1440 / 1024",
          expectedOutput: "1.4GB"
        }
      },
      'finishing': {
        title: 'Print Finishing',
        content: `
          <h2>Professional Print Finishing</h2>
          <p>Professional finishing goes beyond basic sanding. <strong>Filler primer</strong> (like Rust-Oleum Filler Primer) is sprayed in light coats to fill layer lines — apply 2-3 coats with light sanding between each. For a glass-smooth finish, follow with spot putty on any remaining imperfections, sand with 400-600 grit, then apply a final primer coat before painting.</p>
          <p>For painting, <strong>spray paint</strong> gives the most even coverage — hold 20-30cm away, use sweeping motions, and apply 3-4 light coats rather than one thick coat. Let each coat dry 15-20 minutes. For detailed models, acrylic brush painting with thin layers works best. Finish with a clear coat — gloss for a shiny look, satin for realistic, or matte for a professional appearance. UV-resistant clear coat prevents yellowing over time.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#fef2f2;border-radius:12px;border:2px solid #f43f5e;">
            <div style="font-weight:bold;color:#be123c;text-align:center;margin-bottom:12px;">Finishing Quality Levels</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:80px;padding:6px;background:#fecdd3;border-radius:6px;font-size:12px;font-weight:bold;text-align:center;">Basic</div>
                <div style="flex:1;padding:6px 10px;background:#ffe4e6;border-radius:6px;font-size:12px;">Sand → Paint = Visible layer lines, quick finish</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:80px;padding:6px;background:#fecdd3;border-radius:6px;font-size:12px;font-weight:bold;text-align:center;">Good</div>
                <div style="flex:1;padding:6px 10px;background:#ffe4e6;border-radius:6px;font-size:12px;">Sand → Filler Primer → Paint → Clear Coat = Smooth finish</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:80px;padding:6px;background:#fecdd3;border-radius:6px;font-size:12px;font-weight:bold;text-align:center;">Pro</div>
                <div style="flex:1;padding:6px 10px;background:#ffe4e6;border-radius:6px;font-size:12px;">Sand → Fill → Prime → Sand → Paint × 3 → Clear × 2 = Showroom quality</div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "You apply 3 coats of paint with 15 min drying between each, then 2 coats of clear coat with 20 min drying between. Total drying time only (not painting time) in minutes?",
          hint: "Paint drying: 2 gaps × 15min = 30min. Clear coat drying: 1 gap × 20min = 20min. Total = ?",
          expectedOutput: "50"
        }
      },
      'upgrades': {
        title: 'Printer Upgrades',
        content: `
          <h2>Essential Printer Upgrades</h2>
          <p>The most impactful upgrade for any printer is an <strong>all-metal hotend</strong> — it replaces the PTFE-lined version and lets you print at temperatures above 240°C, unlocking materials like Nylon, PC, and ABS without worrying about PTFE degradation. A <strong>hardened steel nozzle</strong> (replacing brass) handles abrasive filaments like carbon fiber and glow-in-the-dark without wearing out, though it transfers heat slightly less efficiently.</p>
          <p>Other high-value upgrades include a <strong>direct drive extruder</strong> (better for flexible filaments by shortening the filament path), <strong>auto bed leveling</strong> sensors like BLTouch (eliminates manual leveling), and <strong>silent stepper drivers</strong> (TMC2209) that make your printer whisper-quiet. A Raspberry Pi running Klipper firmware can dramatically improve print speed and quality through better motion planning and input shaping.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#eff6ff;border-radius:12px;border:2px solid #3b82f6;">
            <div style="font-weight:bold;color:#1d4ed8;text-align:center;margin-bottom:12px;">Upgrade Priority Tier List</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:60px;padding:6px;background:#2563eb;color:white;border-radius:6px;font-size:12px;font-weight:bold;text-align:center;">S Tier</div>
                <div style="flex:1;padding:6px 10px;background:#dbeafe;border-radius:6px;font-size:12px;">All-metal hotend • Auto bed leveling • Klipper firmware</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:60px;padding:6px;background:#3b82f6;color:white;border-radius:6px;font-size:12px;font-weight:bold;text-align:center;">A Tier</div>
                <div style="flex:1;padding:6px 10px;background:#dbeafe;border-radius:6px;font-size:12px;">Direct drive extruder • PEI build plate • Silent drivers</div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <div style="width:60px;padding:6px;background:#60a5fa;color:white;border-radius:6px;font-size:12px;font-weight:bold;text-align:center;">B Tier</div>
                <div style="flex:1;padding:6px 10px;background:#dbeafe;border-radius:6px;font-size:12px;">Hardened nozzle • Enclosure • LED lighting • Cable chains</div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "A BLTouch sensor probes 25 points on the bed in a 5x5 grid. If probing each point takes 3 seconds with 2 seconds travel between points, how many seconds does the full probing sequence take? (No travel after last point)",
          hint: "Probe time = 25 × 3 = 75s. Travel time = 24 gaps × 2 = 48s. Total = ?",
          expectedOutput: "123"
        }
      },
      'materials': {
        title: '3D Printing Materials',
        content: `
          <h2>Advanced 3D Printing Materials</h2>
          <p>Beyond standard filaments, <strong>composite materials</strong> add fibers to a base polymer for enhanced properties. Carbon fiber PLA/PETG/Nylon adds stiffness and a premium matte finish — but requires a hardened nozzle as the fibers are abrasive. Wood-fill PLA contains wood dust for a natural look that can be sanded and stained like real wood. Metal-fill filaments (copper, bronze, steel) are extremely heavy and can be polished to look like real metal.</p>
          <p><strong>Engineering materials</strong> like ASA (UV-resistant ABS alternative for outdoor use), Polycarbonate (extremely strong, needs 260°C+), and PEEK/ULTEM (aerospace-grade, needs 400°C+ hotends) serve industrial applications. For resin printing, standard resins give fine detail, tough resins mimic ABS properties, flexible resins work for gaskets, and castable resins are used in jewelry making for lost-wax casting.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#fdf2f8;border-radius:12px;border:2px solid #ec4899;">
            <div style="font-weight:bold;color:#be185d;text-align:center;margin-bottom:12px;">Material Categories</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
              <div style="padding:10px;background:#fce7f3;border-radius:8px;">
                <div style="font-weight:bold;font-size:13px;">Standard</div>
                <div style="font-size:11px;">PLA, PETG, ABS, TPU</div>
                <div style="font-size:11px;">190-250°C • Easy to print</div>
              </div>
              <div style="padding:10px;background:#fce7f3;border-radius:8px;">
                <div style="font-weight:bold;font-size:13px;">Composite</div>
                <div style="font-size:11px;">CF, Wood, Metal fill</div>
                <div style="font-size:11px;">Need hardened nozzle</div>
              </div>
              <div style="padding:10px;background:#fce7f3;border-radius:8px;">
                <div style="font-weight:bold;font-size:13px;">Engineering</div>
                <div style="font-size:11px;">ASA, PC, Nylon, PEEK</div>
                <div style="font-size:11px;">240-400°C • Enclosure req.</div>
              </div>
              <div style="padding:10px;background:#fce7f3;border-radius:8px;">
                <div style="font-weight:bold;font-size:13px;">Resin</div>
                <div style="font-size:11px;">Standard, Tough, Flex</div>
                <div style="font-size:11px;">SLA/DLP printers only</div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: "Carbon fiber filament costs $45/kg. Standard PLA costs $20/kg. You need 200g for a print. How much more expensive is CF vs PLA for this print? Write as $X.XX",
          hint: "CF cost for 200g: 45 × 0.2 = $9. PLA cost: 20 × 0.2 = $4. Difference = ?",
          expectedOutput: "$5.00"
        }
      },
    };
    return lessons[topic] || null;
  }

  // Programming lessons
  if (category === 'programming') {
    const lessons: Record<string, LessonData> = {
      'javascript': {
        title: 'JavaScript',
        content: `
          <h2>JavaScript Fundamentals</h2>
          <p>JavaScript is the language of the web — it runs in every browser and powers interactive websites, servers (Node.js), and mobile apps. Variables are declared with <code>let</code> (mutable) or <code>const</code> (immutable). JavaScript is dynamically typed, meaning a variable can hold any type: strings, numbers, booleans, objects, or arrays. Functions are first-class citizens — they can be stored in variables, passed as arguments, and returned from other functions.</p>
          <p>Modern JavaScript (ES6+) introduced arrow functions (<code>const add = (a, b) => a + b</code>), template literals (<code>\`Hello \${name}\`</code>), destructuring, spread operators, and promises for async operations. The language uses prototypal inheritance rather than classical classes, though the <code>class</code> syntax provides familiar structure. Understanding the event loop and asynchronous patterns (callbacks → promises → async/await) is essential for real-world JS development.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#fef9c3;border-radius:12px;border:2px solid #eab308;">
            <div style="font-weight:bold;color:#a16207;text-align:center;margin-bottom:12px;">JavaScript Data Types</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
              <div style="padding:10px;background:#fef3c7;border-radius:8px;">
                <div style="font-weight:bold;font-size:13px;">Primitives</div>
                <div style="font-size:11px;">string, number, boolean</div>
                <div style="font-size:11px;">null, undefined, symbol, bigint</div>
              </div>
              <div style="padding:10px;background:#fef3c7;border-radius:8px;">
                <div style="font-weight:bold;font-size:13px;">Reference Types</div>
                <div style="font-size:11px;">Object, Array, Function</div>
                <div style="font-size:11px;">Date, RegExp, Map, Set</div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: 'What is the output of: console.log(typeof null)',
          hint: "This is a famous JavaScript quirk. typeof null doesn't return 'null'.",
          expectedOutput: "object"
        }
      },
      'python': {
        title: 'Python',
        content: `
          <h2>Python Fundamentals</h2>
          <p>Python's philosophy is "readability counts" — it uses indentation instead of braces to define code blocks, making it one of the most readable languages. Variables don't need type declarations (<code>name = "Alice"</code>), and Python supports multiple paradigms: procedural, object-oriented, and functional. Its standard library is enormous, earning it the nickname "batteries included" — from file I/O to web servers to data science, there's likely a built-in module for it.</p>
          <p>Python's key data structures are lists (<code>[1, 2, 3]</code>), dictionaries (<code>{"key": "value"}</code>), tuples (immutable lists), and sets (unique values). List comprehensions (<code>[x*2 for x in range(5)]</code>) provide elegant one-line transformations. Python uses duck typing — if it walks like a duck and quacks like a duck, it's a duck. This means you focus on what an object can do, not what type it is.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#dbeafe;border-radius:12px;border:2px solid #3b82f6;">
            <div style="font-weight:bold;color:#1d4ed8;text-align:center;margin-bottom:12px;">Python Data Structures</div>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
              <div style="padding:8px;background:#eff6ff;border-radius:8px;text-align:center;font-size:12px;"><strong>List</strong><br/>[1, 2, 3] — Ordered, Mutable</div>
              <div style="padding:8px;background:#eff6ff;border-radius:8px;text-align:center;font-size:12px;"><strong>Tuple</strong><br/>(1, 2, 3) — Ordered, Immutable</div>
              <div style="padding:8px;background:#eff6ff;border-radius:8px;text-align:center;font-size:12px;"><strong>Dict</strong><br/>{"a": 1} — Key-Value pairs</div>
              <div style="padding:8px;background:#eff6ff;border-radius:8px;text-align:center;font-size:12px;"><strong>Set</strong><br/>{1, 2, 3} — Unique values</div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: 'What is the output of: print(len([x for x in range(10) if x % 2 == 0]))',
          hint: "range(10) gives 0-9. Even numbers in that range: 0, 2, 4, 6, 8. Count them.",
          expectedOutput: "5"
        }
      },
      'java': {
        title: 'Java',
        content: `
          <h2>Java Fundamentals</h2>
          <p>Java follows the "write once, run anywhere" principle — code compiles to bytecode that runs on any Java Virtual Machine (JVM). It's strictly object-oriented: everything lives inside classes, and every file must have a class matching its filename. Java is statically typed, so you must declare variable types (<code>String name = "Alice";</code>). This catches errors at compile time rather than runtime, making large codebases more maintainable.</p>
          <p>Java's key concepts include inheritance (<code>extends</code>), interfaces (<code>implements</code>), and access modifiers (public, private, protected). The language features automatic garbage collection, strong exception handling (try-catch-finally), and a massive ecosystem of libraries and frameworks (Spring Boot for web, Android SDK for mobile). Generics (<code>List&lt;String&gt;</code>) provide type safety for collections without sacrificing reusability.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#dcfce7;border-radius:12px;border:2px solid #22c55e;">
            <div style="font-weight:bold;color:#15803d;text-align:center;margin-bottom:12px;">Java Compilation Flow</div>
            <div style="display:flex;align-items:center;gap:8px;justify-content:center;flex-wrap:wrap;">
              <div style="padding:8px 14px;background:#bbf7d0;border-radius:8px;font-size:12px;text-align:center;"><strong>.java</strong><br/>Source Code</div>
              <span>→</span>
              <div style="padding:8px 14px;background:#bbf7d0;border-radius:8px;font-size:12px;text-align:center;"><strong>javac</strong><br/>Compiler</div>
              <span>→</span>
              <div style="padding:8px 14px;background:#bbf7d0;border-radius:8px;font-size:12px;text-align:center;"><strong>.class</strong><br/>Bytecode</div>
              <span>→</span>
              <div style="padding:8px 14px;background:#bbf7d0;border-radius:8px;font-size:12px;text-align:center;"><strong>JVM</strong><br/>Runs anywhere</div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: 'What is the output of: System.out.println(10 / 3)',
          hint: "In Java, dividing two integers performs integer division (truncates decimal).",
          expectedOutput: "3"
        }
      },
      'csharp': {
        title: 'C#',
        content: `
          <h2>C# Fundamentals</h2>
          <p>C# (C-Sharp) is Microsoft's modern, object-oriented language that runs on the .NET platform. It combines the power of C++ with the simplicity of Java, adding features like properties, events, LINQ (Language Integrated Query), and async/await built into the language core. C# is strongly typed with excellent IDE support in Visual Studio, providing autocompletion, refactoring tools, and real-time error detection.</p>
          <p>C# excels in game development (Unity engine uses C# exclusively), enterprise web applications (ASP.NET), desktop apps (WPF/WinForms), and cloud services (Azure). Key features include nullable reference types (<code>string?</code>), pattern matching, records (immutable data classes), and a powerful generics system. The language evolves rapidly with annual releases adding features like top-level statements, global usings, and file-scoped namespaces.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#ede9fe;border-radius:12px;border:2px solid #8b5cf6;">
            <div style="font-weight:bold;color:#6d28d9;text-align:center;margin-bottom:12px;">C# Application Types</div>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
              <div style="padding:8px;background:#ddd6fe;border-radius:8px;text-align:center;font-size:12px;"><strong>Unity Games</strong><br/>2D/3D game development</div>
              <div style="padding:8px;background:#ddd6fe;border-radius:8px;text-align:center;font-size:12px;"><strong>ASP.NET</strong><br/>Web APIs & apps</div>
              <div style="padding:8px;background:#ddd6fe;border-radius:8px;text-align:center;font-size:12px;"><strong>Desktop</strong><br/>WPF, WinForms, MAUI</div>
              <div style="padding:8px;background:#ddd6fe;border-radius:8px;text-align:center;font-size:12px;"><strong>Cloud</strong><br/>Azure Functions & Services</div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: 'In C#, what is the output of: Console.WriteLine(5 == 5.0)',
          hint: "C# automatically converts int to double for comparison.",
          expectedOutput: "True"
        }
      },
      'cpp': {
        title: 'C++',
        content: `
          <h2>C++ Fundamentals</h2>
          <p>C++ is a systems programming language that gives you direct control over hardware and memory. It adds object-oriented features (classes, inheritance, polymorphism) on top of C while maintaining C's performance. Memory management is manual — you allocate with <code>new</code> and free with <code>delete</code>, though modern C++ (C++11 onward) provides smart pointers (<code>unique_ptr</code>, <code>shared_ptr</code>) that automate this safely.</p>
          <p>C++ powers game engines (Unreal Engine), operating systems, browsers, databases, and embedded systems where performance is critical. The Standard Template Library (STL) provides efficient containers (vector, map, set) and algorithms (sort, find, transform). Templates enable generic programming — write code once that works with any type. The language is complex but incredibly powerful, making it essential for performance-critical applications.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#fef3c7;border-radius:12px;border:2px solid #f59e0b;">
            <div style="font-weight:bold;color:#b45309;text-align:center;margin-bottom:12px;">C++ Memory Model</div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <div style="padding:8px;background:#fde68a;border-radius:8px;text-align:center;font-size:12px;"><strong>Stack</strong> — Auto variables, function calls (fast, auto-freed)</div>
              <div style="padding:8px;background:#fcd34d;border-radius:8px;text-align:center;font-size:12px;"><strong>Heap</strong> — new/delete, dynamic allocation (manual management)</div>
              <div style="padding:8px;background:#fbbf24;border-radius:8px;text-align:center;font-size:12px;"><strong>Static</strong> — Global/static variables (program lifetime)</div>
              <div style="padding:8px;background:#f59e0b;color:white;border-radius:8px;text-align:center;font-size:12px;"><strong>Code</strong> — Compiled instructions (read-only)</div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: 'What is the output of: cout << (7 / 2)',
          hint: "Integer division in C++ truncates the decimal part.",
          expectedOutput: "3"
        }
      },
      'ruby': {
        title: 'Ruby',
        content: `
          <h2>Ruby Fundamentals</h2>
          <p>Ruby was designed to make programmers happy — its syntax reads almost like English. Everything in Ruby is an object, including numbers and booleans (<code>5.times { puts "hello" }</code> is valid Ruby). Variables don't need type declarations, and methods can be called without parentheses. Ruby uses blocks (chunks of code passed to methods) extensively, making iteration elegant: <code>[1,2,3].map { |x| x * 2 }</code> returns <code>[2, 4, 6]</code>.</p>
          <p>Ruby on Rails, the web framework, made Ruby famous by enabling rapid web development with convention over configuration. Ruby features mixins (sharing behavior via modules instead of multiple inheritance), symbols (lightweight immutable identifiers like <code>:name</code>), and powerful metaprogramming capabilities. The language prioritizes developer productivity and readability, following Matz's principle: "Ruby is designed to make programmers happy."</p>
        `,
        diagram: `
          <div style="padding:16px;background:#fce7f3;border-radius:12px;border:2px solid #ec4899;">
            <div style="font-weight:bold;color:#be185d;text-align:center;margin-bottom:12px;">Ruby Object Model</div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="padding:8px 20px;background:#fbcfe8;border-radius:8px;font-size:12px;text-align:center;"><strong>BasicObject</strong></div>
              <div style="width:2px;height:8px;background:#ec4899;"></div>
              <div style="padding:8px 20px;background:#fbcfe8;border-radius:8px;font-size:12px;text-align:center;"><strong>Object</strong> (includes Kernel)</div>
              <div style="width:2px;height:8px;background:#ec4899;"></div>
              <div style="display:flex;gap:12px;">
                <div style="padding:8px 12px;background:#fce7f3;border-radius:8px;font-size:11px;text-align:center;">String</div>
                <div style="padding:8px 12px;background:#fce7f3;border-radius:8px;font-size:11px;text-align:center;">Integer</div>
                <div style="padding:8px 12px;background:#fce7f3;border-radius:8px;font-size:11px;text-align:center;">Array</div>
                <div style="padding:8px 12px;background:#fce7f3;border-radius:8px;font-size:11px;text-align:center;">Hash</div>
              </div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: 'What is the output of: puts [1, 2, 3].select { |x| x.odd? }.length',
          hint: "select filters elements. Odd numbers from [1,2,3] are 1 and 3.",
          expectedOutput: "2"
        }
      },
      'go': {
        title: 'Go',
        content: `
          <h2>Go (Golang) Fundamentals</h2>
          <p>Go was created at Google to solve real-world software engineering problems: slow compilation, complex dependencies, and difficult concurrency. It compiles to a single static binary with no dependencies, making deployment trivial. Go is statically typed but uses type inference (<code>name := "Alice"</code>), has garbage collection, and deliberately omits features like classes and inheritance in favor of simplicity — composition with interfaces and structs replaces traditional OOP.</p>
          <p>Go's killer feature is <strong>goroutines</strong> — lightweight concurrent functions launched with the <code>go</code> keyword. They communicate through channels, following the principle "don't communicate by sharing memory; share memory by communicating." Go's standard library includes production-ready HTTP servers, JSON handling, and testing tools. It powers Docker, Kubernetes, and many cloud-native tools because of its performance, simplicity, and excellent concurrency support.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#e0f2fe;border-radius:12px;border:2px solid #0ea5e9;">
            <div style="font-weight:bold;color:#0369a1;text-align:center;margin-bottom:12px;">Go Concurrency Model</div>
            <div style="display:flex;align-items:center;gap:8px;justify-content:center;flex-wrap:wrap;">
              <div style="padding:8px 14px;background:#bae6fd;border-radius:8px;font-size:12px;text-align:center;"><strong>Goroutine A</strong><br/>go funcA()</div>
              <div style="padding:8px 14px;background:#0ea5e9;color:white;border-radius:8px;font-size:12px;text-align:center;"><strong>Channel</strong><br/>ch <- data</div>
              <div style="padding:8px 14px;background:#bae6fd;border-radius:8px;font-size:12px;text-align:center;"><strong>Goroutine B</strong><br/>data := <-ch</div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: 'In Go, what does fmt.Println(len("Hello")) output?',
          hint: "len() on a string returns the number of bytes. ASCII characters are 1 byte each.",
          expectedOutput: "5"
        }
      },
      'typescript': {
        title: 'TypeScript',
        content: `
          <h2>TypeScript Fundamentals</h2>
          <p>TypeScript is JavaScript with a type system bolted on — every valid JavaScript program is also valid TypeScript. Types are added via annotations (<code>let name: string = "Alice"</code>) and catch errors before runtime. Interfaces define object shapes (<code>interface User { name: string; age: number }</code>), and the compiler ensures you don't access properties that don't exist or pass wrong types to functions. All types are erased at compile time, producing clean JavaScript.</p>
          <p>TypeScript's type system goes far beyond basic types — it includes generics (<code>Array&lt;T&gt;</code>), union types (<code>string | number</code>), type guards, mapped types, and conditional types. It's the standard for large-scale JavaScript applications, used by Angular, React (with TSX), Vue, and virtually every modern web framework. The tooling benefits are enormous: autocompletion, refactoring, and inline documentation all powered by the type system.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#f0fdf4;border-radius:12px;border:2px solid #22c55e;">
            <div style="font-weight:bold;color:#15803d;text-align:center;margin-bottom:12px;">TypeScript Type Hierarchy</div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="padding:8px 20px;background:#bbf7d0;border-radius:8px;font-size:12px;"><strong>unknown</strong> (top type)</div>
              <div style="width:2px;height:8px;background:#22c55e;"></div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
                <div style="padding:6px 10px;background:#dcfce7;border-radius:6px;font-size:11px;">string</div>
                <div style="padding:6px 10px;background:#dcfce7;border-radius:6px;font-size:11px;">number</div>
                <div style="padding:6px 10px;background:#dcfce7;border-radius:6px;font-size:11px;">boolean</div>
                <div style="padding:6px 10px;background:#dcfce7;border-radius:6px;font-size:11px;">object</div>
                <div style="padding:6px 10px;background:#dcfce7;border-radius:6px;font-size:11px;">void</div>
              </div>
              <div style="width:2px;height:8px;background:#22c55e;"></div>
              <div style="padding:8px 20px;background:#86efac;border-radius:8px;font-size:12px;"><strong>never</strong> (bottom type)</div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: 'What TypeScript type is inferred for: const x = [1, "hello", true] — Write the type as TypeScript would show it.',
          hint: "TypeScript infers the union of all element types as an array.",
          expectedOutput: "(string | number | boolean)[]"
        }
      },
      'rust': {
        title: 'Rust',
        content: `
          <h2>Rust Fundamentals</h2>
          <p>Rust guarantees memory safety without a garbage collector through its unique <strong>ownership system</strong>: every value has exactly one owner, and when the owner goes out of scope, the value is automatically dropped. Borrowing rules (<code>&T</code> for shared references, <code>&mut T</code> for mutable) are enforced at compile time, eliminating data races, null pointer dereferences, and buffer overflows — entire categories of bugs that plague C and C++.</p>
          <p>Rust's type system includes enums with data (like <code>Option&lt;T&gt;</code> replacing null), pattern matching with exhaustive checking, traits (like interfaces), and zero-cost abstractions. Error handling uses <code>Result&lt;T, E&gt;</code> instead of exceptions, forcing you to handle every possible error. Despite its strict compiler, Rust consistently tops "most loved language" surveys because once code compiles, it's remarkably reliable and performant.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#fef2f2;border-radius:12px;border:2px solid #ef4444;">
            <div style="font-weight:bold;color:#dc2626;text-align:center;margin-bottom:12px;">Rust Ownership Rules</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="padding:8px 12px;background:#fee2e2;border-radius:8px;font-size:12px;"><strong>Rule 1:</strong> Each value has exactly one owner</div>
              <div style="padding:8px 12px;background:#fee2e2;border-radius:8px;font-size:12px;"><strong>Rule 2:</strong> When the owner goes out of scope, the value is dropped</div>
              <div style="padding:8px 12px;background:#fee2e2;border-radius:8px;font-size:12px;"><strong>Rule 3:</strong> You can have either ONE mutable reference OR any number of immutable references</div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: 'In Rust, what does println!("{}", vec![1, 2, 3].len()) output?',
          hint: "len() returns the number of elements in the vector.",
          expectedOutput: "3"
        }
      },
      'php': {
        title: 'PHP',
        content: `
          <h2>PHP Fundamentals</h2>
          <p>PHP powers about 77% of all websites with a known server-side language — WordPress, Wikipedia, and Facebook all started with PHP. It's a server-side scripting language embedded in HTML with <code>&lt;?php ?&gt;</code> tags. Variables start with <code>$</code> (<code>$name = "Alice"</code>), and the language is dynamically typed. PHP has evolved dramatically — modern PHP 8.x includes named arguments, match expressions, enums, fibers for async, and union types.</p>
          <p>PHP's strength is its ecosystem: Composer for package management, Laravel and Symfony as world-class frameworks, and PHPUnit for testing. Arrays in PHP are actually ordered maps that serve as lists, dictionaries, sets, and stacks. While PHP had a reputation for messy code, modern PHP with strict typing (<code>declare(strict_types=1)</code>), PSR standards, and frameworks like Laravel produces clean, maintainable code that rivals any language.</p>
        `,
        diagram: `
          <div style="padding:16px;background:#e0e7ff;border-radius:12px;border:2px solid #6366f1;">
            <div style="font-weight:bold;color:#4338ca;text-align:center;margin-bottom:12px;">PHP Request Lifecycle</div>
            <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;justify-content:center;">
              <div style="padding:8px 12px;background:#c7d2fe;border-radius:8px;font-size:12px;text-align:center;"><strong>Browser</strong><br/>HTTP Request</div>
              <span>→</span>
              <div style="padding:8px 12px;background:#c7d2fe;border-radius:8px;font-size:12px;text-align:center;"><strong>Web Server</strong><br/>Apache/Nginx</div>
              <span>→</span>
              <div style="padding:8px 12px;background:#c7d2fe;border-radius:8px;font-size:12px;text-align:center;"><strong>PHP Engine</strong><br/>Process Script</div>
              <span>→</span>
              <div style="padding:8px 12px;background:#c7d2fe;border-radius:8px;font-size:12px;text-align:center;"><strong>HTML</strong><br/>Response</div>
            </div>
          </div>
        `,
        codingQuiz: {
          question: 'What is the output of: echo count([1, 2, 3, 4, 5]);',
          hint: "count() returns the number of elements in an array.",
          expectedOutput: "5"
        }
      },
    };
    return lessons[topic] || null;
  }

  return null;
};

const LessonPage = () => {
  const { category, topic } = useParams<{ category: string; topic: string }>();
  
  if (!category || !topic) {
    return (
      <div className="min-h-screen bg-background pt-16">
        <Topbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
          <Link to="/">
            <Button><ArrowLeft className="h-4 w-4 mr-2" /> Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const lesson = getLessonContent(category, topic);
  
  if (!lesson) {
    return (
      <div className="min-h-screen bg-background pt-16">
        <Topbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Coming Soon!</h1>
          <p className="text-muted-foreground mb-4">This lesson is being prepared.</p>
          <Link to="/">
            <Button><ArrowLeft className="h-4 w-4 mr-2" /> Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background pt-16">
      <Topbar />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm" className="rounded-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="p-6 md:p-8">
              <h1 className="text-3xl font-bold mb-6">{lesson.title}</h1>
              
              {/* Lesson Content */}
              <div className="prose dark:prose-invert max-w-none mb-8">
                <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
              </div>
              
              {/* Diagram */}
              <div className="mb-8">
                <div dangerouslySetInnerHTML={{ __html: lesson.diagram }} />
              </div>
              
              {/* Coding Quiz */}
              <CodingQuizSection quiz={lesson.codingQuiz} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LessonPage;
