import RestaurantCard from "./RestaurantCard";
import ResList from "../utils/mockData";

const Body = () => {
    return (
      <>
        <div className="body">
          <div className="search">Search your fav. restaurant!</div>
          <div className="res-container">
            {
              ResList.map((restaurant) => (
                  <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />
              ))
            }
          </div>
        </div>
      </>
    );
  };

  export default Body;