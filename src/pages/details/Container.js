import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import * as actions from './actions';
import * as selectors from './selectors';
import { Loading } from '../../common/components';

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
            <div className={`row ${styles.container} `}>
                <div className="col-6">
                    <div className={`row justify-content-md-center text-center`}>
                        <div className={`col-5 ${styles.containerImage}`}>
                            <img src={pokemon.image} />
                        </div>
                        <div className="col-12">
                            <div className={`${styles.containerTypes} row justify-content-md-center`}>
                            {
                                pokemon.types.map(({ type: { name }  }, index) => {
                                    return (
                                        <div className={`col-2 ${styles.type}`} key={index}>{name.toUpperCase()}</div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className="col-12">
                            <span className={styles.namePokemon}> {pokemon.name.toUpperCase()} </span><br />
                            <span className={styles.pokemonNumber}>No. {pokemon.id} </span>
                        </div>
                    </div>
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
    containerImage: css({
        backgroundColor: "#F4F4F4",
        borderRadius: 5,
        border: "1px solid #979797",
        "&>img": {
            width: 250
        }
    }),
    pokemonNumber: css({
        color : "#C5C5C5",
        fontSize: 24,
        fontWeight: 700 
    }),
    namePokemon : css({
        fontSize : 35,
        fontWeight: 700 
    }),
    type: css({
        backgroundColor : "#F3DD5F",
        marginRight: 5,
        borderRadius: 3,
        fontWeight: 700,
        padding : 5,
        "&:hover": {
            backgroundColor : "#A38C22"
        }
    }),
    containerTypes : css({
        marginTop: 5,
        marginBottom: 15
    })
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