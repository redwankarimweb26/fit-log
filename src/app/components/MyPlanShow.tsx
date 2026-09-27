"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import type { Workout } from "@/type/type";
import EmtyDataCard from "./EmtyDataCard";
import TodaysCard from "./TodaysCard";
import SavedCard from "./SavedCard";

const MyPlan = () => {

  const { todaysPlan, setTodaysPlan, saveLater, setSaveLater, activeTab, setActiveTab } = useContext(WorkoutContext) as {
    todaysPlan: Workout[];
    setTodaysPlan: Dispatch<SetStateAction<Workout[]>>;
    saveLater: Workout[];
    setSaveLater: Dispatch<SetStateAction<Workout[]>>;
    activeTab: "todays" | "saved";
    setActiveTab: (tab: "todays" | "saved") => void;
  };


  const [sortBy, setSortBy] = useState<'rating' | 'calories' | 'duration'>('duration')
  const sortWorkout = (workout: Workout[]) => {
    const sortedWorkouts = [...workout]
    if (sortBy === "duration") {
      sortedWorkouts.sort((a, b) => b.duration - a.duration)
    } else if (sortBy === "calories") {
      sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned)
    } else if (sortBy === "rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating)
    }
    return sortedWorkouts
  }

  const sortTodaysPlan = sortWorkout(todaysPlan)
  const sortSaveLater = sortWorkout(saveLater)

  return (
    <div>

      <div className="flex items-center justify-between">
        <div className="flex max-w-57 transition justify-between gap-1 rounded-2xl border border-[#252932] bg-[#171a20] p-1">
          <button
            onClick={() => setActiveTab("todays")}
            className={`rounded-2xl text-xs px-4 py-2 ${activeTab === "todays" ? "bg-[#1F242D] font-bold text-white border-[#2B303D]" : "text-[#8A92A0]"}`} >Today's Plan</button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-2xl text-xs px-2 sm:px-4 py-2 ${activeTab === "saved"
              ? "bg-[#1F242D] font-bold text-white border-[#2B303D]"
              : "text-[#8A92A0]"
              }`}
          >
            Saved
          </button>
        </div>
        <div>
          <div className="my-4 flex ">
            <span className="mt-3 mr-3 text-xs text-[#8A92A0]"> Sort By</span> <select
              onChange={(e) => setSortBy(e.target.value as 'rating' | 'calories' | 'duration')}
              className="select w-23 sm:w-35 border border-[#252932] bg-[#14171E] text-xs  text-white focus:outline-none ">

              <option value={'duration'}> Duration</option>
              <option value={'calories'}>Calories</option>
              <option value={'rating'}> Rating</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div>
          {
            activeTab === "todays" ? (
              <div>
                {sortTodaysPlan.length > 0 ? (
                  <div className=" my-5 flex flex-col gap-5">
                    {sortTodaysPlan.map((workout) => (
                      <TodaysCard key={workout.id} workout={workout} />
                    ))}
                  </div>
                ) : (
                  <EmtyDataCard />
                )}
              </div>
            ) : null
          }
        </div>
        <div>
          {
            activeTab === "saved" ? (
              <div>
                {sortSaveLater.length > 0 ? (
                  <div className=" my-5 flex flex-col gap-5">
                    {sortSaveLater.map((workout) => (
                      <SavedCard key={workout.id} workout={workout} />
                    ))}
                  </div>
                ) : (
                  <EmtyDataCard />
                )}
              </div>
            ) : null
          }
        </div>
      </div>


    </div>
  );
};

export default MyPlan;