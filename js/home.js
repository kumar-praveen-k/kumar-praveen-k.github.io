function validate() {
    var username = document.getElementById("username");
    var passward = document.getElementById("passward");
    if(username.value.trim() != "Hello-Praveen" || passward.value.trim() != "Wel-Come") {
        alert("Please Enter Valid ID And Passward");
        return false;
    }else{
        return true;
    }
}