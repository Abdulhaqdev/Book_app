import React from "react";

function Button({ children, type = "button", onclick, className = "" }) {
  return (
    <button
      type={type}
      onClick={() => onclick?.()}
      className={`default-btn ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
