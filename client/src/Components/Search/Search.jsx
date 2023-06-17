import { useSelector } from "react-redux"
import { CardContainer } from "../index"

const Search = () => {
    const pokemonsName = useSelector(state => state.pokemonsName)
    return(
        <div>
            { pokemonsName.length > 0 ? <CardContainer state={pokemonsName}/> : <h1>loadingggg  </h1> }
        </div>
    )
}

export default Search