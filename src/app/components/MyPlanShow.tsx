"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { useContext, useState } from "react";
import type { Workout } from "@/type/type";
import EmtyDataCard from "./EmtyDataCard";
import TodaysCard from "./TodaysCard";

const MyPlan = () => {

  const { todaysPlan, saveLater, activeTab, setActiveTab } = useContext(WorkoutContext) as {
    todaysPlan: Workout[];
    saveLater: Workout[];
    activeTab: "todays" | "saved";
    setActiveTab: (tab: "todays" | "saved") => void;
  };

  return (
    <div>

      <div className="flex max-w-57 transition justify-between gap-1 rounded-2xl border border-[#252932] bg-[#171a20] p-1">
        <button
          onClick={() => setActiveTab("todays")}
          className={`rounded-2xl px-4 py-2 ${activeTab === "todays" ? "bg-[#1F242D] text-white border-[#2B303D]" : "text-[#8A92A0]"}`} >Today's Plan</button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`rounded-2xl px-4 py-2 ${activeTab === "saved"
            ? "bg-[#1F242D] text-white border-[#2B303D]"
            : "text-[#8A92A0]"
            }`}
        >
          Saved
        </button>
      </div>
      <div>
        <div>
          {
            activeTab === "todays" ? (
              <div>
                {todaysPlan.length > 0 ? (
                  <div className=" my-5 flex flex-col gap-5">
                    {todaysPlan.map((workout) => (
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
      </div>

    </div>
  );
};

export default MyPlan;