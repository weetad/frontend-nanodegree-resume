/*
This is empty on purpose! Your code to build the resume will go here.
*/
/*$("#main").append("LiDY");*/

var formattedName = HTMLheaderName.replace("%data%", "LiDY");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

 