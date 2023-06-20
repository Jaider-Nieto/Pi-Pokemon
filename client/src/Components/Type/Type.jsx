import style from './type.module.css'

const Type = ( { type } ) => {
    return (
        <div className={style[type]}>{type}</div>
    )
}

export default Type