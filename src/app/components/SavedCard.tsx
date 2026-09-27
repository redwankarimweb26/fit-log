"use client"
import { WorkoutContext } from "@/context/WorkoutContext"
import { Workout } from "@/type/type"
import Image from "next/image"
import Link from "next/link"
import { Dispatch, SetStateAction, useContext } from "react"
import toast from "react-hot-toast"

import { FaXmark } from "react-icons/fa6"

import { LuClock3, LuStar } from "react-icons/lu"
import { PiFire } from "react-icons/pi"



interface SavedCardProps {
    workout: Workout
};

const SavedCard = ({ workout }: SavedCardProps) => {

    const { saveLater, setSaveLater } = useContext(WorkoutContext) as {

        saveLater: Workout[];
        setSaveLater: Dispatch<SetStateAction<Workout[]>>;
    };
    const handleSavedRemove = () => {
        const updatedPlan = saveLater.filter((work) => work.id !== workout.id);
        setSaveLater(updatedPlan);
        toast.success(`${workout.name} removed from saved workouts!`, {
            iconTheme: {
                primary: 'red',
                secondary: '#FFFAEE',
            },
        });
    }
    return (

        // <div className="flex items-center gap-4 rounded-xl border border-[#252932] bg-[#14171E] p2 sm:p-4">


        //     <div className="flex gap-5 flex-col md:flex-row md:justify-between w-full">
        //         <div className="flex items-center gap-4">
        //             <div className="relative h-24 w-38 overflow-hidden rounded-lg">
        //                 <Image
        //                     src={workout.image}
        //                     alt={workout.name}
        //                     fill
        //                     className="object-cover"
        //                 />
        //             </div>
        //             <div className="min-w-0 flex-1">
        //                 <h3 className=" font-bold uppercase text-white">
        //                     {workout.name}
        //                 </h3>

        //                 <p className="text-xs text-[#8A92A0] mb-1.5">
        //                     {workout.equipment}
        //                 </p>

        //                 <div className="mt-1 flex items-center gap-3 text-xs text-[#B8BEC8]">


        //                     <span className="flex items-center gap-1">
        //                         <LuClock3 size={13} className="text-[#C2F800]" />
        //                         {workout.duration} min
        //                     </span>

        //                     <span className="flex items-center gap-1">
        //                         <PiFire size={14} className="text-[#C2F800]" />
        //                         {workout.caloriesBurned} kcal
        //                     </span>


        //                     <span className="flex items-center gap-1">
        //                         <LuStar size={13} className="text-[#C2F800]" />
        //                         {workout.rating}
        //                     </span>

        //                 </div>
        //             </div>
        //         </div>
        //         <div className="flex justify-around md:justify-start shrink-0 items-center gap-2">


        //         </div>
        //     </div>
        // </div>
        <div className="flex items-center gap-4 rounded-xl border border-[#252932] bg-[#14171E] p-2 sm:p-4">


            <div className="flex gap-5 flex-col md:flex-row md:justify-between w-full">
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative h-24 w-34 sm:w-38 overflow-hidden rounded-lg">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className=" font-bold uppercase text-white">
                            {workout.name}
                        </h3>

                        <p className="text-xs text-[#8A92A0] mb-1.5">
                            {workout.equipment}
                        </p>

                        <div className="mt-1 flex items-center gap-2 sm:gap-3 text-xs text-[#B8BEC8]">


                            <span className="flex items-center gap-1">
                                <LuClock3 size={13} className="text-[#C2F800]" />
                                {workout.duration} min
                            </span>

                            <span className="flex items-center gap-1">
                                <PiFire size={14} className="text-[#C2F800]" />
                                {workout.caloriesBurned} kcal
                            </span>


                            <span className="flex items-center gap-1">
                                <LuStar size={13} className="text-[#C2F800]" />
                                {workout.rating}
                            </span>

                        </div>
                    </div>
                </div>
                <div className="flex justify-around md:justify-start shrink-0 items-center gap-2">
                    <Link href={`/workout/${workout.id}`}><button className="rounded-full border border-[#343A46] px-4 py-2 text-xs text-gray-300 transition hover:bg-[#1F242D]">
                        View Details
                    </button></Link>

                    <button onClick={() => handleSavedRemove()} className="ml-1 p-2 text-[#747B88] transition hover:text-white">
                        <FaXmark size={25} />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default SavedCard