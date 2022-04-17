import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { service } = props;
  const { name, price, picture, description } = service;
  const navigate = useNavigate();

  const handleCheckout = () =>{
     navigate('/checkout');
  }

  return (
    <div className="card col-lg-4 col-sm-12 mb-3" style={{ width: "22rem" }}>
      <img src={picture} className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <h2>${price}</h2>
        <button onClick={handleCheckout} className="btn btn-primary mt-2">Go somewhere</button>
      </div>
    </div>
  );
};

export default Service;
