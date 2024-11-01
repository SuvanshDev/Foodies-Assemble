import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

const User = ({name}) => {

  return (
    <div className="user-card">
      <h3>Name:{name}</h3>
      <h3>Location: Jammu</h3>
      <h4>Contact: https://github.com/SuvanshDev</h4>
    </div>
  );
};

export default User;
