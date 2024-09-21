const pilihan = document.querySelector(".pilihan");
const container = document.querySelector(".container");
const tidak = document.querySelector(".tidakmau");
const inputElement = document.getElementById("angka");
const submitButton = document.getElementById("submitBtn");
const kalah = document.querySelector(".kesempatan");
// console.log(kalah);

function komputer() {
  return Math.round(Math.random() * 9) + 1; // Menghasilkan angka 1-10
}

let kesempatan = 5;
let angkaKomputer; // Simpan angka acak komputer di luar event listener

// Event listener untuk pilihan IYA/TIDAK
pilihan.addEventListener("click", function (e) {
  const pi = e.target.className;
  if (pi == "IYA") {
    pilihan.classList.toggle("none");
    container.classList.toggle("none");

    angkaKomputer = komputer(); // Dapatkan angka komputer saat game dimulai
    kesempatan = 5; // Reset kesempatan setiap kali game dimulai
  } else if (pi == "tidak") {
    pilihan.classList.toggle("none");
    tidak.classList.toggle("none");
  }
});

// Event listener untuk tombol submit
submitButton.addEventListener("click", function () {
  const inputValue = parseInt(inputElement.value);
  if (Number.isNaN(inputValue)) {
    alert("Masukkan hanya angka!");
    inputElement.value = "";
    return;
  }
  // Jika kesempatan masih kurang dari 5
  if (kesempatan >= 0) {
    if (inputValue > angkaKomputer) {
      alert("Nilai yang anda masukkan lebih besar dari komputer");
    } else if (inputValue < angkaKomputer) {
      alert("Nilai yang anda masukkan lebih kecil dari komputer");
    } else if (inputValue === angkaKomputer) {
      alert("SELAMAT ANDA MENANG");
      window.close();
    }
    kesempatan--;
    kalah.innerHTML = kesempatan;
    inputElement.value = "";
  }

  // Jika kesempatan habis
  if (kesempatan === 0) {
    alert("ANDA KALAH, COBA LAIN KALI");
    window.close();
  }
});
