import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';

// Set this to true when ready to make the Giveaways page live (match App.tsx)
const GIVEAWAYS_LIVE = false;

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">BTN Cali Official</h3>
            <p className="text-gray-300 mb-4">
              The dedicated fandom supporting Cali from Be The Next Dreamer. Join us in his journey to success!
            </p>
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://www.facebook.com/BTNCaliOfficial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="text-gray-300 hover:text-btn transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/btncaliofficial" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="text-gray-300 hover:text-btn transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://x.com/btncaliofficial" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter" 
                className="text-gray-300 hover:text-btn transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="http://www.youtube.com/@BTNCaliOfficial" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube" 
                className="text-gray-300 hover:text-btn transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/voting-team" className="text-gray-300 hover:text-white transition-colors">Voting Team</Link></li>
              <li><Link to="/social-hub" className="text-gray-300 hover:text-white transition-colors">Social Hub</Link></li>
              <li><Link to="/fan-zone" className="text-gray-300 hover:text-white transition-colors">Fan Zone</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://rebrand.ly/BTNCaliDreamKeepers" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Join Voting Team</a></li>
              {GIVEAWAYS_LIVE && (
                <li><Link to="/giveaways" className="text-gray-300 hover:text-white transition-colors">Giveaways</Link></li>
              )}
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="https://www.facebook.com/share/g/14pqQ31ae5/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Join Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with the latest news and events about Cali.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button 
                type="button" 
                className="bg-btn hover:bg-btn-hover px-4 py-2 rounded-r-md"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BTN Cali Official. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
