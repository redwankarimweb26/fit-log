
'use client'
import Workout from "../workout/page"
import { useContext } from "react"
import { WorkoutContext } from "@/context/WorkoutContext"
import Link from "next/link"
const NavPlanBtn = () => {

    const { todaysPlan, saveLater } = useContext(WorkoutContext) as {
        todaysPlan: Workout[]
        saveLater: Workout[]
    }
    return (
        <>
            <Link href="/my-plan">
                <div className="flex items-center"><span>Plan   </span><span className=" bg-[#C2F800] text-black rounded-full md:px-3 px-2 py-0.5 mx-2 md:py-1">{todaysPlan.length}</span></div>

            </Link>
            <Link href="/my-plan">
                <div className="flex items-center">
                    <span> Save  </span><span className=" border border-gray-700 rounded-full  md:px-3 px-2 py-0.5 mx-2 md:py-1">{saveLater.length}</span>

                </div>
            </Link>
        </>
    )
}

export default NavPlanBtn