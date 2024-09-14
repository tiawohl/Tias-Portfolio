export default function Home() {
    return (
        <>
                    <header>
                        <img src="images/logo.png" className="logo"/>
                    <center><a href="index.html" id="myname">TIA WOHL</a></center>
                    <div id="header_descriptor">
                    <center>Student - Editor - Illustrator - Communications</center>
                    </div>
                        <center><nav>
                            <ul>
                                <li><a href="index.html">Home   . </a></li>
                                <li><a href="work.html">Portfolio   . </a></li>
                                <li><a href="contact.html">Contact   . </a></li>
                                <li><a href="resume.html">Resume</a></li>
                            </ul>
                        </nav></center>
                    </header>


                
                <div id="wrapper">
            <div id="mywork">
            <center><p className="mywork">Check Out Completed Projects!</p></center>
            <a href="projectone.html">
            <div id="first">
            <h2 className="ptitle">Sound Design Project</h2>
            </div>
            </a>

            <a href="projecttwo.html">
            <div id="second">
            <h2 className="ptitle2">Video Composition Assignment</h2>
            </div>
            </a>

            <a href="projectthree.html">
            <div id="third">

            <h2 className="ptitle3">Blundering Fool Production</h2>
            </div>
            </a>

            <a href="projectfour.html">
            <div id="fourth">
            <h2 className="ptitle4">Micro Documentary</h2>
            </div>  
            </a>

            </div>  







            </div>

            <footer>
            <h6>&copy;Tia Wohl</h6>
                
                </footer>      
        </>
    )
}