var React = require('react');

var GroceryItem = React.createClass({
          render:function (){
            return(
                <div>
                  <h4 className={this.props.items.purchased ? "strikethrough" : ""}>{this.props.items.name}</h4>
                </div>
            )
          }
});

module.exports = GroceryItem;
