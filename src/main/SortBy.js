import React from "react";
import { Button, ButtonGroup } from 'react-bootstrap';

const SortBy = ({ handleSortAlphabetical, handleSortStargazer }) => {
  return (
    <>
      <div className="mr-2 l-h-30"><p>Sort By</p></div>
      <ButtonGroup size="sm">
        <Button variant="secondary" onClick={handleSortAlphabetical}>Sort Alphabetically</Button>
        <Button variant="secondary" onClick={handleSortStargazer}>By Most Stars</Button>
      </ButtonGroup>
    </>
  );
}

export default SortBy;