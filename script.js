function setError(id,error){
    element=document.getElementById(id);
    element.innerHTML=error;
}

function clearError(){
    errors=document.getElementsByClassName('formError');
    for(let item of errors){
        item.innerHTML="";
    }
}


// const form=document.getElementById('form');
// form.addEventListener('submit',function(e){
//     e.preventDefault();


function validate(){

    var returnval=true;
    clearError();

    //checking word count
    var name=document.forms['myForm']['fName'].value;
    let count=0;
    for(let i=0;i<name.length;i++){
        if(name[i]==" "){
            count=count+1;
        }
    }
    if(name[name.length-1]==" "){
        count=count-1;
    }
    if((count+1)<2){
        setError("sName","* Name should at least be 2 words")
        returnval=false;
    }

    //checking Email
    var email=document.forms['myForm']['fEmail'].value;
    var pattern=/^[A-Za-z._0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    if(!pattern.test(email)){
        setError("sEmail","* Email should be correct!");
        returnval=false;
    }


    //cheching password
    var password=document.forms['myForm']['fPass'].value;
    var patternPass=/[A-Za-z0-9!@#&%^(){}~$]{4,8}$/;
    if(!patternPass.test(password)){
        setError("sPass","* Password should be correct!");
        returnval=false;
    }


    //cheching confirm password
    var cPassword=document.forms['myForm']['fCPass'].value;
    if(!password==cPassword){
        setError("scPass","* Password doesn't Match!");
        returnval=false;
    }





    return returnval;
}
// );


/*

var userCheck= /^[A-Za-z. ]{3,30}$/;
var passwordCheck= /^(?=.*[0-9])(?=.*[!@$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;


*/