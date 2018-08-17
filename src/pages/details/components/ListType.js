import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'glamor'
import TypeItem from './TypeItem'

const ListTypes = ({types}) => (
    <div className={`${styles.containerTypes} row justify-content-md-center`}>
        {
            types.map(({ type: { name } }, index) => {return <TypeItem  key={index} name={name} />})
        }
    </div>
)

const styles = {
    containerTypes: css({
        marginTop: 5,
        marginBottom: 15
    })
}

ListTypes.propTypes = {
    /** Types */
    types : PropTypes.array.isRequired
}

export default ListTypes