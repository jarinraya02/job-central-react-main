import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Cards/Category";
import Job from "./Cards/Job";
import { CategoryContext, JobsContext } from "../App";
import person from "../assets/professional_3.png";

const Home = () => {
  // const { jobCategory, jobs } = useLoaderData();
  const jobCategory = useContext(CategoryContext);
  const allJobs = useContext(JobsContext);
  const [jobs, setJobs] = useState(allJobs.slice(0, 4));

  const handleShowAllJobs = () => {
    setJobs(allJobs);
    // setJobs(jobsData);
  };
  return (
    <div>
      <section className="my-container md:flex items-center justify-between">
        <div className="flex flex-col justify-between lg:h-[423px]">
          <h1 className="font-extrabold text-3xl lg:text-7xl mb-2 object-cover">
            Drawing Closer <br />
            to the Job of <br />
            <span className="title-text">Your Dreams</span>
          </h1>
          <p className="text-lg text-gray-700 mb-2 md:w-3/4">
            Discover a vast array of career possibilities, spanning numerous
            industries and roles, accompanied by insights. Unleash the potential
            of your future and embark on a journey to secure your dream job.
          </p>

          <Link to="/">
            <button className="btn-primary mt-2 md:mt-auto">Get started</button>
          </Link>
        </div>
        <img
          className="object-cover mx-auto md:mx-0"
          src={person}
          alt="professional"
        />
      </section>
      <section className="my-container">
        <div className="text-center mb-2">
          <h1 className="font-extrabold text-3xl lg:text-5xl mb-2">
            Job Category List
          </h1>
          <p className="text-gray-700 text-lg">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="md:flex items-start justify-between">
          {jobCategory.map((category) => (
            <Category key={category._id} category={category}></Category>
          ))}
        </div>
      </section>
      <section className="my-container">
        <div className="text-center mb-8">
          <h1 className="font-extrabold text-3xl lg:text-5xl mb-2">
            Featured Jobs
          </h1>
          <p className="text-gray-700 text-lg">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="jobs-container">
          {jobs.map((job) => (
            <Job key={job._id} job={job}></Job>
          ))}
        </div>
        <div className="flex justify-center">
          {jobs.length === 4 && (
            <button onClick={handleShowAllJobs} className="btn-primary">
              Show all jobs
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
