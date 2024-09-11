import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { item, handleAddShoe } = this.props;
    return (
      <div className="col-3">
        <div className="card text-dark bg-whit">
          <img className="card-img-top" src={item.image} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{item.price}$</h4>
            <button onClick={() => {handleAddShoe(item)}} className="btn btn-success">Add</button>
          </div>
        </div>
      </div>
    );
  }
}
