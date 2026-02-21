// ===============================
// DATA UNIT & TYPE (FULL)
// ===============================
const dataMobil = {

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
    "Trend MT": 277500000,
    "Trend IVT": 287750000,
    "Style MT 7 Seat": 298000000,
    "Style MT Captain Seat": 301500000,
    "Style IVT 7 Seat": 308200000,
    "Style IVT Captain Seat": 311700000,
    "Smart IVT 7 Seat": 341750000,
    "Smart IVT Captain Seat": 345250000,
    "Prime IVT 7 Seat": 359700000,
    "Prime IVT Captain Seat": 363200000,
    "Trend X 7 Seat": 371750000,
    "Trend X Captain": 375250000,
    "Style X 7 Seat": 385200000,
    "Style X Captain": 388700000,
    "Prime Package 7 Seat": 402200000,
    "Prime Package Captain": 405700000
  },

  "Creta": {
    "Active MT": 291300000,
    "Trend MT": 313500000,
    "Trend IVT": 334600000,
    "Style IVT": 376500000,
    "Prime IVT": 404000000
  },

  "Kona EV": {
    "Style Reguler": 566250000,
    "Prime Reguler": 584500000,
    "Prime Extended": 635500000,
    "Signature Reguler": 652650000,
    "Signature Reguler Two Tone": 655650000,
    "Signature Extended": 669550000,
    "Signature Extended Two Tone": 672550000,
    "N Line": 690550000,
    "N Line Two Tone": 693550000
  },

  "IONIQ 5": {
    "Signature Extended": 926600000,
    "Signature Reguler": 874900000,
    "Prime Extended": 852500000,
    "Prime Reguler": 810000000
  },

  "Santa Fe": {
    "G 2.5 Prime": 737300000,
    "G 2.5 Calligraphy": 826800000,
    "HEV Prime": 828900000,
    "HEV Calligraphy": 916200000
  },

  "Palisade": {
    "HEV Signature GRG": 1133400000,
    "HEV Calligraphy GRA": 1306200000,
    "HEV Calligraphy AWD GRA": 1393300000
  }
};


// ===============================
// FORMAT RUPIAH
// ===============================
function formatRupiah(angka){
  return angka.toLocaleString("id-ID");
}


// ===============================
// LOAD TYPE OTOMATIS
// ===============================
function loadType(){
  const unit = document.getElementById("unitSelect").value;
  const typeSelect = document.getElementById("typeSelect");

  typeSelect.innerHTML = '<option value="">Pilih Type</option>';

  if(dataMobil[unit]){
    for(let type in dataMobil[unit]){
      let option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      typeSelect.appendChild(option);
    }
  }
}


// ===============================
// ISI OTR OTOMATIS
// ===============================
function isiOTR(){
  const unit = document.getElementById("unitSelect").value;
  const type = document.getElementById("typeSelect").value;

  if(dataMobil[unit] && dataMobil[unit][type]){
    document.getElementById("hargaOTR").value =
      formatRupiah(dataMobil[unit][type]);
  }
}


// ===============================
// DP 20% OTOMATIS
// ===============================
function isiDP20(){
  const harga = parseInt(
    document.getElementById("hargaOTR").value.replace(/\./g,'')
  );

  const dp = harga * 0.2;

  document.getElementById("dpManual").value =
    formatRupiah(dp);
}


// ===============================
// HITUNG SIMULASI
// ===============================
function hitungSimulasi(){

  const harga = parseInt(
    document.getElementById("hargaOTR").value.replace(/\./g,'')
  );

  const dp = parseInt(
    document.getElementById("dpManual").value.replace(/\./g,'')
  );

  const tenor = parseInt(document.getElementById("tenor").value);

  const bunga = 0.05;

  const pokok = harga - dp;
  const total = pokok + (pokok * bunga * tenor);
  const cicilan = Math.round(total / (tenor * 12));

  document.getElementById("hasilSimulasi").innerHTML =
    "DP: Rp " + formatRupiah(dp) +
    "<br>Cicilan / bulan: Rp " + formatRupiah(cicilan) +
    '<div class="note">*Hitungan ini hanya simulasi estimasi</div>';
}


// ===============================
// HAMBURGER MENU
// ===============================
function toggleMenu(){
  document.getElementById("sideMenu").classList.toggle("active");
}

function closeMenu(){
  document.getElementById("sideMenu").classList.remove("active");
}

function openSimulasi(){
  document.getElementById("modalSimulasi").style.display="flex";
}

function closeSimulasi(){
  document.getElementById("modalSimulasi").style.display="none";
}

function openTestDrive(){
  document.getElementById("modalTestDrive").style.display="flex";
}

function closeTestDrive(){
  document.getElementById("modalTestDrive").style.display="none";
}
// ================= LOADING SCREEN =================
window.addEventListener("load", function(){
  const loader = document.getElementById("loader");
  if(loader){
    loader.style.opacity = "0";
    setTimeout(()=> loader.style.display="none",500);
  }
});

// ================= SCROLL REVEAL =================
window.addEventListener("scroll", function(){
  const reveals = document.querySelectorAll(".reveal");
  for(let i=0;i<reveals.length;i++){
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    if(elementTop < windowHeight - 100){
      reveals[i].classList.add("active");
    }
  }
});

// ================= COUNTER ANIMATION =================
function animateCounter(id, target){
  let count = 0;
  const speed = 20;
  const increment = target / 100;
  const element = document.getElementById(id);

  const update = ()=>{
    count += increment;
    if(count < target){
      element.innerText = Math.floor(count);
      setTimeout(update,speed);
    }else{
      element.innerText = target;
    }
  };
  update();
}

// ================= FORMAT RUPIAH REALTIME =================
function formatRupiahInput(input){
  input.addEventListener("keyup", function(e){
    let value = this.value.replace(/\D/g,'');
    this.value = new Intl.NumberFormat("id-ID").format(value);
  });
}

document.addEventListener("DOMContentLoaded", function(){
  const dpInput = document.getElementById("dpManual");
  if(dpInput){
    formatRupiahInput(dpInput);
  }
});

function kirimSimulasiWA(){

  const unit = document.getElementById("unitSelect").value;
  const type = document.getElementById("typeSelect").value;
  const harga = document.getElementById("hargaOTR").value;
  const dp = document.getElementById("dpManual").value;
  const tenor = document.getElementById("tenor").value;
  const hasil = document.getElementById("hasilSimulasi").innerText;

  const pesan =
`Halo Ardi Hyundai 👋

Saya tertarik dengan:
Unit: ${unit}
Type: ${type}
Harga OTR: Rp ${harga}
DP: Rp ${dp}
Tenor: ${tenor} Tahun

${hasil}

Mohon info promo terbaik 🙏`;

  const url = "https://wa.me/6287772805133?text=" + encodeURIComponent(pesan);
  window.open(url, "_blank");
}
function generatePDF(){

  const unit = document.getElementById("unitSelect").value;
  const type = document.getElementById("typeSelect").value;
  const harga = document.getElementById("hargaOTR").value;

  const content = `
  <h2>Penawaran Resmi Hyundai</h2>
  <p>Unit: ${unit}</p>
  <p>Type: ${type}</p>
  <p>Harga OTR: Rp ${harga}</p>
  <p>Dealer: Ardi Hyundai Cirebon</p>
  `;

  const newWindow = window.open("", "", "width=800,height=600");
  newWindow.document.write(content);
  newWindow.print();
}
function kirimLead(){

fetch("https://script.google.com/macros/s/AKfycbyDfxlYV7fgeozPemJck84dyNBxWkQyikfUWlPYi6Js548vg7CCVtnOy9kcnXrbi4o25A/exec",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
nama: document.getElementById("tdNama").value,
hp: document.getElementById("tdHP").value,
unit: document.getElementById("tdUnit").value,
type: document.getElementById("typeSelect")?.value || "-"
})
})
.then(res=>res.json())
.then(data=>{
alert("Lead berhasil masuk database 🔥");
})
.catch(err=>{
alert("Error kirim data");
});
}
window.addEventListener("load", function(){
  const loader = document.getElementById("loader");
  if(loader){
    loader.style.display = "none";
  }
});
document.addEventListener("click", function(e){
  const menu = document.getElementById("sideMenu");
  const hamburger = document.querySelector(".hamburger");

  if(menu.classList.contains("active") &&
     !menu.contains(e.target) &&
     !hamburger.contains(e.target)){
      menu.classList.remove("active");
  }
});
/* ===== KIRIM TEST DRIVE KE WA ===== */

function kirimTestDriveWA(){

const nama = document.getElementById("tdNama")?.value || "";
const alamat = document.getElementById("tdAlamat")?.value || "";
const hp = document.getElementById("tdHP")?.value || "";
const unit = document.getElementById("tdUnit")?.value || "";
const lokasi = document.getElementById("tdLokasi")?.value || "";

if(!nama || !hp){
  alert("Nama & No HP wajib diisi");
  return;
}

const pesan = `Halo Ardi Hyundai 👋

Saya ingin booking Test Drive:

Nama: ${nama}
Alamat: ${alamat}
No HP: ${hp}
Unit: ${unit}
Lokasi Test Drive: ${lokasi}

Mohon info jadwal tersedia 🙏`;

const noAdmin = "6287772805133"; // Ganti jika perlu

window.open(`https://wa.me/${noAdmin}?text=${encodeURIComponent(pesan)}`,"_blank");

}

function kirimUnitWA(namaUnit){

const pesan = `Halo Ardi Hyundai 👋

Saya tertarik dengan unit ${namaUnit}.

Mohon info harga OTR dan promo terbaru 🙏`;

const noAdmin = "6287772805133";

window.open(`https://wa.me/${noAdmin}?text=${encodeURIComponent(pesan)}`,"_blank");

}

// =============================
// OPEN MODAL
// =============================



// =============================
// CLOSE MENU
// =============================

function closeMenu(){
  document.getElementById("sideMenu").classList.remove("active");
}
