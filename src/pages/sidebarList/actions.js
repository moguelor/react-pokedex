import { CALL_API } from 'redux-api-middleware';
import { FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAILURE } from './actionTypes';

//TODO: refactorizar api.
// TODO: Descomentar codigo

export function fetchPokemons(){
    return (dispatch) => {
        // return dispatch({
        //     [CALL_API]: {
        //         endpoint: `http://pokeapi.salestock.net/api/v2/pokemon?limit=150&offset=0`,
        //         method: 'GET',
        //         types: [
        //             FETCH_POKEMONS,
        //             FETCH_POKEMONS_SUCCESS,
        //             FETCH_POKEMONS_FAILURE
        //         ]
        //     }
        // })
    }
}
