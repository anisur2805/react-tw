import React, { useEffect, useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import Logo from "./Logo"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import Menu from "./Menu"

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    const navHandler = () => {
        setNav(!nav)
    }

    useEffect(() => {}, [darkMode])

    const darkModeHandler = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <Logo />
            <ul className="hidden md:flex">
                <Menu />
            </ul>
            <div onClick={navHandler} className="block md:hidden">
                {nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>
            <ul
                className={
                    nav
                        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 pt-[30px]"
                        : "fixed left-[-100%] top-0 w-[-100%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 pt-[30px]"
                }
            >
                <Logo classname="pl-[1rem]" />
                <Menu className="border-b border-gray-600" />
            </ul>

            <div
                onClick={darkModeHandler}
                className="absolute right-[20px] top-[30px] cursor-pointer ease-in-out duration-300"
            >
                {darkMode ? (
                    <MdDarkMode size={30} />
                ) : (
                    <MdLightMode size={30} />
                )}
            </div>
        </div>
    )
}
