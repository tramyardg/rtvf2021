import React from "react";
import { Card, CardColumns } from 'react-bootstrap';

const Cards = ({ repos }) => {
  return (
    <CardColumns>
      {repos.map((item, i) =>
        <Card key={i}>
          <Card.Body>
            <Card.Title><a href={item.html_url} target="_blank" rel="noreferrer">{item.name}</a></Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted float-start">Stargazers: {item.stargazers_count}</small><br />
            <small className="text-muted float-end">Watchers: {item.watchers_count}</small>
          </Card.Footer>
        </Card>
      )}
    </CardColumns>
  );
}

export default Cards;
