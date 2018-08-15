import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { App } from './components'

export default class Container extends Component {
    render() {
        const { store, history } = this.props
        return (
            <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <App />
                    </ConnectedRouter>
            </Provider>
        );
    }
}

Container.propTypes = {
    /**
     * Redux store.
     */
    store: PropTypes.object.isRequired,

    /**
     * Browser histoy.
     */
    history: PropTypes.object.isRequired
};

