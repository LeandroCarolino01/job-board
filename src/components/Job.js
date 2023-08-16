import React from "react";
const Job = ({ job }) => {
  return (
    <div className="job">
      <h2>{job.title}</h2>
      <h3>{job.company}</h3>
      <p>{job.description}</p>
    </div>
  );
};

export default Job;
