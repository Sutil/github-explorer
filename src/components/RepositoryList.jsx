import { RepositoryItem } from "./RepositoryItem";
const repo = {
    name: "Name",
    description: "Repo description",
    link: "https://github.com/Sutil/snk"
}

export function RepositoryList() {
    
    return (
        <section className="repository-list" >
            <h1>Repository list</h1>

            <ul>
                <RepositoryItem repository={repo} />
                <RepositoryItem repository={repo} />
                <RepositoryItem repository={repo} />
            </ul>
        </section>
    );
}