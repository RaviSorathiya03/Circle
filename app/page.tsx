"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { HeroParallax } from "@/components/ui/hero-parallax";
import LampDemo from "@/components/ui/lamp";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WorldMap } from "@/components/ui/World-map";
import { products } from "@/lib/data";
import { useClerk, useAuth } from "@clerk/nextjs";

export default function App() {
  const { isSignedIn } = useAuth();
  const { signOut, openSignIn } = useClerk();

  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Navbar */}
        <Navbar />

        {/* Sign In / Sign Out Buttons */}
        <div className="fixed top-8 right-16 flex items-center space-x-4">
          {isSignedIn ? (
            <Button
              onClick={() => signOut({ redirectUrl: "/" })}
              className="bg-red-500 hover:bg-red-600"
            >
              Sign Out
            </Button>
          ) : (
            <Button
              onClick={() => openSignIn()}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Sign In
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>

      {/* World Map */}
      <div className="absolute top-[20%] left-[30%]">
        <TypewriterEffectSmooth words={[{text: "Welcome"}, {text: "to"}, {text: "the"}, {text: "Circle"}]}/>
      </div>
      <div className="mt-[16%] w-[100%] flex justify-center rounded-lg">
        <div className="w-[100%] max-w-5xl h-[50vh]">
          <WorldMap
            dots={[
              {
                start: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
                end: { lat: 40.7128, lng: -74.006, label: "New York" },
              },
              {
                start: { lat: 51.5074, lng: -0.1278, label: "London" },
                end: { lat: 48.8566, lng: 2.3522, label: "Paris" },
              },
            ]}
            lineColor="#0ea5e9"
          />
        </div>
      </div>
      <div>
        <LampDemo />
      </div>
      <div>
        <HeroParallax products={products}/>
      </div>
    </div>
  );
}
