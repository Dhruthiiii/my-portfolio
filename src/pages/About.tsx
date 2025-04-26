
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
    { category: "Backend", items: ["Node.js", "Express", "GraphQL", "REST API", "MongoDB", "PostgreSQL"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Figma"] }
  ];
  
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      period: "2021 - Present",
      description: "Lead developer for multiple client projects, focusing on React and TypeScript. Implemented CI/CD pipelines and mentored junior developers."
    },
    {
      company: "WebSolutions Agency",
      position: "Full Stack Developer",
      period: "2018 - 2021",
      description: "Developed and maintained web applications using the MERN stack. Collaborated with designers to transform mockups into fully functional interfaces."
    },
    {
      company: "Digital Creatives",
      position: "Junior Web Developer",
      period: "2016 - 2018",
      description: "Built responsive websites and implemented features using JavaScript and React. Assisted with UX improvements and bug fixes."
    }
  ];
  
  const education = [
    {
      institution: "University of Technology",
      degree: "BSc in Computer Science",
      period: "2012 - 2016",
      description: "Specialized in web development and software engineering. Active member of the coding club."
    },
    {
      institution: "Online Learning",
      degree: "Various Certifications",
      period: "2016 - Present",
      description: "Continuously improving skills through platforms like Coursera, Udemy, and freeCodeCamp."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold font-display mb-6">About Me</h1>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Hello! I'm Anna Reynolds, a passionate full-stack web developer with over 5 years of experience
                  building modern web applications. I specialize in creating responsive, user-friendly websites and
                  applications using React, Node.js, and other cutting-edge technologies.
                </p>
                
                <p>
                  My journey in web development began during my university years when I discovered my passion for
                  coding. Since then, I've worked with various clients and companies, helping them bring their ideas
                  to life through clean, efficient code and thoughtful design.
                </p>
                
                <p>
                  I believe in continuous learning and staying updated with the latest trends and technologies in
                  the ever-evolving field of web development. When I'm not coding, you can find me exploring new
                  hiking trails, reading tech blogs, or experimenting with new recipes in the kitchen.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills */}
        <section className="py-16 bg-secondary/50 dark:bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-display mb-8">Skills & Technologies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-display mb-8">Work Experience</h2>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-border pb-8 last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Education */}
        <section className="py-16 bg-secondary/50 dark:bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-display mb-8">Education</h2>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-border pb-8 last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <span>{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.period}</span>
                    </div>
                    <p>{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
