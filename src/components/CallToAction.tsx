
import { ArrowRight, Heart, Users, Vote } from "lucide-react";

export function CallToAction() {
  const ctaButtons = [
    { 
      title: "Join the Fandom", 
      description: "Become part of Cali's DreamKeepers!",
      icon: <Heart className="h-5 w-5" />, 
      url: "https://rebrand.ly/BTNCaliDreamKeepers" 
    },
    { 
      title: "Vote for Cali", 
      description: "Help Cali achieve his dreams!",
      icon: <Vote className="h-5 w-5" />, 
      url: "#" 
    },
    { 
      title: "Join the Community", 
      description: "Connect with fellow DreamKeepers!",
      icon: <Users className="h-5 w-5" />, 
      url: "https://www.facebook.com/share/g/14pqQ31ae5/" 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {ctaButtons.map((button, index) => (
        <a 
          key={index}
          href={button.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden"
        >
          <div className="cta-button group-hover:bg-gradient-to-r group-hover:from-cali-blue group-hover:to-cali-dark h-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                {button.icon}
                <div className="text-left">
                  <div className="font-bold">{button.title}</div>
                  <div className="text-xs opacity-90">{button.description}</div>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
