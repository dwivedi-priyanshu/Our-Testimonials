import { useState } from "react";
import Card from "./Card"
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";


function Testimonial({reviews}){
    const [index,setIndex]=useState(0);

    function leftShiftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler(){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }

    }

    function surpriceHandler(){
        let randomidx=Math.floor(Math.random()*reviews.length);
        setIndex(randomidx);
    }

    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all hover:shadow-lg duration-200 rounded-md">
            <Card review={reviews[index]}/>

            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold items-center justify-center">
                <button onClick={leftShiftHandler}
                 className="cursor-pointer hover:text-violet-500"><FiChevronLeft/></button>
                <button onClick={rightShiftHandler}
                 className="cursor-pointer hover:text-violet-500"><FiChevronRight/></button>
            </div>

            <div className="mt-4">
                <button onClick={surpriceHandler}
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer py-2 rounded-md
                text-white text-lg
                ">Surprice Me</button>
            </div>

        </div>

        
    )
}

export default Testimonial;