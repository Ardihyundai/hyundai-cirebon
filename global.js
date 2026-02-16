// ================= MENU =================

function openMenu(){
  document.getElementById("sideMenu").classList.add("active");
  document.getElementById("overlay").classList.add("active");
  document.body.classList.add("menu-open"); // stop scroll
}

function closeMenu(){
  document.getElementById("sideMenu").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  document.body.classList.remove("menu-open"); // aktifkan scroll lagi
}


// ================= MODAL =================

function openTestDrive(unit=""){
  const modal = document.getElementById("testDriveModal");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";

  if(unit){
    document.getElementById("tdUnit").value = unit;
  }
}

function closeTestDrive(){
  document.getElementById("testDriveModal").style.display = "none";
  document.body.style.overflow = "auto";
}


// ================= FORMAT NOMOR =================

function formatPhone(value){
  let number = value.replace(/\D/g,'');
  if(number.startsWith("0")){
    number = "62" + number.substring(1);
  }
  return number;
}


// ================= KIRIM TEST DRIVE =================

function kirimTestDrive(){
  let nama = document.getElementById("tdNama").value.trim();
  let telp = formatPhone(document.getElementById("tdTelp").value);
  let unit = document.getElementById("tdUnit").value;
  let tanggal = document.getElementById("tdTanggal").value;
  let lokasi = document.getElementById("tdLokasi").value;

  if(!nama || !telp || !unit || !tanggal || !lokasi){
    alert("Lengkapi semua data ya 👍");
    return;
  }

  let pesan = `Halo Ardi Hyundai Cirebon,
Saya ingin booking test drive.

Nama: ${nama}
Phone: ${telp}
Unit: ${unit}
Tanggal: ${tanggal}
Lokasi: ${lokasi}`;

  let encoded = encodeURIComponent(pesan);
  window.open("https://wa.me/6287772805133?text="+encoded,"_blank");

  closeTestDrive();
}


// ================= SIMULASI KREDIT =================

function hitungSimulasi(){
  let harga = parseInt(document.getElementById("harga").value);
  let dp = parseInt(document.getElementById("dp").value);
  let tenor = parseInt(document.getElementById("tenor").value);

  if(!harga || !dp){
    alert("Masukkan harga & DP dulu");
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
