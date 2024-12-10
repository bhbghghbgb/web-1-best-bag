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
  btn.className = "homepage-button"
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
  // Sliding panel script
  const signUpButton = document.getElementById("signUpSlide");
  const signInButton = document.getElementById("signInSlide");
  const container = document.getElementById("login-container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

  // Show/Hide password script
  const showPasswordCheckboxSignIn = document.getElementById("showPasswordCheckboxSignIn");
  const showPasswordCheckboxSignUp = document.getElementById("showPasswordCheckboxSignUp");
  const passwordFieldSignIn = document.getElementById("password_signin");
  const passwordFieldSignUp = document.getElementById("password_signup");

  showPasswordCheckboxSignIn.addEventListener("change", () => {
    passwordFieldSignIn.type = showPasswordCheckboxSignIn.checked ? "text" : "password";
  });

  showPasswordCheckboxSignUp.addEventListener("change", () => {
    passwordFieldSignUp.type = showPasswordCheckboxSignUp.checked ? "text" : "password";
  });

  // URL parameter handling
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get('status');
  if (status === "signup") {
    container.classList.add("right-panel-active");
  }

  // Form submission handlers
  const signUpForm = document.getElementById('signUpForm');
  const signInForm = document.getElementById('signInForm');

  signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password_signup').value;
    console.log('Sign Up:', { username, name, email, password });
    // Add your sign-up logic here
  });

  signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailOrUsername = document.getElementById('emailOrUsernameField').value;
    const password = document.getElementById('password_signin').value;
    console.log('Sign In:', { emailOrUsername, password });
    // Add your sign-in logic here
  });
  const existingDialog = document.getElementById("loginDialog");
  if (existingDialog) {
    existingDialog.showModal();
    return;
  }
}

function checkLoginStatus() {
  const currentUserId = localStorage.getItem("currentUserId");
  if (currentUserId) {
    return true;
  }
  return false;
};

function layThongTinNguoiDung() {
  const currentUserId = localStorage.getItem("currentUserId");
  if (currentUserId) {
  const danhSachNguoiDungDaLuu = JSON.parse(localStorage.getItem("nguoiDung"));
  console.log('danhSachNguoiDungDaLuu: ',danhSachNguoiDungDaLuu);
  const thongTinNguoiDung = danhSachNguoiDungDaLuu.find((item) => item.id ==currentUserId);
    return thongTinNguoiDung;
  }
  return null;
}

