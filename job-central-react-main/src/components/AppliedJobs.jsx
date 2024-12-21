import React, { useContext, useState } from "react";
import { AppliedJobsContext } from "../App";
import Job from "./Cards/Job";
import AppliedJob from "./Cards/AppliedJob";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const AppliedJobs = () => {
  const savedJobs = useContext(AppliedJobsContext || []);
  const [appliedJobs, setAppliedJobs] = useState(savedJobs);

  //showing all the jobs from local storage/db
  const handleShowAllJobs = () => {
    setAppliedJobs(savedJobs);
  };

  // showing only the remote jobs
  const handleShowRemoteJobs = () => {
    const remoteJobs = savedJobs.filter((sj) => sj.job_location === "remote");
    if (remoteJobs.length > 0) {
      setAppliedJobs(remoteJobs);
    } else {
      toast.error("No remote jobs to show");
    }
  };
  // showing only the onsite jobs
  const handleShowOnsiteJobs = () => {
    const onSiteJobs = savedJobs.filter((sj) => sj.job_location === "onsite");
    if (onSiteJobs.length > 0) {
      setAppliedJobs(onSiteJobs);
    } else {
      toast.error("No onsite jobs to show");
    }
  };
  return (
    <div className="my-container">
      <div className="flex gap-5 justify-end mb-4 lg:mb-8">
        <button onClick={handleShowAllJobs} className="btn-outlined">
          All jobs
        </button>
        <button onClick={handleShowRemoteJobs} className="btn-outlined">
          Remote jobs
        </button>
        <button onClick={handleShowOnsiteJobs} className="btn-outlined">
          Onsite jobs
        </button>
      </div>

      {savedJobs.length === 0 && (
        <div className="flex flex-col gap-8 items-center justify-center text-center">
          <h1>
            <span className="text-3xl font-extrabold text-gray-600">
              You have not applied for any job.
            </span>
            <br />
            <span className="title-text text-3xl">
              Go to Homepage to apply now
            </span>
          </h1>
          <Link to="/">
            <button className="btn-secondary">Go to Homepage</button>
          </Link>
        </div>
      )}
      <div>
        {appliedJobs.map((job) => (
          <AppliedJob key={job._id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
