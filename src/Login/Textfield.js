import React from "react";
import { useField, ErrorMessage } from "formik";

const Textfield = (props) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="relative">
      <input
        className={`form-control block px-3 py-1.5 text-base  font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          w-full
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          ${meta.touched && meta.error && "is-valid"}`}
        type="text"
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="text-red-500 absolute top-10 text-sm"
      />
    </div>
  );
};

export default Textfield;
