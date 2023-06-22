import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { getPokemons, getTypes } from "../../redux/actions";
import { Filters, Paged } from "../index";
import style from './Home.module.css'

const Home = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(getPokemons())
    dispatch(getTypes())
  }, [dispatch]);

  //paginado
  const [ page, setPage ] = useState(1)
  const [ items, setItems ] = useState(12)
  const max = pokemons.length / items

  return (
    <div className={style.container}>
      <Filters state={pokemons}/>
      { pokemons.length ? 
      <CardContainer page={page} items={items} state={pokemons} /> : 
      <h2>loading</h2> }
        <Paged page={page} setPage={setPage} max={max} /> 
    </div>
  );
};

export default Home;
