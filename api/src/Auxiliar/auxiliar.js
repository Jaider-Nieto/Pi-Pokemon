const cleanPokemon = ({id, name, sprites, stats, height, weight,types}) => {
    const res = {
            id,
            name, 
            image: sprites.front_default, 
            health: stats.find(value => value.stat.name === 'hp').base_stat,
            attack: stats.find(value => value.stat.name === 'attack').base_stat,
            defense: stats.find(value => value.stat.name === 'defense').base_stat,
            speed: stats.find(value => value.stat.name === 'speed').base_stat,
            height,
            weight,
            types: types.map( value => value.type.name),
    }
    return res
}

const fetchPokeId = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    return data
}   



module.exports = {
    cleanPokemon,
    fetchPokeId,
};