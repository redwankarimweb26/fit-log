import Image from "next/image";
import Link from "next/link";
import BannerImg from '@/app/assest/banner.png'
import { oswald } from "../layout";

const Banner = () => {
    return (
        <section className="min-h-95 w-full rounded-2xl border border-[#272a31] bg-[#15171D] p-14 my-12 max-w-308 mx-auto">
            <div className="flex h-full flex-col items-center justify-between gap-8 md:flex-row">
                <div>
                    <p className="mb-5 text-[10px] font-bold mt text-[#C2F800]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className={`${oswald.className} text-4xl font-black text-white md:text-6xl my-6`}>
                        TRAIN WITH INTENT. LOG <br />
                        EVERY SET.
                    </h1>

                    <p className="my-5 text-sm  text-[#9296a1]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into today's plan, and watch the week's work add up.
                    </p>

                    <Link
                        href="/workout"
                        className="mt-5  rounded-md bg-[#C2F800] px-6 py-3 text-[12px] font-bold  text-black transition hover:bg-[#b5e600]"
                    >
                        BROWSE WORKOUTS
                    </Link>
                </div>


                <div className=" flex w-full justify-center md:w-825.5">
                    <Image
                        src={BannerImg}
                        alt="Workout "
                        width={300}
                        height={300}
                        className="h-57.5 w-auto object-contain md:h-67.5"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;