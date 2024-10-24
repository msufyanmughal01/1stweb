"use client";
import { ArrowBigDownDash, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
function Hero(){
    return (
      <section className='h-screen mt-10 hello' id='hero'>
        <div className=" md:hidden ">
        <h1 className="text-3xl font-semibold font-mono md:text-3xl text-white ">HI THERE,
          <br />
          <br />
          ITS ME SUFYAN MUGHAL
          <br />
          <TypeAnimation className='text-orange-500'
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
    />
    <p>CONTACT ON THE LINK GIVEN BELOW <ArrowBigDownDash /></p>

    <ul className='flex gap-x-8 mt-3'>
      <li>
        <Link href="https://www.instagram.com/m_sufyan_87/" target='/blank'>
        <Instagram className='hover:text-pink-500' />
        </Link>
      </li>
      <li>
        <Link href ="https://www.linkedin.com/in/sufyan-mughal-674632299/" target='/blank'><Linkedin className='hover:text-blue-500' /></Link>
      </li>
      <li>
        <Link href = "mailto:mskhalid703@gmail.com" target='/blank'><Mail className='hover:text-red-500'/></Link>
      </li>
    </ul>
    </h1>
    <div>
          <br />
        </div>
    <div className='flex justify-center'>
        <Image className=" rounded-b-full" src="/capoo.png" width = {500} height ={300}alt=""/> 
        </div>
    </div>


      <div className="hidden md:flex justify-between items-center p-2 ">
        <h1 className="text-1xl font-semibold font-mono md:text-3xl text-white ">HI THERE,
          <br />
          ITS ME SUFYAN MUGHAL
          <br />
          <TypeAnimation className='text-orange-500'
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
    />
    <p>CONTACT ON THE LINK GIVEN BELOW <ArrowBigDownDash /></p>

    <ul className='flex gap-x-8 mt-3'>
      <li>
        <Link href="https://www.instagram.com/m_sufyan_87/" target='/blank'>
        <Instagram size={40} className='hover:text-pink-500' />
        </Link>
      </li>
      <li>
        <Link href ="https://www.linkedin.com/in/sufyan-mughal-674632299/" target='/blank'><Linkedin size={40} className='hover:text-blue-500' /></Link>
      </li>
      <li>
        <Link href = "mailto:mskhalid703@gmail.com" target='/blank'><Mail size={40} className='hover:text-red-500'/></Link>
      </li>
    </ul>
    </h1>
          <div className="rounded-full">
            <Image className='rounded-full' src='/capoo.png' width={400} height={150} alt=''/>
          </div>
      </div>
      </section>
    )
}
export default Hero