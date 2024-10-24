import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

function Header(){
    return ( 
    <header className="flex justify-between sticky items-center w-full p-2 bg-transparent hello" >
        <h1 className=" text-2xl font-bold font-ARIAL text-white">PORTFOLIO</h1>
    <nav>
    <Sheet>
  <SheetTrigger className=" md:hidden "> <Menu className=" text-white" />
  </SheetTrigger>
  <SheetContent>
      <SheetTitle className="text-center gap-y-4">Menu</SheetTitle>
      <ul className="text-center p-2">
            <li className="p-2 rounded-md mb-1 bg-white hover:bg-slate-200"> <Link href="#hero">
            Home
            </Link>
            </li>
            <li className="p-2 rounded-md mb-1 bg-white hover:bg-slate-200" > 
                <Link href ="#about">About</Link></li>
                <li className="p-2 rounded-md mb-1 bg-white hover:bg-slate-200" >
                <Link href="#skill" >Skills</Link>
                </li>
            <li className="p-2 rounded-md mb-1 bg-white hover:bg-slate-200" >
                <Link href="#services" >Services</Link>
                </li>
                
        </ul>
  </SheetContent>
</Sheet>
        
        <ul className="hidden md:flex gap-2">
            <li className="px-2 py-1.5 text-BLACK bg-white rounded-md text-1xl p-2 hover:bg-slate-200 "> <Link href="#hero">
            Home
            </Link>
            </li>
            <li className="px-2 py-1.5 text-BLACK bg-white rounded-md text-1xl hover:bg-slate-200"> 
                <Link href ="#about">About</Link></li>
                <li className="px-2 py-1.5 text-BLACK bg-white rounded-md text-1xl p-2 hover:bg-slate-200 ">
                <Link href="#skill">Skills</Link>
                </li>
            <li className="px-2 py-1.5 text-BLACK bg-white rounded-md text-1xl p-2 hover:bg-slate-200 ">
                <Link href="#service">Services</Link>
                </li>
               
        </ul>

    </nav>
    </header>
    )
}
export default Header