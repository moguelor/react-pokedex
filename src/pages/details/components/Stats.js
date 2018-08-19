import React from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'

const Stats = ({stats}) => {
    return (
        <div className={`row ${styles.containerStats}`}>
            <div className="col-12"> STATS </div>
            <hr />
            {
                stats.map((stat, index) => {
                    return (
                        <div key={`stat-${index}`} className="col-6 item">
                            <label>{stat.name.toUpperCase()}</label> <br />
                            <span>{stat.base_stat} </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

const styles = {
    containerStats: css({
        padding: 10,
        border: "2px solid #E54545",
        borderRadius: 5,
        "& .item": {
            marginTop: 20
        },
        "& label": {
            color: "#000",
            fontWeight: "600",
            fontSize: 11
        },
        "& span": {
            color: "red",
            fontWeight: "300",
            fontSize: 25
        }
    })
}

Stats.propTypes = {
    stats : PropTypes.array
}

export default Stats