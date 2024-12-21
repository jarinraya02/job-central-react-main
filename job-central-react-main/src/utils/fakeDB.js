// Add data to local storage

const addToDb = (id) => {
  let appliedJobs = [];
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs);
  }
  const exists = appliedJobs.includes(id);
  if (!exists) {
    appliedJobs.push(id);
  }

  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
};

const getStoredJobs = () => {
  let appliedJobs = [];
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs);
  }
  return appliedJobs;
};

export { addToDb, getStoredJobs };
