import React, { Children } from "react";
import "../../sass/_global.scss";

export default function Container({ children }) {
  return <div className="container">{children}</div>;
}
