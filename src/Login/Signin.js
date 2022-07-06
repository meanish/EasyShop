import React, { useState } from "react";
import Textfield from "./Textfield";
import Snackbar from "./Snackbar";

const Signin = ({ formik }) => {
  console.log("Sigin form ");
  const { handleChange, handleSubmit } = formik;

  const [showsnacks, setShowsnacks] = useState(false);
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-10 text-xl">
        <div className="head-name mb-3">
          <h1>Email:</h1>
        </div>
        <Textfield
          type="email"
          name="email"
          onChange={handleChange}
          id="exampleInput215"
        />
      </div>
      <div className="form-group mb-10 text-xl">
        <div className="head-name mb-3">
          <h1>Password:</h1>
        </div>
        <Textfield
          type="password"
          onChange={handleChange}
          name="password"
          id="exampleInput217"
        />
      </div>

      <div className="flex  justify-between my-6">
        {/* <div class="form-group form-check">
          <input type="checkbox" id="exampleCheck2" />
          <label
            className="form-check-label inline-block text-gray-800"
            for="exampleCheck2"
          >
            Remember me
          </label>
        </div> */}
        <div className="form-check">
          <a
            href="#!"
            className="text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            onClick={() => setShowsnacks(!showsnacks)}
          >
            Forgot password?
          </a>
        </div>
      </div>
      <button
        className="border px-5 py-2 bg-blues text-white font-sans text-2xl rounded hover:bg-brown-400 hover:text-blues hover:border-blues ease-in-out duration-500"
        type="submit"
      >
        Sign In
      </button>
      <div className="remember">
        <p className="text-gray-800 mt-6 text-center">
          Not a member?
          <a
            href="#!"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
          >
            Register
          </a>
        </p>
      </div>
      {showsnacks ? <Snackbar msg="Take your time I'm waiting" /> : null}
    </form>
  );
};

export default Signin;
