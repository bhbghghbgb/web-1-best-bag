const sanPhamKey = "sanPham";
const nguoiDungKey = "nguoiDung";
const gioHangKey = "gioHang";
const hoaDonKey = "hoaDon";
const sanPhamIdKey = "web-scraper-order";
const nguoiDungIdKey = "id";
const gioHangIdKey = "nguoi-dung";
const hoaDonIdKey = "id";
const sanPhamImKey = "sanPhamIm";
const nguoiDungImKey = "nguoiDungIm";
const gioHangImKey = "gioHangIm";
const hoaDonImKey = "hoaDonIm";
const theLoaiSanPhamKey = "theLoaiSanPham";
const sanPhamFile = "san-pham.json";
const nguoiDungFile = "nguoi-dung.json";
const gioHangFile = "gio-hang.json";
const hoaDonFile = "hoa-don.json";
const theLoaiSanPhamFile = "the-loai.json";
const spriteMappingFile = "sprite-mapping.json";

// tang bien nay khi muon reset localStorage hoac update du lieu moi tu file
const dataVersion = 27;

const soSanPhamMoiTrang = 12;

var g_sanPham,
  g_nguoiDung,
  g_gioHang,
  g_hoaDon,
  g_theLoaiSanPham,
  g_spriteMapping;
var i_sanPham, i_nguoiDung, i_gioHang, i_hoaDon, i_spriteMapping;

var duLieuDaTinh;

// Get the current script element (the one that included this JS file)
const mainJsScriptElement = document.currentScript;
const mainJsScriptPath = mainJsScriptElement.src;
// Get the directory of the script
const mainJsScriptDirectory = mainJsScriptPath.substring(
  0,
  mainJsScriptPath.lastIndexOf("/")
);

// thêm biến phiên bản dữ liệu để ép reset localstorage
function verifyDataVersion() {
  const savedDataVersion = localStorage.getItem("dataVersion");
  if (localStorage.getItem("dataVersion") != dataVersion) {
    console.info(
      `Reset localStorage as saved dataVersion ${savedDataVersion} != ${dataVersion}`
    );
    localStorage.clear();
    localStorage.setItem("dataVersion", dataVersion);
  }
}

async function taiDuLieu(datakey, datafile, dataobj) {
  // da load roi ma van dc goi tiep (de chac an)
  if (dataobj != null) return dataobj;
  // du lieu key nay da co trong local storage
  const dataObj = taiDuLieuLocalStorage(datakey);
  if (dataObj) return dataObj;
  // chua co du lieu key nay trong local storage (lan dau mo web)
  // thi can phai tai du lieu ban dau tu file
  const response = await fetch(`${mainJsScriptDirectory}/Data/${datafile}`);
  const json = await response.json();
  console.debug("taiDuLieu", { response, datakey, datafile, json });
  return json;
}

function taoIndexMapping(g_duLieu, entityImKey, entityIdKey, i_duLieu) {
  return (
    i_duLieu ?? // da tao roi ma van dc goi tiep (de chac an)
    taiDuLieuLocalStorage(entityImKey) ??
    createIndexMapping(g_duLieu, entityIdKey)
  );
}

async function taiSanPham(sauKhiTai) {
  g_theLoaiSanPham = await taiDuLieu(
    theLoaiSanPhamKey,
    theLoaiSanPhamFile,
    g_theLoaiSanPham
  );
  g_sanPham = await taiDuLieu(sanPhamKey, sanPhamFile, g_sanPham);
  i_sanPham = taoIndexMapping(g_sanPham, sanPhamImKey, sanPhamIdKey, i_sanPham);
  await taiSpriteMapping(() => {});
  await sauKhiTai();
}

function taiNguoiDung(sauKhiTai) {
  taiDuLieu(nguoiDungKey, nguoiDungFile, g_nguoiDung).then((data) => {
    g_nguoiDung = data;
    i_nguoiDung = taoIndexMapping(
      g_nguoiDung,
      nguoiDungImKey,
      nguoiDungIdKey,
      i_nguoiDung
    );
    sauKhiTai();
  });
}

function taiGioHang(sauKhiTai) {
  taiDuLieu(gioHangKey, gioHangFile, g_gioHang).then((data) => {
    g_gioHang = data;
    i_gioHang = taoIndexMapping(
      g_gioHang,
      gioHangImKey,
      gioHangIdKey,
      i_gioHang
    );
    sauKhiTai();
  });
}

function taiHoaDon(sauKhiTai) {
  taiDuLieu(hoaDonKey, hoaDonFile, g_hoaDon).then((data) => {
    g_hoaDon = data;
    i_hoaDon = taoIndexMapping(g_hoaDon, hoaDonImKey, hoaDonIdKey, i_hoaDon);
    sauKhiTai();
  });
}

async function taiSpriteMapping(sauKhiTai) {
  try {
    g_spriteMapping = await (
      await fetch(`${mainJsScriptDirectory}/sprite/${spriteMappingFile}`)
    ).json();
    const mapByImgName = {};
    Object.entries(g_spriteMapping).forEach(([spriteName, spriteData]) => {
      spriteData.i.forEach((img) => {
        mapByImgName[img.f] = {
          f: spriteName,
          x: img.x,
          y: img.y,
          w: img.w,
          h: img.h,
        };
      });
    });
    i_spriteMapping = mapByImgName;
    console.debug("taiSpriteMapping", {
      sm: g_spriteMapping,
      indexMapping: i_spriteMapping,
    });
  } catch (e) {
    console.error("taiSpriteMapping khong duoc");
    g_spriteMapping = null;
    i_spriteMapping = null;
  }
  await sauKhiTai();
}

function renderSanPhamImage(sanPham, altIndex = 0) {
  const imgKey = `image-file${altIndex ? altIndex + 1 : ""}`;
  const spriteData = i_spriteMapping?.[sanPham[imgKey]];
  let el;
  if (spriteData) {
    el = document.createElement("div");
    el.style.width = spriteData.w + "px";
    el.style.height = spriteData.h + "px";
    el.style.backgroundImage = `url('${mainJsScriptDirectory}/sprite/images/${spriteData.f}')`;
    el.style.backgroundPosition = `-${spriteData.x}px -${spriteData.y}px`;
    el.style.backgroundRepeat = "no-repeat";
  } else {
    el = document.createElement("img");
    el.src = `${mainJsScriptDirectory}/images/${sanPham[imgKey]}`;
  }
  el.classList.add("grid-img");
  return el;
}

function taoBoLocSanPham() {
  const container = document.getElementById("categories");
  if (!container) {
    console.info("taoBoLocSanPham khong tim thay wrapper");
    return;
  }
  // cac param muon giu lai khi sua bo loc
  const { search, min, max, sort, categories } = layParamUrl();
  // Dynamically add categories to the form
  g_theLoaiSanPham.forEach((category) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = category;
    checkbox.checked = true;
    checkbox.addEventListener("dblclick", (e) => {
      e.preventDefault();
      // Function to toggle category checkboxes
      document
        .querySelectorAll('#categories input[type="checkbox"]:checked')
        .forEach((cb) => {
          cb.checked = false;
        });
      e.target.checked = true;
    });
    checkbox.addEventListener("change", (e) => {
      const cbs = [
        ...document.querySelectorAll('#categories input[type="checkbox"]'),
      ];
      if (cbs.every((cb) => !cb.checked)) {
        cbs.forEach((cb) => (cb.checked = true));
        e.target.checked = false;
      }
    });
    const label = document.createElement("label");
    label.textContent = category;

    const div = document.createElement("div");
    div.appendChild(checkbox);
    div.appendChild(label);

    container.appendChild(div);
  });
  // hien lai data tu param vao form
  const searchElement = document.getElementById("search");
  if (searchElement) searchElement.value = search;
  const minPriceElement = document.getElementById("minPrice");
  if (minPriceElement && Number.isFinite(min)) minPriceElement.value = minPrice;
  const maxPriceElement = document.getElementById("maxPrice");
  if (maxPriceElement && Number.isFinite(max)) maxPriceElement.value = maxPrice;
  if (categories?.length > 0) {
    const checkboxes = document.querySelectorAll(
      '#categories input[type="checkbox"]'
    );
    if (checkboxes.length > 0) {
      checkboxes.forEach((cb) => (cb.checked = categories.includes(cb.value)));
    }
  }
  const sortByElement = document.getElementById("sortBy");
  if (sortByElement) sortByElement.value = sort;
  if (categories?.length > 0)
    [
      ...document.querySelectorAll('#categories input[type="checkbox"]'),
    ].forEach((cb) => (cb.checked = categories.includes(cb.value)));

  // su kien submit
  document.getElementById("productForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formObject = {};
    new FormData(e.target).forEach((value, key) => {
      formObject[key] = value;
    });
    formObject.categories = [
      ...document.querySelectorAll(
        '#categories input[type="checkbox"]:checked'
      ),
    ].map((cb) => cb.value);
    caiParamUrl(formObject);
  });
}

// page: trang dang hien thi trong phan trang (set cai nay de di chuyen phan trang)
// sort: thu tu sap xep gia san pham
// min: gia thap nhat khi loc san pham
// max: gia cao nhat
function layParamUrl() {
  const params = new URL(document.location.toString()).searchParams;
  return {
    page: parseInt(params.get("page"), 10),
    sort: params.get("sort") || "",
    min: parseInt(params.get("min"), 10),
    max: parseInt(params.get("max"), 10),
    search: params.get("search") || "",
    categories: params.getAll("categories[]") || [],
    tab: params.get("tab") || "thongke",
    disabled: parseInt(params.get("disabled"), 2) || 0,
    handle: params.get("handle") || "",
    topsp: params.get("topsp") || "",
    topnd: params.get("topnd") || "",
    chart: params.get("chart"),
    idtrangchitietsanpham: params.get("idtrangchitietsanpham"),
  };
}

// goi ham nay khi bam phan trang hoac sap xep/loc de tai lai trang voi param moi
function caiParamUrl(
  {
    page,
    sort,
    min,
    max,
    search,
    categories,
    tab,
    disabled,
    handle,
    topsp,
    topnd,
    chart,
    idtrangchitietsanpham,
  },
  resetParam = false,
  reload = true,
  newUrl
) {
  const url = newUrl ?? new URL(document.location.toString());
  if (resetParam || newUrl) url.search = "";
  const params = url.searchParams;
  const setParam = (param, name) => {
    if (param !== undefined) params.set(name, param);
  };
  const setParamArray = (ps, name) => {
    if (ps === undefined) return;
    params.delete(name);
    if (Array.isArray(ps)) ps.forEach((p) => params.append(name, p));
  };
  setParam(page, "page");
  setParam(sort, "sort");
  setParam(min, "min");
  setParam(max, "max");
  setParam(search, "search");
  setParamArray(categories, "categories[]");
  setParam(tab, "tab");
  setParam(disabled, "disabled");
  setParam(handle, "handle");
  setParam(topsp, "topsp");
  setParam(topnd, "topnd");
  setParam(chart, "chart");
  setParam(idtrangchitietsanpham, "idtrangchitietsanpham");
  if (reload || newUrl) window.location = url.toString();
  else window.history.replaceState({}, "", url.toString());
}

function tinhSanPhamHienThi(wrapperSelector = ".product-list") {
  if (!document.querySelector(wrapperSelector)) {
    console.info("tinhSanPhamHienThi khong tim thay wrapper");
    return;
  }
  let { page, sort, min, max, search, categories } = layParamUrl();
  let sanPhamsDaLoc = [...g_sanPham];
  sanPhamsDaLoc = locGiaSanPham(min, max, sanPhamsDaLoc);
  sanPhamsDaLoc = locTheLoaiSanPham(categories, sanPhamsDaLoc);
  if (search) sanPhamsDaLoc = timTheoTen(search, sanPhamsDaLoc);
  sanPhamsDaLoc = sapXepSanPham(sort, sanPhamsDaLoc);

  const soLuongSanPham = sanPhamsDaLoc.length;
  const soPageToiDa = Math.ceil(soLuongSanPham / soSanPhamMoiTrang);
  createPaginationDebugTable({
    soPageToiDa, // so trang toi da phan trang
    sort,
    min,
    max,
    search,
    categories,
    soLuongSanPham,
    tongSoSanPham: g_sanPham.length,
    soSanPhamMoiTrang,
  });

  duLieuDaTinh = { duLieuDaLoc: sanPhamsDaLoc, soPageToiDa, pageHienTai: page };

  hienThiSanPham(duLieuDaTinh, wrapperSelector);
}

function tinhNguoiDungHienThi(wrapperSelector = ".account-list") {
  if (!document.querySelector(wrapperSelector)) {
    console.info("tinhNguoiDungHienThi khong tim thay wrapper");
    return;
  }
  alert("chua cai dat tinh nguoi dung hien thi");
}

function tinhHoaDonHienThi(wrapperSelector = ".order-list") {
  if (!document.querySelector(wrapperSelector)) {
    console.info("tinhHoaDonHienThi khong tim thay wrapper");
    return;
  }
  alert("chua cai dat tinh hoa don hien thi");
}

function hienTrangChiTiet(id) {
  alert(
    `Chua cai dat chuc nang hien trang chi tier | id: ${id}, sp: ${JSON.stringify(
      readSanPham(id)
    )}`
  );
}

function hienThiSanPham(duLieuDaTinh, wrapperSelector) {
  // TODO: hien thi danh sach san Pham sau khi load, trang 1
  const khiBamTrang = () =>
    hienThiDanhSach(duLieuDaTinh, renderItemSanPham, wrapperSelector);
  khiBamTrang();
  hienThiPagination(duLieuDaTinh, () => khiBamTrang());
}

function renderItemSanPham(sanPham) {
  const item = document.createElement("div");
  item.classList.add("grid");

  if (sanPham.matchScore) {
    const matchScore = document.createElement("p");
    matchScore.style.setProperty("color", "green");

    const matchScore1 = document.createElement("small");
    matchScore1.textContent = `Match score: ${sanPham.matchScore}`;
    matchScore.appendChild(matchScore1);

    item.appendChild(matchScore);
  }

  const id = document.createElement("h4");
  id.innerText = sanPham["web-scraper-order"];
  item.appendChild(id);

  const name = document.createElement("h1");
  name.innerText = sanPham["name"];
  item.appendChild(name);

  const spacer = document.createElement("div");
  spacer.classList.add("grid-spacer");
  item.appendChild(spacer);

  const price = document.createElement("p");
  price.style.setProperty("text-decoration", "line-through");
  price.style.setProperty("color", "gray");
  price.innerText = sanPham["price"];
  item.appendChild(price);

  const sale = document.createElement("h3");
  sale.style.setProperty("color", "red");
  sale.innerText = sanPham["price-sale-n"];
  item.appendChild(sale);

  const priceAsText = document.createElement("p");
  priceAsText.textContent = number2TextVietnamese(
    sanPham["price-sale-n"].toString()
  );
  item.appendChild(priceAsText);

  const category = document.createElement("h4");
  category.style.setProperty("color", "cyan");
  category.innerText = `Túi ${sanPham["category"]}`;
  item.appendChild(category);

  const btn = document.createElement("button");
  btn.addEventListener("click", () =>
    hienTrangChiTiet(sanPham["web-scraper-order"])
  );
  btn.textContent = "Xem chi tiet";
  item.appendChild(btn);

  const img = renderSanPhamImage(sanPham);
  item.appendChild(img);
  return item;
}

function hienThiDanhSach(duLieuDaTinh, hamRenderItem, wrapperSelector) {
  const wrapper = document.querySelector(wrapperSelector);
  wrapper.innerHTML = "";
  const container = document.createElement("div");
  container.classList.add("grid-container");
  const { duLieuDaLoc, soPageToiDa } = duLieuDaTinh;
  let { pageHienTai } = duLieuDaTinh;
  let chiSoBatDau = 0;
  let chiSoPage = 0;
  if (pageHienTai < 1 || isNaN(pageHienTai) || pageHienTai == null) {
    pageHienTai = 1;
  }
  chiSoPage = pageHienTai - 1;
  chiSoBatDau = chiSoPage * soSanPhamMoiTrang;
  // phan trang bam vuot gioi han so trang
  if (chiSoBatDau > duLieuDaTinh.length) {
    caiParamUrl({ page: soPageToiDa }, false, true);
  }
  // mang sau khi chia phan trang
  const duLieuPhanTrang = duLieuDaLoc.slice(
    chiSoBatDau,
    chiSoBatDau + soSanPhamMoiTrang
  );
  if (duLieuDaTinh.length === 0)
    container.appendChild(
      document.createTextNode("Khong co san pham dap ung tieu chi")
    );
  for (const item of duLieuPhanTrang) {
    container.appendChild(hamRenderItem(item));
  }
  wrapper.appendChild(container);
}

function hienThiPagination(
  duLieuDaTinh,
  khiBamTrang,
  wrapperSelector = ".pagination"
) {
  const { soPageToiDa } = duLieuDaTinh;
  let { pageHienTai } = duLieuDaTinh;
  if (soPageToiDa === 0) return;
  if (pageHienTai < 1 || isNaN(pageHienTai) || pageHienTai == null) {
    pageHienTai = 1;
  }
  const onPaginationChange = (goToPage) => {
    goToPage = parseInt(goToPage, 10);
    caiParamUrl({ page: goToPage }, false, false);
    duLieuDaTinh.pageHienTai = goToPage;
    // Calculate the scroll position relative to the bottom
    const distanceFromBottom =
      document.documentElement.scrollHeight -
      window.innerHeight -
      window.scrollY;
    hienThiPagination(duLieuDaTinh, () => khiBamTrang(), wrapperSelector);
    // After the new content is loaded, adjust the scroll position
    // Use setTimeout to ensure this runs after the new content is rendered
    setTimeout(() => {
      window.scrollTo(
        0,
        document.documentElement.scrollHeight -
          window.innerHeight -
          distanceFromBottom
      );
    }, 0);
    khiBamTrang(goToPage);
  };
  if (pageHienTai > soPageToiDa) {
    onPaginationChange(soPageToiDa);
    return;
  }
  const wrapper = document.querySelector(wrapperSelector);
  if (!wrapper) {
    console.error(`Không tìm thấy phần tử với selector: ${wrapperSelector}`);
    return; // Nếu không tìm thấy, dừng lại và không làm gì thêm
  }
  wrapper.innerHTML = "";
  const popover = (function () {
    // Create the form element
    const form = document.createElement("form");
    form.classList.add("pagination-popover");
    form.popover = "auto";
    form.addEventListener("toggle", (e) => {
      if (e.newState == "open") input.focus();
    });
    form.addEventListener("submit", () =>
      onPaginationChange(new FormData(form).get("page"))
    );

    // Create the label element
    const label = document.createElement("label");
    label.setAttribute("for", "page");
    label.textContent = "Go to Page...";

    // Create the input element
    const input = document.createElement("input");
    input.setAttribute("name", "page");
    input.setAttribute("type", "number");
    input.setAttribute("step", 1);
    input.setAttribute("min", 1);
    input.setAttribute("max", soPageToiDa);

    // Create the button element
    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.textContent = "Go";

    // Append the elements to the form
    form.appendChild(label);
    form.appendChild(document.createElement("br")); // Line break for spacing
    form.appendChild(input);
    form.appendChild(button);

    // Append the form to the body (or any other container)
    return form;
  })();
  wrapper.appendChild(popover);

  const container = document.createElement("ul");
  container.classList.add("pagination-list");

  // ham them nhanh 1 nut
  function appendButton(text, goToPage) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = text;
    if (goToPage === pageHienTai) {
      button.classList.add("active");
      button.style.setProperty("cursor", "default");
      button.style.setProperty("pointer-events", "none");
    } else {
      button.addEventListener("click", () => onPaginationChange(goToPage));
    }
    li.appendChild(button);
    container.appendChild(li);
  }

  // ham them nhanh dau 3 cham (e.g. 1 ... 5 6 7)
  function addEllipsis() {
    const li = document.createElement("li");
    const ellipsis = document.createElement("button");
    ellipsis.textContent = "…";
    ellipsis.style.setProperty("font-weight", "bold");
    ellipsis.popoverTargetElement = popover;
    ellipsis.popoverTargetAction = "toggle";
    li.appendChild(ellipsis);
    container.appendChild(li);
  }

  const soNutPagination = Math.min(soPageToiDa, 5); // Ensure no more than total pages
  let startPage = Math.max(1, pageHienTai - Math.floor(soNutPagination / 2));
  let endPage = Math.min(soPageToiDa, startPage + soNutPagination - 1);

  // Điều chỉnh trang bắt đầu và kết thúc để đảm bảo ít nhất hiển thị 5 nut
  if (endPage - startPage + 1 < soNutPagination) {
    if (startPage > 1) {
      startPage = endPage - soNutPagination + 1;
    } else {
      endPage = startPage + soNutPagination - 1;
    }
  }
  if (startPage === 2 && endPage > 5) endPage--;
  else if (
    endPage === soPageToiDa - 1 &&
    startPage < soPageToiDa - soNutPagination + 1
  )
    startPage++;

  // Thêm nút trang trước
  if (pageHienTai > 1) {
    appendButton("← ", pageHienTai - 1);
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
  if (endPage < soPageToiDa) {
    if (endPage < soPageToiDa - 1) {
      addEllipsis();
    }
    appendButton(soPageToiDa, soPageToiDa);
  }

  // Thêm nút trang tiếp theo
  if (pageHienTai < soPageToiDa) {
    appendButton(" →", pageHienTai + 1);
  }
  wrapper.appendChild(container);
}

function sapXepSanPham(thuTu, sanPhamsDaLoc) {
  // gia thap den cao
  if (thuTu === "asc")
    return sanPhamsDaLoc.toSorted((a, b) => a["price-n"] - b["price-n"]);
  // gia cao den thap
  if (thuTu === "desc")
    return sanPhamsDaLoc.toSorted((a, b) => b["price-n"] - a["price-n"]);
  // best match tim kiem
  if (sanPhamsDaLoc[0]?.matchScore != null || thuTu === "best")
    return sanPhamsDaLoc.toSorted((a, b) => b.matchScore - a.matchScore);
  return sanPhamsDaLoc;
}

function locGiaSanPham(min, max, sanPhamsDaLoc) {
  function locGiaCaoNhat(max, sanPhamsDaLoc) {
    if (max != null && !isNaN(max))
      return sanPhamsDaLoc.filter((sanPham) => sanPham["price-sale-n"] <= max);
    return sanPhamsDaLoc;
  }

  function locGiaThapNhat(min, sanPhamsDaLoc) {
    if (min != null && !isNaN(min))
      return sanPhamsDaLoc.filter((sanPham) => sanPham["price-sale-n"] >= min);
    return sanPhamsDaLoc;
  }

  return locGiaThapNhat(min, locGiaCaoNhat(max, sanPhamsDaLoc));
}

function locTheLoaiSanPham(theLoai, sanPhamsDaLoc) {
  if (Array.isArray(theLoai) && theLoai?.length > 0)
    return sanPhamsDaLoc.filter((sanPham) =>
      theLoai.includes(sanPham["category"])
    );
  return sanPhamsDaLoc;
}

function timTheoTen(name, sanPhamsDaLoc) {
  const sanitize = (string) =>
    transliterate(string).trim().replace(/\s+/g, " ").normalize().toLowerCase();
  const sanitizedInput = sanitize(name);
  const keywords = sanitizedInput.split(/\s+/);
  const matchScores = sanPhamsDaLoc.map((sanPham) => {
    if (name === sanPham["web-scraper-order"]) return 9999;
    const sanitizedName = sanitize(sanPham["name"]);
    if (sanitizedInput === sanitizedName) return 1000;
    const nameWords = sanitizedName.split(/\s+/);
    return keywords.reduce(
      (keywordScore, keyword) =>
        keywordScore +
        nameWords.reduce(
          (namewordScore, nameword) =>
            namewordScore +
            (keyword === nameword
              ? Math.max(100, 25 * keyword.length)
              : nameword.startsWith(keyword)
              ? Math.max(50, 10 * keyword.length)
              : nameword.includes(keyword)
              ? Math.max(
                  10,
                  3 * keyword.length * (nameword.split(keyword).length - 1)
                )
              : 0),
          0
        ),
      0
    );
  });
  console.table(
    matchScores
      .map((matchScore, i) => {
        return { name: sanPhamsDaLoc[i]["name"], matchScore };
      })
      .sort((a, b) => a.score - b.score)
  );
  return matchScores
    .map((matchScore, i) => {
      return { ...sanPhamsDaLoc[i], matchScore };
    })
    .filter((sanPham) => sanPham.matchScore > 0);
}

function luuSanPhamLocalStorage() {
  luuDuLieuLocalStorage(sanPhamKey, g_sanPham);
}

function luuNguoiDungLocalStorage() {
  luuDuLieuLocalStorage(nguoiDungKey, g_nguoiDung);
}

function luuHoaDonLocalStorage() {
  luuDuLieuLocalStorage(hoaDonKey, g_hoaDon);
}

function luuDuLieuLocalStorage(datakey, g_duLieu) {
  console.debug("luuDuLieuLocalStorage", { datakey, g_duLieu });
  localStorage.setItem(
    datakey,
    JSON.stringify(g_duLieu, (k, v) =>
      k == "dataVersion" || k == "dataInfo" ? undefined : v
    )
  );
}

function taiSanPhamLocalStorage() {
  return taiDuLieuLocalStorage(sanPhamKey);
}

function taiNguoiDungLocalStorage() {
  return taiDuLieuLocalStorage(nguoiDungKey);
}

function taiHoaDonLocalStorage() {
  return taiDuLieuLocalStorage(hoaDonKey);
}

function taiDuLieuLocalStorage(datakey) {
  const dl = localStorage.getItem(datakey);
  const obj = JSON.parse(dl);
  console.debug("taiDuLieuLocalStorage", { datakey, strlen: dl?.length, obj });
  return obj;
}

// xoa local storage de load lai danh sach san pham ban dau tu file data
function xoaSanPhamLocalStorage() {
  xoaDuLieuLocalStorage(sanPham);
}

function xoaNguoiDungLocalStorage() {
  xoaDuLieuLocalStorage(nguoiDungKey);
}

function xoaHoaDonLocalStorage() {
  xoaDuLieuLocalStorage(hoaDonKey);
}

function xoaDuLieuLocalStorage(datakey) {
  localStorage.removeItem(datakey);
}

function createPaginationDebugTable(data) {
  console.table([data]);
  // Append the table to the DOM (replace '.debug-table' with your actual container ID)
  const container = document.querySelector(".debug-table");
  if (!container) return;
  if (!Array.isArray(data)) data = [data];
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  // Create header row
  for (const key in data[0]) {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);
  // Create data rows
  for (const rowData of data) {
    const row = document.createElement("tr");
    for (const key in rowData) {
      const td = document.createElement("td");
      td.textContent = rowData[key] ?? "null";
      row.appendChild(td);
    }
    table.appendChild(row);
  }
  // Append the table to the DOM (replace '.debug-table' with your actual container ID)
  container.appendChild(table);
}

// tối ưu tìm thực thể dùng index mapping object
// Index Mapping Object Creator Template
function createIndexMapping(entityList, idKey) {
  const indexMapping = {};
  entityList.forEach((entity, index) => {
    indexMapping[entity[idKey]] = index;
  });
  return indexMapping;
}

// CRUD Functions Template
function createEntity(
  entityList,
  entityKey,
  indexMapping,
  indexMappingKey,
  idKey,
  entity
) {
  entityList.push(entity);
  indexMapping[entity[idKey]] = entityList.length - 1;
  console.debug("createEntity", {
    entityList,
    entityKey,
    indexMapping,
    indexMappingKey,
    idKey,
    entity,
  });
  luuDuLieuLocalStorage(entityKey, entityList);
  luuDuLieuLocalStorage(indexMappingKey, indexMapping);
}

function readEntity(
  entityList,
  entityKey,
  indexMapping,
  idKey,
  entityId,
  orDefault = null
) {
  const index = indexMapping[entityId];
  console.debug("readEntity", {
    entityList,
    entityKey,
    indexMapping,
    idKey,
    entityId,
    index,
  });
  return index !== undefined ? entityList[index] : orDefault;
}

function updateEntity(
  entityList,
  entityKey,
  indexMapping,
  indexMappingKey,
  idKey,
  entityId,
  newEntity
) {
  const index = indexMapping[entityId];
  console.debug("updateEntity", {
    entityList,
    entityKey,
    indexMapping,
    indexMappingKey,
    idKey,
    entityId,
    newEntity,
    index,
  });
  if (index !== undefined) {
    entityList[index] = newEntity;
    luuDuLieuLocalStorage(entityKey, entityList);
  }
}

function deleteEntity(
  entityList,
  entityKey,
  indexMapping,
  indexMappingKey,
  idKey,
  entityId
) {
  const index = indexMapping[entityId];
  console.debug("deleteEntity", {
    entityList,
    entityKey,
    indexMapping,
    indexMappingKey,
    idKey,
    entityId,
    index,
  });
  if (index !== undefined) {
    entityList.splice(index, 1);
    delete indexMapping[entityId];

    // Update index mapping
    for (let i = index; i < entityList.length; i++) {
      indexMapping[entityList[i][idKey]] = i;
    }
    luuDuLieuLocalStorage(entityKey, entityList);
    luuDuLieuLocalStorage(indexMappingKey, indexMapping);
  }
}

// CRUD functions for sanPham
function createSanPham(entity) {
  createEntity(
    g_sanPham,
    sanPhamKey,
    i_sanPham,
    sanPhamImKey,
    sanPhamIdKey,
    entity
  );
}

function readSanPham(entityId, orDefault = false) {
  return readEntity(
    g_sanPham,
    sanPhamKey,
    i_sanPham,
    sanPhamIdKey,
    entityId,
    orDefault
      ? {
          "web-scraper-order": null,
          "web-scraper-start-url": null,
          "image-src": null,
          "image2-src": null,
          name: null,
          price: "0 ₫",
          "image-file": null,
          "image2-file": null,
          "price-n": 0,
          "price-sale-n": 0,
          category: "deleted",
          description: null,
        }
      : null
  );
}

function updateSanPham(entityId, newEntity) {
  updateEntity(
    g_sanPham,
    sanPhamKey,
    i_sanPham,
    sanPhamImKey,
    sanPhamIdKey,
    entityId,
    newEntity
  );
}

function deleteSanPham(entityId) {
  deleteEntity(
    g_sanPham,
    sanPhamKey,
    i_sanPham,
    sanPhamImKey,
    sanPhamIdKey,
    entityId
  );
}

// CRUD functions for nguoiDung
function createNguoiDung(entity) {
  createEntity(
    g_nguoiDung,
    nguoiDungKey,
    i_nguoiDung,
    nguoiDungImKey,
    nguoiDungIdKey,
    entity
  );
}

function readNguoiDung(entityId, orDefault = false) {
  return readEntity(
    g_nguoiDung,
    nguoiDungKey,
    i_nguoiDung,
    nguoiDungIdKey,
    entityId,
    orDefault
      ? {
          id: null,
          name: null,
          username: null,
          email: null,
          password: null,
          "ngay-tao": null,
          disabled: true,
        }
      : null
  );
}

function updateNguoiDung(entityId, newEntity) {
  updateEntity(
    g_nguoiDung,
    nguoiDungKey,
    i_nguoiDung,
    nguoiDungImKey,
    nguoiDungIdKey,
    entityId,
    newEntity
  );
}

function deleteNguoiDung(entityId) {
  deleteEntity(
    g_nguoiDung,
    nguoiDungKey,
    i_nguoiDung,
    nguoiDungImKey,
    nguoiDungIdKey,
    entityId
  );
}

// CRUD functions for gioHang
function createGioHang(entity) {
  createEntity(
    g_gioHang,
    gioHangKey,
    i_gioHang,
    gioHangImKey,
    gioHangIdKey,
    entity
  );
}

function readGioHang(entityId, orDefault = false) {
  return readEntity(
    g_gioHang,
    gioHangKey,
    i_gioHang,
    gioHangIdKey,
    entityId,
    orDefault
      ? {
          "nguoi-dung": null,
          "chi-tiet": [],
        }
      : null
  );
}

function updateGioHang(entityId, newEntity) {
  updateEntity(
    g_gioHang,
    gioHangKey,
    i_gioHang,
    gioHangImKey,
    gioHangIdKey,
    entityId,
    newEntity
  );
}

function deleteGioHang(entityId) {
  deleteEntity(
    g_gioHang,
    gioHangKey,
    i_gioHang,
    gioHangImKey,
    gioHangIdKey,
    entityId
  );
}

// CRUD functions for hoaDon
function createHoaDon(entity) {
  createEntity(g_hoaDon, hoaDonKey, i_hoaDon, hoaDonImKey, hoaDonImKey, entity);
}

function readHoaDon(entityId, orDefault = false) {
  return readEntity(
    g_hoaDon,
    hoaDonKey,
    i_hoaDon,
    hoaDonImKey,
    entityId,
    orDefault
      ? {
          id: null,
          "nguoi-dung": null,
          "ngay-tao": null,
          "chi-tiet": [],
          "xu-ly": "xoa",
        }
      : null
  );
}

function updateHoaDon(entityId, newEntity) {
  updateEntity(
    g_hoaDon,
    hoaDonKey,
    i_hoaDon,
    hoaDonImKey,
    hoaDonImKey,
    entityId,
    newEntity
  );
}

function deleteHoaDon(entityId) {
  deleteEntity(
    g_hoaDon,
    hoaDonKey,
    i_hoaDon,
    hoaDonImKey,
    hoaDonImKey,
    entityId
  );
}

// them san pham, co the nhap id hoac khong
// neu nhap id, kiem tra xem co bi trung id hay ko
// neu ko nhap id, se duoc random 1 id ngau nhien
function themSanPham(id, sanPham) {
  if (id == null) sanPham[sanPhamIdKey] = crypto.randomUUID();
  else if (timSanPham(id)) {
    alert("themSanPham trung id");
    return;
  } else sanPham[sanPhamIdKey] = id;
  createSanPham(sanPham);
}

// tim san pham theo id
function timSanPham(id) {
  if (id == null) {
    alert("timSanPham chua nhap id");
    return;
  }
  return readSanPham(id);
}

// sua san pham, phai nhap id de biet san pham can sua
// san pham nhan vao se thay the san pham da co
// dung timSanPhamTheoId de lay thong tin san pham cho nguoi dung sua
function suaSanPham(id, sanPham) {
  if (!timSanPham(id)) {
    alert("suaSanPham khong tim thay id");
    return;
  }
  // force reset id
  sanPham[sanPhamIdKey] = id;
  updateSanPham(id, sanPham);
}

function xoaSanPham(id) {
  if (!timSanPham(id)) {
    alert("xoaSanPham khong tim thay id");
    return;
  }
  deleteSanPham(id);
}

// them nguoi dung, co the nhap id hoac khong
// neu nhap id, kiem tra xem co bi trung id hay ko
// neu ko nhap id, se duoc random 1 id ngau nhien
function themNguoiDung(id, nguoiDung) {
  if (id == null) {
    id = crypto.randomUUID();
    nguoiDung[nguoiDungIdKey] = id;
  } else nguoiDung[nguoiDungIdKey] = id;
  if (
    timNguoiDung(id) ||
    timNguoiDung(nguoiDung["username"]) ||
    timNguoiDung(nguoiDung["email"])
  ) {
    alert("themNguoiDung trung thong tin");
    return;
  }
  createNguoiDung(nguoiDung);
  if (readGioHang(id)) return;
  createGioHang({ "nguoi-dung": id, "chi-tiet": [] });
}

// tim nguoi dung theo idOrUsernameOrEmail
function timNguoiDung(idOrUsernameOrEmail) {
  if (idOrUsernameOrEmail == null) {
    alert("timNguoiDung chua nhap id");
    return;
  }
  return (
    readNguoiDung(idOrUsernameOrEmail) ||
    g_nguoiDung.find(
      (n) =>
        n["username"] === idOrUsernameOrEmail ||
        n["email"] === idOrUsernameOrEmail
    )
  );
}

// sua nguoi dung, phai nhap id de biet nguoi dung can sua
// nguoi dung nhan vao se thay the nguoi dung da co
// dung timNguoiDungTheoId de lay thong tin nguoi dung cho nguoi dung sua
function suaNguoiDung(id, nguoiDung) {
  if (!timNguoiDung(id)) {
    alert("suaNguoiDung khong tim thay id");
    return;
  }
  // force reset id
  nguoiDung[nguoiDungIdKey] = id;
  updateNguoiDung(id, nguoiDung);
}

function xoaNguoiDung(id) {
  if (!timNguoiDung(id)) {
    alert("xoaNguoiDung khong tim thay id");
    return;
  }
  deleteNguoiDung(id);
  if (!readGioHang(id)) return;
  deleteGioHang(id);
}

// them gio hang: khong thuc hien duoc, bao loi
// Removed as it doesn't align with the one-to-one relationship between nguoiDung and gioHang.
function themGioHang() {
  alert("themGioHang khong thuc hien duoc. Vui long sua gio hang hien tai.");
}

// tim gio hang theo id, tao gio hang neu khong ton tai
function timGioHang(id) {
  if (id == null) {
    alert("timGioHang chua nhap id");
    return;
  }
  if (!timNguoiDung(id)) {
    if (readGioHang(id)) deleteGioHang(id);
    alert("khong co nguoi dung co id nay de thao tac tren gio hang cua ho");
    return;
  }
  let gioHang = readGioHang(id);
  if (!gioHang) {
    gioHang = { "nguoi-dung": id, "chi-tiet": [] };
    createGioHang(gioHang);
  }
  return gioHang;
}

// sua gio hang: nhan vao chi-tiet array va cap nhat chi-tiet
function suaChiTietGioHang(id, chiTiet) {
  const gioHang = timGioHang(id);
  if (!gioHang) {
    alert("suaGioHang khong tim thay id");
    return;
  }
  gioHang["chi-tiet"] = chiTiet;
  updateGioHang(id, gioHang);
}

// xoa gio hang: xoa chi-tiet array thay vi xoa gio hang
function xoaChiTietGioHang(id) {
  const gioHang = timGioHang(id);
  if (!gioHang) {
    alert("xoaGioHang khong tim thay id");
    return;
  }
  gioHang["chi-tiet"] = [];
  updateGioHang(id, gioHang);
}

// them hoa don, co the nhap id hoac khong
// neu nhap id, kiem tra xem co bi trung id hay ko
// neu ko nhap id, se duoc random 1 id ngau nhien
function themHoaDon(id, hoaDon) {
  if (id == null) hoaDon[hoaDonIdKey] = crypto.randomUUID();
  else if (timHoaDon(id)) {
    // TODO: xu ly id bi trung
    alert("themHoaDon trung id");
    return;
  } else hoaDon[hoaDonIdKey] = id;
  createHoaDon(hoaDon);
}

// tim hoa don theo id
function timHoaDon(id) {
  if (id == null) {
    alert("timHoaDon chua nhap id");
    return;
  }
  return readHoaDon(id);
}

// sua hoa don, phai nhap id de biet hoa don can sua
// hoa don nhan vao se thay the hoa don da co
// dung timHoaDonTheoId de lay thong tin hoa don cho nguoi dung sua
function suaHoaDon(id, hoaDon) {
  if (!timHoaDon(id)) {
    alert("suaHoaDon khong tim thay id");
    return;
  }
  // force reset id
  hoaDon[hoaDonIdKey] = id;
  updateHoaDon(id, hoaDon);
}

function xoaHoaDon(id) {
  if (!timHoaDon(id)) {
    alert("xoaHoaDon khong tim thay id");
    return;
  }
  deleteHoaDon(id);
}

async function taiDuLieuTongMainJs(sauKhiTai) {
  verifyDataVersion();
  await taiSanPham(() => {
    taoBoLocSanPham();
    tinhSanPhamHienThi();
  });
  taiNguoiDung(() => {
    tinhNguoiDungHienThi();
  });
  taiGioHang(() => {});
  taiHoaDon(() => {
    tinhHoaDonHienThi();
  });
  sauKhiTai();
}

// multiSort Function: Accepts an array to sort and an array of comparator functions
// Cloning the Array: toSorted
// Sorting Logic: Uses the built-in sort method with a custom compare function
// Loop Through Comparators: Iterates over the comparators
// If a comparator returns a non-zero value, it is used for sorting
// If it returns zero, the next comparator is checked
function multiSort(array, comparators) {
  return array.toSorted((a, b) => {
    for (let comparator of comparators) {
      const result = comparator(a, b);
      if (result !== 0) return result;
    }
    return 0;
  });
}

function formatDateLocaleVn(dateString) {
  return new Date(dateString).toLocaleString("vi-VN", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  });
}

function loadScriptModule(urlScript, urlTextInScript, callback) {
  const script = document.createElement("script");
  script.type = "module";
  script.onload = callback;
  script.src = urlScript;
  fetch(urlTextInScript)
    .then((res) => res.text())
    .then((text) => {
      script.append(text);
      document.head.appendChild(script);
    });
}

function showDebugMenu() {
  const existingDialog = document.getElementById("debugDialog");
  if (existingDialog) {
    existingDialog.showModal();
    return;
  }

  // Helper function to convert to camel case
  function toCamelCase(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
      .replace(/\s+/g, "");
  }

  // Helper function to create a button
  function createButton(text, onClick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.style.display = "inline";
    button.onclick = onClick;
    return button;
  }

  // Helper function to copy text to clipboard using Clipboard API
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  }

  // Helper function to download a file
  function downloadFile(filename, content) {
    const blob = new Blob([content], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  // Create the dialog element
  const dialog = document.createElement("dialog");
  dialog.id = "debugDialog";
  dialog.style.width = "calc(100% - 200px)";
  dialog.style.height = "calc(100% - 100px)";
  dialog.style.padding = "20px";
  document.body.appendChild(dialog);

  const popover = document.createElement("div");
  popover.id = "debugMessage";
  popover.classList.add("popover");
  popover.setAttribute("popover", "auto");
  dialog.appendChild(popover);

  // Show popover message
  function showPopover(message) {
    popover.textContent = message;
    popover.showPopover();
  }

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.float = "right";
  closeButton.onclick = () => dialog.close();
  dialog.appendChild(closeButton);

  const title = document.createElement("h2");
  title.textContent = "Debug menu for Web 1 Best Bag";
  dialog.appendChild(title);

  const localStorageLabel = document.createElement("label");
  localStorageLabel.textContent = "Actions for Local Storage:";
  localStorageLabel.style.display = "block";
  dialog.appendChild(localStorageLabel);

  const clearLocalStorageButton = createButton("Clear Local Storage", () => {
    localStorage.clear();
    showPopover("Local Storage: Cleared Local Storage");
  });
  dialog.appendChild(clearLocalStorageButton);

  const copyLocalStorageButton = createButton("Copy Local Storage", () => {
    copyToClipboard(JSON.stringify(localStorage));
    showPopover("Local Storage: Copied Local Storage");
  });
  dialog.appendChild(copyLocalStorageButton);

  const downloadLocalStorageButton = createButton(
    "Download Local Storage",
    () => {
      downloadFile("localstorage.json", JSON.stringify(localStorage));
      showPopover("Local Storage: Downloaded Local Storage");
    }
  );
  dialog.appendChild(downloadLocalStorageButton);

  const entities = ["san pham", "nguoi dung", "hoa don", "gio hang"];

  entities.forEach((entity) => {
    const entityNameCamel = toCamelCase(entity);
    const entityNameHyphen = entity.replace(/ /g, "-");

    // Create a label for the entity
    const label = document.createElement("label");
    label.textContent = `Actions for ${entity}:`;
    label.style.display = "block";
    dialog.appendChild(label);

    // Create action buttons for the entity
    dialog.appendChild(
      createButton(`Copy Data`, () => {
        copyToClipboard(JSON.stringify(window[`g_${entityNameCamel}`]));
        showPopover(`${entity}: Copied Data`);
      })
    );

    dialog.appendChild(
      createButton(`Copy Mapping`, () => {
        copyToClipboard(JSON.stringify(window[`i_${entityNameCamel}`]));
        showPopover(`${entity}: Copied Mapping`);
      })
    );

    dialog.appendChild(
      createButton(`Download Data`, () => {
        downloadFile(
          `${entityNameHyphen}-loaded.json`,
          JSON.stringify(window[`g_${entityNameCamel}`])
        );
        showPopover(`${entity}: Downloaded Data`);
      })
    );

    dialog.appendChild(
      createButton(`Download Mapping`, () => {
        downloadFile(
          `${entityNameHyphen}-im-loaded.json`,
          JSON.stringify(window[`i_${entityNameCamel}`])
        );
        showPopover(`${entity}: Downloaded Mapping`);
      })
    );

    dialog.appendChild(
      createButton(`Copy Data from Local Storage`, () => {
        copyToClipboard(localStorage.getItem(window[`${entityNameCamel}Key`]));
        showPopover(`${entity}: Copied Data from Local Storage`);
      })
    );

    dialog.appendChild(
      createButton(`Copy Mapping from Local Storage`, () => {
        copyToClipboard(
          localStorage.getItem(window[`${entityNameCamel}ImKey`])
        );
        showPopover(`${entity}: Copied Mapping from Local Storage`);
      })
    );

    dialog.appendChild(
      createButton(`Download Data from Local Storage`, () => {
        downloadFile(
          `${entityNameHyphen}-localstorage.json`,
          localStorage.getItem(window[`${entityNameCamel}Key`])
        );
        showPopover(`${entity}: Downloaded Data from Local Storage`);
      })
    );

    dialog.appendChild(
      createButton(`Download Mapping from Local Storage`, () => {
        downloadFile(
          `${entityNameHyphen}-im-localstorage.json`,
          localStorage.getItem(window[`${entityNameCamel}ImKey`])
        );
        showPopover(`${entity}: Downloaded Mapping from Local Storage`);
      })
    );
  });

  dialog.showModal();
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
// Gọi hàm này khi muốn hiển thị login dialog
// Ví dụ: document.getElementById('loginButton').addEventListener('click', showLoginDialog);

if (window.dayLaTrangIndex)
  // goi khi trang web load thanh cong
  window.addEventListener("load", () => {
    taiDuLieuTongMainJs(() => console.info("Tai du lieu tong o mainjs"));
  });
