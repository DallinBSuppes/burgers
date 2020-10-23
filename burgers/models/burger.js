var orm = require('C:\Users\suppe\code\uofu-mon-fsf-pt-07-2020-u-c\13-MVC\02-Homework\burgers\config\orm.js');

var burger =
{
    selectAll: function(callback)
    {
        orm.selectAll(function(res)
        {callback(res);
        }
        );
    },

    insertOne: function(burger_name, callback)
    {
        orm.insertOne(burger_name, function(res)
        {
            callback(res);
        });
    },

    updateOne: function(burger_id, callback)
    {
        orm.updateOne(burger_id, function(res)
        {
            callback(res);
        });
    }
};

module.exports = burger;