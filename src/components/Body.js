import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListofRes, setListOfRes] = useState([]);
  const [FilteredListofRes, setFilteredListOfRes] = useState([]);

  const [searchText, setSearchText] = useState("");
  
  const RestaurantCardOpen = withOpenLabel(RestaurantCard);
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0970737&lng=73.0117476&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus =useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you are offline!! Please check your internet connection.</h1>

  return ListofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gray-50">
      <div className=" m-8 flex items-center justify-center">
        <div className="">
          <input
            type="text"
            className="border border-black border-solid rounded-md w-96"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="px-2 py-1 bg-orange-200 mx-2 rounded-md"
            onClick={() => {
              // filter for search the restaurant and update the UI
              console.log(searchText);
              const filteredRes = ListofRes.filter((res) => {
                return res.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredListOfRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-2 py-1 bg-orange-200 mx-8 rounded-md"
          onClick={() => {
            // Filter logic
            console.log("Original List:", ListofRes);
            const filteredList = ListofRes.filter(
              (res) => res.info.avgRating > 4.1
            );
            console.log("Filtered List:", filteredList);
            setListOfRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        { FilteredListofRes.map((restaurant) => (
          <Link  
          key={restaurant.info.id} 
          to={"/restaurants/" + restaurant.info.id}>
          {restaurant.info.isOpen ? (
           <RestaurantCardOpen resData={restaurant} />
           ) : (
            <RestaurantCard resData={restaurant} />
           )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
