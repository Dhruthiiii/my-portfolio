
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      year: "2024",
      title: "EC-Council Certified Ethical Hacker",
      description: "Earned the industry-standard certification for ethical hacking and penetration testing methodologies.",
      icon: "award"
    },
    {
      year: "2023",
      title: "Maize Disease Detection Model",
      description: "Achieved 94% accuracy in detecting Maize Leaf Diseases using Mask R-CNN model at ICRISAT.",
      icon: "file-text"
    },
    {
      year: "2022",
      title: "Microsoft Certified Security, Compliance, and Identity Fundamentals",
      description: "Earned Microsoft certification in security fundamentals and compliance protocols.",
      icon: "award"
    },
    {
      year: "2022",
      title: "Neural Networks Certification",
      description: "Completed comprehensive training in neural networks from Coursera.",
      icon: "book"
    },
    {
      year: "2021",
      title: "CyberSecurity Certification",
      description: "Completed cybersecurity certification from IIT Kharagpur and RINEX.",
      icon: "award"
    },
    {
      year: "2020",
      title: "Data Science for Engineers Certification",
      description: "Completed NPTEL certification in Data Science methodologies for engineering applications.",
      icon: "award"
    },
    {
      year: "2020",
      title: "Social Networks for Engineers Certification",
      description: "Earned NPTEL certification in social network analysis and applications.",
      icon: "book"
    },
    {
      year: "2019",
      title: "Preliminary in BEC",
      description: "Achieved preliminary level in Business English Certificate from Cambridge.",
      icon: "award"
    }
  ];

  // Group achievements by year
  const achievementsByYear = achievements.reduce((acc, achievement) => {
    if (!acc[achievement.year]) {
      acc[achievement.year] = [];
    }
    acc[achievement.year].push(achievement);
    return acc;
  }, {} as Record<string, Achievement[]>);

  const years = Object.keys(achievementsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold font-display mb-4">Achievements</h1>
              <p className="text-muted-foreground mb-12">
                A timeline of professional certifications, awards, and milestones throughout my career.
              </p>
              
              {/* Timeline */}
              <div className="relative border-l-2 border-primary ml-4 md:ml-6 pl-8">
                {years.map((year) => (
                  <div key={year} className="mb-12 last:mb-0">
                    <div className="absolute -left-[15px] -ml-px flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                      {year.slice(-2)}
                    </div>
                    <h2 className="text-2xl font-bold mb-6 pt-1">{year}</h2>
                    
                    <div className="space-y-8">
                      {achievementsByYear[year].map((achievement, index) => (
                        <div 
                          key={index} 
                          className="relative bg-secondary/30 dark:bg-secondary/20 rounded-lg p-6"
                        >
                          <div className="flex flex-col md:flex-row md:items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                              {achievement.icon === "award" && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="8" r="6"></circle>
                                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                                </svg>
                              )}
                              {achievement.icon === "article" && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                                  <path d="M18 14h-8"></path>
                                  <path d="M15 18h-5"></path>
                                  <path d="M10 6h8v4h-8V6Z"></path>
                                </svg>
                              )}
                              {achievement.icon === "file-text" && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                  <polyline points="14 2 14 8 20 8"></polyline>
                                  <line x1="16" y1="13" x2="8" y2="13"></line>
                                  <line x1="16" y1="17" x2="8" y2="17"></line>
                                  <line x1="10" y1="9" x2="8" y2="9"></line>
                                </svg>
                              )}
                              {achievement.icon === "book" && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                              )}
                              {achievement.icon === "home" && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                              )}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                              <p className="text-muted-foreground">{achievement.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Leadership and Extra-Curricular */}
        <section className="py-16 bg-secondary/50 dark:bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-display mb-8 text-center">Leadership & Extra-Curricular</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "All India Radio - Akasavani",
                    role: "Active Member",
                    period: "May 2024 - Current",
                    description: "Creating content and engaging in live broadcasts."
                  },
                  {
                    name: "Udaan - KMIT's R&D",
                    role: "Member",
                    period: "Jan 2023 - June 2023",
                    description: "Contributed to research and development projects, offering innovative ideas and solutions to advance technology."
                  },
                  {
                    name: "Aalap - KMIT's Music Club",
                    role: "Member",
                    period: "August 2019 - July 2023",
                    description: "Organized and performed at music events, fostering a vibrant community and showcasing musical talents."
                  }
                ].map((activity, index) => (
                  <div key={index} className="bg-background border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">{activity.name}</h3>
                    <div className="text-sm">
                      <p className="text-primary font-medium">{activity.role}</p>
                      <p className="text-muted-foreground mb-2">{activity.period}</p>
                      <p>{activity.description}</p>
                    </div>
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

export default Achievements;
