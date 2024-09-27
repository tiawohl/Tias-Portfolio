import { Link } from 'react-router-dom'
import { PortfolioPieceProps } from '../types'

export default function PortfolioPiece (props: PortfolioPieceProps) {
    return (
        <>
           <Link to={'/'}>
                <div style={{backgroundImage: `${props.backgroundImage}`}}>
                    <h2>{props.name}</h2>
                </div>
           </Link> 
        </>
    )
}