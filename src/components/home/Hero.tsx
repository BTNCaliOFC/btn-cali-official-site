
import { Link } from 'react-router-dom';
import EpisodeCountdown from './EpisodeCountdown';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-hero-pattern flex flex-col justify-center overflow-hidden pt-16">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col text-center lg:text-left order-2 lg:order-1 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Welcome to<br />
            <span className="text-btn">BTN Cali Official</span>
          </h1>
          
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            Join the dedicated fandom supporting Cali on his journey through Be The Next: 9 Dreamers. Together we can make his debut dreams come true!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/voting-team" className="btn-primary">
              Join Voting Team
            </Link>
            <a href="https://www.facebook.com/share/g/14pqQ31ae5/" className="btn-secondary">
              Join Community
            </a>
          </div>
          
          <div className="mt-10">
            <EpisodeCountdown />
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-btn to-accent rounded-3xl blur opacity-30 animate-pulse-slow"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl max-w-md mx-auto animate-float">
              <img 
                src="/lovable-uploads/86fccf77-86ff-4842-8575-1e257ca17685.png" 
                alt="Cali from Be The Next Dreamer" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#features" 
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-btn"
          >
            <path d="M12 5l0 14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
