import React, { useState, useEffect } from "react";
import { Form, Col, Container, Row } from "react-bootstrap";
import JobList from "./JobList";

const mockData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCo",
    description:
      "We are seeking a skilled Frontend Developer to join our dynamic team...",
    location: "San Francisco, CA",
    framework: "React",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "DesignFirm",
    description:
      "We're looking for a creative UI/UX Designer to create amazing user experiences...",
    location: "New York, NY",
    framework: "React",
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "WebDev Solutions",
    description:
      "Join our team as a Full Stack Engineer to build innovative web applications...",
    location: "Seattle, WA",
    framework: "Vue",
  },
  {
    id: 4,
    title: "Frontend Engineer",
    company: "TechStart",
    description:
      "TechStart is searching for a Frontend Engineer with a passion for Angular...",
    location: "Austin, TX",
    framework: "Angular",
  },
  {
    id: 5,
    title: "React Native Developer",
    company: "AppWorks",
    description:
      "AppWorks is hiring a React Native Developer to craft cross-platform mobile apps...",
    location: "Los Angeles, CA",
    framework: "React",
  },
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
              <Form.Control
                type="text"
                placeholder="Search a job"
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
