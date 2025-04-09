import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter, SendHorizontal, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "parvez.cse.official@gmail.com",
      link: "mailto:parvez.cse.official@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1400-578737",
      link: "tel:+8801400578737",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      link: "https://maps.google.com/?q=Dhaka+Bangladesh",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/parvezmosaraf",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/md-parvez-mosaraf/",
    },
    {
      icon: Facebook,
      label: "Facebook",
      link: "https://www.facebook.com/parvez.almuqtadir/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/parvezalmuqtadir/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-background to-secondary/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="section-container max-w-7xl mx-auto">
        <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-center mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-primary/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gradient-primary">Contact Information</h3>
                <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                  Feel free to reach out to me for collaboration, job opportunities, 
                  or just to say hello. I'm always open to discussing new projects and ideas.
                </p>
                
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {contactInfo.map((item) => (
                    <motion.div 
                      key={item.label} 
                      whileHover={{ x: 5 }}
                      className="flex items-center group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-primary/30 transition-colors">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                        <a 
                          href={item.link}
                          className="text-sm sm:text-base font-medium hover:text-primary transition-colors break-words"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="overflow-hidden border-primary/20 shadow-lg">
              <div className="bg-primary/10 py-2 sm:py-3 px-4 sm:px-6 border-b border-primary/20">
                <h3 className="text-lg sm:text-xl font-bold flex items-center">
                  <SendHorizontal className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Send Me a Message
                </h3>
              </div>
              <CardContent className="p-4 sm:p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm sm:text-base">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" className="bg-background/50 text-sm sm:text-base" {...field} />
                            </FormControl>
                            <FormMessage className="text-xs sm:text-sm" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" className="bg-background/50 text-sm sm:text-base" {...field} />
                            </FormControl>
                            <FormMessage className="text-xs sm:text-sm" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What is this about?" className="bg-background/50 text-sm sm:text-base" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm sm:text-base">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Write your message here..." 
                              className="min-h-[120px] sm:min-h-[160px] bg-background/50 text-sm sm:text-base" 
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full text-sm sm:text-base py-2 sm:py-3" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse mr-2">Sending</span>
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>
                        </>
                      ) : (
                        <>Send Message</>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        {/* Connect with me section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 max-w-4xl mx-auto px-4 sm:px-0"
        >
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-primary/20 text-center">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gradient-primary">Connect with me</h4>
            <div className="flex justify-center flex-wrap gap-4 sm:gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-background/80 rounded-full flex items-center justify-center border border-primary/30 hover:bg-primary/20 hover:border-primary transition-colors"
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
