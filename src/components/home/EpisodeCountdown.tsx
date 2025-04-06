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
    number: 18,
    day: "Sunday",
    month: "April",
    date: 6,
    year: 2025
  });
  
  // Function to calculate the next episode date and number
  const calculateNextEpisode = () => {
    const now = new Date();
    
    // Today's episode (Episode 18, Sunday, April 6)
    const todayEpisode = {
      number: 18,
      day: "Sunday",
      month: "April",
      date: 6,
      year: 2025,
      airTime: new Date(2025, 3, 6, 20, 30, 0) // April 6, 2025, 8:30 PM
    };
    
    // Next episode (Episode 19, Saturday, April 12)
    const nextEpisode = {
      number: 19,
      day: "Saturday",
      month: "April",
      date: 12,
      year: 2025,
      airTime: new Date(2025, 3, 12, 20, 30, 0) // April 12, 2025, 8:30 PM
    };
    
    // Episode after next (Episode 20, Sunday, April 13)
    const episodeAfterNext = {
      number: 20,
      day: "Sunday",
      month: "April",
      date: 13,
      year: 2025,
      airTime: new Date(2025, 3, 13, 20, 30, 0) // April 13, 2025, 8:30 PM
    };
    
    // Check if we're before today's episode
    if (now < todayEpisode.airTime) {
      return todayEpisode;
    }
    // Check if we're before next episode
    else if (now < nextEpisode.airTime) {
      return nextEpisode;
    }
    // Check if we're before episode after next
    else if (now < episodeAfterNext.airTime) {
      return episodeAfterNext;
    }
    // If we're past all known episodes, calculate future episodes
    else {
      // Calculate how many weeks ahead we are
      const weeksAhead = Math.floor((now.getTime() - episodeAfterNext.airTime.getTime()) / (7 * 24 * 60 * 60 * 1000));
      
      // Calculate the next Saturday (Episode 21)
      const nextSaturday = new Date(episodeAfterNext.airTime);
      nextSaturday.setDate(nextSaturday.getDate() + (7 * weeksAhead) + 7);
      
      // Calculate episode number (each week has 2 episodes)
      const episodeNumber = episodeAfterNext.number + (weeksAhead * 2) + 1;
      
      return {
        number: episodeNumber,
        day: "Saturday",
        month: nextSaturday.toLocaleString('en-US', { month: 'long' }),
        date: nextSaturday.getDate(),
        year: nextSaturday.getFullYear(),
        airTime: nextSaturday
      };
    }
  };
  
  useEffect(() => {
    const updateEpisodeInfo = () => {
      const nextEpisode = calculateNextEpisode();
      setEpisodeInfo({
        number: nextEpisode.number,
        day: nextEpisode.day,
        month: nextEpisode.month,
        date: nextEpisode.date,
        year: nextEpisode.year
      });
    };
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextEpisode = calculateNextEpisode();
      const difference = nextEpisode.airTime.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If countdown ended, update to next episode
        updateEpisodeInfo();
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    // Initial calculations
    updateEpisodeInfo();
    calculateTimeLeft();
    
    // Set up interval to update countdown
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Set up interval to check if we need to update episode info (every minute)
    const episodeCheck = setInterval(updateEpisodeInfo, 60000);
    
    return () => {
      clearInterval(timer);
      clearInterval(episodeCheck);
    };
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
            Be The Next 9 Dreamers Episode {episodeInfo.number}
          </h3>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-3">
            {episodeInfo.day}, {episodeInfo.month} {episodeInfo.date} at 8:30PM Philippines Time (PHT) on TV5
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
