import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui 2/card";
import { Trophy, Award, Heart, Star, Target } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui 2/button";

// Sample data for top supporters
const topSupporters = [
  { id: 1, name: "Reymark", badge: "Ultimate Voting Champion", category: "(1st Voting Period)" },
  { id: 2, name: "Zwitzel", badge: "Reigning Voting Princess", category: "(1st Voting Period)" },
  { id: 3, name: "Chard", badge: "Relentless Voting Warrior", category: "(1st Voting Period)" },
  { id: 4, name: "Ari", badge: "Visionary Creative Royalty", category: "(Creatives Team)" },
  { id: 5, name: "Precy", badge: "Social Media Luminary", category: "(Social Media & Engagements)" }
];

const milestones = [
  { id: 1, title: "82K+ Reach", progress: 100, icon: <Trophy size={18} /> },
  { id: 2, title: "55.8K+ Post Views", progress: 100, icon: <Heart size={18} /> },
  { id: 3, title: "19K+ Followers", progress: 100, icon: <Star size={18} /> },
  { id: 4, title: "8K+ Interactions", progress: 100, icon: <Target size={18} /> }
];

const DreamKeepersLeaderboard = () => {
  const [activeTab, setActiveTab] = useState<'supporters' | 'milestones'>('supporters');
  
  return (
    <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          DreamKeepers Leaderboard & Achievements 🏆
        </CardTitle>
        <p className="text-sm opacity-90">
          Recognizing top supporters, tracking milestones, and rewarding engagement
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex gap-2 mb-6">
          <Button 
            variant={activeTab === 'supporters' ? 'default' : 'outline'}
            onClick={() => setActiveTab('supporters')}
            className="flex items-center gap-2"
          >
            <Trophy size={16} />
            Top Supporters
          </Button>
          <Button 
            variant={activeTab === 'milestones' ? 'default' : 'outline'}
            onClick={() => setActiveTab('milestones')}
            className="flex items-center gap-2"
          >
            <Target size={16} />
            Fandom Milestones
          </Button>
        </div>
        
        {activeTab === 'supporters' && (
          <div className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left">Rank</th>
                    <th className="px-4 py-3 text-left">Supporter</th>
                    <th className="px-4 py-3 text-left">Achievement</th>
                    <th className="px-4 py-3 text-left">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {topSupporters.map((supporter, index) => (
                    <tr key={supporter.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-4 py-3">
                        {index === 0 ? (
                          <Trophy className="h-5 w-5 text-yellow-500" />
                        ) : index === 1 ? (
                          <Trophy className="h-5 w-5 text-gray-400" />
                        ) : index === 2 ? (
                          <Trophy className="h-5 w-5 text-amber-700" />
                        ) : (
                          <span className="text-gray-600">{index + 1}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 font-medium">{supporter.name}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                          {supporter.badge}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{supporter.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center text-sm text-gray-500 pt-2">
              Join the community to be featured on the leaderboard!
            </div>
          </div>
        )}
        
        {activeTab === 'milestones' && (
          <div className="space-y-4">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2 font-medium">
                    {milestone.icon}
                    {milestone.title}
                  </div>
                  <span className="text-sm font-bold">Achieved!</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full" 
                    style={{ width: `${milestone.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="text-center text-sm text-gray-500 pt-2">
              These milestones were achieved thanks to your support!
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DreamKeepersLeaderboard;
