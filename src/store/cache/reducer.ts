import { actionTypes, ADD_IMAGE_CACHE, CLEAR_CACHE } from "./actions";

interface iInitialState {
  image: any;
}

const initialState: iInitialState = {
  image: {},
};

function reducer(state = initialState, action: actionTypes): iInitialState {
  switch (action.type) {
    case ADD_IMAGE_CACHE: {
      if (Object.keys(state.image).includes(action.key)) return state;
      return {
        ...state,
        image: { ...state.image, [action.key]: action.value },
      };
    }
    case CLEAR_CACHE:
      return { ...initialState };
    default:
      return state;
  }
}

export default reducer;
