import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, GraduationCap, Award, Star, ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export function ResumeSection() {
  const skills = {
    frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Next.js"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful APIs", "GraphQL"],
    tools: ["Git", "Webpack", "Docker", "Jest", "Cypress", "GitHub Actions", "Figma"]
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="resume" className="bg-gradient-to-b from-secondary/30 to-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Resume</h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Resume Preview Card */}
          <Card className="w-full mb-6 border-primary/20 shadow-lg overflow-hidden bg-background/50 backdrop-blur-sm">
            <div className="bg-gradient-to-r from-primary/20 to-primary/5 py-4 px-6 border-b border-primary/20">
              <h3 className="text-xl font-bold flex items-center">
                <Download className="mr-2 h-5 w-5 text-primary" />
                Resume Preview
              </h3>
            </div>
            <CardContent className="p-0">
              <div className="w-full h-[300px] sm:h-[400px] md:h-[600px] relative overflow-hidden bg-white flex justify-center">
                <div className="w-[850px] max-w-full relative">
                  <iframe
                    src="/resume.pdf#toolbar=0&view=FitH"
                    className="w-full absolute inset-0"
                    title="Resume Preview"
                    loading="lazy"
                    style={{
                      pointerEvents: "none",
                      height: '140%',
                      transform: 'scale(0.9)',
                      transformOrigin: 'top center',
                      backgroundColor: 'white'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
                </div>
              </div>
            </CardContent>
            <div className="bg-gradient-to-b from-background to-background/50 p-6 text-center border-t border-primary/20">
              <Button className="gap-2" size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download className="hover:no-underline">
                  <Download className="h-4 w-4" />
                  Download Full Resume
                </a>
              </Button>
            </div>
          </Card>

          {/* Education Section */}
          <Card className="mb-8 border-primary/20 shadow-lg">
            <div className="bg-primary/10 py-3 px-6 border-b border-primary/20">
              <h3 className="text-xl font-bold flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                Education
              </h3>
            </div>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="text-lg font-semibold">Bachelor of Science in Computer Science and Engineering</h4>
                    <p className="text-muted-foreground">Daffodil International University</p>
                  </div>
                  <div className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10">
                    2019 - 2023
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="text-lg font-semibold">Higher Secondary Certificate (HSC)</h4>
                    <p className="text-muted-foreground">Govt. Bangla College</p>
                  </div>
                  <div className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10">
                    2016 - 2018
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Skills Section */}
          <Card className="mb-8 overflow-hidden border-primary/20 shadow-lg">
            <div className="bg-primary/10 py-3 px-6 border-b border-primary/20">
              <h3 className="text-xl font-bold flex items-center">
                <Star className="mr-2 h-5 w-5 text-primary" />
                Skills & Technologies
              </h3>
            </div>
            <CardContent className="p-0">
              <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="grid w-full grid-cols-3 rounded-none bg-background/80">
                  <TabsTrigger value="frontend" className="data-[state=active]:bg-primary/20">Frontend</TabsTrigger>
                  <TabsTrigger value="backend" className="data-[state=active]:bg-primary/20">Backend</TabsTrigger>
                  <TabsTrigger value="tools" className="data-[state=active]:bg-primary/20">Tools & Others</TabsTrigger>
                </TabsList>
                
                {Object.entries(skills).map(([category, skillList]) => (
                  <TabsContent key={category} value={category} className="p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {skillList.map((skill, index) => (
                        <motion.div
                          key={skill}
                          custom={index}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={itemVariants}
                        >
                          <div className="bg-background border border-primary/20 px-4 py-3 rounded-md text-sm font-medium hover:bg-primary/10 hover:scale-105 transition-all text-center">
                            {skill}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
          
          {/* Certifications Section */}
          <Card className="border-primary/20 shadow-lg">
            <div className="bg-primary/10 py-3 px-6 border-b border-primary/20">
              <h3 className="text-xl font-bold flex items-center">
                <Award className="mr-2 h-5 w-5 text-primary" />
                Certifications
              </h3>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-4">
                {[
                  { 
                    name: "Programming for Everybody - Python",
                    organization: "Coursera - University of Michigan",
                    year: "2022",
                    link: "https://coursera.org/share/9f3da5ed0af4b2583e6abd83bccb79f7"
                  },
                  { 
                    name: "Python Data Structure",
                    organization: "Coursera - University of Michigan",
                    year: "2023",
                    link: "https://coursera.org/share/0a649412ac0f927b9942211d1cb44249"
                  }
                ].map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                  >
                    <div className={cn(
                      "bg-background/50 p-4 rounded-lg border border-primary/20 hover:shadow-md transition-all",
                      "flex flex-col gap-1"
                    )}>
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">{cert.name}</h4>
                        <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10">{cert.year}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{cert.organization}</p>
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm inline-flex items-center mt-1"
                      >
                        View Certificate
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
