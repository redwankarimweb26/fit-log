import Link from "next/link"
import { oswald } from "../layout"

const EmtyDataCard = () => {
    return (
        <div className="flex flex-col items-center justify-center py-30 border-dashed border-2 border-[#1B1F28] rounded-3xl mt-10">
            <h2 className={`${oswald.className} font-bold text-xl text-white`} >NOTHING HERE YET</h2>
            <p className=" mt-1 text-[12px] text-[#A1A1AA] ">Browse the library and add a lift to get today moving.</p>
            <Link href="/workout" className="m-3  rounded-full bg-[#C2F800] px-6 py-3 text-[12px] font-bold  text-black transition hover:bg-[#b5e600]">
                Go to Workouts
            </Link>
        </div>
    )
}

export default EmtyDataCard