'use client'
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { FaCheck, FaXmark } from "react-icons/fa6"
import { WorkoutContext } from "@/context/WorkoutContext";
import { Workout } from "@/type/type";
import Link from "next/link";
import toast from "react-hot-toast";

interface TodayCardBtnProps {
    workout: Workout;
}

const TodayCardBtn = ({ workout }: TodayCardBtnProps) => {
    const { todaysPlan, setTodaysPlan, saveLater, setSaveLater } = useContext(WorkoutContext) as {
        todaysPlan: Workout[];
        setTodaysPlan: Dispatch<SetStateAction<Workout[]>>;
        saveLater: Workout[];
        setSaveLater: Dispatch<SetStateAction<Workout[]>>;
    };
    const [isDone, setIsDone] = useState(false);
    const handleMarkAsDone = () => {
        setIsDone(true);
        toast.success(`${workout.name} marked as done!`)
    }
    const handleTodayPlanRemove = () => {
        const updatedPlan = todaysPlan.filter((work) => work.id !== workout.id);
        setTodaysPlan(updatedPlan);
        toast.success(`${workout.name} removed from today's plan!`, {
            iconTheme: {
                primary: 'red',
                secondary: '#FFFAEE',
            },
        });
    }



    return (
        <>

            <Link href={`/workout/${workout.id}`}><button className="rounded-full border border-[#343A46] px-4 py-2 text-xs text-gray-300 transition hover:bg-[#1F242D]">
                View Details
            </button></Link>

            <button onClick={() => handleMarkAsDone()} className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition ${isDone ? "bg-[#282c33] text-gray-500" : "bg-[#C2F800] text-black"}`} > <FaCheck size={11} />{isDone ? "Completed" : "Mark as Done"} </button>

            <button onClick={() => handleTodayPlanRemove()} className="ml-1 p-2 text-[#747B88] transition hover:text-white">
                <FaXmark size={25} />
            </button>
        </>
    )
}

export default TodayCardBtn