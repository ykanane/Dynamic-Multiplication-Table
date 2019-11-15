/*
 File: HW6/js/add-content.js
 Full name: Yassir Kanane
 COMP 4601 Assignment 6
 Yassir Kanane, UMass Lowell Computer Science, yassir_kanane@student.uml.edu
 Updated on Nov. 11, 2019 at 3:47 PM */

function generateTable(){
  //use parseInt function to convert to int
  var x1 = parseFloat(document.getElementById('row-first').value);
  var x2 = parseFloat(document.getElementById('row-last').value);
  var y1 = parseFloat(document.getElementById('col-first').value);
  var y2 = parseFloat(document.getElementById('col-last').value);

  var xFirst = parseInt(document.getElementById('row-first').value);
  var xLast = parseInt(document.getElementById('row-last').value);
  var yFirst = parseInt(document.getElementById('col-first').value);
  var yLast = parseInt(document.getElementById('col-last').value);
  var table = document.getElementsByClassName("table");

  //abort table generation if input is invalid
  var flag = validateInput(xFirst,xLast,yFirst,yLast);
  if(flag == 'Error'){
    return;
  }
  checkForFloats(x1,x2,y1,y2,flag);
  //check if input was entered out of order and swap accordingly
  if(xFirst > xLast){
    var temp = xFirst;
    var temp2 = xLast;
    xFirst = temp2;
    xLast = temp;
  }

  if(yFirst > yLast){
    var temp = yFirst;
    var temp2 = yLast;
    yFirst = temp2;
    yLast = temp;
  }

  var tableHTML = "<thead> <tr> <th> </th>"   //0,0 cell blank to properly align
  //initialize the horizontal axis bounds by looping through range and forming
  //the table html via a string variable
  for (var i = xFirst; i <= xLast ;i++) {
    tableHTML += "<th>" + i + "</th>";
  }
  tableHTML += "</tr> </thead> <tbody> ";  //end first row

//nested for loop to initalize verticle range and row data for each value
  for(var j = yFirst; j <= yLast; j++){
    tableHTML += "<tr> <th scope=\"row\">" + j + "</td>";
    for(var i = xFirst; i <= xLast; i++){
      tableHTML += "<td>" + j*i + "</td>";
    }
    tableHTML += "</tr>";
  }
  tableHTML += "<tbody";
  table[0].innerHTML = tableHTML; //need to index table due to getElementByClass

}


/* Check each input in its own condition and modify the html accordingly
learned about isInteger function here:
https://www.w3schools.com/jsref/jsref_isinteger.asp*/
function validateInput(x1,x2,y1,y2){
    var error = "Invalid input! Please make sure you enter an integer.";
    var flag = 0;
    if(!(Number.isInteger(x1))){
      var x = document.getElementById("x1");
      x.innerHTML = error;
      flag = 1;
    }
    else{
      var x = document.getElementById("x1");
      var blank = " ";
      x.innerHTML = " ";
    }
    if(!(Number.isInteger(x2))){
      var x = document.getElementById("x2");
      x.innerHTML = error;
      flag = 1;
    }
    else{
      var x = document.getElementById("x2");
      var blank = " ";
      x.innerHTML = " ";
    }
    if(!(Number.isInteger(y1))){
      var x = document.getElementById("y1");
      x.innerHTML = error;
      flag = 1;
    }
    else{
      var x = document.getElementById("y1");
      var blank = " ";
      x.innerHTML = " ";
    }
    if(!(Number.isInteger(y2))){
      var x = document.getElementById("y2");
      x.innerHTML = error;
      flag = 1;
    }
    else{
      var x = document.getElementById("y2");
      var blank = " ";
      x.innerHTML = " ";
    }
    if(flag == 1)
      return 'Error';
}

//Similar to function about but strictly for floats
function checkForFloats(x1,x2,y1,y2){
  
  var message = "It seems you have entered a float, it will be converted to integer in the table";

  if((!Number.isInteger(x1))){
    var x = document.getElementById("x12");
    x.innerHTML = message;
  }
  else{
    var x = document.getElementById("x12");
    var blank = " ";
    x.innerHTML = " ";
  }
  if((!Number.isInteger(x2))){
    var x = document.getElementById("x22");
    x.innerHTML = message;
  }
  else{
    var x = document.getElementById("x22");
    var blank = " ";
    x.innerHTML = " ";
  }
  if((!Number.isInteger(y1))){
    var x = document.getElementById("y12");
    x.innerHTML = message;
  }
  else{
    var x = document.getElementById("y12");
    var blank = " ";
    x.innerHTML = " ";
  }
  if((!Number.isInteger(y2))){
    var x = document.getElementById("y22");
    x.innerHTML = message;
  }
  else{
    var x = document.getElementById("y22");
    var blank = " ";
    x.innerHTML = " ";
  }
  return;
}
