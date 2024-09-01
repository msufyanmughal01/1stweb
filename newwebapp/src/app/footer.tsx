import { Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer(){
    return (
        <section className="h-40  w-full mt-10 items-center">
            <h1 className="text-center font-semibold font-mono text-4xl text-slate-400 ">GET IN TOUCH
                <br />
            Contact Information
            </h1>
            <ul className="flex justify-center mt-5 gap-5">
                <li>
                    <Link href="https://www.instagram.com/m_sufyan_87/" target='/blank'>
                    <Instagram className='text-slate-400 hover:text-pink-500' /></Link>
                </li>
                <li>
                    <Link href ="https://www.linkedin.com/in/sufyan-mughal-674632299/" target='/blank'><Linkedin className='text-slate-400 hover:text-blue-500' /></Link>
                    
                </li>
                <li>
                    <Link href = "mailto:mskhalid703@gmail.com" target='/blank'><Mail className='text-slate-400 hover:text-red-500'/></Link>
                </li>
            </ul>
        
        
        
        
        
        </section>
        

            
        
    )
}