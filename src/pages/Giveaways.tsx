
import { Gift, Bell, Trophy, Ticket } from 'lucide-react';

const Giveaways = () => {
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Giveaways & Fan Rewards</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Participate in our exclusive giveaways and earn fan rewards for supporting Cali!
        </p>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <div className="w-20 h-20 bg-btn/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-10 h-10 text-btn" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-center">Current Giveaways</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <Trophy className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Signed Photocard Giveaway</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Three lucky fans will win exclusive signed photocards from Cali!
                </p>
                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="text-gray-500 dark:text-gray-400">Ends in: 3 days</span>
                  <span className="text-gray-500 dark:text-gray-400">1,258 entries</span>
                </div>
                <button className="w-full bg-btn hover:bg-btn-hover text-white py-2 rounded-lg font-medium">
                  Enter Giveaway
                </button>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Ticket className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Fan Meeting Raffle</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Win a chance to join an exclusive online fan meeting with Cali!
                </p>
                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="text-gray-500 dark:text-gray-400">Ends in: 7 days</span>
                  <span className="text-gray-500 dark:text-gray-400">3,472 entries</span>
                </div>
                <button className="w-full bg-btn hover:bg-btn-hover text-white py-2 rounded-lg font-medium">
                  Enter Raffle
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Fan Rewards Program</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Earn points by supporting Cali and redeem them for exclusive rewards!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Digital Rewards</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Exclusive wallpapers, digital photo sets, and more.
                </p>
                <div className="text-sm text-btn font-medium">100-500 points</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Physical Items</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Postcards, stickers, and limited edition fan items.
                </p>
                <div className="text-sm text-btn font-medium">500-2000 points</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Premium Experiences</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Virtual meet & greets, personalized video messages.
                </p>
                <div className="text-sm text-btn font-medium">3000+ points</div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-8">
              <h3 className="font-medium mb-4">How to Earn Points</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-btn"></div>
                  <span>Vote for Cali daily during voting periods (10 points per vote)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-btn"></div>
                  <span>Share official content on your social media (5 points per share)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-btn"></div>
                  <span>Create and submit fan content (20-100 points based on engagement)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-btn"></div>
                  <span>Participate in community events and discussions (3-15 points)</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="flex mb-6">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-btn dark:bg-gray-900"
                />
                <button className="bg-btn hover:bg-btn-hover text-white px-6 py-3 rounded-r-lg flex items-center gap-2 font-medium">
                  <Bell className="w-5 h-5" />
                  Get Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giveaways;
