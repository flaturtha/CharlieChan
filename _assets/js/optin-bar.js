/*============================================
=          EMAIL OPTIN JAVASCRIPT            =
============================================*/


$(document).ready(function(){
	console.log("WhooHooo!!")
  $("open").click(function(){
    $("#optin-bar").effect("bounce","slow");
    $("open").slideUp()
  });

  $("close").click(function(){
      $("#optin-bar").slideUp();$("open").slideDown();
     $("#optin-bar").effect("bounce","slow");
    });
});