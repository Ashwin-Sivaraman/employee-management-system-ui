import React from "react";

const AddEmployee = () => {
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
          <input type="text" className="h-10 px-2 py-2 border w-96"></input>
        </div>
        <div className="items-center justify-center w-full h-14 my-4">
          <label className="block text-gray-600 text-sm font-normal my-2">
            Last Name
          </label>
          <input type="text" className="h-10 px-2 py-2 border w-96"></input>
        </div>
        <div className="items-center justify-center w-full h-14 my-4">
          <label className="block text-gray-600 text-sm font-normal my-2">
            Email
          </label>
          <input type="email" className="h-10 px-2 py-2 border w-96"></input>
        </div>
        <div className="items-center justify-center w-full h-14 space-x-4">
          <button className="rounded text-white font-semibold bg-blue-500 py-2 px-6 my-4 hover:bg-blue-900">
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
