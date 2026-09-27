import { Metadata } from "next";
import Banner from "../components/Banner"
import WorkoutCard from "../components/WorkoutCard"
import { oswald } from "../layout"
import type { Workout } from "../../type/type"

const getWorkoutData = async (): Promise<Workout[]> => {
    try {
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
        return res.json()
    } catch (error) {
        throw new Error("Error fetching workout data:")

    }
}
const Workout = async () => {
    const workout = await getWorkoutData()
    return (
        <>
            <Banner></Banner>
            <div className="max-w-308 mx-auto">
                <div className=" mb-8">
                    <h2 className={`font-bold text-3xl ${oswald.className} text-white`}>THE LIBRARY</h2>
                    <p className="text-[#9CA3AF] text-[14px]">Twelve lifts covering every major muscle group.</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto  gap-4">
                    {
                        workout.map(work => <WorkoutCard key={work.id} work={work}></WorkoutCard>)
                    }
                </div>
            </div>
        </>
    )
}

export default Workout