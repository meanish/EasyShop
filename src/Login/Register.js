import React from "react";
import Textfield from "./Textfield";

const Register = ({ formik }) => {
  const { handleChange, handleSubmit } = formik;
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <div className="form-group mb-6 flex justify-around items-center gap-4 text-xl w-1/2">
          <div className="head-name ">
            <h1>First Name:</h1>
          </div>
          <Textfield
            name="fname"
            onChange={handleChange}
            id="exampleInput123"
            aria-describedby="emailHelp123"
          />
        </div>
        <div className="form-group mb-6 flex justify-around items-center gap-4 text-xl w-1/2">
          <div className="head-name ">
            <h1>Last Name:</h1>
          </div>
          <Textfield
            type="text"
            name="lname"
            onChange={handleChange}
            id="exampleInput1234"
            aria-describedby="emailHelp123"
          />
        </div>
      </div>
      <div className="flex my-6">
        <div className="form-group mb-6 flex justify-around items-center gap-4 text-xl w-1/2">
          <div className="head-name ">
            <h1>Address:</h1>
          </div>
          <Textfield
            type="text"
            name="address"
            onChange={handleChange}
            id="exampleInput125"
          />
        </div>
        <div className="form-group mb-6 flex justify-around items-center gap-4 text-xl w-1/2">
          <div className="head-name ">
            <h1>Phone No:</h1>
          </div>
          <Textfield
            type="number"
            name="phoneno"
            onChange={handleChange}
            id="exampleInput126"
          />
        </div>
      </div>
      <div className="gender-check flex gap-4 justify-center">
        <h1 className="text-xl">Gender:</h1>
        <div className="form-check">
          <Textfield
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blues  checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            for="flexRadioDefault1"
          >
            Male
          </label>
        </div>
        <div className="form-check">
          <Textfield
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blues checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            for="flexRadioDefault2"
          >
            Female
          </label>
        </div>
      </div>
      <div className="flex my-6">
        <div className="form-group mb-6 flex justify-around items-center gap-4 text-xl w-1/2">
          <div className="head-name ">
            <h1>Email:</h1>
          </div>
          <Textfield
            type="email"
            name="email"
            onChange={handleChange}
            id="exampleInput215"
          />
        </div>
        <div className="form-group mb-6 flex justify-around items-center gap-4 text-xl w-1/2">
          <div className="head-name ">
            <h1>Password:</h1>
          </div>
          <Textfield
            type="password"
            onChange={handleChange}
            name="password"
            id="exampleInput217"
          />
        </div>
      </div>
      <div className="to-submit m-auto text-center ">
        <button
          className="border px-5 py-2 bg-blues text-white font-sans text-2xl rounded hover:bg-brown-400 hover:text-blues hover:border-blues ease-in-out duration-500"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
