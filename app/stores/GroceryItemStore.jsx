var dispatcher = require('./../dispatcher.js');

function GroceryItemStore() {
        var items = [{name:"Tharaka"},{name:"Madushika"},{name:"Kasun"}];
        var listeners = [];


        function getItems(){
           return items;
        }

        function addGroceryItem(item){
           items.push(item);
           triggerListners();
        }

        function deleteGroceryItem(item) {
            var index;
             items.filter(function(_item,_index){
               if (_item.name == item.name){
                  index = _index;
               }

            });
            items.splice(index,1);
            triggerListners();
        }

        function onChange(listener){
           listeners.push(listener);
        }

        function triggerListners(){
           listeners.forEach(function(listener){
                 listener(items);
           });
        };

        dispatcher.register(function(event){
          var split = event.type.split(':');
          if (split[0]==='grocery-item'){
             switch (split[1]) {
               case "add":
                  addGroceryItem(event.payload);
                 break;
               case "delete":
                  deleteGroceryItem(event.payload);
                 break;
               default:

             }
          }
        });

        return{
          getItems : getItems,
          onChange : onChange
        }
}

module.exports = new GroceryItemStore();
