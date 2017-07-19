'use strict'
const movieTitle=require('./app');
const web="IMDB";
const request = require('request');
const apiKey= require('./keys');
const searchID = require('./searchID');

const get = function(movieTitle){
var apiUrl="https://www.googleapis.com/customsearch/v1?key="+ apiKey + "&cx="+ searchID+"&q="+movieTitle+"movie"+web;
request(apiUrl,function(err,res,body){
	var json= JSON.parse(body);
	console.log(json.items[0].title);
})
}

module.exports = get;



