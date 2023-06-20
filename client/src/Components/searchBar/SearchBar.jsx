import style from './SearchBar.module.css'
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { getPokemonsByName } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChage = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    if (name === "") return;
    dispatch(getPokemonsByName(name));
    navigate("/search");
    setName("");
  };

  return (
    <>
      <input
        className={style.input}
        onChange={handleChage}
        name="name"
        value={name}
        placeholder="Search Your Pokemon"
      />
      
        <CiSearch className={style.icon}
        onClick={handleSubmit}/>
    </>
  );
};

export default SearchBar;
