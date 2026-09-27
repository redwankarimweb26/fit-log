"use client";
import { Workout } from "@/type/type";
import { oswald } from "../layout"
import { Dispatch, SetStateAction, useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";

const MyPlanBanner = () => {

    const { todaysPlan, saveLater, activeTab } = useContext(WorkoutContext) as {
        todaysPlan: Workout[];

        saveLater: Workout[];

        activeTab: "todays" | "saved";

    };

    const todayDuration = todaysPlan.reduce((total, workout) => total + workout.duration, 0);
    const todayCalories = todaysPlan.reduce((total, workout) => total + workout.caloriesBurned, 0);
    const savedDuration = saveLater.reduce((total, workout) => total + workout.duration, 0);
    const savedCalories = saveLater.reduce((total, workout) => total + workout.caloriesBurned, 0);
    return (
        <>
            <div className="bg-[#13161D] rounded-3xl border border-[#232732] p-10 grid grid-cols-3  my-7">
                <div>
                    <p className="text-[12px] text-[#8A92A0] pb-2">Exercises</p>
                    <span className={`font-bold text-4xl ${oswald.className} text-[#CCFF00]`}>{`${activeTab === "todays" ? todaysPlan.length : saveLater.length}`}</span>
                </div>
                <div className="border-l border-[#232732] pl-8">
                    <p className="text-[12px] text-[#8A92A0] pb-2">Minutes</p>
                    <span className={`font-bold text-4xl ${oswald.className} text-white`}>{`${activeTab === "todays" ? todayDuration : savedDuration}`}</span>
                </div>
                <div className="border-l border-[#232732] pl-8">
                    <p className="text-[12px] text-[#8A92A0] pb-2">Calories</p>
                    <span className={`font-bold text-4xl ${oswald.className} text-white`}>{`${activeTab === "todays" ? todayCalories : savedCalories}`}</span>
                </div>
            </div>
        </>
    )
}

export default MyPlanBanner