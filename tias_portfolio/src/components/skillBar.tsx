interface SkillBarProps {
    skill: string;
    percentage: number;
}

export default function SkillBar ( props: SkillBarProps ) {
    const { skill, percentage } = props
    return (
        <div>
            <p>{skill}</p>
            <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-round-xlarge w3-gray" style={{ width: `${percentage}%`, backgroundColor: "green" }}>{percentage}%</div>
            </div>
        </div>
    )
}