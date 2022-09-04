import React from "react"
import person1 from "../assets/1.avif"
import person2 from "../assets/2.avif"
import person3 from "../assets/3.avif"
import person4 from "../assets/4.avif"
const persons = [
    {
        personName: "Kristen Ramos",
        email: "kristen.ramos@example.com",
        imageUrl: person1,
    },
    {
        personName: "Floyd Miles",
        email: "floyd.miles@example.com",
        imageUrl: person2,
    },
    {
        personName: "Courtney Henry",
        email: "courtney.henry@example.com",
        imageUrl: person3,
    },
    {
        personName: "Ted Fox",
        email: "ted.fox@example.com",
        imageUrl: person4,
    },
]

const FirstLastOddEven = () => {
    return (
        <div className="max-w-sm mx-auto p-4">
            <ul className="p-6 divide-y divide-slate-200 shadow-lg rounded-sm">
                {persons.map((person, index) => (
                    <li
                        key={index.toString()}
                        className="flex py-4 first:pt-0 last:pb-0"
                        // className={`${index} flex py-4 first:pt-0 last:pb-0`}
                    >
                        <img
                            className="h-12 w-12 rounded-full"
                            src={person.imageUrl}
                            alt={person.personName}
                        />
                        <div className="ml-3 overflow-hidden">
                            <p className="text-sm font-medium text-slate-900">
                                {person.personName}
                            </p>
                            <p className="text-sm truncate text-slate-900">
                                {person.email}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FirstLastOddEven
