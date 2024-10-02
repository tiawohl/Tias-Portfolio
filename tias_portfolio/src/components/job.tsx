interface JobProps {
    title: string;
    duration: string;
    description: string;
}

export default function Job (props: JobProps) {
    return (
        <div className="w3-container">
            <h5 className="w3-opacity"><b>{props.title}</b></h5>
            <h6 className="w3-text-gray">{props.duration}</h6>
            <p>{props.description}</p>
            <hr />
        </div>
    )
}