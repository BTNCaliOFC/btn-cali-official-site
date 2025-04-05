
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const DailyDoseOfCali = () => {
  const [currentDay, setCurrentDay] = useState<string>("");
  
  useEffect(() => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    setCurrentDay(days[today]);
  }, []);
  
  return (
    <Card className="mb-12 bg-gradient-to-br from-btn/5 to-accent/5 overflow-hidden">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Daily Dose of Cali</CardTitle>
          <Badge variant="outline" className="text-xs font-normal">
            {currentDay || "Loading..."}
          </Badge>
        </div>
        <CardDescription>Your daily content from BTN Cali</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        {currentDay === "Monday" && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Monday Message</h3>
            <img 
              src="/lovable-uploads/af469866-bff3-43f6-b8a7-3f12f7abe251.png"
              alt="Monday Message"
              className="w-full rounded-md"
            />
          </div>
        )}
        
        {currentDay === "Tuesday" && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Talent Tuesday</h3>
            <img 
              src="/lovable-uploads/a264f580-bd07-4d39-8c61-6ed647b1d290.png"
              alt="Talent Tuesday"
              className="w-full rounded-md"
            />
          </div>
        )}
        
        {currentDay === "Wednesday" && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Wisdom Wednesday</h3>
            <img 
              src="/lovable-uploads/1ad97c1c-1284-471d-ac42-8d385fd33eb0.png"
              alt="Wisdom Wednesday"
              className="w-full rounded-md"
            />
          </div>
        )}
        
        {currentDay === "Thursday" && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Throwback Thursday</h3>
            <img 
              src="/lovable-uploads/f3a97b9f-ea2e-4a78-8460-4351a0193daf.png"
              alt="Throwback Thursday"
              className="w-full rounded-md"
            />
          </div>
        )}
        
        {currentDay === "Friday" && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Fun Friday</h3>
            <img 
              src="/lovable-uploads/07498ba1-0839-44cd-bc9c-6e87b76403ce.png"
              alt="Fun Friday"
              className="w-full rounded-md"
            />
          </div>
        )}
        
        {currentDay === "Saturday" && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Spotlight Saturday</h3>
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative rounded-md overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/cwvlrPUnI9I" 
                title="this is how it feels like to be an enhypen album collector"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <p className="text-sm text-muted-foreground">this is how it feels like to be an enhypen album collector</p>
          </div>
        )}
        
        {currentDay === "Sunday" && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Sunday Inbox</h3>
            <p>Check back for messages and updates from Cali</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DailyDoseOfCali;
