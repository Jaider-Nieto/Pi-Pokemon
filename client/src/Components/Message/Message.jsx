import style from './Message.module.css'

const Message = ({message, type}) => {
    return(
        <div className={style[type]} > {message} </div>
    )
}

export default Message;