import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name,cuisines,areaName,avgRating,costForTwo} = resData?.info;
    return (
      <div className="p-6 m-8 w-[300px] rounded-lg h-[430px] hover:scale-95 transition-transform duration-300 ease-in-out">
        <img
          className="h-56 w-52 rounded-lg object-cover"
          src={ CDN_URL + resData.info.cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold text-lg mt-2">{name}</h3>
        <h4 className="font-semibold">⭐ {avgRating}  ▪  {costForTwo} </h4>
        <h4 className="italic">{cuisines.join(", ")}</h4>
        <h4 className="italic">{areaName}</h4>
      </div>
    );
  };

  export default RestaurantCard;