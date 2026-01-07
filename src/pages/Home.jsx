import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCart";
import { fetchJobs } from "../services/JobServices";
import { useState } from "react";

export function Home() {

    const [jobs, setJobs] = useState([]);

    const handleSearch = async (term) => {
        console.log("Searching for:", term);
        const data = await fetchJobs(term);
        setJobs(data);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}
