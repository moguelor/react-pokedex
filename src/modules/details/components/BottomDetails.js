import React from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'

const BottomDetails = ({ abilities, weight, height }) => (
    <div>
        <div className={styles.labelDetail}> Habilities </div>
        {
            abilities.map((ability, index) => {
                return (
                    <span className={styles.tag} key={index}>
                        {ability.name}
                    </span>
                )
            })
        }
        <div className={styles.labelDetail}> Weight </div>
        <span className={styles.tag}>
            {weight} pounds
    </span>

        <div className={styles.labelDetail}> Height </div>
        <span className={styles.tag}>
            {height} inches
    </span>
    </div>

)

const styles = {
    labelDetail: css({
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 15
    }),
    tag: css({
        marginRight: 15,
        fontSize: 12,
    })
}

BottomDetails.propTypes = {
    abilities : PropTypes.array,
    weight : PropTypes.string,
    height : PropTypes.string,
}

export default BottomDetails