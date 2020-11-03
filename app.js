var data = [];

var name=document.querySelector('#fname');
var nameInput=document.querySelector('#lname');
var surnameInput=document.querySelector('#birthday');
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
   var user = new createUser(name.value,surname.value,birtday.value,email.value,phon.value,gender.value,subject.value);

})

// function myFunction() {
//     var x, text;
  
//     // Get the value of the input field with id="numb"
//     x = document.getElementById("numb").value;
  
//     // If x is Not a Number or less than one or greater than 10
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Input not valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }

// validation
//   function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("All fields must be filled out");
//       return false;
//     }
//   }