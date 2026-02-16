function openMenu(){
  document.getElementById("sideMenu").classList.add("active");
  document.getElementById("overlay").classList.add("active");
  document.body.style.overflow="hidden";
}

function closeMenu(){
  document.getElementById("sideMenu").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  document.body.style.overflow="auto";
}

function openSimulasi(){
  document.getElementById("simulasiModal").style.display="flex";
}

function closeSimulasi(){
  document.getElementById("simulasiModal").style.display="none";
}

function openTestDrive(){
  document.getElementById("testDriveModal").style.display="flex";
}

function closeTestDrive(){
  document.getElementById("testDriveModal").style.display="none";
}
