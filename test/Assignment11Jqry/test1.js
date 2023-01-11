$(document).ready(function(){

    $("p").click(function(){
  
        $(this).hide();
    
      });

    $("#hideb").click(function(){
  
      $("p").hide();
      //$(this).hide();
  
      $(".ptable").show();
  
    });
  
    $("#showb").click(function(){
        $("p").show();
        $(".ptable").hide();
    }); 
  
});
// $(document).ready(function(){
    // $("p").click(function(){
    //     $(this).hide();
    //   });
//   });
  
  
  
  