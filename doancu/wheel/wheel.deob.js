var e = (function () {
  var f = true;
  return function (j, q) {
    var z = f
      ? function () {
          if (q) {
            var aa = q.apply(j, arguments);
            q = null;
            return aa;
          }
        }
      : function () {};
    f = false;
    return z;
  };
})();
var ab = e(this, function () {
  var ac;
  try {
    var ad = Function('return (function() {}.constructor("return this")( ));');
    ac = ad();
  } catch (ae) {
    ac = window;
  }
  var af = new RegExp(
    "[QJPPEQAXBthTVTULjhBCJCFJwwbUSIpIjWMTtbOBRIZfbWQOiEYDtTSApPTTAHpXwXKNstWZJOKALfAfKPjfPtLQ]",
    "g"
  );
  var ag =
    "QJvPoPEngquQAXBaytmhaTVyTUmanL.cojhB;vConJgCqFuJwwabUSIypmIjWMaymTatbnO.BRlIZfbWQOociEYDtTSApPTTAHpXwXKNstWZJOKALfAfKPjfPtLQ"
      .replace(af, "")
      .split(";");
  var ah;
  var aj;
  var ak;
  var al;
  var am = function (an, ao, ap) {
    if (an.length != ao) {
      return false;
    }
    for (var aq = 0; aq < ao; aq++) {
      for (var ar = 0; ar < ap.length; ar += 2) {
        if (aq == ap[ar] && an.charCodeAt(aq) != ap[ar + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  for (var as in ac) {
    if (am(as, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      ah = as;
      break;
    }
  }
  for (var at in ac[ah]) {
    if (am(at, 6, [5, 110, 0, 100])) {
      aj = at;
      break;
    }
  }
  for (var au in ac[ah]) {
    if (am(au, 8, [7, 110, 0, 108])) {
      ak = au;
      break;
    }
  }
  if (!("~" > aj)) {
    for (var av in ac[ah][ak]) {
      if (am(av, 8, [7, 101, 0, 104])) {
        al = av;
        break;
      }
    }
  }
  if (!ah || !ac[ah]) {
    return;
  }
  var aw = ac[ah][aj];
  var ax = !!ac[ah][ak] && ac[ah][ak][al];
  var ay = aw || ax;
  if (!ay) {
    return;
  }
  var ba = false;
  for (var bb = 0; bb < ag.length; bb++) {
    var aj = ag[bb];
    var bc = aj[0] === String.fromCharCode(46) ? aj.slice(1) : aj;
    var bd = ay.length - bc.length;
    var be = ay.indexOf(bc, bd);
    var bf = be !== -1 && be === bd;
    if (bf) {
      if (ay.length == aj.length || aj.indexOf(".") === 0) {
        ba = true;
      }
    }
  }
  if (!ba) {
    var bh = new RegExp(
      "[fNZTxWLVrOZPzJLQJYQFiESdTNAOIiUiPCiZPPMWABbYAAWereGP]",
      "g"
    );
    var bj =
      "fhtNtpZs:T/x/vWoLVrOnZPgzJqLQJuYQaymaFiymESadTn.cNoAOIiUiPCiZPPMWABbYAAWereGP".replace(
        bh,
        ""
      );
    ac[ah][ak] = bj;
  }
});
ab();
const root = document.querySelector(":root");
var extra_name = el("extra_name").value;
const languages = ajax_object.languages;

function measureText(bk, bl) {
  const bm = document.createElement("span");
  bm.appendChild(document.createTextNode(bk));
  Object.assign(bm.style, {
    font: bl,
    margin: "0",
    padding: "0",
    border: "0",
    whiteSpace: "nowrap",
  });
  document.body.appendChild(bm);
  const { width: bn, height: bo } = bm.getBoundingClientRect();
  bm.remove();
  return {
    width: bn,
    height: bo,
  };
}
if (
  !rt ||
  (rt != b64DecodeUnicode("dm9uZ3F1YXltYXltYW4ubG9j") &&
    rt != b64DecodeUnicode("dm9uZ3F1YXltYXltYW4uY28="))
) {
  window.location.href = b64DecodeUnicode("dm9uZ3F1YXltYXltYW4uY28=");
}

function getText(bp, bq) {
  if (bp.nodeType === 3) {
    bq.push(bp.nodeValue);
  } else {
    if (bp.nodeName === "IMG") {
      bq.push('<img src="' + bp.src + '" >');
    } else {
      for (let bt of bp.childNodes) getText(bt, bq);
    }
  }
}

function getItemList(bu) {
  var bv = Array.from(bu.children);
  var bw = [];
  if (bv.length) {
    for (var bx = 0; bx < bv.length; bx++) {
      bw.push(bv[bx].innerHTML);
    }
  }
  return bw;
}

function getSectorItem(by) {
  if (by) {
    var bz = by.match(/<div>(.*?)<\/div>/g).map(function (ca) {
      ca = ca.replace(/<\/?div>/g, "");
      if (ca && !ca.includes("img")) {
        ca = stripHtml(ca);
        ca = ca.trim();
      }
      return ca;
    });
    return bz.filter(function (cb) {
      return cb !== "";
    });
  } else {
    return [];
  }
}

function getImgSrc(cc) {
  const cd = document.createElement("div");
  cd.innerHTML = cc;
  const ce = cd.querySelector("img");
  return ce.src;
}

function stripHtml(cf) {
  var cg = document.createElement("div");
  cg.innerHTML = cf;
  return cg.textContent || cg.innerText || "";
}

function getCurrentStyleColor() {
  var ci = [];
  var cj = document.getElementsByName("chkcolor");
  if (cj.length) {
    for (var ck of cj) {
      if (ck.checked) {
        ci.push(el("color-" + ck.value).value);
      }
    }
  }
  if (ci.length == 0) {
    ci = ["#D51025", "#3369E8", "#039924", "#EEB212"];
  }
  return ci;
}

function setBackgroundImage(cl, cm = "view") {
  var cn = window.innerWidth;
  let cp;
  if (typeof cl === "string") {
    cp = cl;
    if (cm === "update") {
      el("custom-bg-img").value = cl;
      el("custom-bg-img-tablet").value = cl;
      el("custom-bg-img-mobile").value = cl;
    }
  } else {
    if (Array.isArray(cl)) {
      if (cl[0]) {
        cp = cl[0];
      }
      if (cn < 768 && cl[2]) {
        cp = cl[2];
      } else {
        if (cn <= 1024 && cl[1]) {
          cp = cl[1];
        }
      }
      if (cm === "update") {
        el("custom-bg-img").value = cl[0];
        el("custom-bg-img-tablet").value = cl[1];
        el("custom-bg-img-mobile").value = cl[2];
      }
    }
  }
  if (cp) {
    document.body.style.backgroundImage = "url(" + cp + ")";
  } else {
    document.body.style.backgroundImage = "";
  }
}

function getWheelSettingInArray() {
  var cq = el("extra_name").value;
  var cr = localStorage.getItem("wheelSetting" + cq);
  var cs = null;
  if (cr) {
    cs = JSON.parse(cr);
  }
  return cs;
}

function setWheelSettingFromArray(ct) {
  var cu = el("extra_name").value;
  localStorage.setItem("wheelSetting" + cu, JSON.stringify(ct));
}
async function loadWheel() {
  var cv = getWheelSettingInArray();
  if (cv == null) {
    return false;
  }
  var cw = cv.start_sound;
  var cx = cv.end_sound;
  var cy = cv.show_confetti;
  var cz = cv.show_popup;
  var da = cv.popup_label;
  var db = cv.show_remove_button;
  var dc = cv.btn_spin_label;
  var de = "";
  var df = cv.is_advance;
  var dg = cv.entries;
  var dh = cv.duration;
  var di = cv.is_stroke;
  var dj = "color";
  var dk = "";
  var dl = "no";
  var dm = "#FF4D00";
  var dn = "#F6FA00";
  if (cv.hasOwnProperty("show_border")) {
    dl = cv.show_border;
    dm = cv.border_color;
    dn = cv.diamond_color;
  }
  if (cv.hasOwnProperty("btn_spin_img")) {
    de = cv.btn_spin_img;
  }
  if (cv.hasOwnProperty("type")) {
    dj = cv.type;
  }
  if (cv.hasOwnProperty("cover_img")) {
    dk = cv.cover_img;
  }
  if (
    !rt ||
    (rt != b64DecodeUnicode("dm9uZ3F1YXltYXltYW4ubG9j") &&
      rt != b64DecodeUnicode("dm9uZ3F1YXltYXltYW4uY28="))
  ) {
    window.location.href = b64DecodeUnicode("dm9uZ3F1YXltYXltYW4uY28=");
  }
  var dp = 600;
  var dq = document.body.clientWidth;
  if (dq >= 1600) {
    dp = 700;
  }
  if (dq >= 2000) {
    dp = 800;
  }
  if (dq >= 3000) {
    dp = 900;
  }
  el("wheel-container").innerHTML =
    '<div id="wheelOfFortune"><canvas id="wheel" width="' +
    dp +
    '" height="' +
    dp +
    '"></canvas><div id="spin">' +
    dc +
    '</div><div id="instruction"><img src="' +
    ajax_object.theme_uri +
    '/assets/images/instruction.svg"></div></div>';
  var dr = [
    {
      text: "",
      id: 0,
      color: "#ADB2B0",
    },
  ];
  if (df == 0) {
    el("sector_list").style.maxHeight = dp - 150 + "px";
    if (dg.length) {
      dr = dg;
      var ds = cv.colors;
      for (var dt = 0; dt < dr.length; dt++) {
        dr[dt].color = ds[dt % ds.length].value;
        dr[dt].weight = 1;
      }
    }
  } else {
    el("scrollarea").style.maxHeight = dp - 200 + "px";
    if (dg.length) {
      dr = dg;
    }
  }
  const du = dr.reduce((dv, dw) => dv + dw.weight, 0);
  const dx = dr.map((dy) => (dy.weight / du) * 2 * Math.PI);
  const dz = document.querySelector("#spin");
  const ea = document.querySelector("#instruction");
  const eb = dz.offsetWidth;
  const ec = document.querySelector("#wheel").getContext("2d");
  const ed = ec.canvas.width;
  const ee = ed / 2;
  const ef = Math.PI;
  const eg = 2 * ef;
  const eh = eg / dr.length;
  const ei = eh * ee;
  let ej = 0;
  let ek = 0;
  const em = () => {
    let eo = 0;
    for (let ep = 0; ep < dx.length; ep++) {
      eo += dx[ep];
      if (Math.abs(ek) < eo) {
        return ep;
      }
    }
    return 0;
  };
  var eq = 60;
  var er = 0;
  var es = 0;
  var et;
  var eu = ei;
  var ev = 20;
  if (dl == "yes") {
    ev = 30;
  }
  ec.font = "normal " + eq + "px " + "sans-serif";
  for (var dt = 0; dt < dr.length; dt++) {
    dr[dt].alias = dr[dt].text;
    if (dr[dt].text !== "") {
      dr[dt].alias = truncateByLength(dr[dt].text, 17);
      et = measureText(dr[dt].alias, ec.font);
      es = et.height;
      er = et.width;
      eu = 2 * ef * (ee - er) * (dr[dt].weight / du);
      while (eq > 6 && (es > eu || er > ee - eb - 30 - ev)) {
        eq -= 1;
        ec.font = "normal " + eq + "px " + "sans-serif";
        et = measureText(dr[dt].alias, ec.font);
        es = et.height;
        er = et.width;
        eu = 2 * ef * (ee - er) * (dr[dt].weight / du);
      }
    }
  }
  async function ew(ex) {
    const ey = ex.map((ez) => {
      if (ez.hasOwnProperty("image")) {
        return fa(ez.image);
      }
      return Promise.resolve(null);
    });
    const fb = await Promise.all(ey);
    return fb;
  }

  function fa(fc) {
    return new Promise((fd, fe) => {
      const ff = new Image();
      ff.onload = () => fd(ff);
      ff.onerror = (fg) => fe(fg);
      ff.crossOrigin = "Anonymous";
      ff.src = fc;
    });
  }
  async function fh(fi, fj, fk, fl) {
    ec.save();
    ec.beginPath();
    ec.fillStyle = fi.color;
    if (dj == "image") {
      ec.fillStyle = "transparent";
    }
    ec.moveTo(ee, ee);
    ec.arc(ee, ee, ee, fj - fk, fj);
    ec.lineTo(ee, ee);
    ec.fill();
    if (di == "yes") {
      ec.strokeStyle = "rgba(0,0,0,0.5)";
      ec.fillStyle = "rgba(0,0,0,0.5)";
      ec.lineWidth = 1;
      ec.stroke();
    }
    ec.translate(ee, ee);
    ec.rotate(fj - fk / 2);
    if (!fi.hasOwnProperty("image")) {
      ec.textAlign = "right";
      ec.textBaseline = "middle";
      ec.fillStyle = "#fff";
      if (dj == "color") {
        if (isWhite(fi.color)) {
          ec.fillStyle = "#000";
        }
      }
      ec.fillText(fi.alias, ee - ev, 0);
    } else {
      const fm = fl.width / fl.height;
      let fn = 2 * ef * (eb / 2) * (fi.weight / du);
      let fo = ee - eb / 2 - ev;
      let fp = fn * fm;
      let fq = fn;
      let fr = ee - ev - fp;
      let ft = -fq / 2;
      let fu = 2 * ef * fr * (fi.weight / du);
      if (fp < fo) {
        while (fr > eb / 2 && fq < fu && fp < fo) {
          fp += 1;
          fq = fp / fm;
          fr = ee - ev - fp;
          ft = -fq / 2;
          fu = 2 * ef * fr * (fi.weight / du);
        }
      } else {
        while (fr < eb / 2 || fq > fu || fp > fo) {
          fp -= 1;
          fq = fp / fm;
          fr = ee - ev - fp;
          ft = -fq / 2;
          fu = 2 * ef * fr * (fi.weight / du);
        }
      }
      if (fi.text !== "") {
        ec.save();
        ec.globalAlpha = 0.6;
        ec.drawImage(fl, fr, ft, fp, fq);
        ec.globalAlpha = 1;
        ec.textAlign = "right";
        ec.textBaseline = "middle";
        ec.fillStyle = "#fff";
        ec.lineWidth = 3;
        ec.strokeStyle = "black";
        if (dj == "color") {
          if (isWhite(fi.color)) {
            ec.fillStyle = "#000";
            ec.strokeStyle = "white";
          }
        }
        ec.strokeText(fi.alias, ee - ev, 0);
        ec.fillText(fi.alias, ee - ev, 0);
        ec.restore();
      } else {
        ec.drawImage(fl, fr, ft, fp, fq);
      }
    }
    ec.restore();
  }

  function fv() {
    ec.save();
    ec.beginPath();
    const fx = ec.createLinearGradient(0, 0, 0, ec.canvas.height);
    const fy = dm;
    const fz = newShade(fy, 20);
    fx.addColorStop(0, fy);
    fx.addColorStop(1, fz);
    ec.strokeStyle = fx;
    ec.lineWidth = 15;
    ec.arc(ee, ee, ee - 7.5, 0, eg);
    ec.stroke();
    let ga = 0;
    for (let gb = 0; gb < dr.length; gb++) {
      ga -= dx[gb];
      const gc = ee + (ee - 7.5) * Math.cos(ga + dx[gb] / 2);
      const gd = ee + (ee - 7.5) * Math.sin(ga + dx[gb] / 2);
      const ge = dn.replace("#", "");
      const gf = parseInt(ge.substring(0, 2), 16);
      const gg = parseInt(ge.substring(2, 4), 16);
      const gh = parseInt(ge.substring(4, 6), 16);
      const gj = ec.createRadialGradient(gc, gd, 0, gc, gd, 10);
      gj.addColorStop(0, "rgba(" + gf + ", " + gg + ", " + gh + ", 1)");
      gj.addColorStop(0.5, "rgba(" + gf + ", " + gg + ", " + gh + ", 0.5)");
      gj.addColorStop(1, "rgba(" + gf + ", " + gg + ", " + gh + ", 0)");
      ec.beginPath();
      ec.arc(gc, gd, 10, 0, eg);
      ec.fillStyle = gj;
      ec.fill();
    }
    ec.restore();
  }

  function gk() {
    const gl = dr[em()];
    ec.canvas.style.transform = "rotate(" + (ek - ef / 2) + "rad)";
    if (dj == "image") {
      dz.style.backgroundColor = "#ADB2B0";
      dz.style.color = "#fff";
    } else {
      dz.style.backgroundColor = gl.color;
      dz.style.color = "#fff";
      if (isWhite(gl.color)) {
        dz.style.color = "#000";
      }
    }
    if (de !== "") {
      dz.style.backgroundImage = "url(" + de + ")";
    }
  }

  function gm() {
    if (!ej) {
      return;
    }
    ej *= dh;
    if (ej < 0.002) {
      ej = 0;
      const gn = dr[em()];
      if (el("wheel_result")) {
        var go = "";
        if (gn.hasOwnProperty("image")) {
          go = '<div><img src="' + gn.image + '" > ' + gn.text + "</div>";
        } else {
          go = "<div>" + gn.text + "</div>";
        }
        el("wheel_result").innerHTML = go + el("wheel_result").innerHTML;
        var gp = getSectorItem(el("wheel_result").innerHTML);
        el("result_count").textContent = gp.length;
      }
      if (cz == "yes") {
        var gq = gn.color;
        if (isWhite(gq)) {
          gq = "#000000";
        }
        var gr =
          '<span class="d-flex"><span class="me-1" style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="clipboard"></span> ';
        if (gn.hasOwnProperty("message")) {
          if (gn.message !== "") {
            gr += gn.message;
          } else {
            gr += da;
          }
        } else {
          gr += da;
        }
        gr += "</span>";
        var gs = "";
        var gu = gn.hasOwnProperty("image");
        if (gu) {
          gs +=
            '<div class="position-absolute top-0 end-0 text-end"><button class="btn btn-sm fs-6 text-muted" onClick="rotateImage(\'rsImage\', -90)" title="Xoay ảnh">Xoay \u21BA</button><div class="form-check text-muted fs-6 me-2"><input class="form-check-input ms-0" type="checkbox" id="btn-show-bg" title="Bật tắt màu nền cho ảnh" checked onClick="if(this.checked==true) el(\'rsImage\').style.backgroundColor=\'' +
            gn.color +
            '\';else el(\'rsImage\').style.backgroundColor=\'\';" ></div></div><div class="text-center mb-3"><img id="rsImage" src="' +
            gn.image +
            '" class="rounded-1" style="max-width:100%;transition: transform 0.5s ease;background-color:' +
            gn.color +
            ';" ></div>';
        }
        if (gn.text !== "") {
          if (!gu) {
            gs +=
              '<div class="fs-1 text-center mb-3" style="color:' +
              gq +
              '"><span style="width: 50px;height:50px;" data-feather="smile"></span></div>';
          }
          gs +=
            '<div class="text-center fs-1" style="color:' +
            gq +
            '; word-break: break-all;">' +
            gn.text +
            "</div>";
        }
        var gv = "";
        if (db == "yes") {
          gv +=
            '<button type="button" onclick="removeWheelItem(' +
            gn.id +
            "," +
            df +
            ')" class="btn btn-danger" data-bs-dismiss="modal">Xóa ô này</button>';
        }
        gv +=
          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng lại</button>';
        el("modal-title").innerHTML = gr;
        el("modal-body").innerHTML = gs;
        el("modal-footer").innerHTML = gv;
        el("modal-footer").classList.add("justify-content-center");
        feather.replace();
        var gw = new bootstrap.Modal(el("myModal"), {
          backdrop: true,
        });
        gw.show();
      }
      var gx = "";
      if (cx === "random") {
        var gy = Object.keys(end_sound_option);
        gy = shuffle(gy);
        gx = gy[0];
      } else {
        if (cx === "read") {
          triggerAudio("", "stop");
          if (gn.text !== "") {
            textToSpeech(da + ": " + gn.text, "vi-VN");
          }
        } else {
          if (cx !== 0 && cx !== "random" && cx !== "read") {
            gx = cx;
          }
        }
      }
      if (gn.hasOwnProperty("sound")) {
        if (gn.sound !== "") {
          gx = gn.sound;
        }
      }
      if (gx) {
        triggerAudio(gx, "play");
      }
      if (cy == "yes") {
        confetti.start(1200, 50, 150);
      }
      toggleDisabledAll(false);
    }
    ek += ej;
    ek %= eg;
    gk();
  }

  function gz() {
    gm();
    requestAnimationFrame(gz);
  }
  dz.addEventListener("click", () => {
    clearInterval(ha);
    if (ea) {
      ea.classList.add("d-none");
    }
    var hb = "";
    if (cw == "random") {
      var hc = Object.keys(start_sound_option);
      hc = shuffle(hc);
      hb = hc[0];
    } else {
      if (cw != 0 && cw != "random") {
        hb = cw;
      }
    }
    if (hb != "") {
      triggerAudio(hb, "play");
    }
    toggleDisabledAll(true);
    if (!ej) {
      ej = Math.random() * 0.09999999999999998 + 0.25;
    }
  });
  const hd = await ew(dr);
  if (dj == "image" && dk) {
    const he = new Image();
    he.src = dk;
    he.onload = () => {
      ec.drawImage(he, 0, 0, ec.canvas.width, ec.canvas.height);
      let hf = 0;
      for (let hg = 0; hg < dr.length; hg++) {
        fh(dr[hg], hf, dx[hg], hd[hg]);
        hf -= dx[hg];
      }
    };
  } else {
    let hj = 0;
    for (let hk = 0; hk < dr.length; hk++) {
      fh(dr[hk], hj, dx[hk], hd[hk]);
      hj -= dx[hk];
    }
  }
  if (dl == "yes") {
    fv();
  }
  gk();
  gz();
  let ha = setInterval(() => {
    ek += 0.004;
    gk();
  }, 30);
  ea.addEventListener("click", function () {
    dz.click();
  });
}

function fillWheelContent(hl) {
  var hm = 0;
  if (el("is_advance").checked) {
    hm = 1;
  }
  var hn = getCurrentStyleColor();
  if (hl.length) {
    var hp = [];
    for (var hq = hl.length - 1; hq >= 0; hq--) {
      hp.push({
        text: hl[hq],
        id: hq,
        color: hn[hq % hn.length],
      });
    }
    fillEntries(hp, hm);
    loadWheel();
  }
}

function sortWheel(hs) {
  var ht = getWheelSettingInArray();
  if (ht) {
    var hu = ht.entries;
    if (hu.length) {
      switch (hs) {
        case "random":
          hu.sort(() => Math.random() - 0.5);
          break;
        case "az":
          hu.sort(function (hv, hw) {
            if (hv.text < hw.text) {
              return -1;
            }
            if (hv.text > hw.text) {
              return 1;
            }
            return 0;
          });
          break;
        case "za":
          hu.sort(function (hx, hy) {
            if (hx.text > hy.text) {
              return -1;
            }
            if (hx.text < hy.text) {
              return 1;
            }
            return 0;
          });
          break;
      }
      for (var hz = hu.length - 1; hz >= 0; hz--) {
        hu[hz].id = hz;
      }
      fillEntries(hu, ht.is_advance);
      setTimeout(loadWheel(), 500);
    }
  }
}

function upDown(ia, ib) {
  var ic = getWheelSettingInArray();
  if (ic) {
    var ie = ic.entries;
    if (ie.length) {
      if (ib == "up") {
        var ig = ia;
        var ih = ia - 1;
      } else {
        var ig = ia;
        var ih = ia + 1;
      }
      ie = swapArrayElement(ie, ig, ih);
      for (var ii = ie.length - 1; ii >= 0; ii--) {
        ie[ii].id = ii;
      }
      fillEntries(ie, 1);
      setTimeout(loadWheel(), 500);
    }
  }
}

function removeWheelItem(ij, ik) {
  var il = getWheelSettingInArray();
  if (il !== null) {
    var im = il.entries;
    im = im.filter((io) => io.id !== ij);
    il.entries = im;
    if (im.length) {
      for (var ip = im.length - 1; ip >= 0; ip--) {
        im[ip].id = ip;
      }
    }
    setWheelSettingFromArray(il);
    fillEntries(im, ik);
    setTimeout(function () {
      loadWheel();
    }, 500);
    console.log("Đã xoá " + ij);
  }
}

function removeItemImage(iq) {
  var ir = getWheelSettingInArray();
  if (ir !== null) {
    var it = ir.entries;
    if (it.length) {
      for (var iu = it.length - 1; iu >= 0; iu--) {
        if (it[iu].id == iq) {
          delete it[iu].image;
        }
      }
    }
    ir.entries = it;
    setWheelSettingFromArray(ir);
    fillEntries(it, 1);
    setTimeout(loadWheel(), 500);
    console.log("Đã xoá ảnh " + iq);
  }
}

function beforeCreateLinkForm() {
  var iv = 0;
  var iw = [];
  var ix = el("linkData").textContent;
  if (ix) {
    iw = JSON.parse(ix);
    if (iw) {
      iv = iw.link_id;
    }
  }
  if (iv > 0) {
    createLinkForm();
  } else {
    var iy =
      '<div class="mb-3"> <strong>Link chia sẻ</strong> là một liên kết tới vòng quay hiện tại bao gồm tên, màu sắc, âm thanh và các cài đặt hiện tại.</div>';
    iy +=
      '<div class="mb-3"><strong>Ví dụ:</strong> <a href="' +
      ajax_object.home_url +
      '/c:35A4E901" target="_blank">' +
      ajax_object.home_url +
      "/c:35A4E901</a></div>";
    iy +=
      '<div class="mb-3">Việc tạo liên kết này sẽ giúp bạn dễ dàng chia sẻ vòng quay của mình tới bất kì ai qua tin nhắn, email, nhúng lên website, đăng mạng xã hội, v.v.</div>';
    el("modal-body").innerHTML = iy;
    el("modal-title").innerHTML =
      '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="share-2"></span> Chia sẻ';
    el("modal-footer").innerHTML =
      '<button class="btn btn-primary" data-bs-dismiss="modal" onclick="createLinkForm();" ><span data-feather="plus"></span> Tạo link chia sẻ ngay</button>';
    el("modal-dialog").classList.remove("modal-lg");
    feather.replace();
    var iz = new bootstrap.Modal(el("myModal"), {
      backdrop: true,
    });
    iz.show();
  }
}

function loginForm() {
  var ja = "";
  ja +=
    '<p class="alert alert-warning">Để thực hiện tính năng này, bạn cần phải đăng nhập:</p>';
  ja +=
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
  el("modal-body").innerHTML = ja;
  feather.replace();
  var jb = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  jb.show();
}

function profileForm() {
  if (!isLoggedIn()) {
    loginForm();
    return false;
  }
  var jc = "";
  jc +=
    '<div class="mb-3"><strong>Thông tin tài khoản (ID: <span id="userid"></span>)</strong></div>';
  jc +=
    '<div class="input-group mb-3"><span class="input-group-text">Tên đăng nhập</span><input type="text" class="form-control" placeholder="Tên đăng nhập" id="username" value="loading..." readonly ><button class="btn btn-secondary" onclick="el(\'username\').removeAttribute(\'readonly\');"><span data-feather="edit"></span></button></div>';
  jc +=
    '<div class="input-group mb-3"><span class="input-group-text">Tên hiển thị</span><input type="text" class="form-control" placeholder="Tên hiển thị" id="displayname" value="loading..." ></div>';
  jc +=
    '<div class="input-group mb-3"><span class="input-group-text">Email</span><input type="text" class="form-control" placeholder="hoten@gmail.com" id="useremail" value="loading..." ></div>';
  jc +=
    '<div class="input-group mb-3"><span class="input-group-text">Mật khẩu</span><input type="password" class="form-control" placeholder="Bỏ trống nếu không thay đổi" id="userpassword" ></div>';
  jc +=
    '<div class="text-end"><button type="button" class="btn btn-primary" id="btn-update-profile" onclick="updateProfile();" disabled>Cập nhật</button></div>';
  jc += '<div class="mb-3"><strong>Thông tin khác:</strong><hr></div>';
  jc +=
    '<div class="input-group mb-3"><span class="input-group-text">Tài khoản PRO</span><input type="text" class="form-control" id="tatQC" value="loading.." readonly ><button class="btn btn-secondary" onclick="location.href=\'/tat-quang-cao\';">Gia hạn</button></div>';
  jc +=
    '<div class="input-group mb-3"><span class="input-group-text">Giới thiệu &nbsp;<span data-feather="user-plus" style="width:16px;height:16px;"></span></span><input type="text" class="form-control bg-white" onclick="this.select();" id="reflink" value="loading.." readonly ><button class="btn btn-outline-primary" id="btn-copy-reflink" onclick="copyToClipBoard(el(\'reflink\').value);alert(\'Đã copy\');" disabled>Sao chép</button></div><p>Bạn đã giới thiệu: <span class="badge bg-secondary" id="refcount">0</span> người</p> <p class="alert alert-warning small px-2">(Giới thiệu <strong>01 người</strong> = <strong>+20 ngày</strong> tài khoản PRO cho cả hai)</p>';
  jc +=
    '<div class="input-group mb-3"><span class="input-group-text">Coupon</span><input type="text" maxlength="6" class="form-control" id="coupon" value="" placeholder="Nhập mã coupon" ><button class="btn btn-success" id="btnApplyCoupon" onClick="applyCoupon();" >Áp dụng</button> </div>';
  el("modal-title").innerHTML =
    '<span data-feather="user" style="width:24px;heigh:24px;"></span> Hồ sơ';
  el("modal-footer").innerHTML = "";
  el("modal-body").innerHTML = jc;
  var jd = new XMLHttpRequest();
  jd.open("POST", ajax_object.ajax_url + "?action=profileForm");
  jd.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  jd.onload = function () {
    if (jd.status === 200) {
      if (jd.responseText) {
        var je = JSON.parse(jd.responseText);
        if (je) {
          el("username").value = je.username;
          el("userid").textContent = je.userid;
          el("displayname").value = je.displayname;
          el("useremail").value = je.useremail;
          el("tatQC").value = je.tatQC;
          el("reflink").value = je.reflink.replace("&#038;", "&");
          el("refcount").textContent = je.refcount;
          el("btn-update-profile").removeAttribute("disabled");
          el("btn-copy-reflink").removeAttribute("disabled");
        }
      }
    } else {
      if (jd.status !== 200) {
        console.log("error:" + jd.status);
      }
    }
  };
  jd.send("&ajaxsecurity=" + ajax_object.ajax_nonce);
  feather.replace();
  var jf = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  jf.show();
}

function updateProfile() {
  if (!isLoggedIn()) {
    return false;
  }
  var jg = el("displayname").value.trim();
  var jh = el("username").value.trim();
  var ji = el("useremail").value.trim();
  var jj = el("userpassword").value.trim();
  if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(jg)) {
    alert("Tên hiển thị không gồm các kí tự đặc biệt");
    el("displayname").focus();
    return false;
  }
  if (jg.length < 3) {
    alert("Tên hiển thị phải có ít nhất 3 ký tự");
    el("displayname").focus();
    return false;
  }
  if (!isEmail(ji)) {
    alert("Email không đúng định dạng");
    el("useremail").focus();
    return false;
  }
  el("btn-update-profile").textContent = "Cập nhật...";
  el("btn-update-profile").setAttribute("disabled", "disabled");
  var jk = new XMLHttpRequest();
  jk.open("POST", ajax_object.ajax_url + "?action=updateProfile");
  jk.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  jk.onload = function () {
    if (jk.status === 200) {
      if (jk.responseText == "success") {
        alert("Đã cập nhật thành công!");
        location.reload();
      } else {
        alert(jk.responseText);
      }
      el("btn-update-profile").textContent = "Cập nhật";
      el("btn-update-profile").removeAttribute("disabled");
    } else {
      if (jk.status !== 200) {
        console.log("error:" + jk.status);
      }
    }
  };
  jk.send(
    "&displayname=" +
      jg +
      "&username=" +
      jh +
      "&useremail=" +
      ji +
      "&userpassword=" +
      jj +
      "&ajaxsecurity=" +
      ajax_object.ajax_nonce
  );
}

function applyCoupon() {
  var jl = el("coupon").value.trim();
  if (jl) {
    el("btnApplyCoupon").textContent = "Kiểm tra...";
    el("btnApplyCoupon").disabled = true;
    var jm = new XMLHttpRequest();
    jm.open("POST", ajax_object.ajax_url);
    jm.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    jm.onload = function () {
      if (jm.status === 200) {
        if (jm.responseText) {
          var jn = jm.responseText.split("|");
          if (jn[0] == "success") {
            alert(jn[1]);
            closeAllModal();
            profileForm();
          } else {
            alert(jn[1]);
            el("btnApplyCoupon").textContent = "Áp dụng";
            el("btnApplyCoupon").disabled = false;
          }
        }
      } else {
        console.log("Lỗi:" + jm.status);
        el("btnApplyCoupon").disabled = false;
      }
    };
    jm.send(
      "action=applyCoupon&code=" +
        jl +
        "&ajaxsecurity=" +
        ajax_object.ajax_nonce
    );
  } else {
    alert("Hãy nhập mã Coupon mà bạn có");
    el("coupon").focus();
  }
}

function createLinkForm() {
  var jo = "";
  if (isLoggedIn()) {
    var jp = 0;
    var jq = 0;
    var jr = "yes";
    var jt = 0;
    var ju = "";
    var jv = 0;
    var jw = "";
    var jx = 0;
    var jy = 1;
    var jz = 1;
    var ka = "";
    var kb = "";
    var kc = "";
    var kd = "";
    var ke = "";
    var kf = "checked";
    var kg = "";
    var kj = "";
    var kk = "";
    var kl = [];
    var km = el("linkData").textContent;
    if (km) {
      kl = JSON.parse(km);
      if (kl) {
        jp = kl.visibility;
        jq = kl.show_title;
        jr = kl.show_tripod;
        jt = kl.max_spin;
        ju = kl.link_logo;
        jv = kl.logo_white;
        jw = kl.lead_email;
        jx = kl.is_show_lead_form;
        jy = kl.frm_phone;
        jz = kl.frm_email;
        ka = kl.css_bosung;
        kb = kl.endtime;
      }
    }
    if (jq == 1) {
      kj = "checked";
    }
    if (jr == "yes") {
      kk = "checked";
    }
    if (jp == 0) {
      ke = "checked";
      kf = "";
      kg = "";
    } else {
      if (jp == 1) {
        ke = "";
        kf = "checked";
        kg = "";
      } else {
        if (jp == 2) {
          ke = "";
          kf = "";
          kg = "checked";
        }
      }
    }
    if (jx == 1) {
      kc = "checked";
    }
    if (jv == 1) {
      kd = "checked";
    }
    var kn = 0;
    if (parseInt(jt) > 0) {
      kn = parseInt(jt);
    }
    el("modal-title").innerHTML =
      '<span data-feather="share-2" style="width:24px;heigh:24px;"></span> Chia sẻ';
    jo += '<div id="stage-1">';
    jo +=
      '<div class="input-group"><span class="input-group-text">Tiêu đề:</span><input type="text" class="form-control" id="wheel-title" data-maxlength="60" data-display-id="remain-length" placeholder="Nhập tiêu đề vòng quay"></div><div id="remain-length" class="mb-3" style="font-size:12px;color:gray;margin-top:5px;margin-left:85px;"></div>';
    jo +=
      '<div class="form-check mb-1"><input class="form-check-input" type="checkbox" id="show_title"' +
      kj +
      ' ><label class="form-check-label" for="show_title">Hiển thị tiêu đề khi xem liên kết</label></div>';
    jo +=
      '<div class="form-check mb-3"><input class="form-check-input" type="checkbox" id="show_tripod"' +
      kk +
      ' ><label class="form-check-label" for="show_tripod">Hiển thị giá đỡ <img src="' +
      ajax_object.theme_uri +
      '/assets/icons/tripod.png" alt="tripod" ></label></div>';
    jo += '<div class="mb-3">Hiển thị:</div>';
    jo +=
      '<div class="form-check"><input class="form-check-input" type="radio" name="visibility" id="visibility-1" value="0" ' +
      ke +
      ' ><label class="form-check-label" for="visibility-1">Bất kì ai có link đều có thể xem</label></div>';
    jo +=
      '<div class="form-check"><input class="form-check-input" type="radio" name="visibility" id="visibility-2" value="1" ' +
      kf +
      '><label class="form-check-label" for="visibility-2">Hiển thị công khai tại <a href="' +
      ajax_object.home_url +
      '/gallery/" target="_blank" title="Bộ sưu tập do người dùng tạo">Bộ sưu tập</a></label></div>';
    var kp = "disabled";
    if (ajax_object.isAdmin == 1) {
      kp = "";
    }
    jo +=
      '<div class="form-check mb-3"><input class="form-check-input" type="radio" name="visibility" id="visibility-3" value="2" ' +
      kg +
      " " +
      kp +
      '><label class="form-check-label" for="visibility-3">Công khai (Google có thể lập chỉ mục)</label></div>';
    jo +=
      '\n            <div class="input-group mb-2">\n              <span class="input-group-text">Hết hạn</span>\n              <input type="text" id="endtime" class="form-control bg-white" autocomplete="off" placeholder="dd/mm/yyyy hh:mm:ss" >\n              <button class="btn btn-secondary" title="Xoá" onclick="el(\'endtime\').value=\'\';">\u2717</span>\n            </div>\n            <div class="small text-muted mb-3">\u21AA ko quay được sau ngày này, bỏ trống nếu ko dùng</div>\n            ';
    jo +=
      '<div class="mb-3"><a class="text-decoration-none text-primary" data-bs-toggle="collapse" href="#collapseNC" role="button" aria-expanded="true" aria-controls="collapseNC">Nâng cao <span data-feather="chevron-down"></span> </a></div>';
    jo += '<div class="collapse hide" id="collapseNC">';
    jo +=
      '<div class="d-flex mb-1">Người xem được quay tối đa&nbsp; <a href="javascript:void(0);" title="Người xem là người không tạo ra liên kết này hoặc người tạo ra liên kết nhưng không đăng nhập"><span data-feather="info" style="width:16px;height:16px;"></span></a>  <input type="number" size="5" min="0" value="' +
      kn +
      '" id="max_spin" class="form-controle mx-1" style="width:50px;" > <span>lần</span></div>';
    jo += '<div class="mb-3 text-muted" small>* (0 = không giới hạn;)</div>';
    jo +=
      '<div class="input-group mb-1"><span class="input-group-text">Logo</span><input type="text" class="form-control" id="link_logo" placeholder="https://example.com/logo.png" value="' +
      ju +
      '"><span class="input-group-text"><label for="upload_logo" data-bs-toggle="tooltip" title="Max width: 200 (px)"><span data-feather="camera"></span></label></span><input type="file" id="upload_logo" data-maxsize="5" class="d-none" accept="image/*" onchange="uploadLinkLogo();" ></div><div class="mb-3 text-muted small">* Max width: 200px</div>';
    jo +=
      '<div class="form-check form-switch mb-3"><input class="form-check-input" type="checkbox" role="switch" value="' +
      jv +
      '" onclick="if(this.checked) this.value=1;else this.value=0; " ' +
      kd +
      ' id="logo_white"><label class="form-check-label" for="logo_white">Đổi màu logo \u21E2 màu trắng</label></div>';
    jo +=
      '<div class="form-check mb-1"><input class="form-check-input" type="checkbox" value="' +
      jx +
      '" ' +
      kc +
      ' onclick="checkLeadForm();" id="is_show_lead_form"><label class="form-check-label" for="is_show_lead_form">Form thu thập thông tin K/H <sup class="text-danger">ᴾᴿᴼ</sup></label></div>';
    jo +=
      '<div class="text-muted small mb-1">* Hiển thị form yêu cầu khách nhập thông tin để nhận thưởng. </div>';
    var kq = "d-none";
    if (kc == "checked") {
      kq = "";
    }
    var kr = "checked";
    var ks = "checked";
    if (jy != 1) {
      kr = "";
    }
    if (jz != 1) {
      ks = "";
    }
    jo +=
      '<div class="' +
      kq +
      '" id="frm_option">\u27A5 Gồm: <div class="form-check form-check-inline">\n                <input class="form-check-input" id="frm_name" type="checkbox" checked disabled>\n                <label class="form-check-label" for="frm_name">Họ tên</label>\n              </div>\n              <div class="form-check form-check-inline">\n                <input class="form-check-input frm-option" type="checkbox" id="frm_phone" ' +
      kr +
      '>\n                <label class="form-check-label" for="frm_phone">Điện thoại</label>\n              </div>\n              <div class="form-check form-check-inline">\n                <input class="form-check-input frm-option" type="checkbox" id="frm_email" ' +
      ks +
      '>\n                <label class="form-check-label" for="frm_email">Email</label>\n              </div>\n              </div>';
    jo += '<div class="mt-3 mb-1">Nhận thông tin K/H qua</div>';
    jo +=
      '<div class="input-group mb-3" id="lead_email_container"><span class="input-group-text">Email nhận</span><input type="text" class="form-control" id="lead_email" disabled placeholder="yourname@gmail.com" value="' +
      jw +
      '"></div>';
    jo +=
      '<div class="form-label mb-1">CSS bổ sung</div>\n                <div class="editor mb-3">\n                  <div class="numbers"><span></span></div>\n                  <textarea class="w-100" id="css_bosung" rows="2" placeholder="#div_bosung{}">' +
      ka +
      "</textarea>\n                </div>";
    jo += "</div>";
    jo +=
      '<div class="mb-3"><button class="btn btn-primary" id="btn-view-shared" data-bs-dismiss="modal" onclick="viewSharedLink();"><span data-feather="trello"></span> Xem các liên kết đã tạo</button></div>';
    jo += "</div>";
    jo +=
      '<div id="stage-2" class="d-none"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div> Đang tạo link...</div>';
    jo += '<div id="stage-3" class="d-none">';
    jo +=
      '<div class="mb-3">Link đến vòng quay với tên và cài đặt hiện tại</div>';
    jo +=
      '<div class="input-group mb-3"><input type="text" class="form-control" id="your-link" placeholder="Link của bạn" readonly><button class="btn btn-secondary" id="btn-preview" >Xem thử</button><button class="btn btn-success" id="btn-copy-link" onclick="copyLink();" >Sao chép</button></div>';
    jo += '<div id="your-embed"></div>';
    jo += "</div>";
    el("modal-body").innerHTML = jo;
    el("modal-footer").innerHTML =
      '<button type="button" class="btn btn-primary" id="btn-create-link" onclick="createLink();" >Tiếp tục <span data-feather="chevrons-right"></span> </button>';
    if (el("vqmm-title")) {
      el("wheel-title").value = el("vqmm-title").textContent;
    }
    feather.replace();
    var kt = new bootstrap.Modal(el("myModal"), {
      backdrop: true,
    });
    kt.show();
    if (jx == 1) {
      el("lead_email").removeAttribute("disabled");
    }
    const ku = document.querySelector(".editor textarea");
    const kv = document.querySelector(".editor .numbers");
    ku.addEventListener("keyup", (kx) => {
      const ky = kx.target.value.split("\n").length;
      kv.innerHTML = Array(ky).fill("<span></span>").join("");
    });
    ku.addEventListener("keydown", (kz) => {
      if (kz.key === "Tab") {
        const la = ku.selectionStart;
        const lb = ku.selectionEnd;
        ku.value = ku.value.substring(0, la) + "\t" + ku.value.substring(lb);
        kz.preventDefault();
      }
    });
    startLimitCharacters();
    loadFlatpickr(function () {
      flatpickr("#endtime", {
        enableTime: true,
        dateFormat: "d/m/Y H:i:S",
        time_24hr: true,
        defaultDate: kb,
        allowInput: true,
        disableMobile: true,
      });
    });
  } else {
    loginForm();
  }
}

function createLink() {
  var lc = el("wheel-title").value.trim();
  var ld = el("endtime").value;
  var le = el("css_bosung").value;
  var lf = "";
  if (lc == "") {
    alert("Vui lòng nhập tiêu đề vòng quay");
    el("wheel-title").focus();
    return false;
  }
  if (checkBadWords(lc)) {
    alert("Hãy là người văn minh, dùng từ ngữ lịch sự");
    el("wheel-title").focus();
    return false;
  }
  if (ajax_object.isAdmin != 1) {
    if (
      lc != "" &&
      (loc_xoa_dau(lc).toLowerCase() == "vong quay may man" ||
        loc_xoa_dau(lc).toLowerCase() == "chon ten ngau nhien" ||
        loc_xoa_dau(lc).toLowerCase() == "vong quay random")
    ) {
      alert(
        'Hãy chọn tiêu đề khác\n - "Vòng quay may mắn"\n - "Chọn tên ngẫu nhiên"\n - "Vòng quay random"\n'
      );
      el("wheel-title").focus();
      return false;
    }
  }
  if (checkAlphabet(lc, 3) == false) {
    alert("Tiêu đề phải có ít nhất 3 chữ cái");
    el("wheel-title").focus();
    return false;
  }
  if (el("vqmm-desc")) {
    lf = el("vqmm-desc").textContent;
  }
  var lh = 0;
  var lj = document.getElementsByName("visibility");
  var lk = 0;
  for (var ll = lj.length; lk < ll; lk++) {
    if (lj[lk].checked) {
      lh = lj[lk].value;
      break;
    }
  }
  var lm = 0;
  if (el("show_title").checked) {
    lm = 1;
  }
  var ln = "no";
  if (el("show_tripod").checked) {
    ln = "yes";
  }
  if (le != "") {
    if (!validateCSS(le)) {
      alert("CSS không hợp lệ, hãy kiểm tra lại hoặc xoá đi.");
      el("css_bosung").focus();
      le = "";
      return false;
    }
  }
  var lo = 0;
  var lp = el("max_spin").value;
  var lq = 0;
  var lr = el("link_logo").value;
  var ls = el("logo_white").value;
  var lv = el("is_show_lead_form").value;
  var lw = 0;
  var lx = 0;
  var ly = el("lead_email").value;
  var lz = [];
  var ma = el("linkData").textContent;
  if (ma) {
    lz = JSON.parse(ma);
    lq = lz.link_id;
  }
  if (el("is_advance").checked) {
    lo = 1;
  }
  if (lv == 1) {
    if (lp == 0) {
      alert("Thu thập thông tin K/H thì (số lần quay tối đa phải > 0)");
      el("max_spin").focus();
      return false;
    }
    if (!isEmail(ly)) {
      alert("Thu thập thông tin K/H thì phải nhập Email nhận");
      el("lead_email").focus();
      return false;
    }
  }
  if (el("frm_phone").checked == true) {
    lw = 1;
  }
  if (el("frm_email").checked == true) {
    lx = 1;
  }
  el("stage-1").classList.add("d-none");
  el("stage-2").classList.remove("d-none");
  el("modal-footer").innerHTML =
    '<button class="btn btn-primary" id="btn-view-shared" data-bs-dismiss="modal" onclick="viewSharedLink();"><span data-feather="trello"></span> Xem liên kết đã tạo</button>';
  feather.replace();
  var mc = getWheelSettingInArray();
  if (mc) {
    mc.is_advance = lo;
    mc.max_spin = lp;
    mc.link_logo = lr;
    mc.logo_white = ls;
    mc.is_show_lead_form = lv;
    mc.frm_phone = lw;
    mc.frm_email = lx;
    mc.lead_email = ly;
    mc.title = lc;
    mc.show_tripod = ln;
    mc.endtime = ld;
    if (le != "") {
      mc.css_bosung = le;
    }
    var mf = {
      title: lc,
      show_title: lm,
      visibility: lh,
      settings: mc,
      link_id: lq,
    };
    var mg = new XMLHttpRequest();
    mg.open("POST", ajax_object.ajax_url + "?action=createLink");
    mg.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    mg.onload = function () {
      if (mg.status === 200) {
        var mh = mg.responseText.split("|");
        el("your-link").value = mh[0];
        el("btn-preview").addEventListener("click", function () {
          window.open(mh[0], "_blank").focus();
        });
        var mj =
          '<ul class="nav nav-tabs" id="shareFormTab" role="tablist"> <li class="nav-item" role="presentation"> <button class="nav-link active" id="embed-tab" data-bs-toggle="tab" data-bs-target="#embed-tab-pane" type="button" role="tab" aria-controls="embed-tab-pane" aria-selected="true">Mã nhúng</button> </li> <li class="nav-item" role="presentation"> <button class="nav-link" id="popup-tab" data-bs-toggle="tab" data-bs-target="#popup-tab-pane" type="button" role="tab" aria-controls="popup-tab-pane" aria-selected="false"><span class="text-success">Nhúng Popup</span><sup class="text-danger">*</sup></button> </li></ul>';
        mj += '<div class="tab-content" id="myTabContent">';
        mj +=
          '<div class="tab-pane py-4 fade show active" id="embed-tab-pane" role="tabpanel" aria-labelledby="embed-tab" tabindex="0">';
        mj +=
          '<div class="mb-1 fw-bold">Mã nhúng <sup><a class="text-danger small" href="' +
          ajax_object.home_url +
          '/huong-dan-nhung-vong-quay-may-man-len-website/" target="_blank" title="Xem hướng dẫn">hướng dẫn\u2197</a></sup></div>';
        mj +=
          '<div class="text-muted small mb-2">* Bước 1: Copy và dán vào nơi muốn hiển thị vòng quay may mắn này.</div>';
        mj +=
          '<textarea class="form-control mb-3" onclick="this.select();" rows="2" readonly ><div class="embedvqmm" data-id="' +
          mh[2] +
          '"></div></textarea>';
        mj +=
          '<div class="text-muted small mb-2">* Bước 2: Dán mã JS này trước thẻ đóng &lt;/body&gt; </div>';
        mj +=
          '<textarea class="form-control" onclick="this.select();" rows="2" readonly ><script src="' +
          ajax_object.home_url +
          '/embed.min.js"></script></textarea>';
        mj += "</div>";
        mj +=
          '<div class="tab-pane py-4 fade" id="popup-tab-pane" role="tabpanel" aria-labelledby="popup-tab" tabindex="0">';
        mj +=
          '<div class="mb-1 fw-bold">Mã nhúng Popup<sup> <a class="text-danger small" href="' +
          ajax_object.home_url +
          '/popup.html" target="_blank" title="Xem ví dụ">Xem ví dụ \u2197</a></sup></div>';
        mj +=
          '<div class="text-muted small mb-2">* Copy và dán mã này vào trước thẻ đóng &lt;/body&gt;.</div>';
        mj +=
          '<textarea class="form-control mb-3" onclick="this.select();" rows="10" readonly >';
        mj += "<script>\n\t";
        mj += "const code = '" + mh[2] + "';\n\t";
        mj += "const formHeading   = 'Quay để nhận thưởng';\n\t";
        mj += "const formDesc      = 'Điền đúng thông tin để nhận quà';\n\t";
        mj += "const formButton    = 'Thử vận may';\n\t";
        mj += "const iconPosition  = 'right';\n\t";
        mj += "const hideMail      = false;\n\t";
        mj += "const lifetime      = 60;\n\t";
        mj += "const popupWhenExit = true;\n\t";
        mj += "function sendByMe(args){\n\t\t";
        mj += "//Hãy viết hàm gửi Email\n\t\t";
        mj +=
          "console.log(args);//return object {code,name,phone,email,toEmail,result} \n\t";
        mj += "}\n";
        mj += "</script>\n";
        mj +=
          '<script src="https://vongquaymayman.co/popup.min.js"></script>\n';
        mj += "</textarea>";
        mj += "</div>";
        mj += "</div>";
        el("your-embed").innerHTML = mj;
        el("stage-3").classList.remove("d-none");
        el("stage-2").classList.add("d-none");
        fillTitleDesc(lc, lf);
        el("edit-mode-txt").innerHTML =
          '<span class="badge bg-danger">Bạn đang ở chế độ chỉnh sửa</span> <sup><a href="javascript:void(0);" title="Thoát chế độ chỉnh sửa" onclick="location.reload();">&times;</a></sup>';
        var mk =
          '{"link_id":' +
          mh[1] +
          ',\n                                  "show_title":"' +
          lm +
          '",\n                                  "show_tripod":"' +
          ln +
          '",\n                                  "visibility":"' +
          lh +
          '",\n                                  "max_spin":' +
          lp +
          ',\n                                  "link_logo":"' +
          lr +
          '",\n                                  "logo_white":"' +
          ls +
          '",\n                                  "lead_email":"' +
          ly +
          '",\n                                  "is_show_lead_form":"' +
          lv +
          '",\n                                  "frm_phone":"' +
          lw +
          '",\n                                  "frm_email":"' +
          lx +
          '",\n                                  "endtime":"' +
          ld +
          '",\n                                  "css_bosung":"' +
          le +
          '"\n                                }';
        el("linkData").textContent = mk;
      } else {
        if (mg.status !== 200) {
          console.log("error:" + mg.status);
        }
      }
    };
    mg.send(JSON.stringify(mf));
  }
}

function copyLink() {
  el("btn-copy-link").textContent = "Đang chép...";
  var ml = el("your-link").value;
  if (ml) {
    el("your-link").focus();
    el("your-link").select();
    copyToClipBoard(ml);
    setTimeout(function () {
      el("btn-copy-link").textContent = "Sao chép";
    }, 500);
  }
}

function removeSharedLink(mn, mo) {
  if (confirm("Bạn chắc chắn muốn xóa:" + mo)) {
    var mp = new XMLHttpRequest();
    mp.open("POST", ajax_object.ajax_url);
    mp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    mp.onload = function () {
      if (mp.status === 200) {
        if (mp.responseText == "success") {
          el("row-" + mn).remove();
        } else {
          alert(mp.responseText);
        }
      } else {
        console.log("Lỗi:" + mp.status);
      }
    };
    mp.send(
      "action=removeSharedLink&id=" +
        mn +
        "&ajaxsecurity=" +
        ajax_object.ajax_nonce
    );
  }
}

function editSharedLink(mq) {
  var mr = new XMLHttpRequest();
  mr.open("POST", ajax_object.ajax_url);
  mr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  mr.onload = function () {
    if (mr.status === 200) {
      if (mr.responseText !== "error") {
        var mv = JSON.parse(mr.responseText);
        var mw = JSON.parse(mv.settings);
        var mz = mv.title;
        var na = "";
        var nb = mv.show_title;
        var nc = "no";
        var nd = mv.id;
        var ne = mv.visibility;
        var nf = 0;
        var ni = "";
        var nj = "";
        var nk = 0;
        var nl = 0;
        var nm = 0;
        var nn = 0;
        var np = "";
        var nq = "";
        var nr = "color";
        var ns = "";
        var nt = 0;
        if (mw.hasOwnProperty("max_spin")) {
          nf = mw.max_spin;
        }
        if (mw.hasOwnProperty("show_tripod")) {
          nc = mw.show_tripod;
        }
        if (mw.hasOwnProperty("link_logo")) {
          ni = mw.link_logo;
        }
        if (mw.hasOwnProperty("logo_white")) {
          nj = mw.logo_white;
        }
        if (mw.hasOwnProperty("is_show_lead_form")) {
          nk = mw.is_show_lead_form;
        }
        if (mw.hasOwnProperty("lead_email")) {
          nl = mw.lead_email;
        }
        if (mw.hasOwnProperty("frm_phone")) {
          nm = mw.frm_phone;
        }
        if (mw.hasOwnProperty("frm_email")) {
          nn = mw.frm_email;
        }
        if (mw.hasOwnProperty("css_bosung")) {
          np = mw.css_bosung;
        }
        if (mw.hasOwnProperty("endtime")) {
          nq = mw.endtime;
        }
        if (mw.hasOwnProperty("desc")) {
          na = mw.desc;
        }
        if (mw.hasOwnProperty("is_advance")) {
          nt = mw.is_advance;
        }
        if (nt == 0) {
          el("is_advance").checked = false;
        } else {
          el("is_advance").checked = true;
        }
        if (mw.hasOwnProperty("type")) {
          nr = mw.type;
          setWheelType(nr);
          if (mw.hasOwnProperty("cover_img")) {
            ns = mw.cover_img;
            el("cover_img_display").src = ns;
            el("cover_img").value = ns;
          }
        } else {
          setWheelType("color");
          el("cover_img_display").src =
            ajax_object.theme_uri + "/assets/images/cover-wheel.jpg";
          el("cover_img").value =
            ajax_object.theme_uri + "/assets/images/cover-wheel.jpg";
        }
        fillTitleDesc(mz, na);
        var nu =
          '{"link_id":' +
          nd +
          ',\n                            "show_title":"' +
          nb +
          '",\n                            "show_tripod":"' +
          nc +
          '",\n                            "visibility":"' +
          ne +
          '",\n                            "max_spin":' +
          nf +
          ',\n                            "link_logo":"' +
          ni +
          '",\n                            "logo_white":"' +
          nj +
          '",\n                            "lead_email":"' +
          nl +
          '",\n                            "is_show_lead_form":"' +
          nk +
          '",\n                            "frm_phone":"' +
          nm +
          '",\n                            "frm_email":"' +
          nn +
          '",\n                            "endtime":"' +
          nq +
          '",\n                            "css_bosung":"' +
          np +
          '"\n                          }';
        el("linkData").textContent = nu;
        el("edit-mode-txt").innerHTML =
          '<span class="badge bg-danger">Bạn đang ở chế độ chỉnh sửa</span> <sup><a href="javascript:void(0);" title="Thoát chế độ chỉnh sửa" onclick="location.reload();">&times;</a></sup>';
        if (mw.hasOwnProperty("custom_bg_color")) {
          root.style.setProperty("--custom_bg_color", mw.custom_bg_color);
          el("custom-bg-color").value = mw.custom_bg_color;
        } else {
          root.style.setProperty("--custom_bg_color", "#ffffff");
          el("custom-bg-color").value = "#ffffff";
        }
        if (mw.hasOwnProperty("custom_color")) {
          root.style.setProperty("--custom_color", mw.custom_color);
          el("custom-color").value = mw.custom_color;
        } else {
          root.style.setProperty("--custom_color", "#000000");
          el("custom-color").value = "#000000";
        }
        if (mw.hasOwnProperty("custom_bg_img")) {
          setBackgroundImage(mw.custom_bg_img, "update");
        } else {
          document.body.style.backgroundImage = "";
          el("custom-bg-img").value = "";
          el("custom-bg-img-tablet").value = "";
          el("custom-bg-img-mobile").value = "";
        }
        var nv = [];
        if (mw.hasOwnProperty("list")) {
          var nw = mw.list.split("||");
          var nx = null;
          var ny = "";
          if (nw.length) {
            for (var nz = 0; nz < nw.length; nz++) {
              if (nw[nz].includes("<img")) {
                var oa = document.createElement("div");
                oa.innerHTML = nw[nz];
                nx = oa.querySelector("img");
                ny = nw[nz].replace(/<img[^>]*>/g, "");
                ny = stripHtml(ny);
                ny = ny.trim();
                nv.push({
                  text: ny,
                  id: nz,
                  image: nx.src,
                });
              }
              nv.push({
                text: nw[nz],
                id: nz,
              });
            }
          }
        }
        if (mw.hasOwnProperty("entries")) {
          nv = mw.entries;
        }
        if (mw.hasOwnProperty("startSound")) {
          el("start_sound").value = mw.startSound;
        }
        if (mw.hasOwnProperty("start_sound")) {
          el("start_sound").value = mw.start_sound;
        }
        if (mw.hasOwnProperty("end_sound")) {
          el("end_sound").value = mw.end_sound;
        }
        if (mw.hasOwnProperty("endSound")) {
          el("end_sound").value = mw.endSound;
        }
        el("duration").value = mw.duration;
        if (mw.hasOwnProperty("btn_spin_label")) {
          el("btn-spin-label").value = mw.btn_spin_label;
        }
        if (mw.hasOwnProperty("btn_spin_img")) {
          el("btn-spin-img").value = mw.btn_spin_img;
        }
        if (mw.show_confetti == "yes") {
          el("show_confetti").checked = true;
        } else {
          el("show_confetti").checked = false;
        }
        if (mw.show_popup == "yes") {
          el("show_popup").checked = true;
        } else {
          el("show_popup").checked = false;
        }
        el("popup_label").value = mw.popup_label;
        if (mw.show_remove_button == "yes") {
          el("show_remove_button").checked = true;
        } else {
          el("show_remove_button").checked = false;
        }
        if (mw.hasOwnProperty("show_border")) {
          if (mw.show_border == "yes") {
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
        var ob = document.getElementsByName("chkcolor");
        if (mw.hasOwnProperty("theme_style_color")) {
          colors = mw.theme_style_color;
        }
        if (mw.hasOwnProperty("colors")) {
          colors = mw.colors;
        }
        if (colors) {
          for (var oc of ob) {
            oc.checked = false;
            el("color-" + oc.value).value = "#ADB2B0";
          }
          for (const od of colors) {
            el("color-" + od.key).value = od.value;
            el("chkcolor-" + od.key).checked = true;
          }
        }
        if (mw.hasOwnProperty("is_stroke")) {
          if (mw.is_stroke == "yes") {
            el("is_stroke").checked = true;
          } else {
            el("is_stroke").checked = false;
          }
        } else {
          el("is_stroke").checked = false;
        }
        fillEntries(nv, nt);
        wheelSettings();
        el("view-shared-msg").innerHTML =
          '<div class="alert alert-danger alert-dismissible fade show" id="alertClose" role="alert"><strong>Tiếp tục sửa (' +
          mz +
          ") ?</strong><br>- Hãy chỉnh lại <strong>Vòng quay</strong> theo ý muốn rồi vào <strong>Tài khoản</strong> \u21E2 <strong>Tạo link chia sẻ</strong> \u21E2 <strong>Cập nhật</strong>.<br>- Đừng Refresh trang trong quá trình chỉnh sửa.</div>";
      } else {
        alert("Có lỗi chưa rõ nguyên nhân!");
      }
    } else {
      console.log("Lỗi:" + mr.status);
    }
  };
  mr.send(
    "action=editSharedLink&id=" + mq + "&ajaxsecurity=" + ajax_object.ajax_nonce
  );
}

function viewSharedLink() {
  if (!isLoggedIn()) {
    loginForm();
    return false;
  }
  var oe = "";
  el("modal-title").innerHTML =
    '<span data-feather="share-2" style="width:24px;heigh24px;"></span> Liên kết của bạn';
  oe +=
    '<div id="view-shared-loader"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div> Đang tải...</div>';
  var og = new XMLHttpRequest();
  og.open("POST", ajax_object.ajax_url);
  og.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  og.onload = function () {
    if (og.status === 200) {
      el("modal-body").innerHTML = og.responseText;
      feather.replace();
      var oh = document.querySelectorAll(".btn-copy-link-item");
      if (oh.length) {
        for (var oi = 0; oi < oh.length; oi++) {
          oh[oi].addEventListener("click", function () {
            copyToClipBoard(this.dataset.content);
            alert("Đã copy link (" + this.dataset.title + ")");
          });
        }
      }
      var oj = document.querySelectorAll(".btn-copy-embed-item");
      if (oj.length) {
        for (var oi = 0; oi < oj.length; oi++) {
          oj[oi].addEventListener("click", function () {
            var ol =
              '<div class="embedvqmm" data-id="' + this.dataset.id + '"></div>';
            ol +=
              '<script src="' +
              ajax_object.home_url +
              '/embed.min.js"></script>';
            copyToClipBoard(ol);
            alert("Đã copy mã nhúng (" + this.dataset.title + ")");
          });
        }
      }
      var om = document.querySelectorAll(".btn-edit-link");
      if (om.length) {
        for (var oi = 0; oi < om.length; oi++) {
          om[oi].addEventListener("click", function () {
            editSharedLink(this.dataset.content);
          });
        }
      }
      var on = document.querySelectorAll(".btn-remove-link");
      if (on.length) {
        for (var oi = 0; oi < on.length; oi++) {
          on[oi].addEventListener("click", function () {
            removeSharedLink(this.dataset.content, this.dataset.title);
          });
        }
      }
      var oo = document.querySelector("#btn-create-link-now");
      if (oo) {
        oo.addEventListener("click", function () {
          createLinkForm();
        });
      }
    } else {
      console.log("Lỗi:" + og.status);
    }
  };
  og.send("action=viewSharedLink");
  el("modal-body").innerHTML = oe;
  el("modal-footer").innerHTML =
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>';
  el("modal-dialog").classList.add("modal-lg");
  feather.replace();
  var op = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  op.show();
}

function uploadLinkLogo() {
  upload("upload_logo", "link_logo");
}

function checkLeadForm() {
  if (el("is_show_lead_form").checked == true) {
    el("lead_email").removeAttribute("disabled");
    el("frm_option").classList.remove("d-none");
    var oq = document.querySelectorAll('input[type="checkbox"].frm-option');
    for (var or = 0; or < oq.length; or++) {
      oq[or].addEventListener("click", function () {
        if (countBoxCheckedByClass("frm-option") == 1) {
          for (var os = 0; os < oq.length; os++) {
            if (oq[os].checked == true) {
              oq[os].disabled = true;
            }
          }
        } else {
          for (var os = 0; os < oq.length; os++) {
            oq[os].disabled = false;
          }
        }
      });
    }
    var ot = new XMLHttpRequest();
    ot.open("POST", ajax_object.ajax_url + "?action=getUserInfo");
    ot.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ot.onload = function () {
      user_info = JSON.parse(ot.responseText);
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
    ot.send("&ajaxsecurity=" + ajax_object.ajax_nonce);
  } else {
    el("is_show_lead_form").value = 0;
    el("lead_email_container").innerHTML =
      '<span class="input-group-text">Email nhận</span><input type="text" class="form-control" id="lead_email" disabled placeholder="yourname@gmail.com">';
    el("frm_option").classList.add("d-none");
  }
}

function openSettingsForm() {
  var ou = new bootstrap.Modal(el("modalSettings"), {
    backdrop: true,
  });
  ou.show();
}

function wheelSettings() {
  var ov = el("start_sound").value;
  var ow = el("end_sound").value;
  var ox = el("duration").value;
  var oy = "no";
  var oz = "no";
  var pa = "no";
  var pb = el("popup_label").value;
  var pc = el("extra_name").value;
  var pd = el("custom-bg-color").value;
  var pe = el("custom-color").value;
  var pf = [];
  var pg = el("btn-spin-label").value;
  var pj = el("btn-spin-img").value;
  var pk = "no";
  var pl = "no";
  var pm = "#FF4D00";
  var pn = "#F6FA00";
  var po = "";
  var pp = "";
  var pq = el("type").value;
  var pr = el("cover_img").value;
  var ps = el("custom-bg-img").value;
  var pt = el("custom-bg-img-tablet").value;
  var pu = el("custom-bg-img-mobile").value;
  pf = [ps, pt, pu];
  if (el("show_confetti").checked) {
    oy = "yes";
  }
  if (el("show_popup").checked) {
    oz = "yes";
  }
  if (el("show_remove_button").checked) {
    pa = "yes";
  }
  if (el("is_stroke").checked) {
    pk = "yes";
  }
  if (el("show_border").checked) {
    pl = "yes";
    pm = el("border_color").value;
    pn = el("diamond_color").value;
  }
  if (el("vqmm-title")) {
    po = el("vqmm-title").textContent;
  }
  if (el("vqmm-desc")) {
    pp = el("vqmm-desc").textContent;
  }
  var pv = [];
  var pw = document.getElementsByName("chkcolor");
  if (pw.length) {
    for (var pz of pw) {
      if (pz.checked) {
        pv.push({
          key: pz.value,
          value: el("color-" + pz.value).value,
        });
      }
    }
  }
  if (pv.length === 0) {
    pv.push({
      key: 1,
      value: "#ADB2B0",
    });
  }
  var qa = 0;
  if (el("is_advance").checked) {
    qa = 1;
  }
  var qb = [];
  var qc = "";
  var qd = null;
  if (qa == 0) {
    var qe = getSectorItem(el("sector_list").innerHTML);
    if (qe.length) {
      for (var qf = 0; qf < qe.length; qf++) {
        if (qe[qf].includes("<img")) {
          var qg = document.createElement("div");
          qg.innerHTML = qe[qf];
          qd = qg.querySelector("img");
          qc = qe[qf].replace(/<img[^>]*>/g, "");
          qc = stripHtml(qc);
          qc = qc.trim();
          qb.push({
            text: qc,
            id: qf,
            image: qd.src,
          });
        } else {
          qb.push({
            text: qe[qf],
            id: qf,
          });
        }
      }
    }
  } else {
    var qh = 0;
    var qi = null;
    var qj = document.querySelectorAll(".row-item");
    if (qj.length) {
      for (var qf = 0; qf < qj.length; qf++) {
        qh = qf;
        qi = {
          text: el("item-text-" + qh).value,
          id: qh,
          color: el("item-color-" + qh).value,
          weight: parseInt(el("item-weight-" + qh).value),
        };
        if (el("item-img-" + qh).innerHTML != "") {
          qi.image = document.querySelector("#item-img-" + qh + ">img").src;
        }
        if (el("item-sound-" + qh)) {
          qi.sound = el("item-sound-" + qh).value;
        }
        if (el("item-message-" + qh)) {
          qi.message = removeAllUrl(el("item-message-" + qh).value);
        }
        qb.push(qi);
      }
    }
  }
  var qk = {
    title: po,
    desc: pp,
    start_sound: ov,
    end_sound: ow,
    duration: ox,
    show_confetti: oy,
    show_popup: oz,
    show_remove_button: pa,
    is_stroke: pk,
    show_border: pl,
    border_color: pm,
    diamond_color: pn,
    popup_label: pb,
    custom_bg_color: pd,
    custom_color: pe,
    custom_bg_img: pf,
    btn_spin_label: pg,
    btn_spin_img: pj,
    colors: pv,
    entries: qb,
    is_advance: qa,
    type: pq,
    cover_img: pr,
  };
  localStorage.setItem("wheelSetting" + pc, JSON.stringify(qk));
  root.style.setProperty("--custom_bg_color", pd);
  root.style.setProperty("--custom_color", pe);
  if (pf) {
    setBackgroundImage(pf, "view");
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
  var ql =
    '<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="filter_media" id="all" value="all" onClick="filter_media(\'all\');" checked><label class="form-check-label" for="all">Tất cả</label></div>';
  ql +=
    '<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="filter_media" id="media_button" value="btn" onClick="filter_media(\'btn\');"><label class="form-check-label" for="media_button">Nút quay</label></div>';
  ql +=
    '<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="filter_media" id="media_background" value="bgr" onClick="filter_media(\'bgr\');"><label class="form-check-label" for="media_background">Nền</label></div>';
  ql +=
    '<hr><div class="mt-3" style="max-height:350px;overflow-y:auto;overflow-x:hidden;"><table class="table table-striped" id="media" ><thead><tr><th>STT</th><th>Link</th><th>Đặt làm</th><th>Hành động</th></tr></thead><tbody id="mediaBody">';
  var qm = 0;
  if (localStorage.getItem("uploadedList")) {
    var qn = JSON.parse(localStorage.getItem("uploadedList"));
    for (qm = 0; qm < qn.length; qm++) {
      ql +=
        '<tr id="tr_' +
        qm +
        '"><td>' +
        (qm + 1) +
        '</td><td><a href="' +
        qn[qm] +
        '" title="Ảnh sẽ được mở trong tab mới" target="_blank"><img src="' +
        qn[qm] +
        '" width="50" heigh="50" class="border border-1 rounded-1" ></a></td><td data-type="mixes"><button class="btn btn-sm btn-secondary" onclick="el(\'custom-bg-img\').value=\'' +
        qn[qm] +
        "';el('btn_wheel_setting').click();\">Nền</button> <button class=\"btn btn-sm btn-secondary\" onclick=\"el('btn-spin-img').value='" +
        qn[qm] +
        "';el('btn-spin-label').value='';el('btn_wheel_setting').click();\">Nút Quay</button></td><td><button class=\"btn btn-sm btn-outline-secondary\" onclick=\"removeUploaded('" +
        qn[qm] +
        "');el('tr_" +
        qm +
        "').remove();\">&times;</button></td></tr>";
    }
  }
  fetch("/buttons.txt?cachebuster=" + new Date().getTime())
    .then((qo) => qo.text())
    .then((qp) => {
      const qq = qp.split("\n").map((qr) => qr.trim());
      var qs = "";
      for (var qt = 0; qt < qq.length; qt++) {
        qs +=
          "<tr><td>" +
          (qm + qt + 1) +
          '</td><td><a href="' +
          ajax_object.theme_uri +
          "/assets/buttons/" +
          qq[qt] +
          '" title="Ảnh sẽ được mở trong tab mới" target="_blank"><img src="' +
          ajax_object.theme_uri +
          "/assets/buttons/" +
          qq[qt] +
          '" width="50" heigh="50" class="border border-1 rounded-1" ></a></td><td data-type="btn"><button class="btn btn-sm btn-secondary" onclick="el(\'btn-spin-img\').value=\'' +
          ajax_object.theme_uri +
          "/assets/buttons/" +
          qq[qt] +
          "';el('btn-spin-label').value='';el('btn_wheel_setting').click();\">Nút Quay</button></td><td>\u2217</td></tr>";
      }
      el("mediaBody").insertAdjacentHTML("beforeend", qs);
      fetch("/backgrounds.txt?cachebuster=" + new Date().getTime())
        .then((qv) => qv.text())
        .then((qw) => {
          const qx = qw.split("\n").map((qy) => qy.trim());
          var qz = "";
          for (var rb = 0; rb < qx.length; rb++) {
            qz +=
              "<tr><td>" +
              (qm + rb + 1) +
              '</td><td><a href="' +
              ajax_object.theme_uri +
              "/assets/background/" +
              qx[rb] +
              '" title="Ảnh sẽ được mở trong tab mới" target="_blank"><img src="' +
              ajax_object.theme_uri +
              "/assets/background/" +
              qx[rb] +
              '" width="50" heigh="50" class="border border-1 rounded-1" ></a></td><td data-type="bgr"><button class="btn btn-sm btn-secondary" onclick="el(\'custom-bg-img\').value=\'' +
              ajax_object.theme_uri +
              "/assets/background/" +
              qx[rb] +
              "';el('btn_wheel_setting').click();\">Nền</button></td><td>\u2217</td></tr>";
          }
          el("mediaBody").insertAdjacentHTML("beforeend", qz);
        })
        .catch((rc) => {
          console.error("Lỗi đọc file backgrounds.txt:", rc);
        });
    })
    .catch((rd) => {
      console.error("Lỗi đọc file buttons.txt:", rd);
    });
  ql += "</tbody></table></div>";
  el("uploaded-list").innerHTML = ql;
  feather.replace();
}

function removeUploaded(re) {
  if (re) {
    if (localStorage.getItem("uploadedList")) {
      var rf = JSON.parse(localStorage.getItem("uploadedList"));
      if (rf.length) {
        var rg = rf.indexOf(re);
        if (rg !== -1) {
          rf.splice(rg, 1);
          localStorage.setItem("uploadedList", JSON.stringify(rf));
        }
      }
    }
  }
}

function filter_media(rh) {
  var ri;
  var rj;
  var rk;
  var rl;
  var rm;
  ri = el("media");
  rj = ri.getElementsByTagName("tr");
  for (rl = 0; rl < rj.length; rl++) {
    rk = rj[rl].getElementsByTagName("td")[2];
    if (rk) {
      rm = rk.dataset.type;
      if (rh == "all") {
        rj[rl].style.display = "";
      } else {
        if (rm == rh) {
          rj[rl].style.display = "";
        } else {
          rj[rl].style.display = "none";
        }
      }
    }
  }
}

function openTemplateForm() {
  var rn = new bootstrap.Modal(el("modalTemplate"), {
    backdrop: true,
  });
  rn.show();
}

function countEntries() {
  var ro = getWheelSettingInArray();
  if (ro) {
    var rp = ro.entries;
    el("entries_count").textContent = rp.length;
  }
}

function clearResult() {
  el("wheel_result").innerHTML = "";
  el("result_count").textContent = 0;
}

function sortResult() {
  var rq = getSectorItem(el("sector_list").innerHTML);
  if (rq && rq.length) {
    rq.sort();
    var rr = "";
    for (var rs = rq.length - 1; rs >= 0; rs--) {
      rr += "<div>" + rq[rs] + "</div>";
    }
    el("wheel_result").innerHTML = rr;
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

function resizeImage(ru) {
  return new Promise((rv, rw) => {
    const rx = new Image();
    const ry = new FileReader();
    ry.onload = function (rz) {
      rx.src = rz.target.result;
    };
    rx.onload = function () {
      const sa = document.createElement("canvas");
      const sb = sa.getContext("2d");
      let sc = rx.width;
      let sd = rx.height;
      if (sc > sd) {
        if (sc > 200) {
          sd = Math.round((sd *= 200 / sc));
          sc = 200;
        }
      } else {
        if (sd > 200) {
          sc = Math.round((sc *= 200 / sd));
          sd = 200;
        }
      }
      sa.width = sc;
      sa.height = sd;
      sb.drawImage(rx, 0, 0, sc, sd);
      const se = sa.toDataURL("image/png");
      rv(se);
    };
    rx.onerror = rw;
    ry.readAsDataURL(ru);
  });
}
if (el("inputImage")) {
  el("inputImage").addEventListener("change", function (sf) {
    const sg = sf.target.files;
    const sh = [];
    const si = [];
    if (!sg.length) {
      return;
    }
    var sj = 0;
    if (el("is_advance").checked) {
      sj = 1;
    }
    var sk = el("extra_name").value;
    var sl = localStorage.getItem("wheelSetting" + sk);
    var sn = null;
    if (sl) {
      var so = JSON.parse(sl);
      sn = so.entries;
    }
    var sp = sn.length;
    if (sj == 1) {
      var sq = getCurrentStyleColor();
      var sr = parseInt(sq.length);
      for (let st = 0; st < sg.length; st++) {
        si.push(
          resizeImage(sg[st]).then((su) => {
            sh.push(su);
            sn.push({
              text: "",
              id: sp,
              color: sq[sp % sr],
              image: su,
            });
            sp++;
            fillEntries(sn, sj);
            setTimeout(function () {
              loadWheel();
            }, 500);
          })
        );
      }
    } else {
      for (let sv = 0; sv < sg.length; sv++) {
        si.push(
          resizeImage(sg[sv]).then((sw) => {
            sh.push(sw);
            sn.push({
              text: "",
              id: sp,
              image: sw,
            });
            sp++;
            fillEntries(sn, sj);
            setTimeout(function () {
              loadWheel();
            }, 500);
          })
        );
      }
    }
  });
}

function handleImageUpload(sx) {
  const sy = el("item-upload-" + sx).files[0];
  if (sy) {
    resizeImage(sy)
      .then((sz) => {
        var ta = getWheelSettingInArray();
        var tb = null;
        if (ta) {
          tb = ta.entries;
        }
        if (tb.length) {
          for (var tc = 0; tc < tb.length; tc++) {
            if (tb[tc].id == sx) {
              tb[tc].image = sz;
            }
          }
        }
        fillEntries(tb, 1);
        setTimeout(function () {
          loadWheel();
        }, 500);
      })
      .catch((te) => {
        console.error("Error resizing image:", te);
      });
  }
}

function configItem(tf) {
  var tg = getWheelSettingInArray();
  var tj = el("item-text-" + tf).value;
  var tk = el("item-sound-" + tf).value;
  var tl = removeAllUrl(el("item-message-" + tf).value);
  var tm = parseInt(el("item-weight-" + tf).value);
  var tn = el("item-color-" + tf).value;
  var tp = document.querySelector("#item-img-" + tf + ">img");
  var tq = tg.entries;
  var ts = tq.reduce((tt, tu) => tt + tu.weight, 0);
  var tv = tq.map((tw) => Math.round((tw.weight / ts) * 100));
  var tx = tv[tf];
  var ty = "";
  ty += '<div class="d-flex justify-content-between mb-3">';
  ty += "<div>";
  if (tf > 0) {
    ty +=
      '<button class="btn btn-sm btn-secondary" data-bs-dismiss="modal" title="Mục trước" onClick="configItem(' +
      (tf - 1) +
      ')"><span data-feather="chevron-left"></span></button> ';
  } else {
    ty +=
      '<button class="btn btn-sm btn-secondary" disabled><span data-feather="chevron-left"></span></button> ';
  }
  ty += '<span class="mx-2">Mục ' + (tf + 1) + "/" + tq.length + "</span>";
  if (tf < tq.length - 1) {
    ty +=
      '<button class="btn btn-sm btn-secondary" title="Mục tiếp theo" data-bs-dismiss="modal" onClick="configItem(' +
      (tf + 1) +
      ')"><span data-feather="chevron-right"></span></button>';
  } else {
    ty +=
      '<button class="btn btn-sm btn-secondary" disabled><span data-feather="chevron-right"></span></button>';
  }
  ty += "</div>";
  ty +=
    '<div><button class="btn btn-sm btn-secondary" title="Thêm mục mới" data-bs-dismiss="modal" onClick="addRow(); configItem(' +
    tq.length +
    ');"><span data-feather="plus"></span></button></div>';
  ty += "</div>";
  ty += '<hr class="border border-secondary border-1"></div>';
  ty += '<div class="row mb-3">';
  ty +=
    '<div class="col-4"><label for="cfg-text-' +
    tf +
    '" class="form-label">Tên mục</label></div>';
  ty +=
    '<div class="col-8"><input type="text" class="form-control bg-light" placeholder="Tên mục" value="' +
    tj +
    '" id="cfg-text-' +
    tf +
    '"></div>';
  ty += "</div>";
  ty += '<div class="row mb-3">';
  ty +=
    '<div class="col-4"><label for="cfg-color-' +
    tf +
    '" class="form-label">Màu</label></div>';
  ty += '<div class="col-8">';
  ty += '<div class="d-flex justify-content-between">';
  ty +=
    '<div class="p-2"><input type="color" value="' +
    tn +
    '" id="cfg-color-' +
    tf +
    '"></div>';
  if (tp) {
    ty += '<div class="position-relative" id="cfg-img-wrap-' + tf + '">';
    ty +=
      '<span class="cfg-img" id="cfg-img-' +
      tf +
      '"><img src="' +
      tp.src +
      '" width="150" ></span>';
    ty +=
      '<span class="position-absolute top-0 end-0 cfg-img-remove" onclick="configRemoveImg(' +
      tf +
      ');">&times;</span>';
    ty += "</div>";
    ty +=
      '<div class="p-2 d-none" id="cfg-upload-wrap-' +
      tf +
      '"><label class="btn btn-secondary" for="cfg-upload-' +
      tf +
      '"><span data-feather="image"></span></label> <input type="file" class="cfg-upload d-none" id="cfg-upload-' +
      tf +
      '" onchange="configImageUpload(' +
      tf +
      ');" accept="image/png, image/gif, image/jpeg" ></div>';
    ty += "</div>";
  } else {
    ty += '<div class="position-relative d-none" id="cfg-img-wrap-' + tf + '">';
    ty += '<span class="cfg-img" id="cfg-img-' + tf + '"></span>';
    ty +=
      '<span class="position-absolute top-0 end-0 cfg-img-remove" onclick="configRemoveImg(' +
      tf +
      ');">&times;</span>';
    ty += "</div>";
    ty +=
      '<div class="p-2" id="cfg-upload-wrap-' +
      tf +
      '"><label class="btn btn-secondary" for="cfg-upload-' +
      tf +
      '"><span data-feather="image"></span></label> <input type="file" class="cfg-upload d-none" id="cfg-upload-' +
      tf +
      '" onchange="configImageUpload(' +
      tf +
      ');" accept="image/png, image/gif, image/jpeg" ></div>';
    ty += "</div>";
  }
  ty += "</div>";
  ty += "</div>";
  ty += "</div>";
  ty += '<div class="row row-3 mb-3">';
  ty += '<div class="col-4">Âm thanh</div>';
  ty += '<div class="col-8">';
  ty += '<div class="input-group">';
  ty += '<select class="form-select" id="cfg-sound-' + tf + '">';
  ty += '<option value="">Kế thừa từ cài đặt chung</option>';
  var tz = "";
  Object.keys(end_sound_option).forEach((ua) => {
    if (ua === tk) {
      tz = "selected";
    }
    ty +=
      '<option value="' +
      ua +
      '" ' +
      tz +
      " >" +
      end_sound_option[ua] +
      "</option>";
    tz = "";
  });
  ty += "</select>";
  ty +=
    '<button class="btn btn-outline-secondary" id="cfg-sound-play" onClick="triggerAudio(el(\'cfg-sound-' +
    tf +
    "').value,'play');\"><span data-feather=\"play\"></span></button>";
  ty +=
    '<button class="btn btn-outline-secondary" id="cfg-sound-stop" onClick="triggerAudio(el(\'cfg-sound-' +
    tf +
    "').value,'stop');\"><span data-feather=\"square\"></span></button>";
  ty += "</div>";
  ty += "</div>";
  ty += "</div>";
  ty += '<div class="row row-4 mb-3">';
  ty += '<div class="col-4">Tiêu đề Popup</div>';
  ty += '<div class="col-8">';
  ty +=
    '<input type="text" class="form-control bg-light" id="cfg-message-' +
    tf +
    '" placeholder="' +
    el("popup_label").value +
    '" value="' +
    tl +
    '" >';
  ty += "</div>";
  ty += "</div>";
  ty += '<div class="row row-4 mb-3">';
  ty += '<div class="col-4">Trọng số</div>';
  ty += '<div class="col-8">';
  ty +=
    '<div class="input-group"><input type="text" class="form-control bg-light numberonly" onkeyup="configWeight(' +
    tf +
    ",'');\" onblur=\"if(this.value=='') this.value='" +
    tm +
    "';configWeight(" +
    tf +
    ",'');\" id=\"cfg-weight-" +
    tf +
    '" value="' +
    tm +
    '" ><button class="btn btn-sm bg-light" onClick="configWeight(' +
    tf +
    ',\'minus\');" style="border: 1px solid #ced4da;color:#212529;"><span data-feather="minus"></span></button><button class="btn btn-sm bg-light" onClick="configWeight(' +
    tf +
    ',\'plus\');" style="border: 1px solid #ced4da;color:#212529;"><span data-feather="plus"></span></button> <span class="input-group-text"><span id="cfg-percent-' +
    tf +
    '">' +
    tx +
    "</span>%</span></div>";
  ty += "</div>";
  ty += "</div>";
  var ub =
    '<a class="text-decoration-none" data-bs-dismiss="modal">Bỏ qua</a> <button class="btn btn-primary" id="btn-cfg-update-' +
    tf +
    '" onclick="configItemUpdate(' +
    tf +
    ');">Cập nhật</button>';
  el("modal-title").innerHTML =
    '<span data-feather="sliders" style="width:24px;heigh:24px;"></span> Nâng cao';
  el("modal-body").innerHTML = ty;
  el("modal-footer").innerHTML = ub;
  feather.replace();
  var uc = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  uc.show();
  numberOnly();
}

function configWeight(ud, ue) {
  if (el("cfg-weight-" + ud).value.trim() !== "") {
    var uf = getWheelSettingInArray();
    var ug = parseInt(el("cfg-weight-" + ud).value.trim());
    if (ug <= 0) {
      ug = 1;
      el("cfg-weight-" + ud).value = 1;
    }
    if (uf) {
      var uh = uf.entries;
      if (uh.length) {
        var ui = uh.reduce((uj, uk) => uj + uk.weight, 0);
        var um = uh.map((un) => Math.round((un.weight / ui) * 100));
        var uo = um[ud];
        var uq = ui - uh[ud].weight;
        for (var ur = 0; ur < uh.length; ur++) {
          if (uh[ur].id == ud) {
            if (ue == "plus") {
              el("cfg-weight-" + ud).value = ug + 1;
            } else {
              if (ue == "minus" && ug > 1) {
                el("cfg-weight-" + ud).value = ug - 1;
              }
            }
            ug = parseInt(el("cfg-weight-" + ud).value);
            uq += ug;
            uo = Math.round((ug / uq) * 100);
            el("cfg-percent-" + ud).textContent = uo;
            break;
          }
        }
      }
    }
  }
}

function configImageUpload(us) {
  const ut = el("cfg-upload-" + us).files[0];
  if (ut) {
    resizeImage(ut)
      .then((uu) => {
        el("cfg-img-" + us).innerHTML = '<img src="' + uu + '" width="150" >';
        el("cfg-img-wrap-" + us).classList.remove("d-none");
        el("cfg-upload-wrap-" + us).classList.add("d-none");
      })
      .catch((uv) => {
        console.error("Error resizing image:", uv);
      });
  }
}

function configRemoveImg(uw) {
  el("cfg-img-" + uw).innerHTML = "";
  el("cfg-img-wrap-" + uw).classList.add("d-none");
  el("cfg-upload-wrap-" + uw).classList.remove("d-none");
}

function configItemUpdate(ux) {
  var uy = el("cfg-text-" + ux).value;
  var uz = el("cfg-color-" + ux).value;
  var va = document.querySelector("#cfg-img-" + ux + ">img");
  var vb = el("cfg-sound-" + ux).value;
  var vc = parseInt(el("cfg-weight-" + ux).value);
  var vd = removeAllUrl(el("cfg-message-" + ux).value);
  el("btn-cfg-update-" + ux).textContent = "Cập nhật...";
  var ve = getWheelSettingInArray();
  var vf = null;
  if (ve) {
    vf = ve.entries;
  }
  if (vc <= 0) {
    vc = 1;
  }
  if (vf.length) {
    for (var vg = 0; vg < vf.length; vg++) {
      if (vf[vg].id == ux) {
        vf[vg].text = uy;
        vf[vg].color = uz;
        vf[vg].weight = vc;
        if (va) {
          vf[vg].image = va.src;
        } else {
          delete vf[vg].image;
        }
        if (vb) {
          vf[vg].sound = vb;
        } else {
          delete vf[vg].sound;
        }
        if (vd) {
          vf[vg].message = vd;
        } else {
          delete vf[vg].message;
        }
        break;
      }
    }
  }
  fillEntries(vf, 1);
  setTimeout(function () {
    loadWheel();
    el("btn-cfg-update-" + ux).textContent = "Cập nhật";
  }, 500);
}

function fill100() {
  var vh = [];
  var vj = 0;
  if (el("is_advance").checked) {
    vj = 1;
  }
  if (vj == 0) {
    for (var vk = 0; vk < 100; vk++) {
      vh.push({
        text: (vk + 1).toString(),
        id: vk,
      });
    }
  } else {
    var vl = getCurrentStyleColor();
    for (var vk = 0; vk < 100; vk++) {
      vh.push({
        text: (vk + 1).toString(),
        id: vk,
        color: vl[vk % vl.length],
      });
    }
  }
  fillEntries(vh, vj);
  loadWheel();
}

function showInfo() {
  var vm = document.getElementsByClassName("toggle-show-hide");
  for (var vo = 0; vo < vm.length; vo++) {
    vm[vo].classList.remove("d-none");
  }
  const vp = document.querySelectorAll("[data-dest]");
  if (vp.length) {
    vp.forEach((vq) => {
      vq.classList.remove("d-none");
    });
  }
  el("wheel-center").classList.remove("w-100");
}

function hideInfo() {
  var vr = document.getElementsByClassName("toggle-show-hide");
  for (var vs = 0; vs < vr.length; vs++) {
    vr[vs].classList.add("d-none");
  }
  const vt = document.querySelectorAll("[data-dest]");
  if (vt.length) {
    vt.forEach((vu) => {
      vu.classList.add("d-none");
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

function addTextToWheel(vv) {
  var vw = el(vv).textContent;
  var vx = vw.split(",");
  var vy = "";
  var vz = "";
  for (var wa = 0; wa < vx.length; wa++) {
    vz = vx[wa].trim();
    vy += "<div>" + vz + "</div>";
  }
  el("sector_list").innerHTML = vy;
  el("sector_list").dispatchEvent(new KeyboardEvent("keyup"));
  el("sector_list").scrollIntoView();
}

function showTitleDescForm() {
  var wb = "";
  var wc = "";
  var wd = el("extra_name").value;
  var we = localStorage.getItem("wheelSetting" + wd);
  if (el("vqmm-title") || el("vqmm-desc")) {
    if (el("vqmm-title")) {
      wb = el("vqmm-title").textContent;
    }
    if (el("vqmm-desc")) {
      wc = el("vqmm-desc").textContent;
    }
  } else {
    if (we !== null) {
      var wf = JSON.parse(we);
      wb = wf.title;
      wc = wf.desc;
    }
  }
  el("modal-title").innerHTML =
    '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="edit"></span> Sửa tiêu đề và mô tả';
  el("modal-body").innerHTML =
    '<div class="mb-3"><label for="editTitle" class="form-label">Tiêu đề</label><input type="text" class="form-control" value="' +
    wb +
    '" data-maxlength="60" id="editTitle" placeholder="Tiêu đề vòng quay"></div><div class="mb-3"><label for="editDesc" class="form-label">Mô tả</label><textarea class="form-control" id="editDesc" placeholder="Mô tả vòng quay"  data-maxlength="160" rows="3">' +
    wc +
    "</textarea></div>";
  el("modal-footer").innerHTML =
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button><button type="button" id="saveTitleDesc" onclick="saveTitleDesc()" class="btn btn-primary" data-bs-dismiss="modal">Lưu lại</button>';
  feather.replace();
  var wg = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  wg.show();
  startLimitCharacters();
}

function saveTitleDesc() {
  var wh = el("editTitle").value;
  var wi = el("editDesc").value;
  var wj = el("extra_name").value;
  var wk = localStorage.getItem("wheelSetting" + wj);
  if (wk) {
    var wl = JSON.parse(wk);
    wl.title = wh;
    wl.desc = wi;
    localStorage.setItem("wheelSetting" + wj, JSON.stringify(wl));
  }
  fillTitleDesc(wh, wi);
}

function fillTitleDesc(wm, wn) {
  var wo =
    '<div class="wp-block-heading has-x-large-font-size toggle-show-hide" id="vqmm-title">' +
    wm +
    "</div>";
  wo += '<p class="toggle-show-hide" id="vqmm-desc">' + wn + "</p>";
  el("vqmm-content").innerHTML = wo;
}

function fillEntries(wq, wr) {
  if (wr == 0) {
    var ws = "";
    var wt = "";
    if (wq.length) {
      for (var wu = 0; wu < wq.length; wu++) {
        if (wq[wu].hasOwnProperty("image")) {
          wt = ' <img src="' + wq[wu].image + '" >';
        }
        ws += "<div>" + wq[wu].text + wt + "</div>";
        wt = "";
      }
    }
    el("sector_list").innerHTML = ws;
  } else {
    var ws = '<div class="scrollarea" id="scrollarea">';
    var wv = 0;
    var ww = "";
    var wx = "";
    var wy = "";
    var wz = "";
    var xa = 0;
    if (wq.length) {
      var xb = wq.reduce((xc, xd) => xc + xd.weight, 0);
      var xe = wq.map((xf) => Math.round((xf.weight / xb) * 100));
      for (var wu = 0; wu < wq.length; wu++) {
        wv = wu;
        wq[wu].id = wu;
        wz = "";
        if (!wq[wu].hasOwnProperty("weight")) {
          wq[wu].weight = 1;
        }
        if (wq[wu].hasOwnProperty("sound")) {
          wx = wq[wu].sound;
        }
        if (wq[wu].hasOwnProperty("message")) {
          ww = wq[wu].message;
        }
        if (wq[wu].hasOwnProperty("image")) {
          wy = wq[wu].image;
        }
        if (wv == wq[0].id) {
          wz += "row-first";
        }
        xa = xe[wu];
        if (wv == wq[wq.length - 1].id) {
          wz += " row-last";
        }
        ws +=
          '<div class="row row-item ' +
          wz +
          '" id="row-item-' +
          wv +
          '" data-id="' +
          wv +
          '">';
        ws +=
          '<div class="col-1 d-flex flex-column justify-content-center movearea"><a href="javascript:void(0);" class="text-decoration-none text-secondary item-up" onclick="upDown(' +
          wv +
          ',\'up\');">\u2191</a><a href="javascript:void(0);" class="text-decoration-none text-secondary item-down" onclick="upDown(' +
          wv +
          ",'down');\">\u2193</a></div>";
        ws += '<div class="col-9 rowarea">';
        ws +=
          '<div class="mb-1 input-group"><span class="input-group-text">#' +
          (wu + 1) +
          '</span><input type="text" class="form-control bg-light item-text" id="item-text-' +
          wv +
          '" value="' +
          wq[wu].text +
          '" placeholder="Tên mục"></div>';
        ws += '<div class="d-flex align-items-center mb-3">';
        ws +=
          '<input type="color" class="me-1 item-color" id="item-color-' +
          wv +
          '"  value="' +
          wq[wu].color +
          '">';
        if (wy) {
          ws +=
            '<div class="item-img position-relative me-1" id="item-img-' +
            wv +
            '"><img src="' +
            wy +
            '" width="30"> <span class="d-inline-block position-absolute top-0 end-0 item-img-remove" onclick="removeItemImage(' +
            wv +
            ');">&times;</span> </div>';
          ws +=
            '<label class="me-1 d-none" for="item-upload-' +
            wv +
            '"><span data-feather="image"></span></label>';
        } else {
          ws +=
            '<div class="item-img position-relative me-1 d-none" id="item-img-' +
            wv +
            '"></div>';
          ws +=
            '<label class="me-1" for="item-upload-' +
            wv +
            '"><span data-feather="image"></span></label>';
        }
        ws +=
          '<input type="file" class="item-upload d-none" id="item-upload-' +
          wv +
          '" data-id="' +
          wv +
          '" onchange="handleImageUpload(' +
          wv +
          ');" accept="image/png, image/gif, image/jpeg" >';
        ws +=
          '<div class="input-group"><span class="input-group-text" style="padding:.375rem;"><img src="' +
          ajax_object.theme_uri +
          '/assets/icons/balance.png" width="16" alt="balance" ></span><input type="text" class="form-control numberonlyx bg-light item-weight" id="item-weight-' +
          wv +
          '" oninput="changeWeight(' +
          wv +
          ",'');\" onblur=\"if(this.value=='') this.value='" +
          wq[wu].weight +
          '\';" value="' +
          wq[wu].weight +
          '"><span class="input-group-text" style="padding:.375rem;cursor:pointer;" onClick="changeWeight(' +
          wv +
          ',\'minus\');">\u2212</span><span class="input-group-text" style="padding:.375rem;cursor:pointer;" onclick="changeWeight(' +
          wv +
          ',\'plus\');" style="border: 1px solid #ced4da;color:#212529;">+</span><span class="input-group-text" style="padding:.375rem;"><span id="item-size-' +
          wv +
          '">' +
          xa +
          "</span>%</span></div>";
        ws +=
          '<input type="hidden" id="item-sound-' + wv + '" value="' + wx + '">';
        ws +=
          '<input type="hidden" id="item-message-' +
          wv +
          '" value="' +
          ww +
          '">';
        ws += "</div>";
        ws += "</div>";
        ws +=
          '<div class="col-2 d-flex align-items-center justify-content-center p-2 actionarea">';
        ws +=
          '<button class="btn btn-sm btn-primary p-1 me-1 item-config" id="item-config-' +
          wv +
          '" onclick="configItem(' +
          wv +
          ');"><span data-feather="sliders"></span></button>';
        ws +=
          '<a href="javascript:void(0);" class="text-decoration-none text-secondary item-remove" id="item-remove-' +
          wv +
          '" data-id="' +
          wv +
          '" onclick="removeWheelItem(' +
          wv +
          "," +
          wr +
          ');"><span data-feather="x"></span></a>';
        ws += "</div>";
        ws += "</div>";
        wy = wx = ww = "";
      }
    }
    ws += "</div>";
    ws += '<button class="btn btn-primary" id="add-entry">Thêm mục</button>';
    el("advance-editor").innerHTML = ws;
  }
  callbackAfterFillEntries(wq, wr);
  var xg = getWheelSettingInArray();
  if (xg) {
    xg.entries = wq;
    xg.is_advance = wr;
    setWheelSettingFromArray(xg);
  }
}

function callbackAfterFillEntries(xh, xi) {
  if (xi == 0) {
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
    var xj = document.querySelectorAll(".item-color");
    if (xj.length) {
      for (var xk = xj.length - 1; xk >= 0; xk--) {
        xj[xk].addEventListener("change", function () {
          wheelSettings();
        });
      }
    }
    var xm = document.querySelectorAll(".item-text");
    if (xm.length) {
      for (var xk = xm.length - 1; xk >= 0; xk--) {
        xm[xk].addEventListener("keyup", function () {
          setTimeout(wheelSettings(), 500);
        });
      }
    }
    numberOnly();
  }
  el("entries_count").textContent = xh.length;
  feather.replace();
}

function changeWeight(xn, xp) {
  if (el("item-weight-" + xn).value.trim() !== "") {
    var xq = getWheelSettingInArray();
    var xr = el("item-weight-" + xn).value.trim();
    if (isNaN(xr) || xr <= 0) {
      xr = 1;
      el("item-weight-" + xn).value = 1;
    } else {
      xr = parseInt(xr);
    }
    if (xq) {
      var xs = xq.entries;
      if (xs.length) {
        for (var xt = 0; xt < xs.length; xt++) {
          if (xs[xt].id == xn) {
            if (xp == "plus") {
              el("item-weight-" + xn).value = xr + 1;
            } else {
              if (xp == "minus" && xr > 1) {
                el("item-weight-" + xn).value = xr - 1;
              }
            }
            xs[xt].weight = parseInt(el("item-weight-" + xn).value);
            xq.entries = xs;
            setWheelSettingFromArray(xq);
            break;
          }
        }
      }
    }
    fillEntries(xs, 1);
    var xu = el("item-weight-" + xn).value;
    el("item-weight-" + xn).setSelectionRange(xu.length, xu.length);
    el("item-weight-" + xn).focus();
    setTimeout(loadWheel(), 500);
  }
}

function fixVerticalAlign() {
  if (el("wheel-wrapper")) {
    var xv = el("row-wheel").offsetHeight;
    if (xv < window.innerHeight) {
      el("wheel-wrapper").classList.remove("py-2");
      var xw = "calc((100vh - 65px - " + xv + "px)/2)";
      el("wheel-wrapper").style.paddingTop = xw;
      el("wheel-wrapper").style.paddingBottom = xw;
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
  var xx = new XMLHttpRequest();
  xx.open("POST", ajax_object.ajax_url + "?action=ajaxLogout");
  xx.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xx.onload = function () {
    if (xx.status === 200) {
      window.location = ajax_object.home_url;
    } else {
      if (xx.status !== 200) {
        console.log("error:" + xx.status);
      }
    }
  };
  xx.send("&ajaxsecurity=" + ajax_object.ajax_nonce);
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
    let xy = prompt("Hãy gõ chữ DELETE vào ô dưới để xóa", "");
    if (xy == "DELETE") {
      var xz = new XMLHttpRequest();
      xz.open("POST", ajax_object.ajax_url + "?action=deleteMyAccount");
      xz.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xz.onload = function () {
        if (xz.status === 200) {
          if (xz.responseText == "success") {
            window.location = ajax_object.home_url;
          } else {
            alert(xz.responseText);
          }
        } else {
          if (xz.status !== 200) {
            console.log("error:" + xz.status);
          }
        }
      };
      xz.send("&ajaxsecurity=" + ajax_object.ajax_nonce);
    } else {
      if (xy != null && xy != "DELETE") {
        alert("Bạn phải gõ chính xác mới xóa được.");
      }
    }
  }
}

function confirmAdvance(ya) {
  var yb = 0;
  html = "";
  if (ya == 1) {
    el("is_advance").checked = true;
    yb = 1;
    var yc = getSectorItem(el("sector_list").innerHTML);
    var yd = getCurrentStyleColor();
    var ye = parseInt(yd.length);
    var yf = 0;
    var yg = [];
    var yh;
    var yi = null;
    var yj = "";
    for (var yk = 0; yk < yc.length; yk++) {
      yf = yk % ye;
      if (!yc[yk].includes("<img")) {
        yg.push({
          text: yc[yk],
          id: yk,
          color: yd[yf],
          weight: 1,
        });
      } else {
        yh = document.createElement("div");
        yh.innerHTML = yc[yk];
        yi = yh.querySelector("img");
        yj = yc[yk].replace(/<img[^>]*>/g, "");
        yj = stripHtml(yj);
        yj = yj.trim();
        yg.push({
          text: yj,
          id: yk,
          color: yd[yf],
          image: yi.src,
          weight: 1,
        });
      }
    }
    console.log("Đã chuyển sang chế độ nâng cao");
    fillEntries(yg, yb);
  } else {
    el("is_advance").checked = false;
    yb = 0;
    var yl = getWheelSettingInArray();
    if (yl) {
      yl.is_advance = yb;
      var ym = yl.entries;
      var yg = [];
      for (var yk = 0; yk < ym.length; yk++) {
        if (ym[yk].image) {
          yg.push({
            text: ym[yk].text,
            id: yk,
            image: ym[yk].image,
          });
        } else {
          yg.push({
            text: ym[yk].text,
            id: yk,
          });
        }
      }
      console.log("Đã chuyển về bình thường");
      fillEntries(yg, yb);
      setTimeout(function () {
        loadWheel();
      }, 500);
    }
  }
}

function addRow() {
  var yn = getWheelSettingInArray();
  if (yn) {
    var yo = yn.entries;
    var yp = getCurrentStyleColor();
    var yq = yo.length % yp.length;
    yo.push({
      text: "",
      id: yo.length,
      color: yp[yq],
      weight: 1,
    });
    fillEntries(yo, 1);
    loadWheel();
  }
}

function setWheelType(yr = "color") {
  if (yr == "image") {
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
  .addEventListener("click", function (ys) {
    ys.preventDefault();
    beforeCreateLinkForm();
    hideTwentyTwentyThreeMenu();
  });
if (document.querySelector(".open-link>a")) {
  document
    .querySelector(".open-link>a")
    .addEventListener("click", function (yt) {
      yt.preventDefault();
      viewSharedLink();
      hideTwentyTwentyThreeMenu();
    });
}
el("btn-embed-wheel").addEventListener("click", function () {
  document.querySelector(".share-link>a").click();
});
document
  .querySelector(".template-link>a")
  .addEventListener("click", function (yu) {
    yu.preventDefault();
    openTemplateForm();
    hideTwentyTwentyThreeMenu();
  });
document
  .querySelector(".toggle-link>a")
  .addEventListener("click", function (yv) {
    yv.preventDefault();
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
  .addEventListener("click", function (yw) {
    yw.preventDefault();
    openSettingsForm();
    hideTwentyTwentyThreeMenu();
  });
el("btn-settings-wheel").addEventListener("click", function () {
  document.querySelector(".settings-link>a").click();
});
document
  .querySelector(".fullscreen-link>a")
  .addEventListener("click", function (yx) {
    yx.preventDefault();
    fullscreen();
  });
document
  .querySelector(".exit-fullscreen-link>a")
  .addEventListener("click", function (yy) {
    yy.preventDefault();
    exitFullscreen();
  });
if (document.querySelector(".language-link>a")) {
  document
    .querySelector(".language-link>a")
    .addEventListener("click", function (yz) {
      yz.preventDefault();
      hideTwentyTwentyThreeMenu();
      showLanguageForm();
    });
}
if (document.querySelector(".footer-language-link>a")) {
  document
    .querySelector(".footer-language-link>a")
    .addEventListener("click", function (zb) {
      zb.preventDefault();
      showLanguageForm();
    });
}
if (document.querySelector(".download-link>a")) {
  document
    .querySelector(".download-link>a")
    .addEventListener("click", function (zc) {
      zc.preventDefault();
      el("btn-download").click();
    });
}
if (document.querySelector("#btn-generate-code")) {
  el("btn-generate-code").addEventListener("click", function (zd) {
    zd.preventDefault();
    generateCodeForm();
  });
}

function showLanguageForm() {
  var ze = "";
  ze += '<div class="h5 mb-3">Gợi ý</div>';
  ze += '<div class="row g-3 mb-3">';
  ze +=
    '<div class="col-6 col-md-4"><button class="btn btn-outline-secondary w-100" onclick="changeLanguage(\'en\');">Tiếng Anh</button></div>';
  ze +=
    '<div class="col-6 col-md-4"><button class="btn btn-outline-secondary w-100" onclick="changeLanguage(\'vi\');">Tiếng Việt</button></div>';
  ze += "</div>";
  ze +=
    '<div class="h5 mt-5 mb-3">Tất cả ngôn ngữ (' +
    languages.length +
    ")</div>";
  ze +=
    '<div class="mb-3"><input type="text" class="form-control" id="search-lang" onkeyup="searchLang();" placeholder="Tìm kiếm"></div>';
  ze +=
    '<div class="all-languages" style="max-height:350px;overflow-x:hidden;overflow-y:auto;">';
  ze += '<div class="row g-1 g-md-3 mb-3">';
  for (var zf = 0; zf < languages.length; zf++) {
    ze +=
      '<div class="col-6 col-md-4 trlang" data-code="' +
      languages[zf].code +
      '" data-name="' +
      languages[zf].name +
      '" ><button class="btn btn-outline-secondary w-100" onclick="changeLanguage(\'' +
      languages[zf].code +
      "');\">" +
      languages[zf].name +
      "</button></div>";
  }
  ze += "</div>";
  ze += "</div>";
  el("modal-title").innerHTML =
    '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="globe"></span> Ngôn ngữ';
  el("modal-body").innerHTML = ze;
  el("modal-footer").innerHTML =
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>';
  el("modal-footer").classList.remove("justify-content-center");
  feather.replace();
  var zg = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  zg.show();
}

function changeLanguage(zh) {
  if (zh !== "vi") {
    window.open("https://spinwheel.one/" + zh, "_blank").focus();
  } else {
    location.href = ajax_object.home_url;
  }
}

function searchLang() {
  var zi = (name = "");
  var zj = el("search-lang").value.toLowerCase();
  var zk = document.querySelectorAll(".trlang");
  for (i = 0; i < zk.length; i++) {
    zi = zk[i].dataset.code;
    name = zk[i].dataset.name;
    if (
      zi.toLowerCase().indexOf(zj) > -1 ||
      name.toLowerCase().indexOf(zj) > -1
    ) {
      zk[i].classList.remove("d-none");
    } else {
      zk[i].classList.add("d-none");
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
    addtowheels[i].addEventListener("click", function (zl) {
      zl.preventDefault();
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
        for (var zm of chkcolor) {
          zm.checked = false;
          el("color-" + zm.value).value = "#ADB2B0";
        }
      }
      if (thisColor.length) {
        for (var zn = 0; zn < thisColor.length; zn++) {
          el("color-" + (zn + 1)).value = thisColor[zn];
          el("chkcolor-" + (zn + 1)).checked = true;
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
  zo,
  zp,
  zq,
  zr = ["bokeh", "Abstract", "Cityscape", "Playground", "Educational"],
  zs = ""
) {
  var zt =
    '<a class="text-decoration-none" data-bs-dismiss="modal" id="btn-close-modal-img">Bỏ qua</a> <button type="button" class="btn btn-primary" onClick="insertSelectedImgTo(\'' +
    zq +
    "');el('" +
    zq +
    "').dispatchEvent(new Event('change'));\">Đồng ý</button>";
  var zu = "";
  zr = shuffle(zr);
  zu +=
    '<div class="input-group mb-3"><input type="text" class="form-control" id="search-input" value="' +
    zr[0] +
    '" placeholder="Nhập từ khoá bằng tiếng Anh"><button type="button" class="btn btn-primary" id="btn-search-img"><span data-feather="search"></span></button></div>';
  zu += '<div class="mb-1">Tham khảo:</div>';
  zu += '<div class="mb-3">';
  var zv = [
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
  for (kw of zv) {
    zu +=
      '<a class="btn btn-sm small" href="javascript:void(0);" onclick="el(\'search-input\').value=\'' +
      kw +
      "';el('btn-search-img').click();\">" +
      kw +
      "</a>";
  }
  zu += "</div>";
  zu += "";
  var zw = "";
  if (zo > 0 && zp > 0) {
    zw = 'data-width="' + zo + '" data-height="' + zp + '"';
  }
  if (zs !== "") {
    zw += ' data-class="' + zs + '"';
  }
  zu += '<div id="photo-gallery" class="row g-3 mb-3" ' + zw + "></div>";
  zu += '<input type="hidden" id="selected-img" value="" >';
  zu +=
    '<div class="d-grid gap-2"><button type="button" class="btn btn-primary" id="load-more">Xem thêm</button></div>';
  el("modal-title").innerHTML =
    '<span data-feather="image"></span> Chọn ảnh nền từ unsplash.com';
  el("modal-body").innerHTML = zu;
  el("modal-footer").innerHTML = zt;
  el("modal-dialog").classList.add("modal-lg");
  feather.replace();
  var zx = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  zx.show();
  document.querySelector(".modal-backdrop").style.zIndex = "1040";
  el("myModal").parentNode.style.zIndex = "1050";
  el("myModal").addEventListener("hidden.bs.modal", function () {
    document.querySelector(".modal-backdrop").style.zIndex = "";
    el("myModal").parentNode.style.zIndex = "";
    el("modal-dialog").classList.remove("modal-lg");
  });
  el("btn-search-img").addEventListener("click", function (zy) {
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
  el("search-input").addEventListener("keyup", function (zz) {
    if (zz.key === "Enter") {
      el("btn-search-img").click();
    }
  });
}
let editableElement = document.querySelector("#sector_list");
editableElement.addEventListener("paste", function (aaa) {
  aaa.preventDefault();
  const aab = (aaa.clipboardData || window.clipboardData).getData("text/plain");
  const aac = aab.split("\n");
  const aad = document.createDocumentFragment();
  aac.forEach((aae) => {
    const aaf = document.createElement("div");
    aaf.textContent = aae;
    aad.appendChild(aaf);
  });
  const aag = window.getSelection();
  const aah = aag.getRangeAt(0);
  aah.deleteContents();
  aah.insertNode(aad);
  aah.collapse(false);
  aag.removeAllRanges();
  aag.addRange(aah);
});
editableElement.addEventListener("input", function () {
  if (this.innerHTML.trim() === "" || this.innerHTML.trim() === "<br>") {
    this.innerHTML = "<div><br></div>";
  }
});
el("is_advance").addEventListener("change", function (aai) {
  aai.preventDefault();
  var aaj = (modal_body = modal_footer = "");
  if (this.checked) {
    this.checked = false;
    aaj =
      '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="help-circle"></span> Xác nhận';
    modal_body =
      '<p class="alert alert-warning"><strong>Bạn có chắc chắn muốn chuyển sang chế độ nâng cao không?</strong> Chế độ nâng cao cung cấp nhiều tùy chỉnh hơn, nhưng bạn không thể dán nhiều mục nhập cùng một lúc. Bạn luôn có thể quay lại bằng cách bỏ chọn hộp kiểm "Nâng cao".</p>';
    modal_footer =
      '<a class="text-decoration-none" data-bs-dismiss="modal">Bỏ qua</a> <button type="button" class="btn btn-primary" tabindex="1" data-bs-dismiss="modal" id="btn-agree-change-advanced" onClick="confirmAdvance(1);">Đồng ý</button>';
  } else {
    this.checked = true;
    aaj =
      '<span style="width: 30px;heigh:30px;vertical-align: middle;" data-feather="help-circle"></span> Xác nhận';
    modal_body =
      "Nếu bạn hoàn nguyên từ chế độ nâng cao, bạn có thể mất một số màu. Bạn có chắc chắn muốn tiếp tục không?";
    modal_footer =
      '<a class="text-decoration-none" data-bs-dismiss="modal">Bỏ qua</a> <button type="button" class="btn btn-primary" tabindex="1" data-bs-dismiss="modal" id="btn-agree-change-advanced" tabindex="1" onClick="confirmAdvance(0);">Đồng ý</button>';
  }
  el("modal-title").innerHTML = aaj;
  el("modal-body").innerHTML = modal_body;
  el("modal-footer").innerHTML = modal_footer;
  el("modal-footer").classList.remove("justify-content-center");
  feather.replace();
  var aak = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  aak.show();
  el("btn-agree-change-advanced").focus();
});
el("btn-download").addEventListener("click", function () {
  el("loading-spinner").style.display = "block";
  if (typeof domtoimage === "undefined") {
    var aal = document.createElement("script");
    aal.src =
      "https://cdn.jsdelivr.net/npm/dom-to-image@2.6.0/src/dom-to-image.min.js";
    aal.onload = function () {
      downloadImage();
    };
    document.body.appendChild(aal);
  } else {
    downloadImage();
  }
});

function downloadImage() {
  var aam = document.getElementById("wheel-container");
  setTimeout(function () {
    domtoimage
      .toPng(aam)
      .then(function (aan) {
        return fetch(aan)
          .then((aao) => aao.blob())
          .then((aap) => {
            var aaq = document.createElement("a");
            aaq.href = URL.createObjectURL(aap);
            aaq.download = "vong-quay-may-man.png";
            aaq.click();
            setTimeout(function () {
              el("loading-spinner").style.display = "none";
            }, 3000);
          });
      })
      .catch(function (aar) {
        console.error("Error generating image:", aar);
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
  var aas = new bootstrap.Modal(el("myModal"), {
    backdrop: true,
  });
  aas.show();
  var aat = document.querySelectorAll('input[type="checkbox"].gencode');
  for (var aau = 0; aau < aat.length; aau++) {
    aat[aau].addEventListener("click", function () {
      if (countBoxCheckedByClass("gencode") == 1) {
        for (var aav = 0; aav < aat.length; aav++) {
          if (aat[aav].checked == true) {
            aat[aav].disabled = true;
          }
        }
      } else {
        for (var aav = 0; aav < aat.length; aav++) {
          aat[aav].disabled = false;
        }
      }
    });
  }
  el("btn-gencode").addEventListener("click", function () {
    el("btn-gencode-txt").textContent = "Đang tạo mã...";
    var aaw = parseInt(el("totalCode").value);
    var aax = parseInt(el("lenCode").value);
    var aay = [];
    var aaz = [];
    if (aaw <= 0 || aaw == "") {
      aaw = 10;
    }
    if (aax <= 3 || aax == "") {
      aax = 3;
    }
    while (aay.length < aaw) {
      code = generateCode();
      codelower = code.toLowerCase();
      if (!aaz.includes(codelower)) {
        aay.push(code);
        aaz.push(codelower);
      }
    }
    setTimeout(function () {
      fillWheelContent(aay);
      el("btn-gencode-txt").textContent = "Tạo mã ngay";
      feather.replace();
    }, 500);
  });
}

function generateCode() {
  var aba = parseInt(el("lenCode").value);
  var abb = "";
  if (el("uppercase").checked == true) {
    abb += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (el("lowercase").checked == true) {
    abb += "abcdefghijklmnopqrstuvwxyz";
  }
  if (el("number").checked == true) {
    abb += "0123456789";
  }
  var abd = (abe = aba, abf = abb) =>
    Array.from(crypto.getRandomValues(new Uint32Array(abe)))
      .map((abg) => abf[abg % abf.length])
      .join("");
  var abh = abd();
  return abh;
}

function menuDecorating() {
  var abi = document.querySelector(".template-link>a>span");
  var abj = document.querySelector(".share-link>a>span");
  var abk = document.querySelector(".fullscreen-link>a>span");
  var abl = document.querySelector(".exit-fullscreen-link>a>span");
  var abm = document.querySelector(".settings-link>a>span");
  var abn = document.querySelector(".toggle-link>a>span");
  var abo = document.querySelector(".gallery-link>a");
  var abp = document.querySelector(".my-account-link>a");
  var abq = document.querySelector(".more-link>a");
  var abr = document.querySelector(".download-link>a");
  var abt = document.querySelector(".language-link>a");
  var abu = document.querySelector(".footer-language-link>a");
  if (abi) {
    abi.insertAdjacentHTML(
      "afterbegin",
      '<span data-feather="folder"></span> '
    );
  }
  if (abp) {
    abp.insertAdjacentHTML("afterbegin", '<span data-feather="user"></span> ');
    if (ajax_object.isShowAds != 1) {
      abp.insertAdjacentHTML("afterend", "<sup>ᴾᴿᴼ</sup>");
    }
  }
  if (abj) {
    abj.insertAdjacentHTML(
      "afterbegin",
      '<span data-feather="share-2"></span> '
    );
  }
  if (abk) {
    abk.innerHTML = '<span data-feather="maximize"></span>';
  }
  if (abl) {
    abl.innerHTML = '<span data-feather="minimize"></span>';
  }
  if (abm) {
    abm.insertAdjacentHTML(
      "afterbegin",
      '<span data-feather="settings"></span> '
    );
  }
  if (abn) {
    abn.insertAdjacentHTML("afterbegin", '<span data-feather="eye"></span> ');
  }
  if (abo) {
    abo.insertAdjacentHTML("afterbegin", '<span data-feather="grid"></span> ');
  }
  if (abq) {
    abq.insertAdjacentHTML(
      "afterbegin",
      '<span data-feather="more-vertical"></span> '
    );
  }
  if (abr) {
    abr.innerHTML = '<span data-feather="download"></span>';
  }
  if (abt) {
    abt.insertAdjacentHTML("afterbegin", '<span data-feather="globe"></span> ');
  }
  if (abu) {
    document
      .querySelector(".wp-block-navigation-item.footer-language-link")
      .classList.remove("turnoff");
    abu.classList.add("d-flex");
    abu.classList.add("align-items-center");
    abu.innerHTML =
      '<span class="me-2" style="font-size:24px">\uD83C\uDDFB\uD83C\uDDF3</span> Tiếng Việt';
  }
  feather.replace();
}
window.addEventListener("DOMContentLoaded", (abv) => {
  var abw = getWheelSettingInArray();
  if (abw) {
    var abx = abw.title;
    var aby = abw.desc;
    var abz = abw.start_sound;
    var aca = abw.end_sound;
    var acb = abw.duration;
    var acc = abw.show_confetti;
    var acd = abw.show_popup;
    var ace = abw.popup_label;
    var acf = abw.show_remove_button;
    var acg = abw.colors;
    var ach = abw.custom_bg_color;
    var aci = abw.custom_color;
    var acj = abw.custom_bg_img;
    var ack = abw.btn_spin_label;
    var acl = "";
    var acm = abw.is_stroke;
    var acn = abw.entries;
    var aco = "color";
    var acp = "";
    var acq = abw.is_advance;
    el("start_sound").value = abz;
    el("end_sound").value = aca;
    el("duration").value = acb;
    if (acc == "yes") {
      el("show_confetti").checked = true;
    } else {
      el("show_confetti").checked = false;
    }
    if (acd == "yes") {
      el("show_popup").checked = true;
    } else {
      el("show_popup").checked = false;
    }
    if (acf == "yes") {
      el("show_remove_button").checked = true;
    } else {
      el("show_remove_button").checked = false;
    }
    if (acm == "yes") {
      el("is_stroke").checked = true;
    } else {
      el("is_stroke").checked = false;
    }
    if (abw.hasOwnProperty("btn_spin_img")) {
      acl = abw.btn_spin_img;
      el("btn-spin-img").value = acl;
    }
    if (abw.hasOwnProperty("type")) {
      aco = abw.type;
      setWheelType(aco);
      if (abw.hasOwnProperty("cover_img")) {
        acp = abw.cover_img;
        el("cover_img_display").src = acp;
        el("cover_img").value = acp;
      }
    }
    if (abw.hasOwnProperty("show_border")) {
      if (abw.show_border == "yes") {
        el("show_border").checked = true;
        el("custom_border_color").classList.remove("d-none");
      } else {
        el("show_border").checked = false;
        el("custom_border_color").classList.add("d-none");
      }
      el("border_color").value = abw.border_color;
      el("diamond_color").value = abw.diamond_color;
    }
    var acr = document.getElementsByName("chkcolor");
    if (acr.length) {
      for (var acs of acr) {
        acs.checked = false;
      }
    }
    if (acg.length) {
      for (var act of acg) {
        el("chkcolor-" + act.key).checked = true;
        el("color-" + act.key).value = act.value;
      }
    }
    el("popup_label").value = ace;
    el("custom-bg-color").value = ach;
    el("custom-color").value = aci;
    el("btn-spin-label").value = ack;
    root.style.setProperty("--custom_bg_color", ach);
    root.style.setProperty("--custom_color", aci);
    if (acj) {
      setBackgroundImage(acj, "update");
    }
    fillTitleDesc(abx, aby);
    if (acq == 1) {
      el("is_advance").checked = true;
    } else {
      el("is_advance").checked = false;
    }
    fillEntries(acn, acq);
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
    const acu = getWithExpiry("isAlertExpired");
    if (!acu) {
      const acv = document.querySelectorAll(".modal.show");
      if (acv.length == 0) {
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
          var acw = new bootstrap.Modal(el("myModal"), {
            backdrop: "static",
            keyboard: false,
          });
          acw.show();
          setWithExpiry("isAlertExpired", 1, 30);
        }, 30000);
      }
    }
  }
  feather.replace();
});
