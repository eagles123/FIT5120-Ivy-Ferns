import React, { useState, useContext } from "react";
import Slider from "@material-ui/lab/Slider";
import { ParameterContext } from "./../context/ParameterContext";

const MySlider = ({ lable }) => {
  const { dispatch } = useContext(ParameterContext);
  const [local, setLocal] = useState(5);
  function handleChange(e, value) {
    setLocal(value);
    dispatch({ type: lable, payload: local });
  }
  return (
    <div className="row">
      <div className="project-ist section" style={{ paddingTop: 20 }}>
        <Slider
          value={local}
          min={0}
          max={11}
          setp={1}
          onChange={handleChange}
        />
        {/* <p>Score: {value}</p> */}
      </div>
    </div>
  );
};
export default MySlider;

// const MySlider = ({ health, handleChange }) => {
// const MySlider = ({ value, lable }) => {
//   let method = "handle" + lable;
//   console.log(method);
//   console.log(value);
//   return (
//     <div className="row">
//       <div className="project-ist section" style={{ paddingTop: 50 }}>
//         <Slider value={value} min={0} max={10} setp={1} onChange={method} />
//         {/* <p>Score: {value}</p> */}
//       </div>
//     </div>
//   );
// };
// export default MySlider;

// class MySlider extends React.Component {
//   state = {
//     action: this.props.action,
//     value: 0
//   };

//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   render() {
//     // const { value, handleChange } = this.props;
//     // const { dispatch } = useContext(ParameterContext);

//     return (
//       <div className="row">
//         <div className="project-ist section" style={{ paddingTop: 50 }}>
//           <ParameterContext.Consumer>
//             <Slider
//               value={this.state.value}
//               min={0}
//               max={10}
//               step={1}
//               onChange={(event, value) =>
//                 this.setState({ value }) &&
//                 dispatch({ type: this.state.action, payload: this.state.value })
//               }
//             />
//             {/* <p>Score: {this.state.value}</p> */}
//           </ParameterContext.Consumer>
//         </div>
//       </div>
//     );
//   }
// }

// export default MySlider;
