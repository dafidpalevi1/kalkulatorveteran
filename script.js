function calculate() {
  var nama = document.getElementById('nama').value;
  var targetDasar = 20000;
  var totalBerlian = parseFloat(document.getElementById('totalBerlian').value);
  var hargaBerlian = 6.75; // Menetapkan harga berlian secara langsung menjadi 6.75

  if (isNaN(totalBerlian)) {
    alert("Masukkan total berlian yang valid.");
    return;
  }

  var hasil = (totalBerlian - targetDasar) * hargaBerlian;

  if (hasil < 0) {
    alert("Target dasar tidak tercapai, hasil penjumlahan tidak dapat dihitung.");
    return;
  }

  var table = document.getElementById('result');
  var newRow = table.insertRow(-1);
  var cellNama = newRow.insertCell(0);
  var cellHasil = newRow.insertCell(1);
  cellNama.innerHTML = nama;
  cellHasil.innerHTML = formatCurrency(hasil);
}

function formatCurrency(amount) {
  return "Rp " + amount.toLocaleString('id-ID', { maximumFractionDigits: 2 }); // Menambahkan opsi untuk menampilkan 2 digit di belakang koma
}
