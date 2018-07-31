// let GsButton= document.getElementById('GsButton');
// let popupShow= function(){

// 	let popup=document.getElementById('popup');
// 	popup.innerHTML=pop;
// 	alert(pop);
// }

//  GsButton.addEventListener('click', popupShow());



//  if(group.value.length == 0){
// document.getElementById('head').innerText = "* All fields are mandatory *";
// group.focus();
// return false;
// }


// function ValidateFirstName ( )
// {
//     var firstname = document.getElementById("user");

//     if (firstName.value == "")

//     {

//       console

//     }

//     else

//     {

//        return true;

// //     }
// // }
// function validate()
// {
//     var genderM=form.gender_male;
//     var genderF=form.gender_female;

//     if(document.gender==false && genderF.checked==false ) {
//         alert("You must select male or female");
//         return false;
//     }   
// }


function Move() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 3);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}

}
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}