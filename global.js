/* ===============================
   HAMBURGER MENU
================================= */
function toggleMenu(){
    const nav = document.getElementById("mobileMenu");
    nav.classList.toggle("active");
}

/* ===============================
   MODAL SIMULASI
================================= */
function openSimulasi(unit, harga){
    const modal = document.getElementById("simulasiModal");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    document.getElementById("unitMobil").value = unit;
    document.getElementById("hargaOTR").value = harga;
    document.getElementById("dpPersen").value = 20; // auto 20%
}

function closeSimulasi(){
    document.getElementById("simulasiModal").style.display = "none";
    document.body.style.overflow = "auto";
}

/* ===============================
   HITUNG CICILAN (BUNGA 5%)
================================= */
function hitungSimulasi(){

    let harga = parseFloat(document.getElementById("hargaOTR").value);
    let dpPersen = parseFloat(document.getElementById("dpPersen").value);
    let tenor = parseInt(document.getElementById("tenor").value);

    if(!harga || !dpPersen || !tenor){
        document.getElementById("hasilCicilan").innerHTML = 
        "Lengkapi semua data!";
        return;
    }

    let dp = harga * dpPersen / 100;
    let pokok = harga - dp;

    // BUNGA 5% PER TAHUN
    let bunga = pokok * (0.05 * tenor);
    let total = pokok + bunga;

    let cicilan = total / (tenor * 12);

    document.getElementById("hasilCicilan").innerHTML =
    "DP: Rp " + dp.toLocaleString("id-ID") +
    "<br><b>Angsuran: Rp " +
    Math.round(cicilan).toLocaleString("id-ID") +
    " / bulan</b>";
}

/* ===============================
   TEST DRIVE
================================= */
function openTestDrive(unit){
    document.getElementById("testDriveModal").style.display = "flex";
    document.getElementById("tdUnit").value = unit;
}

function closeTestDrive(){
    document.getElementById("testDriveModal").style.display = "none";
}
