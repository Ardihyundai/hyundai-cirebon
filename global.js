/* =========================
   SIDE MENU
========================= */

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

/* =========================
   SIMULASI KREDIT POPUP
========================= */

function openSimulasi(){
    document.getElementById("simulasiModal").style.display="flex";
    document.body.style.overflow="hidden";
}

function closeSimulasi(){
    document.getElementById("simulasiModal").style.display="none";
    document.body.style.overflow="auto";
}

function hitungSimulasi(){

    let harga  = parseInt(document.getElementById("harga").value);
    let dp     = parseInt(document.getElementById("dp").value);
    let tenor  = parseInt(document.getElementById("tenor").value);

    if(!harga || !dp || !tenor){
        alert("Lengkapi semua data!");
        return;
    }

    let pokok = harga - dp;
    let bunga = pokok * (0.035 * tenor);
    let total = pokok + bunga;
    let cicilan = total / (tenor * 12);

    document.getElementById("hasil").innerHTML =
        "Estimasi Cicilan: Rp " +
        Math.round(cicilan).toLocaleString("id-ID") +
        " / bulan";
}

/* =========================
   TEST DRIVE POPUP
========================= */

function openTestDrive(){
    document.getElementById("testDriveModal").style.display="flex";
    document.body.style.overflow="hidden";
}

function closeTestDrive(){
    document.getElementById("testDriveModal").style.display="none";
    document.body.style.overflow="auto";
}

function kirimTestDrive(){

    let nama    = document.getElementById("tdNama").value;
    let telp    = document.getElementById("tdTelp").value;
    let alamat  = document.getElementById("tdAlamat").value;
    let tanggal = document.getElementById("tdTanggal").value;
    let lokasi  = document.getElementById("tdLokasi").value;

    if(!nama || !telp || !alamat || !tanggal || !lokasi){
        alert("Lengkapi semua data!");
        return;
    }

    let pesan =
`Halo Ardi Hyundai Cirebon,
Saya ingin booking Test Drive:

Nama: ${nama}
No HP: ${telp}
Alamat: ${alamat}
Tanggal: ${tanggal}
Lokasi: ${lokasi}`;

    let encoded = encodeURIComponent(pesan);

    window.open("https://wa.me/6287772805133?text="+encoded, "_blank");

    closeTestDrive();
}
