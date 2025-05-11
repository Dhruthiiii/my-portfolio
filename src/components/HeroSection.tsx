
import { Button } from "./ui/button";
import { SocialIcons } from "./SocialIcons";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="animate-fade-in max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-4">
              Dhruthi Sowmya Gundavarapu
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Dynamic professional with expertise in Cybersecurity and Software Development. 
              Specializing in Application Security, vulnerability management, and system optimization. 
              Dedicated to creating secure and efficient solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button asChild size="lg" className="rounded-md">
                <a href="mailto:sreesowmyavinod@gmail.com" className="flex items-center">
                  Contact Me
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                    <path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3H6.5C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md">
                <a href="https://www.linkedin.com/in/gundavarapu-dhruthi" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </Button>
            </div>
           
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <img 
                src="/lovable-uploads/00d1a245-ae9a-45b9-9f77-82293a390daa.png" 
                alt="Dhruthi Sowmya" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
