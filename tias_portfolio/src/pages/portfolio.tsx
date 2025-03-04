import PortfolioPiece from "../components/portfolioPiece"
import { PortfolioPieceProps } from "../types"

const projects: PortfolioPieceProps[] = [
    {
        name: "Sound Design Project",
        className: "flowers",
        link: "/projectone"
    },
    {
        name: "Video Composition Assignment",
        className: "flower",
        link: "/projecttwo"
    },
    {
        name: "Blundering Fool Production",
        className: "tulip",
        link: "/projectthree"
    },
    {
        name: "Micro Documentary",
        className: "rose",
        link: "/projectfour"
    }
]

export default function Portfolio() {
    return (
        <>
            <center><p className="mywork">Check Out Completed Projects!</p></center>
            <div className="myWork">
                {projects.map((project, i) => {
                    return (
                        <PortfolioPiece 
                            key={i} 
                            name={project.name} 
                            className={project.className}
                            link={project.link}
                        />
                    )
                })}
            </div>
        </>
    )
}