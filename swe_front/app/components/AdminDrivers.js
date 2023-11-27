'use client'
import Table from "./Table"
import {useState, useEffect} from 'react';
export default function Drivers(){
    const [drivers, setDrivers]= useState([]);
    const [vehicles, setVehicles]= useState([]);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        middle_name: '',
        government_id: '',
        driving_license_code: '',
        address: '',
        phone_number: '',
        email: '',
        vehicle_id: '',
    });
    const [displayForm, setDisplayForm] = useState(false);
    useEffect(() => {
        fetch('http://127.0.0.1:4000/api/driver/index')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDrivers(data.data);
            });
        fetch('http://127.0.0.1:4000/api/vehicle/index')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setVehicles(data.data);
            });
    }, []);

    const columns = [
        'id',
        'name',
        'car number',
        'contact info',
        'report',
    ]
    const handleFormChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:4000/api/driver/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(makePayload()),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setDrivers((current) => [...current, data.data]);
            setDisplayForm(false);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

    const makePayload = () => {
        return {
            driver: {
                name: formData.name,
                middle_name: formData.middle_name,
                surname: formData.surname,
                government_id: formData.government_id,
                driving_license_code: formData.driving_license_code,
                address: formData.address,
                phone_number: formData.phone_number,
                email: formData.email,
                vehicle_id: formData.vehicle_id,
            },
        };
    }
    return (
        <div className="flex-1 ml-4 bg-gray-100">
            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl"
                onClick={() => setDisplayForm(true)}>
                + Add Driver
                </button>
            </div>
            {displayForm && (
            <form onSubmit={handleFormSubmit} className="mt-4 p-4 bg-white rounded shadow">
                <label className="block mb-2">
                    Name:
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <label className="block mb-2">
                    Surname:
                    <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <label className="block mb-2">
                    Middle Name:
                    <input
                    type="text"
                    name="middle_name"
                    value={formData.middle_name}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <label className="block mb-2">
                    Government ID:
                    <input
                    type="text"
                    name="government_id"
                    value={formData.government_id}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <label className="block mb-2">
                    Driving License Code:
                    <input
                    type="text"
                    name="driving_license_code"
                    value={formData.driving_license_code}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <label className="block mb-2">
                    Address:
                    <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <label className="block mb-2">
                    Phone Number:
                    <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <label className="block mb-2">
                    Email:
                    <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <label className="block mb-2">
                    Vehicle:
                    <select
                    name="vehicle_id"
                    value={formData.vehicle_id}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    >
                    <option value="">Select Vehicle</option>
                    {vehicles.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.id}>
                        {vehicle.make} {vehicle.model} ({vehicle.year})
                        </option>
                    ))}
                    </select>
                </label>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl mt-4"
                >
                    Submit
                </button>
            </form>
        )}
            <Table columns={columns} entries={drivers} people={drivers} vehicles={vehicles}></Table>
        </div>
    )
}