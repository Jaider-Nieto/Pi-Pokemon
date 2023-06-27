import style from './Nav.module.css';
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../index";
import { MdOutlineCatchingPokemon } from 'react-icons/md'

const Nav = () => {
    const navigate = useNavigate()
    return(
        <div className={style.container}>
            <h1 className={style.title}> POKEDEX  </h1>
            <MdOutlineCatchingPokemon className={style.icons}/>
            <button className={style.button} onClick={() => navigate('/create') }> create </button>
            <button className={style.button} onClick={() => navigate('/home') }> home </button> 
            <SearchBar/>
        </div>
    )
}

export default Nav;