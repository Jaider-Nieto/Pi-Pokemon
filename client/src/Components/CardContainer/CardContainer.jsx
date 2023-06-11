import { Card } from "../index";

const CardContainer = ({ state }) => {
  return (
    <div>
      <h1>Card Container</h1>
      {state?.map(({ id, image, name, types }) => (
        <Card 
        key={name} 
        id={id}
        image={image} 
        name={name} 
        types={types} 
        />
      ))}
    </div>
  );
};

export default CardContainer;
