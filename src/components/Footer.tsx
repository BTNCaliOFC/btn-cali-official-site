import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <Link to="/" className="text-2xl font-bold text-cali-blue">
              BTN Cali Official
            </Link>
          </div>
          
          <div className="mb-6">
            <SocialLinks />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 w-full max-w-2xl">
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Site Map</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-cali-blue">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/voting" className="text-sm text-muted-foreground hover:text-cali-blue">
                    Voting Team
                  </Link>
                </li>
                <li>
                  <Link to="/social" className="text-sm text-muted-foreground hover:text-cali-blue">
                    Social Hub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/fan-zone" className="text-sm text-muted-foreground hover:text-cali-blue">
                    Fan Zone
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://rebrand.ly/BTNCaliDreamKeepers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-cali-blue"
                  >
                    Join the Fandom
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.facebook.com/share/g/14pqQ31ae5/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-cali-blue"
                  >
                    Facebook Group
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">More</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-cali-blue">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-cali-blue">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-sm text-muted-foreground max-w-lg">
            <p className="flex items-center justify-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> for Cali and all DreamKeepers
            </p>
            <p className="mt-1">
              A dedicated fandom supporting Cali from Be The Next: 9 Dreamers. Join us in his journey to debut!
            </p>
            <p className="mt-1">
              &copy; {currentYear} BTN Cali Official. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
