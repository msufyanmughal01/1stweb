import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
export default function Service(){
    return (
        <section className="h-screen w-full" id="services">
            <div> 
                <br />
            </div>
            <div >
                <h1 className="text-center text-2xl font-semibold text-slate-400 mt-11 mb-28"> SERVICES </h1>
            </div>
            <Carousel className="ml-16  w-60 md:hidden">
  <CarouselContent>
    <CarouselItem><div className=" hover:animate-pulse animate-once h-80 w-60 bg-slate-400 rounded-md">
                    <h1 className="text-orange-500 text-2xl font-semibold font-mono text-center">FRONTEND DEVELOPMENT</h1> 
                    <br />
                    <p className="text-sm text-center">Welcome to the world Frontend Development where creativity meets technology to craft stunning&#44; and responsive user experiences&#46; As a frontend developer&#44; Iam in transforming design concepts into functional&#44; visually captivating websites and applications that engage and delight users&#46;</p> 
                </div></CarouselItem>
    <CarouselItem><div className="hover:animate-pulse animate-once h-80 w-60 bg-slate-400 rounded-md">
                    <h1 className="text-orange-500 text-2xl text-center font-mono font-semibold ">DIGITAL <br /> MARKETING</h1>
                    <br />
                    <p className="text-sm text-center">In today&#39;s digital landscape&#44; effective marketing is crucial for standing out&#46; As a digital marketing professional&#44; I leverage online platforms to boost brand awareness&#44; engage audiences&#44; and deliver measurable results through strategic and data driven campaigns&#46;</p>
                </div></CarouselItem>
    <CarouselItem><div className="hover:animate-pulse animate-once h-80 w-60 bg-slate-400 rounded-md md:mr-7">
                <h1 className="text-orange-500 text-2xl text-center font-mono font-semibold md:mr-3">WORDPRESS/SHOPIFY DEVELOPMENT </h1>
                <br />
                <p className="text-sm text-center">For a dynamic online presence&#44; WordPress and Shopify are top choices&#46;
                    <br /> WordPress excels in versatility and customization&#44; ideal for diverse websites&#44; while Shopify specializes in streamlined ecommerce solutions&#44; perfect for managing online stores efficiently&#46;</p>
                </div></CarouselItem>

  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
            <div className="hidden md:flex justify-between items-center mt-28 h-96 w-full ">
                <div className="hover:animate-pulse animate-once h-70 w-60 bg-slate-400 rounded-md md:ml-3">
                    <h1 className="text-orange-500 text-2xl font-semibold font-mono text-center">FRONTEND DEVELOPMENT</h1> 
                    <br />
                    <p className="text-sm text-center">Welcome to the world Frontend Development where creativity meets technology to craft stunning&#44; and responsive user experiences&#46; As a frontend developer&#44; Iam in transforming design concepts into functional&#44; visually captivating websites and applications that engage and delight users&#46;</p> 
                </div>
                <div className="hover:animate-pulse animate-once h-76 w-60 bg-slate-400 rounded-md">
                    <h1 className="text-orange-500 text-2xl text-center font-mono font-semibold ">DIGITAL <br /> MARKETING</h1>
                    <br />
                    <p className="text-sm text-center">In today&#39;s digital landscape&#44; effective marketing is crucial for standing out&#46; As a digital marketing professional&#44; I leverage online platforms to boost brand awareness&#44; engage audiences&#44; and deliver measurable results through strategic and data driven campaigns&#46;</p>
                </div>
                <div className="hover:animate-pulse animate-once h-76 w-60 bg-slate-400 rounded-md md:mr-7">
                <h1 className="text-orange-500 text-2xl text-center font-mono font-semibold md:mr-3">WORDPRESS/SHOPIFY DEVELOPMENT </h1>
                <br />
                <p className="text-sm text-center">For a dynamic online presence&#44; WordPress and Shopify are top choices&#46;
                    <br /> WordPress excels in versatility and customization&#44; ideal for diverse websites&#44; while Shopify specializes in streamlined ecommerce solutions&#44; perfect for managing online stores efficiently&#46;</p>
                </div>

            </div>
            </section>
    )
}