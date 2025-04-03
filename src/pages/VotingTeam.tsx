
import { useState } from 'react';
import { CheckCircle, Info, Phone, Award, FileText, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VotingTeam = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { label: 'How to Vote', icon: <FileText className="w-5 h-5" /> },
    { label: 'Voting Schedule', icon: <Phone className="w-5 h-5" /> },
    { label: 'Join Team', icon: <Award className="w-5 h-5" /> }
  ];
  
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Voting Team</h1>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <div className="flex flex-col sm:flex-row items-center mb-8 gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <Info className="text-btn w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Why Your Vote Matters</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  In Be The NEXT: 9 Dreamers, fan votes directly impact which contestants advance to the next round and 
                  ultimately debut as part of 9 Dreamers. Your vote for Cali is crucial to his success in the competition!
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-lg font-semibold mb-4">Live Voting Updates</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <p className="text-center text-gray-700 dark:text-gray-300">
                  The first voting period has officially ended! Stay tuned for the next round coming soon! 🎉
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-6 flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex items-center px-5 py-3 text-sm font-medium ${
                  activeTab === index 
                    ? 'text-btn border-b-2 border-btn' 
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            {activeTab === 0 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-btn">How to Vote for Cali</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="text-green-600 dark:text-green-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Download the Official App</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Download the B.Stage official app from the App Store or Google Play Store.
                      </p>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <a 
                          href="https://apps.apple.com/ph/app/b-stage/id1643063288" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M17.5,7.71a3.31,3.31,0,0,0-1,.16A4.62,4.62,0,0,0,8.5,8L9.92,3.76A.75.75,0,0,0,9.22,2.8H6a.75.75,0,0,0-.7.48L2.38,13A.75.75,0,0,0,3.08,14H6.3a.75.75,0,0,0,.7-.48L8.25,9.9a3.1,3.1,0,0,1,5.9.6.8.8,0,0,0,.78.5h2.9a.7.7,0,0,0,.72-.87A4.62,4.62,0,0,0,17.5,7.71Z"/>
                            <path d="M21.9,14.29a4.62,4.62,0,0,0-8-1.59l1.42-4.24a.75.75,0,0,0-.7-1H11.4a.75.75,0,0,0-.7.48L7.78,17.72a.75.75,0,0,0,.7,1h3.22a.75.75,0,0,0,.7-.48l1.25-3.62a3.1,3.1,0,0,1,5.9.6.8.8,0,0,0,.78.5h2.9a.7.7,0,0,0,.72-.87A4.62,4.62,0,0,0,21.9,14.29Z"/>
                          </svg>
                          App Store
                        </a>
                        <a 
                          href="https://play.google.com/store/apps/details?id=com.bmf.bstage.browser&pcampaignid=web_share" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M3.18,20.83A2,2,0,0,1,3,20V4A2,2,0,0,1,3.18,3.17L13,12ZM5,17.17,10.88,12,5,6.83ZM12,14.29l8.89,5a2,2,0,0,0,.11-.24V5a2,2,0,0,0-.11-.25Z"/>
                          </svg>
                          Google Play
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="text-green-600 dark:text-green-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Create an Account</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Sign up for an account using your email address. Verify your account through the verification code sent to you.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="text-green-600 dark:text-green-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Navigate to Voting Section</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Open the app and go to the voting page or section. This is usually 
                        prominently displayed during active voting periods.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="text-green-600 dark:text-green-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Find and Vote for Cali</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Locate Cali among the trainees and tap on his profile. You can vote for Cali 10x per day, per email account.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="text-green-600 dark:text-green-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Daily Voting</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Remember to vote every day during the voting period to maximize Cali's chances. 
                        Set reminders so you don't miss a day!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Video Tutorial</h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      className="w-full h-64 rounded-lg"
                      src="https://youtu.be/EIl1HvAkO3I" 
                      title="How to Vote for Cali"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-btn">Voting Schedule</h3>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4">
                      <h4 className="font-semibold">Upcoming Voting Periods</h4>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">First Vote</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">First Elimination Round</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-btn">March 1- March 10, 2025</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">(finished)</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Second Vote</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Second Elimination Round</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-btn">TBA</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Stay tuned</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Info className="text-yellow-600 dark:text-yellow-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800 dark:text-yellow-300">Important Voting Rules</h4>
                        <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-yellow-700 dark:text-yellow-200">
                          <li>Votes reset at midnight KST or 11PM Philippine Standard Time every day during voting periods</li>
                          <li>Each account can cast up to 10 votes per day</li>
                          <li>Final round voting may have different rules - stay tuned for updates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-btn">Join Our Voting Team</h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Be part of our dedicated voting team to help coordinate mass voting efforts, remind each other 
                  about voting periods, and maximize Cali's chances of success. Join our communities on:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <a 
                    href="https://rebrand.ly/BTNCaliDreamKeepers" 
                    className="flex items-center gap-4 p-4 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-[#5865F2] text-white p-3 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5,7.71a3.31,3.31,0,0,0-1,.16A4.62,4.62,0,0,0,8.5,8L9.92,3.76A.75.75,0,0,0,9.22,2.8H6a.75.75,0,0,0-.7.48L2.38,13A.75.75,0,0,0,3.08,14H6.3a.75.75,0,0,0,.7-.48L8.25,9.9a3.1,3.1,0,0,1,5.9.6.8.8,0,0,0,.78.5h2.9a.7.7,0,0,0,.72-.87A4.62,4.62,0,0,0,17.5,7.71Z" fill="currentColor"/>
                        <path d="M21.9,14.29a4.62,4.62,0,0,0-8-1.59l1.42-4.24a.75.75,0,0,0-.7-1H11.4a.75.75,0,0,0-.7.48L7.78,17.72a.75.75,0,0,0,.7,1h3.22a.75.75,0,0,0,.7-.48l1.25-3.62a3.1,3.1,0,0,1,5.9.6.8.8,0,0,0,.78.5h2.9a.7.7,0,0,0,.72-.87A4.62,4.62,0,0,0,21.9,14.29Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Fill up the Form</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Join our active community</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.facebook.com/share/g/14pqQ31ae5/" 
                    className="flex items-center gap-4 p-4 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-[#1877F2] text-white p-3 rounded-full">
                      <Facebook className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Facebook Group</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Join our private community</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://m.me/j/AbbitPRpKin8el5h/" 
                    className="flex items-center gap-4 p-4 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-[#1877F2] text-white p-3 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.36 2 2 6.13 2 11.7C2 14.61 3.33 17.13 5.47 18.73C5.65 18.88 5.75 19.11 5.73 19.35L5.58 21.14C5.53 21.7 6.09 22.15 6.64 21.97L8.57 21.23C8.76 21.16 8.96 21.16 9.15 21.22C10.07 21.55 11.04 21.73 12.04 21.73C17.68 21.73 22.04 17.6 22.04 12.03C22.04 6.43 17.67 2 12 2ZM17.63 9.4L14.8 13.93C14.59 14.27 14.16 14.4 13.79 14.25L11.74 13.46C11.57 13.39 11.37 13.39 11.2 13.45L8.23 14.94C7.85 15.13 7.45 14.73 7.63 14.35L10.45 9.82C10.67 9.48 11.09 9.35 11.46 9.5L13.52 10.29C13.69 10.36 13.88 10.35 14.05 10.29L17.03 8.8C17.41 8.62 17.81 9.02 17.63 9.4Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Facebook Messenger</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">For real-time coordination</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:votingteam@btncaliofficial.com" 
                    className="flex items-center gap-4 p-4 bg-[#EA4335]/10 hover:bg-[#EA4335]/20 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-[#EA4335] text-white p-3 rounded-full">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">votingteam@btncaliofficial.com</p>
                    </div>
                  </a>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Send us a direct message</h4>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-btn dark:bg-gray-800"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-btn dark:bg-gray-800"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-btn dark:bg-gray-800"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingTeam;
