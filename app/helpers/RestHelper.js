var $ = require('jquery');

module.exports = {
            get:function (url) {
                 return new Promise(function(resolve, reject) {
                        $.ajax({
                           url:url,
                           dataType:"json",
                           resolve:success,
                           reject:error
                        })
                 });
            }
}
