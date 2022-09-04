import React from "react"
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa"
import Logo from "./Logo";

export const Footer = () => {
    return (
        <>
            <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                    <Logo />
                    <p className="py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae accusantium et culpa. Fugiat, facere aperiam.
                    </p>
                    <div className="flex justify-between md:w-[75%] my-6">
                        <FaDribbbleSquare size={30} />
                        <FaFacebookSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                    </div>
                </div>

                <div className="lg:col-span-2 flex justify-between mt-6">
                    <div>
                        <h6 className="font-medium text-gray-400">Solutions</h6>
                        <ul>
                            <li className="py-2 text-sm">Analytics</li>
                            <li className="py-2 text-sm">Marketing</li>
                            <li className="py-2 text-sm">Commerce</li>
                            <li className="py-2 text-sm">Insights</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-medium text-gray-400">Support</h6>
                        <ul>
                            <li className="py-2 text-sm">Pricing</li>
                            <li className="py-2 text-sm">Documentation</li>
                            <li className="py-2 text-sm">Guides</li>
                            <li className="py-2 text-sm">API Status</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-medium text-gray-400">Company</h6>
                        <ul>
                            <li className="py-2 text-sm">About</li>
                            <li className="py-2 text-sm">Blog</li>
                            <li className="py-2 text-sm">Jobs</li>
                            <li className="py-2 text-sm">Press</li>
                            <li className="py-2 text-sm">Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-medium text-gray-400">Legal</h6>
                        <ul>
                            <li className="py-2 text-sm">Claim</li>
                            <li className="py-2 text-sm">Policy</li>
                            <li className="py-2 text-sm">Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#00df9a] justify-center font-medium text-black h-16 flex items-center">
                &copy; 2022. All right reserved.
            </div>
        </>
    )
}
