import React from "react";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="errorPage"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.538rem",
      }}
    >
      <h1>Oops!</h1>
      <p>
        <Link to={`/`} style={{ textDecoration: "none", color: "#0A327B" }}>
          Click to back home
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
