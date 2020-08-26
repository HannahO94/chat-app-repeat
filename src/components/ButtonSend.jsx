import React from "react";

export default function ButtonSend(props) {
  const { label, handleOnClick } = props;
  return (
    <button onClick={handleOnClick} className="btn btn-primary btn-block">
      {label}
    </button>
  );
}
