import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { Calendar, Info, Award, Clock, Users, Star, Mail, Volume2, VolumeX } from "lucide-react";

// Add this CSS at the top of your file or in a separate CSS module
const styles = {
  envelope: `
    .envelope-container {
      position: relative;
      width: 100%;
      max-width: 300px;
      margin: 20px auto;
      perspective: 1000px;
    }

    .envelope {
      position: relative;
      width: 100%;
      height: 220px;
      cursor: pointer;
      transform-style: preserve-3d;
      transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .envelope.flipped {
      transform: rotateX(180deg);
    }

    .envelope-front, .envelope-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .envelope-front {
      background: linear-gradient(135deg, #2563eb, #3b82f6);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      border: 2px solid rgba(255, 255, 255, 0.1);
    }

    .envelope-back {
      background: #ffffff;
      transform: rotateX(180deg);
      padding: 24px;
      text-align: center;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .message {
      font-size: 1rem;
      line-height: 1.6;
      color: #1e3a8a;
    }

    @media (max-width: 640px) {
      .envelope {
        height: 180px;
      }
      .message {
        font-size: 0.875rem;
      }
    }

    .typing-animation {
      display: inline-block;
      white-space: pre-wrap;
      overflow: hidden;
      border-right: 2px solid #3b82f6;
      animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
      max-width: 100%;
    }

    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #3b82f6 }
    }

    .audio-control {
      position: absolute;
      top: -8px;
      right: -8px;
      z-index: 10;
      background: white;
      border-radius: 50%;
      padding: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border: 2px solid #e5e7eb;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .audio-control:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `,
};

// Weekly messages data
const weeklyMessages = [
"To Cali,

Every week, we watch you grow—not just as a trainee, but as someone who continues to inspire many with your heart, passion, and unwavering dedication. This journey hasn't been easy, but you continue to face every challenge with courage and grit.

I've always believed in you since Day 1. We've been through thick and thin, and I know the road hasn't always been smooth—but we carried on and pursued this dream together. Some may have doubted your skills and potential, but time and time again, you slay those doubts with your growth, hard work, and sincerity.

Whatever happens, I'm always proud of you. I'll keep cheering and supporting you, no matter where this journey takes us.

Thank you for sharing your dreams with your fans. Thank you for never giving up. Know that I'm always here for you—always have been, and always will be. Your light reaches farther than you know, and your DreamKeepers will always be by your side, cheering you on.

Lezz gaur and fightinggg!! 💜
— Admin Kim"
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
    content: "inbox"
  }
];

const SundayInbox = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const audioRef = useRef(new Audio("/lovable-uploads/sunday_inbox.mp3"));

  // This week's message
  const message = "Dear Cali, your dedication and hard work inspire us every day! Your DreamKeepers are always here supporting you. Fighting! 💙✨";

  useEffect(() => {
    audioRef.current.volume = 0.3;
    audioRef.current.loop = true;

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  const toggleEnvelope = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setShowMessage(true);
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
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
    <div className="envelope-container">
      <style>{styles.envelope}</style>
      
      <button
        onClick={toggleAudio}
        className="audio-control"
        aria-label={isPlaying ? "Mute" : "Unmute"}
      >
        {isPlaying ? (
          <Volume2 size={20} className="text-blue-600" />
        ) : (
          <VolumeX size={20} className="text-gray-400" />
        )}
      </button>

      <div className={`envelope ${isFlipped ? 'flipped' : ''}`} onClick={toggleEnvelope}>
        <div className="envelope-front">
          <Mail className="h-16 w-16 text-white" />
        </div>
        <div className="envelope-back">
          <div className={`message ${showMessage ? 'typing-animation' : ''}`}>
            {message}
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
