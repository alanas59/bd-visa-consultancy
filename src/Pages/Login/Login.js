import React, { useState } from "react";

const Login = () => {
  const [check, setCheck] = useState(false);

  const handleCheck = () =>{
      setCheck(!check);
  }

  return (
    <div className="w-50 mx-auto my-5 border p-4">
      <h2>Please {check?'Login':'Registration'}</h2>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input onClick={handleCheck} type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Already have an account?
          </label>
        </div>
        {
          check ? (
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        ) : (
          <button type="submit" class="btn btn-primary">
            Registration
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
