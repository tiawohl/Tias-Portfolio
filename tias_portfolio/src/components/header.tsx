import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <img src="images/logo.png" className="logo"/>
            <center><a href="index.html" id="myname">TIA WOHL</a></center>
            <div id="header_descriptor">
                <center>Student - Editor - Illustrator - Communications</center>
                <center><nav>
                <ul>
                    {/* <li><a href="index.html">Home   . </a></li>
                    <li><a href="work.html">Portfolio   . </a></li>
                    <li><a href="contact.html">Contact   . </a></li>
                    <li><a href="resume.html">Resume</a></li> */}
                    <Link to={'/'}>Home</Link>
                    <Link to={'/resume'}>Resume</Link>
                </ul>
            </nav></center>
            </div>
        </>
    )
}