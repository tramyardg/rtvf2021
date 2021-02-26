import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main/main.css";
import SearchForm from "./main/SearchForm";
import SortBy from "./main/SortBy";
import Cards from "./main/Cards";

const App = () => {
  const [orgName, setOrgName] = useState("");
  const [repos, setRepos] = useState([]);
  
  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <SearchForm handleSetOrgName={setOrgName} handleSetRepos={setRepos} />
      </div>
      <div className="row mb-3 ">
        <p className="mt-2">Listing repositories for the organization: <strong>{orgName}</strong></p>
      </div>
      <div className="row mb-3 ">
        <SortBy />
      </div>
      <div className="row mb-3 ">
        <Cards />
      </div>
    </div>
  );
}

export default App;
