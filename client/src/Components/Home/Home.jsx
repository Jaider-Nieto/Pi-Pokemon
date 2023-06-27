import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { getPokemons, getTypes, resetMsg } from "../../redux/actions";
import { Filters, Loading, Message, Paged } from "../index";
import style from './Home.module.css'

const Home = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemons);
  const filtered = useSelector((state) => state.filtered);
  const deleteMsg = useSelector((state) => state.deleteMsg);
  const postMsg = useSelector((state) => state.postMsg);
  useEffect(() => {
    dispatch(getPokemons())
    dispatch(getTypes())
    return () => {
      dispatch(resetMsg())
    }
  }, [dispatch]);

  //paginado
  const [ page, setPage ] = useState(1)
  const [ items, setItems ] = useState(12)
  const max = filtered.length > 1 ? filtered.length / items : pokemons.length / items ;

  return (
    <div className={style.container}>
      {deleteMsg.message
      ? <Message message={deleteMsg.message} type='delete'/> 
      : ''}
      {postMsg.message
      ? <Message message={postMsg.message} type='create'/> 
      : ''}
      { pokemons.length ? 
      <div>
        <Filters  />
        <CardContainer page={page} items={items} state={filtered.length > 1 ? filtered : pokemons} />
        <Paged page={page} setPage={setPage} max={max} /> 
      </div> :
      <Loading/> }
    </div>
  );
};

export default Home;
