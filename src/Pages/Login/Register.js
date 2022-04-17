import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  const navigate = useNavigate();

  if(user){
     navigate('/home');
  }

  const handleFormSubmit = (event) =>{
      const email = event.target.email.value;
      const password = event.target.password.value;
      createUserWithEmailAndPassword(email, password)

      event.preventDefault();

  }
  return (
    <div className="w-50 mx-auto my-5 border p-4">
      <h2>Please Registration</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="exampleInputPassword1"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      
      <p className="text-danger mt-3">
          {error && error.message}
      </p>

      <p className="mt-2">
        Already have an account?<Link className="ms-1" to="/login">Please Login</Link>
      </p>
    </div>
  );
};

export default Register;
