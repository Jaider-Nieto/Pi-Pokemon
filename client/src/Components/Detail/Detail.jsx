import style from "./Detail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePokemons, getPokemonsById, resetDetail, resetMsg } from "../../redux/actions";
import { TiPencil } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { Loading, Message, Type } from "../index";

const Detail = () => {
  const state = useSelector((state) => state.pokemonDetail);
  const putMsg = useSelector((state) => state.putMsg);
  const param = useParams().id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPokemonsById(param));
    return () => {
      dispatch(resetMsg());
      dispatch(resetDetail());
    }
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(deletePokemons(state.id));
    navigate("/home");
  };

  return (
    <div>
      {!state.name ? (
        <Loading />
      ) : (
        <div className={style.container}>
          { putMsg.message ? (
            <Message message={putMsg.message} type='edit'/>
          ) : (
            ""
          )}

          {typeof state.id === "string" ? (
            <div className={style.iconsContainer}>
              <TiPencil
                className={style.icons}
                onClick={() => navigate(`/edit/${state.id}`)}
              />
              <MdDelete className={style.icons} onClick={handleDelete} />
            </div>
          ) : (
            ""
          )}
          <div className={style.title}>detail of {state.name}</div>
          <div className={style.id}> id: {state.id} </div>
          <img className={style.img} src={state.image} alt={state.name} />
          <div className={style.statsContainer}>
            <h2 className={style.stat}> health: {state.health} </h2>
            <h2 className={style.stat}> attack: {state.attack} </h2>
            <h2 className={style.stat}> defense: {state.defense} </h2>
            <h2 className={style.stat}> speed: {state.speed} </h2>
            <h2 className={style.stat}> weight: {state.weight} </h2>
            <h2 className={style.stat}> height: {state.height} </h2>
          </div>
          <div className={style.typesContainer}>
            <h2 className={style.typesTittle}>types:</h2>
            <div className={style.types}>
              {state.types?.map((type, i) => (
                <Type key={i} type={type.name} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
