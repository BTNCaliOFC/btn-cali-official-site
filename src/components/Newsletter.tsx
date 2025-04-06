
import { useState } from "react";
import { Button } from "@/components/ui 2/button";
import { Input } from "@/components/ui 2/input";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/integrations/supabase/client";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        toast({
          title: "Subscription successful!",
          description: "Thank you for subscribing to BTN Cali updates.",
        });
        setEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was an error processing your subscription. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 rounded-xl glass-card">
      <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Subscribe to get the latest updates about Cali and Be The Next 9 Dreamers.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}
