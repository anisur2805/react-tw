import React from "react"
import { Link } from "react-scroll"

const NavLinks = ({ className, link, onClick }) => {
    return (
        <li className={className}>
            <Link to={link} smooth duration={500} onClick={onClick} className="p-4 font-bold uppercase hover:scale-x-75 cursor-pointer">
                {link}
            </Link>
        </li>
    )
}

export default NavLinks
