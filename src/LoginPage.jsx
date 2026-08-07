import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("admin");
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    city: "",
    license: "",
    experience: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= LOGIN =================

  const login = (e) => {
    e.preventDefault();

    if (
      role === "admin" &&
      loginData.username === "admin" &&
      loginData.password === "admin123"
    ) {
      localStorage.setItem("role", "admin");

      localStorage.setItem(
        "loggedAdmin",
        JSON.stringify({
          name: "Administrator",
          email: "admin@bms.com",
          phone: "9999999999",
        })
      );

      navigate("/Dashboard");
      return;
    }

    if (
      role === "driver" &&
      loginData.username === "driver" &&
      loginData.password === "driver123"
    ) {
      localStorage.setItem("role", "driver");

      localStorage.setItem(
        "loggedDriver",
        JSON.stringify({
          name: "Rahul Kumar",
          age: "32",
          gender: "Male",
          email: "driver@bms.com",
          phone: "9876543210",
          city: "Delhi",
          license: "DL123456789",
          experience: "8 Years",
        })
      );

      navigate("/driver-dashboard");
      return;
    }

    if (
      role === "passenger" &&
      loginData.username === "passenger" &&
      loginData.password === "passenger123"
    ) {
      localStorage.setItem("role", "passenger");

      localStorage.setItem(
        "loggedPassenger",
        JSON.stringify({
          name: "Amit Sharma",
          age: "24",
          gender: "Male",
          email: "passenger@bms.com",
          phone: "9123456789",
          city: "Noida",
        })
      );

      navigate("/passenger-dashboard");
      return;
    }

    alert("Invalid Username or Password");
  };

  // ================= REGISTER =================

  const registerUser = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    alert("Registration Successful!");

    setIsRegister(false);

    setFormData({
      name: "",
      age: "",
      gender: "",
      email: "",
      phone: "",
      city: "",
      license: "",
      experience: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex">

      {/* LEFT SIDE */}

      <div className="hidden lg:flex w-1/2 items-center justify-center p-16 text-white">

        <div className="max-w-xl">

          <h1 className="text-5xl font-extrabold leading-tight">
            Bus Fleet
            <br />
            Management System
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-8">
            Manage buses, drivers, passengers, routes and ticket bookings
            from one centralized dashboard.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-12">

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-xl">
                Fleet Control
              </h3>

              <p className="mt-2 text-slate-300">
                Monitor and manage buses efficiently.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-xl">
                Route Planning
              </h3>

              <p className="mt-2 text-slate-300">
                Create and maintain optimized routes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-xl">
                Ticket Booking
              </h3>

              <p className="mt-2 text-slate-300">
                Book and manage passenger tickets.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-xl">
                Analytics
              </h3>

              <p className="mt-2 text-slate-300">
                View reports and business insights.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="flex-1 flex items-center justify-center p-8">

        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10">

          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800">
              Welcome Back
            </h2>

            <p className="text-slate-500 mt-2">
              Sign in to your account
            </p>
          </div>

          {/* ROLE */}

          <div className="grid grid-cols-3 gap-3 mt-8">

            <button
              onClick={() => setRole("admin")}
              className={`py-3 rounded-xl font-semibold transition ${
                role === "admin"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              Admin
            </button>

            <button
              onClick={() => setRole("driver")}
              className={`py-3 rounded-xl font-semibold transition ${
                role === "driver"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              Driver
            </button>

            <button
              onClick={() => setRole("passenger")}
              className={`py-3 rounded-xl font-semibold transition ${
                role === "passenger"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              Passenger
            </button>

          </div>

          {!isRegister ? (

            <form onSubmit={login} className="mt-8">

              <label className="text-sm font-medium text-slate-700">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                placeholder="Enter username"
                className="w-full mt-2 mb-5 border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <label className="text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="relative mt-2">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter password"
                  className="w-full border border-slate-300 rounded-xl p-3 pr-20 focus:ring-2 focus:ring-blue-600 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-blue-600 font-semibold"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

              <div className="flex justify-between items-center mt-5 text-sm">

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() =>
                      setRememberMe(!rememberMe)
                    }
                  />
                  Remember Me
                </label>

                <button
                  type="button"
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

              <button
                type="submit"
                className="mt-8 w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl text-white font-bold"
              >
                Login
              </button>

              <div className="mt-8 bg-slate-50 border rounded-xl p-5">

                <h3 className="text-sm font-semibold text-slate-700 mb-3">
                  Demo Credentials
                </h3>

                {role === "admin" && (
                  <>
                    <p className="text-sm">
                      <strong>Username:</strong> admin
                    </p>
                    <p className="text-sm">
                      <strong>Password:</strong> admin123
                    </p>
                  </>
                )}

                {role === "driver" && (
                  <>
                    <p className="text-sm">
                      <strong>Username:</strong> driver
                    </p>
                    <p className="text-sm">
                      <strong>Password:</strong> driver123
                    </p>
                  </>
                )}

                {role === "passenger" && (
                  <>
                    <p className="text-sm">
                      <strong>Username:</strong> passenger
                    </p>
                    <p className="text-sm">
                      <strong>Password:</strong> passenger123
                    </p>
                  </>
                )}

              </div>

              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="w-full mt-6 text-blue-600 font-semibold hover:text-blue-700 transition"
              >
                Create New Account
              </button>

            </form>

          ) : (

            <form onSubmit={registerUser} className="mt-8">

              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Create Account
              </h3>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleRegisterChange}
                placeholder="Full Name"
                className="w-full border rounded-xl p-3 mb-4"
              />

              {role !== "admin" && (
                <>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleRegisterChange}
                    placeholder="Age"
                    className="w-full border rounded-xl p-3 mb-4"
                  />

                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleRegisterChange}
                    className="w-full border rounded-xl p-3 mb-4"
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </>
              )}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleRegisterChange}
                placeholder="Email Address"
                className="w-full border rounded-xl p-3 mb-4"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleRegisterChange}
                placeholder="Phone Number"
                className="w-full border rounded-xl p-3 mb-4"
              />

              {role !== "admin" && (
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleRegisterChange}
                  placeholder="City"
                  className="w-full border rounded-xl p-3 mb-4"
                />
              )}

              {role === "driver" && (
                <>
                  <input
                    type="text"
                    name="license"
                    value={formData.license}
                    onChange={handleRegisterChange}
                    placeholder="License Number"
                    className="w-full border rounded-xl p-3 mb-4"
                  />

                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleRegisterChange}
                    placeholder="Driving Experience"
                    className="w-full border rounded-xl p-3 mb-4"
                  />
                </>
              )}

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleRegisterChange}
                placeholder="Password"
                className="w-full border rounded-xl p-3 mb-4"
              />

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleRegisterChange}
                placeholder="Confirm Password"
                className="w-full border rounded-xl p-3 mb-6"
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
              >
                Register Account
              </button>

              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="w-full mt-5 text-blue-600 font-semibold hover:text-blue-700"
              >
                Already have an account? Login
              </button>

            </form>

          )}

          <div className="mt-10 border-t pt-6 text-center">
            <p className="text-slate-500 text-sm">
              Bus Fleet Management System
            </p>

            <p className="text-slate-400 text-xs mt-1">
              Version 1.0.0 • © 2026 All Rights Reserved
            </p>
          </div>

        </div>

      </div>

    </div>
  );

};

export default LoginPage;