import { CALL_API } from 'redux-api-middleware';
import { FETCH_POKEMON, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE } from './actionTypes';

export function fetchPokemon(id){
    return (dispatch) => {
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
