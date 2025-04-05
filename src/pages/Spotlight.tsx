
import { useState } from "react";
import { Youtube, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Video data for highlights section
const highlightsVideos = [
  {
    id: "smcLDR8Tfes",
    title: "Be The Next 9 Dreamers Cali Highlights | Episode 16 - March 30, 2025",
    thumbnail: "/lovable-uploads/4999fe29-b764-4823-8d23-6faef6fc8e32.png"
  },
  {
    id: "SinQ2oem8xo",
    title: "Be The Next 9 Dreamers Cali Highlights | Episode 15 - March 29, 2025",
    thumbnail: "/lovable-uploads/4999fe29-b764-4823-8d23-6faef6fc8e32.png"
  },
  {
    id: "ucPQ7ouOc_8",
    title: "Be The Next 9 Dreamers Cali Highlights | Episode 9 - March 8, 2025",
    thumbnail: "/lovable-uploads/4999fe29-b764-4823-8d23-6faef6fc8e32.png"
  },
  {
    id: "646emmtbyfE",
    title: "Be The Next 9 Dreamers Cali Highlights | Episode 7 - March 1, 2025",
    thumbnail: "/lovable-uploads/4999fe29-b764-4823-8d23-6faef6fc8e32.png"
  },
  {
    id: "K4bQcn2Cstk",
    title: "Be The Next 9 Dreamers Cali Highlights | Episode 6 - February 23, 2025",
    thumbnail: "/lovable-uploads/4999fe29-b764-4823-8d23-6faef6fc8e32.png"
  },
  {
    id: "TxNQOlIgwKA",
    title: "Be The Next 9 Dreamers Cali Highlights | Episode 5 - February 22, 2025",
    thumbnail: "/lovable-uploads/4999fe29-b764-4823-8d23-6faef6fc8e32.png"
  }
];

// Video data for shorts section
const shortsVideos = [
  {
    id: "cwvlrPUnI9I",
    title: "Cali In Focus - EP 16",
    thumbnail: "/placeholder.svg"
  },
  {
    id: "zG60AIfZy4U",
    title: "Motivational Monday - March 31, 2025",
    thumbnail: "/placeholder.svg"
  },
  {
    id: "a7vDWkga6vs",
    title: "CALI serving visuals 🥵🔥✨",
    thumbnail: "/placeholder.svg"
  },
  {
    id: "j0RB9vt0Mac",
    title: "TGIF! Pwede na po magpa-cute? Yes na yes! 😆✨💙",
    thumbnail: "/placeholder.svg"
  }
];

const Spotlight = () => {
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Cali Spotlight</h1>
          
          {/* Highlights Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Cali Highlights</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {highlightsVideos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${video.id}`} 
                      title={video.title}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm line-clamp-2 mb-1">{video.title}</h3>
                    {/* Removed references to video.views and video.date which don't exist in our data model */}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://www.youtube.com/@BTNCaliOfficial/videos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
              >
                <span>View More on YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>
          
          {/* Shorts Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-center">Cali In Focus</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              {shortsVideos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[9/16] bg-gray-100 dark:bg-gray-800 relative">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${video.id}`} 
                      title={video.title}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-medium text-xs line-clamp-2 mb-1">{video.title}</h3>
                    {/* Removed reference to video.views which doesn't exist in our data model */}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://www.youtube.com/@BTNCaliOfficial/shorts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
              >
                <span>View More on YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
