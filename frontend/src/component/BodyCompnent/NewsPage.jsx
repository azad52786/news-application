import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { categories, languages } from "../../utils";
import { FaArrowRight } from "react-icons/fa6";
import Apiconnection from "../../service/Apiconnection";
import { BASE_URL } from "../../utils";
import NewsCard from "./NewsCard";
import CallShimmer from "../shimmerComponent/CallShimmer";
import { useAppContext } from "../../context/AppProvider";
const NewsPage = ({ filterLanguage, filterCountry }) => {
  let {
    setArticles,
    articles,
    currentCatagory,
    setCurrentCatagory,
    isSearch,
    setIsSearch,
  } = useAppContext();
  useEffect(() => {
    (async () => {
      try {
        console.log('newspage called' , currentCatagory)
        if (articles[currentCatagory] === undefined && !isSearch) {
          const response = await Apiconnection(
            "get",
            BASE_URL + "/getCatagoryData",
            null,
            null,
            {
              category: categories[currentCatagory],
              country: filterCountry || "in",
              language: filterLanguage || "en",
            }
          );
          console.log(response);
          if(!response.data.success){
            throw new Error("backend Error")
          }
          setArticles((prevArticles) => {
            const newArticles = [...prevArticles];
            newArticles[currentCatagory] = response.data?.data.articles || [];
            return newArticles;
          });
          console.log(articles)
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [currentCatagory , isSearch]);
  return (
    <div className=" w-full h-full">
      <div className=" w-[90%] md:[80%] lg:[70%] mx-auto">
        <div
          className=" w-full flex items-center justify-center 
          mt-6 gap-x-10"
        >
          {!isSearch && (
            <>
              <FaArrowLeft
                className={`w-10 h-10 p-2 bg-yellow-25
               rounded-full text-richblack-800 
               ${currentCatagory === 0 ? "" : "cursor-pointer"}`}
                onClick={() => {
                  if (currentCatagory > 0)
                    setCurrentCatagory(currentCatagory - 1);
                }}
              />
              <div className=" font-edu-sa text-3xl">
                {currentCatagory + 1 + " / " + categories.length}
              </div>
              <FaArrowRight
                className={`w-10 h-10 p-2 bg-yellow-25
               rounded-full text-richblack-800 
               ${
                 currentCatagory === categories.length - 1
                   ? ""
                   : "cursor-pointer"
               }`}
                onClick={() => {
                  if (currentCatagory < categories.length - 1)
                    setCurrentCatagory(currentCatagory + 1);
                }}
              />
            </>
          )}
          {isSearch && (
            <button
              onClick={() => {
                setIsSearch(false);
                setArticles([]);
                setCurrentCatagory(0);
              }}
              className=" w-fit bg-blue-100 py-2 px-3 rounded-md "
            >
              show all data
            </button>
          )}
        </div>
        {articles[currentCatagory] === undefined ||
        !articles[currentCatagory] ? (
          <CallShimmer />
        ) : articles[currentCatagory].length <= 0 ? (
          <div
            className=" w-full flex justify-center items-center text-3xl font-edu-sa
              mt-20 font-bold
          "
            style={{
              background:
                "linear-gradient(90deg, rgba(62, 185, 55, 1) 24%, rgba(0, 188, 212, 1) 40%, rgba(238, 130, 238, 1) 69%, rgba(37, 230, 255, 1) 86%) ",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            No articles available.
          </div> // Handle the case when there are no articles
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-4">
            {articles[currentCatagory].map((article, index) => (
              <NewsCard data={article} index={index} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
