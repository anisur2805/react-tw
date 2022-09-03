import React from "react";

const SingleCard = ({ userType, img, price, features, classname }) => {
    return (
        <div className={`w-full shadow-xl flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300`}>
            <img
                src={img}
                className="w-20 mx-auto mt-[-3rem] bg-transparent"
                alt=""
            />
            <h2 className="text-2xl font-bold text-center py-8">{userType}</h2>
            <p className="text-center font-bold text-4xl mb-4">${price}</p>
            <div className="text-center font-medium">
                {features.map((feature, index) => {
                    return (
                        <p
                            key={feature.toString()}
                            className={`py-2 mx-8 border-b`}
                        >
                            {feature}
                        </p>
                    )
                })}
            </div>
            <button className="font-medium rounded-md bg-[#00df9a] w-[200px] mt-6 mx-auto py-3">
                Get Started
            </button>
        </div>
    )
}

export default SingleCard
