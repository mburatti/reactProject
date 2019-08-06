"use strict";
var recipes = require("./RecipeData").recipes;
var _ = require("lodash");

//This is a mock, should be done at server side
var _generateId = function(recipe){
    return recipe.category.toLowerCase() + "-" + recipe.recipeName;
};

var _cloneMe = function(item){
    return JSON.parse(JSON.stringify(item));
};

var RecipeApi = {
    getAllRecipes: function(){
        return _cloneMe(recipes);
    },

    getRecipeById: function(id){
        var recipe = _.find(recipes, {id: id});
        return _cloneMe(recipe);
    },

    //Mock save
    saveRecipe: function(recipe){
        console.log("AJAX call saved to the _");

        if(recipe.id){
            var existingRecipeIndex = _.indexOf(recipes, _.find(recipe));
            recipes.splice(existingRecipeIndex, 1, recipe);
        }else{
            recipe.id = _generateId(recipe);
            recipes.push(_cloneMe(recipe));
        }
        return recipe;
    },

    //Mock delete
    deleteRecipe: function(id){
        console.log("AJAX call deleted recipe from the _");
        _.remove(recipes, {id: id});
    }
};

module.exports = RecipeApi;
