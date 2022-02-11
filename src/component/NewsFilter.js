import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HotFilters, NewsFilters } from "../component/action";
import { useHttp } from "../hook/useHttp";

export const NewsFilter = () => {
  const { news } = useSelector((state) => state);
  let AllCategory = ["all", ...new Set(news.map((val) => val.cat))];
  console.log(AllCategory);
  let abbos = AllCategory.join(" ");

  console.log(news.map(({ cat }) => cat));
  const { request } = useHttp();
  let cat = news.map((val) => {
    return val.cat;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    request("http://localhost:3001/filter ").then((data) =>
      dispatch(NewsFilters(data))
    );
  }, []);

  let All;

  for (let i = 0; i < AllCategory.length; i++) {
    switch (AllCategory[i]) {
      case "all":
        All = "btn btn-danger";
        break;
      default:
        All = "btn btn-primary";
    }
  }
  return (
    <div className="card shadow-lg mt-4 text-center mx-4">
      <div className="card-body">
        <p className="card-text"> Filter by category</p>
        <div className="btn-group w-100 ">
          {AllCategory.map((valu, index) => (
            <button
              key={index}
              className={`${All}`}
              onClick={() => dispatch(HotFilters(valu))}
            >
              {valu}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
