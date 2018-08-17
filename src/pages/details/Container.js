import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { PokemonInfo } from './components'
import { Loading } from '../../common/components'
import * as actions from './actions'
import * as selectors from './selectors'


class Container extends Component {

    componentDidMount() {
        const { match: { params: { id } }, fetchPokemon } = this.props;

        if (id) {
            fetchPokemon(id)
        }
    }


    render() {
        const { pokemon, isFetching } = this.props;

        if (isFetching) {
            return <Loading />
        }

        if (!pokemon) {
            return (
                <div className={`row align-items-center ${styles.container}`}>
                    <div className={`text-center col ${styles.labelChoose}`}>
                        CHOOSE A POKEMON
                    </div>
                </div>
            )
        }

        return (
            <div className={`row ${styles.container}`}>
                <div className="col-6">
                   <PokemonInfo pokemon = {pokemon}/>
                </div>
                <div className="col-6">
                    Some details
                </div>
                <div className="col text-center">
                    Other details
                </div>
            </div>
        )
    }
}

const styles = {
    container: css({
        padding: 30,
        height: "100vh"
    }),
    labelChoose: css({
        fontSize: 72,
        color: "#EFEFEF",
        fontWeight: 500
    }),
}

const mapStateToProps = createStructuredSelector({
    pokemon: selectors.getPokemon,
    isFetching: selectors.getIsFetching
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemon: (id) => dispatch(actions.fetchPokemon(id))
    };
};


Container.propTypes = {
    /** Action to dispatch list of pokemons */
    fetchPokemon: PropTypes.func.isRequired,

    /** List of pokemons */
    pokemon: PropTypes.object.isRequired,

    /** Is fetching the list */
    isFetching: PropTypes.bool.isRequired,

    /** Info data url */
    match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);