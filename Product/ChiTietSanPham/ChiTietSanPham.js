// function hienTrangChiTiet(id) {
//   // Tạo URL mới đến trang chi tiết sản phẩm
//   const newUrl = new URL(
//     `${mainJsScriptDirectory}/Product/ChiTietSanPham/ChiTietSanPham.html`,
//     window.location.origin
//   );

//   console.log('newUrl: ',newUrl);

//   // Chuyển đến trang chi tiết với id sản phẩm
//   caiParamUrl({ idtrangchitietsanpham: id }, false, false, newUrl);
// }
// Thêm vào đầu file
window.addEventListener("load", () => {
  // Lấy id sản phẩm từ URL
  const { idtrangchitietsanpham } = layParamUrl();

  if (!idtrangchitietsanpham) {
    console.error("Không tìm thấy id sản phẩm trong URL");
    return;
  }

  // Load dữ liệu và hiển thị chi tiết sản phẩm
  taiDuLieuTongMainJs(() => {
    // Lấy thông tin sản phẩm
    const sanPham = timSanPham(idtrangchitietsanpham);
    if (!sanPham) {
      console.error("Không tìm thấy thông tin sản phẩm");
      return;
    }

    // Cập nhật state và hiển thị thông tin sản phẩm
    modalCart.currentProduct = sanPham;
    modalCart.currentDetailImageIndex = 0;

    // Hiển thị modal chi tiết sản phẩm
    const modal = document.getElementById("productDetailModal");
    if (modal) {
      // Cập nhật thông tin trong modal
      document.getElementById(
        "productDetailImage"
      ).src = `../../images/${sanPham["image-file"]}`;
      document.getElementById(
        "productDetailImage2"
      ).src = `../../images/${sanPham["image2-file"]}`;
      document.getElementById("productDetailName").textContent = sanPham.name;
      document.getElementById(
        "productDetailCategory"
      ).textContent = `Túi ${sanPham.category}`;
      document.getElementById("productDetailDescription").textContent =
        sanPham.description || "Không có mô tả";
      document.getElementById("productDetailOriginalPrice").textContent =
        new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(sanPham["price-n"]);
      document.getElementById("productDetailSalePrice").textContent =
        new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(sanPham["price-sale-n"]);

      // Hiển thị modal
      modal.style.display = "block";
      document.body.classList.add("product-detail-modal-open");

      // Cập nhật tổng tiền
      updateDetailTotal();
    }
  });
});

// Đổi khai báo biến
let modalCart = {
  currentProduct: null,
  currentDetailImageIndex: 0,
  currentUserId: "0626583b-e072-4efe-85a6-f53121bd466d", // ID người dùng mặc định để test
};

// Các hàm xử lý Modal giỏ hàng
function openCartModal() {
  const dialog = document.getElementById("cartDialog");
  if (!dialog) {
    console.error("Không tìm thấy cart dialog");
    return;
  }

  const gioHang = timGioHang(modalCart.currentUserId);
  if (gioHang) {
    renderGioHang(gioHang["chi-tiet"], renderItemGioHang, "#cartItems");
    capNhatCart();
  }

  document.body.classList.add("dialog-open");
  dialog.showModal();
}

function closeCartModal() {
  const dialog = document.getElementById("cartDialog");
  if (dialog) {
    dialog.close();
    document.body.classList.remove("dialog-open");
  }
}

// Các hàm xử lý Modal chi tiết sản phẩm
function hienTrangChiTiet(id) {
  // Tạo URL mới đến trang chi tiết sản phẩm
  const newUrl = new URL(
    `${mainJsScriptDirectory}/Product/ChiTietSanPham/ChiTietSanPham.html`,
    window.location.origin
  );

  // Chuyển đến trang chi tiết với id sản phẩm
  caiParamUrl({ idtrangchitietsanpham: id }, false, false, newUrl);
}
// Thêm vào đầu file
window.addEventListener("load", () => {
  // Lấy id sản phẩm từ URL
  const { idtrangchitietsanpham } = layParamUrl();

  if (!idtrangchitietsanpham) {
    console.error("Không tìm thấy id sản phẩm trong URL");
    return;
  }

  // Load dữ liệu và hiển thị chi tiết sản phẩm
  taiDuLieuTongMainJs(() => {
    // Lấy thông tin sản phẩm
    const sanPham = timSanPham(idtrangchitietsanpham);
    if (!sanPham) {
      console.error("Không tìm thấy thông tin sản phẩm");
      return;
    }

    // Cập nhật state và hiển thị thông tin sản phẩm
    modalCart.currentProduct = sanPham;
    modalCart.currentDetailImageIndex = 0;

    // Hiển thị modal chi tiết sản phẩm
    const modal = document.getElementById("productDetailModal");
    if (modal) {
      // Cập nhật thông tin trong modal
      document.getElementById(
        "productDetailImage"
      ).src = `../../images/${sanPham["image-file"]}`;
      document.getElementById(
        "productDetailImage2"
      ).src = `../../images/${sanPham["image2-file"]}`;
      document.getElementById("productDetailName").textContent = sanPham.name;
      document.getElementById(
        "productDetailCategory"
      ).textContent = `Túi ${sanPham.category}`;
      document.getElementById("productDetailDescription").textContent =
        sanPham.description || "Không có mô tả";
      document.getElementById("productDetailOriginalPrice").textContent =
        new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(sanPham["price-n"]);
      document.getElementById("productDetailSalePrice").textContent =
        new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(sanPham["price-sale-n"]);

      // Hiển thị modal
      modal.style.display = "block";
      document.body.classList.add("product-detail-modal-open");

      // Cập nhật tổng tiền
      updateDetailTotal();
    }
  });
});

// Đổi khai báo biến
let modalCart = {
  currentProduct: null,
  currentDetailImageIndex: 0,
  currentUserId: "0626583b-e072-4efe-85a6-f53121bd466d", // ID người dùng mặc định để test
};

// Các hàm xử lý Modal giỏ hàng
function openCartModal() {
  const dialog = document.getElementById("cartDialog");
  if (!dialog) {
    console.error("Không tìm thấy cart dialog");
    return;
  }

  const gioHang = timGioHang(modalCart.currentUserId);
  if (gioHang) {
    renderGioHang(gioHang["chi-tiet"], renderItemGioHang, "#cartItems");
    capNhatCart();
  }

  document.body.classList.add("dialog-open");
  dialog.showModal();
}

function closeCartModal() {
  const dialog = document.getElementById("cartDialog");
  if (dialog) {
    dialog.close();
    document.body.classList.remove("dialog-open");
  }
}

// Các hàm xử lý Modal chi tiết sản phẩm
function hienTrangChiTiet(id) {
  const sanPham = timSanPham(id);
  if (!sanPham) {
    console.error("Không tìm thấy sản phẩm với id:", id);
    return;
  }

  modalCart.currentProduct = sanPham;
  modalCart.currentDetailImageIndex = 0;

  // Cập nhật thông tin sản phẩm vào dialog
  document.getElementById(
    "productDetailImage"
  ).src = `./images/${sanPham["image-file"]}`;
  document.getElementById(
    "productDetailImage2"
  ).src = `./images/${sanPham["image2-file"]}`;
  showDetailImage(0);
  document.getElementById("productDetailName").textContent = sanPham.name;
  document.getElementById(
    "productDetailCategory"
  ).textContent = `Túi ${sanPham.category}`;
  document.getElementById("productDetailDescription").textContent =
    sanPham.description || "Không có mô tả";
  document.getElementById("productDetailOriginalPrice").textContent =
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(sanPham["price-n"]);
  document.getElementById("productDetailSalePrice").textContent =
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(sanPham["price-sale-n"]);

  document.getElementById("productDetailQuantity").value = 1;
  updateDetailTotal();

  // Hiển thị dialog
  const dialog = document.getElementById("detailDialog");
  if (dialog) {
    document.body.classList.add("dialog-open");
    dialog.showModal();
  }
}

function closeProductDetailModal() {
  const dialog = document.getElementById("detailDialog");
  if (dialog) {
    dialog.close();
    document.body.classList.remove("dialog-open");
  }
}

// Các hàm xử lý slider ảnh
function showDetailImage(index) {
  const images = document.querySelectorAll("#detailDialog .detail-slider img");
  const dots = document.querySelectorAll("#detailDialog .detail-slider-dot");

  images.forEach((img) => {
    img.classList.remove("active");
    img.style.opacity = "0";
  });
  dots.forEach((dot) => dot.classList.remove("active"));

  images[index].classList.add("active");
  images[index].style.opacity = "1";
  dots[index].classList.add("active");

  modalCart.currentDetailImageIndex = index;
}

function nextDetailImage() {
  const nextIndex = (modalCart.currentDetailImageIndex + 1) % 2;
  showDetailImage(nextIndex);
}

function prevDetailImage() {
  const prevIndex = modalCart.currentDetailImageIndex === 0 ? 1 : 0;
  showDetailImage(prevIndex);
}

// Hiển thị sản phẩm trong giỏ hàng
function renderItemGioHang(item, chiTietGioHang) {
  const sanpham = timSanPham(item["san-pham"]);
  if (!sanpham) {
    console.log("Không tìm thấy sản phẩm trong giỏ hàng");
    return;
  }

  const rowCart = document.createElement("div");
  rowCart.className = "product-detail-cart-item";
  rowCart.style.display = "flex";
  rowCart.style.alignItems = "center";
  rowCart.style.gap = "1rem";
  rowCart.style.marginBottom = "1rem";

  // Thêm hình ảnh
  const hinhAnh = document.createElement("div");
  hinhAnh.style.position = "relative";
  const anhSanPham = document.createElement("img");
  anhSanPham.src = "images/" + sanpham["image-file"];
  anhSanPham.style.width = "100px";
  anhSanPham.style.height = "100px";
  anhSanPham.style.objectFit = "cover";
  anhSanPham.style.borderRadius = "8px";
  anhSanPham.style.border = "1px solid #ddd";
  hinhAnh.appendChild(anhSanPham);
  rowCart.appendChild(hinhAnh);

  // Thêm các thông tin khác
  const ten = document.createElement("div");
  ten.style.flex = "1";
  ten.textContent = sanpham["name"];
  rowCart.appendChild(ten);

  const gia = document.createElement("div");
  gia.style.width = "120px";
  gia.textContent = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(sanpham["price-sale-n"]);
  rowCart.appendChild(gia);

  // Thêm ô nhập số lượng
  const soLuong = document.createElement("div");
  soLuong.style.width = "100px";
  const soLuongChiTiet = document.createElement("input");
  soLuongChiTiet.type = "number";
  soLuongChiTiet.min = 1;
  soLuongChiTiet.max = 100;
  soLuongChiTiet.value = item["so-luong"];
  soLuongChiTiet.addEventListener("input", () => {
    item["so-luong"] = parseInt(soLuongChiTiet.value, 10);
    tong.textContent = (
      sanpham["price-sale-n"] * soLuongChiTiet.value
    ).toLocaleString("vi-VN", { style: "currency", currency: "VND" });

    // Cập nhật giỏ hàng trong database
    const gioHang = timGioHang(modalCart.currentUserId);
    if (gioHang) {
      suaChiTietGioHang(modalCart.currentUserId, gioHang["chi-tiet"]);
      capNhatCart();
      capNhatFinalTotalCost(gioHang["chi-tiet"]);
    }
  });
  soLuong.appendChild(soLuongChiTiet);
  rowCart.appendChild(soLuong);

  // Thêm tổng tiền
  const tong = document.createElement("div");
  tong.style.width = "150px";
  tong.classList.add("total-cost");
  tong.textContent = (
    sanpham["price-sale-n"] * item["so-luong"]
  ).toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  rowCart.appendChild(tong);

  // Thêm nút xóa
  const xoa = document.createElement("div");
  xoa.style.width = "50px";
  const xoaKhoiCart = document.createElement("button");
  xoaKhoiCart.type = "button";
  xoaKhoiCart.innerHTML = '<i class="fas fa-trash"></i>';
  xoaKhoiCart.className = "product-detail-delete-btn";
  xoaKhoiCart.addEventListener("click", () => {
    const gioHang = timGioHang(modalCart.currentUserId);
    if (gioHang) {
      const newChiTiet = gioHang["chi-tiet"].filter(
        (i) => i["san-pham"] !== item["san-pham"]
      );
      suaChiTietGioHang(modalCart.currentUserId, newChiTiet);
      renderGioHang(newChiTiet, renderItemGioHang, "#cartItems");
      capNhatCart();
    }
  });
  xoa.appendChild(xoaKhoiCart);
  rowCart.appendChild(xoa);

  return rowCart;
}

// Các hàm quản lý giỏ hàng
function updateDetailTotal() {
  if (!modalCart.currentProduct) return;

  const quantity = parseInt(
    document.getElementById("productDetailQuantity").value
  );
  const price = parseFloat(modalCart.currentProduct["price-sale-n"]);
  const total = quantity * price;

  const totalElement = document.getElementById("productDetailTotalPrice");
  totalElement.textContent = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(total);

  // Thêm hiệu ứng highlight khi giá trị thay đổi
  totalElement.classList.add("highlight");
  setTimeout(() => {
    totalElement.classList.remove("highlight");
  }, 200);
}

function addToCartFromDetail() {
  if (!modalCart.currentProduct) {
    console.error("Không tìm thấy thông tin sản phẩm");
    return;
  }

  const productId = modalCart.currentProduct["web-scraper-order"];
  const quantity =
    parseInt(document.getElementById("productDetailQuantity").value) || 1;

  // Lấy giỏ hàng hiện tại của người dùng
  const gioHang = timGioHang(modalCart.currentUserId);
  if (!gioHang) {
    console.error("Không tìm thấy giỏ hàng của người dùng");
    return;
  }

  // Tìm sản phẩm trong giỏ hàng
  const existingItem = gioHang["chi-tiet"].find(
    (item) => item["san-pham"] === productId
  );
  if (existingItem) {
    existingItem["so-luong"] += quantity;
  } else {
    gioHang["chi-tiet"].push({
      "san-pham": productId,
      "so-luong": quantity,
    });
  }

  // Cập nhật giỏ hàng
  suaChiTietGioHang(modalCart.currentUserId, gioHang["chi-tiet"]);
  capNhatCart();
  alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
  closeProductDetailModal();
}
// Cập nhật event listener cho window.onclick
window.onclick = function (event) {
  const cartModal = document.getElementById("cartModal");
  const productDetailModal = document.getElementById("productDetailModal");

  if (event.target === cartModal) {
    closeCartModal();
  }
  if (event.target === productDetailModal) {
    closeProductDetailModal();
  }
};
// Lưu giỏ hàng vào localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Cập nhật hiển thị giỏ hàng
function capNhatCart() {
  const gioHang = timGioHang(modalCart.currentUserId);
  if (!gioHang) return;

  const cartCount = document.getElementById("cartItemCount");
  if (cartCount) {
    const totalItems = gioHang["chi-tiet"].reduce(
      (total, item) => total + item["so-luong"],
      0
    );
    cartCount.textContent = totalItems;

    // Thêm hiệu ứng highlight khi số lượng thay đổi
    cartCount.classList.add("highlight");
    setTimeout(() => {
      cartCount.classList.remove("highlight");
    }, 300);
  }
}

// Hàm thanh toán (chưa hoàn thiện)
function checkout() {
  alert("Chức năng thanh toán đang được phát triển!");
}

// Khởi tạo giỏ hàng khi trang web tải xong
window.addEventListener("load", () => {
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  const navCartContainer = document.getElementById("navCartContainer");
  if (navCartContainer) {
    navCartContainer.appendChild(createCartButton());
  }

  document.body.appendChild(createCartModal());
  document.body.appendChild(createProductDetailModal());

  capNhatCart();
});

// Các hàm tạo giao diện
function createCartButton() {
  const container = document.createElement("div");
  container.className = "cart-button-container";

  const button = document.createElement("button");
  button.id = "cartButton";
  button.onclick = openCartModal;
  button.innerHTML = `
    <i class="fas fa-shopping-cart"></i>
    <span>Giỏ hàng</span>
    <span id="cartItemCount">${cart.reduce(
      (total, item) => total + item["so-luong"],
      0
    )}</span>
  `;

  container.appendChild(button);
  return container;
}

// Tạo dialog giỏ hàng
function createCartModal() {
  const dialog = document.createElement("dialog");
  dialog.id = "cartDialog";

  dialog.innerHTML = `
    <div class="cart-content">
      <div class="cart-header">
        <h2>Giỏ hàng của bạn</h2>
        <span class="cart-close" onclick="closeCartModal()">&times;</span>
      </div>
      <div class="cart-body">
        <div id="cartItems"></div>
        <div class="cart-summary">
          <div class="cart-buttons">
            <button onclick="closeCartModal()" class="cart-btn-close">Đóng</button>
            <button onclick="checkout()" class="cart-btn-buy" id="btn-s">Mua ngay</button>
          </div>
        </div>
      </div>
    </div>
  `;

  return dialog;
}

// Tạo dialog chi tiết sản phẩm
function createProductDetailModal() {
  const dialog = document.createElement("dialog");
  dialog.id = "detailDialog";

  dialog.innerHTML = `
    <div class="detail-content">
      <div class="detail-header">
        <h2>Chi tiết sản phẩm</h2>
        <span class="detail-close" onclick="closeProductDetailModal()">&times;</span>
      </div>
      <div class="detail-body">
        <div class="detail-image">
          <div class="detail-slider">
            <img id="productDetailImage" class="active" src="" alt="Hình ảnh sản phẩm 1" />
            <img id="productDetailImage2" src="" alt="Hình ảnh sản phẩm 2" />
            <button class="detail-slider-btn prev" onclick="prevDetailImage()">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="detail-slider-btn next" onclick="nextDetailImage()">
              <i class="fas fa-chevron-right"></i>
            </button>
            <div class="detail-slider-dots">
              <span class="detail-slider-dot active" onclick="showDetailImage(0)"></span>
              <span class="detail-slider-dot" onclick="showDetailImage(1)"></span>
            </div>
          </div>
        </div>
        <div class="detail-info">
          <h1 id="productDetailName" class="detail-title"></h1>
          <h3 id="productDetailCategory" class="detail-category"></h3>
          <p id="productDetailDescription" class="detail-description"></p>
          <div class="detail-price">
            <p class="detail-price-original">
              <span>Giá gốc:</span>
              <span id="productDetailOriginalPrice"></span>
            </p>
            <p class="detail-price-sale">
              <span>Giá khuyến mãi:</span>
              <span id="productDetailSalePrice"></span>
            </p>
          </div>
          <div class="detail-quantity">
            <label for="productDetailQuantity">Số lượng:</label>
            <div class="detail-quantity-control">
              <input type="number" id="productDetailQuantity" class="detail-quantity-input" value="1" min="1" onchange="updateDetailTotal()" />
            </div>
          </div>
          <div class="detail-total">
            <p>Thành tiền: <span id="productDetailTotalPrice"></span></p>
          </div>
          <button id="addToCartDetailBtn" class="detail-btn-add" onclick="addToCartFromDetail()">
            <i class="fas fa-shopping-cart"></i>
            <span>Thêm vào giỏ hàng</span>
          </button>
        </div>
      </div>
    </div>
  `;

  return dialog;
}
function renderGioHang(cart, hamRenderItem, wrapperSelector = "#cartItems") {
  const wrapper = document.querySelector(wrapperSelector);
  if (!wrapper) {
    console.error("Không tìm thấy wrapper của giỏ hàng:", wrapperSelector);
    return;
  }
  wrapper.innerHTML = "";

  // Ẩn nút mua ngay nếu giỏ hàng trống
  const btnMuaNgay = document.getElementById("btn-s");
  if (btnMuaNgay) {
    btnMuaNgay.style.display = !cart || cart.length === 0 ? "none" : "block";
  }

  if (!cart || cart.length === 0) {
    const noProductImg = document.createElement("img");
    noProductImg.src = "images/no-product-cart.jpg"; // Sửa đường dẫn và thêm phần mở rộng
    noProductImg.style.width = "60%";
    wrapper.appendChild(noProductImg);
    return;
  }
  const gioHang = document.createElement("div");
  const muc = document.createElement("div");
  muc.style.display = "flex";
  muc.style.alignItems = "center";
  muc.style.gap = "1rem";
  muc.style.marginBottom = "1rem";
  muc.style.fontWeight = "bold";

  const anh = document.createElement("div");
  anh.style.width = "100px";
  anh.textContent = "Hình ảnh";
  muc.appendChild(anh);
  const ten = document.createElement("div");
  ten.style.flex = "1";
  ten.textContent = "Tên sản phẩm";
  muc.appendChild(ten);
  const gia = document.createElement("div");
  gia.style.width = "120px";
  gia.textContent = "Giá";
  muc.appendChild(gia);
  const soLuong = document.createElement("div");
  soLuong.style.width = "100px";
  soLuong.textContent = "Số lượng";
  muc.appendChild(soLuong);
  const tong = document.createElement("div");
  tong.style.width = "150px";
  tong.textContent = "Tổng";
  muc.appendChild(tong);
  const xoa = document.createElement("div");
  xoa.style.width = "50px";
  muc.appendChild(xoa);
  gioHang.appendChild(muc);
  const danhSach = document.createElement("div");
  for (const item of cart) {
    const renderedItem = hamRenderItem(item, cart);
    if (renderedItem) {
      danhSach.appendChild(renderedItem);
    }
  }
  const tongKetRow = document.createElement("div");
  tongKetRow.style.display = "flex";
  tongKetRow.style.alignItems = "center";
  tongKetRow.style.gap = "1rem";
  tongKetRow.style.marginTop = "1rem";
  tongKetRow.style.borderTop = "1px solid #ccc";
  tongKetRow.style.paddingTop = "1rem";
  tongKetRow.innerHTML = `
    <div style="width: 100px"></div>
    <div style="flex: 1"></div>
    <div style="width: 120px"></div>
    <div style="width: 100px"><strong>Tổng tiền:</strong></div>
    <div class="final-total-cost" style="width: 150px"></div>
    <div style="width: 50px"></div>
  `;
  danhSach.appendChild(tongKetRow);
  gioHang.appendChild(danhSach);
  wrapper.appendChild(gioHang);
  capNhatFinalTotalCost(cart);
}
function capNhatFinalTotalCost(cart) {
  const finalTotal = document.querySelector(".final-total-cost");
  if (!finalTotal) return;

  const total = cart.reduce((sum, item) => {
    const sanpham = timSanPham(item["san-pham"]);
    if (sanpham) {
      return sum + sanpham["price-sale-n"] * item["so-luong"];
    }
    return sum;
  }, 0);

  finalTotal.textContent = total.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
}
