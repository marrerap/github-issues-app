import React from "react";
import { ListGroupItem } from "react-bootstrap";

function Issue(props) {
  const { title, number, created_at, user } = props.data;
  // the above line is the same as doing these 4 lines:
  // const title = props.data.title;
  // const number = props.data.number;
  // const createdAt = props.data.createdAt;
  // const user = props.data.user;
  return (
    <ListGroupItem>
      <span className="fw-bold">{title}</span>
      <div className="text-secondary">
        #{number} opened {created_at} by{" "}
        <a className="text-secondary text-decoration-none" href={user.html_url}>
          {user.login}
        </a>
      </div>
    </ListGroupItem>
  );
}

export default Issue;
