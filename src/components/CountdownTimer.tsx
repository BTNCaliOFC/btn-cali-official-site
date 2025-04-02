
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type CountdownProps = {
  targetDate: Date;
  title: string;
};

export function CountdownTimer({ targetDate, title }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <Card className="glass-card animate-fade-in shadow-lg">
      <CardContent className="p-4">
        <h3 className="text-center font-semibold text-lg mb-4">{title}</h3>
        <div className="flex justify-center gap-4">
          <div className="text-center">
            <div className="font-bold text-xl md:text-3xl text-cali-blue">
              {timeLeft.days}
            </div>
            <div className="text-xs uppercase">Days</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-xl md:text-3xl text-cali-blue">
              {timeLeft.hours}
            </div>
            <div className="text-xs uppercase">Hours</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-xl md:text-3xl text-cali-blue">
              {timeLeft.minutes}
            </div>
            <div className="text-xs uppercase">Minutes</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-xl md:text-3xl text-cali-blue">
              {timeLeft.seconds}
            </div>
            <div className="text-xs uppercase">Seconds</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
