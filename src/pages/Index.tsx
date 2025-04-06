
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import PhotoCarousel from '../components/home/PhotoCarousel';
import NewsletterModal from '../components/newsletter/NewsletterModal';

const Index = () => {
  return (
    <div className="bg-background">
      <Hero />
      <PhotoCarousel />
      <Features />
      <NewsletterModal />
    </div>
  );
};

export default Index;
