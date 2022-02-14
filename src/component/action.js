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
// export const NewsFilters = (filter) => {
//   return {
//     type: "NEWS_FILTER",
//     payload: filter,
//   };
// };
// export const HotFilters=(cat)=>{
//   return{
//     type:"HOT",
//     payload:cat,
//   }
// }

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
export const NewsAddForma = (item) => {
  return {
    type: "ADD_POST",
    payload: item,
  };
};

export const filtersFetching = () => {
  return {
    type: "FILTERS_FETCHING",
  };
};
export const filtersFetched = (filters) => {
  return {
    type: "FILTERS_FETCHED",
    payload: filters ,
  };
};
export const filterFetchingError = () => {
  return {
    type: "FILTERS_FETCHING_ERROR",
  };
};
export const activeFilterChange = (filter) => {
  return {
    type: "ACTIVE_FILTER_CHANGED",
    payload: filter,
  };
};
