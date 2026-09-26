import Image from "next/image"
import FooterLogo from '../assest/logo.png'
import { oswald } from "../layout"
const Footer = () => {
    return (
        <div className="bg-[#090A0D] shadow-sm mt-6">
            <div className=" pt-7 pb-7 flex justify-between max-w-308 mx-auto">
                <div className="flex gap-1.5 pl-2">
                    <Image
                        src={FooterLogo}
                        alt=" Footer"
                        height={22}
                        width={22}
                        className="object-cover -rotate-44"
                    >

                    </Image>
                    <h2 className={`${oswald.className}  text-[14px] font-bold text-white`}>FITLOG</h2>
                </div>
                <p className="text-[12px] text-[#6B7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    )
}

export default Footer