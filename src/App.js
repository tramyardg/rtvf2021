import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main/main.css";
import { Spinner } from "react-bootstrap";
import SearchForm from "./main/SearchForm";
import SortBy from "./main/SortBy";
import Cards from "./main/Cards";

const App = () => {
  const [orgName, setOrgName] = useState("");
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <SearchForm
          handleSetOrgName={setOrgName}
          handleSetRepos={setRepos}
          handleSetIsLoading={setIsLoading}
        />
      </div>
      <div className="row mb-3 ">
        <p className="mt-2">Listing repositories for the organization: <strong>{orgName}</strong></p>
      </div>
      <div className="row mb-3 ">
        <SortBy />
      </div>
      <div className="row mb-3 ">
        {isLoading ?
          <div className="text-center">
            <Spinner animation="border" />
          </div> :
          <Cards repos={repos} />
        }
      </div>
    </div>
  );
}

export default App;
