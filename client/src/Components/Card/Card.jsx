import style from './Card.module.css'
import { useNavigate } from 'react-router-dom'

const Card = ({name, image, types, id }) => {
    const navigate = useNavigate()
    return (
        <div
        onClick={() => navigate(`/detail/${id}`)} 
        className={style.card}>
            <img className={style.img} src={image} alt={name} />
            <h2> {name} </h2>
            { types?.map( (type, i)=>{
                return <h3 key={i}>{type.name}</h3>
            })}
        </div>
    )
}

export default Card;