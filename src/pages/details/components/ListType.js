import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'glamor'

const ListTypes = ({types}) => (
    <div className={`${styles.containerTypes} row justify-content-md-center`}>
        {
            types.map(({ type: { name } }, index) => {
                return  <div className={`col`} key={index}>
                    <div className={`${styles.type}`}> {name.toUpperCase()} </div>
                </div>
            })
        }
    </div>
)

const styles = {
    containerTypes: css({
        marginTop: 5,
        marginBottom: 15
    }),
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

ListTypes.propTypes = {
    /** Types */
    types : PropTypes.array.isRequired
}

export default ListTypes