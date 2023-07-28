import React from "react";

const Error = ({message}) => {
    return (
      <div className="error-message">
        <h2 className="error-message">
          {message}
        </h2>
      </div>
    );
}

export default Error