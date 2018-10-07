function Question1()
      {
        let ans1 = document.getElementById("answer1").value;
        let score = document.getElementById("scoring").innerHTML;
        if (ans1.toLowerCase() == "start")
        {
        score ++;
        document.getElementById("1").style.display="none";
        document.getElementById("scoring").innerHTML = score;
       

        } else {
         document.getElementById("answerPane1").innerHTML ="";               
         document.getElementById("answerPane1").style.color="red";}
      }   

function Question2()
      {
        let ans2 = document.getElementById("answer2").value;
        let score = document.getElementById("scoring").innerHTML;
        if (ans2.toLowerCase() == "heart")
        {
        score ++;
        document.getElementById("2").style.display="none";
        document.getElementById("scoring").innerHTML = score;
       

        } else {
         document.getElementById("answerPane2").innerHTML ="";               
         document.getElementById("answerPane2").style.color="red";}
      } 

function Question3()
      {
        let ans3 = document.getElementById("answer3").value;
        let score = document.getElementById("scoring").innerHTML;
        if ((ans3.toLowerCase() == "ralph") || (ans3.toLowerCase() == "ralph jayson") || (ans3.toLowerCase() == "ralph jayson guinucod") || (ans3.toLowerCase() == "jayson") )
        {
        score ++;
        document.getElementById("3").style.display="none";
        document.getElementById("scoring").innerHTML = score;
       

        } else {
         document.getElementById("answerPane3").innerHTML ="";               
         document.getElementById("answerPane3").style.color="red";}
      } 

function Question4()
      {
        let ans4 = document.getElementById("answer4").value;
        let score = document.getElementById("scoring").innerHTML;
        if ((ans4.toLowerCase() == "terence") || (ans4.toLowerCase() == "terence gaffud") )
        {
        score ++;
        document.getElementById("4").style.display="none";
        document.getElementById("scoring").innerHTML = score;
       

        } else {
         document.getElementById("answerPane4").innerHTML ="";               
         document.getElementById("answerPane4").style.color="red";}
      } 

function Question5()
      {
        let ans5 = document.getElementById("answer5").value;
        let score = document.getElementById("scoring").innerHTML;
        if (ans5.toLowerCase() == "again") 
        {
        score ++;
        document.getElementById("5").style.display="none";
        document.getElementById("scoring").innerHTML = score;
       

        } else {
         document.getElementById("answerPane5").innerHTML ="";               
         document.getElementById("answerPane5").style.color="red";}
      }  

function Question6()
      {
        let ans6 = document.getElementById("answer6").value;
        let score = document.getElementById("scoring").innerHTML;
        if ((ans6.toLowerCase() == "ryan") || (ans6.toLowerCase() == "ryan ben") || (ans6.toLowerCase() == "ryan ben villanueva") || (ans6.toLowerCase() == "ben")) 
        {
        score ++;
        document.getElementById("6").style.display="none";
        document.getElementById("scoring").innerHTML = score;
       

        } else {
         document.getElementById("answerPane6").innerHTML ="";               
         document.getElementById("answerPane6").style.color="red";}
      }      

function Question7()
      {
        let ans7 = document.getElementById("answer7").value;
        let score = document.getElementById("scoring").innerHTML;
        if ((ans7.toLowerCase() == "john") || (ans7.toLowerCase() == "john edison") || (ans7.toLowerCase() == "john edison collado") || (ans7.toLowerCase() == "edison")) 
        {
        score ++;
        document.getElementById("7").style.display="none";
        document.getElementById("scoring").innerHTML = score;
       

        } else {
         document.getElementById("answerPane6").innerHTML ="";               
         document.getElementById("answerPane6").style.color="red";}
      }

function QuestionLast()
      {
        let ansLast = document.getElementById("answerLast").value;
        let score = document.getElementById("scoring").innerHTML;
        if (ansLast.toLowerCase() == "sleep")  
        {
        score ++;
        document.getElementById("last").style.display="none";
        document.getElementById("scoring").innerHTML = score;
       

        } else {
         document.getElementById("answerPaneLast").innerHTML ="";               
         document.getElementById("answerPaneLast").style.color="red";}
      }  

function checkMyScore()
      {
     let score = document.getElementById("scoring").innerHTML;
        if (score > 0) 
        { 
         document.getElementById("nextquiz").style.display = "block";}
        }