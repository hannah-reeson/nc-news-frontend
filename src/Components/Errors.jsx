import React from "react";

const Errors = props => {
  return (
    <div>
      <h2>Opps Something Went Wrong...</h2>
      <p>{props.location.state.msg}</p>
    </div>
  );
};

export default Errors;
