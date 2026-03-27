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

        wins: 71,

        color: "red,blue",

        image: "images/max.jpg"

    },

    "Lewis Hamilton": {

        team: "Ferrari",

        wins: 105,

        color: "Red",

        image: https//a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/868.png&w=350&h=254"

    },

    "Charles Leclerc": {

        team: "Ferrari",

        wins: 8,

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
 

 