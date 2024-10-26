import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      count: 0
    }
    console.log('Child Constructor');


  }

  componentDidMount(){
    console.log('Child component did mount');
  }

  render() {
    const {count} = this.state;
    const {name} = this.props; 
    console.log('child render');
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{
          this.setState({
            count: count +1
          })
        }}>Count Increase</button>
        <h3>Name:{name}</h3>
        <h3>Location: Jammu</h3>
        <h4>Contact: https://github.com/SuvanshDev</h4>
      </div>
    );
  }
}
export default UserClass;
