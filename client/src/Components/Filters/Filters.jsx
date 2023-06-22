import style from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { GrPowerReset } from "react-icons/Gr";
import {
  ascendingAttack,
  ascendingOrder,
  descendingAttack,
  descendingOrder,
  filterByAPI,
  filterByDB,
  filterByTypes,
  getPokemons,
} from "../../redux/actions";

const Filters = () => {
  const pokemon = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);
  const aux = useSelector((state) => state.pokemonsAll);
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    event.target.value === "A"
      ? dispatch(ascendingOrder(pokemon))
      : dispatch(descendingOrder(pokemon));
  };
  const handlerAttack = (event) => {
    event.target.value === "A"
      ? dispatch(ascendingAttack(pokemon))
      : dispatch(descendingAttack(pokemon));
  };
  const handlerFilter = (event) => {
    dispatch(filterByTypes(aux, event.target.value));
  };
  const handlerSource = (event) => {
    event.target.value === "API"
      ? dispatch(filterByAPI(aux))
      : dispatch(filterByDB(aux));
  };

  const handleReset = () => {
    dispatch(getPokemons());
  };

  return (
    <div className={style.container}>
      <span> Order: </span>

        <select 
          defaultValue={"DEFAULT"}
          onChange={handlerOrder}
          className={style.select}
        >
          <option className={style.options} value="DEFAULT" disabled>
            Name:
          </option>
          <option className={style.options} value="A">ascending</option>
          <option className={style.options} value="D">descending</option>
        </select>

        <select 
          defaultValue={"DEFAULT"}
          onChange={handlerAttack}
          className={style.select}
        >
          <option className={style.options} value="DEFAULT" disabled>
            Attack
          </option>
          <option className={style.options} value="A">ascending</option>
          <option className={style.options} value="D">descending</option>
        </select>

      <span> filters: </span>
      <select 
        defaultValue={"DEFAULT"}
        onChange={handlerFilter}
        className={style.select}
      >
        <option className={style.options} value="DEFAULT" disabled>
          Types
        </option>
        {types?.map((type, i) => (
          <option key={i} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      <select 
        defaultValue={"DEFAULT"}
        onChange={handlerSource}
        className={style.select}
      >
        <option className={style.options} value="DEFAULT" disabled>
          By
        </option>
        <option className={style.options} value="API">api</option>
        <option className={style.options} value="DB">db</option>
      </select>

      <GrPowerReset className={style.icon} onClick={handleReset} />

    </div>
  );
};

export default Filters;
