import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage,areaName,avgRating,totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  // console.log('categories :>> ', categories);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" pt-8 m-2 p-4 flex flex-row justify-between w-[900px] items-start shadow-lg">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-black">{name}</h1>
          <p className="italic">{cuisines.join(",")}</p>
          <p>{costForTwoMessage}</p>
          <p className=" text-gray-600">{areaName}</p>
        </div>

        {/* Right side element */}
        <div className="p-2 shadow-sm">
          {avgRating > 4.0 ? (
            <p className="text-green-500"> {avgRating} ⭐</p>
          ) : (
            <p className="text-red-500">{avgRating} ⭐</p>
          )}
          <p>---------------</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>

      <div className=" m-2 p-2 w-[900px]">
        {/* categories accordion */}
        {categories.map((category) => (
        <RestaurantCategory data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
