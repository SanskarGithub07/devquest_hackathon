import React from "react";

const Search = () => {
  return (
        <div className="m-4 h-[360px] rounded-lg text-center flex flex-col gap-5 items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/images/compare_bg.jpg")'}}>
      <h1 className="text-4xl w-1/2 font-jakarta-sans text-white">Compare product prices over multiple <br/> e-commerce websites.</h1>
      <div className="form-control w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered bg-white"
        />
      </div>
    </div>
   
  );
};

export default Search;