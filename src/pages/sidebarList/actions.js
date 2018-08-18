import { CALL_API } from 'redux-api-middleware'
import { 
    FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAILURE,
    OPEN_PANEL, CLOSE_PANEL
} from './actionTypes'
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
        dispatch(closePanel())
        dispatch(details.actions.fetchPokemon(id))
    }
}

export function openPanel(){
    return {
        type : OPEN_PANEL
    }
}

export function closePanel(){
    return {
        type : CLOSE_PANEL
    }
}
