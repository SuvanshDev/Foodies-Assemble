import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      userInfo:{
        name:"Dummy",
        location:"Default"
      }
    }
    console.log('Child Constructor');
  }

  async componentDidMount(){
    console.log('first Child component did mount');
    const data = await fetch ("https://api.github.com/users/SuvanshDev")
    const json = await data.json();
    this.setState({
      userInfo:json
    })
    // console.log('json', json);
  }
  componentDidUpdate(){
    console.log('component did update');
  }
  componentWillUnmount(){
    console.log('component will unmount');
  }

  render() {
const {name,location,avatar_url} = this.state.userInfo;
    console.log('first child render')
    return (
      <div className="user-card">
      <img src={avatar_url}></img>
        <h3>Name:{name}</h3>
        <h3>Location:{location}</h3>
        <h4>Contact: https://github.com/SuvanshDev</h4>
      </div>
    );
  }
}
export default UserClass;
