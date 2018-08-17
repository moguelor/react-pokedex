import {
    FETCH_POKEMON, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE,
    SET_ACTIVE_POKEMON_ID
} from './actionTypes';
import update from 'immutability-helper';

const INITIAL_STATE = {
    pokemon : null,
    is_fetching : false,
    errors : [],
    active_pokemon_id : null
};

export default function(state = INITIAL_STATE, action){
    switch(action.type){

        case FETCH_POKEMON:
        return update(state, {$merge: {is_fetching : true}})

        case FETCH_POKEMON_SUCCESS:
        return update(state, {$merge: { 
            is_fetching: false, 
            pokemon: {
                id : action.payload.id,
                name : action.payload.name,
                types : action.payload.types,
                image : action.payload.sprites.front_default
            }
        }})

        case FETCH_POKEMON_FAILURE:
        return update(state, {$merge: { is_fetching: false, errors: action.payload }})

        case SET_ACTIVE_POKEMON_ID:
        return update(state, {$merge : {active_pokemon_id : action.payload}})
                        
        default : 
        return state;
    }
}