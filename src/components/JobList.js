import React from "react";
import { Card } from "react-bootstrap";

const JobList = ({ jobs, searchValue }) => {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  const filteredJobs = jobs.filter((job) => {
    const lowerCaseTitle = job.title.toLowerCase().replace(/\s/g, "");
    const lowerCaseCompany = job.company.toLowerCase().replace(/\s/g, "");
    const lowerCaseDescription = job.description
      .toLowerCase()
      .replace(/\s/g, "");

    return (
      lowerCaseTitle.includes(lowerCaseSearchValue) ||
      lowerCaseCompany.includes(lowerCaseSearchValue) ||
      lowerCaseDescription.includes(lowerCaseSearchValue)
    );
  });

  return (
    <div>
      {filteredJobs.map((job) => (
        <Card key={job.id} className="mt-3">
          <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {job.company}
            </Card.Subtitle>
            <Card.Text>{job.description}</Card.Text>
            <Card.Text>{job.location}</Card.Text>
            <Card.Text>{job.framework}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default JobList;
