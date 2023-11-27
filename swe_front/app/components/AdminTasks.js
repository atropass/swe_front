'use client'
import Table from "./Table"
import { useState, useEffect } from "react";
export default function Tasks(){
    const [tasks, setTasks] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [maintenance, setMaintenance] = useState([]);
    const [fueling, setFueling] = useState([]);
    const [people, setPeople] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [formData, setFormData] = useState({
        type: "",
        personId: "",
        vehicleId: "",
        startTime: "",
        routeInformation: "",
        description: "",
        scheduledDate: "",
        maintenanceCost: 0,
        fuelQuantity: 0,
        totalCost: 0,
        gasStationName: "",
        status: 'In progress',
    });
    const [displayForm, setDisplayForm] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const maintenanceResponse = await fetch('http://127.0.0.1:4000/api/maintenance_task/index');
                const maintenanceData = await maintenanceResponse.json();
    
                const fuelingResponse = await fetch('http://127.0.0.1:4000/api/fueling_task/index');
                const fuelingData = await fuelingResponse.json();
    
                const driverResponse = await fetch('http://127.0.0.1:4000/api/driver_task/index');
                const driverData = await driverResponse.json();
    
                const combinedTasks = [...maintenanceData.data, ...fuelingData.data, ...driverData.data];
    
                console.log(combinedTasks);
                setTasks(combinedTasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
    
        fetchData();
    }, []);
    useEffect(() => {
        fetch('http://127.0.0.1:4000/api/driver/index')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setDrivers(data.data);
                setPeople(data.data);
            }).then(() => {
                fetch('http://127.0.0.1:4000/api/fueling/index')
                .then(response => response.json())
                .then(data => {
                    console.log("adafsdfsdf")
                    console.log(data);
                    setFueling(data.data);
                    setPeople(current => [...current, ...data.data]);
                }).then(() => {
                    fetch('http://127.0.0.1:4000/api/maintenance/index')
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        setMaintenance(data.data);
                        setPeople(current => [...current, ...data.data]);
                    });
                });
            });
        fetch('http://127.0.0.1:4000/api/vehicle/index')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setVehicles(data.data);
        });
    }, []);

    const columns = tasks.length > 0 ? [
        'id',
        'name',
        'role',
        'contact info',
        'status',
    ] : [];

    const getPersonsByType = () => {
        switch (formData.type) {
          case "driver":
            return drivers;
          case "maintenance":
            return maintenance;
          case "fueling":
            return fueling;
          default:
            return [];
        }
    };

    const handleFormChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    const handleFormSubmit = (e) => {
        console.log(createPayload());
        e.preventDefault();
        fetch(`http://127.0.0.1:4000/api/${formData.type}_task/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createPayload()),
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            setDisplayForm(false);
            setTasks(current => [...current, data.data]);
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    const createPayload = () => {
        switch (formData.type) {
          case "driver":
            return {
                driver_task:{
                        driver_id: formData.personId,
                        vehicle_id: formData.vehicleId,
                        start_time: formData.startTime,
                        end_time: new Date().toISOString(),
                        route_information: formData.routeInformation,
                        status: formData.status,
                        description: formData.description,
                }
            };
          case "maintenance":
            return {
                maintenance_task:{
                    maintenance_person_id: formData.personId,
                    vehicle_id: formData.vehicleId,
                    description: formData.description,
                    status: formData.status,
                    scheduled_date: formData.scheduledDate,
                    completion_date: new Date().toISOString(),
                    maintenance_cost: formData.maintenanceCost,
                }
            };
          case "fueling":
            return {
                fueling_task:{
                    fueling_person_id: formData.personId,
                    vehicle_id: formData.vehicleId,
                    fuel_quantity: formData.fuelQuantity,
                    total_cost: formData.totalCost,
                    gas_station_name: formData.gasStationName,
                    date_and_time: new Date(),
                    driver_id: "70ca7346-ec8c-4220-8774-3320b3b82bd3",
                    image_links: "google.com",
                    status: formData.status,
                }
            };
          default:
            return {};
        }
    }


    return (
        <div className="flex-1 ml-4 bg-gray-100">
            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl"
                onClick={() => setDisplayForm(true)}>
                + Add Task
                </button>
            </div>
            {console.log('tasks' + tasks)}
            {tasks && drivers ? (
                <>
                    <Table columns={columns} entries={tasks} people={people}></Table>
                    { displayForm && (
                        <form onSubmit={handleFormSubmit} className="mt-4 p-4 bg-white rounded shadow">
                            <label className="block mb-2">
                            Type:
                            <select name="type" value={formData.type} onChange={handleFormChange} className="border p-2 ml-2">
                                <option value="">Select Type</option>
                                <option value="driver">Driving</option>
                                <option value="maintenance">Maintenance</option>
                                <option value="fueling">Fueling</option>
                            </select>
                            </label>
                            { formData.type && 
                                <>
                                    <label className="block mb-2">
                                        Person:
                                    <select name="personId" value={formData.personId} onChange={handleFormChange} className="border p-2 ml-2">
                                        <option value="">Select Person</option>
                                        {
                                            getPersonsByType().map((driver) => (
                                            <option key={driver.id} value={driver.id}>
                                                {driver.name + ' ' + driver.surname}
                                            </option>
                                            ))
                                        }
                                    </select>
                                    </label>
                                    <label className="block mb-2">
                                        Vehicle:
                                    <select name="vehicleId" value={formData.vehicleId} onChange={handleFormChange} className="border p-2 ml-2">
                                        <option value="">Select Vehicle</option>
                                        {
                                            vehicles.map((vehicle) => (
                                            <option key={vehicle.id} value={vehicle.id}>
                                                {vehicle.make + ' ' + vehicle.model + ' ' + vehicle.year} 
                                            </option>
                                            ))
                                        }
                                    </select>
                                    </label>
                                    {formData.type === 'driver' && (
                                        <>
                                            <label className="block mb-2">
                                                Start Time:
                                                <input
                                                    type="datetime-local"
                                                    name="startTime"
                                                    value={formData.startTime}
                                                    onChange={handleFormChange}
                                                    className="border p-2 ml-2"
                                                />
                                            </label>
                                            <label className="block mb-2">
                                                Route Information:
                                                <input
                                                    type="text"
                                                    name="routeInformation"
                                                    value={formData.routeInformation}
                                                    onChange={handleFormChange}
                                                    className="border p-2 ml-2"
                                                />
                                            </label>
                                            <label className="block mb-2">
                                                Description:
                                                <input
                                                    type="text"
                                                    name="description"
                                                    value={formData.description}
                                                    onChange={handleFormChange}
                                                    className="border p-2 ml-2"
                                                />
                                            </label>
                                        </>
                                    )}
                                    {formData.type === 'maintenance' && (
                                        <>
                                            <label className="block mb-2">
                                                Description:
                                                <input
                                                    type="text"
                                                    name="description"
                                                    value={formData.description}
                                                    onChange={handleFormChange}
                                                    className="border p-2 ml-2"
                                                />
                                            </label>
                                            <label className="block mb-2">
                                                Scheduled Date:
                                                <input
                                                    type="date"
                                                    name="scheduledDate"
                                                    value={formData.scheduledDate}
                                                    onChange={handleFormChange}
                                                    className="border p-2 ml-2"
                                                />
                                            </label>
                                            <label className="block mb-2">
                                                Maintenance Cost:
                                                <input
                                                    type="number"
                                                    name="maintenanceCost"
                                                    value={formData.maintenanceCost}
                                                    onChange={handleFormChange}
                                                    className="border p-2 ml-2"
                                                />
                                            </label>
                                        </>
                                    )}
                                    {formData.type === 'fueling' && (
                                        <>
                                            <label className="block mb-2">
                                                Fuel Quantity:
                                                <input
                                                    type="number"
                                                    name="fuelQuantity"
                                                    value={formData.fuelQuantity}
                                                    onChange={handleFormChange}
                                                    className="border p-2 ml-2"
                                                />
                                            </label>
                                            <label className="block mb-2">
                                                Total Cost:
                                                <input
                                                    type="number"
                                                    name="totalCost"
                                                    value={formData.totalCost}
                                                    onChange={handleFormChange}
                                                    className="border p-2 ml-2"
                                                />
                                            </label>
                                            <label className="block mb-2">
                                                Gas Station Name:
                                                <input
                                                    type="text"
                                                    name="gasStationName"
                                                    value={formData.gasStationName}
                                                    onChange={handleFormChange}
                                                    className="border p-2 ml-2"
                                                />
                                            </label>
                                        </>
                                    )}
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl mt-4">Submit</button>
                            </>
                            }
                        </form>
                    )}
                </>
                ) : <p>Loading...</p>}
        </div>
    )
}