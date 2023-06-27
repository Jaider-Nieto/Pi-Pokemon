import style from './CardContainer.module.css'
import { useLocation } from "react-router-dom";
import { Card } from "../index";

const CardContainer = ({ state, page, items }) => {
  const location = useLocation().pathname
  return (
    <div className={style.container}>
      {
      location === '/search' ? state.slice(
        (page - 1) * items, (page - 1) * items + items
      ).map(({ id, image, name, types }) => (
        <Card
        key={name} 
        id={id}
        image={image} 
        name={name} 
        types={types} 
        />
      ))
      :
      state.slice(
          (page - 1) * items, (page - 1) * items + items
        ).map(({ id, image, name, types }) => (
          <Card
          key={name} 
          id={id}
          image={image} 
          name={name} 
          types={types} 
          />
        ))
      } 
    </div>
  );
};

export default CardContainer;
