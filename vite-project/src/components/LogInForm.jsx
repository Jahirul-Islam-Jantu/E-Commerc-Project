import React, { useState } from "react";
import ValidationHelper from "./../util/ValidationHelper";
import toast from "react-hot-toast";

const LogInForm = () => {

  let [submit, setSubmit] = useState(false);
  
  const onSubmit = (e) => {
    e.preventDefault();
    let formDate = new FormData(e.target);
    let email = formDate.get("email");
    
    if (ValidationHelper.isEmpty(email)) {
      toast.error("Email Required");
    } else {
      setSubmit(true);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="cols-md-4">
          <div className="card">
            <form onSubmit={onSubmit} className="p-4">
              <label>Your Email Address</label>
              <input name="email" type="email" className="form-control mt-1" />
              <button
                disabled="submit"
                type="submit"
                className="btn btn-danger w-100 mt-2"
              >
                {" "}
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
