"use strict";
var React=require("react");
var ReactDOM=require("react-dom");
var CreateClass = require("create-react-class");

var Header = CreateClass({
    render: function(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img alt="Brand" src="./images/mylogo.jpg" />
                    </a>
                    <ul className="nav nav-tabs">
                        <li><a href="#">Home</a></li>
                        <li><a href="/#recipes">Recipes</a></li>
                        <li><a href="/#about">About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
