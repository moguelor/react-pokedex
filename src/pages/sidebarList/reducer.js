import {
    FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAILURE
} from './actionTypes';
import update from 'immutability-helper';

//TODO: Delete this in producción
import dataListPokemons from './fallBackPokemons.js';

const INITIAL_STATE = {
    pokemons : dataListPokemons,
    is_fetching : false,
    errors : []
};

export default function(state = INITIAL_STATE, action){
    switch(action.type){

        case FETCH_POKEMONS:
        return update(state, {$merge: {is_fetching : true}})

        case FETCH_POKEMONS_SUCCESS:
        return update(state, {$merge: { is_fetching: false, pokemons: action.payload.results}})

        case FETCH_POKEMONS_FAILURE:
        return update(state, {$merge: { is_fetching: false, errors: action.payload }})
                        
        default : 
        return state;
    }
}