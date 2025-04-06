
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui 2/card";
import { HeartHandshake, Trophy, Users, Video, Calendar, Star } from "lucide-react";

const features = [
  {
    icon: <Trophy className="h-12 w-12 text-orange-500" />,
    title: "Voting Information",
    description: "Get all the details on how to vote for Cali in the competition, along with important voting periods and strategies."
  },
  {
    icon: <Users className="h-12 w-12 text-blue-500" />,
    title: "Active Community",
    description: "Connect with fellow fans who are supporting Cali on his journey to become part of the final group."
  },
  {
    icon: <Video className="h-12 w-12 text-red-500" />,
    title: "Performance Updates",
    description: "Watch Cali's latest performances and stay updated on his progress in the competition."
  },
  {
    icon: <HeartHandshake className="h-12 w-12 text-pink-500" />,
    title: "Fan Activities",
    description: "Participate in fan projects, events, and collaborations to show your support for Cali."
  },
  {
    icon: <Calendar className="h-12 w-12 text-green-500" />,
    title: "Event Schedule",
    description: "Keep track of important dates, including show episodes, fan meetings, and special events."
  },
  {
    icon: <Star className="h-12 w-12 text-purple-500" />,
    title: "Exclusive Content",
    description: "Get access to exclusive updates, behind-the-scenes content, and special messages for fans."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Support Cali's Journey</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
