import { useState } from "react";
import { FaCheck, FaXmark } from "react-icons/fa6"
const TodayCardBtn = () => {

    const [isDone, setIsDone] = useState(false);
    const handleMarkAsDone = () => {
        setIsDone(true);
    }

    return (
        <>

            <button className="rounded-full border border-[#343A46] px-4 py-2 text-xs text-gray-300 transition hover:bg-[#1F242D]">
                View Details
            </button>

            <button onClick={() => handleMarkAsDone()} className={`${isDone ? 'bg-[#282c33] text-gray-500 flex items-center gap-2' : 'flex items-center gap-2 text-black bg-[#C2F800]'}flex items-center gap-2 rounded-full  px-4 py-2 text-xs font-bold transition`}>
                <FaCheck size={11} />
                Mark as Done
            </button>

            <button className="ml-1 p-2 text-[#747B88] transition hover:text-white">
                <FaXmark size={13} />
            </button>
        </>
    )
}

export default TodayCardBtn