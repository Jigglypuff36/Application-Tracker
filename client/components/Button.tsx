// ./components/Button.js
import React, { useState } from "react";
function Button(props) {

  return (
    <button className="btn btn-primary">{props.children}</button>
  );
}
export default Button;