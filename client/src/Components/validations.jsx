const handleError = ({ 
    name, 
    image,
    health,
    attack,
    defense,
    speed,
    height,
    weight
}) => {
    const error = {}

    if(!/(^[a-zA-Z]{0,100})+(\s[a-zA-Z]{0,150})?$/.test(name)){
        error.name = 'Only characters from [a - z] or [A - Z]'
    }
    if(!/^([a-zA-Z0-9\s_\\.\-:\/])+(.jpg|.png)$/.test(image)){
        error.image = 'The image format should be .png or .jpg'
    }
    if(!/^[0-9]{0,5}$/.test(health)){
        error.health = 'Only numbers 1 to 10000'
    }
    if(!/^[0-9]{0,5}$/.test(attack)){
        error.attack = 'Only numbers 1 to 10000'
    }
    if(!/^[0-9]{0,5}$/.test(defense)){
        error.defense = 'Only numbers 1 to 10000'
    }
    if(!/^[0-9]{0,5}$/.test(speed)){
        error.speed = 'Only numbers 1 to 10000'
    }
    if(!/^[0-9]{0,3}$/.test(height)){
        error.height = 'Only numbers 1 to 100'
    }
    if(!/^[0-9]{0,5}$/.test(weight)){
        error.weight = 'Only numbers 1 to 10000'
    }

    return error
}

export default handleError;