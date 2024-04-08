function trocarImagem() {
  const icon = document.getElementById("icon")
  const product = document.getElementById("product")

  if (icon.src.includes("/assets/360.svg")) {
    icon.src = "/assets/Close.svg"
  } else {
    icon.src = "/assets/360.svg"
  }

  if (product.src.includes("/assets/Product.png")) {
    product.src = "/assets/Product.gif"
    product.style.width = "449px"
    product.style.height = "252.6px"
  } else {
    product.src = "/assets/Product.png"
    product.style.width = ""
    product.style.height = ""
  }
}
