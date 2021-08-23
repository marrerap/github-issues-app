import React, { useEffect, useState } from "react";
import Issue from "./Issue";

function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/create-react-app/issues")
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
      });
  }, []);

  return (
    <div>
      {issues.map((issue) => {
        return <Issue key={issue.id} data={issue} />;
      })}
    </div>
  );
}

export default IssueList;
