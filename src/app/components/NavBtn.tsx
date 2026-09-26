'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavBtn = () => {
    const pathName = usePathname()
    return (
        <>
            <li><Link className={pathName === '/workout' || pathName === '/' ? 'bg-[#1A2312] text-[#C2F800] px-5 rounded-full font-semibold' : ''} href={'/workout'}>Workout</Link></li>
            <li><Link className={pathName === '/my-plan' ? 'bg-[#1A2312] text-[#C2F800] px-5 rounded-full font-semibold' : ''} href={'/my-plan'}>My Plan</Link></li>
        </>
    )
}

export default NavBtn