
import { Heart, Calendar, Users, MessageCircle, Video } from 'lucide-react';

const Features = () => {
  const featureItems = [
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      title: "Support Cali",
      description: "Learn how to effectively support Cali through voting and social media engagement."
    },
    {
      icon: <Calendar className="w-12 h-12 text-indigo-500" />,
      title: "Stay Updated",
      description: "Get the latest updates on episodes, events, and Cali's journey on the show."
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Join Community",
      description: "Connect with other fans who share your passion for supporting Cali."
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-orange-500" />,
      title: "Fan Discussions",
      description: "Participate in discussions, share theories, and celebrate milestones together."
    },
    {
      icon: <Video className="w-12 h-12 text-btn" />,
      title: "Exclusive Content",
      description: "Access fan edits, highlights, and special content featuring Cali."
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Join Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featureItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center card-hover"
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Vote and Be Part of Cali's Journey</h3>
          <iframe 
            className="w-full max-w-3xl h-64 md:h-96 mx-auto rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/DuLQHNkIe8U" 
            title="Cali Highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Features;
