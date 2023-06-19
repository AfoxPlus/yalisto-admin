import React from "react";

export const InputSearch = () => {
  return (
    <div className="input">
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21.8965C16.7467 21.8965 21 17.6432 21 12.3965C21 7.14978 16.7467 2.89648 11.5 2.89648C6.25329 2.89648 2 7.14978 2 12.3965C2 17.6432 6.25329 21.8965 11.5 21.8965Z"
          stroke="#ADA7A7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22.8965L20 20.8965"
          stroke="#ADA7A7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input className="search" type="text" placeholder="Buscar" />
    </div>
  );
};
