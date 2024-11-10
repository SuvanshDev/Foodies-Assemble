import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { CDN_URL } from '../utils/constant';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    totalRatingsString,
    avgRating,
    cloudinaryImageId,
  } = resInfo?.cards[2]?.card?.card?.info;
  console.log(
    "resInfo?.cards[2]?.card?.card?.info ",
    resInfo?.cards[2]?.card?.card?.info
  );
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log(itemCards);

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

      <div className="bg-yellow-300 m-2 p-2 w-[900px]">
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
