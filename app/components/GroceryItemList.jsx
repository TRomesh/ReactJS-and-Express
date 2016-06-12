var React = require('react');
var GroceryItemList = require('./GroceryItem.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');

var comp1 = React.createClass({
    render:function (){
        return (
          <div>
            <div>
              <h1>Grocery Listify</h1>
                {this.props.items.map( function(item,index) {
                  return(
                    <div><GroceryItemList items={item} key={"item"+index}/></div>
                  )
                })}
            </div>
            <GroceryListAddItem />
          </div>
        )
    }
});

module.exports = comp1;
