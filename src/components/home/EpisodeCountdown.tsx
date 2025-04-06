import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const EpisodeCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [episodeInfo, setEpisodeInfo] = useState({
    number: 0,
    airDate: new Date()
  });

  // Calculate the next episode number and air date
  const calculateNextEpisode = () => {
    const now = new Date();
    
    // Calculate the most recent Saturday and Sunday at 8:30 PM Philippines time (GMT+8)
    const saturdayDate = new Date(now);
    const sundayDate = new Date(now);
    
    // Set to last Saturday (day 6)
    saturdayDate.setDate(now.getDate() - ((now.getDay() + 1) % 7 || 7) + 6);
    saturdayDate.setHours(20, 30, 0, 0); // 8:30 PM
    
    // Set to last Sunday (day 0)
    sundayDate.setDate(now.getDate() - now.getDay());
    sundayDate.setHours(20, 30, 0, 0); // 8:30 PM
    
    // Adjust for next episodes
    const nextSaturdayDate = new Date(saturdayDate);
    const nextSundayDate = new Date(sundayDate);
    
    // If we're past Sunday's episode, move to next week
    if (now > sundayDate) {
      nextSaturdayDate.setDate(nextSaturdayDate.getDate() + 7);
      nextSundayDate.setDate(nextSundayDate.getDate() + 7);
    }
    // If we're past Saturday's episode but before Sunday's
    else if (now > saturdayDate) {
      // Keep Sunday as is, it's the next episode
    }
    // If we're before Saturday's episode
    else {
      // Keep Saturday as is, it's the next episode
      nextSundayDate.setDate(nextSundayDate.getDate() - 7); // Move Sunday to previous week
    }
    
    // Calculate next target date for countdown
    let targetDate;
    let episodeNumber;
    
    // Starting with Episode 18 on Sunday (today)
    const baseEpisodeNumber = 18;
    
    // Days since starting point (April 6, 2025)
    const startingDate = new Date(2025, 3, 6); // April 6, 2025
    const daysSinceStart = Math.floor((now.getTime() - startingDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Calculate which week we're in (each week has 2 episodes)
    const weeksOffset = Math.floor(daysSinceStart / 7);
    const episodeOffset = weeksOffset * 2;
    
    // Determine if the next episode is Saturday or Sunday
    if (now < saturdayDate) {
      // Next episode is Saturday
      targetDate = nextSaturdayDate;
      episodeNumber = baseEpisodeNumber + episodeOffset + 1; // Saturday episode
    } else if (now < sundayDate) {
      // Next episode is Sunday
      targetDate = nextSundayDate;
      episodeNumber = baseEpisodeNumber + episodeOffset; // Sunday episode
    } else {
      // Next episode is next Saturday
      targetDate = nextSaturdayDate;
      episodeNumber = baseEpisodeNumber + episodeOffset + 2; // Next Saturday episode
    }
    
    return { number: episodeNumber, airDate: targetDate };
  };

  useEffect(() => {
    // Calculate initial episode info
    const nextEpisode = calculateNextEpisode();
    setEpisodeInfo(nextEpisode);
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = episodeInfo.airDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If countdown ended, recalculate for next episode
        const nextEpisode = calculateNextEpisode();
        setEpisodeInfo(nextEpisode);
      }
    };
    
    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [episodeInfo.airDate]);

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
            Be The Next 9 Dreamers Episode {episodeInfo.number}
          </h3>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-3">
            {episodeInfo.airDate.toLocaleDateString('en-US', { 
              weekday: 'long',
              month: 'short',
              day: 'numeric'
            })} at 8:30PM Philippines Time
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
