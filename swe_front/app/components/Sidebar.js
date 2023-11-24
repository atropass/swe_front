'use client'
import Link from "next/link";

export default function Sidebar( {sections, activeService, onCategorySelect} ){
    return(
        <div className="w-1/4 bg-white p-4 rounded-2xl">
            <ul>
                {sections.map((section) => (
                    <li key={section.title}
                        className={`w-full text-black text-left p-2 my-2 transition-colors duration-150 rounded-lg ${activeService === section.title ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
                    >
                        <span className=" hover:cursor-pointer" onClick={onCategorySelect}>{section.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}