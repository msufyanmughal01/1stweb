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
    <header className="flex justify-between items-center p-2 bg-transparent" >
        <h1 className=" text-1xl font-bold font-ARIAL text-slate-400">PORTFOLIO</h1>
    <nav>
    <Sheet>
  <SheetTrigger className="md:hidden"> <Menu className="text-slate-400" />
  </SheetTrigger>
  <SheetContent>
      <SheetTitle className="text-center gap-y-4">Menu</SheetTitle>
      <ul className="text-center p-2">
            <li className="p-2 rounded-md mb-1 bg-slate-400 hover:bg-slate-300"> <Link href="/">
            Home
            </Link>
            </li>
            <li className="p-2 rounded-md mb-1 bg-slate-400 hover:bg-slate-300" > 
                <Link href ="/about">About</Link></li>
            <li className="p-2 rounded-md mb-1 bg-slate-400 hover:bg-slate-300" >
                Contact 
                </li>
        </ul>
  </SheetContent>
</Sheet>
        
        <ul className="hidden md:flex gap-2">
            <li className="px-2 py-1.5 text-BLACK bg-slate-400 rounded-md text-1xl p-2 hover:bg-slate-300 "> <Link href="/">
            Home
            </Link>
            </li>
            <li className="px-2 py-1.5 text-BLACK bg-slate-400 rounded-md text-1xl hover:bg-slate-300"> 
                <Link href ="#about">About</Link></li>
            <li className="px-2 py-1.5 text-BLACK bg-slate-400 rounded-md text-1xl p-2 hover:bg-slate-300 ">
                Contact 
                </li>
        </ul>

    </nav>
    </header>
    )
}
export default Header