import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem("dogURL", this.state.data.message);
    const dogBreed = this.state.data.message.split("/")[4];
    alert(`Dog Breed: ${dogBreed}`);
  }

  fetchDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const result = await response.json();
    this.setState({ data: result });
  };

  render() {
    if (this.state.data === "") return "loading...";
    return (
      <div>
        <p>Puppy Image Gallery</p>
        <button onClick={this.fetchDog}>New dog</button>
        <div>
          <img alt="dog" src={this.state.data.message} />
        </div>
      </div>
    );
  }
}

export default App;
