import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/Bi'
import { useDispatch } from 'react-redux';
import { getPokemonsByName } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [name, setName] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChage = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = () => {
        if(name === '')return
        dispatch(getPokemonsByName(name))
        navigate('/search')
        setName('')
    }

    return (
        <>
            <input 
            onChange={handleChage}
            name='name' 
            value={name} 
            placeholder="Search Your Pokemon" 
            />
            <button onClick={handleSubmit}> <BiSearchAlt/> </button>
        </>

    )
}

export default SearchBar;