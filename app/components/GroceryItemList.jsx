var React = require('react');
var GroceryItemList = require('./GroceryItem.jsx');

var comp1 = React.createClass({
    render:function (){
        return (
          <div>
            <h1>Grocery Listify</h1>
            {this.props.items.map( function(item,index) {
              return(
              <div><GroceryItemList items={item} key={index}/></div>
            )
            })}
            </div>
        )
    }
});

module.exports = comp1;
