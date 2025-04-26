
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArticleCard, ArticleProps } from "@/components/ArticleCard";

const featuredProjects = [
  {
    id: "1",
    title: "Attack Surface Monitoring Tool",
    description: "Developed an interactive UI for a comprehensive security monitoring tool to enhance cybersecurity & risk management",
    image: "/placeholder.svg",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MongoDB"],
    githubUrl: "https://github.com/Dhruthi"
  },
  {
    id: "2",
    title: "Maize Plant Disease Detection",
    description: "Developed a Deep Learning ResNet model to detect plant diseases with 94% accuracy using the Maize Leaf dataset",
    image: "/placeholder.svg",
    tags: ["Python", "TensorFlow", "Deep Learning"],
    githubUrl: "https://github.com/Dhruthi"
  },
  {
    id: "3",
    title: "Library Management System",
    description: "Developed a software application to manage library resources and track borrowed items",
    image: "/placeholder.svg",
    tags: ["Java", "Servlets"],
    githubUrl: "https://github.com/Dhruthi"
  }
];

const featuredArticles: ArticleProps[] = [
  {
    id: "1",
    title: "Vulnerability Assessment: Best Practices for Modern Applications",
    date: "January 27, 2023",
    slug: "vulnerability-assessment-best-practices",
    excerpt: "Learn about comprehensive vulnerability assessment methodologies and how to implement them in your organization."
  },
  {
    id: "2",
    title: "Deep Learning for Image-Based Disease Detection in Agriculture",
    date: "January 29, 2023",
    slug: "deep-learning-agriculture-disease-detection",
    excerpt: "Exploring how machine learning and computer vision are revolutionizing agricultural practices through automated disease detection."
  },
  {
    id: "3",
    title: "API Security Testing: Common Vulnerabilities and Countermeasures",
    date: "January 31, 2023",
    slug: "api-security-testing",
    excerpt: "A comprehensive guide to identifying and addressing security flaws in API implementations."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Featured Projects */}
        <section className="py-16 bg-secondary/50 dark:bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold font-display mb-2">Featured Projects</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Explore my recent work that showcases my development and security skills
                </p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex">
                <Link to="/projects">
                  View all projects <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
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
                    <Button asChild variant="outline" size="sm">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center md:hidden">
              <Button asChild>
                <Link to="/projects">
                  View all projects
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold font-display mb-2">Latest Articles</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Technical articles, tutorials, and insights on cybersecurity and development
                </p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex">
                <Link to="/articles">
                  View all articles <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            <div className="mt-8 flex justify-center md:hidden">
              <Button asChild>
                <Link to="/articles">
                  View all articles
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Achievements highlight */}
        <section className="py-16 bg-secondary/50 dark:bg-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display mb-6">Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Recognition and accomplishments throughout my professional journey
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                <p className="text-muted-foreground">
                  EC-Council Certified Ethical Hacker, Microsoft Security Fundamentals, and more
                </p>
              </div>
              
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                    <line x1="16" x2="16" y1="2" y2="6"/>
                    <line x1="8" x2="8" y1="2" y2="6"/>
                    <line x1="3" x2="21" y1="10" y2="10"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-muted-foreground">
                  Professional experience at Flipkart, DAZN India, and ICRISAT
                </p>
              </div>
              
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.65 17.45 12 21l3.35-3.55"/>
                    <path d="m12 12 3.35 3.45L19 12"/>
                    <path d="m5 12 3.35 3.45L12 12"/>
                    <path d="m12 3 3.35 3.45L19 3"/>
                    <path d="m5 3 3.35 3.45L12 3"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <p className="text-muted-foreground">
                  Proficient in a wide range of security testing tools and programming languages
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <Button asChild>
                <Link to="/achievements">
                  View all achievements
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-display mb-4">Let's Work Together</h2>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? I'm available for freelance work and full-time positions.
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

export default Index;
