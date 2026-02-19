/* ==============================
   HAMBURGER MENU
==============================*/
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if(menu) menu.classList.toggle("active");
}

function closeMenu() {
  const menu = document.getElementById("sideMenu");
  if(menu) menu.classList.remove("active");
}

/* ==============================
   ACCORDION
==============================*/
function toggleAccordion(id) {
  const content = document.getElementById(id);
  if(content) content.classList.toggle("active");
}

/* ==============================
   FILTER UNIT (FIXED)
==============================*/
function filterUnit(unit){
  const cards = document.querySelectorAll(".unit-card");

  cards.forEach(card=>{
    const data = card.getAttribute("data-unit");

    if(unit === "all" || data === unit){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

/* ==============================
   DATA MOBIL
==============================*/
const mobilData = {
  "Stargazer": {
    "Active MT": 259700000,
    "Active IVT": 273100000
  },
  "Creta": {
    "Active": 299700000,
    "Trend": 321900000
  }
  // (biarkan data lengkap kamu tetap ada di sini)
};

/* ==============================
   POPUP SIMULASI
==============================*/
function openSimulasi(unit, type, harga) {
  const modal = document.getElementById("simulasiModal");
  if(modal) modal.style.display = "flex";

  if(unit && type && harga){
    document.getElementById("unitSelect").value = unit;
    loadType();
    document.getElementById("typeSelect").value = type;
    document.getElementById("hargaOTR").value = harga;
  }
}

function closeSimulasi() {
  const modal = document.getElementById("simulasiModal");
  if(modal) modal.style.display = "none";
}

function loadType(){
  const unit = document.getElementById("unitSelect").value;
  const typeSelect = document.getElementById("typeSelect");
  typeSelect.innerHTML = '<option value="">Pilih Type</option>';

  if(mobilData[unit]){
    for(let type in mobilData[unit]){
      let option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      typeSelect.appendChild(option);
    }
  }
}

function isiOTR(){
  const unit = document.getElementById("unitSelect").value;
  const type = document.getElementById("typeSelect").value;
  if(mobilData[unit] && mobilData[unit][type]){
    document.getElementById("hargaOTR").value = mobilData[unit][type];
  }
}

function isiDP20(){
  document.getElementById("dpPersen").value = 20;
}

/* ==============================
   HITUNG CICILAN (5%)
==============================*/
function hitungSimulasi(){
  let harga = parseFloat(document.getElementById("hargaOTR").value);
  let dpPersen = parseFloat(document.getElementById("dpPersen").value);
  let tenor = parseInt(document.getElementById("tenor").value);

  if(!harga || !dpPersen || !tenor){
    document.getElementById("hasilCicilan").innerHTML = "Lengkapi data!";
    return;
  }

  let dp = harga * dpPersen / 100;
  let sisa = harga - dp;
  let bunga = sisa * (0.05 * tenor);
  let total = sisa + bunga;
  let cicilan = total / (tenor * 12);

  document.getElementById("hasilCicilan").innerHTML =
    "DP: Rp " + dp.toLocaleString("id-ID") +
    "<br>Angsuran/Bulan: Rp " +
    Math.round(cicilan).toLocaleString("id-ID") +
    "<br><br><small>*Simulasi ini bukan perhitungan resmi leasing. Hasil dapat berbeda sesuai kebijakan pembiayaan.</small>";
}

/* ==============================
   TEST DRIVE
==============================*/
function openTestDrive(){
  const modal = document.getElementById("testDriveModal");
  if(modal) modal.style.display = "flex";
}

function closeTestDrive(){
  const modal = document.getElementById("testDriveModal");
  if(modal) modal.style.display = "none";
}

function kirimTestDrive(){
  let nama = document.getElementById("tdNama").value;
  let alamat = document.getElementById("tdAlamat").value;
  let hp = document.getElementById("tdHP").value;
  let unit = document.getElementById("tdUnit").value;
  let tanggal = document.getElementById("tdTanggal").value;
  let lokasi = document.getElementById("tdLokasi").value;

  if(!nama || !alamat || !hp || !unit || !tanggal || !lokasi){
    alert("Lengkapi data!");
    return;
  }

  let pesan =
`Halo Ardi Hyundai,

Test Drive:
Nama: ${nama}
Alamat: ${alamat}
No HP: ${hp}
Unit: ${unit}
Tanggal: ${tanggal}
Lokasi: ${lokasi}`;

  window.open("https://wa.me/6287772805133?text=" + encodeURIComponent(pesan));
}
