// 1. Data om sjåførene (Objektet ditt, ferdig fikset)
const drivers = {
    "Max Verstappen": {
        team: "Red Bull Racing",
        wins: 61,
        color: "#0600EF", // Red Bull Blå
        image: "https://img.redbull.com"
    },
    "Lewis Hamilton": {
        team: "Scuderia Ferrari",
        wins: 105,
        color: "#E10600", // Ferrari Rød
        image: "https://img2.51gt3.com"
    },
    "Charles Leclerc": {
        team: "Scuderia Ferrari",
        wins: 8,
        color: "#E10600",
        image: "https://img2.51gt3.com"
    }
};

// 2. Funksjon for å oppdatere siden når du velger en sjåfør
function visSjafor(navn) {
    const sjafor = drivers[navn];
    
    // Oppdaterer overskriften (h2 id="info")
    document.getElementById("info").innerText = navn + " - " + sjafor.team;
    
    // Oppdaterer bildet (img id="driverimg")
    const bildeElement = document.getElementById("driverimg");
    if (bildeElement) {
        bildeElement.src = sjafor.image;
        bildeElement.style.borderColor = sjafor.color;
    }
}
