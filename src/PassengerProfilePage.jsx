import React from "react";
import Sidebar from "./components/Sidebar";

const PassengerProfilePage = () => {

  const passenger = {
    id: "PAS-101",
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    phone: "9876543210",
    age: 24,
    gender: "Male",
    city: "Delhi",
    status: "Active"
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          👤 Passenger Profile
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Manage your account details
        </p>

        <div className="bg-white shadow rounded-xl p-8">

          <div className="flex items-center gap-6 mb-8">

            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
              {passenger.name.charAt(0)}
            </div>

            <div>

              <h2 className="text-3xl font-bold">
                {passenger.name}
              </h2>

              <p className="text-gray-500">
                Passenger ID : {passenger.id}
              </p>

              <span className="inline-block mt-2 bg-green-100 text-green-700 px-4 py-1 rounded-full">
                {passenger.status}
              </span>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-50 p-5 rounded-lg">
              <p className="text-gray-500">Full Name</p>
              <h3 className="text-xl font-semibold">
                {passenger.name}
              </h3>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg">
              <p className="text-gray-500">Email Address</p>
              <h3 className="text-xl font-semibold">
                {passenger.email}
              </h3>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg">
              <p className="text-gray-500">Phone Number</p>
              <h3 className="text-xl font-semibold">
                {passenger.phone}
              </h3>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg">
              <p className="text-gray-500">Age</p>
              <h3 className="text-xl font-semibold">
                {passenger.age}
              </h3>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg">
              <p className="text-gray-500">Gender</p>
              <h3 className="text-xl font-semibold">
                {passenger.gender}
              </h3>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg">
              <p className="text-gray-500">City</p>
              <h3 className="text-xl font-semibold">
                {passenger.city}
              </h3>
            </div>

          </div>

          <div className="mt-8 flex gap-4">

            <button
              onClick={() =>
                alert("Edit profile functionality will be connected to the backend.")
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              ✏ Edit Profile
            </button>

            <button
              onClick={() =>
                alert("Password change functionality will be connected to the backend.")
              }
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
            >
              🔒 Change Password
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PassengerProfilePage;