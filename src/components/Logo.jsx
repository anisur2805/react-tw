import React from "react"

const Logo = ({classname}) => {
    return (
        <h1 className={`w-full text-3xl font-bold text-[#00df9a] uppercase ${classname ? classname : ''}`}>
            React.
        </h1>
    )
}

export default Logo
