import style from './Card.module.css'
const Card = ({name, image, types }) => {
    return (
        <div className={style.card}>
            <img className={style.img} src={image} alt={name} />
            <h2> {name} </h2>
            { types?.map( type => <h1 key={type}>{type}</h1>)}
        </div>
    )
}

export default Card;