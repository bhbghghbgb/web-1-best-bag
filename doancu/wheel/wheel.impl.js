var f = (function () {
  var j = true;
  return function (q, z) {
    var aa = j
      ? function () {
          if (z) {
            var ab = z.apply(q, arguments);
            z = null;
            return ab;
          }
        }
      : function () {};
    j = false;
    return aa;
  };
})();
var ac = f(this, function () {
  var ad = function () {
    var ae;
    try {
      ae = Function('return (function() {}.constructor("return this")( ));')();
    } catch (af) {
      ae = window;
    }
    return ae;
  };
  var ag = ad();
  var ah = new RegExp(
    "[hYdfeIEMPGWBPkSdhAJHVdDCpApLZpSQUQNjZxUkOhsrZQGhNOMTizIPRSIGFCdshYKrsdfWHizthD]",
    "g"
  );
  var aj =
    "hvoYdnfgquaymeIaEMymPGWBaPknSd.co;hAvoJngHquVaymdDCaympan.AlpoLcZpSQUQNjZxUkOhsrZQGhNOMTizIPRSIGFCdshYKrsdfWHizthD"
      .replace(ah, "")
      .split(";");
  var ak;
  var al;
  var am;
  var an;
  var ao = function (ap, aq, ar) {
    if (ap.length != aq) {
      return false;
    }
    for (var as = 0; as < aq; as++) {
      for (var at = 0; at < ar.length; at += 2) {
        if (as == ar[at] && ap.charCodeAt(as) != ar[at + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  for (var au in ag) {
    if (ao(au, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      ak = au;
      break;
    }
  }
  for (var av in ag[ak]) {
    if (ao(av, 6, [5, 110, 0, 100])) {
      al = av;
      break;
    }
  }
  for (var aw in ag[ak]) {
    if (ao(aw, 8, [7, 110, 0, 108])) {
      am = aw;
      break;
    }
  }
  if (!("~" > al)) {
    for (var ax in ag[ak][am]) {
      if (ao(ax, 8, [7, 101, 0, 104])) {
        an = ax;
        break;
      }
    }
  }
  if (!ak || !ag[ak]) {
    return;
  }
  var ay = ag[ak][al];
  var ba = !!ag[ak][am] && ag[ak][am][an];
  var bb = ay || ba;
  if (!bb) {
    return;
  }
  var bc = false;
  for (var bd = 0; bd < aj.length; bd++) {
    var al = aj[bd];
    var be = al[0] === String.fromCharCode(46) ? al.slice(1) : al;
    var bf = bb.length - be.length;
    var bh = bb.indexOf(be, bf);
    var bj = bh !== -1 && bh === bf;
    if (bj) {
      if (bb.length == al.length || al.indexOf(".") === 0) {
        bc = true;
      }
    }
  }
  if (!bc) {
    var bk = new RegExp(
      "[JBrdOHeQdOdeAHGVQPUDJHBSPFJzUOBjQCIWOejMrQkWZNUIUUxAf]",
      "g"
    );
    var bl =
      "htJBrtdOpHs:e//QdOdeAHGvongVQquaPyUmaDJHBSymPaFnJ.zUOBjQcCoIWOejMrQkWZNUIUUxAf".replace(
        bk,
        ""
      );
    ag[ak][am] = bl;
  }
});
ac();
const root = document.querySelector(":root");
var extra_name = el("extra_name").value;
const languages = ajax_object.languages;
function measureText(bm, bn) {
  const bo = document.createElement("span");
  bo.appendChild(document.createTextNode(bm));
  Object.assign(bo.style, {
    font: bn,
    margin: "0",
    padding: "0",
    border: "0",
    whiteSpace: "nowrap",
  });
  document.body.appendChild(bo);
  const { width: bp, height: bq } = bo.getBoundingClientRect();
  bo.remove();
  return {
    width: bp,
    height: bq,
  };
}
if (
  !rt ||
  (rt != b64DecodeUnicode("dm9uZ3F1YXltYXltYW4ubG9j") &&
    rt != b64DecodeUnicode("dm9uZ3F1YXltYXltYW4uY28="))
) {
  window.location.href = b64DecodeUnicode("dm9uZ3F1YXltYXltYW4uY28=");
}
function getText(bt, bu) {
  if (bt.nodeType === 3) {
    bu.push(bt.nodeValue);
  } else {
    if (bt.nodeName === "IMG") {
      bu.push('<img src="' + bt.src + '" >');
    } else {
      for (let bv of bt.childNodes) getText(bv, bu);
    }
  }
}
function getItemList(bw) {
  var bx = Array.from(bw.children);
  var by = [];
  if (bx.length) {
    for (var bz = 0; bz < bx.length; bz++) {
      by.push(bx[bz].innerHTML);
    }
  }
  return by;
}
function getSectorItem(ca) {
  if (ca) {
    var cb = ca.match(/<div>(.*?)<\/div>/g).map(function (cc) {
      cc = cc.replace(/<\/?div>/g, "");
      if (cc && !cc.includes("img")) {
        cc = stripHtml(cc);
        cc = cc.trim();
      }
      return cc;
    });
    return cb.filter(function (cd) {
      return cd !== "";
    });
  } else {
    return [];
  }
}
function getImgSrc(ce) {
  const cf = document.createElement("div");
  cf.innerHTML = ce;
  const cg = cf.querySelector("img");
  return cg.src;
}
function stripHtml(ci) {
  var cj = document.createElement("div");
  cj.innerHTML = ci;
  return cj.textContent || cj.innerText || "";
}
function getCurrentStyleColor() {
  var ck = [];
  var cl = document.getElementsByName("chkcolor");
  if (cl.length) {
    for (var cm of cl) {
      if (cm.checked) {
        ck.push(el("color-" + cm.value).value);
      }
    }
  }
  if (ck.length == 0) {
    ck = ["#D51025", "#3369E8", "#039924", "#EEB212"];
  }
  return ck;
}
function setBackgroundImage(cn, cp = "view") {
  var cq = window.innerWidth;
  let cr;
  if (typeof cn === "string") {
    cr = cn;
    if (cp === "update") {
      el("custom-bg-img").value = cn;
      el("custom-bg-img-tablet").value = cn;
      el("custom-bg-img-mobile").value = cn;
    }
  } else {
    if (Array.isArray(cn)) {
      if (cn[0]) {
        cr = cn[0];
      }
      if (cq < 768 && cn[2]) {
        cr = cn[2];
      } else if (cq <= 1024 && cn[1]) {
        cr = cn[1];
      }
      if (cp === "update") {
        el("custom-bg-img").value = cn[0];
        el("custom-bg-img-tablet").value = cn[1];
        el("custom-bg-img-mobile").value = cn[2];
      }
    }
  }
  if (cr) {
    document.body.style.backgroundImage = "url(" + cr + ")";
  } else {
    document.body.style.backgroundImage = "";
  }
}
function getWheelSettingInArray() {
  var cs = el("extra_name").value;
  var ct = localStorage.getItem("wheelSetting" + cs);
  var cu = null;
  if (ct) {
    cu = JSON.parse(ct);
  }
  return cu;
}
function setWheelSettingFromArray(cv) {
  var cw = el("extra_name").value;
  localStorage.setItem("wheelSetting" + cw, JSON.stringify(cv));
}
async function loadWheel() {
  var cx = getWheelSettingInArray();
  if (cx == null) {
    return false;
  }
  var cy = cx.start_sound;
  var soundOption = cx.end_sound;
  var showConfetti = cx.show_confetti;
  var showResult = cx.show_popup;
  var cz = cx.popup_label;
  var da = cx.show_remove_button;
  var db = cx.btn_spin_label;
  var backgroundImage = "";
  var dc = cx.is_advance;
  var dd = cx.entries;
  var decelerationFactor = cx.duration;
  var de = cx.is_stroke;
  var wheelType = "color";
  var df = "";
  var dg = "no";
  var dh = "#FF4D00";
  var di = "#F6FA00";
  if (cx.hasOwnProperty("show_border")) {
    dg = cx.show_border;
    dh = cx.border_color;
    di = cx.diamond_color;
  }
  if (cx.hasOwnProperty("btn_spin_img")) {
    backgroundImage = cx.btn_spin_img;
  }
  if (cx.hasOwnProperty("type")) {
    wheelType = cx.type;
  }
  if (cx.hasOwnProperty("cover_img")) {
    df = cx.cover_img;
  }
  if (
    !rt ||
    (rt != b64DecodeUnicode("dm9uZ3F1YXltYXltYW4ubG9j") &&
      rt != b64DecodeUnicode("dm9uZ3F1YXltYXltYW4uY28="))
  ) {
    window.location.href = b64DecodeUnicode("dm9uZ3F1YXltYXltYW4uY28=");
  }
  var dj = 600;
  var dk = document.body.clientWidth;
  if (dk >= 1600) {
    dj = 700;
  }
  if (dk >= 2000) {
    dj = 800;
  }
  if (dk >= 3000) {
    dj = 900;
  }
  el("wheel-container").innerHTML =
    '<div id="wheelOfFortune"><canvas id="wheel" width="' +
    dj +
    '" height="' +
    dj +
    '"></canvas><div id="spin">' +
    db +
    '</div><div id="instruction"><img src="' +
    ajax_object.theme_uri +
    '/assets/images/instruction.svg"></div></div>';
  var wheelSectors = [
    {
      text: "",
      id: 0,
      color: "#ADB2B0",
    },
  ];
  if (dc == 0) {
    el("sector_list").style.maxHeight = dj - 150 + "px";
    if (dd.length) {
      wheelSectors = dd;
      var dl = cx.colors;
      for (var dm = 0; dm < wheelSectors.length; dm++) {
        wheelSectors[dm].color = dl[dm % dl.length].value;
        wheelSectors[dm].weight = 1;
      }
    }
  } else {
    el("scrollarea").style.maxHeight = dj - 200 + "px";
    if (dd.length) {
      wheelSectors = dd;
    }
  }
  const totalWeight = wheelSectors.reduce(
    (accumulatedWeight, sector) => accumulatedWeight + sector.weight,
    0
  );
  const sectorAngles = wheelSectors.map(
    (sector) => (sector.weight / totalWeight) * 2 * Math.PI
  );
  const resultDisplay = document.querySelector("#spin");
  const dn = document.querySelector("#instruction");
  const dp = resultDisplay.offsetWidth;
  const wheelElement = document.querySelector("#wheel").getContext("2d");
  const dq = wheelElement.canvas.width;
  const dr = dq / 2;
  const sectorAngle = Math.PI;
  const ds = 2 * sectorAngle;
  const dt = ds / wheelSectors.length;
  const du = dt * dr;
  let spinDecrement = 0;
  let currentWheelAngle = 0;
  const calcCurrentSectorIndex = () => {
    let cumulativeAngle = 0;
    for (let i = 0; i < sectorAngles.length; i++) {
      cumulativeAngle += sectorAngles[i];
      if (Math.abs(currentWheelAngle) < cumulativeAngle) {
        return i;
      }
    }
    return 0;
  };
  var dv = 60;
  var dw = 0;
  var dx = 0;
  var dy;
  var dz = du;
  var ea = 20;
  if (dg == "yes") {
    ea = 30;
  }
  wheelElement.font = "normal " + dv + "px " + "sans-serif";
  for (var dm = 0; dm < wheelSectors.length; dm++) {
    wheelSectors[dm].alias = wheelSectors[dm].text;
    if (wheelSectors[dm].text !== "") {
      wheelSectors[dm].alias = truncateByLength(wheelSectors[dm].text, 17);
      dy = measureText(wheelSectors[dm].alias, wheelElement.font);
      dx = dy.height;
      dw = dy.width;
      dz =
        2 * sectorAngle * (dr - dw) * (wheelSectors[dm].weight / totalWeight);
      while (dv > 6 && (dx > dz || dw > dr - dp - 30 - ea)) {
        dv -= 1;
        wheelElement.font = "normal " + dv + "px " + "sans-serif";
        dy = measureText(wheelSectors[dm].alias, wheelElement.font);
        dx = dy.height;
        dw = dy.width;
        dz =
          2 * sectorAngle * (dr - dw) * (wheelSectors[dm].weight / totalWeight);
      }
    }
  }
  async function eb(ec) {
    const ed = ec.map((ee) => {
      if (ee.hasOwnProperty("image")) {
        return ef(ee.image);
      }
      return Promise.resolve(null);
    });
    const eg = await Promise.all(ed);
    return eg;
  }
  function ef(eh) {
    return new Promise((ei, ej) => {
      const ek = new Image();
      ek.onload = () => ei(ek);
      ek.onerror = (em) => ej(em);
      ek.crossOrigin = "Anonymous";
      ek.src = eh;
    });
  }
  async function eo(ep, eq, er, es) {
    wheelElement.save();
    wheelElement.beginPath();
    wheelElement.fillStyle = ep.color;
    if (wheelType == "image") {
      wheelElement.fillStyle = "transparent";
    }
    wheelElement.moveTo(dr, dr);
    wheelElement.arc(dr, dr, dr, eq - er, eq);
    wheelElement.lineTo(dr, dr);
    wheelElement.fill();
    if (de == "yes") {
      wheelElement.strokeStyle = "rgba(0,0,0,0.5)";
      wheelElement.fillStyle = "rgba(0,0,0,0.5)";
      wheelElement.lineWidth = 1;
      wheelElement.stroke();
    }
    wheelElement.translate(dr, dr);
    wheelElement.rotate(eq - er / 2);
    if (!ep.hasOwnProperty("image")) {
      wheelElement.textAlign = "right";
      wheelElement.textBaseline = "middle";
      wheelElement.fillStyle = "#fff";
      if (wheelType == "color") {
        if (isWhite(ep.color)) {
          wheelElement.fillStyle = "#000";
        }
      }
      wheelElement.fillText(ep.alias, dr - ea, 0);
    } else {
      const et = es.width / es.height;
      let eu = 2 * sectorAngle * (dp / 2) * (ep.weight / totalWeight);
      let ev = dr - dp / 2 - ea;
      let ew = eu * et;
      let ex = eu;
      let ey = dr - ea - ew;
      let ez = -ex / 2;
      let fa = 2 * sectorAngle * ey * (ep.weight / totalWeight);
      if (ew < ev) {
        while (ey > dp / 2 && ex < fa && ew < ev) {
          ew += 1;
          ex = ew / et;
          ey = dr - ea - ew;
          ez = -ex / 2;
          fa = 2 * sectorAngle * ey * (ep.weight / totalWeight);
        }
      } else {
        while (ey < dp / 2 || ex > fa || ew > ev) {
          ew -= 1;
          ex = ew / et;
          ey = dr - ea - ew;
          ez = -ex / 2;
          fa = 2 * sectorAngle * ey * (ep.weight / totalWeight);
        }
      }
      if (ep.text !== "") {
        wheelElement.save();
        wheelElement.globalAlpha = 0.6;
        wheelElement.drawImage(es, ey, ez, ew, ex);
        wheelElement.globalAlpha = 1;
        wheelElement.textAlign = "right";
        wheelElement.textBaseline = "middle";
        wheelElement.fillStyle = "#fff";
        wheelElement.lineWidth = 3;
        wheelElement.strokeStyle = "black";
        if (wheelType == "color") {
          if (isWhite(ep.color)) {
            wheelElement.fillStyle = "#000";
            wheelElement.strokeStyle = "white";
          }
        }
        wheelElement.strokeText(ep.alias, dr - ea, 0);
        wheelElement.fillText(ep.alias, dr - ea, 0);
        wheelElement.restore();
      } else {
        wheelElement.drawImage(es, ey, ez, ew, ex);
      }
    }
    wheelElement.restore();
  }
  function fb() {
    wheelElement.save();
    wheelElement.beginPath();
    const fc = wheelElement.createLinearGradient(
      0,
      0,
      0,
      wheelElement.canvas.height
    );
    const fd = dh;
    const fe = newShade(fd, 20);
    fc.addColorStop(0, fd);
    fc.addColorStop(1, fe);
    wheelElement.strokeStyle = fc;
    wheelElement.lineWidth = 15;
    wheelElement.arc(dr, dr, dr - 7.5, 0, ds);
    wheelElement.stroke();
    let ff = 0;
    for (let fg = 0; fg < wheelSectors.length; fg++) {
      ff -= sectorAngles[fg];
      const fh = dr + (dr - 7.5) * Math.cos(ff + sectorAngles[fg] / 2);
      const fi = dr + (dr - 7.5) * Math.sin(ff + sectorAngles[fg] / 2);
      const fj = di.replace("#", "");
      const fk = parseInt(fj.substring(0, 2), 16);
      const fl = parseInt(fj.substring(2, 4), 16);
      const fm = parseInt(fj.substring(4, 6), 16);
      const fn = wheelElement.createRadialGradient(fh, fi, 0, fh, fi, 10);
      fn.addColorStop(0, "rgba(" + fk + ", " + fl + ", " + fm + ", 1)");
      fn.addColorStop(0.5, "rgba(" + fk + ", " + fl + ", " + fm + ", 0.5)");
      fn.addColorStop(1, "rgba(" + fk + ", " + fl + ", " + fm + ", 0)");
      wheelElement.beginPath();
      wheelElement.arc(fh, fi, 10, 0, ds);
      wheelElement.fillStyle = fn;
      wheelElement.fill();
    }
    wheelElement.restore();
  }
  function updateWheelDisplay() {
    const wheelSector = wheelSectors[calcCurrentSectorIndex()];
    wheelElement.canvas.style.transform =
      "rotate(" + (currentWheelAngle - sectorAngle / 2) + "rad)";
    if (wheelType == "image") {
      resultDisplay.style.backgroundColor = "#ADB2B0";
      resultDisplay.style.color = "#fff";
    } else {
      resultDisplay.style.backgroundColor = wheelSector.color;
      resultDisplay.style.color = "#fff";
      if (isWhite(wheelSector.color)) {
        resultDisplay.style.color = "#000";
      }
    }
    if (backgroundImage !== "") {
      resultDisplay.style.backgroundImage = "url(" + backgroundImage + ")";
    }
  }
  const spinDecrementStopThreshold = 0.002;
  function spinWheel() {
    if (!spinDecrement) {
      return;
    }
    spinDecrement *= decelerationFactor;
    if (spinDecrement < spinDecrementStopThreshold) {
      spinDecrement = 0;
      console.log("totalAngleActual", totalAngleActual);
      console.log("totalIterationActual", totalIterationActual);
      console.log("riggedAngleError", totalAngleSimulated - totalAngleActual);
      console.log(
        "riggedIterationError",
        totalIterationSimulated - totalIterationActual
      );
      const selectedSector = wheelSectors[calcCurrentSectorIndex()];
      if (el("wheel_result")) {
        var fo = "";
        if (selectedSector.hasOwnProperty("image")) {
          fo =
            '<div><img src="' +
            selectedSector.image +
            '" > ' +
            selectedSector.text +
            "</div>";
        } else {
          fo = "<div>" + selectedSector.text + "</div>";
        }
        el("wheel_result").innerHTML = fo + el("wheel_result").innerHTML;
        var fp = getSectorItem(el("wheel_result").innerHTML);
        el("result_count").textContent = fp.length;
      }
      if (showResult == "yes") {
        var resultColor = selectedSector.color;
        if (isWhite(resultColor)) {
          resultColor = "#000000";
        }
        var modalTitle =
          '<span class="d-flex"><span class="me-1" style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="clipboard"></span> ';
        if (selectedSector.hasOwnProperty("message")) {
          if (selectedSector.message !== "") {
            modalTitle += selectedSector.message;
          } else {
            modalTitle += cz;
          }
        } else {
          modalTitle += cz;
        }
        modalTitle += "</span>";
        var modalBody = "";
        var fq = selectedSector.hasOwnProperty("image");
        if (fq) {
          modalBody +=
            '<div class="position-absolute top-0 end-0 text-end"><button class="btn btn-sm fs-6 text-muted" onClick="rotateImage(\'rsImage\', -90)" title="Xoay ảnh">Xoay ↺</button><div class="form-check text-muted fs-6 me-2"><input class="form-check-input ms-0" type="checkbox" id="btn-show-bg" title="Bật tắt màu nền cho ảnh" checked onClick="if(this.checked==true) el(\'rsImage\').style.backgroundColor=\'' +
            selectedSector.color +
            '\';else el(\'rsImage\').style.backgroundColor=\'\';" ></div></div><div class="text-center mb-3"><img id="rsImage" src="' +
            selectedSector.image +
            '" class="rounded-1" style="max-width:100%;transition: transform 0.5s ease;background-color:' +
            selectedSector.color +
            ';" ></div>';
        }
        if (selectedSector.text !== "") {
          if (!fq) {
            modalBody +=
              '<div class="fs-1 text-center mb-3" style="color:' +
              resultColor +
              '"><span style="width: 50px;height:50px;" data-feather="smile"></span></div>';
          }
          modalBody +=
            '<div class="text-center fs-1" style="color:' +
            resultColor +
            '; word-break: break-all;">' +
            selectedSector.text +
            "</div>";
        }
        var modalFooter = "";
        if (da == "yes") {
          modalFooter +=
            '<button type="button" onclick="removeWheelItem(' +
            selectedSector.id +
            "," +
            dc +
            ')" class="btn btn-danger" data-bs-dismiss="modal">Xóa ô này</button>';
        }
        modalFooter +=
          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng lại</button>';
        el("modal-title").innerHTML = modalTitle;
        el("modal-body").innerHTML = modalBody;
        el("modal-footer").innerHTML = modalFooter;
        el("modal-footer").classList.add("justify-content-center");
        feather.replace();
        var fr = new bootstrap.Modal(el("myModal"), {
          backdrop: true,
        });
        fr.show();
      }
      var audioToPlay = "";
      if (soundOption === "random") {
        var ft = Object.keys(end_sound_option);
        ft = shuffle(ft);
        audioToPlay = ft[0];
      } else {
        if (soundOption === "read") {
          triggerAudio("", "stop");
          if (selectedSector.text !== "") {
            textToSpeech(cz + ": " + selectedSector.text, "vi-VN");
          }
        } else if (
          soundOption !== 0 &&
          soundOption !== "random" &&
          soundOption !== "read"
        ) {
          audioToPlay = soundOption;
        }
      }
      if (selectedSector.hasOwnProperty("sound")) {
        if (selectedSector.sound !== "") {
          audioToPlay = selectedSector.sound;
        }
      }
      if (audioToPlay) {
        triggerAudio(audioToPlay, "play");
      }
      if (showConfetti == "yes") {
        confetti.start(1200, 50, 150);
      }
      toggleDisabledAll(false);
    }
    currentWheelAngle += spinDecrement;
    currentWheelAngle %= ds;
    totalAngleActual += spinDecrement;
    totalIterationActual++;
    updateWheelDisplay();
  }
  function animateSpin() {
    spinWheel();
    requestAnimationFrame(animateSpin);
  }
  const baseSpinDecrement = 0.25;
  const scalingSpinDecrement = 0.09999999999999998;
  const originalSpinDecrement =
    Math.random() * scalingSpinDecrement + baseSpinDecrement;
  let totalAngleSimulated = 0;
  let totalAngleActual = 0;
  let totalIterationSimulated = 0;
  let totalIterationActual = 0;
  const riggedSpinDecrement = () => {
    try {
      const riggedIndex = -1;
      const riggedAnything = "Dũng";
      const twoPi = 2 * Math.PI;
      const riggedSectorIndex = Math.min(
        Math.max(
          0,
          riggedIndex,
          wheelSectors.findIndex((str) =>
            Object.values(str).some((text) => text == riggedAnything)
          )
        ),
        sectorAngles.length - 1
      );
      console.log(
        `riggedSpinDecrement index=${riggedSectorIndex} sector=${JSON.stringify(
          wheelSectors[riggedSectorIndex]
        )}`
      );
      let riggedSectorAngleStart = 0;
      for (let i = 0; i < riggedSectorIndex; i++) {
        riggedSectorAngleStart += sectorAngles[i];
      }
      const riggedSectorAngleEnd =
        riggedSectorAngleStart + sectorAngles[riggedSectorIndex];
      let simulatedWheelAngle = currentWheelAngle;
      const possibleSpinDeceleration = [];
      totalAngleSimulated = 0;
      let simulatingTotalAngle = totalAngleSimulated;
      totalAngleActual = 0;
      totalIterationSimulated = 0;
      totalIterationActual = 0;
      let simulatingTotalIteration = 0;
      for (
        let deceleration = spinDecrementStopThreshold;
        deceleration <= baseSpinDecrement + scalingSpinDecrement;
        deceleration /= decelerationFactor
      ) {
        simulatedWheelAngle += deceleration;
        simulatedWheelAngle %= twoPi;
        simulatingTotalAngle += deceleration;
        simulatingTotalIteration++;
        if (deceleration < baseSpinDecrement) {
          continue;
        }
        if (
          simulatedWheelAngle > riggedSectorAngleStart &&
          simulatedWheelAngle < riggedSectorAngleEnd
        ) {
          possibleSpinDeceleration.push([
            deceleration / decelerationFactor,
            simulatingTotalAngle,
            simulatingTotalIteration,
          ]);
        }
      }
      const calculatedSpinDecrement =
        possibleSpinDeceleration[
          Math.floor(Math.random() * possibleSpinDeceleration.length)
        ];
      totalAngleSimulated = calculatedSpinDecrement?.[1];
      totalIterationSimulated = calculatedSpinDecrement?.[2];
      console.log("possibleSpinDeceleration", possibleSpinDeceleration);
      console.log("riggedSpinDecrement", calculatedSpinDecrement);
      console.log("totalAngleSimulated", totalAngleSimulated);
      console.log("totalIterationSimulated", totalIterationSimulated);
      const riggedSpinDecrementValue = calculatedSpinDecrement?.[0];
      let sanityTotalAngle = 0;
      for (
        let i = riggedSpinDecrementValue * decelerationFactor;
        i >= spinDecrementStopThreshold;
        i *= decelerationFactor
      ) {
        sanityTotalAngle += i;
      }
      console.log("sanityTotalAngle", sanityTotalAngle);
      if (
        riggedSpinDecrementValue == null ||
        !isFinite(riggedSpinDecrementValue)
      ) {
        console.log("riggedSpinDecrement failed to lock any result.");
        return null;
      }
      return riggedSpinDecrementValue;
    } catch (error) {
      console.error(error);
      console.log("riggedSpinDecrement failed to lock any result.");
      return null;
    }
  };
  resultDisplay.addEventListener("click", () => {
    clearInterval(fu);
    if (dn) {
      dn.classList.add("d-none");
    }
    var fv = "";
    if (cy == "random") {
      var fx = Object.keys(start_sound_option);
      fx = shuffle(fx);
      fv = fx[0];
    } else if (cy != 0 && cy != "random") {
      fv = cy;
    }
    if (fv != "") {
      triggerAudio(fv, "play");
    }
    toggleDisabledAll(true);
    if (!spinDecrement) {
      spinDecrement = originalSpinDecrement;
      spinDecrement = riggedSpinDecrement();
    }
  });
  const fy = await eb(wheelSectors);
  if (wheelType == "image" && df) {
    const fz = new Image();
    fz.src = df;
    fz.onload = () => {
      wheelElement.drawImage(
        fz,
        0,
        0,
        wheelElement.canvas.width,
        wheelElement.canvas.height
      );
      let ga = 0;
      for (let gb = 0; gb < wheelSectors.length; gb++) {
        eo(wheelSectors[gb], ga, sectorAngles[gb], fy[gb]);
        ga -= sectorAngles[gb];
      }
    };
  } else {
    let gc = 0;
    for (let gd = 0; gd < wheelSectors.length; gd++) {
      eo(wheelSectors[gd], gc, sectorAngles[gd], fy[gd]);
      gc -= sectorAngles[gd];
    }
  }
  if (dg == "yes") {
    fb();
  }
  updateWheelDisplay();
  animateSpin();
  let fu = setInterval(() => {
    currentWheelAngle += 0.004;
    updateWheelDisplay();
  }, 30);
  dn.addEventListener("click", function () {
    resultDisplay.click();
  });
}
function fillWheelContent(ge) {
  var gf = 0;
  if (el("is_advance").checked) {
    gf = 1;
  }
  var gg = getCurrentStyleColor();
  if (ge.length) {
    var gh = [];
    for (var gj = ge.length - 1; gj >= 0; gj--) {
      gh.push({
        text: ge[gj],
        id: gj,
        color: gg[gj % gg.length],
      });
    }
    fillEntries(gh, gf);
    loadWheel();
  }
}
function sortWheel(gk) {
  var gl = getWheelSettingInArray();
  if (gl) {
    var gm = gl.entries;
    if (gm.length) {
      switch (gk) {
        case "random":
          gm.sort(() => Math.random() - 0.5);
          break;
        case "az":
          gm.sort(function (gn, go) {
            if (gn.text < go.text) {
              return -1;
            }
            if (gn.text > go.text) {
              return 1;
            }
            return 0;
          });
          break;
        case "za":
          gm.sort(function (gp, gq) {
            if (gp.text > gq.text) {
              return -1;
            }
            if (gp.text < gq.text) {
              return 1;
            }
            return 0;
          });
          break;
      }
      for (var gr = gm.length - 1; gr >= 0; gr--) {
        gm[gr].id = gr;
      }
      fillEntries(gm, gl.is_advance);
      setTimeout(loadWheel(), 500);
    }
  }
}
function upDown(gs, gu) {
  var gv = getWheelSettingInArray();
  if (gv) {
    var gw = gv.entries;
    if (gw.length) {
      if (gu == "up") {
        var gx = gs;
        var gy = gs - 1;
      } else {
        var gx = gs;
        var gy = gs + 1;
      }
      gw = swapArrayElement(gw, gx, gy);
      for (var gz = gw.length - 1; gz >= 0; gz--) {
        gw[gz].id = gz;
      }
      fillEntries(gw, 1);
      setTimeout(loadWheel(), 500);
    }
  }
}
function removeWheelItem(ha, hb) {
  var hc = getWheelSettingInArray();
  if (hc !== null) {
    var hd = hc.entries;
    hd = hd.filter((he) => he.id !== ha);
    hc.entries = hd;
    if (hd.length) {
      for (var hf = hd.length - 1; hf >= 0; hf--) {
        hd[hf].id = hf;
      }
    }
    setWheelSettingFromArray(hc);
    fillEntries(hd, hb);
    setTimeout(function () {
      loadWheel();
    }, 500);
    console.log("Đã xoá " + ha);
  }
}
function removeItemImage(hg) {
  var hh = getWheelSettingInArray();
  if (hh !== null) {
    var hj = hh.entries;
    if (hj.length) {
      for (var hk = hj.length - 1; hk >= 0; hk--) {
        if (hj[hk].id == hg) {
          delete hj[hk].image;
        }
      }
    }
    hh.entries = hj;
    setWheelSettingFromArray(hh);
    fillEntries(hj, 1);
    setTimeout(loadWheel(), 500);
    console.log("Đã xoá ảnh " + hg);
  }
}
function beforeCreateLinkForm() {
  var hl = parseInt(el("link_id").value);
  if (hl > 0) {
    createLinkForm();
  } else {
    var hm =
      '<div class="mb-3"> <strong>Link chia sẻ</strong> là một liên kết tới vòng quay hiện tại bao gồm tên, màu sắc, âm thanh và các cài đặt hiện tại.</div>';
    hm +=
      '<div class="mb-3"><strong>Ví dụ:</strong> <a href="' +
      ajax_object.home_url +
      '/c:35A4E901" target="_blank">' +
      ajax_object.home_url +
      "/c:35A4E901</a></div>";
    hm +=
      '<div class="mb-3">Việc tạo liên kết này sẽ giúp bạn dễ dàng chia sẻ vòng quay của mình tới bất kì ai qua tin nhắn, email, nhúng lên website, đăng mạng xã hội, v.v.</div>';
    el("modal-body").innerHTML = hm;
    el("modal-title").innerHTML =
      '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="share-2"></span> Chia sẻ';
    el("modal-footer").innerHTML =
      '<button class="btn btn-primary" data-bs-dismiss="modal" onclick="createLinkForm();" ><span data-feather="plus"></span> Tạo link chia sẻ ngay</button>';
    el("modal-dialog").classList.remove("modal-lg");
    feather.replace();
    var hn = new bootstrap.Modal(el("myModal"), {
      backdrop: true,
    });
    hn.show();
  }
}
function loginForm() {
  var hp = "";
  hp +=
    '<p class="alert alert-warning">Để thực hiện tính năng này, bạn cần phải đăng nhập:</p>';
  hp +=
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
  el("modal-body").innerHTML = hp;
  feather.replace();
  var hq = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  hq.show();
}
function profileForm() {
  if (!isLoggedIn()) {
    loginForm();
    return false;
  }
  var hs = "";
  hs +=
    '<div class="mb-3"><strong>Thông tin tài khoản (ID: <span id="userid"></span>)</strong></div>';
  hs +=
    '<div class="input-group mb-3"><span class="input-group-text">Tên đăng nhập</span><input type="text" class="form-control" placeholder="Tên đăng nhập" id="username" value="loading..." readonly ><button class="btn btn-secondary" onclick="el(\'username\').removeAttribute(\'readonly\');"><span data-feather="edit"></span></button></div>';
  hs +=
    '<div class="input-group mb-3"><span class="input-group-text">Tên hiển thị</span><input type="text" class="form-control" placeholder="Tên hiển thị" id="displayname" value="loading..." ></div>';
  hs +=
    '<div class="input-group mb-3"><span class="input-group-text">Email</span><input type="text" class="form-control" placeholder="hoten@gmail.com" id="useremail" value="loading..." ></div>';
  hs +=
    '<div class="input-group mb-3"><span class="input-group-text">Mật khẩu</span><input type="password" class="form-control" placeholder="Bỏ trống nếu không thay đổi" id="userpassword" ></div>';
  hs +=
    '<div class="text-end"><button type="button" class="btn btn-primary" id="btn-update-profile" onclick="updateProfile();" disabled>Cập nhật</button></div>';
  hs += '<div class="mb-3"><strong>Thông tin khác:</strong><hr></div>';
  hs +=
    '<div class="input-group mb-3"><span class="input-group-text">Tài khoản PRO</span><input type="text" class="form-control" id="tatQC" value="loading.." readonly ><button class="btn btn-secondary" onclick="location.href=\'/tat-quang-cao\';">Gia hạn</button></div>';
  hs +=
    '<div class="input-group mb-3"><span class="input-group-text">Giới thiệu &nbsp;<span data-feather="user-plus" style="width:16px;height:16px;"></span></span><input type="text" class="form-control bg-white" onclick="this.select();" id="reflink" value="loading.." readonly ><button class="btn btn-outline-primary" id="btn-copy-reflink" onclick="copyToClipBoard(el(\'reflink\').value);alert(\'Đã copy\');" disabled>Sao chép</button></div><p>Bạn đã giới thiệu: <span class="badge bg-secondary" id="refcount">0</span> người</p> <p class="alert alert-warning small px-2">(Giới thiệu <strong>01 người</strong> = <strong>+20 ngày</strong> tài khoản PRO cho cả hai)</p>';
  hs +=
    '<div class="input-group mb-3"><span class="input-group-text">Coupon</span><input type="text" maxlength="6" class="form-control" id="coupon" value="" placeholder="Nhập mã coupon" ><button class="btn btn-success" id="btnApplyCoupon" onClick="applyCoupon();" >Áp dụng</button> </div>';
  el("modal-title").innerHTML =
    '<span data-feather="user" style="width:24px;heigh:24px;"></span> Hồ sơ';
  el("modal-footer").innerHTML = "";
  el("modal-body").innerHTML = hs;
  var ht = new XMLHttpRequest();
  ht.open("POST", ajax_object.ajax_url + "?action=profileForm");
  ht.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  ht.onload = function () {
    if (ht.status === 200) {
      if (ht.responseText) {
        var hu = JSON.parse(ht.responseText);
        if (hu) {
          el("username").value = hu.username;
          el("userid").textContent = hu.userid;
          el("displayname").value = hu.displayname;
          el("useremail").value = hu.useremail;
          el("tatQC").value = hu.tatQC;
          el("reflink").value = hu.reflink.replace("&#038;", "&");
          el("refcount").textContent = hu.refcount;
          el("btn-update-profile").removeAttribute("disabled");
          el("btn-copy-reflink").removeAttribute("disabled");
        }
      }
    } else if (ht.status !== 200) {
      console.log("error:" + ht.status);
    }
  };
  ht.send("&ajaxsecurity=" + ajax_object.ajax_nonce);
  feather.replace();
  var hv = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  hv.show();
}
function updateProfile() {
  if (!isLoggedIn()) {
    return false;
  }
  var hw = el("displayname").value.trim();
  var hx = el("username").value.trim();
  var hy = el("useremail").value.trim();
  var hz = el("userpassword").value.trim();
  const ia = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (ia.test(hw)) {
    alert("Tên hiển thị không gồm các kí tự đặc biệt");
    el("displayname").focus();
    return false;
  }
  if (hw.length < 3) {
    alert("Tên hiển thị phải có ít nhất 3 ký tự");
    el("displayname").focus();
    return false;
  }
  if (!isEmail(hy)) {
    alert("Email không đúng định dạng");
    el("useremail").focus();
    return false;
  }
  el("btn-update-profile").textContent = "Cập nhật...";
  el("btn-update-profile").setAttribute("disabled", "disabled");
  var ib = new XMLHttpRequest();
  ib.open("POST", ajax_object.ajax_url + "?action=updateProfile");
  ib.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  ib.onload = function () {
    if (ib.status === 200) {
      if (ib.responseText == "success") {
        alert("Đã cập nhật thành công!");
        location.reload();
      } else {
        alert(ib.responseText);
      }
      el("btn-update-profile").textContent = "Cập nhật";
      el("btn-update-profile").removeAttribute("disabled");
    } else if (ib.status !== 200) {
      console.log("error:" + ib.status);
    }
  };
  ib.send(
    "&displayname=" +
      hw +
      "&username=" +
      hx +
      "&useremail=" +
      hy +
      "&userpassword=" +
      hz +
      "&ajaxsecurity=" +
      ajax_object.ajax_nonce
  );
}
function applyCoupon() {
  var ic = el("coupon").value.trim();
  if (ic) {
    el("btnApplyCoupon").textContent = "Kiểm tra...";
    el("btnApplyCoupon").disabled = true;
    var ie = new XMLHttpRequest();
    ie.open("POST", ajax_object.ajax_url);
    ie.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ie.onload = function () {
      if (ie.status === 200) {
        if (ie.responseText) {
          var ig = ie.responseText.split("|");
          if (ig[0] == "success") {
            alert(ig[1]);
            closeAllModal();
            profileForm();
          } else {
            alert(ig[1]);
            el("btnApplyCoupon").textContent = "Áp dụng";
            el("btnApplyCoupon").disabled = false;
          }
        }
      } else {
        console.log("Lỗi:" + ie.status);
        el("btnApplyCoupon").disabled = false;
      }
    };
    ie.send(
      "action=applyCoupon&code=" +
        ic +
        "&ajaxsecurity=" +
        ajax_object.ajax_nonce
    );
  } else {
    alert("Hãy nhập mã Coupon mà bạn có");
    el("coupon").focus();
  }
}
function createLinkForm() {
  var ih = "";
  if (isLoggedIn()) {
    var ii = el("link_visibility").value;
    var ij = el("link_show_title").value;
    var ik = el("link_show_tripod").value;
    var il = el("link_max_spin").value;
    var im = el("link_link_logo").value;
    var io = el("link_logo_white").value;
    var ip = el("link_lead_email").value;
    var iq = el("link_is_show_lead_form").value;
    var ir = el("link_frm_phone").value;
    var it = el("link_frm_email").value;
    var iu = el("link_css_bosung").textContent;
    var iv = "";
    var iw = "";
    var ix = "";
    var iy = "checked";
    var iz = "";
    var ja = "";
    var jb = "no";
    if (ij == 1) {
      ja = "checked";
    }
    if (ik == "yes") {
      jb = "checked";
    }
    if (ii == 0) {
      ix = "checked";
      iy = "";
      iz = "";
    } else {
      if (ii == 1) {
        ix = "";
        iy = "checked";
        iz = "";
      } else if (ii == 2) {
        ix = "";
        iy = "";
        iz = "checked";
      }
    }
    if (iq == 1) {
      iv = "checked";
    }
    if (io == 1) {
      iw = "checked";
    }
    var jc = 0;
    if (parseInt(il) > 0) {
      jc = parseInt(il);
    }
    el("modal-title").innerHTML =
      '<span data-feather="share-2" style="width:24px;heigh:24px;"></span> Chia sẻ';
    ih += '<div id="stage-1">';
    ih +=
      '<div class="input-group"><span class="input-group-text">Tiêu đề:</span><input type="text" class="form-control" id="wheel-title" data-maxlength="60" data-display-id="remain-length" placeholder="Nhập tiêu đề vòng quay"></div><div id="remain-length" class="mb-3" style="font-size:12px;color:gray;margin-top:5px;margin-left:85px;"></div>';
    ih +=
      '<div class="form-check mb-1"><input class="form-check-input" type="checkbox" id="show_title"' +
      ja +
      ' ><label class="form-check-label" for="show_title">Hiển thị tiêu đề khi xem liên kết</label></div>';
    ih +=
      '<div class="form-check mb-3"><input class="form-check-input" type="checkbox" id="show_tripod"' +
      jb +
      ' ><label class="form-check-label" for="show_tripod">Hiển thị giá đỡ <img src="' +
      ajax_object.theme_uri +
      '/assets/icons/tripod.png" alt="tripod" ></label></div>';
    ih += '<div class="mb-3">Hiển thị:</div>';
    ih +=
      '<div class="form-check"><input class="form-check-input" type="radio" name="visibility" id="visibility-1" value="0" ' +
      ix +
      ' ><label class="form-check-label" for="visibility-1">Bất kì ai có link đều có thể xem</label></div>';
    ih +=
      '<div class="form-check"><input class="form-check-input" type="radio" name="visibility" id="visibility-2" value="1" ' +
      iy +
      '><label class="form-check-label" for="visibility-2">Hiển thị công khai tại <a href="' +
      ajax_object.home_url +
      '/gallery/" target="_blank" title="Bộ sưu tập do người dùng tạo">Bộ sưu tập</a></label></div>';
    var jd = "disabled";
    if (ajax_object.isAdmin == 1) {
      jd = "";
    }
    ih +=
      '<div class="form-check mb-3"><input class="form-check-input" type="radio" name="visibility" id="visibility-3" value="2" ' +
      iz +
      " " +
      jd +
      '><label class="form-check-label" for="visibility-3">Công khai (Google có thể lập chỉ mục)</label></div>';
    ih +=
      '<div class="mb-3"><a class="text-decoration-none" data-bs-toggle="collapse" href="#collapseNC" role="button" aria-expanded="true" aria-controls="collapseNC">Nâng cao <span data-feather="chevron-down"></span> </a></div>';
    ih += '<div class="collapse hide" id="collapseNC">';
    ih +=
      '<div class="d-flex mb-1">Người xem được quay tối đa&nbsp; <a href="javascript:void(0);" title="Người xem là người không tạo ra liên kết này hoặc người tạo ra liên kết nhưng không đăng nhập"><span data-feather="info" style="width:16px;height:16px;"></span></a>  <input type="number" size="5" min="0" value="' +
      jc +
      '" id="max_spin" class="form-controle mx-1" style="width:50px;" > <span>lần</span></div>';
    ih += '<div class="mb-3 text-muted" small>* (0 = không giới hạn;)</div>';
    ih +=
      '<div class="input-group mb-1"><span class="input-group-text">Logo</span><input type="text" class="form-control" id="link_logo" placeholder="https://example.com/logo.png" value="' +
      im +
      '"><span class="input-group-text"><label for="upload_logo" data-bs-toggle="tooltip" title="Max width: 200 (px)"><span data-feather="camera"></span></label></span><input type="file" id="upload_logo" data-maxsize="5" class="d-none" accept="image/*" onchange="uploadLinkLogo();" ></div><div class="mb-3 text-muted small">* Max width: 200px</div>';
    ih +=
      '<div class="form-check form-switch mb-3"><input class="form-check-input" type="checkbox" role="switch" value="' +
      io +
      '" onclick="if(this.checked) this.value=1;else this.value=0; " ' +
      iw +
      ' id="logo_white"><label class="form-check-label" for="logo_white">Đổi màu logo ⇢ màu trắng</label></div>';
    ih +=
      '<div class="form-check mb-1"><input class="form-check-input" type="checkbox" value="' +
      iq +
      '" ' +
      iv +
      ' onclick="checkLeadForm();" id="is_show_lead_form"><label class="form-check-label" for="is_show_lead_form">Form thu thập thông tin K/H <sup class="text-danger">ᴾᴿᴼ</sup></label></div>';
    ih +=
      '<div class="text-muted small mb-1">* Hiển thị form yêu cầu khách nhập thông tin để nhận thưởng. </div>';
    var je = "d-none";
    if (iv == "checked") {
      je = "";
    }
    var jf = "checked";
    var jg = "checked";
    if (ir != 1) {
      jf = "";
    }
    if (it != 1) {
      jg = "";
    }
    ih +=
      '<div class="' +
      je +
      '" id="frm_option">➥ Gồm: <div class="form-check form-check-inline">\n                <input class="form-check-input" id="frm_name" type="checkbox" checked disabled>\n                <label class="form-check-label" for="frm_name">Họ tên</label>\n              </div>\n              <div class="form-check form-check-inline">\n                <input class="form-check-input frm-option" type="checkbox" id="frm_phone" ' +
      jf +
      '>\n                <label class="form-check-label" for="frm_phone">Điện thoại</label>\n              </div>\n              <div class="form-check form-check-inline">\n                <input class="form-check-input frm-option" type="checkbox" id="frm_email" ' +
      jg +
      '>\n                <label class="form-check-label" for="frm_email">Email</label>\n              </div>\n              </div>';
    ih += '<div class="mt-3 mb-1">Nhận thông tin K/H qua</div>';
    ih +=
      '<div class="input-group mb-3" id="lead_email_container"><span class="input-group-text">Email nhận</span><input type="text" class="form-control" id="lead_email" disabled placeholder="yourname@gmail.com" value="' +
      ip +
      '"></div>';
    ih +=
      '<div class="form-label mb-1">CSS bổ sung</div>\n                <div class="editor mb-3">\n                  <div class="numbers"><span></span></div>\n                  <textarea class="w-100" id="css_bosung" rows="2" placeholder="#div_bosung{}">' +
      iu +
      "</textarea>\n                </div>";
    ih += "</div>";
    ih +=
      '<div class="mb-3"><button class="btn btn-primary" id="btn-view-shared" data-bs-dismiss="modal" onclick="viewSharedLink();"><span data-feather="trello"></span> Xem các liên kết đã tạo</button></div>';
    ih += "</div>";
    ih +=
      '<div id="stage-2" class="d-none"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div> Đang tạo link...</div>';
    ih += '<div id="stage-3" class="d-none">';
    ih +=
      '<div class="mb-3">Link đến vòng quay với tên và cài đặt hiện tại</div>';
    ih +=
      '<div class="input-group mb-3"><input type="text" class="form-control" id="your-link" placeholder="Link của bạn" readonly><button class="btn btn-secondary" id="btn-preview" >Xem thử</button><button class="btn btn-success" id="btn-copy-link" onclick="copyLink();" >Sao chép</button></div>';
    ih += '<div id="your-embed"></div>';
    ih += "</div>";
    el("modal-body").innerHTML = ih;
    el("modal-footer").innerHTML =
      '<button type="button" class="btn btn-primary" id="btn-create-link" onclick="createLink();" >Tiếp tục <span data-feather="chevrons-right"></span> </button>';
    if (el("vqmm-title")) {
      el("wheel-title").value = el("vqmm-title").textContent;
    }
    feather.replace();
    var jh = new bootstrap.Modal(el("myModal"), {
      backdrop: true,
    });
    jh.show();
    if (iq == 1) {
      el("lead_email").removeAttribute("disabled");
    }
    const ji = document.querySelector(".editor textarea");
    const jj = document.querySelector(".editor .numbers");
    ji.addEventListener("keyup", (jk) => {
      const jl = jk.target.value.split("\n").length;
      jj.innerHTML = Array(jl).fill("<span></span>").join("");
    });
    ji.addEventListener("keydown", (jm) => {
      if (jm.key === "Tab") {
        const jn = ji.selectionStart;
        const jo = ji.selectionEnd;
        ji.value = ji.value.substring(0, jn) + "\t" + ji.value.substring(jo);
        jm.preventDefault();
      }
    });
    startLimitCharacters();
  } else {
    loginForm();
  }
}
function createLink() {
  var jp = el("wheel-title").value.trim();
  var jq = el("css_bosung").value;
  var jr = "";
  if (jp == "") {
    alert("Vui lòng nhập tiêu đề vòng quay");
    el("wheel-title").focus();
    return false;
  }
  if (checkBadWords(jp)) {
    alert("Hãy là người văn minh, dùng từ ngữ lịch sự");
    el("wheel-title").focus();
    return false;
  }
  if (ajax_object.isAdmin != 1) {
    if (
      jp != "" &&
      (loc_xoa_dau(jp).toLowerCase() == "vong quay may man" ||
        loc_xoa_dau(jp).toLowerCase() == "chon ten ngau nhien" ||
        loc_xoa_dau(jp).toLowerCase() == "vong quay random")
    ) {
      alert(
        'Hãy chọn tiêu đề khác\n - "Vòng quay may mắn"\n - "Chọn tên ngẫu nhiên"\n - "Vòng quay random"\n'
      );
      el("wheel-title").focus();
      return false;
    }
  }
  if (checkAlphabet(jp, 3) == false) {
    alert("Tiêu đề phải có ít nhất 3 chữ cái");
    el("wheel-title").focus();
    return false;
  }
  if (el("vqmm-desc")) {
    jr = el("vqmm-desc").textContent;
  }
  var jt = 0;
  var ju = document.getElementsByName("visibility");
  var jv = 0;
  for (var jw = ju.length; jv < jw; jv++) {
    if (ju[jv].checked) {
      jt = ju[jv].value;
      break;
    }
  }
  var jx = 0;
  if (el("show_title").checked) {
    jx = 1;
  }
  var jy = "no";
  if (el("show_tripod").checked) {
    jy = "yes";
  }
  if (jq != "") {
    if (!validateCSS(jq)) {
      alert("CSS không hợp lệ, hãy kiểm tra lại hoặc xoá đi.");
      el("css_bosung").focus();
      jq = "";
      return false;
    }
  }
  var jz = 0;
  var ka = el("max_spin").value;
  var kb = el("link_id").value;
  var kc = el("link_logo").value;
  var kd = el("logo_white").value;
  var ke = el("is_show_lead_form").value;
  var kf = 0;
  var kg = 0;
  var kj = el("lead_email").value;
  if (el("is_advance").checked) {
    jz = 1;
  }
  if (ke == 1) {
    if (ka == 0) {
      alert("Thu thập thông tin K/H thì (số lần quay tối đa phải > 0)");
      el("max_spin").focus();
      return false;
    }
    if (!isEmail(kj)) {
      alert("Thu thập thông tin K/H thì phải nhập Email nhận");
      el("lead_email").focus();
      return false;
    }
  }
  if (el("frm_phone").checked == true) {
    kf = 1;
  }
  if (el("frm_email").checked == true) {
    kg = 1;
  }
  el("stage-1").classList.add("d-none");
  el("stage-2").classList.remove("d-none");
  el("modal-footer").innerHTML =
    '<button class="btn btn-primary" id="btn-view-shared" data-bs-dismiss="modal" onclick="viewSharedLink();"><span data-feather="trello"></span> Xem liên kết đã tạo</button>';
  feather.replace();
  var kk = getWheelSettingInArray();
  if (kk) {
    kk.is_advance = jz;
    kk.max_spin = ka;
    kk.link_logo = kc;
    kk.logo_white = kd;
    kk.is_show_lead_form = ke;
    kk.frm_phone = kf;
    kk.frm_email = kg;
    kk.lead_email = kj;
    kk.title = jp;
    kk.show_tripod = jy;
    if (jq != "") {
      kk.css_bosung = jq;
    }
    var kl = {
      title: jp,
      show_title: jx,
      visibility: jt,
      settings: kk,
      link_id: kb,
    };
    var km = new XMLHttpRequest();
    km.open("POST", ajax_object.ajax_url + "?action=createLink");
    km.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    km.onload = function () {
      if (km.status === 200) {
        var kn = km.responseText.split("|");
        el("your-link").value = kn[0];
        el("btn-preview").addEventListener("click", function () {
          window.open(kn[0], "_blank").focus();
        });
        var ko =
          '<ul class="nav nav-tabs" id="shareFormTab" role="tablist"> <li class="nav-item" role="presentation"> <button class="nav-link active" id="embed-tab" data-bs-toggle="tab" data-bs-target="#embed-tab-pane" type="button" role="tab" aria-controls="embed-tab-pane" aria-selected="true">Mã nhúng</button> </li> <li class="nav-item" role="presentation"> <button class="nav-link" id="popup-tab" data-bs-toggle="tab" data-bs-target="#popup-tab-pane" type="button" role="tab" aria-controls="popup-tab-pane" aria-selected="false"><span class="text-success">Nhúng Popup</span><sup class="text-danger">*</sup></button> </li></ul>';
        ko += '<div class="tab-content" id="myTabContent">';
        ko +=
          '<div class="tab-pane py-4 fade show active" id="embed-tab-pane" role="tabpanel" aria-labelledby="embed-tab" tabindex="0">';
        ko +=
          '<div class="mb-1 fw-bold">Mã nhúng <sup><a class="text-danger small" href="' +
          ajax_object.home_url +
          '/huong-dan-nhung-vong-quay-may-man-len-website/" target="_blank" title="Xem hướng dẫn">hướng dẫn↗</a></sup></div>';
        ko +=
          '<div class="text-muted small mb-2">* Bước 1: Copy và dán vào nơi muốn hiển thị vòng quay may mắn này.</div>';
        ko +=
          '<textarea class="form-control mb-3" onclick="this.select();" rows="2" readonly ><div class="embedvqmm" data-id="' +
          kn[2] +
          '"></div></textarea>';
        ko +=
          '<div class="text-muted small mb-2">* Bước 2: Dán mã JS này trước thẻ đóng &lt;/body&gt; </div>';
        ko +=
          '<textarea class="form-control" onclick="this.select();" rows="2" readonly ><script src="' +
          ajax_object.home_url +
          '/embed.min.js"></script></textarea>';
        ko += "</div>";
        ko +=
          '<div class="tab-pane py-4 fade" id="popup-tab-pane" role="tabpanel" aria-labelledby="popup-tab" tabindex="0">';
        ko +=
          '<div class="mb-1 fw-bold">Mã nhúng Popup<sup> <a class="text-danger small" href="' +
          ajax_object.home_url +
          '/popup.html" target="_blank" title="Xem ví dụ">Xem ví dụ ↗</a></sup></div>';
        ko +=
          '<div class="text-muted small mb-2">* Copy và dán mã này vào trước thẻ đóng &lt;/body&gt;.</div>';
        ko +=
          '<textarea class="form-control mb-3" onclick="this.select();" rows="10" readonly >';
        ko += "<script>\n\t";
        ko += "const code = '" + kn[2] + "';\n\t";
        ko += "const formHeading   = 'Quay để nhận thưởng';\n\t";
        ko += "const formDesc      = 'Điền đúng thông tin để nhận quà';\n\t";
        ko += "const formButton    = 'Thử vận may';\n\t";
        ko += "const iconPosition  = 'right';\n\t";
        ko += "const hideMail      = false;\n\t";
        ko += "const lifetime      = 60;\n\t";
        ko += "const popupWhenExit = true;\n\t";
        ko += "function sendByMe(args){\n\t\t";
        ko += "//Hãy viết hàm gửi Email\n\t\t";
        ko +=
          "console.log(args);//return object {code,name,phone,email,toEmail,result} \n\t";
        ko += "}\n";
        ko += "</script>\n";
        ko +=
          '<script src="https://vongquaymayman.co/popup.min.js"></script>\n';
        ko += "</textarea>";
        ko += "</div>";
        ko += "</div>";
        el("your-embed").innerHTML = ko;
        el("stage-3").classList.remove("d-none");
        el("stage-2").classList.add("d-none");
        fillTitleDesc(jp, jr);
        el("edit-mode-txt").innerHTML =
          '<span class="badge bg-danger">Bạn đang ở chế độ chỉnh sửa</span> <sup><a href="javascript:void(0);" title="Thoát chế độ chỉnh sửa" onclick="location.reload();">&times;</a></sup>';
        el("link_id").value = kn[1];
        el("link_show_title").value = jx;
        el("link_show_tripod").value = jy;
        el("link_visibility").value = jt;
        el("link_max_spin").value = ka;
        el("link_link_logo").value = kc;
        el("link_logo_white").value = kd;
        el("link_lead_email").value = kj;
        el("link_is_show_lead_form").value = ke;
        el("link_frm_phone").value = kf;
        el("link_frm_email").value = kg;
        el("link_css_bosung").textContent = jq;
      } else if (km.status !== 200) {
        console.log("error:" + km.status);
      }
    };
    km.send(JSON.stringify(kl));
  }
}
function copyLink() {
  el("btn-copy-link").textContent = "Đang chép...";
  var kp = el("your-link").value;
  if (kp) {
    el("your-link").focus();
    el("your-link").select();
    copyToClipBoard(kp);
    setTimeout(function () {
      el("btn-copy-link").textContent = "Sao chép";
    }, 500);
  }
}
function removeSharedLink(kq, kr) {
  if (confirm("Bạn chắc chắn muốn xóa:" + kr)) {
    var ks = new XMLHttpRequest();
    ks.open("POST", ajax_object.ajax_url);
    ks.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ks.onload = function () {
      if (ks.status === 200) {
        if (ks.responseText == "success") {
          el("row-" + kq).remove();
        } else {
          alert(ks.responseText);
        }
      } else {
        console.log("Lỗi:" + ks.status);
      }
    };
    ks.send(
      "action=removeSharedLink&id=" +
        kq +
        "&ajaxsecurity=" +
        ajax_object.ajax_nonce
    );
  }
}
function editSharedLink(kt) {
  var ku = new XMLHttpRequest();
  ku.open("POST", ajax_object.ajax_url);
  ku.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  ku.onload = function () {
    if (ku.status === 200) {
      if (ku.responseText !== "error") {
        var kv = JSON.parse(ku.responseText);
        var kx = JSON.parse(kv.settings);
        var ky = kv.title;
        var kz = "";
        var la = kv.show_title;
        var lb = "no";
        var lc = kv.id;
        var ld = kv.visibility;
        var le = 0;
        var lf = "";
        var lh = "";
        var lj = 0;
        var lk = 0;
        var ll = "color";
        var lm = "";
        var ln = 0;
        if (kx.hasOwnProperty("max_spin")) {
          le = kx.max_spin;
        }
        if (kx.hasOwnProperty("show_tripod")) {
          lb = kx.show_tripod;
        }
        if (kx.hasOwnProperty("link_logo")) {
          lf = kx.link_logo;
        }
        if (kx.hasOwnProperty("logo_white")) {
          lh = kx.logo_white;
        }
        if (kx.hasOwnProperty("is_show_lead_form")) {
          lj = kx.is_show_lead_form;
        }
        if (kx.hasOwnProperty("lead_email")) {
          lk = kx.lead_email;
        }
        if (kx.hasOwnProperty("desc")) {
          kz = kx.desc;
        }
        if (kx.hasOwnProperty("is_advance")) {
          ln = kx.is_advance;
        }
        if (ln == 0) {
          el("is_advance").checked = false;
        } else {
          el("is_advance").checked = true;
        }
        if (kx.hasOwnProperty("type")) {
          ll = kx.type;
          setWheelType(ll);
          if (kx.hasOwnProperty("cover_img")) {
            lm = kx.cover_img;
            el("cover_img_display").src = lm;
            el("cover_img").value = lm;
          }
        } else {
          setWheelType("color");
          el("cover_img_display").src =
            ajax_object.theme_uri + "/assets/images/cover-wheel.jpg";
          el("cover_img").value =
            ajax_object.theme_uri + "/assets/images/cover-wheel.jpg";
        }
        fillTitleDesc(ky, kz);
        el("link_id").value = lc;
        el("link_show_title").value = la;
        el("link_show_tripod").value = lb;
        el("link_visibility").value = ld;
        el("link_max_spin").value = le;
        el("link_link_logo").value = lf;
        el("link_logo_white").value = lh;
        el("link_is_show_lead_form").value = lj;
        el("link_lead_email").value = lk;
        el("edit-mode-txt").innerHTML =
          '<span class="badge bg-danger">Bạn đang ở chế độ chỉnh sửa</span> <sup><a href="javascript:void(0);" title="Thoát chế độ chỉnh sửa" onclick="location.reload();">&times;</a></sup>';
        if (kx.hasOwnProperty("custom_bg_color")) {
          root.style.setProperty("--custom_bg_color", kx.custom_bg_color);
          el("custom-bg-color").value = kx.custom_bg_color;
        } else {
          root.style.setProperty("--custom_bg_color", "#ffffff");
          el("custom-bg-color").value = "#ffffff";
        }
        if (kx.hasOwnProperty("custom_color")) {
          root.style.setProperty("--custom_color", kx.custom_color);
          el("custom-color").value = kx.custom_color;
        } else {
          root.style.setProperty("--custom_color", "#000000");
          el("custom-color").value = "#000000";
        }
        if (kx.hasOwnProperty("custom_bg_img")) {
          setBackgroundImage(kx.custom_bg_img, "update");
        } else {
          document.body.style.backgroundImage = "";
          el("custom-bg-img").value = "";
          el("custom-bg-img-tablet").value = "";
          el("custom-bg-img-mobile").value = "";
        }
        var lo = [];
        if (kx.hasOwnProperty("list")) {
          var lp = kx.list.split("||");
          var lq = null;
          var lr = "";
          if (lp.length) {
            for (var ls = 0; ls < lp.length; ls++) {
              if (lp[ls].includes("<img")) {
                var lv = document.createElement("div");
                lv.innerHTML = lp[ls];
                lq = lv.querySelector("img");
                lr = lp[ls].replace(/<img[^>]*>/g, "");
                lr = stripHtml(lr);
                lr = lr.trim();
                lo.push({
                  text: lr,
                  id: ls,
                  image: lq.src,
                });
              }
              lo.push({
                text: lp[ls],
                id: ls,
              });
            }
          }
        }
        if (kx.hasOwnProperty("entries")) {
          lo = kx.entries;
        }
        if (kx.hasOwnProperty("startSound")) {
          el("start_sound").value = kx.startSound;
        }
        if (kx.hasOwnProperty("start_sound")) {
          el("start_sound").value = kx.start_sound;
        }
        if (kx.hasOwnProperty("end_sound")) {
          el("end_sound").value = kx.end_sound;
        }
        if (kx.hasOwnProperty("endSound")) {
          el("end_sound").value = kx.endSound;
        }
        el("duration").value = kx.duration;
        if (kx.hasOwnProperty("btn_spin_label")) {
          el("btn-spin-label").value = kx.btn_spin_label;
        }
        if (kx.hasOwnProperty("btn_spin_img")) {
          el("btn-spin-img").value = kx.btn_spin_img;
        }
        if (kx.show_confetti == "yes") {
          el("show_confetti").checked = true;
        } else {
          el("show_confetti").checked = false;
        }
        if (kx.show_popup == "yes") {
          el("show_popup").checked = true;
        } else {
          el("show_popup").checked = false;
        }
        el("popup_label").value = kx.popup_label;
        if (kx.show_remove_button == "yes") {
          el("show_remove_button").checked = true;
        } else {
          el("show_remove_button").checked = false;
        }
        if (kx.hasOwnProperty("show_border")) {
          if (kx.show_border == "yes") {
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
        if (kx.hasOwnProperty("css_bosung")) {
          el("link_css_bosung").textContent = kx.css_bosung;
        }
        var lw = document.getElementsByName("chkcolor");
        if (kx.hasOwnProperty("theme_style_color")) {
          colors = kx.theme_style_color;
        }
        if (kx.hasOwnProperty("colors")) {
          colors = kx.colors;
        }
        if (colors) {
          for (var lx of lw) {
            lx.checked = false;
            el("color-" + lx.value).value = "#ADB2B0";
          }
          for (const ly of colors) {
            el("color-" + ly.key).value = ly.value;
            el("chkcolor-" + ly.key).checked = true;
          }
        }
        if (kx.hasOwnProperty("is_stroke")) {
          if (kx.is_stroke == "yes") {
            el("is_stroke").checked = true;
          } else {
            el("is_stroke").checked = false;
          }
        } else {
          el("is_stroke").checked = false;
        }
        fillEntries(lo, ln);
        wheelSettings();
        el("view-shared-msg").innerHTML =
          '<div class="alert alert-danger alert-dismissible fade show" id="alertClose" role="alert"><strong>Tiếp tục sửa (' +
          ky +
          ") ?</strong><br>- Hãy chỉnh lại <strong>Vòng quay</strong> theo ý muốn rồi vào <strong>Tài khoản</strong> ⇢ <strong>Tạo link chia sẻ</strong> ⇢ <strong>Cập nhật</strong>.<br>- Đừng Refresh trang trong quá trình chỉnh sửa.</div>";
      } else {
        alert("Có lỗi chưa rõ nguyên nhân!");
      }
    } else {
      console.log("Lỗi:" + ku.status);
    }
  };
  ku.send(
    "action=editSharedLink&id=" + kt + "&ajaxsecurity=" + ajax_object.ajax_nonce
  );
}
function viewSharedLink() {
  if (!isLoggedIn()) {
    loginForm();
    return false;
  }
  var lz = "";
  el("modal-title").innerHTML =
    '<span data-feather="share-2" style="width:24px;heigh24px;"></span> Liên kết của bạn';
  lz +=
    '<div id="view-shared-loader"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div> Đang tải...</div>';
  var ma = new XMLHttpRequest();
  ma.open("POST", ajax_object.ajax_url);
  ma.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  ma.onload = function () {
    if (ma.status === 200) {
      el("modal-body").innerHTML = ma.responseText;
      feather.replace();
      var mc = document.querySelectorAll(".btn-copy-link-item");
      if (mc.length) {
        for (var mf = 0; mf < mc.length; mf++) {
          mc[mf].addEventListener("click", function () {
            copyToClipBoard(this.dataset.content);
            alert("Đã copy link (" + this.dataset.title + ")");
          });
        }
      }
      var mg = document.querySelectorAll(".btn-copy-embed-item");
      if (mg.length) {
        for (var mf = 0; mf < mg.length; mf++) {
          mg[mf].addEventListener("click", function () {
            var mh =
              '<div class="embedvqmm" data-id="' + this.dataset.id + '"></div>';
            mh +=
              '<script src="' +
              ajax_object.home_url +
              '/embed.min.js"></script>';
            copyToClipBoard(mh);
            alert("Đã copy mã nhúng (" + this.dataset.title + ")");
          });
        }
      }
      var mj = document.querySelectorAll(".btn-edit-link");
      if (mj.length) {
        for (var mf = 0; mf < mj.length; mf++) {
          mj[mf].addEventListener("click", function () {
            editSharedLink(this.dataset.content);
          });
        }
      }
      var mk = document.querySelectorAll(".btn-remove-link");
      if (mk.length) {
        for (var mf = 0; mf < mk.length; mf++) {
          mk[mf].addEventListener("click", function () {
            removeSharedLink(this.dataset.content, this.dataset.title);
          });
        }
      }
      var ml = document.querySelector("#btn-create-link-now");
      if (ml) {
        ml.addEventListener("click", function () {
          createLinkForm();
        });
      }
    } else {
      console.log("Lỗi:" + ma.status);
    }
  };
  ma.send("action=viewSharedLink");
  el("modal-body").innerHTML = lz;
  el("modal-footer").innerHTML =
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>';
  el("modal-dialog").classList.add("modal-lg");
  feather.replace();
  var mm = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  mm.show();
}
function uploadLinkLogo() {
  upload("upload_logo", "link_logo");
}
function checkLeadForm() {
  if (el("is_show_lead_form").checked == true) {
    el("lead_email").removeAttribute("disabled");
    el("frm_option").classList.remove("d-none");
    var mn = document.querySelectorAll('input[type="checkbox"].frm-option');
    for (var mo = 0; mo < mn.length; mo++) {
      mn[mo].addEventListener("click", function () {
        if (countBoxCheckedByClass("frm-option") == 1) {
          for (var mp = 0; mp < mn.length; mp++) {
            if (mn[mp].checked == true) {
              mn[mp].disabled = true;
            }
          }
        } else {
          for (var mp = 0; mp < mn.length; mp++) {
            mn[mp].disabled = false;
          }
        }
      });
    }
    var mq = new XMLHttpRequest();
    mq.open("POST", ajax_object.ajax_url + "?action=getUserInfo");
    mq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    mq.onload = function () {
      user_info = JSON.parse(mq.responseText);
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
    mq.send("&ajaxsecurity=" + ajax_object.ajax_nonce);
  } else {
    el("is_show_lead_form").value = 0;
    el("lead_email_container").innerHTML =
      '<span class="input-group-text">Email nhận</span><input type="text" class="form-control" id="lead_email" disabled placeholder="yourname@gmail.com">';
    el("frm_option").classList.add("d-none");
  }
}
function openSettingsForm() {
  var mr = new bootstrap.Modal(el("modalSettings"), {
    backdrop: true,
  });
  mr.show();
}
function wheelSettings() {
  var mv = el("start_sound").value;
  var mw = el("end_sound").value;
  var mz = el("duration").value;
  var na = "no";
  var nb = "no";
  var nc = "no";
  var nd = el("popup_label").value;
  var ne = el("extra_name").value;
  var nf = el("custom-bg-color").value;
  var ni = el("custom-color").value;
  var nj = [];
  var nk = el("btn-spin-label").value;
  var nl = el("btn-spin-img").value;
  var nm = "no";
  var nn = "no";
  var np = "#FF4D00";
  var nq = "#F6FA00";
  var nr = "";
  var ns = "";
  var nt = el("type").value;
  var nu = el("cover_img").value;
  var nv = el("custom-bg-img").value;
  var nw = el("custom-bg-img-tablet").value;
  var nx = el("custom-bg-img-mobile").value;
  nj = [nv, nw, nx];
  if (el("show_confetti").checked) {
    na = "yes";
  }
  if (el("show_popup").checked) {
    nb = "yes";
  }
  if (el("show_remove_button").checked) {
    nc = "yes";
  }
  if (el("is_stroke").checked) {
    nm = "yes";
  }
  if (el("show_border").checked) {
    nn = "yes";
    np = el("border_color").value;
    nq = el("diamond_color").value;
  }
  if (el("vqmm-title")) {
    nr = el("vqmm-title").textContent;
  }
  if (el("vqmm-desc")) {
    ns = el("vqmm-desc").textContent;
  }
  var ny = [];
  var nz = document.getElementsByName("chkcolor");
  if (nz.length) {
    for (var oa of nz) {
      if (oa.checked) {
        ny.push({
          key: oa.value,
          value: el("color-" + oa.value).value,
        });
      }
    }
  }
  if (ny.length === 0) {
    ny.push({
      key: 1,
      value: "#ADB2B0",
    });
  }
  var ob = 0;
  if (el("is_advance").checked) {
    ob = 1;
  }
  var oc = [];
  var od = "";
  var oe = null;
  if (ob == 0) {
    var og = getSectorItem(el("sector_list").innerHTML);
    if (og.length) {
      for (var oh = 0; oh < og.length; oh++) {
        if (og[oh].includes("<img")) {
          var oi = document.createElement("div");
          oi.innerHTML = og[oh];
          oe = oi.querySelector("img");
          od = og[oh].replace(/<img[^>]*>/g, "");
          od = stripHtml(od);
          od = od.trim();
          oc.push({
            text: od,
            id: oh,
            image: oe.src,
          });
        } else {
          oc.push({
            text: og[oh],
            id: oh,
          });
        }
      }
    }
  } else {
    var oj = 0;
    var ol = null;
    var om = document.querySelectorAll(".row-item");
    if (om.length) {
      for (var oh = 0; oh < om.length; oh++) {
        oj = oh;
        ol = {
          text: el("item-text-" + oj).value,
          id: oj,
          color: el("item-color-" + oj).value,
          weight: parseInt(el("item-weight-" + oj).value),
        };
        if (el("item-img-" + oj).innerHTML != "") {
          ol.image = document.querySelector("#item-img-" + oj + ">img").src;
        }
        if (el("item-sound-" + oj)) {
          ol.sound = el("item-sound-" + oj).value;
        }
        if (el("item-message-" + oj)) {
          ol.message = removeAllUrl(el("item-message-" + oj).value);
        }
        oc.push(ol);
      }
    }
  }
  var on = {
    title: nr,
    desc: ns,
    start_sound: mv,
    end_sound: mw,
    duration: mz,
    show_confetti: na,
    show_popup: nb,
    show_remove_button: nc,
    is_stroke: nm,
    show_border: nn,
    border_color: np,
    diamond_color: nq,
    popup_label: nd,
    custom_bg_color: nf,
    custom_color: ni,
    custom_bg_img: nj,
    btn_spin_label: nk,
    btn_spin_img: nl,
    colors: ny,
    entries: oc,
    is_advance: ob,
    type: nt,
    cover_img: nu,
  };
  localStorage.setItem("wheelSetting" + ne, JSON.stringify(on));
  root.style.setProperty("--custom_bg_color", nf);
  root.style.setProperty("--custom_color", ni);
  if (nj) {
    setBackgroundImage(nj, "view");
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
  var oo =
    '<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="filter_media" id="all" value="all" onClick="filter_media(\'all\');" checked><label class="form-check-label" for="all">Tất cả</label></div>';
  oo +=
    '<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="filter_media" id="media_button" value="btn" onClick="filter_media(\'btn\');"><label class="form-check-label" for="media_button">Nút quay</label></div>';
  oo +=
    '<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="filter_media" id="media_background" value="bgr" onClick="filter_media(\'bgr\');"><label class="form-check-label" for="media_background">Nền</label></div>';
  oo +=
    '<hr><div class="mt-3" style="max-height:350px;overflow-y:auto;overflow-x:hidden;"><table class="table table-striped" id="media" ><thead><tr><th>STT</th><th>Link</th><th>Đặt làm</th><th>Hành động</th></tr></thead><tbody id="mediaBody">';
  var op = 0;
  if (localStorage.getItem("uploadedList")) {
    var oq = JSON.parse(localStorage.getItem("uploadedList"));
    for (op = 0; op < oq.length; op++) {
      oo +=
        '<tr id="tr_' +
        op +
        '"><td>' +
        (op + 1) +
        '</td><td><a href="' +
        oq[op] +
        '" title="Ảnh sẽ được mở trong tab mới" target="_blank"><img src="' +
        oq[op] +
        '" width="50" heigh="50" class="border border-1 rounded-1" ></a></td><td data-type="mixes"><button class="btn btn-sm btn-secondary" onclick="el(\'custom-bg-img\').value=\'' +
        oq[op] +
        "';el('btn_wheel_setting').click();\">Nền</button> <button class=\"btn btn-sm btn-secondary\" onclick=\"el('btn-spin-img').value='" +
        oq[op] +
        "';el('btn-spin-label').value='';el('btn_wheel_setting').click();\">Nút Quay</button></td><td><button class=\"btn btn-sm btn-outline-secondary\" onclick=\"removeUploaded('" +
        oq[op] +
        "');el('tr_" +
        op +
        "').remove();\">&times;</button></td></tr>";
    }
  }
  fetch("/buttons.txt?cachebuster=" + new Date().getTime())
    .then((or) => or.text())
    .then((os) => {
      const ot = os.split("\n").map((ou) => ou.trim());
      var ov = "";
      for (var ow = 0; ow < ot.length; ow++) {
        ov +=
          "<tr><td>" +
          (op + ow + 1) +
          '</td><td><a href="' +
          ajax_object.theme_uri +
          "/assets/buttons/" +
          ot[ow] +
          '" title="Ảnh sẽ được mở trong tab mới" target="_blank"><img src="' +
          ajax_object.theme_uri +
          "/assets/buttons/" +
          ot[ow] +
          '" width="50" heigh="50" class="border border-1 rounded-1" ></a></td><td data-type="btn"><button class="btn btn-sm btn-secondary" onclick="el(\'btn-spin-img\').value=\'' +
          ajax_object.theme_uri +
          "/assets/buttons/" +
          ot[ow] +
          "';el('btn-spin-label').value='';el('btn_wheel_setting').click();\">Nút Quay</button></td><td>∗</td></tr>";
      }
      el("mediaBody").insertAdjacentHTML("beforeend", ov);
      fetch("/backgrounds.txt?cachebuster=" + new Date().getTime())
        .then((ox) => ox.text())
        .then((oy) => {
          const oz = oy.split("\n").map((pa) => pa.trim());
          var pb = "";
          for (var pc = 0; pc < oz.length; pc++) {
            pb +=
              "<tr><td>" +
              (op + pc + 1) +
              '</td><td><a href="' +
              ajax_object.theme_uri +
              "/assets/background/" +
              oz[pc] +
              '" title="Ảnh sẽ được mở trong tab mới" target="_blank"><img src="' +
              ajax_object.theme_uri +
              "/assets/background/" +
              oz[pc] +
              '" width="50" heigh="50" class="border border-1 rounded-1" ></a></td><td data-type="bgr"><button class="btn btn-sm btn-secondary" onclick="el(\'custom-bg-img\').value=\'' +
              ajax_object.theme_uri +
              "/assets/background/" +
              oz[pc] +
              "';el('btn_wheel_setting').click();\">Nền</button></td><td>∗</td></tr>";
          }
          el("mediaBody").insertAdjacentHTML("beforeend", pb);
        })
        .catch((pd) => {
          console.error("Lỗi đọc file backgrounds.txt:", pd);
        });
    })
    .catch((pe) => {
      console.error("Lỗi đọc file buttons.txt:", pe);
    });
  oo += "</tbody></table></div>";
  el("uploaded-list").innerHTML = oo;
  feather.replace();
}
function removeUploaded(pf) {
  if (pf) {
    if (localStorage.getItem("uploadedList")) {
      var pg = JSON.parse(localStorage.getItem("uploadedList"));
      if (pg.length) {
        var pj = pg.indexOf(pf);
        if (pj !== -1) {
          pg.splice(pj, 1);
          localStorage.setItem("uploadedList", JSON.stringify(pg));
        }
      }
    }
  }
}
function filter_media(pk) {
  var pl;
  var pm;
  var pn;
  var po;
  var pp;
  pl = el("media");
  pm = pl.getElementsByTagName("tr");
  for (po = 0; po < pm.length; po++) {
    pn = pm[po].getElementsByTagName("td")[2];
    if (pn) {
      pp = pn.dataset.type;
      if (pk == "all") {
        pm[po].style.display = "";
      } else if (pp == pk) {
        pm[po].style.display = "";
      } else {
        pm[po].style.display = "none";
      }
    }
  }
}
function openTemplateForm() {
  var pq = new bootstrap.Modal(el("modalTemplate"), {
    backdrop: true,
  });
  pq.show();
}
function countEntries() {
  var pr = getWheelSettingInArray();
  if (pr) {
    var ps = pr.entries;
    el("entries_count").textContent = ps.length;
  }
}
function clearResult() {
  el("wheel_result").innerHTML = "";
  el("result_count").textContent = 0;
}
function sortResult() {
  var pt = getSectorItem(el("sector_list").innerHTML);
  if (pt && pt.length) {
    pt.sort();
    var pu = "";
    for (var pv = pt.length - 1; pv >= 0; pv--) {
      pu += "<div>" + pt[pv] + "</div>";
    }
    el("wheel_result").innerHTML = pu;
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
function resizeImage(pw) {
  return new Promise((pz, qa) => {
    const qb = new Image();
    const qc = new FileReader();
    qc.onload = function (qd) {
      qb.src = qd.target.result;
    };
    qb.onload = function () {
      const qe = document.createElement("canvas");
      const qf = qe.getContext("2d");
      let qg = qb.width;
      let qh = qb.height;
      if (qg > qh) {
        if (qg > 200) {
          qh = Math.round((qh *= 200 / qg));
          qg = 200;
        }
      } else if (qh > 200) {
        qg = Math.round((qg *= 200 / qh));
        qh = 200;
      }
      qe.width = qg;
      qe.height = qh;
      qf.drawImage(qb, 0, 0, qg, qh);
      const qi = qe.toDataURL("image/png");
      pz(qi);
    };
    qb.onerror = qa;
    qc.readAsDataURL(pw);
  });
}
if (el("inputImage")) {
  el("inputImage").addEventListener("change", function (qj) {
    const qk = qj.target.files;
    const ql = [];
    const qm = [];
    if (!qk.length) {
      return;
    }
    var qn = 0;
    if (el("is_advance").checked) {
      qn = 1;
    }
    var qo = el("extra_name").value;
    var qp = localStorage.getItem("wheelSetting" + qo);
    var qq = null;
    if (qp) {
      var qr = JSON.parse(qp);
      qq = qr.entries;
    }
    var qs = qq.length;
    if (qn == 1) {
      var qt = getCurrentStyleColor();
      var qv = parseInt(qt.length);
      for (let qw = 0; qw < qk.length; qw++) {
        qm.push(
          resizeImage(qk[qw]).then((qx) => {
            ql.push(qx);
            qq.push({
              text: "",
              id: qs,
              color: qt[qs % qv],
              image: qx,
            });
            qs++;
            fillEntries(qq, qn);
            setTimeout(function () {
              loadWheel();
            }, 500);
          })
        );
      }
    } else {
      for (let qy = 0; qy < qk.length; qy++) {
        qm.push(
          resizeImage(qk[qy]).then((qz) => {
            ql.push(qz);
            qq.push({
              text: "",
              id: qs,
              image: qz,
            });
            qs++;
            fillEntries(qq, qn);
            setTimeout(function () {
              loadWheel();
            }, 500);
          })
        );
      }
    }
  });
}
function handleImageUpload(rb) {
  const rc = el("item-upload-" + rb).files[0];
  if (rc) {
    resizeImage(rc)
      .then((rd) => {
        var re = getWheelSettingInArray();
        var rf = null;
        if (re) {
          rf = re.entries;
        }
        if (rf.length) {
          for (var rg = 0; rg < rf.length; rg++) {
            if (rf[rg].id == rb) {
              rf[rg].image = rd;
            }
          }
        }
        fillEntries(rf, 1);
        setTimeout(function () {
          loadWheel();
        }, 500);
      })
      .catch((rh) => {
        console.error("Error resizing image:", rh);
      });
  }
}
function configItem(ri) {
  var rj = getWheelSettingInArray();
  var rk = el("item-text-" + ri).value;
  var rl = el("item-sound-" + ri).value;
  var rm = removeAllUrl(el("item-message-" + ri).value);
  var rn = parseInt(el("item-weight-" + ri).value);
  var ro = el("item-color-" + ri).value;
  var rp = document.querySelector("#item-img-" + ri + ">img");
  var rq = rj.entries;
  var rr = rq.reduce((rs, ru) => rs + ru.weight, 0);
  var rv = rq.map((rw) => Math.round((rw.weight / rr) * 100));
  var rx = rv[ri];
  var ry = "";
  ry += '<div class="d-flex justify-content-between mb-3">';
  ry += "<div>";
  if (ri > 0) {
    ry +=
      '<button class="btn btn-sm btn-secondary" data-bs-dismiss="modal" title="Mục trước" onClick="configItem(' +
      (ri - 1) +
      ')"><span data-feather="chevron-left"></span></button> ';
  } else {
    ry +=
      '<button class="btn btn-sm btn-secondary" disabled><span data-feather="chevron-left"></span></button> ';
  }
  ry += '<span class="mx-2">Mục ' + (ri + 1) + "/" + rq.length + "</span>";
  if (ri < rq.length - 1) {
    ry +=
      '<button class="btn btn-sm btn-secondary" title="Mục tiếp theo" data-bs-dismiss="modal" onClick="configItem(' +
      (ri + 1) +
      ')"><span data-feather="chevron-right"></span></button>';
  } else {
    ry +=
      '<button class="btn btn-sm btn-secondary" disabled><span data-feather="chevron-right"></span></button>';
  }
  ry += "</div>";
  ry +=
    '<div><button class="btn btn-sm btn-secondary" title="Thêm mục mới" data-bs-dismiss="modal" onClick="addRow(); configItem(' +
    rq.length +
    ');"><span data-feather="plus"></span></button></div>';
  ry += "</div>";
  ry += '<hr class="border border-secondary border-1"></div>';
  ry += '<div class="row mb-3">';
  ry +=
    '<div class="col-4"><label for="cfg-text-' +
    ri +
    '" class="form-label">Tên mục</label></div>';
  ry +=
    '<div class="col-8"><input type="text" class="form-control bg-light" placeholder="Tên mục" value="' +
    rk +
    '" id="cfg-text-' +
    ri +
    '"></div>';
  ry += "</div>";
  ry += '<div class="row mb-3">';
  ry +=
    '<div class="col-4"><label for="cfg-color-' +
    ri +
    '" class="form-label">Màu</label></div>';
  ry += '<div class="col-8">';
  ry += '<div class="d-flex justify-content-between">';
  ry +=
    '<div class="p-2"><input type="color" value="' +
    ro +
    '" id="cfg-color-' +
    ri +
    '"></div>';
  if (rp) {
    ry += '<div class="position-relative" id="cfg-img-wrap-' + ri + '">';
    ry +=
      '<span class="cfg-img" id="cfg-img-' +
      ri +
      '"><img src="' +
      rp.src +
      '" width="150" ></span>';
    ry +=
      '<span class="position-absolute top-0 end-0 cfg-img-remove" onclick="configRemoveImg(' +
      ri +
      ');">&times;</span>';
    ry += "</div>";
    ry +=
      '<div class="p-2 d-none" id="cfg-upload-wrap-' +
      ri +
      '"><label class="btn btn-secondary" for="cfg-upload-' +
      ri +
      '"><span data-feather="image"></span></label> <input type="file" class="cfg-upload d-none" id="cfg-upload-' +
      ri +
      '" onchange="configImageUpload(' +
      ri +
      ');" accept="image/png, image/gif, image/jpeg" ></div>';
    ry += "</div>";
  } else {
    ry += '<div class="position-relative d-none" id="cfg-img-wrap-' + ri + '">';
    ry += '<span class="cfg-img" id="cfg-img-' + ri + '"></span>';
    ry +=
      '<span class="position-absolute top-0 end-0 cfg-img-remove" onclick="configRemoveImg(' +
      ri +
      ');">&times;</span>';
    ry += "</div>";
    ry +=
      '<div class="p-2" id="cfg-upload-wrap-' +
      ri +
      '"><label class="btn btn-secondary" for="cfg-upload-' +
      ri +
      '"><span data-feather="image"></span></label> <input type="file" class="cfg-upload d-none" id="cfg-upload-' +
      ri +
      '" onchange="configImageUpload(' +
      ri +
      ');" accept="image/png, image/gif, image/jpeg" ></div>';
    ry += "</div>";
  }
  ry += "</div>";
  ry += "</div>";
  ry += "</div>";
  ry += '<div class="row row-3 mb-3">';
  ry += '<div class="col-4">Âm thanh</div>';
  ry += '<div class="col-8">';
  ry += '<div class="input-group">';
  ry += '<select class="form-select" id="cfg-sound-' + ri + '">';
  ry += '<option value="">Kế thừa từ cài đặt chung</option>';
  var rz = "";
  Object.keys(end_sound_option).forEach((sa) => {
    if (sa === rl) {
      rz = "selected";
    }
    ry +=
      '<option value="' +
      sa +
      '" ' +
      rz +
      " >" +
      end_sound_option[sa] +
      "</option>";
    rz = "";
  });
  ry += "</select>";
  ry +=
    '<button class="btn btn-outline-secondary" id="cfg-sound-play" onClick="triggerAudio(el(\'cfg-sound-' +
    ri +
    "').value,'play');\"><span data-feather=\"play\"></span></button>";
  ry +=
    '<button class="btn btn-outline-secondary" id="cfg-sound-stop" onClick="triggerAudio(el(\'cfg-sound-' +
    ri +
    "').value,'stop');\"><span data-feather=\"square\"></span></button>";
  ry += "</div>";
  ry += "</div>";
  ry += "</div>";
  ry += '<div class="row row-4 mb-3">';
  ry += '<div class="col-4">Tiêu đề Popup</div>';
  ry += '<div class="col-8">';
  ry +=
    '<input type="text" class="form-control bg-light" id="cfg-message-' +
    ri +
    '" placeholder="' +
    el("popup_label").value +
    '" value="' +
    rm +
    '" >';
  ry += "</div>";
  ry += "</div>";
  ry += '<div class="row row-4 mb-3">';
  ry += '<div class="col-4">Trọng số</div>';
  ry += '<div class="col-8">';
  ry +=
    '<div class="input-group"><input type="text" class="form-control bg-light numberonly" onkeyup="configWeight(' +
    ri +
    ",'');\" onblur=\"if(this.value=='') this.value='" +
    rn +
    "';configWeight(" +
    ri +
    ",'');\" id=\"cfg-weight-" +
    ri +
    '" value="' +
    rn +
    '" ><button class="btn btn-sm bg-light" onClick="configWeight(' +
    ri +
    ',\'minus\');" style="border: 1px solid #ced4da;color:#212529;"><span data-feather="minus"></span></button><button class="btn btn-sm bg-light" onClick="configWeight(' +
    ri +
    ',\'plus\');" style="border: 1px solid #ced4da;color:#212529;"><span data-feather="plus"></span></button> <span class="input-group-text"><span id="cfg-percent-' +
    ri +
    '">' +
    rx +
    "</span>%</span></div>";
  ry += "</div>";
  ry += "</div>";
  var sb =
    '<a class="text-decoration-none" data-bs-dismiss="modal">Bỏ qua</a> <button class="btn btn-primary" id="btn-cfg-update-' +
    ri +
    '" onclick="configItemUpdate(' +
    ri +
    ');">Cập nhật</button>';
  el("modal-title").innerHTML =
    '<span data-feather="sliders" style="width:24px;heigh:24px;"></span> Nâng cao';
  el("modal-body").innerHTML = ry;
  el("modal-footer").innerHTML = sb;
  feather.replace();
  var sc = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  sc.show();
  numberOnly();
}
function configWeight(sd, se) {
  if (el("cfg-weight-" + sd).value.trim() !== "") {
    var sf = getWheelSettingInArray();
    var sg = parseInt(el("cfg-weight-" + sd).value.trim());
    if (sg <= 0) {
      sg = 1;
      el("cfg-weight-" + sd).value = 1;
    }
    if (sf) {
      var sh = sf.entries;
      if (sh.length) {
        var si = sh.reduce((sj, sk) => sj + sk.weight, 0);
        var sl = sh.map((sn) => Math.round((sn.weight / si) * 100));
        var so = sl[sd];
        var sp = si - sh[sd].weight;
        for (var sq = 0; sq < sh.length; sq++) {
          if (sh[sq].id == sd) {
            if (se == "plus") {
              el("cfg-weight-" + sd).value = sg + 1;
            } else if (se == "minus" && sg > 1) {
              el("cfg-weight-" + sd).value = sg - 1;
            }
            sg = parseInt(el("cfg-weight-" + sd).value);
            sp += sg;
            so = Math.round((sg / sp) * 100);
            el("cfg-percent-" + sd).textContent = so;
            break;
          }
        }
      }
    }
  }
}
function configImageUpload(sr) {
  const ss = el("cfg-upload-" + sr).files[0];
  if (ss) {
    resizeImage(ss)
      .then((st) => {
        el("cfg-img-" + sr).innerHTML = '<img src="' + st + '" width="150" >';
        el("cfg-img-wrap-" + sr).classList.remove("d-none");
        el("cfg-upload-wrap-" + sr).classList.add("d-none");
      })
      .catch((su) => {
        console.error("Error resizing image:", su);
      });
  }
}
function configRemoveImg(sv) {
  el("cfg-img-" + sv).innerHTML = "";
  el("cfg-img-wrap-" + sv).classList.add("d-none");
  el("cfg-upload-wrap-" + sv).classList.remove("d-none");
}
function configItemUpdate(sw) {
  var sx = el("cfg-text-" + sw).value;
  var sy = el("cfg-color-" + sw).value;
  var sz = document.querySelector("#cfg-img-" + sw + ">img");
  var ta = el("cfg-sound-" + sw).value;
  var tb = parseInt(el("cfg-weight-" + sw).value);
  var tc = removeAllUrl(el("cfg-message-" + sw).value);
  el("btn-cfg-update-" + sw).textContent = "Cập nhật...";
  var te = getWheelSettingInArray();
  var tf = null;
  if (te) {
    tf = te.entries;
  }
  if (tb <= 0) {
    tb = 1;
  }
  if (tf.length) {
    for (var tg = 0; tg < tf.length; tg++) {
      if (tf[tg].id == sw) {
        tf[tg].text = sx;
        tf[tg].color = sy;
        tf[tg].weight = tb;
        if (sz) {
          tf[tg].image = sz.src;
        } else {
          delete tf[tg].image;
        }
        if (ta) {
          tf[tg].sound = ta;
        } else {
          delete tf[tg].sound;
        }
        if (tc) {
          tf[tg].message = tc;
        } else {
          delete tf[tg].message;
        }
        break;
      }
    }
  }
  fillEntries(tf, 1);
  setTimeout(function () {
    loadWheel();
    el("btn-cfg-update-" + sw).textContent = "Cập nhật";
  }, 500);
}
function fill100() {
  var tj = [];
  var tk = 0;
  if (el("is_advance").checked) {
    tk = 1;
  }
  if (tk == 0) {
    for (var tl = 0; tl < 100; tl++) {
      tj.push({
        text: (tl + 1).toString(),
        id: tl,
      });
    }
  } else {
    var tm = getCurrentStyleColor();
    for (var tl = 0; tl < 100; tl++) {
      tj.push({
        text: (tl + 1).toString(),
        id: tl,
        color: tm[tl % tm.length],
      });
    }
  }
  fillEntries(tj, tk);
  loadWheel();
}
function showInfo() {
  var tn = document.getElementsByClassName("toggle-show-hide");
  for (var tp = 0; tp < tn.length; tp++) {
    tn[tp].classList.remove("d-none");
  }
  const tq = document.querySelectorAll("[data-dest]");
  if (tq.length) {
    tq.forEach((ts) => {
      ts.classList.remove("d-none");
    });
  }
  el("wheel-center").classList.remove("w-100");
}
function hideInfo() {
  var tt = document.getElementsByClassName("toggle-show-hide");
  for (var tu = 0; tu < tt.length; tu++) {
    tt[tu].classList.add("d-none");
  }
  const tv = document.querySelectorAll("[data-dest]");
  if (tv.length) {
    tv.forEach((tw) => {
      tw.classList.add("d-none");
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
function addTextToWheel(tx) {
  var ty = el(tx).textContent;
  var tz = ty.split(",");
  var ua = "";
  var ub = "";
  for (var uc = 0; uc < tz.length; uc++) {
    ub = tz[uc].trim();
    ua += "<div>" + ub + "</div>";
  }
  el("sector_list").innerHTML = ua;
  el("sector_list").dispatchEvent(new KeyboardEvent("keyup"));
  el("sector_list").scrollIntoView();
}
function showTitleDescForm() {
  var ud = "";
  var ue = "";
  var uf = el("extra_name").value;
  var ug = localStorage.getItem("wheelSetting" + uf);
  if (el("vqmm-title") || el("vqmm-desc")) {
    if (el("vqmm-title")) {
      ud = el("vqmm-title").textContent;
    }
    if (el("vqmm-desc")) {
      ue = el("vqmm-desc").textContent;
    }
  } else {
    if (ug !== null) {
      var uh = JSON.parse(ug);
      ud = uh.title;
      ue = uh.desc;
    }
  }
  el("modal-title").innerHTML =
    '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="edit"></span> Sửa tiêu đề và mô tả';
  el("modal-body").innerHTML =
    '<div class="mb-3"><label for="editTitle" class="form-label">Tiêu đề</label><input type="text" class="form-control" value="' +
    ud +
    '" data-maxlength="60" id="editTitle" placeholder="Tiêu đề vòng quay"></div><div class="mb-3"><label for="editDesc" class="form-label">Mô tả</label><textarea class="form-control" id="editDesc" placeholder="Mô tả vòng quay"  data-maxlength="160" rows="3">' +
    ue +
    "</textarea></div>";
  el("modal-footer").innerHTML =
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button><button type="button" id="saveTitleDesc" onclick="saveTitleDesc()" class="btn btn-primary" data-bs-dismiss="modal">Lưu lại</button>';
  feather.replace();
  var ui = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  ui.show();
  startLimitCharacters();
}
function saveTitleDesc() {
  var uj = el("editTitle").value;
  var uk = el("editDesc").value;
  var um = el("extra_name").value;
  var un = localStorage.getItem("wheelSetting" + um);
  if (un) {
    var uo = JSON.parse(un);
    uo.title = uj;
    uo.desc = uk;
    localStorage.setItem("wheelSetting" + um, JSON.stringify(uo));
  }
  fillTitleDesc(uj, uk);
}
function fillTitleDesc(uq, ur) {
  var us =
    '<div class="wp-block-heading has-x-large-font-size toggle-show-hide" id="vqmm-title">' +
    uq +
    "</div>";
  us += '<p class="toggle-show-hide" id="vqmm-desc">' + ur + "</p>";
  el("vqmm-content").innerHTML = us;
}
function fillEntries(ut, uu) {
  if (uu == 0) {
    var uv = "";
    var uw = "";
    if (ut.length) {
      for (var ux = 0; ux < ut.length; ux++) {
        if (ut[ux].hasOwnProperty("image")) {
          uw = ' <img src="' + ut[ux].image + '" >';
        }
        uv += "<div>" + ut[ux].text + uw + "</div>";
        uw = "";
      }
    }
    el("sector_list").innerHTML = uv;
  } else {
    var uv = '<div class="scrollarea" id="scrollarea">';
    var uy = 0;
    var uz = "";
    var va = "";
    var vb = "";
    var vc = "";
    var vd = 0;
    if (ut.length) {
      var ve = ut.reduce((vf, vg) => vf + vg.weight, 0);
      var vh = ut.map((vj) => Math.round((vj.weight / ve) * 100));
      for (var ux = 0; ux < ut.length; ux++) {
        uy = ux;
        ut[ux].id = ux;
        vc = "";
        if (!ut[ux].hasOwnProperty("weight")) {
          ut[ux].weight = 1;
        }
        if (ut[ux].hasOwnProperty("sound")) {
          va = ut[ux].sound;
        }
        if (ut[ux].hasOwnProperty("message")) {
          uz = ut[ux].message;
        }
        if (ut[ux].hasOwnProperty("image")) {
          vb = ut[ux].image;
        }
        if (uy == ut[0].id) {
          vc += "row-first";
        }
        vd = vh[ux];
        if (uy == ut[ut.length - 1].id) {
          vc += " row-last";
        }
        uv +=
          '<div class="row row-item ' +
          vc +
          '" id="row-item-' +
          uy +
          '" data-id="' +
          uy +
          '">';
        uv +=
          '<div class="col-1 d-flex flex-column justify-content-center movearea"><a href="javascript:void(0);" class="text-decoration-none text-secondary item-up" onclick="upDown(' +
          uy +
          ',\'up\');">↑</a><a href="javascript:void(0);" class="text-decoration-none text-secondary item-down" onclick="upDown(' +
          uy +
          ",'down');\">↓</a></div>";
        uv += '<div class="col-9 rowarea">';
        uv +=
          '<div class="mb-1 input-group"><span class="input-group-text">#' +
          (ux + 1) +
          '</span><input type="text" class="form-control bg-light item-text" id="item-text-' +
          uy +
          '" value="' +
          ut[ux].text +
          '" placeholder="Tên mục"></div>';
        uv += '<div class="d-flex align-items-center mb-3">';
        uv +=
          '<input type="color" class="me-1 item-color" id="item-color-' +
          uy +
          '"  value="' +
          ut[ux].color +
          '">';
        if (vb) {
          uv +=
            '<div class="item-img position-relative me-1" id="item-img-' +
            uy +
            '"><img src="' +
            vb +
            '" width="30"> <span class="d-inline-block position-absolute top-0 end-0 item-img-remove" onclick="removeItemImage(' +
            uy +
            ');">&times;</span> </div>';
          uv +=
            '<label class="me-1 d-none" for="item-upload-' +
            uy +
            '"><span data-feather="image"></span></label>';
        } else {
          uv +=
            '<div class="item-img position-relative me-1 d-none" id="item-img-' +
            uy +
            '"></div>';
          uv +=
            '<label class="me-1" for="item-upload-' +
            uy +
            '"><span data-feather="image"></span></label>';
        }
        uv +=
          '<input type="file" class="item-upload d-none" id="item-upload-' +
          uy +
          '" data-id="' +
          uy +
          '" onchange="handleImageUpload(' +
          uy +
          ');" accept="image/png, image/gif, image/jpeg" >';
        uv +=
          '<div class="input-group"><span class="input-group-text" style="padding:.375rem;"><img src="' +
          ajax_object.theme_uri +
          '/assets/icons/balance.png" width="16" alt="balance" ></span><input type="text" class="form-control numberonlyx bg-light item-weight" id="item-weight-' +
          uy +
          '" oninput="changeWeight(' +
          uy +
          ",'');\" onblur=\"if(this.value=='') this.value='" +
          ut[ux].weight +
          '\';" value="' +
          ut[ux].weight +
          '"><span class="input-group-text" style="padding:.375rem;cursor:pointer;" onClick="changeWeight(' +
          uy +
          ',\'minus\');">−</span><span class="input-group-text" style="padding:.375rem;cursor:pointer;" onclick="changeWeight(' +
          uy +
          ',\'plus\');" style="border: 1px solid #ced4da;color:#212529;">+</span><span class="input-group-text" style="padding:.375rem;"><span id="item-size-' +
          uy +
          '">' +
          vd +
          "</span>%</span></div>";
        uv +=
          '<input type="hidden" id="item-sound-' + uy + '" value="' + va + '">';
        uv +=
          '<input type="hidden" id="item-message-' +
          uy +
          '" value="' +
          uz +
          '">';
        uv += "</div>";
        uv += "</div>";
        uv +=
          '<div class="col-2 d-flex align-items-center justify-content-center p-2 actionarea">';
        uv +=
          '<button class="btn btn-sm btn-primary p-1 me-1 item-config" id="item-config-' +
          uy +
          '" onclick="configItem(' +
          uy +
          ');"><span data-feather="sliders"></span></button>';
        uv +=
          '<a href="javascript:void(0);" class="text-decoration-none text-secondary item-remove" id="item-remove-' +
          uy +
          '" data-id="' +
          uy +
          '" onclick="removeWheelItem(' +
          uy +
          "," +
          uu +
          ');"><span data-feather="x"></span></a>';
        uv += "</div>";
        uv += "</div>";
        vb = va = uz = "";
      }
    }
    uv += "</div>";
    uv += '<button class="btn btn-primary" id="add-entry">Thêm mục</button>';
    el("advance-editor").innerHTML = uv;
  }
  callbackAfterFillEntries(ut, uu);
  var vk = getWheelSettingInArray();
  if (vk) {
    vk.entries = ut;
    vk.is_advance = uu;
    setWheelSettingFromArray(vk);
  }
}
function callbackAfterFillEntries(vl, vm) {
  if (vm == 0) {
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
    var vo = document.querySelectorAll(".item-color");
    if (vo.length) {
      for (var vp = vo.length - 1; vp >= 0; vp--) {
        vo[vp].addEventListener("change", function () {
          wheelSettings();
        });
      }
    }
    var vq = document.querySelectorAll(".item-text");
    if (vq.length) {
      for (var vp = vq.length - 1; vp >= 0; vp--) {
        vq[vp].addEventListener("keyup", function () {
          setTimeout(wheelSettings(), 500);
        });
      }
    }
    numberOnly();
  }
  el("entries_count").textContent = vl.length;
  feather.replace();
}
function changeWeight(vr, vs) {
  if (el("item-weight-" + vr).value.trim() !== "") {
    var vt = getWheelSettingInArray();
    var vu = el("item-weight-" + vr).value.trim();
    if (isNaN(vu) || vu <= 0) {
      vu = 1;
      el("item-weight-" + vr).value = 1;
    } else {
      vu = parseInt(vu);
    }
    if (vt) {
      var vv = vt.entries;
      if (vv.length) {
        for (var vw = 0; vw < vv.length; vw++) {
          if (vv[vw].id == vr) {
            if (vs == "plus") {
              el("item-weight-" + vr).value = vu + 1;
            } else if (vs == "minus" && vu > 1) {
              el("item-weight-" + vr).value = vu - 1;
            }
            vv[vw].weight = parseInt(el("item-weight-" + vr).value);
            vt.entries = vv;
            setWheelSettingFromArray(vt);
            break;
          }
        }
      }
    }
    fillEntries(vv, 1);
    var vx = el("item-weight-" + vr).value;
    el("item-weight-" + vr).setSelectionRange(vx.length, vx.length);
    el("item-weight-" + vr).focus();
    setTimeout(loadWheel(), 500);
  }
}
function fixVerticalAlign() {
  if (el("wheel-wrapper")) {
    var vy = el("row-wheel").offsetHeight;
    if (vy < window.innerHeight) {
      el("wheel-wrapper").classList.remove("py-2");
      var vz = "calc((100vh - 65px - " + vy + "px)/2)";
      el("wheel-wrapper").style.paddingTop = vz;
      el("wheel-wrapper").style.paddingBottom = vz;
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
  var wa = new XMLHttpRequest();
  wa.open("POST", ajax_object.ajax_url + "?action=ajaxLogout");
  wa.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  wa.onload = function () {
    if (wa.status === 200) {
      window.location = ajax_object.home_url;
    } else if (wa.status !== 200) {
      console.log("error:" + wa.status);
    }
  };
  wa.send("&ajaxsecurity=" + ajax_object.ajax_nonce);
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
    let wb = prompt("Hãy gõ chữ DELETE vào ô dưới để xóa", "");
    if (wb == "DELETE") {
      var wc = new XMLHttpRequest();
      wc.open("POST", ajax_object.ajax_url + "?action=deleteMyAccount");
      wc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      wc.onload = function () {
        if (wc.status === 200) {
          if (wc.responseText == "success") {
            window.location = ajax_object.home_url;
          } else {
            alert(wc.responseText);
          }
        } else if (wc.status !== 200) {
          console.log("error:" + wc.status);
        }
      };
      wc.send("&ajaxsecurity=" + ajax_object.ajax_nonce);
    } else if (wb != null && wb != "DELETE") {
      alert("Bạn phải gõ chính xác mới xóa được.");
    }
  }
}
function confirmAdvance(wd) {
  var we = 0;
  html = "";
  if (wd == 1) {
    el("is_advance").checked = true;
    we = 1;
    var wf = getSectorItem(el("sector_list").innerHTML);
    var wg = getCurrentStyleColor();
    var wh = parseInt(wg.length);
    var wi = 0;
    var wj = [];
    var wk;
    var wl = null;
    var wm = "";
    for (var wn = 0; wn < wf.length; wn++) {
      wi = wn % wh;
      if (!wf[wn].includes("<img")) {
        wj.push({
          text: wf[wn],
          id: wn,
          color: wg[wi],
          weight: 1,
        });
      } else {
        wk = document.createElement("div");
        wk.innerHTML = wf[wn];
        wl = wk.querySelector("img");
        wm = wf[wn].replace(/<img[^>]*>/g, "");
        wm = stripHtml(wm);
        wm = wm.trim();
        wj.push({
          text: wm,
          id: wn,
          color: wg[wi],
          image: wl.src,
          weight: 1,
        });
      }
    }
    console.log("Đã chuyển sang chế độ nâng cao");
    fillEntries(wj, we);
  } else {
    el("is_advance").checked = false;
    we = 0;
    var wo = getWheelSettingInArray();
    if (wo) {
      wo.is_advance = we;
      var wq = wo.entries;
      var wj = [];
      for (var wn = 0; wn < wq.length; wn++) {
        if (wq[wn].image) {
          wj.push({
            text: wq[wn].text,
            id: wn,
            image: wq[wn].image,
          });
        } else {
          wj.push({
            text: wq[wn].text,
            id: wn,
          });
        }
      }
      console.log("Đã chuyển về bình thường");
      fillEntries(wj, we);
      setTimeout(function () {
        loadWheel();
      }, 500);
    }
  }
}
function addRow() {
  var wr = getWheelSettingInArray();
  if (wr) {
    var ws = wr.entries;
    var wt = getCurrentStyleColor();
    var wu = ws.length % wt.length;
    ws.push({
      text: "",
      id: ws.length,
      color: wt[wu],
      weight: 1,
    });
    fillEntries(ws, 1);
    loadWheel();
  }
}
function setWheelType(wv = "color") {
  if (wv == "image") {
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
  .addEventListener("click", function (ww) {
    ww.preventDefault();
    beforeCreateLinkForm();
    hideTwentyTwentyThreeMenu();
  });
if (document.querySelector(".open-link>a")) {
  document
    .querySelector(".open-link>a")
    .addEventListener("click", function (wx) {
      wx.preventDefault();
      viewSharedLink();
      hideTwentyTwentyThreeMenu();
    });
}
el("btn-embed-wheel").addEventListener("click", function () {
  document.querySelector(".share-link>a").click();
});
document
  .querySelector(".template-link>a")
  .addEventListener("click", function (wy) {
    wy.preventDefault();
    openTemplateForm();
    hideTwentyTwentyThreeMenu();
  });
document
  .querySelector(".toggle-link>a")
  .addEventListener("click", function (wz) {
    wz.preventDefault();
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
  .addEventListener("click", function (xa) {
    xa.preventDefault();
    openSettingsForm();
    hideTwentyTwentyThreeMenu();
  });
el("btn-settings-wheel").addEventListener("click", function () {
  document.querySelector(".settings-link>a").click();
});
document
  .querySelector(".fullscreen-link>a")
  .addEventListener("click", function (xb) {
    xb.preventDefault();
    fullscreen();
  });
document
  .querySelector(".exit-fullscreen-link>a")
  .addEventListener("click", function (xc) {
    xc.preventDefault();
    exitFullscreen();
  });
if (document.querySelector(".language-link>a")) {
  document
    .querySelector(".language-link>a")
    .addEventListener("click", function (xd) {
      xd.preventDefault();
      hideTwentyTwentyThreeMenu();
      showLanguageForm();
    });
}
if (document.querySelector(".footer-language-link>a")) {
  document
    .querySelector(".footer-language-link>a")
    .addEventListener("click", function (xe) {
      xe.preventDefault();
      showLanguageForm();
    });
}
if (document.querySelector(".download-link>a")) {
  document
    .querySelector(".download-link>a")
    .addEventListener("click", function (xf) {
      xf.preventDefault();
      el("btn-download").click();
    });
}
if (document.querySelector("#btn-generate-code")) {
  el("btn-generate-code").addEventListener("click", function (xg) {
    xg.preventDefault();
    generateCodeForm();
  });
}
function showLanguageForm() {
  var xh = "";
  xh += '<div class="h5 mb-3">Gợi ý</div>';
  xh += '<div class="row g-3 mb-3">';
  xh +=
    '<div class="col-6 col-md-4"><button class="btn btn-outline-secondary w-100" onclick="changeLanguage(\'en\');">Tiếng Anh</button></div>';
  xh +=
    '<div class="col-6 col-md-4"><button class="btn btn-outline-secondary w-100" onclick="changeLanguage(\'vi\');">Tiếng Việt</button></div>';
  xh += "</div>";
  xh +=
    '<div class="h5 mt-5 mb-3">Tất cả ngôn ngữ (' +
    languages.length +
    ")</div>";
  xh +=
    '<div class="mb-3"><input type="text" class="form-control" id="search-lang" onkeyup="searchLang();" placeholder="Tìm kiếm"></div>';
  xh +=
    '<div class="all-languages" style="max-height:350px;overflow-x:hidden;overflow-y:auto;">';
  xh += '<div class="row g-1 g-md-3 mb-3">';
  for (var xi = 0; xi < languages.length; xi++) {
    xh +=
      '<div class="col-6 col-md-4 trlang" data-code="' +
      languages[xi].code +
      '" data-name="' +
      languages[xi].name +
      '" ><button class="btn btn-outline-secondary w-100" onclick="changeLanguage(\'' +
      languages[xi].code +
      "');\">" +
      languages[xi].name +
      "</button></div>";
  }
  xh += "</div>";
  xh += "</div>";
  el("modal-title").innerHTML =
    '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="globe"></span> Ngôn ngữ';
  el("modal-body").innerHTML = xh;
  el("modal-footer").innerHTML =
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>';
  el("modal-footer").classList.remove("justify-content-center");
  feather.replace();
  var xj = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  xj.show();
}
function changeLanguage(xk) {
  if (xk !== "vi") {
    window.open("https://spinwheel.one/" + xk, "_blank").focus();
  } else {
    location.href = ajax_object.home_url;
  }
}
function searchLang() {
  var xm = (name = "");
  var xn = el("search-lang").value.toLowerCase();
  var xp = document.querySelectorAll(".trlang");
  for (i = 0; i < xp.length; i++) {
    xm = xp[i].dataset.code;
    name = xp[i].dataset.name;
    if (
      xm.toLowerCase().indexOf(xn) > -1 ||
      name.toLowerCase().indexOf(xn) > -1
    ) {
      xp[i].classList.remove("d-none");
    } else {
      xp[i].classList.add("d-none");
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
    addtowheels[i].addEventListener("click", function (xq) {
      xq.preventDefault();
      href = this.href;
      if (href != "") {
        temp = href.split("#");
        if (temp != null) {
          id = temp[1];
          if ("" !== id && el(id)) {
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
        for (var xr of chkcolor) {
          xr.checked = false;
          el("color-" + xr.value).value = "#ADB2B0";
        }
      }
      if (thisColor.length) {
        for (var xs = 0; xs < thisColor.length; xs++) {
          el("color-" + (xs + 1)).value = thisColor[xs];
          el("chkcolor-" + (xs + 1)).checked = true;
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
  xt,
  xu,
  xv,
  xw = ["bokeh", "Abstract", "Cityscape", "Playground", "Educational"],
  xx = ""
) {
  var xy =
    '<a class="text-decoration-none" data-bs-dismiss="modal" id="btn-close-modal-img">Bỏ qua</a> <button type="button" class="btn btn-primary" onClick="insertSelectedImgTo(\'' +
    xv +
    "');el('" +
    xv +
    "').dispatchEvent(new Event('change'));\">Đồng ý</button>";
  var xz = "";
  xw = shuffle(xw);
  xz +=
    '<div class="input-group mb-3"><input type="text" class="form-control" id="search-input" value="' +
    xw[0] +
    '" placeholder="Nhập từ khoá bằng tiếng Anh"><button type="button" class="btn btn-primary" id="btn-search-img"><span data-feather="search"></span></button></div>';
  xz += '<div class="mb-1">Tham khảo:</div>';
  xz += '<div class="mb-3">';
  var ya = [
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
  for (kw of ya) {
    xz +=
      '<a class="btn btn-sm small" href="javascript:void(0);" onclick="el(\'search-input\').value=\'' +
      kw +
      "';el('btn-search-img').click();\">" +
      kw +
      "</a>";
  }
  xz += "</div>";
  xz += "";
  var yb = "";
  if (xt > 0 && xu > 0) {
    yb = 'data-width="' + xt + '" data-height="' + xu + '"';
  }
  if (xx !== "") {
    yb += ' data-class="' + xx + '"';
  }
  xz += '<div id="photo-gallery" class="row g-3 mb-3" ' + yb + "></div>";
  xz += '<input type="hidden" id="selected-img" value="" >';
  xz +=
    '<div class="d-grid gap-2"><button type="button" class="btn btn-primary" id="load-more">Xem thêm</button></div>';
  el("modal-title").innerHTML =
    '<span data-feather="image"></span> Chọn ảnh nền từ unsplash.com';
  el("modal-body").innerHTML = xz;
  el("modal-footer").innerHTML = xy;
  el("modal-dialog").classList.add("modal-lg");
  feather.replace();
  var yc = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  yc.show();
  document.querySelector(".modal-backdrop").style.zIndex = "1040";
  el("myModal").parentNode.style.zIndex = "1050";
  el("myModal").addEventListener("hidden.bs.modal", function () {
    document.querySelector(".modal-backdrop").style.zIndex = "";
    el("myModal").parentNode.style.zIndex = "";
    el("modal-dialog").classList.remove("modal-lg");
  });
  el("btn-search-img").addEventListener("click", function (yd) {
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
  el("search-input").addEventListener("keyup", function (ye) {
    if (ye.key === "Enter") {
      el("btn-search-img").click();
    }
  });
}
let editableElement = document.querySelector("#sector_list");
editableElement.addEventListener("paste", function (yf) {
  yf.preventDefault();
  const yg = (yf.clipboardData || window.clipboardData).getData("text/plain");
  const yh = yg.split("\n");
  const yi = document.createDocumentFragment();
  yh.forEach((yj) => {
    const yk = document.createElement("div");
    yk.textContent = yj;
    yi.appendChild(yk);
  });
  const yl = window.getSelection();
  const ym = yl.getRangeAt(0);
  ym.deleteContents();
  ym.insertNode(yi);
  ym.collapse(false);
  yl.removeAllRanges();
  yl.addRange(ym);
});
editableElement.addEventListener("input", function () {
  if (this.innerHTML.trim() === "" || this.innerHTML.trim() === "<br>") {
    this.innerHTML = "<div><br></div>";
  }
});
el("is_advance").addEventListener("change", function (yn) {
  yn.preventDefault();
  var yo = (modal_body = modal_footer = "");
  if (this.checked) {
    this.checked = false;
    yo =
      '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="help-circle"></span> Xác nhận';
    modal_body =
      '<p class="alert alert-warning"><strong>Bạn có chắc chắn muốn chuyển sang chế độ nâng cao không?</strong> Chế độ nâng cao cung cấp nhiều tùy chỉnh hơn, nhưng bạn không thể dán nhiều mục nhập cùng một lúc. Bạn luôn có thể quay lại bằng cách bỏ chọn hộp kiểm "Nâng cao".</p>';
    modal_footer =
      '<a class="text-decoration-none" data-bs-dismiss="modal">Bỏ qua</a> <button type="button" class="btn btn-primary" tabindex="1" data-bs-dismiss="modal" id="btn-agree-change-advanced" onClick="confirmAdvance(1);">Đồng ý</button>';
  } else {
    this.checked = true;
    yo =
      '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="help-circle"></span> Xác nhận';
    modal_body =
      "Nếu bạn hoàn nguyên từ chế độ nâng cao, bạn có thể mất một số màu. Bạn có chắc chắn muốn tiếp tục không?";
    modal_footer =
      '<a class="text-decoration-none" data-bs-dismiss="modal">Bỏ qua</a> <button type="button" class="btn btn-primary" tabindex="1" data-bs-dismiss="modal" id="btn-agree-change-advanced" tabindex="1" onClick="confirmAdvance(0);">Đồng ý</button>';
  }
  el("modal-title").innerHTML = yo;
  el("modal-body").innerHTML = modal_body;
  el("modal-footer").innerHTML = modal_footer;
  el("modal-footer").classList.remove("justify-content-center");
  feather.replace();
  var yp = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  yp.show();
  el("btn-agree-change-advanced").focus();
});
el("btn-download").addEventListener("click", function () {
  el("loading-spinner").style.display = "block";
  if (typeof domtoimage === "undefined") {
    var yq = document.createElement("script");
    yq.src =
      "https://cdn.jsdelivr.net/npm/dom-to-image@2.6.0/src/dom-to-image.min.js";
    yq.onload = function () {
      downloadImage();
    };
    document.body.appendChild(yq);
  } else {
    downloadImage();
  }
});
function downloadImage() {
  var yr = document.getElementById("wheel-container");
  setTimeout(function () {
    domtoimage
      .toPng(yr)
      .then(function (ys) {
        return fetch(ys)
          .then((yt) => yt.blob())
          .then((yu) => {
            var yv = document.createElement("a");
            yv.href = URL.createObjectURL(yu);
            yv.download = "vong-quay-may-man.png";
            yv.click();
            setTimeout(function () {
              el("loading-spinner").style.display = "none";
            }, 3000);
          });
      })
      .catch(function (yw) {
        console.error("Error generating image:", yw);
        setTimeout(function () {
          el("loading-spinner").style.display = "none";
        }, 3000);
      });
  }, 2000);
}
function generateCodeForm() {
  el("modal-title").innerHTML =
    '<span data-feather="cpu"></span> Tạo mã bốc thăm';
  el("modal-body").innerHTML =
    '<div class="">\n                  <div class="input-group mb-3"><span class="input-group-text">Số lượng</span> <input type="number" id="totalCode" min="1" class="form-control" value="50" ></div>\n                  <div class="input-group mb-3"><span class="input-group-text">Số kí tự</span> <input type="number" id="lenCode" min="2" class="form-control" value="5" ></div>\n                  Bao gồm: \n                  <div class="form-check form-check-inline">\n                    <input class="form-check-input gencode" type="checkbox" id="uppercase" checked>\n                    <label class="form-check-label" for="uppercase">ABC</label>\n                  </div>\n\n                  <div class="form-check form-check-inline">\n                    <input class="form-check-input gencode" type="checkbox" id="lowercase" checked>\n                    <label class="form-check-label" for="lowercase">abc</label>\n                  </div>\n\n                  <div class="form-check form-check-inline">\n                    <input class="form-check-input gencode" type="checkbox" id="number" checked>\n                    <label class="form-check-label" for="number">123</label>\n                  </div>\n\n                </div>\n             </div>';
  el("modal-footer").innerHTML =
    '<button type="button" tabindex="1" class="btn btn-primary" id="btn-gencode"><span data-feather="cpu"></span> <span id="btn-gencode-txt">Tạo mã ngay</span></button>';
  feather.replace();
  var yx = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  yx.show();
  var yy = document.querySelectorAll('input[type="checkbox"].gencode');
  for (var yz = 0; yz < yy.length; yz++) {
    yy[yz].addEventListener("click", function () {
      if (countBoxCheckedByClass("gencode") == 1) {
        for (var zb = 0; zb < yy.length; zb++) {
          if (yy[zb].checked == true) {
            yy[zb].disabled = true;
          }
        }
      } else {
        for (var zb = 0; zb < yy.length; zb++) {
          yy[zb].disabled = false;
        }
      }
    });
  }
  el("btn-gencode").addEventListener("click", function () {
    el("btn-gencode-txt").textContent = "Đang tạo mã...";
    var zc = parseInt(el("totalCode").value);
    var zd = parseInt(el("lenCode").value);
    var ze = [];
    var zf = [];
    if (zc <= 0 || zc == "") {
      zc = 10;
    }
    if (zd <= 3 || zd == "") {
      zd = 3;
    }
    while (ze.length < zc) {
      code = generateCode();
      codelower = code.toLowerCase();
      if (!zf.includes(codelower)) {
        ze.push(code);
        zf.push(codelower);
      }
    }
    setTimeout(function () {
      fillWheelContent(ze);
      el("btn-gencode-txt").textContent = "Tạo mã ngay";
      feather.replace();
    }, 500);
  });
}
function generateCode() {
  var zg = parseInt(el("lenCode").value);
  var zh = "";
  if (el("uppercase").checked == true) {
    zh += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (el("lowercase").checked == true) {
    zh += "abcdefghijklmnopqrstuvwxyz";
  }
  if (el("number").checked == true) {
    zh += "0123456789";
  }
  var zi = (zj = zg, zk = zh) =>
    Array.from(crypto.getRandomValues(new Uint32Array(zj)))
      .map((zl) => zk[zl % zk.length])
      .join("");
  var zm = zi();
  return zm;
}
function menuDecorating() {
  var zn = document.querySelector(".template-link>a>span");
  var zo = document.querySelector(".share-link>a>span");
  var zp = document.querySelector(".fullscreen-link>a>span");
  var zq = document.querySelector(".exit-fullscreen-link>a>span");
  var zr = document.querySelector(".settings-link>a>span");
  var zs = document.querySelector(".toggle-link>a>span");
  var zt = document.querySelector(".gallery-link>a");
  var zu = document.querySelector(".my-account-link>a");
  var zv = document.querySelector(".more-link>a");
  var zw = document.querySelector(".download-link>a");
  var zx = document.querySelector(".language-link>a");
  var zy = document.querySelector(".footer-language-link>a");
  if (zn) {
    zn.insertAdjacentHTML("afterbegin", '<span data-feather="folder"></span> ');
  }
  if (zu) {
    zu.insertAdjacentHTML("afterbegin", '<span data-feather="user"></span> ');
    if (ajax_object.isShowAds != 1) {
      zu.insertAdjacentHTML("afterend", "<sup>ᴾᴿᴼ</sup>");
    }
  }
  if (zo) {
    zo.insertAdjacentHTML(
      "afterbegin",
      '<span data-feather="share-2"></span> '
    );
  }
  if (zp) {
    zp.innerHTML = '<span data-feather="maximize"></span>';
  }
  if (zq) {
    zq.innerHTML = '<span data-feather="minimize"></span>';
  }
  if (zr) {
    zr.insertAdjacentHTML(
      "afterbegin",
      '<span data-feather="settings"></span> '
    );
  }
  if (zs) {
    zs.insertAdjacentHTML("afterbegin", '<span data-feather="eye"></span> ');
  }
  if (zt) {
    zt.insertAdjacentHTML("afterbegin", '<span data-feather="grid"></span> ');
  }
  if (zv) {
    zv.insertAdjacentHTML(
      "afterbegin",
      '<span data-feather="more-vertical"></span> '
    );
  }
  if (zw) {
    zw.innerHTML = '<span data-feather="download"></span>';
  }
  if (zx) {
    zx.insertAdjacentHTML("afterbegin", '<span data-feather="globe"></span> ');
  }
  if (zy) {
    document
      .querySelector(".wp-block-navigation-item.footer-language-link")
      .classList.remove("turnoff");
    zy.classList.add("d-flex");
    zy.classList.add("align-items-center");
    zy.innerHTML =
      '<span class="me-2" style="font-size:24px">🇻🇳</span> Tiếng Việt';
  }
  feather.replace();
}
window.addEventListener("DOMContentLoaded", (zz) => {
  var aaa = getWheelSettingInArray();
  if (aaa) {
    var aab = aaa.title;
    var aac = aaa.desc;
    var aad = aaa.start_sound;
    var aae = aaa.end_sound;
    var aaf = aaa.duration;
    var aag = aaa.show_confetti;
    var aah = aaa.show_popup;
    var aai = aaa.popup_label;
    var aaj = aaa.show_remove_button;
    var aak = aaa.colors;
    var aal = aaa.custom_bg_color;
    var aam = aaa.custom_color;
    var aan = aaa.custom_bg_img;
    var aao = aaa.btn_spin_label;
    var aap = "";
    var aaq = aaa.is_stroke;
    var aar = aaa.entries;
    var aas = "color";
    var aat = "";
    var aau = aaa.is_advance;
    el("start_sound").value = aad;
    el("end_sound").value = aae;
    el("duration").value = aaf;
    if (aag == "yes") {
      el("show_confetti").checked = true;
    } else {
      el("show_confetti").checked = false;
    }
    if (aah == "yes") {
      el("show_popup").checked = true;
    } else {
      el("show_popup").checked = false;
    }
    if (aaj == "yes") {
      el("show_remove_button").checked = true;
    } else {
      el("show_remove_button").checked = false;
    }
    if (aaq == "yes") {
      el("is_stroke").checked = true;
    } else {
      el("is_stroke").checked = false;
    }
    if (aaa.hasOwnProperty("btn_spin_img")) {
      aap = aaa.btn_spin_img;
      el("btn-spin-img").value = aap;
    }
    if (aaa.hasOwnProperty("type")) {
      aas = aaa.type;
      setWheelType(aas);
      if (aaa.hasOwnProperty("cover_img")) {
        aat = aaa.cover_img;
        el("cover_img_display").src = aat;
        el("cover_img").value = aat;
      }
    }
    if (aaa.hasOwnProperty("show_border")) {
      if (aaa.show_border == "yes") {
        el("show_border").checked = true;
        el("custom_border_color").classList.remove("d-none");
      } else {
        el("show_border").checked = false;
        el("custom_border_color").classList.add("d-none");
      }
      el("border_color").value = aaa.border_color;
      el("diamond_color").value = aaa.diamond_color;
    }
    var aav = document.getElementsByName("chkcolor");
    if (aav.length) {
      for (var aaw of aav) {
        aaw.checked = false;
      }
    }
    if (aak.length) {
      for (var aax of aak) {
        el("chkcolor-" + aax.key).checked = true;
        el("color-" + aax.key).value = aax.value;
      }
    }
    el("popup_label").value = aai;
    el("custom-bg-color").value = aal;
    el("custom-color").value = aam;
    el("btn-spin-label").value = aao;
    root.style.setProperty("--custom_bg_color", aal);
    root.style.setProperty("--custom_color", aam);
    if (aan) {
      setBackgroundImage(aan, "update");
    }
    fillTitleDesc(aab, aac);
    if (aau == 1) {
      el("is_advance").checked = true;
    } else {
      el("is_advance").checked = false;
    }
    fillEntries(aar, aau);
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
    const aay = getWithExpiry("isAlertExpired");
    if (!aay) {
      const aaz = document.querySelectorAll(".modal.show");
      if (aaz.length == 0) {
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
          var aba = new bootstrap.Modal(el("myModal"), {
            backdrop: "static",
            keyboard: false,
          });
          aba.show();
          setWithExpiry("isAlertExpired", 1, 30);
        }, 30000);
      }
    }
  }
  feather.replace();
});
