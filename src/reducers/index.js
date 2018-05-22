import { combineReducers } from 'redux';
import { SELECT_SOURCE, INVALIDATE_SOURCE, REQUEST_POSTS, RECEIVE_POSTS, SELECT_SOURCES, SELECT_ALL, UNSELECT_ALL } from '../actions/types';


function selectedSources(state = {}, action) {
  switch (action.type) {
    case SELECT_SOURCE:
      var newState = Object.assign({}, state)

      action.sourceList.map(source => {
        newState[source].isSelected = !newState[source].isSelected
      })
      /*
      else {
        newState[sourceTitle].isSelected = false
      }
      */
      return newState;
    case SELECT_ALL:
      var newState = Object.assign({}, state)
      action.sourceList.map(source => {
        newState[source].isSelected = true
      })
      return newState

    case UNSELECT_ALL:
      var newState = Object.assign({}, state)
      action.sourceList.map(source => {
        newState[source].isSelected = false
      })
      return newState
    default:
      return state;
  }
}


function posts(state = {
  isFetching: false,
  didInvalidate: true,
  items: []
}, action) {

  switch (action.type) {
    case INVALIDATE_SOURCE:

      return Object.assign({}, state, { didInvalidate: true });
    case REQUEST_POSTS:

      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });

    default:
      return state;
  }
}


function postsBySource(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SOURCE:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:

      return Object.assign({}, state, {
        [action.source.title]: posts(state[action.source], action)
      })
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  postsBySource,
  selectedSources
});

export default rootReducer;