const cleanPokemon = ({name, image, stats, height, weigth,types}) => {
    const res = {
            name, 
            image, 
            health: stats.find(value => value.stat.name === 'hp').base_stat,
            attack: stats.find(value => value.stat.name === 'attack').base_stat,
            defense: stats.find(value => value.stat.name === 'defense').base_stat,
            speed: stats.find(value => value.stat.name === 'speed').base_stat,
            height,
            weigth,
            types: types.map( value => value.type.name),
    }

    return res
}

module.exports = cleanPokemon;