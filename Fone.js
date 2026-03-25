//data om sjåførene
const drivers = {
    "max Verstappen":{
team: "Red Bul"
wins : 60
color: "red",
image:
    }

    "Lewis Hamilton":{
        team:"Scuderia Ferrari"
        wins: 103
        color: "red"
        image

    }

    "Charles Leclerc"{
        team: "ferrari"

    }

};

{
    const info=document.getElementById("info");
    const img=document.getElementById("driverimg");
info.innerText='${name}-${drivers[name].team}-Wins: ${drivers[name].wins}';
info.style.color =drivers[name].color;
img.src =drivers[name].image;
}