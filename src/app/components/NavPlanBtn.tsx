
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
                <span>Plan   <span className=" bg-[#C2F800] text-black rounded-full md:px-4 px-2 py-1 mx-2 md:py-2">{todaysPlan.length}</span></span>

            </Link>
            <Link href="/my-plan">

                <span> Save  <span className=" border border-gray-700 rounded-full md:px-4 px-2 py-1 mx-2 md:py-2">{saveLater.length}</span></span>
            </Link>
        </>
    )
}

export default NavPlanBtn