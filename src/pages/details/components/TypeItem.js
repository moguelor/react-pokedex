import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

const TypeItem = ({ name }) => (
    <div className={`col-6`}>
        <div className={`${styles.type}`}> {name.toUpperCase()} </div>
    </div>
)

const styles = {
    type: css({
        backgroundColor: "#F3DD5F",
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