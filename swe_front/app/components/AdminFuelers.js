'use client'
import {useState, useEffect} from 'react';
import Table from "./Table"
export default function Fuelers(){
    const [fuelers, setFuelers]= useState([]);
    const [formData, setFormData] = useState({
        name: '',
        middle_name: '',
        surname: '',
        address: '',
        email: '',
        phone_number: '',
      });
    const [displayForm, setDisplayForm] = useState(false);
    

    useEffect(() => {
        fetch('http://127.0.0.1:4000/api/fueling/index')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setFuelers(data.data);
            });
    }, []);

    const columns = [
        'id',
        'name',
        'address',
        'contact info',
    ]
    const handleFormChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:4000/api/fueling/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(makePayload()),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setFuelers((current) => [...current, data.data]);
            setDisplayForm(false);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

    const makePayload = () => {
        return {
            fueling_person: {
                name: formData.name,
                middle_name: formData.middle_name,
                surname: formData.surname,
                address: formData.address,
                email: formData.email,
                phone_number: formData.phone_number,
            },
        }
    }

    return (
        <div className="flex-1 ml-4 bg-gray-100">
            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl"
                onClick={() => setDisplayForm(true)}>
                + Add Fuelling Personnel
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
                        Email:
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="border p-2 ml-2"
                        />
                    </label>
                    <label className="block mb-2">
                        Phone Number:
                        <input
                        type="tel"
                        name="phone_number"
                        value={formData.phone_number}
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
            <Table columns={columns} entries={fuelers} people={fuelers}></Table>
        </div>
    )
}