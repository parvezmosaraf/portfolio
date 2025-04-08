import { useState } from "react";
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string[];
  demoLink: string;
  githubLink: string;
  features: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "WeatherWardrobe",
    description: "Modern Weather Outfit Recommendation App",
    longDescription: "An innovative application that provides personalized outfit recommendations based on weather conditions. Built with TypeScript and modern web technologies.",
    image: "https://assets.grok.com/users/225c47d2-e1f6-4bf1-933c-683284cd6b11/generated/cNuWFvt2jm9JRpRL/image.jpg",
    tags: ["TypeScript", "React", "Weather API", "AI", "Responsive Design", "Tailwind CSS"],
    category: ["Web Development", "AI"],
    demoLink: "https://weather-wardrobe.vercel.app",
    githubLink: "https://github.com/parvezmosaraf/WeatherWardrobe",
    features: [
      "Real-time weather data integration",
      "AI-powered outfit recommendations",
      "Responsive design for all devices",
      "User-friendly interface",
      "Location-based weather updates"
    ]
  },
  {
    id: 2,
    title: "Edueasee-Ai-Virtual-Teacher",
    description: "AI-powered Virtual Teacher Platform",
    longDescription: "An educational platform featuring an AI virtual teacher that provides personalized learning experiences and interactive educational content.",
    image: "https://assets.grok.com/users/225c47d2-e1f6-4bf1-933c-683284cd6b11/generated/KUL8Ot38etwjR6Pe/image.jpg",
    tags: ["TypeScript", "AI", "Education", "React", "Machine Learning", "Next.js"],
    category: ["Web Development", "AI"],
    demoLink: "https://edueasee.vercel.app/",
    githubLink: "https://github.com/parvezmosaraf/Edueasee-Ai-Virtual-Teacher",
    features: [
      "AI-powered virtual teacher",
      "Personalized learning paths",
      "Interactive educational content",
      "Progress tracking",
      "Real-time feedback system"
    ]
  },
  {
    id: 3,
    title: "Invoice-Pro",
    description: "Professional Invoice Management System",
    longDescription: "A comprehensive invoice management system that helps businesses create, track, and manage invoices efficiently.",
    image: "https://assets.grok.com/users/225c47d2-e1f6-4bf1-933c-683284cd6b11/generated/OVbYOkiE8oEESqvw/image.jpg",
    tags: ["TypeScript", "React", "Business", "Finance", "Database", "Supabase"],
    category: ["Web Development", "Business"],
    demoLink: "https://paul-invoice.vercel.app/",
    githubLink: "https://github.com/parvezmosaraf/invoice-pro",
    features: [
      "Invoice creation and management",
      "Client database management",
      "Payment tracking",
      "Financial reporting",
      "Export and sharing capabilities"
    ]
  },
  {
    id: 4,
    title: "Service Management",
    description: "Service Booking and Management Platform",
    longDescription: "A full-featured service management platform that enables businesses to handle bookings, appointments, and customer interactions.",
    image: "https://assets.grok.com/users/225c47d2-e1f6-4bf1-933c-683284cd6b11/generated/Oltq5eE8iQrFkbiH/image.jpg",
    tags: ["Python", "Django", "Database", "Business", "Web", "REST API"],
    category: ["Web Development", "Business"],
    demoLink: "https://service-management.vercel.app",
    githubLink: "https://github.com/parvezmosaraf/ServiceManagement",
    features: [
      "Service booking system",
      "Customer management",
      "Appointment scheduling",
      "Business analytics",
      "Multi-user support"
    ]
  },
  {
    id: 5,
    title: "DataQuest",
    description: "Data Analysis and Visualization Platform",
    longDescription: "A powerful data analysis and visualization platform that helps users explore and understand complex datasets through interactive visualizations.",
    image: "https://assets.grok.com/users/225c47d2-e1f6-4bf1-933c-683284cd6b11/generated/SnqseNcfrukhbE6K/image.jpg",
    tags: ["TypeScript", "React", "Data Analysis", "Visualization", "Charts", "D3.js"],
    category: ["Web Development", "Data"],
    demoLink: "https://dataquest.vercel.app",
    githubLink: "https://github.com/parvezmosaraf/dataquest",
    features: [
      "Interactive data visualization",
      "Custom chart creation",
      "Data import/export",
      "Real-time data processing",
      "User-friendly dashboard"
    ]
  },
  {
    id: 6,
    title: "ExpenseTracker",
    description: "Personal Finance Management App",
    longDescription: "A comprehensive expense tracking application that helps users manage their finances, track spending, and set budget goals.",
    image: "https://assets.grok.com/users/225c47d2-e1f6-4bf1-933c-683284cd6b11/generated/fbcSybSJo4UAZrgM/image.jpg",
    tags: ["TypeScript", "React", "Finance", "Database", "Authentication", "Charts"],
    category: ["Web Development", "Business"],
    demoLink: "https://expense-tracker.vercel.app",
    githubLink: "https://github.com/parvezmosaraf/ExpenseTracker",
    features: [
      "Expense tracking and categorization",
      "Budget planning and monitoring",
      "Financial reports and analytics",
      "User authentication",
      "Data visualization"
    ]
  },
  {
    id: 7,
    title: "BrenordMoving",
    description: "Moving Company Management Platform",
    longDescription: "A comprehensive platform for managing moving company operations, including scheduling, inventory tracking, and customer management.",
    image: "https://zbmb.ca/banner.png",
    tags: ["TypeScript", "React", "Business", "Management", "Database", "Full Stack"],
    category: ["Web Development", "Business"],
    demoLink: "https://brenord-moving.vercel.app",
    githubLink: "https://github.com/parvezmosaraf/brenordMoving-beta",
    features: [
      "Moving job scheduling and management",
      "Inventory and equipment tracking",
      "Customer relationship management",
      "Team management and assignment",
      "Real-time status updates"
    ]
  },
  {
    id: 8,
    title: "Alcohol Recommendation System",
    description: "AI-Powered Alcohol Recommendation Engine",
    longDescription: "An intelligent system that recommends alcoholic beverages based on user preferences, occasion, and taste profiles using machine learning algorithms.",
    image: "https://assets.grok.com/users/225c47d2-e1f6-4bf1-933c-683284cd6b11/generated/COAhvY4lhZcTyT9h/image.jpg",
    tags: ["Python", "Machine Learning", "AI", "Recommendation System", "Data Analysis"],
    category: ["AI", "Data"],
    demoLink: "https://alcohol-recommendation.vercel.app",
    githubLink: "https://github.com/parvezmosaraf/alcohol-recommendation",
    features: [
      "Personalized drink recommendations",
      "Taste profile analysis",
      "Occasion-based suggestions",
      "User preference learning",
      "Comprehensive drink database"
    ]
  },
  {
    id: 9,
    title: "Slack Automation",
    description: "Slack Workspace Automation Tool",
    longDescription: "A powerful automation tool for Slack workspaces that helps streamline communication and task management.",
    image: "https://assets.grok.com/users/225c47d2-e1f6-4bf1-933c-683284cd6b11/generated/ZiGQOAUYtM9Xz2wX/image.jpg",
    tags: ["Python", "Slack API", "Automation", "Bot", "Integration"],
    category: ["Automation", "Integration"],
    demoLink: "https://slack-automation.vercel.app",
    githubLink: "https://github.com/parvezmosaraf/SlackAutomation",
    features: [
      "Automated message handling",
      "Task scheduling",
      "Channel management",
      "Custom bot commands",
      "Integration with external services"
    ]
  },
  {
    id: 10,
    title: "AI Resume Builder",
    description: "Intelligent Resume Creation Platform",
    longDescription: "An AI-powered platform that helps users create professional resumes with smart suggestions and formatting.",
    image: "https://assets.grok.com/users/225c47d2-e1f6-4bf1-933c-683284cd6b11/generated/sDPeEzcwJRO8Asej/image.jpg",
    tags: ["JavaScript", "AI", "Resume", "Career", "Templates"],
    category: ["Web Development", "AI"],
    demoLink: "https://ai-resume-builder-opal.vercel.app/",
    githubLink: "https://github.com/parvezmosaraf/AI-Resume-Builder",
    features: [
      "AI-powered content suggestions",
      "Professional templates",
      "ATS optimization",
      "Export to multiple formats",
      "Real-time preview"
    ]
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const categories = ["All", "Web Development", "AI", "Business", "Data", "Automation", "Integration"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));

  const openProjectDialog = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };
  
  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-secondary/50 p-1 rounded-full">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full px-6 py-2 transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden animate-fade-in transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-2xl border-2">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full px-4">{tag}</Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="rounded-full px-4">+{project.tags.length - 3}</Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => openProjectDialog(project)} className="rounded-full">
                      View Details
                    </Button>
                    <div className="flex space-x-2">
                      <Button size="icon" variant="ghost" asChild className="rounded-full">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button size="icon" variant="ghost" asChild className="rounded-full">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Project Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {selectedProject && (
            <DialogContent className="sm:max-w-[700px] rounded-2xl">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">About the Project</h4>
                  <p className="text-muted-foreground">{selectedProject.longDescription}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end gap-4 pt-4">
                  <Button variant="outline" asChild className="rounded-full">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                  <Button asChild className="rounded-full">
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
