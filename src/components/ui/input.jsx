import React, { useState } from "react";



const Input = ({ label, id, value, onChange,required, ...props }) => {
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (required && (!value || value.toString().trim() === "")) {
      setError(`${label} is required`);
    } else {
      setError("");
    }
  };

  return (
    <div className="relative">
  <input
    id={id}
    value={value}
    onChange={onChange}
    onBlur={handleBlur}
    className="block px-4 pb-3 pt-5 w-full text-lg font-bold text-gray-900 bg-transparent rounded border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=" "
    {...props}
  />
  <label
    htmlFor={id}
    className="absolute text-lg font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 origin-[0] bg-white dark:bg-gray-dark px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
  >
    {label}
  </label>
 
</div>

  );
};

export default Input;
