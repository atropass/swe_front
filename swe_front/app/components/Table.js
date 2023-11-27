export default function Table({columns, entries, people = []}){
    const getPersonName = (id) => {
        const driver = people.find(driver => driver.id === id);
        console.log(driver)
        return driver ? driver.name + ' ' + driver.surname : '';
    }

    const getPersonNumber = (id) => {
        const driver = people.find(driver => driver.id === id);
        console.log(driver)
        return driver ? driver.phone_number : '';
    }

    const getRole = (entry) => {
        return entry['fueling_person_id'] ? 'Fueling' : entry['route_information'] ? 'Driving' : 'Maintenance'
    }

    const foo = {

    }

    return (
        <div className="container mx-auto mt-4">
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {entries.map((entry, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        {columns.map((key, index) => (
                            <td key={index} className={key === "status" ? entry[key] === "In progress" ? "px-4 py-2 whitespace-nowrap text-sm text-yellow-500" : entry[key] === "Done" ? "px-4 py-2 whitespace-nowrap text-sm text-green-500" : "px-4 py-2 whitespace-nowrap text-sm text-red-500" : "px-4 py-2 whitespace-nowrap text-sm text-gray-500"}>
                                {
                                    key === 'name' ? getPersonName(entry['maintenance_person_id'] || entry['fueling_person_id'] || entry['driver_id']) : key === 'role' ? getRole(entry) : key === 'contact info' ? getPersonNumber(entry['maintenance_person_id'] || entry['fueling_person_id'] || entry['driver_id']) : entry[key]
                                }
                            </td>
                        ))}
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