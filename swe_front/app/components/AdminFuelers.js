import Table from "./Table"
export default function Fuelers(){
    const fuelers = [
        {
            id: 1,
            name: "Fuelling Personnel 1",
            carGovNum: "123456789",
            contact: "+777777777",
        },
        {
            id: 2,
            name: "Fuelling Personnel 2",
            carGovNum: "123456789",
            contact: "+777777777",
        },
        {
            id: 3,
            name: "Fuelling Personnel 3",
            carGovNum: "123456789",
            contact: "+777777777",
        },
        {
            id: 4,
            name: "Fuelling Personnel 4",
            carGovNum: "123456789",
            contact: "+777777777",
        },
        {
            id: 5,
            name: "Fuelling Personnel 5",
            carGovNum: "123456789",
            contact: "+777777777",
        },
        {
            id: 6,
            name: "Fuelling Personnel 6",
            carGovNum: "123456789",
            contact: "+777777777",
        },
        {
            id: 7,
            name: "Fuelling Personnel 7",
            carGovNum: "123456789",
            contact: "+777777777",
        },
    ]
    const columns = [
        'id',
        'name',
        'car number',
        'contact info',
    ]
    return (
        <div className="flex-1 ml-4 bg-gray-100">
            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
                + Add Fuelling Personnel
                </button>
            </div>
            <Table columns={columns} entries={fuelers}></Table>
        </div>
    )
}