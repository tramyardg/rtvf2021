
import React, { useState } from "react";
import { Button, Form, Col } from 'react-bootstrap';
import * as MainUtil from "./MainUtil";

const SearchForm = ({ handleSetOrgName, handleSetRepos }) => {
  const [validated, setValidated] = useState(false);
  const [orgName, setOrgName] = useState("");

  const preventRefreshOnSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
  }

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      preventRefreshOnSubmit(e);
    } else {
      preventRefreshOnSubmit(e);
      await MainUtil.fetchRepos(orgName).then((jsonResponse) => {
        handleSetRepos(jsonResponse);
      }).catch(() => {
        handleSetRepos([]);
      })
    }
    setValidated(true);
  };

  const handleSearchInput = e => {
    const org = e.target.value;
    handleSetOrgName(org);
    setOrgName(org);
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Col sm={10}>
          <Form.Label htmlFor="searchInput" srOnly>Name</Form.Label>
          <Form.Control className="mb-2" id="searchInput" name="searchInput" onChange={handleSearchInput} placeholder="Search org repo e.g. octokit" required />
        </Col>
        <Col sm={2}>
          <Button type="submit" className="mb-2">
            Search
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default SearchForm;