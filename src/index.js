$ = jQuery = require("jquery");

var React = require("react");
var ReactDOM = require("react-dom");
var CreateClass = require("create-react-class");

var Home = require("./js/components/home/HomePage.jsx");
var About = require("./js/components/about/about.jsx");

var App = CreateClass({
    render: function(){
        var Child;
        switch(this.props.route){
            case "about": Child = About;
            break;
            default: Child = Home;
        }
        return(
            <div>
                <Child />                
            </div>
        );
    }
});

function _routeMe(){
    var route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route} />, document.getElementById("app"))
}

window.addEventListener("hashchange", _routeMe());
_routeMe();
