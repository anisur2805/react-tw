import React from "react"
import chitChat from "../assets/chitchat.svg"

const ChitChat = () => {
    return (
        <div className="bg-white w-full p-8 flex">
            <div className="bg-white max-w-sm mx-auto shadow-lg rounded-lg p-6 flex items-center space-x-4">
                <div className="shrink-0">
                    <img
                        className="w-12 h-12"
                        src={chitChat}
                        alt="Chit Chat Logo"
                    />
                </div>
                <div className="">
                    <h1 className="font-medium text-black text-2xl">
                        ChitChat
                    </h1>
                    <p className="text-gray-500">You have a new message!</p>
                </div>
            </div>
        </div>
    )
}

export default ChitChat
