
import { useState } from 'react';
import { Button } from '@/components/ui 2/button';
import { Textarea } from '@/components/ui 2/textarea';
import { Input } from '@/components/ui 2/input';
import { useToast } from '@/hooks/use-toast';
import { postFanComment } from '@/integrations/supabase/client';

interface FanInteractionFormProps {
  type: 'forum' | 'story' | 'fanart';
  parentId?: string;
  onSuccess?: () => void;
  placeholder?: string;
  includeTitle?: boolean;
}

const FanInteractionForm = ({ 
  type, 
  parentId, 
  onSuccess, 
  placeholder = 'Share your thoughts...',
  includeTitle = false
}: FanInteractionFormProps) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast({
        title: "Content is required",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Format content with title if needed
    const formattedContent = includeTitle && title ? `# ${title}\n\n${content}` : content;
    
    try {
      const result = await postFanComment(null, formattedContent, type, parentId);
      
      if (result.success) {
        setContent('');
        setTitle('');
        toast({
          title: "Posted successfully!",
          description: "Your content has been shared with the community.",
        });
        if (onSuccess) onSuccess();
      } else {
        throw new Error('Failed to post');
      }
    } catch (error) {
      toast({
        title: "Failed to post",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {includeTitle && (
        <div>
          <Input
            placeholder="Enter a title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full"
          />
        </div>
      )}
      <Textarea
        placeholder={placeholder}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={5}
        className="w-full resize-none"
      />
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting || !content.trim()}
      >
        {isSubmitting ? 'Posting...' : 'Post'}
      </Button>
    </form>
  );
};

export default FanInteractionForm;
