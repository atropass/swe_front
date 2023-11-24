import Link from "next/link";

export default function Header({ sections }){
    return (
        <header className="flex items-center justify-between bg-white shadow px-6 h-16">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex">
                    <input 
                        className="py-2 text-black pl-4 pr-3 w-72 rounded-l-full focus:outline-none border border-r-0 border-gray-300" 
                        placeholder="Search driver/Maintenance Person..."
                    />
                    <button className="bg-red-500 rounded-r-full text-black px-6 py-2 focus:outline-none hover:bg-red-600 transition-colors">
                        Search
                    </button>
                </div>
                <nav className="flex space-x-6 mr-6 text-black">
                    {sections.map((section) => (
                        <Link key={section.title} href={section.href} className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                            {section.title.toUpperCase()}
                        </Link>
                    ))}
                    <button className="bg-red-500 rounded px-6 py-2 text-white focus:outline-none hover:bg-red-600 transition-colors">
                        Log Out
                    </button>
                </nav>
            </div>
        </header>
    );
}