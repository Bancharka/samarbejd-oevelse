var menuOptions = [
  { title: "BODENDISPLAYS", url: "https://www.krohn-displays.de/produkte/bodendisplays/" },
  { title: "ETUIS", url: "https://www.krohn-displays.de/produkte/etuis/" },
  { title: "KUNSTSTOFFDISPLAYS", url: "https://www.krohn-displays.de/produkte/kunststoffdisplays/" },
  { title: "SCHACHTELN", url: "https://www.krohn-displays.de/produkte/schachteln/" },
  { title: "SCHAUFENSTERDEKOS", url: "https://www.krohn-displays.de/produkte/schaufensterdekos/" },
  { title: "TRESENDISPLAYS", url: "https://www.krohn-displays.de/produkte/tresendisplays/" },
  { title: "INDUSTRIEPRODUKTE", url: "https://www.krohn-displays.de/produkte/industrieprodukte/" }
];

function openNav() {
  var sidenav = document.getElementById("mySidenav");
  // Leeren des Inhalts
  sidenav.innerHTML = "";
  // Durchlaufen des Arrays und Hinzufügen der Links
  menuOptions.forEach(function(option) {
      var link = document.createElement("a");
      link.href = option.url;
      link.textContent = option.title;
      sidenav.appendChild(link);
  });
  // Menü öffnen
  sidenav.style.width = "350px";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}