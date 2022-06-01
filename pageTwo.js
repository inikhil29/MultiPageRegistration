function pageTwoValidation(){
    let hscInstitutionNameVal = instituteNameValidation((document.getElementById('hscInstitutionName').value).trim(), document.getElementById('hscInstitutionNameErr'));
    let hscBoardNameVal = boardNameValidation(document.getElementById('hscBoardName').value, document.getElementById('hscBoardNameErr'));
    let hscPersantageVal = persantageValidation((document.getElementById('hscPersantage').value).trim(), document.getElementById('hscPersantageErr'));
    let sscInstitutionNameVal = instituteNameValidation((document.getElementById('sscInstitutionName').value).trim(), document.getElementById('sscInstitutionNameErr'));
    let sscBoardNameVal = boardNameValidation(document.getElementById('sscBoardName').value, document.getElementById('sscBoardNameErr'));
    let sscPersantageVal = persantageValidation((document.getElementById('sscPersantage').value).trim(), document.getElementById('sscPersantageErr'));
    let currentInstitutionNameVal = instituteNameValidation((document.getElementById('currentInstitutionName').value).trim(), document.getElementById('currentInstitutionNameErr'));
    let currentCourseNameVal = courseNameValidation((document.getElementById('currentCourseName').value).trim(), document.getElementById('currentCourseNameErr'));
    let currentPersantageVal = persantageValidation((document.getElementById('currentCoursePersantage').value).trim(), document.getElementById('currentCoursePersantageErr'));
    let currentBacklogsVal = backlogsValidation((document.getElementById('currentCourseBacklogs').value).trim(), document.getElementById('currentCourseBacklogsErr'));
    if(hscInstitutionNameVal && hscBoardNameVal && hscPersantageVal && sscInstitutionNameVal && sscBoardNameVal && sscPersantageVal && currentInstitutionNameVal && currentCourseNameVal && currentPersantageVal &&currentBacklogsVal){
        void function(){
            let obj = {
                hscInstitutionName: (document.getElementById('hscInstitutionName').value).trim(),
                hscBoardName: document.getElementById('hscBoardName').value,
                hscPersantage: (document.getElementById('hscPersantage').value).trim(),
                sscInstitutionName:(document.getElementById('sscInstitutionName').value).trim(),
                sscBoardName: document.getElementById('sscBoardName').value,
                sscPersantage: (document.getElementById('sscPersantage').value).trim(),
                currentInstitutionName: (document.getElementById('currentInstitutionName').value).trim(),
                currentCourseName: (document.getElementById('currentCourseName').value).trim(),
                currentPersantage: (document.getElementById('currentCoursePersantage').value).trim(),
                currentBacklogs: (document.getElementById('currentCourseBacklogs').value).trim()
            }
            localStorage.setItem("pageTwoData", JSON.stringify(obj));
            console.log("Completed Page Two");
            window.location.href = "pageThree.html";
        }();
        
    }
}

//Validation Function
    //Institution Name Validation
function instituteNameValidation(institutionName, errElement){
    errElement.innerHTML = "&nbsp;";
    if(institutionName === ""){
        errElement.innerHTML = "This field can't be blank";
        return false;
    }
    if(institutionName.match(/^[a-zA-Z ]+$/)) return true;
    errElement.innerHTML = "Invalid institution name";
    return false;
}

    //Board Name Validation
function boardNameValidation(boardName, errElement){
    errElement.innerHTML = "&nbsp;";
    if(boardName === ""){
        errElement.innerHTML = "Select your board name";
        return false;
    }
    return true;
}
    //Persantage Validation
function persantageValidation(persantage, errElement){
    errElement.innerHTML = "&nbsp;";
    if(persantage === ""){
        errElement.innerHTML = "This field can't be blank";
        return false;
    }
    if(persantage < 0 || persantage > 100 || isNaN(persantage)){
        errElement.innerHTML = "Invalid Persantage";
        return false;
    }
    return true;
}
    //Course Name Validation
function courseNameValidation(courseName, errElement){
    errElement.innerHTML = "&nbsp;";
    if(courseName === ""){
        errElement.innerHTML = "This field can't be blank";
        return false;
    }
    if(courseName.match(/^[a-zA-Z ]+$/)){
        return true;
    }
    errElement.innerHTML = "Invalid course name";
    return false;
}
    //Backlogs Validation
function backlogsValidation(backlogs, errElement){
    errElement.innerHTML = "&nbsp;";
    if(backlogs !== ""){
        if(backlogs.match(/^[a-zA-Z ]+$/)){
            return true;
        }
        errElement.innerHTML = "Invalid Input";
        return false;
    }
    return true;
}
