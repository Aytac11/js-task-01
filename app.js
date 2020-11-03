var data = [];

var nameInput=document.querySelector('#fname');
var surnameInput=document.querySelector('#lname');
var birthdayInput=document.querySelector('#birtday');
var mailInput=document.querySelector('#male');
var femailInput=document.querySelector('#female');
var maleInput=document.querySelector('#email');
var phonInput=document.querySelector('#phon');
var subjectInput=document.querySelector('#subject');
var submitBtn=document.querySelector('#btn')

function createUser(_name,_surname,_birthday,_email,_phon,_gender,_subject){
        this.name=_name;
        this.surname=_surname;
        this.birtday=_birthday;
        this.email=_email;
        this.phon=_phon;
        this.gender=_gender;
        this.subject=_subject;
        this.show=function(){
         console.log(this.name, this.surname,this.birtday,this.email,this.phon,this.gender,this.subject)
        }
        data.push(this)
    }

submitBtn=document.querySelector("#btn");
submitBtn.addEventListener('click',function(){
   var user = new createUser(nameInput.value,surnameInput.value,birthdayInput.value,emailInput.value,phonInput.value,genderInput.value,subjectInput.value);
   for(var i=0;i<data.length;i++){
    data[i].show();
}
})

