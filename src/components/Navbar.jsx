import React, { useEffect, useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import Logo from "./Logo"
import { MdDarkMode, MdLightMode } from "react-icons/md"

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    const navHandler = () => {
        setNav(!nav)
    }

    const darkModeHandler = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        // const html = document.getElementsByTagName('html')
        // console.log(html) 
        // html.classList.add("dark")
        // return () => {
        //     html.classList.remove("dark")
        // }
    }, [])
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <Logo />
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
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
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Company</li>
                <li className="p-4 border-b border-gray-600">Resources</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4">Contact</li>
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
