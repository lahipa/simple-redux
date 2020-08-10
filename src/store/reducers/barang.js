import * as actionTypes from "../actions/barangs/actionTypes";

const initialState = {
  barangs: [],
};

const barangReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BARANGS:
      return {
        ...state,
        barangs: action.payload,
      };
    default:
      return initialState;
  }
};

export default barangReducer;
