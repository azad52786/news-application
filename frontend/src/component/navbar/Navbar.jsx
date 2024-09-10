import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { countries, languages } from "../../utils";
import { useAppContext } from "../../context/AppProvider";
import { getSearchData } from "../../service/ApiConnectionBuilder";

const Navbar = ({
  filterLanguage,
  filterCountry,
  setFilterCountry,
  setFilterLanguage,
}) => {
 
  const {
    setCurrentCatagory,
    currentCatagory,
    articles,
    setArticles,
    setIsSearch,
    searchPara,
    setSearchPara, showFilter, setShowFilter
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowFilter(false);
    setArticles([]);
    setCurrentCatagory(0);
  };
  const searchHandeler = async () => {
    setIsSearch(true);
    setCurrentCatagory(0);
    let res = await getSearchData(searchPara);
    if (res) {
      setArticles((pre) => {
        let newArr = [...pre];
        newArr[currentCatagory] = res?.articles;
        return newArr;
      });
    }

    console.log(articles);
    setSearchPara("");
  };

  return (
    <div className="relative w-full h-fit mx-auto bg-richblack-600 border-b border-richblack-50 border-opacity-40">
      <div className="w-[90%] relative z-10 mx-auto h-fit py-2 flex items-center justify-between">
        <div className="h-fit w-fit px-2 md:px-4 rounded-md py-1 pb-3 font-edu-sa text-2xl md:text-3xl bg-white text-black font-bold">
          gnews
        </div>
        <div className="flex items-center justify-end gap-x-3">
          <div className="h-fit rounded-lg w-fit relative">
            <input
              type="text"
              className="h-9 w-[10rem] md:w-[16rem] rounded-[1rem] outline-none bg-richblack-200 pl-5 bg-opacity-75 pr-10"
              placeholder="Search Your News"
              value={searchPara}
              onChange={(e) => setSearchPara(e.target.value)}
            />
            <FaSearch
              className="absolute right-4 top-[30%] text-richblack-5 cursor-pointer"
              onClick={searchHandeler}
            />
          </div>
          <div
            onClick={() => setShowFilter(true)}
            className="h-fit cursor-pointer font-edu-sa flex items-center gap-x-2 font-semibold py-2 bg-blue-200 px-2 rounded-md"
          >
            <p className="hidden md:block text-lg">Filter</p>
            <CiFilter className="w-5 h-5" />
          </div>
        </div>
      </div>
      {showFilter && (
        <div className="flex justify-center items-center min-w-[100vw] fixed min-h-screen bg-transparent backdrop-blur-md z-50 top-0 left-0">
          <div className="w-[90%] md:w-[40%] lg:w-[35%] min-h-52 h-fit bg-richblack-700 rounded-lg">
            <form
              className="w-full h-full flex flex-col justify-around items-center gap-y-7 p-4"
              onSubmit={handleSubmit}
            >
              <div className="w-full flex items-center justify-end">
                <RxCross1
                  className="h-10 w-10 text-richblack-25 cursor-pointer justify-end border border-richblack-5 rounded-md p-2"
                  onClick={() => setShowFilter(false)}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="country"
                  className="text-lg font-edu-sa w-[30%]"
                >
                  Country:
                </label>
                <select
                  name="country"
                  id="country"
                  value={filterCountry}
                  onChange={(e) => setFilterCountry(e.target.value)}
                  className="bg-richblack-800 w-[calc(100%-28%)] h-10 rounded-md"
                >
                  {countries.map((country, index) => (
                    <option
                      key={index}
                      value={country.value}
                      className="bg-richblack-700"
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="language"
                  className="text-lg font-edu-sa w-[30%]"
                >
                  Language:
                </label>
                <select
                  name="language"
                  id="language"
                  value={filterLanguage}
                  onChange={(e) => setFilterLanguage(e.target.value)}
                  className="bg-richblack-800 w-[calc(100%-30%)] h-10 rounded-md"
                >
                  {languages.map((language, index) => (
                    <option
                      key={index}
                      value={language.value}
                      className="bg-richblack-700"
                    >
                      {language.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-fit h-fit bg-blue-200 px-4 py-2 rounded-md hover:scale-[1.1] transition-all duration-200 font-edu-sa"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
