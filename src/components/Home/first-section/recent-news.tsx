import { NewsArticle } from "../../../Pages/Home";

interface recentNewsProps {
    recentNewsData: NewsArticle[];
}
const RecentNews = ({ recentNewsData }: recentNewsProps) => {
    return (
        <div className="w-full">
            {
                recentNewsData.map((article, index) => (
                    <div key={index} className="relative p-3 mx-auto mt-4 bg-gray-100 rounded-lg shadow-md news-card ">
                        <div className="h-fullw-fit">
                            <div className="bg-center bg-no-repeat bg-cover h-[5.5rem] rounded-lg aspect-square justify-around"
                                style={{
                                    backgroundImage: `url(${article.urlToImage})`,
                                }}
                            ></div>
                        </div>
                        <div className="absolute w-3/5 text-base text-left bottom-3 left-[7rem]"><p className="font-bold text-black">{article.title}</p></div>
                    </div>
                ))
            }
        </div>);
}

export default RecentNews;