

function error(){

if(document.getElementById("input").value==""){
    document.getElementById("sq").style.display="none";
}

else{
    document.getElementById("sq").style.display="block"; 
    document.getElementById("input").style.backgroundColor="blue";
           document.getElementById("warning").style.backgroundColor="yellow";
           document.getElementById("warning").innerHTML="";
}

}

function view(){

    if(document.getElementById("input").value==""){
        document.getElementById("input").style.backgroundColor="red";
        document.getElementById("warning").style.backgroundColor="red";
        document.getElementById("warning").innerHTML="PLease enter your name";
    }

    else{
        var name = document.getElementById("input").value;
        localStorage.setItem("Name",name);
        window.location="answer key.html";
        console.log("Name of the user: "+name);
        document.getElementById("input").style.backgroundColor="blue";
        document.getElementById("warning").style.backgroundColor="redorange";
        document.getElementById("warning").innerHTML="";
    }
    
    }


   function startQuiz(){

    var name = document.getElementById("input").value;
        localStorage.setItem("Name",name);

     window.location="quiz_index.html";

   }