import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui 2/dialog';
import { Button } from '@/components/ui 2/button';
import { Input } from '@/components/ui 2/input';
import { Bell, CheckCircle, X } from 'lucide-react';
import { subscribeToNewsletter } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const NewsletterModal = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await subscribeToNewsletter(email);
      
      if (response.success) {
        setSubscribed(true);
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for joining our newsletter."
        });
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "This email may already be subscribed or there was a server error.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setEmail('');
    setSubscribed(false);
  };

  return (
    <Dialog open={open} onOpenChange={(open) => {
      setOpen(open);
      if (!open) reset();
    }}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Subscribe to newsletter">
          <Bell className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        {subscribed ? (
          <div className="text-center py-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <DialogTitle className="text-2xl mb-2">Thank You!</DialogTitle>
            <DialogDescription className="mb-6">
              You have successfully subscribed to our newsletter. You'll be the first to know about updates!
            </DialogDescription>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Subscribe to Updates</DialogTitle>
              <DialogDescription>
                Get the latest news and updates about Cali directly to your inbox.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubscribe} className="space-y-4 pt-4">
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" disabled={loading}>
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;
