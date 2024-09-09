import Hero from "./hero";
import Afterhero from "./afterhero";
import Footer from "./footer";
import Service from "./service";
import Skill from "./skills";
export default function Home() {
  return (
  <body>
    <section id="hero"> <Hero/></section> 
    <section id="about"><Afterhero/></section>
    <section id="skill"><Skill/></section>
    <section id="service"><Service/></section>
    <section><Footer/></section>
    </body>



  )
}
