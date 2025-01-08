"use client"
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useClerk, useAuth } from "@clerk/nextjs";

export default function App(){
  const {isSignedIn} = useAuth();
  const {signOut, openSignIn} = useClerk();
  return(
    <div className="flex">
      <Navbar />
      {isSignedIn ? <Button onClick={()=>signOut({redirectUrl: '/'})} className="absolute top-[8%] right-[19%]">SignOut</Button>: <Button onClick={()=>openSignIn()} className="absolute top-[8%] right-[19%]">Signin</Button>}
    </div>
  )
}