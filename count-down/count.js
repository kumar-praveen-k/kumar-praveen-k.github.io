var flag = false;
var timer = null

   

function validation(){
    var text = document.getElementById("operation").innerHTML;
    if(text == "Try Again"){
        location.reload();
    }

    const ids = ['days', 'hours', 'minutes', 'seconds']
    const values = ids
        .map(id => document.getElementById(id).value)
        .map(a => parseInt(a))

    if (isValid(...values)) startTimer(...values)
    else alert("Please Enter A Valid Duration")
}

function updateTime(days = 0, hours = 0, minutes = 0, seconds = 0) {
    document.getElementById("days-c").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours-c").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes-c").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("secs-c").innerHTML = seconds.toString().padStart(2, '0');
}

function handleZero(){
    clearInterval(timer)
    updateTime()
    document.getElementById("celebration").innerHTML = "Yeee Chears!";
    document.getElementById("celebration").style.color = "orange";
    var confettiElement = document.getElementById('my-canvas');
    var confettiSettings = { target: confettiElement };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

function startTimer(days, hours, minutes, seconds){
    document.getElementById("operation").innerHTML = "Try Again"
    document.getElementById("enter-alert").style.visibility = ('hidden');
    document.getElementsByTagName("h3")[0].classList.remove('animated')
    timer = setInterval( () => {
        if(seconds > 0){
            seconds -= 1;
        }
        else {
            if(days > 0 || hours > 0 || minutes > 0){
                seconds = 59;
            }
            if(minutes > 0){
                minutes -= 1;
            }
            else  {
                if(days > 0 || hours > 0) {
                    minutes = 59;
                }
                if(hours > 0){
                    hours -= 1;
                } 
                else {
                    if (days > 0){
                        hours = 23;
                    }
                    if(days > 0) {
                        days -= 1;
                    }
                    else{
                        handleZero();
                    }
                }
            }
        }
        updateTime(days, hours, minutes, seconds);
    }, 1000);
}
 

function isValid(days, hours, minutes, seconds){
    return isUnitValid(days, 29)
        && isUnitValid(hours, 23)
        && isUnitValid(minutes, 59)
        && isUnitValid(seconds, 59)
}

function isUnitValid(unitValue, maxValue, minValue = 0) {
    const isNotValid = unitValue > maxValue || unitValue < minValue || isNaN(unitValue)
    return !isNotValid
}