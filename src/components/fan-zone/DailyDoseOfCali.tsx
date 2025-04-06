import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { Calendar, Info, Award, Clock, Users, Star, Mail } from "lucide-react";
import { Volume2, VolumeX } from "lucide-react";

// Add this CSS at the top of your file or in a separate CSS module
const styles = {
  envelope: `
    .envelope {
      position: relative;
      width: 200px;
      height: 150px;
      background: #f0f0f0;
      margin: 20px auto;
      cursor: pointer;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    .envelope.flipped {
      transform: rotateX(180deg);
    }

    .envelope-front, .envelope-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }

    .envelope-front {
      background: linear-gradient(135deg, #e3e3e3, #ffffff);
      border: 2px solid #ccc;
    }

    .envelope-back {
      background: #ffffff;
      transform: rotateX(180deg);
      padding: 20px;
      text-align: center;
    }

    .typing-animation {
      display: inline-block;
      overflow: hidden;
      white-space: pre-wrap;
      animation: typing 3s steps(40, end);
    }

    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
  `,
};

// Weekly messages data
const weeklyMessages = [
  "Dear Cali, your dedication and hard work inspire us every day! Fighting! 💪",
  "Your passion for music shines through in every performance. Keep going! ✨",
  "We believe in you, Cali! Your DreamKeepers are always here to support you! 💙",
  // Add more messages for rotation
];

const days = [
  {
    name: "Motivation Monday",
    icon: <Calendar className="h-5 w-5 text-blue-500" />,
    description: "Inspiring quotes, messages, or throwback moments from Cali.",
    type: "image",
    content: "/lovable-uploads/62163c2f-d019-42bf-b0df-f6aac517b869.png"
  },
  {
    name: "TMI Tuesday",
    icon: <Info className="h-5 w-5 text-indigo-500" />,
    description: "Fun facts and behind-the-scenes trivia about Cali.",
    type: "image",
    content: "/lovable-uploads/9e521c6b-08f4-41b3-9e1f-07cb7318a2aa.png"
  },
  {
    name: "Winning Wednesday",
    icon: <Award className="h-5 w-5 text-violet-500" />,
    description: "Competitions, fan challenges, or fandom achievements.",
    type: "image",
    content: "/lovable-uploads/1ad97c1c-1284-471d-ac42-8d385fd33eb0.png"
  },
  {
    name: "Throwback Thursday",
    icon: <Clock className="h-5 w-5 text-purple-500" />,
    description: "Memorable moments from Cali's journey so far.",
    type: "image",
    content: "/lovable-uploads/f3a97b9f-ea2e-4a78-8460-4351a0193daf.png"
  },
  {
    name: "Fan Feature Friday",
    icon: <Users className="h-5 w-5 text-pink-500" />,
    description: "Shoutouts to active fans, top voters, and special contributors.",
    type: "image",
    content: "/lovable-uploads/07498ba1-0839-44cd-bc9c-6e87b76403ce.png"
  },
  {
    name: "Spotlight Saturday",
    icon: <Star className="h-5 w-5 text-orange-500" />,
    description: "A highlight of Cali's best performances or achievements.",
    type: "video",
    content: "cwvlrPUnI9I"
  },
  {
    name: "Sunday Inbox",
    icon: <Mail className="h-5 w-5 text-yellow-500" />,
    description: "Send messages, letters, or questions for Cali, and the best ones get featured!",
    type: "custom",
    content: "inbox" // Special handling for inbox content
  }
];

const SundayInbox = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/lovable-uploads/background-music.mp3")); // Add your background music file

  useEffect(() => {
    // Get week number to rotate messages
    const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
    const messageIndex = weekNumber % weeklyMessages.length;
    setCurrentMessage(weeklyMessages[messageIndex]);

    // Set up audio
    audioRef.current.volume = 0.3; // 30% volume
    audioRef.current.loop = true;

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  const toggleEnvelope = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
      <style>{styles.envelope}</style>
      
      <button
        onClick={toggleAudio}
        className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      <div className={`envelope ${isFlipped ? 'flipped' : ''}`} onClick={toggleEnvelope}>
        <div className="envelope-front">
          <Mail className="h-12 w-12 text-yellow-500" />
        </div>
        <div className="envelope-back">
          <div className="typing-animation">
            {currentMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

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
            {days[selectedDay].type === "custom" ? (
              <SundayInbox />
            ) : days[selectedDay].type === "video" ? (
              <div className="flex justify-center">
                <div className="w-full aspect-video">
                  <iframe 
                    src={`https://www.youtube.com/embed/${days[selectedDay].content}`}
                    title={days[selectedDay].name}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
              </div>
            ) : (
              <img 
                src={days[selectedDay].content} 
                alt={days[selectedDay].name}
                className="max-w-full rounded-lg shadow-sm" 
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyDoseOfCali;
