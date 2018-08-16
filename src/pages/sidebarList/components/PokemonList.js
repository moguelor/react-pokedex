import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'glamor'
import PokemonListItem from './PokemonListItem'

const PokemonList = ({ pokemons }) => (
    <div className={`${styles.listItems}`}>
        {
            pokemons.map((pokemon, index) => {
                return (
                    <PokemonListItem 
                        key = { `pokemon-${index}` }
                        number = { index + 1 }
                        name = { pokemon.name.toUpperCase() }
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
    pokemons : PropTypes.array.isRequired
}

export default PokemonList;