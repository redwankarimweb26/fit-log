import Image from "next/image"
import FooterLogo from '../assest/logo.png'
import { oswald } from "../layout"
const Footer = () => {
    return (
        <div className="mt-6 bg-[#090A0D] shadow-sm">
            <div className="mx-auto flex max-w-308 flex-col items-center justify-center gap-4 px-2 py-7 sm:flex-row sm:justify-between sm:gap-0">

                {/* Logo + Text */}
                <div className="flex items-center gap-1.5">
                    <Image
                        src={FooterLogo}
                        alt="Footer"
                        height={22}
                        width={22}
                        className="-rotate-44 object-cover"
                    />

                    <h2 className={`${oswald.className} text-[14px] font-bold text-white`}>
                        FITLOG
                    </h2>
                </div>

                {/* Copyright */}
                <p className="text-center text-[12px] text-[#6B7280]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </div>
    );
};

export default Footer