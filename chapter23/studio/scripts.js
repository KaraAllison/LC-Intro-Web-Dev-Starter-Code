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
    const ufo = document.getElementById("ufo");

    rocket.style.position = 'relative';
    rocket.style.left = '0px';
    rocket.style.top = '230px';

    ufo.style.position = 'relative';
    ufo.style.left = '80px';
    ufo.style.top = '10px';
    



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

    function updateUFO() {
        if (parseInt(rocket.style.left)-80 > parseInt(ufo.style.left)) {
            ufo.style.left = parseInt(ufo.style.left) + 4 + "px";
        } else if (parseInt(rocket.style.left)-80 < parseInt(ufo.style.left)) {
            ufo.style.left = parseInt(ufo.style.left) - 4 + "px";
        }
        if (parseInt(rocket.style.top) > parseInt(ufo.style.top)) {
            ufo.style.top = parseInt(ufo.style.top) + 4 + "px";
        } else if (parseInt(rocket.style.top) < parseInt(ufo.style.top)) {
            ufo.style.top = parseInt(ufo.style.top) - 4 + "px";
        }
    }

    right.addEventListener("click", function(){
        if (parseInt(rocket.style.left) < 230) {
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
        updateUFO();
        }
    })

    left.addEventListener("click", function(){
        if (parseInt(rocket.style.left) > -230) {
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
        updateUFO();
        }
    })
    down.addEventListener("click", function(){
        if (parseInt(rocket.style.top) < 230) {
        rocket.style.top = parseInt(rocket.style.top) + 10 + "px";
        shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML) - 10000);
        updateUFO();
    }
    })

    up.addEventListener("click", function(){
        if (parseInt(rocket.style.top) > 0){
        rocket.style.top = parseInt(rocket.style.top) - 10 + "px";
        shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML) + 10000);
        updateUFO();
    }
    })
    
}

window.addEventListener("load", init);