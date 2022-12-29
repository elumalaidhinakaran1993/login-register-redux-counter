import React, { useState} from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations/validationSchema";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const navigateDashboard = useNavigate();
  const navigateRegister = useNavigate();

  const registerForm = () => {
    navigateRegister("/register");
  };


  const formSubmitHandler = (data) => {
   

    console.log(data);

    const logeedUser = JSON.parse(localStorage.getItem("UserEmail"));
    const password = JSON.parse(localStorage.getItem("Userpass"));

    console.log(logeedUser);
    console.log(password);
    if (userEmail === logeedUser && userPassword === password) {
      navigateDashboard("/dashboard");
    }else{
       setError(true);

    }
  };

  
  return (
    <div className="container ">
      <div className="row mx-auto justify-content-center align-items-center min-vh-100">
        <div className="col-5 col-sm-5 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="card ">
            <div className="card-body">
              <form onSubmit={handleSubmit(formSubmitHandler)}>
                <div className="form-outline ">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                   
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  {errors.email ? (
                    <div className="text-danger  position-absolute">
                      {errors.email.message}
                    </div>
                  ) : null}
                </div>

                <div className="form-outline  mt-4">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    {...register("password")}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                  {errors.password ? (
                    <div className="text-danger  position-absolute">
                      {errors.password.message}
                    </div>
                  ) : null}
                </div>

                <div className="text-center  mt-4">
                  <button type="submit" className="btn btn-outline-primary btn-sm">
                    Login
                  </button>
                </div>

                <div className="text-center">
                  <span>OR</span>
                </div>

                <div className="text-center ">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => registerForm()}
                    style={{ cursor: "pointer" }}
                  >
                    Register
                  </button>
                </div>

                {error === true &&(<>
<div className="text-center text-danger">


                <p>
                INCORRECT PASSWORD OR EMAIL

                </p>
                
</div>
                 
                </>)}
              
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
