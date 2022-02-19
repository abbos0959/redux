import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHttp } from "../hook/useHttp";
import { v4 } from "uuid";
import {NewsAddForma} from "./action"

export const NewsAddForm = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const { request } = useHttp();
  const dispatch=useDispatch()
  const {filters,filterLoadingStatus}=useSelector(state=>state)


  const HandleSubmit=(e)=>{
    e.preventDefault()
    const newNews={id:v4(),name,description,category}
    request("http://localhost:3001/news","POST",JSON.stringify(newNews))
    .then(dispatch(NewsAddForma(newNews)))
    
    setcategory("")
    setname("")
    setdescription("")
  }

  const renderFilters=(filters,status)=>{
    if(status==="loading"){
      return <option>Loading Option</option>
    }
    else if( status==="error"){
      return <option>Error option</option>

    }
    if(filters && filters.length>0){
      return filters.map(({name,label})=>{
        if(name==="all") return;
        return <option key={name} value={name}>{label}</option>
      })
    }

  }
  return (
    <form onSubmit={HandleSubmit} className=" abbos border p-4 mx-4 shadow-lg rounded">
      <div className="mb-3">
        <label  htmlFor="name" className="form-label fs-4">
          Name for new News
        </label>
        <input
          className="form-control"
          id="name"
          type="text"
          required
          name="name"
          value={name}
          onChange={(e)=>setname(e.target.value)}
          placeholder="what is name of news"
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Description
        </label>
        <textarea
          style={{ height: "120px" }}
          className="form-control"
          id="text"
          type="text"
          required
          value={description}
          onChange={(e)=>setdescription(e.target.value)}
          name="text"
          placeholder="what is your news about"
        ></textarea>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="category">
          Choose category of news
        </label>
        <select onChange={(e)=>setcategory(e.target.value)} value={category} required className="form-select" id="category" name="category">
          <option>News about...</option>
         {renderFilters(filters,filterLoadingStatus)}
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-primary shadow-lg text-light w-100"
      >
        
        Create News
      </button>
    </form>
  );
};
