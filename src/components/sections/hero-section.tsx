import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/typewriter";
import { Download, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative">
      <div className="section-container flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-fade-in">
            <span className="font-light text-muted-foreground block mb-2">Hello, I'm</span>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Md Parvez Mosaraf
            </span>
          </h1>
          
          <div className="mt-6 text-xl sm:text-2xl lg:text-3xl font-bold text-foreground/80">
            I'm {" "}
            <Typewriter
              words={[
                "AI Application Developer",
                "ML Engineer",
                "Full Stack Developer",
                "ChatBOT Developer",
                "Web Application Developer",
              ]}
              className="text-primary inline-block min-w-32"
            />
          </div>
          
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            I specialize in AI applications and full-stack development, combining machine learning 
            with modern web technologies to create intelligent and user-friendly solutions.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button className="gap-2" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
            <Button className="gap-2" size="lg" variant="outline" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <a href="#experience" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
