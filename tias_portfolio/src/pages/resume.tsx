import WorkExperience from "../components/workExperience";
import Education from "../components/education";
import SkillBar from "../components/skillBar";

export default function Resume () {
    return (
    <div className="w3-content w3-margin-top" style={{ maxWidth: '1200px' }}>
        <header>
        <img src="images/logo.png" className="logo" alt="Logo" />
        <h1 className="myname">TIA WOHL</h1>
        <p>Student - Editor - Illustrator - Communications</p>
        <nav>
            <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="work.html">Portfolio</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="resume.html">Resume</a></li>
            </ul>
        </nav>
        </header>
        
        <div className="w3-row-padding">
        <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">
                <img src="images/smile.JPG" className="resume" style={{ width: '90%' }} alt="Avatar" />
                <h2 className="b">Tia Wohl</h2>
            </div>
            <div className="w3-container">
                <p>Social Relations</p>
                <p>Elon, NC</p>
                <p>twohl@elon.edu</p>
                <p>(919)-500-0504</p>
                <hr />
                <h3>Skills</h3>
                <SkillBar skill="PhoenixCONNECT" percentage={100} />
                <SkillBar skill="Adobe Illustrator" percentage={100} />
                <SkillBar skill="Premiere Pro" percentage={100} />
                <SkillBar skill="Excel" percentage={80} />
                <h3>Languages</h3>
                <SkillBar skill="English" percentage={100} />
                <SkillBar skill="Spanish" percentage={70} />
                <SkillBar skill="ASL" percentage={70} />
            </div>
            </div>
        </div>

        <div className="w3">
            <WorkExperience />
            <Education />
        </div>
        </div>

        <footer>
        <h5>&copy; Tia Wohl</h5>
        </footer>
    </div>
    );
};
