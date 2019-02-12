var friends = require("../data/friends");
// grabs the friends.js file and sets it as a variable

module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        res.json(true);
    });

}