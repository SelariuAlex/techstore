import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Code, test , deploy</h1>
        <p>Use your code for good, we do!</p>
        {children}
      </div>
    </div>
  );
}
