import { FETCH_PROJECTS_LIST, SEARCH_PROJECTS_LIST, SORT_PROJECTS_LIST } from "../actions/types";

const initialState = {
  projects: [],
  searchTerms: "",
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS_LIST:
      return {
        ...state,
        projects: action.payload,
      };
    case SEARCH_PROJECTS_LIST:
      return {
        ...state,
        searchTerms: action.value,
      };

    case SORT_PROJECTS_LIST:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
}
