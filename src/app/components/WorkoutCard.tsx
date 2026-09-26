import Image from "next/image";
import { FaClock, FaFire, FaStar } from "react-icons/fa6";
import { Workout } from "../type/type";
import { oswald } from "../layout";
import Link from "next/link";


interface WorkoutCardProps {
    work: Workout;
}

const WorkoutCard = ({ work }: WorkoutCardProps) => {
    return (
        <Link href={`/workout/${work.id}`}>
            <div className="overflow-hidden rounded-2xl border border-[#272a31] bg-[#15171c]">

                <figure>
                    <Image
                        className="max-h-80 object-cover"
                        src={work.image}
                        alt="Workout Image"
                        height={500}
                        width={500} />
                </figure>

                <div className="p-5 bg-[#20242E]">

                    <div className="mb-5 mt-3 flex gap-3">
                        {work.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#C2F800] px-3.5 py-1.5 text-[11px] font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <h2 className={`${oswald.className}text-lg font-extrabold uppercase text-white`}>
                        {work.name}
                    </h2>

                    <p className="mt-2 text-[12px] text-[#9CA3AF]">
                        {work.equipment}
                    </p>


                    <div className="mb-2 mt-3 border-b border-[#272a31]" />

                    <div className="flex items-center gap-9 text-[12px] py-2 text-[#9CA3AF]">
                        <div className="flex items-center gap-2">
                            <FaClock />
                            <span>{work.duration} min</span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-2">
                            <FaFire />
                            <span>{work.caloriesBurned} kcal</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <FaStar />
                            <span>{work.rating}</span>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;