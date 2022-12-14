import React from "react"
import laptop from "../assets/laptop.jpg"
const Analytics = () => {
    return (
        <div name="about" className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={laptop} alt="" />
                <div className="flex flex-col justify-center">
                    <p className="font-bold text-[#00df9a] ">
                        DATA ANALYTICS DASHBOARD
                    </p>
                    <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Manage Data Analytics Centrally
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum molestiae delectus culpa hic assumenda,
                        voluptate reprehenderit dolore autem cum ullam sed odit
                        perspiciatis. Doloribus quos velit, eveniet ex deserunt
                        fuga?
                    </p>
                    <button className="btn-secondary">
                        Get Started
                    </button>
                </div>
                <p></p>
            </div>
        </div>
    )
}

export default Analytics
