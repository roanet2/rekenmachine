var lastLetter;
var firstLetter;
var totaal;
var calculationMethod;


function Clear(){
 
 document.getElementById("lastLetter").value="";
 document.getElementById("firstLetter").value="";
 document.getElementById("totaal").value="";

}

 

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function Rekensom() { // start function rekensom   

totaal = 0;

lastLetter = document.getElementById('lastLetter').value;
firstLetter = document.getElementById('firstLetter').value;

	if (document.getElementById('plus').checked) {
	  calculationMethod = '+';
	} else if (document.getElementById('min').checked) {
	  calculationMethod = '-';}
	  else if(document.getElementById('keer').checked) {
		calculationMethod = '*';
	
	} else if(document.getElementById('delen').checked) {
		calculationMethod = '/';
		if (lastLetter =='0' ) {
		  alert ("tweede getal mag geen 0 zijn");
		    document.getElementById("totaal").value="";
		    return;
		}
		

		
		 
	} 


if (isNumber(firstLetter) && isNumber(lastLetter)) {
	   document.getElementById("totaal").value = eval(firstLetter  + calculationMethod +  lastLetter);
	
} else if (firstLetter == '' || lastLetter == '') {

		alert ("je heb niks ingevuld "); 

}
else {
	    //show an alert that the inputs needs to be numbers
	    alert ("input moet een nummer zijn");
	}

} // end function rekensom  

