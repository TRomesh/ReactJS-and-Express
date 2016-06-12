var React = require('react');
var ReactDOM = require('react-dom');

console.log('Hi');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
    name:"Ice Cream",
    purchased: true
},{
    name:"Waffles",
    purchased: false
},{
    name:"Candy",
    purchased: true
},{
    name:"Snaks",
    purchased: false
}];

ReactDOM.render(<GroceryItemList items={initial}/>,app);
