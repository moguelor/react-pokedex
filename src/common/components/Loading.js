import React from 'react'
import {css} from 'glamor'

const Loading = () => (
    <div className={`${styles.container} text-center`}>
        <i className="fa fa-circle-o-notch fa-spin fa-3x"></i>  <br/>
        <span className={styles.text}> Loading... </span>
    </div>
)

const styles = {
    container : css({
        margin : 10
    }),
    text : css({
        fontSize: 12,
        fontWeight : 300
    })
}

export default Loading