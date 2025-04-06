import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  PenTool, 
  AtSign
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui 2/button";

const socialLinks = [
  {
    icon: <Twitter size={24} />,
    label: 'Twitter',
    href: 'https://x.com/btncaliofficial'
  },
  {
    icon: <Facebook size={24} />,
    label: 'Facebook',
    href: 'https://www.facebook.com/BTNCaliOfficial/'
  },
  {
    icon: <Instagram size={24} />,
    label: 'Instagram',
    href: 'https://www.instagram.com/btncaliofficial'
  },
  {
    icon: <Youtube size={24} />,
    label: 'Youtube',
    href: 'http://www.youtube.com/@BTNCaliOfficial'
  },
  {
    icon: <PenTool size={24} />,
    label: 'Pinterest',
    href: 'https://ph.pinterest.com/btncaliofficial'
  },
  {
    icon: <AtSign size={24} />,
    label: 'Threads',
    href: 'https://www.threads.net/@btncaliofficial'
  }
];

const ComingSoon = () => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url(/lovable-uploads/2eeb1456-39be-4a26-95a3-ff2518f85123.png)",
          backgroundSize: 'cover',
          filter: 'brightness(0.85)'
        }}
      />
      
      <div className="absolute inset-0 z-10 bg-black/30" />
      
      <div className={`z-20 text-white text-center px-6 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">
          BTN Cali Official
        </h1>
        
        <div className="glass p-6 rounded-xl md:p-8 max-w-lg mx-auto backdrop-blur-md bg-black/20 border border-white/10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Coming Soon</h2>
          <p className="text-lg mb-8 text-white/90">
            The official fan site for Be The NEXT Dreamer: Cali. Stay tuned!
          </p>
          
          <div className="flex flex-wrap justify-center gap-5 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-all transform hover:scale-110 duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-sm text-white/70 mt-8 mb-6">
            Follow us on social media for updates
          </div>
          
          <div className="mt-6 mb-4">
            <a 
              href="https://vote.btncaliofficial.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="default" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg py-6 px-10 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                VOTE
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 text-white/60 text-sm z-20">
        &copy; {new Date().getFullYear()} BTN Cali Official
      </div>
    </div>
  );
};

export default ComingSoon;
