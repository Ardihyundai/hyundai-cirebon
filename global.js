/* =====================================
   TOGGLE HAMBURGER MENU
===================================== */

function toggleMenu(){
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    if(menu) menu.classList.toggle("active");
    if(overlay) overlay.classList.toggle("active");

    if(menu && menu.classList.contains("active")){
        document.body.style.overflow="hidden";
    }else{
        document.body.style.overflow="auto";
    }
}

/* =====================================
   FILTER MODEL (LINEUP)
===================================== */

function filterModel(model){
    const cards = document.querySelectorAll(".car-block");

    cards.forEach(card=>{
        if(model === "all"){
            card.style.display = "block";
        }else{
            if(card.classList.contains(model)){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }
        }
    });
}

/* =====================================
   SIMULASI KREDIT
===================================== */

function openSimulasi(unitNama, hargaOTR){
    const modal = document.getElementById("simulasiModal");
    if(modal) modal.style.display = "flex";

    document.body.style.overflow = "hidden";

    if(unitNama){
        document.getElementById("simUnit").innerText = unitNama;
    }

    if(hargaOTR){
        document.getElementById("hargaOTR").value = hargaOTR;

        // Auto isi DP minimal 20%
        let minDP = Math.round(hargaOTR * 0.2);
        document.getElementById("dpPersen").value = 20;
    }
}

function closeSimulasi(){
    const modal = document.getElementById("simulasiModal");
    if(modal) modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function hitungSimulasi(){

    let harga = parseInt(document.getElementById("hargaOTR").value);
    let dpPersen = parseInt(document.getElementById("dpPersen").value);
    let tenor = parseInt(document.getElementById("tenor").value);

    if(!harga || !dpPersen || !tenor){
        alert("Lengkapi semua data!");
        return;
    }

    if(dpPersen < 20){
        alert("DP minimal 20%");
        return;
    }

    let dp = harga * dpPersen / 100;
    let pokok = harga - dp;

    let bunga = pokok * (0.035 * tenor);
    let total = pokok + bunga;
    let cicilan = total / (tenor * 12);

    document.getElementById("hasilCicilan").innerHTML =
        "Estimasi Cicilan: Rp " +
        Math.round(cicilan).toLocaleString("id-ID") +
        " / bulan";

    let pesan = `Halo Ardi Hyundai,

Simulasi Kredit:
Harga OTR: Rp ${harga.toLocaleString("id-ID")}
DP: ${dpPersen}%
Tenor: ${tenor} Tahun
Estimasi Cicilan: Rp ${Math.round(cicilan).toLocaleString("id-ID")} / bulan`;

    document.getElementById("btnKirimWA").href =
        "https://wa.me/6287772805133?text=" + encodeURIComponent(pesan);
}

/* =====================================
   TEST DRIVE
===================================== */

function openTestDrive(unitNama){
    const modal = document.getElementById("testDriveModal");
    if(modal) modal.style.display = "flex";

    document.body.style.overflow = "hidden";

    if(unitNama){
        document.getElementById("tdUnit").value = unitNama;
    }
}

function closeTestDrive(){
    const modal = document.getElementById("testDriveModal");
    if(modal) modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function kirimTestDrive(){

    let nama = document.getElementById("tdNama").value;
    let telp = document.getElementById("tdTelp").value;
    let alamat = document.getElementById("tdAlamat").value;
    let tanggal = document.getElementById("tdTanggal").value;
    let lokasi = document.getElementById("tdLokasi").value;
    let unit = document.getElementById("tdUnit").value;

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

    window.open("https://wa.me/6287772805133?text=" + encodeURIComponent(pesan));

    closeTestDrive();
}

/* =====================================
   SPK
===================================== */

function openSPK(unitNama){
    const modal = document.getElementById("spkModal");
    if(modal) modal.style.display = "flex";

    document.body.style.overflow = "hidden";

    if(unitNama){
        document.getElementById("spkUnit").value = unitNama;
    }
}

function closeSPK(){
    const modal = document.getElementById("spkModal");
    if(modal) modal.style.display = "none";
    document.body.style.overflow = "auto";
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
Metode Pembayaran: ${pembayaran}

================================
REKENING RESMI PERUSAHAAN
PT. MULYA PUTRA CITRAMOBIL

Bank Mandiri : 1340000009877
Bank BCA     : 1341737007
Bank Permata : 7601009808
================================

Terima kasih.`;

    window.open("https://wa.me/6287772805133?text=" + encodeURIComponent(pesan));

    closeSPK();
}

/* ==============================
   ANIMASI SCROLL
============================== */

window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".car-block");

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});


/* ==============================
   ACCORDION LINEUP
============================== */

document.addEventListener("DOMContentLoaded", function () {

  const accButtons = document.querySelectorAll(".accordion-btn, .btn-type");

  accButtons.forEach(button => {
    button.addEventListener("click", function () {

      const content = this.nextElementSibling;

      if (!content) return;

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }

    });
  });

});
