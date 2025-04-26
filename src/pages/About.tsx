
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
      items: ["Kali Linux", "Burp Suite", "Metasploit", "NMap", "OWASP Zap", "Wireshark", "Nessus", "Zenmap", "Postman"] 
    },
    { 
      category: "Frameworks & Tools", 
      items: ["TensorFlow", "Keras", "Flask", "Git", "VS Code", "MongoDB", "MySQL", "Jira", "Confluence", "ServiceNow"] 
    }
  ];
  
  const experiences = [
    {
      company: "Flipkart",
      position: "Application Security Engineer",
      period: "Oct 2024 - April 2025",
      description: "Performed VAPT on Web and Android applications, networks, and cloud servers, identifying critical vulnerabilities. Worked with Business Units to optimize reporting workflows, enhance coordination with vulnerability management and patching teams, and implement security controls. Performed API security testing on BU-specific PROD endpoints, identifying critical vulnerabilities. Monitored security incidents with Burp Suite, Nmap, and Nessus, producing detailed vulnerability reports."
    },
    {
      company: "Dazn India",
      position: "Technical Support Specialist",
      period: "Nov 2023 - Oct 2024",
      description: "Monitored live and off-stream sports activities, utilizing ServiceNow and Halo for incident management, ensuring platform reliability with CloudFlare VPN. Conducted metadata monitoring to prevent piracy, resolving syndication and transcoding issues using ORCA. Managed platform performance using tools such as CMS, LMS, SAM, Ingest V3, API feeds, Conviva, New Relic, AWS, and Linux. Collaborated with teams to troubleshoot complex technical issues, providing timely updates and implementing preventive measures to minimize downtime."
    },
    {
      company: "ICRISAT",
      position: "Deep Learning Engineer Intern",
      period: "May 2023 - July 2023",
      description: "Conducted Research & Development on Image-based Disease Identification using a large dataset of high-resolution images from ICRISAT fields, leading to the deployment of a high-accuracy model in agricultural practices. Leveraged Mask R-CNN for image segmentation, achieving 94% accuracy in identifying Maize Leaf Diseases. Integrated the model into agricultural systems, providing a faster, more precise diagnostic tool and improving crop management."
    },
    {
      company: "Adiroha Solutions",
      position: "Security Intern",
      period: "Sept 2021 - Jan 2022",
      description: "Conducted vulnerability assessments to identify and document potential security risks. Performed comprehensive security evaluations to detect threats and contributed to the development of mitigation strategies using a range of penetration testing tools. Contributed to the creation of security documentation, including reports and recommendations for improving system security."
    }
  ];
  
  const education = [
    {
      institution: "Indian Institute of Technology Guwahati",
      degree: "Diploma in Cyber Security",
      period: "August 2024 - Ongoing",
      description: "Currently pursuing advanced studies in cybersecurity technologies and practices in Guwahati, Assam."
    },
    {
      institution: "Keshav Memorial Institute of Technology",
      degree: "Bachelor of Technology in Computer Science Engineering",
      period: "August 2019 - July 2023",
      description: "CGPA: 7.7 - Focused on computer science fundamentals and specialized in security concepts in Hyderabad, Telangana."
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate",
      period: "August 2017 - May 2019",
      description: "Percentage: 94%, Hyderabad, Telangana"
    },
    {
      institution: "St. Paul's High School",
      degree: "State Board",
      period: "Completed May 2017",
      description: "GPA: 9.3, Hyderabad, Telangana"
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
                  Dynamic professional with over a year of experience in both Cybersecurity and Software Development.
                  Proficient in Application Security, vulnerability management, and optimizing system performance. Experienced
                  with Blue Teaming practices and a wide range of development tools. Collaborative and adaptable, eager to
                  contribute to teams in Software Engineering and Security. Dedicated to ongoing learning and professional growth.
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
                    <div className="flex flex-col md:flex-row md:items-center text-muted-foreground mb-2">
                      <span>{exp.company}</span>
                      <span className="hidden md:block mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-sm md:text-base">{exp.description}</p>
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
                    <div className="flex flex-col md:flex-row md:items-center text-muted-foreground mb-2">
                      <span>{edu.institution}</span>
                      <span className="hidden md:block mx-2">•</span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-sm md:text-base">{edu.description}</p>
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
