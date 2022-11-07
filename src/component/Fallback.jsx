import React from "react"

const ErrorFallback = ({ error }) => {
    return (
      <div role="alert">
        <p>Something went wrong</p>
        <pre>{error}</pre>
      </div>
    );
  };
  export default ErrorFallback;
  