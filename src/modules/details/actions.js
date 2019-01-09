import { CALL_API } from 'redux-api-middleware';
import { FETCH_POKEMON, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE, SET_ACTIVE_POKEMON_ID } from './actionTypes';

export function fetchPokemon(id){
    return (dispatch) => {

        dispatch(setActivePokemonId(id));
        return dispatch({
            [CALL_API]: {
                endpoint: `http://pokeapi.salestock.net/api/v2/pokemon/${id}`,
                method: 'GET',
                types: [
                    FETCH_POKEMON,
                    FETCH_POKEMON_SUCCESS,
                    FETCH_POKEMON_FAILURE
                ]
            }
        })

    }
}

export function setActivePokemonId(id){
    return {
        type : SET_ACTIVE_POKEMON_ID,
        payload : id
    }
}