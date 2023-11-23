// components/ProfileForm.js
const ProfileForm = () => {
    return (
        <div className="p-5 flex flex-col items-center justify-center">
                        <h1 className="py-8 text-black font-bold text-center text-3xl">Profile</h1> 

                     <div className="p-8 rounded-lg  w-full px-64">
                <div className=" grid grid-cols-2 gap-x-24">
                {/* <div className="mb-4">
                    <h1 className="text-2xl font-bold text-center">Profile</h1>
                </div> */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700  text-sm font-bold mb-2">Name</label>
                    <input type="text" id="name" className=" bg-gray-50 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Adilet" />
                </div>
                <div className="mb-4">
                    <label htmlFor="middlename" className="block text-gray-700 text-sm font-bold mb-2">Middle Name</label>
                    <input type="text" id="middlename" className=" bg-gray-50 appearance-none border  rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="addad" />
                </div>
                <div className="mb-4">
                    <label htmlFor="surname" className="block text-gray-700 text-sm font-bold mb-2">Surname</label>
                    <input type="text" id="surname" className=" bg-gray-50 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="addad" />
                </div>
                <div className="mb-4">
                    <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
                    <input type="tel" id="contact" className=" bg-gray-50 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="87777777777" />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                    <input type="text" id="address" className=" bg-gray-50 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Doma" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
                    <input type="email" id="email" className=" bg-gray-50 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Sobaka@bobachka.ru" />
                </div>
                </div>
                <div className="flex items-center justify-center w-full py-8">
                    <button className="text-blue-500 bg-[#e4e9ff] hover:text-blue-950 hover:bg-blue-200 duration-150 drop-shadow-sm font-bold py-2 px-8 rounded-xl focus:outline-none focus:shadow-outline" type="button">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;
