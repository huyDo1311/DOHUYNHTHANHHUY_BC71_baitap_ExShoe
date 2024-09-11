import React, { Component } from "react";
import Item from "./Item";

export default class ListItems extends Component {
  render() {
    let { data, handleAddShoe } = this.props;
    return (
      <div className="row col-6">
        {data.map((item, index) => {
          return <Item handleAddShoe={handleAddShoe} key={index} item={item}/>
        })}
      </div>
    );
  }
}
