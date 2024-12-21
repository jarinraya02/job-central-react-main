import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { addToDb, getStoredJobs } from "../utils/fakeDB";
const ViewDetails = () => {
  const job = useLoaderData();
  const {
    _id,
    job_title,
    job_description,
    job_responsibility,
    experience,
    salary,
    phone,
    email,
    address,
    education_requirement,
  } = job;

  // Adding items to local storage
  const handleAddToDb = (id) => {
    const appliedJobs = getStoredJobs();
    if (appliedJobs.includes(id)) {
      toast.error("You have already applied for this job");
    } else {
      toast.success("applied");
      addToDb(id);
    }
  };

  return (
    <div className="my-container lg:flex gap-4">
      <div className="flex flex-col gap-4 lg:w-2/3 mb-4 lg:mb-0">
        <p>
          <span className="font-extrabold">Job Description: </span>
          <span className="text-gray-600 text-lg">{job_description}</span>
        </p>
        <p>
          <span className="font-extrabold">Job Responsibility: </span>
          <span className="text-gray-600 text-lg">{job_responsibility}</span>
        </p>
        <p>
          <span className="font-extrabold">Educational Requirement: </span>
          <span className="text-gray-600 text-lg">{education_requirement}</span>
        </p>
        <p>
          <span className="font-extrabold">Experience: </span>
          <span className="text-gray-600 text-lg">
            {experience} in this field
          </span>
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3 bg-gray-50 shadow-md rounded p-2">
          <h3 className="font-extrabold text-base lg:text-lg">Job Details</h3>
          <hr />
          <div className="flex gap-2">
            <CurrencyDollarIcon className="h-6 w-6 text-purple-500"></CurrencyDollarIcon>
            <p>
              <span className="text-gray-700 font-bold text-base lg:text-lg">
                Salary:{" "}
              </span>
              <span className="font-medium text-gray-600 text-base">
                {salary}
              </span>{" "}
              (per month)
            </p>
          </div>
          <div className="flex gap-2">
            <BriefcaseIcon className="h-6 w-6 text-purple-500"></BriefcaseIcon>
            <p>
              <span className="text-gray-700 font-bold text-base lg:text-lg">
                Job Title:{" "}
              </span>
              <span className="font-medium text-gray-600 text-base">
                {job_title}
              </span>
            </p>
          </div>

          <h3 className="font-extrabold text-base lg:text-lg">
            Contact Information
          </h3>
          <hr />
          <div className="flex gap-2">
            <PhoneIcon className="h-6 w-6 text-purple-500"></PhoneIcon>
            <p>
              <span className="text-gray-700 font-bold text-base lg:text-lg">
                Phone:{" "}
              </span>
              <span className="font-medium text-gray-600 text-base">
                {phone}
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            <EnvelopeIcon className="h-6 w-6 text-purple-500"></EnvelopeIcon>
            <p>
              <span className="text-gray-700 font-bold text-base lg:text-lg">
                Email:{" "}
              </span>
              <span className="font-medium text-gray-600 text-base">
                {email}
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            <MapPinIcon className="h-6 w-6 text-purple-500"></MapPinIcon>
            <p>
              <span className="text-gray-700 font-bold text-base lg:text-lg">
                Address:{" "}
              </span>
              <span className="font-medium text-gray-600 text-base">
                {address}
              </span>
            </p>
          </div>
        </div>

        <Link>
          <button
            onClick={() => handleAddToDb(_id)}
            className="btn-primary w-full"
          >
            Apply now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
