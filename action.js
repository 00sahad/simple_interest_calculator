 

 console.log("hellow world!")

let Simple_Interest;
let Amount;
let Interest;
let Time;



 function Calculate(){
     

    if(document.getElementById("inputbox1").value=='' && document.getElementById("inputbox2").value=='' && document.getElementById("inputbox3").value==''){
        document.getElementById("inputbox1").style.border='3px solid red'
        document.getElementById("inputbox2").style.border='3px solid red'
        document.getElementById("inputbox3").style.border='3px solid red'
    }
    else if(document.getElementById("inputbox1").value=='' && document.getElementById("inputbox2").value==''){
        document.getElementById("inputbox1").style.border='3px solid red'
        document.getElementById("inputbox2").style.border='3px solid red'
    }
    else if( document.getElementById("inputbox2").value=='' && document.getElementById("inputbox3").value==''){
        document.getElementById("inputbox2").style.border='3px solid red'
        document.getElementById("inputbox3").style.border='3px solid red'
    }
    else if(document.getElementById("inputbox1").value=='' && document.getElementById("inputbox3").value==''){
        document.getElementById("inputbox3").style.border='3px solid red'
        document.getElementById("inputbox1").style.border='3px solid red'
    }
    else if(document.getElementById("inputbox1").value==''){
        document.getElementById("inputbox1").style.border='3px solid red'
    }
    else if(document.getElementById("inputbox2").value==''){
        document.getElementById("inputbox2").style.border='3px solid red'
    }
    else if(document.getElementById("inputbox3").value==''){
        document.getElementById("inputbox3").style.border='3px solid red'
    }
    else{
         Amount=document.getElementById("inputbox1").value;
    Interest=parseFloat(document.getElementById('inputbox2').value)
         Interest=Interest/100;
         Time=document.getElementById('inputbox3').value;

         Simple_Interest=Amount*Interest*Time
         
        document.getElementById('InterestDiv').style.display='block';
        document.getElementById('InterestValue').innerHTML=Simple_Interest+' Rs';
    }
 }




 function normalBorder1(){
    document.getElementById("inputbox1").style.border='3px solid rgb(33, 140, 234)'
 }

 function normalBorder2(){
    document.getElementById("inputbox2").style.border='3px solid rgb(33, 140, 234)'
 }

 function normalBorder3(){
    document.getElementById("inputbox3").style.border='3px solid rgb(33, 140, 234)'
 }



 function onlyNumberKey(evt) {
          
        // Only ASCII character in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
    }

    $(document).ready(function(){
        $("input[name='percentage']").on('input', function() {
            $(this).val(function(i, v) {
             return v.replace('%','') + '%';  });
            });
        });


 

function ClearFields() {

    document.getElementById("inputbox2").value = "";
    document.getElementById("inputbox1").value = "";
    document.getElementById("inputbox3").value = "";
}