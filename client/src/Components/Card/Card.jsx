import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { Type } from '../index'

const Card = ({ name, image, types, id }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/detail/${id}`)} className={style.container}>
      <h2 className={style.title}> {name} </h2>
      <img className={style.img} src={image} alt={name} />
      <div className={style.typeContainer}>
        {types?.map((type, i) => {
          return <Type type={type.name} key={i}/>
        })}
      </div>
    </div>
  );
};

export default Card;
