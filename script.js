
// winningArrays = [["a","b","c"],["d","e","f"],["g","h","i"],["a","d","f"],["b","e","h"],["c","f","i"],["a","e","i"],["c","e","g"]]
// for (var i=0;i<winningArrays.length;i++){
//   operatorButtons[i].addEventListener("click",displayOperator);
// }
// function //make a function here to append grid elements into the square
//   }

$(document).ready(function(){

  var turnsTaken = 1;
  var inGame = true;
  $("td").click(function() {
    if ($(this).text()=="" && inGame) {
      if (((turnsTaken+1)%2)==1) {
        $(this).append("X");
        $(".playerTurn").innerhtml = "it is now O's turn"}//target the box to say "it is X turn"
      else {
        $(this).append("O");
        $(".playerTurn").innerhtml = "it is now O's turn"}
    //target the box to say "it is O turn"
  turnsTaken++;
    }
  });
//winningArrays = [["a","b","c"],["d","e","f"],["g","h","i"],["a","d","f"],["b","e","h"],["c","f","i"],["a","e","i"],["c","e","g"]]
//make a function which appends elements to an empty list when clicked- i struggled to implement this so, alas, this plan broke down
//make a function which checks if one array is in another array of arrays

  function winningCriteria() {
    var square1 = $("td"[0]).text();//I cant target any of these squares correctly
    var square2 = $("td"[1]).text();
    var square3 = $("td"[2]).text();
    var square4 = $("td"[3]).text();
    var square5 = $("td"[4]).text();
    var square6 = $("td"[5]).text();
    var square7 = $("td"[6]).text();
    var square8 = $("td"[7]).text();
    var square9 = $("td"[8]).text();

    if      ((square1==square2) && (square2==square3)) { return square3; }//row1
    else if ((square4==square5) && (square5==square6)) { return square6; }//row2
    else if ((square7==square8) && (square8==square9)) { return square9; }//row3

    else if ((square1==square4) && (square4==square7)) { return square7;}//columns
    else if ((square2==square5) && (square5==square8)) { return square8;}
    else if ((square3==square6) && (square6==square9)) { return square9 }

    else if ((square1==square5) && (square5==square9)) { return square9; }//digonals
    else if ((square3==square5) && (square5==square7)) { return square7; }
    else{
      return "this game is a tie";
    }
//if the winningCriteria is not above string and not null, then check if it is = "X", if so- create an alert
if (winningCriteria() != "this game is a tie" && winningCriteria() != null){
  if (winningCriteria() == "X") {
    alert("X's win");}
  else {
    alert("O's win");}
    inGame = False //this will now end the game so that no more moves can be made
  }

}
  }

});
