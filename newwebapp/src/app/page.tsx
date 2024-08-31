import { Button } from "@/components/ui/button";
import { MessageCircle, Sheet } from "lucide-react";
import Hero from "./hero";
import Afterhero from "./afterhero";
import Service from "./service";
export default function Home() {
  return (
  <div className="h-full w-full" >
    <div className="h-full">
      <Hero/>
    </div>
    <div>
      <Afterhero/>
    </div>
    <Service/>
    </div>



  )
}
