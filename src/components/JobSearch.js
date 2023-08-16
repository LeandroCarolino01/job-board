import React, { useState, useEffect } from "react";
import { Form, Col, Container, Row } from "react-bootstrap";
import JobList from "./JobList";

const mockData = [
  { id: 1, title: "Job 1", company: "Company A", description: "Description A" },
  { id: 2, title: "Job 2", company: "Company B", description: "Description B" },
  { id: 3, title: "Job 3", company: "Company C", description: "Description C" },
  // Add more mock job data here
];

const JobSearch = () => {
  const [jobs, setJobs] = useState(mockData);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // Instead of fetching from URL, use mockData directly
    setJobs(mockData);
  }, []);

  // search for the jobs in the input field
  const searchJobs = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchValue(searchValue);
  };

  return (
    <Container>
      <h1 className="text-center">Job Search</h1>
      <Row className="justify-content-center">
        <Col xs={6}>
          <Form>
            <Form.Group controlId="simpleInput" as={Col}>
              <Form.Label>Search Jobs</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter text"
                onChange={searchJobs}
                value={searchValue}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <JobList jobs={jobs} searchValue={searchValue} />
    </Container>
  );
};

export default JobSearch;
