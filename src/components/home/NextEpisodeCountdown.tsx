
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui 2/card';
import { Clock } from 'lucide-react';

const NextEpisodeCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Example date - set to next episode date
  const targetDate = new Date("2025-04-15T20:00:00");
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-4">
        <Card className="border-none shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <Clock className="h-6 w-6" />
              Next Episode Countdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-white/80">
              Don't miss the next episode of Be The Next: 9 Dreamers featuring Cali!
            </p>
            
            <div className="grid grid-cols-4 gap-2">
              <div className="text-center p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.days}</div>
                <div className="text-xs md:text-sm mt-1">Days</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs md:text-sm mt-1">Hours</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs md:text-sm mt-1">Minutes</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs md:text-sm mt-1">Seconds</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NextEpisodeCountdown;
