import Hero from '../components/home/Hero';
import PhotoCarousel from '../components/home/PhotoCarousel';
import NewsletterModal from '../components/newsletter/NewsletterModal';
import DreamKeepers from '../components/home/DreamKeepers';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="bg-background">
      <Hero />
      <PhotoCarousel />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto bg-gradient-to-r from-[#1e40af] to-[#3b82f6] rounded-xl shadow-lg overflow-hidden mb-8 text-white p-6 border-2 border-[#60a5fa]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-3"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 2 
                }}
              >
                🎉 Congratulations, Cali DreamKeepers! 💙
              </motion.h2>
              <motion.p 
                className="text-xl font-semibold mb-2"
                animate={{ 
                  color: ['#ffffff', '#bfdbfe', '#ffffff'],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3 
                }}
              >
                We did it — Cali is #1 on the Global Fan Vote! 🌍🥇
              </motion.p>
              <motion.p 
                className="text-base md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Your passion, dedication, and sleepless nights made this possible. Let's keep the energy alive and continue to soar higher together with Cali! 🌟🙌
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <DreamKeepers />
      <NewsletterModal />
    </div>
  );
};

export default Index;
