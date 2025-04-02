
import { Link } from "react-router-dom";
import { MainNavigation } from "@/components/MainNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavigation />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container max-w-md mx-auto px-4 text-center">
          <h1 className="text-9xl font-bold text-cali-blue">404</h1>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Button asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Homepage
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
