import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name,cuisines,deliveryTime,avgRating,costForTwo} = resData?.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <h3>{name}</h3>
        <img
          className="res-img"
          src={ CDN_URL + resData.info.cloudinaryImageId
          }
        ></img>
        <h4>{cuisines.join(",")}</h4>
        <h4>{deliveryTime}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

  export default RestaurantCard;