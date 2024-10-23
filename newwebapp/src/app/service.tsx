import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
export default function Service(){
    return (
        <section className="h-screen w-full hello" id="services">
            <div> 
                <br />
            </div>
            <div >
                <h1 className="text-center text-2xl font-semibold text-white mt-11 mb-28"> SERVICES </h1>
            </div >
            <Carousel className="ml-16  w-60 md:hidden">
  <CarouselContent>
    <CarouselItem>
    <div className="hover:animate-pulse animate-once h-70 w-60 bg-white rounded-md ">
                    <h1 className="text-orange-500 text-2xl font-semibold font-mono text-center">FRONTEND DEVELOPMENT</h1> 
                    <br />
                    <p className="text-sm text-center">{"Welcome to the world Frontend Development where creativity meets technology to craft stunning, and responsive user experiences. As a frontend developer, Iam in transforming design concepts into functional, visually captivating websites and applications that engage and delight users."}</p> 
                </div>
    </CarouselItem>
    <CarouselItem>
    <div className="hover:animate-pulse animate-once h-76 w-60 bg-white rounded-md">
                    <h1 className="text-orange-500 text-2xl text-center font-mono font-semibold ">DIGITAL <br /> MARKETING</h1>
                    <br />
                    <p className="text-sm text-center">{"In todays digital landscape effective"}
                        <br />
                        {"marketing is crucial for standing out."}
                        <br />
                    {" As a digital marketing professional I leverage online platforms to boost brand awareness, engage audiences, and deliver measurable results through strategic and data-driven campaigns."}</p>
                </div>
    </CarouselItem>
    <CarouselItem><div className="hover:animate-pulse animate-once h-76 w-60 bg-white rounded-md ">
                <h1 className="text-orange-500 text-2xl text-center font-mono font-semibold md:mr-3">WORDPRESS/SHOPIFY DEVELOPMENT </h1>
                <br />
                <p className="text-sm text-center">{"For a dynamic online presence, WordPress and Shopify are top choices"}
                    <br /> 
                {"WordPress excels in versatility and customization, ideal for diverse websites, while Shopify specializes in streamlined ecommerce solutions, perfect for managing online stores efficiently."}</p>
                </div></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
            <div className="hidden md:flex justify-between items-center mt-28 h-96 w-full ">
                <div className="hover:animate-pulse animate-once h-70 w-60 bg-white rounded-md md:ml-3">
                    <h1 className="text-orange-500 text-2xl font-semibold font-mono text-center">FRONTEND DEVELOPMENT</h1> 
                    <br />
                    <p className="text-sm text-center">{"Welcome to the world Frontend Development where creativity meets technology to craft stunning, and responsive user experiences. As a frontend developer, Iam in transforming design concepts into functional, visually captivating websites and applications that engage and delight users."}</p> 
                </div>
                <div className="hover:animate-pulse animate-once h-76 w-60 bg-white rounded-md">
                    <h1 className="text-orange-500 text-2xl text-center font-mono font-semibold ">DIGITAL <br /> MARKETING</h1>
                    <br />
                    <p className="text-sm text-center">{"In todays digital landscape effective"}
                        <br />
                        {"marketing is crucial for standing out."}
                        <br />
                    {" As a digital marketing professional I leverage online platforms to boost brand awareness, engage audiences, and deliver measurable results through strategic and data-driven campaigns."}</p>
                </div>
                <div className="hover:animate-pulse animate-once h-76 w-60 bg-white rounded-md md:mr-7">
                <h1 className="text-orange-500 text-2xl text-center font-mono font-semibold md:mr-3">WORDPRESS/SHOPIFY DEVELOPMENT </h1>
                <br />
                <p className="text-sm text-center">{"For a dynamic online presence, WordPress and Shopify are top choices"}
                    <br /> 
                {"WordPress excels in versatility and customization, ideal for diverse websites, while Shopify specializes in streamlined ecommerce solutions, perfect for managing online stores efficiently."}</p>
                </div>

            </div>
            </section>
    )
}