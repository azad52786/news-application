import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { categories } from "../../utils";
import { FaArrowRight } from "react-icons/fa6";
import Apiconnection from "../../service/Apiconnection";
import { BASE_URL } from "../../utils";
import NewsCard from "./NewsCard";
import Shimmer from "../shimmerComponent/ShimmerCard";
import CallShimmer from "../shimmerComponent/CallShimmer";
const NewsPage = ({ isSearch, setIsSearch }) => {
  const [currentCatagory, setCurrentCatagory] = useState(0);
  let [articles, setArticles] = useState([]);
  // const { articles } =
  useEffect(() => {
    (async () => {
      try {
        setArticles([]);
        const response = await Apiconnection(
          "get",
          BASE_URL + "/getCatagoryData",
          null,
          null,
          { category: categories[currentCatagory] }
        );
        console.log(response);
        setArticles(response.data?.data.articles);
        console.log(articles);
      } catch (e) {
         // if api reached maximum call show a toast message remaining
        console.log(e);
      }
    })();
  }, [currentCatagory]);
  return (
    <div className=" w-full h-full">
      <div className=" w-[90%] md:[80%] lg:[70%] mx-auto">
        <div
          className=" w-full flex items-center justify-center 
          mt-6 gap-x-10"
        >
          <FaArrowLeft
            className={`w-10 h-10 p-2 bg-yellow-25
               rounded-full text-richblack-800 
               ${currentCatagory === 0 ? "" : "cursor-pointer"}`}
            onClick={() => {
              if (currentCatagory > 0) setCurrentCatagory(currentCatagory - 1);
            }}
          />
          <div className=" font-edu-sa text-3xl">
            {currentCatagory + 1 + " / " + (categories.length + 1)}
          </div>
          <FaArrowRight
            className={`w-10 h-10 p-2 bg-yellow-25
               rounded-full text-richblack-800 
               ${
                 currentCatagory === categories.length ? "" : "cursor-pointer"
               }`}
            onClick={() => {
              if (currentCatagory < categories.length)
                setCurrentCatagory(currentCatagory + 1);
            }}
          />
        </div>
        {articles.length === 0 ? (
          <CallShimmer />
        ) : (
          <div className=" mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-4">
            {articles.map((article, index) => (
              <NewsCard data={article} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
