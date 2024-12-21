import { getStoredJobs } from "../../utils/fakeDB";

export const categoryAndJobs = async () => {
  const categoryData = await fetch("jobCategoryList.json");
  const jobCategory = await categoryData.json();

  const jobsData = await fetch("jobs.json");
  const allJobs = await jobsData.json();

  const storedJobs = getStoredJobs();
  const savedJobs = [];
  for (const id of storedJobs) {
    const foundJob = allJobs.find((job) => job._id === id);
    if (foundJob) {
      savedJobs.push(foundJob);
    }
  }

  return { jobCategory, allJobs, savedJobs };
};
