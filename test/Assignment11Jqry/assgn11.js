
    var counter=1;
    var id="#part";
    var animSpeed=900;
    var callback='linear'
    var currentID;
    var part_count;

    
    //Inside this function we concatenate the value of id (#part) with the value of counter. As a result, we will have #part1, #part2, etc.
    function updateElements(){
          currentID=id.concat(counter); // contanate string 'ID'  with 'counter' values
          console.log(currentID);//checking counterID

          //Here we toggle the value of element with animSpeed and callback
          $(currentID).toggle(animSpeed,callback);
      };

    
//---------'start' button functionalities----------------//
    function getstarted() {
    // $("#srtButton").click(function(){ .   })----------->not working using this way
        part_count=document.getElementsByClassName('part').length;//get total number of class 'part'
        //console.log(part_count); //check part number
        updateElements();
         counter=1;
         //console.log(counter+"start counter check");

        //-----Here we hide startButton-----//
        $("#startButton").hide();
    };

    //-------------'next' button functionalities----------------------//

    // $("#nextButton").click(function()     {});
    function nextButton(){
       //console.log(counter);
       updateElements(); //Here we hide the element, which was just visible using toggle
    //console.log("counter value after pressing next 1 time")
    //console.log(counter + "counter is less than part_count");
      if(counter < part_count+1){
            counter++; 
            if(counter==part_count+1){
                alert("Please click 'submit'");   
            } 
       //Here we show the next element.
            updateElements();};
    };

    //-------------'previous' button functionalities----------------------//
  
//  $("#previousButton").click(function() {   });
function previousButton(){
    updateElements(); //Here we hide the element, which was just visible
    //console.log(counter + "prevoius button");
       if(counter>=2){
           counter--;};
        
        //Here we show the previous element.
    updateElements();
    console.log(counter + "---previous button");
            // if(counter==part_count-1){
            //     $("#previousButton").hide();
            //     }   
            }