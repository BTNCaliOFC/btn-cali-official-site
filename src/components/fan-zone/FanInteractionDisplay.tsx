
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { getFanInteractions } from '@/integrations/supabase/client';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui 2/card';
import { Button } from '@/components/ui 2/button';
import { Avatar, AvatarFallback } from '@/components/ui 2/avatar';
import { MessageSquare, Heart, RefreshCw } from 'lucide-react';
import FanInteractionForm from './FanInteractionForm';

interface FanInteractionProps {
  type: 'forum' | 'story' | 'fanart';
  title: string;
  description?: string;
}

// Define a proper interface that matches the fan_interactions table structure
interface Interaction {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  type: 'forum' | 'story' | 'fanart';
  parent_id: string | null;
}

const FanInteractionDisplay = ({ type, title, description }: FanInteractionProps) => {
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const { toast } = useToast();

  const loadInteractions = async () => {
    setLoading(true);
    try {
      const result = await getFanInteractions(type);
      if (result.success && result.data) {
        // Use type assertion to handle the Supabase type mismatch
        setInteractions(result.data as unknown as Interaction[]);
      }
    } catch (error) {
      toast({
        title: "Failed to load content",
        description: "Please try refreshing the page.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInteractions();
  }, [type]);

  // Format the content (handling titles for stories/fanart)
  const formatContent = (content: string) => {
    if (type === 'forum') return content;
    
    const titleMatch = content.match(/^# (.*?)(?:\n|$)/);
    if (titleMatch) {
      const title = titleMatch[1];
      const body = content.replace(/^# (.*?)(?:\n|$)/, '').trim();
      return (
        <>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p>{body}</p>
        </>
      );
    }
    
    return content;
  };

  // Get appropriate user initials
  const getUserInitials = (userId: string) => {
    if (userId === 'anonymous') return 'GU';
    return userId.substring(0, 2).toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
        <Button variant="outline" size="sm" onClick={loadInteractions} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      <FanInteractionForm 
        type={type} 
        onSuccess={loadInteractions} 
        includeTitle={type !== 'forum'}
        placeholder={type === 'forum' ? 'Share your thoughts...' : 
                     type === 'story' ? 'Share your fan story about Cali...' : 
                     'Describe your fan art...'}
      />

      <div className="space-y-4 mt-8">
        {loading ? (
          <div className="text-center py-8">
            <RefreshCw className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
            <p className="mt-2 text-muted-foreground">Loading content...</p>
          </div>
        ) : interactions.length === 0 ? (
          <div className="text-center py-8 border rounded-lg bg-muted/20">
            <p className="text-muted-foreground">Be the first to share something!</p>
          </div>
        ) : (
          interactions.map((interaction) => (
            <Card key={interaction.id} className="transition-shadow hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>{getUserInitials(interaction.user_id)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <CardTitle className="text-base">
                        {interaction.user_id === 'anonymous' ? 'Guest Fan' : 'Fan Member'}
                      </CardTitle>
                      <span className="text-xs text-muted-foreground">
                        {new Date(interaction.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {formatContent(interaction.content)}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Heart className="h-4 w-4 mr-1" /> Like
                </Button>
                {type === 'forum' && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-muted-foreground"
                    onClick={() => setReplyingTo(replyingTo === interaction.id ? null : interaction.id)}
                  >
                    <MessageSquare className="h-4 w-4 mr-1" /> Reply
                  </Button>
                )}
              </CardFooter>
              {replyingTo === interaction.id && (
                <div className="px-4 pb-4">
                  <FanInteractionForm 
                    type={type} 
                    parentId={interaction.id}
                    onSuccess={() => {
                      loadInteractions();
                      setReplyingTo(null);
                    }}
                    placeholder="Write a reply..."
                  />
                </div>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default FanInteractionDisplay;
