// ------------------------------------
// Constants
// ------------------------------------
export const MATRIX_SETTING = 'MATRIX_SETTING';

// ------------------------------------
// Actions
// ------------------------------------
export function setMatrix(matrix) {
  return {
    type: MATRIX_SETTING,
    payload: matrix
  }
}

export const actions = {
  setMatrix
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [MATRIX_SETTING]: (state, action) => {
    return {...state, matrix: [ ...action.payload] };
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {matrix: []};

export default function TictactoeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
};
