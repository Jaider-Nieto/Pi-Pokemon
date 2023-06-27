import style from './NotFound.module.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return(
        <div className={style.container}>
            <div className={style.title}>Error 404</div>
            <div className={style.error}>(Not Found)</div>
            <div onClick={() => navigate('/home')} className={style.btn} >go back home!</div>
        </div>
    )
}

export default NotFound;