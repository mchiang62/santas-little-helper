$(document).ready(function(){
$("#login").click(function(){
  $("#loginForm").collapse('show');
  $("#createForm").collapse('hide');

});
$("#createAcc").click(function(){
  $("#createForm").collapse('show');
  $("#loginForm").collapse('hide');
});

});