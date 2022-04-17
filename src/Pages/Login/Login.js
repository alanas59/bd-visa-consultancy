import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import auth from "../../firebase.init";

const Login = () => {
  const [check, setCheck] = useState(false);
  const [createUserWithEmailAndPassword, user1, loading1, error1] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithEmailAndPassword, user2, loading2, error2] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleCheck = () => {
    setCheck(!check);
  };

   if(user2){
      navigate('/home');
   }


  const handleFormSubmit = (event) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    if (!check) {
      createUserWithEmailAndPassword(email, password);
    } 
    else {
      signInWithEmailAndPassword(email, password)
    }

    event.preventDefault();
  };

  return (
    <div className="w-50 mx-auto my-5 border p-4">
      <h2>Please {check ? "Login" : "Registration"}</h2>
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
        <div className="mb-3 form-check">
          <input
            onClick={handleCheck}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Already have an account?
          </label>
        </div>
        {check ? (
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        ) : (
          <button type="submit" className="btn btn-primary">
            Registration
          </button>
        )}
      </form>
      <p className="text-danger">{error1 && error1.message}</p>
      <p className="text-danger">{error2 && error2.message}</p>
    </div>
  );
};

export default Login;
