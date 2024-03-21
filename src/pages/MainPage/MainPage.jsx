import React, { useState } from "react";
import "./MainPage.css";
import axios from "axios";
import { baseUrl } from "../../utils/urls";
const MainPage = () => {
  const [smileProtein, setProtein] = useState("");
  const [smilesDrug, setSmilesDrug] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/generate-alternate-drug/`,{
        smiles_notation_protein: smileProtein,
        smiles_notation_drug: smilesDrug,
      })
      .then((response) => {
        console.log(response.data);
      },(error)=>{
        console.log(error)
      });
  };
  return (
    <div classname="landing__pg_main">
      <h1>Drug Discovery </h1>
      <div className="drugs__cards__display">
        <form onSubmit={handleSubmit}>
          <label>Smiles Notation for protein</label>
          <input
            value={smileProtein}
            onChange={(e) => {
              setProtein(e.target.value);
            }}
            type="text"
          />
          <label>Smiles notation of inhibitor</label>
          <input
            value={smilesDrug}
            onChange={(e) => {
              setSmilesDrug(e.target.value);
            }}
            type="text"
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MainPage;
