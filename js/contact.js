function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('phone').value == "" || document.getElementById('msg').value == "")
    {
    alert("Fill the fields!");
    } 
    else{
    document.getElementsByClassName('form').btn1();
    alert("Form Submitted Successfully...");
    }
}

