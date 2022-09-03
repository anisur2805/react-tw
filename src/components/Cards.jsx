import React from "react";
import Double from "../assets/double.png";
import Single from "../assets/single.png";
import Triple from "../assets/triple.png";
import SingleCard from "./SingleCard";

export const Cards = () => {
    return (
        <div className="w-full bg-white lg:py-[10rem] md:py-[6rem] py-[4rem] px-4">
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
