import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function IssuesList(props) {
  const { issues } = props;
  
  return (
    <Container>
      <h1>GitHub Issues Clone </h1>

      <ListGroup variant="flush">
        {issues.map((issue, index) => {
          return (
            <ListGroup.Item variant="dark" key={index}>
              <Link to={`/issue/${index}`}>{issue.title}</Link>&nbsp; 
              {issue.labels.map((label, labelIndex) => {
                  const labelColor = label.color
                  return(                    
                      <label key={labelIndex} style={{color: `#${labelColor}`, margin: '5px', borderWidth: '1px',  borderStyle: 'solid', borderRadius: '25px' }} >&nbsp;{label.name}&nbsp;</label> 
                    //   console.log(issueName.name)
                  )
                  
              })}
              <br/>
              #{issue.number} opened {issue.created_at} by {issue.user.login}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
}

export default IssuesList;
