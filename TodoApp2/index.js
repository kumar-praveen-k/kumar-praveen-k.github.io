let ulplace = document.getElementById("tasklist");
function addtask() {
    let value = document.getElementById("nexttask").value;
    if(value.length) {
        var nexttext = document.createTextNode(value);
        let nextlist = document.createElement("li");
        nextlist.style.borderRadius = ".4rem"
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("id", "task-done");
        checkbox.onclick = function() {taskdone(event)};
        checkbox.style.marginRight = "1rem";
        var icon = document.createElement("i");
        icon.classList.add("fa-trash");
        icon.classList.add("fa");
        icon.style.float = "right";
        icon.addEventListener("click",(event)=>deletetask(event));
        nextlist.appendChild(checkbox)
        nextlist.appendChild(icon);
        nextlist.appendChild(nexttext);
        ulplace.appendChild(nextlist);
        nextlist.classList.add("list-group-item");
        document.getElementById("nexttask").value = '';  
    }
    else{
        alert("Please Enter A Valid Task");
    }
}

function taskdone(event) {
    var checkstatus = document.getElementById("task-done");
    var x = event.target;
    console.log(x);
}