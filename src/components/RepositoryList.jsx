import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useEffect, useState } from "react";

// https://api.github.com/orgs/rocketseat/repos

const repo = {
    name: "Name",
    description: "Repo description",
    link: "https://github.com/Sutil/snk"
}

export function RepositoryList() {
    
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(setRepositories)
    }, []);
    
    return (
        <section className="repository-list" >
            <h1>Repository list</h1>
            <ul>
                {
                    repositories.map(r => <RepositoryItem key={r.id} repository={repo} />)
                }
            </ul>
        </section>
    );
}