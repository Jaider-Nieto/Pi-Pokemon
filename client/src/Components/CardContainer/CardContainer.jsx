import { useLocation } from "react-router-dom";
import { Card } from "../index";

const CardContainer = ({ state, page, items }) => {
  const location = useLocation().pathname
  return (
    <div>
      <h1>Card Container</h1>
      {
      location === '/search' ? state.map(({ id, image, name, types }) => (
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
