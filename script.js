// Når siden laster
console.log("Nettsiden er lastet! 🚀");

// Finn knappen
const button = document.querySelector("button");

// Når du klikker på knappen
button.addEventListener("click", function() {
    alert("Velkommen til nettsiden! 😎");
});

// Data om sjåførene

const drivers = {

    "Max Verstappen": {

        team: "Red Bull",

        wins: 60,

        color: "red",

        image: "images/max.jpg"

    },

    "Lewis Hamilton": {

        team: "Mercedes",

        wins: 103,

        color: "silver",

        image: "images/lewis.jpg"

    },

    "Charles Leclerc": {

        team: "Ferrari",

        wins: 20,

        color: "red",

        image: "images/charles.jpg"

    }

};
 
// Funksjon som oppdaterer siden

function showDriver(name) {

    const info = document.getElementById("info");

    const img = document.getElementById("driverImg");
 
    info.innerText = `${name} - ${drivers[name].team} - Wins: ${drivers[name].wins}`;

    info.style.color = drivers[name].color;

    img.src = drivers[name].image;

}
 

 