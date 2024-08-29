import Image from "next/image"
function Hero(){
    return (
      <div className="flex justify-between items-center p-2 ">
        <h1 className="text-white text-3xl text-wrap  md:text-3xl font-bold font-sans  ">HI THERE,
          <br />
          MY SELF : SUFYAN MUGHAL
          <br />
          IAM WEB DEVELOPER  </h1>
          <div className="bg-slate-300 rounded-3xl">
          <img className="w-96 " src="./n-removebg-preview.png" alt="" />
          </div>
      </div>
    )
}
export default Hero