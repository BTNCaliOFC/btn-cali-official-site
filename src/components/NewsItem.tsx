
import { CalendarIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type NewsItemProps = {
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
};

export function NewsItem({ title, content, date, imageUrl }: NewsItemProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-xs">
          <CalendarIcon className="h-3 w-3" /> {date}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3">{content}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <button className="text-cali-blue hover:text-cali-dark text-sm font-medium transition-colors">
          Read More
        </button>
      </CardFooter>
    </Card>
  );
}
