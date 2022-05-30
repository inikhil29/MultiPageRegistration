function pageThreeValidation() {
    let recentImageVal = imageValidation(document.getElementById('recentImage'), document.getElementById('recentImageErr'));
    let hscMarkSheetVal = documentValidation(document.getElementById('hscMarkSheet'), document.getElementById('hscMarkSheetErr'));
    let sscMarkSheetVal = documentValidation(document.getElementById('sscMarkSheet'), document.getElementById('sscMarkSheetErr'));
    let allSemisterMarkSheetVal = largeDocumentValidation(document.getElementById('allSemisterMarkSheet'), document.getElementById('allSemisterMarkSheetErr'));
    console.log(document.getElementById('recentImage').value);
    console.log(document.getElementById('hscMarkSheet').value);
    console.log(document.getElementById('sscMarkSheet').value);
    if (recentImageVal && hscMarkSheetVal && sscMarkSheetVal && allSemisterMarkSheetVal) {
        void function (){
            let recentImage = document.getElementById('recentImage');
            let hscMarkSheet = document.getElementById('hscMarkSheet');
            let sscMarkSheet = document.getElementById('sscMarkSheet');
            let allSemisterMarkSheet = document.getElementById('allSemisterMarkSheet');
            
            window.location.href = "index.html";
        }();
    }
}

function imageValidation(imageFile, errElement) {
    console.log(imageFile);
    errElement.innerHTML = "&nbsp;";
    if (imageFile.value !== "") {
        if (imageFile.files[0].name.match(/.(jpg|jpeg|png)$/i)) {
            if (((imageFile.files[0].size) / (1024 * 1024)).toFixed(2) <= 4) {
                return true
            }
            errElement.innerHTML = "File size exceeds 4MB";
            return false;
        }
        errElement.innerHTML = " Invalid file type";
        return false
    }
    errElement.innerHTML = "Upload your document";
    return false;
}

function documentValidation(markSheetDocument, errElement) {
    console.log(markSheetDocument);
    errElement.innerHTML = "&nbsp;";
    if (markSheetDocument.value !== "") {
        if (markSheetDocument.files[0].name.match(/.(jpg|jpeg|png|pdf|docx|docs)$/i)) {
            if (((markSheetDocument.files[0].size) / (1024 * 1024)).toFixed(2) <= 4) {
                return true
            }
            errElement.innerHTML = "File size exceeds 4MB";
            return false;
        }
        errElement.innerHTML = " Invalid file type";
        return false
    }
    errElement.innerHTML = "Upload your document";
    return false;
}

function largeDocumentValidation(markSheetDocument, errElement) {
    console.log(markSheetDocument);
    errElement.innerHTML = "&nbsp;";
    if (markSheetDocument.value !== "") {
        if (markSheetDocument.files[0].name.match(/.(pdf|docx|docs)$/i)) {
            if (((markSheetDocument.files[0].size) / (1024 * 1024)).toFixed(2) <= 10) {
                return true
            }
            errElement.innerHTML = "File size exceeds 10MB";
            return false;
        }
        errElement.innerHTML = " Invalid file type";
        return false
    }
    errElement.innerHTML = "Upload your document";
    return false;
}