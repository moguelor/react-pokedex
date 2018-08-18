import {
    FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAILURE,
    OPEN_PANEL, CLOSE_PANEL
} from './actionTypes';
import update from 'immutability-helper';

//TODO: Delete this in producción
import dataListPokemons from './fallBackPokemons.js';

const INITIAL_STATE = {
    pokemons : dataListPokemons,
    is_fetching : false,
    errors : [],
    is_open : false
};

export default function(state = INITIAL_STATE, action){
    switch(action.type){

        case FETCH_POKEMONS:
        return update(state, {$merge: {is_fetching : true}})

        case FETCH_POKEMONS_SUCCESS:
        return update(state, {$merge: { is_fetching: false, pokemons: action.payload.results}})

        case FETCH_POKEMONS_FAILURE:
        return update(state, {$merge: { is_fetching: false, errors: action.payload }})

        case OPEN_PANEL:
        return update(state, {$merge: { is_open: true }})

        case CLOSE_PANEL:
        return update(state, {$merge: { is_open: false }})
                        
        default : 
        return state;
    }
}