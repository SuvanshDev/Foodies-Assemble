import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name,cuisines,areaName,avgRating,costForTwo} = resData?.info;
    console.log('resData:>> ', resData.info);
    return (
      <div className="p-6 m-8 w-[300px] rounded-lg shadow-lg h-[500px] hover:scale-105 hover:shadow-xl">
        <img
          className="rounded-lg"
          src={ CDN_URL + resData.info.cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold text-lg">{name}</h3>
        <h4 className="font-semibold">⭐ {avgRating}  ▪  {costForTwo} </h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    );
  };

  export default RestaurantCard;