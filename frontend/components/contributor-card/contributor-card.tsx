
import { Contributor } from "@/types/contributor"


export default async function ContributorCard({ contributor }: { contributor: Contributor }) {

    return (
        <a href={contributor.html_url} target="_blank" className="hover:underline underline-offset-4" >
            <div className="flex flex-row items-center">
                {contributor.login}
            </div>
        </a>
    )
}