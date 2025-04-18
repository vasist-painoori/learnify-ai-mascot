
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Printer, Code, BookOpen } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Define 3D printing topics
const printingTopics = [
  { title: "3D Printer Basics", url: "/3d-printing/basics" },
  { title: "Filament Types", url: "/3d-printing/filaments" },
  { title: "Slicer Software", url: "/3d-printing/slicers" },
  { title: "Print Troubleshooting", url: "/3d-printing/troubleshooting" },
  { title: "Model Design", url: "/3d-printing/design" },
  { title: "Post-Processing", url: "/3d-printing/post-processing" },
  { title: "Advanced Settings", url: "/3d-printing/settings" },
  { title: "Multi-Material Printing", url: "/3d-printing/multi-material" },
  { title: "Large Format Printing", url: "/3d-printing/large-format" },
  { title: "Maintenance & Care", url: "/3d-printing/maintenance" },
  { title: "Custom Supports", url: "/3d-printing/custom-supports" },
  { title: "Bed Adhesion", url: "/3d-printing/bed-adhesion" },
  { title: "3D Scanning", url: "/3d-printing/3d-scanning" },
  { title: "Print Finishing", url: "/3d-printing/finishing" },
  { title: "Printer Upgrades", url: "/3d-printing/upgrades" },
  { title: "3D Printing Materials", url: "/3d-printing/materials" },
];

// Define programming topics
const programmingTopics = [
  { title: "JavaScript", url: "/programming/javascript" },
  { title: "Python", url: "/programming/python" },
  { title: "Java", url: "/programming/java" },
  { title: "C#", url: "/programming/csharp" },
  { title: "C++", url: "/programming/cpp" },
  { title: "Ruby", url: "/programming/ruby" },
  { title: "Go", url: "/programming/go" },
  { title: "TypeScript", url: "/programming/typescript" },
  { title: "Rust", url: "/programming/rust" },
  { title: "PHP", url: "/programming/php" },
];

const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50 px-4 flex items-center">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="font-semibold text-primary mr-4">
          LearnifyAI
        </Link>

        <NavigationMenu className="max-w-screen">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-8 px-3 text-xs">
                <Printer className="h-4 w-4 mr-1" />
                3D Printing Lessons
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[220px] p-2 md:w-[300px]">
                  {printingTopics.map((topic) => (
                    <li key={topic.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={topic.url}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium">{topic.title}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-8 px-3 text-xs">
                <Code className="h-4 w-4 mr-1" />
                Programming Lessons
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[220px] p-2 md:w-[300px]">
                  {programmingTopics.map((topic) => (
                    <li key={topic.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={topic.url}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium">{topic.title}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
                <div className="p-2 border-t border-gray-200 dark:border-gray-800">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/dashboard"
                      className={cn(
                        "block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <div className="text-sm font-medium flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        All Courses Dashboard
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Topbar;
