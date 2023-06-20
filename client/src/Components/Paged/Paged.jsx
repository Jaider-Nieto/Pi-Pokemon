import { useNavigate } from 'react-router-dom'
import style from './Paged.module.css'
import { CgPlayTrackPrevO, CgPlayTrackNextO } from 'react-icons/cg'

const Paged = ({page, setPage, max}) => {
    const navigate = useNavigate()
    const nextPage = () => {
        if(page === Math.ceil(max)) return
        setPage(page + 1)
    }
    const prevPage = () => {
        if(page === 1) return
        setPage(page - 1)
    }
    return (
        <div className={style.container} >
            <CgPlayTrackPrevO onClick={() => prevPage()} className={style.icons} />
            <p className={style.page}>{page} of {Math.ceil(max)}</p>
            <CgPlayTrackNextO onClick={() => nextPage()} className={style.icons} />
        </div>
    )
}

export default Paged;