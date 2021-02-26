import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from "./main/SearchForm";

const App = () => {
  const [orgName, setOrgName] = useState("");
  console.log(orgName);
  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <SearchForm setOrgName={setOrgName} />
      </div>
    </div>
  );
}

export default App;
