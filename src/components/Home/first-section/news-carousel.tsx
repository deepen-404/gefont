import { NewsArticle } from '../../../Pages/Home';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


interface NewsCarouselProps {
    newsCarouselData: NewsArticle[];
}

const NewsCarousel = ({ newsCarouselData }: NewsCarouselProps) => {
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={30}
                effect={"fade"}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    newsCarouselData.map((article, index) => (
                        <SwiperSlide key={index} className='cursor-pointer'>
                            <div
                                className='relative w-full h-full bg-center bg-no-repeat bg-cover'
                                style={{
                                    backgroundImage: `url(${article.urlToImage})`,
                                }}
                            >
                                <div className='absolute inset-0 bg-black opacity-50'></div>
                                <div className='absolute bottom-10 left-6'>
                                    <p className='relative w-[70%] text-left z-10 text-xl font-bold text-gray-100 ab'>{article.title}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </>
    );
}

export default NewsCarousel;