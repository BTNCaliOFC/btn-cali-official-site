
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import NewsletterModal from '../components/newsletter/NewsletterModal';

const Index = () => {
  return (
    <div className="bg-background">
      <Hero />
      <Features />
      <NewsletterModal />
    </div>
  );
};

export default Index;
