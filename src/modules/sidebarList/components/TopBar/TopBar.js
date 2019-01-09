import React from 'react'
import {css} from 'glamor'
import pokeballImage from 'resources/images/pokeball.png'

const TopBar = () => (
    <div className={`text-center sticky-top ${styles.topBar}`}>
        <img className={styles.image} src={pokeballImage} /> <span className={`align-middle ellipsis ${styles.textImage} `}>POKÉDEX</span>
    </div>
)

const styles = {
    topBar: css({
        backgroundColor: "#343030",
        color: "#fff",
        padding: 15,
        width: "100%",
    }),
    image: css({
        marginRight: 5,
    }),
    textImage: css({
        fontSize: 36,
        '@media(max-width: 576px)': {
            fontSize: 30
        }
    }),
}

export default TopBar