import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { useHttp } from "../hook/useHttp";
import { Spinner } from "../component/Spinner";
import { Error } from "../component/Error";
import {
  filtersFetching,
  filtersFetched,
  activeFilterChange,
  filterFetchingError,
} from "../component/action";

export const NewsFilter = () => {
  const { request } = useHttp();
  const { news, filters, filterLoadingStatus, activeFilter } = useSelector(
    (state) => state
  );
  // let AllCategory = ["all", ...new Set(news.map((val) => val.cat))];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filter").then((data) =>
      dispatch(filtersFetched(data)).catch((err) => console.log(err))
    );
  }, []);
  if (filterLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filterLoadingStatus === "error") {
    return <Error />;
  }
  const renderFilters = (arr) => {
    if (arr.length === 0) {
      return <h3 className="text-center mt-5">Ma`lumot topilmadi</h3>;
    }

    return arr.map(({ name, className, label }) => {
      const btnClasses = classNames("btn", className, {
        active: name === activeFilter,
      });

      return (
        <button
          key={name}
          id={name}
          className={btnClasses}
          onClick={() => dispatch(activeFilterChange(name))}
        >
          {label}
        </button>)
      
    });
  };
  const element = renderFilters(filters);

  return (
    <div className="card shadow-lg mt-4 text-center mx-4">
      <div className="card-body">
        <p className="card-text"> Filter by category</p>
        <div className="btn-group">
          {element}
          </div>
      </div>
    </div>
  );
};
