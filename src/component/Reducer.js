const initialState = {
  news: [],
  newsloadingStatus: "Abbos",
  filters: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEWS_FETCHING":
      return {
        ...state,
        newsloadingStatus: "loading",
      };
    case "NEWS_FETCHED":
      return {
        ...state,
        news: action.payload,
        newsloadingStatus: "Abbos",
      };
    case "NEWS_FETCHING_ERROR":
      return {
        ...state,
        newsloadingStatus: "error",
      };

    default:
      return state;
  }
};

export default reducer;
