import { useSelector } from "react-redux"
import { CardContainer, Loading } from "../index"

const Search = () => {
    const pokemonsName = useSelector(state => state.pokemonsName)
    return(
        <div>
            { pokemonsName.length > 0 
            ? <CardContainer state={pokemonsName}/> 
            : <Loading/> }
        </div>
    )
}

export default Search