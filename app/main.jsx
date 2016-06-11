var React = require('react');
var ReactDOM = require('react-dom');

console.log('Hi');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
    name:"Ice Cream"
},{
    name:"Waffles"
},{
    name:"Candy"
},{
    name:"Snaks"
}];

ReactDOM.render(<GroceryItemList/>,app);
