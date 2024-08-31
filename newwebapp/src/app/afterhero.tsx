"use client";
import { TypeAnimation } from "react-type-animation";

export default function Afterhero(){
    return (
        <section id="about">
             <div className="flex h-96 w-full mt-20">
                <div className="bg-white">
                    <img src="wordpress_logo" alt="" />
                </div>
                <div className="items-start ">
                <h1 className=" text-3xl text-slate-400 font-semibold font-mono">ABOUT <span className="text-orange-500">ME </span>
                <br />
                MY NAME IS SUFYAN MUGHAL 
                <br />
                <TypeAnimation className='text-orange-500 text-base'
      sequence={[
        'IAM A FRONTEND DEVELOPER ',
        1500,
        'IAM A WORDPRESS/SHOPIFY WEBDEVELOPER  ',
        1500,
        'IAM A DIGITALMARKETER',
        1500,
      ]}
      wrapper="span"
      speed={60}
      style={{ fontSize: '3', display: 'inline-block' }}
      repeat={Infinity}
    /> </h1>
                <p className="text-slate-400">
                    AND IAM BASED IN KARACHI PAKISTAN IAM PASSINATE ABOUT TO CREATE A GOOD LOOKING AND RESPONSIVE WEBAPPS 
                    GET FREE CONSULTANSY NOW!
                </p>
                </div>
             </div>
             </section>
    )
}