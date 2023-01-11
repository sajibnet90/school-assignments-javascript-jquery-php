$(document).ready(function() {
    //Here we define a set of global variables, which will be used
    //in the program.
    var part_count;
    var counter=0;
    var id="#p";
    var animSpeed=200;
    var callback='linear'
    var position=50;
    var currentID;
    
    //Here we define place holder texts in English and Finnish as a JSON array
    var placeHolders = '{ "firstname" : ["Enter your first name", "Kirjoita etunimesi"],' + ' "lastname":["Enter your last name", "Kirjoita sukunimesi"]' +' }';
  //Here we parse the JSON array
   var phObj = JSON.parse(placeHolders);
   //console.log(phObj);
      
    //Here we define texts in English and Finnish as JSON array so that each key has values
    //in English and Finnish as an array
    var texts = '{"startButtonTxt" : ["Start", "Aloita" ],' +
                '"nextButtonTxt" : ["Next", "Seuraava" ],' +
                '"previousButtonTxt" : ["Previous", "Edellinen" ],' +
                 '"p1_h1" : ["Part I", "Osa I" ],' +
                ' "p1_h2" :["jQuery Examples","jQuery esimerkki"],' +
                 '"p2_h1" :["Part II", "Osa II"],' +
                ' "p2_p1" :["jQuery is a JavaScript library.", "jQuery on JavaScript-kirjasto."],' +
                ' "p2_p2" :["It is fun to use jQuery!", "On hauskaa käyttää jQuery:ta!"],' +
                '"hideb_txt" : ["Hide Text", "Piilota teksti"],' +
                '"showb_txt" : ["Show Text", "Näytä teksti"],' +
                 '"p3_h1" : ["Part III", "Osa III"],' +
                 '"p_title" : ["Product", "Tuote"],' +
                 '"p_price" : ["Price", "Hinta"],' +
                 '"pname_1" : ["Milk", "Maito"],' +
                 '"pname_2" : ["Bread", "Leipä"],' +
                 '"pIV_h1" : ["Part IV", "Osa IV"],' +
                 '"pIV_h2" : ["Registraion", "Ilmoittautuminen"],' +
                 '"form1_fname_txt" : ["First name:", "Etunimi:"],' +
                 '"form1_lname_txt" : ["Last name:", "Sukunimi:"]' +                
                 ' }';
    //Here we parse the JSON array
    var txtObj = JSON.parse(texts);
    //console.log(txtObj);

    //Here we define updateElements function, which will take
    //care of changing the visiblity of the currently selected element.
    function updateElements(){
      //Here we concatenate the value of id (#p) with the value of counter.
        //As a result, we will have #p1, #p2, etc.
        currentID=id.concat(counter);
        
        //Here we toggle the value of element with animSpeed and callback
        $(currentID).toggle(animSpeed,callback);
    }
    
    //Here we define a function, which receives an index and sets the text of elements
    //according to the index
    function setText(index){
        
        //Here we go through the JSON array of texts and set the text of each elemenet
        //in the language specified by index number; 0 for English, 1 for Finnish
        for (var key of Object.keys(txtObj)) {
           $("#" + key).text(txtObj[key][index] );
        }
        //Here we go through the JSON array of place holders and set the text of each elemenet
        //in the language specified by index number; 0 for English, 1 for Finnish
        for (var key of Object.keys(phObj)) {
           $("#" + key).attr('placeholder', phObj[key][index] );
        }
    }
    
    
     //Here we define a click event handler for enButton, which will call
     //setText() function with argument 0.
     $("#enButton").click(function() {
         setText(0);
     });
    
     //Here we define a click event handler for enButton, which will call
     //setText() function with argument 1.
     $("#fiButton").click(function() {
        setText(1);
     });
    
    
     //Her we define click event handler for startButton.
    $("#startButton").click(function() {
        
        //Here we calculate the number of elements, whose class attributes have aa value 'part'.
        //In this way, we can automatically find how many different parts the page consists of.          
        part_count=document.getElementsByClassName('part').length;
        console.log(part_count);
        
        updateElements();
        
        //Here we make sure that the value of counter is 0 in the beginning.
         counter=0;
         //Here we show nextButton
        $("#nextButton").show(animSpeed,'linear');
        
          //Here we hide nextButton
        $("#previousButton").hide();
        
        //Here we hide startButton
        $(this).hide();
    });
    
    
    
     $("#nextButton").click(function() {
        
         //Here we show startButton
         $("#startButton").show();
        
          //Here we show previousButton
         $("#previousButton").show();
        
        //Here we hide the element, which was just visible
        updateElements();
          
       if(counter < part_count)
             counter++;
        
        //Here we show the next element.
        updateElements();
        
     //Here we hide nextButton if we have reached the last part of the document.
     if(counter==part_count){
            $(this).hide();    
       }
    });
   
   
  $("#previousButton").click(function() {
               
                //Here we hide the element, which was just visible
                 updateElements();
        
                if(counter>=1)
                     counter--;
        
                 //Here we show the previous element.
                 updateElements();
                  $("#nextButton").show();
                  
                 if(counter==0){
                     $(this).hide();
                      $("#nextButton").hide();
                 }
                            
                  
             });
             
//In the following lines we define different event handlers for elements of the document.
  $("p").click(function() {$(this).hide();});
 
  $("#form1").dblclick(function() {
      $(this).css("background-color","#ffee99");
      $("p").show();
   //$(this).hide();
  });
  $("#table1").mouseenter(function() {
 
    $(this).css("background-color","#ffaa99");
  });
 
  $("#table1").mouseleave(function() {
   $(this).css("background-color","#999999");
 
  });
  $("#fntxt").mousedown(function() {
   alert("Mouse down over first name field!");
  });
  $("#lntxt").mouseup(function() {
   alert("Mouse up over last name field!");
  });
  $("#form1").hover(function() {
 
   $(this).css("background-color", "aqua");
   //alert("You entered the form area row!");
  },
  function() {
  // alert("You now left the form area!");
   $(this).css("background-color", "white");
  });
  $("#fntxt").focus(function() {
   $(this).css("background-color", "red");
  });
 
  $("#fntxt").blur(function() {
   $(this).css("background-color", "blue");
  });
  $("#lntxt").focus(function() {
   $(this).css("background-color", "green");
  });
 
  $("#lntxt").blur(function() {
   $(this).css("background-color", "yellow");
  });
 });