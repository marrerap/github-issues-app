import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { Container, Card } from "react-bootstrap";


function Issue(props) {
  const { id } = useParams();
  const { issues } = props;
  const issue = issues[id];

//   create solution for finding days from today


  if (!issue) {
    return <Redirect to="/issues-list" />;
  }
  return (
    <div>
      <Container>
    
          <h3 ><a href={issue.html_url}>{issue.title}</a></h3>
            <Card.Subtitle className="mb-2 text-muted">
              Issue Number: {issue.number}
              <br/>
              Date Created: {issue.created_at}
              <br/>
              Submitted by: {issue.user.login}
            </Card.Subtitle>
            <Card.Text>{issue.body}</Card.Text>
     
      </Container>
    </div>
  );
}

export default Issue;
