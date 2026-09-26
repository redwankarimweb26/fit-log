
import { oswald } from "../layout";

import MyPlanShow from "../components/MyPlanShow";
import EmtyDataCard from "../components/EmtyDataCard";


const page = () => {
    return (
        <div className="max-w-308 mx-auto mt-10">
            <div>
                <h1 className={`${oswald.className} text-3xl font-bold text-white my-2`}>My Plan</h1>
                <p className="text-[#8A92A0] text-[14px]">Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className="bg-[#13161D] rounded-3xl border border-[#232732] p-10 grid grid-cols-3  my-7">
                <div>
                    <p className="text-[12px] text-[#8A92A0] pb-2">Exercises</p>
                    <span className={`font-bold text-4xl ${oswald.className} text-[#CCFF00]`}>0</span>
                </div>
                <div className="border-l border-[#232732] pl-8">
                    <p className="text-[12px] text-[#8A92A0] pb-2">Minutes</p>
                    <span className={`font-bold text-4xl ${oswald.className} text-white`}>0</span>
                </div>
                <div className="border-l border-[#232732] pl-8">
                    <p className="text-[12px] text-[#8A92A0] pb-2">Calories</p>
                    <span className={`font-bold text-4xl ${oswald.className} text-white`}>0</span>
                </div>
            </div>
            <div>

                <MyPlanShow></MyPlanShow>


            </div>
        </div>
    )
}

export default page