document.addEventListener("DOMContentLoaded", () => {
  // Script untuk thumbnail gallery
  const thumbnails = document.querySelectorAll(".thumbnail")
  const mainImg = document.getElementById("main-img")

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      // Hapus kelas active dari semua thumbnail
      thumbnails.forEach((thumb) => thumb.classList.remove("active"))

      // Tambahkan kelas active ke thumbnail yang diklik
      this.classList.add("active")

      // Update gambar utama
      const imgSrc = this.getAttribute("data-img")
      mainImg.src = imgSrc
    })
  })

  // Script untuk tab produk
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Hapus kelas active dari semua tab button dan content
      tabBtns.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Tambahkan kelas active ke tab button yang diklik
      this.classList.add("active")

      // Tampilkan tab content yang sesuai
      const tabId = this.getAttribute("data-tab")
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Script untuk quantity input
  const decreaseBtn = document.getElementById("decrease")
  const increaseBtn = document.getElementById("increase")
  const quantityValue = document.getElementById("quantity")
  let quantity = 1

  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--
      quantityValue.textContent = quantity
    }
  })

  increaseBtn.addEventListener("click", () => {
    quantity++
    quantityValue.textContent = quantity
  })

  // Script untuk size selection
  const sizeOptions = document.querySelectorAll(".size-option")

  sizeOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Hapus kelas active dari semua size option
      sizeOptions.forEach((opt) => opt.classList.remove("active"))

      // Tambahkan kelas active ke size option yang diklik
      this.classList.add("active")
    })
  })

  // Script untuk add to cart
  const addToCartBtn = document.getElementById("add-to-cart")
  const cartCount = document.querySelector(".cart-count")
  let count = Number.parseInt(localStorage.getItem("cartCount") || "0")

  // Tampilkan jumlah item di keranjang dari localStorage
  cartCount.textContent = count

  addToCartBtn.addEventListener("click", () => {
    count += quantity
    cartCount.textContent = count

    // Simpan jumlah item di localStorage
    localStorage.setItem("cartCount", count.toString())

    // Animasi sederhana saat menambahkan ke keranjang
    addToCartBtn.textContent = "Ditambahkan!"

    setTimeout(() => {
      addToCartBtn.textContent = "Tambah ke Keranjang"
    }, 1000)
  })
})
