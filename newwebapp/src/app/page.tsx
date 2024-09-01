import { Button } from "@/components/ui/button";
import { MessageCircle, Sheet } from "lucide-react";
import Hero from "./hero";
import Afterhero from "./afterhero";
import Service from "./service";
import Footer from "./footer";
export default function Home() {
  return (
  <body>
    <section id="hero"> <Hero/></section> 
    <section id="about"><Afterhero/></section>
    <section id="service"><Service/></section>
    <section><Footer/></section>
    </body>



  )
}
