
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function SocialLinks() {
  const socialLinks = [
    { name: "Twitter", icon: Twitter, url: "https://x.com/btncaliofficial" },
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/BTNCaliOfficial/" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/btncaliofficial" },
    { name: "TikTok", icon: () => (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.321 5.562a4.839 4.839 0 0 1-2.413-2.443A4.772 4.772 0 0 1 16.583 0h-3.00v16.958c0 1.236-.942 2.242-2.142 2.242a2.116 2.116 0 0 1-1.258-.375c-.599-.4-.994-1.068-.994-1.867 0-1.236 1.002-2.242 2.213-2.242.2 0 .47.062.647.062v-3.073c-.2 0-.4-.061-.599-.061-3.01 0-5.45 2.485-5.45 5.54 0 1.66.79 3.072 1.979 3.997a5.536 5.536 0 0 0 3.415 1.174c3.059 0 5.55-2.485 5.55-5.559V9.14c1.175.995 2.65 1.542 4.23 1.542v-3.073c-.4.063-.799.063-1.199.063-.528 0-1.042-.065-1.654-.11Z"/>
      </svg>
    ), url: "https://www.tiktok.com/@btncaliofc" },
    { name: "Youtube", icon: Youtube, url: "http://www.youtube.com/@BTNCaliOfficial" },
    { name: "Threads", icon: MessageCircle, url: "https://www.threads.net/@btncaliofficial" }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <TooltipProvider>
        {socialLinks.map((social) => (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(social.url, "_blank")}
                className="social-icon"
              >
                <social.icon className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">{social.name}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Follow on {social.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
