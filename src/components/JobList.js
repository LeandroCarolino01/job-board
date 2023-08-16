import React from "react";
import { Card } from "react-bootstrap";

const JobList = ({ jobs, searchValue }) => {
  const filteredJobs = jobs.filter((job) => {
    const lowerCaseTitle = job.title.toLowerCase();
    const lowerCaseCompany = job.company.toLowerCase();
    const lowerCaseDescription = job.description.toLowerCase();
    return (
      lowerCaseTitle.includes(searchValue) ||
      lowerCaseCompany.includes(searchValue) ||
      lowerCaseDescription.includes(searchValue)
    );
  });

  return (
    <div>
      {filteredJobs.map((job) => (
        <Card key={job.id}>
          <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {job.company}
            </Card.Subtitle>
            <Card.Text>{job.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default JobList;
