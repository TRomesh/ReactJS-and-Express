module.exports = function (app){

var items = [{name:"Tharaka"},
             {name:"Madushika"},
             {name:"Kasun"}];

           app.route('/api/items').get(function (res,req) {
                  res.send(items);
           });

}
