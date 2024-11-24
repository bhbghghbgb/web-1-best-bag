// Lấy các phần tử cần thao tác
const hamburgerButton = document.querySelector(".topbar-toggler"); // Nút hamburger
const topbarCollapse = document.querySelector(".topbar-collapse"); // Menu Xin chào Admin
const dropdownMenu = document.querySelector(".topbar-dropmenu"); // Dropdown Đăng xuất

// Thêm sự kiện click vào nút hamburger
hamburgerButton.addEventListener("click", () => {
  // Toggle hiển thị menu Xin chào Admin
  topbarCollapse.classList.toggle("show");
});

// Thêm sự kiện click vào menu Xin chào Admin
const topbarDropdown = document.getElementById("topbarDropdown");
topbarDropdown.addEventListener("click", (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
  // Toggle hiển thị dropdown Đăng xuất
  dropdownMenu.classList.toggle("show");
});
//-----------------------------------------------------------------------------------------------

var esanpham = document.getElementById("quanlysanpham");
var edonhang = document.getElementById("quanlydonhang");
var enguoidung = document.getElementById("quanlynguoidung");
var ethongke = document.getElementById("quanlythongke");

var sidebar = document.getElementsByClassName("sideMenu")[0];

function PhongSide() {
  sidebar.style.width = "200px";
}

function ThuSide() {
  sidebar.style.width = "80px";
}

var noActive = document.getElementsByClassName("sidebar-link");

function hiensanpham() {
  for (i = 0; i < noActive.length; i++)
    if (noActive[i].classList.contains("isActive"))
      noActive[i].classList.remove("isActive");
  noActive[1].classList.add("isActive");
  esanpham.style.display = "block";
  edonhang.style.display = "none";
  enguoidung.style.display = "none";
  ethongke.style.display = "none";
}

function hiendonhang() {
  for (i = 0; i < noActive.length; i++)
    if (noActive[i].classList.contains("isActive"))
      noActive[i].classList.remove("isActive");
  noActive[3].classList.add("isActive");
  esanpham.style.display = "none";
  enguoidung.style.display = "none";
  ethongke.style.display = "none";
  edonhang.style.display = "block";
}

function hiennguoidung() {
  for (i = 0; i < noActive.length; i++)
    if (noActive[i].classList.contains("isActive"))
      noActive[i].classList.remove("isActive");
  noActive[2].classList.add("isActive");
  esanpham.style.display = "none";
  edonhang.style.display = "none";
  ethongke.style.display = "none";
  enguoidung.style.display = "block";
}

function hienthongke() {
  for (i = 0; i < noActive.length; i++)
    if (noActive[i].classList.contains("isActive"))
      noActive[i].classList.remove("isActive");
  noActive[0].classList.add("isActive");
  esanpham.style.display = "none";
  edonhang.style.display = "none";
  enguoidung.style.display = "none";
  ethongke.style.display = "block";
}
//-----------------------------------------------------------------------------------------------
//tạo bảng hóa đơn
/*function createordertable() {
  var orders = [
    {
      id: 1,
      email: "aabernathy@yahoo.com",
      details: "Pizza Hải Sản Nhiệt Đới (XL x1), Mỳ Ý Cay Hải Sản (x1)",
      date: "21/11/2020 7:28:32 AM",
      total: "268.000đ",
      confirmed: true,
    },
    {
      id: 2,
      email: "king.beaulah@cole.biz",
      details: "Mỳ Ý Thịt Bò Băm (x1), Salad Trộn Ceasar (x1)",
      date: "21/11/2020 7:28:32 AM",
      total: "198.000đ",
      confirmed: true,
    },
    {
      id: 3,
      email: "beier.craig@hotmail.com",
      details: "Tiết kiệm 50% Pizza (x1)",
      date: "22/11/2020 8:22:12 AM",
      total: "297.000đ",
      confirmed: false,
    },
    {
      id: 4,
      email: "john.doe@example.com",
      details: "Pizza Pepperoni (x2), Coca-Cola (x2)",
      date: "23/11/2020 5:15:45 PM",
      total: "326.000đ",
      confirmed: true,
    },
    {
      id: 5,
      email: "jane.smith@example.com",
      details: "Pizza Margherita (M x1), Nước cam (x1)",
      date: "24/11/2020 11:00:00 AM",
      total: "175.000đ",
      confirmed: true,
    },
    {
      id: 6,
      email: "alex.jones@example.com",
      details: "Burger Bò (x2), Khoai Tây Chiên (x2)",
      date: "25/11/2020 1:47:29 PM",
      total: "220.000đ",
      confirmed: false,
    },
  ];

  var s = "";
  for (var i = 0; i < orders.length; i++) {
    s += `
            <tr>
                <td>${orders[i].id}</td>
                <td>${orders[i].email}</td>
                <td>${orders[i].details}</td>
                <td>${orders[i].date}</td>
                <td>${orders[i].total}</td>
                <td><input type="checkbox" ${
                  orders[i].confirmed ? "checked" : ""
                }></td>
            </tr>
        `;
  }
  document.getElementById("ordertable").innerHTML = s;
}*/

//tạo bảng top bán chạy
function createproducttable() {
  var products = [
    { id: 1, name: "Tiết kiệm 50% Pizza", sold: 70, profit: "20,790,000 VNĐ" },
    { id: 2, name: "Pizza Gà Nướng 3 Vị", sold: 32, profit: "6,708,000 VNĐ" },
    { id: 3, name: "Mỳ Ý Thịt Bò Băm", sold: 22, profit: "2,838,000 VNĐ" },
  ];
  var s = "";
  for (var i = 0; i < products.length; i++) {
    s += `
        <tr>
            <td>${products[i].id}</td>
            <td>${products[i].name}</td>
            <td>${products[i].sold}</td>
            <td>${products[i].profit}</td>
        </tr>
        `;
  }
  s += `
        <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
        </tr>
        `;
  document.getElementById("product-table").innerHTML = s;
}

function kichHoat(e) {
  if (e.classList.contains("color-green")) {
    if (confirm("Bạn có chắc chắn muốn khoá tài khoản này?")) {
      e.classList.toggle("color-green");
      e.parentElement.parentElement.style.backgroundColor = "rgba(255,0,0,0.3)";
      e.parentElement.parentElement.style.textDecoration = "line-through";
    }
  } else {
    e.classList.toggle("color-green");
    e.parentElement.parentElement.style.backgroundColor = "transparent";
    e.parentElement.parentElement.style.textDecoration = "none";
  }
}

//xử lý phân trang và tạo bảng người dùng
/*let accounts = [
  {
    id: 1,
    email: "john.doe1@example.com",
    password: "password123",
    createdDate: "2023-01-01",
    isActive: true,
  },
  {
    id: 2,
    email: "jane.smith2@example.com",
    password: "password123",
    createdDate: "2023-01-05",
    isActive: false,
  },
  {
    id: 3,
    email: "billy.joe3@example.com",
    password: "password123",
    createdDate: "2023-02-10",
    isActive: true,
  },
  {
    id: 4,
    email: "nancy.drew4@example.com",
    password: "password123",
    createdDate: "2023-02-14",
    isActive: false,
  },
  {
    id: 5,
    email: "jack.black5@example.com",
    password: "password123",
    createdDate: "2023-03-01",
    isActive: true,
  },
  {
    id: 6,
    email: "amanda.wong6@example.com",
    password: "password123",
    createdDate: "2023-03-03",
    isActive: true,
  },
  {
    id: 7,
    email: "robert.lee7@example.com",
    password: "password123",
    createdDate: "2023-04-15",
    isActive: false,
  },
  {
    id: 8,
    email: "kim.fields8@example.com",
    password: "password123",
    createdDate: "2023-04-18",
    isActive: true,
  },
  {
    id: 9,
    email: "chris.rock9@example.com",
    password: "password123",
    createdDate: "2023-05-20",
    isActive: false,
  },
  {
    id: 10,
    email: "julia.moore10@example.com",
    password: "password123",
    createdDate: "2023-06-02",
    isActive: true,
  },
  {
    id: 11,
    email: "henry.wood11@example.com",
    password: "password123",
    createdDate: "2023-06-12",
    isActive: false,
  },
  {
    id: 12,
    email: "olivia.stone12@example.com",
    password: "password123",
    createdDate: "2023-07-08",
    isActive: true,
  },
  {
    id: 13,
    email: "david.james13@example.com",
    password: "password123",
    createdDate: "2023-07-15",
    isActive: true,
  },
  {
    id: 14,
    email: "emily.white14@example.com",
    password: "password123",
    createdDate: "2023-08-01",
    isActive: false,
  },
  {
    id: 15,
    email: "sophia.green15@example.com",
    password: "password123",
    createdDate: "2023-08-10",
    isActive: true,
  },
  {
    id: 16,
    email: "lucas.wright16@example.com",
    password: "password123",
    createdDate: "2023-09-05",
    isActive: true,
  },
  {
    id: 17,
    email: "amelia.king17@example.com",
    password: "password123",
    createdDate: "2023-09-20",
    isActive: false,
  },
  {
    id: 18,
    email: "michael.brown18@example.com",
    password: "password123",
    createdDate: "2023-10-01",
    isActive: true,
  },
  {
    id: 19,
    email: "emma.jones19@example.com",
    password: "password123",
    createdDate: "2023-10-10",
    isActive: false,
  },
  {
    id: 20,
    email: "logan.miller20@example.com",
    password: "password123",
    createdDate: "2023-11-02",
    isActive: true,
  },
  {
    id: 21,
    email: "ava.davis21@example.com",
    password: "password123",
    createdDate: "2023-11-15",
    isActive: true,
  },
  {
    id: 22,
    email: "liam.wilson22@example.com",
    password: "password123",
    createdDate: "2023-12-05",
    isActive: false,
  },
  {
    id: 23,
    email: "mia.harris23@example.com",
    password: "password123",
    createdDate: "2023-12-10",
    isActive: true,
  },
  {
    id: 24,
    email: "ethan.clark24@example.com",
    password: "password123",
    createdDate: "2024-01-01",
    isActive: false,
  },
  {
    id: 25,
    email: "chloe.walker25@example.com",
    password: "password123",
    createdDate: "2024-01-15",
    isActive: true,
  },
  {
    id: 26,
    email: "noah.young26@example.com",
    password: "password123",
    createdDate: "2024-02-01",
    isActive: true,
  },
  {
    id: 27,
    email: "lily.allen27@example.com",
    password: "password123",
    createdDate: "2024-02-10",
    isActive: false,
  },
  {
    id: 28,
    email: "william.hall28@example.com",
    password: "password123",
    createdDate: "2024-03-01",
    isActive: true,
  },
  {
    id: 29,
    email: "zoe.baker29@example.com",
    password: "password123",
    createdDate: "2024-03-15",
    isActive: true,
  },
  {
    id: 30,
    email: "james.carter30@example.com",
    password: "password123",
    createdDate: "2024-04-01",
    isActive: false,
  },
  {
    id: 31,
    email: "grace.white31@example.com",
    password: "password123",
    createdDate: "2024-04-10",
    isActive: true,
  },
  {
    id: 32,
    email: "oliver.martin32@example.com",
    password: "password123",
    createdDate: "2024-04-12",
    isActive: false,
  },
  {
    id: 33,
    email: "benjamin.lee33@example.com",
    password: "password123",
    createdDate: "2024-05-01",
    isActive: true,
  },
  {
    id: 34,
    email: "emily.garcia34@example.com",
    password: "password123",
    createdDate: "2024-05-05",
    isActive: true,
  },
  {
    id: 35,
    email: "matthew.moore35@example.com",
    password: "password123",
    createdDate: "2024-06-10",
    isActive: false,
  },
  {
    id: 36,
    email: "samantha.kelly36@example.com",
    password: "password123",
    createdDate: "2024-06-15",
    isActive: true,
  },
  {
    id: 37,
    email: "dylan.perez37@example.com",
    password: "password123",
    createdDate: "2024-07-01",
    isActive: false,
  },
  {
    id: 38,
    email: "luke.evans38@example.com",
    password: "password123",
    createdDate: "2024-07-15",
    isActive: true,
  },
  {
    id: 39,
    email: "joseph.young39@example.com",
    password: "password123",
    createdDate: "2024-08-01",
    isActive: true,
  },
  {
    id: 40,
    email: "rachel.hall40@example.com",
    password: "password123",
    createdDate: "2024-08-20",
    isActive: false,
  },
  {
    id: 41,
    email: "william.moore41@example.com",
    password: "password123",
    createdDate: "2024-09-01",
    isActive: true,
  },
  {
    id: 42,
    email: "chris.taylor42@example.com",
    password: "password123",
    createdDate: "2024-09-10",
    isActive: false,
  },
  {
    id: 43,
    email: "anna.wright43@example.com",
    password: "password123",
    createdDate: "2024-09-25",
    isActive: true,
  },
  {
    id: 44,
    email: "lillian.davis44@example.com",
    password: "password123",
    createdDate: "2024-10-05",
    isActive: true,
  },
  {
    id: 45,
    email: "jackson.white45@example.com",
    password: "password123",
    createdDate: "2024-10-10",
    isActive: false,
  },
  {
    id: 46,
    email: "sofia.martin46@example.com",
    password: "password123",
    createdDate: "2024-11-01",
    isActive: true,
  },
  {
    id: 47,
    email: "nathan.smith47@example.com",
    password: "password123",
    createdDate: "2024-11-05",
    isActive: true,
  },
  {
    id: 48,
    email: "chloe.johnson48@example.com",
    password: "password123",
    createdDate: "2024-12-01",
    isActive: false,
  },
  {
    id: 49,
    email: "leo.lee49@example.com",
    password: "password123",
    createdDate: "2024-12-10",
    isActive: true,
  },
  {
    id: 50,
    email: "olivia.miller50@example.com",
    password: "password123",
    createdDate: "2024-12-15",
    isActive: false,
  },
  {
    id: 51,
    email: "joseph.harris51@example.com",
    password: "password123",
    createdDate: "2025-01-05",
    isActive: true,
  },
  {
    id: 52,
    email: "victoria.davis52@example.com",
    password: "password123",
    createdDate: "2025-01-10",
    isActive: true,
  },
  {
    id: 53,
    email: "katherine.moore53@example.com",
    password: "password123",
    createdDate: "2025-02-01",
    isActive: false,
  },
  {
    id: 54,
    email: "michael.wilson54@example.com",
    password: "password123",
    createdDate: "2025-02-15",
    isActive: true,
  },
  {
    id: 55,
    email: "lily.garcia55@example.com",
    password: "password123",
    createdDate: "2025-03-01",
    isActive: true,
  },
  {
    id: 56,
    email: "jacob.white56@example.com",
    password: "password123",
    createdDate: "2025-03-10",
    isActive: false,
  },
  {
    id: 57,
    email: "ella.kim57@example.com",
    password: "password123",
    createdDate: "2025-04-01",
    isActive: true,
  },
  {
    id: 58,
    email: "aiden.davis58@example.com",
    password: "password123",
    createdDate: "2025-04-15",
    isActive: true,
  },
  {
    id: 59,
    email: "grayson.smith59@example.com",
    password: "password123",
    createdDate: "2025-05-01",
    isActive: false,
  },
  {
    id: 60,
    email: "leah.jones60@example.com",
    password: "password123",
    createdDate: "2025-05-05",
    isActive: true,
  },
  {
    id: 61,
    email: "charlotte.miller61@example.com",
    password: "password123",
    createdDate: "2025-06-01",
    isActive: true,
  },
  {
    id: 62,
    email: "liam.brown62@example.com",
    password: "password123",
    createdDate: "2025-06-15",
    isActive: false,
  },
  {
    id: 63,
    email: "harper.wilson63@example.com",
    password: "password123",
    createdDate: "2025-07-01",
    isActive: true,
  },
  {
    id: 64,
    email: "zachary.moore64@example.com",
    password: "password123",
    createdDate: "2025-07-10",
    isActive: true,
  },
];

let currentPage = 1;
let perPage = 25;
let totalPage = 0;
let perAccounts = [];

function handlePageNumber(num) {
  currentPage = num;
  let start = (currentPage - 1) * perPage;
  let end = start + perPage;
  perAccounts = accounts.slice(start, Math.min(end, accounts.length));
  renderAccount();
}

function renderPageNumber() {
  totalPage = Math.ceil(accounts.length / perPage);
  let paginationHTML = `<li class="pagination-user-item">
                                <button class="pagination-button" onclick="handlePageNumber(${1})">
                                    <i class="fas fa-angle-double-left"></i>
                                </button>
                            </li>`;
  for (let i = 1; i <= totalPage; i++) {
    paginationHTML += `<li class="pagination-user-item">
                                    <button class="pagination-button ${
                                      currentPage === i ? " selected-page" : ""
                                    }" onclick="handlePageNumber(${i})">${i}</button>
                                </li>`;
  }
  paginationHTML += `<li class="pagination-user-item">
                                <button class="pagination-button" onclick="handlePageNumber(${totalPage})">
                                    <i class="fas fa-angle-double-right"></i>
                                </button>
                            </li>`;
  document.getElementById("pagination-user").innerHTML = paginationHTML;
}

function renderAccount() {
  var s = "";

  for (var i = 0; i < perAccounts.length; i++) {
    let active = "";
    let rowStyle = "";
    if (perAccounts[i].isActive) {
      active =
        '<i class="fas fa-check-circle color-green" onclick="kichHoat(this);"></i>';
    } else {
      active = '<i class="fas fa-check-circle" onclick="kichHoat(this);"></i>';
      rowStyle =
        'style="background-color: rgba(255,0,0,0.3); text-decoration: line-through;"';
    }
    s += `
                <tr ${rowStyle}>
                    <th scope="row">${perAccounts[i].id}</th>
                    <td>${perAccounts[i].email}</td>
                    <td>${perAccounts[i].password}</td>
                    <td>${perAccounts[i].createdDate}</td>
                    <td class="kichhoat">
                        ${active}
                    </td>
                </tr>
            `;
  }
  document.getElementById("account-table").innerHTML = s;
}

function createAccountAndPaginationUser() {
  try {
    perAccounts = accounts.slice(
      (currentPage - 1) * perPage,
      (currentPage - 1) * perPage + perPage
    );
    renderPageNumber();
    renderAccount();
  } catch (e) {
    console.log(e);
  }
}*/

//xử lý phân trang và danh sách sản phẩm
/*let menu = [
    {title: 'Combo Sức Sống Mới', description: 'Combo ưu đãi 25%, phù hợp cho 2-3 người', oldPrice: 350000, currentPrice: 299000, img: './images/combo1.png'},
    {title: 'Thực Đơn Siêu Tiết Kiệm', description: 'Combo ưu đãi 30%, phù hợp cho gia đình', oldPrice: 500000, currentPrice: 350000, img: './images/combo2.png'},
    {title: 'Bữa Ăn Tiện Lợi', description: 'Khuyến mãi 10%, phù hợp cho 1 người', oldPrice: 200000, currentPrice: 180000, img: './images/combo3.png'},
    {title: 'Combo Gia Đình', description: 'Combo gia đình với ưu đãi 20%', oldPrice: 450000, currentPrice: 360000, img: './images/combo4.png'},
    {title: 'Thực Đơn Hạnh Phúc', description: 'Combo hạnh phúc cho 4 người', oldPrice: 600000, currentPrice: 480000, img: './images/combo5.png'},
    {title: 'Bữa Sáng Năng Lượng', description: 'Khuyến mãi 15%, bữa sáng cho 1 người', oldPrice: 120000, currentPrice: 102000, img: './images/combo6.png'},
    {title: 'Combo Trưa Tiết Kiệm', description: 'Combo tiết kiệm cho buổi trưa', oldPrice: 250000, currentPrice: 200000, img: './images/combo7.png'},
    {title: 'Bánh Mì Xíu Mại', description: 'Bánh mì nóng hổi với xíu mại thơm ngon', oldPrice: 30000, currentPrice: 25000, img: './images/banhmi.png'},
    {title: 'Bánh Cuốn Hà Nội', description: 'Bánh cuốn với nước mắm thơm ngon', oldPrice: 40000, currentPrice: 35000, img: './images/banhcuon.png'},
    {title: 'Mì Quảng', description: 'Mì Quảng đặc sản miền Trung', oldPrice: 60000, currentPrice: 55000, img: './images/miquang.png'},
    {title: 'Phở Bò', description: 'Phở bò truyền thống', oldPrice: 70000, currentPrice: 65000, img: './images/phobo.png'},
    {title: 'Cơm Gà Xối Mỡ', description: 'Cơm gà chiên xối mỡ giòn ngon', oldPrice: 80000, currentPrice: 75000, img: './images/comga.png'},
    {title: 'Chè Ba Màu', description: 'Chè ba màu đặc biệt cho mùa hè', oldPrice: 30000, currentPrice: 25000, img: './images/cheba.png'},
    {title: 'Sinh Tố Dưa Hấu', description: 'Sinh tố dưa hấu mát lạnh', oldPrice: 50000, currentPrice: 45000, img: './images/sinhto.png'},
    {title: 'Sữa Chua Trái Cây', description: 'Sữa chua ăn kèm trái cây tươi', oldPrice: 35000, currentPrice: 30000, img: './images/suachua.png'},
    {title: 'Cà Phê Sữa Đá', description: 'Cà phê sữa đá đậm đà', oldPrice: 35000, currentPrice: 30000, img: './images/caphe.png'},
    {title: 'Trà Sữa Hồng Trà', description: 'Trà sữa hồng trà thơm ngon', oldPrice: 45000, currentPrice: 40000, img: './images/trasua.png'},
    {title: 'Sushi Tươi Ngon', description: 'Sushi tươi ngon, ăn kèm wasabi', oldPrice: 150000, currentPrice: 130000, img: './images/sushi.png'},
    {title: 'Combo Hảo Hạng', description: 'Combo hảo hạng cho 3-4 người', oldPrice: 700000, currentPrice: 600000, img: './images/combo8.png'},
    {title: 'Mỳ Ý Carbonara', description: 'Mỳ Ý sốt carbonara thơm ngậy', oldPrice: 120000, currentPrice: 110000, img: './images/myy.png'},
    {title: 'Burger Thịt Bò', description: 'Burger thịt bò với phô mai', oldPrice: 80000, currentPrice: 70000, img: './images/burger.png'},
    {title: 'Pizza Phô Mai', description: 'Pizza phô mai ngậy ngon', oldPrice: 180000, currentPrice: 150000, img: './images/pizza.png'},
    {title: 'Gà Rán', description: 'Gà rán giòn rụm, thơm ngon', oldPrice: 90000, currentPrice: 85000, img: './images/garan.png'},
    {title: 'Cơm Tấm Sườn Nướng', description: 'Cơm tấm sườn nướng thơm ngon', oldPrice: 120000, currentPrice: 110000, img: './images/comtam.png'},
    {title: 'Bánh Xèo', description: 'Bánh xèo giòn tan, nhân tôm thịt', oldPrice: 40000, currentPrice: 35000, img: './images/banhxeo.png'},
    {title: 'Súp Mực', description: 'Súp mực đậm đà, thơm ngon', oldPrice: 70000, currentPrice: 65000, img: './images/supmuc.png'},
    {title: 'Cơm Niêu', description: 'Cơm niêu nóng hổi, ăn kèm canh', oldPrice: 120000, currentPrice: 100000, img: './images/comnieu.png'},
    {title: 'Mì Cay', description: 'Mì cay với gia vị đặc trưng', oldPrice: 60000, currentPrice: 50000, img: './images/micay.png'},
    {title: 'Bánh Kem', description: 'Bánh kem ngọt ngào, thơm ngon', oldPrice: 50000, currentPrice: 45000, img: './images/banhkem.png'},
    {title: 'Nước Ép Cam', description: 'Nước ép cam tươi nguyên chất', oldPrice: 25000, currentPrice: 20000, img: './images/nuocep.png'},
    {title: 'Cà Phê Đen', description: 'Cà phê đen đậm đà', oldPrice: 25000, currentPrice: 22000, img: './images/capheden.png'}
  ];
  

let currentPageMenu = 1
let perPageMenu = 12
let totalPageMenu = 0
let perMenu = []

function handlePageMenuNumber(num){
    currentPageMenu = num;
    let start = (currentPageMenu - 1) * perPageMenu;
    let end = start + perPageMenu;
    perMenu = menu.slice(start, Math.min(end, menu.length));
    renderMenu();
}

function renderPageMenuNumber(){
    totalPageMenu = Math.ceil(menu.length/perPageMenu);
    let paginationHTML =`<li class="pagination-menu-item">
                                <button class="pagination-menu-button" onclick="handlePageMenuNumber(${1})">
                                    <i class="fas fa-angle-double-left"></i>
                                </button>
                            </li>`;
        for(let i=1;i<=totalPageMenu;i++){
            paginationHTML += `<li class="pagination-menu-item">
                                    <button class="pagination-button ${currentPageMenu===i?' selected-page':''}" onclick="handlePageMenuNumber(${i})">${i}</button>
                                </li>` ;
        }
        paginationHTML +=`<li class="pagination-menu-item">
                                <button class="pagination-menu-button" onclick="handlePageMenuNumber(${totalPageMenu})">
                                    <i class="fas fa-angle-double-right"></i>
                                </button>
                            </li>`;

    document.getElementById('pagination-menu').innerHTML = paginationHTML;
}

function renderMenu(){
    var s='';

    for(let i=0;i<perMenu.length;i++){
        s += `
            <div class="wrap-cart">
                <div class="card">
                    <div class="inner-img">
                        <img class="card-img-top" src="${perMenu[i].img}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${perMenu[i].title}</h5>
                        <p class="card-text">${perMenu[i].description}</p>
                        <div class="cart-price">
                            <span class="card-old-price">${perMenu[i].oldPrice}</span>
                            <span class="card-current-price">${perMenu[i].currentPrice}</span>
                        </div>
                        <div class="button-group">
                            <button type="button" onclick="chinhSua('${perMenu[i].title}', '${perMenu[i].description}', ${perMenu[i].oldPrice}, ${perMenu[i].currentPrice})" class="updateproduct-button">Chỉnh sửa</button>
                            <button type="button" class="deleteproduct-button">Xoá</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
    }
    document.getElementById('product-list').innerHTML = s;
}

function createMenu(){
        perMenu = menu.slice(
            (currentPageMenu -1 )*perPageMenu,
            (currentPageMenu - 1)*perPageMenu + perPageMenu
        );
        renderPageMenuNumber();
        renderMenu();
}*/

// function taiSanPham(){}

function hienThiPagination(pageHienTai, pageToiDa) {
  const wrapper = document.querySelector(".pagination");
  wrapper.innerHTML = "";
  const container = document.createElement("ul");
  container.classList.add("pagination-list");

  // ham them nhanh 1 nut
  function appendButton(text, goToPage) {
    const li = document.createElement("li");
    li.classList.add("pagination-menu-item");
    const button = document.createElement("button");
    button.classList.add("pagination-menu-button");
    if (text === "prev") {
      const i = document.createElement("i");
      i.classList.add("fas", "fa-angle-double-left");
      button.appendChild(i);
    } else if (text === "next") {
      const i = document.createElement("i");
      i.classList.add("fas", "fa-angle-double-right");
      button.appendChild(i);
    } else {
      button.textContent = text;
    }
    if (goToPage === pageHienTai) {
      button.classList.add("selected-page");
      button.style.setProperty("cursor", "default");
      button.style.setProperty("pointer-events", "none");
    } else {
      button.addEventListener("click", () =>
        caiParamUrlVaReload({ page: goToPage })
      );
    }
    li.appendChild(button);
    container.appendChild(li);
  }
  // ham them nhanh dau 3 cham (e.g. 1 ... 5 6 7)
  function addEllipsis() {
    const li = document.createElement("li");
    li.classList.add("pagination-menu-item");
    const ellipsis = document.createElement("span");
    ellipsis.classList.add("pagination-menu-item");
    ellipsis.textContent = "...";
    li.appendChild(ellipsis);
    container.appendChild(li);
  }

  const soNutPagination = 5;
  let startPage = Math.max(1, pageHienTai - Math.floor(soNutPagination / 2));
  let endPage = Math.min(pageToiDa, startPage + soNutPagination - 1);

  // Điều chỉnh trang bắt đầu và kết thúc để đảm bảo ít nhất hiển thị 5 nut
  if (endPage - startPage + 1 < soNutPagination) {
    if (startPage > 1) {
      startPage = endPage - soNutPagination + 1;
    } else {
      endPage = startPage + soNutPagination - 1;
    }
  }

  // Thêm nút trang trước
  if (pageHienTai > 1) {
    appendButton("prev", pageHienTai - 1);
  }

  // them nut trang dau tien
  if (startPage > 1) {
    appendButton(1, 1);
    if (startPage > 2) {
      addEllipsis();
    }
  }

  // Thêm cac nút số trang
  for (let i = startPage; i <= endPage; i++) {
    appendButton(i, i);
  }
  // them nut trang cuoi cung
  if (endPage < pageToiDa) {
    if (endPage < pageToiDa - 1) {
      addEllipsis();
    }
    appendButton(pageToiDa, pageToiDa);
  }

  // Thêm nút trang tiếp theo
  if (pageHienTai < pageToiDa) {
    appendButton("next", pageHienTai + 1);
  }
  wrapper.appendChild(container);
}

function hienThiDanhSach(duLieusHienThi, hamRenderItem, wrapperSelector) {
  const wrapper = document.querySelector(wrapperSelector);
  wrapper.innerHTML = "";
  const container = document.createElement("div");
  container.classList.add("grid-container");
  if (duLieusHienThi.length === 0)
    container.appendChild(
      document.createTextNode("Khong co san pham dap ung tieu chi")
    );
  for (const item of duLieusHienThi) {
    container.appendChild(hamRenderItem(item));
  }

  wrapper.appendChild(container);
}
function renderItemSanPham(sanPham) {
  const wrapCart = document.createElement("div");
  wrapCart.classList.add("wrap-cart");
  const card = document.createElement("div");
  card.classList.add("card");
  const img = document.createElement("div");
  img.classList.add("inner-img");
  const cardImgTop = document.createElement("img");
  cardImgTop.classList.add("card-img-top");
  cardImgTop.src = `/images/${sanPham["image-file"]}`;
  img.appendChild(cardImgTop);
  card.appendChild(img);
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = sanPham["name"];
  cardBody.appendChild(cardTitle);
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = sanPham["category"];
  cardBody.appendChild(cardText);
  const cartPrice = document.createElement("div");
  cartPrice.classList.add("cart-price");
  const cardOldPrice = document.createElement("span");
  cardOldPrice.classList.add("card-old-price");
  cardOldPrice.textContent = sanPham["price-n"];
  cartPrice.appendChild(cardOldPrice);
  const cardCurrentPrice = document.createElement("span");
  cardCurrentPrice.classList.add("card-current-price");
  cardCurrentPrice.textContent = sanPham["price-sale-n"];
  cartPrice.appendChild(cardCurrentPrice);
  cardBody.appendChild(cartPrice);
  const buttonGroup = document.createElement("div");
  buttonGroup.classList.add("button-group");
  const updateProductbtn = document.createElement("button");
  updateProductbtn.classList.add("updateproduct-button");
  updateProductbtn.addEventListener("click", () =>
    adminSuaSanPham(sanPham["web-scraper-order"])
  );
  updateProductbtn.textContent = "Chinh sua";
  buttonGroup.appendChild(updateProductbtn);
  const deleteProductbtn = document.createElement("button");
  deleteProductbtn.classList.add("deleteproduct-button");
  deleteProductbtn.addEventListener("click", () =>
    adminXoaSanPham(sanPham["web-scraper-order"])
  );
  deleteProductbtn.textContent = "Xoa";
  buttonGroup.appendChild(deleteProductbtn);
  cardBody.appendChild(buttonGroup);
  card.appendChild(cardBody);
  wrapCart.appendChild(card);
  return wrapCart;
}
function hienThiSanPham(sanPhamsHienThi, paramPhanTrang) {
  hienThiDanhSach(sanPhamsHienThi, renderItemSanPham, ".product-list");
  hienThiPagination(paramPhanTrang.page, paramPhanTrang.soPageToiDa);
}
window.addEventListener("load", function () {
  //createproducttable();
  //createordertable();
  //createAccountAndPaginationUser();
  //createMenu();
});

function adminSuaSanPham(id) {
  const sanPham = timSanPham(id);
  // TODO: hien form chinh sua

  //   suaSanPham(id, newSanPham);
}

function adminXoaSanPham(id) {
  xoaSanPham(id);
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
var soNguoiDungMoiTrang = 25;
function tinhNguoiDungHienThi() {
  let { page, sort, min, max, search, tab, disabled } = layParamUrl();
  let nguoiDungsDaLoc = [...g_nguoiDung];
  nguoiDungsDaLoc = locTrangThaiKhoa(disabled, nguoiDungsDaLoc);
  nguoiDungsDaLoc = sapXepNguoiDung(sort, nguoiDungsDaLoc);
  const soLuongNguoiDung = nguoiDungsDaLoc.length;
  const soPageToiDa = Math.ceil(soLuongNguoiDung / soNguoiDungMoiTrang);
  let chiSoBatDau = 0;
  if (page < 1 || isNaN(page) || page == null) {
    page = 1;
  }
  chiSoBatDau = (page - 1) * soNguoiDungMoiTrang;
  if (chiSoBatDau > soLuongNguoiDung) {
    caiParamUrlVaReload({ page: soPageToiDa }, false);
  }
  const nguoiDungsHienThi = nguoiDungsDaLoc.slice(
    chiSoBatDau,
    Math.min(chiSoBatDau + soNguoiDungMoiTrang, soLuongNguoiDung.length)
  );
  hienThiNguoiDung(nguoiDungsHienThi, {
    page,
    soPageToiDa,
    sort,
    soLuongNguoiDung,
    tongSoNguoiDung: g_nguoiDung.length,
    chiSoBatDau,
    soNguoiDungMoiTrang,
  });
}
function hienThiNguoiDung(nguoiDungsHienThi, paramPhanTrang) {
  hienThiDanhSachNguoiDung(
    nguoiDungsHienThi,
    renderItemNguoiDung,
    ".account-list"
  );
  hienThiPagination(
    paramPhanTrang.page,
    paramPhanTrang.soPageToiDa,
    ".pagination2"
  );
}

function renderItemNguoiDung(nguoiDung) {
  const active = document.createElement("i");
  const tr = document.createElement("tr");
  if (nguoiDung["disabled"]) {
    active.classList.add("fas", "fa-check-circle", "color-green");
  } else {
    active.classList.add("fas", "fas fa-check-circle");
    tr.style.backgroundColor = "rgba(255,0,0,0.3)";
    tr.style.textDecoration = "line-through";
  }
  active.addEventListener("click", () => kichHoat(i));
  const th = document.createElement("th");
  th.textContent = nguoiDung["id"];
  tr.appendChild(th);
  const td = document.createElement("td");
  td.textContent = nguoiDung["name"];
  tr.appendChild(td);
  const td2 = document.createElement("td");
  td2.textContent = nguoiDung["email"];
  tr.appendChild(td2);
  const td3 = document.createElement("td");
  td3.textContent = nguoiDung["password"];
  tr.appendChild(td3);
  const td4 = document.createElement("td");
  td4.textContent = nguoiDung["ngay-tao"];
  tr.appendChild(td4);
  const td5 = document.createElement("tr");
  td5.classList.add("kichhoat");
  td5.appendChild(active);
  tr.appendChild(td5);
  return tr;
}
function hienThiDanhSachNguoiDung(
  duLieusHienThi,
  hamRenderItem,
  wrapperSelector
) {
  const wrapper = document.querySelector(wrapperSelector);
  wrapper.innerHTML = "";
  const container = document.createElement("div");
  container.classList.add("container-nguoidung");
  const table = document.createElement("table");
  table.classList.add("product-table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const th4 = document.createElement("th");
  const th5 = document.createElement("th");
  const th6 = document.createElement("th");
  th.scope = "col";
  th2.scope = "col";
  th3.scope = "col";
  th4.scope = "col";
  th5.scope = "col";
  th6.scope = "col";
  th.textContent = "#";
  th2.textContent = "Tên khách hàng";
  th3.textContent = "Email";
  th4.textContent = "Password";
  th5.textContent = "Ngày tạo";
  th6.textContent = "Trạng thái";
  tr.appendChild(th);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);
  tr.appendChild(th6);
  thead.appendChild(tr);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  if (duLieusHienThi === 0)
    container.appendChild(document.createTextNode("Khong co khach hang nao"));
  for (const item of duLieusHienThi) {
    tbody.appendChild(hamRenderItem(item));
  }
  table.appendChild(tbody);
  container.appendChild(table);
  wrapper.appendChild(container);
}
//sắp xếp người dùng theo ngày tạo tài khoản
function sapXepNguoiDung(sort, nguoiDungsDaLoc) {
  if (sort === "asc")
    return nguoiDungsDaLoc.toSorted(
      (a, b) => new Date(a["ngay-tao"]) - new Date(b["ngay-tao"])
    );
  if (sort === "desc")
    return nguoiDungsDaLoc.toSorted(
      (a, b) => new Date(b["ngay-tao"]) - new Date(a["ngay-tao"])
    );
  return nguoiDungsDaLoc;
}

//lọc những tài khoản bị khóa
function locTrangThaiKhoa(disabled, nguoiDungsDaLoc) {
  if (disabled)
    return nguoiDungsDaLoc.filter(
      (nguoiDung) => nguoiDung["disabled"] == false
    );
  return nguoiDungsDaLoc;
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
var soHoaDonMoiTrang = 25;
function tinhHoaDonHienThi() {
  let { page, sort, min, max, search } = layParamUrl();
  let hoaDonsDaLoc = [...g_hoaDon];

  const soLuongHoaDon = hoaDonsDaLoc.length;
  const soPageToiDa = Math.ceil(soLuongHoaDon / soHoaDonMoiTrang);
  let chiSoBatDau = 0;
  if (page < 1 || isNaN(page) || page == null) {
    page = 1;
  }
  chiSoBatDau = (page - 1) * soHoaDonMoiTrang;
  if (chiSoBatDau > soLuongHoaDon) {
    caiParamUrlVaReload({ page: soPageToiDa }, false);
  }

  const hoaDonsHienThi = hoaDonsDaLoc.slice(
    chiSoBatDau,
    Math.min(chiSoBatDau + soHoaDonMoiTrang, soLuongHoaDon)
  );
  hienThiHoaDon(hoaDonsHienThi, {
    page,
    soPageToiDa,

    sort,
    soLuongHoaDon,
    tongSoHoaDon: g_hoaDon.length,
    chiSoBatDau,
    soHoaDonMoiTrang,
  });
}

function hienThiHoaDon(hoaDonsHienThi, paramPhanTrang) {
  hienThiDanhSachHoaDon(hoaDonsHienThi, renderItemHoaDon, ".order-list");
  hienThiPagination(paramPhanTrang.page, paramPhanTrang.soPageToiDa);
}

function renderItemHoaDon(hoaDon) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.textContent = hoaDon["id"];
  tr.appendChild(td);
  const td2 = document.createElement("td");
  td2.textContent = hoaDon["nguoi-dung"];
  tr.appendChild(td2);
  const td3 = document.createElement("td");
  td3.textContent = hoaDon["ngay-tao"];
  tr.appendChild(td3);
  const td4 = document.createElement("td");
  td4.rowSpan = hoaDon["chi-tiet"].length;
  const minitable = document.createElement("table");
  for (let i = 0; i < hoaDon["chi-tiet"].length; i++) {
    const trmini = document.createElement("tr");
    const tdmini = document.createElement("td");
    tdmini.textContent = hoaDon["chi-tiet"][i]["san-pham"];
    trmini.appendChild(tdmini);
    const tdmini2 = document.createElement("td");
    tdmini2.textContent = hoaDon["chi-tiet"][i]["so-luong"];
    trmini.appendChild(tdmini2);
    minitable.appendChild(trmini);
  }
  td4.appendChild(minitable);
  tr.appendChild(td4);
  const td5 = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = hoaDon["da-xac-nhan"];
  td5.appendChild(checkbox);
  tr.appendChild(td5);
  return tr;
}

function hienThiDanhSachHoaDon(duLieusHienThi, hamRenderItem, wrapperSelector) {
  const wrapper = document.querySelector(wrapperSelector);
  wrapper.innerHTML = "";
  const container = document.createElement("div");
  container.classList.add("container-hoadon");
  const table = document.documnet.createElement("table");
  table.classList.add("order-table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const th4 = document.createElement("th");
  const th5 = document.createElement("th");
  th.scope = "col";
  th2.scope = "col";
  th3.scope = "col";
  th4.scope = "col";
  th5.scope = "col";
  th.textContent = "#";
  th2.textContent = "Người dùng";
  th3.textContent = "Ngày tạo";
  th4.textContent = "Chi tiết";
  th5.textContent = "Đã xác nhận";
  tr.appendChild(th);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);
  thead.appendChild(tr);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  if (duLieusHienThi === 0)
    container.appendChild(document.createTextNode("Khong co hoa don nao"));
  for (const item of duLieusHienThi) {
    tbody.appendChild(hamRenderItem(item));
  }
  table.appendChild(tbody);
  container.appendChild(table);
  wrapper.appendChild(container);
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
function kiemTraTabHienTai() {
  const params = layParamUrl();
  return params.tab || "thongke";
}
