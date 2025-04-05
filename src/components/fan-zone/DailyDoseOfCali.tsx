import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { Calendar, Info, Award, Clock, Users, Star, Mail, Pause, Play, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Create a typing effect component
const TypeWriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const speed = 40; // typing speed in ms
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);
  
  return (
    <div className="whitespace-pre-line">
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </div>
  );
};

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
    description: "Send messages, letters, or questions for Cali, and the best ones get featured!"
  }
];

const DailyDoseOfCali = () => {
  const today = new Date().getDay();
  const dayIndex = today === 0 ? 6 : today - 1;
  
  const [selectedDay, setSelectedDay] = useState(dayIndex);
  
  const [isShowingMessage, setIsShowingMessage] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  
  const fanMessage = `To Cali,

Every week, we watch you grow—not just as a trainee, but as someone who continues to inspire many with your heart, passion, and unwavering dedication. This journey hasn't been easy, but you continue to face every challenge with courage and grit.

I've always believed in you since Day 1. We've been through thick and thin, and I know the road hasn't always been smooth—but we carried on and pursued this dream. Some may have doubted your skills and potential, but time and time again, you slay those doubts with your growth, hard work, and sincerity.

Whatever happens, I'm always proud of you. I'll keep cheering and supporting you, no matter where this journey takes us.

Thank you for sharing your dreams with your fans. Thank you for never giving up. Know that I'm always here for you—always have been, and always will be. Your light reaches farther than you know, and your DreamKeepers will always be by your side, cheering you on.

Lezz gaur and fightinggg!! 💜
— Admin Kim`;

  // Updated to make sure audio plays on interaction
  const handleMessageOpen = () => {
    if (!isShowingMessage) {
      setIsShowingMessage(true);
      setTimeout(() => {
        setIsTyping(true);
      }, 500);
      
      // Play audio when message is opened
      playAudio();
    }
  };

  // New function to handle audio playback
  const playAudio = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.volume = 0.3;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => {
          console.error("Audio playback error:", error);
        });
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        playAudio();
      }
    }
  };

  useEffect(() => {
    // We won't try to autoplay here anymore - will rely on user interaction
    if (selectedDay !== 6 && audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    
    // Reset message state when changing days
    if (selectedDay !== 6) {
      setIsShowingMessage(false);
      setIsTyping(false);
    }
  }, [selectedDay]);

  const renderDayContent = () => {
    if (selectedDay === 6) {
      return (
        <div className="py-4">
          <div className="flex justify-end mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMusic}
              className="flex items-center gap-2 text-primary hover:text-primary-foreground hover:bg-primary/90"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <Music size={16} />
              <span className="text-sm">{isPlaying ? 'Pause Music' : 'Play Music'}</span>
            </Button>
          </div>
          
          <audio 
            ref={audioRef} 
            src="/lovable-uploads/sunday_inbox.mp3"
            loop
          />
          
          {!isShowingMessage ? (
            <div 
              onClick={handleMessageOpen}
              className="cursor-pointer transition-all duration-300 hover:shadow-md group"
            >
              <div className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg p-6 flex items-center gap-4">
                <div className="bg-primary/90 text-primary-foreground rounded-full p-3 shadow-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary">Sunday Message for Cali</h3>
                  <p className="text-muted-foreground">Click to read this week's featured message</p>
                </div>
                <div className="bg-primary/5 rounded-full p-2 transition-transform group-hover:translate-x-1">
                  <Play className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          ) : (
            <div className="transition-all animate-fade-in">
              <div className="bg-card rounded-lg shadow-sm border p-6 max-h-[500px] overflow-y-auto">
                <div className="mb-3 pb-2 border-b flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <div className="text-sm font-medium">Featured Message</div>
                  </div>
                  <div className="text-xs text-muted-foreground">Today</div>
                </div>
                
                <div className="prose prose-sm max-w-none">
                  {isTyping ? (
                    <div className="font-handwritten text-foreground leading-relaxed">
                      <TypeWriter text={fanMessage} />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center h-32">
                      <div className="animate-pulse">Loading message...</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (days[selectedDay].content) {
      return (
        <div className="flex justify-center">
          {days[selectedDay].type === "video" ? (
            <div className="w-full aspect-video">
              <iframe 
                src={`https://www.youtube.com/embed/${days[selectedDay].content}`}
                title={days[selectedDay].name}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          ) : (
            <img 
              src={days[selectedDay].content} 
              alt={days[selectedDay].name}
              className="max-w-full rounded-lg shadow-sm" 
            />
          )}
        </div>
      );
    }

    return (
      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
        Today's {days[selectedDay].name} content will appear here. Stay tuned for daily updates!
      </p>
    );
  };

  return (
    <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          Daily Dose of Cali 💙
        </CardTitle>
        <p className="text-sm opacity-90">
          A dedicated section featuring themed daily content to keep DreamKeepers engaged and excited
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
            {renderDayContent()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyDoseOfCali;
