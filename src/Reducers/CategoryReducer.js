import {
  CATEGORIES,
  LOAD_CATEGORIES,
  DELETE_ITEM,
} from "../Actions/ActionTypes";
const IntialState = {
  category: [],
};

function CategoryReducer(state = IntialState, action) {
  switch (action.type) {
    case CATEGORIES:
      console.log("category2", action.payload);

      let additems = state.category.concat(action.payload);
      return { ...state, category: additems };

    case LOAD_CATEGORIES:
      console.log("category", action.payload);
      console.log("load payload", action.payload);
      //   const loadcontent = state.category.concat(action.payload);
      return { ...state, category: action.payload };
    case DELETE_ITEM:
      const newcategory = state.category.filter(
        (value) => value.id !== action.payload
      );
      return {
        ...state,
        category: newcategory,
      };
  }
  return state;
}

export default CategoryReducer;
