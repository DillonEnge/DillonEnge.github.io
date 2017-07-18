function login(){
    if(document.getElementById('input').value === 'dillon'){
        window.location.href = "about.html";
    } else{
        document.getElementById('input').placeholder = 'Incorrect Password';
        document.getElementById('input').value = '';
    }
}

function enter(){
    if (event.keyCode == 13){
        document.getElementById('submitButton').click();
    }
}