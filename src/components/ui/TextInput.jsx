import React from "react";

function TextInput({
  placeholder = "",
  type = "text",
  name = "",
  onChange,
  defauletValue = "",
  className = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      defaultValue={defauletValue}
      onChange={(e) => onChange?.(e.target.value)}
      className={`text-input ${className}`}
    />
  );
}

export default TextInput;
