import style from './Search.module.css'
import { useDispatch, useSelector } from "react-redux"
import { CardContainer, Loading, Paged } from "../index"
import { useEffect, useState } from "react";
import { resetName } from '../../redux/actions';

const Search = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemonsName);
    const [ page, setPage ] = useState(1)
    const [ items, setItems ] = useState(12)
    const max = pokemons.length / items ;
    useEffect(() => {
        return () => {
            dispatch(resetName())
        };
    }, []);
    
    return(
        <div>
            {pokemons.error ? <div className={style.notFound}> the searched pokemon was not found </div> : ''}
            { pokemons.length > 0
            ? <div>
                <CardContainer page={page} items={items} state={pokemons}/> 
                <Paged page={page} setPage={setPage} max={max} /> 
            </div>
            : pokemons.error ? '' :  <Loading/> }
        </div>
    )
}

export default Search