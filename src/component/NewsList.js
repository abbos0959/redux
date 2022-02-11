import React, { useEffect } from "react";
import { useHttp } from "../hook/useHttp";
import { useDispatch, useSelector } from "react-redux";
import {newsFetching ,newsFetched,newsFetchingError}from "../component/action"


export const NewsList = () => {
  const {news,newsloadingStatus,filters } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(newsFetched(news))
  }, []);
  const { request } = useHttp();
  return <h1>NewsList</h1>;
};
