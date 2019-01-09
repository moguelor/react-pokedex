import { SET_ACTIVE_POKEMON_ID } from '../actionTypes';

export default function setActivePokemonId(id){
    return {
        type : SET_ACTIVE_POKEMON_ID,
        payload : id
    }
}