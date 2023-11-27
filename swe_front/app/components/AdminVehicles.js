'use client'
import {useState, useEffect} from 'react';
import Table from './Table'
export default function Vehicles(){
    const [vehicles, setVehicles]= useState([]);
    const [people, setPeople]= useState([]);
    const [formData, setFormData] = useState({
        license_plate: '',
        make: '',
        model: '',
        year: '',
        type: '',
        sitting_capacity: '',
      });
      const [displayForm, setDisplayForm] = useState(false);

    useEffect(() => {
        fetch('http://127.0.0.1:4000/api/vehicle/index')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setVehicles(data.data);
            });
        fetch('http://127.0.0.1:4000/api/driver/index')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPeople(data.data);
            });
    }, []);

    const handleFormChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:4000/api/vehicle/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(makePayload()),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setVehicles((current) => [...current, data.data]);
            setDisplayForm(false);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

    const makePayload = () => {
        return {
            vehicle: {
                license_plate: formData.license_plate,
                make: formData.make,
                model: formData.model,
                year: formData.year,
                type: formData.type,
                sitting_capacity: formData.sitting_capacity,
                latitude: 51.09184602202727,
                longitude: 71.39845426306142,
                status: 'available',
            }
        }
    }
    
    const columns = [
        "license_plate",
        "car",
        "driver",
        "year",
        "status"
    ]
    return (
        <div className="flex-1 ml-4 bg-gray-100">
            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
                <button className="text-blue-500 bg-[#e4e9ff] hover:text-blue-950 hover:bg-blue-200 duration-150 drop-shadow-sm font-bold py-2 px-8 rounded-xl focus:outline-none focus:shadow-outline">
                Vehicle Tracking
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl"
                onClick={() => setDisplayForm(true)}>
                Add Vehicle
                </button>
            </div>
            {displayForm && (
            <form onSubmit={handleFormSubmit} className="mt-4 p-4 bg-white rounded shadow">
                <label className="block mb-2">
                    License Plate:
                    <input
                    type="text"
                    name="license_plate"
                    value={formData.license_plate}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <label className="block mb-2">
                    Make:
                    <input
                    type="text"
                    name="make"
                    value={formData.make}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <label className="block mb-2">
                    Model:
                    <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <label className="block mb-2">
                    Year:
                    <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <label className="block mb-2">
                    Type:
                    <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <label className="block mb-2">
                    Sitting Capacity:
                    <input
                    type="text"
                    name="sitting_capacity"
                    value={formData.sitting_capacity}
                    onChange={handleFormChange}
                    className="border p-2 ml-2"
                    />
                </label>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl mt-4"
                >
                    Submit
                </button>
            </form>
        )}
            <Table columns={columns} entries={vehicles} people={people}></Table>
        </div>
    )
}