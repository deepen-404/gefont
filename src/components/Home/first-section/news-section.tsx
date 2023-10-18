import { NewsArticle } from '../../../Pages/Home';
import { useState } from 'react';
import RecentNews from './recent-news';
import TopNews from './top-news';

interface NewsSectionProps {
    newsSectionData: NewsArticle[];
}
const NewsSection = ({ newsSectionData }: NewsSectionProps) => {
    const recentNewsData = newsSectionData.slice(0, 3)
    const topNewsData = newsSectionData.slice(3, 6)

    const [section, setSection] = useState('recent');

    return (
        <div className="flex flex-col items-center justify-around text-center">
            <div className="flex justify-around w-full mb-[1rem] news-line relative">
                <button className='transition-all jump' onClick={() => setSection('recent')}><span className='font-bold text-blackt text-lg'>Recent News</span></button>
                <button className='transition-all jump' onClick={() => setSection('topStory')}><span className='font-bold text-black text-lg'>Top story</span> </button>
                <div className="transition-all duration-300 rounded-sm news-line-before"></div>
            </div>
            {section === 'recent' ? (
                <div className="w-full">
                    <RecentNews recentNewsData={recentNewsData} />
                </div>
            ) : (
                <div className="w-full">
                    <TopNews topNewsData={topNewsData} />
                </div>
            )}
            <style>{`
                .news-line-before {
                    content: "";
                    position: absolute;
                    width: 40%;
                    height: 0.3rem;
                    background-color: rgb(253 224 71);;
                    ${section === 'recent' ? 'transform: translate(-60.5%, 650%);' : 'transform: translate(69%, 650%);'}
                }
            `}</style>
        </div>
    );
};

export default NewsSection;
