"use client"
import { WorkoutContext } from "@/context/WorkoutContext"
import { Workout } from "@/type/type"

import { Dispatch, SetStateAction, useContext } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { FaRegBookmark } from "react-icons/fa6"
import { LuCalendarPlus2 } from "react-icons/lu"


interface PageDetailBtnProps {
    work: Workout
}
const PageDetailBtn = ({ work }: PageDetailBtnProps) => {

    const { todaysPlan, setTodaysPlan, saveLater, setSaveLater } = useContext(WorkoutContext) as {
        todaysPlan: Workout[]
        setTodaysPlan: Dispatch<SetStateAction<Workout[]>>
        saveLater: Workout[]
        setSaveLater: Dispatch<SetStateAction<Workout[]>>
    }

    const handleAddToTodaysPlan = () => {
        if (todaysPlan.find((item) => item.id === work.id)) {

            toast.error("Already added to today's plan.")
        }
        else {
            setTodaysPlan([...todaysPlan, work])
            toast.success("Successfully added to today's plan");
        }
    }


    const handleSaveForLater = () => {
        if (!saveLater.find((item) => item.id === work.id)) {
            setSaveLater([...saveLater, work])
            toast.success('Successfully added to save for later!');
        }
        else {
            toast.error("Already added to save for later.")
        }

    }

    return (
        <>
            <button onClick={handleAddToTodaysPlan} className=" btn flex items-center gap-2 rounded-md bg-[#CCff00] px-4 py-2 text-[14px] font-bold text-black transition hover:bg-[#c7ff33]">
                <LuCalendarPlus2 size={15} />
                Add to today's plan
            </button>

            <button onClick={handleSaveForLater} className=" btn flex items-center gap-2 rounded-md border border-[#343841] px-4 py-2 font-medium text-[14px] text-gray-300 transition hover:bg-[#1b1e24]">
                <FaRegBookmark size={15} />
                Save for later
            </button>
        </>
    )
}

export default PageDetailBtn