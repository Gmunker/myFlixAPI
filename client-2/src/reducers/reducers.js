import { combineReducers } from 'redux';

import { SET_FILTER, SET_MOVIES, SET_SORT_COLUMN } from '../actions/actions.js';

function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

function sortColumn(state = 'title', action) {
  switch (action.type) {
    case SET_SORT_COLUMN:
      return action.value;
    default:
      return state;
  }
}

const moviesApp = combineReducers({
  visibilityFilter,
  sortColumn,
  movies
});

export default moviesApp;
