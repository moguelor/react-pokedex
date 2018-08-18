import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { PokemonInfo } from './components'
import { Loading } from '../../common/components'
import sidebarList from '../sidebarList'
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
        const { pokemon, isFetching, handleClickOpenSidebar } = this.props;

        if (isFetching) {
            return <div className={`row align-items-center ${styles.container}`}>
                <div className={`text-center col`}>
                    <Loading />
                </div>
            </div>

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
            <div className={`row ${styles.container} align-items-center`}>
                <div className="col-12">
                    <span className={`${styles.buttonPanel} fa fa-bars`} onClick={handleClickOpenSidebar} />
                </div>
                <div className="col-md-6 col-sm-12 col-12 text-center">
                    <PokemonInfo pokemon={pokemon} />
                </div>
                <div className="col text-center ">
                    Some details
                </div>
                <div className="col-12 text-center">
                    Other details
                </div>
            </div>
        )
    }
}

const styles = {
    container: css({
        padding: 30,
        height: "100vh",
        '@media(max-width: 576px)': {
            paddingTop: 0,
        }
    }),
    labelChoose: css({
        fontSize: 72,
        color: "#EFEFEF",
        fontWeight: 500
    }),
    buttonPanel: css({
        fontSize: 24,
        color: "#565252",
        display: "none",
        '@media(max-width: 576px)': {
            display: "block"
        }
    })
}

const mapStateToProps = createStructuredSelector({
    pokemon: selectors.getPokemon,
    isFetching: selectors.getIsFetching
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemon: (id) => dispatch(actions.fetchPokemon(id)),
        handleClickOpenSidebar: () => dispatch(sidebarList.actions.openPanel())
    };
};


Container.propTypes = {
    /** Action to dispatch list of pokemons */
    fetchPokemon: PropTypes.func.isRequired,

    /** List of pokemons */
    pokemon: PropTypes.object,

    /** Is fetching the list */
    isFetching: PropTypes.bool.isRequired,

    /** Info data url */
    match: PropTypes.object,

    /** Action to open sidebar */
    handleClickOpenSidebar: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
