const root = document.querySelector(":root");
var extra_name = el("extra_name").value;
const languages = ajax_object.languages;
function measureText(p15, p16) {
  const v28 = document.createElement("span");
  v28.appendChild(document.createTextNode(p15));
  Object.assign(v28.style, {
    font: p16,
    margin: "0",
    padding: "0",
    border: "0",
    whiteSpace: "nowrap",
  });
  document.body.appendChild(v28);
  const { width: _0x2d9726, height: _0x5acf55 } = v28.getBoundingClientRect();
  v28.remove();
  return {
    width: _0x2d9726,
    height: _0x5acf55,
  };
}
if (
  !rt ||
  (rt != b64DecodeUnicode("dm9uZ3F1YXltYXltYW4ubG9j") &&
    rt != b64DecodeUnicode("dm9uZ3F1YXltYXltYW4uY28="))
) {
  window.location.href = b64DecodeUnicode("dm9uZ3F1YXltYXltYW4uY28=");
}
function getText(p17, p18) {
  if (p17.nodeType === 3) {
    p18.push(p17.nodeValue);
  } else if (p17.nodeName === "IMG") {
    p18.push('<img src="' + p17.src + '" >');
  } else {
    for (let v29 of p17.childNodes) {
      getText(v29, p18);
    }
  }
}
function getItemList(p19) {
  var v30 = Array.from(p19.children);
  var v31 = [];
  if (v30.length) {
    for (var v32 = 0; v32 < v30.length; v32++) {
      v31.push(v30[v32].innerHTML);
    }
  }
  return v31;
}
function getSectorItem(p20) {
  if (p20) {
    var v33 = p20.match(/<div>(.*?)<\/div>/g).map(function (p21) {
      p21 = p21.replace(/<\/?div>/g, "");
      if (p21 && !p21.includes("img")) {
        p21 = stripHtml(p21);
        p21 = p21.trim();
      }
      return p21;
    });
    return v33.filter(function (p22) {
      return p22 !== "";
    });
  } else {
    return [];
  }
}
function getImgSrc(p23) {
  const v34 = document.createElement("div");
  v34.innerHTML = p23;
  const v35 = v34.querySelector("img");
  return v35.src;
}
function stripHtml(p24) {
  var v36 = document.createElement("div");
  v36.innerHTML = p24;
  return v36.textContent || v36.innerText || "";
}
function getCurrentStyleColor() {
  var v37 = [];
  var v38 = document.getElementsByName("chkcolor");
  if (v38.length) {
    for (var v39 of v38) {
      if (v39.checked) {
        v37.push(el("color-" + v39.value).value);
      }
    }
  }
  if (v37.length == 0) {
    v37 = ["#D51025", "#3369E8", "#039924", "#EEB212"];
  }
  return v37;
}
function setBackgroundImage(p25, p26 = "view") {
  var v40 = window.innerWidth;
  let v41;
  if (typeof p25 === "string") {
    v41 = p25;
    if (p26 === "update") {
      el("custom-bg-img").value = p25;
      el("custom-bg-img-tablet").value = p25;
      el("custom-bg-img-mobile").value = p25;
    }
  } else if (Array.isArray(p25)) {
    if (p25[0]) {
      v41 = p25[0];
    }
    if (v40 < 768 && p25[2]) {
      v41 = p25[2];
    } else if (v40 <= 1024 && p25[1]) {
      v41 = p25[1];
    }
    if (p26 === "update") {
      el("custom-bg-img").value = p25[0];
      el("custom-bg-img-tablet").value = p25[1];
      el("custom-bg-img-mobile").value = p25[2];
    }
  }
  if (v41) {
    document.body.style.backgroundImage = "url(" + v41 + ")";
  } else {
    document.body.style.backgroundImage = "";
  }
}
function getWheelSettingInArray() {
  var v42 = el("extra_name").value;
  var v43 = localStorage.getItem("wheelSetting" + v42);
  var v44 = null;
  if (v43) {
    v44 = JSON.parse(v43);
  }
  return v44;
}
function setWheelSettingFromArray(p27) {
  var v45 = el("extra_name").value;
  localStorage.setItem("wheelSetting" + v45, JSON.stringify(p27));
}
async function loadWheel() {
  var vGetWheelSettingInArray = getWheelSettingInArray();
  if (vGetWheelSettingInArray == null) {
    return false;
  }
  var v46 = ajax_object.home_url;
  var v47 = ajax_object.theme_uri;
  var v48 = vGetWheelSettingInArray.start_sound;
  var v49 = vGetWheelSettingInArray.end_sound;
  var v50 = vGetWheelSettingInArray.show_confetti;
  var v51 = vGetWheelSettingInArray.show_popup;
  var v52 = vGetWheelSettingInArray.popup_label;
  var v53 = vGetWheelSettingInArray.show_remove_button;
  var v54 = vGetWheelSettingInArray.btn_spin_label;
  var v55 = "";
  var v56 = vGetWheelSettingInArray.is_advance;
  var v57 = vGetWheelSettingInArray.entries;
  var v58 = vGetWheelSettingInArray.duration;
  var v59 = vGetWheelSettingInArray.is_stroke;
  var v60 = "color";
  var v61 = "";
  var v62 = 0;
  var v63 = "";
  var v64 = [];
  var v65 = 0;
  var v66 = [];
  var v67 = "no";
  var v68 = "#FF4D00";
  var v69 = "#F6FA00";
  if (vGetWheelSettingInArray.hasOwnProperty("show_border")) {
    v67 = vGetWheelSettingInArray.show_border;
    v68 = vGetWheelSettingInArray.border_color;
    v69 = vGetWheelSettingInArray.diamond_color;
  }
  if (vGetWheelSettingInArray.hasOwnProperty("btn_spin_img")) {
    v55 = vGetWheelSettingInArray.btn_spin_img;
  }
  if (vGetWheelSettingInArray.hasOwnProperty("type")) {
    v60 = vGetWheelSettingInArray.type;
  }
  if (vGetWheelSettingInArray.hasOwnProperty("cover_img")) {
    v61 = vGetWheelSettingInArray.cover_img;
  }
  if (
    !rt ||
    (rt != b64DecodeUnicode("dm9uZ3F1YXltYXltYW4ubG9j") &&
      rt != b64DecodeUnicode("dm9uZ3F1YXltYXltYW4uY28="))
  ) {
    window.location.href = b64DecodeUnicode("dm9uZ3F1YXltYXltYW4uY28=");
  }
  var v70 = 600;
  var v71 = document.body.clientHeight;
  var v72 = document.body.clientWidth;
  if (v72 >= 1600) {
    v70 = 700;
  }
  if (v72 >= 2000) {
    v70 = 800;
  }
  if (v72 >= 3000) {
    v70 = 900;
  }
  el("wheel-container").innerHTML =
    '<div id="wheelOfFortune"><canvas id="wheel" width="' +
    v70 +
    '" height="' +
    v70 +
    '"></canvas><div id="spin">' +
    v54 +
    '</div><div id="instruction"><img src="' +
    ajax_object.theme_uri +
    '/assets/images/instruction.svg"></div></div>';
  var v73 = [
    {
      text: "",
      id: 0,
      color: "#ADB2B0",
    },
  ];
  if (v56 == 0) {
    el("sector_list").style.maxHeight = v70 - 150 + "px";
    if (v57.length) {
      v73 = v57;
      var v74 = vGetWheelSettingInArray.colors;
      for (var v75 = 0; v75 < v73.length; v75++) {
        v73[v75].color = v74[v75 % v74.length].value;
        v73[v75].weight = 1;
      }
    }
  } else {
    el("scrollarea").style.maxHeight = v70 - 200 + "px";
    if (v57.length) {
      v73 = v57;
    }
  }
  const vF3 = (p28, p29) => Math.random() * (p29 - p28) + p28;
  const v76 = v73.reduce((p30, p31) => p30 + p31.weight, 0);
  const v77 = v73.map((p32) => (p32.weight / v76) * 2 * Math.PI);
  const v78 = v73.length;
  const v79 = document.querySelector("#spin");
  const v80 = document.querySelector("#instruction");
  const v81 = v79.offsetWidth;
  const v82 = 30;
  const v83 = document.querySelector("#wheel").getContext("2d");
  const v84 = v83.canvas.width;
  const v85 = v84 / 2;
  const v86 = Math.PI;
  const v87 = v86 * 2;
  const v88 = v87 / v73.length;
  const v89 = v88 * v85;
  let v90 = 0;
  let v91 = 0;
  const vF4 = () => {
    let v92 = 0;
    for (let v93 = 0; v93 < v77.length; v93++) {
      v92 += v77[v93];
      if (Math.abs(v91) < v92) {
        return v93;
      }
    }
    return 0;
  };
  var v94 = 60;
  var v95 = "normal";
  var v96 = "sans-serif";
  var v97 = 0;
  var v98 = 0;
  var v99;
  var vV89 = v89;
  var v100 = 20;
  if (v67 == "yes") {
    v100 = 30;
  }
  v83.font = v95 + " " + v94 + "px " + v96;
  for (var v75 = 0; v75 < v73.length; v75++) {
    v73[v75].alias = v73[v75].text;
    if (v73[v75].text !== "") {
      v73[v75].alias = truncateByLength(v73[v75].text, 17);
      v99 = measureText(v73[v75].alias, v83.font);
      v98 = v99.height;
      v97 = v99.width;
      vV89 = v86 * 2 * (v85 - v97) * (v73[v75].weight / v76);
      while (v94 > 6 && (v98 > vV89 || v97 > v85 - v81 - v82 - v100)) {
        v94 -= 1;
        v83.font = v95 + " " + v94 + "px " + v96;
        v99 = measureText(v73[v75].alias, v83.font);
        v98 = v99.height;
        v97 = v99.width;
        vV89 = v86 * 2 * (v85 - v97) * (v73[v75].weight / v76);
      }
    }
  }
  async function f6(p33) {
    const v101 = p33.map((p34) => {
      if (p34.hasOwnProperty("image")) {
        return f7(p34.image);
      }
      return Promise.resolve(null);
    });
    const v102 = await Promise.all(v101);
    return v102;
  }
  function f7(p35) {
    return new Promise((p36, p37) => {
      const v103 = new Image();
      v103.onload = () => p36(v103);
      v103.onerror = (p38) => p37(p38);
      v103.crossOrigin = "Anonymous";
      v103.src = p35;
    });
  }
  async function f8(p39, p40, p41, p42) {
    v83.save();
    v83.beginPath();
    v83.fillStyle = p39.color;
    if (v60 == "image") {
      v83.fillStyle = "transparent";
    }
    v83.moveTo(v85, v85);
    v83.arc(v85, v85, v85, p40 - p41, p40);
    v83.lineTo(v85, v85);
    v83.fill();
    if (v59 == "yes") {
      v83.strokeStyle = "rgba(0,0,0,0.5)";
      v83.fillStyle = "rgba(0,0,0,0.5)";
      v83.lineWidth = 1;
      v83.stroke();
    }
    v83.translate(v85, v85);
    v83.rotate(p40 - p41 / 2);
    if (!p39.hasOwnProperty("image")) {
      v83.textAlign = "right";
      v83.textBaseline = "middle";
      v83.fillStyle = "#fff";
      if (v60 == "color") {
        if (isWhite(p39.color)) {
          v83.fillStyle = "#000";
        }
      }
      v83.fillText(p39.alias, v85 - v100, 0);
    } else {
      const v104 = p42.width / p42.height;
      let v105 = v86 * 2 * (v81 / 2) * (p39.weight / v76);
      let v106 = v85 - v81 / 2 - v100;
      let v107 = v105 * v104;
      let vV105 = v105;
      let v108 = v85 - v100 - v107;
      let v109 = -vV105 / 2;
      let v110 = v86 * 2 * v108 * (p39.weight / v76);
      if (v107 < v106) {
        while (v108 > v81 / 2 && vV105 < v110 && v107 < v106) {
          v107 += 1;
          vV105 = v107 / v104;
          v108 = v85 - v100 - v107;
          v109 = -vV105 / 2;
          v110 = v86 * 2 * v108 * (p39.weight / v76);
        }
      } else {
        while (v108 < v81 / 2 || vV105 > v110 || v107 > v106) {
          v107 -= 1;
          vV105 = v107 / v104;
          v108 = v85 - v100 - v107;
          v109 = -vV105 / 2;
          v110 = v86 * 2 * v108 * (p39.weight / v76);
        }
      }
      if (p39.text !== "") {
        v83.save();
        v83.globalAlpha = 0.6;
        v83.drawImage(p42, v108, v109, v107, vV105);
        v83.globalAlpha = 1;
        v83.textAlign = "right";
        v83.textBaseline = "middle";
        v83.fillStyle = "#fff";
        v83.lineWidth = 3;
        v83.strokeStyle = "black";
        if (v60 == "color") {
          if (isWhite(p39.color)) {
            v83.fillStyle = "#000";
            v83.strokeStyle = "white";
          }
        }
        v83.strokeText(p39.alias, v85 - v100, 0);
        v83.fillText(p39.alias, v85 - v100, 0);
        v83.restore();
      } else {
        v83.drawImage(p42, v108, v109, v107, vV105);
      }
    }
    v83.restore();
  }
  function f9() {
    const v111 = 15;
    const v112 = v111 / 2;
    v83.save();
    v83.beginPath();
    const v113 = v83.createLinearGradient(0, 0, 0, v83.canvas.height);
    const vV68 = v68;
    const vNewShade = newShade(vV68, 20);
    v113.addColorStop(0, vV68);
    v113.addColorStop(1, vNewShade);
    v83.strokeStyle = v113;
    v83.lineWidth = v111;
    v83.arc(v85, v85, v85 - v112, 0, v87);
    v83.stroke();
    let v114 = 0;
    for (let v115 = 0; v115 < v73.length; v115++) {
      v114 -= v77[v115];
      const v116 = v85 + (v85 - v112) * Math.cos(v114 + v77[v115] / 2);
      const v117 = v85 + (v85 - v112) * Math.sin(v114 + v77[v115] / 2);
      const v118 = v69.replace("#", "");
      const vParseInt = parseInt(v118.substring(0, 2), 16);
      const vParseInt2 = parseInt(v118.substring(2, 4), 16);
      const vParseInt3 = parseInt(v118.substring(4, 6), 16);
      const v119 = v83.createRadialGradient(v116, v117, 0, v116, v117, 10);
      v119.addColorStop(
        0,
        "rgba(" + vParseInt + ", " + vParseInt2 + ", " + vParseInt3 + ", 1)"
      );
      v119.addColorStop(
        0.5,
        "rgba(" + vParseInt + ", " + vParseInt2 + ", " + vParseInt3 + ", 0.5)"
      );
      v119.addColorStop(
        1,
        "rgba(" + vParseInt + ", " + vParseInt2 + ", " + vParseInt3 + ", 0)"
      );
      v83.beginPath();
      v83.arc(v116, v117, 10, 0, v87);
      v83.fillStyle = v119;
      v83.fill();
    }
    v83.restore();
  }
  function f10() {
    const v120 = v73[vF4()];
    v83.canvas.style.transform = "rotate(" + (v91 - v86 / 2) + "rad)";
    if (v60 == "image") {
      v79.style.backgroundColor = "#ADB2B0";
      v79.style.color = "#fff";
    } else {
      v79.style.backgroundColor = v120.color;
      v79.style.color = "#fff";
      if (isWhite(v120.color)) {
        v79.style.color = "#000";
      }
    }
    if (v55 !== "") {
      v79.style.backgroundImage = "url(" + v55 + ")";
    }
  }
  function f11() {
    if (!v90) {
      return;
    }
    v90 *= v58;
    if (v90 < 0.002) {
      v90 = 0;
      const v121 = v73[vF4()];
      if (el("wheel_result")) {
        var v122 = "";
        if (v121.hasOwnProperty("image")) {
          v122 = '<div><img src="' + v121.image + '" > ' + v121.text + "</div>";
        } else {
          v122 = "<div>" + v121.text + "</div>";
        }
        el("wheel_result").innerHTML = v122 + el("wheel_result").innerHTML;
        var vGetSectorItem = getSectorItem(el("wheel_result").innerHTML);
        el("result_count").textContent = vGetSectorItem.length;
      }
      if (v51 == "yes") {
        var v123 = v121.color;
        if (isWhite(v123)) {
          v123 = "#000000";
        }
        var v124 =
          '<span class="d-flex"><span class="me-1" style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="clipboard"></span> ';
        if (v121.hasOwnProperty("message")) {
          if (v121.message !== "") {
            v124 += v121.message;
          } else {
            v124 += v52;
          }
        } else {
          v124 += v52;
        }
        v124 += "</span>";
        var v125 = "";
        var v126 = v121.hasOwnProperty("image");
        if (v126) {
          v125 +=
            '<div class="position-absolute top-0 end-0 text-end"><button class="btn btn-sm fs-6 text-muted" onClick="rotateImage(\'rsImage\', -90)" title="Xoay ảnh">Xoay ↺</button><div class="form-check text-muted fs-6 me-2"><input class="form-check-input ms-0" type="checkbox" id="btn-show-bg" title="Bật tắt màu nền cho ảnh" checked onClick="if(this.checked==true) el(\'rsImage\').style.backgroundColor=\'' +
            v121.color +
            '\';else el(\'rsImage\').style.backgroundColor=\'\';" ></div></div><div class="text-center mb-3"><img id="rsImage" src="' +
            v121.image +
            '" class="rounded-1" style="max-width:100%;transition: transform 0.5s ease;background-color:' +
            v121.color +
            ';" ></div>';
        }
        if (v121.text !== "") {
          if (!v126) {
            v125 +=
              '<div class="fs-1 text-center mb-3" style="color:' +
              v123 +
              '"><span style="width: 50px;height:50px;" data-feather="smile"></span></div>';
          }
          v125 +=
            '<div class="text-center fs-1" style="color:' +
            v123 +
            '; word-break: break-all;">' +
            v121.text +
            "</div>";
        }
        var v127 = "";
        if (v53 == "yes") {
          v127 +=
            '<button type="button" onclick="removeWheelItem(' +
            v121.id +
            "," +
            v56 +
            ')" class="btn btn-danger" data-bs-dismiss="modal">Xóa ô này</button>';
        }
        v127 +=
          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng lại</button>';
        el("modal-title").innerHTML = v124;
        el("modal-body").innerHTML = v125;
        el("modal-footer").innerHTML = v127;
        el("modal-footer").classList.add("justify-content-center");
        feather.replace();
        var v128 = new bootstrap.Modal(el("myModal"), {
          backdrop: true,
        });
        v128.show();
      }
      var v129 = "";
      if (v49 === "random") {
        var v130 = Object.keys(end_sound_option);
        v130 = shuffle(v130);
        v129 = v130[0];
      } else if (v49 === "read") {
        triggerAudio("", "stop");
        if (v121.text !== "") {
          textToSpeech(v52 + ": " + v121.text, "vi-VN");
        }
      } else if (v49 !== 0 && v49 !== "random" && v49 !== "read") {
        v129 = v49;
      }
      if (v121.hasOwnProperty("sound")) {
        if (v121.sound !== "") {
          v129 = v121.sound;
        }
      }
      if (v129) {
        triggerAudio(v129, "play");
      }
      if (v50 == "yes") {
        confetti.start(1200, 50, 150);
      }
      toggleDisabledAll(false);
    }
    v91 += v90;
    v91 %= v87;
    f10();
  }
  function f12() {
    f11();
    requestAnimationFrame(f12);
  }
  v79.addEventListener("click", () => {
    clearInterval(vSetInterval);
    if (v80) {
      v80.classList.add("d-none");
    }
    var v131 = "";
    if (v48 == "random") {
      var v132 = Object.keys(start_sound_option);
      v132 = shuffle(v132);
      v131 = v132[0];
    } else if (v48 != 0 && v48 != "random") {
      v131 = v48;
    }
    if (v131 != "") {
      triggerAudio(v131, "play");
    }
    toggleDisabledAll(true);
    if (!v90) {
      v90 = vF3(0.25, 0.35);
    }
  });
  const v133 = await f6(v73);
  if (v60 == "image" && v61) {
    const v134 = new Image();
    v134.src = v61;
    v134.onload = () => {
      v83.drawImage(v134, 0, 0, v83.canvas.width, v83.canvas.height);
      let v135 = 0;
      for (let v136 = 0; v136 < v73.length; v136++) {
        f8(v73[v136], v135, v77[v136], v133[v136]);
        v135 -= v77[v136];
      }
    };
  } else {
    let v137 = 0;
    for (let v138 = 0; v138 < v73.length; v138++) {
      f8(v73[v138], v137, v77[v138], v133[v138]);
      v137 -= v77[v138];
    }
  }
  if (v67 == "yes") {
    f9();
  }
  f10();
  f12();
  let vSetInterval = setInterval(() => {
    v91 += 0.004;
    f10();
  }, 30);
  v80.addEventListener("click", function () {
    v79.click();
  });
}
function fillWheelContent(p43) {
  var v139 = 0;
  if (el("is_advance").checked) {
    v139 = 1;
  }
  var vGetCurrentStyleColor = getCurrentStyleColor();
  if (p43.length) {
    var v140 = [];
    for (var v141 = p43.length - 1; v141 >= 0; v141--) {
      v140.push({
        text: p43[v141],
        id: v141,
        color: vGetCurrentStyleColor[v141 % vGetCurrentStyleColor.length],
      });
    }
    fillEntries(v140, v139);
    loadWheel();
  }
}
function sortWheel(p44) {
  var vGetWheelSettingInArray2 = getWheelSettingInArray();
  if (vGetWheelSettingInArray2) {
    var v142 = vGetWheelSettingInArray2.entries;
    if (v142.length) {
      switch (p44) {
        case "random":
          v142.sort(() => Math.random() - 0.5);
          break;
        case "az":
          v142.sort(function (p45, p46) {
            if (p45.text < p46.text) {
              return -1;
            }
            if (p45.text > p46.text) {
              return 1;
            }
            return 0;
          });
          break;
        case "za":
          v142.sort(function (p47, p48) {
            if (p47.text > p48.text) {
              return -1;
            }
            if (p47.text < p48.text) {
              return 1;
            }
            return 0;
          });
          break;
      }
      for (var v143 = v142.length - 1; v143 >= 0; v143--) {
        v142[v143].id = v143;
      }
      fillEntries(v142, vGetWheelSettingInArray2.is_advance);
      setTimeout(loadWheel(), 500);
    }
  }
}
function upDown(p49, p50) {
  var vGetWheelSettingInArray3 = getWheelSettingInArray();
  if (vGetWheelSettingInArray3) {
    var v144 = vGetWheelSettingInArray3.entries;
    if (v144.length) {
      if (p50 == "up") {
        var vP49 = p49;
        var v145 = p49 - 1;
      } else {
        var vP49 = p49;
        var v145 = p49 + 1;
      }
      v144 = swapArrayElement(v144, vP49, v145);
      for (var v146 = v144.length - 1; v146 >= 0; v146--) {
        v144[v146].id = v146;
      }
      fillEntries(v144, 1);
      setTimeout(loadWheel(), 500);
    }
  }
}
function removeWheelItem(p51, p52) {
  var vGetWheelSettingInArray4 = getWheelSettingInArray();
  if (vGetWheelSettingInArray4 !== null) {
    var v147 = vGetWheelSettingInArray4.entries;
    v147 = v147.filter((p53) => p53.id !== p51);
    vGetWheelSettingInArray4.entries = v147;
    if (v147.length) {
      for (var v148 = v147.length - 1; v148 >= 0; v148--) {
        v147[v148].id = v148;
      }
    }
    setWheelSettingFromArray(vGetWheelSettingInArray4);
    fillEntries(v147, p52);
    setTimeout(function () {
      loadWheel();
    }, 500);
    console.log("Đã xoá " + p51);
  }
}
function removeItemImage(p54) {
  var vGetWheelSettingInArray5 = getWheelSettingInArray();
  if (vGetWheelSettingInArray5 !== null) {
    var v149 = vGetWheelSettingInArray5.entries;
    if (v149.length) {
      for (var v150 = v149.length - 1; v150 >= 0; v150--) {
        if (v149[v150].id == p54) {
          delete v149[v150].image;
        }
      }
    }
    vGetWheelSettingInArray5.entries = v149;
    setWheelSettingFromArray(vGetWheelSettingInArray5);
    fillEntries(v149, 1);
    setTimeout(loadWheel(), 500);
    console.log("Đã xoá ảnh " + p54);
  }
}
function beforeCreateLinkForm() {
  var v151 = 0;
  var v152 = [];
  var v153 = el("linkData").textContent;
  if (v153) {
    v152 = JSON.parse(v153);
    if (v152) {
      v151 = v152.link_id;
    }
  }
  if (v151 > 0) {
    createLinkForm();
  } else {
    var v154 =
      '<div class="mb-3"> <strong>Link chia sẻ</strong> là một liên kết tới vòng quay hiện tại bao gồm tên, màu sắc, âm thanh và các cài đặt hiện tại.</div>';
    v154 +=
      '<div class="mb-3"><strong>Ví dụ:</strong> <a href="' +
      ajax_object.home_url +
      '/c:35A4E901" target="_blank">' +
      ajax_object.home_url +
      "/c:35A4E901</a></div>";
    v154 +=
      '<div class="mb-3">Việc tạo liên kết này sẽ giúp bạn dễ dàng chia sẻ vòng quay của mình tới bất kì ai qua tin nhắn, email, nhúng lên website, đăng mạng xã hội, v.v.</div>';
    var v155 =
      '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="share-2"></span> Chia sẻ';
    var v156 =
      '<button class="btn btn-primary" data-bs-dismiss="modal" onclick="createLinkForm();" ><span data-feather="plus"></span> Tạo link chia sẻ ngay</button>';
    el("modal-body").innerHTML = v154;
    el("modal-title").innerHTML = v155;
    el("modal-footer").innerHTML = v156;
    el("modal-dialog").classList.remove("modal-lg");
    feather.replace();
    var v157 = new bootstrap.Modal(el("myModal"), {
      backdrop: true,
    });
    v157.show();
  }
}
function loginForm() {
  var v158 = "";
  v158 +=
    '<p class="alert alert-warning">Để thực hiện tính năng này, bạn cần phải đăng nhập:</p>';
  v158 +=
    '<p class="text-center"><button type="button" onclick="location.href=\'' +
    ajax_object.home_url +
    "/wp-login.php?redirect_to=" +
    window.location.href +
    '\'" class="btn btn-primary w-50">Đăng nhập</button> </p><p class="text-center text-muted">(10 ngày không quảng cáo và nhiều tính năng nâng cao)</p><p class="text-center text-muted">hoặc <a class="text-primary text-decoration-none" href="' +
    ajax_object.home_url +
    '/wp-login.php?action=register">Đăng ký</a></p>';
  el("modal-title").innerHTML =
    '<span data-feather="log-in" style="width:24px;heigh:24px;"></span> Đăng nhập';
  el("modal-footer").innerHTML =
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bỏ qua</button>';
  el("modal-body").innerHTML = v158;
  feather.replace();
  var v159 = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  v159.show();
}
function profileForm() {
  if (!isLoggedIn()) {
    loginForm();
    return false;
  }
  var v160 = "";
  v160 +=
    '<div class="mb-3"><strong>Thông tin tài khoản (ID: <span id="userid"></span>)</strong></div>';
  v160 +=
    '<div class="input-group mb-3"><span class="input-group-text">Tên đăng nhập</span><input type="text" class="form-control" placeholder="Tên đăng nhập" id="username" value="loading..." readonly ><button class="btn btn-secondary" onclick="el(\'username\').removeAttribute(\'readonly\');"><span data-feather="edit"></span></button></div>';
  v160 +=
    '<div class="input-group mb-3"><span class="input-group-text">Tên hiển thị</span><input type="text" class="form-control" placeholder="Tên hiển thị" id="displayname" value="loading..." ></div>';
  v160 +=
    '<div class="input-group mb-3"><span class="input-group-text">Email</span><input type="text" class="form-control" placeholder="hoten@gmail.com" id="useremail" value="loading..." ></div>';
  v160 +=
    '<div class="input-group mb-3"><span class="input-group-text">Mật khẩu</span><input type="password" class="form-control" placeholder="Bỏ trống nếu không thay đổi" id="userpassword" ></div>';
  v160 +=
    '<div class="text-end"><button type="button" class="btn btn-primary" id="btn-update-profile" onclick="updateProfile();" disabled>Cập nhật</button></div>';
  v160 += '<div class="mb-3"><strong>Thông tin khác:</strong><hr></div>';
  v160 +=
    '<div class="input-group mb-3"><span class="input-group-text">Tài khoản PRO</span><input type="text" class="form-control" id="tatQC" value="loading.." readonly ><button class="btn btn-secondary" onclick="location.href=\'/tat-quang-cao\';">Gia hạn</button></div>';
  v160 +=
    '<div class="input-group mb-3"><span class="input-group-text">Giới thiệu &nbsp;<span data-feather="user-plus" style="width:16px;height:16px;"></span></span><input type="text" class="form-control bg-white" onclick="this.select();" id="reflink" value="loading.." readonly ><button class="btn btn-outline-primary" id="btn-copy-reflink" onclick="copyToClipBoard(el(\'reflink\').value);alert(\'Đã copy\');" disabled>Sao chép</button></div><p>Bạn đã giới thiệu: <span class="badge bg-secondary" id="refcount">0</span> người</p> <p class="alert alert-warning small px-2">(Giới thiệu <strong>01 người</strong> = <strong>+20 ngày</strong> tài khoản PRO cho cả hai)</p>';
  v160 +=
    '<div class="input-group mb-3"><span class="input-group-text">Coupon</span><input type="text" maxlength="6" class="form-control" id="coupon" value="" placeholder="Nhập mã coupon" ><button class="btn btn-success" id="btnApplyCoupon" onClick="applyCoupon();" >Áp dụng</button> </div>';
  el("modal-title").innerHTML =
    '<span data-feather="user" style="width:24px;heigh:24px;"></span> Hồ sơ';
  el("modal-footer").innerHTML = "";
  el("modal-body").innerHTML = v160;
  var v161 = new XMLHttpRequest();
  v161.open("POST", ajax_object.ajax_url + "?action=profileForm");
  v161.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  v161.onload = function () {
    if (v161.status === 200) {
      if (v161.responseText) {
        var v162 = JSON.parse(v161.responseText);
        if (v162) {
          el("username").value = v162.username;
          el("userid").textContent = v162.userid;
          el("displayname").value = v162.displayname;
          el("useremail").value = v162.useremail;
          el("tatQC").value = v162.tatQC;
          el("reflink").value = v162.reflink.replace("&#038;", "&");
          el("refcount").textContent = v162.refcount;
          el("btn-update-profile").removeAttribute("disabled");
          el("btn-copy-reflink").removeAttribute("disabled");
        }
      }
    } else if (v161.status !== 200) {
      console.log("error:" + v161.status);
    }
  };
  v161.send("&ajaxsecurity=" + ajax_object.ajax_nonce);
  feather.replace();
  var v163 = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  v163.show();
}
function updateProfile() {
  if (!isLoggedIn()) {
    return false;
  }
  var v164 = el("displayname").value.trim();
  var v165 = el("username").value.trim();
  var v166 = el("useremail").value.trim();
  var v167 = el("userpassword").value.trim();
  const v168 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (v168.test(v164)) {
    alert("Tên hiển thị không gồm các kí tự đặc biệt");
    el("displayname").focus();
    return false;
  }
  if (v164.length < 3) {
    alert("Tên hiển thị phải có ít nhất 3 ký tự");
    el("displayname").focus();
    return false;
  }
  if (!isEmail(v166)) {
    alert("Email không đúng định dạng");
    el("useremail").focus();
    return false;
  }
  el("btn-update-profile").textContent = "Cập nhật...";
  el("btn-update-profile").setAttribute("disabled", "disabled");
  var v169 = new XMLHttpRequest();
  v169.open("POST", ajax_object.ajax_url + "?action=updateProfile");
  v169.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  v169.onload = function () {
    if (v169.status === 200) {
      if (v169.responseText == "success") {
        alert("Đã cập nhật thành công!");
        location.reload();
      } else {
        alert(v169.responseText);
      }
      el("btn-update-profile").textContent = "Cập nhật";
      el("btn-update-profile").removeAttribute("disabled");
    } else if (v169.status !== 200) {
      console.log("error:" + v169.status);
    }
  };
  v169.send(
    "&displayname=" +
      v164 +
      "&username=" +
      v165 +
      "&useremail=" +
      v166 +
      "&userpassword=" +
      v167 +
      "&ajaxsecurity=" +
      ajax_object.ajax_nonce
  );
}
function applyCoupon() {
  var v170 = el("coupon").value.trim();
  if (v170) {
    el("btnApplyCoupon").textContent = "Kiểm tra...";
    el("btnApplyCoupon").disabled = true;
    var v171 = new XMLHttpRequest();
    v171.open("POST", ajax_object.ajax_url);
    v171.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    v171.onload = function () {
      if (v171.status === 200) {
        if (v171.responseText) {
          var v172 = v171.responseText.split("|");
          if (v172[0] == "success") {
            alert(v172[1]);
            closeAllModal();
            profileForm();
          } else {
            alert(v172[1]);
            el("btnApplyCoupon").textContent = "Áp dụng";
            el("btnApplyCoupon").disabled = false;
          }
        }
      } else {
        console.log("Lỗi:" + v171.status);
        el("btnApplyCoupon").disabled = false;
      }
    };
    v171.send(
      "action=applyCoupon&code=" +
        v170 +
        "&ajaxsecurity=" +
        ajax_object.ajax_nonce
    );
  } else {
    alert("Hãy nhập mã Coupon mà bạn có");
    el("coupon").focus();
  }
}
function createLinkForm() {
  var v173 = "";
  var v174 = ajax_object.home_url;
  if (isLoggedIn()) {
    var v175 = 1;
    var v176 = 0;
    var v177 = "yes";
    var v178 = 0;
    var v179 = "";
    var v180 = 0;
    var v181 = "";
    var v182 = 0;
    var v183 = 1;
    var v184 = 1;
    var v185 = "";
    var v186 = "";
    var v187 = "";
    var v188 = "";
    var v189 = "";
    var v190 = "checked";
    var v191 = "";
    var v192 = "";
    var v193 = "";
    var v194 = [];
    var v195 = el("linkData").textContent;
    if (v195) {
      v194 = JSON.parse(v195);
      if (v194) {
        v175 = v194.visibility;
        v176 = v194.show_title;
        v177 = v194.show_tripod;
        v178 = v194.max_spin;
        v179 = v194.link_logo;
        v180 = v194.logo_white;
        v181 = v194.lead_email;
        v182 = v194.is_show_lead_form;
        v183 = v194.frm_phone;
        v184 = v194.frm_email;
        v185 = v194.css_bosung;
        v186 = v194.endtime;
      }
    }
    if (v176 == 1) {
      v192 = "checked";
    }
    if (v177 == "yes") {
      v193 = "checked";
    }
    if (v175 == 0) {
      v189 = "checked";
      v190 = "";
      v191 = "";
    } else if (v175 == 1) {
      v189 = "";
      v190 = "checked";
      v191 = "";
    } else if (v175 == 2) {
      v189 = "";
      v190 = "";
      v191 = "checked";
    }
    if (v182 == 1) {
      v187 = "checked";
    }
    if (v180 == 1) {
      v188 = "checked";
    }
    var v196 = 0;
    if (parseInt(v178) > 0) {
      v196 = parseInt(v178);
    }
    el("modal-title").innerHTML =
      '<span data-feather="share-2" style="width:24px;heigh:24px;"></span> Chia sẻ';
    v173 += '<div id="stage-1">';
    v173 +=
      '<div class="input-group"><span class="input-group-text">Tiêu đề:</span><input type="text" class="form-control" id="wheel-title" data-maxlength="60" data-display-id="remain-length" placeholder="Nhập tiêu đề vòng quay"></div><div id="remain-length" class="mb-3" style="font-size:12px;color:gray;margin-top:5px;margin-left:85px;"></div>';
    v173 +=
      '<div class="form-check mb-1"><input class="form-check-input" type="checkbox" id="show_title"' +
      v192 +
      ' ><label class="form-check-label" for="show_title">Hiển thị tiêu đề khi xem liên kết</label></div>';
    v173 +=
      '<div class="form-check mb-3"><input class="form-check-input" type="checkbox" id="show_tripod"' +
      v193 +
      ' ><label class="form-check-label" for="show_tripod">Hiển thị giá đỡ <img src="' +
      ajax_object.theme_uri +
      '/assets/icons/tripod.png" alt="tripod" ></label></div>';
    v173 += '<div class="mb-3">Hiển thị:</div>';
    v173 +=
      '<div class="form-check"><input class="form-check-input" type="radio" name="visibility" id="visibility-1" value="0" ' +
      v189 +
      ' ><label class="form-check-label" for="visibility-1">Bất kì ai có link đều có thể xem</label></div>';
    v173 +=
      '<div class="form-check"><input class="form-check-input" type="radio" name="visibility" id="visibility-2" value="1" ' +
      v190 +
      '><label class="form-check-label" for="visibility-2">Hiển thị công khai tại <a href="' +
      ajax_object.home_url +
      '/gallery/" target="_blank" title="Bộ sưu tập do người dùng tạo">Bộ sưu tập</a></label></div>';
    var v197 = "disabled";
    if (ajax_object.isAdmin == 1) {
      v197 = "";
    }
    v173 +=
      '<div class="form-check mb-3"><input class="form-check-input" type="radio" name="visibility" id="visibility-3" value="2" ' +
      v191 +
      " " +
      v197 +
      '><label class="form-check-label" for="visibility-3">Công khai (Google có thể lập chỉ mục)</label></div>';
    v173 +=
      '\n            <div class="input-group mb-2">\n              <span class="input-group-text">Hết hạn</span>\n              <input type="text" id="endtime" class="form-control bg-white" autocomplete="off" placeholder="dd/mm/yyyy hh:mm:ss" >\n              <button class="btn btn-secondary" title="Xoá" onclick="el(\'endtime\').value=\'\';">✗</span>\n            </div>\n            <div class="small text-muted mb-3">↪ ko quay được sau ngày này, bỏ trống nếu ko dùng</div>\n            ';
    v173 +=
      '<div class="mb-3"><a class="text-decoration-none text-primary" data-bs-toggle="collapse" href="#collapseNC" role="button" aria-expanded="true" aria-controls="collapseNC">Nâng cao <span data-feather="chevron-down"></span> </a></div>';
    v173 += '<div class="collapse hide" id="collapseNC">';
    v173 +=
      '<div class="d-flex mb-1">Người xem được quay tối đa&nbsp; <a href="javascript:void(0);" title="Người xem là người không tạo ra liên kết này hoặc người tạo ra liên kết nhưng không đăng nhập"><span data-feather="info" style="width:16px;height:16px;"></span></a>  <input type="number" size="5" min="0" value="' +
      v196 +
      '" id="max_spin" class="form-controle mx-1" style="width:50px;" > <span>lần</span></div>';
    v173 += '<div class="mb-3 text-muted" small>* (0 = không giới hạn;)</div>';
    v173 +=
      '<div class="input-group mb-1"><span class="input-group-text">Logo</span><input type="text" class="form-control" id="link_logo" placeholder="https://example.com/logo.png" value="' +
      v179 +
      '"><span class="input-group-text"><label for="upload_logo" data-bs-toggle="tooltip" title="Max width: 200 (px)"><span data-feather="camera"></span></label></span><input type="file" id="upload_logo" data-maxsize="5" class="d-none" accept="image/*" onchange="uploadLinkLogo();" ></div><div class="mb-3 text-muted small">* Max width: 200px</div>';
    v173 +=
      '<div class="form-check form-switch mb-3"><input class="form-check-input" type="checkbox" role="switch" value="' +
      v180 +
      '" onclick="if(this.checked) this.value=1;else this.value=0; " ' +
      v188 +
      ' id="logo_white"><label class="form-check-label" for="logo_white">Đổi màu logo ⇢ màu trắng</label></div>';
    v173 +=
      '<div class="form-check mb-1"><input class="form-check-input" type="checkbox" value="' +
      v182 +
      '" ' +
      v187 +
      ' onclick="checkLeadForm();" id="is_show_lead_form"><label class="form-check-label" for="is_show_lead_form">Form thu thập thông tin K/H <sup class="text-danger">ᴾᴿᴼ</sup></label></div>';
    v173 +=
      '<div class="text-muted small mb-1">* Hiển thị form yêu cầu khách nhập thông tin để nhận thưởng. </div>';
    var v198 = "d-none";
    if (v187 == "checked") {
      v198 = "";
    }
    var v199 = "checked";
    var v200 = "checked";
    if (v183 != 1) {
      v199 = "";
    }
    if (v184 != 1) {
      v200 = "";
    }
    v173 +=
      '<div class="' +
      v198 +
      '" id="frm_option">➥ Gồm: <div class="form-check form-check-inline">\n                <input class="form-check-input" id="frm_name" type="checkbox" checked disabled>\n                <label class="form-check-label" for="frm_name">Họ tên</label>\n              </div>\n              <div class="form-check form-check-inline">\n                <input class="form-check-input frm-option" type="checkbox" id="frm_phone" ' +
      v199 +
      '>\n                <label class="form-check-label" for="frm_phone">Điện thoại</label>\n              </div>\n              <div class="form-check form-check-inline">\n                <input class="form-check-input frm-option" type="checkbox" id="frm_email" ' +
      v200 +
      '>\n                <label class="form-check-label" for="frm_email">Email</label>\n              </div>\n              </div>';
    v173 += '<div class="mt-3 mb-1">Nhận thông tin K/H qua</div>';
    v173 +=
      '<div class="input-group mb-3" id="lead_email_container"><span class="input-group-text">Email nhận</span><input type="text" class="form-control" id="lead_email" disabled placeholder="yourname@gmail.com" value="' +
      v181 +
      '"></div>';
    v173 +=
      '<div class="form-label mb-1">CSS bổ sung</div>\n                <div class="editor mb-3">\n                  <div class="numbers"><span></span></div>\n                  <textarea class="w-100" id="css_bosung" rows="2" placeholder="#div_bosung{}">' +
      v185 +
      "</textarea>\n                </div>";
    v173 += "</div>";
    v173 +=
      '<div class="mb-3"><button class="btn btn-primary" id="btn-view-shared" data-bs-dismiss="modal" onclick="viewSharedLink();"><span data-feather="trello"></span> Xem các liên kết đã tạo</button></div>';
    v173 += "</div>";
    v173 +=
      '<div id="stage-2" class="d-none"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div> Đang tạo link...</div>';
    v173 += '<div id="stage-3" class="d-none">';
    v173 +=
      '<div class="mb-3">Link đến vòng quay với tên và cài đặt hiện tại</div>';
    v173 +=
      '<div class="input-group mb-3"><input type="text" class="form-control" id="your-link" placeholder="Link của bạn" readonly><button class="btn btn-secondary" id="btn-preview" >Xem thử</button><button class="btn btn-success" id="btn-copy-link" onclick="copyLink();" >Sao chép</button></div>';
    v173 += '<div id="your-embed"></div>';
    v173 += "</div>";
    el("modal-body").innerHTML = v173;
    el("modal-footer").innerHTML =
      '<button type="button" class="btn btn-primary" id="btn-create-link" onclick="createLink();" >Tiếp tục <span data-feather="chevrons-right"></span> </button>';
    if (el("vqmm-title")) {
      el("wheel-title").value = el("vqmm-title").textContent;
    }
    feather.replace();
    var v201 = new bootstrap.Modal(el("myModal"), {
      backdrop: true,
    });
    v201.show();
    if (v182 == 1) {
      el("lead_email").removeAttribute("disabled");
    }
    const v202 = document.querySelector(".editor textarea");
    const v203 = document.querySelector(".editor .numbers");
    v202.addEventListener("keyup", (p55) => {
      const v204 = p55.target.value.split("\n").length;
      v203.innerHTML = Array(v204).fill("<span></span>").join("");
    });
    v202.addEventListener("keydown", (p56) => {
      if (p56.key === "Tab") {
        const v205 = v202.selectionStart;
        const v206 = v202.selectionEnd;
        v202.value =
          v202.value.substring(0, v205) + "\t" + v202.value.substring(v206);
        p56.preventDefault();
      }
    });
    startLimitCharacters();
    loadFlatpickr(function () {
      flatpickr("#endtime", {
        enableTime: true,
        dateFormat: "d/m/Y H:i:S",
        time_24hr: true,
        defaultDate: v186,
        allowInput: true,
        disableMobile: true,
      });
    });
  } else {
    loginForm();
  }
}
function createLink() {
  var v207 = el("base_url").value;
  var v208 = el("wheel-title").value.trim();
  var v209 = el("endtime").value;
  var v210 = el("css_bosung").value;
  var v211 = "";
  if (v208 == "") {
    alert("Vui lòng nhập tiêu đề vòng quay");
    el("wheel-title").focus();
    return false;
  }
  if (checkBadWords(v208)) {
    alert("Hãy là người văn minh, dùng từ ngữ lịch sự");
    el("wheel-title").focus();
    return false;
  }
  if (ajax_object.isAdmin != 1) {
    if (
      v208 != "" &&
      (loc_xoa_dau(v208).toLowerCase() == "vong quay may man" ||
        loc_xoa_dau(v208).toLowerCase() == "chon ten ngau nhien" ||
        loc_xoa_dau(v208).toLowerCase() == "vong quay random")
    ) {
      alert(
        'Hãy chọn tiêu đề khác\n - "Vòng quay may mắn"\n - "Chọn tên ngẫu nhiên"\n - "Vòng quay random"\n'
      );
      el("wheel-title").focus();
      return false;
    }
  }
  if (checkAlphabet(v208, 3) == false) {
    alert("Tiêu đề phải có ít nhất 3 chữ cái");
    el("wheel-title").focus();
    return false;
  }
  var v212 = /\b[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
  if (v212.test(v208)) {
    v208 = v208.replace(v212, "").trim();
  }
  if (el("vqmm-desc")) {
    v211 = el("vqmm-desc").textContent;
  }
  var v213 = 0;
  var v214 = document.getElementsByName("visibility");
  for (var v215 = 0, v216 = v214.length; v215 < v216; v215++) {
    if (v214[v215].checked) {
      v213 = v214[v215].value;
      break;
    }
  }
  var v217 = 0;
  if (el("show_title").checked) {
    v217 = 1;
  }
  var v218 = "no";
  if (el("show_tripod").checked) {
    v218 = "yes";
  }
  if (v210 != "") {
    if (!validateCSS(v210)) {
      alert("CSS không hợp lệ, hãy kiểm tra lại hoặc xoá đi.");
      el("css_bosung").focus();
      v210 = "";
      return false;
    }
  }
  var v219 = 0;
  var v220 = el("max_spin").value;
  var v221 = 0;
  var v222 = el("link_logo").value;
  var v223 = el("logo_white").value;
  var v224 = el("is_show_lead_form").value;
  var v225 = 0;
  var v226 = 0;
  var v227 = el("lead_email").value;
  var v228 = [];
  var v229 = el("linkData").textContent;
  if (v229) {
    v228 = JSON.parse(v229);
    v221 = v228.link_id;
  }
  if (el("is_advance").checked) {
    v219 = 1;
  }
  if (v224 == 1) {
    if (v220 == 0) {
      alert("Thu thập thông tin K/H thì (số lần quay tối đa phải > 0)");
      el("max_spin").focus();
      return false;
    }
    if (!isEmail(v227)) {
      alert("Thu thập thông tin K/H thì phải nhập Email nhận");
      el("lead_email").focus();
      return false;
    }
  }
  if (el("frm_phone").checked == true) {
    v225 = 1;
  }
  if (el("frm_email").checked == true) {
    v226 = 1;
  }
  el("stage-1").classList.add("d-none");
  el("stage-2").classList.remove("d-none");
  el("modal-footer").innerHTML =
    '<button class="btn btn-primary" id="btn-view-shared" data-bs-dismiss="modal" onclick="viewSharedLink();"><span data-feather="trello"></span> Xem liên kết đã tạo</button>';
  feather.replace();
  var vGetWheelSettingInArray6 = getWheelSettingInArray();
  if (vGetWheelSettingInArray6) {
    var vVGetWheelSettingInArray6 = vGetWheelSettingInArray6;
    vVGetWheelSettingInArray6.is_advance = v219;
    vVGetWheelSettingInArray6.max_spin = v220;
    vVGetWheelSettingInArray6.link_logo = v222;
    vVGetWheelSettingInArray6.logo_white = v223;
    vVGetWheelSettingInArray6.is_show_lead_form = v224;
    vVGetWheelSettingInArray6.frm_phone = v225;
    vVGetWheelSettingInArray6.frm_email = v226;
    vVGetWheelSettingInArray6.lead_email = v227;
    vVGetWheelSettingInArray6.title = v208;
    vVGetWheelSettingInArray6.show_tripod = v218;
    vVGetWheelSettingInArray6.endtime = v209;
    if (v210 != "") {
      vVGetWheelSettingInArray6.css_bosung = v210;
    }
    var v230 = {
      title: v208,
      show_title: v217,
      visibility: v213,
      settings: vVGetWheelSettingInArray6,
      link_id: v221,
    };
    var v231 = new XMLHttpRequest();
    v231.open("POST", ajax_object.ajax_url + "?action=createLink");
    v231.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    v231.onload = function () {
      if (v231.status === 200) {
        var v232 = v231.responseText.split("|");
        el("your-link").value = v232[0];
        el("btn-preview").addEventListener("click", function () {
          window.open(v232[0], "_blank").focus();
        });
        var v233 =
          '<ul class="nav nav-tabs" id="shareFormTab" role="tablist"> <li class="nav-item" role="presentation"> <button class="nav-link active" id="embed-tab" data-bs-toggle="tab" data-bs-target="#embed-tab-pane" type="button" role="tab" aria-controls="embed-tab-pane" aria-selected="true">Mã nhúng</button> </li> <li class="nav-item" role="presentation"> <button class="nav-link" id="popup-tab" data-bs-toggle="tab" data-bs-target="#popup-tab-pane" type="button" role="tab" aria-controls="popup-tab-pane" aria-selected="false"><span class="text-success">Nhúng Popup</span><sup class="text-danger">*</sup></button> </li></ul>';
        v233 += '<div class="tab-content" id="myTabContent">';
        v233 +=
          '<div class="tab-pane py-4 fade show active" id="embed-tab-pane" role="tabpanel" aria-labelledby="embed-tab" tabindex="0">';
        v233 +=
          '<div class="mb-1 fw-bold">Mã nhúng <sup><a class="text-danger small" href="' +
          ajax_object.home_url +
          '/huong-dan-nhung-vong-quay-may-man-len-website/" target="_blank" title="Xem hướng dẫn">hướng dẫn↗</a></sup></div>';
        v233 +=
          '<div class="text-muted small mb-2">* Bước 1: Copy và dán vào nơi muốn hiển thị vòng quay may mắn này.</div>';
        v233 +=
          '<textarea class="form-control mb-3" onclick="this.select();" rows="2" readonly ><div class="embedvqmm" data-id="' +
          v232[2] +
          '"></div></textarea>';
        v233 +=
          '<div class="text-muted small mb-2">* Bước 2: Dán mã JS này trước thẻ đóng &lt;/body&gt; </div>';
        v233 +=
          '<textarea class="form-control" onclick="this.select();" rows="2" readonly ><script src="' +
          ajax_object.home_url +
          '/embed.min.js"></script></textarea>';
        v233 += "</div>";
        v233 +=
          '<div class="tab-pane py-4 fade" id="popup-tab-pane" role="tabpanel" aria-labelledby="popup-tab" tabindex="0">';
        v233 +=
          '<div class="mb-1 fw-bold">Mã nhúng Popup<sup> <a class="text-danger small" href="' +
          ajax_object.home_url +
          '/popup.html" target="_blank" title="Xem ví dụ">Xem ví dụ ↗</a></sup></div>';
        v233 +=
          '<div class="text-muted small mb-2">* Copy và dán mã này vào trước thẻ đóng &lt;/body&gt;.</div>';
        v233 +=
          '<textarea class="form-control mb-3" onclick="this.select();" rows="10" readonly >';
        v233 += "<script>\n\t";
        v233 += "const code = '" + v232[2] + "';\n\t";
        v233 += "const formHeading   = 'Quay để nhận thưởng';\n\t";
        v233 += "const formDesc      = 'Điền đúng thông tin để nhận quà';\n\t";
        v233 += "const formButton    = 'Thử vận may';\n\t";
        v233 += "const iconPosition  = 'right';\n\t";
        v233 += "const hideMail      = false;\n\t";
        v233 += "const lifetime      = 60;\n\t";
        v233 += "const popupWhenExit = true;\n\t";
        v233 += "function sendByMe(args){\n\t\t";
        v233 += "//Hãy viết hàm gửi Email\n\t\t";
        v233 +=
          "console.log(args);//return object {code,name,phone,email,toEmail,result} \n\t";
        v233 += "}\n";
        v233 += "</script>\n";
        v233 +=
          '<script src="https://vongquaymayman.co/popup.min.js"></script>\n';
        v233 += "</textarea>";
        v233 += "</div>";
        v233 += "</div>";
        el("your-embed").innerHTML = v233;
        el("stage-3").classList.remove("d-none");
        el("stage-2").classList.add("d-none");
        fillTitleDesc(v208, v211);
        el("edit-mode-txt").innerHTML =
          '<span class="badge bg-danger">Bạn đang ở chế độ chỉnh sửa</span> <sup><a href="javascript:void(0);" title="Thoát chế độ chỉnh sửa" onclick="location.reload();">&times;</a></sup>';
        var v234 = {
          link_id: v232[1],
          show_title: v217,
          show_tripod: v218,
          visibility: v213,
          max_spin: v220,
          link_logo: v222,
          logo_white: v223,
          lead_email: v227,
          is_show_lead_form: v224,
          frm_phone: v225,
          frm_email: v226,
          endtime: v209,
          css_bosung: v210,
        };
        el("linkData").textContent = JSON.stringify(v234);
      } else if (v231.status !== 200) {
        console.log("error:" + v231.status);
      }
    };
    v231.send(JSON.stringify(v230));
  }
}
function copyLink() {
  el("btn-copy-link").textContent = "Đang chép...";
  var v235 = el("your-link").value;
  if (v235) {
    el("your-link").focus();
    el("your-link").select();
    copyToClipBoard(v235);
    setTimeout(function () {
      el("btn-copy-link").textContent = "Sao chép";
    }, 500);
  }
}
function removeSharedLink(p57, p58) {
  if (confirm("Bạn chắc chắn muốn xóa:" + p58)) {
    var v236 = new XMLHttpRequest();
    v236.open("POST", ajax_object.ajax_url);
    v236.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    v236.onload = function () {
      if (v236.status === 200) {
        if (v236.responseText == "success") {
          el("row-" + p57).remove();
        } else {
          alert(v236.responseText);
        }
      } else {
        console.log("Lỗi:" + v236.status);
      }
    };
    v236.send(
      "action=removeSharedLink&id=" +
        p57 +
        "&ajaxsecurity=" +
        ajax_object.ajax_nonce
    );
  }
}
function editSharedLink(p59) {
  var v237 = new XMLHttpRequest();
  v237.open("POST", ajax_object.ajax_url);
  v237.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  v237.onload = function () {
    if (v237.status === 200) {
      if (v237.responseText !== "error") {
        var v238 = JSON.parse(v237.responseText);
        var v239 = JSON.parse(v238.settings);
        var v240 = v238.title;
        var v241 = "";
        var v242 = v238.show_title;
        var v243 = "no";
        var v244 = v238.id;
        var v245 = v238.visibility;
        var v246 = 0;
        var v247 = "";
        var v248 = "";
        var v249 = 0;
        var v250 = 0;
        var v251 = 0;
        var v252 = 0;
        var v253 = "";
        var v254 = "";
        var v255 = "color";
        var v256 = "";
        var v257 = 0;
        if (v239.hasOwnProperty("max_spin")) {
          v246 = v239.max_spin;
        }
        if (v239.hasOwnProperty("show_tripod")) {
          v243 = v239.show_tripod;
        }
        if (v239.hasOwnProperty("link_logo")) {
          v247 = v239.link_logo;
        }
        if (v239.hasOwnProperty("logo_white")) {
          v248 = v239.logo_white;
        }
        if (v239.hasOwnProperty("is_show_lead_form")) {
          v249 = v239.is_show_lead_form;
        }
        if (v239.hasOwnProperty("lead_email")) {
          v250 = v239.lead_email;
        }
        if (v239.hasOwnProperty("frm_phone")) {
          v251 = v239.frm_phone;
        }
        if (v239.hasOwnProperty("frm_email")) {
          v252 = v239.frm_email;
        }
        if (v239.hasOwnProperty("css_bosung")) {
          v253 = v239.css_bosung;
        }
        if (v239.hasOwnProperty("endtime")) {
          v254 = v239.endtime;
        }
        if (v239.hasOwnProperty("desc")) {
          v241 = v239.desc;
        }
        if (v239.hasOwnProperty("is_advance")) {
          v257 = v239.is_advance;
        }
        if (v257 == 0) {
          el("is_advance").checked = false;
        } else {
          el("is_advance").checked = true;
        }
        if (v239.hasOwnProperty("type")) {
          v255 = v239.type;
          setWheelType(v255);
          if (v239.hasOwnProperty("cover_img")) {
            v256 = v239.cover_img;
            el("cover_img_display").src = v256;
            el("cover_img").value = v256;
          }
        } else {
          setWheelType("color");
          el("cover_img_display").src =
            ajax_object.theme_uri + "/assets/images/cover-wheel.jpg";
          el("cover_img").value =
            ajax_object.theme_uri + "/assets/images/cover-wheel.jpg";
        }
        fillTitleDesc(v240, v241);
        var v258 = {
          link_id: v244,
          show_title: v242,
          show_tripod: v243,
          visibility: v245,
          max_spin: v246,
          link_logo: v247,
          logo_white: v248,
          lead_email: v250,
          is_show_lead_form: v249,
          frm_phone: v251,
          frm_email: v252,
          endtime: v254,
          css_bosung: v253,
        };
        el("linkData").textContent = JSON.stringify(v258);
        el("edit-mode-txt").innerHTML =
          '<span class="badge bg-danger">Bạn đang ở chế độ chỉnh sửa</span> <sup><a href="javascript:void(0);" title="Thoát chế độ chỉnh sửa" onclick="location.reload();">&times;</a></sup>';
        if (v239.hasOwnProperty("custom_bg_color")) {
          root.style.setProperty("--custom_bg_color", v239.custom_bg_color);
          el("custom-bg-color").value = v239.custom_bg_color;
        } else {
          root.style.setProperty("--custom_bg_color", "#ffffff");
          el("custom-bg-color").value = "#ffffff";
        }
        if (v239.hasOwnProperty("custom_color")) {
          root.style.setProperty("--custom_color", v239.custom_color);
          el("custom-color").value = v239.custom_color;
        } else {
          root.style.setProperty("--custom_color", "#000000");
          el("custom-color").value = "#000000";
        }
        if (v239.hasOwnProperty("custom_bg_img")) {
          setBackgroundImage(v239.custom_bg_img, "update");
        } else {
          document.body.style.backgroundImage = "";
          el("custom-bg-img").value = "";
          el("custom-bg-img-tablet").value = "";
          el("custom-bg-img-mobile").value = "";
        }
        var v259 = [];
        if (v239.hasOwnProperty("list")) {
          var v260 = v239.list.split("||");
          var v261 = null;
          var v262 = "";
          if (v260.length) {
            for (var v263 = 0; v263 < v260.length; v263++) {
              if (v260[v263].includes("<img")) {
                var v264 = document.createElement("div");
                v264.innerHTML = v260[v263];
                v261 = v264.querySelector("img");
                v262 = v260[v263].replace(/<img[^>]*>/g, "");
                v262 = stripHtml(v262);
                v262 = v262.trim();
                v259.push({
                  text: v262,
                  id: v263,
                  image: v261.src,
                });
              }
              v259.push({
                text: v260[v263],
                id: v263,
              });
            }
          }
        }
        if (v239.hasOwnProperty("entries")) {
          v259 = v239.entries;
        }
        if (v239.hasOwnProperty("startSound")) {
          el("start_sound").value = v239.startSound;
        }
        if (v239.hasOwnProperty("start_sound")) {
          el("start_sound").value = v239.start_sound;
        }
        if (v239.hasOwnProperty("end_sound")) {
          el("end_sound").value = v239.end_sound;
        }
        if (v239.hasOwnProperty("endSound")) {
          el("end_sound").value = v239.endSound;
        }
        el("duration").value = v239.duration;
        if (v239.hasOwnProperty("btn_spin_label")) {
          el("btn-spin-label").value = v239.btn_spin_label;
        }
        if (v239.hasOwnProperty("btn_spin_img")) {
          el("btn-spin-img").value = v239.btn_spin_img;
        }
        if (v239.show_confetti == "yes") {
          el("show_confetti").checked = true;
        } else {
          el("show_confetti").checked = false;
        }
        if (v239.show_popup == "yes") {
          el("show_popup").checked = true;
        } else {
          el("show_popup").checked = false;
        }
        el("popup_label").value = v239.popup_label;
        if (v239.show_remove_button == "yes") {
          el("show_remove_button").checked = true;
        } else {
          el("show_remove_button").checked = false;
        }
        if (v239.hasOwnProperty("show_border")) {
          if (v239.show_border == "yes") {
            el("show_border").checked = true;
            el("custom_border_color").classList.remove("d-none");
          } else {
            el("show_border").checked = false;
            el("custom_border_color").classList.add("d-none");
          }
        } else {
          el("show_border").checked = false;
          el("custom_border_color").classList.add("d-none");
        }
        var v265 = document.getElementsByName("chkcolor");
        if (v239.hasOwnProperty("theme_style_color")) {
          colors = v239.theme_style_color;
        }
        if (v239.hasOwnProperty("colors")) {
          colors = v239.colors;
        }
        if (colors) {
          for (var v266 of v265) {
            v266.checked = false;
            el("color-" + v266.value).value = "#ADB2B0";
          }
          for (const v267 of colors) {
            el("color-" + v267.key).value = v267.value;
            el("chkcolor-" + v267.key).checked = true;
          }
        }
        if (v239.hasOwnProperty("is_stroke")) {
          if (v239.is_stroke == "yes") {
            el("is_stroke").checked = true;
          } else {
            el("is_stroke").checked = false;
          }
        } else {
          el("is_stroke").checked = false;
        }
        fillEntries(v259, v257);
        wheelSettings();
        el("view-shared-msg").innerHTML =
          '<div class="alert alert-danger alert-dismissible fade show" id="alertClose" role="alert"><strong>Tiếp tục sửa (' +
          v240 +
          ") ?</strong><br>- Hãy chỉnh lại <strong>Vòng quay</strong> theo ý muốn rồi vào <strong>Tài khoản</strong> ⇢ <strong>Tạo link chia sẻ</strong> ⇢ <strong>Cập nhật</strong>.<br>- Đừng Refresh trang trong quá trình chỉnh sửa.</div>";
      } else {
        alert("Có lỗi chưa rõ nguyên nhân!");
      }
    } else {
      console.log("Lỗi:" + v237.status);
    }
  };
  v237.send(
    "action=editSharedLink&id=" +
      p59 +
      "&ajaxsecurity=" +
      ajax_object.ajax_nonce
  );
}
function viewSharedLink() {
  if (!isLoggedIn()) {
    loginForm();
    return false;
  }
  var v268 = "";
  el("modal-title").innerHTML =
    '<span data-feather="share-2" style="width:24px;heigh24px;"></span> Liên kết của bạn';
  v268 +=
    '<div id="view-shared-loader"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div> Đang tải...</div>';
  var v269 = new XMLHttpRequest();
  v269.open("POST", ajax_object.ajax_url);
  v269.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  v269.onload = function () {
    if (v269.status === 200) {
      el("modal-body").innerHTML = v269.responseText;
      feather.replace();
      var v270 = document.querySelectorAll(".btn-copy-link-item");
      if (v270.length) {
        for (var v271 = 0; v271 < v270.length; v271++) {
          v270[v271].addEventListener("click", function () {
            copyToClipBoard(this.dataset.content);
            alert("Đã copy link (" + this.dataset.title + ")");
          });
        }
      }
      var v272 = document.querySelectorAll(".btn-copy-embed-item");
      if (v272.length) {
        for (var v271 = 0; v271 < v272.length; v271++) {
          v272[v271].addEventListener("click", function () {
            var v273 =
              '<div class="embedvqmm" data-id="' + this.dataset.id + '"></div>';
            v273 +=
              '<script src="' +
              ajax_object.home_url +
              '/embed.min.js"></script>';
            copyToClipBoard(v273);
            alert("Đã copy mã nhúng (" + this.dataset.title + ")");
          });
        }
      }
      var v274 = document.querySelectorAll(".btn-edit-link");
      if (v274.length) {
        for (var v271 = 0; v271 < v274.length; v271++) {
          v274[v271].addEventListener("click", function () {
            editSharedLink(this.dataset.content);
          });
        }
      }
      var v275 = document.querySelectorAll(".btn-remove-link");
      if (v275.length) {
        for (var v271 = 0; v271 < v275.length; v271++) {
          v275[v271].addEventListener("click", function () {
            removeSharedLink(this.dataset.content, this.dataset.title);
          });
        }
      }
      var v276 = document.querySelector("#btn-create-link-now");
      if (v276) {
        v276.addEventListener("click", function () {
          createLinkForm();
        });
      }
    } else {
      console.log("Lỗi:" + v269.status);
    }
  };
  v269.send("action=viewSharedLink");
  el("modal-body").innerHTML = v268;
  el("modal-footer").innerHTML =
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>';
  el("modal-dialog").classList.add("modal-lg");
  feather.replace();
  var v277 = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  v277.show();
}
function uploadLinkLogo() {
  upload("upload_logo", "link_logo");
}
function checkLeadForm() {
  if (el("is_show_lead_form").checked == true) {
    el("lead_email").removeAttribute("disabled");
    el("frm_option").classList.remove("d-none");
    var v278 = document.querySelectorAll('input[type="checkbox"].frm-option');
    for (var v279 = 0; v279 < v278.length; v279++) {
      v278[v279].addEventListener("click", function () {
        if (countBoxCheckedByClass("frm-option") == 1) {
          for (var v280 = 0; v280 < v278.length; v280++) {
            if (v278[v280].checked == true) {
              v278[v280].disabled = true;
            }
          }
        } else {
          for (var v280 = 0; v280 < v278.length; v280++) {
            v278[v280].disabled = false;
          }
        }
      });
    }
    var v281 = new XMLHttpRequest();
    v281.open("POST", ajax_object.ajax_url + "?action=getUserInfo");
    v281.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    v281.onload = function () {
      user_info = JSON.parse(v281.responseText);
      if (user_info.isExpired == true) {
        el("lead_email_container").innerHTML =
          '<input type="hidden" id="lead_email" value="" ><p class="alert alert-danger">Tài khoản PRO của bạn đã hết hạn. Hãy <a href="' +
          ajax_object.home_url +
          '/tat-quang-cao/" target="_blank">gia hạn ngay</a> để sử dụng tính năng này.</p>';
      } else {
        el("is_show_lead_form").value = 1;
        if (el("lead_email").value.trim() == "") {
          el("lead_email").value = user_info.user_email;
        }
      }
    };
    v281.send("&ajaxsecurity=" + ajax_object.ajax_nonce);
  } else {
    el("is_show_lead_form").value = 0;
    el("lead_email_container").innerHTML =
      '<span class="input-group-text">Email nhận</span><input type="text" class="form-control" id="lead_email" disabled placeholder="yourname@gmail.com">';
    el("frm_option").classList.add("d-none");
  }
}
function openSettingsForm() {
  var v282 = new bootstrap.Modal(el("modalSettings"), {
    backdrop: true,
  });
  v282.show();
}
function wheelSettings() {
  var v283 = el("start_sound").value;
  var v284 = el("end_sound").value;
  var v285 = el("duration").value;
  var v286 = "no";
  var v287 = "no";
  var v288 = "no";
  var v289 = el("popup_label").value;
  var v290 = el("extra_name").value;
  var v291 = el("custom-bg-color").value;
  var v292 = el("custom-color").value;
  var v293 = [];
  var v294 = el("btn-spin-label").value;
  var v295 = el("btn-spin-img").value;
  var v296 = "no";
  var v297 = "no";
  var v298 = "#FF4D00";
  var v299 = "#F6FA00";
  var v300 = "";
  var v301 = "";
  var v302 = el("type").value;
  var v303 = el("cover_img").value;
  var v304 = el("custom-bg-img").value;
  var v305 = el("custom-bg-img-tablet").value;
  var v306 = el("custom-bg-img-mobile").value;
  v293 = [v304, v305, v306];
  if (el("show_confetti").checked) {
    v286 = "yes";
  }
  if (el("show_popup").checked) {
    v287 = "yes";
  }
  if (el("show_remove_button").checked) {
    v288 = "yes";
  }
  if (el("is_stroke").checked) {
    v296 = "yes";
  }
  if (el("show_border").checked) {
    v297 = "yes";
    v298 = el("border_color").value;
    v299 = el("diamond_color").value;
  }
  if (el("vqmm-title")) {
    v300 = el("vqmm-title").textContent;
  }
  if (el("vqmm-desc")) {
    v301 = el("vqmm-desc").textContent;
  }
  var v307 = [];
  var v308 = document.getElementsByName("chkcolor");
  if (v308.length) {
    for (var v309 of v308) {
      if (v309.checked) {
        v307.push({
          key: v309.value,
          value: el("color-" + v309.value).value,
        });
      }
    }
  }
  if (v307.length === 0) {
    v307.push({
      key: 1,
      value: "#ADB2B0",
    });
  }
  var v310 = 0;
  if (el("is_advance").checked) {
    v310 = 1;
  }
  var v311 = [];
  var v312 = "";
  var v313 = null;
  if (v310 == 0) {
    var vGetSectorItem2 = getSectorItem(el("sector_list").innerHTML);
    if (vGetSectorItem2.length) {
      for (var v314 = 0; v314 < vGetSectorItem2.length; v314++) {
        if (vGetSectorItem2[v314].includes("<img")) {
          var v315 = document.createElement("div");
          v315.innerHTML = vGetSectorItem2[v314];
          v313 = v315.querySelector("img");
          v312 = vGetSectorItem2[v314].replace(/<img[^>]*>/g, "");
          v312 = stripHtml(v312);
          v312 = v312.trim();
          v311.push({
            text: v312,
            id: v314,
            image: v313.src,
          });
        } else {
          v311.push({
            text: vGetSectorItem2[v314],
            id: v314,
          });
        }
      }
    }
  } else {
    var v316 = 0;
    var v317 = 0;
    var v318 = null;
    var v319 = document.querySelectorAll(".row-item");
    if (v319.length) {
      var v320 = [];
      var v321 = [];
      var v322 = 0;
      for (var v314 = 0; v314 < v319.length; v314++) {
        v317 = v314;
        v318 = {
          text: el("item-text-" + v317).value,
          id: v317,
          color: el("item-color-" + v317).value,
          weight: parseInt(el("item-weight-" + v317).value),
        };
        if (el("item-img-" + v317).innerHTML != "") {
          v318.image = document.querySelector("#item-img-" + v317 + ">img").src;
        }
        if (el("item-sound-" + v317)) {
          v318.sound = el("item-sound-" + v317).value;
        }
        if (el("item-message-" + v317)) {
          v318.message = removeAllUrl(el("item-message-" + v317).value);
        }
        v311.push(v318);
      }
    }
  }
  var v323 = {
    title: v300,
    desc: v301,
    start_sound: v283,
    end_sound: v284,
    duration: v285,
    show_confetti: v286,
    show_popup: v287,
    show_remove_button: v288,
    is_stroke: v296,
    show_border: v297,
    border_color: v298,
    diamond_color: v299,
    popup_label: v289,
    custom_bg_color: v291,
    custom_color: v292,
    custom_bg_img: v293,
    btn_spin_label: v294,
    btn_spin_img: v295,
    colors: v307,
    entries: v311,
    is_advance: v310,
    type: v302,
    cover_img: v303,
  };
  localStorage.setItem("wheelSetting" + v290, JSON.stringify(v323));
  root.style.setProperty("--custom_bg_color", v291);
  root.style.setProperty("--custom_color", v292);
  if (v293) {
    setBackgroundImage(v293, "view");
  } else {
    document.body.style.backgroundImage = "";
  }
  el("btn_wheel_setting").textContent = "Đã lưu";
  setTimeout(function () {
    el("btn_wheel_setting").textContent = "Lưu lại";
    loadWheel();
  }, 500);
}
function loadUploaded() {
  var v324 =
    '<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="filter_media" id="all" value="all" onClick="filter_media(\'all\');" checked><label class="form-check-label" for="all">Tất cả</label></div>';
  v324 +=
    '<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="filter_media" id="media_button" value="btn" onClick="filter_media(\'btn\');"><label class="form-check-label" for="media_button">Nút quay</label></div>';
  v324 +=
    '<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="filter_media" id="media_background" value="bgr" onClick="filter_media(\'bgr\');"><label class="form-check-label" for="media_background">Nền</label></div>';
  v324 +=
    '<div class="input-group my-3"><span class="input-group-text"><span data-feather="search"></span></span><input type="text" class="form-control" id="media_kw" onkeyup="searhMedia();" placeholder="Từ khoá" ></div>';
  v324 +=
    '<hr><div class="mt-3" style="max-height:350px;overflow-y:auto;overflow-x:hidden;"><table class="table table-striped" id="media" ><thead><tr><th>STT</th><th>Tên</th><th>Link</th><th>Đặt làm</th><th>Action</th></tr></thead><tbody id="mediaBody">';
  var v325 = 0;
  if (localStorage.getItem("uploadedList")) {
    var v326 = JSON.parse(localStorage.getItem("uploadedList"));
    var v327 = "";
    var v328 = "";
    for (v325 = 0; v325 < v326.length; v325++) {
      v328 = v326[v325];
      v327 = v328.split("/").pop();
      fileName = v327.slice(0, -4);
      v324 +=
        '<tr id="tr_' +
        v325 +
        '"><td><span class="badge bg-secondary">' +
        (v325 + 1) +
        '</span></td><td class="small">' +
        fileName +
        '</td><td><a href="' +
        v326[v325] +
        '" title="Ảnh sẽ được mở trong tab mới" target="_blank"><img src="' +
        v326[v325] +
        '" width="50" heigh="50" class="border border-1 rounded-1" ></a></td><td data-type="mixes"><button class="btn btn-sm btn-secondary" onclick="el(\'custom-bg-img\').value=\'' +
        v326[v325] +
        "';el('btn_wheel_setting').click();\">Nền</button> <button class=\"btn btn-sm btn-secondary\" onclick=\"el('btn-spin-img').value='" +
        v326[v325] +
        "';el('btn-spin-label').value='';el('btn_wheel_setting').click();\">Nút Quay</button></td><td><button class=\"btn btn-sm btn-outline-secondary\" onclick=\"removeUploaded('" +
        v326[v325] +
        "');el('tr_" +
        v325 +
        "').remove();\">&times;</button></td></tr>";
    }
  }
  var v329 = [];
  fetch("/buttons.txt?cachebuster=" + new Date().getTime())
    .then((p60) => p60.text())
    .then((p61) => {
      const v330 = p61.split("\n").map((p62) => p62.trim());
      var v331 = "";
      for (var v332 = 0; v332 < v330.length; v332++) {
        v331 +=
          '<tr><td><span class="badge bg-secondary">' +
          (v325 + v332 + 1) +
          '</span></td><td class="small">' +
          v330[v332].slice(0, -4) +
          '</td><td><a href="' +
          ajax_object.theme_uri +
          "/assets/buttons/" +
          v330[v332] +
          '" title="Ảnh sẽ được mở trong tab mới" target="_blank"><img src="' +
          ajax_object.theme_uri +
          "/assets/buttons/" +
          v330[v332] +
          '" width="50" heigh="50" class="border border-1 rounded-1" ></a></td><td data-type="btn"><button class="btn btn-sm btn-secondary" onclick="el(\'btn-spin-img\').value=\'' +
          ajax_object.theme_uri +
          "/assets/buttons/" +
          v330[v332] +
          "';el('btn-spin-label').value='';el('btn_wheel_setting').click();\">Nút Quay</button></td><td>∗</td></tr>";
      }
      el("mediaBody").insertAdjacentHTML("beforeend", v331);
      var v333 = [];
      fetch("/backgrounds.txt?cachebuster=" + new Date().getTime())
        .then((p63) => p63.text())
        .then((p64) => {
          const v334 = p64.split("\n").map((p65) => p65.trim());
          var v335 = "";
          for (var v336 = 0; v336 < v334.length; v336++) {
            v335 +=
              '<tr><td><span class="badge bg-secondary">' +
              (v325 + v336 + 1) +
              '</span></td><td class="small">' +
              v334[v336].slice(0, -4) +
              '</td><td><a href="' +
              ajax_object.theme_uri +
              "/assets/background/" +
              v334[v336] +
              '" title="Ảnh sẽ được mở trong tab mới" target="_blank"><img src="' +
              ajax_object.theme_uri +
              "/assets/background/" +
              v334[v336] +
              '" width="50" heigh="50" class="border border-1 rounded-1" ></a></td><td data-type="bgr"><button class="btn btn-sm btn-secondary" onclick="el(\'custom-bg-img\').value=\'' +
              ajax_object.theme_uri +
              "/assets/background/" +
              v334[v336] +
              "';el('btn_wheel_setting').click();\">Nền</button></td><td>∗</td></tr>";
          }
          el("mediaBody").insertAdjacentHTML("beforeend", v335);
        })
        .catch((p66) => {
          console.error("Lỗi đọc file backgrounds.txt:", p66);
        });
    })
    .catch((p67) => {
      console.error("Lỗi đọc file buttons.txt:", p67);
    });
  v324 += "</tbody></table></div>";
  el("uploaded-list").innerHTML = v324;
  feather.replace();
}
function removeUploaded(p68) {
  if (p68) {
    if (localStorage.getItem("uploadedList")) {
      var v337 = JSON.parse(localStorage.getItem("uploadedList"));
      if (v337.length) {
        var v338 = v337.indexOf(p68);
        if (v338 !== -1) {
          v337.splice(v338, 1);
          localStorage.setItem("uploadedList", JSON.stringify(v337));
        }
      }
    }
  }
}
function filter_media(p69) {
  var v339;
  var v340;
  var v341;
  var v342;
  var v343;
  var v344;
  var v345;
  var v346;
  v339 = el("media");
  v340 = v339.getElementsByTagName("tr");
  v346 = el("media_kw").value.toUpperCase();
  for (v344 = 1; v344 < v340.length; v344++) {
    v342 = v340[v344].getElementsByTagName("td")[1];
    v341 = v340[v344].getElementsByTagName("td")[3];
    v343 = v342.textContent || v342.innerText;
    if (v341) {
      v345 = v341.dataset.type;
      if (p69 == "all") {
        if (v343.toUpperCase().indexOf(v346) > -1) {
          v340[v344].style.display = "";
        } else {
          v340[v344].style.display = "none";
        }
      } else if (v345 == p69) {
        if (v343.toUpperCase().indexOf(v346) > -1) {
          v340[v344].style.display = "";
        } else {
          v340[v344].style.display = "none";
        }
      } else {
        v340[v344].style.display = "none";
      }
    }
  }
}
function searhMedia() {
  let v347 = document.querySelector('input[name="filter_media"]:checked');
  if (v347) {
    filter_media(v347.value);
  }
}
function openTemplateForm() {
  var v348 = new bootstrap.Modal(el("modalTemplate"), {
    backdrop: true,
  });
  v348.show();
}
function countEntries() {
  var vGetWheelSettingInArray7 = getWheelSettingInArray();
  if (vGetWheelSettingInArray7) {
    var v349 = vGetWheelSettingInArray7.entries;
    el("entries_count").textContent = v349.length;
  }
}
function clearResult() {
  el("wheel_result").innerHTML = "";
  el("result_count").textContent = 0;
}
function sortResult() {
  var vGetSectorItem3 = getSectorItem(el("sector_list").innerHTML);
  if (vGetSectorItem3 && vGetSectorItem3.length) {
    vGetSectorItem3.sort();
    var v350 = "";
    for (var v351 = vGetSectorItem3.length - 1; v351 >= 0; v351--) {
      v350 += "<div>" + vGetSectorItem3[v351] + "</div>";
    }
    el("wheel_result").innerHTML = v350;
  }
}
function fullscreen() {
  if (document.querySelector(".toggle-link").classList.contains("is-showen")) {
    document.querySelector(".toggle-link>a").click();
  }
  document.querySelector("header.toggle-show-hide").classList.remove("d-none");
  triggerFullscreenElement(document.body);
  if (el("custom-bg-img").value != "") {
    root.style.setProperty(
      "--custom_bg_img_url",
      "url('" + el("custom-bg-img").value + "')"
    );
  } else {
    root.style.setProperty("--custom_bg_img_url", "");
  }
  document.querySelector(".fullscreen-link").classList.add("d-none");
  document.querySelector(".exit-fullscreen-link").classList.remove("d-none");
}
function exitFullscreen() {
  triggerExitFullscreen();
  setTimeout(closeFullscreen, 1000);
}
document.addEventListener("fullscreenchange", closeFullscreen, false);
function closeFullscreen() {
  if (
    !document.fullscreenElement &&
    !document.webkitIsFullScreen &&
    !document.mozFullScreen
  ) {
    if (
      document.querySelector(".toggle-link").classList.contains("is-hidden")
    ) {
      document.querySelector(".toggle-link>a").click();
    }
    document.querySelector(".fullscreen-link").classList.remove("d-none");
    document.querySelector(".exit-fullscreen-link").classList.add("d-none");
  }
}
if (el("show_popup")) {
  el("show_popup").addEventListener("click", function () {
    if (this.checked == false) {
      el("show_remove_button").setAttribute("disabled", "disabled");
      el("popup_label").setAttribute("disabled", "disabled");
    } else {
      el("show_remove_button").removeAttribute("disabled");
      el("popup_label").removeAttribute("disabled");
    }
  });
}
if (el("show_border")) {
  el("show_border").addEventListener("click", function () {
    if (this.checked == false) {
      el("custom_border_color").classList.add("d-none");
    } else {
      el("custom_border_color").classList.remove("d-none");
    }
  });
}
function resetWheel() {
  localStorage.removeItem("wheelSetting" + extra_name);
  location.reload();
}
function resizeImage(p70) {
  return new Promise((p71, p72) => {
    const v352 = new Image();
    const v353 = new FileReader();
    v353.onload = function (p73) {
      v352.src = p73.target.result;
    };
    v352.onload = function () {
      const v354 = document.createElement("canvas");
      const v355 = v354.getContext("2d");
      const v356 = 200;
      let v357 = v352.width;
      let v358 = v352.height;
      if (v357 > v358) {
        if (v357 > v356) {
          v358 = Math.round((v358 *= v356 / v357));
          v357 = v356;
        }
      } else if (v358 > v356) {
        v357 = Math.round((v357 *= v356 / v358));
        v358 = v356;
      }
      v354.width = v357;
      v354.height = v358;
      v355.drawImage(v352, 0, 0, v357, v358);
      const v359 = v354.toDataURL("image/png");
      p71(v359);
    };
    v352.onerror = p72;
    v353.readAsDataURL(p70);
  });
}
if (el("inputImage")) {
  el("inputImage").addEventListener("change", function (p74) {
    const v360 = p74.target.files;
    const v361 = [];
    const v362 = [];
    if (!v360.length) {
      return;
    }
    var v363 = 0;
    if (el("is_advance").checked) {
      v363 = 1;
    }
    var v364 = el("extra_name").value;
    var v365 = localStorage.getItem("wheelSetting" + v364);
    var v366 = null;
    if (v365) {
      var v367 = JSON.parse(v365);
      v366 = v367.entries;
    }
    var v368 = v366.length;
    if (v363 == 1) {
      var vGetCurrentStyleColor2 = getCurrentStyleColor();
      var vParseInt4 = parseInt(vGetCurrentStyleColor2.length);
      for (let v369 = 0; v369 < v360.length; v369++) {
        v362.push(
          resizeImage(v360[v369]).then((p75) => {
            v361.push(p75);
            v366.push({
              text: "",
              id: v368,
              color: vGetCurrentStyleColor2[v368 % vParseInt4],
              image: p75,
            });
            v368++;
            fillEntries(v366, v363);
            setTimeout(function () {
              loadWheel();
            }, 500);
          })
        );
      }
    } else {
      for (let v370 = 0; v370 < v360.length; v370++) {
        v362.push(
          resizeImage(v360[v370]).then((p76) => {
            v361.push(p76);
            v366.push({
              text: "",
              id: v368,
              image: p76,
            });
            v368++;
            fillEntries(v366, v363);
            setTimeout(function () {
              loadWheel();
            }, 500);
          })
        );
      }
    }
  });
}
function handleImageUpload(p77) {
  const v371 = el("item-upload-" + p77).files[0];
  if (v371) {
    resizeImage(v371)
      .then((p78) => {
        var vGetWheelSettingInArray8 = getWheelSettingInArray();
        var v372 = null;
        if (vGetWheelSettingInArray8) {
          v372 = vGetWheelSettingInArray8.entries;
        }
        if (v372.length) {
          for (var v373 = 0; v373 < v372.length; v373++) {
            if (v372[v373].id == p77) {
              v372[v373].image = p78;
            }
          }
        }
        fillEntries(v372, 1);
        setTimeout(function () {
          loadWheel();
        }, 500);
      })
      .catch((p79) => {
        console.error("Error resizing image:", p79);
      });
  }
}
function configItem(p80) {
  var vGetWheelSettingInArray9 = getWheelSettingInArray();
  var v374 = el("item-text-" + p80).value;
  var v375 = el("item-sound-" + p80).value;
  var vRemoveAllUrl = removeAllUrl(el("item-message-" + p80).value);
  var vParseInt5 = parseInt(el("item-weight-" + p80).value);
  var v376 = el("item-color-" + p80).value;
  var v377 = document.querySelector("#item-img-" + p80 + ">img");
  var v378 = vGetWheelSettingInArray9.entries;
  var v379 = v378.reduce((p81, p82) => p81 + p82.weight, 0);
  var v380 = v378.map((p83) => Math.round((p83.weight / v379) * 100));
  var v381 = v380[p80];
  var v382 =
    '<span data-feather="sliders" style="width:24px;heigh:24px;"></span> Nâng cao';
  var v383 = "";
  v383 += '<div class="d-flex justify-content-between mb-3">';
  v383 += "<div>";
  if (p80 > 0) {
    v383 +=
      '<button class="btn btn-sm btn-secondary" data-bs-dismiss="modal" title="Mục trước" onClick="configItem(' +
      (p80 - 1) +
      ')"><span data-feather="chevron-left"></span></button> ';
  } else {
    v383 +=
      '<button class="btn btn-sm btn-secondary" disabled><span data-feather="chevron-left"></span></button> ';
  }
  v383 += '<span class="mx-2">Mục ' + (p80 + 1) + "/" + v378.length + "</span>";
  if (p80 < v378.length - 1) {
    v383 +=
      '<button class="btn btn-sm btn-secondary" title="Mục tiếp theo" data-bs-dismiss="modal" onClick="configItem(' +
      (p80 + 1) +
      ')"><span data-feather="chevron-right"></span></button>';
  } else {
    v383 +=
      '<button class="btn btn-sm btn-secondary" disabled><span data-feather="chevron-right"></span></button>';
  }
  v383 += "</div>";
  v383 +=
    '<div><button class="btn btn-sm btn-secondary" title="Thêm mục mới" data-bs-dismiss="modal" onClick="addRow(); configItem(' +
    v378.length +
    ');"><span data-feather="plus"></span></button></div>';
  v383 += "</div>";
  v383 += '<hr class="border border-secondary border-1"></div>';
  v383 += '<div class="row mb-3">';
  v383 +=
    '<div class="col-4"><label for="cfg-text-' +
    p80 +
    '" class="form-label">Tên mục</label></div>';
  v383 +=
    '<div class="col-8"><input type="text" class="form-control bg-light" placeholder="Tên mục" value="' +
    v374 +
    '" id="cfg-text-' +
    p80 +
    '"></div>';
  v383 += "</div>";
  v383 += '<div class="row mb-3">';
  v383 +=
    '<div class="col-4"><label for="cfg-color-' +
    p80 +
    '" class="form-label">Màu</label></div>';
  v383 += '<div class="col-8">';
  v383 += '<div class="d-flex justify-content-between">';
  v383 +=
    '<div class="p-2"><input type="color" value="' +
    v376 +
    '" id="cfg-color-' +
    p80 +
    '"></div>';
  if (v377) {
    v383 += '<div class="position-relative" id="cfg-img-wrap-' + p80 + '">';
    v383 +=
      '<span class="cfg-img" id="cfg-img-' +
      p80 +
      '"><img src="' +
      v377.src +
      '" width="150" ></span>';
    v383 +=
      '<span class="position-absolute top-0 end-0 cfg-img-remove" onclick="configRemoveImg(' +
      p80 +
      ');">&times;</span>';
    v383 += "</div>";
    v383 +=
      '<div class="p-2 d-none" id="cfg-upload-wrap-' +
      p80 +
      '"><label class="btn btn-secondary" for="cfg-upload-' +
      p80 +
      '"><span data-feather="image"></span></label> <input type="file" class="cfg-upload d-none" id="cfg-upload-' +
      p80 +
      '" onchange="configImageUpload(' +
      p80 +
      ');" accept="image/png, image/gif, image/jpeg" ></div>';
    v383 += "</div>";
  } else {
    v383 +=
      '<div class="position-relative d-none" id="cfg-img-wrap-' + p80 + '">';
    v383 += '<span class="cfg-img" id="cfg-img-' + p80 + '"></span>';
    v383 +=
      '<span class="position-absolute top-0 end-0 cfg-img-remove" onclick="configRemoveImg(' +
      p80 +
      ');">&times;</span>';
    v383 += "</div>";
    v383 +=
      '<div class="p-2" id="cfg-upload-wrap-' +
      p80 +
      '"><label class="btn btn-secondary" for="cfg-upload-' +
      p80 +
      '"><span data-feather="image"></span></label> <input type="file" class="cfg-upload d-none" id="cfg-upload-' +
      p80 +
      '" onchange="configImageUpload(' +
      p80 +
      ');" accept="image/png, image/gif, image/jpeg" ></div>';
    v383 += "</div>";
  }
  v383 += "</div>";
  v383 += "</div>";
  v383 += "</div>";
  v383 += '<div class="row row-3 mb-3">';
  v383 += '<div class="col-4">Âm thanh</div>';
  v383 += '<div class="col-8">';
  v383 += '<div class="input-group">';
  v383 += '<select class="form-select" id="cfg-sound-' + p80 + '">';
  v383 += '<option value="">Kế thừa từ cài đặt chung</option>';
  var v384 = "";
  Object.keys(end_sound_option).forEach((p84) => {
    if (p84 === v375) {
      v384 = "selected";
    }
    v383 +=
      '<option value="' +
      p84 +
      '" ' +
      v384 +
      " >" +
      end_sound_option[p84] +
      "</option>";
    v384 = "";
  });
  v383 += "</select>";
  v383 +=
    '<button class="btn btn-outline-secondary" id="cfg-sound-play" onClick="triggerAudio(el(\'cfg-sound-' +
    p80 +
    "').value,'play');\"><span data-feather=\"play\"></span></button>";
  v383 +=
    '<button class="btn btn-outline-secondary" id="cfg-sound-stop" onClick="triggerAudio(el(\'cfg-sound-' +
    p80 +
    "').value,'stop');\"><span data-feather=\"square\"></span></button>";
  v383 += "</div>";
  v383 += "</div>";
  v383 += "</div>";
  v383 += '<div class="row row-4 mb-3">';
  v383 += '<div class="col-4">Tiêu đề Popup</div>';
  v383 += '<div class="col-8">';
  v383 +=
    '<input type="text" class="form-control bg-light" id="cfg-message-' +
    p80 +
    '" placeholder="' +
    el("popup_label").value +
    '" value="' +
    vRemoveAllUrl +
    '" >';
  v383 += "</div>";
  v383 += "</div>";
  v383 += '<div class="row row-4 mb-3">';
  v383 += '<div class="col-4">Trọng số</div>';
  v383 += '<div class="col-8">';
  v383 +=
    '<div class="input-group"><input type="text" class="form-control bg-light numberonly" onkeyup="configWeight(' +
    p80 +
    ",'');\" onblur=\"if(this.value=='') this.value='" +
    vParseInt5 +
    "';configWeight(" +
    p80 +
    ",'');\" id=\"cfg-weight-" +
    p80 +
    '" value="' +
    vParseInt5 +
    '" ><button class="btn btn-sm bg-light" onClick="configWeight(' +
    p80 +
    ',\'minus\');" style="border: 1px solid #ced4da;color:#212529;"><span data-feather="minus"></span></button><button class="btn btn-sm bg-light" onClick="configWeight(' +
    p80 +
    ',\'plus\');" style="border: 1px solid #ced4da;color:#212529;"><span data-feather="plus"></span></button> <span class="input-group-text"><span id="cfg-percent-' +
    p80 +
    '">' +
    v381 +
    "</span>%</span></div>";
  v383 += "</div>";
  v383 += "</div>";
  var v385 =
    '<a class="text-decoration-none" data-bs-dismiss="modal">Bỏ qua</a> <button class="btn btn-primary" id="btn-cfg-update-' +
    p80 +
    '" onclick="configItemUpdate(' +
    p80 +
    ');">Cập nhật</button>';
  el("modal-title").innerHTML = v382;
  el("modal-body").innerHTML = v383;
  el("modal-footer").innerHTML = v385;
  feather.replace();
  var v386 = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  v386.show();
  numberOnly();
}
function configWeight(p85, p86) {
  if (el("cfg-weight-" + p85).value.trim() !== "") {
    var vGetWheelSettingInArray10 = getWheelSettingInArray();
    var vParseInt6 = parseInt(el("cfg-weight-" + p85).value.trim());
    if (vParseInt6 <= 0) {
      vParseInt6 = 1;
      el("cfg-weight-" + p85).value = 1;
    }
    if (vGetWheelSettingInArray10) {
      var v387 = vGetWheelSettingInArray10.entries;
      if (v387.length) {
        var v388 = v387.reduce((p87, p88) => p87 + p88.weight, 0);
        var v389 = v387.map((p89) => Math.round((p89.weight / v388) * 100));
        var v390 = v389[p85];
        var v391 = v388 - v387[p85].weight;
        for (var v392 = 0; v392 < v387.length; v392++) {
          if (v387[v392].id == p85) {
            if (p86 == "plus") {
              el("cfg-weight-" + p85).value = vParseInt6 + 1;
            } else if (p86 == "minus" && vParseInt6 > 1) {
              el("cfg-weight-" + p85).value = vParseInt6 - 1;
            }
            vParseInt6 = parseInt(el("cfg-weight-" + p85).value);
            v391 += vParseInt6;
            v390 = Math.round((vParseInt6 / v391) * 100);
            el("cfg-percent-" + p85).textContent = v390;
            break;
          }
        }
      }
    }
  }
}
function configImageUpload(p90) {
  const v393 = el("cfg-upload-" + p90).files[0];
  if (v393) {
    resizeImage(v393)
      .then((p91) => {
        el("cfg-img-" + p90).innerHTML = '<img src="' + p91 + '" width="150" >';
        el("cfg-img-wrap-" + p90).classList.remove("d-none");
        el("cfg-upload-wrap-" + p90).classList.add("d-none");
      })
      .catch((p92) => {
        console.error("Error resizing image:", p92);
      });
  }
}
function configRemoveImg(p93) {
  el("cfg-img-" + p93).innerHTML = "";
  el("cfg-img-wrap-" + p93).classList.add("d-none");
  el("cfg-upload-wrap-" + p93).classList.remove("d-none");
}
function configItemUpdate(p94) {
  var v394 = el("cfg-text-" + p94).value;
  var v395 = el("cfg-color-" + p94).value;
  var v396 = document.querySelector("#cfg-img-" + p94 + ">img");
  var v397 = el("cfg-sound-" + p94).value;
  var vParseInt7 = parseInt(el("cfg-weight-" + p94).value);
  var vRemoveAllUrl2 = removeAllUrl(el("cfg-message-" + p94).value);
  el("btn-cfg-update-" + p94).textContent = "Cập nhật...";
  var vGetWheelSettingInArray11 = getWheelSettingInArray();
  var v398 = null;
  if (vGetWheelSettingInArray11) {
    v398 = vGetWheelSettingInArray11.entries;
  }
  if (vParseInt7 <= 0) {
    vParseInt7 = 1;
  }
  if (v398.length) {
    for (var v399 = 0; v399 < v398.length; v399++) {
      if (v398[v399].id == p94) {
        v398[v399].text = v394;
        v398[v399].color = v395;
        v398[v399].weight = vParseInt7;
        if (v396) {
          v398[v399].image = v396.src;
        } else {
          delete v398[v399].image;
        }
        if (v397) {
          v398[v399].sound = v397;
        } else {
          delete v398[v399].sound;
        }
        if (vRemoveAllUrl2) {
          v398[v399].message = vRemoveAllUrl2;
        } else {
          delete v398[v399].message;
        }
        break;
      }
    }
  }
  fillEntries(v398, 1);
  setTimeout(function () {
    loadWheel();
    el("btn-cfg-update-" + p94).textContent = "Cập nhật";
  }, 500);
}
function fill100() {
  var v400 = [];
  var v401 = 0;
  if (el("is_advance").checked) {
    v401 = 1;
  }
  if (v401 == 0) {
    for (var v402 = 0; v402 < 100; v402++) {
      v400.push({
        text: (v402 + 1).toString(),
        id: v402,
      });
    }
  } else {
    var vGetCurrentStyleColor3 = getCurrentStyleColor();
    for (var v402 = 0; v402 < 100; v402++) {
      v400.push({
        text: (v402 + 1).toString(),
        id: v402,
        color: vGetCurrentStyleColor3[v402 % vGetCurrentStyleColor3.length],
      });
    }
  }
  fillEntries(v400, v401);
  loadWheel();
}
function showInfo() {
  var v403 = document.getElementsByClassName("toggle-show-hide");
  for (var v404 = 0; v404 < v403.length; v404++) {
    v403[v404].classList.remove("d-none");
  }
  const v405 = document.querySelectorAll("[data-dest]");
  if (v405.length) {
    v405.forEach((p95) => {
      p95.classList.remove("d-none");
    });
  }
  el("wheel-center").classList.remove("w-100");
}
function hideInfo() {
  var v406 = document.getElementsByClassName("toggle-show-hide");
  for (var v407 = 0; v407 < v406.length; v407++) {
    v406[v407].classList.add("d-none");
  }
  const v408 = document.querySelectorAll("[data-dest]");
  if (v408.length) {
    v408.forEach((p96) => {
      p96.classList.add("d-none");
    });
  }
  el("wheel-center").classList.add("w-100");
}
function hideTwentyTwentyThreeMenu() {
  if (
    document.querySelector(".wp-block-navigation__responsive-container-close")
  ) {
    document
      .querySelector(".wp-block-navigation__responsive-container-close")
      .click();
    console.log("Đã ẩn menu");
  }
}
function addTextToWheel(p97) {
  var v409 = el(p97).textContent;
  var v410 = v409.split(",");
  var v411 = "";
  var v412 = "";
  for (var v413 = 0; v413 < v410.length; v413++) {
    v412 = v410[v413].trim();
    v411 += "<div>" + v412 + "</div>";
  }
  el("sector_list").innerHTML = v411;
  el("sector_list").dispatchEvent(new KeyboardEvent("keyup"));
  el("sector_list").scrollIntoView();
}
function showTitleDescForm() {
  var v414 = "";
  var v415 = "";
  var v416 = el("extra_name").value;
  var v417 = localStorage.getItem("wheelSetting" + v416);
  if (el("vqmm-title") || el("vqmm-desc")) {
    if (el("vqmm-title")) {
      v414 = el("vqmm-title").textContent;
    }
    if (el("vqmm-desc")) {
      v415 = el("vqmm-desc").textContent;
    }
  } else if (v417 !== null) {
    var v418 = JSON.parse(v417);
    v414 = v418.title;
    v415 = v418.desc;
  }
  el("modal-title").innerHTML =
    '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="edit"></span> Sửa tiêu đề và mô tả';
  el("modal-body").innerHTML =
    '<div class="mb-3"><label for="editTitle" class="form-label">Tiêu đề</label><input type="text" class="form-control" value="' +
    v414 +
    '" data-maxlength="60" id="editTitle" placeholder="Tiêu đề vòng quay"></div><div class="mb-3"><label for="editDesc" class="form-label">Mô tả</label><textarea class="form-control" id="editDesc" placeholder="Mô tả vòng quay"  data-maxlength="160" rows="3">' +
    v415 +
    "</textarea></div>";
  el("modal-footer").innerHTML =
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button><button type="button" id="saveTitleDesc" onclick="saveTitleDesc()" class="btn btn-primary" data-bs-dismiss="modal">Lưu lại</button>';
  feather.replace();
  var v419 = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  v419.show();
  startLimitCharacters();
}
function saveTitleDesc() {
  var v420 = el("editTitle").value;
  var v421 = el("editDesc").value;
  var v422 = el("extra_name").value;
  var v423 = localStorage.getItem("wheelSetting" + v422);
  if (v423) {
    var v424 = JSON.parse(v423);
    v424.title = v420;
    v424.desc = v421;
    localStorage.setItem("wheelSetting" + v422, JSON.stringify(v424));
  }
  fillTitleDesc(v420, v421);
}
function fillTitleDesc(p98, p99) {
  var v425 =
    '<div class="wp-block-heading has-x-large-font-size toggle-show-hide" id="vqmm-title">' +
    p98 +
    "</div>";
  v425 += '<p class="toggle-show-hide" id="vqmm-desc">' + p99 + "</p>";
  el("vqmm-content").innerHTML = v425;
}
function fillEntries(p100, p101) {
  if (p101 == 0) {
    var v426 = "";
    var v427 = "";
    if (p100.length) {
      for (var v428 = 0; v428 < p100.length; v428++) {
        if (p100[v428].hasOwnProperty("image")) {
          v427 = ' <img src="' + p100[v428].image + '" >';
        }
        v426 += "<div>" + p100[v428].text + v427 + "</div>";
        v427 = "";
      }
    }
    el("sector_list").innerHTML = v426;
  } else {
    var v426 = '<div class="scrollarea" id="scrollarea">';
    var v429 = 0;
    var v430 = "";
    var v431 = "";
    var v432 = "";
    var v433 = "";
    var v434 = 0;
    if (p100.length) {
      var v435 = p100.reduce((p102, p103) => p102 + p103.weight, 0);
      var v436 = p100.map((p104) => Math.round((p104.weight / v435) * 100));
      for (var v428 = 0; v428 < p100.length; v428++) {
        v429 = v428;
        p100[v428].id = v428;
        v433 = "";
        if (!p100[v428].hasOwnProperty("weight")) {
          p100[v428].weight = 1;
        }
        if (p100[v428].hasOwnProperty("sound")) {
          v431 = p100[v428].sound;
        }
        if (p100[v428].hasOwnProperty("message")) {
          v430 = p100[v428].message;
        }
        if (p100[v428].hasOwnProperty("image")) {
          v432 = p100[v428].image;
        }
        if (v429 == p100[0].id) {
          v433 += "row-first";
        }
        v434 = v436[v428];
        if (v429 == p100[p100.length - 1].id) {
          v433 += " row-last";
        }
        v426 +=
          '<div class="row row-item ' +
          v433 +
          '" id="row-item-' +
          v429 +
          '" data-id="' +
          v429 +
          '">';
        v426 +=
          '<div class="col-1 d-flex flex-column justify-content-center movearea"><a href="javascript:void(0);" class="text-decoration-none text-secondary item-up" onclick="upDown(' +
          v429 +
          ',\'up\');">↑</a><a href="javascript:void(0);" class="text-decoration-none text-secondary item-down" onclick="upDown(' +
          v429 +
          ",'down');\">↓</a></div>";
        v426 += '<div class="col-9 rowarea">';
        v426 +=
          '<div class="mb-1 input-group"><span class="input-group-text">#' +
          (v428 + 1) +
          '</span><input type="text" class="form-control bg-light item-text" id="item-text-' +
          v429 +
          '" value="' +
          p100[v428].text +
          '" placeholder="Tên mục"></div>';
        v426 += '<div class="d-flex align-items-center mb-3">';
        v426 +=
          '<input type="color" class="me-1 item-color" id="item-color-' +
          v429 +
          '"  value="' +
          p100[v428].color +
          '">';
        if (v432) {
          v426 +=
            '<div class="item-img position-relative me-1" id="item-img-' +
            v429 +
            '"><img src="' +
            v432 +
            '" width="30"> <span class="d-inline-block position-absolute top-0 end-0 item-img-remove" onclick="removeItemImage(' +
            v429 +
            ');">&times;</span> </div>';
          v426 +=
            '<label class="me-1 d-none" for="item-upload-' +
            v429 +
            '"><span data-feather="image"></span></label>';
        } else {
          v426 +=
            '<div class="item-img position-relative me-1 d-none" id="item-img-' +
            v429 +
            '"></div>';
          v426 +=
            '<label class="me-1" for="item-upload-' +
            v429 +
            '"><span data-feather="image"></span></label>';
        }
        v426 +=
          '<input type="file" class="item-upload d-none" id="item-upload-' +
          v429 +
          '" data-id="' +
          v429 +
          '" onchange="handleImageUpload(' +
          v429 +
          ');" accept="image/png, image/gif, image/jpeg" >';
        v426 +=
          '<div class="input-group"><span class="input-group-text" style="padding:.375rem;"><img src="' +
          ajax_object.theme_uri +
          '/assets/icons/balance.png" width="16" alt="balance" ></span><input type="text" class="form-control numberonlyx bg-light item-weight" id="item-weight-' +
          v429 +
          '" oninput="changeWeight(' +
          v429 +
          ",'');\" onblur=\"if(this.value=='') this.value='" +
          p100[v428].weight +
          '\';" value="' +
          p100[v428].weight +
          '"><span class="input-group-text" style="padding:.375rem;cursor:pointer;" onClick="changeWeight(' +
          v429 +
          ',\'minus\');">−</span><span class="input-group-text" style="padding:.375rem;cursor:pointer;" onclick="changeWeight(' +
          v429 +
          ',\'plus\');" style="border: 1px solid #ced4da;color:#212529;">+</span><span class="input-group-text" style="padding:.375rem;"><span id="item-size-' +
          v429 +
          '">' +
          v434 +
          "</span>%</span></div>";
        v426 +=
          '<input type="hidden" id="item-sound-' +
          v429 +
          '" value="' +
          v431 +
          '">';
        v426 +=
          '<input type="hidden" id="item-message-' +
          v429 +
          '" value="' +
          v430 +
          '">';
        v426 += "</div>";
        v426 += "</div>";
        v426 +=
          '<div class="col-2 d-flex align-items-center justify-content-center p-2 actionarea">';
        v426 +=
          '<button class="btn btn-sm btn-primary p-1 me-1 item-config" id="item-config-' +
          v429 +
          '" onclick="configItem(' +
          v429 +
          ');"><span data-feather="sliders"></span></button>';
        v426 +=
          '<a href="javascript:void(0);" class="text-decoration-none text-secondary item-remove" id="item-remove-' +
          v429 +
          '" data-id="' +
          v429 +
          '" onclick="removeWheelItem(' +
          v429 +
          "," +
          p101 +
          ');"><span data-feather="x"></span></a>';
        v426 += "</div>";
        v426 += "</div>";
        v432 = v431 = v430 = "";
      }
    }
    v426 += "</div>";
    v426 += '<button class="btn btn-primary" id="add-entry">Thêm mục</button>';
    el("advance-editor").innerHTML = v426;
  }
  callbackAfterFillEntries(p100, p101);
  var vGetWheelSettingInArray12 = getWheelSettingInArray();
  if (vGetWheelSettingInArray12) {
    vGetWheelSettingInArray12.entries = p100;
    vGetWheelSettingInArray12.is_advance = p101;
    setWheelSettingFromArray(vGetWheelSettingInArray12);
  }
}
function callbackAfterFillEntries(p105, p106) {
  if (p106 == 0) {
    el("sector_list").classList.remove("d-none");
    el("advance-editor").innerHTML = "";
    el("advance-editor").classList.add("d-none");
    el("sector_list").style.maxHeight =
      el("wheel-center").offsetHeight - 150 + "px";
  } else {
    el("sector_list").innerHTML = "";
    el("sector_list").classList.add("d-none");
    el("advance-editor").classList.remove("d-none");
    el("add-entry").addEventListener("click", addRow);
    if (el("wheel-center").offsetHeight > 400) {
      el("scrollarea").style.maxHeight =
        el("wheel-center").offsetHeight - 200 + "px";
    }
    var v437 = document.querySelectorAll(".item-color");
    if (v437.length) {
      for (var v438 = v437.length - 1; v438 >= 0; v438--) {
        v437[v438].addEventListener("change", function () {
          wheelSettings();
        });
      }
    }
    var v439 = document.querySelectorAll(".item-text");
    if (v439.length) {
      for (var v438 = v439.length - 1; v438 >= 0; v438--) {
        v439[v438].addEventListener("keyup", function () {
          setTimeout(wheelSettings(), 500);
        });
      }
    }
    numberOnly();
  }
  el("entries_count").textContent = p105.length;
  feather.replace();
}
function changeWeight(p107, p108) {
  if (el("item-weight-" + p107).value.trim() !== "") {
    var vGetWheelSettingInArray13 = getWheelSettingInArray();
    var v440 = el("item-weight-" + p107).value.trim();
    if (isNaN(v440) || v440 <= 0) {
      v440 = 1;
      el("item-weight-" + p107).value = 1;
    } else {
      v440 = parseInt(v440);
    }
    if (vGetWheelSettingInArray13) {
      var v441 = vGetWheelSettingInArray13.entries;
      if (v441.length) {
        for (var v442 = 0; v442 < v441.length; v442++) {
          if (v441[v442].id == p107) {
            if (p108 == "plus") {
              el("item-weight-" + p107).value = v440 + 1;
            } else if (p108 == "minus" && v440 > 1) {
              el("item-weight-" + p107).value = v440 - 1;
            }
            v441[v442].weight = parseInt(el("item-weight-" + p107).value);
            vGetWheelSettingInArray13.entries = v441;
            setWheelSettingFromArray(vGetWheelSettingInArray13);
            break;
          }
        }
      }
    }
    fillEntries(v441, 1);
    var v443 = el("item-weight-" + p107).value;
    el("item-weight-" + p107).setSelectionRange(v443.length, v443.length);
    el("item-weight-" + p107).focus();
    setTimeout(loadWheel(), 500);
  }
}
function fixVerticalAlign() {
  if (el("wheel-wrapper")) {
    var v444 = el("row-wheel").offsetHeight;
    if (v444 < window.innerHeight) {
      el("wheel-wrapper").classList.remove("py-2");
      var v445 = "calc((100vh - 65px - " + v444 + "px)/2)";
      el("wheel-wrapper").style.paddingTop = v445;
      el("wheel-wrapper").style.paddingBottom = v445;
    } else {
      el("wheel-wrapper").classList.add("py-2");
    }
  }
}
function logout() {
  if (!isLoggedIn()) {
    loginForm();
    return false;
  }
  var v446 = new XMLHttpRequest();
  v446.open("POST", ajax_object.ajax_url + "?action=ajaxLogout");
  v446.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  v446.onload = function () {
    if (v446.status === 200) {
      window.location = ajax_object.home_url;
    } else if (v446.status !== 200) {
      console.log("error:" + v446.status);
    }
  };
  v446.send("&ajaxsecurity=" + ajax_object.ajax_nonce);
}
function deleteMyAccount() {
  if (!isLoggedIn()) {
    loginForm();
    return false;
  }
  if (
    confirm(
      "- Bạn chắc chắn muốn xóa tài khoản của mình?\n- Hành động này là không thể khôi phục.\n- Nếu chắc chắn, hãy ấn OK."
    )
  ) {
    let vPrompt = prompt("Hãy gõ chữ DELETE vào ô dưới để xóa", "");
    if (vPrompt == "DELETE") {
      var v447 = new XMLHttpRequest();
      v447.open("POST", ajax_object.ajax_url + "?action=deleteMyAccount");
      v447.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );
      v447.onload = function () {
        if (v447.status === 200) {
          if (v447.responseText == "success") {
            window.location = ajax_object.home_url;
          } else {
            alert(v447.responseText);
          }
        } else if (v447.status !== 200) {
          console.log("error:" + v447.status);
        }
      };
      v447.send("&ajaxsecurity=" + ajax_object.ajax_nonce);
    } else if (vPrompt != null && vPrompt != "DELETE") {
      alert("Bạn phải gõ chính xác mới xóa được.");
    }
  }
}
function confirmAdvance(p109) {
  var v448 = 0;
  html = "";
  if (p109 == 1) {
    el("is_advance").checked = true;
    v448 = 1;
    var vGetSectorItem4 = getSectorItem(el("sector_list").innerHTML);
    var vGetCurrentStyleColor4 = getCurrentStyleColor();
    var vParseInt8 = parseInt(vGetCurrentStyleColor4.length);
    var v449 = 0;
    var v450 = [];
    var v451;
    var v452 = null;
    var v453 = "";
    for (var v454 = 0; v454 < vGetSectorItem4.length; v454++) {
      v449 = v454 % vParseInt8;
      if (!vGetSectorItem4[v454].includes("<img")) {
        v450.push({
          text: vGetSectorItem4[v454],
          id: v454,
          color: vGetCurrentStyleColor4[v449],
          weight: 1,
        });
      } else {
        v451 = document.createElement("div");
        v451.innerHTML = vGetSectorItem4[v454];
        v452 = v451.querySelector("img");
        v453 = vGetSectorItem4[v454].replace(/<img[^>]*>/g, "");
        v453 = stripHtml(v453);
        v453 = v453.trim();
        v450.push({
          text: v453,
          id: v454,
          color: vGetCurrentStyleColor4[v449],
          image: v452.src,
          weight: 1,
        });
      }
    }
    console.log("Đã chuyển sang chế độ nâng cao");
    fillEntries(v450, v448);
  } else {
    el("is_advance").checked = false;
    v448 = 0;
    var vGetWheelSettingInArray14 = getWheelSettingInArray();
    if (vGetWheelSettingInArray14) {
      vGetWheelSettingInArray14.is_advance = v448;
      var v455 = vGetWheelSettingInArray14.entries;
      var v450 = [];
      for (var v454 = 0; v454 < v455.length; v454++) {
        if (v455[v454].image) {
          v450.push({
            text: v455[v454].text,
            id: v454,
            image: v455[v454].image,
          });
        } else {
          v450.push({
            text: v455[v454].text,
            id: v454,
          });
        }
      }
      console.log("Đã chuyển về bình thường");
      fillEntries(v450, v448);
      setTimeout(function () {
        loadWheel();
      }, 500);
    }
  }
}
function addRow() {
  var vGetWheelSettingInArray15 = getWheelSettingInArray();
  if (vGetWheelSettingInArray15) {
    var v456 = vGetWheelSettingInArray15.entries;
    var vGetCurrentStyleColor5 = getCurrentStyleColor();
    var v457 = v456.length % vGetCurrentStyleColor5.length;
    v456.push({
      text: "",
      id: v456.length,
      color: vGetCurrentStyleColor5[v457],
      weight: 1,
    });
    fillEntries(v456, 1);
    loadWheel();
  }
}
function setWheelType(p110 = "color") {
  if (p110 == "image") {
    el("type").value = "image";
    el("switch_cover_img").checked = true;
    el("form_cover_img").classList.remove("d-none");
    el("form_theme_color").classList.add("d-none");
    el("show_border").checked = false;
  } else {
    el("type").value = "color";
    el("switch_cover_img").checked = false;
    el("form_cover_img").classList.add("d-none");
    el("form_theme_color").classList.remove("d-none");
    el("show_border").checked = true;
  }
}
if (el("btn_cover_wheel")) {
  el("btn_cover_wheel").addEventListener("click", function () {
    setWheelType("image");
  });
}
if (el("btn_color_wheel")) {
  el("btn_color_wheel").addEventListener("click", function () {
    setWheelType("color");
  });
}
if (el("switch_cover_img")) {
  el("switch_cover_img").addEventListener("click", function () {
    if (this.checked == true) {
      setWheelType("image");
    } else {
      setWheelType("color");
    }
  });
}
if (el("btn-select-cover-img")) {
  el("btn-select-cover-img").addEventListener("click", function () {
    openSearchFormImageFromUnsplash(
      800,
      800,
      "cover_img",
      (keywords = ["cloudy", "pets", "night sky", "candy", "puppy"]),
      "rounded-pill"
    );
    el("cover_img").addEventListener("change", function () {
      el("cover_img_display").src = el("cover_img").value;
    });
  });
}
el("upload_cover_img").addEventListener("change", function () {
  upload("upload_cover_img", "cover_img");
  el("cover_img").addEventListener("change", function () {
    el("cover_img_display").src = el("cover_img").value;
  });
});
document
  .querySelector(".share-link>a")
  .addEventListener("click", function (p111) {
    p111.preventDefault();
    beforeCreateLinkForm();
    hideTwentyTwentyThreeMenu();
  });
if (document.querySelector(".open-link>a")) {
  document
    .querySelector(".open-link>a")
    .addEventListener("click", function (p112) {
      p112.preventDefault();
      viewSharedLink();
      hideTwentyTwentyThreeMenu();
    });
}
el("btn-embed-wheel").addEventListener("click", function () {
  document.querySelector(".share-link>a").click();
});
document
  .querySelector(".template-link>a")
  .addEventListener("click", function (p113) {
    p113.preventDefault();
    openTemplateForm();
    hideTwentyTwentyThreeMenu();
  });
document
  .querySelector(".toggle-link>a")
  .addEventListener("click", function (p114) {
    p114.preventDefault();
    if (this.parentNode.classList.contains("is-hidden")) {
      this.parentNode.classList.remove("is-hidden");
      this.parentNode.classList.add("is-showen");
      this.innerHTML = this.innerHTML.replace(/Đầy đủ/g, "Gọn gàng");
      showInfo();
      el("toggleInfo").checked = false;
      el("btn-actions").classList.add("d-xl-none");
    } else {
      this.parentNode.classList.remove("is-showen");
      this.parentNode.classList.add("is-hidden");
      this.innerHTML = this.innerHTML.replace(/Gọn gàng/g, "Đầy đủ");
      hideInfo();
      el("toggleInfo").checked = true;
      el("btn-actions").classList.remove("d-xl-none");
    }
    hideTwentyTwentyThreeMenu();
    fixVerticalAlign();
  });
el("toggleInfo").addEventListener("click", function () {
  document.querySelector(".toggle-link>a").click();
});
document
  .querySelector(".settings-link>a")
  .addEventListener("click", function (p115) {
    p115.preventDefault();
    openSettingsForm();
    hideTwentyTwentyThreeMenu();
  });
el("btn-settings-wheel").addEventListener("click", function () {
  document.querySelector(".settings-link>a").click();
});
document
  .querySelector(".fullscreen-link>a")
  .addEventListener("click", function (p116) {
    p116.preventDefault();
    fullscreen();
  });
document
  .querySelector(".exit-fullscreen-link>a")
  .addEventListener("click", function (p117) {
    p117.preventDefault();
    exitFullscreen();
  });
if (document.querySelector(".language-link>a")) {
  document
    .querySelector(".language-link>a")
    .addEventListener("click", function (p118) {
      p118.preventDefault();
      hideTwentyTwentyThreeMenu();
      showLanguageForm();
    });
}
if (document.querySelector(".footer-language-link>a")) {
  document
    .querySelector(".footer-language-link>a")
    .addEventListener("click", function (p119) {
      p119.preventDefault();
      showLanguageForm();
    });
}
if (document.querySelector(".download-link>a")) {
  document
    .querySelector(".download-link>a")
    .addEventListener("click", function (p120) {
      p120.preventDefault();
      el("btn-download").click();
    });
}
if (document.querySelector("#btn-generate-code")) {
  el("btn-generate-code").addEventListener("click", function (p121) {
    p121.preventDefault();
    generateCodeForm();
  });
}
function showLanguageForm() {
  var v458 =
    '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="globe"></span> Ngôn ngữ';
  var v459 = "";
  var v460 =
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>';
  v459 += '<div class="h5 mb-3">Gợi ý</div>';
  v459 += '<div class="row g-3 mb-3">';
  v459 +=
    '<div class="col-6 col-md-4"><button class="btn btn-outline-secondary w-100" onclick="changeLanguage(\'en\');">Tiếng Anh</button></div>';
  v459 +=
    '<div class="col-6 col-md-4"><button class="btn btn-outline-secondary w-100" onclick="changeLanguage(\'vi\');">Tiếng Việt</button></div>';
  v459 += "</div>";
  v459 +=
    '<div class="h5 mt-5 mb-3">Tất cả ngôn ngữ (' +
    languages.length +
    ")</div>";
  v459 +=
    '<div class="mb-3"><input type="text" class="form-control" id="search-lang" onkeyup="searchLang();" placeholder="Tìm kiếm"></div>';
  v459 +=
    '<div class="all-languages" style="max-height:350px;overflow-x:hidden;overflow-y:auto;">';
  v459 += '<div class="row g-1 g-md-3 mb-3">';
  for (var v461 = 0; v461 < languages.length; v461++) {
    v459 +=
      '<div class="col-6 col-md-4 trlang" data-code="' +
      languages[v461].code +
      '" data-name="' +
      languages[v461].name +
      '" ><button class="btn btn-outline-secondary w-100" onclick="changeLanguage(\'' +
      languages[v461].code +
      "');\">" +
      languages[v461].name +
      "</button></div>";
  }
  v459 += "</div>";
  v459 += "</div>";
  el("modal-title").innerHTML = v458;
  el("modal-body").innerHTML = v459;
  el("modal-footer").innerHTML = v460;
  el("modal-footer").classList.remove("justify-content-center");
  feather.replace();
  var v462 = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  v462.show();
}
function changeLanguage(p122) {
  if (p122 !== "vi") {
    window.open("https://spinwheel.one/" + p122, "_blank").focus();
  } else {
    location.href = ajax_object.home_url;
  }
}
function searchLang() {
  var v463 = (name = "");
  var v464 = el("search-lang").value.toLowerCase();
  var v465 = document.querySelectorAll(".trlang");
  for (i = 0; i < v465.length; i++) {
    v463 = v465[i].dataset.code;
    name = v465[i].dataset.name;
    if (
      v463.toLowerCase().indexOf(v464) > -1 ||
      name.toLowerCase().indexOf(v464) > -1
    ) {
      v465[i].classList.remove("d-none");
    } else {
      v465[i].classList.add("d-none");
    }
  }
}
el("btn-start-sound-play").addEventListener("click", function () {
  triggerAudio(el("start_sound").value, "play");
});
el("btn-start-sound-stop").addEventListener("click", function () {
  triggerAudio(el("start_sound").value, "stop");
});
el("btn-end-sound-play").addEventListener("click", function () {
  triggerAudio(el("end_sound").value, "play");
});
el("btn-end-sound-stop").addEventListener("click", function () {
  triggerAudio(el("end_sound").value, "stop");
});
el("btn_wheel_setting").addEventListener("click", function () {
  wheelSettings();
});
el("btn-reset-wheel").addEventListener("click", function () {
  resetWheel();
});
el("btn-shuffle-wheel").addEventListener("click", function () {
  sortWheel("random");
});
el("btn-sort-wheel-az").addEventListener("click", function () {
  sortWheel("az");
});
el("btn-sort-wheel-za").addEventListener("click", function () {
  sortWheel("za");
});
el("sector_list").addEventListener("keyup", function () {
  wheelSettings();
  setTimeout(function () {
    loadWheel();
  }, 500);
  countEntries();
});
el("btn-sort-result").addEventListener("click", function () {
  sortResult();
});
el("btn-clear-result").addEventListener("click", function () {
  clearResult();
});
var btn_fill = document.querySelectorAll(".btn-fill");
if (btn_fill.length) {
  var content = [];
  for (var i = 0; i < btn_fill.length; i++) {
    btn_fill[i].addEventListener("click", function () {
      if (this.dataset.content) {
        content = this.dataset.content.split("||");
        fillWheelContent(content);
      }
      if (this.hasAttribute("data-title") && this.dataset.title != "") {
        if (this.hasAttribute("data-desc") && this.dataset.desc != "") {
          fillTitleDesc(this.dataset.title, this.dataset.desc);
        } else {
          fillTitleDesc(this.dataset.title, "");
        }
      }
    });
  }
}
if (el("btn-fill-100")) {
  el("btn-fill-100").addEventListener("click", function () {
    fill100();
  });
}
let addtowheels = document.querySelectorAll(".addtowheel>a");
if (addtowheels.length == 0) {
  addtowheels = document.querySelectorAll("a.addtowheel");
}
if (addtowheels.length) {
  var id = "";
  var temp = [];
  for (var i = 0; i < addtowheels.length; i++) {
    addtowheels[i].addEventListener("click", function (p123) {
      p123.preventDefault();
      href = this.href;
      if (href != "") {
        temp = href.split("#");
        if (temp != null) {
          id = temp[1];
          if (id !== "" && el(id)) {
            addTextToWheel(id);
          }
        }
      }
    });
  }
}
if (el("edit-content")) {
  el("edit-content").addEventListener("click", function () {
    showTitleDescForm();
  });
}
if (document.querySelector(".logout-link")) {
  document
    .querySelector(".logout-link>a")
    .addEventListener("click", function () {
      logout();
    });
}
if (document.querySelector(".profile-link")) {
  document
    .querySelector(".profile-link>a")
    .addEventListener("click", function () {
      profileForm();
      hideTwentyTwentyThreeMenu();
    });
}
if (document.querySelector(".delete-account-link")) {
  document
    .querySelector(".delete-account-link>a")
    .addEventListener("click", function () {
      deleteMyAccount();
      hideTwentyTwentyThreeMenu();
    });
}
if (document.querySelector(".create-link")) {
  document
    .querySelector(".create-link>a")
    .addEventListener("click", function () {
      createLinkForm();
      hideTwentyTwentyThreeMenu();
    });
}
el("upload_bgr").addEventListener("change", function () {
  upload("upload_bgr", "custom-bg-img");
});
el("upload_bgr_tablet").addEventListener("change", function () {
  upload("upload_bgr_tablet", "custom-bg-img-tablet");
});
el("upload_bgr_mobile").addEventListener("change", function () {
  upload("upload_bgr_mobile", "custom-bg-img-mobile");
});
el("upload_spin_bg").addEventListener("change", function () {
  upload("upload_spin_bg", "btn-spin-img");
});
el("media-tab").addEventListener("click", function () {
  loadUploaded();
});
var dropdown_item = document.querySelectorAll("#myDropdown .dropdown-item");
var myDropdown = new bootstrap.Dropdown(el("myDropdown"));
if (dropdown_item.length) {
  var thisColor = [];
  var thisBorder = [];
  var spin_label = (spin_img = "");
  var chkcolor = document.getElementsByName("chkcolor");
  for (var i = 0; i < dropdown_item.length; i++) {
    dropdown_item[i].addEventListener("click", function () {
      thisColor = this.dataset.content.split(",");
      thisBorder = this.dataset.border.split(",");
      spin_label = this.dataset.spin_label;
      spin_img = this.dataset.spin_img;
      is_stroke = this.dataset.is_stroke;
      bg_img = this.dataset.bg_img;
      el("btn-mydropdown").textContent = this.dataset.title;
      if (chkcolor.length) {
        for (var v466 of chkcolor) {
          v466.checked = false;
          el("color-" + v466.value).value = "#ADB2B0";
        }
      }
      if (thisColor.length) {
        for (var v467 = 0; v467 < thisColor.length; v467++) {
          el("color-" + (v467 + 1)).value = thisColor[v467];
          el("chkcolor-" + (v467 + 1)).checked = true;
        }
      }
      el("border_color").value = thisBorder[0];
      el("diamond_color").value = thisBorder[1];
      el("btn-spin-label").value = spin_label;
      el("btn-spin-img").value = spin_img;
      if (is_stroke == "yes") {
        el("is_stroke").checked = true;
      } else {
        el("is_stroke").checked = false;
      }
      if (bg_img) {
        document.body.style.backgroundImage = "url(" + bg_img + ")";
        el("custom-bg-img").value = bg_img;
        el("custom-bg-img-tablet").value = bg_img;
        el("custom-bg-img-mobile").value = bg_img;
      } else {
        document.body.style.backgroundImage = "";
        el("custom-bg-img").value = "";
        el("custom-bg-img-tablet").value = "";
        el("custom-bg-img-mobile").value = "";
      }
      if (el("is_advance").checked == true) {
        alert(
          "Bạn đang ở chế độ [NÂNG CAO] nên màu sắc chỉ áp dụng cho những item mới. Hãy thử Tắt chế độ nâng cao rồi Bật lại để thấy sự thay đổi."
        );
      }
      myDropdown.hide();
    });
  }
}
el("btn-select-bg").addEventListener("click", function () {
  openSearchFormImageFromUnsplash(
    1920,
    1080,
    "custom-bg-img",
    (keywords = ["bokeh", "Abstract", "Cityscape", "Playground", "Educational"])
  );
});
el("btn-select-bg-tablet").addEventListener("click", function () {
  openSearchFormImageFromUnsplash(
    1536,
    2048,
    "custom-bg-img-tablet",
    (keywords = ["bokeh", "Abstract", "Cityscape", "Playground", "Educational"])
  );
});
el("btn-select-bg-mobile").addEventListener("click", function () {
  openSearchFormImageFromUnsplash(
    1080,
    1920,
    "custom-bg-img-mobile",
    (keywords = ["bokeh", "Abstract", "Cityscape", "Playground", "Educational"])
  );
});
el("btn-select-spin-img").addEventListener("click", function () {
  openSearchFormImageFromUnsplash(
    250,
    250,
    "btn-spin-img",
    (keywords = ["cloudy", "pets", "night sky", "candy", "fibonacci"]),
    "rounded-pill"
  );
  el("btn-spin-label").value = "";
});
function openSearchFormImageFromUnsplash(
  p124,
  p125,
  p126,
  p127 = ["bokeh", "Abstract", "Cityscape", "Playground", "Educational"],
  p128 = ""
) {
  var v468 = '<span data-feather="image"></span> Chọn ảnh nền từ unsplash.com';
  var v469 =
    '<a class="text-decoration-none" data-bs-dismiss="modal" id="btn-close-modal-img">Bỏ qua</a> <button type="button" class="btn btn-primary" onClick="insertSelectedImgTo(\'' +
    p126 +
    "');el('" +
    p126 +
    "').dispatchEvent(new Event('change'));\">Đồng ý</button>";
  var v470 = "";
  p127 = shuffle(p127);
  v470 +=
    '<div class="input-group mb-3"><input type="text" class="form-control" id="search-input" value="' +
    p127[0] +
    '" placeholder="Nhập từ khoá bằng tiếng Anh"><button type="button" class="btn btn-primary" id="btn-search-img"><span data-feather="search"></span></button></div>';
  v470 += '<div class="mb-1">Tham khảo:</div>';
  v470 += '<div class="mb-3">';
  var v471 = [
    "bokeh",
    "Abstract",
    "Cityscape",
    "Minimalist",
    "Fantasy",
    "Space",
    "Vintage",
    "Geometric",
    "Artistic",
    "Underwater",
    "Mountains",
    "Beach",
    "Floral",
    "Animal",
    "Forest",
    "Sunset",
    "Winter",
    "Neon",
    "Monochrome",
    "Wildlife",
    "Retro",
    "Educational",
    "Playground",
    "Princess",
    "Fantasy",
    "Superhero",
    "Cartoon",
    "Colorful",
    "Nature",
    "Candy",
    "cloudy",
    "pets",
  ];
  for (kw of v471) {
    v470 +=
      '<a class="btn btn-sm small" href="javascript:void(0);" onclick="el(\'search-input\').value=\'' +
      kw +
      "';el('btn-search-img').click();\">" +
      kw +
      "</a>";
  }
  v470 += "</div>";
  v470 += "";
  var v472 = "";
  if (p124 > 0 && p125 > 0) {
    v472 = 'data-width="' + p124 + '" data-height="' + p125 + '"';
  }
  if (p128 !== "") {
    v472 += ' data-class="' + p128 + '"';
  }
  v470 += '<div id="photo-gallery" class="row g-3 mb-3" ' + v472 + "></div>";
  v470 += '<input type="hidden" id="selected-img" value="" >';
  v470 +=
    '<div class="d-grid gap-2"><button type="button" class="btn btn-primary" id="load-more">Xem thêm</button></div>';
  el("modal-title").innerHTML = v468;
  el("modal-body").innerHTML = v470;
  el("modal-footer").innerHTML = v469;
  el("modal-dialog").classList.add("modal-lg");
  feather.replace();
  var v473 = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  v473.show();
  document.querySelector(".modal-backdrop").style.zIndex = "1040";
  el("myModal").parentNode.style.zIndex = "1050";
  el("myModal").addEventListener("hidden.bs.modal", function () {
    document.querySelector(".modal-backdrop").style.zIndex = "";
    el("myModal").parentNode.style.zIndex = "";
    el("modal-dialog").classList.remove("modal-lg");
  });
  el("btn-search-img").addEventListener("click", function (p129) {
    currentQuery = el("search-input").value;
    currentPage = 1;
    el("photo-gallery").innerHTML = "";
    fetchPhotos(currentQuery, currentPage);
  });
  el("load-more").addEventListener("click", function () {
    currentPage++;
    fetchPhotos(currentQuery, currentPage);
  });
  setTimeout(function () {
    el("btn-search-img").click();
  }, 500);
  el("search-input").addEventListener("keyup", function (p130) {
    if (p130.key === "Enter") {
      el("btn-search-img").click();
    }
  });
}
let editableElement = document.querySelector("#sector_list");
editableElement.addEventListener("paste", function (p131) {
  p131.preventDefault();
  const v474 = (p131.clipboardData || window.clipboardData).getData(
    "text/plain"
  );
  const v475 = v474.split("\n");
  const v476 = document.createDocumentFragment();
  v475.forEach((p132) => {
    const v477 = document.createElement("div");
    v477.textContent = p132;
    v476.appendChild(v477);
  });
  const v478 = window.getSelection();
  const v479 = v478.getRangeAt(0);
  v479.deleteContents();
  v479.insertNode(v476);
  v479.collapse(false);
  v478.removeAllRanges();
  v478.addRange(v479);
});
editableElement.addEventListener("input", function () {
  if (this.innerHTML.trim() === "" || this.innerHTML.trim() === "<br>") {
    this.innerHTML = "<div><br></div>";
  }
});
el("is_advance").addEventListener("change", function (p133) {
  p133.preventDefault();
  var v480 = (modal_body = modal_footer = "");
  if (this.checked) {
    this.checked = false;
    v480 =
      '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="help-circle"></span> Xác nhận';
    modal_body =
      '<p class="alert alert-warning"><strong>Bạn có chắc chắn muốn chuyển sang chế độ nâng cao không?</strong> Chế độ nâng cao cung cấp nhiều tùy chỉnh hơn, nhưng bạn không thể dán nhiều mục nhập cùng một lúc. Bạn luôn có thể quay lại bằng cách bỏ chọn hộp kiểm "Nâng cao".</p>';
    modal_footer =
      '<a class="text-decoration-none" data-bs-dismiss="modal">Bỏ qua</a> <button type="button" class="btn btn-primary" tabindex="1" data-bs-dismiss="modal" id="btn-agree-change-advanced" onClick="confirmAdvance(1);">Đồng ý</button>';
  } else {
    this.checked = true;
    v480 =
      '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="help-circle"></span> Xác nhận';
    modal_body =
      "Nếu bạn hoàn nguyên từ chế độ nâng cao, bạn có thể mất một số màu. Bạn có chắc chắn muốn tiếp tục không?";
    modal_footer =
      '<a class="text-decoration-none" data-bs-dismiss="modal">Bỏ qua</a> <button type="button" class="btn btn-primary" tabindex="1" data-bs-dismiss="modal" id="btn-agree-change-advanced" tabindex="1" onClick="confirmAdvance(0);">Đồng ý</button>';
  }
  el("modal-title").innerHTML = v480;
  el("modal-body").innerHTML = modal_body;
  el("modal-footer").innerHTML = modal_footer;
  el("modal-footer").classList.remove("justify-content-center");
  feather.replace();
  var v481 = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  v481.show();
  el("btn-agree-change-advanced").focus();
});
el("btn-download").addEventListener("click", function () {
  el("loading-spinner").style.display = "block";
  if (typeof domtoimage === "undefined") {
    var v482 = document.createElement("script");
    v482.src =
      "https://cdn.jsdelivr.net/npm/dom-to-image@2.6.0/src/dom-to-image.min.js";
    v482.onload = function () {
      downloadImage();
    };
    document.body.appendChild(v482);
  } else {
    downloadImage();
  }
});
function downloadImage() {
  var v483 = document.getElementById("wheel-container");
  setTimeout(function () {
    domtoimage
      .toPng(v483)
      .then(function (p134) {
        return fetch(p134)
          .then((p135) => p135.blob())
          .then((p136) => {
            var v484 = document.createElement("a");
            v484.href = URL.createObjectURL(p136);
            v484.download = "vong-quay-may-man.png";
            v484.click();
            setTimeout(function () {
              el("loading-spinner").style.display = "none";
            }, 3000);
          });
      })
      .catch(function (p137) {
        console.error("Error generating image:", p137);
        setTimeout(function () {
          el("loading-spinner").style.display = "none";
        }, 3000);
      });
  }, 2000);
}
function generateCodeForm() {
  el("modal-title").innerHTML =
    '<span data-feather="cpu"></span> Tạo mã bốc thăm';
  var v485 =
    '<div class="">\n                  <div class="input-group mb-3"><span class="input-group-text">Số lượng</span> <input type="number" id="totalCode" min="1" class="form-control" value="50" ></div>\n                  <div class="input-group mb-3"><span class="input-group-text">Số kí tự</span> <input type="number" id="lenCode" min="2" class="form-control" value="5" ></div>\n                  Bao gồm: \n                  <div class="form-check form-check-inline">\n                    <input class="form-check-input gencode" type="checkbox" id="uppercase" checked>\n                    <label class="form-check-label" for="uppercase">ABC</label>\n                  </div>\n\n                  <div class="form-check form-check-inline">\n                    <input class="form-check-input gencode" type="checkbox" id="lowercase" checked>\n                    <label class="form-check-label" for="lowercase">abc</label>\n                  </div>\n\n                  <div class="form-check form-check-inline">\n                    <input class="form-check-input gencode" type="checkbox" id="number" checked>\n                    <label class="form-check-label" for="number">123</label>\n                  </div>\n\n                </div>\n             </div>';
  el("modal-body").innerHTML = v485;
  el("modal-footer").innerHTML =
    '<button type="button" tabindex="1" class="btn btn-primary" id="btn-gencode"><span data-feather="cpu"></span> <span id="btn-gencode-txt">Tạo mã ngay</span></button>';
  feather.replace();
  var v486 = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  v486.show();
  var v487 = document.querySelectorAll('input[type="checkbox"].gencode');
  for (var v488 = 0; v488 < v487.length; v488++) {
    v487[v488].addEventListener("click", function () {
      if (countBoxCheckedByClass("gencode") == 1) {
        for (var v489 = 0; v489 < v487.length; v489++) {
          if (v487[v489].checked == true) {
            v487[v489].disabled = true;
          }
        }
      } else {
        for (var v489 = 0; v489 < v487.length; v489++) {
          v487[v489].disabled = false;
        }
      }
    });
  }
  el("btn-gencode").addEventListener("click", function () {
    el("btn-gencode-txt").textContent = "Đang tạo mã...";
    var vParseInt9 = parseInt(el("totalCode").value);
    var vParseInt10 = parseInt(el("lenCode").value);
    var v490 = [];
    var v491 = [];
    if (vParseInt9 <= 0 || vParseInt9 == "") {
      vParseInt9 = 10;
    }
    if (vParseInt10 <= 3 || vParseInt10 == "") {
      vParseInt10 = 3;
    }
    while (v490.length < vParseInt9) {
      code = generateCode();
      codelower = code.toLowerCase();
      if (!v491.includes(codelower)) {
        v490.push(code);
        v491.push(codelower);
      }
    }
    setTimeout(function () {
      fillWheelContent(v490);
      el("btn-gencode-txt").textContent = "Tạo mã ngay";
      feather.replace();
    }, 500);
  });
}
function generateCode() {
  var vParseInt11 = parseInt(el("lenCode").value);
  var v492 = "";
  if (el("uppercase").checked == true) {
    v492 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (el("lowercase").checked == true) {
    v492 += "abcdefghijklmnopqrstuvwxyz";
  }
  if (el("number").checked == true) {
    v492 += "0123456789";
  }
  var vF5 = (p138 = vParseInt11, p139 = v492) =>
    Array.from(crypto.getRandomValues(new Uint32Array(p138)))
      .map((p140) => p139[p140 % p139.length])
      .join("");
  var vVF5 = vF5();
  return vVF5;
}
function menuDecorating() {
  var v493 = document.querySelector(".template-link>a>span");
  var v494 = document.querySelector(".share-link>a>span");
  var v495 = document.querySelector(".fullscreen-link>a>span");
  var v496 = document.querySelector(".exit-fullscreen-link>a>span");
  var v497 = document.querySelector(".settings-link>a>span");
  var v498 = document.querySelector(".toggle-link>a>span");
  var v499 = document.querySelector(".gallery-link>a");
  var v500 = document.querySelector(".my-account-link>a");
  var v501 = document.querySelector(".more-link>a");
  var v502 = document.querySelector(".download-link>a");
  var v503 = document.querySelector(".language-link>a");
  var v504 = document.querySelector(".footer-language-link>a");
  if (v493) {
    v493.insertAdjacentHTML(
      "afterbegin",
      '<span data-feather="folder"></span> '
    );
  }
  if (v500) {
    v500.insertAdjacentHTML("afterbegin", '<span data-feather="user"></span> ');
    if (ajax_object.isShowAds != 1) {
      v500.insertAdjacentHTML("afterend", "<sup>ᴾᴿᴼ</sup>");
    }
  }
  if (v494) {
    v494.insertAdjacentHTML(
      "afterbegin",
      '<span data-feather="share-2"></span> '
    );
  }
  if (v495) {
    v495.innerHTML = '<span data-feather="maximize"></span>';
  }
  if (v496) {
    v496.innerHTML = '<span data-feather="minimize"></span>';
  }
  if (v497) {
    v497.insertAdjacentHTML(
      "afterbegin",
      '<span data-feather="settings"></span> '
    );
  }
  if (v498) {
    v498.insertAdjacentHTML("afterbegin", '<span data-feather="eye"></span> ');
  }
  if (v499) {
    v499.insertAdjacentHTML("afterbegin", '<span data-feather="grid"></span> ');
  }
  if (v501) {
    v501.insertAdjacentHTML(
      "afterbegin",
      '<span data-feather="more-vertical"></span> '
    );
  }
  if (v502) {
    v502.innerHTML = '<span data-feather="download"></span>';
  }
  if (v503) {
    v503.insertAdjacentHTML(
      "afterbegin",
      '<span data-feather="globe"></span> '
    );
  }
  if (v504) {
    document
      .querySelector(".wp-block-navigation-item.footer-language-link")
      .classList.remove("turnoff");
    v504.classList.add("d-flex");
    v504.classList.add("align-items-center");
    v504.innerHTML =
      '<span class="me-2" style="font-size:24px">🇻🇳</span> Tiếng Việt';
  }
  feather.replace();
}
window.addEventListener("DOMContentLoaded", (p141) => {
  var vGetWheelSettingInArray16 = getWheelSettingInArray();
  if (vGetWheelSettingInArray16) {
    var v505 = vGetWheelSettingInArray16.title;
    var v506 = vGetWheelSettingInArray16.desc;
    var v507 = vGetWheelSettingInArray16.start_sound;
    var v508 = vGetWheelSettingInArray16.end_sound;
    var v509 = vGetWheelSettingInArray16.duration;
    var v510 = vGetWheelSettingInArray16.show_confetti;
    var v511 = vGetWheelSettingInArray16.show_popup;
    var v512 = vGetWheelSettingInArray16.popup_label;
    var v513 = vGetWheelSettingInArray16.show_remove_button;
    var v514 = vGetWheelSettingInArray16.colors;
    var v515 = vGetWheelSettingInArray16.custom_bg_color;
    var v516 = vGetWheelSettingInArray16.custom_color;
    var v517 = vGetWheelSettingInArray16.custom_bg_img;
    var v518 = vGetWheelSettingInArray16.btn_spin_label;
    var v519 = "";
    var v520 = vGetWheelSettingInArray16.is_stroke;
    var v521 = vGetWheelSettingInArray16.entries;
    var v522 = "color";
    var v523 = "";
    var v524 = vGetWheelSettingInArray16.is_advance;
    el("start_sound").value = v507 != "" ? v507 : "0";
    el("end_sound").value = v508 != "" ? v508 : "0";
    el("duration").value = v509 != "" ? v509 : 0.991;
    if (v510 == "yes") {
      el("show_confetti").checked = true;
    } else {
      el("show_confetti").checked = false;
    }
    if (v511 == "yes") {
      el("show_popup").checked = true;
    } else {
      el("show_popup").checked = false;
    }
    el("popup_label").value = v512;
    if (v513 == "yes") {
      el("show_remove_button").checked = true;
    } else {
      el("show_remove_button").checked = false;
    }
    if (v520 == "yes") {
      el("is_stroke").checked = true;
    } else {
      el("is_stroke").checked = false;
    }
    if (vGetWheelSettingInArray16.hasOwnProperty("btn_spin_img")) {
      v519 = vGetWheelSettingInArray16.btn_spin_img;
      el("btn-spin-img").value = v519;
    }
    if (vGetWheelSettingInArray16.hasOwnProperty("type")) {
      v522 = vGetWheelSettingInArray16.type;
      setWheelType(v522);
      if (vGetWheelSettingInArray16.hasOwnProperty("cover_img")) {
        v523 = vGetWheelSettingInArray16.cover_img;
        el("cover_img_display").src = v523;
        el("cover_img").value = v523;
      }
    }
    if (vGetWheelSettingInArray16.hasOwnProperty("show_border")) {
      if (vGetWheelSettingInArray16.show_border == "yes") {
        el("show_border").checked = true;
        el("custom_border_color").classList.remove("d-none");
      } else {
        el("show_border").checked = false;
        el("custom_border_color").classList.add("d-none");
      }
      el("border_color").value = vGetWheelSettingInArray16.border_color;
      el("diamond_color").value = vGetWheelSettingInArray16.diamond_color;
    }
    var v525 = document.getElementsByName("chkcolor");
    if (v525.length) {
      for (var v526 of v525) {
        v526.checked = false;
      }
    }
    if (v514.length) {
      for (var v527 of v514) {
        el("chkcolor-" + v527.key).checked = true;
        el("color-" + v527.key).value = v527.value;
      }
    }
    el("popup_label").value = v512;
    el("custom-bg-color").value = v515;
    el("custom-color").value = v516;
    el("btn-spin-label").value = v518;
    root.style.setProperty("--custom_bg_color", v515);
    root.style.setProperty("--custom_color", v516);
    if (v517) {
      setBackgroundImage(v517, "update");
    }
    fillTitleDesc(v505, v506);
    if (v524 == 1) {
      el("is_advance").checked = true;
    } else {
      el("is_advance").checked = false;
    }
    fillEntries(v521, v524);
  } else {
    wheelSettings();
  }
  menuDecorating();
  if (
    el("wheel-container") &&
    rt &&
    (rt == b64DecodeUnicode("dm9uZ3F1YXltYXltYW4ubG9j") ||
      rt == b64DecodeUnicode("dm9uZ3F1YXltYXltYW4uY28="))
  ) {
    loadWheel();
    fixVerticalAlign();
  }
  if (isLoggedIn() && ajax_object.isShowAds == 1) {
    const vGetWithExpiry = getWithExpiry("isAlertExpired");
    if (!vGetWithExpiry) {
      const v528 = document.querySelectorAll(".modal.show");
      if (v528.length == 0) {
        setTimeout(function () {
          el("modal-title").innerHTML =
            '<span data-feather="message-square"></span> Nhận tài khoản PRO miễn phí ?';
          el("modal-body").innerHTML =
            '<p class="alert alert-success"><strong>Tài khoản PRO</strong> sẽ <strong>không bị quảng cáo làm phiền</strong> mà lại nhiều tính năng hơn. Bạn có muốn <strong>kích hoạt miễn phí tài khoản PRO</strong> ngay bây giờ không? Hãy làm theo hướng dẫn sau nhé. </p>';
          el("modal-footer").innerHTML =
            '<a class="btn btn-primary" href="' +
            ajax_object.home_url +
            '/tat-quang-cao/">Hướng dẫn tôi</a>';
          feather.replace();
          var v529 = new bootstrap.Modal(el("myModal"), {
            backdrop: "static",
            keyboard: false,
          });
          v529.show();
          setWithExpiry("isAlertExpired", 1, 30);
        }, 30000);
      }
    }
  }
  feather.replace();
  const v530 = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const v531 = [...v530].map((p142) => new bootstrap.Tooltip(p142));
});
