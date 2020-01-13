var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        score++

    }
    else {
        document.getElementById("question").value="You are wrong"

    }
    document.view.qscore.value=score
}
else if (ans===2){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"

    }
    document.view.qscore.value=score

}
else if (ans===3){
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"

    }
    document.view.qscore.value=score
}
else if (ans===4){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"

    }
    document.view.qscore.value=score
}
else if (ans===5){
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"

    }
    document.view.qscore.value=score
}
else if (ans===6){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"

    }
    document.view.qscore.value=score
}
else if (ans===7){
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"

    }
    document.view.qscore.value=score
}
else if (ans===8){
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"

    }
    document.view.qscore.value=score
}
else if (ans===9){
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"

    }
    document.view.qscore.value=score
}
else if (ans===10){
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"

    }
    document.view.qscore.value=score
}
    ans++;
}
function main(){
if (i===1){
	document.view.qnum.value=i;
   	document.view.question.value ="Whats the name of Aladdin monkey?\na)Jayd\nb)Halla\nc)Shilo\nd)Abu";
    document.view.qans.value=""
}
else if (i===2){
	document.view.qnum.value=i;
	document.view.question.value ="Whats the name of the princess?\na)Jasmine\nb)Kristine\nc)Joy\nd)Ally";
    document.view.qans.value=""
}
else if (i===3){
    document.view.qnum.value=i;
    document.view.question.value="Whats the name of the tiger?\na)Coco\nb)Bubbles\nc)Rajah\nd)Golly";
    document.view.qans.value=""
}
else if (i===4){
    document.view.qnum.value=i;
    document.view.question.value="Who played the child Aurora in the Maleficent?\na)Elle Fanning\nb)Vivienne Jolie-Pitt\nc)Eleanor Worthington Cox\nd)Lily James";
    document.view.qans.value=""
}
else if (i===5){
    document.view.qnum.value=i;
    document.view.question.value="What was Tris symbol in the movie Divergent?\na)Abnegation\nb)Amity\nc)Dauntless\nd)Erudite";
    document.view.qans.value=""
}
    else if (i===6){
    document.view.qnum.value=i;
    document.view.question.value="Whats the name of Tris brother in the movie Divergent?\na)Caleb Prior\nb)Andrew Prior\nc)Tobias Eaton\nd)Peeta Mellark";
    document.view.qans.value=""
}
else if (i===7){
    document.view.qnum.value=i;
    document.view.question.value="Who played us spiderman?\na)Jame Franco\nb)Chris Hemsworth\nc)Tobias Eaton\nd)Tom Holland";
    document.view.qans.value=""
}
else if (i===8){
    document.view.qnum.value=i;
    document.view.question.value="Who is the Villain in the movie Spiderman far from Home?\na)Anton Vanko\nb)Mysterio\nc)Shan Yu\nd)Bonnie";
    document.view.qans.value=""
}
else if (i===9){
    document.view.qnum.value=i;
    document.view.question.value="What is the name of the Robot in the movie Real Steel?\na)Mega Man\nb)Mysterio\nc)Atom\nd)Bumblebee";
    document.view.qans.value=""
}
else if (i===10){
    document.view.qnum.value=i;
    document.view.question.value="Who is the owner of the Robot in the movie Real Steel?\na)Zeus\nb)Mark\nc)Max\nd)Zach";
    document.view.qans.value=""
}
    i++;
}