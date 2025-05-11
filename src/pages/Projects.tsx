import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  featured?: boolean;
}

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const projects: Project[] = [
    {
      id: "1",
      title: "Attack Surface Monitoring Tool",
      description: "Developed an interactive UI for a comprehensive security monitoring tool to enhance cybersecurity & risk management. Integrated features like subdomain enumeration, port scanning, SSL verification, cloud enumeration, GitHub secret scanning, Shodan API, and vulnerability analysis.",
      image: "/placeholder.svg",
      tags: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MongoDB"],
      githubUrl: "https://github.com/Dhruthi",
      featured: true
    },
    {
      id: "2",
      title: "Maize Plant Disease Detection",
      description: "Developed a Deep Learning ResNet model to detect plant diseases with 94% accuracy using the Maize Leaf dataset. Enhanced detection accuracy through hyper-parameter optimization for real-world applicability.",
      image: "/placeholder.svg",
      tags: ["Python", "TensorFlow", "Deep Learning"],
      githubUrl: "https://github.com/Dhruthi",
      featured: true
    },
    {
      id: "3",
      title: "Library Management System",
      description: "Developed a software application to manage library resources and track borrowed items. Implemented user authentication and access control features, ensuring data security and user privacy.",
      image: "/placeholder.svg",
      tags: ["Java", "Servlets"],
      githubUrl: "https://github.com/Dhruthi",
      featured: true
    },
    {
      id: "4",
      title: "Deep Inventory Management System",
      description: "Developed a modern system integrating deep learning for precise object detection, optimizing supply-chain operations. Leveraged advanced object detection algorithms to enhance inventory tracking accuracy and reduce operational delays.",
      image: "/placeholder.svg",
      tags: ["Python", "Deep Learning", "Object Detection"],
      githubUrl: "https://github.com/Dhruthi"
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
                A collection of my cybersecurity and development projects, showcasing my skills and experience.
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
                    <Button asChild variant="default" size="sm">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                      </a>
                    </Button>
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
                <a href="https://www.linkedin.com/in/gundavarapu-dhruthi" target="_blank" rel="noopener noreferrer">
                  Get in touch
                </a>
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
