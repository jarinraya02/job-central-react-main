import React, { createContext, useState } from "react";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";

export const JobsContext = createContext([]);
export const CategoryContext = createContext([]);
export const AppliedJobsContext = createContext([]);

const App = () => {
  const { jobCategory, allJobs, savedJobs } = useLoaderData();
  // const [jobs, setJobs] = useState(allJobs.slice(0, 4));
  return (
    <AppliedJobsContext.Provider value={savedJobs}>
      <JobsContext.Provider value={allJobs}>
        <CategoryContext.Provider value={jobCategory}>
          <Header></Header>
          <Outlet></Outlet>
        </CategoryContext.Provider>
      </JobsContext.Provider>
    </AppliedJobsContext.Provider>
  );
};

export default App;
