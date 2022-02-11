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
      case "NEWS_FILTER":
        return{
          ...state,
          filters:action.payload
        }
    case "NEWS_FETCHING_ERROR":
      return {
        ...state,
        newsloadingStatus: "error",
      };
    case "DELETE":
      return{
        ...state,
    news:state.news.filter((val)=>val.id!==action.payload)
      }
      case "HOT":
        return{
          ...state,
          news:state.news.filter((val)=>val.cat==action.payload)
        }
     
    default:
      return state;
  }
};

export default reducer;
