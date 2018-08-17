import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'glamor'
import ListType from './ListType'

const PokemonInfo = ({pokemon : {id, name, image, types }}) => (
    <div className={`row justify-content-md-center text-center`}>
        <div className={`col-5 ${styles.containerImage}`}>
            <img src={image} />
        </div>
        <div className="col-12">
           <ListType 
                types = {types}
           />
        </div>
        <div className="col-12">
            <span className={styles.namePokemon}> {name.toUpperCase()} </span><br />
            <span className={styles.pokemonNumber}>No. {id} </span>
        </div>
    </div>
)

const styles = {
    containerImage: css({
        backgroundColor: "#F4F4F4",
        borderRadius: 5,
        border: "1px solid #979797",
        "&>img": {
            width: 250
        }
    }),
    pokemonNumber: css({
        color: "#C5C5C5",
        fontSize: 24,
        fontWeight: 700
    })
}

PokemonInfo.propTypes = {
    /** Pokemon data */
    pokemon : PropTypes.array.isRequired,
}

export default PokemonInfo