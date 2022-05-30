//Preventing the default event
document.getElementById('nextButton').addEventListener("click", function (event){
    event.preventDefault();
});


function formValidation(){
    console.log("Form validation start");
    let firstNameVal = firstNameValidation((document.getElementById('firstName').value).trim(), document.getElementById('firstNameErr'));
    let lastNameVal = lastNameValidation((document.getElementById('lastName').value).trim(),document.getElementById('lastNameErr'));
    let dateOfBirthVal = dateOfBirthValidation(document.getElementById('dateOfBirth').value, document.getElementById('dateOfBirthErr'));
    let userEmailVal = emailValidation((document.getElementById('userEmail').value).trim(), document.getElementById('emailErr'));
    let fatherNameFirstVal = firstNameValidation((document.getElementById('fatherNameFirst').value).trim(), document.getElementById('fatherNameFirstErr'));
    let fatherNameLastVal = lastNameValidation((document.getElementById('fatherNameLast').value).trim(), document.getElementById('fatherNameLastErr'));
    let motherNameFirstVal = firstNameValidation((document.getElementById('motherNameFirst').value).trim(), document.getElementById('motherFirstNameErr'));
    let motherNameLastVal = lastNameValidation((document.getElementById('motherNameLast').value).trim(), document.getElementById('motherLastNameErr'));
    let genderVal = genderValidation(document.querySelectorAll('input[name="gender"]'), document.getElementById('genderErr'));
    let nationalityVal = nationalityValidation((document.getElementById('nationality').value).trim(), document.getElementById('nationalityErr'));
    let streetAddressVal = addressValidation((document.getElementById('streetAddress').value).trim(), document.getElementById('streetAddressErr'));
    let cityNameVal = nationalityValidation((document.getElementById('cityName').value).trim(), document.getElementById('cityNameErr'));
    let countryNameVal = countryValidation(document.getElementById('countryName').value, document.getElementById('countryNameErr'));
    let telephoneNumberVal = telephoneValidation((document.getElementById('telephone').value).trim(), document.getElementById('telephoneErr'));
    let mobileNumberVal = mobileNumberValidation((document.getElementById('telephoneMobile').value).trim(), document.getElementById('telephoneMobileErr'));
    //console.log(firstName +" "+lastName+" "+dateOfBirth +" "+ userEmail +" "+ fatherNameFirst +" "+ fatherNameLast +" "+ motherNameFirst +" "+motherNameLast +" "+ gender +" "+ nationality +" "+ streetAddress +" "+ cityName +" "+ countryName +" "+ telephoneNumber +" "+ mobileNumber);
    //console.log(gender);
    if(firstNameVal && lastNameVal && dateOfBirthVal && userEmailVal && fatherNameFirstVal && fatherNameLastVal && motherNameFirstVal && motherNameLastVal && genderVal && nationalityVal && streetAddressVal && cityNameVal && countryNameVal && telephoneNumberVal && mobileNumberVal ){
        console.log("Validation Complete : Adding to local storage");

        void function(){
            let obj = {
                firstName: toTitleCase((document.getElementById('firstName').value).trim()),
                lastName : toTitleCase((document.getElementById('lastName').value).trim()),
                dateOfBirth: document.getElementById('dateOfBirth').value,
                userEmail:(document.getElementById('userEmail').value).trim(),
                fatherNameFirst:toTitleCase((document.getElementById('fatherNameFirst').value).trim()),
                fatherNameLast:toTitleCase((document.getElementById('fatherNameLast').value).trim()),
                motherNameFirst:toTitleCase((document.getElementById('motherNameFirst').value).trim()),
                motherNameLast:toTitleCase((document.getElementById('motherNameLast').value).trim()),
                gender:document.querySelector('input[name="gender"]:checked').value,
                nationality:toTitleCase((document.getElementById('nationality').value).trim()),
                streetAddress:(document.getElementById('streetAddress').value).trim(),
                cityName:toTitleCase((document.getElementById('cityName').value).trim()),
                countryName:document.getElementById('countryName').value,
                telephoneNumber:(document.getElementById('telephone').value).trim(),
                mobileNumber:(document.getElementById('telephoneMobile').value).trim()
            }
            localStorage.setItem("pageOneData", JSON.stringify(obj));
            console.log("Completed");
            window.location.href = "pageTwo.html";
        }();
    }
}

//TitleCase Function 

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

//First Name Validation Function
function firstNameValidation(name, errElement){
    let val = name;
    errElement.innerHTML = '&nbsp;';
    const regx =/^[a-zA-Z]+$/; //regex For name validation
    const txt = "Invalid first name";
    const arr = val.trim().split(" "); //Splitting the name if multiple name is given 
    var narr =[];
    if(name === ""){
        errElement.innerHTML = " This field can't be empty";
        return false;
    }
    //console.log(arr);
    arr.forEach((item)=>{if(item != ""){narr.push(item);}});
    //console.log(narr);
    if(narr.length > 1){
     if(!(narr.length > 2) && (narr[0]).match(regx) && (narr[0]).length > 2 && (narr[1]).match(regx) && (narr[1]).length > 2){
         //console.log("valid name");
         return true;
     }   
     else{ 
       errElement.innerHTML = txt;
       //console.log("invalid name");
       return false
     }
    }
    else{ 
      if(narr.length == 1 && narr[0].match(regx)){
          return true;
      }
      else{
       errElement.innerHTML = txt;
       //console.log("invalid name");
       return false
      }
    }
}

function lastNameValidation(name, errElement){
    let val = name;
    errElement.innerHTML = '&nbsp;';
    const regx =/^[a-zA-Z]+$/; //regex For name validation
    const txt = "Invalid last name";
    if(name === ""){
        errElement.innerHTML = "This field can't be empty";
        return false;
    }
    if(val.match(regx)){
        return true;
    }
    else{
        errElement.innerHTML = txt;
        return false;
    }
}

//Date of Birth Validation

function dateOfBirthValidation(dateOfBirth, errElement){
    errElement.innerHTML = "&nbsp;";
    if(dateOfBirth === ""){
        errElement.innerHTML = "This field can't be empty";
        return false;
    }
    return true;
}

//Email Validation

function emailValidation(email, errElement){
    const regx =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    errElement.innerHTML = "&nbsp;";
    const errMsg = "Invalid Email";
    if(email === ""){
        errElement.innerHTML = "This field can't be empty";
        return false;
    }
    if(email.match(regx)){
        //console.log("Email is validated");
        return true;
    }
    errElement.innerHTML = errMsg;
    return false;
    
}

//Gender Validation
function genderValidation(genderNodes, errElement){
    errElement.innerHTML = "&nbsp;";
    console.log(genderNodes);
    for(let x of genderNodes){
        if(x.checked) return true;
    }
    errElement.innerHTML = "You must select your gender";
    return false;
}

//Nationality Validation

function nationalityValidation(nationality, errElement){
    errElement.innerHTML = "&nbsp";
    if(nationality === ""){
        errElement.innerHTML = "This field can't be empty";
        return false
    }
    if(nationality.match(/^[A-Za-z]+$/)){
        return true;
    }
    errElement.innerHTML = "Invalid input given";
    return false;
}

//Address Validation

function addressValidation(address, errElement){
    errElement.innerHTML = "&nbsp;";
    if(address.trim() !== ""){
        return true;
    }
    errElement.innerHTML = "This field can't be empty";
    return false;
}

//Country Name validation

function countryValidation(countryName, errElement){
    errElement.innerHTML = "&nbsp;";
    if(countryName === ""){
        errElement.innerHTML = "Select your country";
        return false;
    }
    return true;
}

//Phone Number Validation

    //Telephone Validation
function telephoneValidation(telephoneNumber, errElement){
    errElement.innerHTML = "&nbsp;";
    if(telephoneNumber !== ""){
        if(telephoneNumber.match(/^\d{10}$/)){
            return true;
        }
        errElement.innerHTML = "invalid telephone number";
        return false;
    }
    return true;
}
    //Mobile Number validation
function mobileNumberValidation(mobileNumber, errElement){
        errElement.innerHTML = "&nbsp;";
        if(mobileNumber === ""){
            errElement.innerHTML = "this field can't be empty";
            return false;
        }
        if(mobileNumber.match(/^\d{10}$/)){
            return true;
        }
        errElement.innerHTML = "Invalid phone number";
        return false;
    }