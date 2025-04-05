import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import NewsletterModal from '../components/newsletter/NewsletterModal';
import NextEpisodeCountdown from '../components/home/NextEpisodeCountdown';

const Index = () => {
  return (
    <div className="bg-background">
      <Hero />
      <NextEpisodeCountdown />
      <Features />
      <NewsletterModal />
    </div>
  );
};

export default Index;
