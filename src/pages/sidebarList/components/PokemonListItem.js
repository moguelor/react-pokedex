import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const PokemonListItem = ({ number, name }) => (
    <div className={`row justify-content-md-center ${styles.item} `}>
        <div className="col-2 text-right">
            <span>{number}</span>
        </div>
        <div className="col-9">
            {name}
        </div>
    </div>
)

const styles = {
    item: css({
        padding: 10,
        '&:hover': {
            backgroundColor: "#3F3939",
            cursor: "pointer"
        },
        '& span': {
            color: "#797979"
        }
    })
}

PokemonListItem.propTypes = {
    /** Number of pokemon */
    number : PropTypes.number.isRequired,

    /** Name of pokemon */
    name : PropTypes.string.isRequired
}

export default PokemonListItem;