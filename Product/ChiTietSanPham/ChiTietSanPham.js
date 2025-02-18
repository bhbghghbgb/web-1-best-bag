// Thêm vào đầu file
window.addEventListener("load", async () => {
  // Đợi tải dữ liệu trước
  await taiDuLieuTongMainJs(() => {
    console.info("Tai du lieu tong o mainjs");
  });

  // Khởi tạo UI
  const navCartContainer = document.getElementById("navCartContainer");
  if (navCartContainer) {
    navCartContainer.appendChild(createCartButton());
  }

  document.body.appendChild(createCartModal());
  document.body.appendChild(createProductDetailModal());

  // Kiểm tra đăng nhập và cập nhật giỏ hàng
  const savedUserId = localStorage.getItem("currentUserId");
  if (savedUserId) {
    modalCart.currentUserId = savedUserId;
    handleLogin(savedUserId);
  }

  // Thêm dialog lịch sử đơn hàng
  document.body.appendChild(createOrderHistoryModal());
});

let modalCart = {
  currentProduct: null,
  currentDetailImageIndex: 0,
  currentUserId: "ID_NGUOI_DUNG",
};

function updateCurrentUserId(userId) {
  if (!userId) return;

  modalCart.currentUserId = userId;
  localStorage.setItem("currentUserId", userId);
  capNhatCart();
}

function openCartModal() {
  const dialog = document.getElementById("cartDialog");
  if (!dialog) return;

  // Kiểm tra xem người dùng đã đăng nhập chưa
  const currentUserId = localStorage.getItem("currentUserId");
  if (!currentUserId) {
    alert("Vui lòng đăng nhập để xem giỏ hàng!");
    // Mở dialog đăng nhập
    const loginDialog = document.getElementById("loginDialog");
    if (loginDialog) {
      loginDialog.showModal();

      // Thêm event listener để xử lý sau khi đăng nhập thành công
      const checkLogin = setInterval(() => {
        const newUserId = localStorage.getItem("currentUserId");
        if (newUserId) {
          clearInterval(checkLogin);
          handleLogin(newUserId);
          dialog.showModal();
        }
      }, 1000);
    }
    return;
  }

  handleLogin(currentUserId);
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

function hienTrangChiTiet(id) {
  const sanPham = timSanPham(id);
  if (!sanPham) return;

  modalCart.currentProduct = sanPham;
  modalCart.currentDetailImageIndex = 0;

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  document.getElementById(
    "productDetailImage"
  ).src = `../images/${sanPham["image-file"]}`;
  document.getElementById(
    "productDetailImage2"
  ).src = `../images/${sanPham["image2-file"]}`;
  showDetailImage(0);
  document.getElementById("productDetailName").textContent = sanPham.name;
  document.getElementById(
    "productDetailCategory"
  ).textContent = `Túi ${sanPham.category}`;
  document.getElementById("productDetailDescription").textContent =
    sanPham.description || "Không có mô tả";
  document.getElementById("productDetailOriginalPrice").textContent =
    formatter.format(sanPham["price-n"]);
  document.getElementById("productDetailSalePrice").textContent =
    formatter.format(sanPham["price-sale-n"]);
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
  anhSanPham.src = `../../images/${sanpham["image-file"]}`;
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

  // Thêm hiệu ứng highlight khi giá tr thay đổi
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

  // Kiểm tra đăng nhập trước khi thêm vào giỏ
  if (!modalCart.currentUserId || modalCart.currentUserId === "ID_NGUOI_DUNG") {
    alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!");
    // Mở dialog đăng nhập
    const loginDialog = document.getElementById("loginDialog");
    if (loginDialog) {
      loginDialog.showModal();
    }
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
  // Kiểm tra đăng nhập
  if (!modalCart.currentUserId) {
    alert("Vui lòng đăng nhập để thanh toán!");
    return;
  }

  // Lấy giỏ hàng hiện tại
  const gioHang = timGioHang(modalCart.currentUserId);
  if (!gioHang || !gioHang["chi-tiet"] || gioHang["chi-tiet"].length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }

  // Tạo hóa đơn mới
  const hoaDonMoi = {
    id: crypto.randomUUID(),
    "nguoi-dung": modalCart.currentUserId,
    "ngay-tao": new Date().toISOString(),
    "chi-tiet": [...gioHang["chi-tiet"]],
    "xu-ly": "dang", // Trạng thái xử lý: dang, roi, huy
  };

  // Thêm hóa đơn vào database
  themHoaDon(hoaDonMoi.id, hoaDonMoi);

  // Xóa giỏ hàng sau khi tạo hóa đơn
  xoaChiTietGioHang(modalCart.currentUserId);

  // Cập nhật UI
  capNhatCart();
  renderGioHang([], renderItemGioHang, "#cartItems");

  // Hiển thị thông báo thành công
  alert("Đặt hàng thành công! Mã đơn hàng của bạn là: " + hoaDonMoi.id);

  // Đóng modal giỏ hàng
  closeCartModal();
}

// Thêm hàm mới để hiển thị chi tiết hóa đơn
function showOrderDetails(hoaDon) {
  const dialog = document.getElementById("orderDetailDialog");
  if (!dialog) {
    document.body.appendChild(createOrderDetailModal());
  }

  // Cập nhật thông tin đơn hàng
  document.getElementById("orderDetailId").textContent = hoaDon.id;
  document.getElementById("orderDetailDate").textContent = formatDateLocaleVn(
    hoaDon["ngay-tao"]
  );
  document.getElementById("orderDetailStatus").textContent =
    hoaDon["xu-ly"] === "dang"
      ? "Đang xử lý"
      : hoaDon["xu-ly"] === "roi"
      ? "Đã hoàn thành"
      : "Đã hủy";

  // Cập nhật bảng sản phẩm
  const tbody = document.getElementById("orderDetailTableBody");
  tbody.innerHTML = "";
  let totalAmount = 0;

  hoaDon["chi-tiet"].forEach((item) => {
    const sanPham = timSanPham(item["san-pham"]);
    if (sanPham) {
      const amount = sanPham["price-sale-n"] * item["so-luong"];
      totalAmount += amount;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${sanPham.name}</td>
        <td><img src="../../images/${sanPham["image-file"]}" alt="${
        sanPham.name
      }" style="width: 50px; height: 50px; object-fit: cover;"></td>
        <td>${sanPham["price-sale-n"].toLocaleString("vi-VN")}đ</td>
        <td>${item["so-luong"]}</td>
        <td>${amount.toLocaleString("vi-VN")}đ</td>
      `;
      tbody.appendChild(tr);
    }
  });

  // Cập nhật tổng tiền
  document.getElementById("orderDetailTotal").textContent =
    totalAmount.toLocaleString("vi-VN") + "đ";

  // Hiển thị dialog
  document.getElementById("orderDetailDialog").showModal();
}

// Thêm hàm đóng dialog chi tiết đơn hàng
function closeOrderDetail() {
  const dialog = document.getElementById("orderDetailDialog");
  if (dialog) {
    dialog.close();
  }
}

// Các hàm tạo giao diện
function createCartButton() {
  const container = document.createElement("div");
  container.className = "cart-button-container";

  const button = document.createElement("button");
  button.id = "cartButton";
  button.onclick = openCartModal;

  // Tạo span với giá trị mặc định là 0
  button.innerHTML = `
    <i class="fas fa-shopping-cart"></i>
    <span id="cartItemCount">0</span>
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
            <button onclick="openOrderHistory()" class="cart-btn-history">Xem hóa đơn</button>
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
    noProductImg.src = "../../images/no-product-cart.jpg";
    noProductImg.style.width = "105%";
    noProductImg.style.maxHeight = "calc(100vh - 400px)"; // Giảm chiều cao xuống
    noProductImg.style.objectFit = "contain";
    noProductImg.style.display = "block";
    noProductImg.style.margin = "0 auto";

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

// Thêm hàm xử lý đăng nhập
function handleLogin(userId) {
  if (!userId) return;

  modalCart.currentUserId = userId;
  const gioHang = timGioHang(userId);
  if (gioHang) {
    renderGioHang(gioHang["chi-tiet"], renderItemGioHang, "#cartItems");
    capNhatCart();
  }
}

// Thêm dialog hiển thị lịch sử hóa đơn
function createOrderHistoryModal() {
  const dialog = document.createElement("dialog");
  dialog.id = "orderHistoryDialog";

  dialog.innerHTML = `
    <div class="order-history-content">
      <div class="order-history-header">
        <h2>Lịch sử đơn hàng</h2>
        <span class="order-history-close" onclick="closeOrderHistory()">&times;</span>
      </div>
      <div class="order-history-body">
        <div id="orderHistoryItems"></div>
      </div>
    </div>
  `;

  return dialog;
}

// Thêm các hàm xử lý
function openOrderHistory() {
  if (!modalCart.currentUserId) {
    alert("Vui lòng đăng nhập để xem lịch sử đơn hàng!");
    return;
  }

  const dialog = document.getElementById("orderHistoryDialog");
  if (!dialog) return;

  // Lấy danh sách hóa đơn của người dùng từ g_hoaDon
  const userOrders = g_hoaDon.filter(
    (order) => order["nguoi-dung"] === modalCart.currentUserId
  );

  // Sắp xếp theo thời gian mới nhất
  userOrders.sort((a, b) => new Date(b["ngay-tao"]) - new Date(a["ngay-tao"]));

  const orderHistoryItems = document.getElementById("orderHistoryItems");
  orderHistoryItems.innerHTML = "";

  if (userOrders.length === 0) {
    orderHistoryItems.innerHTML = "<p>Bạn chưa có đơn hàng nào</p>";
    dialog.showModal();
    return;
  }

  // Tạo bảng hiển thị đơn hàng
  const table = document.createElement("table");
  table.className = "order-history-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Mã đơn hàng</th>
        <th>Ngày đặt</th>
        <th>Tổng tiền</th>
        <th>Trạng thái</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody id="orderHistoryTableBody"></tbody>
  `;

  const tbody = table.querySelector("tbody");
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  userOrders.forEach((order) => {
    const totalAmount = order["chi-tiet"].reduce((sum, item) => {
      const sanPham = timSanPham(item["san-pham"]);
      return sum + (sanPham ? sanPham["price-sale-n"] * item["so-luong"] : 0);
    }, 0);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${order.id}</td>
      <td>${formatDateLocaleVn(order["ngay-tao"])}</td>
      <td>${formatter.format(totalAmount)}</td>
      <td>
        <span class="order-status ${order["xu-ly"]}">
          ${
            order["xu-ly"] === "dang"
              ? "Đang xử lý"
              : order["xu-ly"] === "roi"
              ? "Đã hoàn thành"
              : "Đã hủy"
          }
        </span>
      </td>
      <td>
        <button onclick="showOrderDetails(${JSON.stringify(order).replace(
          /"/g,
          "&quot;"
        )})" class="btn-view-detail">
          Xem chi tiết
        </button>
        ${
          order["xu-ly"] === "dang"
            ? `<button onclick="cancelOrder('${order.id}')" class="btn-cancel-order">
                Hủy đơn
              </button>`
            : ""
        }
      </td>
    `;
    tbody.appendChild(tr);
  });

  orderHistoryItems.appendChild(table);
  dialog.showModal();
}

function closeOrderHistory() {
  const dialog = document.getElementById("orderHistoryDialog");
  if (dialog) {
    dialog.close();
  }
}

function cancelOrder(orderId) {
  if (confirm("Bạn có chắc muốn hủy đơn hàng này?")) {
    // Tìm index của hóa đơn trong mảng g_hoaDon
    const orderIndex = g_hoaDon.findIndex((order) => order.id === orderId);

    if (orderIndex !== -1 && g_hoaDon[orderIndex]["xu-ly"] === "dang") {
      // Cập nhật trạng thái đơn hàng thành "huy"
      g_hoaDon[orderIndex]["xu-ly"] = "huy";

      // Lưu thay đổi vào localStorage và file
      luuHoaDon(g_hoaDon);

      // Refresh lại danh sách đơn hàng
      openOrderHistory();

      // Hiển thị thông báo thành công
      alert("Đã hủy đơn hàng thành công!");
    } else {
      alert("Không thể hủy đơn hàng này!");
    }
  }
}

// Thêm hàm mới để lưu hóa đơn
function luuHoaDon(danhSachHoaDon) {
  try {
    // Cập nhật biến toàn cục
    g_hoaDon = danhSachHoaDon;

    // Lưu vào localStorage
    localStorage.setItem("hoaDon", JSON.stringify(danhSachHoaDon));

    // ??? web 1 co lam backend a
    // null luon de bot phien phuc
    // Gửi request để lưu vào file
    // fetch("/api/hoa-don", {
    fetch(null, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(danhSachHoaDon),
    });

    return true;
  } catch (error) {
    console.error("Lỗi khi lưu hóa đơn:", error);
    return false;
  }
}

// Thêm hàm tạo dialog chi tiết đơn hàng
function createOrderDetailModal() {
  const dialog = document.createElement("dialog");
  dialog.id = "orderDetailDialog";

  dialog.innerHTML = `
    <div class="order-detail-content">
      <div class="order-detail-header">
        <h2>Chi tiết đơn hàng</h2>
        <span class="order-detail-close" onclick="closeOrderDetail()">&times;</span>
      </div>
      <div class="order-detail-info">
        <p><strong>Mã đơn hàng:</strong> <span id="orderDetailId"></span></p>
        <p><strong>Ngày đặt:</strong> <span id="orderDetailDate"></span></p>
        <p><strong>Trạng thái:</strong> <span id="orderDetailStatus"></span></p>
      </div>
      <div class="order-detail-products">
        <table class="order-detail-table">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody id="orderDetailTableBody">
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" style="text-align: right;"><strong>Tổng tiền:</strong></td>
              <td id="orderDetailTotal"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `;

  return dialog;
}
