'use client'

import type { Workout } from "../type/type"
import { createContext, useState } from "react"

interface WorkoutContextType {
    todaysPlan: Workout[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
    saveLater: Workout[];
    setSaveLater: React.Dispatch<React.SetStateAction<Workout[]>>;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined)

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [todaysPlan, setTodaysPlan] = useState<Workout[]>([])
    const [saveLater, setSaveLater] = useState<Workout[]>([])
    const [activeTab, setActiveTab] = useState("todays")

    const value: WorkoutContextType = {
        todaysPlan,
        setTodaysPlan,
        saveLater,
        setSaveLater,
        activeTab,
        setActiveTab,
    }

    return (
        <WorkoutContext.Provider value={value}>
            {children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutProvider