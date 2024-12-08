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


function showLoginDialog() {
  const existingDialog = document.getElementById("loginDialog");
  if (existingDialog) {
    existingDialog.showModal();
    return;
  }

  // Tạo dialog element
  const dialog = document.getElementById("loginDialog");
  // dialog.id = "loginDialog";
  // dialog.style.width = "500px";
  // dialog.style.padding = "20px";
  // dialog.style.borderRadius = "10px";
  //
  // // Clone toàn bộ container để tránh di chuyển trực tiếp
  // const containerClone = document.getElementById("login-container").cloneNode(true);
  // dialog.appendChild(containerClone);
  //
  // // Thêm nút đóng dialog
  // const closeButton = document.createElement("button");
  // closeButton.textContent = "Đóng";
  // closeButton.style.position = "absolute";
  // closeButton.style.top = "10px";
  // closeButton.style.right = "10px";
  // closeButton.onclick = () => {
  //   dialog.close();
  // };
  // dialog.appendChild(closeButton);
  //
  // document.body.appendChild(dialog);
  //
  // // Thêm sự kiện cho các nút chuyển đổi form
  // const signInSlide = containerClone.querySelector("#signInSlide");
  // const signUpSlide = containerClone.querySelector("#signUpSlide");
  // const container = containerClone;
  //
  // signInSlide.addEventListener('click', () => {
  //   container.classList.remove("right-panel-active");
  // });
  //
  // signUpSlide.addEventListener('click', () => {
  //   container.classList.add("right-panel-active");
  // });
  //
  // // Xử lý show/hide password
  // const showPasswordSignIn = containerClone.querySelector("#showPasswordCheckboxSignIn");
  // const passwordSignIn = containerClone.querySelector("#password_signin");
  // showPasswordSignIn.addEventListener('change', () => {
  //   passwordSignIn.type = showPasswordSignIn.checked ? 'text' : 'password';
  // });
  //
  // const showPasswordSignUp = containerClone.querySelector("#showPasswordCheckboxSignUp");
  // const passwordSignUp = containerClone.querySelector("#password_signup");
  // showPasswordSignUp.addEventListener('change', () => {
  //   passwordSignUp.type = showPasswordSignUp.checked ? 'text' : 'password';
  // });
  //
  // // Xử lý form submit
  // const signInForm = containerClone.querySelector("#signInForm");
  // const signUpForm = containerClone.querySelector("#signUpForm");
  //
  // signInForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   // Xử lý đăng nhập
  //   const emailOrUsername = containerClone.querySelector("#emailOrUsernameField").value;
  //   const password = containerClone.querySelector("#password_signin").value;
  //
  //   // Thêm logic xử lý đăng nhập tại đây
  //   console.log("Đăng nhập:", emailOrUsername, password);
  // });
  //
  // signUpForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   // Xử lý đăng ký
  //   const username = containerClone.querySelector("#username").value;
  //   const name = containerClone.querySelector("#name").value;
  //   const email = containerClone.querySelector("#email").value;
  //   const password = containerClone.querySelector("#password_signup").value;
  //
  //   // Thêm logic xử lý đăng ký tại đây
  //   console.log("Đăng ký:", username, name, email, password);
  // });

  dialog.showModal();
}
