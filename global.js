/* ======================================
   UNIVERSAL GLOBAL SCRIPT
   INDEX + LINEUP SAFE
====================================== */

/* =========================
   HAMBURGER MENU
========================= */

function openMenu(){
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    if(menu) menu.classList.add("active");
    if(overlay) overlay.classList.add("active");
    document.body.style.overflow="hidden";
}

function closeMenu(){
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    if(menu) menu.classList.remove("active");
    if(overlay) overlay.classList.remove("active");
    document.body.style.overflow="auto";
}

/* =========================
   FILTER MODEL (LINEUP)
========================= */

function filterModel(model){
    const cards = document.querySelectorAll(".car-card");

    cards.forEach(card=>{
        if(model === "all"){
            card.style.display="block";
        }else{
            if(card.dataset.model === model){
                card.style.display="block";
            }else{
                card.style.display="none";
            }
        }
    });
}

/* =========================
   SIMULASI KREDIT POPUP
========================= */

function openSimulasi(unitNama, hargaOTR){
    document.getElementById("simulasiModal").style.display="flex";
    document.body.style.overflow="hidden";

    if(unitNama){
        document.getElementById("simUnit").innerText = unitNama;
    }

    if(hargaOTR){
        document.getElementById("harga").value = hargaOTR;
    }
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

    // Auto kirim ke WA
    let pesan = `Halo Ardi Hyundai,

Simulasi Kredit:
Harga OTR: Rp ${harga.toLocaleString("id-ID")}
DP: Rp ${dp.toLocaleString("id-ID")}
Tenor: ${tenor} Tahun
Estimasi Cicilan: Rp ${Math.round(cicilan).toLocaleString("id-ID")} / bulan`;

    let encoded = encodeURIComponent(pesan);

    document.getElementById("btnKirimWA").href =
        "https://wa.me/6287772805133?text="+encoded;
}

/* =========================
   TEST DRIVE POPUP
========================= */

function openTestDrive(unitNama){
    document.getElementById("testDriveModal").style.display="flex";
    document.body.style.overflow="hidden";

    if(unitNama){
        document.getElementById("tdUnit").value = unitNama;
    }
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
    let unit    = document.getElementById("tdUnit").value;

    if(!nama || !telp || !alamat || !tanggal || !lokasi || !unit){
        alert("Lengkapi semua data!");
        return;
    }

    let pesan = `Halo Ardi Hyundai,

Booking Test Drive:

Nama: ${nama}
No HP: ${telp}
Alamat: ${alamat}
Tanggal: ${tanggal}
Unit: ${unit}
Lokasi: ${lokasi}`;

    let encoded = encodeURIComponent(pesan);

    window.open("https://wa.me/6287772805133?text="+encoded, "_blank");

    closeTestDrive();
}

/* =========================
   FORM SPK POPUP
========================= */

function openSPK(unitNama){
    document.getElementById("spkModal").style.display="flex";
    document.body.style.overflow="hidden";

    if(unitNama){
        document.getElementById("spkUnit").value = unitNama;
    }
}

function closeSPK(){
    document.getElementById("spkModal").style.display="none";
    document.body.style.overflow="auto";
}

function kirimSPK(){

    let nama = document.getElementById("spkNama").value;
    let telp = document.getElementById("spkTelp").value;
    let alamat = document.getElementById("spkAlamat").value;
    let unit = document.getElementById("spkUnit").value;
    let pembayaran = document.getElementById("spkBayar").value;

    if(!nama || !telp || !alamat || !unit){
        alert("Lengkapi data SPK!");
        return;
    }

    let pesan = `FORM SPK HYUNDAI

Nama: ${nama}
No HP: ${telp}
Alamat: ${alamat}
Unit: ${unit}
Pembayaran: ${pembayaran}`;

    window.open("https://wa.me/6287772805133?text="+encodeURIComponent(pesan),"_blank");

    closeSPK();
}

/* =========================
   ANIMASI SCROLL
========================= */

window.addEventListener("scroll",()=>{
    const cards = document.querySelectorAll(".car-card");

    cards.forEach(card=>{
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            card.classList.add("show");
        }
    });
});
