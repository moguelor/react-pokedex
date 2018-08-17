import { NAME } from './constants';
import { createSelector } from 'reselect';

export const getModel = state => {
    return state[NAME];
};

export const getPokemon = createSelector(
    getModel,
    (model) => model.pokemon
);

export const getIsFetching = createSelector(
    getModel,
    (model) => model.is_fetching
);

export const getErrors = createSelector(
    getModel,
    (model) => model.errors
);
