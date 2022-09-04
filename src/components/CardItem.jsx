import React from "react";

const CardItem = ({ userType, img, price, features, classname }) => {
    return (
        <div className={`w-full shadow-xl flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300`}>
            <img
                src={img}
                className="w-20 mx-auto mt-[-3rem] bg-transparent"
                alt=""
            />
            <h2 className="text-2xl font-bold text-center py-8">{userType}</h2>
            <p className="text-center font-bold text-4xl">${price}</p>
            <div className="text-center font-medium">
                {features.map((feature, index) => { 
                    return (
                        <p
                            key={feature.toString()}
                            className={`${index === 0 ? 'py-2 mx-8 border-b mt-8' : 'py-2 mx-8 border-b'}`}
                        >
                            {feature}
                        </p>
                    )
                })}
            </div>
            <button className="btn-primary">
                Get Started
            </button>
        </div>
    )
}

export default CardItem
