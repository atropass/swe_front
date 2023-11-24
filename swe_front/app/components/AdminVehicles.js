import Table from './Table'
export default function Vehicles(){
    const vehicles = [
        {
            id: 1,
            govNum: "123456789",
            car: "Car 1",
            mileage: "Mileage 1",
            driver: "Driver 1",
            driversAssigned: "Drivers Assigned 1"
        },
        {
            id: 2,
            govNum: "123456789",
            car: "Car 1",
            mileage: "Mileage 1",
            driver: "Driver 1",
            driversAssigned: "Drivers Assigned 1"
        },
        {
            id: 3,
            govNum: "123456789",
            car: "Car 1",
            mileage: "Mileage 1",
            driver: "Driver 1",
            driversAssigned: "Drivers Assigned 1"
        },
        {
            id: 4,
            govNum: "123456789",
            car: "Car 1",
            mileage: "Mileage 1",
            driver: "Driver 1",
            driversAssigned: "Drivers Assigned 1"
        },
        {
            id: 5,
            govNum: "123456789",
            car: "Car 1",
            mileage: "Mileage 1",
            driver: "Driver 1",
            driversAssigned: "Drivers Assigned 1"
        },
        {
            id: 6,
            govNum: "123456789",
            car: "Car 1",
            mileage: "Mileage 1",
            driver: "Driver 1",
            driversAssigned: "Drivers Assigned 1"
        },
        {
            id: 7,
            govNum: "123456789",
            car: "Car 1",
            mileage: "Mileage 1",
            driver: "Driver 1",
            driversAssigned: "Drivers Assigned 1"
        },
    ]
    return (
        <div className="flex-1 ml-4 bg-gray-100">
            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
                <button className="text-blue-500 bg-[#e4e9ff] hover:text-blue-950 hover:bg-blue-200 duration-150 drop-shadow-sm font-bold py-2 px-8 rounded-xl focus:outline-none focus:shadow-outline">
                Vehicle Tracking
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
                Add Vehicle
                </button>
            </div>
            <Table vehicles={vehicles}></Table>
        </div>
    )
}