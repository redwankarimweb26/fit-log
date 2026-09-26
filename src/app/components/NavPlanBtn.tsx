
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
                <span>Plan   <span className=" bg-[#C2F800] text-black rounded-full px-4 mx-2 py-2">{todaysPlan.length}</span></span>

            </Link>
            <Link href="/my-plan">

                <span>Save  <span className=" border border-gray-700 rounded-full px-4 ml-2 py-2">{saveLater.length}</span></span>
            </Link>
        </>
    )
}

export default NavPlanBtn