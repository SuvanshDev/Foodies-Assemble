import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent Constructor');
  }
  componentDidMount(){
    console.log('Parent component did mount');
  }
  render() {
    console.log('Parent Render');
    return (
      <>
        <h1>About Us</h1>
        <h2>lorem ipsum lodor</h2>
        <UserClass name={"Sg-classs"} />
      </>
    );
  }
}
export default AboutClass;
