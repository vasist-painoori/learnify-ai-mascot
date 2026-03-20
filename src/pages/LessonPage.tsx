
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Topbar from '@/components/Topbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, XCircle, BookOpen, Code, FlaskConical } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

interface CodeBlock {
  language: string;
  snippet: string;
  explanation: string;
}

interface LessonSection {
  heading: string;
  body: string;
  code?: CodeBlock;
}

interface CodingQuiz {
  question: string;
  hint: string;
  expectedOutput: string;
}

interface LessonData {
  title: string;
  sections: LessonSection[];
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

function getLessonContent(category: string, topic: string): LessonData | null {
  const lessons: Record<string, Record<string, LessonData>> = {
    '3d-printing': {
      'basics': {
        title: '3D Printer Basics',
        sections: [
          {
            heading: 'What Is 3D Printing?',
            body: '3D printing, also called additive manufacturing, creates physical objects by building them up layer by layer from a digital file. Unlike traditional manufacturing (like CNC machining) which carves material away from a solid block, 3D printing adds material only where it\'s needed — reducing waste dramatically. The technology has been around since the 1980s but has become affordable for home use only in the last decade, with printers now starting under $200.'
          },
          {
            heading: 'How FDM Printing Works',
            body: 'The most common home printer type is FDM (Fused Deposition Modeling). It works like a very precise hot glue gun on a robotic arm. A spool of plastic filament (usually 1.75mm diameter) is fed into a heated nozzle (the "hot end") which melts it at around 200°C. The melted plastic is then extruded onto a flat build plate in thin lines. The nozzle moves in the X and Y directions to trace out one layer, then either the nozzle moves up or the bed moves down by one layer height (typically 0.2mm), and the next layer prints on top.',
            code: {
              language: 'gcode',
              snippet: '; Example G-code — what the printer reads\nG28          ; Home all axes (go to 0,0,0)\nG1 Z5 F500   ; Move nozzle up 5mm\nM104 S200    ; Set nozzle temp to 200°C\nM140 S60     ; Set bed temp to 60°C\nM109 S200    ; Wait for nozzle to reach temp\nG1 X50 Y50 F3000  ; Move to position (50,50)\nG1 Z0.2      ; Drop to first layer height\nG1 X100 E10 F1500 ; Print a line, extruding filament',
              explanation: 'G-code is the language printers speak. G28 homes the machine, M104/M109 control temperature, and G1 moves the nozzle while extruding plastic.'
            }
          },
          {
            heading: 'The Five Core Components',
            body: 'Every FDM printer has the same fundamental parts. The frame provides rigidity (wobble = bad prints). The motion system uses stepper motors and belts/leadscrews for precise movement on three axes. The extruder grips and pushes filament forward. The hot end melts it and deposits it through a 0.4mm nozzle opening. And the build plate is your heated printing surface — it\'s usually heated to 60°C to help prints stick and release cleanly when cooled.'
          },
          {
            heading: 'From Model to Physical Object',
            body: 'The workflow has three stages: Design → Slice → Print. First, you create or download a 3D model (STL or 3MF file) from sites like Thingiverse or Printables. Then, slicer software (Cura, PrusaSlicer) converts it into G-code — machine instructions telling the printer exactly where to move and how much plastic to extrude at each point. Finally, the G-code is sent to the printer via SD card, USB, or Wi-Fi. A simple phone case takes about 1-2 hours; a detailed figurine might take 8-12 hours.'
          }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#eef2ff,#e0e7ff);border-radius:16px;border:2px solid #818cf8;"><div style="font-weight:700;color:#4338ca;text-align:center;margin-bottom:16px;font-size:15px;">FDM Printer Components</div><div style="display:flex;flex-direction:column;gap:10px;max-width:400px;margin:0 auto;background:#f8fafc;border-radius:12px;padding:16px;border:1px solid #c7d2fe;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:#6366f1;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;">1</div><div><strong style="color:#4338ca;">Filament Spool</strong><div style="font-size:12px;color:#64748b;">1.75mm plastic wire, 1kg rolls</div></div></div><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:#6366f1;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;">2</div><div><strong style="color:#4338ca;">Extruder</strong><div style="font-size:12px;color:#64748b;">Grips filament with a gear, pushes it down</div></div></div><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:#6366f1;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;">3</div><div><strong style="color:#4338ca;">Hot End (Nozzle)</strong><div style="font-size:12px;color:#64748b;">Heats to 200°C, melts plastic through 0.4mm hole</div></div></div><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:#6366f1;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;">4</div><div><strong style="color:#4338ca;">Build Plate</strong><div style="font-size:12px;color:#64748b;">Heated surface (60°C) where prints are built</div></div></div><div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:#6366f1;border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;">5</div><div><strong style="color:#4338ca;">Motion System</strong><div style="font-size:12px;color:#64748b;">Stepper motors + belts for X/Y/Z movement</div></div></div></div><div style="margin-top:12px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-width:400px;margin-left:auto;margin-right:auto;"><div style="padding:10px;background:#c7d2fe;border-radius:8px;text-align:center;font-size:12px;"><strong>X-Axis</strong><br/>Left-Right</div><div style="padding:10px;background:#c7d2fe;border-radius:8px;text-align:center;font-size:12px;"><strong>Y-Axis</strong><br/>Front-Back</div><div style="padding:10px;background:#c7d2fe;border-radius:8px;text-align:center;font-size:12px;"><strong>Z-Axis</strong><br/>Up-Down</div></div></div>',
        codingQuiz: {
          question: 'A 3D printer prints at 0.2mm layer height. Your model is 40mm tall with a 5mm raft underneath. How many total layers does the printer need? (just the number)',
          hint: 'Total height = 40 + 5 = 45mm. Layers = 45 / 0.2',
          expectedOutput: '225'
        }
      },
      'filaments': {
        title: 'Filament Types & Materials',
        sections: [
          {
            heading: 'Why Filament Choice Matters',
            body: 'The filament you choose determines almost everything about your finished print: its strength, flexibility, heat resistance, appearance, and how easy it is to print. Think of it like choosing wood vs. steel vs. rubber for a traditional project — each material has strengths and trade-offs. Most filament comes in 1.75mm diameter spools (1kg standard). Color variety is enormous, but the base material properties are what really matter.'
          },
          {
            heading: 'PLA — The Beginner\'s Best Friend',
            body: 'PLA (Polylactic Acid) is made from cornstarch or sugarcane, making it biodegradable. It prints at the lowest temperatures (190-220°C nozzle, 50-60°C bed), rarely warps, has minimal odor, and comes in hundreds of colors. Its weakness is heat resistance — PLA softens around 60°C, so a PLA part left in a hot car will deform. It\'s also relatively brittle compared to PETG, snapping rather than flexing under stress.',
            code: {
              language: 'yaml',
              snippet: '# Recommended PLA Settings\nnozzle_temp: 210°C\nbed_temp: 60°C\nprint_speed: 50-60mm/s\ncooling_fan: 100%\nretraction: 5mm @ 45mm/s\nfirst_layer_speed: 20mm/s',
              explanation: 'These settings work for most PLA brands. Always print a temperature tower first — a test that varies temperature every few layers so you can see which temp gives best quality.'
            }
          },
          {
            heading: 'PETG — The All-Rounder',
            body: 'PETG (Polyethylene Terephthalate Glycol) is the same family of plastic as water bottles. It\'s stronger than PLA, slightly flexible (bends before breaking), handles temperatures up to ~80°C, and is food-safe in raw form. The trade-off: it\'s stringier than PLA — you\'ll see thin whiskers between parts. Print at 230-250°C with moderate cooling (50-70% fan).'
          },
          {
            heading: 'ABS, TPU, Nylon & Beyond',
            body: 'ABS is classic engineering plastic (LEGO bricks are ABS) — tough, heat-resistant to ~100°C, but warps aggressively and releases fumes, requiring an enclosure. TPU is flexible rubber-like material for phone cases and gaskets — print slowly (20-30mm/s). Nylon is incredibly strong with excellent wear resistance, perfect for gears and hinges, but absorbs moisture and must be dried before printing.'
          },
          {
            heading: 'Storing Filament Properly',
            body: 'Most filaments absorb moisture from air, causing bubbling and rough surfaces during printing. Store open spools in airtight containers with silica gel desiccant. Nylon and TPU are worst affected and should be printed from a dry box. If filament has absorbed moisture, dry it in a filament dryer at 45°C (PLA), 65°C (PETG), or 70°C (Nylon) for 4-6 hours.'
          }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#f0fdf4,#dcfce7);border-radius:16px;border:2px solid #22c55e;"><div style="font-weight:700;color:#15803d;text-align:center;margin-bottom:16px;font-size:15px;">Filament Comparison</div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;"><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #bbf7d0;text-align:center;"><div style="font-weight:bold;font-size:14px;color:#15803d;">PLA</div><div style="font-size:11px;color:#64748b;">200°C - Easy</div><div style="font-size:12px;">Strength ██░░░</div><div style="font-size:12px;">Heat ██░░░</div><div style="font-size:12px;">Flex █░░░░</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #bbf7d0;text-align:center;"><div style="font-weight:bold;font-size:14px;color:#15803d;">PETG</div><div style="font-size:11px;color:#64748b;">240°C - Medium</div><div style="font-size:12px;">Strength ███░░</div><div style="font-size:12px;">Heat ███░░</div><div style="font-size:12px;">Flex ██░░░</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #bbf7d0;text-align:center;"><div style="font-weight:bold;font-size:14px;color:#15803d;">ABS</div><div style="font-size:11px;color:#64748b;">240°C - Hard</div><div style="font-size:12px;">Strength ███░░</div><div style="font-size:12px;">Heat ████░</div><div style="font-size:12px;">Flex ██░░░</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #bbf7d0;text-align:center;"><div style="font-weight:bold;font-size:14px;color:#15803d;">TPU</div><div style="font-size:11px;color:#64748b;">230°C - Medium</div><div style="font-size:12px;">Strength ███░░</div><div style="font-size:12px;">Heat ██░░░</div><div style="font-size:12px;">Flex █████</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #bbf7d0;text-align:center;"><div style="font-weight:bold;font-size:14px;color:#15803d;">Nylon</div><div style="font-size:11px;color:#64748b;">255°C - Hard</div><div style="font-size:12px;">Strength ████░</div><div style="font-size:12px;">Heat ███░░</div><div style="font-size:12px;">Flex ███░░</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #bbf7d0;text-align:center;"><div style="font-weight:bold;font-size:14px;color:#15803d;">PC</div><div style="font-size:11px;color:#64748b;">280°C - Expert</div><div style="font-size:12px;">Strength █████</div><div style="font-size:12px;">Heat █████</div><div style="font-size:12px;">Flex ██░░░</div></div></div></div>',
        codingQuiz: {
          question: 'You\'re printing a part for a car dashboard (temps up to 70°C). Which common material should you NOT use? (material name)',
          hint: 'PLA softens around 60°C — below dashboard temperatures.',
          expectedOutput: 'PLA'
        }
      },
      'slicers': {
        title: 'Slicer Software Mastery',
        sections: [
          {
            heading: 'What Does a Slicer Do?',
            body: 'A slicer is the bridge between your 3D model and your printer. It takes a 3D mesh file (STL, 3MF, or OBJ), mathematically slices it into hundreds of horizontal layers, then calculates the exact toolpath — the precise route the nozzle takes to trace each layer. It decides where to put walls (perimeters), how to fill the interior (infill), where to add supports, and how fast to move. The output is G-code: thousands of movement commands.'
          },
          {
            heading: 'The Three Most Important Settings',
            body: 'Layer height controls quality vs. speed. At 0.1mm, surfaces are smooth but prints take 2-3x longer. At 0.2mm (standard), you balance both. At 0.3mm, it\'s fast but lines are visible. Infill percentage controls strength — 15% for decorative items, 30-40% for functional parts, 100% for maximum strength. Print speed ranges from 40-60mm/s for quality to 100-150mm/s on modern machines.',
            code: {
              language: 'text',
              snippet: 'Layer height for a 20mm cube:\n0.1mm = 200 layers = ~45 min\n0.2mm = 100 layers = ~22 min\n0.3mm =  67 layers = ~15 min\n\nInfill patterns:\nGrid     - Fast, decent X/Y strength\nGyroid   - Best all-around strength\nLightning - Minimal, supports top only\nCubic    - Good 3D strength',
              explanation: 'Doubling layer height roughly halves print time. Gyroid infill is strongest but slowest; lightning is fastest but weakest.'
            }
          },
          {
            heading: 'Supports and Overhangs',
            body: 'Printers can\'t print in mid-air — each layer needs something underneath. The "45-degree rule" says overhangs steeper than 45° need support material. Slicers auto-generate supports but they leave marks. Tree supports branch up from the build plate to overhangs, using less material and leaving cleaner surfaces. The "support interface" adds a dense layer with a 0.1-0.2mm gap for easy removal.'
          },
          {
            heading: 'Walls, Tops, and Seams',
            body: 'The outer shell is made of perimeters (walls) and solid top/bottom layers. 3-4 walls is standard. Top and bottom need 4-6 solid layers to bridge over infill without sagging. The "seam" is where each perimeter loop starts/ends, creating a visible line — align it to one spot (less visible on flat surfaces) or randomize it across the print.'
          }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#fefce8,#fef9c3);border-radius:16px;border:2px solid #eab308;"><div style="font-weight:700;color:#a16207;text-align:center;margin-bottom:16px;font-size:15px;">Inside a Sliced Layer</div><div style="max-width:350px;margin:0 auto;background:#fffbeb;border:2px solid #eab308;border-radius:12px;padding:16px;"><div style="border:3px solid #b45309;border-radius:8px;padding:3px;"><div style="border:2px solid #d97706;border-radius:5px;padding:3px;"><div style="border:2px dashed #f59e0b;border-radius:3px;padding:20px;text-align:center;font-size:12px;color:#92400e;font-family:monospace;line-height:1.4;"><strong>Infill Pattern (15-20%)</strong><br/>/\\/\\/\\/\\<br/>\\/\\/\\/\\/<br/>/\\/\\/\\/\\</div></div></div><div style="display:flex;gap:8px;margin-top:12px;justify-content:center;"><div style="display:flex;align-items:center;gap:4px;font-size:11px;"><div style="width:12px;height:12px;background:#b45309;border-radius:2px;"></div>Outer Wall</div><div style="display:flex;align-items:center;gap:4px;font-size:11px;"><div style="width:12px;height:12px;background:#d97706;border-radius:2px;"></div>Inner Wall</div><div style="display:flex;align-items:center;gap:4px;font-size:11px;"><div style="width:12px;height:12px;background:#f59e0b;border-radius:2px;"></div>Infill</div></div></div></div>',
        codingQuiz: {
          question: 'A model is 50mm tall. At 0.2mm layers it takes 3 hours. You switch to 0.1mm. How many hours now? (just the number)',
          hint: '0.1mm = double the layers = roughly double the time.',
          expectedOutput: '6'
        }
      },
      'troubleshooting': {
        title: 'Print Troubleshooting',
        sections: [
          {
            heading: 'First Layer Adhesion — The #1 Problem',
            body: 'If your first layer doesn\'t stick, the entire print fails. This is the single most common issue and almost always comes down to nozzle distance from the bed. Too far = filament doesn\'t squish and stick. Too close = can\'t extrude and scrapes the bed. The "paper test" calibration: slide paper between nozzle and bed, adjust until you feel slight friction when pulling.'
          },
          {
            heading: 'Stringing and Oozing',
            body: 'Stringing looks like thin spider webs between parts. It happens because melted plastic oozes from the nozzle during travel moves. Fix with retraction — the extruder pulls filament backward when traveling. Typical settings: 5-7mm at 40-60mm/s for Bowden, 0.5-2mm at 30-40mm/s for direct drive. Also try lowering nozzle temperature by 5-10°C — cooler plastic oozes less.',
            code: {
              language: 'text',
              snippet: 'Anti-Stringing Checklist:\n1. Retraction distance: 6mm (Bowden)\n2. Retraction speed: 45mm/s\n3. Travel speed: 150mm/s (fast = less ooze)\n4. Combing: within infill\n5. Temperature: -5°C from normal\n6. Wipe nozzle: enabled\n\nFor Direct Drive: reduce retraction to 1-2mm',
              explanation: 'Start with retraction distance and temp reduction. If still stringing, enable coasting and increase travel speed.'
            }
          },
          {
            heading: 'Warping and Corner Lifting',
            body: 'Warping happens when bottom corners lift and curl upward. As plastic cools it shrinks, and temperature difference between hot top layers and cool bottom creates stress. ABS is notorious for this; PLA rarely warps. Fixes: correct bed temperature, add a brim (extra rings around base), clean bed with isopropyl alcohol, enclose the printer.'
          },
          {
            heading: 'Layer Shifts and Under-Extrusion',
            body: 'Layer shifts = print suddenly moved sideways mid-print. Usually mechanical: loose belts, loose grub screws on pulleys, or print head hitting the print. Under-extrusion = gaps and thin walls. Causes: partial clog, worn extruder gear, wrong filament diameter in slicer, or too-fast speed for the hotend\'s melt capacity.'
          },
          {
            heading: 'The Golden Rule',
            body: 'Change only ONE setting at a time, then test. If you change temperature AND speed AND retraction at once and the problem goes away, you don\'t know which fixed it. Print small test objects (calibration cubes, stringing tests) instead of wasting hours on full prints. Keep a log of what you changed and the result.'
          }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#fef2f2,#fee2e2);border-radius:16px;border:2px solid #ef4444;"><div style="font-weight:700;color:#dc2626;text-align:center;margin-bottom:16px;font-size:15px;">Troubleshooting Flowchart</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;"><div style="padding:12px;background:#fff;border:2px solid #fca5a5;border-radius:10px;"><div style="font-weight:bold;color:#dc2626;font-size:13px;margin-bottom:6px;">Won\'t Stick</div><div style="font-size:11px;color:#64748b;line-height:1.5;">1. Re-level bed<br/>2. Clean with IPA<br/>3. Increase bed temp +5°C<br/>4. Slow first layer<br/>5. Add brim</div></div><div style="padding:12px;background:#fff;border:2px solid #fca5a5;border-radius:10px;"><div style="font-weight:bold;color:#dc2626;font-size:13px;margin-bottom:6px;">Stringing</div><div style="font-size:11px;color:#64748b;line-height:1.5;">1. Increase retraction<br/>2. Lower temp 5-10°C<br/>3. Increase travel speed<br/>4. Enable coasting<br/>5. Dry filament</div></div><div style="padding:12px;background:#fff;border:2px solid #fca5a5;border-radius:10px;"><div style="font-weight:bold;color:#dc2626;font-size:13px;margin-bottom:6px;">Warping</div><div style="font-size:11px;color:#64748b;line-height:1.5;">1. Check bed temp<br/>2. Use brim/raft<br/>3. Enclose printer<br/>4. Try different material<br/>5. Reduce speed</div></div><div style="padding:12px;background:#fff;border:2px solid #fca5a5;border-radius:10px;"><div style="font-weight:bold;color:#dc2626;font-size:13px;margin-bottom:6px;">Gaps/Rough Surface</div><div style="font-size:11px;color:#64748b;line-height:1.5;">1. Check for clog<br/>2. Verify filament diameter<br/>3. Increase flow 2-5%<br/>4. Slow down<br/>5. Check extruder gear</div></div></div></div>',
        codingQuiz: {
          question: 'Your retraction is 6mm at 40mm/s. How many milliseconds does one retraction take? (just the number)',
          hint: 'Time = 6mm / 40mm/s = 0.15s. Convert: 0.15 * 1000',
          expectedOutput: '150'
        }
      },
      'design': {
        title: '3D Model Design',
        sections: [
          {
            heading: 'Designing for the Physical World',
            body: 'Designing for 3D printing is different from designing for screens. Every surface must be buildable layer by layer from the bottom up. This means thinking about overhangs (beyond 45° needs support), minimum wall thickness (at least 2x nozzle diameter), and build orientation. A model that looks perfect in CAD might be impossible to print without thoughtful design choices.'
          },
          {
            heading: 'CAD Software Options',
            body: 'TinkerCAD (free, browser-based) is perfect for beginners — build models by combining basic shapes. Fusion 360 (free for hobbyists) is professional parametric CAD where you sketch 2D shapes and extrude into 3D. Blender (free) excels at organic shapes and characters. OnShape (free tier) runs entirely in-browser with professional capability. Most designers use multiple tools for different tasks.'
          },
          {
            heading: 'Critical Design Rules',
            body: 'Minimum wall thickness: 0.8mm (2x a 0.4mm nozzle). For holes, add 0.2-0.3mm tolerance — a 5mm hole prints slightly smaller. For snap-fit parts, 0.2mm clearance per side. Avoid sharp overhangs — use 45° chamfers instead. Fillets (rounded edges) are stronger than sharp corners. Always export as "manifold" (watertight) mesh.',
            code: {
              language: 'python',
              snippet: '# Design tolerance calculator\ndef hole_size(desired_mm, tolerance=0.3):\n    return desired_mm + tolerance\n\n# 5mm bolt hole:\nprint(hole_size(5.0))  # 5.3mm\n\ndef check_wall(thickness, nozzle=0.4):\n    min_wall = nozzle * 2\n    if thickness < min_wall:\n        print(f"Too thin! Min: {min_wall}mm")\n    else:\n        walls = int(thickness / nozzle)\n        print(f"OK - {walls} perimeters")\n\ncheck_wall(1.2)  # OK - 3 perimeters\ncheck_wall(0.3)  # Too thin! Min: 0.8mm',
              explanation: 'Always design with tolerances. Holes print smaller than designed, mating parts need clearance gaps. These calculations prevent frustrating reprints.'
            }
          },
          {
            heading: 'Orientation Strategy',
            body: 'How you orient a model affects strength, quality, and print time. Layer lines are the weakest point — orient parts so primary stress runs along layers, not across them. Flat surfaces facing the bed are smoothest. Sometimes splitting a model into two halves printed flat and glued produces a stronger result than printing as one piece with supports.'
          }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#eff6ff,#dbeafe);border-radius:16px;border:2px solid #3b82f6;"><div style="font-weight:700;color:#1d4ed8;text-align:center;margin-bottom:16px;font-size:15px;">Design Rules Quick Reference</div><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:400px;margin:0 auto;"><div style="padding:14px;background:#fff;border-radius:10px;border:1px solid #bfdbfe;text-align:center;"><div style="font-weight:bold;font-size:13px;color:#1d4ed8;">Min Wall: 0.8mm</div><div style="font-size:11px;color:#64748b;">2x nozzle diameter</div></div><div style="padding:14px;background:#fff;border-radius:10px;border:1px solid #bfdbfe;text-align:center;"><div style="font-weight:bold;font-size:13px;color:#1d4ed8;">Hole Tolerance: +0.3mm</div><div style="font-size:11px;color:#64748b;">Holes shrink when printed</div></div><div style="padding:14px;background:#fff;border-radius:10px;border:1px solid #bfdbfe;text-align:center;"><div style="font-weight:bold;font-size:13px;color:#1d4ed8;">Max Overhang: 45°</div><div style="font-size:11px;color:#64748b;">Beyond needs supports</div></div><div style="padding:14px;background:#fff;border-radius:10px;border:1px solid #bfdbfe;text-align:center;"><div style="font-weight:bold;font-size:13px;color:#1d4ed8;">Fit Clearance: 0.2mm</div><div style="font-size:11px;color:#64748b;">Per side for mating parts</div></div></div></div>',
        codingQuiz: {
          question: 'You need a hole for a 6mm bolt with 0.3mm tolerance. What diameter should you design? (write as X.Xmm)',
          hint: 'Design = desired + tolerance = 6 + 0.3',
          expectedOutput: '6.3mm'
        }
      },
      'post-processing': {
        title: 'Post-Processing & Finishing',
        sections: [
          {
            heading: 'From Rough Print to Polished Product',
            body: 'A raw 3D print has visible layer lines, support marks, and rough texture. Post-processing transforms it into something professional. The effort depends on purpose — a functional bracket needs nothing, a cosplay prop needs hours. The pipeline: support removal, sanding, filling, priming, painting, sealing.'
          },
          {
            heading: 'Sanding Technique',
            body: 'Start with 80-120 grit to remove major layer lines. Work in one direction, not circles. Progress through: 120, 220, 400, 600, 800. Each step removes scratches from the previous grit. Wet sanding (with water) from 400 onward gives smoother results. PLA sands well but go slow — friction heat can soften the surface.'
          },
          {
            heading: 'Filling and Priming',
            body: 'After sanding, fill remaining lines with filler primer spray (2-3 light coats at 15cm distance) with 400-grit sanding between coats. For deep imperfections, automotive body filler works — thin layers, let cure, sand smooth. Always work ventilated or wear a respirator when spraying.'
          },
          {
            heading: 'Painting and Sealing',
            body: 'Spray paint gives the most even coverage — 3-4 thin coats, 15 minutes between. For detailed models, acrylic brush painting with thin layers. Finish with clear coat: gloss for shiny, satin for realistic, matte for professional. Two coats of clear protect from scratches and UV yellowing.'
          }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#faf5ff,#ede9fe);border-radius:16px;border:2px solid #8b5cf6;"><div style="font-weight:700;color:#6d28d9;text-align:center;margin-bottom:16px;font-size:15px;">Post-Processing Pipeline</div><div style="display:flex;flex-direction:column;gap:6px;max-width:450px;margin:0 auto;"><div style="display:flex;align-items:center;gap:10px;"><div style="min-width:32px;height:32px;background:#8b5cf6;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:14px;">1</div><div style="flex:1;padding:10px;background:#fff;border-radius:8px;border:1px solid #ddd6fe;font-size:13px;"><strong>Remove Supports</strong> — Flush cutters, sand nubs</div></div><div style="display:flex;align-items:center;gap:10px;"><div style="min-width:32px;height:32px;background:#8b5cf6;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:14px;">2</div><div style="flex:1;padding:10px;background:#fff;border-radius:8px;border:1px solid #ddd6fe;font-size:13px;"><strong>Sand</strong> — 120 → 220 → 400 → 600 grit</div></div><div style="display:flex;align-items:center;gap:10px;"><div style="min-width:32px;height:32px;background:#8b5cf6;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:14px;">3</div><div style="flex:1;padding:10px;background:#fff;border-radius:8px;border:1px solid #ddd6fe;font-size:13px;"><strong>Fill + Prime</strong> — Filler primer, 2-3 coats</div></div><div style="display:flex;align-items:center;gap:10px;"><div style="min-width:32px;height:32px;background:#8b5cf6;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:14px;">4</div><div style="flex:1;padding:10px;background:#fff;border-radius:8px;border:1px solid #ddd6fe;font-size:13px;"><strong>Paint</strong> — 3-4 thin coats, 15min between</div></div><div style="display:flex;align-items:center;gap:10px;"><div style="min-width:32px;height:32px;background:#8b5cf6;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:14px;">5</div><div style="flex:1;padding:10px;background:#fff;border-radius:8px;border:1px solid #ddd6fe;font-size:13px;"><strong>Seal</strong> — 2 coats clear coat for protection</div></div></div></div>',
        codingQuiz: {
          question: 'You sand with 5 grits (8 min each), then 3 primer coats (5 min each) with 10 min drying between coats. Total minutes?',
          hint: 'Sanding: 5x8=40. Priming: 3x5=15. Drying: 2 gaps x 10=20. Total: 40+15+20',
          expectedOutput: '75'
        }
      },
      'maintenance': {
        title: 'Printer Maintenance',
        sections: [
          {
            heading: 'Why Maintenance Matters',
            body: 'A well-maintained printer produces consistent, reliable prints. A neglected one develops mysterious problems. Most maintenance is quick but makes an enormous difference — like car maintenance, simple preventive care avoids expensive failures later.'
          },
          {
            heading: 'Before Every Print (30 seconds)',
            body: 'Wipe the bed with isopropyl alcohol (90%+) and lint-free cloth. Check filament is loaded and spool can unwind freely. Confirm nozzle isn\'t oozing old material. Ensure nothing obstructs the print area. These quick checks prevent the majority of failures.'
          },
          {
            heading: 'Weekly Tasks (15 minutes)',
            body: 'Clean nozzle exterior with a brass brush while hot (200°C — be careful!). Check belt tension by plucking — should make a low "twang." Inspect extruder gear for ground plastic dust. Wipe down linear rails and rods.'
          },
          {
            heading: 'Clearing Nozzle Clogs',
            body: 'Symptoms: under-extrusion, grinding sounds, or no filament coming out. Use the "cold pull" method: heat to print temp, push clean filament through, set to 90°C, then firmly pull out — debris comes with it. Repeat until clean. For stubborn clogs, use acupuncture needles while hot, or just replace the nozzle ($0.50-$2 each).',
            code: {
              language: 'text',
              snippet: 'Cold Pull Procedure:\n1. Heat nozzle to 200°C\n2. Push clean filament through\n3. Set temp to 90°C and wait\n4. Keep gentle push pressure\n5. At 90°C, pull filament out firmly\n6. Check tip — should be cone-shaped\n7. If dirty, repeat steps 1-6\n8. After 3 failed attempts: replace nozzle\n\nNozzle lifespan:\n  Brass: ~500 print hours\n  Hardened steel: ~2000+ hours',
              explanation: 'Cold pulls work because slightly-cooled filament grips debris as you pull. Keep 5-10 spare nozzles on hand — they\'re cheap and wear out, especially with abrasive filaments.'
            }
          },
          {
            heading: 'Monthly Deep Clean',
            body: 'Lubricate linear rails with PTFE grease (wipe excess). Blow out fans with compressed air (hold blades still). Check all screws — vibration loosens everything. Update firmware if available. Clean electronics enclosure.'
          }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#fdf4ff,#fae8ff);border-radius:16px;border:2px solid #d946ef;"><div style="font-weight:700;color:#a21caf;text-align:center;margin-bottom:16px;font-size:15px;">Maintenance Schedule</div><div style="display:flex;flex-direction:column;gap:8px;max-width:450px;margin:0 auto;"><div style="padding:12px;background:#fff;border-radius:10px;border-left:4px solid #22c55e;"><div style="font-weight:bold;color:#22c55e;font-size:13px;">Every Print (~30s)</div><div style="font-size:12px;color:#64748b;">Clean bed - Check spool - Inspect nozzle</div></div><div style="padding:12px;background:#fff;border-radius:10px;border-left:4px solid #eab308;"><div style="font-weight:bold;color:#eab308;font-size:13px;">Weekly (~15 min)</div><div style="font-size:12px;color:#64748b;">Brush nozzle - Check belts - Clean extruder gear</div></div><div style="padding:12px;background:#fff;border-radius:10px;border-left:4px solid #f97316;"><div style="font-weight:bold;color:#f97316;font-size:13px;">Monthly (~30 min)</div><div style="font-size:12px;color:#64748b;">Lubricate rails - Blow fans - Tighten screws</div></div><div style="padding:12px;background:#fff;border-radius:10px;border-left:4px solid #ef4444;"><div style="font-weight:bold;color:#ef4444;font-size:13px;">Quarterly (~1 hr)</div><div style="font-size:12px;color:#64748b;">Deep-clean extruder - Replace nozzle - Update firmware</div></div></div></div>',
        codingQuiz: {
          question: 'A brass nozzle lasts ~500 hours. You print 3 hrs/day, 6 days/week. How many weeks until replacement? (round to nearest whole)',
          hint: 'Hours/week = 3x6 = 18. Weeks = 500/18 = 27.7...',
          expectedOutput: '28'
        }
      }
    },
    'programming': {
      'javascript': {
        title: 'JavaScript — Language of the Web',
        sections: [
          {
            heading: 'Why JavaScript Matters',
            body: 'JavaScript is the only language that runs natively in every web browser. When you click a button and something happens without the page reloading — that\'s JavaScript. It started as a simple scripting language in 1995 but now runs servers (Node.js), mobile apps (React Native), desktop apps (Electron), and even ML models. Learning JavaScript gives you access to the widest range of platforms of any single language.'
          },
          {
            heading: 'Variables and Data Types',
            body: 'JavaScript has three variable declarations: var (old, avoid), let (for values that change), and const (for constants). It\'s dynamically typed — the language figures out types. Primitives: string, number, boolean, null, undefined, symbol, bigint. Complex types: objects (key-value pairs) and arrays (ordered lists). A famous quirk: typeof null returns "object" — a bug from 1995 never fixed.',
            code: {
              language: 'javascript',
              snippet: 'const name = "Alice";       // string\nlet score = 0;              // number, can reassign\nscore = score + 10;\n\nconst player = {\n  name: "Alice",\n  level: 5,\n  items: ["sword", "shield"]\n};\n\nconsole.log(player.name);       // "Alice"\nconsole.log(player.items[0]);   // "sword"\nconsole.log(typeof null);       // "object" (the bug!)',
              explanation: 'Use const by default, let when you need to reassign. Objects group related data with dot notation access.'
            }
          },
          {
            heading: 'Functions — Three Ways',
            body: 'Function declarations are hoisted (usable before written). Function expressions are assigned to variables. Arrow functions (ES6) are concise and don\'t have their own "this". Functions are first-class: store in variables, pass as arguments, return from other functions. Array methods like map, filter, reduce take functions as callbacks for powerful data transformations.',
            code: {
              language: 'javascript',
              snippet: '// Arrow functions + array methods\nconst numbers = [3, 1, 4, 1, 5, 9];\n\nconst doubled = numbers.map(n => n * 2);\n// [6, 2, 8, 2, 10, 18]\n\nconst evens = numbers.filter(n => n % 2 === 0);\n// [4]\n\nconst sum = numbers.reduce((total, n) => total + n, 0);\n// 23',
              explanation: 'Arrow functions shine in array methods. Single-expression arrows have implicit return — no braces or return keyword needed.'
            }
          },
          {
            heading: 'Async/Await',
            body: 'JavaScript is single-threaded but non-blocking. Promises represent future values (pending/fulfilled/rejected). Async/await makes promise code read like synchronous code. Any async function returns a promise. Always wrap await in try/catch. The fetch API doesn\'t throw on 404/500 — you must check response.ok yourself.'
          }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#fefce8,#fef9c3);border-radius:16px;border:2px solid #eab308;"><div style="font-weight:700;color:#a16207;text-align:center;margin-bottom:16px;font-size:15px;">JavaScript Event Loop</div><div style="display:flex;flex-direction:column;gap:8px;max-width:400px;margin:0 auto;"><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #fbbf24;"><div style="font-weight:bold;text-align:center;color:#92400e;">Call Stack</div><div style="font-size:12px;color:#64748b;text-align:center;">Runs code one function at a time</div></div><div style="text-align:center;color:#eab308;">↕</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;"><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #22c55e;text-align:center;"><div style="font-weight:bold;color:#15803d;font-size:13px;">Microtasks</div><div style="font-size:11px;color:#64748b;">Promises, await</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #3b82f6;text-align:center;"><div style="font-weight:bold;color:#1d4ed8;font-size:13px;">Macrotasks</div><div style="font-size:11px;color:#64748b;">setTimeout, events</div></div></div></div></div>',
        codingQuiz: {
          question: 'What is the output of: console.log(typeof undefined)',
          hint: 'typeof returns a string. undefined is its own type.',
          expectedOutput: 'undefined'
        }
      },
      'python': {
        title: 'Python — Readable & Powerful',
        sections: [
          {
            heading: 'Why Python Is Special',
            body: 'Python uses indentation instead of braces to define code blocks, making readable code a requirement. It\'s the world\'s most popular language, dominating data science, ML, web dev (Django/Flask), and automation. Its "batteries included" standard library handles most tasks without extra packages.'
          },
          {
            heading: 'Data Structures',
            body: 'Four core structures: lists (ordered, mutable), tuples (ordered, immutable), dictionaries (key-value pairs), and sets (unique values). List comprehensions are Python\'s superpower: [x*2 for x in range(5)] creates [0, 2, 4, 6, 8] in one line.',
            code: {
              language: 'python',
              snippet: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nevens = [n for n in numbers if n % 2 == 0]\nprint(evens)  # [2, 4, 6, 8, 10]\n\nuser = {"name": "Alice", "age": 30}\nfor key, val in user.items():\n    print(f"{key}: {val}")\n\nfirst, *middle, last = [1, 2, 3, 4, 5]\nprint(middle)  # [2, 3, 4]',
              explanation: 'List comprehensions replace loops with one-line expressions. The * operator in unpacking captures "the rest" into a list.'
            }
          },
          {
            heading: 'Pythonic Patterns',
            body: 'Use enumerate() for index+value, zip() for parallel iteration, "with" statements for file handling (auto-closes). F-strings (f"Hello {name}") for formatting. The philosophy: "There should be one obvious way to do it."',
            code: {
              language: 'python',
              snippet: 'fruits = ["apple", "banana", "cherry"]\nfor i, fruit in enumerate(fruits):\n    print(f"{i}: {fruit}")\n\nnames = ["Alice", "Bob"]\nscores = [95, 87]\nfor name, score in zip(names, scores):\n    print(f"{name}: {score}")\n\nwith open("data.txt") as file:\n    content = file.read()\n# File auto-closed here',
              explanation: 'enumerate gives index+value. zip pairs parallel lists. "with" guarantees cleanup even if errors occur.'
            }
          },
          {
            heading: 'Classes and OOP',
            body: 'Every method takes "self" as first parameter. __init__ is the constructor. Dunder methods (__str__, __len__, __eq__) enable operator overloading. Dataclasses (3.7+) auto-generate boilerplate for simple data containers. Python supports multiple paradigms: procedural, OOP, and functional.'
          }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#eff6ff,#dbeafe);border-radius:16px;border:2px solid #3b82f6;"><div style="font-weight:700;color:#1d4ed8;text-align:center;margin-bottom:16px;font-size:15px;">Python Data Structures</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:400px;margin:0 auto;"><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #93c5fd;text-align:center;"><div style="font-weight:bold;color:#1d4ed8;">list []</div><div style="font-size:12px;color:#64748b;">Ordered, Mutable</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #93c5fd;text-align:center;"><div style="font-weight:bold;color:#1d4ed8;">tuple ()</div><div style="font-size:12px;color:#64748b;">Ordered, Immutable</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #93c5fd;text-align:center;"><div style="font-weight:bold;color:#1d4ed8;">dict {}</div><div style="font-size:12px;color:#64748b;">Key-Value Lookup</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:2px solid #93c5fd;text-align:center;"><div style="font-weight:bold;color:#1d4ed8;">set {}</div><div style="font-size:12px;color:#64748b;">Unique Values Only</div></div></div></div>',
        codingQuiz: {
          question: 'What is the output of: print(len([x for x in range(10) if x % 3 == 0]))',
          hint: 'range(10) = 0-9. Divisible by 3: 0, 3, 6, 9. Count them.',
          expectedOutput: '4'
        }
      },
      'java': {
        title: 'Java — Enterprise Powerhouse',
        sections: [
          { heading: 'Why Java Endures', body: 'Java runs on the JVM across every OS. It powers Android apps, banking systems, e-commerce, and big data tools (Hadoop, Spark). Over 3 billion devices run Java. Strict typing catches errors at compile time.' },
          { heading: 'Strict Typing and OOP', body: 'Every variable declares its type. Everything lives inside a class. Primitives (int, double, boolean) vs objects (String, arrays). Entry point: public static void main(String[] args). Encapsulation: private fields, public methods.',
            code: { language: 'java', snippet: 'public class Player {\n    private String name;\n    private int health = 100;\n    \n    public Player(String name) {\n        this.name = name;\n    }\n    \n    public void takeDamage(int amount) {\n        health = Math.max(0, health - amount);\n        System.out.println(name + " HP: " + health);\n    }\n}\n// Usage: Player hero = new Player("Alice");', explanation: 'Java enforces encapsulation with private fields and public methods. The "new" keyword creates instances.' }
          },
          { heading: 'Collections and Generics', body: 'List (ordered), Set (unique), Map (key-value), Queue. Generics ensure type safety: List<String> only holds strings. Java 8 Streams enable functional transformations: list.stream().filter().map().collect().' },
          { heading: 'Interfaces', body: 'Interfaces define contracts — what methods a class must implement. A class can implement multiple interfaces but extend only one parent. Since Java 8, interfaces can have default methods with implementation.' }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#fef2f2,#fee2e2);border-radius:16px;border:2px solid #ef4444;"><div style="font-weight:700;color:#dc2626;text-align:center;margin-bottom:16px;font-size:15px;">Java Class Structure</div><div style="max-width:350px;margin:0 auto;background:#fff;border-radius:12px;border:2px solid #fca5a5;overflow:hidden;"><div style="padding:10px;background:#ef4444;color:white;font-weight:bold;text-align:center;">public class ClassName</div><div style="padding:12px;display:flex;flex-direction:column;gap:6px;"><div style="padding:8px;background:#fef2f2;border-radius:6px;border-left:3px solid #f87171;font-size:12px;"><strong>Fields</strong> — private String name;</div><div style="padding:8px;background:#fef2f2;border-radius:6px;border-left:3px solid #fb923c;font-size:12px;"><strong>Constructor</strong> — public ClassName(params)</div><div style="padding:8px;background:#fef2f2;border-radius:6px;border-left:3px solid #fbbf24;font-size:12px;"><strong>Methods</strong> — public void doThing()</div><div style="padding:8px;background:#fef2f2;border-radius:6px;border-left:3px solid #a3e635;font-size:12px;"><strong>main()</strong> — entry point</div></div></div></div>',
        codingQuiz: { question: 'What is the output of: System.out.println("Hello".length())', hint: 'length() returns number of characters.', expectedOutput: '5' }
      },
      'csharp': {
        title: 'C# — Modern & Versatile',
        sections: [
          { heading: 'C# Overview', body: 'Microsoft\'s flagship language on .NET. Combines C++ power with Java safety plus LINQ, async/await, and pattern matching. Used for Unity games, ASP.NET web apps, and cross-platform mobile with .NET MAUI. Strongly typed with excellent Visual Studio tooling.' },
          { heading: 'Core Syntax', body: 'C-style syntax with strong typing. "var" provides local type inference. Value types (int, struct) on stack, reference types (class, string) on heap. Properties replace getter/setter boilerplate. Pattern matching with switch expressions.',
            code: { language: 'csharp', snippet: 'public class Player {\n    public string Name { get; set; }\n    public int Health { get; private set; } = 100;\n    \n    public Player(string name) => Name = name;\n    \n    public bool IsAlive => Health > 0;\n    \n    public string GetStatus() => Health switch {\n        > 75 => "Healthy",\n        > 25 => "Wounded",\n        > 0  => "Critical",\n        _    => "Dead"\n    };\n}', explanation: 'Properties, expression-bodied members (=>), and switch expressions keep C# code concise and readable.' }
          },
          { heading: 'LINQ', body: 'Query data with SQL-like syntax in C#: people.Where(p => p.Age >= 18).OrderBy(p => p.Name).Select(p => p.Name). Works on any IEnumerable — lists, databases, XML, APIs.' },
          { heading: 'Async/Await', body: 'C# pioneered async/await. Methods return Task<T>, await pauses until resolved. The compiler transforms linear code into efficient state machines. Makes responsive UIs and scalable servers natural to write.' }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#f5f3ff,#ede9fe);border-radius:16px;border:2px solid #8b5cf6;"><div style="font-weight:700;color:#6d28d9;text-align:center;margin-bottom:16px;font-size:15px;">C# / .NET Ecosystem</div><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;max-width:350px;margin:0 auto;"><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #ddd6fe;text-align:center;"><div style="font-weight:bold;color:#6d28d9;">Unity Games</div><div style="font-size:11px;color:#64748b;">2D/3D + VR/AR</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #ddd6fe;text-align:center;"><div style="font-weight:bold;color:#6d28d9;">ASP.NET</div><div style="font-size:11px;color:#64748b;">Web APIs</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #ddd6fe;text-align:center;"><div style="font-weight:bold;color:#6d28d9;">.NET MAUI</div><div style="font-size:11px;color:#64748b;">Mobile Apps</div></div><div style="padding:12px;background:#fff;border-radius:10px;border:1px solid #ddd6fe;text-align:center;"><div style="font-weight:bold;color:#6d28d9;">Azure</div><div style="font-size:11px;color:#64748b;">Cloud</div></div></div></div>',
        codingQuiz: { question: 'In C#, what is the output of: Console.WriteLine("Hello World".Split(" ").Length)', hint: 'Split(" ") creates an array of words. Length counts elements.', expectedOutput: '2' }
      },
      'cpp': {
        title: 'C++ — Performance King',
        sections: [
          { heading: 'The Power of C++', body: 'Compiles to machine code with zero runtime overhead. Powers game engines (Unreal), OS kernels, browsers, and databases. Harder to learn but gives deep insight into how computers actually work.' },
          { heading: 'Memory Management', body: 'Stack (auto-freed) vs heap (new/delete). Modern C++11+ uses smart pointers: unique_ptr (one owner, auto-deletes), shared_ptr (reference-counted). Eliminates memory leaks when used properly.',
            code: { language: 'cpp', snippet: '#include <iostream>\n#include <vector>\n#include <memory>\n\nclass Player {\n    std::string name;\n    int health;\npublic:\n    Player(const std::string& n, int hp=100)\n        : name(n), health(hp) {}\n    void hit(int dmg) {\n        health = std::max(0, health - dmg);\n        std::cout << name << " HP: " << health << "\\n";\n    }\n};\n\nint main() {\n    auto hero = std::make_unique<Player>("Alice");\n    hero->hit(30);  // Alice HP: 70\n    // auto-freed when scope ends\n}', explanation: 'unique_ptr ensures automatic cleanup. Vectors manage their own memory. Range-based for loops are clean C++11 syntax.' }
          },
          { heading: 'STL and Templates', body: 'Standard Template Library: vector, map, set, queue. Algorithms: sort, find, transform. Templates enable generic code. std::sort works on any container type.' },
          { heading: 'Modern C++', body: 'Auto type inference, range-for, lambdas, move semantics, structured bindings. Modern C++ is almost a different language from old-style C++. Motto: "don\'t pay for what you don\'t use."' }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#fffbeb,#fef3c7);border-radius:16px;border:2px solid #f59e0b;"><div style="font-weight:700;color:#b45309;text-align:center;margin-bottom:16px;font-size:15px;">C++ Memory Layout</div><div style="max-width:300px;margin:0 auto;display:flex;flex-direction:column;gap:4px;"><div style="padding:12px;background:#fef3c7;border-radius:8px 8px 4px 4px;border:2px solid #fbbf24;text-align:center;font-size:13px;"><strong>Stack</strong> — Auto variables (fast)</div><div style="padding:12px;background:#fed7aa;border-radius:4px;border:2px solid #fb923c;text-align:center;font-size:13px;"><strong>Heap</strong> — Dynamic alloc (manual/smart)</div><div style="padding:12px;background:#fecaca;border-radius:4px;border:2px solid #f87171;text-align:center;font-size:13px;"><strong>Static</strong> — Globals</div><div style="padding:12px;background:#e2e8f0;border-radius:4px 4px 8px 8px;border:2px solid #94a3b8;text-align:center;font-size:13px;"><strong>Code</strong> — Read-only instructions</div></div></div>',
        codingQuiz: { question: 'In C++, what is the output of: cout << (17 % 5)', hint: '% gives remainder. 17 / 5 = 3 remainder ?', expectedOutput: '2' }
      },
      'ruby': {
        title: 'Ruby — Programmer Happiness',
        sections: [
          { heading: 'Ruby\'s Philosophy', body: 'Created to make programming enjoyable. Syntax reads like English: 5.times { puts "hello" }. Everything is an object — even numbers have methods. Ruby on Rails revolutionized web dev and is used by Shopify, GitHub, Airbnb.' },
          { heading: 'Blocks and Iteration', body: 'Blocks are chunks of code passed to methods. Almost all iteration uses them. select filters, map transforms, reduce aggregates. Methods ending in ? return booleans, ! modify in place. Symbols (:name) are lightweight immutable identifiers.',
            code: { language: 'ruby', snippet: 'puts 42.even?      # true\nputs "hello".upcase # HELLO\n\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nevens = numbers.select { |n| n.even? }\nputs evens.inspect  # [2, 4, 6, 8, 10]\n\ntotal = numbers.reduce(0) { |sum, n| sum + n }\nputs total  # 55\n\nuser = { name: "Alice", role: :admin }\nputs user[:name]  # Alice', explanation: 'Ruby methods with ? return booleans. Blocks make iteration elegant and readable. Symbols are perfect hash keys.' }
          },
          { heading: 'Classes and Mixins', body: 'Single inheritance + modules for mixins. Include a module to add its methods to any class — composition over inheritance. Open classes let you add methods to existing types. Metaprogramming: method_missing, define_method, attr_accessor.' },
          { heading: 'The Rails Effect', body: 'Ruby on Rails introduced "convention over configuration" — follow naming conventions and the framework does the rest. Active Record ORM, RESTful routing, MVC architecture. Still the fastest way to go from idea to deployed web app.' }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#fdf2f8,#fce7f3);border-radius:16px;border:2px solid #ec4899;"><div style="font-weight:700;color:#be185d;text-align:center;margin-bottom:16px;font-size:15px;">Ruby Object Hierarchy</div><div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="padding:10px 24px;background:#ec4899;color:white;border-radius:10px;font-weight:bold;">BasicObject</div><div style="width:2px;height:8px;background:#ec4899;"></div><div style="padding:10px 24px;background:#f472b6;color:white;border-radius:10px;font-weight:bold;">Object + Kernel</div><div style="width:2px;height:8px;background:#ec4899;"></div><div style="display:flex;gap:6px;"><div style="padding:8px 12px;background:#fce7f3;border-radius:8px;font-size:12px;border:1px solid #f9a8d4;">Your Class</div><div style="padding:8px 12px;background:#fef3c7;border-radius:8px;font-size:12px;border:1px solid #fde68a;">+ Module</div><div style="padding:8px 12px;background:#dcfce7;border-radius:8px;font-size:12px;border:1px solid #bbf7d0;">+ Mixin</div></div></div></div>',
        codingQuiz: { question: 'What is the output of: puts [1,2,3,4,5].select(&:odd?).sum', hint: 'Odd numbers: 1,3,5. Sum: 1+3+5', expectedOutput: '9' }
      },
      'go': {
        title: 'Go — Simple, Fast, Concurrent',
        sections: [
          { heading: 'Go\'s Design', body: 'Created at Google to solve slow compile times and complex concurrency. Compiles to a single static binary in seconds. No classes, no inheritance, no exceptions — radical simplicity. Powers Docker, Kubernetes, Terraform.' },
          { heading: 'Structs and Interfaces', body: 'Structs hold data, methods defined separately with a "receiver." Interfaces are implicitly satisfied — if your type has the right methods, it implements the interface. No "implements" keyword. Multiple return values replace exceptions.',
            code: { language: 'go', snippet: 'type Player struct {\n    Name   string\n    Health int\n}\n\nfunc (p *Player) TakeDamage(amount int) {\n    p.Health -= amount\n    fmt.Printf("%s HP: %d\\n", p.Name, p.Health)\n}\n\nfunc main() {\n    hero := Player{Name: "Alice", Health: 100}\n    hero.TakeDamage(30)  // Alice HP: 70\n    \n    // Multiple return values\n    val, err := strconv.Atoi("42")\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(val)  // 42\n}', explanation: 'Go methods have a receiver (p *Player). := declares and assigns. Error handling is explicit: check err != nil after every call.' }
          },
          { heading: 'Goroutines and Channels', body: 'Goroutines: lightweight concurrent functions (go keyword, ~2KB each vs ~1MB threads). Channels: typed pipes for safe communication. "Don\'t communicate by sharing memory; share memory by communicating." Eliminates most race conditions.',
            code: { language: 'go', snippet: 'func fetch(url string, ch chan<- string) {\n    time.Sleep(time.Second)\n    ch <- "Got " + url\n}\n\nfunc main() {\n    ch := make(chan string)\n    urls := []string{"a.com", "b.com", "c.com"}\n    \n    for _, url := range urls {\n        go fetch(url, ch)  // 3 goroutines\n    }\n    \n    for i := 0; i < 3; i++ {\n        fmt.Println(<-ch)  // receive results\n    }\n    // All 3 in ~1 second, not 3!\n}', explanation: 'Three goroutines fetch in parallel. Channel collects results safely. Total: ~1 second instead of 3.' }
          },
          { heading: 'Error Handling', body: 'No exceptions — functions return errors as values. Check if err != nil after every call. Verbose but explicit. Go 1.13 added error wrapping for better error chains.' }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#ecfeff,#cffafe);border-radius:16px;border:2px solid #06b6d4;"><div style="font-weight:700;color:#0e7490;text-align:center;margin-bottom:16px;font-size:15px;">Go Concurrency</div><div style="display:flex;align-items:center;gap:8px;justify-content:center;max-width:400px;margin:0 auto;"><div style="flex:1;padding:12px;background:#fff;border-radius:10px;border:2px solid #67e8f9;text-align:center;"><div style="font-weight:bold;color:#0e7490;">Goroutine A</div><div style="font-size:11px;font-family:monospace;">go func()</div></div><div style="padding:8px 14px;background:#06b6d4;color:white;border-radius:8px;font-weight:bold;font-size:12px;">Channel</div><div style="flex:1;padding:12px;background:#fff;border-radius:10px;border:2px solid #67e8f9;text-align:center;"><div style="font-weight:bold;color:#0e7490;">Goroutine B</div><div style="font-size:11px;font-family:monospace;">data := <-ch</div></div></div></div>',
        codingQuiz: { question: 'In Go, what does fmt.Println(len("Hello, World!")) output?', hint: 'len() counts bytes. ASCII = 1 byte each. Count all characters.', expectedOutput: '13' }
      },
      'typescript': {
        title: 'TypeScript — JS with Types',
        sections: [
          { heading: 'Why TypeScript', body: 'Adds static types to JavaScript. Catches bugs before runtime: wrong types, misspelled properties, wrong arguments. Every valid JS is valid TS — adopt gradually. Now the standard for serious web development.' },
          { heading: 'Types and Inference', body: 'Add types with colon syntax: let name: string. But TypeScript infers most types automatically. Interfaces define object shapes. Union types (string | number) for multiple possibilities. Generics for reusable typed functions.',
            code: { language: 'typescript', snippet: 'interface User {\n  id: number;\n  name: string;\n  role: "admin" | "user";\n  email?: string; // optional\n}\n\nfunction greet(user: User): string {\n  return "Hello " + user.name;\n}\n\n// Generics\nfunction first<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\n\nconst n = first([1, 2, 3]);     // number\nconst s = first(["a", "b"]);    // string', explanation: 'Union literal types restrict values. Optional properties use ?. Generics let you write type-safe reusable code.' }
          },
          { heading: 'Advanced Types', body: 'Utility types: Partial<T> (all optional), Pick<T, keys>, Omit<T, keys>, Record<K, V>. Mapped and conditional types derive new types programmatically. Keeps types DRY as codebases grow.' },
          { heading: 'In Practice', body: 'React with TSX gives typed props. Prisma generates database types. Strict mode catches null access, wrong args, missing properties. VS Code uses TS even for JS files for autocompletion.' }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#f0fdf4,#dcfce7);border-radius:16px;border:2px solid #22c55e;"><div style="font-weight:700;color:#15803d;text-align:center;margin-bottom:16px;font-size:15px;">TypeScript Type Hierarchy</div><div style="display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="padding:10px 20px;background:#22c55e;color:white;border-radius:10px;font-weight:bold;">unknown (top)</div><div style="width:2px;height:6px;background:#22c55e;"></div><div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;"><div style="padding:6px 10px;background:#fff;border-radius:6px;font-size:12px;border:1px solid #86efac;">string</div><div style="padding:6px 10px;background:#fff;border-radius:6px;font-size:12px;border:1px solid #86efac;">number</div><div style="padding:6px 10px;background:#fff;border-radius:6px;font-size:12px;border:1px solid #86efac;">boolean</div><div style="padding:6px 10px;background:#fff;border-radius:6px;font-size:12px;border:1px solid #86efac;">object</div></div><div style="width:2px;height:6px;background:#22c55e;"></div><div style="padding:10px 20px;background:#166534;color:white;border-radius:10px;font-weight:bold;">never (bottom)</div></div></div>',
        codingQuiz: { question: 'What type does TS infer for: const x = [1, "hello"]', hint: 'TS infers the union of all element types.', expectedOutput: '(string | number)[]' }
      },
      'rust': {
        title: 'Rust — Safe & Fast',
        sections: [
          { heading: 'Why Rust Is Revolutionary', body: 'Memory safety without garbage collection via the ownership system. If it compiles, no null pointers, no data races, no buffer overflows. Used by Firefox, Dropbox, Discord, and the Linux kernel. Voted "most loved language" for years.' },
          { heading: 'Ownership', body: 'Every value has one owner. When owner leaves scope, value is dropped. Borrow with &T (shared read) or &mut T (exclusive write). Compiler enforces these rules — prevents use-after-free, double-free, dangling pointers at compile time.',
            code: { language: 'rust', snippet: 'fn main() {\n    let name = String::from("Alice");\n    greet(name);  // ownership moves\n    // name is invalid here!\n    \n    let score = String::from("95");\n    print_len(&score);    // borrow\n    println!("{}", score); // still valid\n    \n    let mut items = vec!["sword"];\n    items.push("shield"); // mut ok\n}\n\nfn greet(n: String) { println!("Hi {}!", n); }\nfn print_len(s: &String) { println!("{}", s.len()); }', explanation: 'Moving transfers ownership — original variable becomes invalid. & borrows without taking ownership. The compiler tells you exactly where violations occur.' }
          },
          { heading: 'Option and Result', body: 'No null, no exceptions. Option<T> = Some(value) or None. Result<T,E> = Ok(value) or Err(error). Compiler forces you to handle both cases. The ? operator propagates errors concisely.' },
          { heading: 'Zero-Cost Abstractions', body: 'High-level features (iterators, closures, generics) compile to the same code as hand-written loops. No GC pauses, no runtime overhead. Matches or beats C/C++ in benchmarks while being memory-safe.' }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#fef2f2,#fee2e2);border-radius:16px;border:2px solid #ef4444;"><div style="font-weight:700;color:#dc2626;text-align:center;margin-bottom:16px;font-size:15px;">Rust Ownership Rules</div><div style="display:flex;flex-direction:column;gap:8px;max-width:400px;margin:0 auto;"><div style="padding:12px;background:#fff;border-radius:10px;border-left:4px solid #ef4444;font-size:13px;"><strong>Rule 1:</strong> Each value has one owner</div><div style="padding:12px;background:#fff;border-radius:10px;border-left:4px solid #f97316;font-size:13px;"><strong>Rule 2:</strong> Owner leaves scope = value dropped</div><div style="padding:12px;background:#fff;border-radius:10px;border-left:4px solid #eab308;font-size:13px;"><strong>Rule 3:</strong> Many &amp;T OR one &amp;mut T</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:4px;"><div style="padding:10px;background:#dcfce7;border-radius:8px;text-align:center;font-size:12px;"><strong>Option&lt;T&gt;</strong><br/>Replaces null</div><div style="padding:10px;background:#dbeafe;border-radius:8px;text-align:center;font-size:12px;"><strong>Result&lt;T,E&gt;</strong><br/>Replaces exceptions</div></div></div></div>',
        codingQuiz: { question: 'What does println!("{}", vec![10,20,30].len()) output?', hint: 'len() counts vector elements.', expectedOutput: '3' }
      },
      'php': {
        title: 'PHP — The Web\'s Workhorse',
        sections: [
          { heading: 'PHP Powers the Web', body: 'Runs ~77% of websites with known server-side language. WordPress (43% of ALL websites), Wikipedia, Slack, Etsy. Server-side: browser requests page, PHP executes, generates HTML, sends response. User never sees PHP code.' },
          { heading: 'Modern PHP', body: 'Variables start with $. Arrays are ordered maps (list + dictionary). PHP 8+ has constructor promotion, match expressions, named arguments, strict typing. Each HTTP request starts fresh (shared-nothing architecture) — inherently scalable.',
            code: { language: 'php', snippet: '<?php\ndeclare(strict_types=1);\n\nclass User {\n    public function __construct(\n        private string $name,\n        private int $age\n    ) {}\n    \n    public function greet(): string {\n        return "Hello, {$this->name}!";\n    }\n}\n\n$user = new User(name: "Alice", age: 30);\necho $user->greet(); // Hello, Alice!\n\n$nums = [3, 1, 4, 1, 5, 9];\n$sum = array_reduce($nums, fn($c, $n) => $c + $n, 0);\necho $sum; // 23', explanation: 'PHP 8 constructor promotion declares properties inline. strict_types enforces type checking. Arrow functions (fn =>) are concise.' }
          },
          { heading: 'Laravel', body: 'PHP\'s premier framework. Eloquent ORM for readable database queries, Blade templating, built-in auth, job queues. Philosophy: "developer happiness." Composer package manager provides thousands of quality libraries.' },
          { heading: 'PHP Today', body: 'PHP 8.3 has typed properties, enums, fibers (async), JIT compilation. Nothing like PHP of 2005. With WordPress powering 43% of the web, PHP knowledge remains one of the most marketable skills.' }
        ],
        diagram: '<div style="padding:20px;background:linear-gradient(135deg,#eef2ff,#e0e7ff);border-radius:16px;border:2px solid #6366f1;"><div style="font-weight:700;color:#4338ca;text-align:center;margin-bottom:16px;font-size:15px;">PHP Request Lifecycle</div><div style="display:flex;align-items:center;gap:6px;justify-content:center;flex-wrap:wrap;"><div style="padding:10px;background:#fff;border-radius:10px;border:2px solid #a5b4fc;text-align:center;font-size:12px;"><strong>Browser</strong><br/>Request</div><div style="color:#6366f1;">&#8594;</div><div style="padding:10px;background:#fff;border-radius:10px;border:2px solid #a5b4fc;text-align:center;font-size:12px;"><strong>Server</strong><br/>Nginx</div><div style="color:#6366f1;">&#8594;</div><div style="padding:10px;background:#6366f1;color:white;border-radius:10px;text-align:center;font-size:12px;"><strong>PHP</strong><br/>Execute</div><div style="color:#6366f1;">&#8594;</div><div style="padding:10px;background:#fff;border-radius:10px;border:2px solid #a5b4fc;text-align:center;font-size:12px;"><strong>HTML</strong><br/>Response</div></div></div>',
        codingQuiz: { question: 'What is the output of: echo strlen("Hello World");', hint: 'strlen() counts characters including the space.', expectedOutput: '11' }
      }
    }
  };

  return lessons[category]?.[topic] || null;
}

const LessonPage = () => {
  const { category, topic } = useParams<{ category: string; topic: string }>();

  if (!category || !topic) {
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

  const lesson = getLessonContent(category, topic);

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

          {/* Sections */}
          <div className="space-y-10">
            {lesson.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary/70" />
                  {section.heading}
                </h2>
                <p className="text-[15px] leading-relaxed text-foreground/85 mb-4">
                  {section.body}
                </p>

                {section.code && (
                  <div className="rounded-xl overflow-hidden border border-border/60 mb-2">
                    <div className="flex items-center gap-2 px-4 py-2 bg-muted/60 border-b border-border/40">
                      <Code className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {section.code.language}
                      </span>
                    </div>
                    <pre className="p-4 bg-muted/30 overflow-x-auto text-sm leading-relaxed">
                      <code>{section.code.snippet}</code>
                    </pre>
                    <div className="px-4 py-3 bg-muted/20 border-t border-border/30">
                      <p className="text-sm text-muted-foreground">{section.code.explanation}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <div dangerouslySetInnerHTML={{ __html: lesson.diagram }} />
          </motion.div>

          {/* Quiz */}
          <CodingQuizSection quiz={lesson.codingQuiz} />
        </motion.div>
      </div>
    </div>
  );
};

export default LessonPage;
