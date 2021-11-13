import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Invited from "./components/Invited";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Loading all modules..."
    };
  }

  componentDidMount() {
    fetch("http://172.29.0.4:80/")
      .then(response => response.json())
      .then(data => {
        this.setState({ message: data.message });
      });
  }


  render() {
    return  <div className="container-sm">
             
              <Navigation />
              <Invited />
            </div>
  }
}

export default App;
