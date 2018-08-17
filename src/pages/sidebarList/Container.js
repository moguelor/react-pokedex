import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Sidebar } from './components'
import details from '../details';
import * as actions from './actions'
import * as selectors from './selectors'

class Container extends Component {

    componentDidMount() {
        const { fetchPokemons } = this.props;
        fetchPokemons();
    }

    render() {

        const { pokemons, isFetching, redirectToPokemon, activePokemonId } = this.props;

        return (
            <Sidebar
                pokemons={pokemons}
                isFetching= {isFetching}
                redirectToPokemon= {redirectToPokemon}
                activePokemonId = {activePokemonId}
            />
        )
    }
}


const mapStateToProps = createStructuredSelector({
    pokemons: selectors.getPokemons,
    isFetching: selectors.getIsFetching,
    activePokemonId : details.selectors.getActivePokemonId
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemons: () => dispatch(actions.fetchPokemons()),
        redirectToPokemon : (id) => dispatch(actions.redirectToPokemon(id))
    };
};


Container.propTypes = {
    /** Action to dispatch list of pokemons */
    fetchPokemons: PropTypes.func.isRequired,

    /** List of pokemons */
    pokemons: PropTypes.array,

    /** Is fetching the list */
    isFetching: PropTypes.bool.isRequired,

    /** Function to redirect page */
    redirectToPokemon : PropTypes.func,

    /** Active pokemon */
    activePokemonId: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);