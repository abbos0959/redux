const initialState = {
  news: [],
  newsloadingStatus: "Abbos",
  filters: [],
  filterLoadingStatus: "Abbos",
  activeFilter: "all",
  filteredNews: [],
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
        filteredNews:
          state.activeFilter == "all"
            ? action.payload
            : action.payload.filter((a) => a.category === action.payload),
        // newsloadingStatus: "Abbos",
      };
    // case "NEWS_FILTER":
    //   return {
    //     ...state,
    //     filters: action.payload,
    //   };
    case "NEWS_FETCHING_ERROR":
      return {
        ...state,
        newsloadingStatus: "error",
      };
    case "DELETE":
      return {
        ...state,
        news: state.news.filter((val) => val.id !== action.payload),
      };
    // case "HOT":
    //   return {
    //     ...state,
    //     news: state.news.filter((val) => val.cat == action.payload),
    //   };
    case "ADD_POST":
      let AddPost = [...state.news, action.payload];
      return {
        ...state,
        news: AddPost,
      };
    case "FILTERS_FETCHING":
      return {
        ...state,
        filterLoadingStatus: "loading",
      };
    case "FILTERS_FETCHED":
      return {
        ...state,
        filters: action.payload,
        filterLoadingStatus:"abbos"
      };
      case "FILTERS_FETCHING_ERROR":
        return{
          ...state,
          filterLoadingStatus:"error"
        }
        case "ACTIVE_FILTER_CHANGED":
          return{
            ...state,
            activeFilter:action.payload,
            filteredNews:action.payload==="all"? state.news :state.news.filter((a)=>a.category===action.payload)
          }

    default:
      return state;
  }
};

export default reducer;
