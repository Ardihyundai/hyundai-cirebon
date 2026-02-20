<script>
function toggleType(id){
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

function openSimulasi(unit,type,harga){
  document.getElementById("modalSimulasi").style.display="flex";
  document.getElementById("unitNama").value=unit;
  document.getElementById("unitType").value=type;
  document.getElementById("hargaOTR").value=harga;
}

function closeModal(){
  document.getElementById("modalSimulasi").style.display="none";
}

function toggleDPManual(){
  const mode=document.getElementById("dpMode").value;
  document.getElementById("dpManual").style.display=
    mode==="manual"?"block":"none";
}

function hitungSimulasi(){
  const harga=parseInt(document.getElementById("hargaOTR").value);
  const tenor=parseInt(document.getElementById("tenor").value);
  const bunga=parseFloat(document.getElementById("bunga").value);
  const mode=document.getElementById("dpMode").value;

  let dp= mode==="manual" ?
    parseInt(document.getElementById("dpManual").value) :
    harga*0.2;

  const pokok=harga-dp;
  const total=pokok+(pokok*bunga*tenor);
  const cicilan=Math.round(total/(tenor*12));

  document.getElementById("hasilSimulasi").innerHTML=
    "DP: Rp "+dp.toLocaleString("id-ID")+
    "<br>Cicilan/bulan: Rp "+cicilan.toLocaleString("id-ID");
}

function kirimWA(){
  const unit=document.getElementById("unitNama").value;
  const type=document.getElementById("unitType").value;
  const hasil=document.getElementById("hasilSimulasi").innerText;

  const text=encodeURIComponent(
    "Halo, saya ingin info kredit:\n"+
    unit+" - "+type+"\n"+hasil
  );

  window.open("https://wa.me/6281234567890?text="+text);
}

function generatePDF(){
  const unit=document.getElementById("unitNama").value;
  const type=document.getElementById("unitType").value;
  const hasil=document.getElementById("hasilSimulasi").innerText;

  const content=`
    <h2>Simulasi Kredit Hyundai</h2>
    <p>${unit} - ${type}</p>
    <p>${hasil}</p>
  `;

  const win=window.open("");
  win.document.write(content);
  win.print();
}

function openTestDrive(unit){
  document.getElementById("modalTestDrive").style.display="flex";
  document.getElementById("tdUnit").value=unit;
}

function closeTestDrive(){
  document.getElementById("modalTestDrive").style.display="none";
}

function kirimTestDrive(){
  const unit=document.getElementById("tdUnit").value;
  const nama=document.getElementById("tdNama").value;
  const hp=document.getElementById("tdHP").value;
  const kota=document.getElementById("tdKota").value;

  const text=encodeURIComponent(
    "Booking Test Drive\nUnit: "+unit+
    "\nNama: "+nama+
    "\nHP: "+hp+
    "\nLokasi: "+kota
  );

  window.open("https://wa.me/6281234567890?text="+text);
}

// =============================
// HAMBURGER MENU
// =============================
function toggleMenu(){
  document.getElementById("sideMenu").classList.toggle("active");
}

function closeMenu(){
  document.getElementById("sideMenu").classList.remove("active");
}
</script>
