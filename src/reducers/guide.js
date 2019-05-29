import { FETCH_DATA, FETCH_TAGS } from '../actions/events';

const initialState = {
  data: [],
  tags: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        data: action.data,
      };
    }
    case FETCH_TAGS: {
      return {
        ...state,
        tags: action.data,
      };
    }
    default:
      return state;
  }
}
