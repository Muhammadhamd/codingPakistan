
            document.body.style.backgroundColor="#252422"
        const searchbar = document.getElementById("searchbar");
        const searchcontainer =  document.getElementById("container");
        document.getElementById("container").style = "width:0px";

        document.getElementById("opensearchbarbtn").onclick =function(){
            searchbar.style.display ="inline";

            
            
          searchbar.focus();
        }
        searchbar.addEventListener("focus" , () =>{
            document.getElementById("container").style = "width:400px ; padding:5px;";


        });


        searchbar.addEventListener("blur" , () =>{
            document.getElementById("container").style = "width:0px;padding:0px;"
            searchbar.style.display ="none";
        });
            
       
     