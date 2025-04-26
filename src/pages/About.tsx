
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  const skills = [
    { 
      category: "Languages & Technologies", 
      items: ["HTML", "CSS", "JavaScript", "C", "PHP", "Java", "Python"] 
    },
    { 
      category: "Security Tools", 
      items: ["Kali Linux", "Burp Suite", "Metasploit", "NMap", "OWASP Zap", "Wireshark"] 
    },
    { 
      category: "Frameworks & Tools", 
      items: ["TensorFlow", "Keras", "Flask", "Git", "VS Code", "MongoDB", "MySQL"] 
    }
  ];
  
  const experiences = [
    {
      company: "Flipkart",
      position: "Application Security Engineer",
      period: "Oct 2024 - April 2025",
      description: "Performed VAPT on Web and Android applications, networks, and cloud servers. Worked with Business Units to optimize security workflows and implement controls."
    },
    {
      company: "Dazn India",
      position: "Technical Support Specialist",
      period: "Nov 2023 - Oct 2024",
      description: "Monitored live sports activities, managed platform performance, and resolved technical issues using various tools including ServiceNow, CloudFlare VPN, and AWS."
    },
    {
      company: "ICRISAT",
      position: "Deep Learning Engineer Intern",
      period: "May 2023 - July 2023",
      description: "Conducted R&D on Image-based Disease Identification, achieving 94% accuracy in Maize Leaf Disease detection using Mask R-CNN."
    }
  ];
  
  const education = [
    {
      institution: "Indian Institute of Technology Guwahati",
      degree: "Diploma in Cyber Security",
      period: "August 2024 - Ongoing",
      description: "Currently pursuing advanced studies in cybersecurity technologies and practices."
    },
    {
      institution: "Keshav Memorial Institute of Technology",
      degree: "B.Tech in Computer Science Engineering",
      period: "August 2019 - July 2023",
      description: "CGPA: 7.7 - Focused on computer science fundamentals and specialized in security concepts."
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
