var connection = require('C:\Users\suppe\code\uofu-mon-fsf-pt-07-2020-u-c\13-MVC\02-Homework\burgers\config\connection.js')

var orm =
{
    selectAll: function(callback)
    {
        connection.query('SELECT * FROM burgers', function(err, result)
        {
            if (err) throw err;
            callback(result);
        });
    },

    insertOne: function(burger_name, callback)
    {
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}],
        function(err, result)
        {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;