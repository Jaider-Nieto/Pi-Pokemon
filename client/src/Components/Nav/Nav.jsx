import style from './Nav.module.css';
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../index";
import { GrPowerReset } from 'react-icons/Gr'
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";
import { MdOutlineCatchingPokemon } from 'react-icons/md'

const Nav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleReset = () => {
        dispatch(getPokemons())
    }
    return(
        <div className={style.container}>
            <h1 className={style.title}> POKEDEX  </h1>
            <MdOutlineCatchingPokemon className={style.icons}/>
            <button className={style.button} onClick={() => navigate('/create') }> create </button>
            <button className={style.button} onClick={() => navigate('/home') }> home </button> 
            {/* <button onClick={handleReset}> <GrPowerReset/> </button>  */}
            <SearchBar/>
        </div>
    )
}

export default Nav;