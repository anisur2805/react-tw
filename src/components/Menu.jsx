import React from "react"
import { Link } from "react-scroll"
import NavLinks from "./NavLinks";

const Menu = ({ className }) => {
    const menus = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "company",
        },
        {
            id: 3,
            link: "resources",
        },
        {
            id: 4,
            link: "about",
        },
        {
            id: 5,
            link: "contact",
        },
        {
            id: 6,
            link: "pricing",
        },
    ]
    return (
        <>
            {menus.map(({ id, link }) => (
                <NavLinks key={id} link={link} />
            ))}
        </>
    )
}

export default Menu
