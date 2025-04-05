import { CountdownTimer } from "../CountdownTimer";

const NextEpisodeCountdown = () => {
  // Get current date and time
  const now = new Date();
  
  // Set target date to today at 8:30 PM
  const targetDate = new Date();
  targetDate.setHours(20, 30, 0, 0); // 8:30 PM
  
  // Get current day of week (0 = Sunday, 6 = Saturday)
  const currentDay = now.getDay();
  
  // Calculate days until next episode
  let daysToAdd = 0;
  
  // If it's Saturday after 8:30 PM, set to Sunday
  if (currentDay === 6 && now > targetDate) {
    daysToAdd = 1; // Next episode is Sunday
  } 
  // If it's Sunday after 8:30 PM, set to next Saturday
  else if (currentDay === 0 && now > targetDate) {
    daysToAdd = 6; // Next episode is next Saturday
  }
  // If it's before Saturday, set to Saturday
  else if (currentDay < 6) {
    daysToAdd = 6 - currentDay; // Days until Saturday
  }
  // If it's Saturday before 8:30 PM, no days to add
  
  // Add days to get to next episode
  targetDate.setDate(targetDate.getDate() + daysToAdd);
  
  // Calculate episode number
  // Starting from Episode 18 for today
  const baseEpisode = 18;
  const weeksFromBase = Math.floor(daysToAdd / 7);
  const episodeNumber = baseEpisode + weeksFromBase;
  
  // Determine episode day
  const episodeDay = targetDate.getDay() === 0 ? "Sunday" : "Saturday";
  
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <CountdownTimer 
        targetDate={targetDate}
        title={`Be The Next 9 Dreamers Episode ${episodeNumber} - ${episodeDay} at 8:30 PM`}
      />
      <div className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
        Watch on TV5 from 8:30 PM to 9:30 PM
      </div>
    </div>
  );
};

export default NextEpisodeCountdown; 