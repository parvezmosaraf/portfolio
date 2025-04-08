import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Experience = {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  skills: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    jobTitle: "Junior Software Engineer",
    company: "Developers World LLC",
    location: "Fort Lauderdale, United States",
    period: "2023 - Present",
    description: "Transitioned into a role as a Junior Software Developer, demonstrating proficiency in coding languages such as Java and Python.",
    responsibilities: [
      "Collaborated with web developers to implement AI software solutions that met client requirements",
      "Contributed to the development of new features and enhancements for existing software products",
      "Demonstrated strong problem-solving skills and attention to detail in all projects completed"
    ],
    skills: ["Java", "Python", "AI Development", "Software Development", "Problem Solving"]
  },
  {
    id: 2,
    jobTitle: "AI Application | Chatbot Development",
    company: "Fiverr",
    location: "Dhaka, Bangladesh",
    period: "2022 - Present",
    description: "Full-time freelancer on Fiverr specializing in AI application and chatbot development with over two years of professional experience.",
    responsibilities: [
      "Successfully collaborated with 100+ international clients, delivering customized AI and chatbot solutions",
      "Created innovative, user-friendly AI applications, ensuring high client satisfaction and repeat business",
      "Specialized in developing tailored solutions for diverse industry needs"
    ],
    skills: ["AI Development", "Chatbot Development", "Client Management", "Custom Solutions", "Freelancing"]
  },
  {
    id: 3,
    jobTitle: "Web Application Developer",
    company: "B4Sync Technology",
    location: "Dhaka, Bangladesh",
    period: "2022 - 2023",
    description: "Designed and implemented comprehensive web applications with integrated features.",
    responsibilities: [
      "Designed and implemented a comprehensive website with an integrated chatbot feature",
      "Enhanced user engagement by 30% through responsive design implementation",
      "Achieved a 15% reduction in server costs through backend optimization",
      "Successfully managed over 50 web-based projects using Python"
    ],
    skills: ["Python", "Web Development", "Backend Optimization", "Project Management", "Chatbot Integration"]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-1/2 before:bg-primary/30 before:hidden md:before:block">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              <div className={cn(
                "flex flex-col md:flex-row gap-x-4",
                index % 2 === 0 ? "" : "md:flex-row-reverse text-right"
              )}>
                {/* Timeline dot - only shown on md and up */}
                <div className="absolute left-0 md:w-4 md:h-4 top-7 rounded-full bg-primary shadow-md hidden md:block" />
                
                {/* Card */}
                <Card className={cn(
                  "w-full md:w-[calc(50%-1rem)] animate-fade-in transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                )}>
                  <CardHeader>
                    <CardTitle>{experience.jobTitle}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-base text-foreground/80">{experience.company}</span>
                        <span className="text-sm text-muted-foreground">{experience.period}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{experience.location}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{experience.description}</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      {experience.responsibilities.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {experience.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
