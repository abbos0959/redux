export const newsFetching = () => {
  return {
    type: "NEWS_FETCHING",
  };
};
export const newsFetched = (news) => {
  return {
    type: "NEWS_FETCHED",
    payload: news,
  };
};
export const NewsFilters = (filter) => {
  return {
    type: "NEWS_FILTER",
    payload: filter,
  };
};
export const HotFilters=(cat)=>{
  return{
    type:"HOT",
    payload:cat,
  }
}

export const newsFetchingError = () => {
  return {
    type: "NEWS_FETCHING_ERROR",
  };
};
export const deleted = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};
