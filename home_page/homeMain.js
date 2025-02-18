// function hienTrangChiTiet(id) {
//   const sanPham = timSanPham(id);
//   // TODO: mo trang chi tiet san pham
//   window.location.href = `/Product/ChiTietSanPham/ChiTietSanPham.html?id=${id}`;
// }

function renderItemSanPham(sanPham) {
  const item = document.createElement("div");
  item.classList.add("homepage-grid");

  const img = document.createElement("img");
  img.src = `../images/${sanPham["image-file"]}`;
  img.className = "homepage-grid-img";
  item.appendChild(img);

  const content = document.createElement("div");
  item.appendChild(content);
  content.style = "flex:auto";

  const id = document.createElement("h10");
  id.innerText = sanPham["web-scraper-order"];
  content.appendChild(id);

  const name = document.createElement("h2");
  name.innerText = sanPham["name"];
  content.appendChild(name);

  const checkPrice = document.createElement("div");
  item.appendChild(checkPrice);
  checkPrice.className = "homepage-checkPrice";

  const price = document.createElement("h5");
  price.style = "text-decoration: line-through; color: gray;";
  price.innerText = sanPham["price"];
  checkPrice.appendChild(price);

  const sale = document.createElement("p");
  sale.style = "font-weight:700;color: red";

  const priceSale = formatVND(sanPham["price-sale-n"]);
  sale.innerText = priceSale;
  checkPrice.appendChild(sale);

  const category = document.createElement("h4");
  category.style.setProperty("color", "Green");
  category.innerText = `-Túi ${sanPham["category"]}-`;
  item.appendChild(category);

  const btn = document.createElement("button");
  btn.addEventListener("click", () =>
    hienTrangChiTiet(sanPham["web-scraper-order"])
  );
  btn.className = "homepage-button";
  btn.textContent = "Xem Chi Tiết";
  item.appendChild(btn);
  return item;
}

if (window.dayLaTrangChu) {
  // goi khi trang web load thanh cong
  window.addEventListener("load", () => {
    taiDuLieuTongMainJs(() => console.info("Tai du lieu tong o mainjs"));
  });
}
