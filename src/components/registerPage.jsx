import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validations/validationSchema";
import * as yup from "yup";
import { useState, useEffect } from "react";
import "../assests/app.css";

export default function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhno, setUserPhno] = useState("");
  const [userProffessional, setUserProfessional] = useState("");

  
  const {
    register,
    handleSubmit,   
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const navigateRegister = useNavigate();

  const postdata = () => {
    if(handleSubmit){
      
        alert("successfully registered")

        navigateRegister("/login");
    }else{
        navigateRegister("/register");
    }
   
  };

const navigateLogin =()=>{
    navigateRegister("/login");
}

  useEffect(() => {
    localStorage.setItem("Username", JSON.stringify(userName));
    localStorage.setItem("Userpass", JSON.stringify(userPassword));
    localStorage.setItem("UserPhno", JSON.stringify(userPhno));
    localStorage.setItem("UserEmail", JSON.stringify(userEmail));
    localStorage.setItem("UserPro", JSON.stringify(userProffessional));
  }, [userName, userPassword, userPhno, userEmail, userProffessional]);

  

  return (
    <div className="container ">
      <div className="row mx-auto justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-6 col-xxl-6">
          <div className="card ">
            <div className="card-body">
              <form onSubmit={handleSubmit(postdata)}>
                <div className="form-group ">
                  <label >Name</label>
                  <input
                    {...register("name")}
                    type="text"
                    className="form-control"
                   
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  {errors.name ? (
                    <span className="text-danger  position-absolute">
                      {errors.name.message}
                    </span>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <label >Password</label>
                  <input
                    {...register("password")}
                    type="password"
                    className="form-control"
                 
                    placeholder="Password"
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                  {errors.password ? (
                    <span className="text-danger  position-absolute">
                      {errors.password.message}
                    </span>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <label >Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    
                    placeholder="Email"
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  {errors.email ? (
                    <span className="text-danger  position-absolute">
                      {errors.email.message}
                    </span>
                  ) : null}
                </div>
                <div className="form-group mt-4">
                  <label >Phone Number</label>
                  <input
                    {...register("mobilenumber")}
                    type="password"
                    className="form-control"
                   
                    placeholder="Phone Number"
                    onChange={(e) => setUserPhno(e.target.value)}
                  />
                  {errors.mobilenumber ? (
                    <span className="text-danger  position-absolute">
                      {errors.mobilenumber.message}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="form-group mt-4">
                  <label>Profession</label>               
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    {...register("profession")}
                    onChange={(e) => setUserProfessional(e.target.value)}                    
                  >
                     <option value="">select</option>                   
                    <option value="Accountant">Accountant</option>
                    <option value="Analyst">Analyst</option>
                    <option value="Manager">Manager</option>
                    <option value="Module Lead">Module Lead</option>
                    <option value="HR Head">HR Head</option>
                    <option value="Accounting Supervisor">
                      Accounting Supervisor
                    </option>
                    <option value="Regional Manager">Regional Manager</option>
                  </select>
                </div>
                {errors.profession ? (
                    <span className="text-danger  position-absolute">
                      {errors.profession.message}
                    </span>
                  ) : (
                    <></>
                  )}

               
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-sm "
                    onClick={navigateLogin}
                  >
                    Login
                  </button>
                </div>
                <div className="text-center">
                  <span>OR</span>
                </div>

                <div className="text-center">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    style={{ cursor: "pointer" }}
                    type="submit"
                   
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
