import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Calendar, Info, Award, Clock, Users, Star, Mail } from "lucide-react";

const days = [
  {
    name: "Motivation Monday",
    icon: <Calendar className="h-5 w-5 text-blue-500" />,
    description: "Inspiring quotes, messages, or throwback moments from Cali.",
    image: "/lovable-uploads/62163c2f-d019-42bf-b0df-f6aac517b869.png"
  },
  {
    name: "TMI Tuesday",
    icon: <Info className="h-5 w-5 text-indigo-500" />,
    description: "Fun facts and behind-the-scenes trivia about Cali.",
    image: "/lovable-uploads/1ad97c1c-1284-471d-ac42-8d385fd33eb0.png"
  },
  {
    name: "Winning Wednesday",
    icon: <Award className="h-5 w-5 text-violet-500" />,
    description: "Competitions, fan challenges, or fandom achievements.",
    image: "/lovable-uploads/f3a97b9f-ea2e-4a78-8460-4351a0193daf.png"
  },
  {
    name: "Throwback Thursday",
    icon: <Clock className="h-5 w-5 text-purple-500" />,
    description: "Memorable moments from Cali's journey so far.",
    image: "/lovable-uploads/9e521c6b-08f4-41b3-9e1f-07cb7318a2aa.png"
  },
  {
    name: "Fan Feature Friday",
    icon: <Users className="h-5 w-5 text-pink-500" />,
    description: "Shoutouts to active fans, top voters, and special contributors.",
    image: "/lovable-uploads/07498ba1-0839-44cd-bc9c-6e87b76403ce.png"
  },
  {
    name: "Spotlight Saturday",
    icon: <Star className="h-5 w-5 text-orange-500" />,
    description: "A highlight of Cali's best performances or achievements.",
    type: "video",
    content: "cwvlrPUnI9I"  // YouTube video ID from the Shorts URL
  },
  {
    name: "Sunday Inbox",
    icon: <Mail className="h-5 w-5 text-yellow-500" />,
    description: "Send messages, letters, or questions for Cali, and the best ones get featured!"
  }
];

const DailyDoseOfCali = () => {
  // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
  const today = new Date().getDay();
  // Convert to our array index (where Monday is 0)
  const dayIndex = today === 0 ? 6 : today - 1;
  
  const [selectedDay, setSelectedDay] = useState(dayIndex);
  
  return (
    <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          Daily Dose of Cali 💙
        </CardTitle>
        <p className="text-sm opacity-90">
          A dedicated section featuring themed daily content to keep fans engaged and excited
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-7 gap-1 mb-6 border-b pb-4">
          {days.map((day, index) => (
            <button
              key={day.name}
              onClick={() => setSelectedDay(index)}
              className={`text-xs sm:text-sm p-2 rounded-md flex flex-col items-center justify-center transition-colors ${
                selectedDay === index
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 font-medium"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {day.icon}
              <span className="mt-1 hidden sm:block">{day.name.split(" ")[0]}</span>
              <span className="mt-1 block sm:hidden">{day.name.split(" ")[0].substring(0, 3)}</span>
            </button>
          ))}
        </div>
        
        <div className="p-4 border rounded-lg bg-blue-50 dark:bg-gray-800">
          <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
            {days[selectedDay].icon}
            {days[selectedDay].name}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{days[selectedDay].description}</p>
          
          <div className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-lg border shadow-sm">
            {days[selectedDay].image ? (
              <div className="flex justify-center">
                <img 
                  src={days[selectedDay].image} 
                  alt={days[selectedDay].name}
                  className="max-w-full rounded-lg shadow-sm" 
                />
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">Today's {days[selectedDay].name} content will appear here. Stay tuned for daily updates!</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyDoseOfCali;
