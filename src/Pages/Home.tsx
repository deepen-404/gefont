//========================================================================//
// api 1 news api for testing can be only used with local host though
// export interface NewsArticle {

//     author: string;
//     content: string;
//     description: string;
//     publishedAt: string;
//     source: {
//         id: string | null;
//         name: string;
//     }
//     title: string;
//     url: string;
//     urlToImage: string;
// }

//========================================================================//
// media stack api for testing as well
export interface NewsArticle {
    author: null | string;
    title: string;
    description: string;
    url: string;
    source: string;
    image: string;
    category: string;
    language: string;
    country: string;
    published_at: string;
}

//========================================================================//

// gnews api only for sending the project for evaluation

// export interface NewsArticle {
//     title: string;
//     description: string;
//     content: string;
//     url: string;
//     image: string;
//     publishedAt: string;
//     source: {
//         name: string | null;
//         url: string;
//     }
// }

//========================================================================//

import NewsCarousel from "../components/Home/first-section/news-carousel";
import NewsSection from "../components/Home/first-section/news-section";
import SecondSection from "../components/Home/second-section/second-section";
// import fetchData from "../data/api";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
// import fetchData from "../data/api";
import Marquee from "../components/Home/middle-section/marquee";

// saved data
import "../data/media-stack-api.json"

const Home = () => {
    const [newsData, setNewsData] = useState<NewsArticle[]>([]);

    // useEffect(() => {
    //     // gNewsData()
    //     // fetchData()
    //         .then((data) => {
    //             // console.log(data)
    //             setNewsData(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error:", error);
    //         });
    // }, []);


    useEffect(() => {
        fetch("../data/media-stack-api.json")
          .then((response) => response.json()) 
          .then((data) => {
            setNewsData(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }, []); 


    if (newsData.length === 0) {
        return null;
    }


    const newsCarouselData = newsData.slice(0, 5)
    const newsSectionData = newsData.slice(6, 12)

    // const newsCarouselData = newsData.slice(0, 5)
    // const newsSectionData = newsData.slice(3, 9)


    return (
        <div>


            <section className="w-[95vw] mx-auto">
                <div className="flex lg:flex-row flex-col w-[95vw] mx-auto pt-6 gap-4">
                    <div className="w-[90%] overflow-hidden h-[20rem] lg:h-[27rem] m-2 lg:w-3/5 mx-auto rounded-xl news__carousel">
                        <NewsCarousel
                            newsCarouselData={newsCarouselData}
                        />
                    </div>
                    <div className=" w-[90%] h-fit lg:h-[27rem] border-red-800 m-2 lg:w-2/5 mx-auto">
                        <NewsSection newsSectionData={newsSectionData} />
                    </div>
                </div>


                <div className="flex items-center justify-center mt-10 text-center"> <Marquee /> </div>


                <div className="relative mt-10 second__section">
                    <SecondSection secondSectionData={newsData} />
                </div>
            </section>
        </div>
    );
};

export default Home;
