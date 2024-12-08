function hienTrangChiTiet(id) {
  const sanPham = timSanPham(id);
  const origin = window.location.origin;
  // TODO: mo trang chi tiet san pham
  window.location.href = `${origin}/Product/ChiTietSanPham/ChiTietSanPham.html?id=${id}`;
}

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

  const priceSale = convertNumberToPrice(sanPham["price-sale-n"]);
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
  btn.className="homepage-button"
  btn.textContent = "Xem Chi Tiết";
  item.appendChild(btn);
  return item;
}

function convertNumberToPrice(number) {
  const result = number.toLocaleString('vi', {
    style: 'currency',
    currency: 'VND',
  });
  return result;
}
