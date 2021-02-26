import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main/Main.css";
import SearchForm from "./main/SearchForm";
import SortBy from "./main/SortBy";

const App = () => {
  const [orgName, setOrgName] = useState("");
  console.log(orgName);
  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <SearchForm setOrgName={setOrgName} />
      </div>
      <div className="row mb-3 ">
        <p className="mt-2">Listing repositories for the organization: <strong>{orgName}</strong></p>
      </div>
      <div className="row mb-3 ">
        <SortBy />
      </div>
    </div>
  );
}

export default App;
