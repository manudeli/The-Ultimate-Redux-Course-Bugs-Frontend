import React, { Component } from "react";
import StoreContext from "../contexts/storeContext";

export default class Bugs extends Component {
  static contextType = StoreContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return <div>Bugs</div>;
  }
}
