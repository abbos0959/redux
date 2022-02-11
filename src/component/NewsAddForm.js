import React from "react";

export const NewsAddForm = () => {
  return (
    <form className=" abbos border p-4 mx-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Name for new News
        </label>
        <input
          className="form-control"
          id="name"
          type="text"
          required
          name="name"
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
          name="text"
          placeholder="what is your news about"
        ></textarea>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="category">
          Choose category of news
        </label>
        <select required className="form-select" id="category" name="category">
          <option >News about...</option>
          <option value="hot">Hot News</option>
          <option value="sport"> sport news</option>
          <option value="world"> world news</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary shadow-lg text-light w-100"> Create News</button>
    </form>
  );
};
