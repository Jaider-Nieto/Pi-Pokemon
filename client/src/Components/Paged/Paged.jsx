import style from './Paged.module.css'
import { AiOutlineDoubleRight, AiOutlineDoubleLeft, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Paged = ({page, setPage, max}) => {
    if(page > Math.ceil(max)){
        setPage(1)
    }
    const nextPage = () => {
        if(page === Math.ceil(max)) return
        setPage(page + 1)
    }
    const prevPage = () => {
        if(page === 1) return
        setPage(page - 1)
    }
    const doubleNextPage = () => {
        if(page + 5 > Math.ceil(max)) return setPage(Math.ceil(max))
        setPage(page + 5)
    }
    const doublePrevPage = () => {
        if(page - 5 < 2) return setPage(1)
        setPage(page - 5)
    }
    return (
        <div className={style.container} >
            <AiOutlineDoubleLeft onClick={() => doublePrevPage()} className={style.icon} />
            <AiOutlineLeft onClick={() => prevPage()} className={style.icon} />
            <div className={style.page}>{page < 2 ? '_' : page - 1}</div>
            <div className={style.pageSelect}>{page}</div>
            <div className={style.page}>{page > Math.ceil(max) - 1 ? '_' : page + 1}</div>
            <AiOutlineRight onClick={() => nextPage()} className={style.icon} />
            <AiOutlineDoubleRight onClick={() => doubleNextPage()} className={style.icon} />
        </div>
    )
}

export default Paged;