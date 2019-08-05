"use strict"
var React=require("react");
var ReactDOM=require("react-dom");
var CreateClass=require("create-react-class");

var Home = CreateClass({
    render: function(){
        return(
            <div className="jumbotron">
                <h1>My Home Page</h1>
                <h2>We'll adjust as we build the app</h2>
            </div>
        );
    }
});

module.exports = Home;