interface SchoolProps {
    name: string;
    duration: string;
    details: string;
}

export default function School (props: SchoolProps) {
    const { name, duration, details } = props
    return (
        <div className="w3-container">
            <h5 className="w3-opacity"><b>{name}</b></h5>
            <h6 className="w3-text-gray">{duration}</h6>
            <p>{details}</p>
        </div>
    )
}