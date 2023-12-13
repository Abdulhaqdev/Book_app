import React from "react";

function CheckAuth({ userRole, role, children }) {
  console.log(role);
  console.log(userRole);
  return role.includes(userRole) ? children : <h1>Not found</h1>;
}

export default CheckAuth;
