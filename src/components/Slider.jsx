import SlideImg1 from "../assets/slider/01.jpg";
import SlideImg2 from "../assets/slider/02.jpg";
import SlideImg3 from "../assets/slider/03.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
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
        >
            <div>
                <img src={SlideImg1} alt="Slider" />
            </div>
            <div>
                <img src={SlideImg2} alt="Slider" />
            </div>
            <div>
                <img src={SlideImg3} alt="Slider" />
            </div>
        </Carousel>
        <div className="bg-gradient-to-t from-gray-50 to-transparent h-60 w-full absolute bottom-0 pointer-events-none z-1"></div>
    </div>
  )
}

export default Slider