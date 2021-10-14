import React from "react";
import pepperoni from "./images/pepperoni.jpg";
import "./css/slice.css";

function Pepperoni() {
  return (
    <div className="Pepperoni col-4">
      <div className="card">
        <img src={pepperoni} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pepperoni Slice</h5>
          <p className="card-text">
            It's got pepperoni and it's only five dollar. What more could you
            ask for?
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $5.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Pepperoni;
