'use client'
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import Vehicles from "@/app/components/AdminVehicles";
import Drivers from "@/app/components/AdminDrivers";
import Maintenance from "@/app/components/AdminMaintenance";
import Fuelers from "@/app/components/AdminFuelers";
import Tasks from "@/app/components/AdminTasks";
import MapContainer from "@/app/components/MapContainer";
import { useState } from "react";

export default function Page(){
    const [category, setCategory] = useState("Vehicles"); // ["Vehicles", "Drivers", "Maintenance", "Fuelers", "Tasks"]
    const headerSections = [
        {title: "Profile", href: "/pages/admin/profile"},
        {title: "Services", href: "/pages/admin/"},
        {title: "About Us", href: "/pages/driver/about"},
        {title: "Contacts", href: "/pages/driver/contacts"},
        {title: "Appointment", href: "/pages/driver/appointment"},
    ];
    const sidebarSections = [
        {title: "Vehicles", href: "/pages/admin/vehicles"},
        {title: "Drivers", href: "/pages/admin/drivers"},
        {title: "Maintenance", href: "/pages/admin/maintenance"},
        {title: "Fuelers", href: "/pages/admin/fuelers"},
        {title: "Tasks", href: "/pages/admin/tasks"},
    ];
    const onCategorySelect = (selectedCategory) => {
        setCategory(selectedCategory.target.innerText);
        console.log(category);
      };
      const renderMainContent = () => {
        switch (category) {
            case "Vehicles":
                return <Vehicles />;
            case "Drivers":
                return <Drivers />;
            case "Maintenance":
                return <Maintenance />;
            case "Fuelers":
                return <Fuelers />;
            case "Tasks":
                return <Tasks />;
            default:
                return <Vehicles />;
            }
        };
    return(
        <>
            <Header sections={headerSections} />
            <div className="container mx-auto p-6 bg-gray-100 min-h-screen flex">
                <Sidebar sections={sidebarSections} onCategorySelect={onCategorySelect} activeService={category}/>
                {renderMainContent()}
            </div>
            <MapContainer vehicles={[{id: 1, latitude: 51.09059758568362, longitude: 71.39845426306142 },]}/>
        </>
    );
}