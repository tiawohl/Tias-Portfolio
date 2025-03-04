import { Link } from 'react-router-dom'
import { PortfolioPieceProps } from '../types'

export default function PortfolioPiece (props: PortfolioPieceProps) {
    const className = `portfolioPiece ${props.className}`
    console.log(className)
    return (
        <>
           <Link to={'/'} className={className}>
                <div >
                    <h2>{props.name}</h2>
                </div>
           </Link> 
        </>
    )
}