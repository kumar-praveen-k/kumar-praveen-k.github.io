let date = new Date().toLocaleDateString();
document.getElementById("date").innerHTML = date;

function deleterow(row){
    count = count-1;
    var rownumber = parseInt(row.charAt(5));
    var checkboxreset = "mycheck" + "-" + rownumber;
    var textnumber = "text" + "-" + rownumber;
    uncheckTask(checkboxreset,textnumber);
    if(count == 1) {
        var setTextOf = "task"+"-"+1;
        document.getElementById(setTextOf).style.visibility = "hidden";
    }
    else{
        var rownumber = parseInt(row.charAt(5));
        resettasks(rownumber);
    }
}

document.getElementById("text-1").innerHTML = "i am ready";

function taskdone(checks, here) {
    let tasknumber = here.charAt(5);
    var time = new Date().toLocaleTimeString();
    time = "<span id=\"tasktime-" + tasknumber + "\">"  + time + "</span>"
    var checkstatus = document.getElementById(checks);
    var text = document.getElementById(here);
    if(checkstatus.checked == true) {
        text.style.textDecoration = "line-through";
        var newtext = document.getElementById(here).innerHTML;
        document.getElementById(here).innerHTML = newtext + " " + time;

    }else{
        let timeid = "tasktime-" + tasknumber;
        let target = document.getElementById(timeid);
        target.remove();
        text.style.textDecoration = "none";
    }
}

var count = 1;

function addnext() {
    if(count < 10) {
        var nextplace = "text"+"-"+count;
        var nextTask = "task"+"-"+count;
        var nextcontent = document.getElementById("nexttext").value;
        if(nextcontent == "") {
            cleartext();
            alert("Please Enter Task");
        }
        else{
            document.getElementById(nextTask).style.visibility = "visible";
            document.getElementById(nextplace).innerHTML = nextcontent;
            cleartext();
            count = count + 1;
        }
    }
    else {
        alert("No More Task Please! First try Mentioned Tasks")
    }
    
}

function cleartext() {
    document.getElementById("nexttext").value = '';
}

function resettasks(rownumber) {
    for(var i = rownumber; i <= count; i++) {
        var changeTextOf = "text"+"-"+i;
        let precheck = "mycheck"+"-"+i;
        var nextcount = i + 1;
        var setTextOf = "text"+"-"+nextcount;
        let postcheck = "mycheck"+"-"+nextcount;
        let checkstatuspre = document.getElementById(precheck);
        let checkstatuspost = document.getElementById(postcheck);
        if(checkstatuspost.checked == true) {
            checkstatuspre.checked = true;
            document.getElementById(changeTextOf).style.textDecoration="line-through";
        }
        else { 
            uncheckTask(precheck,changeTextOf);
        }
        document.getElementById(changeTextOf).innerHTML = document.getElementById(setTextOf).innerHTML;
    }
    nextcount = nextcount - 1;
    var setTextOf = "task"+"-"+nextcount;
    document.getElementById(setTextOf).style.visibility = "hidden";
}

function clearAll() {
    for(var i = 1; i < count; i++) {
        var setTextOf = "task"+"-"+i;
        document.getElementById(setTextOf).style.visibility = "hidden";
        var checkboxreset = "mycheck" + "-" + i;
        var textnumber = "text" + "-" + i;
        uncheckTask(checkboxreset,textnumber);
    }
    count = 1;
}
function uncheckTask (uncheck,textNumber) {
    var checkstatus = document.getElementById(uncheck)
    document.getElementById(textNumber).style.textDecoration = "none";
    checkstatus.checked = false;
}