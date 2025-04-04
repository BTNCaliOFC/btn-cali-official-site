
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Heart, Star, Target } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Sample data for demonstration purposes
const topVoters = [
  { id: 1, name: "DreamFan23", votes: 1250, badges: ["Early Supporter", "Daily Voter"] },
  { id: 2, name: "CaliStan4ever", votes: 980, badges: ["Social Media Warrior"] },
  { id: 3, name: "BTN_Dreamer", votes: 875, badges: ["Community Builder"] },
  { id: 4, name: "StarMaker22", votes: 720, badges: ["Consistent Voter"] },
  { id: 5, name: "CaliSupporter", votes: 650, badges: ["New Recruit"] }
];

const milestones = [
  { id: 1, title: "10,000 Votes", progress: 85, icon: <Trophy size={18} /> },
  { id: 2, title: "5,000 Social Media Followers", progress: 92, icon: <Heart size={18} /> },
  { id: 3, title: "1,000 Forum Posts", progress: 45, icon: <Star size={18} /> },
  { id: 4, title: "500 Fan Stories", progress: 60, icon: <Target size={18} /> }
];

const DreamKeepersLeaderboard = () => {
  const [activeTab, setActiveTab] = useState<'voters' | 'milestones'>('voters');
  
  return (
    <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          DreamKeepers Leaderboard & Achievements 🏆
        </CardTitle>
        <p className="text-sm opacity-90">
          Recognizing top voters, tracking milestones, and rewarding engagement
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex gap-2 mb-6">
          <Button 
            variant={activeTab === 'voters' ? 'default' : 'outline'}
            onClick={() => setActiveTab('voters')}
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
        
        {activeTab === 'voters' && (
          <div className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left">Rank</th>
                    <th className="px-4 py-3 text-left">Supporter</th>
                    <th className="px-4 py-3 text-right">Votes</th>
                    <th className="px-4 py-3 text-left">Achievements</th>
                  </tr>
                </thead>
                <tbody>
                  {topVoters.map((voter, index) => (
                    <tr key={voter.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
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
                      <td className="px-4 py-3 font-medium">{voter.name}</td>
                      <td className="px-4 py-3 text-right">{voter.votes.toLocaleString()}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {voter.badges.map((badge, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center text-sm text-gray-500 pt-2">
              Update your votes daily to climb the leaderboard!
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
                  <span className="text-sm font-bold">{milestone.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${milestone.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="text-center text-sm text-gray-500 pt-2">
              Together we can reach these goals! Keep supporting Cali!
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DreamKeepersLeaderboard;
