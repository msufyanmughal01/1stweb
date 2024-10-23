import { Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer(){
    return (
        <section className="h-40  w-full mt-10 items-center mb-10 hello">
            <h1 className="text-center font-semibold font-mono text-4xl text-orange-500 ">GET IN TOUCH
                <br />
            Contact Information
            </h1>
            <ul className="flex justify-center mt-5 gap-10">
                <li>
                    <Link href="https://www.instagram.com/m_sufyan_87/" target='/blank'>
                    <Instagram size={40} className='text-white hover:text-pink-500' /></Link>
                </li>
                <li>
                    <Link href ="https://www.linkedin.com/in/sufyan-mughal-674632299/" target='/blank'><Linkedin size={40} className='text-white hover:text-blue-500' /></Link>
                    
                </li>
                <li>
                    <Link href = "mailto:mskhalid703@gmail.com" target='/blank'><Mail size={40} className='text-white hover:text-red-500'/></Link>
                </li>
            </ul>
        
        
        
        
        
        </section>
        

            
        
    )
}