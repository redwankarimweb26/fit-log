import PageDetailBtn from "@/app/components/PageDetailBtn"
import { oswald } from "@/app/layout"
import { Workout } from "@/type/type"
import { Metadata } from "next";
import Image from "next/image"





const page = async ({ params }: { params: Promise<{ wId: string }> }) => {
    const { wId } = await params
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${wId}`)
    const work: Workout = await res.json()

    return (
        <div className="mx-auto max-w-308 mt-4 p-4 md:p-5">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">


                <div className="relative h-80 overflow-hidden rounded-lg md:h-145">
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

                    <div className="mt-5 flex gap-3 md:justify-start justify-between">


                        <PageDetailBtn key={work.id} work={work}></PageDetailBtn>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page