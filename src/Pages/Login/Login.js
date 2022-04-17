import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user1, loading1, error1] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithEmailAndPassword, user2, loading2, error2] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const [signInWithGoogle, user3, loading3, error3] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  const handleCheck = () => {
    setCheck(!check);
  };

  if (user2 || user3) {
    navigate("/home");
  }

  const handleResetPassword = async () => {
      await sendPasswordResetEmail(email);
      toast("Email is sent");
  };

  const handleFormSubmit = (event) => {
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);

    if (!check) {
      createUserWithEmailAndPassword(email, password);
    } else {
      signInWithEmailAndPassword(email, password);
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

     {
      check?
       <p
        onClick={handleResetPassword}
        className="mt-2 text-primary text-decoration-underline"
       >
        Forget password?
      </p> : ''
      }
      <p className="text-danger my-3">{error1 && error1.message}</p>
      <p className="text-danger">{error2 && error2.message}</p>
      
      <ToastContainer></ToastContainer>
      <div>
         <div className="d-flex align-items-center">
           <div className='w-50 bg-primary' style={{height:"2px"}}></div>
           <p className="px-2 pt-2">or</p>
           <div className='w-50 bg-primary' style={{height:"2px"}}></div>
         </div>
         <button 
         onClick={()=>signInWithGoogle()}
         className="btn btn-success w-50 d-block mx-auto p-2">Google sign in</button>
         <p className="text-danger text-center mt-3">{error3 && error3.message}</p>
      </div>
    </div>
  );
};

export default Login;
