
import { MainNavigation } from "@/components/MainNavigation";
import { Footer } from "@/components/Footer";

export default function Voting() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavigation />
      
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Voting Team</h1>
          <p className="text-muted-foreground">
            Coming soon! This page will contain information about how to vote for Cali,
            voting team sign-up, and real-time voting updates.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
