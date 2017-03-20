alert("Script Connected");
var btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function(){	
	var psgn = [];
	var pAge = []; 
	var pGender = [];
	var pBirthChoice  = [];
	var pFoodChoice = [];
	var concessionOpt = [];
	var code = "javascript: ";

	for (var i = 0; i<6; i++) {
		psgn[i] = document.getElementById("passenger:"+i);
		pAge[i] = document.getElementById("psgnAge:"+i);
		pGender[i] = document.getElementById("psgnGender:"+i);
		pBirthChoice[i] = document.getElementById("berthChoice:"+i);
		pFoodChoice[i] = document.getElementById("foodChoice:"+i);

		if(psgn[i].value!==""){
			code+="document.querySelectorAll('.psgn-name')["+i+"].setAttribute('value',"+"'"+ psgn[i].value+"'"+");";

		}
		if(pAge[i].value!==""){
			code+="document.querySelectorAll('.psgn-age')["+i+"].setAttribute('value',"+"'"+ pAge[i].value+"'"+");";

		}

		if(pGender[i].value!==" "){
			code+="document.querySelectorAll('.psgn-gender')["+i+"].value = "+"'"+ pGender[i].value+"'"+";";
		}


		if(pBirthChoice[i].value!==" "&&psgn[i].value!==""){
			code+="document.querySelectorAll('.psgn-berth-choice')["+i+"].value = "+"'"+ pBirthChoice[i].value+"'"+";";
		}

		if(pFoodChoice[i].value!==" "&&psgn[i].value!==""){

			code+="try { document.querySelectorAll('.psgn-foodChoice')["+i+"].value = "+"'"+pFoodChoice[i].value+"'"+";} catch(e){console.log('This form does not have food choice option.'+e);} ";
		}


	}



	var infant = [];
	var infantAge = [];
	var infantGender = [];

	for(var i=0; i<2; i++){

		infant[i]=document.getElementById("infant:"+i);
		infantAge[i]= document.getElementById("infant-age:"+i);
		infantGender[i] = document.getElementById("infant-gender:"+i);
		if(infant[i].value !==""){
			code+="document.querySelectorAll('.infant-name')["+i+"].setAttribute('value',"+"'"+ infant[i].value +"'"+");";
		}


		if(infantAge[i].value!== "-1"){
			code+="document.querySelectorAll('.infant-age')["+i+"].value = "+"'"+ infantAge[i].value+"'"+";";
		}


		if(infantGender[i].value!==" "){
			code+="document.querySelectorAll('.infant-gender')["+i+"].value = "+"'"+ infantGender[i].value+"'"+";";	

		}

	}


	if(document.getElementById("mobileNo").value!=="") {
		code+="document.querySelector('.mobile-number').setAttribute('value',"+"'"+ document.getElementById("mobileNo").value+"'"+");";

	}

	var bookCond = [];

	for(var i = 0 ; i<4; i++){
		bookCond[i] = document.getElementById("addPassengerForm:bookingCond:"+i);
		if(bookCond[i].checked === true) {
			code+="document.getElementById('addPassengerForm:bookingCond:"+ i+"').checked = 1;";

		}


	}


	var autoUpgrade = document.getElementById('addPassengerForm:autoUpgrade');
	if(autoUpgrade.checked === true){
		code+="document.getElementById('addPassengerForm:autoUpgrade').checked = 1;";
	}
	var vikalp = document.getElementById('addPassengerForm:atasOption');
	if(vikalp.checked === true){
		code+="document.getElementById('addPassengerForm:atasOption').checked = 1;";
	}

	var cT = document.getElementById('addPassengerForm:onlyConfirmBerths');
	if(cT.checked === true){
		code +="document.getElementById('addPassengerForm:onlyConfirmBerths').checked = 1 ; ";
	}

	console.log(code);
});


