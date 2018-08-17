import { CALL_API } from 'redux-api-middleware'
import { FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAILURE, SET_ACTIVE_POKEMON_ID } from './actionTypes'
import {push} from 'react-router-redux'
import details from '../details'

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

export function redirectToPokemon(id){
    return (dispatch) => {
        dispatch(push(`/${id}`))
        dispatch(details.actions.fetchPokemon(id))
    }
}
