import React from "react";

const NotFound = () => {
  return (
    <div className="container ">
      <div className="row cols-1 text-center ">
        <div className=" alert alert-warning" role="alert">
          You are on wrong way! Try {""}
          <a href="/" className="alert-link">
            Home
          </a>
          . Give it a click if you want to go back.
        </div>
      </div>
    </div>
  );
};

export default NotFound;
