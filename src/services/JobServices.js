


// Dummy job data
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    type: "Full Time",
    applyLink: "https://careers.google.com",
  },
  {
    id: 2,
    title: "React Developer",
    company: "Microsoft",
    location: "Hyderabad",
    type: "Remote",
    applyLink: "https://careers.microsoft.com",
  },
  {
    id: 3,
    title: "JavaScript Engineer",
    company: "Amazon",
    location: "Chennai",
    type: "Full Time",
    applyLink: "https://amazon.jobs",
  },
  {
    id: 4,
    title: "UI Developer",
    company: "Startup Inc",
    location: "Remote",
    type: "Contract",
    applyLink: "#",
  },
];

// Simulate API call
export const fetchJobs = async (searchTerm = "") => {

  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      resolve(filteredJobs);
      
    }, 500); // simulate network delay
  });
};
