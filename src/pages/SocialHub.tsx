
import { useState } from 'react';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Heart, 
  MessageSquare, 
  Share2, 
  Calendar,
  ExternalLink
} from 'lucide-react';

const SocialHub = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { label: 'Instagram', icon: <Instagram className="w-5 h-5" /> },
    { label: 'Twitter/X', icon: <Twitter className="w-5 h-5" /> },
    { label: 'Facebook', icon: <Facebook className="w-5 h-5" /> },
    { label: 'YouTube', icon: <Youtube className="w-5 h-5" /> }
  ];
  
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Social Media Hub</h1>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a 
            href="https://www.instagram.com/btncaliofficial" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
          
          <a 
            href="https://www.facebook.com/BTNCaliOfficial/" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:opacity-90 transition-opacity"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>
          
          <a 
            href="https://x.com/btncaliofficial" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 transition-opacity"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5" />
            <span>Twitter/X</span>
          </a>
          
          <a 
            href="http://www.youtube.com/@BTNCaliOfficial" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white hover:opacity-90 transition-opacity"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Youtube className="w-5 h-5" />
            <span>YouTube</span>
          </a>
          
          <a 
            href="https://www.tiktok.com/@btncaliofc" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-black to-gray-800 text-white hover:opacity-90 transition-opacity"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512" className="w-5 h-5">
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
            </svg>
            <span>TikTok</span>
          </a>
          
          <a 
            href="https://ph.pinterest.com/btncaliofficial" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white hover:opacity-90 transition-opacity"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 384 512" className="w-5 h-5">
              <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/>
            </svg>
            <span>Pinterest</span>
          </a>
          
          <a 
            href="https://www.threads.net/@btncaliofficial" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-black text-white hover:opacity-90 transition-opacity"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512" className="w-5 h-5">
              <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-83c26.6 0 50.4 7.5 67.8 13.3c0-18.5 .5-41.9 .5-51.7c0-13.2-.3-32.7-.5-52.1h42.9c-.2 16.1-.3 33.3-.3 48.5zm-160.5 93c-30.6 0-53.5 15.1-52.8 38.6c.4 14.3 11.3 25.1 24.8 31.4c11.7 5.4 26.5 7.3 41.3 6.5c22.7-1.2 38.2-8.6 48.9-22.5c6.6-8.4 11.8-19.4 15.4-32.8c-17.2-14.2-45.8-21.2-77.6-21.2z"/>
            </svg>
            <span>Threads</span>
          </a>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-6 flex flex-wrap border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex items-center px-6 py-3 text-sm font-medium whitespace-nowrap ${
                  activeTab === index 
                    ? 'text-btn border-b-2 border-btn' 
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            {activeTab === 0 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-btn">Instagram Feed</h3>
                
                <div className="mb-4 text-center">
                  <a 
                    href="https://www.instagram.com/btncaliofficial/"
                    className="inline-flex items-center gap-2 text-btn hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>@btncaliofficial</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="relative overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-900 p-3">
                  <iframe
                    src="https://www.instagram.com/btncaliofficial/embed"
                    className="w-full h-[600px] border-0"
                    allowFullScreen
                    scrolling="no"
                    title="Instagram Feed"
                  ></iframe>
                </div>
              </div>
            )}
            
            {activeTab === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-btn">Twitter/X Feed</h3>
                
                <div className="mb-4 text-center">
                  <a 
                    href="https://twitter.com/btncaliofficial"
                    className="inline-flex items-center gap-2 text-btn hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>@btncaliofficial</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="relative overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-900">
                  <a 
                    className="twitter-timeline" 
                    data-height="600" 
                    href="https://twitter.com/btncaliofficial?ref_src=twsrc%5Etfw"
                  >
                    Tweets by @btncaliofficial
                  </a>
                  <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
              </div>
            )}
            
            {activeTab === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-btn">Facebook Posts</h3>
                
                <div className="mb-4 text-center">
                  <a 
                    href="https://www.facebook.com/BTNCaliOfficial/"
                    className="inline-flex items-center gap-2 text-btn hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>BTN Cali Official</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="relative overflow-hidden rounded-lg">
                  <iframe 
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBTNCaliOfficial&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                    width="100%" 
                    height="600" 
                    style={{ border: 'none', overflow: 'hidden' }} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Facebook Feed"
                  ></iframe>
                </div>
              </div>
            )}
            
            {activeTab === 3 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-btn">YouTube Videos</h3>
                
                <div className="mb-4 text-center">
                  <a 
                    href="https://www.youtube.com/@BTNCaliOfficial"
                    className="inline-flex items-center gap-2 text-btn hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>BTN Cali Official Channel</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <div>
                  <iframe 
                    width="100%" 
                    height="400" 
                    src="https://www.youtube.com/embed?listType=user_uploads&list=BTNCaliOfficial" 
                    title="YouTube Videos" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-4">Latest Videos</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
                      <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/EIl1HvAkO3I" 
                        title="How to Vote for Cali" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="rounded-t-lg"
                      ></iframe>
                      <div className="p-4">
                        <h5 className="font-medium mb-1">How to Vote for Cali</h5>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">BTN Cali Official</p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
                      <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/smcLDR8Tfes" 
                        title="Cali's Episode 16 Performance" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="rounded-t-lg"
                      ></iframe>
                      <div className="p-4">
                        <h5 className="font-medium mb-1">Cali's Episode 16 Performance</h5>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">BTN Cali Official</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Fan Spotlight</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-hover">
                <div className="bg-gray-200 dark:bg-gray-700 aspect-square flex items-center justify-center">
                  <p className="text-gray-400 dark:text-gray-500 text-sm">Fan Content {item}</p>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium mb-2">Amazing Fan Edit by @fan{item}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Check out this incredible edit showcasing Cali's journey so far!
                  </p>
                  
                  <div className="flex justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Heart className="w-4 h-4 mr-1" />
                      <span>{item * 100 + 50}</span>
                    </div>
                    <button className="text-btn hover:underline text-sm">Share</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialHub;
