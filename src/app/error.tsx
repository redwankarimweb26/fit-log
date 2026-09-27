'use client'

import { MdRefresh } from "react-icons/md"
import { oswald } from "./layout"



const ErrorPage = () => {
    return (
        <div className="flex flex-1 flex-col items-center justify-center py-40  border-[#1B1F28] rounded-3xl mt-10">
            <h2 className={`${oswald.className} font-bold text-xl text-white`} >Something went wrong</h2>

            <button onClick={() => location.reload()} className="m-3 flex gap-2 rounded-full bg-[#C2F800] px-6 py-3 text-[12px] font-bold  text-black transition hover:bg-[#b5e600]">
                <MdRefresh size={17} /> <span> Please try again </span>
            </button>
        </div>
    )
}

export default ErrorPage