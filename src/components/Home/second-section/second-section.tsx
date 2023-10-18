import { NewsArticle } from "../../../Pages/Home";
import SecondCarousel from "./second-carousel";
import FirstCarousel from "./first-carousel";
import ForthComingEvents from "./events";

interface secondSectionProps {
    secondSectionData: NewsArticle[];
}

const SecondSection = ({ secondSectionData }: secondSectionProps) => {

    const eventData = secondSectionData.slice(14, 18)
    const firstCarouselData = secondSectionData.slice(30, 36)
    const secondCarouselData = secondSectionData.slice(40, 46)

    return (
        <div className="flex flex-col lg:flex-row gap-2 min-h-[35rem]">
            <div className="flex flex-col gap-2 lg:w-3/5">
                <div className="first__carousel">
                    <FirstCarousel firstCarouselData={firstCarouselData} />
                </div>
                <div className="second__carousel">
                    <SecondCarousel secondCarouselData={secondCarouselData} />
                </div>
            </div>
            <div className="mt-16 lg:w-2/5 lg:m-0">
                <ForthComingEvents eventData={eventData} />
            </div>
        </div>
    );
}

export default SecondSection;