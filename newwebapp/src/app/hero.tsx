"use client";
import { Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
function Hero(){
    return (
      <div className="flex justify-between items-center p-2 ">
        <h1 className="text-1xl font-semibold font-mono md:text-3xl text-slate-400 ">HI THERE,
          <br />
          ITS ME SUFYAN MUGHAL
          <br />
          <TypeAnimation className='text-orange-500'
      sequence={[
        'IAM A NEXTJS WEBDEVELOPER ',
        1500,
        'IAM A WORDPRESS/SHOPIFY WEBDEVELOPER  ',
        1500,
        'IAM A DIGITALMARKETER',
        1500,
        '',
        1500
      ]}
      wrapper="span"
      speed={60}
      style={{ fontSize: '3', display: 'inline-block' }}
      repeat={Infinity}
    />
    <br />
    <ul className='flex gap-x-8'>
      <li>
        <Link href="https://www.instagram.com/m_sufyan_87/" target='/blank'>
        <Instagram />
        </Link>
      </li>
      <li>
        <Link href ="https://www.linkedin.com/in/sufyan-mughal-674632299/" target='/blank'><Linkedin /></Link>
      </li>
      <li>
        <Link href ="mskhalid703@gamil.com" target='/blank'><Mail /></Link>
      </li>
    </ul>
    </h1>
          <div className="bg-slate-300 rounded-full">
          <img className="w-64 md:w-96" src="./n-removebg-preview.png" alt="" />
          </div>
      </div>
    )
}
export default Hero