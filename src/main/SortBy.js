import React from "react";
import { Button, ButtonGroup } from 'react-bootstrap';

const SortBy = () => {
  return (
    <>
      <div className="mr-2 l-h-30"><p>Sort By</p></div>
      <ButtonGroup size="sm">
        <Button variant="secondary">Sort Alphabetically</Button>
        <Button variant="secondary">By Most Stars</Button>
      </ButtonGroup>
    </>
  );
}

export default SortBy;