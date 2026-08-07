import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const SettingsPage = () => {

  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@busfleet.com",
    phone: "9876543210",
  });

  const [password, setPassword] = useState({
    old: "",
    new: "",
    confirm: "",
  });

  const [settings, setSettings] = useState({
    notification: true,
    booking: true,
    payment: true,
  });

  const updateProfile = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully");
  };

  const changePassword = (e) => {
    e.preventDefault();

    if (password.new !== password.confirm) {
      alert("New Password and Confirm Password do not match");
      return;
    }

    alert("Password Changed Successfully");

    setPassword({
      old: "",
      new: "",
      confirm: ""
    });
  };

  const logout = () => {
    alert("Logged Out Successfully");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="text-slate-500 mt-2 mb-8">
          Manage your account and system preferences
        </p>

        {/* Profile Section */}

        <div className="bg-white shadow rounded-xl p-6 mb-8">

          <h2 className="text-xl font-bold text-slate-800 mb-6">
            Admin Profile
          </h2>

          <form
            onSubmit={updateProfile}
            className="grid grid-cols-3 gap-5"
          >

            <input
              type="text"
              value={profile.name}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  name: e.target.value
                })
              }
              placeholder="Full Name"
              className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-700"
            />

            <input
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  email: e.target.value
                })
              }
              placeholder="Email"
              className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-700"
            />

            <input
              type="text"
              value={profile.phone}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  phone: e.target.value
                })
              }
              placeholder="Phone"
              className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-700"
            />

            <button
              className="bg-slate-800 hover:bg-slate-700 text-white rounded-lg p-3"
            >
              Save Profile
            </button>

          </form>

        </div>

        {/* Password Section */}

        <div className="bg-white shadow rounded-xl p-6 mb-8">

          <h2 className="text-xl font-bold text-slate-800 mb-6">
            Change Password
          </h2>

          <form
            onSubmit={changePassword}
            className="grid grid-cols-3 gap-5"
          >

            <input
              type="password"
              placeholder="Old Password"
              value={password.old}
              onChange={(e) =>
                setPassword({
                  ...password,
                  old: e.target.value
                })
              }
              className="border border-slate-300 rounded-lg p-3"
            />

            <input
              type="password"
              placeholder="New Password"
              value={password.new}
              onChange={(e) =>
                setPassword({
                  ...password,
                  new: e.target.value
                })
              }
              className="border border-slate-300 rounded-lg p-3"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={password.confirm}
              onChange={(e) =>
                setPassword({
                  ...password,
                  confirm: e.target.value
                })
              }
              className="border border-slate-300 rounded-lg p-3"
            />

            <button
              className="bg-slate-800 hover:bg-slate-700 text-white rounded-lg p-3"
            >
              Change Password
            </button>

          </form>

        </div>

        {/* System Settings */}

        <div className="bg-white shadow rounded-xl p-6 mb-8">

          <h2 className="text-xl font-bold text-slate-800 mb-6">
            System Settings
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between items-center">
              <span className="text-slate-700">
                Booking System
              </span>

              <input
                type="checkbox"
                checked={settings.booking}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    booking: e.target.checked
                  })
                }
              />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-700">
                Payment System
              </span>

              <input
                type="checkbox"
                checked={settings.payment}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    payment: e.target.checked
                  })
                }
              />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-700">
                Notifications
              </span>

              <input
                type="checkbox"
                checked={settings.notification}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    notification: e.target.checked
                  })
                }
              />
            </div>

          </div>

        </div>

        {/* System Information */}

        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-xl font-bold text-slate-800 mb-6">
            System Information
          </h2>

          <div className="grid grid-cols-3 gap-5">

            <div>
              <p className="text-slate-500">
                Application
              </p>
              <h3 className="font-bold text-slate-800">
                Bus Fleet Management System
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Version
              </p>
              <h3 className="font-bold text-slate-800">
                Version 1.0.0
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Server Status
              </p>
              <h3 className="font-bold text-green-600">
                Online
              </h3>
            </div>

          </div>

        </div>

        <button
          onClick={logout}
          className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>

  );

};

export default SettingsPage;