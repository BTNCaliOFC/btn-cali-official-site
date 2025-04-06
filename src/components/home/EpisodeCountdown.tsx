import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const EpisodeCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Set the target date to today (Sunday, April 6) at 8:30 PM PHT
  const targetDate = new Date();
  targetDate.setHours(20, 30, 0, 0); // 8:30 PM
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If countdown ended, set all to zero
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : time.toString();
  };

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];
  
  return (
    <div className="w-full">
      <Card className="bg-white/10 backdrop-blur-sm border border-blue-200/30 shadow-lg">
        <CardContent className="p-4">
          <h3 className="text-center font-semibold text-lg mb-2 text-blue-800 dark:text-blue-300">
            Be The Next 9 Dreamers Episode 18
          </h3>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-3">
            Sunday, April 6 at 8:30PM Philippines Time (PHT) on TV5
          </p>
          
          <div className="flex justify-center space-x-3">
            {timeUnits.map((unit, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-xl sm:text-2xl py-2 px-3 rounded-lg shadow-md min-w-[50px] text-center">
                  {formatTime(unit.value)}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">{unit.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EpisodeCountdown;
