import React, { Component } from 'react'
import ListItems from './ListItems'
import Cart from './Cart'
import { dataShoe } from './dataShoe'

export default class ExShoe extends Component {
    state = {
        cart: [],
        listShoe: dataShoe
    }
    handleAddShoe = (shoe) => {
        let newCart = [...this.state.cart];
        let index = newCart.findIndex((item) => item.id === shoe.id);

        if(index !== -1){
            newCart[index].quality +=1;
        } else {
            newCart = [...this.state.cart, {...shoe, quality : 1}];
        }

        this.setState({
            cart: newCart
        })

    }
    deleteItem = (id) => {
        let newCart = [...this.state.cart];
        let arrAfterDelete = newCart.filter((item) => item.id !== id);
        this.setState({
            cart: arrAfterDelete
        })
    }

    changeQuality = (id, isChange) => {
        let newCart = [...this.state.cart];
        let index = newCart.findIndex((item) => item.id === id);

        if(index !== -1) {
            if(isChange){
                newCart[index].quality +=1;
            } else {
                if(newCart[index].quality > 1){
                    newCart[index].quality -= 1;
                } else {
                    alert("Số lượng tối thiểu là 1 ");
                }
            }
        }
        this.setState({
            cart: newCart
        })
    }
    render() {
        let {cart, listShoe} = this.state
    return (
      <div className='row'>
        <ListItems handleAddShoe={this.handleAddShoe} data={listShoe}/>
        <Cart changeQuality={this.changeQuality} deleteItem={this.deleteItem} dataCart={cart}/>
      </div>
    )
  }
}
