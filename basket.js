var total = 0;
function totalToPay(arr){
	total += arr[i].price
	document.getElementById("").value = total;
}   
//-----------------------------------------------------
document.getElementById("home").onclick = function () {
        location.href = "home.html";
    };
//------------------------------------------------------    
document.getElementById("return").onclick = function () {
        location.href = "2.html";
    };
//--------------------------------------------------------
function empty(){
	if(document.getElementById("first").value === "" || document.getElementById("last").value === "" || document.getElementById("adress").value === "" || document.getElementById("state").value === "" || document.getElementById("phone").value === "" || document.getElementById("email").value === ""){
		alert("You should fill all element");
	}
	return true
}





//---------------------------------------------------------
function reset() { 
        document.getElementById("").value = {};

}
//-----------------------------------------------------
function ph(){
	var check = /^\d{8}$/;
	var ph = document.getElementById("phone").value;
	if(ph.length !== 8 || !ph.match(check)){
			alert("plz enter the reight phone number");
	}
	return true
}
//-----------------------------------------------------------
function email(){
	var em = document.getElementById("email").value;
	 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em)){
	 	return true
	 }
	 alert ("wrong email")
}
//-------------------------------------------------------------
