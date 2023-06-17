import { useNavigate } from "react-router-dom";
import { SearchBar } from "../index";
import { GrPowerReset } from 'react-icons/Gr'
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";

const Nav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)
    console.log(pokemons)

    const handleReset = () => {
        pokemons.length > 10 ? '' :
        dispatch(getPokemons())
    }
    return(
        <div>
            <h1> PI POKEMONS </h1>
            <button onClick={() => navigate('/create') }> create </button>
            <button onClick={() => navigate('/home') }> home </button> 
            <button onClick={handleReset}> <GrPowerReset/> </button> 
            <SearchBar/>
        </div>
    )
}

export default Nav;