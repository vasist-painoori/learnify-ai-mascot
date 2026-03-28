import { LessonData } from './types';

export const printingLessons: Record<string, LessonData> = {
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
  }
};
