import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const PokemonListItem = ({ number, name, handleClickItem, activeItem }) => (
    <div className={`row justify-content-md-center ${css(styles.item,  activeItem && styles.activeItem)}`} onClick={handleClickItem}>
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
    }),
    activeItem : css({
        backgroundColor: "#3F3939"
    })
}

PokemonListItem.propTypes = {
    /** Number of pokemon */
    number : PropTypes.number.isRequired,

    /** Name of pokemon */
    name : PropTypes.string.isRequired,

    /** Handle click to redirect pokemon */
    handleClickItem : PropTypes.func,

    /** If is active the item list */
    activeItem : PropTypes.bool,
}

export default PokemonListItem;