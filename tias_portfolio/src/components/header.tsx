import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <div className="header">
                <img src="images/logo.png" className="logo"/>
            </div>
            <div className="scrollHeader">
                <center><a href="index.html" id="myName">TIA WOHL</a></center>
                <div id="header_descriptor">
                    <center className="bio">Student - Editor - Illustrator - Communications</center>
                    <center><nav>
                    <ul className="navLinks">
                        <Link to={'/'} className="navLink">Home</Link>
                        <Link to={'/resume'} className="navLink">Resume</Link>
                        <Link to={'/contact'} className="navLink">Contact</Link>
                        <Link to={'/about'} className="navLink">About</Link>
                    </ul>
                </nav></center>
                </div>
            </div>
        </>
    )
}