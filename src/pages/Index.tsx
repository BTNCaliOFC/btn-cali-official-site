import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import PhotoCarousel from '../components/home/PhotoCarousel';
import NewsletterModal from '../components/newsletter/NewsletterModal';
import DreamKeepers from '../components/home/DreamKeepers';

const Index = () => {
  return (
    <div className="bg-background">
      <Hero />
      <PhotoCarousel />
      <Features />
      <DreamKeepers />
      <NewsletterModal />
    </div>
  );
};

export default Index;
