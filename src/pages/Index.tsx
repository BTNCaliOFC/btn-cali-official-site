
import { MainNavigation } from "@/components/MainNavigation";
import { Footer } from "@/components/Footer";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CallToAction } from "@/components/CallToAction";
import { NewsItem } from "@/components/NewsItem";
import { Newsletter } from "@/components/Newsletter";
import { SocialLinks } from "@/components/SocialLinks";
import { Separator } from "@/components/ui/separator";

export default function Index() {
  // Setting countdown to 7 days from now (replace with actual date)
  const nextEpisodeDate = new Date();
  nextEpisodeDate.setDate(nextEpisodeDate.getDate() + 7);
  
  // Sample news items (replace with actual data)
  const newsItems = [
    {
      title: "Cali's Performance Wows Judges",
      content: "In the latest episode of Be The Next 9 Dreamers, Cali impressed everyone with his incredible performance, earning praise from all judges.",
      date: "June 15, 2023",
      imageUrl: "https://picsum.photos/seed/news1/600/400"
    },
    {
      title: "DreamKeepers Voting Initiative",
      content: "BTN Cali Official launches new voting initiative to boost support for Cali. Join our voting team today!",
      date: "June 10, 2023",
      imageUrl: "https://picsum.photos/seed/news2/600/400"
    },
    {
      title: "Exclusive Interview with Cali",
      content: "We sat down with Cali to discuss his journey, aspirations, and message to fans. Read the full interview here.",
      date: "June 5, 2023",
      imageUrl: "https://picsum.photos/seed/news3/600/400"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="pt-16 hero-gradient">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-shadow">
                Welcome to <span className="text-cali-blue">BTN Cali</span> Official
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                The official fandom of Cali from Be The Next 9 Dreamers. Join us on this incredible journey!
              </p>
              <CallToAction />
            </div>
            <div className="lg:w-1/2 flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-cali-blue/20 rounded-2xl blur-3xl opacity-30"></div>
                <img 
                  src="/lovable-uploads/851ce7d3-2988-499b-8a00-9403cad459db.png" 
                  alt="Cali from Be The Next 9 Dreamers" 
                  className="relative z-10 rounded-2xl shadow-xl max-w-full max-h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Countdown Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <CountdownTimer 
              targetDate={nextEpisodeDate} 
              title="Next Episode Countdown" 
            />
          </div>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Latest News & Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {newsItems.map((item, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <NewsItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Video Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Featured Highlight</h2>
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-0 pb-[56.25%] relative">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Featured Highlight"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Connect Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow BTN Cali Official on social media to stay updated with the latest news, events, and content.
            </p>
          </div>
          <SocialLinks />
          <Separator className="my-12" />
          <div className="max-w-xl mx-auto">
            <Newsletter />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
