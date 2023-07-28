window.addEventListener('load', function() {
    let json = [];
    this.fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) {
        response.json().then(function(json){
            const container = document.getElementById("container");
            const count = document.getElementById("count");
            json.sort( (a,b) => b.hoursInSpace - a.hoursInSpace)
            count.innerHTML += json.length;
            
            for (let i = 0; i < json.length; i ++) {

            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li id = "active${json[i].active}">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
            </div>`
            }
        })
    })
})