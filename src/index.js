$ = jQuery = require("jquery");

var React = require("react");
var ReactDOM = require("react-dom");
var CreateClass = require("create-react-class");

var Home = require("./js/components/home/HomePage.jsx");
var Header = require("./js/components/common/Header.jsx");
var About = require("./js/components/about/about.jsx");
var Recipes = require("./js/components/recipes/RecipePage.jsx");

//The basic page route is done here with what comes after the '#' in the URL
var App = CreateClass({
    render: function(){
        var Child;
        console.log("Route = " + this.props.route);
        switch(this.props.route){
            case "about": Child = About;
                break;
            case "recipes": Child = Recipes;
                break;
            default: Child = Home;
        }
        return(
            <div>
                <Header />
                <Child />
            </div>
        );
    }
});

//The {route} variable is set in the upper switch case
//ReactDOM is the React Document Object Model object set in the beginning of this document.
function _routeMe(){
    var route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route} />, document.getElementById("app"));
}

window.addEventListener("hashchange", _routeMe);
_routeMe();
