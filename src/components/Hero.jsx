import React from "react"
import Typed from "react-typed"

const Hero = () => {
    return (
        <div className="text-white bg-black">
            <div className="max-w-[700px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4 md:px-0">
                <p className="text-[#00df9a] font-bold p-2">
                    {" "}
                    GROWING WITH DATA ANALYTICS
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold pd:py-6">
                    Grow with data.
                </h1>
                <div className="flex items-center justify-center py-2 font-bold">
                    <p className="md:text-2xl text=xl font-bold">
                        Fast, flexible financing for
                    </p>
                    <Typed
                        className="text-[#00df9a] pl-2 md:text-2xl text=xl font-bold"
                        strings={["BTB", "BTC", "SASS"]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    ></Typed>
                </div>
                <p className="md:text-2xl text=xl font-bold text-gray-500">
                    Monitor your data analytics to increase revenue for BTB,
                    BTC, & SASS platforms.
                </p>
                <button className="btn-primary">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Hero
