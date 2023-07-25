import React from "react";

const Error = ({message}) => {
    return (
      <div className="error-message">
        <h2 className="error-message">Sorry, you went down the wrong path!</h2>
        <h2 className="error-message">
          Please check your {message} and try again!
        </h2>
      </div>
    );
}

export default Error