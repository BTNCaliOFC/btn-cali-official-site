
import { MainNavigation } from "@/components/MainNavigation";
import { Footer } from "@/components/Footer";

export default function Social() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavigation />
      
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Social Media Hub</h1>
          <p className="text-muted-foreground">
            Coming soon! This page will showcase live feeds from Cali's social media accounts,
            fan spotlight content, and social media challenges.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
