import React, { useState } from "react";
import { connect } from "react-redux";
import { buyChoco } from "../Chocolates/cAtion";

function InventoryChoco(props) {
  const [chocop, setChocop] = useState(0);
  const buy_choco = () => {
    props.buyChoco(chocop);
  };
  return (
    <div>
      <h2>Chocolate Inventory {props.numofc}</h2>
      <input
        type="number"
        placeholder="Enter the no. of chocolates"
        required
        onChange={(event) => setChocop(event.target.value)}
      />{" "}
      <button onClick={buy_choco}>Buy</button>
      <h3 style={{ color: "red" }}>{props.error}</h3>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numofc: state.choco.numofc,
    error: state.choco.error,
  };
};
// this function is passed as second argument to connect
const mapDispatchToProps = (dispatch) => {
  return {
    buyChoco: (value) => dispatch(buyChoco(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryChoco);
