import React from "react";
import Double from "../assets/double.png";
import Single from "../assets/single.png";
import Triple from "../assets/triple.png";
import SingleCard from "./SingleCard";

export const Cards = () => {
    return (
        <div className="w-full bg-white lg:pt-[6rem] md:pt-[4rem] pt-[3rem] lg:pb-[4rem] md:pb-[3rem] pb-[2rem] px-4">
            <h1 className="w-full lg:text-4xl md:text-3xl text-2xl text-[#000] font-bold text-center mb-12">Pricing <span className="text-[#00df9a]">Plans</span></h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <SingleCard
                    img={Single}
                    price={149}
                    userType="Single User"
                    features={[
                        "500 GB Storage",
                        "1 Granted User",
                        "Send up to 2 GB",
                    ]}
                />
                <SingleCard
                    img={Double}
                    price={290}
                    userType="Double User"
                    features={[
                        "500 GB Storage",
                        "1 Granted User",
                        "Send up to 2 GB",
                        "Down up to 4 GB",
                    ]}
                />
                <SingleCard
                    img={Triple}
                    price={350}
                    userType="Triple User"
                    features={[
                        "500 GB Storage",
                        "1 Granted User",
                        "Send up to 2 GB",
                    ]}
                />
            </div>
        </div>
    )
}
