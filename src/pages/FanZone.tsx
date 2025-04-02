
import { MainNavigation } from "@/components/MainNavigation";
import { Footer } from "@/components/Footer";

export default function FanZone() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavigation />
      
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Fan Zone</h1>
          <p className="text-muted-foreground">
            Coming soon! This page will feature fan forum, discussion board, fan creations gallery,
            interactive polls, quizzes, and more community content.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
