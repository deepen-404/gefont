import { NewsArticle } from "../../../Pages/Home";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css"

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import MoreButton from "../../../common/more-button";
import useMobile from "../../../hooks/use-mobile";

interface carouselProps {
  firstCarouselData: NewsArticle[];
}

const FirstCarousel = ({ firstCarouselData }: carouselProps) => {
  const isMobile = useMobile()
  return (
    <div className="mb-[4rem] second__carousel">
      <div className="">
        <p className="p-2 pl-8 text-2xl font-bold ">Union Council</p>
      </div>
      <div className="h-[12rem] border-2 border-black">
        <>
          <Swiper
            loop={true}
            slidesPerView={isMobile ? 1 : 2}
            // centeredSlides={true}
            spaceBetween={30}
            pagination={{
              dynamicBullets: true,
            }}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {
              firstCarouselData.map((article, index) => (
                <SwiperSlide key={index}>
                  <div className="relative p-3 mx-auto bg-gray-100 rounded-lg shadow-md
                  h-[7rem] lg:h-[10rem]
                  fc-card
                  ">
                    <img
                      className="block object-contain border-2 border-red-500"
                      src={article.urlToImage}
                      alt="news image"
                    />

                    <div className="absolute w-3/5 text-sm text-left border-2 lg:h-[2.5rem] overflow-hidden border-indigo-500 bottom-3 left-[7rem]"><p className="font-semibold">{article.title}</p>
                    </div>
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

export default FirstCarousel;
