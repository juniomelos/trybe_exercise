import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      name: "",
      array: [],
    };
  }

  componentDidMount() {
    if (localStorage.dogURL) {
      const parseStorage = JSON.parse(localStorage.dogURL);
      console.log(parseStorage);
      const lastDog = parseStorage[parseStorage.length - 1].message;
      return this.setState({ data: { message: lastDog } });
    }
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      const dogBreed = this.state.data.message.split("/")[4];
      return alert(`Dog Breed: ${dogBreed}`);
    }
    localStorage.setItem("dogURL", JSON.stringify(this.state.array));
  }

  fetchDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const result = await response.json();
    this.setState({ data: result });
  };

  saveDog = () => {
    const {
      data: { message },
      name,
      array,
    } = this.state;
    const dogData = { message, name };
    const newArray = [...array, dogData];
    this.setState({ array: newArray });
    this.setState({ name: "" });
  };

  render() {
    if (this.state.data === "") return "loading...";
    return (
      <div>
        <p>Puppy Image Gallery</p>
        <button onClick={this.fetchDog}>New dog</button>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            placeholder="dog name"
          />
          <button onClick={this.saveDog}>Save Dog</button>
        </div>
        <div>
          <img width="30%" alt="dog" src={this.state.data.message} />
        </div>
      </div>
    );
  }
}

export default App;
