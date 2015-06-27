$(document).ready(function(){
$("button").click(function(){
$.post("https://data.sparkfun.com/input/RMbNL45MLJIbljy0D7AG?private_key=lz7jJN8zJWFYno8bpjEe",
{
temp: $("#test").val()
},
function(data){
alert("Data: " + $("#test").val() + " sent to sparkfun");
});
});
});
