import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <div className="header">
                <img src="images/logo.png" className="logo"/>
                <center><a href="index.html" id="myname">TIA WOHL</a></center>
                <div id="header_descriptor">
                    <center>Student - Editor - Illustrator - Communications</center>
                    <center><nav>
                    <ul>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/resume'}>Resume</Link>
                        <Link to={'/contact'}>Contact</Link>
                        <Link to={'/about'}>About</Link>
                    </ul>
                </nav></center>
                </div>
            </div>
        </>
    )
}