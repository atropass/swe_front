export default function Table({vehicles}){
    return (
        <div className="container mx-auto mt-4">
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                    <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Gov.Num
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Car
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Car Mileage
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Driver
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Drivers Assigned
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                    </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {vehicles.map((vehicle, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        {vehicle.govNum}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                        {vehicle.car}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                        {vehicle.mileage}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                        {vehicle.driver}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                        {vehicle.driversAssigned}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">
                            Edit
                        </a>
                        <a href="#" className="text-red-600 hover:text-red-900">
                            Delete
                        </a>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
      );
}