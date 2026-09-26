import Image from "next/image"
import Logo from '@/app/assest/logo.png'
import { oswald } from '@/app/layout'
import NavBtn from "./NavBtn"
import NavPlanBtn from "./NavPlanBtn"

const Navbar = () => {



    const navLink =
        <>
            <NavBtn></NavBtn>

        </>

    return (
        <div className="border-b border-[#1C1F26] bg-[#0C0D10]">
            <div className="navbar  mx-auto max-w-308 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <a className={`btn text-xl`}>
                        <Image
                            src={Logo}
                            alt="Logo"
                            height={15}
                            width={20}
                        ></Image>
                        <span className={`${oswald.className}`}> Fit Log</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">

                    <NavPlanBtn></NavPlanBtn>
                </div>
            </div>
        </div>
    )
}

export default Navbar