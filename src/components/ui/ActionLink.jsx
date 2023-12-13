import React from "react";
import { Link } from "react-router-dom";

export default function ActionLInk({ path, children }) {
  return (
    <Link className="action-link" to={path}>
      {" "}
      {children}
    </Link>
  );
}
