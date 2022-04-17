import React, { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import auth from "../../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

  if (user1 || user2) {
    navigate("/home");
  }

  const handlePasswordReset = async () => {
    const email = emailRef.current.value;
    if(!email){
      alert('Please give your email!');
    }
    else{
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }

  };

  const handleFormSubmit = (event) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    event.preventDefault();
  };
  return (
    <div className="w-50 mx-auto my-5 border p-4">
      <h2>Please login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            ref={emailRef}
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
            ref={passwordRef}
            className="form-control"
            name="password"
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Login
        </button>
      </form>
      <Link onClick={handlePasswordReset} to="" className="text-primary">
        Forget Password?
      </Link>

      <p className="text-danger mt-3">{error1 && error1.message}</p>

      <p className="">
        New to BD Visa?
        <Link className="ms-1" to="/register">
          Please Register
        </Link>
      </p>

      {/* google signin */}
      <div>
        <div className="d-flex align-items-center">
          <div className="w-50 bg-primary" style={{ height: "2px" }}></div>
          <p className="px-2 pt-2">or</p>
          <div className="w-50 bg-primary" style={{ height: "2px" }}></div>
        </div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-success w-50 d-block mx-auto p-2"
        >
          Google sign in
        </button>
        <p className="text-danger text-center mt-3">
          {error2 && error2.message}
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
