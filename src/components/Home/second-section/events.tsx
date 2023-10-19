import { NewsArticle } from "../../../Pages/Home";
import MoreButton from "../../../common/more-button";
interface eventDataProps {
    eventData: NewsArticle[];
}
const ForthComingEvents = ({ eventData }: eventDataProps) => {
    return (
        <div className="h-full">
            <p className="p-2 pl-8 text-2xl font-bold">ForthComing Events</p>
            <div className="w-full">
                {
                    eventData.map((article, index) => (
                        <div key={index} className="relative p-3 mx-auto mt-4 bg-gray-100 rounded-lg shadow-md news-card ">
                            <div className="h-fullw-fit">
                                <div className="bg-center bg-no-repeat bg-cover h-[5.5rem] rounded-lg aspect-square justify-around"
                                    style={{
                                        backgroundImage: `url(${article.urlToImage})`,
                                    }}
                                ></div>
                            </div>
                            <div className="absolute w-3/5 text-left bottom-3 left-[7rem]"><p className="text-sm font-semibold">{article.title}</p></div>
                        </div>
                    ))
                }
            </div>);

            <div className="flex items-center justify-center w-full">
                <MoreButton />
            </div>
        </div>);
}

export default ForthComingEvents;