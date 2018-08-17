import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const TypeItem = ({ name }) => (
    <div className={`col-2 ${styles.type}`}>{name.toUpperCase()}</div>
)

const styles = {
    type: css({
        backgroundColor: "#F3DD5F",
        marginRight: 5,
        borderRadius: 3,
        fontWeight: 700,
        padding: 5,
        "&:hover": {
            backgroundColor: "#A38C22"
        }
    }),
}

TypeItem.propTypes = {
    /** Type name */
    name: PropTypes.string.isRequired
}

export default TypeItem