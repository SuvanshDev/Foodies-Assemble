import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name,cuisines,deliveryTime,avgRating,costForTwo} = resData?.info;
    return (
      <div className="p-6 m-8 w-[300px] rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
        <h3 className="font-bold">{name}</h3>
        <img
          className="rounded-lg"
          src={ CDN_URL + resData.info.cloudinaryImageId
          }
        ></img>
        <h4>{cuisines.join(",")}</h4>
        <h4>{deliveryTime}</h4>
        <h4>{avgRating}⭐</h4>
        <h4>💸{costForTwo}</h4>
      </div>
    );
  };

  export default RestaurantCard;