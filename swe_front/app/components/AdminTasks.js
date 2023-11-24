import Table from "./Table"
export default function Tasks(){
    const tasks = [
        {
            id: 1,
            name: "Task 1",
            role: "Role 1",
            contact: "+777777777",
            status: "In progress",
        },
        {
            id: 2,
            name: "Task 2",
            role: "Role 2",
            contact: "+777777777",
            status: "In progress",
        },
        {
            id: 3,
            name: "Task 3",
            role: "Role 3",
            contact: "+777777777",
            status: "In progress",
        },
        {
            id: 4,
            name: "Task 4",
            role: "Role 4",
            contact: "+777777777",
            status: "In progress",
        },
        {
            id: 5,
            name: "Task 5",
            role: "Role 5",
            contact: "+777777777",
            status: "In progress",
        },
        {
            id: 6,
            name: "Task 6",
            role: "Role 6",
            contact: "+777777777",
            status: "In progress",
        },
        {
            id: 7,
            name: "Task 7",
            role: "Role 7",
            contact: "+777777777",
            status: "In progress",
        },
    ]
    const columns = [
        'id',
        'name',
        'role',
        'contact info',
        'status',
    ]
    return (
        <div className="flex-1 ml-4 bg-gray-100">
            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
                + Add Task
                </button>
            </div>
            <Table columns={columns} entries={tasks}></Table>
        </div>
    )
}