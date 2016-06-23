var React = require('react');
var action = require('./../actions/GroceryItemActionCreator.jsx');

var GroceryItem = React.createClass({

        delete:function (e){
            e.preventDefault();
            action.delete(this.props.items);
        },

          render:function (){
            return(
                <div>
                <div>
                  <h4 className={this.props.items.purchased ? "strikethrough" : ""}>{this.props.items.name}</h4>
                </div>
                <form className="three colums" onSubmit={this.delete}>
                  <button>&times;</button>
                </form>
                </div>
            )
          }
});

module.exports = GroceryItem;
