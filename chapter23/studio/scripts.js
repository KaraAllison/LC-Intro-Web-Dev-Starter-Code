function init () {
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const rocket = document.getElementById("rocket");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    rocket.style.position = 'relative';
    rocket.style.left = '0px';
    rocket.style.top = '230px';



    // const missionAbort = document.getElementById("abortMission");
    // const button = document.getElementById("liftoffButton");
    // const paragraph = document.getElementById("statusReport");

    takeOff.addEventListener("click", function() {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (confirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML) + 10000);
            rocket.style.top = '220px';
        }
    })

    land.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
        rocket.style.top = '230px';
        rocket.style.left = '0px';
    })

    abort.addEventListener("click", function(){
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if (confirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
            rocket.style.top = '230px';
            rocket.style.left = '0px';
        }
    })

    right.addEventListener("click", function(){
        if (parseInt(rocket.style.left) < 230) {
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
        }
    })

    left.addEventListener("click", function(){
        if (parseInt(rocket.style.left) > -230) {
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
        }
    })
    down.addEventListener("click", function(){
        if (parseInt(rocket.style.top) < 230) {
        rocket.style.top = parseInt(rocket.style.top) + 10 + "px";
        shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML) - 10000);
    }
    })

    up.addEventListener("click", function(){
        if (parseInt(rocket.style.top) > 0){
        rocket.style.top = parseInt(rocket.style.top) - 10 + "px";
        shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML) + 10000);
    }
    })
    // // Put your code for the exercises here.
    // button.addEventListener("click", function(){
    //     paragraph.innerHTML = "Houston, we have liftoff!";
    // })
    // missionAbort.onmouseover = function(){
    //     this.style.backgroundColor = "red";
    // }
    // missionAbort.onmouseout = function(){
    //     this.style.backgroundColor = "";
    // }
    // missionAbort.addEventListener("click", function(){
    //     let abort = window.confirm("Are you sure you want to abort the mission?");
    //     if (abort) {
    //         paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
    //     }
    // })
    
}

window.addEventListener("load", init);