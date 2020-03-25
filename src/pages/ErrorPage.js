import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error-page section">
      <div className="error-container">
        <h1>Page not found 404</h1>
        <Link to="/" className="btn btn-primary">
          Go to Home page
        </Link>
      </div>
    </div>
  );
}
