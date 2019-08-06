"use strict"

var React=require("react");
var ReactDOM=require("react-dom");
var CreateClass=require("create-react-class");

var Home = CreateClass({
    render: function(){
        return(
            <div className="jumbotron">
                <h1>Welcome!</h1>
                <h2>You,ll find some real classy dishes here!</h2>
                <button type="button" className="btn btn-primary">See more »</button>
            </div>
        );
    }
});

module.exports = Home;
