import React from "react";
import EmployeeService from "../services/EmployeeService";
import { useState } from "react";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center w-full h-14 my-4">
          <label className="block text-gray-600 text-sm font-normal my-2">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 px-2 py-2 border w-96"
          ></input>
        </div>
        <div className="items-center justify-center w-full h-14 my-4">
          <label className="block text-gray-600 text-sm font-normal my-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 px-2 py-2 border w-96"
          ></input>
        </div>
        <div className="items-center justify-center w-full h-14 my-4">
          <label className="block text-gray-600 text-sm font-normal my-2">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 px-2 py-2 border w-96"
          ></input>
        </div>
        <div className="items-center justify-center w-full h-14 space-x-4">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-blue-500 py-2 px-6 my-4 hover:bg-blue-900"
          >
            Save
          </button>
          <button className="rounded text-white font-semibold bg-red-500 py-2 px-6 my-4 hover:bg-red-900">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
