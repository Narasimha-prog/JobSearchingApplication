import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCart";
import { fetchJobs } from "../services/JobServices";
import { useState } from "react";
import { userManager } from "../oauth/OauthClient";
import Footer from "../components/Footer";

export function Home() {

    console.log("Home component rendered");
    const login = async () => {
  await userManager.signinRedirect();
};


    const [jobs, setJobs] = useState([]);

    const handleSearch = async (term) => {
        console.log("Searching for:", term);
        const data = await fetchJobs(term);
        setJobs(data);
    };

    return (
        <div>
            <button onClick={login}>Login</button>
            <SearchBar onSearch={handleSearch} />
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
            <Footer />
        </div>
    );
}
