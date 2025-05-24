// Script sederhana untuk menambahkan fungsionalitas keranjang belanja
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart")
  const cartCount = document.querySelector(".cart-count")
  let count = Number.parseInt(localStorage.getItem("cartCount") || "0")

  // Tampilkan jumlah item di keranjang dari localStorage
  cartCount.textContent = count

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      count++
      cartCount.textContent = count

      // Simpan jumlah item di localStorage
      localStorage.setItem("cartCount", count.toString())

      // Animasi sederhana saat menambahkan ke keranjang
      button.textContent = "Ditambahkan!"
      button.style.backgroundColor = "#d4a373"
      button.style.color = "white"

      setTimeout(() => {
        button.textContent = "Tambah ke Keranjang"
        button.style.backgroundColor = ""
        button.style.color = ""
      }, 1000)
    })
  })
})
