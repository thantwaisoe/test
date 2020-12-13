const url = require ('url');

const reqUrl = `https://graph.facebook.com/v9.0/$3839246372764838?fields=first_name,last_name,profile_pic,locale,timezone,gender,email&access_token=EAAGcIUmWkasBALFLn3XpySD7jNh4lJibZCvyOs2ApgW7GKkFiKjT0fTqlRKIAdxxQ3A20JN5zw0ggo2FEsYVf7qFfSCpvDjNJmgv5NAHa4ZBlKuFyezTHYWjrb0Gyv1K2MdOqoZBfbRXwjBeZAOzbCy9nf5lvVqB10ZBAVI5SxHZBTHunynVQ1wlyEe4IzkZAoZD`;
const urlObject =url.parse(requrl,true);
const queryData =urlObject.query;
console.log( "Your first_name is ".queryData.first_name);