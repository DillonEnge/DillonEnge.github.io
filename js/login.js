function login(){
    if(document.getElementById('input').value === 'dillon'){
        window.location.href = "about.html";
    } else{
        document.getElementById('input').value = 'Incorrect, try again.';
    }
}