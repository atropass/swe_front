import Table from "./Table"
export default function Drivers(){
    const drivers = [
        {
            id: 1,
            name: "Driver 1",
            carGovNum: "123456789",
            contact: "+777777777",
            report: "Report 1",
        },
        {
            id: 2,
            name: "Driver 2",
            carGovNum: "123456789",
            contact: "+777777777",
            report: "Report 2",
        },
        {
            id: 3,
            name: "Driver 3",
            carGovNum: "123456789",
            contact: "+777777777",
            report: "Report 3",
        },
        {
            id: 4,
            name: "Driver 4",
            carGovNum: "123456789",
            contact: "+777777777",
            report: "Report 4",
        },
        {
            id: 5,
            name: "Driver 5",
            carGovNum: "123456789",
            contact: "+777777777",
            report: "Report 5",
        },
        {
            id: 6,
            name: "Driver 6",
            carGovNum: "123456789",
            contact: "+777777777",
            report: "Report 6",
        },
        {
            id: 7,
            name: "Driver 7",
            carGovNum: "123456789",
            contact: "+777777777",
            report: "Report 7",
        },
    ]
    const columns = [
        'id',
        'name',
        'car number',
        'contact info',
        'report',
    ]
    return (
        <div className="flex-1 ml-4 bg-gray-100">
            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
                + Add Driver
                </button>
            </div>
            <Table columns={columns} entries={drivers}></Table>
        </div>
    )
}