
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FanInteractionDisplay from '@/components/fan-zone/FanInteractionDisplay';

const FanZone = () => {
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Fan Zone</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join the BTN Cali community! Share your thoughts, fan stories, and artwork to connect with fellow supporters.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="forum" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="forum">Fan Forum</TabsTrigger>
              <TabsTrigger value="stories">Fan Stories</TabsTrigger>
              <TabsTrigger value="fanart">Fan Art</TabsTrigger>
            </TabsList>
            
            <TabsContent value="forum" className="border rounded-lg p-6">
              <FanInteractionDisplay 
                type="forum"
                title="Fan Forum"
                description="Discuss anything related to Cali and his journey on Be The Next: 9 Dreamers."
              />
            </TabsContent>
            
            <TabsContent value="stories" className="border rounded-lg p-6">
              <FanInteractionDisplay 
                type="story"
                title="Fan Stories"
                description="Share your stories about when you became a fan or special moments related to Cali."
              />
            </TabsContent>
            
            <TabsContent value="fanart" className="border rounded-lg p-6">
              <FanInteractionDisplay 
                type="fanart"
                title="Fan Art"
                description="Describe or link to your fan art creations. Let's celebrate Cali's journey together!"
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FanZone;
