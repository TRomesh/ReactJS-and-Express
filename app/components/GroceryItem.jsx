var React = require('react');

var GroceryItem = React.createClass({
          render:function (){
            return(
                <div>
                  {this.props.items.name}
                </div>
            )
          }
});

module.exports = GroceryItem;
