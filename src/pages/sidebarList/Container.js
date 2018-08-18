import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { css } from 'glamor'
import { Sidebar } from './components'
import { Motion, spring, presets } from 'react-motion'
import details from '../details';
import * as actions from './actions'
import * as selectors from './selectors'


class Container extends Component {

    componentDidMount() {
        const { fetchPokemons } = this.props;
        fetchPokemons();
    }

    render() {

        const { pokemons, isFetching, redirectToPokemon, activePokemonId, isOpen } = this.props;

        return (
            <div>
                <div className={styles.sidebarDesktop}>
                    <Sidebar
                        pokemons={pokemons}
                        isFetching={isFetching}
                        redirectToPokemon={redirectToPokemon}
                        activePokemonId={activePokemonId}
                    />
                </div>

                <Motion defaultStyle={{ x: -450 }} style={{ x: spring(isOpen ? 0 : -450, presets.noWobble) }}>
                    {
                        ({ x }) => <div className={styles.sidebarMobile} style={{ left: `${x}px` }}>
                            <Sidebar
                                pokemons={pokemons}
                                isFetching={isFetching}
                                redirectToPokemon={redirectToPokemon}
                                activePokemonId={activePokemonId}
                            />
                        </div>
                    }
                </Motion>

            </div>

        )

    }
}

const styles = {
    sidebarMobile: css({
        display: "none",
        '@media(max-width: 576px)': {
            zIndex: 999,
            position: 'fixed',
            display: 'block',
            width: "80%",
        }
    }),
    sidebarDesktop: css({
        display: "block",
        '@media(max-width: 576px)': {
            zIndex: 999,
            display: "none",
            width: "80%",
        }
    })
};

const mapStateToProps = createStructuredSelector({
    pokemons: selectors.getPokemons,
    isFetching: selectors.getIsFetching,
    activePokemonId: details.selectors.getActivePokemonId,
    isOpen: selectors.getIsOpen
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemons: () => dispatch(actions.fetchPokemons()),
        redirectToPokemon: (id) => dispatch(actions.redirectToPokemon(id))
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
    redirectToPokemon: PropTypes.func,

    /** Active pokemon */
    activePokemonId: PropTypes.string,

    /** Is open panel or not */
    isOpen: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);