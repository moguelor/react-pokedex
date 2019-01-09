import api from '../api'

export default () => {
    return dispatch => {
        dispatch(api.getPokemons());
    }
}