/* eslint-disable react/prop-types */
import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    _id,
    salary,
    company_logo,
    job_title,
    job_type,
    job_location,
    company_name,
    location,
  } = job;
  return (
    <div className="rounded-lg border border-gray-100 p-2 lg:p-8 shadow-md mb-4 lg:flex justify-between items-center">
      <div className="lg:flex items-center gap-4 lg:gap-8">
        <img
          className="object-contain w-32 h-14 mb-2"
          src={company_logo}
          alt=""
        />
        <div>
          <h1 className="text-2xl text-gray-700 font-extrabold mb-2">
            {job_title}
          </h1>
          <p className="text-lg text-gray-600 font-semibold mb-2">
            {company_name}
          </p>
          <div className="inline-flex gap-2 mb-2">
            <div className="p-[1px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded">
              <div className="bg-white rounded px-4 py-2 shadow-sm">
                <p className="title-text">{job_location}</p>
              </div>
            </div>
            <div className="p-[1px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded">
              <div className="bg-white rounded px-4 py-2 shadow-sm">
                <p className="title-text">{job_type}</p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:gap-6 mb-2 lg:mb-0">
            <div className="flex items-end gap-2">
              <MapPinIcon className="h-6 w-6"></MapPinIcon>
              <p>{location}</p>
            </div>
            <div className="flex items-end gap-2">
              <CurrencyDollarIcon className="h-6 w-6"></CurrencyDollarIcon>
              <p>Salary: {salary}</p>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/${_id}`}>
        <button className="btn-secondary mt-auto">View details</button>
      </Link>
    </div>
  );
};

export default AppliedJob;
