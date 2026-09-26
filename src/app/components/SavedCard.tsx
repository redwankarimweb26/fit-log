import { Workout } from "@/type/type"
import Image from "next/image"
import { FaXmark } from "react-icons/fa6"

import { LuClock3, LuStar } from "react-icons/lu"
import { PiFire } from "react-icons/pi"



interface SavedCardProps {
    workout: Workout
};

const SavedCard = ({ workout }: SavedCardProps) => {
    return (
        <div className="flex items-center gap-4 rounded-xl border border-[#252932] bg-[#14171E] p-4">

            <div className="relative h-24 w-38 overflow-hidden rounded-lg">
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

                <div className="mt-1 flex items-center gap-3 text-xs text-[#B8BEC8]">


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
            <div className="flex shrink-0 items-center gap-2">


                <button className="rounded-full border border-[#343A46] px-4 py-2 text-xs text-gray-300 transition hover:bg-[#1F242D]">
                    View Details
                </button>

                <button className="ml-1 p-2 text-[#747B88] transition hover:text-white">
                    <FaXmark size={13} />
                </button>
            </div>
        </div>
    )
}

export default SavedCard