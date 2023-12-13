import React from "react";

function Form({ children, onSubmit, className }) {
  const handlesubmit = async (e) => {
    e.preventDefault();
    onSubmit?.();
  };
  return (
    <form className={className} onSubmit={handlesubmit}>
      {children}
    </form>
  );
}

export default Form;
