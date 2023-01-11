
 function set_button_text() {
  //alert("The paragraph is now hidden");
  // $("#form1_div").css("background-color", "yellow");
  $("#hideb span").text("Show Form");
  $("#form1_div").css("background-color", "yellow");
//alert("The heading is now hidden");
 }
//-------------------------------------------------------------------------------
 
 //Here we define a callback funtion on fly.
   /*   $(this).hide("slow", function() {
    alert("The heading is now hidden");
    $("#form1_div").css("background-color", "yellow");
   } */
 $(document).ready(function() {
  $("#h2_1").click(function() {
    $(this).hide("slow", set_button_text 
    );
  });
//_____________________________________________________________________________
    
$("#form1_div").dblclick(function() {
// $(this).css("background-color","#ffffff");
//Here we call pre-defined callback function.
$(this).hide(2000, set_button_text);
});
//_______________________________________________________________________________
 
  //When show button is clicked the table will be hidden or shown.
  $("#showb").click(function() {
   $("#table1").toggle(3000);
  });
//_______________________________________________________________________________
  //Here we define a random rgb color for show button
  $("#showb").mouseover(function() {
   let color = 'rgb(' + Math.floor(Math.random() * 255) + ','
            + Math.floor(Math.random() * 255) + ','
            + Math.floor(Math.random() * 255) + ')';
   $(this).css("background-color",color);
  });
//_______________________________________________________________________________

  $("#hideb").click(function() {
   $("#form1_div").toggle(3000);
   //  $(this).text("Hide");
   if($("#hideb span").text()=="Hide Form")
    $("#hideb span").text("Show Form");
   else
    $("#hideb span").text("Hide Form");
  });
 
 
$("#p1").mouseenter(function(){
$("#h2_1").show("slower");
$("#h2_1").css("background-color","rgb(200, 180, 220)");
});
 
 
 }); 
 //The end of $(document).read()
