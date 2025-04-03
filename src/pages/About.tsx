
import { Clock, Award, Star, Heart, Music } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About BTN Cali Official</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-btn">Our Fandom</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              BTN Cali Official is the dedicated fandom supporting Cali on his journey through Be The NEXT: 9 Dreamers. 
              We are a passionate community united by our belief in Cali's talent and potential to achieve his dreams.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our mission is to provide unwavering support for Cali during his time on Be The Next Dreamer and beyond. 
              We do this through organized voting efforts, social media campaigns, and creating a positive community 
              for fans to connect and share their love for Cali.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Founded on February 6, 2025 with members from around the world, we welcome anyone who believes in Cali's 
              talents and wants to join us in supporting his journey.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-btn">About Be The Next 9 Dreamers</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Be The Next 9 Dreamers is a survival reality show by MLD Entertainment and TV5, where 75 talented trainees 
              compete for a chance to debut in a global boy group. The show puts contestants through intense training, 
              rigorous challenges, and thrilling performances, testing their skills in singing, dancing, and stage presence.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With public votes (50%) and mentor evaluations (50%) determining the winners, every episode is filled with 
              suspense as hopefuls push their limits to secure a coveted spot in the final lineup.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Set to run for approximately six months, the show promises to deliver inspiring journeys, fierce competition, 
              and unforgettable performances as the next generation of idols fights for their dreams.
            </p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-10">About Cali</h2>
        
        <div className="flex justify-center mb-16">
          <div className="max-w-3xl w-full">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-btn to-accent rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/af469866-bff3-43f6-b8a7-3f12f7abe251.png" 
                  alt="Cali Profile" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
