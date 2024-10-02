import School from "./school"

export default function Education () {
    return (
        <div className="w3-container w3-card w3-white">
            <h2>Education</h2>
            <School
            name="Elon University"
            duration="August 2021 - Current"
            details="Major: Communication Design, Minor: Computer Science"
            />
            <School
            name="Fuquay Varina Highschool"
            duration="2017 - 2021"
            details="North Carolina Scholars Graduate"
            />
        </div>
    )
}