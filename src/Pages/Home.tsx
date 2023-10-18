// Create an interface to define the structure of a single news article
export interface NewsArticle {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string | null;
        name: string;
    }
    title: string;
    url: string;
    urlToImage: string;
}

import NewsCarousel from "../components/Home/first-section/news-carousel";
import NewsSection from "../components/Home/first-section/news-section";
import SecondSection from "../components/Home/second-section/second-section";
import fetchData from "../data/api";
import { useState, useEffect } from "react";

const Home = () => {
    const [newsData, setNewsData] = useState<NewsArticle[]>([]);

    useEffect(() => {
        fetchData()
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

    return (
        <div>


            <section className="w-[95vw] mx-auto min-h-fit">
                <div className="flex lg:flex-row flex-col w-[95vw] mx-auto gap-4">
                    <div className="w-[90%]  overflow-hidden h-[20rem] lg:h-[27rem] m-2 lg:w-3/5 mx-auto rounded-xl news__carousel">
                        <NewsCarousel
                            newsCarouselData={newsCarouselData}
                        />
                    </div>
                    <div className=" w-[90%] h-fit lg:h-[27rem] border-red-800 m-2 lg:w-2/5 mx-auto">
                        <NewsSection newsSectionData={newsSectionData} />
                    </div>
                </div>
                <div className="relative mt-16 second__section">
                    <SecondSection secondSectionData={newsData} />
                </div>
            </section>
        </div>
    );
};

export default Home;
