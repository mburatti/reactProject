"use strict"

var React = require("react");
var ReactDOM = require("react-dom");
var CreateClass = require("create-react-class");

var About = CreateClass({
    render: function(){
        return(
            <div>
                <h1>About this App</h1>
                <p>A simple react app for learning a particular stack of technologies that we are using, including:</p>
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node.js and NPM</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                        <li>and the supporting NPM plugins</li>
                    </ul>                
            </div>
        );
    }
});

module.exports=About;