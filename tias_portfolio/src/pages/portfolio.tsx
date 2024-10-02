// import PortfolioPiece from "../components/portfolioPiece"

export default function Portfolio() {
    return (
        <>
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
        </>
    )
}