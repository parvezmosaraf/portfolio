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
          <div className="flex justify-center mb-8">
            <Button className="gap-2" size="lg">
              <Download className="h-4 w-4" />
              Download Full Resume
            </Button>
          </div>
          
          {/* Contact Information Card */}
          <Card className="mb-8 border-primary/20 shadow-lg">
            <div className="bg-primary/10 py-3 px-6 border-b border-primary/20">
              <h3 className="text-xl font-bold">Contact Information</h3>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-primary/20 hover:shadow-md transition-all">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:parvez.cse.official@gmail.com" className="text-sm font-medium hover:text-primary">
                        parvez.cse.official@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-primary/20 hover:shadow-md transition-all">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+8801400578737" className="text-sm font-medium hover:text-primary">
                        +880 1400-578737
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-primary/20 hover:shadow-md transition-all">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-sm font-medium">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
          
          {/* Skills & Technologies Card */}
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
          
          {/* Education Card */}
          <Card className="border-primary/20 shadow-lg mb-8">
            <div className="bg-primary/10 py-3 px-6 border-b border-primary/20">
              <h3 className="text-xl font-bold flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                Education
              </h3>
            </div>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-primary/30">
                  <div className="absolute left-0 top-1.5 w-5 h-5 bg-primary rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                  </div>
                  
                  <div className="bg-background/50 p-5 rounded-lg border border-primary/20 hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h4 className="font-semibold text-lg">BSc in Computer Science & Engineering</h4>
                      <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10 inline-block mt-2 md:mt-0">2018 - 2023</span>
                    </div>
                    <p className="text-muted-foreground font-medium">Daffodil International University</p>
                    <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Certifications Card */}
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
