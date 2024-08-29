import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
function Hero(){
    return (
        <Carousel>
  <CarouselContent>
    <CarouselItem ></CarouselItem>
    <CarouselItem></CarouselItem>
    <CarouselItem></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    )
}
export default Hero