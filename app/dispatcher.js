var guid = require('guid');
var listners = {};

module.exports = {
  register:function (cd) {
    var id : guid.raw();
    listners[id] = callback;
    return id;
  },
  dispatcher:function (payload) {
    console.info("Dispatching...",payload);

    for(var id in listners){
       var listner = listners[id];
       listner(payload);
    }
  }

}
