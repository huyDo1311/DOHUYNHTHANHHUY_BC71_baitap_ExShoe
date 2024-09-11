import React, { Component } from "react";

export default class Cart extends Component {
  renderCart = () => {
    let { dataCart, deleteItem, changeQuality } = this.props;

    return dataCart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>
            <img style={{ width: 100 }} src={item.image} alt="" />
          </td>
          <td>
            <button onClick={() => changeQuality(item.id, false)} className="btn btn-success">-</button>
            <strong>{item.quality}</strong>
            <button onClick={() => changeQuality(item.id, true)} className="btn btn-success">+</button>
          </td>
          <td>
            <button onClick={() => {deleteItem(item.id)}} className="btn btn-dark">Delete</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log("this.props.dataCart", this.props.dataCart);
    return (
      <div className="col-4">
        <div className="table-responsive">
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">image</th>
                <th scope="col">quality</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>{this.renderCart()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
