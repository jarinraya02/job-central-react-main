/* eslint-disable react/prop-types */
import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
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
    <div className="rounded-lg border border-gray-100 p-2 lg:p-10 shadow-md mb-4 lg:mb-0 flex flex-col justify-between">
      <img
        className="w-16 h-12 object-contain mb-2"
        src={company_logo}
        alt=""
      />
      <h1 className="text-2xl text-gray-700 font-extrabold mb-2">
        {job_title}
      </h1>
      <p className="text-lg text-gray-600 font-semibold mb-2">{company_name}</p>
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
      <div className="flex gap-6 mb-4">
        <div className="flex items-end gap-2">
          <MapPinIcon className="h-6 w-6"></MapPinIcon>
          <p>{location}</p>
        </div>
        <div className="flex items-end gap-2">
          <CurrencyDollarIcon className="h-6 w-6"></CurrencyDollarIcon>
          <p>Salary: {salary}</p>
        </div>
      </div>
      <Link to={`/${_id}`}>
        <button className="btn-secondary mt-auto">View details</button>
      </Link>
    </div>
  );
};

export default Job;
