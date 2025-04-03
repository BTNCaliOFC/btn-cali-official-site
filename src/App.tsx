
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import VotingTeam from "./pages/VotingTeam";
import SocialHub from "./pages/SocialHub";
import FanZone from "./pages/FanZone";
import Contact from "./pages/Contact";
import Giveaways from "./pages/Giveaways";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

// Set this to false to enable the coming soon page, true to show the full site
const SITE_LIVE = true;

// Set this to true when ready to make the Giveaways page live
const GIVEAWAYS_LIVE = false;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {SITE_LIVE ? (
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/voting-team" element={<VotingTeam />} />
                <Route path="/social-hub" element={<SocialHub />} />
                <Route path="/fan-zone" element={<FanZone />} />
                <Route path="/contact" element={<Contact />} />
                {GIVEAWAYS_LIVE ? (
                  <Route path="/giveaways" element={<Giveaways />} />
                ) : (
                  <Route path="/giveaways" element={<Navigate to="/" replace />} />
                )}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<ComingSoon />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
