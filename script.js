const pilihan = document.querySelector(".pilihan");
const container = document.querySelector(".container");
const tidak = document.querySelector(".tidakmau");
const inputElement = document.getElementById("angka");
const submitButton = document.getElementById("submitBtn");
const kalah = document.querySelector(".gagal H3.jumlah");

function komputer() {
  return Math.round(Math.random() * 9) + 1; // Menghasilkan angka 1-10
}

let kesempatan = 0;
let angkaKomputer; // Simpan angka acak komputer di luar event listener

// Event listener untuk pilihan IYA/TIDAK
pilihan.addEventListener("click", function (e) {
  const pi = e.target.className;
  if (pi == "IYA") {
    pilihan.classList.toggle("none");
    container.classList.toggle("none");

    angkaKomputer = komputer(); // Dapatkan angka komputer saat game dimulai
    kesempatan = 0; // Reset kesempatan setiap kali game dimulai
  } else if (pi == "tidak") {
    pilihan.classList.toggle("none");
    tidak.classList.toggle("none");
  }
});

// Event listener untuk tombol submit
submitButton.addEventListener("click", function () {
  const inputValue = parseInt(inputElement.value);

  // Jika kesempatan masih kurang dari 5
  if (kesempatan < 5) {
    if (inputValue > angkaKomputer) {
      alert("Nilai yang anda masukkan lebih besar dari komputer");
    } else if (inputValue < angkaKomputer) {
      alert("Nilai yang anda masukkan lebih kecil dari komputer");
    } else if (inputValue === angkaKomputer) {
      alert("SELAMAT ANDA MENANG");
      window.close;
      return; // Berhenti jika pemain menang
    }
    kesempatan++; // Tambahkan kesempatan
    inputElement.value = "";
  }

  // Jika kesempatan habis
  if (kesempatan >= 5) {
    alert("ANDA KALAH, COBA LAIN KALI");
    window.close();
  }
});
