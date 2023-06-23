import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { getPokemons, getTypes } from "../../redux/actions";
import { Filters, Loading, Paged } from "../index";
import style from './Home.module.css'

const Home = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemons);
  const filtered = useSelector((state) => state.filtered);
  useEffect(() => {
    dispatch(getPokemons())
    dispatch(getTypes())
  }, [dispatch]);

  //paginado
  const [ page, setPage ] = useState(1)
  const [ items, setItems ] = useState(12)
  const max = filtered.length > 1 ? filtered.length / items : pokemons.length / items ;

  return (
    <div className={style.container}>
      { pokemons.length ? 
      <div>
        <Filters state={filtered.length > 1 ? filtered : pokemons}/>
        <CardContainer page={page} items={items} state={filtered.length > 1 ? filtered : pokemons} />
        <Paged page={page} setPage={setPage} max={max} /> 
      </div> :
      <Loading/> }
    </div>
  );
};

export default Home;
