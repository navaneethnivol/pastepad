

export default function securityPolicy() {
    return (
        <div className="my-12">
            <p className="my-4">
                We take the security and integrity of Monkeytype very seriously. If you have found a vulnerability, please report it <abbr title="As Soon As Possible">ASAP</abbr> so we can quickly remediate the issue.
            </p>

            <p className="my-4" >Table of Contents</p>

            <ul>
                <li>
                    <a href="#Vulnerability_Disclosure">
                        How to Disclose a Vulnerability
                    </a>
                </li>
                <li>
                    <a href="#Submission_Guidelines">
                        Submission Guidelines
                    </a>
                </li>
            </ul>

            <h1 id="Vulnerability_Disclosure" className="text-[var(--main-color)] my-4">How to Disclose a Vulnerability</h1>

            <p>
                For vulnerabilities that impact the confidentiality, integrity, and
                availability of Monkeytype services, please send your disclosure via
                {/* style="display: inline-flex" */}
                <span>
                    <a href="mailto:contact@monkeytype.com" rel="noopener">email</a>
                    .
                </span>
                For non-security related platform bugs, follow the bug submission
                {/* style="display: inline-flex" */}
                <span >
                    <a href="https://github.com/monkeytypegame/monkeytype#bug-report-or-feature-request">
                        guidelines
                    </a>
                    .
                </span>
                Include as much detail as possible to ensure reproducibility. At a
                minimum, vulnerability disclosures should include:
            </p>
            <ul>
                <li>Vulnerability Description</li>
                <li>Proof of Concept</li>
                <li>Impact</li>
                <li>Screenshots or Proof</li>
            </ul>
            <h1 id="Submission_Guidelines" className="text-[var(--main-color)] my-4">Submission Guidelines</h1>
            <p>
                Do not engage in activities that might cause a denial of service
                condition, create significant strains on critical resources, or
                negatively impact users of the site outside of test accounts.
            </p>
        </div>
    );
}