import {push} from 'react-router-redux'
import details from '../../details'
import closePanel from './closePanel'

export default function redirectToPokemon(id){
    return (dispatch) => {
        dispatch(push(`/${id}`))
        dispatch(closePanel())
        dispatch(details.actions.fetchPokemon(id))
    }
}