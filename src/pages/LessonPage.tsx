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
            <h3>Key Components of an FDM Printer</h3>
            <ul>
              <li><strong>Extruder</strong>: Pushes filament into the hot end</li>
              <li><strong>Hot End</strong>: Melts the filament for deposition</li>
              <li><strong>Build Plate</strong>: The surface where the print is created</li>
              <li><strong>Stepper Motors</strong>: Control precise movement in X, Y, and Z axes</li>
              <li><strong>Controller Board</strong>: The "brain" that coordinates all movements</li>
            </ul>
            <h3>Getting Your First Print</h3>
            <ol>
              <li>Level your print bed for proper first layer adhesion</li>
              <li>Load filament into your printer</li>
              <li>Choose or create a 3D model (.STL file)</li>
              <li>Slice the model with slicer software (like Cura or PrusaSlicer)</li>
              <li>Transfer the G-code to your printer</li>
              <li>Start the print and monitor the first few layers</li>
            </ol>
            <p>Understanding these basic concepts will help you get started with 3D printing and troubleshoot common issues as you begin your journey.</p>
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
              <li><strong>Nylon</strong>: Strong, durable, with good layer adhesion</li>
              <li><strong>PC (Polycarbonate)</strong>: Extremely strong, heat resistant</li>
            </ul>
            <h3>Filament Properties to Consider</h3>
            <table border="1" cellpadding="5">
              <tr>
                <th>Property</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>Diameter</td>
                <td>Typically 1.75mm or 2.85mm (verify your printer's requirements)</td>
              </tr>
              <tr>
                <td>Printing Temperature</td>
                <td>PLA: 190-220°C, ABS: 220-250°C, PETG: 230-250°C</td>
              </tr>
              <tr>
                <td>Bed Temperature</td>
                <td>PLA: 20-60°C, ABS: 90-120°C, PETG: 70-90°C</td>
              </tr>
              <tr>
                <td>Strength</td>
                <td>Nylon > ABS > PETG > PLA (general guideline)</td>
              </tr>
              <tr>
                <td>Flexibility</td>
                <td>TPU > Nylon > PETG > ABS > PLA</td>
              </tr>
            </table>
            <h3>Storing Filament Properly</h3>
            <p>Most filaments are hygroscopic and will absorb moisture from the air, which can negatively affect print quality:</p>
            <ul>
              <li>Store in airtight containers with desiccant (silica gel)</li>
              <li>Consider using a filament dryer for moisture-sensitive materials</li>
              <li>Vacuum-sealed bags can extend shelf life when not in use</li>
            </ul>
            <p>Experimenting with different filaments will help you discover the best materials for your specific applications.</p>
          `
        };
      case 'slicers':
        return {
          title: 'Slicer Software',
          content: `
            <h2>Mastering Slicer Software</h2>
            <p>Slicer software converts your 3D models into instructions (G-code) that your 3D printer can understand. Choosing the right slicer and understanding its settings is crucial for successful prints.</p>
            
            <h3>Popular Slicing Software</h3>
            <ul>
              <li><strong>Ultimaker Cura</strong>: Free, beginner-friendly with advanced options</li>
              <li><strong>PrusaSlicer</strong>: Open-source, excellent for Prusa printers but works with many others</li>
              <li><strong>Simplify3D</strong>: Premium paid software with advanced features</li>
              <li><strong>Creality Slicer</strong>: Tailored for Creality printers</li>
              <li><strong>IdeaMaker</strong>: Feature-rich, works well with Raise3D printers</li>
            </ul>
            
            <h3>Key Slicer Settings</h3>
            
            <h4>Layer Height</h4>
            <p>Determines the vertical resolution of your print:</p>
            <ul>
              <li><strong>Fine Detail</strong>: 0.05-0.1mm (slower prints, better detail)</li>
              <li><strong>Standard</strong>: 0.15-0.2mm (good balance)</li>
              <li><strong>Draft</strong>: 0.3-0.4mm (faster prints, less detail)</li>
            </ul>
            
            <h4>Infill</h4>
            <p>The internal structure of your print:</p>
            <ul>
              <li><strong>Percentage</strong>: 10-20% for normal parts, 40-100% for stronger parts</li>
              <li><strong>Patterns</strong>: Grid, honeycomb, triangular, gyroid, etc.</li>
            </ul>
            
            <h4>Print Speed</h4>
            <ul>
              <li><strong>Outer Walls</strong>: 20-40mm/s for better quality</li>
              <li><strong>Inner Walls</strong>: 40-60mm/s</li>
              <li><strong>Infill</strong>: 60-100mm/s</li>
            </ul>
            
            <h4>Temperature</h4>
            <p>Material-specific settings that affect print quality and strength.</p>
            
            <h4>Supports</h4>
            <p>Generated structures that hold up overhanging features:</p>
            <ul>
              <li><strong>Placement</strong>: Everywhere or touching buildplate only</li>
              <li><strong>Overhang Angle</strong>: Typically 45-60 degrees</li>
            </ul>
            
            <h3>Workflow Tips</h3>
            <ol>
              <li>Import your model (.STL, .OBJ, etc.)</li>
              <li>Orient for optimal strength or minimum support</li>
              <li>Apply appropriate settings for your material</li>
              <li>Preview the sliced model (check for issues)</li>
              <li>Export G-code and transfer to your printer</li>
            </ol>
            
            <p>Taking time to understand your slicer software will dramatically improve your print quality and success rate.</p>
          `
        };
      case 'troubleshooting':
        return {
          title: 'Print Troubleshooting',
          content: `
            <h2>Common 3D Printing Problems and Solutions</h2>
            <p>Even experienced makers encounter issues with 3D printing. Learning to identify and solve common problems will help you achieve better results.</p>
            
            <h3>First Layer Problems</h3>
            <div class="problem-card">
              <h4>Not Sticking to Bed</h4>
              <p><strong>Causes:</strong> Bed not level, nozzle too high, bed temperature too low, or inadequate adhesion surface</p>
              <p><strong>Solutions:</strong></p>
              <ul>
                <li>Re-level the bed (paper test or auto-leveling)</li>
                <li>Clean the build surface with isopropyl alcohol</li>
                <li>Increase bed temperature by 5-10°C</li>
                <li>Apply adhesion helpers (glue stick, hairspray, etc.)</li>
                <li>Slow down first layer speed to 20mm/s</li>
              </ul>
            </div>
            
            <div class="problem-card">
              <h4>Elephant's Foot</h4>
              <p><strong>Causes:</strong> First layer squished too much, bed temperature too high</p>
              <p><strong>Solutions:</strong></p>
              <ul>
                <li>Adjust Z-offset to raise nozzle slightly</li>
                <li>Reduce bed temperature</li>
                <li>Use elephant foot compensation in slicer</li>
              </ul>
            </div>
            
            <h3>Layer Problems</h3>
            <div class="problem-card">
              <h4>Layer Separation/Delamination</h4>
              <p><strong>Causes:</strong> Poor layer adhesion, printing temperature too low, printing too fast</p>
              <p><strong>Solutions:</strong></p>
              <ul>
                <li>Increase hotend temperature by 5-10°C</li>
                <li>Reduce print cooling fan speed</li>
                <li>Slow down print speed</li>
                <li>Check for drafts around printer</li>
              </ul>
            </div>
            
            <div class="problem-card">
              <h4>Stringing/Oozing</h4>
              <p><strong>Causes:</strong> Inadequate retraction settings, temperature too high</p>
              <p><strong>Solutions:</strong></p>
              <ul>
                <li>Increase retraction distance (5-8mm for Bowden, 1-2mm for direct drive)</li>
                <li>Increase retraction speed (40-60mm/s)</li>
                <li>Lower printing temperature by 5-10°C</li>
                <li>Enable "combing" or "avoid crossing perimeters" in slicer</li>
              </ul>
            </div>
            
            <h3>Structural Problems</h3>
            <div class="problem-card">
              <h4>Warping</h4>
              <p><strong>Causes:</strong> Uneven cooling, inadequate bed adhesion, material properties (especially ABS)</p>
              <p><strong>Solutions:</strong></p>
              <ul>
                <li>Use a heated bed with appropriate temperature</li>
                <li>Apply brim or raft in slicer settings</li>
                <li>Use an enclosure to maintain ambient temperature</li>
                <li>Consider different materials (PETG instead of ABS)</li>
              </ul>
            </div>
            
            <div class="problem-card">
              <h4>Under-extrusion</h4>
              <p><strong>Causes:</strong> Clogged nozzle, incorrect flow rate, filament feed issues</p>
              <p><strong>Solutions:</strong></p>
              <ul>
                <li>Clean or replace the nozzle</li>
                <li>Increase flow rate (5-10%)</li>
                <li>Check for filament grinding in extruder</li>
                <li>Increase temperature by 5-10°C</li>
              </ul>
            </div>
            
            <p>Remember to change one setting at a time and test, making it easier to identify which adjustment solved the problem.</p>
          `
        };
      case 'design':
        return {
          title: 'Model Design',
          content: `
            <h2>3D Model Design for 3D Printing</h2>
            <p>Creating or preparing 3D models that are optimized for 3D printing requires understanding both design principles and the limitations of the printing process.</p>
            
            <h3>Design Software Options</h3>
            <ul>
              <li><strong>TinkerCAD</strong>: Browser-based, beginner-friendly</li>
              <li><strong>Fusion 360</strong>: Powerful CAD software with free options for hobbyists</li>
              <li><strong>Blender</strong>: Free, open-source 3D creation suite</li>
              <li><strong>FreeCAD</strong>: Open-source parametric 3D modeler</li>
              <li><strong>OpenSCAD</strong>: Programmer's solid 3D CAD modeler</li>
            </ul>
            
            <h3>Design Considerations for 3D Printing</h3>
            
            <h4>Wall Thickness</h4>
            <p>Ensure walls are thick enough to be printed successfully:</p>
            <ul>
              <li>Minimum wall thickness should be at least 2x nozzle diameter</li>
              <li>Typically 0.8-1.2mm for a 0.4mm nozzle</li>
              <li>Structural walls may need to be thicker (2-3mm)</li>
            </ul>
            
            <h4>Overhangs</h4>
            <p>Design to minimize overhangs or support needs:</p>
            <ul>
              <li>45° is generally the maximum angle without supports</li>
              <li>Use chamfers instead of overhangs where possible</li>
              <li>Consider splitting and rejoining parts with difficult geometries</li>
            </ul>
            
            <h4>Bridging</h4>
            <ul>
              <li>Keep bridges under 5mm for reliable printing</li>
              <li>Orient parts to minimize bridge length</li>
            </ul>
            
            <h4>Tolerances</h4>
            <p>Account for printer accuracy and material expansion:</p>
            <ul>
              <li>0.2-0.3mm gap for parts that need to fit together</li>
              <li>Test with tolerance calibration prints</li>
            </ul>
            
            <h3>Design for Strength</h3>
            <ul>
              <li><strong>Layer Orientation</strong>: Orient parts so that force is applied perpendicular to layer lines</li>
              <li><strong>Fillets and Chamfers</strong>: Reduce stress concentrations at corners</li>
              <li><strong>Ribs and Gussets</strong>: Add structural elements instead of increasing overall thickness</li>
            </ul>
            
            <h3>File Preparation</h3>
            <ol>
              <li><strong>Check for Manifold Geometry</strong>: Ensure the model is "watertight" with no holes or non-manifold edges</li>
              <li><strong>STL Export Resolution</strong>: Balance between detail and file size</li>
              <li><strong>Orientation for Printing</strong>: Consider how the part will be oriented on the printer</li>
            </ol>
            
            <h3>Resources and Model Repositories</h3>
            <ul>
              <li><strong>Thingiverse</strong>: Huge collection of free models</li>
              <li><strong>Printables</strong>: High-quality models with print settings</li>
              <li><strong>Thangs</strong>: Model search engine with AI features</li>
              <li><strong>MyMiniFactory</strong>: Curated models (some free, some paid)</li>
            </ul>
            
            <p>With practice, you'll develop an intuition for what will print well and how to design specifically for the 3D printing process.</p>
          `
        };
      case 'post-processing':
        return {
          title: 'Post-Processing',
          content: `
            <h2>Post-Processing Techniques for 3D Prints</h2>
            <p>Post-processing can transform a rough 3D print into a professional-looking finished product. These techniques help improve appearance, strength, and functionality.</p>
            
            <h3>Support Removal</h3>
            <p>Before any other post-processing:</p>
            <ul>
              <li>Use flush cutters for larger supports</li>
              <li>Needle-nose pliers for hard-to-reach areas</li>
              <li>Craft knife for detailed clean-up</li>
              <li>Consider dissolving supports for water-soluble support materials</li>
            </ul>
            
            <h3>Surface Smoothing</h3>
            
            <h4>Sanding</h4>
            <p>Effective for most materials:</p>
            <ol>
              <li>Start with coarse grit (80-120) to remove layer lines</li>
              <li>Progress through medium (220-320) grits</li>
              <li>Finish with fine (400-800+) grits for a smooth surface</li>
              <li>Wet sanding often yields better results</li>
            </ol>
            
            <h4>Chemical Smoothing</h4>
            <ul>
              <li><strong>ABS</strong>: Acetone vapor smoothing
                <ol>
                  <li>Place print in a sealed container with acetone-soaked paper towels</li>
                  <li>Do NOT heat acetone - it's flammable</li>
                  <li>Check progress every few minutes</li>
                  <li>Remove when desired smoothness is achieved</li>
                </ol>
              </li>
              <li><strong>PLA</strong>: More resistant to chemical smoothing, but can use ethyl acetate (less effective)</li>
            </ul>
            
            <h4>Heat Smoothing</h4>
            <ul>
              <li>Heat gun at low setting (careful not to melt details)</li>
              <li>Hot air rework station for precise control</li>
            </ul>
            
            <h3>Filling and Priming</h3>
            <ul>
              <li>Use wood filler or automotive body filler for gaps</li>
              <li>Apply filler primer spray to hide remaining layer lines</li>
              <li>Sand between primer coats for best results</li>
            </ul>
            
            <h3>Painting Techniques</h3>
            
            <h4>Preparation</h4>
            <ul>
              <li>Clean print thoroughly with isopropyl alcohol</li>
              <li>Apply appropriate primer for your paint type</li>
            </ul>
            
            <h4>Painting Methods</h4>
            <ul>
              <li><strong>Spray Painting</strong>: Even coats, good for large areas
                <ul>
                  <li>Apply in light, even passes</li>
                  <li>Keep the can moving</li>
                  <li>Multiple light coats are better than one heavy coat</li>
                </ul>
              </li>
              <li><strong>Brush Painting</strong>: Good for details and small parts
                <ul>
                  <li>Use quality brushes appropriate for the paint</li>
                  <li>Thin paints slightly for smoother application</li>
                </ul>
              </li>
              <li><strong>Airbrushing</strong>: Professional results with practice
                <ul>
                  <li>Allows for smooth gradients and fine details</li>
                  <li>Requires proper thinning and air pressure control</li>
                </ul>
              </li>
            </ul>
            
            <h3>Advanced Finishing</h3>
            <ul>
              <li><strong>Weathering</strong>: Dry brushing, washes, pigments</li>
              <li><strong>Polishing</strong>: After wet-sanding to high grit (1500+)</li>
              <li><strong>Clear Coating</strong>: Protects paint and adds shine or matte finish</li>
            </ul>
            
            <h3>Functional Post-Processing</h3>
            <ul>
              <li><strong>Drilling/Tapping</strong>: Creating threaded holes</li>
              <li><strong>Heat-Set Inserts</strong>: Adding metal threads to plastic parts</li>
              <li><strong>Metal Reinforcement</strong>: Adding metal rods for strength</li>
              <li><strong>Epoxy Coating</strong>: Adding durability and waterproofing</li>
            </ul>
            
            <p>Post-processing is often what separates amateur-looking prints from professional ones. Start with simple techniques and progress to more advanced methods as you gain experience.</p>
          `
        };
      case 'settings':
        return {
          title: 'Advanced Settings',
          content: `
            <h2>Advanced 3D Printer Settings</h2>
            <p>Mastering advanced slicer and printer settings allows you to achieve better print quality, stronger parts, and solve specific printing challenges.</p>
            
            <h3>Advanced Extrusion Settings</h3>
            
            <h4>Linear Advance / Pressure Advance</h4>
            <p>Compensates for pressure build-up in the nozzle:</p>
            <ul>
              <li>Reduces blobs at corners and improves dimensional accuracy</li>
              <li>Requires firmware support (Marlin K-factor or Klipper Pressure Advance)</li>
              <li>Calibration typically requires printing test patterns</li>
            </ul>
            
            <h4>Flow Rate Calibration</h4>
            <ul>
              <li>Print single-wall test cube</li>
              <li>Measure wall thickness with calipers</li>
              <li>Adjust flow rate: (Expected thickness ÷ Measured thickness) × Current flow rate</li>
            </ul>
            
            <h3>Layer Strategies</h3>
            
            <h4>Adaptive Layer Heights</h4>
            <ul>
              <li>Varies layer height based on model geometry</li>
              <li>Thinner layers for curved surfaces, thicker for vertical walls</li>
              <li>Reduces print time while maintaining detail where needed</li>
            </ul>
            
            <h4>Ironing</h4>
            <ul>
              <li>Passes the hot nozzle over top surfaces to smooth them</li>
              <li>Typically uses very low flow rate (5-10%)</li>
              <li>Great for flat top surfaces</li>
            </ul>
            
            <h3>Advanced Infill Techniques</h3>
            
            <h4>Variable Infill Density</h4>
            <ul>
              <li>Increasing density near surfaces or stress points</li>
              <li>Gradual infill steps in slicer settings</li>
            </ul>
            
            <h4>Custom Infill Patterns</h4>
            <ul>
              <li><strong>Gyroid</strong>: Excellent strength-to-weight ratio, good for flexing parts</li>
              <li><strong>Cubic</strong>: Great all-around 3D infill for strength</li>
              <li><strong>Triangular</strong>: Good for parts with vertical stress</li>
              <li><strong>Concentric</strong>: Useful for flexible parts</li>
            </ul>
            
            <h3>Advanced Temperature Control</h3>
            
            <h4>Temperature Towers</h4>
            <p>Test prints that vary temperature at different heights to find optimal settings.</p>
            
            <h4>PID Tuning</h4>
            <ul>
              <li>Improves temperature stability for hotend and bed</li>
              <li>Use G-code commands to initiate and save PID tuning</li>
              <li>Results in more consistent extrusion and layer adhesion</li>
            </ul>
            
            <h3>Mechanical Calibration</h3>
            
            <h4>E-steps Calibration</h4>
            <ol>
              <li>Mark filament 100mm from extruder entrance</li>
              <li>Extrude 100mm via printer controls</li>
              <li>Measure remaining distance to mark</li>
              <li>Calculate new E-steps: Current E-steps × (100 ÷ Actual distance extruded)</li>
            </ol>
            
            <h4>XYZ Calibration</h4>
            <ul>
              <li>Print calibration cube</li>
              <li>Measure dimensions with calipers</li>
              <li>Adjust steps/mm accordingly</li>
            </ul>
            
            <h3>Advanced Support Strategies</h3>
            
            <h4>Support Interfaces</h4>
            <ul>
              <li>Denser layer where support meets the model</li>
              <li>Improves supported surface finish</li>
              <li>Easier support removal</li>
            </ul>
            
            <h4>Tree Supports</h4>
            <ul>
              <li>Branch-like structures that reach up to overhangs</li>
              <li>Use less material than traditional supports</li>
              <li>Often easier to remove</li>
            </ul>
            
            <h3>Custom G-code</h3>
            <p>Adding custom commands to start/end G-code for:</p>
            <ul>
              <li>Auto bed leveling (ABL) before prints</li>
              <li>Nozzle cleaning routines</li>
              <li>Layer change actions</li>
              <li>Material-specific optimizations</li>
            </ul>
            
            <p>These advanced settings provide powerful tools for optimizing your prints, but remember to change one setting at a time to understand its impact.</p>
          `
        };
      case 'multi-material':
        return {
          title: 'Multi-Material Printing',
          content: `
            <h2>Multi-Material and Multi-Color 3D Printing</h2>
            <p>Multi-material printing allows you to create objects with different colors and material properties in a single print job, opening up new possibilities for functional and aesthetic designs.</p>
            
            <h3>Multi-Material Printing Methods</h3>
            
            <h4>Multi-Extruder Printers</h4>
            <ul>
              <li><strong>Dual Extruder</strong>: Two separate hotends on one print head or independent print heads
                <ul>
                  <li>Allows printing two different materials simultaneously</li>
                  <li>Minimal cross-contamination between materials</li>
                  <li>Independent temperature control for each material</li>
                </ul>
              </li>
              <li><strong>IDEX (Independent Dual Extruder)</strong>
                <ul>
                  <li>Two completely independent print heads</li>
                  <li>Enables "copy mode" and "mirror mode" printing</li>
                  <li>Better material separation but more complex calibration</li>
                </ul>
              </li>
            </ul>
            
            <h4>Single Extruder Solutions</h4>
            <ul>
              <li><strong>Manual Filament Changes</strong>
                <ul>
                  <li>Use slicer to pause at specific layers</li>
                  <li>Change filament when prompted</li>
                  <li>Simple but requires user interaction</li>
                </ul>
              </li>
              <li><strong>Filament Splicers (Palette, MMU)</strong>
                <ul>
                  <li>Joins multiple filaments before they enter the extruder</li>
                  <li>Compatible with most single-extruder printers</li>
                  <li>Requires additional hardware</li>
                </ul>
              </li>
              <li><strong>Tool Changers</strong>
                <ul>
                  <li>Multiple tool heads that the printer swaps between</li>
                  <li>Typically higher-end or DIY solution</li>
                  <li>Most flexible approach for multiple materials</li>
                </ul>
              </li>
            </ul>
            
            <h3>Design Considerations</h3>
            
            <h4>Color Transitions</h4>
            <ul>
              <li><strong>Purge Towers/Walls</strong>: Areas where the printer purges old material before starting with new material</li>
              <li><strong>Ooze Shields</strong>: Barriers printed around the model to catch oozing from inactive nozzles</li>
              <li><strong>Wipe and Prime</strong>: Routines to clean nozzles before material changes</li>
            </ul>
            
            <h4>Material Compatibility</h4>
            <ul>
              <li>Consider print temperatures and bed adhesion requirements</li>
              <li>Some materials bond well together (PLA+PETG), others don't (PLA+TPU)</li>
              <li>Consider differential shrinkage between materials</li>
            </ul>
            
            <h3>Slicing for Multi-Material</h3>
            
            <h4>Model Preparation</h4>
            <ul>
              <li>Create separate STL files for each color/material</li>
              <li>Ensure proper alignment between parts</li>
              <li>Use Boolean operations to ensure parts fit together correctly</li>
            </ul>
            
            <h4>Slicer Settings</h4>
            <ul>
              <li><strong>Prime Tower/Purge Block</strong>: Adjust size based on material transition requirements</li>
              <li><strong>Extruder Temperature</strong>: Set appropriate temperatures for each material</li>
              <li><strong>Z-Offset</strong>: May need adjustment for each extruder for proper bed adhesion</li>
              <li><strong>Retraction Settings</strong>: Often need different settings for different materials</li>
            </ul>
            
            <h3>Common Applications</h3>
            
            <h4>Functional Multi-Material Prints</h4>
            <ul>
              <li>Rigid body with flexible grips or hinges</li>
              <li>Transparent windows in opaque housings</li>
              <li>Conductive traces in insulating bodies</li>
              <li>Soluble supports with engineering materials</li>
            </ul>
            
            <h4>Artistic Applications</h4>
            <ul>
              <li>Multi-colored decorative objects</li>
              <li>Lithophanes with colored backgrounds</li>
              <li>Custom game pieces with colored details</li>
              <li>Company logos and branding elements</li>
            </ul>
            
            <h3>Troubleshooting Multi-Material Issues</h3>
            <ul>
              <li><strong>Color Bleeding</strong>: Increase purge volume or add a wipe tower</li>
              <li><strong>Layer Misalignment</strong>: Check extruder calibration and offsets</li>
              <li><strong>Adhesion Between Materials</strong>: Adjust temperatures or consider interface designs</li>
              <li><strong>Stringing During Transitions</strong>: Tune retraction settings specific to each material</li>
            </ul>
            
            <p>Multi-material printing adds complexity but opens up remarkable possibilities for both functional and decorative prints that wouldn't be possible with single-material printing.</p>
          `
        };
      case 'large-format':
        return {
          title: 'Large Format Printing',
          content: `
            <h2>Large Format 3D Printing</h2>
            <p>Large format printing extends the capabilities of 3D printing technology to create big objects, but comes with its own set of challenges and considerations.</p>
            
            <h3>Types of Large Format Printers</h3>
            <ul>
              <li><strong>CoreXY with Extended Z-axis</strong>: Common design for medium-large format</li>
              <li><strong>Delta with Extended Arms</strong>: Tall prints with smaller footprint</li>
              <li><strong>Cartesian with Extended Gantry</strong>: Typical for very large commercial printers</li>
              <li><strong>Belt Printers</strong>: Theoretically unlimited length in one dimension</li>
            </ul>
            
            <h3>Preparing Models for Large Prints</h3>
            
            <h4>Segmentation Strategies</h4>
            <p>Breaking large models into printable sections:</p>
            <ul>
              <li>Use software like Meshmixer or 3D Builder to cut models</li>
              <li>Design interlocking features like dovetails or pins</li>
              <li>Consider the strength requirements at joins</li>
              <li>Orient segments to minimize visible seams</li>
            </ul>
            
            <h4>Optimizing Large Models</h4>
            <ul>
              <li>Hollow out non-structural areas</li>
              <li>Add internal reinforcement ribs instead of solid infill</li>
              <li>Design for minimal supports</li>
              <li>Consider adding access holes for support removal</li>
            </ul>
            
            <h3>Material Considerations</h3>
            
            <h4>Shrinkage and Warping</h4>
            <p>More significant issues at large scale:</p>
            <ul>
              <li>Use materials with low shrinkage (PLA, PETG over ABS)</li>
              <li>Consider annealing prints after completion for dimensional stability</li>
              <li>Design with tolerances that account for material-specific shrinkage</li>
            </ul>
            
            <h4>Material Requirements</h4>
            <ul>
              <li>Large prints consume significant amounts of filament (plan accordingly)</li>
              <li>Consider using larger nozzles (0.6-1.0mm) to reduce print time</li>
              <li>Layer height can often be increased (0.3-0.6mm) for large prints</li>
            </ul>
            
            <h3>Print Settings for Large Format</h3>
            
            <h4>Structural Integrity</h4>
            <ul>
              <li>Wall thickness typically 1.2-2.0mm (3-5 perimeters with 0.4mm nozzle)</li>
              <li>Infill density 15-20% for most applications</li>
              <li>Consider gyroid or cubic infill patterns for better strength-to-weight ratio</li>
            </ul>
            
            <h4>Print Speed Considerations</h4>
            <ul>
              <li>Slower speeds reduce vibration artifacts in tall prints</li>
              <li>Acceleration and jerk settings may need reduction</li>
              <li>Travel moves can typically remain fast</li>
            </ul>
            
            <h3>Environmental Control</h3>
            
            <h4>Enclosures</h4>
            <ul>
              <li>More important for large prints to maintain consistent temperature</li>
              <li>Can be as simple as a tent or as complex as a heated chamber</li>
              <li>Particularly important for engineering materials like ABS, Nylon, or PC</li>
            </ul>
            
            <h4>Draft Shielding</h4>
            <ul>
              <li>Protect prints from air currents</li>
              <li>Maintain more consistent layer temperatures</li>
              <li>Can be temporary structures during printing</li>
            </ul>
            
            <h3>Practical Challenges</h3>
            
            <h4>Print Duration</h4>
            <ul>
              <li>Large prints can take days to complete</li>
              <li>Implement power failure recovery capabilities</li>
              <li>Consider UPS (Uninterruptible Power Supply) for critical prints</li>
              <li>Plan for filament changes during the print</li>
            </ul>
            
            <h4>Print Monitoring</h4>
            <ul>
              <li>Camera systems for remote monitoring</li>
              <li>Automated failure detection</li>
              <li>Regular check-ins for long-duration prints</li>
            </ul>
            
            <h3>Post-Processing Large Prints</h3>
            <ul>
              <li>Assembly techniques for segmented prints (adhesives, mechanical fasteners)</li>
              <li>Surface finishing at scale (power tools often replace hand sanding)</li>
              <li>Reinforcement techniques (fiberglass, epoxy coating)</li>
            </ul>
            
            <p>Large format printing expands what's possible with 3D printing technology, but requires careful planning and execution to achieve successful results.</p>
          `
        };
      case 'maintenance':
        return {
          title: 'Maintenance & Care',
          content: `
            <h2>3D Printer Maintenance and Care</h2>
            <p>Regular maintenance keeps your 3D printer operating reliably and extends its lifespan. This guide covers essential maintenance tasks and schedules.</p>
            
            <h3>Regular Maintenance Schedule</h3>
            <table border="1" cellpadding="5">
              <tr>
                <th>Frequency</th>
                <th>Maintenance Task</th>
              </tr>
              <tr>
                <td>Every Print</td>
                <td>
                  <ul>
                    <li>Check bed leveling and adhesion</li>
                    <li>Clean build surface of debris</li>
                    <li>Inspect first layer adhesion</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Weekly</td>
                <td>
                  <ul>
                    <li>Clean nozzle exterior</li>
                    <li>Check belt tension</li>
                    <li>Remove debris from linear rails/rods</li>
                    <li>Check for loose screws</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Monthly</td>
                <td>
                  <ul>
                    <li>Lubricate linear rails/rods</li>
                    <li>Clean cooling fans</li>
                    <li>Check for play in linear motion system</li>
                    <li>Inspect wiring for damage</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Quarterly</td>
                <td>
                  <ul>
                    <li>Deep clean extruder assembly</li>
                    <li>Check electrical connections</li>
                    <li>Inspect belts for wear</li>
                    <li>Update firmware if available</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Bi-Annually</td>
                <td>
                  <ul>
                    <li>Replace worn nozzles</li>
                    <li>Check/replace PTFE tube (if applicable)</li>
                    <li>Inspect heater block and thermistor connections</li>
                  </ul>
                </td>
              </tr>
            </table>
            
            <h3>Key Maintenance Areas</h3>
            
            <h4>Hotend Maintenance</h4>
            <ol>
              <li><strong>Cold Pull Cleaning</strong>
                <ul>
                  <li>Heat nozzle to material's printing temperature</li>
                  <li>Push filament through until clean</li>
                  <li>Cool down while maintaining pressure</li>
                  <li>Pull filament out when cooled to about 90°C</li>
                  <li>Repeat until filament pulls out clean</li>
                </ul>
              </li>
              <li><strong>Nozzle Replacement</strong>
                <ul>
                  <li>Heat hotend to 250°C</li>
                  <li>Hold heater block with wrench to stabilize</li>
                  <li>Use socket wrench to remove nozzle</li>
                  <li>Install new nozzle hot, tightening at temperature</li>
                </ul>
              </li>
              <li><strong>Heatbreak/PTFE Maintenance</strong>
                <ul>
                  <li>Ensure proper seating between heatbreak and nozzle</li>
                  <li>Replace PTFE tubes if they show discoloration or deformation</li>
                </ul>
              </li>
            </ol>
            
            <h4>Motion System Maintenance</h4>
            <ol>
              <li><strong>Belt Tension</strong>
                <ul>
                  <li>Check for proper tension (slight twang when plucked)</li>
                  <li>Verify belt teeth are not damaged</li>
                  <li>Look for fraying or debris in belt teeth</li>
                </ul>
              </li>
              <li><strong>Linear Rails/Rods</strong>
                <ul>
                  <li>Clean with isopropyl alcohol and lint-free cloth</li>
                  <li>Apply thin layer of appropriate lubricant (typically PTFE or silicone)</li>
                  <li>Check for smooth movement throughout travel</li>
                </ul>
              </li>
              <li><strong>Bearings</strong>
                <ul>
                  <li>Listen for unusual noises during operation</li>
                  <li>Check for play or loose movement</li>
                  <li>Lubricate according to bearing type</li>
                </ul>
              </li>
            </ol>
            
            <h4>Electronics Maintenance</h4>
            <ul>
              <li>Inspect wiring for wear, especially around moving parts</li>
              <li>Check all connections for secure fit</li>
              <li>Clean cooling fans with compressed air</li>
              <li>Verify proper function of endstops and sensors</li>
            </ul>
            
            <h4>Build Surface Maintenance</h4>
            <ul>
              <li><strong>Removable Build Plates</strong>
                <ul>
                  <li>Clean with appropriate solvent (isopropyl alcohol for PEI, glass)</li>
                  <li>Check for warping or damage</li>
                  <li>Replace surface coatings when worn</li>
                </ul>
              </li>
              <li><strong>Fixed Build Plates</strong>
                <ul>
                  <li>Clean between prints</li>
                  <li>Re-apply adhesion aids as needed (glue stick, hairspray)</li>
                  <li>Periodically check bed level and tramming</li>
                </ul>
              </li>
            </ul>
            
            <h3>Troubleshooting Common Maintenance Issues</h3>
            
            <h4>Clogged Nozzle</h4>
            <p>Signs: Underextrusion, no filament flow, or inconsistent extrusion</p>
            <ol>
              <li>Try cold pulls first</li>
              <li>Use acupuncture needles for light clogs</li>
              <li>Replace nozzle if cleaning is unsuccessful</li>
            </ol>
            
            <h4>Z-Axis Binding</h4>
            <p>Signs: Layer shifting, loud noises during Z movement</p>
            <ol>
              <li>Check alignment of Z-screws</li>
              <li>Clean and re-lubricate Z-screws</li>
              <li>Adjust stepper motor current if necessary</li>
            </ol>
            
            <h4>Extruder Skipping</h4>
            <p>Signs: Clicking sounds, inconsistent extrusion</p>
            <ol>
              <li>Check for hotend clogs</li>
              <li>Verify filament path is clear</li>
              <li>Check extruder tension (not too tight or loose)</li>
              <li>Check for worn extruder parts</li>
            </ol>
            
            <h3>Maintenance Tools and Supplies</h3>
            <ul>
              <li>Allen/hex key set (metric)</li>
              <li>Needle-nose pliers</li>
              <li>Craft knife or scal
