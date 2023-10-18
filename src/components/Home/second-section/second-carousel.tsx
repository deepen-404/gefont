import { NewsArticle } from "../../../Pages/Home";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import MoreButton from "../../../common/more-button";

interface carouselProps {
    secondCarouselData: NewsArticle[];
}

const SecondCarousel = ({ secondCarouselData }: carouselProps) => {
    return (
        <div className="w-full h-fit second__carousel">
            <div className="w-full h-fit">
                <p className="p-2 pl-8 font-bold text-2xl ">Media Watch</p>
            </div>
            <div className="h-[10rem] w-full">
                <>
                    <Swiper
                        loop={true}
                        slidesPerView={2}
                        // centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        {
                            secondCarouselData.map((article, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative p-3 mx-auto bg-gray-100 rounded-lg shadow-md swiper-card">
                                        <div className="h-full w-fit">
                                            <div className="bg-center bg-no-repeat bg-cover h-[5.5rem] rounded-lg aspect-square justify-around"
                                                style={{
                                                    backgroundImage: `url(${article.urlToImage})`,
                                                }}
                                            ></div>
                                        </div>
                                        <div className="absolute w-3/5 text-base text-left bottom-3 left-[7rem]"><p className="font-bold text-black">{article.title}</p></div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </>
                <div className="flex items-center justify-end w-full">
                    <MoreButton />
                </div>
            </div>
        </div>
    );
};

export default SecondCarousel;
