import Job from "./job"

export default function WorkExperience () {
    return (
        <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2>Work Experience</h2>
            {/* Repeat for each job */}
            <Job
                title="Beauty Advisor / Ulta Beauty"
                duration="May 2022 - Current"
                description="Be up-to-date on current beauty trends and products..."
            />
            <Job
                title="S.M.A.R.T. Mentor / Elon CREDE"
                duration="August 2022 - Current"
                description="Work one-on-one with a first-year student of color..."
            />
            {/* Add more jobs as needed */}
        </div>
    )
}