import React, { useState } from "react";
import { connect } from "react-redux";
import { buyIce } from "../IceCreams/iceAction";
function InventoryIce(props) {
  const [ice, setIce] = useState(0);
  const buy_ice = () => {
    props.buyIce(ice);
  };
  return (
    <div>
      <h2>Ice Cream inventory {props.numofice}</h2>
      <input
        type="number"
        placeholder="Enter the no. of Icecreams"
        required
        onChange={(event) => setIce(event.target.value)}
      />
      <button onClick={buy_ice}>Buy</button>
      <h3 style={{ color: "red" }}>{props.error}</h3>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numofice: state.ice.numofice,
    error: state.ice.error,
  };
};
// this function is passed as second argument to connect
const mapDispatchToProps = (dispatch) => {
  return {
    buyIce: (value) => dispatch(buyIce(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryIce);
