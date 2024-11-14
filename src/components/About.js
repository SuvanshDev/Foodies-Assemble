import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log('Parent Constructor');
  }
  componentDidMount(){
    // console.log('Parent component did mount');
  }
  render() {
    // console.log('Parent Render');
    return (
      <>
        <div>
        <h1 className="font-semibold m-4 text-lg">About Us</h1>
        <p>Foodies is a food ordering web application built with React.js and Swiggy's API.</p>
          <p>Frontend Library: React JS</p>
          <p>Bundler: Parcel</p>
          <p>Styling: Tailwind CSS</p>
          <p>Testing: Jest</p>
          <p>State Management: Redux-toolkit</p>
        </div>
        <div className="m-8">
        <UserClass name={"Sg-classs"} />

        </div>
      </>
    );
  }
}
export default AboutClass;
