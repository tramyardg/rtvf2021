
import React, { useState } from "react";
// import './Main.css';
import { Button, Form, Col } from 'react-bootstrap';

const SearchForm = ({ setOrgName }) => {
  const [validated, setValidated] = useState(false);

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
    }
    setValidated(true);
  };

  const handleSearchInput = e => setOrgName(e.target.value);

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