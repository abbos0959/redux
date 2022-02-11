import React, { useEffect } from "react";
import { useHttp } from "../hook/useHttp";
import { useDispatch, useSelector } from "react-redux";
import {
  newsFetching,
  newsFetched,
  newsFetchingError,
} from "../component/action";
import {Spinner} from "./Spinner";
import {Error} from "./Error";
import { NewsListItem } from "./NewsListItem";

export const NewsList = () => {
  const { news, newsloadingStatus, filters } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();
  

  useEffect(() => {
    dispatch(newsFetching());

    request("http://localhost:3001/news ")
      .then((data) => dispatch(newsFetched(data)))
      .catch(dispatch(newsFetchingError()));
  }, []);
  if (newsFetchingError === "loading") {
    return <Spinner />;
  } else if (newsFetchingError === "error") {
    return <Error />;
  }
const renderNewList=(arr)=>{
   if(arr.length===0){
       return <h4 className="text-center mt5">News doesn`t exists</h4>
   }
   return arr.map(({id,...props})=>{
       return <NewsListItem id={id} {...props} />
   })
}
const element=renderNewList(news)
  return (
      <ul>{element }</ul>
  )
};
