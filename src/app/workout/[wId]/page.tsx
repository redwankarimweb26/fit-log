import { oswald } from "@/app/layout"
import { Workout } from "@/app/type/type"
import Image from "next/image"
import { FaRegBookmark } from "react-icons/fa6"
import { LuCalendarPlus2 } from "react-icons/lu"




const page = async ({ params }: { params: Promise<{ wId: string }> }) => {
    const { wId } = await params
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${wId}`)
    const work: Workout = await res.json()

    return (
        <div className="mx-auto max-w-308 mt-4 p-4 md:p-5">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">


                <div className="relative max-h-145 overflow-hidden rounded-lg">
                    <Image
                        src={work.image}
                        alt={work.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>


                <div className="flex flex-col">

                    <h1 className={`text-2xl font-extrabold uppercase text-white ${oswald.className}`}>
                        {work.name}
                    </h1>

                    <p className="mt-1 max-w-xl text-sm leading-5 text-gray-400">
                        {work.description}
                    </p>
                    <div className="mt-3 flex gap-2">
                        {work.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#b7ff00] px-3 py-1 text-[10px] font-bold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4 overflow-hidden rounded-xl border border-[#252932] bg-[#171a20]">

                        <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                            <span className="text-[12px] font-bold uppercase text-[#9CA3AF]">
                                Equipment
                            </span>

                            <span className="text-[14px] text-[#E5E7EB]">
                                {work.equipment}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                            <span className="text-[12px] font-bold uppercase text-[#9CA3AF]">
                                Difficulty
                            </span>

                            <span className="text-[14px] text-[#E5E7EB]">
                                {work.difficulty}
                            </span>
                        </div>
                        <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                            <span className="text-[12px] font-semibold uppercase text-[#9CA3AF]">
                                Sets
                            </span>

                            <span className="text-[14px] text-[#E5E7EB]">
                                {work.sets}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                            <span className="text-[12px] font-bold uppercase text-[#9CA3AF]">
                                Reps
                            </span>

                            <span className="text-[14px] text-[#E5E7EB]">
                                {work.reps}
                            </span>
                        </div>
                        <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                            <span className="text-[12px] font-bold uppercase text-[#9CA3AF]">
                                Duration
                            </span>

                            <span className="text-[14px] text-[#E5E7EB]">
                                {work.duration} min
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                            <span className="text-[12px] font-bold uppercase text-[#9CA3AF]">
                                Calories
                            </span>

                            <span className="text-[14px] text-[#E5E7EB]">
                                {work.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-4 py-3">
                            <span className="text-[12px] font-bold uppercase text-[#9CA3AF]">
                                Rating
                            </span>

                            <span className="text-[14px] text-[#E5E7EB]">
                                {work.rating}
                            </span>
                        </div>

                    </div>

                    <div className="mt-5">
                        <h2 className="font-bold uppercase text-white">
                            Instructions
                        </h2>

                        <ol className="mt-2 space-y-2">
                            {work.instructions.map((instruction, index) => (
                                <li
                                    key={instruction}
                                    className="flex gap-2 text-[14px] leading-4 text-[#D1D5DB]"
                                >
                                    <span>{index + 1}.</span>
                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="mt-5 flex gap-3">

                        <button className=" btn flex items-center gap-2 rounded-md bg-[#CCff00] px-4 py-2 text-[14px] font-bold text-black transition hover:bg-[#c7ff33]">
                            <LuCalendarPlus2 size={15} />
                            Add to today's plan
                        </button>

                        <button className=" btn flex items-center gap-2 rounded-md border border-[#343841] px-4 py-2 font-medium text-[14px] text-gray-300 transition hover:bg-[#1b1e24]">
                            <FaRegBookmark size={15} />
                            Save for later
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default page