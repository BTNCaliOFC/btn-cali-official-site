import { Star, Trophy, GiftIcon, Users, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DreamKeepers = () => {
  return (
    <section id="dreamkeepers" className="py-20 bg-gradient-to-b from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600 dark:text-pink-400">DreamKeepers Hub</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Join our exclusive community platform where fans unite to support BTN Cali through fun 
            challenges, rewards, and special experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 dark:bg-pink-900 p-3 rounded-full mr-4">
                <Trophy className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold">Complete Challenges</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Participate in voting drives, social media campaigns, and fun fan activities to earn points and climb the leaderboard.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <BadgeCheck className="w-5 h-5 text-green-500 mr-2" />
                <span>Daily social media engagement tasks</span>
              </li>
              <li className="flex items-center">
                <BadgeCheck className="w-5 h-5 text-green-500 mr-2" />
                <span>Official voting campaigns</span>
              </li>
              <li className="flex items-center">
                <BadgeCheck className="w-5 h-5 text-green-500 mr-2" />
                <span>Creative fan challenges</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                <GiftIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold">Earn Rewards</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Unlock exclusive benefits and rewards as you support Cali and engage with our community.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Exclusive digital content</span>
              </li>
              <li className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Special recognition opportunities</span>
              </li>
              <li className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Chances to win merchandise and more</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200 dark:bg-pink-800 rounded-full -mr-20 -mt-20 opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold">Connect With The Fam</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-8">
              Join a passionate community of BTN Cali supporters who share your enthusiasm. 
              Together, we're not just fans – we're family. Meet like-minded people, 
              coordinate support efforts, and create lasting memories.
            </p>
            <div className="text-center">
              <Button 
                size="lg" 
                variant="default"
                className="bg-pink-600 hover:bg-pink-700 rounded-full px-8 font-bold"
                onClick={() => window.open("https://dreamkeepers.btncaliofficial.com/", "_blank")}
              >
                Join The Fam
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 italic">
            Become a DreamKeeper today and be part of something special!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DreamKeepers; 