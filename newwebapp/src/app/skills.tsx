 import Image from "next/image"
 export default function Skill (){
    return (
        <section className="h-max w-full hello ">
            <div>
                <h1 className="text-center text-3xl font-mono font-semibold text-white">SKILLS </h1>
            </div>
            <div>
                <br />
            </div>
            <div className="flex justify-center">
                <Image src="/skillss.png" width={1000} height={800} alt=""/>
            </div>
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            {/*  */}
        </section>
    )
 }