import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/navigation";
import { MusicToggle } from "@/components/music-toggle";
import Landing from "@/pages/invitation";
import Home from "@/pages/home";
import EventDetails from "@/pages/event-details";
import Countdown from "@/pages/countdown";
import RSVP from "@/pages/rsvp";
import LoveStory from "@/pages/love-story";
import Gallery from "@/pages/gallery";
import GiftRegistry from "@/pages/gift-registry";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Redirect to="/invitation" />} />
      <Route path="/invitation" component={Landing} />
      <Route path="/home">
        <Navigation />
        <MusicToggle />
        <Home />
      </Route>
      <Route path="/details">
        <Navigation />
        <MusicToggle />
        <EventDetails />
      </Route>
      <Route path="/countdown">
        <Navigation />
        <MusicToggle />
        <Countdown />
      </Route>
      <Route path="/rsvp">
        <Navigation />
        <MusicToggle />
        <RSVP />
      </Route>
      <Route path="/story">
        <Navigation />
        <MusicToggle />
        <LoveStory />
      </Route>
      <Route path="/gallery">
        <Navigation />
        <MusicToggle />
        <Gallery />
      </Route>
      <Route path="/registry">
        <Navigation />
        <MusicToggle />
        <GiftRegistry />
      </Route>
      <Route path="/contact">
        <Navigation />
        <MusicToggle />
        <Contact />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
