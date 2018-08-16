import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Sidebar } from './components'
import { createStructuredSelector } from 'reselect'
import * as actions from './actions';
import * as selectors from './selectors';

class Container extends Component {

    componentDidMount() {
        const { fetchPokemons } = this.props;
        fetchPokemons();
    }

    render() {

        const { pokemons, isFetching } = this.props;

        return (
            <Sidebar
                pokemons={pokemons}
                isFetching={isFetching}
            />
        )
    }
}


const mapStateToProps = createStructuredSelector({
    pokemons: selectors.getPokemons,
    isFetching: selectors.getIsFetching
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemons: () => dispatch(actions.fetchPokemons())
    };
};


Container.propTypes = {
    /** Action to dispatch list of pokemons */
    fetchPokemons: PropTypes.func.isRequired,

    /** List of pokemons */
    pokemons: PropTypes.array.isRequired,

    /** Is fetching the list */
    isFetching: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);