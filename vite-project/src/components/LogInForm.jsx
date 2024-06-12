import React, { useState } from "react";
import ValidationHelper from "./../util/ValidationHelper";
import toast from "react-hot-toast";
import ButtonSpinner from "./ButtonSpinner.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LogInForm = () => {

  let [submit, setSubmit] = useState(false);

  let navigate = useNavigate();
  
  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get("email");
    
    if (ValidationHelper.isEmpty(email)) {
      toast.error("Email Required");
    } else {
      setSubmit(true);
      //API call
    let res = await axios.post(ValidationHelper.API_Base + "/user-login", {UserEmail:email});

      if (res.data["msg"]==="success"){
        toast.success(res.data["data"]);
        sessionStorage.setItem("email", email);
        navigate("/verify");
      }else {
        toast.error("Request Failed");
        setSubmit(false);
      }


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
                disabled={submit}
                type="submit"
                className="btn btn-danger w-100 mt-2"
              >
                {
                  submit?(<ButtonSpinner/>):("submit")
                }

              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
