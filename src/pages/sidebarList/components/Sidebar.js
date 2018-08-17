import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { Loading } from '../../../common/components'
import PokemonList from './PokemonList'
import TopBar from './TopBar'

const Sidebar = ({ pokemons, isFetching }) => (
    <div className={styles.container}>
        <TopBar />
        {
            isFetching
                ? <Loading />
                : <PokemonList pokemons={pokemons} />
        }
    </div>
)

const styles = {
    container: css({
        width: "100%",
        backgroundColor: "#565252",
        height: "100vh",
        overflow: "scroll",
        position: 'relative',
        '@media(max-width: 768px)': {
            width: "100%"
        },
        '@media(max-width: 576px)': {
            position: "fixed",
            width: "80%",
        }
    })
};

Sidebar.propTypes = {
    /** List of pokemons */
    pokemons: PropTypes.array.isRequired,

    /** Flag to indicate fetching data */
    isFetching: PropTypes.bool.isRequired
}

export default Sidebar;

