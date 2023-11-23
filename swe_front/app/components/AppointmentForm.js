
const AppointmentForm = () => {
    return (
        <div className="p-5 flex flex-col items-center justify-center">
            <h1 className="py-8 text-black font-bold text-center text-3xl">Add Appointment</h1> 
            <div className="p-8 rounded-lg  w-full px-64">
                <div className=" grid grid-cols-2 gap-x-24">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700  text-sm font-bold mb-2">Name</label>
                    <input type="text" id="name" className=" bg-gray-50 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Adilet" />
                </div>
                <div className="mb-4">
                    <label htmlFor="middlename" className="block text-gray-700 text-sm font-bold mb-2">ID</label>
                    <input type="text" id="middlename" className=" bg-gray-50 appearance-none border  rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="addad" />
                </div>
                <div className="mb-4">
                    <label htmlFor="surname" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                    <input type="text" id="surname" className=" bg-gray-50 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="addad" />
                </div>
                <div className="mb-4">
                    <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">Time</label>
                    <input type="tel" id="contact" className=" bg-gray-50 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="87777777777" />
                </div>
                <div className="mb-4">
                        <label htmlFor="reason" className="block text-gray-700 text-sm font-bold mb-2">Reason</label>
                        <select id="reason" className=" bg-gray-50 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option>Fuelling</option>
                            <option>Maintenance</option>
                        </select>
                </div>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" type="button">
                        Cancel
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" type="button">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};
export default AppointmentForm;


