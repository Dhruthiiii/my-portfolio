
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-4">
              Turning Vision Into Reality With Code And Design.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              As a skilled full-stack developer, I am dedicated to turning ideas into 
              innovative web applications. Explore my latest projects and articles, 
              showcasing my expertise in React.js and web development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-md">
                <a href="/Anna_Reynolds_Resume.pdf" target="_blank" className="flex items-center">
                  Resume
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                    <path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3H6.5C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md">
                <Link to="/contact">
                  Contact
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="hero-image-wrapper w-72 h-72 md:w-96 md:h-96">
              <img
                src="/lovable-uploads/838b98bc-b036-4bc1-8280-6efe46ad1dfd.png"
                alt="Anna Reynolds"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="hero-badge w-20 h-20 top-0 left-0 -translate-x-1/4 -translate-y-1/4">
              <div className="animate-spin-slow w-full h-full flex items-center justify-center text-xs font-semibold">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path 
                    id="circle"
                    d="M 50 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    fill="none"
                  />
                  <text>
                    <textPath href="#circle" className="text-[9px]">
                      Full-Stack • Web Developer • UX Designer • 
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-black text-white dark:bg-white dark:text-black">
                  AR
                </div>
              </div>
            </div>
            
            <div className="hero-badge w-24 h-24 bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-sm font-semibold">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-full h-full">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM16.5 20.25l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L9.75 13.5l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L16.5 6.75l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L23.25 13.5l-2.846.813a4.5 4.5 0 0 0-3.09 3.09L16.5 20.25Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
