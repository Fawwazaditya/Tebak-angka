const pilihan = document.querySelector(".pilihan");
const container = document.querySelector(".container");
const tidak = document.querySelector(".tidakmau");
const inputElement = document.getElementById("angka");
const submitButton = document.getElementById("submitBtn");
const kalah = document.querySelector(".gagal H3.jumlah");

// console.log(inputElement);
function komputer() {
  return Math.round(Math.random() * 9) + 1; // Menghasilkan angka 1-10
}
// console.log(komputer());
let kesempatan = 0;

const milih = pilihan.addEventListener("click", function (e) {
  const pi = e.target.className;
  if (pi == "IYA") {
    pilihan.classList.toggle("none");
    container.classList.toggle("none");
    const angka = komputer();
    submitButton.addEventListener("click", function () {
      const inputValue = parseInt(inputElement.value);
      if (inputValue > angka) {
        alert("nilai yang anda masukan lebih besar  dari komputer");
        kesempatan++;
      } else if (inputValue < angka) {
        alert("nilai yang anda masukan lebih kecil  dari komputer");
        kesempatan++;
      } else if (inputValue === angka) {
        alert("SELAMAT ANDA MENANG");
      }
      if (kesempatan > 4) {
        alert("ANDA KALAH COBA LAIN KALI");
      }
    });
  } else if (pi == "tidak") {
    pilihan.classList.toggle("none");
    tidak.classList.toggle("none");
  }
});
