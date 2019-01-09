import { NAME } from './constants';
import { createSelector } from 'reselect';

export const getModel = state => {
    return state[NAME];
};

export const getPokemons = createSelector(
    getModel,
    (model) => model.pokemons
);

export const getIsFetching = createSelector(
    getModel,
    (model) => model.is_fetching
);

export const getErrors = createSelector(
    getModel,
    (model) => model.errors
);

export const getIsOpen = createSelector(
    getModel,
    (model) => model.is_open
);

