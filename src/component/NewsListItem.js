import React from "react";
import news from "../accets/new.jpg";
import { useDispatch } from "react-redux";
import { deleted } from "./action";


export const NewsListItem = ({ id, name, description, category }) => {
  const dispatch=useDispatch()
  console.log( typeof category);
  let elementClassName;

  switch (category) {
    case "Hot news":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "Sport news":
      elementClassName = "bg-primary bg-gradient";
      break;
    case "World news":
      elementClassName = "bg-secondary bg-gradient";
      break;
    default:
      elementClassName = "bg-info bg-gradient";
  }
  return (
    <li className={`card flex-row shadow-lg text-white my-2  ${elementClassName} `}>
      <img
        style={{ objectFit: "cover" }}
        className="img-fluid w-25 d-inline"
        src={news}
        alt="img not found"
      />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
      </div>
      <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
        <button onClick={()=> dispatch(deleted(id))} type="button" aria-label="close" className="btn-close"></button>
      </span>
    </li>
  );
};
