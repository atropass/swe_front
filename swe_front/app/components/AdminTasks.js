'use client'
import Table from "./Table"
import { useState, useEffect } from "react";
export default function Tasks(){
    const [tasks, setTasks] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:4000/api/maintenance_task/index')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setTasks(data.data);
        }).then(() => {
            fetch('http://127.0.0.1:4000/api/driver/index')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setDrivers(data.data);
            }).then(() => {
                fetch('http://127.0.0.1:4000/api/vehicle/index')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setVehicles(data.data);
                });
            });
        });
    }, []);

    console.log(tasks)

    const columns = tasks.length > 0 ? [
        'id',
        'name',
        'role',
        'contact info',
        'status',
    ] : [];

    return (
        <div className="flex-1 ml-4 bg-gray-100">
            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
                + Add Task
                </button>
            </div>
            {console.log('tasks' + tasks)}
            {tasks ? <Table columns={columns} entries={tasks} people={drivers}></Table> : <p>Loading...</p>}
        </div>
    )
}