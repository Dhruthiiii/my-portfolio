
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
      year: "2023",
      title: "Best Web Application Award",
      description: "Received recognition for developing an innovative web application that improved user engagement by 40%.",
      icon: "award"
    },
    {
      year: "2022",
      title: "Speaker at React Conference",
      description: "Invited as a guest speaker to present advanced React patterns at the annual developers conference.",
      icon: "article"
    },
    {
      year: "2022",
      title: "Open Source Contributor",
      description: "Contributed to multiple React libraries with over 10,000 stars on GitHub.",
      icon: "file-text"
    },
    {
      year: "2021",
      title: "Certified Web Accessibility Specialist",
      description: "Earned certification for implementing inclusive design principles and WCAG compliance.",
      icon: "award"
    },
    {
      year: "2020",
      title: "Published JavaScript E-book",
      description: "Authored a comprehensive guide on modern JavaScript practices that received over 5,000 downloads.",
      icon: "book"
    },
    {
      year: "2019",
      title: "Tech Mentor of the Year",
      description: "Recognized for mentoring junior developers and conducting workshops on web development.",
      icon: "award"
    },
    {
      year: "2018",
      title: "Startup Launch Success",
      description: "Successfully launched and scaled a web application that achieved 10,000 monthly active users.",
      icon: "home"
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
                A timeline of professional accomplishments, awards, and milestones throughout my career.
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
        
        {/* Certifications */}
        <section className="py-16 bg-secondary/50 dark:bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-display mb-8 text-center">Certifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Advanced React Development",
                    issuer: "Frontend Masters",
                    date: "2022",
                    credential: "CERT-12345"
                  },
                  {
                    name: "Web Accessibility",
                    issuer: "W3C",
                    date: "2021",
                    credential: "CERT-67890"
                  },
                  {
                    name: "Full Stack Development",
                    issuer: "Udacity",
                    date: "2020",
                    credential: "CERT-24680"
                  },
                  {
                    name: "UX Design Fundamentals",
                    issuer: "Interaction Design Foundation",
                    date: "2019",
                    credential: "CERT-13579"
                  }
                ].map((cert, index) => (
                  <div key={index} className="bg-background border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                    <div className="text-sm text-muted-foreground">
                      <p>{cert.issuer}</p>
                      <p>Issued: {cert.date}</p>
                      <p>Credential ID: {cert.credential}</p>
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
