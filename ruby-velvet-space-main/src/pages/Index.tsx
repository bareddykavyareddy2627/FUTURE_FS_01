import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Database, Palette, Github, Linkedin, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import InternshipCard from "@/components/InternshipCard";
import AchievementCard from "@/components/AchievementCard";
import heroImage from "@/assets/hero-image.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Index = () => {
  const sectionsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    sectionsRef.current?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: Code, name: "Frontend Development", color: "text-primary" },
    // { icon: Database, name: "Backend Development", color: "text-accent" },
    { icon: Palette, name: "UI/UX Design", color: "text-pink" },
  ];

  const projects = [
    {
      title: "  Quiz appplication",
      description: "An online quiz is a web-based assessment tool used in colleges to evaluate students understanding of course material. It allows quick, flexible testing with automatic scoring and instant feedback..",
      image: project1,
      technologies: ["HTML", "CSS", "PYTHON"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "e-commerce",
      description: "E-commerce refers to buying and selling goods or services online, allowing businesses and consumers to conduct transactions through websites, apps, and digital platforms",
      image: project2,
      technologies: [ "HTML", "CSS", "Python"],
      liveLink: "#",
      githubLink: "#",
    },
    
  ];

  const internships = [
    {
      company: "FutureInterns",
      role: "Frontend Developer Intern",
      duration: "OCT 2025 - NOV 2025",
      description: "Developed responsive web applications using React and TypeScript. Collaborated with the design team to implement modern UI/UX patterns and improved application performance by 40%.",
      skills: ["HTML", "CSS", "PYTHON"],
    },
    {
      company: "JBIT",
      role: "Web Development Intern",
      duration: "MAY 2025 - JULY 2025",
      description: "An online quiz is a web-based assessment tool used in colleges to evaluate students understanding of course material. It allows quick, flexible testing with automatic scoring and instant feedback..",
      skills: ["HTML", "CSS", "PYTHON"],
    },
  ];

  const achievements = [
    {
      title: "NSS Parade Captain",
      date: "Aug 2025",
      description: "The NSS Parade Captain is the student leader responsible for organizing, coordinating, and leading the parade activities of the National Service Scheme unit. They maintain discipline, guide volunteers during drills, ensure proper formation, and represent the unit during events, ceremonies, and inspections.",
      link: "#",
    },
    {
      title: "CodeHub Core Member",
      date: "SEPT 2024",
      description: "Joined as a CodeHub Core Member, supporting core development initiatives. Contributing to project strategy, community engagement, and technical improvements.   Committed to driving growth and fostering collaboration within the platform.",
    },
    
    
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-pink bg-clip-text text-transparent leading-tight">
                Hi, I'm Kavya
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Web Developer & Designer
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Passionate about creating beautiful, functional web experiences. Turning ideas into reality through code and design.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_10px_40px_hsl(var(--primary)/0.3)] transition-all duration-300 hover:shadow-[0_10px_40px_hsl(var(--primary)/0.5)] hover:scale-105">
                  View Projects
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                  Contact Me
                </Button>
              </div>
              <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                <a href="#" className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                  <Github size={24} />
                </a>
                <a href="#" className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="flex-1 animate-scale-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-glow"></div>
                <img
                  src={heroImage}
                  alt="Profile"
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
        
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="fade-section py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate computer science student with a deep love for creating digital experiences that make a difference. 
              My journey in tech started with a curiosity about how things work, which has evolved into a commitment to building 
              innovative solutions that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              With experience in both frontend and backend development, I enjoy working across the full stack. I'm always eager 
              to learn new technologies and collaborate with others to bring ideas to life. When I'm not coding, you can find me 
              exploring design trends, contributing to open-source projects, or mentoring fellow students.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_10px_40px_hsl(var(--primary)/0.2)] hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300`}>
                      <skill.icon className={skill.color} size={32} />
                    </div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="fade-section py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Internships
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {internships.map((internship, index) => (
              <div key={index} style={{ animationDelay: `${index * 150}ms` }}>
                <InternshipCard {...internship} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="fade-section py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="fade-section py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <AchievementCard {...achievement} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            © 2025 Kavya. Built with passion
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        .fade-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Index;
