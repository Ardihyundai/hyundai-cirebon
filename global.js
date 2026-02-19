/* ==============================
   HAMBURGER MENU
==============================*/
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("active");
}

/* ==============================
   ACCORDION
==============================*/
function toggleAccordion(id) {
  const content = document.getElementById(id);
  content.classList.toggle("active");
}

/* ==============================
   FILTER UNIT (FIX TOTAL)
==============================*/
function filterUnit(unit){
  const cards = document.querySelectorAll(".unit-card");

  cards.forEach(card=>{
    if(unit === "all"){
      card.style.display = "block";
    } else {
      if(card.dataset.unit === unit){
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}

/* ==============================
   DATA MOBIL
==============================*/
const mobilData = {
  "Stargazer": {
    "Active MT": 259700000,
    "Active IVT": 273100000,
    "Essential MT 7 Seat": 271800000,
    "Essential MT 6 Seat": 272800000,
    "Essential IVT 7 Seat": 283500000,
    "Essential IVT 6 Seat": 284500000,
    "Essential Tech 7 Seat": 304000000,
    "Essential Tech 6 Seat": 305000000,
    "Prime IVT 7 Seat 1 Tone": 333400000,
    "Prime IVT 7 Seat 2 Tone": 334900000,
    "Prime IVT 6 Seat 1 Tone": 334400000,
    "Prime IVT 6 Seat 2 Tone": 335900000,
    "Style 6 Seat": 350950000,
    "X Prime 6 Seat 1 Tone": 361300000,
    "X Prime 6 Seat 2 Tone": 362800000,
    "X Style 7 Seat": 349450000,
    "X Prime 7 Seat 1 Tone": 360300000,
    "X Prime 7 Seat 2 Tone": 361800000
  },
  "Stargazer Cartenz": {
    "Trend+ MT": 277500000,
    "Trend+ IVT": 287750000,
    "Style MT 7 Seat": 298000000,
    "Style MT Captain": 301500000,
    "Style IVT 7 Seat": 308200000,
    "Style IVT Captain": 311700000,
    "Smart IVT 7 Seat": 341750000,
    "Smart IVT Captain": 345250000,
    "Prime IVT 7 Seat": 359700000,
    "Prime IVT Captain": 363200000
  },
  "Creta": {
    "Active": 299700000,
    "Trend": 321900000,
    "Style": 365900000,
    "Prime": 380000000
  },
  "Kona EV": {
    "Style Regular": 566250000,
    "Prime Regular": 584500000,
    "Prime Extended": 635500000,
    "Signature Regular": 652650000,
    "Signature Extended": 669550000,
    "N Line": 690550000,
    "N Line Two Tone": 693550000
  },
  "IONIQ 5": {
    "Prime Regular": 810000000,
    "Prime Extended": 852500000,
    "Signature Regular": 874900000,
    "Signature Extended": 926600000
  },
  "Santa Fe": {
    "G 2.5 Prime": 737300000,
    "G 2.5 Calligraphy": 826800000,
    "1.6 HEV Prime": 828900000,
    "1.6 HEV Calligraphy": 916200000
  },
  "Palisade": {
    "HEV Signature": 1133400000,
    "HEV Calligraphy": 1306200000,
    "HEV AWD": 1393300000
  }
};

/* ==============================
   POPUP SIMULASI
==============================*/
function openSimulasi(unit, type, harga) {
  document.getElementById("simulasiModal").style.display = "flex";

  if (unit && type && harga) {
    document.getElementById("unitSelect").value = unit;
    loadType();
    document.getElementById("typeSelect").value = type;
    document.getElementById("hargaOTR").value = harga;
  }
}

function closeSimulasi() {
  document.getElementById("simulasiModal").style.display = "none";
}

/* ==============================
   LOAD TYPE BERDASARKAN UNIT
==============================*/
function loadType() {
  const unit = document.getElementById("unitSelect").value;
  const typeSelect = document.getElementById("typeSelect");
  typeSelect.innerHTML = "";

  if (mobilData[unit]) {
    for (let type in mobilData[unit]) {
      let option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      typeSelect.appendChild(option);
    }
  }
}

function isiOTR() {
  const unit = document.getElementById("unitSelect").value;
  const type = document.getElementById("typeSelect").value;
  document.getElementById("hargaOTR").value = mobilData[unit][type];
}

/* ==============================
   DP AUTO 20%
==============================*/
function isiDP20() {
  document.getElementById("dpPersen").value = 20;
}

/* ==============================
   HITUNG CICILAN (5%)
==============================*/
function hitungSimulasi() {
  let harga = parseFloat(document.getElementById("hargaOTR").value);
  let dpPersen = parseFloat(document.getElementById("dpPersen").value);
  let tenor = parseInt(document.getElementById("tenor").value);

  if (!harga || !dpPersen || !tenor) {
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
    Math.round(cicilan).toLocaleString("id-ID");
}

/* ==============================
   POPUP TEST DRIVE
==============================*/
function openTestDrive() {
  document.getElementById("testDriveModal").style.display = "flex";
}

function closeTestDrive() {
  document.getElementById("testDriveModal").style.display = "none";
}

function kirimTestDrive() {
  let nama = document.getElementById("tdNama").value;
  let alamat = document.getElementById("tdAlamat").value;
  let hp = document.getElementById("tdHP").value;
  let unit = document.getElementById("tdUnit").value;
  let tanggal = document.getElementById("tdTanggal").value;
  let lokasi = document.getElementById("tdLokasi").value;

  if (!nama || !alamat || !hp || !unit || !tanggal || !lokasi) {
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
/* ==============================
   ANIMASI SCROLL
==============================*/
document.addEventListener("scroll", function(){
  const elements = document.querySelectorAll(".fade-up");
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    if(position < screenPosition){
      el.classList.add("show");
    }
  });
});

/* ==============================
   FILTER UNIT
==============================*/
function filterUnit(unit){
  const cards = document.querySelectorAll(".unit-card");

  cards.forEach(card=>{
    if(unit === "all"){
      card.style.display = "block";
    } else {
      if(card.innerText.includes (unit)){
        card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

  }
