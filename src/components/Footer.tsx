
import { Link } from "react-router-dom";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 mt-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-lg font-bold font-display">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background">
                GS
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Turning vision into reality with code and design.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="mb-4">
              <SocialIcons />
            </div>
            <p className="text-sm text-muted-foreground">
              © {year} Dhruthi Sowmya Gundavarapu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
