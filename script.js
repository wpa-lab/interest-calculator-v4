function rateValue(val){
	document.getElementById('rateInput').value=val;

}

function calculate(){
        amount = document.getElementById('amount').value;
        if (isNaN(amount) || amount <= 0 || amount >10 ) {
        alert("Only Positive number Between 1 to 10 years");
        document.getElementById("amount").focus();
        return;
        }
    
    rateInput= document.getElementById('rateInput').value;
    selectId=document.getElementById('selectId').value;
    resultat=document.getElementById('resultat');


    var today= new Date();
    var years = today.getFullYear();
    var result1=((years=+selectId));
    var today2=new Date();
    var years2 =today2.getFullYear();
    var result2=result1+years2

    resultat.innerHTML="If you deposit"+"&nbsp;"+(amount)+","+"<br/>"+ "at an interest rate of"+"&nbsp;"+(rateInput)+"."+"<br/>"+
    "You will receive an amount of"+"&nbsp;"+(amount*rateInput*selectId/100)+","+"<br/>"+
    "in the year"+"&nbsp;"+(result2);
}

