
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
import { Printer3D, Code } from 'lucide-react';
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
                <Printer3D className="h-4 w-4 mr-1" />
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
                <Link
                  to="/dashboard"
                  className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                >
                  <div className="text-sm font-medium">All Programming Languages</div>
                  <p className="text-xs leading-snug text-muted-foreground">
                    View all available programming languages and courses
                  </p>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Topbar;
