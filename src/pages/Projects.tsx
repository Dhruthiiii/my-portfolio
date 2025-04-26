
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform built with React, Node.js, and MongoDB",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and notifications",
      image: "/placeholder.svg",
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: "3",
      title: "Recipe Finder",
      description: "An application that helps users find recipes based on available ingredients",
      image: "/placeholder.svg",
      tags: ["React", "API Integration", "Styled Components"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: "4",
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather conditions",
      image: "/placeholder.svg",
      tags: ["JavaScript", "API Integration", "CSS"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: "5",
      title: "Budget Tracker",
      description: "A personal finance application to track income, expenses, and savings goals",
      image: "/placeholder.svg",
      tags: ["React", "Chart.js", "localStorage"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: "6",
      title: "Movie Database",
      description: "A movie database application with search functionality and user reviews",
      image: "/placeholder.svg",
      tags: ["React", "API Integration", "Firebase"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];
  
  // Get unique tags for filter buttons
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Filter projects by selected tag
  const filteredProjects = filter
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold font-display mb-4">My Projects</h1>
              <p className="text-muted-foreground text-lg">
                A collection of my web development projects, showcasing my skills and experience.
              </p>
            </div>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              <Button
                variant={filter === null ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(null)}
                className="rounded-full"
              >
                All
              </Button>
              
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={filter === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(tag)}
                  className="rounded-full"
                >
                  {tag}
                </Button>
              ))}
            </div>
            
            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <Button asChild variant="default" size="sm">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </Button>
                      )}
                      
                      {project.codeUrl && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* No results message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  No projects found with the selected filter.
                </p>
                <Button
                  variant="default"
                  className="mt-4"
                  onClick={() => setFilter(null)}
                >
                  Clear filter
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-16 bg-secondary/50 dark:bg-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-display mb-4">Interested in working together?</h2>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects and opportunities.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Get in touch
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
