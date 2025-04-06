
import { Button } from "@/components/ui 2/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-500">
            BTN Cali Official Fansite
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl">
            The official fan community supporting Cali on his journey through 
            Be The Next: 9 Dreamers. Join us in celebrating his talent and helping him achieve his dreams!
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/voting-team">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
                Join Voting Team
              </Button>
            </Link>
            
            <Link to="/fan-zone">
              <Button size="lg" variant="outline">
                Explore Fan Zone
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
