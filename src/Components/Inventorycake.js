import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../Cake/cakeAction";

function Inventorycake(props) {
  const [cake, setCake] = useState(0);
  const cake_Buy = () => {
    props.buyCake(cake);
  };
  return (
    <>
      <h1>Combined Reducers</h1>
      <h2>Cake inventory {props.numofcakes}</h2>
      <input
        type="number"
        placeholder="Enter the no. of Cakes"
        required
        onChange={(event) => setCake(event.target.value)}
      />
      <button onClick={cake_Buy}>Buy</button>
      <h3 style={{color:"red"}}>{props.error}</h3>
     
      
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    numofcakes: state.cake.numofcakes,
    error: state.cake.error
  };
};
// this function is passed as second argument to connect
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (value) => dispatch(buyCake(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Inventorycake);
