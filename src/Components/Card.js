
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

function Card({review}) {
    return (
        <div className="flex flex-col relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full width-[140px] h-[140px] z-[30]"
                 src={review.image}></img>
            </div>
            <div className="w-[140px] h-[140px] absolute bg-violet-500 rounded-full top-[-7.5rem] left-[10px] z-[0]"></div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize">{review.name}</p>
            </div>

            <div className="text-center mt-2">
                <p className="text-violet-300 uppercase text-sm ">{review.job}</p>
            </div>

            <div className="mx-auto text-violet-400 mt-5">
                <FaQuoteLeft/>
            </div> 

            <div className="text-center mt-4 text-slate-500">
                {review.text}
            </div>

            <div  className="mx-auto text-violet-400 mt-5">
                <FaQuoteRight/>
            </div>

           

        </div>
    )
}

export default Card;