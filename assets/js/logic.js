var user = document.getElementById("loginUserId");
var pass = document.getElementsByName("j_password")[0]; 
var submitBtn = document.getElementById("submit");
// var bookmark = document.getElementById("loginBM");
var reset = document.getElementById("reset");
var input = document.querySelectorAll("input");

// reset.addEventListener("click", function(){
// for(var i = 0; i< input.length; i++){
// 	input[i].value = "";
// }

// });

// submitBtn.addEventListener("click", function() { 

// 	alert("Bookmark the Autofill Button");

// document.querySelector("a").setAttribute("href", "javascript: var user = document.getElementById('usernameId'); user.setAttribute('value',"+ "'"+user.value+"'"+"); var pass = document.getElementsByName('j_password')[0]; pass.setAttribute('value',"+ "'"+pass.value+"'"+");"); 
//  });

var cName = document.getElementById("card_name_id");
var cardN = document.getElementById("card_no_id");
var month = document.getElementById("card_expiry_mon_id");
var year = document.getElementById("card_expiry_year_id");
var cvv = document.getElementById("cvv_no_id");


var cardBtn = document.getElementById("card_submit");

// submitBtn.addEventListener("click", function() { 

// alert("Bookmark the Amaze Me Link!");

// document.querySelector("a").setAttribute("href", "javascript: var user = document.getElementById('usernameId'); user.setAttribute('value',"+ "'"+user.value+"'"+"); var pass = document.getElementsByName('j_password')[0]; pass.setAttribute('value',"+ "'"+pass.value+"'"+");"); 
//  });





cardBtn.addEventListener("click", function(){


if(cName.value !=="" && cardN.value !==""){


// document.querySelector("a").setAttribute("href", "javascript: document.getElementById('card_name_id').setAttribute('value',"+ "'"+ cName.value+"'"+"); document.getElementById('card_no_id').setAttribute('value',"+"'"+cardN.value+"'"+");document.getElementById('card_expiry_mon_id').getElementsByTagName('option')["+ month.value +"].selected = 'selected';var year = document.getElementById('card_expiry_year_id'); year.setAttribute('value',"+"'" +year.value+"'"+");var cvv = document.getElementById('cvv_no_id'); cvv.setAttribute('value',"+"'"+ cvv.value+"'"+");"); 


document.getElementById("loginBM").setAttribute("href", "javascript: document.getElementById('card_name_id').setAttribute('value',"+ "'"+ cName.value+"'"+"); document.getElementById('card_no_id').setAttribute('value',"+"'"+cardN.value+"'"+");document.getElementById('card_expiry_mon_id').getElementsByTagName('option')["+ month.value +"].selected = 'selected';var year = document.getElementById('card_expiry_year_id'); year.setAttribute('value',"+"'" +year.value+"'"+");var cvv = document.getElementById('cvv_no_id'); cvv.setAttribute('value',"+"'"+ cvv.value+"'"+");document.getElementById('captcha_txt').focus();document.getElementById('captcha_txt').select();"); 


}
else{
	alert("Fields are empty");
}

});
