import React from "react";

export const SpinnerLoader = () => {
  return (
    <div className="container-spinner">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
