document.addEventListener("DOMContentLoaded", () => {
  // Script untuk quantity buttons
  const quantityBtns = document.querySelectorAll(".quantity-btn")

  quantityBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const valueElement = this.parentElement.querySelector(".quantity-value")
      let value = Number.parseInt(valueElement.textContent)

      if (this.textContent === "+") {
        value++
      } else if (this.textContent === "-" && value > 1) {
        value--
      }

      valueElement.textContent = value

      // Update item total
      const cartItem = this.closest(".cart-item")
      const priceText = cartItem.querySelector(".item-price").textContent
      const price = Number.parseInt(priceText.replace(/\D/g, ""))
      const total = price * value

      cartItem.querySelector(".item-total").textContent = `Rp ${total.toLocaleString("id-ID")}`

      // Update cart summary
      updateCartSummary()
    })
  })

  // Remove item functionality
  const removeLinks = document.querySelectorAll(".remove-item")

  removeLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const cartItem = this.closest(".cart-item")
      cartItem.style.opacity = "0"
      setTimeout(() => {
        cartItem.remove()
        updateCartSummary()

        // Check if cart is empty
        const cartItems = document.querySelectorAll(".cart-item")
        if (cartItems.length === 0) {
          showEmptyCart()
        }

        // Update cart count
        const cartCount = document.querySelector(".cart-count")
        cartCount.textContent = cartItems.length

        // Update localStorage
        localStorage.setItem("cartCount", cartItems.length.toString())
      }, 300)
    })
  })

  // Function to update cart summary
  function updateCartSummary() {
    const itemTotals = document.querySelectorAll(".item-total")
    let subtotal = 0

    itemTotals.forEach((item) => {
      const totalText = item.textContent
      const total = Number.parseInt(totalText.replace(/\D/g, ""))
      subtotal += total
    })

    const shipping = 20000
    const tax = 0
    const total = subtotal + shipping + tax

    document.querySelector(".summary-row:nth-child(1) span:last-child").textContent =
      `Rp ${subtotal.toLocaleString("id-ID")}`
    document.querySelector(".summary-row.total span:last-child").textContent = `Rp ${total.toLocaleString("id-ID")}`
  }

  // Function to show empty cart
  function showEmptyCart() {
    const cartItems = document.querySelector(".cart-items")
    const cartSummary = document.querySelector(".cart-summary")

    cartItems.innerHTML = `
            <div class="empty-cart">
                <h2>Keranjang Belanja Anda Kosong</h2>
                <p>Anda belum menambahkan produk apapun ke keranjang belanja.</p>
                <a href="../produk/produk.html" class="shop-now-btn">Belanja Sekarang</a>
            </div>
        `

    cartSummary.style.display = "none"
  }
})
