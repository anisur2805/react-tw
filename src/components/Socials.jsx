import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Socials = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "#",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "#",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "#",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "./resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ]
    return (
        <div className="flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, download, style }) => (
                    <li
                        key={id}
                        className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 bg-gray-500 ${
                            style ? style : ""
                        }`}
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Socials
