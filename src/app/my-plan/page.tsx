
import { oswald } from "../layout";

import MyPlanShow from "../components/MyPlanShow";
import MyPlanBanner from "../components/MyPlanBanner";



const page = () => {

    return (
        <div className="max-w-308 mx-auto mt-10">
            <div>
                <h1 className={`${oswald.className} text-3xl font-bold text-white my-2`}>My Plan</h1>
                <p className="text-[#8A92A0] text-[14px]">Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <MyPlanBanner></MyPlanBanner>
            <div>

                <MyPlanShow></MyPlanShow>


            </div>
        </div>
    )
}

export default page