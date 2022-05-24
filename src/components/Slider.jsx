import SlideImg1 from "../assets/slider/01.jpg";
import SlideImg2 from "../assets/slider/02.jpg";
import SlideImg3 from "../assets/slider/03.jpg";
import SlideImgMobile1 from "../assets/slider/04-mobile.jpg";
import SlideImgMobile2 from "../assets/slider/05-mobile.jpg";
import SlideImgMobile3 from "../assets/slider/06-mobile.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

function Slider() {
    const [isMobile, setIsMobile] = useState(false)
    useState(() => {
        function handleResize() {
            if(window.innerWidth >= 640){
                setIsMobile(false)
            } else {
                setIsMobile(true)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    }, [])
  return (
    <div className="relative">
        <Carousel
            autoPlay={true} 
            showThumbs={false} 
            stopOnHover={true} 
            infiniteLoop={true}
            interval={4000}
            showIndicators={false}
            emulateTouch={true}
            showStatus={false}
            showArrows={false}
        >
            <div>
                <img src={isMobile ? SlideImgMobile1 : SlideImg1} alt="Slide" />
            </div>
            <div>   
                <img src={isMobile ? SlideImgMobile2 : SlideImg2} alt="Slide" />
            </div>
            <div>   
                <img src={isMobile ? SlideImgMobile3 : SlideImg3} alt="Slide" />
            </div>
        </Carousel>
        <div className="bg-gradient-to-t from-gray-50 to-transparent h-60 w-full absolute bottom-0 pointer-events-none z-1"></div>
    </div>
  )
}

export default Slider