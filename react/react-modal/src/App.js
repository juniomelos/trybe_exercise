import React from "react";
// import Button from "./Button";
// import Alert from "./Alert";
import Dropdown from "./Dropdown";

function App() {
  const content = [
    { id: 1, item: "a" },
    { id: 2, item: "b" },
    { id: 3, item: "c" },
    { id: 4, item: "d" },
  ];

  return (
    <div>
      {/* <Dropdown listContent={content} /> */}

      <Dropdown listContent={content}>Título da Lista</Dropdown>
    </div>
  );
}

// Exercise 1 and 2:

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showModal: false,
//       isDisableButton: false,
//     };
//   }

//   changeTitle = (value) => {
//     this.setState({ title: value });
//   };

//   changeShowComponent = () => {
//     this.setState((state) => ({
//       showModal: !state.showModal,
//       isDisableButton: !state.isDisableButton,
//     }));
//   };

//   render() {
//     return (
//       <div className="main">
//         <Button
//           content="Clique aqui"
//           isDisable={this.state.isDisableButton}
//           showComponent={this.changeShowComponent}
//           value="Título Show"
//         />
//         {this.state.showModal && (
//           <Alert hideComponent={this.changeShowComponent} timeSeconds={4}>
//             <h1>Modal</h1>
//             <p>"Algum conteúdo"</p>
//           </Alert>
//         )}
//       </div>
//     );
//   }
// }

export default App;
