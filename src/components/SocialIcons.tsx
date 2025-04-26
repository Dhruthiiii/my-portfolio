
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export const SocialIcons = () => {
  const socialLinks = [
    { 
      icon: <Twitter size={18} />, 
      href: "https://twitter.com",
      label: "Twitter",
      color: "text-[#1DA1F2] dark:text-[#1DA1F2]"
    },
    { 
      icon: <Github size={18} />, 
      href: "https://github.com/Dhruthi",
      label: "GitHub",
      color: "text-black dark:text-white" 
    },
    { 
      icon: <Linkedin size={18} />, 
      href: "https://www.linkedin.com/in/gundavarapu-dhruthi",
      label: "LinkedIn",
      color: "text-[#0A66C2] dark:text-[#0A66C2]" 
    },
    { 
      icon: <Instagram size={18} />, 
      href: "https://instagram.com",
      label: "Instagram",
      color: "text-[#E4405F] dark:text-[#E4405F]" 
    }
  ];

  return (
    <div className="flex items-center space-x-2">
      {socialLinks.map((social, index) => (
        <Button 
          key={index} 
          variant="ghost" 
          size="icon" 
          asChild
          className={`rounded-full w-8 h-8 ${social.color} hover:bg-secondary`}
        >
          <a 
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        </Button>
      ))}
    </div>
  );
};
