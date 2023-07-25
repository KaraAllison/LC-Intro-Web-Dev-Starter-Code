function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", function(){
        paragraph.innerHTML = "Houston, we have liftoff!";
    })
    missionAbort.onmouseover = function(){
        this.style.backgroundColor = "red";
    }
    missionAbort.onmouseout = function(){
        this.style.backgroundColor = "";
    }
    missionAbort.addEventListener("click", function(){
        let abort = window.confirm("Are you sure you want to abort the mission?");
        if (abort) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
        }
    })
    
}

window.addEventListener("load", init);