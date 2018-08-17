import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'glamor'
import PokemonListItem from './PokemonListItem'

const PokemonList = ({ pokemons, redirectToPokemon, activePokemonId }) => (
    <div className={`${styles.listItems}`}>
        {
            pokemons.map((pokemon, index) => {
                return (
                    <PokemonListItem 
                        key = {`pokemon-${index}`}
                        number = { index + 1 }
                        name = { pokemon.name.toUpperCase() }
                        handleClickItem = { () => redirectToPokemon(index + 1)}
                        activeItem = {activePokemonId == index + 1}
                    />
                )
            })
        }
    </div>
)

const styles = {
    listItems: css({
        color: "#fff"
    })
}

PokemonList.propTypes = {
    /** List of pokemons */
    pokemons : PropTypes.array.isRequired,

    /** Function to redirect page */
    redirectToPokemon : PropTypes.func,

    /** Active pokemon id */
    activePokemonId : PropTypes.number
}

export default PokemonList;