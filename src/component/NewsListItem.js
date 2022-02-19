import React from "react";
import news from "../accets/new.jpg";
import { useDispatch } from "react-redux";
import { deleted } from "./action";
import {useHttp} from "../hook/useHttp"


export const NewsListItem = ({name, description, category,id }) => {
  const {request}=useHttp()
  const dispatch=useDispatch()
  
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
  // console.log(id)

  const HandleDelete=()=>{
    console.log(id);
    request(`http://localhost:3001/news/${id}`,"DELETE")
    .then(dispatch(deleted(id)))

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
        <button onClick={HandleDelete} type="button" aria-label="close" className="btn-close"></button>
      </span>
    </li>
  );
};
