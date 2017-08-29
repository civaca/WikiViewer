document.addEventListener("DOMContentLoaded", function () {
    
    
   
    /*function to change marign top*/
        
    
    document.getElementById("searchinput").addEventListener("input", function newMargin(){document.getElementById("searchinput").setAttribute("Style","margin-top:1%");

                                                                                          
        });
    
       /*what to do with the imput*/ 
        
    document.getElementById("searchinput").addEventListener("change",function () {
     
        /*clear results*/
        var resultList = document.getElementById("results")
         while (resultList.hasChildNodes()) {   
    resultList.removeChild(resultList.firstChild);
}
        
    
      /*define value of search*/  
        
        
        var x = document.getElementById("searchinput").value;
        
  
        
    /*connectin with the Wiki API*/
    var ajax = new XMLHttpRequest ();
     ajax.open("GET","https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch="+x,true);
     ajax.send();
        
    
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
             var newAjax = JSON.parse(this.responseText);
            
/*creating the results*/
            var i=0;
            while(i<newAjax.query.search.length) {
                
             
                var newDiv= document.createElement("A");
        newDiv.setAttribute("class","search");
                 newDiv.setAttribute("id","n"+i);
        newDiv.setAttribute("target","_blanck");

     newDiv.setAttribute("href", "http://en.wikipedia.org/?curid="+newAjax.query.search[i].pageid);
           
       document.getElementById("results").appendChild(newDiv);
      
            
            var newTitle= document.createElement("H2");
        newTitle.innerHTML = newAjax.query.search[i].title;
       newDiv.appendChild(newTitle);
                
          
                var newText= document.createElement("P");
           newText.innerHTML = newAjax.query.search[i].snippet;
       newDiv.appendChild(newText);
      
                
        
            i++;
           
           
   
             };/*   closure of while*/

            
            }/*closure of if*/
        }; /*closure of onreadystate*/
   
    
    }); /* closure of change*/    


    
}); /*closure of loaded*/
  


