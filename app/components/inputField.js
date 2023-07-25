import React from "react";

const InputField = ({
  type = "text",
  name,
  label,
  value,
  placeholder,
  onChange,
  required = false,
  disabled = false,
}) => {
  return (
    <div className="flex-col mb-8 w-11/12">
      <label
        className="block text-white text-lg font-light mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="shadow bg-transparent text-black rounded-[7px] py-3 px-4 w-full border-4 text-white focus:blue-outline"
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;
