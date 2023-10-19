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
import useMobile from "../../../hooks/use-mobile";

interface carouselProps {
    secondCarouselData: NewsArticle[];
}

const SecondCarousel = ({ secondCarouselData }: carouselProps) => {
    const isMobile = useMobile();
    return (
        <div className="w-full transition-all duration-200 ease-linear rounded-lg h-fit second__carousel">
            <div className="w-full h-fit">
                <p className="p-2 pl-8 text-2xl font-bold ">Media Watch</p>
            </div>
            <div className="h-[12rem] w-full">
                <>
                    <Swiper
                        loop={true}
                        slidesPerView={isMobile ? 1 : 2}
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
                                        <div className="absolute w-3/5 text-sm text-left bottom-3 left-[7rem]"><p className="font-semibold">{article.title}</p></div>
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
