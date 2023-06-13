import { useState } from "react";
import { useSelector } from "react-redux";

const FormCreate = () => {
    const stateTypes = useSelector( state => state.types)

    const [types , setTypes] = useState([])

    const handlerTypes = (event) => {
      const find = types.find((type) => type === event.target.innerText)

      if(find) return

      setTypes([...types, event.target.innerText])
    }

    const handleSubmit = (event) => {
      event.preventDefault()
    }

    const deleteType = (event) => {
      const filtered = types.filter( type => type !== event.target.innerText )
      setTypes(filtered)
    }

    return (
      <form onSubmit={handleSubmit}>
        <h1>creation form</h1>
        <label >name:
          <input name="name" placeholder="name"/>
        </label>

        <label >image:
        <input name="image" placeholder="image"/>
        </label>

        <label >health:
        <input name="health" placeholder="health"/>
        </label>

        <label >attack:
        <input name="attack" placeholder="attack"/>
        </label>

        <label >defense:
        <input name="defense" placeholder="defense"/>
        </label>

        <label >speed:
        <input name="speed" placeholder="speed"/>
        </label>

        <label >height:
        <input name="height" placeholder="height"/>
        </label>

        <label >height:
        <input name="weight" placeholder="weight"/>
        </label>

        <div>
          <h1>Types: </h1>
          {stateTypes?.map( (type, i ) => <button 
          key={i}
          onClick={handlerTypes}> {type.name} </button> )}
        </div>

        <hr/>

        <div>
          {types?.map( (type, i) => <button onClick={deleteType} key={i}> {type} </button>)}
        </div>

        <button > Create </button>
      </form>
    );
  };
  
  export default FormCreate;
  