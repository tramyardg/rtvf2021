import React from "react";
import { Button, ButtonGroup } from 'react-bootstrap';

const SortBy = ({ handleSortAlphabetical, handleSortStargazer, isError }) => {
  return (
    <>
      <div className="mr-2 l-h-30"><p>Sort By</p></div>
      <ButtonGroup size="sm">
        <Button variant="secondary" disabled={isError} onClick={handleSortAlphabetical}>Sort Alphabetically</Button>
        <Button variant="secondary" disabled={isError} onClick={handleSortStargazer}>By Most Stars</Button>
      </ButtonGroup>
    </>
  );
}

export default SortBy;