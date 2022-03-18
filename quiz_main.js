function instr(){
    window.location="Index.html";
}

function h(){
document.getElementById("ribbon").style.display="none";
}

var score = 0;
var answered = 0;

function q1(){
    document.getElementById("Q1").style.display="none";
    document.getElementById("Q1").style.backgroundColor="#FF7F7F";
    document.getElementById("ansbutton1_1").disabled="true";
    document.getElementById("ansbutton1_2").disabled="true";
    document.getElementById("ansbutton1_3").disabled="true";
    document.getElementById("ansbutton1_4").disabled="true";
    document.getElementById("score").style.backgroundColor="red";
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Wrong Answer!";
    document.getElementById("Q1").style.borderTop="solid red 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
}
function q1ans(){
    document.getElementById("Q1").style.display="none";
    document.getElementById("Q1").style.backgroundColor="#98FB98";
    document.getElementById("ansbutton1_1").disabled="true";
    document.getElementById("ansbutton1_2").disabled="true";
    document.getElementById("ansbutton1_3").disabled="true";
    document.getElementById("ansbutton1_4").disabled="true";
    document.getElementById("score").style.backgroundColor="green";
    score=score+1;
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Correct Answer!";
    document.getElementById("Q1").style.borderTop="solid green 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }

}

function q2(){
    document.getElementById("Q2").style.display="none";
    document.getElementById("Q2").style.backgroundColor="#FF7F7F";
    document.getElementById("ansbutton2_1").disabled="true";
    document.getElementById("ansbutton2_2").disabled="true";
    document.getElementById("ansbutton2_3").disabled="true";
    document.getElementById("ansbutton2_4").disabled="true";
    document.getElementById("score").style.backgroundColor="red";
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Wrong Answer!";
    document.getElementById("Q2").style.borderTop="solid red 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
}
function q2ans(){
    document.getElementById("Q2").style.display="none";
    document.getElementById("Q2").style.backgroundColor="#98FB98";
    document.getElementById("ansbutton2_1").disabled="true";
    document.getElementById("ansbutton2_2").disabled="true";
    document.getElementById("ansbutton2_3").disabled="true";
    document.getElementById("ansbutton2_4").disabled="true";
    document.getElementById("score").style.backgroundColor="green";
    score=score+1;
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Correct Answer!";
    document.getElementById("Q2").style.borderTop="solid green 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
}

function q3(){
    document.getElementById("Q3").style.display="none";
    document.getElementById("Q3").style.backgroundColor="#FF7F7F";
    document.getElementById("ansbutton3_1").disabled="true";
    document.getElementById("ansbutton3_2").disabled="true";
    document.getElementById("ansbutton3_3").disabled="true";
    document.getElementById("ansbutton3_4").disabled="true";
    document.getElementById("score").style.backgroundColor="red";
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Wrong Answer!";
    document.getElementById("Q3").style.borderTop="solid red 20px";
    answered = answered+1;
    if(answered==10){
        
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
    
}
function q3ans(){
    document.getElementById("Q3").style.display="none";
    document.getElementById("Q3").style.backgroundColor="#98FB98";
    document.getElementById("ansbutton3_1").disabled="true";
    document.getElementById("ansbutton3_2").disabled="true";
    document.getElementById("ansbutton3_3").disabled="true";
    document.getElementById("ansbutton3_4").disabled="true";
    document.getElementById("score").style.backgroundColor="green";
    score=score+1;
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Correct Answer!";
    document.getElementById("Q3").style.borderTop="solid green 20px";
    answered = answered+1;
    if(answered==10){
        
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
}

function q4(){
    document.getElementById("Q4").style.display="none";
    document.getElementById("Q4").style.backgroundColor="#FF7F7F";
    document.getElementById("ansbutton4_1").disabled="true";
    document.getElementById("ansbutton4_2").disabled="true";
    document.getElementById("ansbutton4_3").disabled="true";
    document.getElementById("ansbutton4_4").disabled="true";
    document.getElementById("score").style.backgroundColor="red";
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Wrong Answer!";
    document.getElementById("Q4").style.borderTop="solid red 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
}
function q4ans(){
    document.getElementById("Q4").style.display="none";
    document.getElementById("Q4").style.backgroundColor="#98FB98";
    document.getElementById("ansbutton4_1").disabled="true";
    document.getElementById("ansbutton4_2").disabled="true";
    document.getElementById("ansbutton4_3").disabled="true";
    document.getElementById("ansbutton4_4").disabled="true";
    document.getElementById("score").style.backgroundColor="green";
    score=score+1;
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Correct Answer!";
    document.getElementById("Q4").style.borderTop="solid green 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
}

function q5(){
    document.getElementById("Q5").style.display="none";
    document.getElementById("Q5").style.backgroundColor="#FF7F7F";
    document.getElementById("ansbutton5_1").disabled="true";
    document.getElementById("ansbutton5_2").disabled="true";
    document.getElementById("ansbutton5_3").disabled="true";
    document.getElementById("ansbutton5_4").disabled="true";
    document.getElementById("score").style.backgroundColor="red";
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Wrong Answer!";
    document.getElementById("Q5").style.borderTop="solid red 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
}
function q5ans(){
    document.getElementById("Q5").style.display="none";
 
    document.getElementById("Q5").style.backgroundColor="#98FB98";
    document.getElementById("ansbutton5_1").disabled="true";
    document.getElementById("ansbutton5_2").disabled="true";
    document.getElementById("ansbutton5_3").disabled="true";
    document.getElementById("ansbutton5_4").disabled="true";
    document.getElementById("score").style.backgroundColor="green";
    score=score+1;
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Correct Answer!";
    document.getElementById("Q5").style.borderTop="solid green 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }

}

function q6(){
    document.getElementById("Q6").style.display="none";
    document.getElementById("Q6").style.backgroundColor="#FF7F7F";
    document.getElementById("ansbutton6_1").disabled="true";
    document.getElementById("ansbutton6_2").disabled="true";
    document.getElementById("ansbutton6_3").disabled="true";
    document.getElementById("ansbutton6_4").disabled="true";
    document.getElementById("score").style.backgroundColor="red";
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Wrong Answer!";
    document.getElementById("Q6").style.borderTop="solid red 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
}
function q6ans(){
    document.getElementById("Q6").style.display="none";
    document.getElementById("Q6").style.backgroundColor="#98FB98";
    document.getElementById("ansbutton6_1").disabled="true";
    document.getElementById("ansbutton6_2").disabled="true";
    document.getElementById("ansbutton6_3").disabled="true";
    document.getElementById("ansbutton6_4").disabled="true";
    document.getElementById("score").style.backgroundColor="green";
    score=score+1;
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Correct Answer!";
    document.getElementById("Q6").style.borderTop="solid green 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }

}

function q7(){
    document.getElementById("Q7").style.display="none";
    document.getElementById("Q7").style.backgroundColor="#FF7F7F";
    document.getElementById("ansbutton7_1").disabled="true";
    document.getElementById("ansbutton7_2").disabled="true";
    document.getElementById("ansbutton7_3").disabled="true";
    document.getElementById("ansbutton7_4").disabled="true";
    document.getElementById("score").style.backgroundColor="red";
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Wrong Answer!";
    document.getElementById("Q7").style.borderTop="solid red 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
    
}
function q7ans(){
    document.getElementById("Q7").style.display="none";
    document.getElementById("Q7").style.backgroundColor="#98FB98";
    document.getElementById("ansbutton7_1").disabled="true";
    document.getElementById("ansbutton7_2").disabled="true";
    document.getElementById("ansbutton7_3").disabled="true";
    document.getElementById("ansbutton7_4").disabled="true";
    document.getElementById("score").style.backgroundColor="green";
    score=score+1;
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Correct Answer!";
    document.getElementById("Q7").style.borderTop="solid green 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
}

function q8(){
    document.getElementById("Q8").style.display="none";
    document.getElementById("Q8").style.backgroundColor="#FF7F7F";
    document.getElementById("ansbutton8_1").disabled="true";
    document.getElementById("ansbutton8_2").disabled="true";
    document.getElementById("ansbutton8_3").disabled="true";
    document.getElementById("ansbutton8_4").disabled="true";
    document.getElementById("score").style.backgroundColor="red";
    document.getElementById("Q8").style.borderTop="solid red 20px";
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Wrong Answer!";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }

}
function q8ans(){
    document.getElementById("Q8").style.display="none";
    document.getElementById("Q8").style.backgroundColor="#98FB98";
    document.getElementById("ansbutton8_1").disabled="true";
    document.getElementById("ansbutton8_2").disabled="true";
    document.getElementById("ansbutton8_3").disabled="true";
    document.getElementById("ansbutton8_4").disabled="true";
    document.getElementById("score").style.backgroundColor="green";
    score=score+1;
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Correct Answer!";
    document.getElementById("Q8").style.borderTop="solid green 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
}

function q9(){
    document.getElementById("Q9").style.display="none";
    document.getElementById("Q9").style.backgroundColor="#FF7F7F";
    document.getElementById("ansbutton9_1").disabled="true";
    document.getElementById("ansbutton9_2").disabled="true";
    document.getElementById("ansbutton9_3").disabled="true";
    document.getElementById("ansbutton9_4").disabled="true";
    document.getElementById("score").style.backgroundColor="red";
    document.getElementById("Q9").style.borderTop="solid red 20px";
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Wrong Answer!";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
}
function q9ans(){
    document.getElementById("Q9").style.display="none";
    document.getElementById("Q9").style.backgroundColor="#98FB98";
    document.getElementById("ansbutton9_1").disabled="true";
    document.getElementById("ansbutton9_2").disabled="true";
    document.getElementById("ansbutton9_3").disabled="true";
    document.getElementById("ansbutton9_4").disabled="true";
    document.getElementById("score").style.backgroundColor="green";
    score=score+1;
    console.log(score);
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Correct Answer!";
    document.getElementById("Q9").style.borderTop="solid green 20px";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }

}

var a;

function q10(){

    
    document.getElementById("Q10").style.display="none"; 
    document.getElementById("Q10").style.backgroundColor="#FF7F7F";
    document.getElementById("ansbutton10_1").disabled="true";
    document.getElementById("ansbutton10_2").disabled="true";
    document.getElementById("ansbutton10_3").disabled="true";
    document.getElementById("ansbutton10_4").disabled="true";
    document.getElementById("check").style.backgroundColor="red";
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Wrong Answer!";
    document.getElementById("Q10").style.borderTop="solid red 20px";
    a =1;
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
    
}


function q10ans(){
    document.getElementById("Q10").style.display="none";
    document.getElementById("Q10").style.backgroundColor="#98FB98";
    document.getElementById("ansbutton10_1").disabled="true";
    document.getElementById("ansbutton10_2").disabled="true";
    document.getElementById("ansbutton10_3").disabled="true";
    document.getElementById("ansbutton10_4").disabled="true";
    document.getElementById("score").style.backgroundColor="green";
    score=score+1;
    document.getElementById("score").innerHTML="Score: "+score+" / 10"+"<br/>"+"Correct Answer!";
    answered = answered+1;
    if(answered==10){
        document.getElementById("submit_b").style.display="block";
        location.href="#submit_b";
    }
}

function sub(){
    var name = localStorage.getItem("Name");
    document.getElementById("ribbon").style.display="block";
    document.getElementById("score").style.display="none";
    document.getElementById("Q1").style.display="block";
    document.getElementById("Q2").style.display="block";
    document.getElementById("Q3").style.display="block";
    document.getElementById("Q4").style.display="block";
    document.getElementById("Q5").style.display="block";
    document.getElementById("Q6").style.display="block";
    document.getElementById("Q7").style.display="block";
    document.getElementById("Q8").style.display="block";
    document.getElementById("Q9").style.display="block";
    document.getElementById("Q10").style.display="block";
    document.getElementById("Q10").style.borderTop="solid green 20px";
    document.getElementById("submit_b").style.display="none";
    document.getElementById("hide").style.display="block";

    

    document.getElementById("conclude").innerHTML="So "+name+", here is your score in this quiz!<br/><br/><u>Score: "+score+" out of 10</u>";

    if(a==1){
        document.getElementById("Q10").style.backgroundColor="#FF7F7F"; 
    }
    else{
        document.getElementById("Q10").style.backgroundColor="#98FB98";
    }
    location.href="#ribbon";
    

}

function anskey(){
    window.location="answer key.html";}

