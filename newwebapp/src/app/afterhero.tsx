"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
export default function Afterhero(){
    return (
        <section className="h-max md:h-screen w-full ">
          <div> 
            <br />
          </div>
            <div className="sm:grid-cols-1 md:hidden">
                <h1 className="text-justify-center text-3xl text-slate-400 text-center font-semibold font-mono">ABOUT <span className="text-orange-500">ME </span>
                <br />
                MY NAME IS SUFYAN MUGHAL 
                <br />
                <TypeAnimation className='text-orange-500 text-base'
      sequence={[
        'IAM A FRONTEND DEVELOPER ',
        1500,
        'IAM A WORDPRESS/SHOPIFY WEBDEVELOPER',
        1500,
        'IAM A DIGITALMARKETER',
        1500,
      ]}
      wrapper="span" 
      speed={60}
      style={{ fontSize: '3', display: 'inline-block' }}
      repeat={Infinity}
    /> </h1>
                <p className="text-slate-400 text-center max-w-96">
               {" Hi, I’m Sufyan Mughal—a web developer and digital marketer focused on creating exceptional online experiences. With skills in Next.js, WordPress, and Shopify, I build visually striking, functional websites. My digital marketing background enhances my development work, improving online visibility. I enjoy solving challenges and exploring new tech and marketing trends."}
                </p>
                <div className="flex justify-center"> <Image className=" rounded-3xl mb-40 md:hidden" src="/cap.jpeg" width = {380} height ={150}alt=""/> </div>
                <div>
                </div>
                </div>
            {/* md k bad */}
            <div>
              <br />
            </div>
             <div className="hidden md:flex items-center">
                <div className="ml-2 w-full ">
                <Image className="rounded-r-full" src="/cap.jpeg" width={400} height={150} alt={""}/>
                </div>
                <div className="justify-end h-96 w-full mt-20">
                <h1 className="text-justify-center text-3xl text-slate-400 text-center font-semibold font-mono">ABOUT <span className="text-orange-500">ME </span>
                <br />
                MY NAME IS SUFYAN MUGHAL 
                <br />
                <TypeAnimation className='text-orange-500 text-base'
      sequence={[
        'IAM A FRONTEND DEVELOPER ',
        1500,
        'IAM A WORDPRESS/SHOPIFY WEBDEVELOPER',
        1500,
        'IAM A DIGITALMARKETER',
        1500,
      ]}
      wrapper="span"
      speed={60}
      style={{ fontSize: '3', display: 'inline-block' }}
      repeat={Infinity}
    /> </h1>
                <p className=" text-slate-400 text-center max-w-2xl ">
{"Hi, I’m Sufyan Mughal—a passionate web developer and digital marketer dedicated to crafting exceptional online experiences. With expertise in Next.js, WordPress, and Shopify, I design and develop websites that are not only visually striking but also highly functional and user-friendly. My background in digital marketing complements my development skills, allowing me to create comprehensive strategies that enhance online visibility and engagement. I thrive on turning complex challenges into seamless solutions and am always excited to tackle new projects that push the boundaries of innovation. When I'm not coding or strategizing, you’ll find me exploring the latest trends in technology and marketing, constantly seeking new ways to stay ahead in this ever-evolving field."}
                </p>
                </div>
                </div>
             </section>
    )
}