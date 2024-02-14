let menuOptions = [
  { title: "BODENDISPLAYS", url: "#" },
  { title: "ETUIS", url: "/side2.html" },
  { title: "KUNSTSTOFFDISPLAYS", url: "#" },
  { title: "SCHACHTELN", url: "#" },
  { title: "SCHAUFENSTERDEKOS", url: "#" },
  { title: "TRESENDISPLAYS", url: "#" },
  { title: "INDUSTRIEPRODUKTE", url: "#" }
];

function openNav() {
  let sidenav = document.getElementById("mySidenav");
  sidenav.innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
  // løb igennem array og tilføj menuoptioner
  menuOptions.forEach(function(option) {
      let link = document.createElement("a");
      link.href = option.url;
      link.textContent = option.title;
      sidenav.appendChild(link);
  });
 //åben menu
  sidenav.style.width = "350px";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}