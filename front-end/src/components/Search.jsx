import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search({ currentpage }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (currentpage === "home") {
      navigate("/search/searchedbyingredient/" + search);
    } else {
      navigate("/search/searchedbyname/" + search);
    }
  };
  const placeholderText =
    currentpage === "home" ? "Search by Ingredient" : "Search by Recipe Name";
  return (
    <div className=" text-black font-['Neue_Montreal']">
      <div className=" grid gap-8 items-start justify-center pt-12">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-lime-300 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative inset-0 flex items-center justify-between px-4 py-1 leading-none bg-[#F8FAE5] rounded-xl overflow-hidden">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              id="search"
              className="bg-[#F8FAE5] text-xl w-[35vw] pl-2 focus:ring-[#F8FAE5] border-none focus:outline-none"
              type="text"
              name="search"
              placeholder={placeholderText}
            />
            <button
              type="submit"
              onClick={submitHandler}
              className=" input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700"
            >
              <FaSearch size={35} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
