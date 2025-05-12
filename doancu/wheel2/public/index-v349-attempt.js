window.DENSITY = 100;
window.TARGETS = ["Beatriz", "Ali"];
const vF = (
  i,
  m = vF,
  d = (m.f ||= [
    "assets/index.esm-v349.js",
    "assets/index.esm2017-v349.js",
    "assets/index.esm-v3493.js",
    "assets/index.esm-v3492.js",
    "assets/esm-v349.js",
    "assets/_commonjsHelpers-v349.js",
    "assets/FaqPage-v349.js",
    "assets/QToolbar-v349.js",
    "assets/QLayout-v349.js",
    "assets/QPage-v349.js",
    "assets/QPageContainer-v349.js",
    "assets/AppFooter-v349.js",
    "assets/use-quasar-v349.js",
    "assets/ServerFunctions-v349.js",
    "assets/_plugin-vue_export-helper-v349.js",
    "assets/AppFooter-BhUctadA.css",
    "assets/AppToolbarSimple-v349.js",
    "assets/QToolbarTitle-v349.js",
    "assets/DarkModeToggle.vue_vue_type_script_setup_true_lang-v349.js",
    "assets/AppToolbarSimple-D5i9NBCH.css",
    "assets/QBadge-v349.js",
    "assets/FaqPage-D2_iNsTb.css",
    "assets/TutorialsPage-v349.js",
    "assets/QVideo-v349.js",
    "assets/use-ratio-v349.js",
    "assets/ClassroomPage-v349.js",
    "assets/PrivacyPolicyPage-v349.js",
    "assets/QMarkupTable-v349.js",
    "assets/PrivacyPolicyPage-cuqVKRk3.css",
    "assets/TermsOfServicePage-v349.js",
    "assets/ChangelogPage-v349.js",
    "assets/ChangelogPage-BfNF1wzF.css",
    "assets/GalleryPage-v349.js",
    "assets/dynamic-import-helper-v349.js",
    "assets/GallerySearch-v349.js",
    "assets/QSpace-v349.js",
    "assets/QChip-v349.js",
    "assets/position-engine-v349.js",
    "assets/Messenger-v349.js",
    "assets/GallerySearch-bMFmiIxA.css",
    "assets/ApiPage-v349.js",
    "assets/AboutCard-v349.js",
    "assets/user-store-v349.js",
    "assets/ApiPage-67p9aTe_.css",
    "assets/EditWheelPage-v349.js",
    "assets/QMenu-v349.js",
    "assets/DialogCloseIcon-v349.js",
    "assets/SpinningWheel-v349.js",
    "assets/SpinningWheel-DNjj7Fjb.css",
    "assets/ConfettiLauncher-v349.js",
    "assets/ConfettiLauncher--ozpTpaZ.css",
    "assets/LoginDialog.vue_vue_type_script_setup_true_lang-v349.js",
    "assets/WheelInfoCard-v349.js",
    "assets/WheelInfoCard-BqpjfE0Z.css",
    "assets/QImg-v349.js",
    "assets/vue.BYLJNEcq-v349.js",
    "assets/EditWheelPage-DbAP9JZC.css",
    "assets/SharedWheelPage-v349.js",
    "assets/SharedWheelPage-Dnv5p35Z.css",
    "assets/ExportPage-v349.js",
    "assets/ExportPage-0Sx1av4-.css",
    "assets/TranslationPage-v349.js",
    "assets/MigrateAccountPage-v349.js",
    "assets/MigrateAccountPage-D3C9dvDh.css",
    "assets/AdminPage-v349.js",
    "assets/QBreadcrumbs-v349.js",
    "assets/AdminPage-Cp1v64oL.css",
    "assets/ReviewWheelPage-v349.js",
    "assets/ReviewWheelPage-DMgnrINq.css",
    "assets/GalleryReviewPage-v349.js",
    "assets/GalleryReviewPage-BBPjkTcw.css",
    "assets/AdminUserPage-v349.js",
    "assets/i18n-v349.js",
    "assets/en-US-v349.js",
    "assets/head-v349.js",
  ])
) => i.map((i) => d[i]);
const vF2 = (function () {
  const t =
    typeof document !== "undefined" && document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) {
    return "modulepreload";
  } else {
    return "preload";
  }
})();
const vF3 = function (e) {
  return "/" + e;
};
const vO = {};
const vF4 = function (t, n, r) {
  let i = Promise.resolve();
  if (n && n.length > 0) {
    let o = function (c) {
      return Promise.all(
        c.map((u) =>
          Promise.resolve(u).then(
            (f) => ({
              status: "fulfilled",
              value: f,
            }),
            (f) => ({
              status: "rejected",
              reason: f,
            })
          )
        )
      );
    };
    document.getElementsByTagName("link");
    const a = document.querySelector("meta[property=csp-nonce]");
    const l = a?.nonce || a?.getAttribute("nonce");
    i = o(
      n.map((c) => {
        c = vF3(c);
        if (c in vO) {
          return;
        }
        vO[c] = true;
        const u = c.endsWith(".css");
        const f = u ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${c}"]${f}`)) {
          return;
        }
        const d = document.createElement("link");
        d.rel = u ? "stylesheet" : vF2;
        if (!u) {
          d.as = "script";
        }
        d.crossOrigin = "";
        d.href = c;
        if (l) {
          d.setAttribute("nonce", l);
        }
        document.head.appendChild(d);
        if (u) {
          return new Promise((h, p) => {
            d.addEventListener("load", h);
            d.addEventListener("error", () =>
              p(new Error(`Unable to preload CSS for ${c}`))
            );
          });
        }
      })
    );
  }
  function s(o) {
    const a = new Event("vite:preloadError", {
      cancelable: true,
    });
    a.payload = o;
    window.dispatchEvent(a);
    if (!a.defaultPrevented) {
      throw o;
    }
  }
  return i.then((o) => {
    for (const a of o || []) {
      if (a.status === "rejected") {
        s(a.reason);
      }
    }
    return t().catch(s);
  });
};
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function f2(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) {
    t[n] = 1;
  }
  return (n) => n in t;
}
const vO2 = {};
const vA = [];
const vF5 = () => {};
const vF6 = () => false;
const vF7 = (e) =>
  e.charCodeAt(0) === 111 &&
  e.charCodeAt(1) === 110 &&
  (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
const vF8 = (e) => e.startsWith("onUpdate:");
const v2 = Object.assign;
const vF9 = (e, t) => {
  const n = e.indexOf(t);
  if (n > -1) {
    e.splice(n, 1);
  }
};
const v3 = Object.prototype.hasOwnProperty;
const vF10 = (e, t) => v3.call(e, t);
const v4 = Array.isArray;
const vF11 = (e) => vF19(e) === "[object Map]";
const vF12 = (e) => vF19(e) === "[object Set]";
const vF13 = (e) => vF19(e) === "[object RegExp]";
const vF14 = (e) => typeof e == "function";
const vF15 = (e) => typeof e == "string";
const vF16 = (e) => typeof e == "symbol";
const vF17 = (e) => e !== null && typeof e == "object";
const vF18 = (e) => (vF17(e) || vF14(e)) && vF14(e.then) && vF14(e.catch);
const v5 = Object.prototype.toString;
const vF19 = (e) => v5.call(e);
const vF20 = (e) => vF19(e).slice(8, -1);
const vF21 = (e) => vF19(e) === "[object Object]";
const vF22 = (e) =>
  vF15(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
const vF23 = f2(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const vF24 = (e) => {
  const t = Object.create(null);
  return (n) => (t[n] ||= e(n));
};
const v6 = /-(\w)/g;
const vVF24 = vF24((e) => e.replace(v6, (t, n) => (n ? n.toUpperCase() : "")));
const v7 = /\B([A-Z])/g;
const vVF242 = vF24((e) => e.replace(v7, "-$1").toLowerCase());
const vVF243 = vF24((e) => e.charAt(0).toUpperCase() + e.slice(1));
const vVF244 = vF24((e) => (e ? `on${vVF243(e)}` : ""));
const vF25 = (e, t) => !Object.is(e, t);
const vF26 = (e, ...t) => {
  for (let n = 0; n < e.length; n++) {
    e[n](...t);
  }
};
const vF27 = (e, t, n, r = false) => {
  Object.defineProperty(e, t, {
    configurable: true,
    enumerable: false,
    writable: r,
    value: n,
  });
};
const vF28 = (e) => {
  const t = parseFloat(e);
  if (isNaN(t)) {
    return e;
  } else {
    return t;
  }
};
const vF29 = (e) => {
  const t = vF15(e) ? Number(e) : NaN;
  if (isNaN(t)) {
    return e;
  } else {
    return t;
  }
};
let v8;
const vF30 = () =>
  (v8 ||=
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof self !== "undefined"
      ? self
      : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
      ? global
      : {});
function f3(e) {
  if (v4(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      const i = vF15(r) ? f4(r) : f3(r);
      if (i) {
        for (const s in i) {
          t[s] = i[s];
        }
      }
    }
    return t;
  } else if (vF15(e) || vF17(e)) {
    return e;
  }
}
const v9 = /;(?![^(]*\))/g;
const v10 = /:([^]+)/;
const v11 = /\/\*[^]*?\*\//g;
function f4(e) {
  const t = {};
  e.replace(v11, "")
    .split(v9)
    .forEach((n) => {
      if (n) {
        const r = n.split(v10);
        if (r.length > 1) {
          t[r[0].trim()] = r[1].trim();
        }
      }
    });
  return t;
}
function f5(e) {
  let t = "";
  if (vF15(e)) {
    t = e;
  } else if (v4(e)) {
    for (let n = 0; n < e.length; n++) {
      const r = f5(e[n]);
      if (r) {
        t += r + " ";
      }
    }
  } else if (vF17(e)) {
    for (const n in e) {
      if (e[n]) {
        t += n + " ";
      }
    }
  }
  return t.trim();
}
const vLSItemscopeallowfullsc =
  "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
const vF210 = f2(vLSItemscopeallowfullsc);
function f6(e) {
  return !!e || e === "";
}
const vF31 = (e) => !!e && e.__v_isRef === true;
const vF32 = (e) =>
  vF15(e)
    ? e
    : e == null
    ? ""
    : v4(e) || (vF17(e) && (e.toString === v5 || !vF14(e.toString)))
    ? vF31(e)
      ? vF32(e.value)
      : JSON.stringify(e, vF33, 2)
    : String(e);
const vF33 = (e, t) =>
  vF31(t)
    ? vF33(e, t.value)
    : vF11(t)
    ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, i], s) => {
          n[vF34(r, s) + " =>"] = i;
          return n;
        }, {}),
      }
    : vF12(t)
    ? {
        [`Set(${t.size})`]: [...t.values()].map((n) => vF34(n)),
      }
    : vF16(t)
    ? vF34(t)
    : vF17(t) && !v4(t) && !vF21(t)
    ? String(t)
    : t;
const vF34 = (e, t = "") => {
  if (vF16(e)) {
    return `Symbol(${e.description ?? t})`;
  } else {
    return e;
  }
};
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let v12;
class C2 {
  constructor(t = false) {
    this.detached = t;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.parent = v12;
    if (!t && v12) {
      this.index = (v12.scopes ||= []).push(this) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let t;
      let n;
      if (this.scopes) {
        t = 0;
        n = this.scopes.length;
        for (; t < n; t++) {
          this.scopes[t].pause();
        }
      }
      t = 0;
      n = this.effects.length;
      for (; t < n; t++) {
        this.effects[t].pause();
      }
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = false;
      let t;
      let n;
      if (this.scopes) {
        t = 0;
        n = this.scopes.length;
        for (; t < n; t++) {
          this.scopes[t].resume();
        }
      }
      t = 0;
      n = this.effects.length;
      for (; t < n; t++) {
        this.effects[t].resume();
      }
    }
  }
  run(t) {
    if (this._active) {
      const n = v12;
      try {
        v12 = this;
        return t();
      } finally {
        v12 = n;
      }
    }
  }
  on() {
    v12 = this;
  }
  off() {
    v12 = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = false;
      let n;
      let r;
      n = 0;
      r = this.effects.length;
      for (; n < r; n++) {
        this.effects[n].stop();
      }
      this.effects.length = 0;
      n = 0;
      r = this.cleanups.length;
      for (; n < r; n++) {
        this.cleanups[n]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        n = 0;
        r = this.scopes.length;
        for (; n < r; n++) {
          this.scopes[n].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        if (i && i !== this) {
          this.parent.scopes[this.index] = i;
          i.index = this.index;
        }
      }
      this.parent = undefined;
    }
  }
}
function f7(e) {
  return new C2(e);
}
function f8() {
  return v12;
}
function f9(e, t = false) {
  if (v12) {
    v12.cleanups.push(e);
  }
}
let v13;
const v14 = new WeakSet();
class C3 {
  constructor(t) {
    this.fn = t;
    this.deps = undefined;
    this.depsTail = undefined;
    this.flags = 5;
    this.next = undefined;
    this.cleanup = undefined;
    this.scheduler = undefined;
    if (v12 && v12.active) {
      v12.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (v14.has(this)) {
        v14.delete(this);
        this.trigger();
      }
    }
  }
  notify() {
    if ((!(this.flags & 2) || !!(this.flags & 32)) && !(this.flags & 8)) {
      f10(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    f21(this);
    f13(this);
    const t = v13;
    const n = v17;
    v13 = this;
    v17 = true;
    try {
      return this.fn();
    } finally {
      f14(this);
      v13 = t;
      v17 = n;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) {
        f17(t);
      }
      this.deps = this.depsTail = undefined;
      f21(this);
      if (this.onStop) {
        this.onStop();
      }
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      v14.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  runIfDirty() {
    if (f15(this)) {
      this.run();
    }
  }
  get dirty() {
    return f15(this);
  }
}
let vLN0 = 0;
let v15;
let v16;
function f10(e, t = false) {
  e.flags |= 8;
  if (t) {
    e.next = v16;
    v16 = e;
    return;
  }
  e.next = v15;
  v15 = e;
}
function f11() {
  vLN0++;
}
function f12() {
  if (--vLN0 > 0) {
    return;
  }
  if (v16) {
    let t = v16;
    for (v16 = undefined; t; ) {
      const n = t.next;
      t.next = undefined;
      t.flags &= -9;
      t = n;
    }
  }
  let e;
  while (v15) {
    let t = v15;
    for (v15 = undefined; t; ) {
      const n = t.next;
      t.next = undefined;
      t.flags &= -9;
      if (t.flags & 1) {
        try {
          t.trigger();
        } catch (r) {
          e ||= r;
        }
      }
      t = n;
    }
  }
  if (e) {
    throw e;
  }
}
function f13(e) {
  for (let t = e.deps; t; t = t.nextDep) {
    t.version = -1;
    t.prevActiveLink = t.dep.activeLink;
    t.dep.activeLink = t;
  }
}
function f14(e) {
  let t;
  let n = e.depsTail;
  let r = n;
  while (r) {
    const i = r.prevDep;
    if (r.version === -1) {
      if (r === n) {
        n = i;
      }
      f17(r);
      f18(r);
    } else {
      t = r;
    }
    r.dep.activeLink = r.prevActiveLink;
    r.prevActiveLink = undefined;
    r = i;
  }
  e.deps = t;
  e.depsTail = n;
}
function f15(e) {
  for (let t = e.deps; t; t = t.nextDep) {
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (f16(t.dep.computed) || t.dep.version !== t.version))
    ) {
      return true;
    }
  }
  return !!e._dirty;
}
function f16(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === vLN02)
  ) {
    return;
  }
  e.globalVersion = vLN02;
  const t = e.dep;
  e.flags |= 2;
  if (t.version > 0 && !e.isSSR && e.deps && !f15(e)) {
    e.flags &= -3;
    return;
  }
  const n = v13;
  const r = v17;
  v13 = e;
  v17 = true;
  try {
    f13(e);
    const i = e.fn(e._value);
    if (t.version === 0 || vF25(i, e._value)) {
      e._value = i;
      t.version++;
    }
  } catch (i) {
    t.version++;
    throw i;
  } finally {
    v13 = n;
    v17 = r;
    f14(e);
    e.flags &= -3;
  }
}
function f17(e, t = false) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r) {
    r.nextSub = i;
    e.prevSub = undefined;
  }
  if (i) {
    i.prevSub = r;
    e.nextSub = undefined;
  }
  if (n.subs === e && ((n.subs = r), !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep) {
      f17(s, true);
    }
  }
  if (!t && !--n.sc && n.map) {
    n.map.delete(n.key);
  }
}
function f18(e) {
  const { prevDep: t, nextDep: n } = e;
  if (t) {
    t.nextDep = n;
    e.prevDep = undefined;
  }
  if (n) {
    n.prevDep = t;
    e.nextDep = undefined;
  }
}
let v17 = true;
const vA2 = [];
function f19() {
  vA2.push(v17);
  v17 = false;
}
function f20() {
  const e = vA2.pop();
  v17 = e === undefined ? true : e;
}
function f21(e) {
  const { cleanup: t } = e;
  e.cleanup = undefined;
  if (t) {
    const n = v13;
    v13 = undefined;
    try {
      t();
    } finally {
      v13 = n;
    }
  }
}
let vLN02 = 0;
class C4 {
  constructor(t, n) {
    this.sub = t;
    this.dep = n;
    this.version = n.version;
    this.nextDep =
      this.prevDep =
      this.nextSub =
      this.prevSub =
      this.prevActiveLink =
        undefined;
  }
}
class C5 {
  constructor(t) {
    this.computed = t;
    this.version = 0;
    this.activeLink = undefined;
    this.subs = undefined;
    this.map = undefined;
    this.key = undefined;
    this.sc = 0;
  }
  track(t) {
    if (!v13 || !v17 || v13 === this.computed) {
      return;
    }
    let n = this.activeLink;
    if (n === undefined || n.sub !== v13) {
      n = this.activeLink = new C4(v13, this);
      if (v13.deps) {
        n.prevDep = v13.depsTail;
        v13.depsTail.nextDep = n;
        v13.depsTail = n;
      } else {
        v13.deps = v13.depsTail = n;
      }
      f22(n);
    } else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep;
      if (n.prevDep) {
        n.prevDep.nextDep = r;
      }
      n.prevDep = v13.depsTail;
      n.nextDep = undefined;
      v13.depsTail.nextDep = n;
      v13.depsTail = n;
      if (v13.deps === n) {
        v13.deps = r;
      }
    }
    return n;
  }
  trigger(t) {
    this.version++;
    vLN02++;
    this.notify(t);
  }
  notify(t) {
    f11();
    try {
      for (let n = this.subs; n; n = n.prevSub) {
        if (n.sub.notify()) {
          n.sub.dep.notify();
        }
      }
    } finally {
      f12();
    }
  }
}
function f22(e) {
  e.dep.sc++;
  if (e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) {
        f22(r);
      }
    }
    const n = e.dep.subs;
    if (n !== e) {
      e.prevSub = n;
      if (n) {
        n.nextSub = e;
      }
    }
    e.dep.subs = e;
  }
}
const v18 = new WeakMap();
const vSymbol = Symbol("");
const vSymbol2 = Symbol("");
const vSymbol3 = Symbol("");
function f23(e, t, n) {
  if (v17 && v13) {
    let r = v18.get(e);
    if (!r) {
      v18.set(e, (r = new Map()));
    }
    let i = r.get(n);
    if (!i) {
      r.set(n, (i = new C5()));
      i.map = r;
      i.key = n;
    }
    i.track();
  }
}
function f24(e, t, n, r, i, s) {
  const o = v18.get(e);
  if (!o) {
    vLN02++;
    return;
  }
  const a = (l) => {
    if (l) {
      l.trigger();
    }
  };
  f11();
  if (t === "clear") {
    o.forEach(a);
  } else {
    const l = v4(e);
    const c = l && vF22(n);
    if (l && n === "length") {
      const u = Number(r);
      o.forEach((f, d) => {
        if (d === "length" || d === vSymbol3 || (!vF16(d) && d >= u)) {
          a(f);
        }
      });
    } else {
      if (n !== undefined || o.has(undefined)) {
        a(o.get(n));
      }
      if (c) {
        a(o.get(vSymbol3));
      }
      switch (t) {
        case "add":
          if (l) {
            if (c) {
              a(o.get("length"));
            }
          } else {
            a(o.get(vSymbol));
            if (vF11(e)) {
              a(o.get(vSymbol2));
            }
          }
          break;
        case "delete":
          if (!l) {
            a(o.get(vSymbol));
            if (vF11(e)) {
              a(o.get(vSymbol2));
            }
          }
          break;
        case "set":
          if (vF11(e)) {
            a(o.get(vSymbol));
          }
          break;
      }
    }
  }
  f12();
}
function f25(e, t) {
  const n = v18.get(e);
  return n && n.get(t);
}
function f26(e) {
  const t = f49(e);
  if (t === e) {
    return t;
  } else {
    f23(t, "iterate", vSymbol3);
    if (f47(e)) {
      return t;
    } else {
      return t.map(vF37);
    }
  }
}
function f27(e) {
  f23((e = f49(e)), "iterate", vSymbol3);
  return e;
}
const vO3 = {
  __proto__: null,
  [Symbol.iterator]() {
    return f28(this, Symbol.iterator, vF37);
  },
  concat(...e) {
    return f26(this).concat(...e.map((t) => (v4(t) ? f26(t) : t)));
  },
  entries() {
    return f28(this, "entries", (e) => {
      e[1] = vF37(e[1]);
      return e;
    });
  },
  every(e, t) {
    return f29(this, "every", e, t, undefined, arguments);
  },
  filter(e, t) {
    return f29(this, "filter", e, t, (n) => n.map(vF37), arguments);
  },
  find(e, t) {
    return f29(this, "find", e, t, vF37, arguments);
  },
  findIndex(e, t) {
    return f29(this, "findIndex", e, t, undefined, arguments);
  },
  findLast(e, t) {
    return f29(this, "findLast", e, t, vF37, arguments);
  },
  findLastIndex(e, t) {
    return f29(this, "findLastIndex", e, t, undefined, arguments);
  },
  forEach(e, t) {
    return f29(this, "forEach", e, t, undefined, arguments);
  },
  includes(...e) {
    return f31(this, "includes", e);
  },
  indexOf(...e) {
    return f31(this, "indexOf", e);
  },
  join(e) {
    return f26(this).join(e);
  },
  lastIndexOf(...e) {
    return f31(this, "lastIndexOf", e);
  },
  map(e, t) {
    return f29(this, "map", e, t, undefined, arguments);
  },
  pop() {
    return f32(this, "pop");
  },
  push(...e) {
    return f32(this, "push", e);
  },
  reduce(e, ...t) {
    return f30(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return f30(this, "reduceRight", e, t);
  },
  shift() {
    return f32(this, "shift");
  },
  some(e, t) {
    return f29(this, "some", e, t, undefined, arguments);
  },
  splice(...e) {
    return f32(this, "splice", e);
  },
  toReversed() {
    return f26(this).toReversed();
  },
  toSorted(e) {
    return f26(this).toSorted(e);
  },
  toSpliced(...e) {
    return f26(this).toSpliced(...e);
  },
  unshift(...e) {
    return f32(this, "unshift", e);
  },
  values() {
    return f28(this, "values", vF37);
  },
};
function f28(e, t, n) {
  const r = f27(e);
  const i = r[t]();
  if (r !== e && !f47(e)) {
    i._next = i.next;
    i.next = () => {
      const s = i._next();
      s.value &&= n(s.value);
      return s;
    };
  }
  return i;
}
const v19 = Array.prototype;
function f29(e, t, n, r, i, s) {
  const o = f27(e);
  const a = o !== e && !f47(e);
  const l = o[t];
  if (l !== v19[t]) {
    const f = l.apply(e, s);
    if (a) {
      return vF37(f);
    } else {
      return f;
    }
  }
  let c = n;
  if (o !== e) {
    if (a) {
      c = function (f, d) {
        return n.call(this, vF37(f), d, e);
      };
    } else if (n.length > 2) {
      c = function (f, d) {
        return n.call(this, f, d, e);
      };
    }
  }
  const u = l.call(o, c, r);
  if (a && i) {
    return i(u);
  } else {
    return u;
  }
}
function f30(e, t, n, r) {
  const i = f27(e);
  let s = n;
  if (i !== e) {
    if (f47(e)) {
      if (n.length > 3) {
        s = function (o, a, l) {
          return n.call(this, o, a, l, e);
        };
      }
    } else {
      s = function (o, a, l) {
        return n.call(this, o, vF37(a), l, e);
      };
    }
  }
  return i[t](s, ...r);
}
function f31(e, t, n) {
  const r = f49(e);
  f23(r, "iterate", vSymbol3);
  const i = r[t](...n);
  if ((i === -1 || i === false) && f48(n[0])) {
    n[0] = f49(n[0]);
    return r[t](...n);
  } else {
    return i;
  }
}
function f32(e, t, n = []) {
  f19();
  f11();
  const r = f49(e)[t].apply(e, n);
  f12();
  f20();
  return r;
}
const vF211 = f2("__proto__,__v_isRef,__isVue");
const v20 = new Set(
  Object.getOwnPropertyNames(Symbol)
    .filter((e) => e !== "arguments" && e !== "caller")
    .map((e) => Symbol[e])
    .filter(vF16)
);
function f33(e) {
  if (!vF16(e)) {
    e = String(e);
  }
  const t = f49(this);
  f23(t, "has", e);
  return t.hasOwnProperty(e);
}
class C6 {
  constructor(t = false, n = false) {
    this._isReadonly = t;
    this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") {
      return t.__v_skip;
    }
    const i = this._isReadonly;
    const s = this._isShallow;
    if (n === "__v_isReactive") {
      return !i;
    }
    if (n === "__v_isReadonly") {
      return i;
    }
    if (n === "__v_isShallow") {
      return s;
    }
    if (n === "__v_raw") {
      if (
        r === (i ? (s ? v28 : v27) : s ? v26 : v25).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
      ) {
        return t;
      } else {
        return undefined;
      }
    }
    const o = v4(t);
    if (!i) {
      let l;
      if (o && (l = vO3[n])) {
        return l;
      }
      if (n === "hasOwnProperty") {
        return f33;
      }
    }
    const a = Reflect.get(t, n, f51(t) ? t : r);
    if ((vF16(n) ? v20.has(n) : vF211(n)) || (i || f23(t, "get", n), s)) {
      return a;
    } else if (f51(a)) {
      if (o && vF22(n)) {
        return a;
      } else {
        return a.value;
      }
    } else if (vF17(a)) {
      if (i) {
        return f42(a);
      } else {
        return f40(a);
      }
    } else {
      return a;
    }
  }
}
class C7 extends C6 {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, r, i) {
    let s = t[n];
    if (!this._isShallow) {
      const l = f46(s);
      if (!f47(r) && !f46(r)) {
        s = f49(s);
        r = f49(r);
      }
      if (!v4(t) && f51(s) && !f51(r)) {
        if (l) {
          return false;
        } else {
          s.value = r;
          return true;
        }
      }
    }
    const o = v4(t) && vF22(n) ? Number(n) < t.length : vF10(t, n);
    const a = Reflect.set(t, n, r, f51(t) ? t : i);
    if (t === f49(i)) {
      if (o) {
        if (vF25(r, s)) {
          f24(t, "set", n, r);
        }
      } else {
        f24(t, "add", n, r);
      }
    }
    return a;
  }
  deleteProperty(t, n) {
    const r = vF10(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    if (i && r) {
      f24(t, "delete", n, undefined);
    }
    return i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    if (!vF16(n) || !v20.has(n)) {
      f23(t, "has", n);
    }
    return r;
  }
  ownKeys(t) {
    f23(t, "iterate", v4(t) ? "length" : vSymbol);
    return Reflect.ownKeys(t);
  }
}
class C8 extends C6 {
  constructor(t = false) {
    super(true, t);
  }
  set(t, n) {
    return true;
  }
  deleteProperty(t, n) {
    return true;
  }
}
const v21 = new C7();
const v22 = new C8();
const v23 = new C7(true);
const v24 = new C8(true);
const vF35 = (e) => e;
const vF36 = (e) => Reflect.getPrototypeOf(e);
function f34(e, t, n) {
  return function (...r) {
    const i = this.__v_raw;
    const s = f49(i);
    const o = vF11(s);
    const a = e === "entries" || (e === Symbol.iterator && o);
    const l = e === "keys" && o;
    const c = i[e](...r);
    const u = n ? vF35 : t ? vF38 : vF37;
    if (!t) {
      f23(s, "iterate", l ? vSymbol2 : vSymbol);
    }
    return {
      next() {
        const { value: f, done: d } = c.next();
        if (d) {
          return {
            value: f,
            done: d,
          };
        } else {
          return {
            value: a ? [u(f[0]), u(f[1])] : u(f),
            done: d,
          };
        }
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  };
}
function f35(e) {
  return function (...t) {
    if (e === "delete") {
      return false;
    } else if (e === "clear") {
      return undefined;
    } else {
      return this;
    }
  };
}
function f36(e, t) {
  const n = {
    get(i) {
      const s = this.__v_raw;
      const o = f49(s);
      const a = f49(i);
      if (!e) {
        if (vF25(i, a)) {
          f23(o, "get", i);
        }
        f23(o, "get", a);
      }
      const { has: l } = vF36(o);
      const c = t ? vF35 : e ? vF38 : vF37;
      if (l.call(o, i)) {
        return c(s.get(i));
      }
      if (l.call(o, a)) {
        return c(s.get(a));
      }
      if (s !== o) {
        s.get(i);
      }
    },
    get size() {
      const i = this.__v_raw;
      if (!e) {
        f23(f49(i), "iterate", vSymbol);
      }
      return Reflect.get(i, "size", i);
    },
    has(i) {
      const s = this.__v_raw;
      const o = f49(s);
      const a = f49(i);
      if (!e) {
        if (vF25(i, a)) {
          f23(o, "has", i);
        }
        f23(o, "has", a);
      }
      if (i === a) {
        return s.has(i);
      } else {
        return s.has(i) || s.has(a);
      }
    },
    forEach(i, s) {
      const o = this;
      const a = o.__v_raw;
      const l = f49(a);
      const c = t ? vF35 : e ? vF38 : vF37;
      if (!e) {
        f23(l, "iterate", vSymbol);
      }
      return a.forEach((u, f) => i.call(s, c(u), c(f), o));
    },
  };
  v2(
    n,
    e
      ? {
          add: f35("add"),
          set: f35("set"),
          delete: f35("delete"),
          clear: f35("clear"),
        }
      : {
          add(i) {
            if (!t && !f47(i) && !f46(i)) {
              i = f49(i);
            }
            const s = f49(this);
            if (!vF36(s).has.call(s, i)) {
              s.add(i);
              f24(s, "add", i, i);
            }
            return this;
          },
          set(i, s) {
            if (!t && !f47(s) && !f46(s)) {
              s = f49(s);
            }
            const o = f49(this);
            const { has: a, get: l } = vF36(o);
            let c = a.call(o, i);
            if (!c) {
              i = f49(i);
              c = a.call(o, i);
            }
            const u = l.call(o, i);
            o.set(i, s);
            if (c) {
              if (vF25(s, u)) {
                f24(o, "set", i, s);
              }
            } else {
              f24(o, "add", i, s);
            }
            return this;
          },
          delete(i) {
            const s = f49(this);
            const { has: o, get: a } = vF36(s);
            let l = o.call(s, i);
            if (!l) {
              i = f49(i);
              l = o.call(s, i);
            }
            if (a) {
              a.call(s, i);
            }
            const c = s.delete(i);
            if (l) {
              f24(s, "delete", i, undefined);
            }
            return c;
          },
          clear() {
            const i = f49(this);
            const s = i.size !== 0;
            const o = i.clear();
            if (s) {
              f24(i, "clear", undefined, undefined);
            }
            return o;
          },
        }
  );
  ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    n[i] = f34(i, e, t);
  });
  return n;
}
function f37(e, t) {
  const n = f36(e, t);
  return (r, i, s) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? r
      : Reflect.get(vF10(n, i) && i in r ? n : r, i, s);
}
const vO4 = {
  get: f37(false, false),
};
const vO5 = {
  get: f37(false, true),
};
const vO6 = {
  get: f37(true, false),
};
const vO7 = {
  get: f37(true, true),
};
const v25 = new WeakMap();
const v26 = new WeakMap();
const v27 = new WeakMap();
const v28 = new WeakMap();
function f38(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function f39(e) {
  if (e.__v_skip || !Object.isExtensible(e)) {
    return 0;
  } else {
    return f38(vF20(e));
  }
}
function f40(e) {
  if (f46(e)) {
    return e;
  } else {
    return f44(e, false, v21, vO4, v25);
  }
}
function f41(e) {
  return f44(e, false, v23, vO5, v26);
}
function f42(e) {
  return f44(e, true, v22, vO6, v27);
}
function f43(e) {
  return f44(e, true, v24, vO7, v28);
}
function f44(e, t, n, r, i) {
  if (!vF17(e) || (e.__v_raw && (!t || !e.__v_isReactive))) {
    return e;
  }
  const s = i.get(e);
  if (s) {
    return s;
  }
  const o = f39(e);
  if (o === 0) {
    return e;
  }
  const a = new Proxy(e, o === 2 ? r : n);
  i.set(e, a);
  return a;
}
function f45(e) {
  if (f46(e)) {
    return f45(e.__v_raw);
  } else {
    return !!e && !!e.__v_isReactive;
  }
}
function f46(e) {
  return !!e && !!e.__v_isReadonly;
}
function f47(e) {
  return !!e && !!e.__v_isShallow;
}
function f48(e) {
  if (e) {
    return !!e.__v_raw;
  } else {
    return false;
  }
}
function f49(e) {
  const t = e && e.__v_raw;
  if (t) {
    return f49(t);
  } else {
    return e;
  }
}
function f50(e) {
  if (!vF10(e, "__v_skip") && Object.isExtensible(e)) {
    vF27(e, "__v_skip", true);
  }
  return e;
}
const vF37 = (e) => (vF17(e) ? f40(e) : e);
const vF38 = (e) => (vF17(e) ? f42(e) : e);
function f51(e) {
  if (e) {
    return e.__v_isRef === true;
  } else {
    return false;
  }
}
function f52(e) {
  return f54(e, false);
}
function f53(e) {
  return f54(e, true);
}
function f54(e, t) {
  if (f51(e)) {
    return e;
  } else {
    return new C9(e, t);
  }
}
class C9 {
  constructor(t, n) {
    this.dep = new C5();
    this.__v_isRef = true;
    this.__v_isShallow = false;
    this._rawValue = n ? t : f49(t);
    this._value = n ? t : vF37(t);
    this.__v_isShallow = n;
  }
  get value() {
    this.dep.track();
    return this._value;
  }
  set value(t) {
    const n = this._rawValue;
    const r = this.__v_isShallow || f47(t) || f46(t);
    t = r ? t : f49(t);
    if (vF25(t, n)) {
      this._rawValue = t;
      this._value = r ? t : vF37(t);
      this.dep.trigger();
    }
  }
}
function f55(e) {
  if (f51(e)) {
    return e.value;
  } else {
    return e;
  }
}
function f56(e) {
  if (vF14(e)) {
    return e();
  } else {
    return f55(e);
  }
}
const vO8 = {
  get: (e, t, n) => (t === "__v_raw" ? e : f55(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const i = e[t];
    if (f51(i) && !f51(n)) {
      i.value = n;
      return true;
    } else {
      return Reflect.set(e, t, n, r);
    }
  },
};
function f57(e) {
  if (f45(e)) {
    return e;
  } else {
    return new Proxy(e, vO8);
  }
}
class C10 {
  constructor(t) {
    this.__v_isRef = true;
    this._value = undefined;
    const n = (this.dep = new C5());
    const { get: r, set: i } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r;
    this._set = i;
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function f58(e) {
  return new C10(e);
}
function f59(e) {
  const t = v4(e) ? new Array(e.length) : {};
  for (const n in e) {
    t[n] = f61(e, n);
  }
  return t;
}
class C11 {
  constructor(t, n, r) {
    this._object = t;
    this._key = n;
    this._defaultValue = r;
    this.__v_isRef = true;
    this._value = undefined;
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === undefined ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return f25(f49(this._object), this._key);
  }
}
class C12 {
  constructor(t) {
    this._getter = t;
    this.__v_isRef = true;
    this.__v_isReadonly = true;
    this._value = undefined;
  }
  get value() {
    return (this._value = this._getter());
  }
}
function f60(e, t, n) {
  if (f51(e)) {
    return e;
  } else if (vF14(e)) {
    return new C12(e);
  } else if (vF17(e) && arguments.length > 1) {
    return f61(e, t, n);
  } else {
    return f52(e);
  }
}
function f61(e, t, n) {
  const r = e[t];
  if (f51(r)) {
    return r;
  } else {
    return new C11(e, t, n);
  }
}
class C13 {
  constructor(t, n, r) {
    this.fn = t;
    this.setter = n;
    this._value = undefined;
    this.dep = new C5(this);
    this.__v_isRef = true;
    this.deps = undefined;
    this.depsTail = undefined;
    this.flags = 16;
    this.globalVersion = vLN02 - 1;
    this.next = undefined;
    this.effect = this;
    this.__v_isReadonly = !n;
    this.isSSR = r;
  }
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && v13 !== this) {
      f10(this, true);
      return true;
    }
  }
  get value() {
    const t = this.dep.track();
    f16(this);
    if (t) {
      t.version = this.dep.version;
    }
    return this._value;
  }
  set value(t) {
    if (this.setter) {
      this.setter(t);
    }
  }
}
function f62(e, t, n = false) {
  let r;
  let i;
  if (vF14(e)) {
    r = e;
  } else {
    r = e.get;
    i = e.set;
  }
  return new C13(r, i, n);
}
const vO9 = {};
const v29 = new WeakMap();
let v30;
function f63(e, t = false, n = v30) {
  if (n) {
    let r = v29.get(n);
    if (!r) {
      v29.set(n, (r = []));
    }
    r.push(e);
  }
}
function f64(e, t, n = vO2) {
  const {
    immediate: r,
    deep: i,
    once: s,
    scheduler: o,
    augmentJob: a,
    call: l,
  } = n;
  const c = (y) =>
    i ? y : f47(y) || i === false || i === 0 ? f65(y, 1) : f65(y);
  let u;
  let f;
  let d;
  let h;
  let p = false;
  let E = false;
  if (f51(e)) {
    f = () => e.value;
    p = f47(e);
  } else if (f45(e)) {
    f = () => c(e);
    p = true;
  } else if (v4(e)) {
    E = true;
    p = e.some((y) => f45(y) || f47(y));
    f = () =>
      e.map((y) => {
        if (f51(y)) {
          return y.value;
        }
        if (f45(y)) {
          return c(y);
        }
        if (vF14(y)) {
          if (l) {
            return l(y, 2);
          } else {
            return y();
          }
        }
      });
  } else if (vF14(e)) {
    if (t) {
      f = l ? () => l(e, 2) : e;
    } else {
      f = () => {
        if (d) {
          f19();
          try {
            d();
          } finally {
            f20();
          }
        }
        const y = v30;
        v30 = u;
        try {
          if (l) {
            return l(e, 3, [h]);
          } else {
            return e(h);
          }
        } finally {
          v30 = y;
        }
      };
    }
  } else {
    f = vF5;
  }
  if (t && i) {
    const y = f;
    const x = i === true ? Infinity : i;
    f = () => f65(y(), x);
  }
  const A = f8();
  const b = () => {
    u.stop();
    if (A && A.active) {
      vF9(A.effects, u);
    }
  };
  if (s && t) {
    const y = t;
    t = (...x) => {
      y(...x);
      b();
    };
  }
  let m = E ? new Array(e.length).fill(vO9) : vO9;
  const C = (y) => {
    if (!!(u.flags & 1) && (!!u.dirty || !!y)) {
      if (t) {
        const x = u.run();
        if (i || p || (E ? x.some((L, I) => vF25(L, m[I])) : vF25(x, m))) {
          if (d) {
            d();
          }
          const L = v30;
          v30 = u;
          try {
            const I = [
              x,
              m === vO9 ? undefined : E && m[0] === vO9 ? [] : m,
              h,
            ];
            if (l) {
              l(t, 3, I);
            } else {
              t(...I);
            }
            m = x;
          } finally {
            v30 = L;
          }
        }
      } else {
        u.run();
      }
    }
  };
  if (a) {
    a(C);
  }
  u = new C3(f);
  u.scheduler = o ? () => o(C, false) : C;
  h = (y) => f63(y, false, u);
  d = u.onStop = () => {
    const y = v29.get(u);
    if (y) {
      if (l) {
        l(y, 4);
      } else {
        for (const x of y) {
          x();
        }
      }
      v29.delete(u);
    }
  };
  if (t) {
    if (r) {
      C(true);
    } else {
      m = u.run();
    }
  } else if (o) {
    o(C.bind(null, true), true);
  } else {
    u.run();
  }
  b.pause = u.pause.bind(u);
  b.resume = u.resume.bind(u);
  b.stop = b;
  return b;
}
function f65(e, t = Infinity, n) {
  if (t <= 0 || !vF17(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) {
    return e;
  }
  n.add(e);
  t--;
  if (f51(e)) {
    f65(e.value, t, n);
  } else if (v4(e)) {
    for (let r = 0; r < e.length; r++) {
      f65(e[r], t, n);
    }
  } else if (vF12(e) || vF11(e)) {
    e.forEach((r) => {
      f65(r, t, n);
    });
  } else if (vF21(e)) {
    for (const r in e) {
      f65(e[r], t, n);
    }
    for (const r of Object.getOwnPropertySymbols(e)) {
      if (Object.prototype.propertyIsEnumerable.call(e, r)) {
        f65(e[r], t, n);
      }
    }
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function f66(e, t, n, r) {
  try {
    if (r) {
      return e(...r);
    } else {
      return e();
    }
  } catch (i) {
    f68(i, t, n);
  }
}
function f67(e, t, n, r) {
  if (vF14(e)) {
    const i = f66(e, t, n, r);
    if (i && vF18(i)) {
      i.catch((s) => {
        f68(s, t, n);
      });
    }
    return i;
  }
  if (v4(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++) {
      i.push(f67(e[s], t, n, r));
    }
    return i;
  }
}
function f68(e, t, n, r = true) {
  const i = t ? t.vnode : null;
  const { errorHandler: s, throwUnhandledErrorInProduction: o } =
    (t && t.appContext.config) || vO2;
  if (t) {
    let a = t.parent;
    const l = t.proxy;
    const c = `https://vuejs.org/error-reference/#runtime-${n}`;
    while (a) {
      const u = a.ec;
      if (u) {
        for (let f = 0; f < u.length; f++) {
          if (u[f](e, l, c) === false) {
            return;
          }
        }
      }
      a = a.parent;
    }
    if (s) {
      f19();
      f66(s, null, 10, [e, l, c]);
      f20();
      return;
    }
  }
  f69(e, n, i, r, o);
}
function f69(e, t, n, r = true, i = false) {
  if (i) {
    throw e;
  }
  console.error(e);
}
const vA3 = [];
let v31 = -1;
const vA4 = [];
let v32 = null;
let vLN03 = 0;
const v33 = Promise.resolve();
let v34 = null;
function f70(e) {
  const t = v34 || v33;
  if (e) {
    return t.then(this ? e.bind(this) : e);
  } else {
    return t;
  }
}
function f71(e) {
  let t = v31 + 1;
  let n = vA3.length;
  while (t < n) {
    const r = (t + n) >>> 1;
    const i = vA3[r];
    const s = vF39(i);
    if (s < e || (s === e && i.flags & 2)) {
      t = r + 1;
    } else {
      n = r;
    }
  }
  return t;
}
function f72(e) {
  if (!(e.flags & 1)) {
    const t = vF39(e);
    const n = vA3[vA3.length - 1];
    if (!n || (!(e.flags & 2) && t >= vF39(n))) {
      vA3.push(e);
    } else {
      vA3.splice(f71(t), 0, e);
    }
    e.flags |= 1;
    f73();
  }
}
function f73() {
  v34 ||= v33.then(f77);
}
function f74(e) {
  if (v4(e)) {
    vA4.push(...e);
  } else if (v32 && e.id === -1) {
    v32.splice(vLN03 + 1, 0, e);
  } else if (!(e.flags & 1)) {
    vA4.push(e);
    e.flags |= 1;
  }
  f73();
}
function f75(e, t, n = v31 + 1) {
  for (; n < vA3.length; n++) {
    const r = vA3[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) {
        continue;
      }
      vA3.splice(n, 1);
      n--;
      if (r.flags & 4) {
        r.flags &= -2;
      }
      r();
      if (!(r.flags & 4)) {
        r.flags &= -2;
      }
    }
  }
}
function f76(e) {
  if (vA4.length) {
    const t = [...new Set(vA4)].sort((n, r) => vF39(n) - vF39(r));
    vA4.length = 0;
    if (v32) {
      v32.push(...t);
      return;
    }
    v32 = t;
    vLN03 = 0;
    for (; vLN03 < v32.length; vLN03++) {
      const n = v32[vLN03];
      if (n.flags & 4) {
        n.flags &= -2;
      }
      if (!(n.flags & 8)) {
        n();
      }
      n.flags &= -2;
    }
    v32 = null;
    vLN03 = 0;
  }
}
const vF39 = (e) => (e.id == null ? (e.flags & 2 ? -1 : Infinity) : e.id);
function f77(e) {
  try {
    for (v31 = 0; v31 < vA3.length; v31++) {
      const t = vA3[v31];
      if (t && !(t.flags & 8)) {
        if (t.flags & 4) {
          t.flags &= -2;
        }
        f66(t, t.i, t.i ? 15 : 14);
        if (!(t.flags & 4)) {
          t.flags &= -2;
        }
      }
    }
  } finally {
    for (; v31 < vA3.length; v31++) {
      const t = vA3[v31];
      if (t) {
        t.flags &= -2;
      }
    }
    v31 = -1;
    vA3.length = 0;
    f76();
    v34 = null;
    if (vA3.length || vA4.length) {
      f77();
    }
  }
}
let v35 = null;
let v36 = null;
function f78(e) {
  const t = v35;
  v35 = e;
  v36 = (e && e.type.__scopeId) || null;
  return t;
}
function f79(e, t = v35, n) {
  if (!t || e._n) {
    return e;
  }
  const r = (...i) => {
    if (r._d) {
      f165(-1);
    }
    const s = f78(t);
    let o;
    try {
      o = e(...i);
    } finally {
      f78(s);
      if (r._d) {
        f165(1);
      }
    }
    return o;
  };
  r._n = true;
  r._c = true;
  r._d = true;
  return r;
}
function f80(e, t) {
  if (v35 === null) {
    return e;
  }
  const n = f190(v35);
  const r = (e.dirs ||= []);
  for (let i = 0; i < t.length; i++) {
    let [s, o, a, l = vO2] = t[i];
    if (s) {
      if (vF14(s)) {
        s = {
          mounted: s,
          updated: s,
        };
      }
      if (s.deep) {
        f65(o);
      }
      r.push({
        dir: s,
        instance: n,
        value: o,
        oldValue: undefined,
        arg: a,
        modifiers: l,
      });
    }
  }
  return e;
}
function f81(e, t, n, r) {
  const i = e.dirs;
  const s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    if (s) {
      a.oldValue = s[o].value;
    }
    let l = a.dir[r];
    if (l) {
      f19();
      f67(l, n, 8, [e.el, a, e, t]);
      f20();
    }
  }
}
const vSymbol4 = Symbol("_vte");
const vF40 = (e) => e.__isTeleport;
const vF41 = (e) => e && (e.disabled || e.disabled === "");
const vF42 = (e) => e && (e.defer || e.defer === "");
const vF43 = (e) =>
  typeof SVGElement !== "undefined" && e instanceof SVGElement;
const vF44 = (e) =>
  typeof MathMLElement == "function" && e instanceof MathMLElement;
const vF45 = (e, t) => {
  const n = e && e.to;
  if (vF15(n)) {
    if (t) {
      return t(n);
    } else {
      return null;
    }
  } else {
    return n;
  }
};
const vO10 = {
  name: "Teleport",
  __isTeleport: true,
  process(e, t, n, r, i, s, o, a, l, c) {
    const {
      mc: u,
      pc: f,
      pbc: d,
      o: { insert: h, querySelector: p, createText: E, createComment: A },
    } = c;
    const b = vF41(t.props);
    let { shapeFlag: m, children: C, dynamicChildren: y } = t;
    if (e == null) {
      const x = (t.el = E(""));
      const L = (t.anchor = E(""));
      h(x, n, r);
      h(L, n, r);
      const I = (k, R) => {
        if (m & 16) {
          if (i && i.isCE) {
            i.ce._teleportTarget = k;
          }
          u(C, k, R, i, s, o, a, l);
        }
      };
      const B = () => {
        const k = (t.target = vF45(t.props, p));
        const R = f85(k, t, E, h);
        if (k) {
          if (o !== "svg" && vF43(k)) {
            o = "svg";
          } else if (o !== "mathml" && vF44(k)) {
            o = "mathml";
          }
          if (!b) {
            I(k, R);
            f84(t, false);
          }
        }
      };
      if (b) {
        I(n, L);
        f84(t, true);
      }
      if (vF42(t.props)) {
        vIg(() => {
          B();
          t.el.__isMounted = true;
        }, s);
      } else {
        B();
      }
    } else {
      if (vF42(t.props) && !e.el.__isMounted) {
        vIg(() => {
          vO10.process(e, t, n, r, i, s, o, a, l, c);
          delete e.el.__isMounted;
        }, s);
        return;
      }
      t.el = e.el;
      t.targetStart = e.targetStart;
      const x = (t.anchor = e.anchor);
      const L = (t.target = e.target);
      const I = (t.targetAnchor = e.targetAnchor);
      const B = vF41(e.props);
      const k = B ? n : L;
      const R = B ? x : I;
      if (o === "svg" || vF43(L)) {
        o = "svg";
      } else if (o === "mathml" || vF44(L)) {
        o = "mathml";
      }
      if (y) {
        d(e.dynamicChildren, y, k, i, s, o, a);
        f144(e, t, true);
      } else if (!l) {
        f(e, t, k, R, i, s, o, a, false);
      }
      if (b) {
        if (B) {
          if (t.props && e.props && t.props.to !== e.props.to) {
            t.props.to = e.props.to;
          }
        } else {
          f82(t, n, x, c, 1);
        }
      } else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const V = (t.target = vF45(t.props, p));
        if (V) {
          f82(t, V, null, c, 0);
        }
      } else if (B) {
        f82(t, L, I, c, 1);
      }
      f84(t, b);
    }
  },
  remove(e, t, n, { um: r, o: { remove: i } }, s) {
    const {
      shapeFlag: o,
      children: a,
      anchor: l,
      targetStart: c,
      targetAnchor: u,
      target: f,
      props: d,
    } = e;
    if (f) {
      i(c);
      i(u);
    }
    if (s) {
      i(l);
    }
    if (o & 16) {
      const h = s || !vF41(d);
      for (let p = 0; p < a.length; p++) {
        const E = a[p];
        r(E, t, n, h, !!E.dynamicChildren);
      }
    }
  },
  move: f82,
  hydrate: f83,
};
function f82(e, t, n, { o: { insert: r }, m: i }, s = 2) {
  if (s === 0) {
    r(e.targetAnchor, t, n);
  }
  const { el: o, anchor: a, shapeFlag: l, children: c, props: u } = e;
  const f = s === 2;
  if (f) {
    r(o, t, n);
  }
  if ((!f || vF41(u)) && l & 16) {
    for (let d = 0; d < c.length; d++) {
      i(c[d], t, n, 2);
    }
  }
  if (f) {
    r(a, t, n);
  }
}
function f83(
  e,
  t,
  n,
  r,
  i,
  s,
  {
    o: {
      nextSibling: o,
      parentNode: a,
      querySelector: l,
      insert: c,
      createText: u,
    },
  },
  f
) {
  const d = (t.target = vF45(t.props, l));
  if (d) {
    const h = vF41(t.props);
    const p = d._lpa || d.firstChild;
    if (t.shapeFlag & 16) {
      if (h) {
        t.anchor = f(o(e), t, a(e), n, r, i, s);
        t.targetStart = p;
        t.targetAnchor = p && o(p);
      } else {
        t.anchor = o(e);
        let E = p;
        while (E) {
          if (E && E.nodeType === 8) {
            if (E.data === "teleport start anchor") {
              t.targetStart = E;
            } else if (E.data === "teleport anchor") {
              t.targetAnchor = E;
              d._lpa = t.targetAnchor && o(t.targetAnchor);
              break;
            }
          }
          E = o(E);
        }
        if (!t.targetAnchor) {
          f85(d, t, u, c);
        }
        f(p && o(p), t, d, n, r, i, s);
      }
    }
    f84(t, h);
  }
  return t.anchor && o(t.anchor);
}
const vVO10 = vO10;
function f84(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r;
    let i;
    for (
      t
        ? ((r = e.el), (i = e.anchor))
        : ((r = e.targetStart), (i = e.targetAnchor));
      r && r !== i;

    ) {
      if (r.nodeType === 1) {
        r.setAttribute("data-v-owner", n.uid);
      }
      r = r.nextSibling;
    }
    n.ut();
  }
}
function f85(e, t, n, r) {
  const i = (t.targetStart = n(""));
  const s = (t.targetAnchor = n(""));
  i[vSymbol4] = s;
  if (e) {
    r(i, e);
    r(s, e);
  }
  return s;
}
const vSymbol5 = Symbol("_leaveCb");
const vSymbol6 = Symbol("_enterCb");
function f86() {
  const e = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map(),
  };
  vVF492(() => {
    e.isMounted = true;
  });
  vVF495(() => {
    e.isUnmounting = true;
  });
  return e;
}
const vA5 = [Function, Array];
const vO11 = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  onBeforeEnter: vA5,
  onEnter: vA5,
  onAfterEnter: vA5,
  onEnterCancelled: vA5,
  onBeforeLeave: vA5,
  onLeave: vA5,
  onAfterLeave: vA5,
  onLeaveCancelled: vA5,
  onBeforeAppear: vA5,
  onAppear: vA5,
  onAfterAppear: vA5,
  onAppearCancelled: vA5,
};
const vF46 = (e) => {
  const t = e.subTree;
  if (t.component) {
    return vF46(t.component);
  } else {
    return t;
  }
};
const vO12 = {
  name: "BaseTransition",
  props: vO11,
  setup(e, { slots: t }) {
    const n = vF79();
    const r = f86();
    return () => {
      const i = t.default && f93(t.default(), true);
      if (!i || !i.length) {
        return;
      }
      const s = f87(i);
      const o = f49(e);
      const { mode: a } = o;
      if (r.isLeaving) {
        return f90(s);
      }
      const l = f91(s);
      if (!l) {
        return f90(s);
      }
      let c = f89(l, o, r, n, (f) => (c = f));
      if (l.type !== v72) {
        f92(l, c);
      }
      let u = n.subTree && f91(n.subTree);
      if (u && u.type !== v72 && !f170(l, u) && vF46(n).type !== v72) {
        let f = f89(u, o, r, n);
        f92(u, f);
        if (a === "out-in" && l.type !== v72) {
          r.isLeaving = true;
          f.afterLeave = () => {
            r.isLeaving = false;
            if (!(n.job.flags & 8)) {
              n.update();
            }
            delete f.afterLeave;
            u = undefined;
          };
          return f90(s);
        }
        if (a === "in-out" && l.type !== v72) {
          f.delayLeave = (d, h, p) => {
            const E = f88(r, u);
            E[String(u.key)] = u;
            d[vSymbol5] = () => {
              h();
              d[vSymbol5] = undefined;
              delete c.delayedLeave;
              u = undefined;
            };
            c.delayedLeave = () => {
              p();
              delete c.delayedLeave;
              u = undefined;
            };
          };
        } else {
          u = undefined;
        }
      } else {
        u &&= undefined;
      }
      return s;
    };
  },
};
function f87(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) {
      if (n.type !== v72) {
        t = n;
        break;
      }
    }
  }
  return t;
}
const vVO12 = vO12;
function f88(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  if (!r) {
    r = Object.create(null);
    n.set(t.type, r);
  }
  return r;
}
function f89(e, t, n, r, i) {
  const {
    appear: s,
    mode: o,
    persisted: a = false,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: f,
    onBeforeLeave: d,
    onLeave: h,
    onAfterLeave: p,
    onLeaveCancelled: E,
    onBeforeAppear: A,
    onAppear: b,
    onAfterAppear: m,
    onAppearCancelled: C,
  } = t;
  const y = String(e.key);
  const x = f88(n, e);
  const L = (k, R) => {
    if (k) {
      f67(k, r, 9, R);
    }
  };
  const I = (k, R) => {
    const V = R[1];
    L(k, R);
    if (v4(k)) {
      if (k.every((S) => S.length <= 1)) {
        V();
      }
    } else if (k.length <= 1) {
      V();
    }
  };
  const B = {
    mode: o,
    persisted: a,
    beforeEnter(k) {
      let R = l;
      if (!n.isMounted) {
        if (s) {
          R = A || l;
        } else {
          return;
        }
      }
      if (k[vSymbol5]) {
        k[vSymbol5](true);
      }
      const V = x[y];
      if (V && f170(e, V) && V.el[vSymbol5]) {
        V.el[vSymbol5]();
      }
      L(R, [k]);
    },
    enter(k) {
      let R = c;
      let V = u;
      let S = f;
      if (!n.isMounted) {
        if (s) {
          R = b || c;
          V = m || u;
          S = C || f;
        } else {
          return;
        }
      }
      let G = false;
      const D = (k[vSymbol6] = (p2) => {
        if (!G) {
          G = true;
          if (p2) {
            L(S, [k]);
          } else {
            L(V, [k]);
          }
          if (B.delayedLeave) {
            B.delayedLeave();
          }
          k[vSymbol6] = undefined;
        }
      });
      if (R) {
        I(R, [k, D]);
      } else {
        D();
      }
    },
    leave(k, R) {
      const V = String(e.key);
      if (k[vSymbol6]) {
        k[vSymbol6](true);
      }
      if (n.isUnmounting) {
        return R();
      }
      L(d, [k]);
      let S = false;
      const G = (k[vSymbol5] = (D) => {
        if (!S) {
          S = true;
          R();
          if (D) {
            L(E, [k]);
          } else {
            L(p, [k]);
          }
          k[vSymbol5] = undefined;
          if (x[V] === e) {
            delete x[V];
          }
        }
      });
      x[V] = e;
      if (h) {
        I(h, [k, G]);
      } else {
        G();
      }
    },
    clone(k) {
      const R = f89(k, t, n, r, i);
      if (i) {
        i(R);
      }
      return R;
    },
  };
  return B;
}
function f90(e) {
  if (vF48(e)) {
    e = f174(e);
    e.children = null;
    return e;
  }
}
function f91(e) {
  if (!vF48(e)) {
    if (vF40(e.type) && e.children) {
      return f87(e.children);
    } else {
      return e;
    }
  }
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) {
      return n[0];
    }
    if (t & 32 && vF14(n.default)) {
      return n.default();
    }
  }
}
function f92(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    f92(e.component.subTree, t);
  } else if (e.shapeFlag & 128) {
    e.ssContent.transition = t.clone(e.ssContent);
    e.ssFallback.transition = t.clone(e.ssFallback);
  } else {
    e.transition = t;
  }
}
function f93(e, t = false, n) {
  let r = [];
  let i = 0;
  for (let s = 0; s < e.length; s++) {
    let o = e[s];
    const a = n == null ? o.key : String(n) + String(o.key ?? s);
    if (o.type === v70) {
      if (o.patchFlag & 128) {
        i++;
      }
      r = r.concat(f93(o.children, t, a));
    } else if (t || o.type !== v72) {
      r.push(
        a != null
          ? f174(o, {
              key: a,
            })
          : o
      );
    }
  }
  if (i > 1) {
    for (let s = 0; s < r.length; s++) {
      r[s].patchFlag = -2;
    }
  }
  return r;
} /*! #__NO_SIDE_EFFECTS__ */
function f94(e, t) {
  if (vF14(e)) {
    return v2(
      {
        name: e.name,
      },
      t,
      {
        setup: e,
      }
    );
  } else {
    return e;
  }
}
function f95(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function f96(e, t, n, r, i = false) {
  if (v4(e)) {
    e.forEach((p, E) => f96(p, t && (v4(t) ? t[E] : t), n, r, i));
    return;
  }
  if (vF47(r) && !i) {
    if (
      r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component
    ) {
      f96(e, t, n, r.component.subTree);
    }
    return;
  }
  const s = r.shapeFlag & 4 ? f190(r.component) : r.el;
  const o = i ? null : s;
  const { i: a, r: l } = e;
  const c = t && t.r;
  const u = a.refs === vO2 ? (a.refs = {}) : a.refs;
  const f = a.setupState;
  const d = f49(f);
  const h = f === vO2 ? () => false : (p) => vF10(d, p);
  if (c != null && c !== l) {
    if (vF15(c)) {
      u[c] = null;
      if (h(c)) {
        f[c] = null;
      }
    } else if (f51(c)) {
      c.value = null;
    }
  }
  if (vF14(l)) {
    f66(l, a, 12, [o, u]);
  } else {
    const p = vF15(l);
    const E = f51(l);
    if (p || E) {
      const A = () => {
        if (e.f) {
          const b = p ? (h(l) ? f[l] : u[l]) : l.value;
          if (i) {
            if (v4(b)) {
              vF9(b, s);
            }
          } else if (v4(b)) {
            if (!b.includes(s)) {
              b.push(s);
            }
          } else if (p) {
            u[l] = [s];
            if (h(l)) {
              f[l] = u[l];
            }
          } else {
            l.value = [s];
            if (e.k) {
              u[e.k] = l.value;
            }
          }
        } else if (p) {
          u[l] = o;
          if (h(l)) {
            f[l] = o;
          }
        } else if (E) {
          l.value = o;
          if (e.k) {
            u[e.k] = o;
          }
        }
      };
      if (o) {
        A.id = -1;
        vIg(A, n);
      } else {
        A();
      }
    }
  }
}
vF30().requestIdleCallback;
vF30().cancelIdleCallback;
const vF47 = (e) => !!e.type.__asyncLoader;
const vF48 = (e) => e.type.__isKeepAlive;
const vO13 = {
  name: "KeepAlive",
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number],
  },
  setup(e, { slots: t }) {
    const n = vF79();
    const r = n.ctx;
    if (!r.renderer) {
      return () => {
        const m = t.default && t.default();
        if (m && m.length === 1) {
          return m[0];
        } else {
          return m;
        }
      };
    }
    const i = new Map();
    const s = new Set();
    let o = null;
    const a = n.suspense;
    const {
      renderer: {
        p: l,
        m: c,
        um: u,
        o: { createElement: f },
      },
    } = r;
    const d = f("div");
    r.activate = (m, C, y, x, L) => {
      const I = m.component;
      c(m, C, y, 0, a);
      l(I.vnode, m, C, y, I, a, x, m.slotScopeIds, L);
      vIg(() => {
        I.isDeactivated = false;
        if (I.a) {
          vF26(I.a);
        }
        const B = m.props && m.props.onVnodeMounted;
        if (B) {
          f182(B, I.parent, m);
        }
      }, a);
    };
    r.deactivate = (m) => {
      const C = m.component;
      f147(C.m);
      f147(C.a);
      c(m, d, null, 1, a);
      vIg(() => {
        if (C.da) {
          vF26(C.da);
        }
        const y = m.props && m.props.onVnodeUnmounted;
        if (y) {
          f182(y, C.parent, m);
        }
        C.isDeactivated = true;
      }, a);
    };
    function h(m) {
      f102(m);
      u(m, n, a, true);
    }
    function p(m) {
      i.forEach((C, y) => {
        const x = f191(C.type);
        if (x && !m(x)) {
          E(y);
        }
      });
    }
    function E(m) {
      const C = i.get(m);
      if (C && (!o || !f170(C, o))) {
        h(C);
      } else if (o) {
        f102(o);
      }
      i.delete(m);
      s.delete(m);
    }
    f150(
      () => [e.include, e.exclude],
      ([m, C]) => {
        if (m) {
          p((y) => f97(m, y));
        }
        if (C) {
          p((y) => !f97(C, y));
        }
      },
      {
        flush: "post",
        deep: true,
      }
    );
    let A = null;
    const b = () => {
      if (A != null) {
        if (vF76(n.subTree.type)) {
          vIg(() => {
            i.set(A, f103(n.subTree));
          }, n.subTree.suspense);
        } else {
          i.set(A, f103(n.subTree));
        }
      }
    };
    vVF492(b);
    vVF494(b);
    vVF495(() => {
      i.forEach((m) => {
        const { subTree: C, suspense: y } = n;
        const x = f103(C);
        if (m.type === x.type && m.key === x.key) {
          f102(x);
          const L = x.component.da;
          if (L) {
            vIg(L, y);
          }
          return;
        }
        h(m);
      });
    });
    return () => {
      A = null;
      if (!t.default) {
        return (o = null);
      }
      const m = t.default();
      const C = m[0];
      if (m.length > 1) {
        o = null;
        return m;
      }
      if (!f169(C) || (!(C.shapeFlag & 4) && !(C.shapeFlag & 128))) {
        o = null;
        return C;
      }
      let y = f103(C);
      if (y.type === v72) {
        o = null;
        return y;
      }
      const x = y.type;
      const L = f191(vF47(y) ? y.type.__asyncResolved || {} : x);
      const { include: I, exclude: B, max: k } = e;
      if ((I && (!L || !f97(I, L))) || (B && L && f97(B, L))) {
        y.shapeFlag &= -257;
        o = y;
        return C;
      }
      const R = y.key == null ? x : y.key;
      const V = i.get(R);
      if (y.el) {
        y = f174(y);
        if (C.shapeFlag & 128) {
          C.ssContent = y;
        }
      }
      A = R;
      if (V) {
        y.el = V.el;
        y.component = V.component;
        if (y.transition) {
          f92(y, y.transition);
        }
        y.shapeFlag |= 512;
        s.delete(R);
        s.add(R);
      } else {
        s.add(R);
        if (k && s.size > parseInt(k, 10)) {
          E(s.values().next().value);
        }
      }
      y.shapeFlag |= 256;
      o = y;
      if (vF76(C.type)) {
        return C;
      } else {
        return y;
      }
    };
  },
};
const vVO13 = vO13;
function f97(e, t) {
  if (v4(e)) {
    return e.some((n) => f97(n, t));
  } else if (vF15(e)) {
    return e.split(",").includes(t);
  } else if (vF13(e)) {
    e.lastIndex = 0;
    return e.test(t);
  } else {
    return false;
  }
}
function f98(e, t) {
  f100(e, "a", t);
}
function f99(e, t) {
  f100(e, "da", t);
}
function f100(e, t, n = v75) {
  const r = (e.__wdc ||= () => {
    let i = n;
    while (i) {
      if (i.isDeactivated) {
        return;
      }
      i = i.parent;
    }
    return e();
  });
  f104(t, r, n);
  if (n) {
    let i = n.parent;
    while (i && i.parent) {
      if (vF48(i.parent.vnode)) {
        f101(r, t, n, i);
      }
      i = i.parent;
    }
  }
}
function f101(e, t, n, r) {
  const i = f104(t, e, r, true);
  vVF496(() => {
    vF9(r[t], i);
  }, n);
}
function f102(e) {
  e.shapeFlag &= -257;
  e.shapeFlag &= -513;
}
function f103(e) {
  if (e.shapeFlag & 128) {
    return e.ssContent;
  } else {
    return e;
  }
}
function f104(e, t, n = v75, r = false) {
  if (n) {
    const i = (n[e] ||= []);
    const s = (t.__weh ||= (...o) => {
      f19();
      const a = vF80(n);
      const l = f67(t, n, e, o);
      a();
      f20();
      return l;
    });
    if (r) {
      i.unshift(s);
    } else {
      i.push(s);
    }
    return s;
  }
}
const vF49 =
  (e) =>
  (t, n = v75) => {
    if (!v78 || e === "sp") {
      f104(e, (...r) => t(...r), n);
    }
  };
const vVF49 = vF49("bm");
const vVF492 = vF49("m");
const vVF493 = vF49("bu");
const vVF494 = vF49("u");
const vVF495 = vF49("bum");
const vVF496 = vF49("um");
const vVF497 = vF49("sp");
const vVF498 = vF49("rtg");
const vVF499 = vF49("rtc");
function f105(e, t = v75) {
  f104("ec", e, t);
}
const vLSComponents = "components";
function f106(e, t) {
  return f107(vLSComponents, e, true, t) || e;
}
const v37 = Symbol.for("v-ndc");
function f107(e, t, n = true, r = false) {
  const i = v35 || v75;
  if (i) {
    const s = i.type;
    {
      const a = f191(s, false);
      if (a && (a === t || a === vVF24(t) || a === vVF243(vVF24(t)))) {
        return s;
      }
    }
    const o = f108(i[e] || s[e], t) || f108(i.appContext[e], t);
    if (!o && r) {
      return s;
    } else {
      return o;
    }
  }
}
function f108(e, t) {
  return e && (e[t] || e[vVF24(t)] || e[vVF243(vVF24(t))]);
}
function f109(e, t, n, r) {
  let i;
  const s = n;
  const o = v4(e);
  if (o || vF15(e)) {
    const a = o && f45(e);
    let l = false;
    if (a) {
      l = !f47(e);
      e = f27(e);
    }
    i = new Array(e.length);
    for (let c = 0, u = e.length; c < u; c++) {
      i[c] = t(l ? vF37(e[c]) : e[c], c, undefined, s);
    }
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++) {
      i[a] = t(a + 1, a, undefined, s);
    }
  } else if (vF17(e)) {
    if (e[Symbol.iterator]) {
      i = Array.from(e, (a, l) => t(a, l, undefined, s));
    } else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        i[l] = t(e[u], u, l, s);
      }
    }
  } else {
    i = [];
  }
  return i;
}
function f110(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (v4(r)) {
      for (let i = 0; i < r.length; i++) {
        e[r[i].name] = r[i].fn;
      }
    } else if (r) {
      e[r.name] = r.key
        ? (...i) => {
            const s = r.fn(...i);
            if (s) {
              s.key = r.key;
            }
            return s;
          }
        : r.fn;
    }
  }
  return e;
}
function f111(e, t, n = {}, r, i) {
  if (v35.ce || (v35.parent && vF47(v35.parent) && v35.parent.ce)) {
    if (t !== "default") {
      n.name = t;
    }
    f163();
    return f168(v70, null, [vLg("slot", n, r)], 64);
  }
  let s = e[t];
  if (s && s._c) {
    s._d = false;
  }
  f163();
  const o = s && f112(s(n));
  const a = n.key || (o && o.key);
  const l = f168(
    v70,
    {
      key: (a && !vF16(a) ? a : `_${t}`) + "",
    },
    o || [],
    o && e._ === 1 ? 64 : -2
  );
  if (!i && l.scopeId) {
    l.slotScopeIds = [l.scopeId + "-s"];
  }
  if (s && s._c) {
    s._d = true;
  }
  return l;
}
function f112(e) {
  if (
    e.some((t) =>
      f169(t) ? t.type !== v72 && (t.type !== v70 || !!f112(t.children)) : true
    )
  ) {
    return e;
  } else {
    return null;
  }
}
const vF50 = (e) => (e ? (f184(e) ? f190(e) : vF50(e.parent)) : null);
const vV2 = v2(Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => e.props,
  $attrs: (e) => e.attrs,
  $slots: (e) => e.slots,
  $refs: (e) => e.refs,
  $parent: (e) => vF50(e.parent),
  $root: (e) => vF50(e.root),
  $host: (e) => e.ce,
  $emit: (e) => e.emit,
  $options: (e) => f119(e),
  $forceUpdate: (e) =>
    (e.f ||= () => {
      f72(e.update);
    }),
  $nextTick: (e) => (e.n ||= f70.bind(e.proxy)),
  $watch: (e) => f152.bind(e),
});
const vF51 = (e, t) => e !== vO2 && !e.__isScriptSetup && vF10(e, t);
const vO14 = {
  get({ _: e }, t) {
    if (t === "__v_skip") {
      return true;
    }
    const {
      ctx: n,
      setupState: r,
      data: i,
      props: s,
      accessCache: o,
      type: a,
      appContext: l,
    } = e;
    let c;
    if (t[0] !== "$") {
      const h = o[t];
      if (h !== undefined) {
        switch (h) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      } else {
        if (vF51(r, t)) {
          o[t] = 1;
          return r[t];
        }
        if (i !== vO2 && vF10(i, t)) {
          o[t] = 2;
          return i[t];
        }
        if ((c = e.propsOptions[0]) && vF10(c, t)) {
          o[t] = 3;
          return s[t];
        }
        if (n !== vO2 && vF10(n, t)) {
          o[t] = 4;
          return n[t];
        }
        if (v38) {
          o[t] = 0;
        }
      }
    }
    const u = vV2[t];
    let f;
    let d;
    if (u) {
      if (t === "$attrs") {
        f23(e.attrs, "get", "");
      }
      return u(e);
    }
    if ((f = a.__cssModules) && (f = f[t])) {
      return f;
    }
    if (n !== vO2 && vF10(n, t)) {
      o[t] = 4;
      return n[t];
    }
    d = l.config.globalProperties;
    if (vF10(d, t)) {
      return d[t];
    }
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: s } = e;
    if (vF51(i, t)) {
      i[t] = n;
      return true;
    } else if (r !== vO2 && vF10(r, t)) {
      r[t] = n;
      return true;
    } else if (vF10(e.props, t) || (t[0] === "$" && t.slice(1) in e)) {
      return false;
    } else {
      s[t] = n;
      return true;
    }
  },
  has(
    {
      _: {
        data: e,
        setupState: t,
        accessCache: n,
        ctx: r,
        appContext: i,
        propsOptions: s,
      },
    },
    o
  ) {
    let a;
    return (
      !!n[o] ||
      (e !== vO2 && vF10(e, o)) ||
      vF51(t, o) ||
      ((a = s[0]) && vF10(a, o)) ||
      vF10(r, o) ||
      vF10(vV2, o) ||
      vF10(i.config.globalProperties, o)
    );
  },
  defineProperty(e, t, n) {
    if (n.get != null) {
      e._.accessCache[t] = 0;
    } else if (vF10(n, "value")) {
      this.set(e, t, n.value, null);
    }
    return Reflect.defineProperty(e, t, n);
  },
};
function f113(e) {
  if (v4(e)) {
    return e.reduce((t, n) => {
      t[n] = null;
      return t;
    }, {});
  } else {
    return e;
  }
}
function f114(e, t) {
  if (!e || !t) {
    return e || t;
  } else if (v4(e) && v4(t)) {
    return e.concat(t);
  } else {
    return v2({}, f113(e), f113(t));
  }
}
let v38 = true;
function f115(e) {
  const t = f119(e);
  const n = e.proxy;
  const r = e.ctx;
  v38 = false;
  if (t.beforeCreate) {
    f117(t.beforeCreate, e, "bc");
  }
  const {
    data: i,
    computed: s,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: p,
    activated: E,
    deactivated: A,
    beforeDestroy: b,
    beforeUnmount: m,
    destroyed: C,
    unmounted: y,
    render: x,
    renderTracked: L,
    renderTriggered: I,
    errorCaptured: B,
    serverPrefetch: k,
    expose: R,
    inheritAttrs: V,
    components: S,
    directives: G,
    filters: D,
  } = t;
  if (c) {
    f116(c, r, null);
  }
  if (o) {
    for (const Q in o) {
      const K = o[Q];
      if (vF14(K)) {
        r[Q] = K.bind(n);
      }
    }
  }
  if (i) {
    const Q = i.call(n, n);
    if (vF17(Q)) {
      e.data = f40(Q);
    }
  }
  v38 = true;
  if (s) {
    for (const Q in s) {
      const K = s[Q];
      const v39 = vF14(K) ? K.bind(n, n) : vF14(K.get) ? K.get.bind(n, n) : vF5;
      const v40 = !vF14(K) && vF14(K.set) ? K.set.bind(n) : vF5;
      const vM = M({
        get: v39,
        set: v40,
      });
      Object.defineProperty(r, Q, {
        enumerable: true,
        configurable: true,
        get: () => vM.value,
        set: (z) => (vM.value = z),
      });
    }
  }
  if (a) {
    for (const Q in a) {
      f118(a[Q], r, n, Q);
    }
  }
  if (l) {
    const Q = vF14(l) ? l.call(n) : l;
    Reflect.ownKeys(Q).forEach((K) => {
      f130(K, Q[K]);
    });
  }
  if (u) {
    f117(u, e, "c");
  }
  function J(Q, K) {
    if (v4(K)) {
      K.forEach((p3) => Q(p3.bind(n)));
    } else if (K) {
      Q(K.bind(n));
    }
  }
  J(vVF49, f);
  J(vVF492, d);
  J(vVF493, h);
  J(vVF494, p);
  J(f98, E);
  J(f99, A);
  J(f105, B);
  J(vVF499, L);
  J(vVF498, I);
  J(vVF495, m);
  J(vVF496, y);
  J(vVF497, k);
  if (v4(R)) {
    if (R.length) {
      const Q = (e.exposed ||= {});
      R.forEach((K) => {
        Object.defineProperty(Q, K, {
          get: () => n[K],
          set: (p4) => (n[K] = p4),
        });
      });
    } else {
      e.exposed ||= {};
    }
  }
  if (x && e.render === vF5) {
    e.render = x;
  }
  if (V != null) {
    e.inheritAttrs = V;
  }
  if (S) {
    e.components = S;
  }
  if (G) {
    e.directives = G;
  }
  if (k) {
    f95(e);
  }
}
function f116(e, t, n = vF5) {
  if (v4(e)) {
    e = f123(e);
  }
  for (const r in e) {
    const i = e[r];
    let s;
    if (vF17(i)) {
      if ("default" in i) {
        s = f131(i.from || r, i.default, true);
      } else {
        s = f131(i.from || r);
      }
    } else {
      s = f131(i);
    }
    if (f51(s)) {
      Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => s.value,
        set: (o) => (s.value = o),
      });
    } else {
      t[r] = s;
    }
  }
}
function f117(e, t, n) {
  f67(v4(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function f118(e, t, n, r) {
  let i = r.includes(".") ? f153(n, r) : () => n[r];
  if (vF15(e)) {
    const s = t[e];
    if (vF14(s)) {
      f150(i, s);
    }
  } else if (vF14(e)) {
    f150(i, e.bind(n));
  } else if (vF17(e)) {
    if (v4(e)) {
      e.forEach((s) => f118(s, t, n, r));
    } else {
      const s = vF14(e.handler) ? e.handler.bind(n) : t[e.handler];
      if (vF14(s)) {
        f150(i, s, e);
      }
    }
  }
}
function f119(e) {
  const t = e.type;
  const { mixins: n, extends: r } = t;
  const {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: o },
  } = e.appContext;
  const a = s.get(t);
  let l;
  if (a) {
    l = a;
  } else if (!i.length && !n && !r) {
    l = t;
  } else {
    l = {};
    if (i.length) {
      i.forEach((c) => f120(l, c, o, true));
    }
    f120(l, t, o);
  }
  if (vF17(t)) {
    s.set(t, l);
  }
  return l;
}
function f120(e, t, n, r = false) {
  const { mixins: i, extends: s } = t;
  if (s) {
    f120(e, s, n, true);
  }
  if (i) {
    i.forEach((o) => f120(e, o, n, true));
  }
  for (const o in t) {
    if (!r || o !== "expose") {
      const a = vO15[o] || (n && n[o]);
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  }
  return e;
}
const vO15 = {
  data: f121,
  props: f126,
  emits: f126,
  methods: f125,
  computed: f125,
  beforeCreate: f124,
  created: f124,
  beforeMount: f124,
  mounted: f124,
  beforeUpdate: f124,
  updated: f124,
  beforeDestroy: f124,
  beforeUnmount: f124,
  destroyed: f124,
  unmounted: f124,
  activated: f124,
  deactivated: f124,
  errorCaptured: f124,
  serverPrefetch: f124,
  components: f125,
  directives: f125,
  watch: f127,
  provide: f121,
  inject: f122,
};
function f121(e, t) {
  if (t) {
    if (e) {
      return function () {
        return v2(
          vF14(e) ? e.call(this, this) : e,
          vF14(t) ? t.call(this, this) : t
        );
      };
    } else {
      return t;
    }
  } else {
    return e;
  }
}
function f122(e, t) {
  return f125(f123(e), f123(t));
}
function f123(e) {
  if (v4(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      t[e[n]] = e[n];
    }
    return t;
  }
  return e;
}
function f124(e, t) {
  if (e) {
    return [...new Set([].concat(e, t))];
  } else {
    return t;
  }
}
function f125(e, t) {
  if (e) {
    return v2(Object.create(null), e, t);
  } else {
    return t;
  }
}
function f126(e, t) {
  if (e) {
    if (v4(e) && v4(t)) {
      return [...new Set([...e, ...t])];
    } else {
      return v2(Object.create(null), f113(e), f113(t ?? {}));
    }
  } else {
    return t;
  }
}
function f127(e, t) {
  if (!e) {
    return t;
  }
  if (!t) {
    return e;
  }
  const n = v2(Object.create(null), e);
  for (const r in t) {
    n[r] = f124(e[r], t[r]);
  }
  return n;
}
function f128() {
  return {
    app: null,
    config: {
      isNativeTag: vF6,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: undefined,
      warnHandler: undefined,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let vLN04 = 0;
function f129(e, t) {
  return function (r, i = null) {
    if (!vF14(r)) {
      r = v2({}, r);
    }
    if (i != null && !vF17(i)) {
      i = null;
    }
    const s = f128();
    const o = new WeakSet();
    const a = [];
    let l = false;
    const c = (s.app = {
      _uid: vLN04++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: vLS3513,
      get config() {
        return s.config;
      },
      set config(u) {},
      use(u, ...f) {
        if (!o.has(u)) {
          if (u && vF14(u.install)) {
            o.add(u);
            u.install(c, ...f);
          } else if (vF14(u)) {
            o.add(u);
            u(c, ...f);
          }
        }
        return c;
      },
      mixin(u) {
        if (!s.mixins.includes(u)) {
          s.mixins.push(u);
        }
        return c;
      },
      component(u, f) {
        if (f) {
          s.components[u] = f;
          return c;
        } else {
          return s.components[u];
        }
      },
      directive(u, f) {
        if (f) {
          s.directives[u] = f;
          return c;
        } else {
          return s.directives[u];
        }
      },
      mount(u, f, d) {
        if (!l) {
          const h = c._ceVNode || vLg(r, i);
          h.appContext = s;
          if (d === true) {
            d = "svg";
          } else if (d === false) {
            d = undefined;
          }
          e(h, u, d);
          l = true;
          c._container = u;
          u.__vue_app__ = c;
          return f190(h.component);
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        if (l) {
          f67(a, c._instance, 16);
          e(null, c._container);
          delete c._container.__vue_app__;
        }
      },
      provide(u, f) {
        s.provides[u] = f;
        return c;
      },
      runWithContext(u) {
        const f = v41;
        v41 = c;
        try {
          return u();
        } finally {
          v41 = f;
        }
      },
    });
    return c;
  };
}
let v41 = null;
function f130(e, t) {
  if (v75) {
    let n = v75.provides;
    const r = v75.parent && v75.parent.provides;
    if (r === n) {
      n = v75.provides = Object.create(r);
    }
    n[e] = t;
  }
}
function f131(e, t, n = false) {
  const r = v75 || v35;
  if (r || v41) {
    const i = v41
      ? v41._context.provides
      : r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : undefined;
    if (i && e in i) {
      return i[e];
    }
    if (arguments.length > 1) {
      if (n && vF14(t)) {
        return t.call(r && r.proxy);
      } else {
        return t;
      }
    }
  }
}
function f132() {
  return !!v75 || !!v35 || !!v41;
}
const vO16 = {};
const vF52 = () => Object.create(vO16);
const vF53 = (e) => Object.getPrototypeOf(e) === vO16;
function f133(e, t, n, r = false) {
  const i = {};
  const s = vF52();
  e.propsDefaults = Object.create(null);
  f135(e, t, i, s);
  for (const o in e.propsOptions[0]) {
    if (!(o in i)) {
      i[o] = undefined;
    }
  }
  if (n) {
    e.props = r ? i : f41(i);
  } else if (e.type.props) {
    e.props = i;
  } else {
    e.props = s;
  }
  e.attrs = s;
}
function f134(e, t, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: o },
  } = e;
  const a = f49(i);
  const [l] = e.propsOptions;
  let c = false;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (f157(e.emitsOptions, d)) {
          continue;
        }
        const h = t[d];
        if (l) {
          if (vF10(s, d)) {
            if (h !== s[d]) {
              s[d] = h;
              c = true;
            }
          } else {
            const p = vVF24(d);
            i[p] = f136(l, a, p, h, e, false);
          }
        } else if (h !== s[d]) {
          s[d] = h;
          c = true;
        }
      }
    }
  } else {
    if (f135(e, t, i, s)) {
      c = true;
    }
    let u;
    for (const f in a) {
      if (!t || (!vF10(t, f) && ((u = vVF242(f)) === f || !vF10(t, u)))) {
        if (l) {
          if (n && (n[f] !== undefined || n[u] !== undefined)) {
            i[f] = f136(l, a, f, undefined, e, true);
          }
        } else {
          delete i[f];
        }
      }
    }
    if (s !== a) {
      for (const f in s) {
        if (!t || !vF10(t, f)) {
          delete s[f];
          c = true;
        }
      }
    }
  }
  if (c) {
    f24(e.attrs, "set", "");
  }
}
function f135(e, t, n, r) {
  const [i, s] = e.propsOptions;
  let o = false;
  let a;
  if (t) {
    for (let l in t) {
      if (vF23(l)) {
        continue;
      }
      const c = t[l];
      let u;
      if (i && vF10(i, (u = vVF24(l)))) {
        if (!s || !s.includes(u)) {
          n[u] = c;
        } else {
          (a ||= {})[u] = c;
        }
      } else if (!f157(e.emitsOptions, l)) {
        if (!(l in r) || c !== r[l]) {
          r[l] = c;
          o = true;
        }
      }
    }
  }
  if (s) {
    const l = f49(n);
    const c = a || vO2;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = f136(i, l, f, c[f], e, !vF10(c, f));
    }
  }
  return o;
}
function f136(e, t, n, r, i, s) {
  const o = e[n];
  if (o != null) {
    const a = vF10(o, "default");
    if (a && r === undefined) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && vF14(l)) {
        const { propsDefaults: c } = i;
        if (n in c) {
          r = c[n];
        } else {
          const u = vF80(i);
          r = c[n] = l.call(null, t);
          u();
        }
      } else {
        r = l;
      }
      if (i.ce) {
        i.ce._setProp(n, r);
      }
    }
    if (o[0]) {
      if (s && !a) {
        r = false;
      } else if (o[1] && (r === "" || r === vVF242(n))) {
        r = true;
      }
    }
  }
  return r;
}
const v42 = new WeakMap();
function f137(e, t, n = false) {
  const r = n ? v42 : t.propsCache;
  const i = r.get(e);
  if (i) {
    return i;
  }
  const s = e.props;
  const o = {};
  const a = [];
  let l = false;
  if (!vF14(e)) {
    const u = (f) => {
      l = true;
      const [d, h] = f137(f, t, true);
      v2(o, d);
      if (h) {
        a.push(...h);
      }
    };
    if (!n && t.mixins.length) {
      t.mixins.forEach(u);
    }
    if (e.extends) {
      u(e.extends);
    }
    if (e.mixins) {
      e.mixins.forEach(u);
    }
  }
  if (!s && !l) {
    if (vF17(e)) {
      r.set(e, vA);
    }
    return vA;
  }
  if (v4(s)) {
    for (let u = 0; u < s.length; u++) {
      const f = vVF24(s[u]);
      if (f138(f)) {
        o[f] = vO2;
      }
    }
  } else if (s) {
    for (const u in s) {
      const f = vVF24(u);
      if (f138(f)) {
        const d = s[u];
        const h = (o[f] =
          v4(d) || vF14(d)
            ? {
                type: d,
              }
            : v2({}, d));
        const p = h.type;
        let E = false;
        let A = true;
        if (v4(p)) {
          for (let b = 0; b < p.length; ++b) {
            const m = p[b];
            const C = vF14(m) && m.name;
            if (C === "Boolean") {
              E = true;
              break;
            } else if (C === "String") {
              A = false;
            }
          }
        } else {
          E = vF14(p) && p.name === "Boolean";
        }
        h[0] = E;
        h[1] = A;
        if (E || vF10(h, "default")) {
          a.push(f);
        }
      }
    }
  }
  const c = [o, a];
  if (vF17(e)) {
    r.set(e, c);
  }
  return c;
}
function f138(e) {
  return e[0] !== "$" && !vF23(e);
}
const vF54 = (e) => e[0] === "_" || e === "$stable";
const vF55 = (e) => (v4(e) ? e.map(f178) : [f178(e)]);
const vF56 = (e, t, n) => {
  if (t._n) {
    return t;
  }
  const r = f79((...i) => vF55(t(...i)), n);
  r._c = false;
  return r;
};
const vF57 = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (vF54(i)) {
      continue;
    }
    const s = e[i];
    if (vF14(s)) {
      t[i] = vF56(i, s, r);
    } else if (s != null) {
      const o = vF55(s);
      t[i] = () => o;
    }
  }
};
const vF58 = (e, t) => {
  const n = vF55(t);
  e.slots.default = () => n;
};
const vF59 = (e, t, n) => {
  for (const r in t) {
    if (n || r !== "_") {
      e[r] = t[r];
    }
  }
};
const vF60 = (e, t, n) => {
  const r = (e.slots = vF52());
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    if (i) {
      vF59(r, t, n);
      if (n) {
        vF27(r, "_", i, true);
      }
    } else {
      vF57(t, r);
    }
  } else if (t) {
    vF58(e, t);
  }
};
const vF61 = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let s = true;
  let o = vO2;
  if (r.shapeFlag & 32) {
    const a = t._;
    if (a) {
      if (n && a === 1) {
        s = false;
      } else {
        vF59(i, t, n);
      }
    } else {
      s = !t.$stable;
      vF57(t, i);
    }
    o = t;
  } else if (t) {
    vF58(e, t);
    o = {
      default: 1,
    };
  }
  if (s) {
    for (const a in i) {
      if (!vF54(a) && o[a] == null) {
        delete i[a];
      }
    }
  }
};
const vIg = f162;
function f139(e) {
  return f140(e);
}
function f140(e, t) {
  const n = vF30();
  n.__VUE__ = true;
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: d,
    setScopeId: h = vF5,
    insertStaticContent: p,
  } = e;
  const E = (
    _,
    w,
    P,
    j = null,
    U = null,
    W = null,
    g = undefined,
    v = null,
    N = !!w.dynamicChildren
  ) => {
    if (_ === w) {
      return;
    }
    if (_ && !f170(_, w)) {
      j = F(_);
      z(_, U, W, true);
      _ = null;
    }
    if (w.patchFlag === -2) {
      N = false;
      w.dynamicChildren = null;
    }
    const { type: O, ref: Z, shapeFlag: H } = w;
    switch (O) {
      case v71:
        A(_, w, P, j);
        break;
      case v72:
        b(_, w, P, j);
        break;
      case v73:
        if (_ == null) {
          m(w, P, j, g);
        }
        break;
      case v70:
        S(_, w, P, j, U, W, g, v, N);
        break;
      default:
        if (H & 1) {
          x(_, w, P, j, U, W, g, v, N);
        } else if (H & 6) {
          G(_, w, P, j, U, W, g, v, N);
        } else if (H & 64 || H & 128) {
          O.process(_, w, P, j, U, W, g, v, N, vO18);
        }
    }
    if (Z != null && U) {
      f96(Z, _ && _.ref, W, w || _, !w);
    }
  };
  const A = (_, w, P, j) => {
    if (_ == null) {
      r((w.el = a(w.children)), P, j);
    } else {
      const U = (w.el = _.el);
      if (w.children !== _.children) {
        c(U, w.children);
      }
    }
  };
  const b = (_, w, P, j) => {
    if (_ == null) {
      r((w.el = l(w.children || "")), P, j);
    } else {
      w.el = _.el;
    }
  };
  const m = (_, w, P, j) => {
    [_.el, _.anchor] = p(_.children, w, P, j, _.el, _.anchor);
  };
  const C = ({ el: _, anchor: w }, P, j) => {
    let U;
    while (_ && _ !== w) {
      U = d(_);
      r(_, P, j);
      _ = U;
    }
    r(w, P, j);
  };
  const y = ({ el: _, anchor: w }) => {
    let P;
    while (_ && _ !== w) {
      P = d(_);
      i(_);
      _ = P;
    }
    i(w);
  };
  const x = (_, w, P, j, U, W, g, v, N) => {
    if (w.type === "svg") {
      g = "svg";
    } else if (w.type === "math") {
      g = "mathml";
    }
    if (_ == null) {
      L(w, P, j, U, W, g, v, N);
    } else {
      k(_, w, U, W, g, v, N);
    }
  };
  const L = (_, w, P, j, U, W, g, v) => {
    let N;
    let O;
    const { props: Z, shapeFlag: H, transition: T, dirs: $ } = _;
    N = _.el = o(_.type, W, Z && Z.is, Z);
    if (H & 8) {
      u(N, _.children);
    } else if (H & 16) {
      B(_.children, N, null, j, U, f141(_, W), g, v);
    }
    if ($) {
      f81(_, null, j, "created");
    }
    I(N, _, _.scopeId, g, j);
    if (Z) {
      for (const v43 in Z) {
        if (v43 !== "value" && !vF23(v43)) {
          s(N, v43, null, Z[v43], W, j);
        }
      }
      if ("value" in Z) {
        s(N, "value", null, Z.value, W);
      }
      if ((O = Z.onVnodeBeforeMount)) {
        f182(O, j, _);
      }
    }
    if ($) {
      f81(_, null, j, "beforeMount");
    }
    const vBg = f143(U, T);
    if (vBg) {
      T.beforeEnter(N);
    }
    r(N, w, P);
    if ((O = Z && Z.onVnodeMounted) || vBg || $) {
      vIg(() => {
        if (O) {
          f182(O, j, _);
        }
        if (vBg) {
          T.enter(N);
        }
        if ($) {
          f81(_, null, j, "mounted");
        }
      }, U);
    }
  };
  const I = (_, w, P, j, U) => {
    if (P) {
      h(_, P);
    }
    if (j) {
      for (let W = 0; W < j.length; W++) {
        h(_, j[W]);
      }
    }
    if (U) {
      let W = U.subTree;
      if (
        w === W ||
        (vF76(W.type) && (W.ssContent === w || W.ssFallback === w))
      ) {
        const g = U.vnode;
        I(_, g, g.scopeId, g.slotScopeIds, U.parent);
      }
    }
  };
  const B = (_, w, P, j, U, W, g, v, N = 0) => {
    for (let O = N; O < _.length; O++) {
      const Z = (_[O] = v ? f179(_[O]) : f178(_[O]));
      E(null, Z, w, P, j, U, W, g, v);
    }
  };
  const k = (_, w, P, j, U, W, g) => {
    const v = (w.el = _.el);
    let { patchFlag: N, dynamicChildren: O, dirs: Z } = w;
    N |= _.patchFlag & 16;
    const H = _.props || vO2;
    const T = w.props || vO2;
    let $;
    if (P) {
      f142(P, false);
    }
    if (($ = T.onVnodeBeforeUpdate)) {
      f182($, P, w, _);
    }
    if (Z) {
      f81(w, _, P, "beforeUpdate");
    }
    if (P) {
      f142(P, true);
    }
    if (
      (H.innerHTML && T.innerHTML == null) ||
      (H.textContent && T.textContent == null)
    ) {
      u(v, "");
    }
    if (O) {
      R(_.dynamicChildren, O, v, P, j, f141(w, U), W);
    } else if (!g) {
      K(_, w, v, null, P, j, f141(w, U), W, false);
    }
    if (N > 0) {
      if (N & 16) {
        V(v, H, T, P, U);
      } else {
        if (N & 2 && H.class !== T.class) {
          s(v, "class", null, T.class, U);
        }
        if (N & 4) {
          s(v, "style", H.style, T.style, U);
        }
        if (N & 8) {
          const v44 = w.dynamicProps;
          for (let vLN05 = 0; vLN05 < v44.length; vLN05++) {
            const v45 = v44[vLN05];
            const v46 = H[v45];
            const v47 = T[v45];
            if (v47 !== v46 || v45 === "value") {
              s(v, v45, v46, v47, U, P);
            }
          }
        }
      }
      if (N & 1 && _.children !== w.children) {
        u(v, w.children);
      }
    } else if (!g && O == null) {
      V(v, H, T, P, U);
    }
    if (($ = T.onVnodeUpdated) || Z) {
      vIg(() => {
        if ($) {
          f182($, P, w, _);
        }
        if (Z) {
          f81(w, _, P, "updated");
        }
      }, j);
    }
  };
  const R = (_, w, P, j, U, W, g) => {
    for (let v = 0; v < w.length; v++) {
      const N = _[v];
      const O = w[v];
      const Z =
        N.el && (N.type === v70 || !f170(N, O) || N.shapeFlag & 70)
          ? f(N.el)
          : P;
      E(N, O, Z, null, j, U, W, g, true);
    }
  };
  const V = (_, w, P, j, U) => {
    if (w !== P) {
      if (w !== vO2) {
        for (const W in w) {
          if (!vF23(W) && !(W in P)) {
            s(_, W, w[W], null, U, j);
          }
        }
      }
      for (const W in P) {
        if (vF23(W)) {
          continue;
        }
        const g = P[W];
        const v = w[W];
        if (g !== v && W !== "value") {
          s(_, W, v, g, U, j);
        }
      }
      if ("value" in P) {
        s(_, "value", w.value, P.value, U);
      }
    }
  };
  const S = (_, w, P, j, U, W, g, v, N) => {
    const O = (w.el = _ ? _.el : a(""));
    const Z = (w.anchor = _ ? _.anchor : a(""));
    let { patchFlag: H, dynamicChildren: T, slotScopeIds: $ } = w;
    if ($) {
      v = v ? v.concat($) : $;
    }
    if (_ == null) {
      r(O, P, j);
      r(Z, P, j);
      B(w.children || [], P, Z, U, W, g, v, N);
    } else if (H > 0 && H & 64 && T && _.dynamicChildren) {
      R(_.dynamicChildren, T, P, U, W, g, v);
      if (w.key != null || (U && w === U.subTree)) {
        f144(_, w, true);
      }
    } else {
      K(_, w, P, Z, U, W, g, v, N);
    }
  };
  const G = (_, w, P, j, U, W, g, v, N) => {
    w.slotScopeIds = v;
    if (_ == null) {
      if (w.shapeFlag & 512) {
        U.ctx.activate(w, P, j, g, N);
      } else {
        D(w, P, j, U, W, g, N);
      }
    } else {
      vF62(_, w, N);
    }
  };
  const D = (_, w, P, j, U, W, g) => {
    const v = (_.component = f183(_, j, U));
    if (vF48(_)) {
      v.ctx.renderer = vO18;
    }
    f185(v, false, g);
    if (v.asyncDep) {
      if (U) {
        U.registerDep(v, J, g);
      }
      if (!_.el) {
        const N = (v.subTree = vLg(v72));
        b(null, N, w, P);
      }
    } else {
      J(v, _, w, P, U, W, g);
    }
  };
  const vF62 = (_, w, P) => {
    const j = (w.component = _.component);
    if (f159(_, w, P)) {
      if (j.asyncDep && !j.asyncResolved) {
        Q(j, w, P);
        return;
      } else {
        j.next = w;
        j.update();
      }
    } else {
      w.el = _.el;
      j.vnode = w;
    }
  };
  const J = (_, w, P, j, U, W, g) => {
    const v = () => {
      if (_.isMounted) {
        let { next: H, bu: T, u: $, parent: re, vnode: ae } = _;
        {
          const vFf = f146(_);
          if (vFf) {
            if (H) {
              H.el = ae.el;
              Q(_, H, g);
            }
            vFf.asyncDep.then(() => {
              if (!_.isUnmounted) {
                v();
              }
            });
            return;
          }
        }
        let vH = H;
        let v48;
        f142(_, false);
        if (H) {
          H.el = ae.el;
          Q(_, H, g);
        } else {
          H = ae;
        }
        if (T) {
          vF26(T);
        }
        if ((v48 = H.props && H.props.onVnodeBeforeUpdate)) {
          f182(v48, re, H, ae);
        }
        f142(_, true);
        const vBl = f158(_);
        const v49 = _.subTree;
        _.subTree = vBl;
        E(v49, vBl, f(v49.el), F(v49), _, U, W);
        H.el = vBl.el;
        if (vH === null) {
          f161(_, vBl.el);
        }
        if ($) {
          vIg($, U);
        }
        if ((v48 = H.props && H.props.onVnodeUpdated)) {
          vIg(() => f182(v48, re, H, ae), U);
        }
      } else {
        let H;
        const { el: T, props: $ } = w;
        const { bm: re, m: ae, parent: me, root: We, type: Oe } = _;
        const vVF47 = vF47(w);
        f142(_, false);
        if (re) {
          vF26(re);
        }
        if (!vVF47 && (H = $ && $.onVnodeBeforeMount)) {
          f182(H, me, w);
        }
        f142(_, true);
        {
          if (We.ce) {
            We.ce._injectChildStyle(Oe);
          }
          const v50 = (_.subTree = f158(_));
          E(null, v50, P, j, _, U, W);
          w.el = v50.el;
        }
        if (ae) {
          vIg(ae, U);
        }
        if (!vVF47 && (H = $ && $.onVnodeMounted)) {
          const vW = w;
          vIg(() => f182(H, me, vW), U);
        }
        if (
          (w.shapeFlag & 256 ||
            (me && vF47(me.vnode) && me.vnode.shapeFlag & 256)) &&
          _.a
        ) {
          vIg(_.a, U);
        }
        _.isMounted = true;
        w = P = j = null;
      }
    };
    _.scope.on();
    const N = (_.effect = new C3(v));
    _.scope.off();
    const O = (_.update = N.run.bind(N));
    const Z = (_.job = N.runIfDirty.bind(N));
    Z.i = _;
    Z.id = _.uid;
    N.scheduler = () => f72(Z);
    f142(_, true);
    O();
  };
  const Q = (_, w, P) => {
    w.component = _;
    const j = _.vnode.props;
    _.vnode = w;
    _.next = null;
    f134(_, w.props, j, P);
    vF61(_, w.children, P);
    f19();
    f75(_);
    f20();
  };
  const K = (_, w, P, j, U, W, g, v, N = false) => {
    const O = _ && _.children;
    const Z = _ ? _.shapeFlag : 0;
    const H = w.children;
    const { patchFlag: T, shapeFlag: $ } = w;
    if (T > 0) {
      if (T & 128) {
        vF64(O, H, P, j, U, W, g, v, N);
        return;
      } else if (T & 256) {
        vF63(O, H, P, j, U, W, g, v, N);
        return;
      }
    }
    if ($ & 8) {
      if (Z & 16) {
        vF71(O, U, W);
      }
      if (H !== O) {
        u(P, H);
      }
    } else if (Z & 16) {
      if ($ & 16) {
        vF64(O, H, P, j, U, W, g, v, N);
      } else {
        vF71(O, U, W, true);
      }
    } else {
      if (Z & 8) {
        u(P, "");
      }
      if ($ & 16) {
        B(H, P, j, U, W, g, v, N);
      }
    }
  };
  const vF63 = (_, w, P, j, U, W, g, v, N) => {
    _ = _ || vA;
    w = w || vA;
    const O = _.length;
    const Z = w.length;
    const H = Math.min(O, Z);
    let T;
    for (T = 0; T < H; T++) {
      const $ = (w[T] = N ? f179(w[T]) : f178(w[T]));
      E(_[T], $, P, null, U, W, g, v, N);
    }
    if (O > Z) {
      vF71(_, U, W, true, false, H);
    } else {
      B(w, P, j, U, W, g, v, N, H);
    }
  };
  const vF64 = (_, w, P, j, U, W, g, v, N) => {
    let O = 0;
    const Z = w.length;
    let H = _.length - 1;
    let T = Z - 1;
    while (O <= H && O <= T) {
      const $ = _[O];
      const v51 = (w[O] = N ? f179(w[O]) : f178(w[O]));
      if (f170($, v51)) {
        E($, v51, P, null, U, W, g, v, N);
      } else {
        break;
      }
      O++;
    }
    while (O <= H && O <= T) {
      const $ = _[H];
      const v52 = (w[T] = N ? f179(w[T]) : f178(w[T]));
      if (f170($, v52)) {
        E($, v52, P, null, U, W, g, v, N);
      } else {
        break;
      }
      H--;
      T--;
    }
    if (O > H) {
      if (O <= T) {
        const $ = T + 1;
        const v53 = $ < Z ? w[$].el : j;
        while (O <= T) {
          E(null, (w[O] = N ? f179(w[O]) : f178(w[O])), P, v53, U, W, g, v, N);
          O++;
        }
      }
    } else if (O > T) {
      while (O <= H) {
        z(_[O], U, W, true);
        O++;
      }
    } else {
      const $ = O;
      const vO17 = O;
      const v54 = new Map();
      for (O = vO17; O <= T; O++) {
        const v55 = (w[O] = N ? f179(w[O]) : f178(w[O]));
        if (v55.key != null) {
          v54.set(v55.key, O);
        }
      }
      let v56;
      let vLN06 = 0;
      const v57 = T - vO17 + 1;
      let v58 = false;
      let vLN07 = 0;
      const v59 = new Array(v57);
      for (O = 0; O < v57; O++) {
        v59[O] = 0;
      }
      for (O = $; O <= H; O++) {
        const v60 = _[O];
        if (vLN06 >= v57) {
          z(v60, U, W, true);
          continue;
        }
        let v61;
        if (v60.key != null) {
          v61 = v54.get(v60.key);
        } else {
          for (v56 = vO17; v56 <= T; v56++) {
            if (v59[v56 - vO17] === 0 && f170(v60, w[v56])) {
              v61 = v56;
              break;
            }
          }
        }
        if (v61 === undefined) {
          z(v60, U, W, true);
        } else {
          v59[v61 - vO17] = O + 1;
          if (v61 >= vLN07) {
            vLN07 = v61;
          } else {
            v58 = true;
          }
          E(v60, w[v61], P, null, U, W, g, v, N);
          vLN06++;
        }
      }
      const v62 = v58 ? f145(v59) : vA;
      v56 = v62.length - 1;
      O = v57 - 1;
      for (; O >= 0; O--) {
        const v63 = vO17 + O;
        const v64 = w[v63];
        const v65 = v63 + 1 < Z ? w[v63 + 1].el : j;
        if (v59[O] === 0) {
          E(null, v64, P, v65, U, W, g, v, N);
        } else if (v58) {
          if (v56 < 0 || O !== v62[v56]) {
            vF65(v64, P, v65, 2);
          } else {
            v56--;
          }
        }
      }
    }
  };
  const vF65 = (_, w, P, j, U = null) => {
    const { el: W, type: g, transition: v, children: N, shapeFlag: O } = _;
    if (O & 6) {
      vF65(_.component.subTree, w, P, j);
      return;
    }
    if (O & 128) {
      _.suspense.move(w, P, j);
      return;
    }
    if (O & 64) {
      g.move(_, w, P, vO18);
      return;
    }
    if (g === v70) {
      r(W, w, P);
      for (let H = 0; H < N.length; H++) {
        vF65(N[H], w, P, j);
      }
      r(_.anchor, w, P);
      return;
    }
    if (g === v73) {
      C(_, w, P);
      return;
    }
    if (j !== 2 && O & 1 && v) {
      if (j === 0) {
        v.beforeEnter(W);
        r(W, w, P);
        vIg(() => v.enter(W), U);
      } else {
        const { leave: H, delayLeave: T, afterLeave: $ } = v;
        const vF66 = () => r(W, w, P);
        const vF67 = () => {
          H(W, () => {
            vF66();
            if ($) {
              $();
            }
          });
        };
        if (T) {
          T(W, vF66, vF67);
        } else {
          vF67();
        }
      }
    } else {
      r(W, w, P);
    }
  };
  const z = (_, w, P, j = false, U = false) => {
    const {
      type: W,
      props: g,
      ref: v,
      children: N,
      dynamicChildren: O,
      shapeFlag: Z,
      patchFlag: H,
      dirs: T,
      cacheIndex: $,
    } = _;
    if (H === -2) {
      U = false;
    }
    if (v != null) {
      f96(v, null, P, _, true);
    }
    if ($ != null) {
      w.renderCache[$] = undefined;
    }
    if (Z & 256) {
      w.ctx.deactivate(_);
      return;
    }
    const v66 = Z & 1 && T;
    const v67 = !vF47(_);
    let v68;
    if (v67 && (v68 = g && g.onVnodeBeforeUnmount)) {
      f182(v68, w, _);
    }
    if (Z & 6) {
      vF70(_.component, P, j);
    } else {
      if (Z & 128) {
        _.suspense.unmount(P, j);
        return;
      }
      if (v66) {
        f81(_, null, w, "beforeUnmount");
      }
      if (Z & 64) {
        _.type.remove(_, w, P, vO18, j);
      } else if (O && !O.hasOnce && (W !== v70 || (H > 0 && H & 64))) {
        vF71(O, w, P, false, true);
      } else if ((W === v70 && H & 384) || (!U && Z & 16)) {
        vF71(N, w, P);
      }
      if (j) {
        vF68(_);
      }
    }
    if ((v67 && (v68 = g && g.onVnodeUnmounted)) || v66) {
      vIg(() => {
        if (v68) {
          f182(v68, w, _);
        }
        if (v66) {
          f81(_, null, w, "unmounted");
        }
      }, P);
    }
  };
  const vF68 = (_) => {
    const { type: w, el: P, anchor: j, transition: U } = _;
    if (w === v70) {
      vF69(P, j);
      return;
    }
    if (w === v73) {
      y(_);
      return;
    }
    const W = () => {
      i(P);
      if (U && !U.persisted && U.afterLeave) {
        U.afterLeave();
      }
    };
    if (_.shapeFlag & 1 && U && !U.persisted) {
      const { leave: g, delayLeave: v } = U;
      const N = () => g(P, W);
      if (v) {
        v(_.el, W, N);
      } else {
        N();
      }
    } else {
      W();
    }
  };
  const vF69 = (_, w) => {
    let P;
    while (_ !== w) {
      P = d(_);
      i(_);
      _ = P;
    }
    i(w);
  };
  const vF70 = (_, w, P) => {
    const { bum: j, scope: U, job: W, subTree: g, um: v, m: N, a: O } = _;
    f147(N);
    f147(O);
    if (j) {
      vF26(j);
    }
    U.stop();
    if (W) {
      W.flags |= 8;
      z(g, _, w, P);
    }
    if (v) {
      vIg(v, w);
    }
    vIg(() => {
      _.isUnmounted = true;
    }, w);
    if (
      w &&
      w.pendingBranch &&
      !w.isUnmounted &&
      _.asyncDep &&
      !_.asyncResolved &&
      _.suspenseId === w.pendingId
    ) {
      w.deps--;
      if (w.deps === 0) {
        w.resolve();
      }
    }
  };
  const vF71 = (_, w, P, j = false, U = false, W = 0) => {
    for (let g = W; g < _.length; g++) {
      z(_[g], w, P, j, U);
    }
  };
  const F = (_) => {
    if (_.shapeFlag & 6) {
      return F(_.component.subTree);
    }
    if (_.shapeFlag & 128) {
      return _.suspense.next();
    }
    const w = d(_.anchor || _.el);
    const P = w && w[vSymbol4];
    if (P) {
      return d(P);
    } else {
      return w;
    }
  };
  let Y = false;
  const X = (_, w, P) => {
    if (_ == null) {
      if (w._vnode) {
        z(w._vnode, null, null, true);
      }
    } else {
      E(w._vnode || null, _, w, null, null, null, P);
    }
    w._vnode = _;
    if (!Y) {
      Y = true;
      f75();
      f76();
      Y = false;
    }
  };
  const vO18 = {
    p: E,
    um: z,
    m: vF65,
    r: vF68,
    mt: D,
    mc: B,
    pc: K,
    pbc: R,
    n: F,
    o: e,
  };
  return {
    render: X,
    hydrate: undefined,
    createApp: f129(X),
  };
}
function f141({ type: e, props: t }, n) {
  if (
    (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
  ) {
    return undefined;
  } else {
    return n;
  }
}
function f142({ effect: e, job: t }, n) {
  if (n) {
    e.flags |= 32;
    t.flags |= 4;
  } else {
    e.flags &= -33;
    t.flags &= -5;
  }
}
function f143(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function f144(e, t, n = false) {
  const r = e.children;
  const i = t.children;
  if (v4(r) && v4(i)) {
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let a = i[s];
      if (a.shapeFlag & 1 && !a.dynamicChildren) {
        if (a.patchFlag <= 0 || a.patchFlag === 32) {
          a = i[s] = f179(i[s]);
          a.el = o.el;
        }
        if (!n && a.patchFlag !== -2) {
          f144(o, a);
        }
      }
      if (a.type === v71) {
        a.el = o.el;
      }
    }
  }
}
function f145(e) {
  const t = e.slice();
  const n = [0];
  let r;
  let i;
  let s;
  let o;
  let a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      i = n[n.length - 1];
      if (e[i] < c) {
        t[r] = i;
        n.push(r);
        continue;
      }
      s = 0;
      o = n.length - 1;
      while (s < o) {
        a = (s + o) >> 1;
        if (e[n[a]] < c) {
          s = a + 1;
        } else {
          o = a;
        }
      }
      if (c < e[n[s]]) {
        if (s > 0) {
          t[r] = n[s - 1];
        }
        n[s] = r;
      }
    }
  }
  s = n.length;
  o = n[s - 1];
  while (s-- > 0) {
    n[s] = o;
    o = t[o];
  }
  return n;
}
function f146(e) {
  const t = e.subTree.component;
  if (t) {
    if (t.asyncDep && !t.asyncResolved) {
      return t;
    } else {
      return f146(t);
    }
  }
}
function f147(e) {
  if (e) {
    for (let t = 0; t < e.length; t++) {
      e[t].flags |= 8;
    }
  }
}
const v69 = Symbol.for("v-scx");
const vF72 = () => f131(v69);
function f148(e, t) {
  return f151(e, null, t);
}
function f149(e, t) {
  return f151(e, null, {
    flush: "sync",
  });
}
function f150(e, t, n) {
  return f151(e, t, n);
}
function f151(e, t, n = vO2) {
  const { immediate: r, deep: i, flush: s, once: o } = n;
  const a = v2({}, n);
  const l = (t && r) || (!t && s !== "post");
  let c;
  if (v78) {
    if (s === "sync") {
      const h = vF72();
      c = h.__watcherHandles ||= [];
    } else if (!l) {
      const h = () => {};
      h.stop = vF5;
      h.resume = vF5;
      h.pause = vF5;
      return h;
    }
  }
  const u = v75;
  a.call = (h, p, E) => f67(h, u, p, E);
  let f = false;
  if (s === "post") {
    a.scheduler = (h) => {
      vIg(h, u && u.suspense);
    };
  } else if (s !== "sync") {
    f = true;
    a.scheduler = (h, p) => {
      if (p) {
        h();
      } else {
        f72(h);
      }
    };
  }
  a.augmentJob = (h) => {
    if (t) {
      h.flags |= 4;
    }
    if (f) {
      h.flags |= 2;
      if (u) {
        h.id = u.uid;
        h.i = u;
      }
    }
  };
  const d = f64(e, t, a);
  if (v78) {
    if (c) {
      c.push(d);
    } else if (l) {
      d();
    }
  }
  return d;
}
function f152(e, t, n) {
  const r = this.proxy;
  const i = vF15(e)
    ? e.includes(".")
      ? f153(r, e)
      : () => r[e]
    : e.bind(r, r);
  let s;
  if (vF14(t)) {
    s = t;
  } else {
    s = t.handler;
    n = t;
  }
  const o = vF80(this);
  const a = f151(i, s.bind(r), n);
  o();
  return a;
}
function f153(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++) {
      r = r[n[i]];
    }
    return r;
  };
}
function f154(e, t, n = vO2) {
  const r = vF79();
  const i = vVF24(t);
  const s = vVF242(t);
  const o = vF73(e, i);
  const a = f58((l, c) => {
    let u;
    let f = vO2;
    let d;
    f149(() => {
      const h = e[i];
      if (vF25(u, h)) {
        u = h;
        c();
      }
    });
    return {
      get() {
        l();
        if (n.get) {
          return n.get(u);
        } else {
          return u;
        }
      },
      set(h) {
        const p = n.set ? n.set(h) : h;
        if (!vF25(p, u) && (f === vO2 || !vF25(h, f))) {
          return;
        }
        const E = r.vnode.props;
        if (
          !E ||
          (!(t in E) && !(i in E) && !(s in E)) ||
          (!(`onUpdate:${t}` in E) &&
            !(`onUpdate:${i}` in E) &&
            !(`onUpdate:${s}` in E))
        ) {
          u = h;
          c();
        }
        r.emit(`update:${t}`, p);
        if (vF25(h, p) && vF25(h, f) && !vF25(p, d)) {
          c();
        }
        f = h;
        d = p;
      },
    };
  });
  a[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        if (l < 2) {
          return {
            value: l++ ? o || vO2 : a,
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  };
  return a;
}
const vF73 = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] ||
      e[`${vVF24(t)}Modifiers`] ||
      e[`${vVF242(t)}Modifiers`];
function f155(e, t, ...n) {
  if (e.isUnmounted) {
    return;
  }
  const r = e.vnode.props || vO2;
  let i = n;
  const s = t.startsWith("update:");
  const o = s && vF73(r, t.slice(7));
  if (o) {
    if (o.trim) {
      i = n.map((u) => (vF15(u) ? u.trim() : u));
    }
    if (o.number) {
      i = n.map(vF28);
    }
  }
  let a;
  let l = r[(a = vVF244(t))] || r[(a = vVF244(vVF24(t)))];
  if (!l && s) {
    l = r[(a = vVF244(vVF242(t)))];
  }
  if (l) {
    f67(l, e, 6, i);
  }
  const c = r[a + "Once"];
  if (c) {
    if (!e.emitted) {
      e.emitted = {};
    } else if (e.emitted[a]) {
      return;
    }
    e.emitted[a] = true;
    f67(c, e, 6, i);
  }
}
function f156(e, t, n = false) {
  const r = t.emitsCache;
  const i = r.get(e);
  if (i !== undefined) {
    return i;
  }
  const s = e.emits;
  let o = {};
  let a = false;
  if (!vF14(e)) {
    const l = (c) => {
      const u = f156(c, t, true);
      if (u) {
        a = true;
        v2(o, u);
      }
    };
    if (!n && t.mixins.length) {
      t.mixins.forEach(l);
    }
    if (e.extends) {
      l(e.extends);
    }
    if (e.mixins) {
      e.mixins.forEach(l);
    }
  }
  if (!s && !a) {
    if (vF17(e)) {
      r.set(e, null);
    }
    return null;
  } else {
    if (v4(s)) {
      s.forEach((l) => (o[l] = null));
    } else {
      v2(o, s);
    }
    if (vF17(e)) {
      r.set(e, o);
    }
    return o;
  }
}
function f157(e, t) {
  if (!e || !vF7(t)) {
    return false;
  } else {
    t = t.slice(2).replace(/Once$/, "");
    return (
      vF10(e, t[0].toLowerCase() + t.slice(1)) ||
      vF10(e, vVF242(t)) ||
      vF10(e, t)
    );
  }
}
function f158(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [s],
    slots: o,
    attrs: a,
    emit: l,
    render: c,
    renderCache: u,
    props: f,
    data: d,
    setupState: h,
    ctx: p,
    inheritAttrs: E,
  } = e;
  const A = f78(e);
  let b;
  let m;
  try {
    if (n.shapeFlag & 4) {
      const y = i || r;
      const x = y;
      b = f178(c.call(x, y, u, f, h, d, p));
      m = a;
    } else {
      const y = t;
      b = f178(
        y.length > 1
          ? y(f, {
              attrs: a,
              slots: o,
              emit: l,
            })
          : y(f, null)
      );
      m = t.props ? a : vF74(a);
    }
  } catch (y) {
    vA6.length = 0;
    f68(y, e, 1);
    b = vLg(v72);
  }
  let C = b;
  if (m && E !== false) {
    const y = Object.keys(m);
    const { shapeFlag: x } = C;
    if (y.length && x & 7) {
      if (s && y.some(vF8)) {
        m = vF75(m, s);
      }
      C = f174(C, m, false, true);
    }
  }
  if (n.dirs) {
    C = f174(C, null, false, true);
    C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs;
  }
  if (n.transition) {
    f92(C, n.transition);
  }
  b = C;
  f78(A);
  return b;
}
const vF74 = (e) => {
  let t;
  for (const n in e) {
    if (n === "class" || n === "style" || vF7(n)) {
      (t ||= {})[n] = e[n];
    }
  }
  return t;
};
const vF75 = (e, t) => {
  const n = {};
  for (const r in e) {
    if (!vF8(r) || !(r.slice(9) in t)) {
      n[r] = e[r];
    }
  }
  return n;
};
function f159(e, t, n) {
  const { props: r, children: i, component: s } = e;
  const { props: o, children: a, patchFlag: l } = t;
  const c = s.emitsOptions;
  if (t.dirs || t.transition) {
    return true;
  }
  if (n && l >= 0) {
    if (l & 1024) {
      return true;
    }
    if (l & 16) {
      if (r) {
        return f160(r, o, c);
      } else {
        return !!o;
      }
    }
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (o[d] !== r[d] && !f157(c, d)) {
          return true;
        }
      }
    }
  } else if ((i || a) && (!a || !a.$stable)) {
    return true;
  } else if (r === o) {
    return false;
  } else if (r) {
    if (o) {
      return f160(r, o, c);
    } else {
      return true;
    }
  } else {
    return !!o;
  }
  return false;
}
function f160(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) {
    return true;
  }
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (t[s] !== e[s] && !f157(n, s)) {
      return true;
    }
  }
  return false;
}
function f161({ vnode: e, parent: t }, n) {
  while (t) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e) {
      r.el = e.el;
    }
    if (r === e) {
      (e = t.vnode).el = n;
      t = t.parent;
    } else {
      break;
    }
  }
}
const vF76 = (e) => e.__isSuspense;
function f162(e, t) {
  if (t && t.pendingBranch) {
    if (v4(e)) {
      t.effects.push(...e);
    } else {
      t.effects.push(e);
    }
  } else {
    f74(e);
  }
}
const v70 = Symbol.for("v-fgt");
const v71 = Symbol.for("v-txt");
const v72 = Symbol.for("v-cmt");
const v73 = Symbol.for("v-stc");
const vA6 = [];
let v74 = null;
function f163(e = false) {
  vA6.push((v74 = e ? null : []));
}
function f164() {
  vA6.pop();
  v74 = vA6[vA6.length - 1] || null;
}
let vLN1 = 1;
function f165(e, t = false) {
  vLN1 += e;
  if (e < 0 && v74 && t) {
    v74.hasOnce = true;
  }
}
function f166(e) {
  e.dynamicChildren = vLN1 > 0 ? v74 || vA : null;
  f164();
  if (vLN1 > 0 && v74) {
    v74.push(e);
  }
  return e;
}
function f167(e, t, n, r, i, s) {
  return f166(f171(e, t, n, r, i, s, true));
}
function f168(e, t, n, r, i) {
  return f166(vLg(e, t, n, r, i, true));
}
function f169(e) {
  if (e) {
    return e.__v_isVNode === true;
  } else {
    return false;
  }
}
function f170(e, t) {
  return e.type === t.type && e.key === t.key;
}
const vF77 = ({ key: e }) => e ?? null;
const vF78 = ({ ref: e, ref_key: t, ref_for: n }) => {
  if (typeof e == "number") {
    e = "" + e;
  }
  if (e != null) {
    if (vF15(e) || f51(e) || vF14(e)) {
      return {
        i: v35,
        r: e,
        k: t,
        f: !!n,
      };
    } else {
      return e;
    }
  } else {
    return null;
  }
};
function f171(
  e,
  t = null,
  n = null,
  r = 0,
  i = null,
  s = e === v70 ? 0 : 1,
  o = false,
  a = false
) {
  const l = {
    __v_isVNode: true,
    __v_skip: true,
    type: e,
    props: t,
    key: t && vF77(t),
    ref: t && vF78(t),
    scopeId: v36,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: v35,
  };
  if (a) {
    f180(l, n);
    if (s & 128) {
      e.normalize(l);
    }
  } else if (n) {
    l.shapeFlag |= vF15(n) ? 8 : 16;
  }
  if (
    vLN1 > 0 &&
    !o &&
    v74 &&
    (l.patchFlag > 0 || s & 6) &&
    l.patchFlag !== 32
  ) {
    v74.push(l);
  }
  return l;
}
const vLg = f172;
function f172(e, t = null, n = null, r = 0, i = null, s = false) {
  if (!e || e === v37) {
    e = v72;
  }
  if (f169(e)) {
    const a = f174(e, t, true);
    if (n) {
      f180(a, n);
    }
    if (vLN1 > 0 && !s && v74) {
      if (a.shapeFlag & 6) {
        v74[v74.indexOf(e)] = a;
      } else {
        v74.push(a);
      }
    }
    a.patchFlag = -2;
    return a;
  }
  if (f192(e)) {
    e = e.__vccOpts;
  }
  if (t) {
    t = f173(t);
    let { class: a, style: l } = t;
    if (a && !vF15(a)) {
      t.class = f5(a);
    }
    if (vF17(l)) {
      if (f48(l) && !v4(l)) {
        l = v2({}, l);
      }
      t.style = f3(l);
    }
  }
  const o = vF15(e)
    ? 1
    : vF76(e)
    ? 128
    : vF40(e)
    ? 64
    : vF17(e)
    ? 4
    : vF14(e)
    ? 2
    : 0;
  return f171(e, t, n, r, i, o, s, true);
}
function f173(e) {
  if (e) {
    if (f48(e) || vF53(e)) {
      return v2({}, e);
    } else {
      return e;
    }
  } else {
    return null;
  }
}
function f174(e, t, n = false, r = false) {
  const { props: i, ref: s, patchFlag: o, children: a, transition: l } = e;
  const c = t ? f181(i || {}, t) : i;
  const u = {
    __v_isVNode: true,
    __v_skip: true,
    type: e.type,
    props: c,
    key: c && vF77(c),
    ref:
      t && t.ref
        ? n && s
          ? v4(s)
            ? s.concat(vF78(t))
            : [s, vF78(t)]
          : vF78(t)
        : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== v70 ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && f174(e.ssContent),
    ssFallback: e.ssFallback && f174(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
  if (l && r) {
    f92(u, l.clone(u));
  }
  return u;
}
function f175(e = " ", t = 0) {
  return vLg(v71, null, e, t);
}
function f176(e, t) {
  const n = vLg(v73, null, e);
  n.staticCount = t;
  return n;
}
function f177(e = "", t = false) {
  if (t) {
    f163();
    return f168(v72, null, e);
  } else {
    return vLg(v72, null, e);
  }
}
function f178(e) {
  if (e == null || typeof e == "boolean") {
    return vLg(v72);
  } else if (v4(e)) {
    return vLg(v70, null, e.slice());
  } else if (f169(e)) {
    return f179(e);
  } else {
    return vLg(v71, null, String(e));
  }
}
function f179(e) {
  if ((e.el === null && e.patchFlag !== -1) || e.memo) {
    return e;
  } else {
    return f174(e);
  }
}
function f180(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) {
    t = null;
  } else if (v4(t)) {
    n = 16;
  } else if (typeof t == "object") {
    if (r & 65) {
      const i = t.default;
      if (i) {
        if (i._c) {
          i._d = false;
        }
        f180(e, i());
        if (i._c) {
          i._d = true;
        }
      }
      return;
    } else {
      n = 32;
      const i = t._;
      if (!i && !vF53(t)) {
        t._ctx = v35;
      } else if (i === 3 && v35) {
        if (v35.slots._ === 1) {
          t._ = 1;
        } else {
          t._ = 2;
          e.patchFlag |= 1024;
        }
      }
    }
  } else if (vF14(t)) {
    t = {
      default: t,
      _ctx: v35,
    };
    n = 32;
  } else {
    t = String(t);
    if (r & 64) {
      n = 16;
      t = [f175(t)];
    } else {
      n = 8;
    }
  }
  e.children = t;
  e.shapeFlag |= n;
}
function f181(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r) {
      if (i === "class") {
        if (t.class !== r.class) {
          t.class = f5([t.class, r.class]);
        }
      } else if (i === "style") {
        t.style = f3([t.style, r.style]);
      } else if (vF7(i)) {
        const s = t[i];
        const o = r[i];
        if (o && s !== o && (!v4(s) || !s.includes(o))) {
          t[i] = s ? [].concat(s, o) : o;
        }
      } else if (i !== "") {
        t[i] = r[i];
      }
    }
  }
  return t;
}
function f182(e, t, n, r = null) {
  f67(e, t, 7, [n, r]);
}
const vF128 = f128();
let vLN08 = 0;
function f183(e, t, n) {
  const r = e.type;
  const i = (t ? t.appContext : e.appContext) || vF128;
  const s = {
    uid: vLN08++,
    vnode: e,
    type: r,
    parent: t,
    appContext: i,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    job: null,
    scope: new C2(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: f137(r, i),
    emitsOptions: f156(r, i),
    emit: null,
    emitted: null,
    propsDefaults: vO2,
    inheritAttrs: r.inheritAttrs,
    ctx: vO2,
    data: vO2,
    props: vO2,
    attrs: vO2,
    slots: vO2,
    refs: vO2,
    setupState: vO2,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null,
  };
  s.ctx = {
    _: s,
  };
  s.root = t ? t.root : s;
  s.emit = f155.bind(null, s);
  if (e.ce) {
    e.ce(s);
  }
  return s;
}
let v75 = null;
const vF79 = () => v75 || v35;
let v76;
let v77;
{
  const e = vF30();
  const t = (n, r) => {
    let i;
    if (!(i = e[n])) {
      i = e[n] = [];
    }
    i.push(r);
    return (s) => {
      if (i.length > 1) {
        i.forEach((o) => o(s));
      } else {
        i[0](s);
      }
    };
  };
  v76 = t("__VUE_INSTANCE_SETTERS__", (n) => (v75 = n));
  v77 = t("__VUE_SSR_SETTERS__", (n) => (v78 = n));
}
const vF80 = (e) => {
  const t = v75;
  v76(e);
  e.scope.on();
  return () => {
    e.scope.off();
    v76(t);
  };
};
const vF81 = () => {
  if (v75) {
    v75.scope.off();
  }
  v76(null);
};
function f184(e) {
  return e.vnode.shapeFlag & 4;
}
let v78 = false;
function f185(e, t = false, n = false) {
  if (t) {
    v77(t);
  }
  const { props: r, children: i } = e.vnode;
  const s = f184(e);
  f133(e, r, s, t);
  vF60(e, i, n);
  const o = s ? f186(e, t) : undefined;
  if (t) {
    v77(false);
  }
  return o;
}
function f186(e, t) {
  const n = e.type;
  e.accessCache = Object.create(null);
  e.proxy = new Proxy(e.ctx, vO14);
  const { setup: r } = n;
  if (r) {
    f19();
    const i = (e.setupContext = r.length > 1 ? f189(e) : null);
    const s = vF80(e);
    const o = f66(r, e, 0, [e.props, i]);
    const a = vF18(o);
    f20();
    s();
    if ((a || e.sp) && !vF47(e)) {
      f95(e);
    }
    if (a) {
      o.then(vF81, vF81);
      if (t) {
        return o
          .then((l) => {
            f187(e, l);
          })
          .catch((l) => {
            f68(l, e, 0);
          });
      }
      e.asyncDep = o;
    } else {
      f187(e, o);
    }
  } else {
    f188(e);
  }
}
function f187(e, t, n) {
  if (vF14(t)) {
    if (e.type.__ssrInlineRender) {
      e.ssrRender = t;
    } else {
      e.render = t;
    }
  } else if (vF17(t)) {
    e.setupState = f57(t);
  }
  f188(e);
}
function f188(e, t, n) {
  const r = e.type;
  e.render ||= r.render || vF5;
  {
    const i = vF80(e);
    f19();
    try {
      f115(e);
    } finally {
      f20();
      i();
    }
  }
}
const vO19 = {
  get(e, t) {
    f23(e, "get", "");
    return e[t];
  },
};
function f189(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, vO19),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function f190(e) {
  if (e.exposed) {
    return (e.exposeProxy ||= new Proxy(f57(f50(e.exposed)), {
      get(t, n) {
        if (n in t) {
          return t[n];
        }
        if (n in vV2) {
          return vV2[n](e);
        }
      },
      has(t, n) {
        return n in t || n in vV2;
      },
    }));
  } else {
    return e.proxy;
  }
}
function f191(e, t = true) {
  if (vF14(e)) {
    return e.displayName || e.name;
  } else {
    return e.name || (t && e.__name);
  }
}
function f192(e) {
  return vF14(e) && "__vccOpts" in e;
}
const M = (e, t) => f62(e, t, v78);
function q(e, t, n) {
  const r = arguments.length;
  if (r === 2) {
    if (vF17(t) && !v4(t)) {
      if (f169(t)) {
        return vLg(e, null, [t]);
      } else {
        return vLg(e, t);
      }
    } else {
      return vLg(e, null, t);
    }
  } else {
    if (r > 3) {
      n = Array.prototype.slice.call(arguments, 2);
    } else if (r === 3 && f169(n)) {
      n = [n];
    }
    return vLg(e, t, n);
  }
}
const vLS3513 = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let v79;
const v80 = typeof window !== "undefined" && window.trustedTypes;
if (v80) {
  try {
    v79 = v80.createPolicy("vue", {
      createHTML: (e) => e,
    });
  } catch {}
}
const v81 = v79 ? (e) => v79.createHTML(e) : (e) => e;
const vLSHttpwwww3org2000svg = "http://www.w3.org/2000/svg";
const vLSHttpwwww3org1998Math = "http://www.w3.org/1998/Math/MathML";
const v82 = typeof document !== "undefined" ? document : null;
const v83 = v82 && v82.createElement("template");
const vO20 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    if (t) {
      t.removeChild(e);
    }
  },
  createElement: (e, t, n, r) => {
    const i =
      t === "svg"
        ? v82.createElementNS(vLSHttpwwww3org2000svg, e)
        : t === "mathml"
        ? v82.createElementNS(vLSHttpwwww3org1998Math, e)
        : n
        ? v82.createElement(e, {
            is: n,
          })
        : v82.createElement(e);
    if (e === "select" && r && r.multiple != null) {
      i.setAttribute("multiple", r.multiple);
    }
    return i;
  },
  createText: (e) => v82.createTextNode(e),
  createComment: (e) => v82.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => v82.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, r, i, s) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === s || i.nextSibling)) {
      while (
        (t.insertBefore(i.cloneNode(true), n), i !== s && !!(i = i.nextSibling))
      );
    } else {
      v83.innerHTML = v81(
        r === "svg"
          ? `<svg>${e}</svg>`
          : r === "mathml"
          ? `<math>${e}</math>`
          : e
      );
      const a = v83.content;
      if (r === "svg" || r === "mathml") {
        const l = a.firstChild;
        while (l.firstChild) {
          a.appendChild(l.firstChild);
        }
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      o ? o.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild,
    ];
  },
};
const vLSTransition = "transition";
const vLSAnimation = "animation";
const vSymbol7 = Symbol("_vtc");
const vO21 = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true,
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
const vV22 = v2({}, vO11, vO21);
const vF82 = (e) => {
  e.displayName = "Transition";
  e.props = vV22;
  return e;
};
const vVF82 = vF82((e, { slots: t }) => q(vVO12, f193(e), t));
const vF83 = (e, t = []) => {
  if (v4(e)) {
    e.forEach((n) => n(...t));
  } else if (e) {
    e(...t);
  }
};
const vF84 = (e) =>
  e ? (v4(e) ? e.some((t) => t.length > 1) : e.length > 1) : false;
function f193(e) {
  const t = {};
  for (const S in e) {
    if (!(S in vO21)) {
      t[S] = e[S];
    }
  }
  if (e.css === false) {
    return t;
  }
  const {
    name: n = "v",
    type: r,
    duration: i,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: c = o,
    appearToClass: u = a,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`,
  } = e;
  const p = f194(i);
  const E = p && p[0];
  const A = p && p[1];
  const {
    onBeforeEnter: b,
    onEnter: m,
    onEnterCancelled: C,
    onLeave: y,
    onLeaveCancelled: x,
    onBeforeAppear: L = b,
    onAppear: I = m,
    onAppearCancelled: B = C,
  } = t;
  const k = (S, G, D, p5) => {
    S._enterCancelled = p5;
    f197(S, G ? u : a);
    f197(S, G ? c : o);
    if (D) {
      D();
    }
  };
  const R = (S, G) => {
    S._isLeaving = false;
    f197(S, f);
    f197(S, h);
    f197(S, d);
    if (G) {
      G();
    }
  };
  const V = (S) => (G, D) => {
    const v84 = S ? I : m;
    const J = () => k(G, S, D);
    vF83(v84, [G, J]);
    f198(() => {
      f197(G, S ? l : s);
      f196(G, S ? u : a);
      if (!vF84(v84)) {
        f199(G, r, E, J);
      }
    });
  };
  return v2(t, {
    onBeforeEnter(S) {
      vF83(b, [S]);
      f196(S, s);
      f196(S, o);
    },
    onBeforeAppear(S) {
      vF83(L, [S]);
      f196(S, l);
      f196(S, c);
    },
    onEnter: V(false),
    onAppear: V(true),
    onLeave(S, G) {
      S._isLeaving = true;
      const D = () => R(S, G);
      f196(S, f);
      if (S._enterCancelled) {
        f196(S, d);
        f203();
      } else {
        f203();
        f196(S, d);
      }
      f198(() => {
        if (S._isLeaving) {
          f197(S, f);
          f196(S, h);
          if (!vF84(y)) {
            f199(S, r, A, D);
          }
        }
      });
      vF83(y, [S, D]);
    },
    onEnterCancelled(S) {
      k(S, false, undefined, true);
      vF83(C, [S]);
    },
    onAppearCancelled(S) {
      k(S, true, undefined, true);
      vF83(B, [S]);
    },
    onLeaveCancelled(S) {
      R(S);
      vF83(x, [S]);
    },
  });
}
function f194(e) {
  if (e == null) {
    return null;
  }
  if (vF17(e)) {
    return [f195(e.enter), f195(e.leave)];
  }
  {
    const t = f195(e);
    return [t, t];
  }
}
function f195(e) {
  return vF29(e);
}
function f196(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n));
  (e[vSymbol7] ||= new Set()).add(t);
}
function f197(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[vSymbol7];
  if (n) {
    n.delete(t);
    if (!n.size) {
      e[vSymbol7] = undefined;
    }
  }
}
function f198(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let vLN09 = 0;
function f199(e, t, n, r) {
  const i = (e._endId = ++vLN09);
  const s = () => {
    if (i === e._endId) {
      r();
    }
  };
  if (n != null) {
    return setTimeout(s, n);
  }
  const { type: o, timeout: a, propCount: l } = f200(e, t);
  if (!o) {
    return r();
  }
  const c = o + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(c, d);
    s();
  };
  const d = (h) => {
    if (h.target === e && ++u >= l) {
      f();
    }
  };
  setTimeout(() => {
    if (u < l) {
      f();
    }
  }, a + 1);
  e.addEventListener(c, d);
}
function f200(e, t) {
  const n = window.getComputedStyle(e);
  const r = (p) => (n[p] || "").split(", ");
  const i = r(`${vLSTransition}Delay`);
  const s = r(`${vLSTransition}Duration`);
  const o = f201(i, s);
  const a = r(`${vLSAnimation}Delay`);
  const l = r(`${vLSAnimation}Duration`);
  const c = f201(a, l);
  let u = null;
  let f = 0;
  let d = 0;
  if (t === vLSTransition) {
    if (o > 0) {
      u = vLSTransition;
      f = o;
      d = s.length;
    }
  } else if (t === vLSAnimation) {
    if (c > 0) {
      u = vLSAnimation;
      f = c;
      d = l.length;
    }
  } else {
    f = Math.max(o, c);
    u = f > 0 ? (o > c ? vLSTransition : vLSAnimation) : null;
    d = u ? (u === vLSTransition ? s.length : l.length) : 0;
  }
  const h =
    u === vLSTransition &&
    /\b(transform|all)(,|$)/.test(r(`${vLSTransition}Property`).toString());
  return {
    type: u,
    timeout: f,
    propCount: d,
    hasTransform: h,
  };
}
function f201(e, t) {
  while (e.length < t.length) {
    e = e.concat(e);
  }
  return Math.max(...t.map((n, r) => f202(n) + f202(e[r])));
}
function f202(e) {
  if (e === "auto") {
    return 0;
  } else {
    return Number(e.slice(0, -1).replace(",", ".")) * 1000;
  }
}
function f203() {
  return document.body.offsetHeight;
}
function f204(e, t, n) {
  const r = e[vSymbol7];
  if (r) {
    t = (t ? [t, ...r] : [...r]).join(" ");
  }
  if (t == null) {
    e.removeAttribute("class");
  } else if (n) {
    e.setAttribute("class", t);
  } else {
    e.className = t;
  }
}
const vSymbol8 = Symbol("_vod");
const vSymbol9 = Symbol("_vsh");
const vO22 = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[vSymbol8] = e.style.display === "none" ? "" : e.style.display;
    if (n && t) {
      n.beforeEnter(e);
    } else {
      f205(e, t);
    }
  },
  mounted(e, { value: t }, { transition: n }) {
    if (n && t) {
      n.enter(e);
    }
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    if (!t != !n) {
      if (r) {
        if (t) {
          r.beforeEnter(e);
          f205(e, true);
          r.enter(e);
        } else {
          r.leave(e, () => {
            f205(e, false);
          });
        }
      } else {
        f205(e, t);
      }
    }
  },
  beforeUnmount(e, { value: t }) {
    f205(e, t);
  },
};
function f205(e, t) {
  e.style.display = t ? e[vSymbol8] : "none";
  e[vSymbol9] = !t;
}
const vSymbol10 = Symbol("");
const v85 = /(^|;)\s*display\s*:/;
function f206(e, t, n) {
  const r = e.style;
  const i = vF15(n);
  let s = false;
  if (n && !i) {
    if (t) {
      if (vF15(t)) {
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          if (n[a] == null) {
            f207(r, a, "");
          }
        }
      } else {
        for (const o in t) {
          if (n[o] == null) {
            f207(r, o, "");
          }
        }
      }
    }
    for (const o in n) {
      if (o === "display") {
        s = true;
      }
      f207(r, o, n[o]);
    }
  } else if (i) {
    if (t !== n) {
      const o = r[vSymbol10];
      if (o) {
        n += ";" + o;
      }
      r.cssText = n;
      s = v85.test(n);
    }
  } else if (t) {
    e.removeAttribute("style");
  }
  if (vSymbol8 in e) {
    e[vSymbol8] = s ? r.display : "";
    if (e[vSymbol9]) {
      r.display = "none";
    }
  }
}
const v86 = /\s*!important$/;
function f207(e, t, n) {
  if (v4(n)) {
    n.forEach((r) => f207(e, t, r));
  } else {
    if (n == null) {
      n = "";
    }
    if (t.startsWith("--")) {
      e.setProperty(t, n);
    } else {
      const r = f208(e, t);
      if (v86.test(n)) {
        e.setProperty(vVF242(r), n.replace(v86, ""), "important");
      } else {
        e[r] = n;
      }
    }
  }
}
const vA7 = ["Webkit", "Moz", "ms"];
const vO23 = {};
function f208(e, t) {
  const n = vO23[t];
  if (n) {
    return n;
  }
  let r = vVF24(t);
  if (r !== "filter" && r in e) {
    return (vO23[t] = r);
  }
  r = vVF243(r);
  for (let i = 0; i < vA7.length; i++) {
    const s = vA7[i] + r;
    if (s in e) {
      return (vO23[t] = s);
    }
  }
  return t;
}
const vLSHttpwwww3org1999xlin = "http://www.w3.org/1999/xlink";
function f209(e, t, n, r, i, s = vF210(t)) {
  if (r && t.startsWith("xlink:")) {
    if (n == null) {
      e.removeAttributeNS(vLSHttpwwww3org1999xlin, t.slice(6, t.length));
    } else {
      e.setAttributeNS(vLSHttpwwww3org1999xlin, t, n);
    }
  } else if (n == null || (s && !f6(n))) {
    e.removeAttribute(t);
  } else {
    e.setAttribute(t, s ? "" : vF16(n) ? String(n) : n);
  }
}
function f210(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    if (n != null) {
      e[t] = t === "innerHTML" ? v81(n) : n;
    }
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
    const a = s === "OPTION" ? e.getAttribute("value") || "" : e.value;
    const l = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    if (a !== l || !("_value" in e)) {
      e.value = l;
    }
    if (n == null) {
      e.removeAttribute(t);
    }
    e._value = n;
    return;
  }
  let o = false;
  if (n === "" || n == null) {
    const a = typeof e[t];
    if (a === "boolean") {
      n = f6(n);
    } else if (n == null && a === "string") {
      n = "";
      o = true;
    } else if (a === "number") {
      n = 0;
      o = true;
    }
  }
  try {
    e[t] = n;
  } catch {}
  if (o) {
    e.removeAttribute(i || t);
  }
}
function f211(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function f212(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const vSymbol11 = Symbol("_vei");
function f213(e, t, n, r, i = null) {
  const s = (e[vSymbol11] ||= {});
  const o = s[t];
  if (r && o) {
    o.value = r;
  } else {
    const [a, l] = f214(t);
    if (r) {
      const c = (s[t] = f215(r, i));
      f211(e, a, c, l);
    } else if (o) {
      f212(e, a, o, l);
      s[t] = undefined;
    }
  }
}
const v87 = /(?:Once|Passive|Capture)$/;
function f214(e) {
  let t;
  if (v87.test(e)) {
    t = {};
    let r;
    while ((r = e.match(v87))) {
      e = e.slice(0, e.length - r[0].length);
      t[r[0].toLowerCase()] = true;
    }
  }
  return [e[2] === ":" ? e.slice(3) : vVF242(e.slice(2)), t];
}
let vLN010 = 0;
const v88 = Promise.resolve();
const vF85 = () =>
  vLN010 || (v88.then(() => (vLN010 = 0)), (vLN010 = Date.now()));
function f215(e, t) {
  const n = (r) => {
    if (!r._vts) {
      r._vts = Date.now();
    } else if (r._vts <= n.attached) {
      return;
    }
    f67(f216(r, n.value), t, 5, [r]);
  };
  n.value = e;
  n.attached = vF85();
  return n;
}
function f216(e, t) {
  if (v4(t)) {
    const n = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      n.call(e);
      e._stopped = true;
    };
    return t.map((r) => (i) => !i._stopped && r && r(i));
  } else {
    return t;
  }
}
const vF86 = (e) =>
  e.charCodeAt(0) === 111 &&
  e.charCodeAt(1) === 110 &&
  e.charCodeAt(2) > 96 &&
  e.charCodeAt(2) < 123;
const vF87 = (e, t, n, r, i, s) => {
  const o = i === "svg";
  if (t === "class") {
    f204(e, r, o);
  } else if (t === "style") {
    f206(e, n, r);
  } else if (vF7(t)) {
    if (!vF8(t)) {
      f213(e, t, n, r, s);
    }
  } else if (
    t[0] === "."
      ? ((t = t.slice(1)), true)
      : t[0] === "^"
      ? ((t = t.slice(1)), false)
      : f217(e, t, r, o)
  ) {
    f210(e, t, r);
    if (
      !e.tagName.includes("-") &&
      (t === "value" || t === "checked" || t === "selected")
    ) {
      f209(e, t, r, o, s, t !== "value");
    }
  } else if (e._isVueCE && (/[A-Z]/.test(t) || !vF15(r))) {
    f210(e, vVF24(t), r, s, t);
  } else {
    if (t === "true-value") {
      e._trueValue = r;
    } else if (t === "false-value") {
      e._falseValue = r;
    }
    f209(e, t, r, o);
  }
};
function f217(e, t, n, r) {
  if (r) {
    return (
      t === "innerHTML" ||
      t === "textContent" ||
      (!!(t in e) && !!vF86(t) && !!vF14(n))
    );
  }
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  ) {
    return false;
  }
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") {
      return false;
    }
  }
  if (vF86(t) && vF15(n)) {
    return false;
  } else {
    return t in e;
  }
}
const v89 = new WeakMap();
const v90 = new WeakMap();
const vSymbol12 = Symbol("_moveCb");
const vSymbol13 = Symbol("_enterCb");
const vF88 = (e) => {
  delete e.props.mode;
  return e;
};
const vVF88 = vF88({
  name: "TransitionGroup",
  props: v2({}, vV22, {
    tag: String,
    moveClass: String,
  }),
  setup(e, { slots: t }) {
    const n = vF79();
    const r = f86();
    let i;
    let s;
    vVF494(() => {
      if (!i.length) {
        return;
      }
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!f221(i[0].el, n.vnode.el, o)) {
        return;
      }
      i.forEach(f218);
      i.forEach(f219);
      const a = i.filter(f220);
      f203();
      a.forEach((l) => {
        const c = l.el;
        const u = c.style;
        f196(c, o);
        u.transform = u.webkitTransform = u.transitionDuration = "";
        const f = (c[vSymbol12] = (d) => {
          if (!d || d.target === c) {
            if (!d || /transform$/.test(d.propertyName)) {
              c.removeEventListener("transitionend", f);
              c[vSymbol12] = null;
              f197(c, o);
            }
          }
        });
        c.addEventListener("transitionend", f);
      });
    });
    return () => {
      const o = f49(e);
      const a = f193(o);
      let l = o.tag || v70;
      i = [];
      if (s) {
        for (let c = 0; c < s.length; c++) {
          const u = s[c];
          if (u.el && u.el instanceof Element) {
            i.push(u);
            f92(u, f89(u, a, r, n));
            v89.set(u, u.el.getBoundingClientRect());
          }
        }
      }
      s = t.default ? f93(t.default()) : [];
      for (let c = 0; c < s.length; c++) {
        const u = s[c];
        if (u.key != null) {
          f92(u, f89(u, a, r, n));
        }
      }
      return vLg(l, null, s);
    };
  },
});
const vVVF88 = vVF88;
function f218(e) {
  const t = e.el;
  if (t[vSymbol12]) {
    t[vSymbol12]();
  }
  if (t[vSymbol13]) {
    t[vSymbol13]();
  }
}
function f219(e) {
  v90.set(e, e.el.getBoundingClientRect());
}
function f220(e) {
  const t = v89.get(e);
  const n = v90.get(e);
  const r = t.left - n.left;
  const i = t.top - n.top;
  if (r || i) {
    const s = e.el.style;
    s.transform = s.webkitTransform = `translate(${r}px,${i}px)`;
    s.transitionDuration = "0s";
    return e;
  }
}
function f221(e, t, n) {
  const r = e.cloneNode();
  const i = e[vSymbol7];
  if (i) {
    i.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    });
  }
  n.split(/\s+/).forEach((a) => a && r.classList.add(a));
  r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: o } = f200(r);
  s.removeChild(r);
  return o;
}
const vF89 = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  if (v4(t)) {
    return (n) => vF26(t, n);
  } else {
    return t;
  }
};
function f222(e) {
  e.target.composing = true;
}
function f223(e) {
  const t = e.target;
  if (t.composing) {
    t.composing = false;
    t.dispatchEvent(new Event("input"));
  }
}
const vSymbol14 = Symbol("_assign");
const vO24 = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[vSymbol14] = vF89(i);
    const s = r || (i.props && i.props.type === "number");
    f211(e, t ? "change" : "input", (o) => {
      if (o.target.composing) {
        return;
      }
      let a = e.value;
      if (n) {
        a = a.trim();
      }
      if (s) {
        a = vF28(a);
      }
      e[vSymbol14](a);
    });
    if (n) {
      f211(e, "change", () => {
        e.value = e.value.trim();
      });
    }
    if (!t) {
      f211(e, "compositionstart", f222);
      f211(e, "compositionend", f223);
      f211(e, "change", f223);
    }
  },
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(
    e,
    { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: s } },
    o
  ) {
    e[vSymbol14] = vF89(o);
    if (e.composing) {
      return;
    }
    const a =
      (s || e.type === "number") && !/^0\d/.test(e.value)
        ? vF28(e.value)
        : e.value;
    const l = t ?? "";
    if (a !== l) {
      if (
        document.activeElement !== e ||
        e.type === "range" ||
        ((!r || t !== n) && (!i || e.value.trim() !== l))
      ) {
        e.value = l;
      }
    }
  },
};
const vO25 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace",
};
const vF90 = (e, t) => {
  const n = (e._withKeys ||= {});
  const r = t.join(".");
  return (n[r] ||= (i) => {
    if (!("key" in i)) {
      return;
    }
    const s = vVF242(i.key);
    if (t.some((o) => o === s || vO25[o] === s)) {
      return e(i);
    }
  });
};
const vV23 = v2(
  {
    patchProp: vF87,
  },
  vO20
);
let v91;
function f224() {
  return (v91 ||= f139(vV23));
}
const vF91 = (...e) => {
  const t = f224().createApp(...e);
  const { mount: n } = t;
  t.mount = (r) => {
    const i = f226(r);
    if (!i) {
      return;
    }
    const s = t._component;
    if (!vF14(s) && !s.render && !s.template) {
      s.template = i.innerHTML;
    }
    if (i.nodeType === 1) {
      i.textContent = "";
    }
    const o = n(i, false, f225(i));
    if (i instanceof Element) {
      i.removeAttribute("v-cloak");
      i.setAttribute("data-v-app", "");
    }
    return o;
  };
  return t;
};
function f225(e) {
  if (e instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) {
    return "mathml";
  }
}
function f226(e) {
  if (vF15(e)) {
    return document.querySelector(e);
  } else {
    return e;
  }
}
function f227(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: true,
  });
  return e;
}
const vF522 = f52(false);
let v92;
function f228(e, t) {
  const n =
    /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) ||
    /(opr)[\/]([\w.]+)/.exec(e) ||
    /(vivaldi)[\/]([\w.]+)/.exec(e) ||
    /(chrome|crios)[\/]([\w.]+)/.exec(e) ||
    /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(
      e
    ) ||
    /(firefox|fxios)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+)/.exec(e) ||
    /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) ||
    [];
  return {
    browser: n[5] || n[3] || n[1] || "",
    version: n[4] || n[2] || "0",
    platform: t[0] || "",
  };
}
function f229(e) {
  return (
    /(ipad)/.exec(e) ||
    /(ipod)/.exec(e) ||
    /(windows phone)/.exec(e) ||
    /(iphone)/.exec(e) ||
    /(kindle)/.exec(e) ||
    /(silk)/.exec(e) ||
    /(android)/.exec(e) ||
    /(win)/.exec(e) ||
    /(mac)/.exec(e) ||
    /(linux)/.exec(e) ||
    /(cros)/.exec(e) ||
    /(playbook)/.exec(e) ||
    /(bb)/.exec(e) ||
    /(blackberry)/.exec(e) ||
    []
  );
}
const v93 = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function f230(e) {
  const t = e.toLowerCase();
  const n = f229(t);
  const r = f228(t, n);
  const i = {
    mobile: false,
    desktop: false,
    cordova: false,
    capacitor: false,
    nativeMobile: false,
    electron: false,
    bex: false,
    linux: false,
    mac: false,
    win: false,
    cros: false,
    chrome: false,
    firefox: false,
    opera: false,
    safari: false,
    vivaldi: false,
    edge: false,
    edgeChromium: false,
    ie: false,
    webkit: false,
    android: false,
    ios: false,
    ipad: false,
    iphone: false,
    ipod: false,
    kindle: false,
    winphone: false,
    blackberry: false,
    playbook: false,
    silk: false,
  };
  if (r.browser) {
    i[r.browser] = true;
    i.version = r.version;
    i.versionNumber = parseInt(r.version, 10);
  }
  if (r.platform) {
    i[r.platform] = true;
  }
  const s =
    i.android ||
    i.ios ||
    i.bb ||
    i.blackberry ||
    i.ipad ||
    i.iphone ||
    i.ipod ||
    i.kindle ||
    i.playbook ||
    i.silk ||
    i["windows phone"];
  if (s === true || t.indexOf("mobile") !== -1) {
    i.mobile = true;
  } else {
    i.desktop = true;
  }
  if (i["windows phone"]) {
    i.winphone = true;
    delete i["windows phone"];
  }
  if (i.edga || i.edgios || i.edg) {
    i.edge = true;
    r.browser = "edge";
  } else if (i.crios) {
    i.chrome = true;
    r.browser = "chrome";
  } else if (i.fxios) {
    i.firefox = true;
    r.browser = "firefox";
  }
  if (i.ipod || i.ipad || i.iphone) {
    i.ios = true;
  }
  if (i.vivaldi) {
    r.browser = "vivaldi";
    i.vivaldi = true;
  }
  if (
    i.chrome ||
    i.opr ||
    i.safari ||
    i.vivaldi ||
    (i.mobile === true && i.ios !== true && s !== true)
  ) {
    i.webkit = true;
  }
  if (i.opr) {
    r.browser = "opera";
    i.opera = true;
  }
  if (i.safari) {
    if (i.blackberry || i.bb) {
      r.browser = "blackberry";
      i.blackberry = true;
    } else if (i.playbook) {
      r.browser = "playbook";
      i.playbook = true;
    } else if (i.android) {
      r.browser = "android";
      i.android = true;
    } else if (i.kindle) {
      r.browser = "kindle";
      i.kindle = true;
    } else if (i.silk) {
      r.browser = "silk";
      i.silk = true;
    }
  }
  i.name = r.browser;
  i.platform = r.platform;
  if (t.indexOf("electron") !== -1) {
    i.electron = true;
  } else if (document.location.href.indexOf("-extension://") !== -1) {
    i.bex = true;
  } else {
    if (window.Capacitor !== undefined) {
      i.capacitor = true;
      i.nativeMobile = true;
      i.nativeMobileWrapper = "capacitor";
    } else if (
      window._cordovaNative !== undefined ||
      window.cordova !== undefined
    ) {
      i.cordova = true;
      i.nativeMobile = true;
      i.nativeMobileWrapper = "cordova";
    }
    if (vF522.value === true) {
      v92 = {
        is: {
          ...i,
        },
      };
    }
    if (
      v93 === true &&
      i.mac === true &&
      ((i.desktop === true && i.safari === true) ||
        (i.nativeMobile === true &&
          i.android !== true &&
          i.ios !== true &&
          i.ipad !== true))
    ) {
      delete i.mac;
      delete i.desktop;
      const o =
        Math.min(window.innerHeight, window.innerWidth) > 414
          ? "ipad"
          : "iphone";
      Object.assign(i, {
        mobile: true,
        ios: true,
        platform: o,
        [o]: true,
      });
    }
    if (
      i.mobile !== true &&
      window.navigator.userAgentData &&
      window.navigator.userAgentData.mobile
    ) {
      delete i.desktop;
      i.mobile = true;
    }
  }
  return i;
}
const v94 = navigator.userAgent || navigator.vendor || window.opera;
const vO26 = {
  has: {
    touch: false,
    webStorage: false,
  },
  within: {
    iframe: false,
  },
};
const vO27 = {
  userAgent: v94,
  is: f230(v94),
  has: {
    touch: v93,
  },
  within: {
    iframe: window.self !== window.top,
  },
};
const vO28 = {
  install(e) {
    const { $q: t } = e;
    if (vF522.value === true) {
      e.onSSRHydrated.push(() => {
        Object.assign(t.platform, vO27);
        vF522.value = false;
      });
      t.platform = f40(this);
    } else {
      t.platform = this;
    }
  },
};
{
  let e;
  f227(vO27.has, "webStorage", () => {
    if (e !== undefined) {
      return e;
    }
    try {
      if (window.localStorage) {
        e = true;
        return true;
      }
    } catch {}
    e = false;
    return false;
  });
  Object.assign(vO28, vO27);
  if (vF522.value === true) {
    Object.assign(vO28, v92, vO26);
    v92 = null;
  }
}
function f231(e) {
  return f50(f94(e));
}
function f232(e) {
  return f50(e);
}
const vF92 = (e, t) => {
  const n = f40(e);
  for (const r in e) {
    f227(
      t,
      r,
      () => n[r],
      (i) => {
        n[r] = i;
      }
    );
  }
  return t;
};
const vO29 = {
  hasPassive: false,
  passiveCapture: true,
  notPassiveCapture: true,
};
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(vO29, {
        hasPassive: true,
        passive: {
          passive: true,
        },
        notPassive: {
          passive: false,
        },
        passiveCapture: {
          passive: true,
          capture: true,
        },
        notPassiveCapture: {
          passive: false,
          capture: true,
        },
      });
    },
  });
  window.addEventListener("qtest", null, e);
  window.removeEventListener("qtest", null, e);
} catch {}
function f233() {}
function f234(e) {
  return e.button === 0;
}
function f235(e) {
  if (e.touches && e.touches[0]) {
    e = e.touches[0];
  } else if (e.changedTouches && e.changedTouches[0]) {
    e = e.changedTouches[0];
  } else if (e.targetTouches && e.targetTouches[0]) {
    e = e.targetTouches[0];
  }
  return {
    top: e.clientY,
    left: e.clientX,
  };
}
function f236(e) {
  if (e.path) {
    return e.path;
  }
  if (e.composedPath) {
    return e.composedPath();
  }
  const t = [];
  let n = e.target;
  while (n) {
    t.push(n);
    if (n.tagName === "HTML") {
      t.push(document);
      t.push(window);
      return t;
    }
    n = n.parentElement;
  }
}
function f237(e) {
  e.stopPropagation();
}
function f238(e) {
  if (e.cancelable !== false) {
    e.preventDefault();
  }
}
function f239(e) {
  if (e.cancelable !== false) {
    e.preventDefault();
  }
  e.stopPropagation();
}
function f240(e, t) {
  if (e === undefined || (t === true && e.__dragPrevented === true)) {
    return;
  }
  const n =
    t === true
      ? (r) => {
          r.__dragPrevented = true;
          r.addEventListener("dragstart", f238, vO29.notPassiveCapture);
        }
      : (r) => {
          delete r.__dragPrevented;
          r.removeEventListener("dragstart", f238, vO29.notPassiveCapture);
        };
  e.querySelectorAll("a, img").forEach(n);
}
function f241(e, t, n) {
  const r = `__q_${t}_evt`;
  e[r] = e[r] !== undefined ? e[r].concat(n) : n;
  n.forEach((i) => {
    i[0].addEventListener(i[1], e[i[2]], vO29[i[3]]);
  });
}
function f242(e, t) {
  const n = `__q_${t}_evt`;
  if (e[n] !== undefined) {
    e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], vO29[r[3]]);
    });
    e[n] = undefined;
  }
}
function f243(e, t = 250, n) {
  let r = null;
  function i() {
    const s = arguments;
    const o = () => {
      r = null;
      e.apply(this, s);
    };
    if (r !== null) {
      clearTimeout(r);
    }
    r = setTimeout(o, t);
  }
  i.cancel = () => {
    if (r !== null) {
      clearTimeout(r);
    }
  };
  return i;
}
const vA8 = ["sm", "md", "lg", "xl"];
const { passive: Ul } = vO29;
const vVF92 = vF92(
  {
    width: 0,
    height: 0,
    name: "xs",
    sizes: {
      sm: 600,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
    lt: {
      sm: true,
      md: true,
      lg: true,
      xl: true,
    },
    gt: {
      xs: false,
      sm: false,
      md: false,
      lg: false,
    },
    xs: true,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  },
  {
    setSizes: f233,
    setDebounce: f233,
    install({ $q: e, onSSRHydrated: t }) {
      e.screen = this;
      if (this.__installed === true) {
        if (e.config.screen !== undefined) {
          if (e.config.screen.bodyClasses === false) {
            document.body.classList.remove(`screen--${this.name}`);
          } else {
            this.__update(true);
          }
        }
        return;
      }
      const { visualViewport: n } = window;
      const r = n || window;
      const i = document.scrollingElement || document.documentElement;
      const s =
        n === undefined || vO27.is.mobile === true
          ? () => [
              Math.max(window.innerWidth, i.clientWidth),
              Math.max(window.innerHeight, i.clientHeight),
            ]
          : () => [
              n.width * n.scale + window.innerWidth - i.clientWidth,
              n.height * n.scale + window.innerHeight - i.clientHeight,
            ];
      const o = e.config.screen?.bodyClasses === true;
      this.__update = (f) => {
        const [d, h] = s();
        if (h !== this.height) {
          this.height = h;
        }
        if (d !== this.width) {
          this.width = d;
        } else if (f !== true) {
          return;
        }
        let p = this.sizes;
        this.gt.xs = d >= p.sm;
        this.gt.sm = d >= p.md;
        this.gt.md = d >= p.lg;
        this.gt.lg = d >= p.xl;
        this.lt.sm = d < p.sm;
        this.lt.md = d < p.md;
        this.lt.lg = d < p.lg;
        this.lt.xl = d < p.xl;
        this.xs = this.lt.sm;
        this.sm = this.gt.xs === true && this.lt.md === true;
        this.md = this.gt.sm === true && this.lt.lg === true;
        this.lg = this.gt.md === true && this.lt.xl === true;
        this.xl = this.gt.lg;
        p =
          (this.xs === true && "xs") ||
          (this.sm === true && "sm") ||
          (this.md === true && "md") ||
          (this.lg === true && "lg") ||
          "xl";
        if (p !== this.name) {
          if (o === true) {
            document.body.classList.remove(`screen--${this.name}`);
            document.body.classList.add(`screen--${p}`);
          }
          this.name = p;
        }
      };
      let a;
      let l = {};
      let c = 16;
      this.setSizes = (f) => {
        vA8.forEach((d) => {
          if (f[d] !== undefined) {
            l[d] = f[d];
          }
        });
      };
      this.setDebounce = (f) => {
        c = f;
      };
      const u = () => {
        const f = getComputedStyle(document.body);
        if (f.getPropertyValue("--q-size-sm")) {
          vA8.forEach((d) => {
            this.sizes[d] = parseInt(f.getPropertyValue(`--q-size-${d}`), 10);
          });
        }
        this.setSizes = (d) => {
          vA8.forEach((h) => {
            if (d[h]) {
              this.sizes[h] = d[h];
            }
          });
          this.__update(true);
        };
        this.setDebounce = (d) => {
          if (a !== undefined) {
            r.removeEventListener("resize", a, Ul);
          }
          a = d > 0 ? f243(this.__update, d) : this.__update;
          r.addEventListener("resize", a, Ul);
        };
        this.setDebounce(c);
        if (Object.keys(l).length !== 0) {
          this.setSizes(l);
          l = undefined;
        } else {
          this.__update();
        }
        if (o === true && this.name === "xs") {
          document.body.classList.add("screen--xs");
        }
      };
      if (vF522.value === true) {
        t.push(u);
      } else {
        u();
      }
    },
  }
);
const vVF922 = vF92(
  {
    isActive: false,
    mode: false,
  },
  {
    __media: undefined,
    set(e) {
      vVF922.mode = e;
      if (e === "auto") {
        if (vVF922.__media === undefined) {
          vVF922.__media = window.matchMedia("(prefers-color-scheme: dark)");
          vVF922.__updateMedia = () => {
            vVF922.set("auto");
          };
          vVF922.__media.addListener(vVF922.__updateMedia);
        }
        e = vVF922.__media.matches;
      } else if (vVF922.__media !== undefined) {
        vVF922.__media.removeListener(vVF922.__updateMedia);
        vVF922.__media = undefined;
      }
      vVF922.isActive = e === true;
      document.body.classList.remove(`body--${e === true ? "light" : "dark"}`);
      document.body.classList.add(`body--${e === true ? "dark" : "light"}`);
    },
    toggle() {
      vVF922.set(vVF922.isActive === false);
    },
    install({ $q: e, ssrContext: t }) {
      const { dark: n } = e.config;
      e.dark = this;
      if (this.__installed !== true) {
        this.set(n !== undefined ? n : false);
      }
    },
  }
);
function f244(e, t, n = document.body) {
  if (typeof e != "string") {
    throw new TypeError("Expected a string as propName");
  }
  if (typeof t != "string") {
    throw new TypeError("Expected a string as value");
  }
  if (!(n instanceof Element)) {
    throw new TypeError("Expected a DOM element");
  }
  n.style.setProperty(`--q-${e}`, t);
}
let v95 = false;
function f245(e) {
  v95 = e.isComposing === true;
}
function f246(e) {
  return (
    v95 === true ||
    e !== Object(e) ||
    e.isComposing === true ||
    e.qKeyEvent === true
  );
}
function f247(e, t) {
  if (f246(e) === true) {
    return false;
  } else {
    return [].concat(t).includes(e.keyCode);
  }
}
function f248(e) {
  if (e.ios === true) {
    return "ios";
  }
  if (e.android === true) {
    return "android";
  }
}
function f249({ is: e, has: t, within: n }, r) {
  const i = [
    e.desktop === true ? "desktop" : "mobile",
    `${t.touch === false ? "no-" : ""}touch`,
  ];
  if (e.mobile === true) {
    const s = f248(e);
    if (s !== undefined) {
      i.push("platform-" + s);
    }
  }
  if (e.nativeMobile === true) {
    const s = e.nativeMobileWrapper;
    i.push(s);
    i.push("native-mobile");
    if (
      e.ios === true &&
      (r[s] === undefined || r[s].iosStatusBarPadding !== false)
    ) {
      i.push("q-ios-padding");
    }
  } else if (e.electron === true) {
    i.push("electron");
  } else if (e.bex === true) {
    i.push("bex");
  }
  if (n.iframe === true) {
    i.push("within-iframe");
  }
  return i;
}
function f250() {
  const { is: e } = vO27;
  const t = document.body.className;
  const n = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== true && e.electron !== true && e.bex !== true) {
    if (e.desktop === true) {
      n.delete("mobile");
      n.delete("platform-ios");
      n.delete("platform-android");
      n.add("desktop");
    } else if (e.mobile === true) {
      n.delete("desktop");
      n.add("mobile");
      n.delete("platform-ios");
      n.delete("platform-android");
      const i = f248(e);
      if (i !== undefined) {
        n.add(`platform-${i}`);
      }
    }
  }
  if (vO27.has.touch === true) {
    n.delete("no-touch");
    n.add("touch");
  }
  if (vO27.within.iframe === true) {
    n.add("within-iframe");
  }
  const r = Array.from(n).join(" ");
  if (t !== r) {
    document.body.className = r;
  }
}
function f251(e) {
  for (const t in e) {
    f244(t, e[t]);
  }
}
const vO30 = {
  install(e) {
    if (this.__installed !== true) {
      if (vF522.value === true) {
        f250();
      } else {
        const { $q: t } = e;
        if (t.config.brand !== undefined) {
          f251(t.config.brand);
        }
        const n = f249(vO27, t.config);
        document.body.classList.add.apply(document.body.classList, n);
      }
      if (vO27.is.ios === true) {
        document.body.addEventListener("touchstart", f233);
      }
      window.addEventListener("keydown", f245, true);
    }
  },
};
const vF93 = () => true;
function f252(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function f253(e) {
  if (e.startsWith("#") === true) {
    e = e.substring(1);
  }
  if (e.startsWith("/") === false) {
    e = "/" + e;
  }
  if (e.endsWith("/") === true) {
    e = e.substring(0, e.length - 1);
  }
  return "#" + e;
}
function f254(e) {
  if (e.backButtonExit === false) {
    return () => false;
  }
  if (e.backButtonExit === "*") {
    return vF93;
  }
  const t = ["#/"];
  if (Array.isArray(e.backButtonExit) === true) {
    t.push(...e.backButtonExit.filter(f252).map(f253));
  }
  return () => t.includes(window.location.hash);
}
const vO31 = {
  __history: [],
  add: f233,
  remove: f233,
  install({ $q: e }) {
    if (this.__installed === true) {
      return;
    }
    const { cordova: t, capacitor: n } = vO27.is;
    if (t !== true && n !== true) {
      return;
    }
    const r = e.config[t === true ? "cordova" : "capacitor"];
    if (
      r?.backButton === false ||
      (n === true &&
        (window.Capacitor === undefined ||
          window.Capacitor.Plugins.App === undefined))
    ) {
      return;
    }
    this.add = (o) => {
      if (o.condition === undefined) {
        o.condition = vF93;
      }
      this.__history.push(o);
    };
    this.remove = (o) => {
      const a = this.__history.indexOf(o);
      if (a >= 0) {
        this.__history.splice(a, 1);
      }
    };
    const i = f254(
      Object.assign(
        {
          backButtonExit: true,
        },
        r
      )
    );
    const s = () => {
      if (this.__history.length) {
        const o = this.__history[this.__history.length - 1];
        if (o.condition() === true) {
          this.__history.pop();
          o.handler();
        }
      } else if (i() === true) {
        navigator.app.exitApp();
      } else {
        window.history.back();
      }
    };
    if (t === true) {
      document.addEventListener("deviceready", () => {
        document.addEventListener("backbutton", s, false);
      });
    } else {
      window.Capacitor.Plugins.App.addListener("backButton", s);
    }
  },
};
const vO32 = {
  isoName: "en-US",
  nativeName: "English (US)",
  label: {
    clear: "Clear",
    ok: "OK",
    cancel: "Cancel",
    close: "Close",
    set: "Set",
    select: "Select",
    reset: "Reset",
    remove: "Remove",
    update: "Update",
    create: "Create",
    search: "Search",
    filter: "Filter",
    refresh: "Refresh",
    expand: (e) => (e ? `Expand "${e}"` : "Expand"),
    collapse: (e) => (e ? `Collapse "${e}"` : "Collapse"),
  },
  date: {
    days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    months:
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    firstDayOfWeek: 0,
    format24h: false,
    pluralDay: "days",
    prevMonth: "Previous month",
    nextMonth: "Next month",
    prevYear: "Previous year",
    nextYear: "Next year",
    today: "Today",
    prevRangeYears: (e) => `Previous ${e} years`,
    nextRangeYears: (e) => `Next ${e} years`,
  },
  table: {
    noData: "No data available",
    noResults: "No matching records found",
    loading: "Loading...",
    selectedRecords: (e) =>
      e === 1
        ? "1 record selected."
        : (e === 0 ? "No" : e) + " records selected.",
    recordsPerPage: "Records per page:",
    allRows: "All",
    pagination: (e, t, n) => e + "-" + t + " of " + n,
    columns: "Columns",
  },
  pagination: {
    first: "First page",
    prev: "Previous page",
    next: "Next page",
    last: "Last page",
  },
  editor: {
    url: "URL",
    bold: "Bold",
    italic: "Italic",
    strikethrough: "Strikethrough",
    underline: "Underline",
    unorderedList: "Unordered List",
    orderedList: "Ordered List",
    subscript: "Subscript",
    superscript: "Superscript",
    hyperlink: "Hyperlink",
    toggleFullscreen: "Toggle Fullscreen",
    quote: "Quote",
    left: "Left align",
    center: "Center align",
    right: "Right align",
    justify: "Justify align",
    print: "Print",
    outdent: "Decrease indentation",
    indent: "Increase indentation",
    removeFormat: "Remove formatting",
    formatting: "Formatting",
    fontSize: "Font Size",
    align: "Align",
    hr: "Insert Horizontal Rule",
    undo: "Undo",
    redo: "Redo",
    heading1: "Heading 1",
    heading2: "Heading 2",
    heading3: "Heading 3",
    heading4: "Heading 4",
    heading5: "Heading 5",
    heading6: "Heading 6",
    paragraph: "Paragraph",
    code: "Code",
    size1: "Very small",
    size2: "A bit small",
    size3: "Normal",
    size4: "Medium-large",
    size5: "Big",
    size6: "Very big",
    size7: "Maximum",
    defaultFont: "Default Font",
    viewSource: "View Source",
  },
  tree: {
    noNodes: "No nodes available",
    noResults: "No matching nodes found",
  },
};
function f255() {
  const e =
    Array.isArray(navigator.languages) === true &&
    navigator.languages.length !== 0
      ? navigator.languages[0]
      : navigator.language;
  if (typeof e == "string") {
    return e
      .split(/[-_]/)
      .map((t, n) =>
        n === 0
          ? t.toLowerCase()
          : n > 1 || t.length < 4
          ? t.toUpperCase()
          : t[0].toUpperCase() + t.slice(1).toLowerCase()
      )
      .join("-");
  }
}
const vVF923 = vF92(
  {
    __qLang: {},
  },
  {
    getLocale: f255,
    set(e = vO32, t) {
      const n = {
        ...e,
        rtl: e.rtl === true,
        getLocale: f255,
      };
      {
        n.set = vVF923.set;
        if (
          vVF923.__langConfig === undefined ||
          vVF923.__langConfig.noHtmlAttrs !== true
        ) {
          const r = document.documentElement;
          r.setAttribute("dir", n.rtl === true ? "rtl" : "ltr");
          r.setAttribute("lang", n.isoName);
        }
        Object.assign(vVF923.__qLang, n);
      }
    },
    install({ $q: e, lang: t, ssrContext: n }) {
      e.lang = vVF923.__qLang;
      vVF923.__langConfig = e.config.lang;
      if (this.__installed === true) {
        if (t !== undefined) {
          this.set(t);
        }
      } else {
        this.props = new Proxy(this.__qLang, {
          get() {
            return Reflect.get(...arguments);
          },
          ownKeys(r) {
            return Reflect.ownKeys(r).filter(
              (i) => i !== "set" && i !== "getLocale"
            );
          },
        });
        this.set(t || vO32);
      }
    },
  }
);
const vO33 = {
  name: "material-icons",
  type: {
    positive: "check_circle",
    negative: "warning",
    info: "info",
    warning: "priority_high",
  },
  arrow: {
    up: "arrow_upward",
    right: "arrow_forward",
    down: "arrow_downward",
    left: "arrow_back",
    dropdown: "arrow_drop_down",
  },
  chevron: {
    left: "chevron_left",
    right: "chevron_right",
  },
  colorPicker: {
    spectrum: "gradient",
    tune: "tune",
    palette: "style",
  },
  pullToRefresh: {
    icon: "refresh",
  },
  carousel: {
    left: "chevron_left",
    right: "chevron_right",
    up: "keyboard_arrow_up",
    down: "keyboard_arrow_down",
    navigationIcon: "lens",
  },
  chip: {
    remove: "cancel",
    selected: "check",
  },
  datetime: {
    arrowLeft: "chevron_left",
    arrowRight: "chevron_right",
    now: "access_time",
    today: "today",
  },
  editor: {
    bold: "format_bold",
    italic: "format_italic",
    strikethrough: "strikethrough_s",
    underline: "format_underlined",
    unorderedList: "format_list_bulleted",
    orderedList: "format_list_numbered",
    subscript: "vertical_align_bottom",
    superscript: "vertical_align_top",
    hyperlink: "link",
    toggleFullscreen: "fullscreen",
    quote: "format_quote",
    left: "format_align_left",
    center: "format_align_center",
    right: "format_align_right",
    justify: "format_align_justify",
    print: "print",
    outdent: "format_indent_decrease",
    indent: "format_indent_increase",
    removeFormat: "format_clear",
    formatting: "text_format",
    fontSize: "format_size",
    align: "format_align_left",
    hr: "remove",
    undo: "undo",
    redo: "redo",
    heading: "format_size",
    code: "code",
    size: "format_size",
    font: "font_download",
    viewSource: "code",
  },
  expansionItem: {
    icon: "keyboard_arrow_down",
    denseIcon: "arrow_drop_down",
  },
  fab: {
    icon: "add",
    activeIcon: "close",
  },
  field: {
    clear: "cancel",
    error: "error",
  },
  pagination: {
    first: "first_page",
    prev: "keyboard_arrow_left",
    next: "keyboard_arrow_right",
    last: "last_page",
  },
  rating: {
    icon: "grade",
  },
  stepper: {
    done: "check",
    active: "edit",
    error: "warning",
  },
  tabs: {
    left: "chevron_left",
    right: "chevron_right",
    up: "keyboard_arrow_up",
    down: "keyboard_arrow_down",
  },
  table: {
    arrowUp: "arrow_upward",
    warning: "warning",
    firstPage: "first_page",
    prevPage: "chevron_left",
    nextPage: "chevron_right",
    lastPage: "last_page",
  },
  tree: {
    icon: "play_arrow",
  },
  uploader: {
    done: "done",
    clear: "clear",
    add: "add_box",
    upload: "cloud_upload",
    removeQueue: "clear_all",
    removeUploaded: "done_all",
  },
};
const vVF924 = vF92(
  {
    iconMapFn: null,
    __qIconSet: {},
  },
  {
    set(e, t) {
      const n = {
        ...e,
      };
      n.set = vVF924.set;
      Object.assign(vVF924.__qIconSet, n);
    },
    install({ $q: e, iconSet: t, ssrContext: n }) {
      if (e.config.iconMapFn !== undefined) {
        this.iconMapFn = e.config.iconMapFn;
      }
      e.iconSet = this.__qIconSet;
      f227(
        e,
        "iconMapFn",
        () => this.iconMapFn,
        (r) => {
          this.iconMapFn = r;
        }
      );
      if (this.__installed === true) {
        if (t !== undefined) {
          this.set(t);
        }
      } else {
        this.props = new Proxy(this.__qIconSet, {
          get() {
            return Reflect.get(...arguments);
          },
          ownKeys(r) {
            return Reflect.ownKeys(r).filter((i) => i !== "set");
          },
        });
        this.set(t || vO33);
      }
    },
  }
);
const vLS_q_ = "_q_";
const vLS_q_l_ = "_q_l_";
const vLS_q_pc_ = "_q_pc_";
const vLS_q_fo_ = "_q_fo_";
const vLS_q_tabs_ = "_q_tabs_";
function f256() {}
const vO34 = {};
let v96 = false;
function f257() {
  v96 = true;
}
function f258(e, t) {
  if (e === t) {
    return true;
  }
  if (
    e !== null &&
    t !== null &&
    typeof e == "object" &&
    typeof t == "object"
  ) {
    if (e.constructor !== t.constructor) {
      return false;
    }
    let n;
    let r;
    if (e.constructor === Array) {
      n = e.length;
      if (n !== t.length) {
        return false;
      }
      for (r = n; r-- !== 0; ) {
        if (f258(e[r], t[r]) !== true) {
          return false;
        }
      }
      return true;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size) {
        return false;
      }
      let s = e.entries();
      for (r = s.next(); r.done !== true; ) {
        if (t.has(r.value[0]) !== true) {
          return false;
        }
        r = s.next();
      }
      s = e.entries();
      r = s.next();
      while (r.done !== true) {
        if (f258(r.value[1], t.get(r.value[0])) !== true) {
          return false;
        }
        r = s.next();
      }
      return true;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) {
        return false;
      }
      const s = e.entries();
      for (r = s.next(); r.done !== true; ) {
        if (t.has(r.value[0]) !== true) {
          return false;
        }
        r = s.next();
      }
      return true;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      n = e.length;
      if (n !== t.length) {
        return false;
      }
      for (r = n; r-- !== 0; ) {
        if (e[r] !== t[r]) {
          return false;
        }
      }
      return true;
    }
    if (e.constructor === RegExp) {
      return e.source === t.source && e.flags === t.flags;
    }
    if (e.valueOf !== Object.prototype.valueOf) {
      return e.valueOf() === t.valueOf();
    }
    if (e.toString !== Object.prototype.toString) {
      return e.toString() === t.toString();
    }
    const i = Object.keys(e).filter((s) => e[s] !== undefined);
    n = i.length;
    if (n !== Object.keys(t).filter((s) => t[s] !== undefined).length) {
      return false;
    }
    for (r = n; r-- !== 0; ) {
      const s = i[r];
      if (f258(e[s], t[s]) !== true) {
        return false;
      }
    }
    return true;
  }
  return e !== e && t !== t;
}
function f259(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== true;
}
function f260(e) {
  return typeof e == "number" && isFinite(e);
}
const vA9 = [vO28, vO30, vVF922, vVF92, vO31, vVF923, vVF924];
function f261(e, t) {
  const n = vF91(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...i } = t._context;
  Object.assign(n._context, i);
  return n;
}
function f262(e, t) {
  t.forEach((n) => {
    n.install(e);
    n.__installed = true;
  });
}
function f263(e, t, n) {
  e.config.globalProperties.$q = n.$q;
  e.provide(vLS_q_, n.$q);
  f262(n, vA9);
  if (t.components !== undefined) {
    Object.values(t.components).forEach((r) => {
      if (f259(r) === true && r.name !== undefined) {
        e.component(r.name, r);
      }
    });
  }
  if (t.directives !== undefined) {
    Object.values(t.directives).forEach((r) => {
      if (f259(r) === true && r.name !== undefined) {
        e.directive(r.name, r);
      }
    });
  }
  if (t.plugins !== undefined) {
    f262(
      n,
      Object.values(t.plugins).filter(
        (r) => typeof r.install == "function" && vA9.includes(r) === false
      )
    );
  }
  if (vF522.value === true) {
    n.$q.onSSRHydrated = () => {
      n.onSSRHydrated.forEach((r) => {
        r();
      });
      n.$q.onSSRHydrated = () => {};
    };
  }
}
const vF94 = function (e, t = {}) {
  const n = {
    version: "2.18.1",
  };
  if (v96 === false) {
    if (t.config !== undefined) {
      Object.assign(vO34, t.config);
    }
    n.config = {
      ...vO34,
    };
    f257();
  } else {
    n.config = t.config || {};
  }
  f263(e, t, {
    parentApp: e,
    $q: n,
    lang: t.lang,
    iconSet: t.iconSet,
    onSSRHydrated: [],
  });
};
const vO35 = {
  name: "Quasar",
  version: "2.18.1",
  install: vF94,
  lang: vVF923,
  iconSet: vVF924,
};
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const v97 = typeof document !== "undefined";
function f264(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function f265(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && f264(e.default))
  );
}
const v98 = Object.assign;
function f266(e, t) {
  const n = {};
  for (const r in t) {
    const i = t[r];
    n[r] = v99(i) ? i.map(e) : e(i);
  }
  return n;
}
const vF95 = () => {};
const v99 = Array.isArray;
const v100 = /#/g;
const v101 = /&/g;
const v102 = /\//g;
const v103 = /=/g;
const v104 = /\?/g;
const v105 = /\+/g;
const v106 = /%5B/g;
const v107 = /%5D/g;
const v108 = /%5E/g;
const v109 = /%60/g;
const v110 = /%7B/g;
const v111 = /%7C/g;
const v112 = /%7D/g;
const v113 = /%20/g;
function f267(e) {
  return encodeURI("" + e)
    .replace(v111, "|")
    .replace(v106, "[")
    .replace(v107, "]");
}
function f268(e) {
  return f267(e).replace(v110, "{").replace(v112, "}").replace(v108, "^");
}
function f269(e) {
  return f267(e)
    .replace(v105, "%2B")
    .replace(v113, "+")
    .replace(v100, "%23")
    .replace(v101, "%26")
    .replace(v109, "`")
    .replace(v110, "{")
    .replace(v112, "}")
    .replace(v108, "^");
}
function f270(e) {
  return f269(e).replace(v103, "%3D");
}
function f271(e) {
  return f267(e).replace(v100, "%23").replace(v104, "%3F");
}
function f272(e) {
  if (e == null) {
    return "";
  } else {
    return f271(e).replace(v102, "%2F");
  }
}
function f273(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const v114 = /\/$/;
const vF96 = (e) => e.replace(v114, "");
function f274(e, t, n = "/") {
  let r;
  let i = {};
  let s = "";
  let o = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  if (a < l && a >= 0) {
    l = -1;
  }
  if (l > -1) {
    r = t.slice(0, l);
    s = t.slice(l + 1, a > -1 ? a : t.length);
    i = e(s);
  }
  if (a > -1) {
    r = r || t.slice(0, a);
    o = t.slice(a, t.length);
  }
  r = f282(r ?? t, n);
  return {
    fullPath: r + (s && "?") + s + o,
    path: r,
    query: i,
    hash: f273(o),
  };
}
function f275(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function f276(e, t) {
  if (!t || !e.toLowerCase().startsWith(t.toLowerCase())) {
    return e;
  } else {
    return e.slice(t.length) || "/";
  }
}
function f277(e, t, n) {
  const r = t.matched.length - 1;
  const i = n.matched.length - 1;
  return (
    r > -1 &&
    r === i &&
    f278(t.matched[r], n.matched[i]) &&
    f279(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function f278(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function f279(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) {
    return false;
  }
  for (const n in e) {
    if (!f280(e[n], t[n])) {
      return false;
    }
  }
  return true;
}
function f280(e, t) {
  if (v99(e)) {
    return f281(e, t);
  } else if (v99(t)) {
    return f281(t, e);
  } else {
    return e === t;
  }
}
function f281(e, t) {
  if (v99(t)) {
    return e.length === t.length && e.every((n, r) => n === t[r]);
  } else {
    return e.length === 1 && e[0] === t;
  }
}
function f282(e, t) {
  if (e.startsWith("/")) {
    return e;
  }
  if (!e) {
    return t;
  }
  const n = t.split("/");
  const r = e.split("/");
  const i = r[r.length - 1];
  if (i === ".." || i === ".") {
    r.push("");
  }
  let s = n.length - 1;
  let o;
  let a;
  for (o = 0; o < r.length; o++) {
    a = r[o];
    if (a !== ".") {
      if (a === "..") {
        if (s > 1) {
          s--;
        }
      } else {
        break;
      }
    }
  }
  return n.slice(0, s).join("/") + "/" + r.slice(o).join("/");
}
const vO36 = {
  path: "/",
  name: undefined,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: undefined,
};
var v115;
(function (e) {
  e.pop = "pop";
  e.push = "push";
})((v115 ||= {}));
var v116;
(function (e) {
  e.back = "back";
  e.forward = "forward";
  e.unknown = "";
})((v116 ||= {}));
function f283(e) {
  if (!e) {
    if (v97) {
      const t = document.querySelector("base");
      e = (t && t.getAttribute("href")) || "/";
      e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      e = "/";
    }
  }
  if (e[0] !== "/" && e[0] !== "#") {
    e = "/" + e;
  }
  return vF96(e);
}
const v117 = /^[^#]+#/;
function f284(e, t) {
  return e.replace(v117, "#") + t;
}
function f285(e, t) {
  const n = document.documentElement.getBoundingClientRect();
  const r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const vF97 = () => ({
  left: window.scrollX,
  top: window.scrollY,
});
function f286(e) {
  let t;
  if ("el" in e) {
    const n = e.el;
    const r = typeof n == "string" && n.startsWith("#");
    const i =
      typeof n == "string"
        ? r
          ? document.getElementById(n.slice(1))
          : document.querySelector(n)
        : n;
    if (!i) {
      return;
    }
    t = f285(i, e);
  } else {
    t = e;
  }
  if ("scrollBehavior" in document.documentElement.style) {
    window.scrollTo(t);
  } else {
    window.scrollTo(t.left ?? window.scrollX, t.top ?? window.scrollY);
  }
}
function f287(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const v118 = new Map();
function f288(e, t) {
  v118.set(e, t);
}
function f289(e) {
  const t = v118.get(e);
  v118.delete(e);
  return t;
}
let vF98 = () => location.protocol + "//" + location.host;
function f290(e, t) {
  const { pathname: n, search: r, hash: i } = t;
  const s = e.indexOf("#");
  if (s > -1) {
    let a = i.includes(e.slice(s)) ? e.slice(s).length : 1;
    let l = i.slice(a);
    if (l[0] !== "/") {
      l = "/" + l;
    }
    return f276(l, "");
  }
  return f276(n, e) + r + i;
}
function f291(e, t, n, r) {
  let i = [];
  let s = [];
  let o = null;
  const a = ({ state: d }) => {
    const h = f290(e, location);
    const p = n.value;
    const E = t.value;
    let A = 0;
    if (d) {
      n.value = h;
      t.value = d;
      if (o && o === p) {
        o = null;
        return;
      }
      A = E ? d.position - E.position : 0;
    } else {
      r(h);
    }
    i.forEach((b) => {
      b(n.value, p, {
        delta: A,
        type: v115.pop,
        direction: A ? (A > 0 ? v116.forward : v116.back) : v116.unknown,
      });
    });
  };
  function l() {
    o = n.value;
  }
  function c(d) {
    i.push(d);
    const h = () => {
      const p = i.indexOf(d);
      if (p > -1) {
        i.splice(p, 1);
      }
    };
    s.push(h);
    return h;
  }
  function u() {
    const { history: d } = window;
    if (d.state) {
      d.replaceState(
        v98({}, d.state, {
          scroll: vF97(),
        }),
        ""
      );
    }
  }
  function f() {
    for (const d of s) {
      d();
    }
    s = [];
    window.removeEventListener("popstate", a);
    window.removeEventListener("beforeunload", u);
  }
  window.addEventListener("popstate", a);
  window.addEventListener("beforeunload", u, {
    passive: true,
  });
  return {
    pauseListeners: l,
    listen: c,
    destroy: f,
  };
}
function f292(e, t, n, r = false, i = false) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? vF97() : null,
  };
}
function f293(e) {
  const { history: t, location: n } = window;
  const r = {
    value: f290(e, n),
  };
  const i = {
    value: t.state,
  };
  if (!i.value) {
    s(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: true,
        scroll: null,
      },
      true
    );
  }
  function s(l, c, u) {
    const f = e.indexOf("#");
    const d =
      f > -1
        ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l
        : vF98() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", d);
      i.value = c;
    } catch (h) {
      console.error(h);
      n[u ? "replace" : "assign"](d);
    }
  }
  function o(l, c) {
    const u = v98(
      {},
      t.state,
      f292(i.value.back, l, i.value.forward, true),
      c,
      {
        position: i.value.position,
      }
    );
    s(l, u, true);
    r.value = l;
  }
  function a(l, c) {
    const u = v98({}, i.value, t.state, {
      forward: l,
      scroll: vF97(),
    });
    s(u.current, u, true);
    const f = v98(
      {},
      f292(r.value, l, null),
      {
        position: u.position + 1,
      },
      c
    );
    s(l, f, false);
    r.value = l;
  }
  return {
    location: r,
    state: i,
    push: a,
    replace: o,
  };
}
function f294(e) {
  e = f283(e);
  const t = f293(e);
  const n = f291(e, t.state, t.location, t.replace);
  function r(s, o = true) {
    if (!o) {
      n.pauseListeners();
    }
    history.go(s);
  }
  const i = v98(
    {
      location: "",
      base: e,
      go: r,
      createHref: f284.bind(null, e),
    },
    t,
    n
  );
  Object.defineProperty(i, "location", {
    enumerable: true,
    get: () => t.location.value,
  });
  Object.defineProperty(i, "state", {
    enumerable: true,
    get: () => t.state.value,
  });
  return i;
}
function f295(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function f296(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const vSymbol15 = Symbol("");
var v119;
(function (e) {
  e[(e.aborted = 4)] = "aborted";
  e[(e.cancelled = 8)] = "cancelled";
  e[(e.duplicated = 16)] = "duplicated";
})((v119 ||= {}));
function f297(e, t) {
  return v98(
    new Error(),
    {
      type: e,
      [vSymbol15]: true,
    },
    t
  );
}
function f298(e, t) {
  return e instanceof Error && vSymbol15 in e && (t == null || !!(e.type & t));
}
const vLS = "[^/]+?";
const vO37 = {
  sensitive: false,
  strict: false,
  start: true,
  end: true,
};
const v120 = /[.+*?^${}()[\]/\\]/g;
function f299(e, t) {
  const n = v98({}, vO37, t);
  const r = [];
  let i = n.start ? "^" : "";
  const s = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    if (n.strict && !c.length) {
      i += "/";
    }
    for (let f = 0; f < c.length; f++) {
      const d = c[f];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0) {
        if (!f) {
          i += "/";
        }
        i += d.value.replace(v120, "\\$&");
        h += 40;
      } else if (d.type === 1) {
        const { value: p, repeatable: E, optional: A, regexp: b } = d;
        s.push({
          name: p,
          repeatable: E,
          optional: A,
        });
        const m = b || vLS;
        if (m !== vLS) {
          h += 10;
          try {
            new RegExp(`(${m})`);
          } catch (y) {
            throw new Error(
              `Invalid custom RegExp for param "${p}" (${m}): ${y.message}`
            );
          }
        }
        let C = E ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`;
        if (!f) {
          C = A && c.length < 2 ? `(?:/${C})` : "/" + C;
        }
        if (A) {
          C += "?";
        }
        i += C;
        h += 20;
        if (A) {
          h += -8;
        }
        if (E) {
          h += -20;
        }
        if (m === ".*") {
          h += -50;
        }
      }
      u.push(h);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  if (!n.strict) {
    i += "/?";
  }
  if (n.end) {
    i += "$";
  } else if (n.strict && !i.endsWith("/")) {
    i += "(?:/|$)";
  }
  const o = new RegExp(i, n.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(o);
    const f = {};
    if (!u) {
      return null;
    }
    for (let d = 1; d < u.length; d++) {
      const h = u[d] || "";
      const p = s[d - 1];
      f[p.name] = h && p.repeatable ? h.split("/") : h;
    }
    return f;
  }
  function l(c) {
    let u = "";
    let f = false;
    for (const d of e) {
      if (!f || !u.endsWith("/")) {
        u += "/";
      }
      f = false;
      for (const h of d) {
        if (h.type === 0) {
          u += h.value;
        } else if (h.type === 1) {
          const { value: p, repeatable: E, optional: A } = h;
          const b = p in c ? c[p] : "";
          if (v99(b) && !E) {
            throw new Error(
              `Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`
            );
          }
          const m = v99(b) ? b.join("/") : b;
          if (!m) {
            if (A) {
              if (d.length < 2) {
                if (u.endsWith("/")) {
                  u = u.slice(0, -1);
                } else {
                  f = true;
                }
              }
            } else {
              throw new Error(`Missing required param "${p}"`);
            }
          }
          u += m;
        }
      }
    }
    return u || "/";
  }
  return {
    re: o,
    score: r,
    keys: s,
    parse: a,
    stringify: l,
  };
}
function f300(e, t) {
  let n = 0;
  while (n < e.length && n < t.length) {
    const r = t[n] - e[n];
    if (r) {
      return r;
    }
    n++;
  }
  if (e.length < t.length) {
    if (e.length === 1 && e[0] === 80) {
      return -1;
    } else {
      return 1;
    }
  } else if (e.length > t.length) {
    if (t.length === 1 && t[0] === 80) {
      return 1;
    } else {
      return -1;
    }
  } else {
    return 0;
  }
}
function f301(e, t) {
  let n = 0;
  const r = e.score;
  const i = t.score;
  while (n < r.length && n < i.length) {
    const s = f300(r[n], i[n]);
    if (s) {
      return s;
    }
    n++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (f302(r)) {
      return 1;
    }
    if (f302(i)) {
      return -1;
    }
  }
  return i.length - r.length;
}
function f302(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const vO38 = {
  type: 0,
  value: "",
};
const v121 = /[a-zA-Z0-9_]/;
function f303(e) {
  if (!e) {
    return [[]];
  }
  if (e === "/") {
    return [[vO38]];
  }
  if (!e.startsWith("/")) {
    throw new Error(`Invalid path "${e}"`);
  }
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`);
  }
  let n = 0;
  let r = n;
  const i = [];
  let s;
  function o() {
    if (s) {
      i.push(s);
    }
    s = [];
  }
  let a = 0;
  let l;
  let c = "";
  let u = "";
  function f() {
    if (c) {
      if (n === 0) {
        s.push({
          type: 0,
          value: c,
        });
      } else if (n === 1 || n === 2 || n === 3) {
        if (s.length > 1 && (l === "*" || l === "+")) {
          t(
            `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
          );
        }
        s.push({
          type: 1,
          value: c,
          regexp: u,
          repeatable: l === "*" || l === "+",
          optional: l === "*" || l === "?",
        });
      } else {
        t("Invalid state to consume buffer");
      }
      c = "";
    }
  }
  function d() {
    c += l;
  }
  while (a < e.length) {
    l = e[a++];
    if (l === "\\" && n !== 2) {
      r = n;
      n = 4;
      continue;
    }
    switch (n) {
      case 0:
        if (l === "/") {
          if (c) {
            f();
          }
          o();
        } else if (l === ":") {
          f();
          n = 1;
        } else {
          d();
        }
        break;
      case 4:
        d();
        n = r;
        break;
      case 1:
        if (l === "(") {
          n = 2;
        } else if (v121.test(l)) {
          d();
        } else {
          f();
          n = 0;
          if (l !== "*" && l !== "?" && l !== "+") {
            a--;
          }
        }
        break;
      case 2:
        if (l === ")") {
          if (u[u.length - 1] == "\\") {
            u = u.slice(0, -1) + l;
          } else {
            n = 3;
          }
        } else {
          u += l;
        }
        break;
      case 3:
        f();
        n = 0;
        if (l !== "*" && l !== "?" && l !== "+") {
          a--;
        }
        u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  if (n === 2) {
    t(`Unfinished custom RegExp for param "${c}"`);
  }
  f();
  o();
  return i;
}
function f304(e, t, n) {
  const r = f299(f303(e.path), n);
  const i = v98(r, {
    record: e,
    parent: t,
    children: [],
    alias: [],
  });
  if (t && !i.record.aliasOf == !t.record.aliasOf) {
    t.children.push(i);
  }
  return i;
}
function f305(e, t) {
  const n = [];
  const r = new Map();
  t = f311(
    {
      strict: false,
      end: true,
      sensitive: false,
    },
    t
  );
  function i(f) {
    return r.get(f);
  }
  function s(f, d, h) {
    const p = !h;
    const E = f307(f);
    E.aliasOf = h && h.record;
    const A = f311(t, f);
    const b = [E];
    if ("alias" in f) {
      const y = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const x of y) {
        b.push(
          f307(
            v98({}, E, {
              components: h ? h.record.components : E.components,
              path: x,
              aliasOf: h ? h.record : E,
            })
          )
        );
      }
    }
    let m;
    let C;
    for (const y of b) {
      const { path: x } = y;
      if (d && x[0] !== "/") {
        const L = d.record.path;
        const I = L[L.length - 1] === "/" ? "" : "/";
        y.path = d.record.path + (x && I + x);
      }
      m = f304(y, d, A);
      if (h) {
        h.alias.push(m);
      } else {
        C = C || m;
        if (C !== m) {
          C.alias.push(m);
        }
        if (p && f.name && !f309(m)) {
          o(f.name);
        }
      }
      if (f314(m)) {
        l(m);
      }
      if (E.children) {
        const L = E.children;
        for (let I = 0; I < L.length; I++) {
          s(L[I], m, h && h.children[I]);
        }
      }
      h = h || m;
    }
    if (C) {
      return () => {
        o(C);
      };
    } else {
      return vF95;
    }
  }
  function o(f) {
    if (f296(f)) {
      const d = r.get(f);
      if (d) {
        r.delete(f);
        n.splice(n.indexOf(d), 1);
        d.children.forEach(o);
        d.alias.forEach(o);
      }
    } else {
      const d = n.indexOf(f);
      if (d > -1) {
        n.splice(d, 1);
        if (f.record.name) {
          r.delete(f.record.name);
        }
        f.children.forEach(o);
        f.alias.forEach(o);
      }
    }
  }
  function a() {
    return n;
  }
  function l(f) {
    const d = f312(f, n);
    n.splice(d, 0, f);
    if (f.record.name && !f309(f)) {
      r.set(f.record.name, f);
    }
  }
  function c(f, d) {
    let h;
    let p = {};
    let E;
    let A;
    if ("name" in f && f.name) {
      h = r.get(f.name);
      if (!h) {
        throw f297(1, {
          location: f,
        });
      }
      A = h.record.name;
      p = v98(
        f306(
          d.params,
          h.keys
            .filter((C) => !C.optional)
            .concat(h.parent ? h.parent.keys.filter((C) => C.optional) : [])
            .map((C) => C.name)
        ),
        f.params &&
          f306(
            f.params,
            h.keys.map((C) => C.name)
          )
      );
      E = h.stringify(p);
    } else if (f.path != null) {
      E = f.path;
      h = n.find((C) => C.re.test(E));
      if (h) {
        p = h.parse(E);
        A = h.record.name;
      }
    } else {
      h = d.name ? r.get(d.name) : n.find((C) => C.re.test(d.path));
      if (!h) {
        throw f297(1, {
          location: f,
          currentLocation: d,
        });
      }
      A = h.record.name;
      p = v98({}, d.params, f.params);
      E = h.stringify(p);
    }
    const b = [];
    let m = h;
    while (m) {
      b.unshift(m.record);
      m = m.parent;
    }
    return {
      name: A,
      path: E,
      params: p,
      matched: b,
      meta: f310(b),
    };
  }
  e.forEach((f) => s(f));
  function u() {
    n.length = 0;
    r.clear();
  }
  return {
    addRoute: s,
    resolve: c,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: i,
  };
}
function f306(e, t) {
  const n = {};
  for (const r of t) {
    if (r in e) {
      n[r] = e[r];
    }
  }
  return n;
}
function f307(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: f308(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && {
            default: e.component,
          },
  };
  Object.defineProperty(t, "mods", {
    value: {},
  });
  return t;
}
function f308(e) {
  const t = {};
  const n = e.props || false;
  if ("component" in e) {
    t.default = n;
  } else {
    for (const r in e.components) {
      t[r] = typeof n == "object" ? n[r] : n;
    }
  }
  return t;
}
function f309(e) {
  while (e) {
    if (e.record.aliasOf) {
      return true;
    }
    e = e.parent;
  }
  return false;
}
function f310(e) {
  return e.reduce((t, n) => v98(t, n.meta), {});
}
function f311(e, t) {
  const n = {};
  for (const r in e) {
    n[r] = r in t ? t[r] : e[r];
  }
  return n;
}
function f312(e, t) {
  let n = 0;
  let r = t.length;
  while (n !== r) {
    const s = (n + r) >> 1;
    if (f301(e, t[s]) < 0) {
      r = s;
    } else {
      n = s + 1;
    }
  }
  const i = f313(e);
  if (i) {
    r = t.lastIndexOf(i, r - 1);
  }
  return r;
}
function f313(e) {
  let t = e;
  while ((t = t.parent)) {
    if (f314(t) && f301(e, t) === 0) {
      return t;
    }
  }
}
function f314({ record: e }) {
  return (
    !!e.name ||
    (!!e.components && !!Object.keys(e.components).length) ||
    !!e.redirect
  );
}
function f315(e) {
  const t = {};
  if (e === "" || e === "?") {
    return t;
  }
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let i = 0; i < r.length; ++i) {
    const s = r[i].replace(v105, " ");
    const o = s.indexOf("=");
    const a = f273(o < 0 ? s : s.slice(0, o));
    const l = o < 0 ? null : f273(s.slice(o + 1));
    if (a in t) {
      let c = t[a];
      if (!v99(c)) {
        c = t[a] = [c];
      }
      c.push(l);
    } else {
      t[a] = l;
    }
  }
  return t;
}
function f316(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    n = f270(n);
    if (r == null) {
      if (r !== undefined) {
        t += (t.length ? "&" : "") + n;
      }
      continue;
    }
    (v99(r) ? r.map((s) => s && f269(s)) : [r && f269(r)]).forEach((s) => {
      if (s !== undefined) {
        t += (t.length ? "&" : "") + n;
        if (s != null) {
          t += "=" + s;
        }
      }
    });
  }
  return t;
}
function f317(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    if (r !== undefined) {
      t[n] = v99(r)
        ? r.map((i) => (i == null ? null : "" + i))
        : r == null
        ? r
        : "" + r;
    }
  }
  return t;
}
const vSymbol16 = Symbol("");
const vSymbol17 = Symbol("");
const vSymbol18 = Symbol("");
const vSymbol19 = Symbol("");
const vSymbol20 = Symbol("");
function f318() {
  let e = [];
  function t(r) {
    e.push(r);
    return () => {
      const i = e.indexOf(r);
      if (i > -1) {
        e.splice(i, 1);
      }
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n,
  };
}
function f319(e, t, n, r, i, s = (o) => o()) {
  const o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () =>
    new Promise((a, l) => {
      const c = (d) => {
        if (d === false) {
          l(
            f297(4, {
              from: n,
              to: t,
            })
          );
        } else if (d instanceof Error) {
          l(d);
        } else if (f295(d)) {
          l(
            f297(2, {
              from: t,
              to: d,
            })
          );
        } else {
          if (o && r.enterCallbacks[i] === o && typeof d == "function") {
            o.push(d);
          }
          a();
        }
      };
      const u = s(() => e.call(r && r.instances[i], t, n, c));
      let f = Promise.resolve(u);
      if (e.length < 3) {
        f = f.then(c);
      }
      f.catch((d) => l(d));
    });
}
function f320(e, t, n, r, i = (s) => s()) {
  const s = [];
  for (const o of e) {
    for (const a in o.components) {
      let l = o.components[a];
      if (t === "beforeRouteEnter" || !!o.instances[a]) {
        if (f264(l)) {
          const u = (l.__vccOpts || l)[t];
          if (u) {
            s.push(f319(u, n, r, o, a, i));
          }
        } else {
          let c = l();
          s.push(() =>
            c.then((u) => {
              if (!u) {
                throw new Error(
                  `Couldn't resolve component "${a}" at "${o.path}"`
                );
              }
              const f = f265(u) ? u.default : u;
              o.mods[a] = u;
              o.components[a] = f;
              const h = (f.__vccOpts || f)[t];
              return h && f319(h, n, r, o, a, i)();
            })
          );
        }
      }
    }
  }
  return s;
}
function f321(e) {
  const t = f131(vSymbol18);
  const n = f131(vSymbol19);
  const r = M(() => {
    const l = f55(e.to);
    return t.resolve(l);
  });
  const i = M(() => {
    const { matched: l } = r.value;
    const { length: c } = l;
    const u = l[c - 1];
    const f = n.matched;
    if (!u || !f.length) {
      return -1;
    }
    const d = f.findIndex(f278.bind(null, u));
    if (d > -1) {
      return d;
    }
    const h = f325(l[c - 2]);
    if (c > 1 && f325(u) === h && f[f.length - 1].path !== h) {
      return f.findIndex(f278.bind(null, l[c - 2]));
    } else {
      return d;
    }
  });
  const s = M(() => i.value > -1 && f324(n.params, r.value.params));
  const o = M(
    () =>
      i.value > -1 &&
      i.value === n.matched.length - 1 &&
      f279(n.params, r.value.params)
  );
  function a(l = {}) {
    if (f323(l)) {
      const c = t[f55(e.replace) ? "replace" : "push"](f55(e.to)).catch(vF95);
      if (
        e.viewTransition &&
        typeof document !== "undefined" &&
        "startViewTransition" in document
      ) {
        document.startViewTransition(() => c);
      }
      return c;
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: M(() => r.value.href),
    isActive: s,
    isExactActive: o,
    navigate: a,
  };
}
function f322(e) {
  if (e.length === 1) {
    return e[0];
  } else {
    return e;
  }
}
const vF942 = f94({
  name: "RouterLink",
  compatConfig: {
    MODE: 3,
  },
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page",
    },
    viewTransition: Boolean,
  },
  useLink: f321,
  setup(e, { slots: t }) {
    const n = f40(f321(e));
    const { options: r } = f131(vSymbol18);
    const i = M(() => ({
      [vF99(e.activeClass, r.linkActiveClass, "router-link-active")]:
        n.isActive,
      [vF99(
        e.exactActiveClass,
        r.linkExactActiveClass,
        "router-link-exact-active"
      )]: n.isExactActive,
    }));
    return () => {
      const s = t.default && f322(t.default(n));
      if (e.custom) {
        return s;
      } else {
        return q(
          "a",
          {
            "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
            href: n.href,
            onClick: n.navigate,
            class: i.value,
          },
          s
        );
      }
    };
  },
});
const vVF942 = vF942;
function f323(e) {
  if (
    !e.metaKey &&
    !e.altKey &&
    !e.ctrlKey &&
    !e.shiftKey &&
    !e.defaultPrevented &&
    (e.button === undefined || e.button === 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) {
        return;
      }
    }
    if (e.preventDefault) {
      e.preventDefault();
    }
    return true;
  }
}
function f324(e, t) {
  for (const n in t) {
    const r = t[n];
    const i = e[n];
    if (typeof r == "string") {
      if (r !== i) {
        return false;
      }
    } else if (
      !v99(i) ||
      i.length !== r.length ||
      r.some((s, o) => s !== i[o])
    ) {
      return false;
    }
  }
  return true;
}
function f325(e) {
  if (e) {
    if (e.aliasOf) {
      return e.aliasOf.path;
    } else {
      return e.path;
    }
  } else {
    return "";
  }
}
const vF99 = (e, t, n) => e ?? t ?? n;
const vF943 = f94({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default",
    },
    route: Object,
  },
  compatConfig: {
    MODE: 3,
  },
  setup(e, { attrs: t, slots: n }) {
    const r = f131(vSymbol20);
    const i = M(() => e.route || r.value);
    const s = f131(vSymbol17, 0);
    const o = M(() => {
      let c = f55(s);
      const { matched: u } = i.value;
      let f;
      while ((f = u[c]) && !f.components) {
        c++;
      }
      return c;
    });
    const a = M(() => i.value.matched[o.value]);
    f130(
      vSymbol17,
      M(() => o.value + 1)
    );
    f130(vSymbol16, a);
    f130(vSymbol20, i);
    const l = f52();
    f150(
      () => [l.value, a.value, e.name],
      ([c, u, f], [d, h, p]) => {
        if (u) {
          u.instances[f] = c;
          if (h && h !== u && c && c === d) {
            if (!u.leaveGuards.size) {
              u.leaveGuards = h.leaveGuards;
            }
            if (!u.updateGuards.size) {
              u.updateGuards = h.updateGuards;
            }
          }
        }
        if (c && u && (!h || !f278(u, h) || !d)) {
          (u.enterCallbacks[f] || []).forEach((E) => E(c));
        }
      },
      {
        flush: "post",
      }
    );
    return () => {
      const c = i.value;
      const u = e.name;
      const f = a.value;
      const d = f && f.components[u];
      if (!d) {
        return f326(n.default, {
          Component: d,
          route: c,
        });
      }
      const h = f.props[u];
      const p = h
        ? h === true
          ? c.params
          : typeof h == "function"
          ? h(c)
          : h
        : null;
      const A = q(
        d,
        v98({}, p, t, {
          onVnodeUnmounted: (b) => {
            if (b.component.isUnmounted) {
              f.instances[u] = null;
            }
          },
          ref: l,
        })
      );
      return (
        f326(n.default, {
          Component: A,
          route: c,
        }) || A
      );
    };
  },
});
function f326(e, t) {
  if (!e) {
    return null;
  }
  const n = e(t);
  if (n.length === 1) {
    return n[0];
  } else {
    return n;
  }
}
const vVF943 = vF943;
function f327(e) {
  const t = f305(e.routes, e);
  const n = e.parseQuery || f315;
  const r = e.stringifyQuery || f316;
  const i = e.history;
  const s = f318();
  const o = f318();
  const a = f318();
  const l = f53(vO36);
  let c = vO36;
  if (v97 && e.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const u = f266.bind(null, (F) => "" + F);
  const f = f266.bind(null, f272);
  const d = f266.bind(null, f273);
  function h(F, Y) {
    let X;
    let v122;
    if (f296(F)) {
      X = t.getRecordMatcher(F);
      v122 = Y;
    } else {
      v122 = F;
    }
    return t.addRoute(v122, X);
  }
  function p(F) {
    const Y = t.getRecordMatcher(F);
    if (Y) {
      t.removeRoute(Y);
    }
  }
  function E() {
    return t.getRoutes().map((F) => F.record);
  }
  function A(F) {
    return !!t.getRecordMatcher(F);
  }
  function b(F, Y) {
    Y = v98({}, Y || l.value);
    if (typeof F == "string") {
      const P = f274(n, F, Y.path);
      const j = t.resolve(
        {
          path: P.path,
        },
        Y
      );
      const U = i.createHref(P.fullPath);
      return v98(P, j, {
        params: d(j.params),
        hash: f273(P.hash),
        redirectedFrom: undefined,
        href: U,
      });
    }
    let X;
    if (F.path != null) {
      X = v98({}, F, {
        path: f274(n, F.path, Y.path).path,
      });
    } else {
      const P = v98({}, F.params);
      for (const j in P) {
        if (P[j] == null) {
          delete P[j];
        }
      }
      X = v98({}, F, {
        params: f(P),
      });
      Y.params = f(Y.params);
    }
    const v123 = t.resolve(X, Y);
    const v124 = F.hash || "";
    v123.params = u(d(v123.params));
    const _ = f275(
      r,
      v98({}, F, {
        hash: f268(v124),
        path: v123.path,
      })
    );
    const w = i.createHref(_);
    return v98(
      {
        fullPath: _,
        hash: v124,
        query: r === f316 ? f317(F.query) : F.query || {},
      },
      v123,
      {
        redirectedFrom: undefined,
        href: w,
      }
    );
  }
  function m(F) {
    if (typeof F == "string") {
      return f274(n, F, l.value.path);
    } else {
      return v98({}, F);
    }
  }
  function C(F, Y) {
    if (c !== F) {
      return f297(8, {
        from: Y,
        to: F,
      });
    }
  }
  function y(F) {
    return I(F);
  }
  function x(F) {
    return y(
      v98(m(F), {
        replace: true,
      })
    );
  }
  function L(F) {
    const Y = F.matched[F.matched.length - 1];
    if (Y && Y.redirect) {
      const { redirect: X } = Y;
      let v125 = typeof X == "function" ? X(F) : X;
      if (typeof v125 == "string") {
        v125 =
          v125.includes("?") || v125.includes("#")
            ? (v125 = m(v125))
            : {
                path: v125,
              };
        v125.params = {};
      }
      return v98(
        {
          query: F.query,
          hash: F.hash,
          params: v125.path != null ? {} : F.params,
        },
        v125
      );
    }
  }
  function I(F, Y) {
    const X = (c = b(F));
    const v126 = l.value;
    const v127 = F.state;
    const _ = F.force;
    const w = F.replace === true;
    const P = L(X);
    if (P) {
      return I(
        v98(m(P), {
          state: typeof P == "object" ? v98({}, v127, P.state) : v127,
          force: _,
          replace: w,
        }),
        Y || X
      );
    }
    const j = X;
    j.redirectedFrom = Y;
    let U;
    if (!_ && f277(r, v126, X)) {
      U = f297(16, {
        to: j,
        from: v126,
      });
      f330(v126, v126, true, false);
    }
    return (U ? Promise.resolve(U) : R(j, v126))
      .catch((W) => (f298(W) ? (f298(W, 2) ? W : f329(W)) : K(W, j, v126)))
      .then((W) => {
        if (W) {
          if (f298(W, 2)) {
            return I(
              v98(
                {
                  replace: w,
                },
                m(W.to),
                {
                  state:
                    typeof W.to == "object" ? v98({}, v127, W.to.state) : v127,
                  force: _,
                }
              ),
              Y || j
            );
          }
        } else {
          W = S(j, v126, true, w, v127);
        }
        V(j, v126, W);
        return W;
      });
  }
  function B(F, Y) {
    const X = C(F, Y);
    if (X) {
      return Promise.reject(X);
    } else {
      return Promise.resolve();
    }
  }
  function k(F) {
    const Y = v132.values().next().value;
    if (Y && typeof Y.runWithContext == "function") {
      return Y.runWithContext(F);
    } else {
      return F();
    }
  }
  function R(F, Y) {
    let X;
    const [v128, v129, _] = f332(F, Y);
    X = f320(v128.reverse(), "beforeRouteLeave", F, Y);
    for (const P of v128) {
      P.leaveGuards.forEach((j) => {
        X.push(f319(j, F, Y));
      });
    }
    const w = B.bind(null, F, Y);
    X.push(w);
    return f331(X)
      .then(() => {
        X = [];
        for (const P of s.list()) {
          X.push(f319(P, F, Y));
        }
        X.push(w);
        return f331(X);
      })
      .then(() => {
        X = f320(v129, "beforeRouteUpdate", F, Y);
        for (const P of v129) {
          P.updateGuards.forEach((j) => {
            X.push(f319(j, F, Y));
          });
        }
        X.push(w);
        return f331(X);
      })
      .then(() => {
        X = [];
        for (const P of _) {
          if (P.beforeEnter) {
            if (v99(P.beforeEnter)) {
              for (const j of P.beforeEnter) {
                X.push(f319(j, F, Y));
              }
            } else {
              X.push(f319(P.beforeEnter, F, Y));
            }
          }
        }
        X.push(w);
        return f331(X);
      })
      .then(() => {
        F.matched.forEach((P) => (P.enterCallbacks = {}));
        X = f320(_, "beforeRouteEnter", F, Y, k);
        X.push(w);
        return f331(X);
      })
      .then(() => {
        X = [];
        for (const P of o.list()) {
          X.push(f319(P, F, Y));
        }
        X.push(w);
        return f331(X);
      })
      .catch((P) => (f298(P, 8) ? P : Promise.reject(P)));
  }
  function V(F, Y, X) {
    a.list().forEach((p6) => k(() => p6(F, Y, X)));
  }
  function S(F, Y, X, p7, p8) {
    const _ = C(F, Y);
    if (_) {
      return _;
    }
    const w = Y === vO36;
    const P = v97 ? history.state : {};
    if (X) {
      if (p7 || w) {
        i.replace(
          F.fullPath,
          v98(
            {
              scroll: w && P && P.scroll,
            },
            p8
          )
        );
      } else {
        i.push(F.fullPath, p8);
      }
    }
    l.value = F;
    f330(F, Y, X, w);
    f329();
  }
  let G;
  function D() {
    G ||= i.listen((F, Y, X) => {
      if (!vO39.listening) {
        return;
      }
      const vB = b(F);
      const vL = L(vB);
      if (vL) {
        I(
          v98(vL, {
            replace: true,
            force: true,
          }),
          vB
        ).catch(vF95);
        return;
      }
      c = vB;
      const _ = l.value;
      if (v97) {
        f288(f287(_.fullPath, X.delta), vF97());
      }
      R(vB, _)
        .catch((w) =>
          f298(w, 12)
            ? w
            : f298(w, 2)
            ? (I(
                v98(m(w.to), {
                  force: true,
                }),
                vB
              )
                .then((P) => {
                  if (f298(P, 20) && !X.delta && X.type === v115.pop) {
                    i.go(-1, false);
                  }
                })
                .catch(vF95),
              Promise.reject())
            : (X.delta && i.go(-X.delta, false), K(w, vB, _))
        )
        .then((w) => {
          w = w || S(vB, _, false);
          if (w) {
            if (X.delta && !f298(w, 8)) {
              i.go(-X.delta, false);
            } else if (X.type === v115.pop && f298(w, 20)) {
              i.go(-1, false);
            }
          }
          V(vB, _, w);
        })
        .catch(vF95);
    });
  }
  let vF318 = f318();
  let J = f318();
  let Q;
  function K(F, Y, X) {
    f329(F);
    const v130 = J.list();
    if (v130.length) {
      v130.forEach((p9) => p9(F, Y, X));
    } else {
      console.error(F);
    }
    return Promise.reject(F);
  }
  function f328() {
    if (Q && l.value !== vO36) {
      return Promise.resolve();
    } else {
      return new Promise((F, Y) => {
        vF318.add([F, Y]);
      });
    }
  }
  function f329(F) {
    if (!Q) {
      Q = !F;
      D();
      vF318.list().forEach(([Y, X]) => (F ? X(F) : Y()));
      vF318.reset();
    }
    return F;
  }
  function f330(F, Y, X, p10) {
    const { scrollBehavior: ve } = e;
    if (!v97 || !ve) {
      return Promise.resolve();
    }
    const _ =
      (!X && f289(f287(F.fullPath, 0))) ||
      ((p10 || !X) && history.state && history.state.scroll) ||
      null;
    return f70()
      .then(() => ve(F, Y, _))
      .then((w) => w && f286(w))
      .catch((w) => K(w, F, Y));
  }
  const z = (F) => i.go(F);
  let v131;
  const v132 = new Set();
  const vO39 = {
    currentRoute: l,
    listening: true,
    addRoute: h,
    removeRoute: p,
    clearRoutes: t.clearRoutes,
    hasRoute: A,
    getRoutes: E,
    resolve: b,
    options: e,
    push: y,
    replace: x,
    go: z,
    back: () => z(-1),
    forward: () => z(1),
    beforeEach: s.add,
    beforeResolve: o.add,
    afterEach: a.add,
    onError: J.add,
    isReady: f328,
    install(F) {
      const Y = this;
      F.component("RouterLink", vVF942);
      F.component("RouterView", vVF943);
      F.config.globalProperties.$router = Y;
      Object.defineProperty(F.config.globalProperties, "$route", {
        enumerable: true,
        get: () => f55(l),
      });
      if (v97 && !v131 && l.value === vO36) {
        v131 = true;
        y(i.location).catch((p11) => {});
      }
      const X = {};
      for (const v133 in vO36) {
        Object.defineProperty(X, v133, {
          get: () => l.value[v133],
          enumerable: true,
        });
      }
      F.provide(vSymbol18, Y);
      F.provide(vSymbol19, f41(X));
      F.provide(vSymbol20, l);
      const v134 = F.unmount;
      v132.add(F);
      F.unmount = function () {
        v132.delete(F);
        if (v132.size < 1) {
          c = vO36;
          if (G) {
            G();
          }
          G = null;
          l.value = vO36;
          v131 = false;
          Q = false;
        }
        v134();
      };
    },
  };
  function f331(F) {
    return F.reduce((Y, X) => Y.then(() => k(X)), Promise.resolve());
  }
  return vO39;
}
function f332(e, t) {
  const n = [];
  const r = [];
  const i = [];
  const s = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < s; o++) {
    const a = t.matched[o];
    if (a) {
      if (e.matched.find((c) => f278(c, a))) {
        r.push(a);
      } else {
        n.push(a);
      }
    }
    const l = e.matched[o];
    if (l) {
      if (!t.matched.find((c) => f278(c, l))) {
        i.push(l);
      }
    }
  }
  return [n, r, i];
}
function f333() {
  return f131(vSymbol18);
}
function f334(e) {
  return f131(vSymbol19);
}
/*!
 * shared v11.1.3
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
const v135 = typeof window !== "undefined";
const vF100 = (e, t = false) => (t ? Symbol.for(e) : Symbol(e));
const vF101 = (e, t, n) =>
  vF102({
    l: e,
    k: t,
    s: n,
  });
const vF102 = (e) =>
  JSON.stringify(e)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029")
    .replace(/\u0027/g, "\\u0027");
const vF103 = (e) => typeof e == "number" && isFinite(e);
const vF104 = (e) => vF113(e) === "[object Date]";
const vF105 = (e) => vF113(e) === "[object RegExp]";
const vF106 = (e) => vF114(e) && Object.keys(e).length === 0;
const v136 = Object.assign;
const v137 = Object.create;
const vF107 = (e = null) => v137(e);
function f335(e) {
  return e
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
const v138 = Object.prototype.hasOwnProperty;
function f336(e, t) {
  return v138.call(e, t);
}
const v139 = Array.isArray;
const vF108 = (e) => typeof e == "function";
const vF109 = (e) => typeof e == "string";
const vF110 = (e) => typeof e == "boolean";
const vF111 = (e) => e !== null && typeof e == "object";
const vF112 = (e) => vF111(e) && vF108(e.then) && vF108(e.catch);
const v140 = Object.prototype.toString;
const vF113 = (e) => v140.call(e);
const vF114 = (e) => vF113(e) === "[object Object]";
const vF115 = (e) =>
  e == null
    ? ""
    : v139(e) || (vF114(e) && e.toString === v140)
    ? JSON.stringify(e, null, 2)
    : String(e);
function f337(e, t = "") {
  return e.reduce((n, r, i) => (i === 0 ? n + r : n + t + r), "");
}
function f338(e, t) {
  if (typeof console !== "undefined") {
    console.warn("[intlify] " + e);
    if (t) {
      console.warn(t.stack);
    }
  }
}
const vF116 = (e) => !vF111(e) || v139(e);
function f339(e, t) {
  if (vF116(e) || vF116(t)) {
    throw new Error("Invalid value");
  }
  const n = [
    {
      src: e,
      des: t,
    },
  ];
  while (n.length) {
    const { src: r, des: i } = n.pop();
    Object.keys(r).forEach((s) => {
      if (s !== "__proto__") {
        if (vF111(r[s]) && !vF111(i[s])) {
          i[s] = Array.isArray(r[s]) ? [] : vF107();
        }
        if (vF116(i[s]) || vF116(r[s])) {
          i[s] = r[s];
        } else {
          n.push({
            src: r[s],
            des: i[s],
          });
        }
      }
    });
  }
}
/*!
 * message-compiler v11.1.3
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function f340(e, t, n) {
  return {
    line: e,
    column: t,
    offset: n,
  };
}
function f341(e, t, n) {
  return {
    start: e,
    end: t,
  };
}
const vO40 = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
};
const vLN17 = 17;
function f342(e, t, n = {}) {
  const { domain: r, messages: i, args: s } = n;
  const o = e;
  const a = new SyntaxError(String(o));
  a.code = e;
  if (t) {
    a.location = t;
  }
  a.domain = r;
  return a;
}
function f343(e) {
  throw e;
}
const vLS2 = " ";
const vLS3 = "\r";
const v141 = `
`;
const vLS4 = "\u2028";
const vLS5 = "\u2029";
function f344(e) {
  const t = e;
  let n = 0;
  let r = 1;
  let i = 1;
  let s = 0;
  const o = (I) => t[I] === vLS3 && t[I + 1] === v141;
  const a = (I) => t[I] === v141;
  const l = (I) => t[I] === vLS5;
  const c = (I) => t[I] === vLS4;
  const u = (I) => o(I) || a(I) || l(I) || c(I);
  const f = () => n;
  const d = () => r;
  const h = () => i;
  const p = () => s;
  const E = (I) => (o(I) || l(I) || c(I) ? v141 : t[I]);
  const A = () => E(n);
  const b = () => E(n + s);
  function m() {
    s = 0;
    if (u(n)) {
      r++;
      i = 0;
    }
    if (o(n)) {
      n++;
    }
    n++;
    i++;
    return t[n];
  }
  function C() {
    if (o(n + s)) {
      s++;
    }
    s++;
    return t[n + s];
  }
  function y() {
    n = 0;
    r = 1;
    i = 1;
    s = 0;
  }
  function x(I = 0) {
    s = I;
  }
  function L() {
    const I = n + s;
    while (I !== n) {
      m();
    }
    s = 0;
  }
  return {
    index: f,
    line: d,
    column: h,
    peekOffset: p,
    charAt: E,
    currentChar: A,
    currentPeek: b,
    next: m,
    peek: C,
    reset: y,
    resetPeek: x,
    skipToPeek: L,
  };
}
const vUndefined = undefined;
const vLS6 = ".";
const vLS7 = "'";
const vLSTokenizer = "tokenizer";
function f345(e, t = {}) {
  const n = t.location !== false;
  const r = f344(e);
  const i = () => r.index();
  const s = () => f340(r.line(), r.column(), r.index());
  const o = s();
  const a = i();
  const l = {
    currentType: 13,
    offset: a,
    startLoc: o,
    endLoc: o,
    lastType: 13,
    lastOffset: a,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: false,
    text: "",
  };
  const c = () => l;
  const { onError: u } = t;
  function f(g, v, N, ...O) {
    const Z = c();
    v.column += N;
    v.offset += N;
    if (u) {
      const H = n ? f341(Z.startLoc, v) : null;
      const T = f342(g, H, {
        domain: vLSTokenizer,
        args: O,
      });
      u(T);
    }
  }
  function d(g, v, N) {
    g.endLoc = s();
    g.currentType = v;
    const O = {
      type: v,
    };
    if (n) {
      O.loc = f341(g.startLoc, g.endLoc);
    }
    if (N != null) {
      O.value = N;
    }
    return O;
  }
  const h = (g) => d(g, 13);
  function p(g, v) {
    if (g.currentChar() === v) {
      g.next();
      return v;
    } else {
      f(vO40.EXPECTED_TOKEN, s(), 0, v);
      return "";
    }
  }
  function E(g) {
    let v = "";
    while (g.currentPeek() === vLS2 || g.currentPeek() === v141) {
      v += g.currentPeek();
      g.peek();
    }
    return v;
  }
  function A(g) {
    const v = E(g);
    g.skipToPeek();
    return v;
  }
  function b(g) {
    if (g === vUndefined) {
      return false;
    }
    const v = g.charCodeAt(0);
    return (v >= 97 && v <= 122) || (v >= 65 && v <= 90) || v === 95;
  }
  function m(g) {
    if (g === vUndefined) {
      return false;
    }
    const v = g.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function C(g, v) {
    const { currentType: N } = v;
    if (N !== 2) {
      return false;
    }
    E(g);
    const O = b(g.currentPeek());
    g.resetPeek();
    return O;
  }
  function y(g, v) {
    const { currentType: N } = v;
    if (N !== 2) {
      return false;
    }
    E(g);
    const O = g.currentPeek() === "-" ? g.peek() : g.currentPeek();
    const Z = m(O);
    g.resetPeek();
    return Z;
  }
  function x(g, v) {
    const { currentType: N } = v;
    if (N !== 2) {
      return false;
    }
    E(g);
    const O = g.currentPeek() === vLS7;
    g.resetPeek();
    return O;
  }
  function L(g, v) {
    const { currentType: N } = v;
    if (N !== 7) {
      return false;
    }
    E(g);
    const O = g.currentPeek() === ".";
    g.resetPeek();
    return O;
  }
  function I(g, v) {
    const { currentType: N } = v;
    if (N !== 8) {
      return false;
    }
    E(g);
    const O = b(g.currentPeek());
    g.resetPeek();
    return O;
  }
  function B(g, v) {
    const { currentType: N } = v;
    if (N !== 7 && N !== 11) {
      return false;
    }
    E(g);
    const O = g.currentPeek() === ":";
    g.resetPeek();
    return O;
  }
  function k(g, v) {
    const { currentType: N } = v;
    if (N !== 9) {
      return false;
    }
    const O = () => {
      const H = g.currentPeek();
      if (H === "{") {
        return b(g.peek());
      } else if (
        H === "@" ||
        H === "|" ||
        H === ":" ||
        H === "." ||
        H === vLS2 ||
        !H
      ) {
        return false;
      } else if (H === v141) {
        g.peek();
        return O();
      } else {
        return V(g, false);
      }
    };
    const Z = O();
    g.resetPeek();
    return Z;
  }
  function R(g) {
    E(g);
    const v = g.currentPeek() === "|";
    g.resetPeek();
    return v;
  }
  function V(g, v = true) {
    const N = (Z = false, H = "") => {
      const T = g.currentPeek();
      if (T === "{" || T === "@" || !T) {
        return Z;
      } else if (T === "|") {
        return H !== vLS2 && H !== v141;
      } else if (T === vLS2) {
        g.peek();
        return N(true, vLS2);
      } else if (T === v141) {
        g.peek();
        return N(true, v141);
      } else {
        return true;
      }
    };
    const O = N();
    if (v) {
      g.resetPeek();
    }
    return O;
  }
  function S(g, v) {
    const N = g.currentChar();
    if (N === vUndefined) {
      return vUndefined;
    } else if (v(N)) {
      g.next();
      return N;
    } else {
      return null;
    }
  }
  function G(g) {
    const v = g.charCodeAt(0);
    return (
      (v >= 97 && v <= 122) ||
      (v >= 65 && v <= 90) ||
      (v >= 48 && v <= 57) ||
      v === 95 ||
      v === 36
    );
  }
  function D(g) {
    return S(g, G);
  }
  function f346(g) {
    const v = g.charCodeAt(0);
    return (
      (v >= 97 && v <= 122) ||
      (v >= 65 && v <= 90) ||
      (v >= 48 && v <= 57) ||
      v === 95 ||
      v === 36 ||
      v === 45
    );
  }
  function J(g) {
    return S(g, f346);
  }
  function Q(g) {
    const v = g.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function K(g) {
    return S(g, Q);
  }
  function f347(g) {
    const v = g.charCodeAt(0);
    return (
      (v >= 48 && v <= 57) || (v >= 65 && v <= 70) || (v >= 97 && v <= 102)
    );
  }
  function f348(g) {
    return S(g, f347);
  }
  function f349(g) {
    let v = "";
    let N = "";
    while ((v = K(g))) {
      N += v;
    }
    return N;
  }
  function z(g) {
    let v = "";
    while (true) {
      const N = g.currentChar();
      if (N === "{" || N === "}" || N === "@" || N === "|" || !N) {
        break;
      }
      if (N === vLS2 || N === v141) {
        if (V(g)) {
          v += N;
          g.next();
        } else {
          if (R(g)) {
            break;
          }
          v += N;
          g.next();
        }
      } else {
        v += N;
        g.next();
      }
    }
    return v;
  }
  function f350(g) {
    A(g);
    let v = "";
    let N = "";
    while ((v = J(g))) {
      N += v;
    }
    if (g.currentChar() === vUndefined) {
      f(vO40.UNTERMINATED_CLOSING_BRACE, s(), 0);
    }
    return N;
  }
  function f351(g) {
    A(g);
    let v = "";
    if (g.currentChar() === "-") {
      g.next();
      v += `-${f349(g)}`;
    } else {
      v += f349(g);
    }
    if (g.currentChar() === vUndefined) {
      f(vO40.UNTERMINATED_CLOSING_BRACE, s(), 0);
    }
    return v;
  }
  function f352(g) {
    return g !== vLS7 && g !== v141;
  }
  function f353(g) {
    A(g);
    p(g, "'");
    let v = "";
    let N = "";
    while ((v = S(g, f352))) {
      if (v === "\\") {
        N += F(g);
      } else {
        N += v;
      }
    }
    const O = g.currentChar();
    if (O === v141 || O === vUndefined) {
      f(vO40.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0);
      if (O === v141) {
        g.next();
        p(g, "'");
      }
      return N;
    } else {
      p(g, "'");
      return N;
    }
  }
  function F(g) {
    const v = g.currentChar();
    switch (v) {
      case "\\":
      case "'":
        g.next();
        return `\\${v}`;
      case "u":
        return Y(g, v, 4);
      case "U":
        return Y(g, v, 6);
      default:
        f(vO40.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, v);
        return "";
    }
  }
  function Y(g, v, N) {
    p(g, v);
    let O = "";
    for (let Z = 0; Z < N; Z++) {
      const H = f348(g);
      if (!H) {
        f(
          vO40.INVALID_UNICODE_ESCAPE_SEQUENCE,
          s(),
          0,
          `\\${v}${O}${g.currentChar()}`
        );
        break;
      }
      O += H;
    }
    return `\\${v}${O}`;
  }
  function X(g) {
    return g !== "{" && g !== "}" && g !== vLS2 && g !== v141;
  }
  function f354(g) {
    A(g);
    let v = "";
    let N = "";
    while ((v = S(g, X))) {
      N += v;
    }
    return N;
  }
  function f355(g) {
    let v = "";
    let N = "";
    while ((v = D(g))) {
      N += v;
    }
    return N;
  }
  function _(g) {
    const v = (N) => {
      const O = g.currentChar();
      if (
        O === "{" ||
        O === "@" ||
        O === "|" ||
        O === "(" ||
        O === ")" ||
        !O ||
        O === vLS2
      ) {
        return N;
      } else {
        N += O;
        g.next();
        return v(N);
      }
    };
    return v("");
  }
  function w(g) {
    A(g);
    const v = p(g, "|");
    A(g);
    return v;
  }
  function P(g, v) {
    let N = null;
    switch (g.currentChar()) {
      case "{":
        if (v.braceNest >= 1) {
          f(vO40.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0);
        }
        g.next();
        N = d(v, 2, "{");
        A(g);
        v.braceNest++;
        return N;
      case "}":
        if (v.braceNest > 0 && v.currentType === 2) {
          f(vO40.EMPTY_PLACEHOLDER, s(), 0);
        }
        g.next();
        N = d(v, 3, "}");
        v.braceNest--;
        if (v.braceNest > 0) {
          A(g);
        }
        if (v.inLinked && v.braceNest === 0) {
          v.inLinked = false;
        }
        return N;
      case "@":
        if (v.braceNest > 0) {
          f(vO40.UNTERMINATED_CLOSING_BRACE, s(), 0);
        }
        N = j(g, v) || h(v);
        v.braceNest = 0;
        return N;
      default: {
        let Z = true;
        let H = true;
        let T = true;
        if (R(g)) {
          if (v.braceNest > 0) {
            f(vO40.UNTERMINATED_CLOSING_BRACE, s(), 0);
          }
          N = d(v, 1, w(g));
          v.braceNest = 0;
          v.inLinked = false;
          return N;
        }
        if (
          v.braceNest > 0 &&
          (v.currentType === 4 || v.currentType === 5 || v.currentType === 6)
        ) {
          f(vO40.UNTERMINATED_CLOSING_BRACE, s(), 0);
          v.braceNest = 0;
          return U(g, v);
        }
        if ((Z = C(g, v))) {
          N = d(v, 4, f350(g));
          A(g);
          return N;
        }
        if ((H = y(g, v))) {
          N = d(v, 5, f351(g));
          A(g);
          return N;
        }
        if ((T = x(g, v))) {
          N = d(v, 6, f353(g));
          A(g);
          return N;
        }
        if (!Z && !H && !T) {
          N = d(v, 12, f354(g));
          f(vO40.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, N.value);
          A(g);
          return N;
        }
        break;
      }
    }
    return N;
  }
  function j(g, v) {
    const { currentType: N } = v;
    let O = null;
    const Z = g.currentChar();
    if (
      (N === 7 || N === 8 || N === 11 || N === 9) &&
      (Z === v141 || Z === vLS2)
    ) {
      f(vO40.INVALID_LINKED_FORMAT, s(), 0);
    }
    switch (Z) {
      case "@":
        g.next();
        O = d(v, 7, "@");
        v.inLinked = true;
        return O;
      case ".":
        A(g);
        g.next();
        return d(v, 8, ".");
      case ":":
        A(g);
        g.next();
        return d(v, 9, ":");
      default:
        if (R(g)) {
          O = d(v, 1, w(g));
          v.braceNest = 0;
          v.inLinked = false;
          return O;
        } else if (L(g, v) || B(g, v)) {
          A(g);
          return j(g, v);
        } else if (I(g, v)) {
          A(g);
          return d(v, 11, f355(g));
        } else if (k(g, v)) {
          A(g);
          if (Z === "{") {
            return P(g, v) || O;
          } else {
            return d(v, 10, _(g));
          }
        } else {
          if (N === 7) {
            f(vO40.INVALID_LINKED_FORMAT, s(), 0);
          }
          v.braceNest = 0;
          v.inLinked = false;
          return U(g, v);
        }
    }
  }
  function U(g, v) {
    let N = {
      type: 13,
    };
    if (v.braceNest > 0) {
      return P(g, v) || h(v);
    }
    if (v.inLinked) {
      return j(g, v) || h(v);
    }
    switch (g.currentChar()) {
      case "{":
        return P(g, v) || h(v);
      case "}":
        f(vO40.UNBALANCED_CLOSING_BRACE, s(), 0);
        g.next();
        return d(v, 3, "}");
      case "@":
        return j(g, v) || h(v);
      default: {
        if (R(g)) {
          N = d(v, 1, w(g));
          v.braceNest = 0;
          v.inLinked = false;
          return N;
        }
        if (V(g)) {
          return d(v, 0, z(g));
        }
        break;
      }
    }
    return N;
  }
  function W() {
    const { currentType: g, offset: v, startLoc: N, endLoc: O } = l;
    l.lastType = g;
    l.lastOffset = v;
    l.lastStartLoc = N;
    l.lastEndLoc = O;
    l.offset = i();
    l.startLoc = s();
    if (r.currentChar() === vUndefined) {
      return d(l, 13);
    } else {
      return U(r, l);
    }
  }
  return {
    nextToken: W,
    currentOffset: i,
    currentPosition: s,
    context: c,
  };
}
const vLSParser = "parser";
const v142 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function f356(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      if (r <= 55295 || r >= 57344) {
        return String.fromCodePoint(r);
      } else {
        return "�";
      }
    }
  }
}
function f357(e = {}) {
  const t = e.location !== false;
  const { onError: n } = e;
  function r(b, m, C, y, ...x) {
    const L = b.currentPosition();
    L.offset += y;
    L.column += y;
    if (n) {
      const I = t ? f341(C, L) : null;
      const B = f342(m, I, {
        domain: vLSParser,
        args: x,
      });
      n(B);
    }
  }
  function i(b, m, C) {
    const y = {
      type: b,
    };
    if (t) {
      y.start = m;
      y.end = m;
      y.loc = {
        start: C,
        end: C,
      };
    }
    return y;
  }
  function s(b, m, C, y) {
    if (t) {
      b.end = m;
      if (b.loc) {
        b.loc.end = C;
      }
    }
  }
  function o(b, m) {
    const C = b.context();
    const y = i(3, C.offset, C.startLoc);
    y.value = m;
    s(y, b.currentOffset(), b.currentPosition());
    return y;
  }
  function a(b, m) {
    const C = b.context();
    const { lastOffset: y, lastStartLoc: x } = C;
    const L = i(5, y, x);
    L.index = parseInt(m, 10);
    b.nextToken();
    s(L, b.currentOffset(), b.currentPosition());
    return L;
  }
  function l(b, m) {
    const C = b.context();
    const { lastOffset: y, lastStartLoc: x } = C;
    const L = i(4, y, x);
    L.key = m;
    b.nextToken();
    s(L, b.currentOffset(), b.currentPosition());
    return L;
  }
  function c(b, m) {
    const C = b.context();
    const { lastOffset: y, lastStartLoc: x } = C;
    const L = i(9, y, x);
    L.value = m.replace(v142, f356);
    b.nextToken();
    s(L, b.currentOffset(), b.currentPosition());
    return L;
  }
  function u(b) {
    const m = b.nextToken();
    const C = b.context();
    const { lastOffset: y, lastStartLoc: x } = C;
    const L = i(8, y, x);
    if (m.type !== 11) {
      r(b, vO40.UNEXPECTED_EMPTY_LINKED_MODIFIER, C.lastStartLoc, 0);
      L.value = "";
      s(L, y, x);
      return {
        nextConsumeToken: m,
        node: L,
      };
    } else {
      if (m.value == null) {
        r(b, vO40.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, f358(m));
      }
      L.value = m.value || "";
      s(L, b.currentOffset(), b.currentPosition());
      return {
        node: L,
      };
    }
  }
  function f(b, m) {
    const C = b.context();
    const y = i(7, C.offset, C.startLoc);
    y.value = m;
    s(y, b.currentOffset(), b.currentPosition());
    return y;
  }
  function d(b) {
    const m = b.context();
    const C = i(6, m.offset, m.startLoc);
    let y = b.nextToken();
    if (y.type === 8) {
      const x = u(b);
      C.modifier = x.node;
      y = x.nextConsumeToken || b.nextToken();
    }
    if (y.type !== 9) {
      r(b, vO40.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, f358(y));
    }
    y = b.nextToken();
    if (y.type === 2) {
      y = b.nextToken();
    }
    switch (y.type) {
      case 10:
        if (y.value == null) {
          r(b, vO40.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, f358(y));
        }
        C.key = f(b, y.value || "");
        break;
      case 4:
        if (y.value == null) {
          r(b, vO40.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, f358(y));
        }
        C.key = l(b, y.value || "");
        break;
      case 5:
        if (y.value == null) {
          r(b, vO40.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, f358(y));
        }
        C.key = a(b, y.value || "");
        break;
      case 6:
        if (y.value == null) {
          r(b, vO40.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, f358(y));
        }
        C.key = c(b, y.value || "");
        break;
      default: {
        r(b, vO40.UNEXPECTED_EMPTY_LINKED_KEY, m.lastStartLoc, 0);
        const x = b.context();
        const L = i(7, x.offset, x.startLoc);
        L.value = "";
        s(L, x.offset, x.startLoc);
        C.key = L;
        s(C, x.offset, x.startLoc);
        return {
          nextConsumeToken: y,
          node: C,
        };
      }
    }
    s(C, b.currentOffset(), b.currentPosition());
    return {
      node: C,
    };
  }
  function h(b) {
    const m = b.context();
    const C = m.currentType === 1 ? b.currentOffset() : m.offset;
    const y = m.currentType === 1 ? m.endLoc : m.startLoc;
    const x = i(2, C, y);
    x.items = [];
    let L = null;
    do {
      const k = L || b.nextToken();
      L = null;
      switch (k.type) {
        case 0:
          if (k.value == null) {
            r(b, vO40.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, f358(k));
          }
          x.items.push(o(b, k.value || ""));
          break;
        case 5:
          if (k.value == null) {
            r(b, vO40.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, f358(k));
          }
          x.items.push(a(b, k.value || ""));
          break;
        case 4:
          if (k.value == null) {
            r(b, vO40.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, f358(k));
          }
          x.items.push(l(b, k.value || ""));
          break;
        case 6:
          if (k.value == null) {
            r(b, vO40.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, f358(k));
          }
          x.items.push(c(b, k.value || ""));
          break;
        case 7: {
          const R = d(b);
          x.items.push(R.node);
          L = R.nextConsumeToken || null;
          break;
        }
      }
    } while (m.currentType !== 13 && m.currentType !== 1);
    const I = m.currentType === 1 ? m.lastOffset : b.currentOffset();
    const B = m.currentType === 1 ? m.lastEndLoc : b.currentPosition();
    s(x, I, B);
    return x;
  }
  function p(b, m, C, y) {
    const x = b.context();
    let L = y.items.length === 0;
    const I = i(1, m, C);
    I.cases = [];
    I.cases.push(y);
    do {
      const B = h(b);
      L ||= B.items.length === 0;
      I.cases.push(B);
    } while (x.currentType !== 13);
    if (L) {
      r(b, vO40.MUST_HAVE_MESSAGES_IN_PLURAL, C, 0);
    }
    s(I, b.currentOffset(), b.currentPosition());
    return I;
  }
  function E(b) {
    const m = b.context();
    const { offset: C, startLoc: y } = m;
    const x = h(b);
    if (m.currentType === 13) {
      return x;
    } else {
      return p(b, C, y, x);
    }
  }
  function A(b) {
    const m = f345(b, v136({}, e));
    const C = m.context();
    const y = i(0, C.offset, C.startLoc);
    if (t && y.loc) {
      y.loc.source = b;
    }
    y.body = E(m);
    if (e.onCacheKey) {
      y.cacheKey = e.onCacheKey(b);
    }
    if (C.currentType !== 13) {
      r(
        m,
        vO40.UNEXPECTED_LEXICAL_ANALYSIS,
        C.lastStartLoc,
        0,
        b[C.offset] || ""
      );
    }
    s(y, m.currentOffset(), m.currentPosition());
    return y;
  }
  return {
    parse: A,
  };
}
function f358(e) {
  if (e.type === 13) {
    return "EOF";
  }
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  if (t.length > 10) {
    return t.slice(0, 9) + "…";
  } else {
    return t;
  }
}
function f359(e, t = {}) {
  const n = {
    ast: e,
    helpers: new Set(),
  };
  return {
    context: () => n,
    helper: (s) => {
      n.helpers.add(s);
      return s;
    },
  };
}
function f360(e, t) {
  for (let n = 0; n < e.length; n++) {
    f361(e[n], t);
  }
}
function f361(e, t) {
  switch (e.type) {
    case 1:
      f360(e.cases, t);
      t.helper("plural");
      break;
    case 2:
      f360(e.items, t);
      break;
    case 6: {
      f361(e.key, t);
      t.helper("linked");
      t.helper("type");
      break;
    }
    case 5:
      t.helper("interpolate");
      t.helper("list");
      break;
    case 4:
      t.helper("interpolate");
      t.helper("named");
      break;
  }
}
function f362(e, t = {}) {
  const n = f359(e);
  n.helper("normalize");
  if (e.body) {
    f361(e.body, n);
  }
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function f363(e) {
  const t = e.body;
  if (t.type === 2) {
    f364(t);
  } else {
    t.cases.forEach((n) => f364(n));
  }
  return e;
}
function f364(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    if (t.type === 3 || t.type === 9) {
      e.static = t.value;
      delete t.value;
    }
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if ((r.type !== 3 && r.type !== 9) || r.value == null) {
        break;
      }
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = f337(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        if (r.type === 3 || r.type === 9) {
          delete r.value;
        }
      }
    }
  }
}
function f365(e) {
  e.t = e.type;
  switch (e.type) {
    case 0: {
      const t = e;
      f365(t.body);
      t.b = t.body;
      delete t.body;
      break;
    }
    case 1: {
      const t = e;
      const n = t.cases;
      for (let r = 0; r < n.length; r++) {
        f365(n[r]);
      }
      t.c = n;
      delete t.cases;
      break;
    }
    case 2: {
      const t = e;
      const n = t.items;
      for (let r = 0; r < n.length; r++) {
        f365(n[r]);
      }
      t.i = n;
      delete t.items;
      if (t.static) {
        t.s = t.static;
        delete t.static;
      }
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      if (t.value) {
        t.v = t.value;
        delete t.value;
      }
      break;
    }
    case 6: {
      const t = e;
      f365(t.key);
      t.k = t.key;
      delete t.key;
      if (t.modifier) {
        f365(t.modifier);
        t.m = t.modifier;
        delete t.modifier;
      }
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index;
      delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key;
      delete t.key;
      break;
    }
  }
  delete e.type;
}
function f366(e, t) {
  const { filename: n, breakLineCode: r, needIndent: i } = t;
  const s = t.location !== false;
  const o = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: undefined,
    breakLineCode: r,
    needIndent: i,
    indentLevel: 0,
  };
  if (s && e.loc) {
    o.source = e.loc.source;
  }
  const a = () => o;
  function l(E, A) {
    o.code += E;
  }
  function c(E, A = true) {
    const b = A ? r : "";
    l(i ? b + "  ".repeat(E) : b);
  }
  function u(E = true) {
    const A = ++o.indentLevel;
    if (E) {
      c(A);
    }
  }
  function f(E = true) {
    const A = --o.indentLevel;
    if (E) {
      c(A);
    }
  }
  function d() {
    c(o.indentLevel);
  }
  return {
    context: a,
    push: l,
    indent: u,
    deindent: f,
    newline: d,
    helper: (E) => `_${E}`,
    needIndent: () => o.needIndent,
  };
}
function f367(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`);
  f371(e, t.key);
  if (t.modifier) {
    e.push(", ");
    f371(e, t.modifier);
    e.push(", _type");
  } else {
    e.push(", undefined, _type");
  }
  e.push(")");
}
function f368(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n("normalize")}([`);
  e.indent(r());
  const i = t.items.length;
  for (let s = 0; s < i && (f371(e, t.items[s]), s !== i - 1); s++) {
    e.push(", ");
  }
  e.deindent(r());
  e.push("])");
}
function f369(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`);
    e.indent(r());
    const i = t.cases.length;
    for (let s = 0; s < i && (f371(e, t.cases[s]), s !== i - 1); s++) {
      e.push(", ");
    }
    e.deindent(r());
    e.push("])");
  }
}
function f370(e, t) {
  if (t.body) {
    f371(e, t.body);
  } else {
    e.push("null");
  }
}
function f371(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      f370(e, t);
      break;
    case 1:
      f369(e, t);
      break;
    case 2:
      f368(e, t);
      break;
    case 6:
      f367(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
  }
}
const vF117 = (e, t = {}) => {
  const n = vF109(t.mode) ? t.mode : "normal";
  const r = vF109(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const i =
    t.breakLineCode ??
    (n === "arrow"
      ? ";"
      : `
`);
  const s = t.needIndent ? t.needIndent : n !== "arrow";
  const o = e.helpers || [];
  const a = f366(e, {
    filename: r,
    breakLineCode: i,
    needIndent: s,
  });
  a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {");
  a.indent(s);
  if (o.length > 0) {
    a.push(
      `const { ${f337(
        o.map((u) => `${u}: _${u}`),
        ", "
      )} } = ctx`
    );
    a.newline();
  }
  a.push("return ");
  f371(a, e);
  a.deindent(s);
  a.push("}");
  delete e.helpers;
  const { code: l, map: c } = a.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : undefined,
  };
};
function f372(e, t = {}) {
  const n = v136({}, t);
  const r = !!n.jit;
  const i = !!n.minify;
  const s = n.optimize == null ? true : n.optimize;
  const a = f357(n).parse(e);
  if (r) {
    if (s) {
      f363(a);
    }
    if (i) {
      f365(a);
    }
    return {
      ast: a,
      code: "",
    };
  } else {
    f362(a, n);
    return vF117(a, n);
  }
}
/*!
 * core-base v11.1.3
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function f373(e) {
  return vF111(e) && f378(e) === 0 && (f336(e, "b") || f336(e, "body"));
}
const vA10 = ["b", "body"];
function f374(e) {
  return f382(e, vA10);
}
const vA11 = ["c", "cases"];
function f375(e) {
  return f382(e, vA11, []);
}
const vA12 = ["s", "static"];
function f376(e) {
  return f382(e, vA12);
}
const vA13 = ["i", "items"];
function f377(e) {
  return f382(e, vA13, []);
}
const vA14 = ["t", "type"];
function f378(e) {
  return f382(e, vA14);
}
const vA15 = ["v", "value"];
function f379(e, t) {
  const n = f382(e, vA15);
  if (n != null) {
    return n;
  }
  throw f383(t);
}
const vA16 = ["m", "modifier"];
function f380(e) {
  return f382(e, vA16);
}
const vA17 = ["k", "key"];
function f381(e) {
  const t = f382(e, vA17);
  if (t) {
    return t;
  }
  throw f383(6);
}
function f382(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (f336(e, i) && e[i] != null) {
      return e[i];
    }
  }
  return n;
}
const vA18 = [
  ...vA10,
  ...vA11,
  ...vA12,
  ...vA13,
  ...vA17,
  ...vA16,
  ...vA15,
  ...vA14,
];
function f383(e) {
  return new Error(`unhandled node type: ${e}`);
}
function f384(e) {
  return (n) => f385(n, e);
}
function f385(e, t) {
  const n = f374(t);
  if (n == null) {
    throw f383(0);
  }
  if (f378(n) === 1) {
    const s = f375(n);
    return e.plural(s.reduce((o, a) => [...o, f386(e, a)], []));
  } else {
    return f386(e, n);
  }
}
function f386(e, t) {
  const n = f376(t);
  if (n != null) {
    if (e.type === "text") {
      return n;
    } else {
      return e.normalize([n]);
    }
  }
  {
    const r = f377(t).reduce((i, s) => [...i, f387(e, s)], []);
    return e.normalize(r);
  }
}
function f387(e, t) {
  const n = f378(t);
  switch (n) {
    case 3:
      return f379(t, n);
    case 9:
      return f379(t, n);
    case 4: {
      const r = t;
      if (f336(r, "k") && r.k) {
        return e.interpolate(e.named(r.k));
      }
      if (f336(r, "key") && r.key) {
        return e.interpolate(e.named(r.key));
      }
      throw f383(n);
    }
    case 5: {
      const r = t;
      if (f336(r, "i") && vF103(r.i)) {
        return e.interpolate(e.list(r.i));
      }
      if (f336(r, "index") && vF103(r.index)) {
        return e.interpolate(e.list(r.index));
      }
      throw f383(n);
    }
    case 6: {
      const r = t;
      const i = f380(r);
      const s = f381(r);
      return e.linked(f387(e, s), i ? f387(e, i) : undefined, e.type);
    }
    case 7:
      return f379(t, n);
    case 8:
      return f379(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const vF118 = (e) => e;
let vVF107 = vF107();
function f388(e, t = {}) {
  let n = false;
  const r = t.onError || f343;
  t.onError = (i) => {
    n = true;
    r(i);
  };
  return {
    ...f372(e, t),
    detectError: n,
  };
}
function f389(e, t) {
  if (vF109(e)) {
    if (vF110(t.warnHtmlMessage)) {
      t.warnHtmlMessage;
    }
    const r = (t.onCacheKey || vF118)(e);
    const i = vVF107[r];
    if (i) {
      return i;
    }
    const { ast: s, detectError: o } = f388(e, {
      ...t,
      location: false,
      jit: true,
    });
    const a = f384(s);
    if (o) {
      return a;
    } else {
      return (vVF107[r] = a);
    }
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = vVF107[n];
      return r || (vVF107[n] = f384(e));
    } else {
      return f384(e);
    }
  }
}
const vO41 = {
  INVALID_ARGUMENT: vLN17,
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23,
};
const vLN24 = 24;
function f390(e) {
  return f342(e, null, undefined);
}
function f391(e, t) {
  if (t.locale != null) {
    return f392(t.locale);
  } else {
    return f392(e.locale);
  }
}
let v143;
function f392(e) {
  if (vF109(e)) {
    return e;
  }
  if (vF108(e)) {
    if (e.resolvedOnce && v143 != null) {
      return v143;
    }
    if (e.constructor.name === "Function") {
      const t = e();
      if (vF112(t)) {
        throw f390(vO41.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      }
      return (v143 = t);
    } else {
      throw f390(vO41.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
    }
  } else {
    throw f390(vO41.NOT_SUPPORT_LOCALE_TYPE);
  }
}
function f393(e, t, n) {
  return [
    ...new Set([
      n,
      ...(v139(t) ? t : vF111(t) ? Object.keys(t) : vF109(t) ? [t] : [n]),
    ]),
  ];
}
function f394(e, t, n) {
  const r = vF109(n) ? n : vLSEnUS;
  const i = e;
  i.__localeChainCache ||= new Map();
  let s = i.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let o = [n];
    while (v139(o)) {
      o = f395(s, o, t);
    }
    const a = v139(t) || !vF114(t) ? t : t.default ? t.default : null;
    o = vF109(a) ? [a] : a;
    if (v139(o)) {
      f395(s, o, false);
    }
    i.__localeChainCache.set(r, s);
  }
  return s;
}
function f395(e, t, n) {
  let r = true;
  for (let i = 0; i < t.length && vF110(r); i++) {
    const s = t[i];
    if (vF109(s)) {
      r = f396(e, t[i], n);
    }
  }
  return r;
}
function f396(e, t, n) {
  let r;
  const i = t.split("-");
  do {
    const s = i.join("-");
    r = f397(e, s, n);
    i.splice(-1, 1);
  } while (i.length && r === true);
  return r;
}
function f397(e, t, n) {
  let r = false;
  if (!e.includes(t) && ((r = true), t)) {
    r = t[t.length - 1] !== "!";
    const i = t.replace(/!/g, "");
    e.push(i);
    if ((v139(n) || vF114(n)) && n[i]) {
      r = n[i];
    }
  }
  return r;
}
const vA19 = [];
vA19[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7],
};
vA19[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7],
};
vA19[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0],
};
vA19[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1],
};
vA19[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0],
};
vA19[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0],
};
vA19[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0],
};
const v144 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function f398(e) {
  return v144.test(e);
}
function f399(e) {
  const t = e.charCodeAt(0);
  const n = e.charCodeAt(e.length - 1);
  if (t === n && (t === 34 || t === 39)) {
    return e.slice(1, -1);
  } else {
    return e;
  }
}
function f400(e) {
  if (e == null) {
    return "o";
  }
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function f401(e) {
  const t = e.trim();
  if (e.charAt(0) === "0" && isNaN(parseInt(e))) {
    return false;
  } else if (f398(t)) {
    return f399(t);
  } else {
    return "*" + t;
  }
}
function f402(e) {
  const t = [];
  let n = -1;
  let r = 0;
  let i = 0;
  let s;
  let o;
  let a;
  let l;
  let c;
  let u;
  let f;
  const d = [];
  d[0] = () => {
    if (o === undefined) {
      o = a;
    } else {
      o += a;
    }
  };
  d[1] = () => {
    if (o !== undefined) {
      t.push(o);
      o = undefined;
    }
  };
  d[2] = () => {
    d[0]();
    i++;
  };
  d[3] = () => {
    if (i > 0) {
      i--;
      r = 4;
      d[0]();
    } else {
      i = 0;
      if (o === undefined || ((o = f401(o)), o === false)) {
        return false;
      }
      d[1]();
    }
  };
  function h() {
    const p = e[n + 1];
    if ((r === 5 && p === "'") || (r === 6 && p === '"')) {
      n++;
      a = "\\" + p;
      d[0]();
      return true;
    }
  }
  while (r !== null) {
    n++;
    s = e[n];
    if (s !== "\\" || !h()) {
      l = f400(s);
      f = vA19[r];
      c = f[l] || f.l || 8;
      if (
        c === 8 ||
        ((r = c[0]),
        c[1] !== undefined && ((u = d[c[1]]), u && ((a = s), u() === false)))
      ) {
        return;
      }
      if (r === 7) {
        return t;
      }
    }
  }
}
const v145 = new Map();
function f403(e, t) {
  if (vF111(e)) {
    return e[t];
  } else {
    return null;
  }
}
function f404(e, t) {
  if (!vF111(e)) {
    return null;
  }
  let n = v145.get(t);
  if (!n) {
    n = f402(t);
    if (n) {
      v145.set(t, n);
    }
  }
  if (!n) {
    return null;
  }
  const r = n.length;
  let i = e;
  let s = 0;
  while (s < r) {
    const o = n[s];
    if (vA18.includes(o) && f373(i)) {
      return null;
    }
    const a = i[o];
    if (a === undefined || vF108(i)) {
      return null;
    }
    i = a;
    s++;
  }
  return i;
}
const vLS1113 = "11.1.3";
const v146 = -1;
const vLSEnUS = "en-US";
const vLS8 = "";
const vF119 = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function f405() {
  return {
    upper: (e, t) =>
      t === "text" && vF109(e)
        ? e.toUpperCase()
        : t === "vnode" && vF111(e) && "__v_isVNode" in e
        ? e.children.toUpperCase()
        : e,
    lower: (e, t) =>
      t === "text" && vF109(e)
        ? e.toLowerCase()
        : t === "vnode" && vF111(e) && "__v_isVNode" in e
        ? e.children.toLowerCase()
        : e,
    capitalize: (e, t) =>
      t === "text" && vF109(e)
        ? vF119(e)
        : t === "vnode" && vF111(e) && "__v_isVNode" in e
        ? vF119(e.children)
        : e,
  };
}
let v147;
function f406(e) {
  v147 = e;
}
let v148;
function f407(e) {
  v148 = e;
}
let v149;
function f408(e) {
  v149 = e;
}
let v150 = null;
const vF120 = (e) => {
  v150 = e;
};
const vF121 = () => v150;
let vLN011 = 0;
function f409(e = {}) {
  const t = vF108(e.onWarn) ? e.onWarn : f338;
  const n = vF109(e.version) ? e.version : vLS1113;
  const r = vF109(e.locale) || vF108(e.locale) ? e.locale : vLSEnUS;
  const i = vF108(r) ? vLSEnUS : r;
  const s =
    v139(e.fallbackLocale) ||
    vF114(e.fallbackLocale) ||
    vF109(e.fallbackLocale) ||
    e.fallbackLocale === false
      ? e.fallbackLocale
      : i;
  const o = vF114(e.messages) ? e.messages : vF122(i);
  const a = vF114(e.datetimeFormats) ? e.datetimeFormats : vF122(i);
  const l = vF114(e.numberFormats) ? e.numberFormats : vF122(i);
  const c = v136(vF107(), e.modifiers, f405());
  const u = e.pluralRules || vF107();
  const f = vF108(e.missing) ? e.missing : null;
  const d = vF110(e.missingWarn) || vF105(e.missingWarn) ? e.missingWarn : true;
  const h =
    vF110(e.fallbackWarn) || vF105(e.fallbackWarn) ? e.fallbackWarn : true;
  const p = !!e.fallbackFormat;
  const E = !!e.unresolving;
  const A = vF108(e.postTranslation) ? e.postTranslation : null;
  const b = vF114(e.processor) ? e.processor : null;
  const m = vF110(e.warnHtmlMessage) ? e.warnHtmlMessage : true;
  const C = !!e.escapeParameter;
  const y = vF108(e.messageCompiler) ? e.messageCompiler : v147;
  const x = vF108(e.messageResolver) ? e.messageResolver : v148 || f403;
  const L = vF108(e.localeFallbacker) ? e.localeFallbacker : v149 || f393;
  const I = vF111(e.fallbackContext) ? e.fallbackContext : undefined;
  const B = e;
  const k = vF111(B.__datetimeFormatters) ? B.__datetimeFormatters : new Map();
  const R = vF111(B.__numberFormatters) ? B.__numberFormatters : new Map();
  const V = vF111(B.__meta) ? B.__meta : {};
  vLN011++;
  const S = {
    version: n,
    cid: vLN011,
    locale: r,
    fallbackLocale: s,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: d,
    fallbackWarn: h,
    fallbackFormat: p,
    unresolving: E,
    postTranslation: A,
    processor: b,
    warnHtmlMessage: m,
    escapeParameter: C,
    messageCompiler: y,
    messageResolver: x,
    localeFallbacker: L,
    fallbackContext: I,
    onWarn: t,
    __meta: V,
  };
  S.datetimeFormats = a;
  S.numberFormats = l;
  S.__datetimeFormatters = k;
  S.__numberFormatters = R;
  return S;
}
const vF122 = (e) => ({
  [e]: vF107(),
});
function f410(e, t, n, r, i) {
  const { missing: s, onWarn: o } = e;
  if (s !== null) {
    const a = s(e, n, t, i);
    if (vF109(a)) {
      return a;
    } else {
      return t;
    }
  } else {
    return t;
  }
}
function f411(e, t, n) {
  const r = e;
  r.__localeChainCache = new Map();
  e.localeFallbacker(e, n, t);
}
function f412(e, t) {
  if (e === t) {
    return false;
  } else {
    return e.split("-")[0] === t.split("-")[0];
  }
}
function f413(e, t) {
  const n = t.indexOf(e);
  if (n === -1) {
    return false;
  }
  for (let r = n + 1; r < t.length; r++) {
    if (f412(e, t[r])) {
      return true;
    }
  }
  return false;
}
function f414(e, ...t) {
  const {
    datetimeFormats: n,
    unresolving: r,
    fallbackLocale: i,
    onWarn: s,
    localeFallbacker: o,
  } = e;
  const { __datetimeFormatters: a } = e;
  const [l, c, u, f] = f415(...t);
  const d = vF110(u.missingWarn) ? u.missingWarn : e.missingWarn;
  if (vF110(u.fallbackWarn)) {
    u.fallbackWarn;
  } else {
    e.fallbackWarn;
  }
  const h = !!u.part;
  const p = f391(e, u);
  const E = o(e, i, p);
  if (!vF109(l) || l === "") {
    return new Intl.DateTimeFormat(p, f).format(c);
  }
  let A = {};
  let b;
  let m = null;
  const C = "datetime format";
  for (
    let L = 0;
    L < E.length && ((b = E[L]), (A = n[b] || {}), (m = A[l]), !vF114(m));
    L++
  ) {
    f410(e, l, b, d, C);
  }
  if (!vF114(m) || !vF109(b)) {
    if (r) {
      return v146;
    } else {
      return l;
    }
  }
  let y = `${b}__${l}`;
  if (!vF106(f)) {
    y = `${y}__${JSON.stringify(f)}`;
  }
  let x = a.get(y);
  if (!x) {
    x = new Intl.DateTimeFormat(b, v136({}, m, f));
    a.set(y, x);
  }
  if (h) {
    return x.formatToParts(c);
  } else {
    return x.format(c);
  }
}
const vA20 = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits",
];
function f415(...e) {
  const [t, n, r, i] = e;
  const s = vF107();
  let o = vF107();
  let a;
  if (vF109(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l) {
      throw f390(vO41.INVALID_ISO_DATE_ARGUMENT);
    }
    const c = l[3]
      ? l[3].trim().startsWith("T")
        ? `${l[1].trim()}${l[3].trim()}`
        : `${l[1].trim()}T${l[3].trim()}`
      : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString();
    } catch {
      throw f390(vO41.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (vF104(t)) {
    if (isNaN(t.getTime())) {
      throw f390(vO41.INVALID_DATE_ARGUMENT);
    }
    a = t;
  } else if (vF103(t)) {
    a = t;
  } else {
    throw f390(vO41.INVALID_ARGUMENT);
  }
  if (vF109(n)) {
    s.key = n;
  } else if (vF114(n)) {
    Object.keys(n).forEach((l) => {
      if (vA20.includes(l)) {
        o[l] = n[l];
      } else {
        s[l] = n[l];
      }
    });
  }
  if (vF109(r)) {
    s.locale = r;
  } else if (vF114(r)) {
    o = r;
  }
  if (vF114(i)) {
    o = i;
  }
  return [s.key || "", a, s, o];
}
function f416(e, t, n) {
  const r = e;
  for (const i in n) {
    const s = `${t}__${i}`;
    if (r.__datetimeFormatters.has(s)) {
      r.__datetimeFormatters.delete(s);
    }
  }
}
function f417(e, ...t) {
  const {
    numberFormats: n,
    unresolving: r,
    fallbackLocale: i,
    onWarn: s,
    localeFallbacker: o,
  } = e;
  const { __numberFormatters: a } = e;
  const [l, c, u, f] = f418(...t);
  const d = vF110(u.missingWarn) ? u.missingWarn : e.missingWarn;
  if (vF110(u.fallbackWarn)) {
    u.fallbackWarn;
  } else {
    e.fallbackWarn;
  }
  const h = !!u.part;
  const p = f391(e, u);
  const E = o(e, i, p);
  if (!vF109(l) || l === "") {
    return new Intl.NumberFormat(p, f).format(c);
  }
  let A = {};
  let b;
  let m = null;
  const C = "number format";
  for (
    let L = 0;
    L < E.length && ((b = E[L]), (A = n[b] || {}), (m = A[l]), !vF114(m));
    L++
  ) {
    f410(e, l, b, d, C);
  }
  if (!vF114(m) || !vF109(b)) {
    if (r) {
      return v146;
    } else {
      return l;
    }
  }
  let y = `${b}__${l}`;
  if (!vF106(f)) {
    y = `${y}__${JSON.stringify(f)}`;
  }
  let x = a.get(y);
  if (!x) {
    x = new Intl.NumberFormat(b, v136({}, m, f));
    a.set(y, x);
  }
  if (h) {
    return x.formatToParts(c);
  } else {
    return x.format(c);
  }
}
const vA21 = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay",
];
function f418(...e) {
  const [t, n, r, i] = e;
  const s = vF107();
  let o = vF107();
  if (!vF103(t)) {
    throw f390(vO41.INVALID_ARGUMENT);
  }
  const a = t;
  if (vF109(n)) {
    s.key = n;
  } else if (vF114(n)) {
    Object.keys(n).forEach((l) => {
      if (vA21.includes(l)) {
        o[l] = n[l];
      } else {
        s[l] = n[l];
      }
    });
  }
  if (vF109(r)) {
    s.locale = r;
  } else if (vF114(r)) {
    o = r;
  }
  if (vF114(i)) {
    o = i;
  }
  return [s.key || "", a, s, o];
}
function f419(e, t, n) {
  const r = e;
  for (const i in n) {
    const s = `${t}__${i}`;
    if (r.__numberFormatters.has(s)) {
      r.__numberFormatters.delete(s);
    }
  }
}
const vF123 = (e) => e;
const vF124 = (e) => "";
const vLSText = "text";
const vF125 = (e) => (e.length === 0 ? "" : f337(e));
const vVF115 = vF115;
function f420(e, t) {
  e = Math.abs(e);
  if (t === 2) {
    if (e) {
      if (e > 1) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return 1;
    }
  } else if (e) {
    return Math.min(e, 2);
  } else {
    return 0;
  }
}
function f421(e) {
  const t = vF103(e.pluralIndex) ? e.pluralIndex : -1;
  if (e.named && (vF103(e.named.count) || vF103(e.named.n))) {
    if (vF103(e.named.count)) {
      return e.named.count;
    } else if (vF103(e.named.n)) {
      return e.named.n;
    } else {
      return t;
    }
  } else {
    return t;
  }
}
function f422(e, t) {
  t.count ||= e;
  t.n ||= e;
}
function f423(e = {}) {
  const t = e.locale;
  const n = f421(e);
  const r =
    vF111(e.pluralRules) && vF109(t) && vF108(e.pluralRules[t])
      ? e.pluralRules[t]
      : f420;
  const i =
    vF111(e.pluralRules) && vF109(t) && vF108(e.pluralRules[t])
      ? f420
      : undefined;
  const s = (b) => b[r(n, b.length, i)];
  const o = e.list || [];
  const a = (b) => o[b];
  const l = e.named || vF107();
  if (vF103(e.pluralIndex)) {
    f422(n, l);
  }
  const c = (b) => l[b];
  function u(b, m) {
    const C = vF108(e.messages)
      ? e.messages(b, !!m)
      : vF111(e.messages)
      ? e.messages[b]
      : false;
    return C || (e.parent ? e.parent.message(b) : vF124);
  }
  const f = (b) => (e.modifiers ? e.modifiers[b] : vF123);
  const d =
    vF114(e.processor) && vF108(e.processor.normalize)
      ? e.processor.normalize
      : vF125;
  const h =
    vF114(e.processor) && vF108(e.processor.interpolate)
      ? e.processor.interpolate
      : vVF115;
  const p =
    vF114(e.processor) && vF109(e.processor.type) ? e.processor.type : vLSText;
  const A = {
    list: a,
    named: c,
    plural: s,
    linked: (b, ...m) => {
      const [C, y] = m;
      let x = "text";
      let L = "";
      if (m.length === 1) {
        if (vF111(C)) {
          L = C.modifier || L;
          x = C.type || x;
        } else if (vF109(C)) {
          L = C || L;
        }
      } else if (m.length === 2) {
        if (vF109(C)) {
          L = C || L;
        }
        if (vF109(y)) {
          x = y || x;
        }
      }
      const I = u(b, true)(A);
      const B = x === "vnode" && v139(I) && L ? I[0] : I;
      if (L) {
        return f(L)(B, x);
      } else {
        return B;
      }
    },
    message: u,
    type: p,
    interpolate: h,
    normalize: d,
    values: v136(vF107(), o, l),
  };
  return A;
}
const vF126 = () => "";
const vF127 = (e) => vF108(e);
function f424(e, ...t) {
  const {
    fallbackFormat: n,
    postTranslation: r,
    unresolving: i,
    messageCompiler: s,
    fallbackLocale: o,
    messages: a,
  } = e;
  const [l, c] = f429(...t);
  const u = vF110(c.missingWarn) ? c.missingWarn : e.missingWarn;
  const f = vF110(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const d = vF110(c.escapeParameter) ? c.escapeParameter : e.escapeParameter;
  const h = !!c.resolvedMessage;
  const p =
    vF109(c.default) || vF110(c.default)
      ? vF110(c.default)
        ? s
          ? l
          : () => l
        : c.default
      : n
      ? s
        ? l
        : () => l
      : null;
  const E = n || (p != null && (vF109(p) || vF108(p)));
  const A = f391(e, c);
  if (d) {
    f425(c);
  }
  let [b, m, C] = h ? [l, A, a[A] || vF107()] : f426(e, l, A, o, f, u);
  let y = b;
  let x = l;
  if (!h && !vF109(y) && !f373(y) && !vF127(y) && E) {
    y = p;
    x = y;
  }
  if (!h && ((!vF109(y) && !f373(y) && !vF127(y)) || !vF109(m))) {
    if (i) {
      return v146;
    } else {
      return l;
    }
  }
  let L = false;
  const I = () => {
    L = true;
  };
  const B = vF127(y) ? y : f427(e, l, m, y, x, I);
  if (L) {
    return y;
  }
  const k = f431(e, m, C, c);
  const R = f423(k);
  const V = f428(e, B, R);
  if (r) {
    return r(V, l);
  } else {
    return V;
  }
}
function f425(e) {
  if (v139(e.list)) {
    e.list = e.list.map((t) => (vF109(t) ? f335(t) : t));
  } else if (vF111(e.named)) {
    Object.keys(e.named).forEach((t) => {
      if (vF109(e.named[t])) {
        e.named[t] = f335(e.named[t]);
      }
    });
  }
}
function f426(e, t, n, r, i, s) {
  const { messages: o, onWarn: a, messageResolver: l, localeFallbacker: c } = e;
  const u = c(e, r, n);
  let f = vF107();
  let d;
  let h = null;
  const p = "translate";
  for (
    let E = 0;
    E < u.length &&
    ((d = u[E]),
    (f = o[d] || vF107()),
    (h = l(f, t)) === null && (h = f[t]),
    !vF109(h) && !f373(h) && !vF127(h));
    E++
  ) {
    if (!f413(d, u)) {
      const A = f410(e, t, d, s, p);
      if (A !== t) {
        h = A;
      }
    }
  }
  return [h, d, f];
}
function f427(e, t, n, r, i, s) {
  const { messageCompiler: o, warnHtmlMessage: a } = e;
  if (vF127(r)) {
    const c = r;
    c.locale = c.locale || n;
    c.key = c.key || t;
    return c;
  }
  if (o == null) {
    const c = () => r;
    c.locale = n;
    c.key = t;
    return c;
  }
  const l = o(r, f430(e, n, i, r, a, s));
  l.locale = n;
  l.key = t;
  l.source = r;
  return l;
}
function f428(e, t, n) {
  return t(n);
}
function f429(...e) {
  const [t, n, r] = e;
  const i = vF107();
  if (!vF109(t) && !vF103(t) && !vF127(t) && !f373(t)) {
    throw f390(vO41.INVALID_ARGUMENT);
  }
  const s = vF103(t) ? String(t) : (vF127(t), t);
  if (vF103(n)) {
    i.plural = n;
  } else if (vF109(n)) {
    i.default = n;
  } else if (vF114(n) && !vF106(n)) {
    i.named = n;
  } else if (v139(n)) {
    i.list = n;
  }
  if (vF103(r)) {
    i.plural = r;
  } else if (vF109(r)) {
    i.default = r;
  } else if (vF114(r)) {
    v136(i, r);
  }
  return [s, i];
}
function f430(e, t, n, r, i, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: i,
    onError: (o) => {
      if (s) {
        s(o);
      }
      throw o;
    },
    onCacheKey: (o) => vF101(t, n, o),
  };
}
function f431(e, t, n, r) {
  const {
    modifiers: i,
    pluralRules: s,
    messageResolver: o,
    fallbackLocale: a,
    fallbackWarn: l,
    missingWarn: c,
    fallbackContext: u,
  } = e;
  const d = {
    locale: t,
    modifiers: i,
    pluralRules: s,
    messages: (h, p) => {
      let E = o(n, h);
      if (E == null && (u || p)) {
        const [, , A] = f426(u || e, h, t, a, l, c);
        E = o(A, h);
      }
      if (vF109(E) || f373(E)) {
        let A = false;
        const m = f427(e, h, t, E, h, () => {
          A = true;
        });
        if (A) {
          return vF126;
        } else {
          return m;
        }
      } else if (vF127(E)) {
        return E;
      } else {
        return vF126;
      }
    },
  };
  if (e.processor) {
    d.processor = e.processor;
  }
  if (r.list) {
    d.list = r.list;
  }
  if (r.named) {
    d.named = r.named;
  }
  if (vF103(r.plural)) {
    d.pluralIndex = r.plural;
  }
  return d;
}
/*!
 * vue-i18n v11.1.3
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
const vLS11132 = "11.1.3";
const vO42 = {
  UNEXPECTED_RETURN_TYPE: vLN24,
  INVALID_ARGUMENT: 25,
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  UNEXPECTED_ERROR: 32,
};
function f432(e, ...t) {
  return f342(e, null, undefined);
}
const vVF100 = vF100("__translateVNode");
const vVF1002 = vF100("__datetimeParts");
const vVF1003 = vF100("__numberParts");
const vVF1004 = vF100("__setPluralRules");
const vVF1005 = vF100("__injectWithOption");
const vVF1006 = vF100("__dispose");
function f433(e) {
  if (!vF111(e) || f373(e)) {
    return e;
  }
  for (const t in e) {
    if (f336(e, t)) {
      if (!t.includes(".")) {
        if (vF111(e[t])) {
          f433(e[t]);
        }
      } else {
        const n = t.split(".");
        const r = n.length - 1;
        let i = e;
        let s = false;
        for (let o = 0; o < r; o++) {
          if (n[o] === "__proto__") {
            throw new Error(`unsafe key: ${n[o]}`);
          }
          if (!(n[o] in i)) {
            i[n[o]] = vF107();
          }
          if (!vF111(i[n[o]])) {
            s = true;
            break;
          }
          i = i[n[o]];
        }
        if (!s) {
          if (f373(i)) {
            if (!vA18.includes(n[r])) {
              delete e[t];
            }
          } else {
            i[n[r]] = e[t];
            delete e[t];
          }
        }
        if (!f373(i)) {
          const o = i[n[r]];
          if (vF111(o)) {
            f433(o);
          }
        }
      }
    }
  }
  return e;
}
function f434(e, t) {
  const { messages: n, __i18n: r, messageResolver: i, flatJson: s } = t;
  const o = vF114(n)
    ? n
    : v139(r)
    ? vF107()
    : {
        [e]: vF107(),
      };
  if (v139(r)) {
    r.forEach((a) => {
      if ("locale" in a && "resource" in a) {
        const { locale: l, resource: c } = a;
        if (l) {
          o[l] = o[l] || vF107();
          f339(c, o[l]);
        } else {
          f339(c, o);
        }
      } else if (vF109(a)) {
        f339(JSON.parse(a), o);
      }
    });
  }
  if (i == null && s) {
    for (const a in o) {
      if (f336(o, a)) {
        f433(o[a]);
      }
    }
  }
  return o;
}
function f435(e) {
  return e.type;
}
function f436(e, t, n) {
  let r = vF111(t.messages) ? t.messages : vF107();
  if ("__i18nGlobal" in n) {
    r = f434(e.locale.value, {
      messages: r,
      __i18n: n.__i18nGlobal,
    });
  }
  const i = Object.keys(r);
  if (i.length) {
    i.forEach((s) => {
      e.mergeLocaleMessage(s, r[s]);
    });
  }
  {
    if (vF111(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      if (s.length) {
        s.forEach((o) => {
          e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
        });
      }
    }
    if (vF111(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      if (s.length) {
        s.forEach((o) => {
          e.mergeNumberFormat(o, t.numberFormats[o]);
        });
      }
    }
  }
}
function f437(e) {
  return vLg(v71, null, e, 0);
}
const vF129 = () => [];
const vF130 = () => false;
let vLN012 = 0;
function f438(e) {
  return (t, n, r, i) => e(n, r, vF79() || undefined, i);
}
function f439(e = {}) {
  const { __root: t, __injectWithOption: n } = e;
  const r = t === undefined;
  const i = e.flatJson;
  const s = v135 ? f52 : f53;
  let o = vF110(e.inheritLocale) ? e.inheritLocale : true;
  const a = s(t && o ? t.locale.value : vF109(e.locale) ? e.locale : vLSEnUS);
  const l = s(
    t && o
      ? t.fallbackLocale.value
      : vF109(e.fallbackLocale) ||
        v139(e.fallbackLocale) ||
        vF114(e.fallbackLocale) ||
        e.fallbackLocale === false
      ? e.fallbackLocale
      : a.value
  );
  const c = s(f434(a.value, e));
  const u = s(
    vF114(e.datetimeFormats)
      ? e.datetimeFormats
      : {
          [a.value]: {},
        }
  );
  const f = s(
    vF114(e.numberFormats)
      ? e.numberFormats
      : {
          [a.value]: {},
        }
  );
  let d = t
    ? t.missingWarn
    : vF110(e.missingWarn) || vF105(e.missingWarn)
    ? e.missingWarn
    : true;
  let h = t
    ? t.fallbackWarn
    : vF110(e.fallbackWarn) || vF105(e.fallbackWarn)
    ? e.fallbackWarn
    : true;
  let p = t ? t.fallbackRoot : vF110(e.fallbackRoot) ? e.fallbackRoot : true;
  let E = !!e.fallbackFormat;
  let A = vF108(e.missing) ? e.missing : null;
  let b = vF108(e.missing) ? f438(e.missing) : null;
  let m = vF108(e.postTranslation) ? e.postTranslation : null;
  let C = t
    ? t.warnHtmlMessage
    : vF110(e.warnHtmlMessage)
    ? e.warnHtmlMessage
    : true;
  let y = !!e.escapeParameter;
  const x = t ? t.modifiers : vF114(e.modifiers) ? e.modifiers : {};
  let L = e.pluralRules || (t && t.pluralRules);
  let I;
  I = (() => {
    if (r) {
      vF120(null);
    }
    const T = {
      version: vLS11132,
      locale: a.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: x,
      pluralRules: L,
      missing: b === null ? undefined : b,
      missingWarn: d,
      fallbackWarn: h,
      fallbackFormat: E,
      unresolving: true,
      postTranslation: m === null ? undefined : m,
      warnHtmlMessage: C,
      escapeParameter: y,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: {
        framework: "vue",
      },
    };
    T.datetimeFormats = u.value;
    T.numberFormats = f.value;
    T.__datetimeFormatters = vF114(I) ? I.__datetimeFormatters : undefined;
    T.__numberFormatters = vF114(I) ? I.__numberFormatters : undefined;
    const $ = f409(T);
    if (r) {
      vF120($);
    }
    return $;
  })();
  f411(I, a.value, l.value);
  function k() {
    return [a.value, l.value, c.value, u.value, f.value];
  }
  const R = M({
    get: () => a.value,
    set: (T) => {
      I.locale = T;
      a.value = T;
    },
  });
  const V = M({
    get: () => l.value,
    set: (T) => {
      I.fallbackLocale = T;
      l.value = T;
      f411(I, a.value, T);
    },
  });
  const S = M(() => c.value);
  const G = M(() => u.value);
  const D = M(() => f.value);
  function f440() {
    if (vF108(m)) {
      return m;
    } else {
      return null;
    }
  }
  function J(T) {
    m = T;
    I.postTranslation = T;
  }
  function Q() {
    return A;
  }
  function K(T) {
    if (T !== null) {
      b = f438(T);
    }
    A = T;
    I.missing = b;
  }
  const vF131 = (T, $, p12, p13, p14, p15) => {
    k();
    let v151;
    try {
      if (!r) {
        I.fallbackContext = t ? vF121() : undefined;
      }
      v151 = T(I);
    } finally {
      if (!r) {
        I.fallbackContext = undefined;
      }
    }
    if (
      (p12 !== "translate exists" && vF103(v151) && v151 === v146) ||
      (p12 === "translate exists" && !v151)
    ) {
      const [v152, v153] = $();
      if (t && p) {
        return p13(t);
      } else {
        return p14(v152);
      }
    } else {
      if (p15(v151)) {
        return v151;
      }
      throw f432(vO42.UNEXPECTED_RETURN_TYPE);
    }
  };
  function f441(...T) {
    return vF131(
      ($) => Reflect.apply(f424, null, [$, ...T]),
      () => f429(...T),
      "translate",
      ($) => Reflect.apply($.t, $, [...T]),
      ($) => $,
      ($) => vF109($)
    );
  }
  function f442(...T) {
    const [$, v154, v155] = T;
    if (v155 && !vF111(v155)) {
      throw f432(vO42.INVALID_ARGUMENT);
    }
    return f441(
      $,
      v154,
      v136(
        {
          resolvedMessage: true,
        },
        v155 || {}
      )
    );
  }
  function z(...T) {
    return vF131(
      ($) => Reflect.apply(f414, null, [$, ...T]),
      () => f415(...T),
      "datetime format",
      ($) => Reflect.apply($.d, $, [...T]),
      () => vLS8,
      ($) => vF109($)
    );
  }
  function f443(...T) {
    return vF131(
      ($) => Reflect.apply(f417, null, [$, ...T]),
      () => f418(...T),
      "number format",
      ($) => Reflect.apply($.n, $, [...T]),
      () => vLS8,
      ($) => vF109($)
    );
  }
  function f444(T) {
    return T.map(($) =>
      vF109($) || vF103($) || vF110($) ? f437(String($)) : $
    );
  }
  const vO43 = {
    normalize: f444,
    interpolate: (T) => T,
    type: "vnode",
  };
  function F(...T) {
    return vF131(
      ($) => {
        let v156;
        const v$ = $;
        try {
          v$.processor = vO43;
          v156 = Reflect.apply(f424, null, [v$, ...T]);
        } finally {
          v$.processor = null;
        }
        return v156;
      },
      () => f429(...T),
      "translate",
      ($) => $[vVF100](...T),
      ($) => [f437($)],
      ($) => v139($)
    );
  }
  function Y(...T) {
    return vF131(
      ($) => Reflect.apply(f417, null, [$, ...T]),
      () => f418(...T),
      "number format",
      ($) => $[vVF1003](...T),
      vF129,
      ($) => vF109($) || v139($)
    );
  }
  function X(...T) {
    return vF131(
      ($) => Reflect.apply(f414, null, [$, ...T]),
      () => f415(...T),
      "datetime format",
      ($) => $[vVF1002](...T),
      vF129,
      ($) => vF109($) || v139($)
    );
  }
  function f445(T) {
    L = T;
    I.pluralRules = L;
  }
  function f446(T, $) {
    return vF131(
      () => {
        if (!T) {
          return false;
        }
        const v157 = vF109($) ? $ : a.value;
        const vP = P(v157);
        const v158 = I.messageResolver(vP, T);
        return f373(v158) || vF127(v158) || vF109(v158);
      },
      () => [T],
      "translate exists",
      (p16) => Reflect.apply(p16.te, p16, [T, $]),
      vF130,
      (p17) => vF110(p17)
    );
  }
  function _(T) {
    let $ = null;
    const vF394 = f394(I, l.value, a.value);
    for (let vLN013 = 0; vLN013 < vF394.length; vLN013++) {
      const v159 = c.value[vF394[vLN013]] || {};
      const v160 = I.messageResolver(v159, T);
      if (v160 != null) {
        $ = v160;
        break;
      }
    }
    return $;
  }
  function w(T) {
    const $ = _(T);
    return $ ?? (t ? t.tm(T) || {} : {});
  }
  function P(T) {
    return c.value[T] || {};
  }
  function j(T, $) {
    if (i) {
      const vO44 = {
        [T]: $,
      };
      for (const v161 in vO44) {
        if (f336(vO44, v161)) {
          f433(vO44[v161]);
        }
      }
      $ = vO44[T];
    }
    c.value[T] = $;
    I.messages = c.value;
  }
  function U(T, $) {
    c.value[T] = c.value[T] || {};
    const vO45 = {
      [T]: $,
    };
    if (i) {
      for (const v162 in vO45) {
        if (f336(vO45, v162)) {
          f433(vO45[v162]);
        }
      }
    }
    $ = vO45[T];
    f339($, c.value[T]);
    I.messages = c.value;
  }
  function W(T) {
    return u.value[T] || {};
  }
  function g(T, $) {
    u.value[T] = $;
    I.datetimeFormats = u.value;
    f416(I, T, $);
  }
  function v(T, $) {
    u.value[T] = v136(u.value[T] || {}, $);
    I.datetimeFormats = u.value;
    f416(I, T, $);
  }
  function N(T) {
    return f.value[T] || {};
  }
  function O(T, $) {
    f.value[T] = $;
    I.numberFormats = f.value;
    f419(I, T, $);
  }
  function Z(T, $) {
    f.value[T] = v136(f.value[T] || {}, $);
    I.numberFormats = f.value;
    f419(I, T, $);
  }
  vLN012++;
  if (t && v135) {
    f150(t.locale, (T) => {
      if (o) {
        a.value = T;
        I.locale = T;
        f411(I, a.value, l.value);
      }
    });
    f150(t.fallbackLocale, (T) => {
      if (o) {
        l.value = T;
        I.fallbackLocale = T;
        f411(I, a.value, l.value);
      }
    });
  }
  const H = {
    id: vLN012,
    locale: R,
    fallbackLocale: V,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(T) {
      o = T;
      if (T && t) {
        a.value = t.locale.value;
        l.value = t.fallbackLocale.value;
        f411(I, a.value, l.value);
      }
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: S,
    get modifiers() {
      return x;
    },
    get pluralRules() {
      return L || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(T) {
      d = T;
      I.missingWarn = d;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(T) {
      h = T;
      I.fallbackWarn = h;
    },
    get fallbackRoot() {
      return p;
    },
    set fallbackRoot(T) {
      p = T;
    },
    get fallbackFormat() {
      return E;
    },
    set fallbackFormat(T) {
      E = T;
      I.fallbackFormat = E;
    },
    get warnHtmlMessage() {
      return C;
    },
    set warnHtmlMessage(T) {
      C = T;
      I.warnHtmlMessage = T;
    },
    get escapeParameter() {
      return y;
    },
    set escapeParameter(T) {
      y = T;
      I.escapeParameter = T;
    },
    t: f441,
    getLocaleMessage: P,
    setLocaleMessage: j,
    mergeLocaleMessage: U,
    getPostTranslationHandler: f440,
    setPostTranslationHandler: J,
    getMissingHandler: Q,
    setMissingHandler: K,
    [vVF1004]: f445,
  };
  H.datetimeFormats = G;
  H.numberFormats = D;
  H.rt = f442;
  H.te = f446;
  H.tm = w;
  H.d = z;
  H.n = f443;
  H.getDateTimeFormat = W;
  H.setDateTimeFormat = g;
  H.mergeDateTimeFormat = v;
  H.getNumberFormat = N;
  H.setNumberFormat = O;
  H.mergeNumberFormat = Z;
  H[vVF1005] = n;
  H[vVF100] = F;
  H[vVF1002] = X;
  H[vVF1003] = Y;
  return H;
}
const vO46 = {
  tag: {
    type: [String, Object],
  },
  locale: {
    type: String,
  },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent",
  },
  i18n: {
    type: Object,
  },
};
function f447({ slots: e }, t) {
  if (t.length === 1 && t[0] === "default") {
    return (e.default ? e.default() : []).reduce(
      (r, i) => [...r, ...(i.type === v70 ? i.children : [i])],
      []
    );
  } else {
    return t.reduce((n, r) => {
      const i = e[r];
      if (i) {
        n[r] = i();
      }
      return n;
    }, vF107());
  }
}
function f448() {
  return v70;
}
const vF944 = f94({
  name: "i18n-t",
  props: v136(
    {
      keypath: {
        type: String,
        required: true,
      },
      plural: {
        type: [Number, String],
        validator: (e) => vF103(e) || !isNaN(e),
      },
    },
    vO46
  ),
  setup(e, t) {
    const { slots: n, attrs: r } = t;
    const i =
      e.i18n ||
      f457({
        useScope: e.scope,
        __useComponent: true,
      });
    return () => {
      const s = Object.keys(n).filter((f) => f !== "_");
      const o = vF107();
      if (e.locale) {
        o.locale = e.locale;
      }
      if (e.plural !== undefined) {
        o.plural = vF109(e.plural) ? +e.plural : e.plural;
      }
      const a = f447(t, s);
      const l = i[vVF100](e.keypath, a, o);
      const c = v136(vF107(), r);
      const u = vF109(e.tag) || vF111(e.tag) ? e.tag : f448();
      return q(u, c, l);
    };
  },
});
const vVF944 = vF944;
function f449(e) {
  return v139(e) && !vF109(e[0]);
}
function f450(e, t, n, r) {
  const { slots: i, attrs: s } = t;
  return () => {
    const o = {
      part: true,
    };
    let a = vF107();
    if (e.locale) {
      o.locale = e.locale;
    }
    if (vF109(e.format)) {
      o.key = e.format;
    } else if (vF111(e.format)) {
      if (vF109(e.format.key)) {
        o.key = e.format.key;
      }
      a = Object.keys(e.format).reduce(
        (d, h) =>
          n.includes(h)
            ? v136(vF107(), d, {
                [h]: e.format[h],
              })
            : d,
        vF107()
      );
    }
    const l = r(e.value, o, a);
    let c = [o.key];
    if (v139(l)) {
      c = l.map((d, h) => {
        const p = i[d.type];
        const E = p
          ? p({
              [d.type]: d.value,
              index: h,
              parts: l,
            })
          : [d.value];
        if (f449(E)) {
          E[0].key = `${d.type}-${h}`;
        }
        return E;
      });
    } else if (vF109(l)) {
      c = [l];
    }
    const u = v136(vF107(), s);
    const f = vF109(e.tag) || vF111(e.tag) ? e.tag : f448();
    return q(f, u, c);
  };
}
const vF945 = f94({
  name: "i18n-n",
  props: v136(
    {
      value: {
        type: Number,
        required: true,
      },
      format: {
        type: [String, Object],
      },
    },
    vO46
  ),
  setup(e, t) {
    const n =
      e.i18n ||
      f457({
        useScope: e.scope,
        __useComponent: true,
      });
    return f450(e, t, vA21, (...r) => n[vVF1003](...r));
  },
});
const vVF945 = vF945;
function f451(e, t) {
  const n = e;
  if (e.mode === "composition") {
    return n.__getInstance(t) || e.global;
  }
  {
    const r = n.__getInstance(t);
    if (r != null) {
      return r.__composer;
    } else {
      return e.global.__composer;
    }
  }
}
function f452(e) {
  const t = (o) => {
    const { instance: a, value: l } = o;
    if (!a || !a.$) {
      throw f432(vO42.UNEXPECTED_ERROR);
    }
    const c = f451(e, a.$);
    const u = f453(l);
    return [Reflect.apply(c.t, c, [...f454(u)]), c];
  };
  return {
    created: (o, a) => {
      const [l, c] = t(a);
      if (v135 && e.global === c) {
        o.__i18nWatcher = f150(c.locale, () => {
          if (a.instance) {
            a.instance.$forceUpdate();
          }
        });
      }
      o.__composer = c;
      o.textContent = l;
    },
    unmounted: (o) => {
      if (v135 && o.__i18nWatcher) {
        o.__i18nWatcher();
        o.__i18nWatcher = undefined;
        delete o.__i18nWatcher;
      }
      if (o.__composer) {
        o.__composer = undefined;
        delete o.__composer;
      }
    },
    beforeUpdate: (o, { value: a }) => {
      if (o.__composer) {
        const l = o.__composer;
        const c = f453(a);
        o.textContent = Reflect.apply(l.t, l, [...f454(c)]);
      }
    },
    getSSRProps: (o) => {
      const [a] = t(o);
      return {
        textContent: a,
      };
    },
  };
}
function f453(e) {
  if (vF109(e)) {
    return {
      path: e,
    };
  }
  if (vF114(e)) {
    if (!("path" in e)) {
      throw f432(vO42.REQUIRED_VALUE, "path");
    }
    return e;
  } else {
    throw f432(vO42.INVALID_VALUE);
  }
}
function f454(e) {
  const { path: t, locale: n, args: r, choice: i, plural: s } = e;
  const o = {};
  const a = r || {};
  if (vF109(n)) {
    o.locale = n;
  }
  if (vF103(i)) {
    o.plural = i;
  }
  if (vF103(s)) {
    o.plural = s;
  }
  return [t, a, o];
}
function f455(e, t, ...n) {
  const r = vF114(n[0]) ? n[0] : {};
  if (vF110(r.globalInstall) ? r.globalInstall : true) {
    [vVF944.name, "I18nT"].forEach((s) => e.component(s, vVF944));
    [vVF945.name, "I18nN"].forEach((s) => e.component(s, vVF945));
    [vVF946.name, "I18nD"].forEach((s) => e.component(s, vVF946));
  }
  e.directive("t", f452(t));
}
const vVF1007 = vF100("global-vue-i18n");
function f456(e = {}) {
  const t = vF110(e.globalInjection) ? e.globalInjection : true;
  const n = new Map();
  const [r, i] = f458(e);
  const s = vF100("");
  function o(u) {
    return n.get(u) || null;
  }
  function a(u, f) {
    n.set(u, f);
  }
  function l(u) {
    n.delete(u);
  }
  const c = {
    get mode() {
      return "composition";
    },
    async install(u, ...f) {
      u.__VUE_I18N_SYMBOL__ = s;
      u.provide(u.__VUE_I18N_SYMBOL__, c);
      if (vF114(f[0])) {
        const p = f[0];
        c.__composerExtend = p.__composerExtend;
        c.__vueI18nExtend = p.__vueI18nExtend;
      }
      let d = null;
      if (t) {
        d = f465(u, c.global);
      }
      f455(u, c, ...f);
      const h = u.unmount;
      u.unmount = () => {
        if (d) {
          d();
        }
        c.dispose();
        h();
      };
    },
    get global() {
      return i;
    },
    dispose() {
      r.stop();
    },
    __instances: n,
    __getInstance: o,
    __setInstance: a,
    __deleteInstance: l,
  };
  return c;
}
function f457(e = {}) {
  const t = vF79();
  if (t == null) {
    throw f432(vO42.MUST_BE_CALL_SETUP_TOP);
  }
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  ) {
    throw f432(vO42.NOT_INSTALLED);
  }
  const n = f459(t);
  const r = f461(n);
  const i = f435(t);
  const s = f460(e, i);
  if (s === "global") {
    f436(r, e, i);
    return r;
  }
  if (s === "parent") {
    let l = f462(n, t, e.__useComponent);
    if (l == null) {
      l = r;
    }
    return l;
  }
  const o = n;
  let a = o.__getInstance(t);
  if (a == null) {
    const l = v136({}, e);
    if ("__i18n" in i) {
      l.__i18n = i.__i18n;
    }
    if (r) {
      l.__root = r;
    }
    a = f439(l);
    if (o.__composerExtend) {
      a[vVF1006] = o.__composerExtend(a);
    }
    f464(o, t, a);
    o.__setInstance(t, a);
  }
  return a;
}
function f458(e, t) {
  const n = f7();
  const r = n.run(() => f439(e));
  if (r == null) {
    throw f432(vO42.UNEXPECTED_ERROR);
  }
  return [n, r];
}
function f459(e) {
  const t = f131(e.isCE ? vVF1007 : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t) {
    throw f432(
      e.isCE ? vO42.NOT_INSTALLED_WITH_PROVIDE : vO42.UNEXPECTED_ERROR
    );
  }
  return t;
}
function f460(e, t) {
  if (vF106(e)) {
    if ("__i18n" in t) {
      return "local";
    } else {
      return "global";
    }
  } else if (e.useScope) {
    return e.useScope;
  } else {
    return "local";
  }
}
function f461(e) {
  if (e.mode === "composition") {
    return e.global;
  } else {
    return e.global.__composer;
  }
}
function f462(e, t, n = false) {
  let r = null;
  const i = t.root;
  let s = f463(t, n);
  while (s != null) {
    const o = e;
    if (e.mode === "composition") {
      r = o.__getInstance(s);
    }
    if (r != null || i === s) {
      break;
    }
    s = s.parent;
  }
  return r;
}
function f463(e, t = false) {
  if (e == null) {
    return null;
  } else {
    return (t && e.vnode.ctx) || e.parent;
  }
}
function f464(e, t, n) {
  vVF492(() => {}, t);
  vVF496(() => {
    const r = n;
    e.__deleteInstance(t);
    const i = r[vVF1006];
    if (i) {
      i();
      delete r[vVF1006];
    }
  }, t);
}
const vA22 = ["locale", "fallbackLocale", "availableLocales"];
const vA23 = ["t", "rt", "d", "n", "tm", "te"];
function f465(e, t) {
  const n = Object.create(null);
  vA22.forEach((i) => {
    const s = Object.getOwnPropertyDescriptor(t, i);
    if (!s) {
      throw f432(vO42.UNEXPECTED_ERROR);
    }
    const o = f51(s.value)
      ? {
          get() {
            return s.value.value;
          },
          set(a) {
            s.value.value = a;
          },
        }
      : {
          get() {
            return s.get && s.get();
          },
        };
    Object.defineProperty(n, i, o);
  });
  e.config.globalProperties.$i18n = n;
  vA23.forEach((i) => {
    const s = Object.getOwnPropertyDescriptor(t, i);
    if (!s || !s.value) {
      throw f432(vO42.UNEXPECTED_ERROR);
    }
    Object.defineProperty(e.config.globalProperties, `$${i}`, s);
  });
  return () => {
    delete e.config.globalProperties.$i18n;
    vA23.forEach((i) => {
      delete e.config.globalProperties[`$${i}`];
    });
  };
}
const vF946 = f94({
  name: "i18n-d",
  props: v136(
    {
      value: {
        type: [Number, Date],
        required: true,
      },
      format: {
        type: [String, Object],
      },
    },
    vO46
  ),
  setup(e, t) {
    const n =
      e.i18n ||
      f457({
        useScope: e.scope,
        __useComponent: true,
      });
    return f450(e, t, vA20, (...r) => n[vVF1002](...r));
  },
});
const vVF946 = vF946;
f406(f389);
f407(f404);
f408(f394);
function f466(e) {
  if (f8()) {
    f9(e);
    return true;
  } else {
    return false;
  }
}
const v163 = new WeakMap();
const vF132 = (...e) => {
  var t;
  const n = e[0];
  const r = (t = vF79()) == null ? undefined : t.proxy;
  if (r == null && !f132()) {
    throw new Error("injectLocal must be called in setup");
  }
  if (r && v163.has(r) && n in v163.get(r)) {
    return v163.get(r)[n];
  } else {
    return f131(...e);
  }
};
const v164 = typeof window !== "undefined" && typeof document !== "undefined";
if (typeof WorkerGlobalScope !== "undefined") {
  globalThis instanceof WorkerGlobalScope;
}
const vF133 = (e) => e != null;
const v165 = Object.prototype.toString;
const vF134 = (e) => v165.call(e) === "[object Object]";
const vF135 = () => {};
function f467(...e) {
  if (e.length !== 1) {
    return f60(...e);
  }
  const t = e[0];
  if (typeof t == "function") {
    return f42(
      f58(() => ({
        get: t,
        set: vF135,
      }))
    );
  } else {
    return f52(t);
  }
}
function f468(e) {
  if (e.endsWith("rem")) {
    return Number.parseFloat(e) * 16;
  } else {
    return Number.parseFloat(e);
  }
}
function f469(e) {
  if (Array.isArray(e)) {
    return e;
  } else {
    return [e];
  }
}
function f470(e) {
  return vF79();
}
function f471(e, t = true, n) {
  if (f470()) {
    vVF492(e, n);
  } else if (t) {
    e();
  } else {
    f70(e);
  }
}
function f472(e, t = 1000, n = {}) {
  const { immediate: r = true, immediateCallback: i = false } = n;
  let s = null;
  const o = f53(false);
  function a() {
    if (s) {
      clearInterval(s);
      s = null;
    }
  }
  function l() {
    o.value = false;
    a();
  }
  function c() {
    const u = f56(t);
    if (!(u <= 0)) {
      o.value = true;
      if (i) {
        e();
      }
      a();
      if (o.value) {
        s = setInterval(e, u);
      }
    }
  }
  if (r && v164) {
    c();
  }
  if (f51(t) || typeof t == "function") {
    const u = f150(t, () => {
      if (o.value && v164) {
        c();
      }
    });
    f466(u);
  }
  f466(l);
  return {
    isActive: f43(o),
    pause: l,
    resume: c,
  };
}
function f473(e, t, n) {
  return f150(e, t, {
    ...n,
    immediate: true,
  });
}
function f474(e, t, n) {
  let r;
  if (f51(n)) {
    r = {
      evaluating: n,
    };
  } else {
    r = {};
  }
  const {
    lazy: i = false,
    evaluating: s = undefined,
    shallow: o = true,
    onError: a = vF135,
  } = r;
  const l = f53(!i);
  const c = o ? f53(t) : f52(t);
  let u = 0;
  f148(async (f) => {
    if (!l.value) {
      return;
    }
    u++;
    const d = u;
    let h = false;
    if (s) {
      Promise.resolve().then(() => {
        s.value = true;
      });
    }
    try {
      const p = await e((E) => {
        f(() => {
          if (s) {
            s.value = false;
          }
          if (!h) {
            E();
          }
        });
      });
      if (d === u) {
        c.value = p;
      }
    } catch (p) {
      a(p);
    } finally {
      if (s && d === u) {
        s.value = false;
      }
      h = true;
    }
  });
  if (i) {
    return M(() => {
      l.value = true;
      return c.value;
    });
  } else {
    return c;
  }
}
const v166 = v164 ? window : undefined;
const v167 = v164 ? window.document : undefined;
function f475(e) {
  const n = f56(e);
  return n?.$el ?? n;
}
function f476(...e) {
  const t = [];
  const n = () => {
    t.forEach((a) => a());
    t.length = 0;
  };
  const r = (a, l, c, u) => {
    a.addEventListener(l, c, u);
    return () => a.removeEventListener(l, c, u);
  };
  const i = M(() => {
    const a = f469(f56(e[0])).filter((l) => l != null);
    if (a.every((l) => typeof l != "string")) {
      return a;
    } else {
      return undefined;
    }
  });
  const s = f473(
    () => {
      var a;
      return [
        ((a = i.value) == null ? undefined : a.map((c) => f475(c))) ??
          [v166].filter((c) => c != null),
        f469(f56(i.value ? e[1] : e[0])),
        f469(f55(i.value ? e[2] : e[1])),
        f56(i.value ? e[3] : e[2]),
      ];
    },
    ([a, l, c, u]) => {
      n();
      if (!a?.length || !l?.length || !c?.length) {
        return;
      }
      const f = vF134(u)
        ? {
            ...u,
          }
        : u;
      t.push(
        ...a.flatMap((d) => l.flatMap((h) => c.map((p) => r(d, h, p, f))))
      );
    },
    {
      flush: "post",
    }
  );
  const o = () => {
    s();
    n();
  };
  f466(n);
  return o;
}
function f477() {
  const e = f53(false);
  const t = vF79();
  if (t) {
    vVF492(() => {
      e.value = true;
    }, t);
  }
  return e;
}
function f478(e) {
  const t = f477();
  return M(() => {
    t.value;
    return !!e();
  });
}
function f479(e, t, n = {}) {
  const { window: r = v166, ...i } = n;
  let s;
  const o = f478(() => r && "MutationObserver" in r);
  const a = () => {
    if (s) {
      s.disconnect();
      s = undefined;
    }
  };
  const l = M(() => {
    const d = f56(e);
    const h = f469(d).map(f475).filter(vF133);
    return new Set(h);
  });
  const c = f150(
    () => l.value,
    (d) => {
      a();
      if (o.value && d.size) {
        s = new MutationObserver(t);
        d.forEach((h) => s.observe(h, i));
      }
    },
    {
      immediate: true,
      flush: "post",
    }
  );
  const u = () => s?.takeRecords();
  const f = () => {
    c();
    a();
  };
  f466(f);
  return {
    isSupported: o,
    stop: f,
    takeRecords: u,
  };
}
function f480(e) {
  if (typeof e == "function") {
    return e;
  } else if (typeof e == "string") {
    return (t) => t.key === e;
  } else if (Array.isArray(e)) {
    return (t) => e.includes(t.key);
  } else {
    return () => true;
  }
}
function f481(...e) {
  let t;
  let n;
  let r = {};
  if (e.length === 3) {
    t = e[0];
    n = e[1];
    r = e[2];
  } else if (e.length === 2) {
    if (typeof e[1] == "object") {
      t = true;
      n = e[0];
      r = e[1];
    } else {
      t = e[0];
      n = e[1];
    }
  } else {
    t = true;
    n = e[0];
  }
  const {
    target: i = v166,
    eventName: s = "keydown",
    passive: o = false,
    dedupe: a = false,
  } = r;
  const l = f480(t);
  return f476(
    i,
    s,
    (u) => {
      if (!u.repeat || !f56(a)) {
        if (l(u)) {
          n(u);
        }
      }
    },
    o
  );
}
const vSymbol21 = Symbol("vueuse-ssr-width");
function f482() {
  const e = f132() ? vF132(vSymbol21, null) : null;
  if (typeof e == "number") {
    return e;
  } else {
    return undefined;
  }
}
function f483(e, t = {}) {
  const { window: n = v166, ssrWidth: r = f482() } = t;
  const i = f478(
    () => n && "matchMedia" in n && typeof n.matchMedia == "function"
  );
  const s = f53(typeof r == "number");
  const o = f53();
  const a = f53(false);
  const l = (c) => {
    a.value = c.matches;
  };
  f148(() => {
    if (s.value) {
      s.value = !i.value;
      const c = f56(e).split(",");
      a.value = c.some((u) => {
        const f = u.includes("not all");
        const d = u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const h = u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!d || !!h;
        if (d && p) {
          p = r >= f468(d[1]);
        }
        if (h && p) {
          p = r <= f468(h[1]);
        }
        if (f) {
          return !p;
        } else {
          return p;
        }
      });
      return;
    }
    if (i.value) {
      o.value = n.matchMedia(f56(e));
      a.value = o.value.matches;
    }
  });
  f476(o, "change", l, {
    passive: true,
  });
  return M(() => a.value);
}
function f484(e, t, n = {}) {
  const {
    root: r,
    rootMargin: i = "0px",
    threshold: s = 0,
    window: o = v166,
    immediate: a = true,
  } = n;
  const l = f478(() => o && "IntersectionObserver" in o);
  const c = M(() => {
    const p = f56(e);
    return f469(p).map(f475).filter(vF133);
  });
  let u = vF135;
  const f = f53(a);
  const d = l.value
    ? f150(
        () => [c.value, f475(r), f.value],
        ([p, E]) => {
          u();
          if (!f.value || !p.length) {
            return;
          }
          const A = new IntersectionObserver(t, {
            root: f475(E),
            rootMargin: i,
            threshold: s,
          });
          p.forEach((b) => b && A.observe(b));
          u = () => {
            A.disconnect();
            u = vF135;
          };
        },
        {
          immediate: a,
          flush: "post",
        }
      )
    : vF135;
  const h = () => {
    u();
    d();
    f.value = false;
  };
  f466(h);
  return {
    isSupported: l,
    isActive: f,
    pause() {
      u();
      f.value = false;
    },
    resume() {
      f.value = true;
    },
    stop: h,
  };
}
function f485(e = null, t = {}) {
  var i;
  const { document: s = v167, restoreOnUnmount: o = (f) => f } = t;
  const a = s?.title ?? "";
  const l = f467(e ?? s?.title ?? null);
  const c = !!e && typeof e == "function";
  function u(f) {
    if (!("titleTemplate" in t)) {
      return f;
    }
    const d = t.titleTemplate || "%s";
    if (typeof d == "function") {
      return d(f);
    } else {
      return f56(d).replace(/%s/g, f);
    }
  }
  f150(
    l,
    (f, d) => {
      if (f !== d && s) {
        s.title = u(f ?? "");
      }
    },
    {
      immediate: true,
    }
  );
  if (t.observe && !t.titleTemplate && s && !c) {
    f479(
      (i = s.head) == null ? undefined : i.querySelector("title"),
      () => {
        if (s && s.title !== l.value) {
          l.value = u(s.title);
        }
      },
      {
        childList: true,
      }
    );
  }
  f466(() => {
    if (o) {
      const f = o(a, l.value || "");
      if (f != null && s) {
        s.title = f;
      }
    }
  });
  return l;
}
function f486(e = {}) {
  const {
    window: t = v166,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: r = Number.POSITIVE_INFINITY,
    listenOrientation: i = true,
    includeScrollbar: s = true,
    type: o = "inner",
  } = e;
  const a = f53(n);
  const l = f53(r);
  const c = () => {
    if (t) {
      if (o === "outer") {
        a.value = t.outerWidth;
        l.value = t.outerHeight;
      } else if (o === "visual" && t.visualViewport) {
        const { width: f, height: d, scale: h } = t.visualViewport;
        a.value = Math.round(f * h);
        l.value = Math.round(d * h);
      } else if (s) {
        a.value = t.innerWidth;
        l.value = t.innerHeight;
      } else {
        a.value = t.document.documentElement.clientWidth;
        l.value = t.document.documentElement.clientHeight;
      }
    }
  };
  c();
  f471(c);
  const u = {
    passive: true,
  };
  f476("resize", c, u);
  if (t && o === "visual" && t.visualViewport) {
    f476(t.visualViewport, "resize", c, u);
  }
  if (i) {
    const f = f483("(orientation: portrait)");
    f150(f, () => c());
  }
  return {
    width: a,
    height: l,
  };
}
const vF136 = (e) => e;
const vVF136 = vF136;
/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let v168;
const vF137 = (e) => (v168 = e);
const vSymbol22 = Symbol();
function f487(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var v169;
(function (e) {
  e.direct = "direct";
  e.patchObject = "patch object";
  e.patchFunction = "patch function";
})((v169 ||= {}));
function f488() {
  const e = f7(true);
  const t = e.run(() => f52({}));
  let n = [];
  let r = [];
  const i = f50({
    install(s) {
      vF137(i);
      i._a = s;
      s.provide(vSymbol22, i);
      s.config.globalProperties.$pinia = i;
      r.forEach((o) => n.push(o));
      r = [];
    },
    use(s) {
      if (this._a) {
        n.push(s);
      } else {
        r.push(s);
      }
      return this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return i;
}
const vF138 = () => {};
function f489(e, t, n, r = vF138) {
  e.push(t);
  const i = () => {
    const s = e.indexOf(t);
    if (s > -1) {
      e.splice(s, 1);
      r();
    }
  };
  if (!n && f8()) {
    f9(i);
  }
  return i;
}
function f490(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const vF139 = (e) => e();
const vSymbol23 = Symbol();
const vSymbol24 = Symbol();
function f491(e, t) {
  if (e instanceof Map && t instanceof Map) {
    t.forEach((n, r) => e.set(r, n));
  } else if (e instanceof Set && t instanceof Set) {
    t.forEach(e.add, e);
  }
  for (const n in t) {
    if (!t.hasOwnProperty(n)) {
      continue;
    }
    const r = t[n];
    const i = e[n];
    if (f487(i) && f487(r) && e.hasOwnProperty(n) && !f51(r) && !f45(r)) {
      e[n] = f491(i, r);
    } else {
      e[n] = r;
    }
  }
  return e;
}
const vSymbol25 = Symbol();
function f492(e) {
  return !f487(e) || !Object.prototype.hasOwnProperty.call(e, vSymbol25);
}
const { assign: un } = Object;
function f493(e) {
  return !!f51(e) && !!e.effect;
}
function f494(e, t, n, r) {
  const { state: i, actions: s, getters: o } = t;
  const a = n.state.value[e];
  let l;
  function c() {
    if (!a) {
      n.state.value[e] = i ? i() : {};
    }
    const u = f59(n.state.value[e]);
    return un(
      u,
      s,
      Object.keys(o || {}).reduce((f, d) => {
        f[d] = f50(
          M(() => {
            vF137(n);
            const h = n._s.get(e);
            return o[d].call(h, h);
          })
        );
        return f;
      }, {})
    );
  }
  l = f495(e, c, t, n, r, true);
  return l;
}
function f495(e, t, n = {}, r, i, s) {
  let o;
  const a = un(
    {
      actions: {},
    },
    n
  );
  const l = {
    deep: true,
  };
  let c;
  let u;
  let f = [];
  let d = [];
  let h;
  const p = r.state.value[e];
  if (!s && !p) {
    r.state.value[e] = {};
  }
  f52({});
  let E;
  function A(B) {
    let k;
    c = u = false;
    if (typeof B == "function") {
      B(r.state.value[e]);
      k = {
        type: v169.patchFunction,
        storeId: e,
        events: h,
      };
    } else {
      f491(r.state.value[e], B);
      k = {
        type: v169.patchObject,
        payload: B,
        storeId: e,
        events: h,
      };
    }
    const R = (E = Symbol());
    f70().then(() => {
      if (E === R) {
        c = true;
      }
    });
    u = true;
    f490(f, k, r.state.value[e]);
  }
  const b = s
    ? function () {
        const { state: k } = n;
        const R = k ? k() : {};
        this.$patch((V) => {
          un(V, R);
        });
      }
    : vF138;
  function m() {
    o.stop();
    f = [];
    d = [];
    r._s.delete(e);
  }
  const C = (B, k = "") => {
    if (vSymbol23 in B) {
      B[vSymbol24] = k;
      return B;
    }
    const R = function () {
      vF137(r);
      const V = Array.from(arguments);
      const S = [];
      const G = [];
      function D(Q) {
        S.push(Q);
      }
      function f496(Q) {
        G.push(Q);
      }
      f490(d, {
        args: V,
        name: R[vSymbol24],
        store: x,
        after: D,
        onError: f496,
      });
      let J;
      try {
        J = B.apply(this && this.$id === e ? this : x, V);
      } catch (Q) {
        f490(G, Q);
        throw Q;
      }
      if (J instanceof Promise) {
        return J.then((Q) => {
          f490(S, Q);
          return Q;
        }).catch((Q) => {
          f490(G, Q);
          return Promise.reject(Q);
        });
      } else {
        f490(S, J);
        return J;
      }
    };
    R[vSymbol23] = true;
    R[vSymbol24] = k;
    return R;
  };
  const y = {
    _p: r,
    $id: e,
    $onAction: f489.bind(null, d),
    $patch: A,
    $reset: b,
    $subscribe(B, k = {}) {
      const R = f489(f, B, k.detached, () => V());
      const V = o.run(() =>
        f150(
          () => r.state.value[e],
          (S) => {
            if (k.flush === "sync" ? u : c) {
              B(
                {
                  storeId: e,
                  type: v169.direct,
                  events: h,
                },
                S
              );
            }
          },
          un({}, l, k)
        )
      );
      return R;
    },
    $dispose: m,
  };
  const x = f40(y);
  r._s.set(e, x);
  const I = ((r._a && r._a.runWithContext) || vF139)(() =>
    r._e.run(() =>
      (o = f7()).run(() =>
        t({
          action: C,
        })
      )
    )
  );
  for (const B in I) {
    const k = I[B];
    if ((f51(k) && !f493(k)) || f45(k)) {
      if (!s) {
        if (p && f492(k)) {
          if (f51(k)) {
            k.value = p[B];
          } else {
            f491(k, p[B]);
          }
        }
        r.state.value[e][B] = k;
      }
    } else if (typeof k == "function") {
      const R = C(k, B);
      I[B] = R;
      a.actions[B] = k;
    }
  }
  un(x, I);
  un(f49(x), I);
  Object.defineProperty(x, "$state", {
    get: () => r.state.value[e],
    set: (B) => {
      A((k) => {
        un(k, B);
      });
    },
  });
  r._p.forEach((B) => {
    un(
      x,
      o.run(() =>
        B({
          store: x,
          app: r._a,
          pinia: r,
          options: a,
        })
      )
    );
  });
  if (p && s && n.hydrate) {
    n.hydrate(x.$state, p);
  }
  c = true;
  u = true;
  return x;
} /*! #__NO_SIDE_EFFECTS__ */
function f497(e, t, n) {
  let r;
  const i = typeof t == "function";
  r = i ? n : t;
  function s(o, a) {
    const l = f132();
    o = o || (l ? f131(vSymbol22, null) : null);
    if (o) {
      vF137(o);
    }
    o = v168;
    if (!o._s.has(e)) {
      if (i) {
        f495(e, t, r, o);
      } else {
        f494(e, r, o);
      }
    }
    return o._s.get(e);
  }
  s.$id = e;
  return s;
}
function f498(e, t) {
  if (e === t) {
    return true;
  }
  if (e === null || t === null || e.length !== t.length) {
    return false;
  }
  for (let n = 0; n < e.length; ++n) {
    if (e[n] !== t[n]) {
      return false;
    }
  }
  return true;
}
function f499(e, t, n, r, i) {
  return (
    (t ** 2 - (i / 2) ** 2) ** 0.5 -
      Math.max((i * Math.cos(e)) / (Math.sin(e) * 2), n) >=
    r
  );
}
function f500(e) {
  if (!e) {
    return "";
  }
  let t = e;
  const n = t.match(/<img.*?src="(.*?)".*?>/);
  if (n) {
    t = t.replace(n[0], "");
  }
  return f507(t);
}
function f501(e) {
  let t = "";
  if (e) {
    t = e;
    const n = 18;
    if (t.length > n) {
      t = `${t.substring(0, n - 1)}…`;
    }
  }
  return t;
}
function f502(e, t) {
  if (e) {
    return t;
  }
  const n = [];
  const r = [];
  for (const i of t) {
    const s = f503(i);
    if (!n.includes(s)) {
      n.push(s);
      r.push(i);
    }
  }
  return r;
}
function f503(e) {
  const t = {};
  if (e.text) {
    t.text = e.text;
  }
  if (e.image) {
    t.image = e.image;
  }
  return JSON.stringify(t);
}
function f504(e) {
  let t = "";
  if (e) {
    const n = e.match(/<img.*?src="(.*?)".*?>/);
    if (n) {
      t = n[1];
    }
  }
  return t;
}
function f505(e) {
  const t = [...e];
  let n;
  for (let r = t.length - 1; r > 0; r--) {
    n = Math.floor(Math.random() * (r + 1));
    [t[r], t[n]] = [t[n], t[r]];
  }
  return t;
}
function f506(e) {
  return e.slice(0).sort((t, n) => {
    const r = t.text || "";
    const i = n.text || "";
    return r.localeCompare(i, "en", {
      numeric: true,
      sensitivity: "base",
    });
  });
}
function f507(e) {
  return e
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
function f508() {
  let t = "";
  const n = "abcdefghjkmnpqrstuvwxyz23456789";
  for (let r = 0; r < 10; r++) {
    t += n.charAt(Math.floor(Math.random() * n.length));
  }
  return t;
}
function f509(e) {
  if (!e || !e.map) {
    return [];
  } else {
    return e.map((t) => {
      t.id = t.id || f508();
      return t;
    });
  }
}
function f510(e, t, n = Math.random) {
  const r = Math.ceil(e);
  const i = Math.floor(t);
  return Math.floor(n() * (i - r + 1) + r);
}
function f511(e) {
  return e.reduce(
    (t, n) =>
      n.weight && (n.enabled === true || !("enabled" in n)) ? t + n.weight : t,
    0
  );
}
function f512(e, t) {
  let n = 0;
  if (e.length === 0) {
    return 0;
  }
  if (e[0].weight) {
    const r = f511(e);
    const i = e.map((a) => (Math.PI * 2 * (a.weight ?? 1)) / r);
    const s = [];
    n = 0;
    let o = i[0] / 2;
    e.forEach((a, l) => {
      s.push(o);
      o += i[l + 1];
    });
    n = 0;
    while (!(t < s[n]) && !(n++, n > s.length - 1));
  } else {
    const r = (Math.PI * 2) / e.length;
    n = Math.round(t / r);
  }
  if (n >= e.length) {
    n = 0;
  }
  return n;
}
function f513(e) {
  if (!e) {
    return "#000000";
  }
  const t = e.charAt(0) === "#" ? e.substring(1, 7) : e;
  const n = Number.parseInt(t.substring(0, 2), 16);
  const r = Number.parseInt(t.substring(2, 4), 16);
  const i = Number.parseInt(t.substring(4, 6), 16);
  const o = [n / 255, r / 255, i / 255].map((l) =>
    l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4
  );
  if (o[0] * 0.2126 + o[1] * 0.7152 + o[2] * 0.0722 > 0.179) {
    return "#000000";
  } else {
    return "#FFFFFF";
  }
}
function f514(e) {
  return new Promise((t) => setTimeout(t, e));
}
function f515(e) {
  return ["spin-only", "copyable", "gallery"].includes(e);
}
function f516(e) {
  if (e instanceof Error) {
    return e.message;
  } else if (typeof e == "string") {
    return e;
  } else if (e instanceof Object) {
    return e.toString();
  } else {
    return "An unknown error occurred";
  }
}
function f517(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
async function f518(e) {
  return new Promise((t) => {
    const n = new Image();
    n.onload = () => {
      const r = f528(n.width, n.height, 200);
      f534(r, n);
      t(f536(r, e, 0.5));
    };
    n.src = e;
  });
}
async function f519(e) {
  return new Promise((t) => {
    const n = new Image();
    n.onload = () => {
      const r = f529(370);
      if (!f530(n)) {
        f534(r, n, "blur(4px)");
      }
      f535(r, n, true);
      t(f536(r, null, 0.5));
    };
    n.src = e;
  });
}
async function f520(e) {
  return new Promise((t) => {
    const n = new Image();
    n.onload = () => {
      const r = f529(700);
      f535(r, n, false);
      t(f536(r, null, 0.7));
    };
    n.src = e;
  });
}
function f521(e) {
  const t = document.createElement("canvas");
  t.width = e.canvas.width;
  t.height = e.canvas.height;
  return t;
}
function f522(e) {
  const t = f537(document.createElement("canvas"));
  t.drawImage(e, 0, 0);
  const n = t.getImageData(0, 0, 1, 1).data;
  if (f532(n[0], n[1], n[2])) {
    return "#FFFFFFFF";
  } else {
    return f533(n[0], n[1], n[2], n[3]);
  }
}
function f523(e) {
  const t = e.match(/#\w\w\w\w\w\w(\w\w)/);
  if (t) {
    return (Number.parseInt(t[1], 16) / 255) * 100 < 50;
  } else {
    return false;
  }
}
function f524(e) {
  const n = f529(300);
  const r = f537(n);
  r.fillStyle = "white";
  r.fillRect(0, 0, 300, 300);
  r.fillStyle = "black";
  r.textBaseline = "middle";
  r.textAlign = "center";
  const i = 270;
  f527(r, e, i);
  r.fillText(e, 150, 150, i);
  return n.toDataURL("image/webp", 0.5);
}
function f525(e) {
  return new Promise((t) => {
    const n = new Image();
    n.setAttribute("crossOrigin", "anonymous");
    n.onload = () => t(n);
    n.src = e;
  });
}
function f526(e) {
  return f522(e).slice(7) === "00";
}
function f527(e, t, n) {
  for (
    let r = Math.round(n / 2);
    r >= n / 20 &&
    ((e.font = `${r}px Quicksand, sans-serif`), !(e.measureText(t).width <= n));
    r--
  );
}
function f528(e, t, n) {
  const r = n / e;
  const i = n / t;
  const s = Math.max(r, i);
  const o = document.createElement("canvas");
  o.width = e * s;
  o.height = t * s;
  return o;
}
function f529(e) {
  const t = document.createElement("canvas");
  t.width = e;
  t.height = e;
  return t;
}
function f530(e) {
  const t = f522(e);
  return t === "#FFFFFFFF" || t.slice(7) === "FF";
}
function f531(e) {
  return e.getImageData(0, 0, 1, 1).data[3] < 5;
}
function f532(e, t, n) {
  return e === t && e === n && e > 230;
}
function f533(e, t, n, r) {
  return `#${vF140(e)}${vF140(t)}${vF140(n)}${vF140(r)}`;
}
const vF140 = (e) => e.toString(16).padStart(2, "0");
function f534(e, t, n) {
  const r = f537(e);
  r.save();
  if (n) {
    r.filter = n;
  }
  r.drawImage(t, -2, -2, e.width + 4, e.height + 4);
  r.restore();
}
function f535(e, t, n) {
  const r = e.width;
  let i = r / Math.min(t.width, t.height);
  if (n) {
    i = r / Math.max(t.width, t.height);
  }
  const s = t.width * i;
  const o = (r - s) / 2;
  const a = t.height * i;
  const l = (r - a) / 2;
  f537(e).drawImage(t, o, l, s, a);
}
function f536(e, t, n) {
  let r;
  const i = f537(e);
  if (f531(i)) {
    r = e.toDataURL("image/webp", 0.5);
  } else {
    r = e.toDataURL("image/jpeg", n);
  }
  if (t && t.length < r.length) {
    return t;
  } else {
    return r;
  }
}
function f537(e) {
  const t = e.getContext("2d");
  if (!t) {
    throw new Error("Could not get canvas context");
  }
  return t;
}
function f538(e, t, n, r, i, s) {
  const o = f539(e, n, r, i, s);
  const a = f540(e, t, r, i, s);
  return `${f541(o, a)}px Quicksand, sans-serif`;
}
const v170 = new Map();
function f539(e, t, n, r, i) {
  const s = JSON.stringify({
    texts: t,
    wheelRadius: n,
    hubRadius: r,
    smallestAngle: i,
  });
  if (v170.get(s)) {
    return v170.get(s) || [10];
  }
  const o = "Quicksand, sans-serif";
  const a = t.map((c) => f542(e, c, o, n, r, i));
  const l = f546(a);
  v170.set(s, l);
  return l;
}
function f540(e, t, n, r, i) {
  return f542(e, t, "Quicksand, sans-serif", n, r, i);
}
function f541(e, t) {
  for (let n = e.length - 1; n >= 0; n--) {
    if (e[n] <= t) {
      return e[n];
    }
  }
  return e[0];
}
const v171 = new Map();
function f542(e, t, n, r, i, s) {
  const o = JSON.stringify({
    displayText: t,
    fontName: n,
    wheelRadius: r,
    hubRadius: i,
    smallestAngle: s,
  });
  if (v171.get(o)) {
    return v171.get(o) || 10;
  }
  const a = f543(e, t, n, r, i, s);
  v171.set(o, a);
  return a;
}
function f543(e, t, n, r, i, s) {
  return f544(e, r, i, s, n, t, 3, 200);
}
function f544(e, t, n, r, i, s, o, a) {
  let l;
  let c = o;
  let u = a;
  while (true) {
    l = Math.round((c + u) / 2);
    const f = `${l}px ${i}`;
    if (f545(e, t, n, r / 2, s, f, l)) {
      c = l;
    } else {
      u = l;
    }
    if (Math.abs(u - c) < 2) {
      break;
    }
  }
  return l;
}
function f545(e, t, n, r, i, s, o) {
  if (!i) {
    return true;
  }
  e.font = s;
  const a = e.measureText(` ${f501(i)} `).width;
  return f499(r, t, n, a, o);
}
function f546(e) {
  const t = [...e].sort((i, s) => i - s);
  const n = [];
  let r = t[0];
  n.push(r);
  for (let i = 1; i < t.length; i++) {
    const s = t[i];
    if (s > r * 2) {
      n.push(s);
      r = s;
    }
  }
  return n;
}
function f547(e) {
  const t = e.context;
  t.save();
  if (e.wheelConfig.type === "image") {
    f548(e);
  }
  if (e.wheelConfig.type === "color") {
    if (e.image) {
      if (f558(e.image)) {
        f549(e);
      } else {
        f550(e);
      }
    } else {
      f551(e);
    }
  }
  t.restore();
}
function f548(e) {
  f554(e);
  f553(e, {
    fill: "white",
    outline: "black",
  });
  f555(e);
}
function f549(e) {
  f552(e);
  f554(e);
  f553(e, {
    fill: "white",
    outline: "black",
  });
  f555(e);
}
function f550(e) {
  if (!e.image) {
    return;
  }
  const t = f557(e.image);
  f552({
    ...e,
    color: e.entry.color || t,
  });
  f554(e);
  f553(e, {
    fill: "white",
    outline: "black",
  });
  f555(e);
}
function f551(e) {
  f552(e);
  const t = {
    fill: f513(e.color),
    outline: "",
  };
  f553(e, t);
  f555(e);
}
function f552(e) {
  const t = e.context;
  t.beginPath();
  t.moveTo(0, 0);
  t.arc(0, 0, e.wheelRadius, -e.radians / 2, e.radians / 2);
  t.lineTo(0, 0);
  t.fillStyle = e.color;
  t.fill();
}
function f553(e, t) {
  if (!e.entry.text) {
    return;
  }
  const n = e.context;
  const r = f501(e.entry.text ?? "");
  n.font = f538(
    n,
    r,
    e.displayEntries.map((i) => i.text || ""),
    e.wheelRadius,
    e.hubRadius,
    e.radians
  );
  n.lineJoin = "round";
  n.textBaseline = "middle";
  n.textAlign = "end";
  if (t.outline) {
    n.lineWidth = 4;
    n.strokeStyle = t.outline;
    n.strokeText(` ${r} `, e.wheelRadius, 0);
  }
  n.fillStyle = t.fill;
  n.fillText(` ${r} `, e.wheelRadius, 0);
}
function f554(e) {
  if (!e.image) {
    return;
  }
  const t = e.radians / 2;
  const n = e.wheelRadius;
  const r = e.hubRadius;
  const i = f556(t, n, r, e.image.height / e.image.width);
  e.context.drawImage(e.image, i.x, i.y, i.w, i.h);
}
function f555(e) {
  if (!e.wheelConfig.drawOutlines) {
    return;
  }
  const t = e.context;
  t.beginPath();
  t.moveTo(0, 0);
  t.arc(0, 0, e.wheelRadius, -e.radians / 2, e.radians / 2);
  t.lineTo(0, 0);
  t.lineWidth = 1;
  t.strokeStyle = "#333333";
  t.stroke();
}
function f556(e, t, n, r) {
  let i;
  let s = 0;
  for (i = t; i > 0 && ((s = i * r), !f499(e, t, n, i, s)); i--);
  return {
    x: Math.max((s * Math.cos(e)) / (Math.sin(e) * 2), n),
    y: -s / 2,
    w: i,
    h: s,
  };
}
function f557(e) {
  return f522(e);
}
function f558(e) {
  return f523(f557(e));
}
const vO47 = {
  XS: 0.01,
  S: 0.2,
  M: 0.3,
  L: 0.4,
  XL: 0.5,
  XXL: 0.6,
};
class C14 {
  images = {};
  emptyImage = new Image();
  constructor() {
    this.emptyImage.src =
      "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  }
  addImage(t) {
    this.images[t] = new Image();
    this.images[t].src = t;
  }
  getImage(t) {
    if (t) {
      if (!(t in this.images)) {
        this.addImage(t);
      }
      if (this.images[t] && this.images[t].naturalHeight > 0) {
        return this.images[t];
      } else {
        return this.emptyImage;
      }
    }
  }
}
class C15 {
  imageCache = new C14();
  entries = [];
  imageDataCache = {};
  wheelImage = null;
  pointerImage = null;
  coverPlateImage = null;
  wheelShadowImage = null;
  watermarkImage = null;
  draw(t, n, r, i, s, o = "") {
    const a = t.canvas.width * 0.44;
    const l = this.getHubRadius(s, a);
    this.drawBackground(t);
    if (s.drawShadow) {
      this.drawWheelShadow(t, a);
    }
    this.drawCoverImage(t, s, n, a);
    this.drawWheel(t, s, n, a, l, i, r);
    this.drawPointer(t, s, a);
    this.drawCenterImage(t, s, n, l);
    try {
      this.drawCoverPlate(t, a, l, i, r);
    } catch {}
    if (o) {
      this.drawWatermark(t, o, s);
    }
  }
  getHubRadius(t, n) {
    if (t.type === "image") {
      return 0;
    }
    const r = vO47[t.hubSize] || 0.2;
    return Math.round(r * n);
  }
  refresh() {
    this.wheelImage = null;
    this.pointerImage = null;
    this.coverPlateImage = null;
  }
  drawBackground(t) {
    t.clearRect(0, 0, t.canvas.width, t.canvas.height);
  }
  drawWheelShadow(t, n) {
    if (!this.wheelShadowImage) {
      this.wheelShadowImage = f521(t);
      this.drawWheelShadowNoCache(f559(this.wheelShadowImage), n);
    }
    t.drawImage(this.wheelShadowImage, 0, 0);
  }
  drawWheelShadowNoCache(t, n) {
    const r = t.canvas.width / 2;
    const i = t.canvas.height / 2;
    const s = t.createRadialGradient(r, i, n, r, i + 4, n + 8);
    s.addColorStop(0, "#00000034");
    s.addColorStop(1, "#00000000");
    t.fillStyle = s;
    t.fillRect(0, 0, t.canvas.width, t.canvas.height);
  }
  drawWheel(t, n, r, i, s, o, a) {
    if (!this.wheelImage) {
      this.wheelImage = f521(t);
      this.entries = a.slice(0);
      this.drawWheelNoCache({
        context: f559(this.wheelImage),
        wheelConfig: n,
        wheelRadius: i,
        hubRadius: s,
        allEntries: o,
        displayEntries: a,
      });
    }
    const l = t.canvas.width;
    const c = t.canvas.height;
    t.save();
    t.translate(l / 2, c / 2);
    t.rotate(r);
    t.translate(-l / 2, -c / 2);
    t.drawImage(this.wheelImage, 0, 0);
    t.restore();
  }
  drawWheelNoCache(t) {
    this.drawSlices(t);
    this.drawCenterCircle(t.context, t.wheelConfig, t.hubRadius);
  }
  drawCoverImage(t, n, r, i) {
    if (n.type === "color") {
      return;
    }
    const s = this.imageCache.getImage(n.getCoverImage());
    if (s) {
      t.save();
      t.translate(t.canvas.width / 2, t.canvas.height / 2);
      t.rotate(r);
      t.beginPath();
      t.arc(0, 0, i - 1, 0, Math.PI * 2, true);
      t.clip();
      t.drawImage(s, -i, -i, i * 2, i * 2);
      t.restore();
    }
  }
  drawSlices(t) {
    const n = t.context;
    n.save();
    n.translate(n.canvas.width / 2, n.canvas.height / 2);
    if (t.wheelConfig.isAdvanced) {
      this.drawAdvancedSlices(t);
    } else {
      this.drawBasicSlices(t);
    }
    n.restore();
  }
  drawBasicSlices(t) {
    const n = (Math.PI * 2) / t.displayEntries.length;
    for (const [r, i] of t.displayEntries.entries()) {
      const s = t.wheelConfig.getEntryColor(r);
      f547({
        ...t,
        entry: i,
        color: s,
        radians: n,
        image: this.getImageFromData(i.image),
      });
      t.context.rotate(-n);
    }
  }
  drawAdvancedSlices(t) {
    const n = f511(this.entries);
    const r = [];
    this.entries.forEach((i, s) => {
      r[s] = (Math.PI * 2 * (i.weight || 1)) / n;
    });
    for (const [i, s] of t.displayEntries.entries()) {
      const o = r[i] / 2 + r[i + 1] / 2;
      const a = s.color || t.wheelConfig.getEntryColor(i);
      f547({
        ...t,
        entry: s,
        color: a,
        radians: r[i],
        image: this.getImageFromData(s.image),
      });
      t.context.rotate(-o);
    }
  }
  drawCenterCircle(t, n, r) {
    if (n.type !== "image") {
      t.save();
      t.translate(t.canvas.width / 2, t.canvas.height / 2);
      t.fillStyle = "white";
      t.beginPath();
      t.arc(0, 0, r, 0, Math.PI * 2);
      t.fill();
      if (n.drawOutlines) {
        t.lineWidth = 2;
        t.strokeStyle = "#333333";
        t.stroke();
      }
      t.restore();
    }
  }
  drawPointer(t, n, r) {
    if (!(t.canvas.width < 200)) {
      if (!this.pointerImage) {
        this.pointerImage = f521(t);
        this.drawPointerNoCache(f559(this.pointerImage), n, r);
      }
      t.drawImage(this.pointerImage, 0, 0);
    }
  }
  drawPointerNoCache(t, n, r) {
    t.save();
    t.translate(t.canvas.width / 2, t.canvas.height / 2);
    if (n.drawShadow) {
      t.shadowColor = "#444";
      t.shadowOffsetY = 4;
      t.shadowBlur = 10;
    }
    t.beginPath();
    t.moveTo(r - 15, 0);
    t.lineTo(r + 25, -20);
    t.lineTo(r + 25, 20);
    t.lineTo(r - 15, 0);
    t.lineWidth = n.drawOutlines ? 2 : 1;
    t.strokeStyle = "#333333";
    t.stroke();
    t.fillStyle = "#BBB";
    t.fill();
    t.restore();
  }
  drawCoverPlate(t, n, r, i, s) {
    if (s.length !== i.length) {
      if (!this.coverPlateImage && s.length > 0) {
        this.coverPlateImage = f521(t);
        this.drawCoverPlateNoCache(f559(this.coverPlateImage), n, r, s);
      }
      if (this.coverPlateImage) {
        t.drawImage(this.coverPlateImage, 0, 0);
      }
    }
  }
  drawCoverPlateNoCache(t, n, r, i) {
    const s = this.imageCache.getImage("/images/brushed-metal.png");
    if (!s) {
      return;
    }
    const o = i.length;
    const a = Math.max((Math.PI * 4) / o, Math.PI / 4);
    t.save();
    t.translate(t.canvas.width / 2, t.canvas.height / 2);
    t.scale(-1, 1);
    t.shadowColor = "#444";
    t.shadowOffsetY = 4;
    t.shadowBlur = 10;
    t.lineWidth = n - r + 10;
    t.strokeStyle = t.createPattern(s, "repeat") ?? "black";
    t.beginPath();
    t.arc(0, 0, (n + r) / 2, -a / 2, a / 2);
    t.stroke();
    t.restore();
  }
  drawCenterImage(t, n, r, i) {
    if (n.type === "image") {
      return;
    }
    const s = this.imageCache.getImage(n.getWheelImage());
    if (s) {
      t.save();
      t.translate(t.canvas.width / 2, t.canvas.height / 2);
      t.rotate(r);
      t.beginPath();
      t.arc(0, 0, i - 1, 0, Math.PI * 2, true);
      t.clip();
      t.drawImage(s, -i, -i, i * 2, i * 2);
      t.restore();
    }
  }
  drawWatermark(t, n, r) {
    if (n) {
      if (!this.watermarkImage) {
        this.watermarkImage = f521(t);
        this.drawWatermarkNoCache(f559(this.watermarkImage), n, r);
      }
      t.drawImage(this.watermarkImage, 0, 0);
    }
  }
  drawWatermarkNoCache(t, n, r) {
    t.save();
    t.textAlign = "end";
    t.font = "14px Quicksand, sans-serif";
    t.fillStyle = f513(r.pageBackgroundColor);
    t.fillText(n, t.canvas.width - 10, t.canvas.height - 10);
    t.restore();
  }
  getImageFromData(t) {
    if (t) {
      if (!this.imageDataCache[t]) {
        const n = new Image();
        n.onload = () => this.clearCachedWheelImage();
        n.setAttribute("crossOrigin", "anonymous");
        n.src = t;
        this.imageDataCache[t] = n;
      }
      return this.imageDataCache[t];
    }
  }
  clearCachedWheelImage() {
    this.wheelImage = null;
  }
}
function f559(e) {
  const t = e.getContext("2d");
  if (!t) {
    throw new Error("Could not get canvas context");
  }
  return t;
}
class C16 {
  afterSpinSound = "applause-sound-soft";
  afterSpinSoundVolume = 50;
  allowDuplicates = true;
  animateWinner = false;
  autoRemoveWinner = false;
  centerText = "";
  colorSettings = [
    {
      color: "#3369E8",
      enabled: true,
    },
    {
      color: "#D50F25",
      enabled: true,
    },
    {
      color: "#EEB211",
      enabled: true,
    },
    {
      color: "#009925",
      enabled: true,
    },
    {
      color: "#000000",
      enabled: false,
    },
    {
      color: "#000000",
      enabled: false,
    },
  ];
  coverImageName = "";
  coverImageType = "";
  customCoverImageDataUri = "";
  customPictureDataUri = "";
  customPictureName = "";
  description = "";
  displayHideButton = true;
  displayRemoveButton = true;
  displayWinnerDialog = true;
  drawOutlines = false;
  drawShadow = true;
  duringSpinSound = "ticking-sound";
  duringSpinSoundVolume = 50;
  entries = [
    {
      text: "Ali",
    },
    {
      text: "Beatriz",
    },
    {
      text: "Charles",
    },
    {
      text: "Diya",
    },
    {
      text: "Eric",
    },
    {
      text: "Fatima",
    },
    {
      text: "Gabriel",
    },
    {
      text: "Hanna",
    },
  ];
  galleryPicture = "/images/none.png";
  hubSize = "S";
  isAdvanced = false;
  launchConfetti = true;
  maxNames = 1000;
  pageBackgroundColor = "#FFFFFF";
  pictureType = "none";
  playClickWhenWinnerRemoved = false;
  showTitle = true;
  slowSpin = false;
  spinTime = 10;
  title = "";
  type = "color";
  winnerMessage = "";
  constructor(t) {
    if (t) {
      this.copyPropertiesFrom(t);
    }
  }
  loadJson(t) {
    try {
      const n = JSON.parse(t);
      if (n.entries?.length > 0) {
        this.copyPropertiesFrom(n);
      }
    } catch (n) {
      console.error(n);
    }
  }
  getJson() {
    return JSON.stringify(this);
  }
  getValues() {
    return JSON.parse(this.getJson());
  }
  loadValues(t) {
    this.copyPropertiesFrom(JSON.parse(JSON.stringify(t)));
  }
  clone() {
    const t = new C16();
    t.loadValues(this.getValues());
    return t;
  }
  hasOnlyDefaultEntries() {
    return f498(this.getTexts(), new C16().getTexts());
  }
  setUploadedCenterImage(t, n) {
    this.customPictureName = t;
    this.customPictureDataUri = n;
    this.pictureType = "uploaded";
    this.centerText = "";
  }
  setUploadedBackgroundImage(t, n) {
    this.coverImageName = t;
    this.customCoverImageDataUri = n;
    this.coverImageType = "uploaded";
  }
  setGalleryBackgroundImage(t) {
    this.coverImageType = "gallery";
    this.coverImageName = t;
  }
  setGalleryCenterImage(t) {
    this.centerText = "";
    this.pictureType = "gallery";
    this.galleryPicture = t;
    this.customPictureName = "";
    this.customPictureDataUri = "";
  }
  getWheelImage() {
    if (this.pictureType === "none") {
      return null;
    } else if (this.pictureType === "gallery" && this.galleryPicture) {
      return this.galleryPicture;
    } else if (
      (this.pictureType === "uploaded" || this.pictureType === "text") &&
      this.customPictureDataUri
    ) {
      return this.customPictureDataUri;
    } else {
      return null;
    }
  }
  getCoverImage() {
    if (this.coverImageType === "gallery" && this.coverImageName) {
      return this.coverImageName;
    } else if (
      this.coverImageType === "uploaded" &&
      this.customCoverImageDataUri
    ) {
      return this.customCoverImageDataUri;
    } else {
      return null;
    }
  }
  shouldPlayTicks() {
    return this.duringSpinSound === "ticking-sound";
  }
  setColorValues(t) {
    if (t) {
      for (
        this.colorSettings = t.map((n) => ({
          color: n,
          enabled: true,
        }));
        this.colorSettings.length < 6;

      ) {
        this.colorSettings.push({
          color: "#000000",
          enabled: false,
        });
      }
    }
  }
  getCoalescedColors() {
    const t = this.colorSettings.filter((n) => n.enabled).map((n) => n.color);
    if (t.length > 0) {
      return t;
    } else {
      return ["#CCCCCC"];
    }
  }
  isTooBigForDatabase() {
    return this.getJson().length > 990000;
  }
  getTexts() {
    return this.entries.map((t) => t.text).filter((t) => t);
  }
  getFirstText() {
    const t = this.getTexts();
    if (t.length > 0) {
      return t[0];
    } else {
      return "";
    }
  }
  copyPropertiesFrom(t) {
    Object.assign(this, t);
    this.convertOldData();
  }
  usesAdvancedFeatures() {
    for (const [t, n] of this.entries.entries()) {
      if (
        (n.color && n.color !== this.getEntryColor(t)) ||
        ("weight" in n && n.weight !== 1) ||
        n.enabled === false ||
        n.sound ||
        n.message
      ) {
        return true;
      }
    }
    return false;
  }
  getEntryColor(t) {
    const n = this.getCoalescedColors();
    if (
      this.entries.length > 1 &&
      this.isLastSliceAndSameColorAsFirstSlice(t) &&
      n.length > 2
    ) {
      return n[1];
    } else {
      return n[t % n.length];
    }
  }
  isLastSliceAndSameColorAsFirstSlice(t) {
    if (t === this.entries.length - 1) {
      const n = this.getCoalescedColors();
      return t % n.length === 0;
    }
    return false;
  }
  convertOldData() {
    const t = this;
    if (Array.isArray(t.names)) {
      t.entries = t.names.map((n) => {
        const r = f500(n);
        const i = f504(n);
        if (i) {
          return {
            text: r,
            image: i,
          };
        } else {
          return {
            text: r,
          };
        }
      });
      delete t.names;
    }
    t.maxNames = Number(t.maxNames);
    t.spinTime = Number(t.spinTime);
    delete t.displayHat;
    if (t.playTicks === false) {
      t.duringSpinSound = "no-sound";
    }
    delete t.playTicks;
    if (t.playCheers === false) {
      t.afterSpinSound = "no-sound";
    }
    delete t.playCheers;
    if (!Object.hasOwn(t, "showTitle")) {
      t.showTitle = true;
    }
    if (t.type === "image" && !t.coverImageType) {
      t.coverImageType = "gallery";
    }
    if (
      t.isAdvanced &&
      t.entries.length > 0 &&
      !Object.hasOwn(t.entries[0], "enabled")
    ) {
      for (const n of this.entries) {
        n.enabled = true;
      }
    }
    if (t.drawShadow === undefined) {
      t.drawShadow = true;
    }
    for (const n of t.entries) {
      n.text &&= n.text
        .replace(
          `
`,
          ""
        )
        .replace("\r", "");
    }
    f509(t.entries);
    t.entries = t.entries.filter((n) => n.text || n.image || "enabled" in n);
  }
  removeImages() {
    for (const t of this.entries) {
      if ("image" in t) {
        if (!t.text?.trim()) {
          return false;
        }
        delete t.image;
      }
    }
    if (this.type === "image") {
      this.type = "color";
    }
    this.customPictureDataUri = "";
    this.customCoverImageDataUri = "";
    return true;
  }
}
const v172 = Object.fromEntries(
  Object.entries(new C16().getValues()).map(([e, t]) => [e, typeof t])
);
function f560(e) {
  const t = new C16(
    Object.fromEntries(
      Object.entries(structuredClone(e)).filter(
        ([n, r]) => n in v172 && typeof r === v172[n]
      )
    )
  );
  for (const n of t.entries) {
    delete n.id;
  }
  for (const n of t.colorSettings) {
    if (n.color.length === 4) {
      n.color = `#${n.color[1]}${n.color[1]}${n.color[2]}${n.color[2]}${n.color[3]}${n.color[3]}`;
    }
  }
  return t;
}
class C17 {
  array;
  length;
  elementJsonCache;
  constructor(t) {
    this.array = t.slice(0);
    this.length = t.length;
    this.elementJsonCache = null;
  }
  getElement(t) {
    let n = t;
    while (n < 0) {
      n += this.array.length;
    }
    while (n >= this.array.length) {
      n -= this.array.length;
    }
    return this.array[n];
  }
  setElement(t, n) {
    let r = t;
    while (r < 0) {
      r += this.array.length;
    }
    while (r >= this.array.length) {
      r -= this.array.length;
    }
    this.array[r] = n;
    this.elementJsonCache = null;
  }
  getArray() {
    return this.array;
  }
  slice(t, n) {
    const r = [];
    for (let i = t; i < n; i++) {
      r.push(this.getElement(i));
    }
    return r;
  }
  getNextElement(t) {
    this.elementJsonCache ||= this.getElementJson();
    const n = JSON.stringify(t);
    const r = this.elementJsonCache.findIndex((i) => i === n);
    return this.getElement(r + 1);
  }
  getElementJson() {
    return this.array.map((t) => JSON.stringify(t));
  }
}
class C18 {
  startIndex;
  endIndex;
  length;
  index;
  constructor(t, n, r) {
    this.startIndex = t;
    this.endIndex = n;
    this.length = r;
    this.index = this.startIndex;
  }
  isDone() {
    return this.index === this.endIndex;
  }
  getIndex() {
    return this.index;
  }
  increment() {
    this.index += 1;
    if (this.index >= this.length) {
      this.index -= this.length;
    }
  }
}
class C19 {
  allEntries;
  maxSlices;
  prevIndexAtPointer;
  displayEntries;
  constructor() {
    this.allEntries = new C17([]);
    this.maxSlices = 1000000;
    this.prevIndexAtPointer = -1;
    this.displayEntries = new C17([]);
  }
  setEntries(t, n, r) {
    this.maxSlices = n;
    this.allEntries = new C17(f502(r, t));
    if (this.allEntries.length <= n || this.entriesHaveUnequalWeight(t)) {
      this.displayEntries = this.allEntries;
    } else {
      this.displayEntries = new C17(this.allEntries.slice(0, n));
    }
  }
  getDisplayEntries() {
    return this.displayEntries.getArray();
  }
  getNumberOfDisplayEntries() {
    return this.getDisplayEntries().length;
  }
  getAllEntries() {
    return this.allEntries.getArray();
  }
  tick(t) {
    if (
      this.maxSlices >= this.allEntries.length ||
      t === this.prevIndexAtPointer
    ) {
      return false;
    }
    const n = new C18(this.prevIndexAtPointer, t, this.displayEntries.length);
    while (!n.isDone()) {
      n.increment();
      const r = n.getIndex();
      const i = Math.floor(r + this.maxSlices / 2) % this.maxSlices;
      const s = this.displayEntries.getElement(i - 1);
      const o = this.allEntries.getNextElement(s);
      this.displayEntries.setElement(i, o);
    }
    this.prevIndexAtPointer = t;
    return true;
  }
  entriesHaveUnequalWeight(t) {
    if (t.length === 0 || !t[0].weight) {
      return false;
    } else {
      return t.find((n) => n.weight !== 1);
    }
  }
  setRandomPosition(t) {
    if (this.maxSlices < this.allEntries.length) {
      const n = f510(0, this.allEntries.length - 1, t);
      this.displayEntries = new C17(
        this.allEntries.slice(n, n + this.maxSlices)
      );
    }
  }
}
class gC2 {
  angle = 0;
  speed = 0;
  fps = 60;
  watermark = "";
  wheelConfig = new C16();
  state;
  wheelPainter = new C15();
  entryPicker = new C19();
  indexFromLastTick = 0;
  indexFromThisTick = 0;
  nameChangedCallback;
  doneSpinningCallback;
  onStateChangeCallback;
  constructor(t, n, r) {
    this.state = new C21(this);
    this.nameChangedCallback = t || (() => {});
    this.doneSpinningCallback = n || ((i) => {});
    this.onStateChangeCallback = r || ((i) => {});
    window.gwState = this;
  }
  setEntries(t, n, r) {
    if (!this.state.isSpinning()) {
      const i = t.filter((s) => s.enabled !== false);
      this.entryPicker.setEntries(i, n, r);
      this.refresh();
    }
  }
  refresh() {
    this.wheelPainter.refresh();
  }
  configure(t, n, r) {
    if (!this.state.isSpinning()) {
      this.wheelConfig = t;
      if (n) {
        this.fps = n;
      }
      if (r) {
        this.watermark = r;
      }
      this.refresh();
    }
  }
  tick(t) {
    this.state.tick(this, t);
    if (this.angle > Math.PI * 2) {
      this.angle -= Math.PI * 2;
    }
    this.indexFromLastTick = this.indexFromThisTick;
    this.indexFromThisTick = this.getIndexAtPointer();
    if (this.indexFromThisTick !== this.indexFromLastTick) {
      this.nameChangedCallback();
    }
    if (this.entryPicker.tick(this.getIndexAtPointer())) {
      this.refresh();
    }
    return {
      state: this.state.constructor.name,
      angle: this.angle,
    };
  }
  setNewState(t) {
    this.state = t;
  }
  click() {
    this.state.click(this);
  }
  spinIsDone() {
    this.doneSpinningCallback(this.getEntryAtPointer());
  }
  isSpinning() {
    return this.state.isSpinning();
  }
  setSpinState(t) {
    this.state.receiveFromNetwork(this, t);
  }
  setAngle(t) {
    this.angle = t;
    this.entryPicker.setRandomPosition(Math.random);
  }
  getIndexAtPointer() {
    return f512(this.entryPicker.getDisplayEntries(), this.angle);
  }
  /** @param {number} a */
  getIndexAtPointerN(a) {
    return f512(this.entryPicker.getDisplayEntries(), a);
  }
  getEntryAtPointer() {
    return this.entryPicker.getDisplayEntries()[this.getIndexAtPointer()];
  }
  /** @param {number} a */
  getEntryAtPointerN(a) {
    return this.entryPicker.getDisplayEntries()[this.getIndexAtPointerN(a)];
  }
  getDisplayEntries() {
    return this.entryPicker.getDisplayEntries();
  }
  resetRotation() {
    this.angle = 0;
  }
  getStateTimeLengths() {
    const t = this.wheelConfig.spinTime * this.fps;
    const n = Math.min(this.fps, t / 3);
    return {
      accelerating: n,
      decelerating: t - n,
    };
  }
  draw(t) {
    if (this.wheelConfig) {
      this.wheelPainter.draw(
        t,
        this.angle,
        this.entryPicker.getDisplayEntries(),
        this.entryPicker.getAllEntries(),
        this.wheelConfig,
        this.watermark
      );
    }
  }
}
let vC2 = gC2;
function deepSearch(obj, target) {
  let results = [];
  let visited = new Set();
  // Determine search method (String match, Regex, or Custom function)
  const isRegex = target instanceof RegExp;
  const customFilter = typeof target === "function" ? target : null;
  function getAllProperties(innerObj) {
    let keys = new Set();
    // Get enumerable keys
    Object.keys(innerObj).forEach((key) => keys.add(key));
    // Get non-enumerable own properties
    Object.getOwnPropertyNames(innerObj).forEach((key) => keys.add(key));
    // Get prototype properties (including class methods)
    let proto = Object.getPrototypeOf(innerObj);
    if (proto) {
      Object.getOwnPropertyNames(proto).forEach((key) => keys.add(key));
    }
    return [...keys]; // Convert Set to Array
  }
  function search(innerObj, path) {
    try {
      if (visited.has(innerObj)) return; // Prevent infinite loops
      visited.add(innerObj);
      // Search functions (match function names instead of just collecting all functions)
      if (typeof innerObj === "function") {
        let functionName = innerObj.name || "[anonymous]";
        if (
          (isRegex && target.test(functionName)) ||
          functionName.includes(target) ||
          (customFilter && customFilter(functionName))
        ) {
          results.push({ type: "function", path: path, name: functionName });
        }
        return;
      }
      // Handle Map & WeakMap (keys and values)
      if (innerObj instanceof Map) {
        innerObj.forEach((value, key) => {
          let newPath = `${path}.MapKey:${key}`;
          if (
            (isRegex && target.test(String(key))) ||
            String(key).includes(target) ||
            (customFilter && customFilter(String(key)))
          ) {
            results.push({ type: "key", path: newPath });
          }
          search(value, newPath);
        });
        return;
      }
      // Handle Set & WeakSet (values only)
      if (innerObj instanceof Set || innerObj instanceof WeakSet) {
        let index = 0;
        innerObj.forEach((item) => {
          search(item, `${path}.SetValue[${index}]`);
          index++;
        });
        return;
      }
      // Handle objects (including class instances)
      if (typeof innerObj === "object" && innerObj !== null) {
        if (
          Array.isArray(innerObj) ||
          (typeof innerObj.length === "number" && innerObj.hasOwnProperty(0))
        ) {
          for (let i = 0; i < innerObj.length; i++) {
            search(innerObj[i], `${path}[${i}]`);
          }
        } else {
          let keys = getAllProperties(innerObj); // Get all fields, including prototype methods
          keys.forEach((key) => {
            let newPath = `${path}.${key}`;
            if (
              (isRegex && target.test(key)) ||
              key.includes(target) ||
              (customFilter && customFilter(key))
            ) {
              results.push({ type: "key", path: newPath });
            }
            if (
              typeof innerObj[key] === "string" ||
              typeof innerObj[key] === "number"
            ) {
              if (
                (isRegex && target.test(String(innerObj[key]))) ||
                String(innerObj[key]).includes(target) ||
                (customFilter && customFilter(String(innerObj[key])))
              ) {
                results.push({
                  type: "value",
                  path: newPath,
                  value: innerObj[key],
                });
              }
            }
            search(innerObj[key], newPath);
          });
        }
      }
    } catch (error) {
      console.warn(`Skipping inaccessible property at ${path}:`, error);
    }
  }
  search(obj, "obj");
  return results.length ? results : ["No match found"];
}
function rangeExclusive(start, end, count) {
  let epsilon = Number.EPSILON; // Ensures the range excludes 'end'
  let maxValue = end - epsilon;
  return Array.from(
    { length: count },
    (_, i) => start + (i / count) * maxValue
  );
}
function shuffleArray(array) {
  // Randomize array in-place using Durstenfeld shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function randomStratified(start, end, count) {
  let rangeValues = rangeExclusive(start, end, count);
  shuffleArray(rangeValues);
  return rangeValues;
}
function randomPoints(count = window.DENSITY) {
  return randomStratified(0, 2 * Math.PI, count);
}
function calculateTotalDeceleratingRotation(
  initialSpeed,
  deceleration,
  maxAge
) {
  // Calculate total angle based on geometric series formula
  return (
    (initialSpeed * (1 - Math.pow(deceleration, maxAge))) / (1 - deceleration)
  );
}
function calculateOffsetToTargetPoint(
  angleInitial,
  totalAngleInc,
  targetAngle
) {
  let final_angle = (angleInitial + totalAngleInc) % (2 * Math.PI);
  // Ensure positive offset for correct rotation adjustment
  let offset = (targetAngle - final_angle + 2 * Math.PI) % (2 * Math.PI);
  return offset;
}
/**
 * @typedef {Object} WheelEntry
 * @property {string} text
 */
/**
 * Tries different points and finds an initial angle where entry.text matches TARGETS.
 * @param {number} angleInitial - The starting angle.
 * @param {number[]} pointsToTry - List of angle points to check.
 * @param {() => WheelEntry} getEntryAtPointNFn - Function to get WheelEntry at a given point.
 * @returns {number} - The adjusted initial angle.
 */
function tryCalculateInitialAngleForTargets(
  angleInitial,
  totalAngleInc,
  pointsToTry,
  getEntryAtPointNFn
) {
  for (let i = 0; i < pointsToTry.length; i++) {
    let point = pointsToTry[i];
    let entry = getEntryAtPointNFn(point);
    if (window.TARGETS.includes(entry.text)) {
      let offset = calculateOffsetToTargetPoint(
        angleInitial,
        totalAngleInc,
        point
      );
      return (angleInitial + offset) % (2 * Math.PI);
    }
  }
  // If no valid target is found, return original angleInitial
  return angleInitial;
}
class C20 {
  name = "NullSpinState";
  tick(t, ...n) {}
  click(t) {}
  receiveFromNetwork(t, n) {}
  isSpinning() {
    return false;
  }
}
class C21 extends C20 {
  name = "InitialDemoSpinState";
  constructor(t) {
    super();
    t.speed = 0.005;
  }
  tick(t) {
    t.angle += t.speed;
  }
  click(t) {
    t.setNewState(new C22(t));
  }
  receiveFromNetwork(t, n) {
    if (n.name === "Spinning") {
      t.setNewState(new C23(t, n.decelAngle));
    }
    if (n.name === "Stopped") {
      t.setNewState(new C29(t, n.position));
    }
  }
}
class C22 extends C20 {
  name = "AcceleratingState";
  age;
  MAX_AGE;
  constructor(t) {
    super();
    this.age = 0;
    this.MAX_AGE = t.getStateTimeLengths().accelerating;
    t.onStateChangeCallback({
      name: "Spinning",
    });
  }
  tick(t, n) {
    t.angle += t.speed;
    if (this.age <= this.MAX_AGE) {
      const r = t.wheelConfig.slowSpin ? 0.001 : 0.6 / t.fps;
      t.speed += r;
      this.age += 1;
    } else {
      t.setNewState(new C24(t, n));
    }
  }
  isSpinning() {
    return true;
  }
}
class C23 extends C20 {
  name = "SpectatorAcceleratingState";
  age;
  MAX_AGE;
  decelAngle;
  constructor(t, n) {
    super();
    this.age = 0;
    this.MAX_AGE = t.getStateTimeLengths().accelerating;
    this.decelAngle = n;
  }
  tick(t) {
    t.angle += t.speed;
    if (this.age <= this.MAX_AGE) {
      const n = t.wheelConfig.slowSpin ? 0.001 : 0.6 / t.fps;
      t.speed += n;
      this.age += 1;
    } else {
      t.setNewState(new C25(t, this.decelAngle));
    }
  }
  receiveFromNetwork(t, n) {
    if (n.name === "AnnounceWinner") {
      t.setNewState(new C27(t, n.position));
    }
  }
  isSpinning() {
    return true;
  }
}
class C24 extends C20 {
  name = "DeceleratingState";
  age;
  MAX_AGE;
  deceleration;
  /** @param {gC2} t */
  constructor(t, n) {
    super();
    t.angle = Math.PI * 2 * n();
    t.entryPicker.setRandomPosition(n);
    this.age = 0;
    this.MAX_AGE = t.getStateTimeLengths().decelerating;
    const r = this.MAX_AGE;
    const i = t.speed;
    const s = 0.00015;
    this.deceleration = Math.exp(Math.log(s / i) / r);
    t.angle = tryCalculateInitialAngleForTargets(
      t.angle,
      calculateTotalDeceleratingRotation(
        t.speed,
        this.deceleration,
        this.MAX_AGE
      ),
      randomPoints(),
      (n) => t.getEntryAtPointerN(n)
    );
  }
  /** @param {gC2} t */
  tick(t) {
    t.angle += t.speed;
    if (this.age <= this.MAX_AGE) {
      t.speed = t.speed * this.deceleration;
      this.age += 1;
    } else {
      t.speed = 0;
      t.setNewState(new C26(t, t.angle));
    }
  }
  isSpinning() {
    return true;
  }
}
class C25 extends C20 {
  name = "SpectatorDeceleratingState";
  age;
  MAX_AGE;
  deceleration;
  constructor(t, n) {
    super();
    t.setAngle(n);
    this.age = 0;
    this.MAX_AGE = t.getStateTimeLengths().decelerating;
    const r = this.MAX_AGE;
    const i = t.speed;
    const s = 0.00015;
    this.deceleration = Math.exp(Math.log(s / i) / r);
  }
  tick(t) {
    t.angle += t.speed;
    if (this.age <= this.MAX_AGE) {
      t.speed = t.speed * this.deceleration;
    }
    if (this.age > this.MAX_AGE) {
      t.speed = 0;
    }
    if (this.age > this.MAX_AGE + 180) {
      t.setNewState(new C21(t));
    }
    this.age += 1;
  }
  receiveFromNetwork(t, n) {
    if (n.name === "AnnounceWinner") {
      t.setNewState(new C27(t, n.position));
    }
  }
  isSpinning() {
    return true;
  }
}
class C26 extends C20 {
  name = "AnnounceWinnerState";
  constructor(t, n) {
    super();
    t.angle = n;
    t.onStateChangeCallback({
      name: "AnnounceWinner",
      position: t.angle,
    });
  }
  tick(t) {
    t.spinIsDone();
    t.setNewState(new C28(t, t.angle));
  }
}
class C27 extends C20 {
  name = "SpectatorAnnounceWinnerState";
  constructor(t, n) {
    super();
    t.angle = n;
  }
  tick(t) {
    t.spinIsDone();
    t.setNewState(new C29(t, t.angle));
  }
}
class C28 extends C20 {
  name = "StoppedState";
  constructor(t, n) {
    super();
    t.angle = n;
    t.speed = 0;
    t.onStateChangeCallback({
      name: "Stopped",
      position: t.angle,
    });
  }
  click(t) {
    t.setNewState(new C22(t));
  }
  receiveFromNetwork(t, n) {
    if (n.name === "Spinning") {
      t.setNewState(new C23(t, n.decelAngle));
    }
  }
}
class C29 extends C20 {
  name = "SpectatorStoppedState";
  constructor(t, n) {
    super();
    t.angle = n;
    t.speed = 0;
  }
  click(t) {
    t.setNewState(new C22(t));
  }
  receiveFromNetwork(t, n) {
    if (n.name === "Spinning") {
      t.setNewState(new C23(t, n.decelAngle));
    }
  }
}
const vA24 = [
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/spreadsheets.readonly",
];
function f561(e) {
  if (!e) {
    return "";
  }
  const t = e.match(/<img.*?src="(.*?)".*?>/);
  return f573(t ? e.replace(t[0], "") : e);
}
function f562(e, t) {
  if (e) {
    return t;
  }
  const n = [];
  const r = [];
  for (const i of t) {
    const s = f563(i);
    if (!n.includes(s)) {
      n.push(s);
      r.push(i);
    }
  }
  return r;
}
function f563(e) {
  const t = {};
  if (e.text) {
    t.text = e.text;
  }
  if (e.image) {
    t.image = e.image;
  }
  return JSON.stringify(t);
}
function f564(e, t) {
  const n = [];
  for (let r = 0; r < e.length; r++) {
    if (f563(t) === f563(e[r])) {
      n.push(r);
    }
    if (t.id === e[r].id) {
      return n[0] !== r;
    }
  }
  return false;
}
function f565(e) {
  if (!e) {
    return [];
  }
  const t = e.split(/<div>|<\/div>|<br>|<p>/);
  const n = [
    /<div.*?>/g,
    /<\/div>/g,
    /<p.*?>/g,
    /<\/p>/g,
    /<span.*?>/g,
    /<\/span>/g,
    /<font.*?>/g,
    /<\/font>/g,
    /<!--.*?>/g,
    /<br.*?>/g,
  ];
  return t
    .map((r) => {
      let i = r;
      for (const a of n) {
        i = i.replace(a, "");
      }
      const s = f561(i);
      const o = f566(i);
      if (s) {
        if (o) {
          return {
            text: s,
            image: o,
          };
        } else {
          return {
            text: s,
          };
        }
      } else if (o) {
        return {
          image: o,
        };
      } else {
        return {};
      }
    })
    .filter((r) => r.text || r.image);
}
function f566(e) {
  let t = "";
  if (e) {
    const n = e.match(/<img.*?src="(.*?)".*?>/);
    if (n?.[1]) {
      t = n[1];
    }
  }
  return t;
}
function f567(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function f568(e, t) {
  if (t) {
    return e.reduce((n, r) => n + (r?.trim() === t.trim() ? 1 : 0), 0);
  } else {
    return 0;
  }
}
function f569(e, t, n) {
  if (
    !location.host.startsWith("localhost") &&
    !location.host.startsWith("test")
  ) {
    if (typeof gtag !== "undefined") {
      gtag("event", t, {
        event_label: n,
      });
    }
  }
}
function f570(e, t) {
  const n = f516(t);
  f569("", `${e}: ${n}`, navigator.userAgent);
  console.error(n);
}
function f571(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function f572(e) {
  const t = e.replace(/<mark>/g, "||mark||").replace(/<\/mark>/g, "||/mark||");
  return f571(t)
    .replace(/\|\|mark\|\|/g, "<mark>")
    .replace(/\|\|\/mark\|\|/g, "</mark>");
}
function f573(e) {
  return e
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
function f574(e) {
  return e.replace(/<.*?>/g, "");
}
function f575() {
  let t = "";
  const n = "abcdefghjkmnpqrstuvwxyz23456789";
  for (let r = 0; r < 10; r++) {
    t += n.charAt(Math.floor(Math.random() * n.length));
  }
  return t;
}
function f576(e) {
  let t = "";
  let n = "";
  if (e) {
    if (e.image) {
      t = `<img src="${e.image}" style="height:25px" style="font-size:1rem;">`;
    }
    if (e.text) {
      n = f571(e.text);
      n = n.replace(/^ +$/g, "&nbsp;");
    }
  }
  return `<div>${t}${n}</div>`;
}
function f577(e) {
  if (e === "en") {
    return "";
  } else {
    return e;
  }
}
function f578(e, t) {
  return `https://docs.google.com/forms/d/e/1FAIpQLSeryxMCuDjQUGawpgIeMwSY-81fqwdbpVTIOyh1-WJG5LCeeQ/viewform?entry.1064273724=${encodeURIComponent(
    e
  )}&entry.558479038=${t}`;
}
function f579(e, t) {
  return f580(f581(e), t);
}
function f580(e, t = "en", n = Date.now()) {
  if (!e) {
    return "-";
  }
  const r = Math.floor((n - e) / 1000);
  const i = [
    Math.floor(r / 31536000),
    Math.floor(r / 2592000),
    Math.floor(r / 604800),
    Math.floor(r / 86400),
    Math.floor(r / 3600),
    Math.floor(r / 60),
    r,
  ];
  const s = ["year", "month", "week", "day", "hour", "minute", "second"];
  const o = new Intl.RelativeTimeFormat(t, {
    numeric: "auto",
  });
  for (const a in i) {
    if (i[a] >= 1) {
      return o.format(-i[a], s[a]);
    }
  }
  return "moments ago";
}
function f581(e) {
  if (e?._seconds) {
    return e._seconds * 1000;
  } else if (e?.seconds) {
    return e.seconds * 1000;
  } else if (e && Number.isInteger(e)) {
    return e;
  } else {
    return 0;
  }
}
function f582(e) {
  const t = Number(e);
  if (Number.isNaN(t)) {
    return "?";
  } else {
    return `$${t.toFixed(2)}`;
  }
}
function f583(e) {
  const t = Number(e);
  if (!Number.isNaN(t) && t >= 0) {
    return `${Math.round(t * 100)}%`;
  } else {
    return "?";
  }
}
function f584() {
  return window.self !== window.top;
}
function f585(e) {
  if (location.host.startsWith("localhost")) {
    return `http://localhost:8081/${e}`;
  } else {
    return `/${e}`;
  }
}
function f586(e, t) {
  return Object.entries(e)
    .sort((r, i) =>
      r[0] === "sounds.Sound effects"
        ? -1
        : i[0] === "sounds.Sound effects"
        ? 1
        : r[0] === "sounds.Winter holidays" && t > 9
        ? -1
        : i[0] === "sounds.Winter holidays" && t > 9
        ? 1
        : 0
    )
    .reduce((r, i) => {
      r[i[0]] = i[1];
      return r;
    }, {});
}
async function f587(e) {
  const { extractColors: t } = await vF4(async () => {
    const { extractColors: r } = await import("./extract-colors-v349.js");
    return {
      extractColors: r,
    };
  }, []);
  const n = new Image();
  n.src = e;
  return new Promise((r) => {
    n.onload = async () => {
      const i = await t(n);
      r(i.map((s) => s.hex).slice(0, 6));
    };
  });
}
function f588(e, t, n) {
  return e.toSorted((r, i) =>
    t === "title"
      ? r.wheelConfig.title || i.wheelConfig.title
        ? f589(r, i, n)
        : f590(r, i, n)
      : t === "created"
      ? f590(r, i, n)
      : 0
  );
}
function f589(e, t, n) {
  if (e.wheelConfig.title) {
    if (t.wheelConfig.title) {
      if (n === "desc") {
        return t.wheelConfig.title.localeCompare(e.wheelConfig.title, "en", {
          numeric: true,
          sensitivity: "base",
        });
      } else {
        return e.wheelConfig.title.localeCompare(t.wheelConfig.title, "en", {
          numeric: true,
          sensitivity: "base",
        });
      }
    } else {
      return -1;
    }
  } else {
    return 1;
  }
}
function f590(e, t, n) {
  if (n === "desc") {
    return t.created - e.created;
  } else {
    return e.created - t.created;
  }
}
async function f591(e, t, n, r) {
  const i = {
    method: e,
    mode: "cors",
    headers: {},
  };
  if (n) {
    i.headers.Authorization = n;
  }
  if (r) {
    i.headers["Content-Type"] = "application/json";
    i.body = JSON.stringify(r);
  }
  const s = await fetch(f585(t), i);
  return await f593(s);
}
async function f592(e, t, n, r) {
  const i = {
    method: e,
    mode: "cors",
    headers: {},
  };
  if (n) {
    i.headers.Authorization = n;
  }
  return await (await fetch(f585(t), i)).blob();
}
async function f593(e) {
  const t = await e.text();
  if (t.startsWith("<")) {
    throw new Error(t);
  }
  const n = JSON.parse(t);
  if ("error" in n) {
    throw new Error(n.error);
  }
  return n;
}
async function f594(e) {
  const t = await f595(e);
  return !!t && !t.isAnonymous;
}
async function f595(e) {
  if (e.currentUser) {
    return e.currentUser;
  } else {
    return new Promise((t) => {
      e.onAuthStateChanged((n) => t(n));
    });
  }
}
async function f596(e) {
  await e.signInAnonymously();
  return e.currentUser;
}
async function f597(e, t) {
  for (const r of vA24) {
    t.addScope(r);
  }
  t.setCustomParameters({
    prompt: "select_account",
  });
  return (await e.signInWithPopup(t)).credential?.accessToken ?? null;
}
const vA25 = [
  {
    partialName: "noms",
    locale: "fr",
  },
];
const vA26 = [
  {
    name: "am",
    googleName: "am_ET",
    twitterName: "am",
    file: "am-ET.json",
    humanName: "አማርኛ",
  },
  {
    name: "ar",
    googleName: "ar_AR",
    twitterName: "ar",
    file: "ar-EG.json",
    humanName: "العربية",
  },
  {
    name: "az",
    googleName: "az_AZ",
    twitterName: "az",
    file: "az-Latn-AZ.json",
    humanName: "Azərbaycanca",
  },
  {
    name: "be",
    googleName: "be_BY",
    twitterName: "be",
    file: "be-BY.json",
    humanName: "Беларуская",
  },
  {
    name: "bg",
    googleName: "bg_BG",
    twitterName: "bg",
    file: "bg-BG.json",
    humanName: "български",
  },
  {
    name: "bn",
    googleName: "bn_IN",
    twitterName: "bn",
    file: "bn-IN.json",
    humanName: "বাংলা",
  },
  {
    name: "bs",
    googleName: "bs_BA",
    twitterName: "bs",
    file: "bs-Latn-BA.json",
    humanName: "Bosanski",
  },
  {
    name: "ca",
    googleName: "ca_ES",
    twitterName: "ca",
    file: "ca-ES.json",
    humanName: "Català",
  },
  {
    name: "cs",
    googleName: "cs_CZ",
    twitterName: "cs",
    file: "cs-CZ.json",
    humanName: "Čeština",
  },
  {
    name: "cy",
    googleName: "cy_GB",
    twitterName: "cy",
    file: "cy-GB.json",
    humanName: "Cymraeg",
  },
  {
    name: "da",
    googleName: "da_DK",
    twitterName: "da",
    file: "da-DK.json",
    humanName: "Dansk",
  },
  {
    name: "de",
    googleName: "de_DE",
    twitterName: "de",
    file: "de-DE.json",
    humanName: "Deutsch",
  },
  {
    name: "el",
    googleName: "el_GR",
    twitterName: "el",
    file: "el-GR.json",
    humanName: "Eλληνικά",
  },
  {
    name: "en-PI",
    googleName: "en_US",
    twitterName: "en",
    file: "en-PI.json",
    humanName: "English (Pirate)",
  },
  {
    name: "en",
    googleName: "en_US",
    twitterName: "en",
    file: "en-US.json",
    humanName: "English",
  },
  {
    name: "es",
    googleName: "es_ES",
    twitterName: "es",
    file: "es-ES.json",
    humanName: "Español",
  },
  {
    name: "et",
    googleName: "et_EE",
    twitterName: "et",
    file: "et-EE.json",
    humanName: "Estonian",
  },
  {
    name: "fa",
    googleName: "fa_IR",
    twitterName: "fa",
    file: "fa-IR.json",
    humanName: "فارسی",
  },
  {
    name: "fi",
    googleName: "fi_FI",
    twitterName: "fi",
    file: "fi-FI.json",
    humanName: "Suomi",
  },
  {
    name: "fil",
    googleName: "fil_PH",
    twitterName: "fil",
    file: "fil-PH.json",
    humanName: "Filipino",
  },
  {
    name: "fr",
    googleName: "fr_FR",
    twitterName: "fr",
    file: "fr-FR.json",
    humanName: "Français",
  },
  {
    name: "gl",
    googleName: "gl_ES",
    twitterName: "gl",
    file: "gl-ES.json",
    humanName: "Galego",
  },
  {
    name: "gu",
    googleName: "gu_IN",
    twitterName: "gu",
    file: "gu-IN.json",
    humanName: "ગુજરાતી",
  },
  {
    name: "he",
    googleName: "he_IL",
    twitterName: "he",
    file: "he-IL.json",
    humanName: "עברית",
  },
  {
    name: "hi",
    googleName: "hi_IN",
    twitterName: "hi",
    file: "hi-IN.json",
    humanName: "हिंदी",
  },
  {
    name: "hr",
    googleName: "hr_HR",
    twitterName: "hr",
    file: "hr-HR.json",
    humanName: "Hrvatski",
  },
  {
    name: "hu",
    googleName: "hu_HU",
    twitterName: "hu",
    file: "hu-HU.json",
    humanName: "Magyar",
  },
  {
    name: "hy",
    googleName: "hy_AM",
    twitterName: "hy",
    file: "hy-AM.json",
    humanName: "Հայերեն",
  },
  {
    name: "id",
    googleName: "id_ID",
    twitterName: "id",
    file: "id-ID.json",
    humanName: "Bahasa Indonesia",
  },
  {
    name: "is",
    googleName: "is_IS",
    twitterName: "is",
    file: "is-IS.json",
    humanName: "Íslenskur",
  },
  {
    name: "it",
    googleName: "it_IT",
    twitterName: "it",
    file: "it-IT.json",
    humanName: "Italiano",
  },
  {
    name: "ja",
    googleName: "ja_JP",
    twitterName: "ja",
    file: "ja-JP.json",
    humanName: "日本語",
  },
  {
    name: "ka",
    googleName: "ka_GE",
    twitterName: "ka",
    file: "ka-GE.json",
    humanName: "ქართული",
  },
  {
    name: "kk",
    googleName: "kk_KZ",
    twitterName: "kk",
    file: "kk-KZ.json",
    humanName: "Қазақ тілі",
  },
  {
    name: "kn",
    googleName: "kn_IN",
    twitterName: "kn",
    file: "kn-IN.json",
    humanName: "ಕನ್ನಡ",
  },
  {
    name: "ko",
    googleName: "ko_KR",
    twitterName: "ko",
    file: "ko-KR.json",
    humanName: "한국어",
  },
  {
    name: "lo",
    googleName: "lo_LA",
    twitterName: "lo",
    file: "lo-LA.json",
    humanName: "ພາສາລາວ",
  },
  {
    name: "lt",
    googleName: "lt_LT",
    twitterName: "lt",
    file: "lt-LT.json",
    humanName: "Lietuvių",
  },
  {
    name: "lv",
    googleName: "lv_LV",
    twitterName: "lv",
    file: "lv-LV.json",
    humanName: "Latviešu",
  },
  {
    name: "mk",
    googleName: "mk_MK",
    twitterName: "mk",
    file: "mk-MK.json",
    humanName: "Mакедонски",
  },
  {
    name: "ml",
    googleName: "ml_IN",
    twitterName: "ml",
    file: "ml-IN.json",
    humanName: "മലയാളം",
  },
  {
    name: "mn",
    googleName: "mn_MN",
    twitterName: "mn",
    file: "mn-MN.json",
    humanName: "Mонгол",
  },
  {
    name: "ms",
    googleName: "ms_MY",
    twitterName: "ms",
    file: "ms-MY.json",
    humanName: "Bahasa Melayu",
  },
  {
    name: "my",
    googleName: "my_MM",
    twitterName: "my",
    file: "my-MM.json",
    humanName: "မြန်မာစာ",
  },
  {
    name: "nl",
    googleName: "nl_NL",
    twitterName: "nl",
    file: "nl-NL.json",
    humanName: "Nederlands",
  },
  {
    name: "no",
    googleName: "nb_NO",
    twitterName: "no",
    file: "nb-NO.json",
    humanName: "Norsk",
  },
  {
    name: "pa",
    googleName: "pa_IN",
    twitterName: "pa",
    file: "pa-IN.json",
    humanName: "ਪੰਜਾਬੀ",
  },
  {
    name: "pl",
    googleName: "pl_PL",
    twitterName: "pl",
    file: "pl-PL.json",
    humanName: "Polski",
  },
  {
    name: "pt",
    googleName: "pt_BR",
    twitterName: "pt",
    file: "pt-PT.json",
    humanName: "Português",
  },
  {
    name: "ro",
    googleName: "ro_RO",
    twitterName: "ro",
    file: "ro-RO.json",
    humanName: "Română",
  },
  {
    name: "ru",
    googleName: "ru_RU",
    twitterName: "ru",
    file: "ru-RU.json",
    humanName: "Pусский",
  },
  {
    name: "sd",
    googleName: "sd_PK",
    twitterName: "sd",
    file: "sd-PK.json",
    humanName: "سنڌي",
  },
  {
    name: "sl",
    googleName: "sl_SL",
    twitterName: "sl",
    file: "sl-SI.json",
    humanName: "Slovenščina",
  },
  {
    name: "so",
    googleName: "so_SO",
    twitterName: "so",
    file: "so-SO.json",
    humanName: "Soomaali",
  },
  {
    name: "sq",
    googleName: "sq_AL",
    twitterName: "sq",
    file: "sq-AL.json",
    humanName: "Shqip",
  },
  {
    name: "sr",
    googleName: "sr_SP",
    twitterName: "sr",
    file: "sr-Latn-RS.json",
    humanName: "Srpski",
  },
  {
    name: "sv",
    googleName: "sv_SE",
    twitterName: "sv",
    file: "sv-SE.json",
    humanName: "Svenska",
  },
  {
    name: "ta",
    googleName: "ta_IN",
    twitterName: "ta",
    file: "ta-IN.json",
    humanName: "தமிழ்",
  },
  {
    name: "th",
    googleName: "th_TH",
    twitterName: "th",
    file: "th-TH.json",
    humanName: "ไทย",
  },
  {
    name: "tr",
    googleName: "tr_TR",
    twitterName: "tr",
    file: "tr-TR.json",
    humanName: "Türkçe",
  },
  {
    name: "uk",
    googleName: "uk_UA",
    twitterName: "uk",
    file: "uk-UA.json",
    humanName: "Українська",
  },
  {
    name: "ur",
    googleName: "ur-PK",
    twitterName: "ur",
    file: "ur-PK.json",
    humanName: "اردو",
  },
  {
    name: "uz",
    googleName: "uz-UZ",
    twitterName: "uz",
    file: "uz-Latn-UZ.json",
    humanName: "Oʻzbekcha",
  },
  {
    name: "vi",
    googleName: "vi_VN",
    twitterName: "vi",
    file: "vi-VN.json",
    humanName: "Tiếng Việt",
  },
  {
    name: "zh-CN",
    googleName: "zh_CN",
    twitterName: "zh-cn",
    file: "zh-CN.json",
    humanName: "简体中文",
  },
  {
    name: "zh-HK",
    googleName: "zh_TW",
    twitterName: "zh-tw",
    file: "zh-HK.json",
    humanName: "繁體中文",
  },
];
function f598(e, t) {
  if (f613(e) === t) {
    return "/";
  } else {
    return `/${t}/`;
  }
}
function f599(e, t, n) {
  return `${e}${f598(e, t)}/${n}`.replace("//", "/");
}
function f600(e, t) {
  const n = vA26.find((i) => i.name === t);
  const r = e.toLowerCase() === "twitter" ? "twitterName" : "googleName";
  return n?.[r] || "en_US";
}
function f601(e) {
  return vA26.find((t) => t.name === e)?.file.slice(0, -5) || "en-US";
}
function f602(e, t) {
  const n = f607("")(t);
  return f517(f606, f605(e), f607({}), (r) => r.name ?? "")([n]);
}
function f603(e) {
  if (Array.isArray(e)) {
    return f517(f606, f609, f611)(e);
  } else {
    return [];
  }
}
function f604() {
  return vA26
    .map((e) => ({
      name: e.name,
      humanName: e.humanName,
    }))
    .sort(f608);
}
function f605(e) {
  return (t) => t.filter((n) => !f614(e, n.name));
}
function f606(e) {
  return vA26.filter((t) => e.some((n) => f614(n, t.name)));
}
function f607(e) {
  return (t) => t?.[0] ?? e;
}
function f608(e, t) {
  return e.humanName.localeCompare(t.humanName);
}
function f609(e) {
  return e.filter((t) => !f610(t));
}
function f610(e) {
  return e.name === "en-PI";
}
function f611(e) {
  return e.map(f612);
}
function f612(e) {
  return {
    name: e.name,
    humanName: e.humanName,
  };
}
function f613(e) {
  return vA25.find((t) => e.includes(t.partialName))?.locale || "en";
}
function f614(e, t) {
  if (e.length === t.length) {
    return e === t;
  } else {
    return f615(e) === f615(t);
  }
}
function f615(e) {
  return e.split("-")[0];
}
let v173;
let v174;
let v175;
async function f616() {
  if (!v173) {
    await f626();
    f627(v173);
    f629(v173);
  }
}
async function f617() {
  return await f594(v173.auth());
}
async function f618() {
  return await f595(v173.auth());
}
async function f619() {
  return (await (await f618())?.getIdToken()) ?? "";
}
async function f620() {
  return (await f618())?.uid;
}
async function f621() {
  const e = await f618();
  if (e?.isAnonymous) {
    return await e.getIdToken();
  }
}
function f622(e, t = ["google", "email"]) {
  f631();
  return new Promise((n) => {
    v175 ||= new v174.auth.AuthUI(v173.auth());
    const r = [];
    if (t.includes("google")) {
      r.push({
        provider: v173.auth.GoogleAuthProvider.PROVIDER_ID,
        customParameters: {
          prompt: "select_account",
        },
      });
    }
    if (t.includes("twitter")) {
      r.push(v173.auth.TwitterAuthProvider.PROVIDER_ID);
    }
    if (t.includes("email")) {
      r.push(v173.auth.EmailAuthProvider.PROVIDER_ID);
    }
    v175.start(`#${e}`, {
      signInFlow: "popup",
      credentialHelper: v174.auth.CredentialHelper.NONE,
      signInOptions: r,
      callbacks: {
        signInSuccessWithAuthResult: (i) => {
          n(i.user);
          return !!i.user;
        },
      },
      tosUrl: "/terms",
      privacyPolicyUrl: "/privacy-policy.html",
    });
  });
}
async function f623() {
  const e = v173.auth();
  return await f596(e);
}
async function f624(e) {
  const t = v173.auth();
  t.languageCode = f600("Google", e);
  const n = f630("Google");
  return await f597(t, n);
}
async function f625() {
  try {
    await v173.auth().signOut();
  } catch {}
}
async function f626() {
  v173 = (await vF4(() => import("./index.esm-v349.js"), vF([0, 1]))).default;
  await vF4(() => import("./index.esm-v3493.js"), vF([2, 1]));
  await vF4(() => import("./index.esm-v3492.js"), vF([3, 1]));
  v174 = await vF4(() => import("./esm-v349.js"), vF([4, 0, 1, 2, 5]));
}
function f627(e) {
  if (f628()) {
    return;
  }
  const t = {
    apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g",
    authDomain: "wheel-of-names-firebase.firebaseapp.com",
    databaseURL: "https://wheel-of-names-firebase.firebaseio.com",
    projectId: "wheel-of-names-firebase",
    timestampsInSnapshots: true,
  };
  e.initializeApp(t);
}
function f628() {
  return v173.apps && v173.apps.length > 0;
}
function f629(e) {
  const t = e.firestore();
  try {
    t.enablePersistence({
      synchronizeTabs: true,
    });
  } catch {}
}
function f630(e) {
  const t = {
    google: new v173.auth.GoogleAuthProvider(),
    facebook: new v173.auth.FacebookAuthProvider(),
    twitter: new v173.auth.TwitterAuthProvider(),
  };
  return t[e.toLowerCase()] || t.google;
}
function f631() {
  if (document.querySelector("#firebaseui-auth-css-link")) {
    return;
  }
  const t = document.querySelector("head");
  const n = document.createElement("link");
  n.id = "firebaseui-auth-css-link";
  n.rel = "stylesheet";
  n.type = "text/css";
  n.href = "https://www.gstatic.com/firebasejs/ui/6.1.0/firebase-ui-auth.css";
  n.media = "all";
  t?.appendChild(n);
}
async function f632(e, t) {
  return (await f651("GET", `api/v2/admin/wheels/${t}`, e)).data;
}
async function f633(e, t, n) {
  let r = `api/v2/admin/users/${e}/wheels`;
  if (n && n.length > 0) {
    r += `?fields=${n}`;
  }
  return (await f651("GET", r, t)).data.wheels;
}
async function f634(e, t) {
  return (await f651("GET", `api/v2/admin/users/${t}`, e)).data;
}
async function f635(e) {
  return (await f651("GET", "api/v2/admin/review-queue", e)).data;
}
async function f636(e, t) {
  return (
    await f651("POST", "api/v2/admin/translate", e, {
      texts: t,
    })
  ).data.translations;
}
async function f637(e) {
  try {
    return (await f651("GET", "api/v2/admin", e)).data.isAdmin;
  } catch {
    return false;
  }
}
async function f638(e, t, n) {
  await f651("PUT", "api/v2/admin/administrators", e, {
    uid: t,
    totalReviews: n,
  });
}
async function f639(e, t, n) {
  await f651("PUT", "api/v2/admin/administrators", e, {
    uid: t,
    sessionReviews: n,
  });
}
async function f640(e) {
  return (await f651("GET", "api/v2/admin/dirty-words", e)).data.dirtyWords;
}
async function f641(e, t) {
  await f651("PUT", "api/v2/admin/dirty-words", e, {
    dirtyWords: t,
  });
}
async function f642(e) {
  return (await f651("GET", "api/v2/admin/administrators", e)).data
    .administrators;
}
async function f643(e, t, n) {
  await f651("POST", "api/v2/admin/administrators", e, {
    uid: t,
    name: n,
  });
}
async function f644(e, t) {
  await f651("DELETE", "api/v2/admin/administrators", e, {
    uid: t,
  });
}
async function f645(e, t) {
  const n = `api/v2/admin/wheels/${t}`;
  await f651("PUT", n, e, {
    shareMode: "copyable",
  });
}
async function f646(e, t) {
  await f651("DELETE", `api/v2/admin/wheels/${t}`, e);
}
async function f647(e) {
  return (await f651("GET", "api/v2/admin/review-queue/next-shared-wheel", e))
    .data.wheel;
}
async function f648(e) {
  return (await f651("GET", "api/v2/admin/review-queue/next-gallery-wheel", e))
    .data.wheel;
}
async function f649(e, t) {
  const n = `api/v2/admin/review-queue/approve/${t}`;
  await f651("POST", n, e);
}
async function f650(e, t) {
  await f651("POST", `api/v2/admin/review-queue/reject/${t}`, e);
}
async function f651(e, t, n, r) {
  return await f591(e, t, n, r);
}
const vF497 = f497("wheel", {
  state: () => ({
    wheelConfig: new C16(),
    sheetLinked: false,
    wheelIsBusy: false,
    winnerEntry: {},
    winners: [],
    path: "",
    shareMode: null,
    previousWheelConfig: "",
  }),
  getters: {
    wheelType: (e) => e.wheelConfig.type,
    entries: (e) => e.wheelConfig.entries,
    entryCount: (e) => e.wheelConfig.entries.length,
    winnerIndex: (e) =>
      e.wheelConfig.entries.findIndex((t) => t.id === e.winnerEntry.id),
    enabledColors: (e) => e.wheelConfig.colorSettings.filter((t) => t.enabled),
    wheelIsShared: (e) => !!e.shareMode && f515(e.shareMode),
    wheelIsCopyable: (e) => !!e.shareMode && e.shareMode !== "spin-only",
    wheelIsAdvanced: (e) => e.wheelConfig.isAdvanced,
    wheelTitle: (e) => e.wheelConfig.title,
    wheelDescription: (e) => e.wheelConfig.description,
    showTitle: (e) => e.wheelConfig.showTitle,
    hubSize: (e) => e.wheelConfig.hubSize,
  },
  actions: {
    setWheelConfig(e) {
      this.wheelConfig = new C16(e);
      this.persistWheelConfig();
    },
    setWheelConfigNoPersist(e) {
      this.wheelConfig = new C16(e);
    },
    saveWheelConfigForUndo() {
      this.previousWheelConfig = this.wheelConfig.getJson();
    },
    undoWheelConfigChange() {
      this.setWheelConfig(new C16(JSON.parse(this.previousWheelConfig)));
    },
    persistWheelConfig() {
      if (!this.wheelIsShared) {
        try {
          localStorage.setItem("LastWheelConfig", this.wheelConfig.getJson());
        } catch {
          console.error("Error saving wheel config to local storage");
        }
      }
    },
    setGrayEmptyWheel() {
      const e = new C16();
      e.entries = f509([
        {
          text: " ",
        },
      ]);
      e.setColorValues(["#BBBBBB"]);
      this.setWheelConfigNoPersist(e);
    },
    setWheelTitle(e) {
      this.wheelConfig.title = e;
      this.persistWheelConfig();
    },
    setWheelDescription(e) {
      this.wheelConfig.description = e;
      this.persistWheelConfig();
    },
    setShowTitle(e) {
      this.wheelConfig.showTitle = e;
      this.persistWheelConfig();
    },
    setEntries(e) {
      this.wheelConfig.entries = f509(e);
      this.persistWheelConfig();
    },
    setEntriesNoPersist(e) {
      this.wheelConfig.entries = f509(e);
    },
    shuffleEntries() {
      this.wheelConfig.entries = f505(this.wheelConfig.entries);
      this.persistWheelConfig();
    },
    sortEntries() {
      this.wheelConfig.entries = f506(f49(this.wheelConfig.entries));
      this.persistWheelConfig();
    },
    addEntry(e) {
      this.wheelConfig.entries.push({
        ...e,
        id: f508(),
      });
      this.persistWheelConfig();
    },
    setEntryText(e, t) {
      const n = this.wheelConfig.entries.at(e);
      if (n) {
        n.text = t;
        this.persistWheelConfig();
      }
    },
    setEntryColor(e, t) {
      const n = this.wheelConfig.entries.at(e);
      if (n) {
        if (t) {
          n.color = t;
        } else {
          delete n.color;
        }
        this.persistWheelConfig();
      }
    },
    setEntrySound(e, t) {
      const n = this.wheelConfig.entries.at(e);
      if (n) {
        if (t) {
          n.sound = t;
        } else {
          delete n.sound;
        }
        this.persistWheelConfig();
      }
    },
    setEntryMessage(e, t) {
      const n = this.wheelConfig.entries.at(e);
      if (n) {
        if (t) {
          n.message = t;
        } else {
          delete n.message;
        }
        this.persistWheelConfig();
      }
    },
    setEntryEnabled(e, t) {
      const n = this.wheelConfig.entries.at(e);
      if (n) {
        n.enabled = t;
        this.persistWheelConfig();
      }
    },
    setEntryWeight(e, t) {
      if (this.wheelConfig.entries[e]) {
        this.wheelConfig.entries[e].weight = t;
        this.persistWheelConfig();
      }
    },
    refreshEntries() {
      this.wheelConfig.entries = f509(this.wheelConfig.entries);
      this.persistWheelConfig();
    },
    setTextEntries(e) {
      this.wheelConfig.entries = f509(
        e.map((t) => ({
          text: t,
        }))
      );
      this.persistWheelConfig();
    },
    addTextEntries(e) {
      this.wheelConfig.entries = f509([
        ...this.wheelConfig.entries,
        ...e.map((t) => ({
          text: t,
        })),
      ]);
      this.persistWheelConfig();
    },
    removeTextEntries(e) {
      this.wheelConfig.entries = this.wheelConfig.entries.filter(
        (t) => t.text && !e.includes(t.text)
      );
      this.persistWheelConfig();
    },
    removeEntryByIndex(e) {
      this.wheelConfig.entries.splice(e, 1);
      this.persistWheelConfig();
      this.sheetLinked = false;
    },
    removeEntry(e) {
      this.wheelConfig.entries = this.wheelConfig.entries.filter(
        (t) => t.id !== e.id
      );
      this.persistWheelConfig();
      this.sheetLinked = false;
    },
    removeEntryAll(e) {
      this.wheelConfig.entries = this.wheelConfig.entries.filter(
        (t) => !t.text || t.text.trim() !== e.text?.trim()
      );
      this.persistWheelConfig();
      this.sheetLinked = false;
    },
    hideEntry(e) {
      const t = this.wheelConfig.entries.find((n) => n.id === e.id);
      if (t) {
        t.enabled = false;
        this.persistWheelConfig();
      }
    },
    moveEntry(e, t) {
      const n = e + t;
      const r = this.wheelConfig.entries;
      if (!(n < 0) && !(n >= r.length)) {
        [r[e], r[n]] = [r[n], r[e]];
        this.persistWheelConfig();
      }
    },
    duplicateEntry(e) {
      const n = {
        ...this.wheelConfig.entries.at(e),
        id: f508(),
      };
      this.wheelConfig.entries.splice(e + 1, 0, n);
      this.persistWheelConfig();
    },
    setColorValues(e) {
      this.wheelConfig.setColorValues(e);
      this.persistWheelConfig();
    },
    setHubSize(e) {
      this.wheelConfig.hubSize = e;
      this.persistWheelConfig();
    },
    setUploadedCenterImage(e, t) {
      this.wheelConfig.type = "color";
      this.wheelConfig.setUploadedCenterImage(e, t);
      this.persistWheelConfig();
    },
    setUploadedBackgroundImage(e, t) {
      this.wheelConfig.type = "image";
      this.wheelConfig.setUploadedBackgroundImage(e, t);
      this.persistWheelConfig();
    },
    setGalleryBackgroundImage(e) {
      this.wheelConfig.type = "image";
      this.wheelConfig.setGalleryBackgroundImage(e);
      this.persistWheelConfig();
    },
    setGalleryCenterImage(e) {
      this.wheelConfig.type = "color";
      this.wheelConfig.setGalleryCenterImage(e);
      this.persistWheelConfig();
    },
    removeImageFromEntry(e) {
      const t = this.wheelConfig.entries.at(e);
      if (t) {
        delete t.image;
        this.persistWheelConfig();
      }
    },
    setWheelBusy(e) {
      this.wheelIsBusy = e;
    },
    linkSheet() {
      this.sheetLinked = true;
    },
    unlinkSheet() {
      this.sheetLinked = false;
    },
    setPath(e) {
      this.path = e;
    },
    setUnshared() {
      this.path = "";
      this.shareMode = null;
    },
    setShareMode(e) {
      this.shareMode = e;
    },
    addWinner(e) {
      this.winnerEntry = e;
      this.winners.push(e);
    },
    sortWinners() {
      this.winners = f506(this.winners);
    },
    clearWinners() {
      this.winners = [];
    },
    setVolumes(e, t) {
      this.wheelConfig.duringSpinSoundVolume = e;
      this.wheelConfig.afterSpinSoundVolume = t;
      this.persistWheelConfig();
    },
    loadInitialEditableWheel() {
      this.setWheelConfig(
        JSON.parse(localStorage.getItem("LastWheelConfig") || "{}")
      );
    },
    setSharedWheel(e) {
      this.setPath(e.path);
      this.setShareMode(e.shareMode);
      this.setWheelConfigNoPersist(e.wheelConfig);
    },
    resetWheel() {
      this.unlinkSheet();
      this.setWheelConfig(new C16());
      this.clearWinners();
    },
    async addImageEntry(e) {
      let t;
      if (this.wheelConfig.isAdvanced) {
        const n = await f525(e);
        if (f526(n)) {
          t = {
            image: e,
            weight: 1,
            enabled: true,
          };
        } else {
          t = {
            image: e,
            color: f522(n).slice(0, 7),
            weight: 1,
            enabled: true,
          };
        }
      } else {
        t = {
          image: e,
        };
      }
      t.id = f508();
      this.wheelConfig.entries.push(t);
      this.persistWheelConfig();
    },
    async addImageToEntry(e, t) {
      const n = this.wheelConfig.entries.at(t);
      if (n) {
        const r = await f525(e);
        if (!f526(r)) {
          n.color = f522(r).slice(0, 7);
        }
        n.image = e;
        this.persistWheelConfig();
      }
    },
    async setAdvanced(e) {
      this.wheelConfig.isAdvanced = e;
      if (e) {
        for (const t of this.wheelConfig.entries) {
          if (t.image) {
            const n = await f525(t.image);
            if (!f526(n)) {
              t.color = f522(n).slice(0, 7);
            }
          }
          t.weight = 1;
          t.enabled = true;
        }
      } else {
        for (const t of this.wheelConfig.entries) {
          delete t.color;
          delete t.weight;
          delete t.enabled;
          delete t.sound;
          delete t.message;
        }
        this.wheelConfig.entries = this.wheelConfig.entries.filter(
          (t) => t.text || t.image
        );
      }
      this.persistWheelConfig();
    },
  },
});
const vVVF136 = vVF136(() => f488());
const vF947 = f94({
  __name: "App",
  setup(e) {
    document.querySelector("#preload-static-content")?.remove();
    const t = f334();
    const { t: n, locale: r } = f457();
    const i = vF497();
    const s = M(() =>
      t.path.includes("faq")
        ? "FAQ"
        : t.path.includes("reviews")
        ? "Reviews & tutorials"
        : t.path.includes("classroom")
        ? "Classroom"
        : t.path.includes("privacy")
        ? "Privacy policy"
        : t.path.includes("changelog")
        ? "Changelog"
        : t.path.includes("export")
        ? "Export"
        : t.path.includes("admin")
        ? "Admin"
        : t.path.includes("gallery")
        ? n("toolbar.Gallery")
        : i.wheelConfig.title
        ? i.wheelConfig.title
        : `Wheel of Names | ${n("app.Random name picker")}`
    );
    f485(s);
    const o = M(() => i.wheelConfig);
    const a = M(
      () =>
        ![
          "faq",
          "reviews",
          "classroom",
          "privacy",
          "changelog",
          "admin",
          "gallery",
          "api-doc",
        ].find((d) => t.path.includes(d))
    );
    f150(
      () => o.value.pageBackgroundColor,
      () => {
        l(o.value.pageBackgroundColor);
      }
    );
    f150(
      () => t.path,
      () => {
        l(o.value.pageBackgroundColor);
      }
    );
    function l(f) {
      if (a.value && f.toLowerCase() !== "#ffffff") {
        document.body.style.backgroundColor = f;
      } else {
        document.body.style.removeProperty("background-color");
      }
    }
    f150(
      () => t.path,
      () => {
        c();
        u();
      },
      {
        immediate: true,
      }
    );
    f150(
      () => r.value,
      () => {
        c();
        u();
      }
    );
    function c() {
      let f = "en";
      if (a.value) {
        f = r.value;
      }
      document.documentElement.setAttribute("lang", f);
    }
    function u() {
      let f = "";
      if (a.value) {
        f = n("app.Free and easy to use");
      }
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", f);
    }
    return (f, d) => {
      const h = f106("router-view");
      f163();
      return f168(h);
    };
  },
});
function f652(e) {
  return e;
}
const vA27 = [
  {
    path: "/faq/:section?",
    component: () =>
      vF4(
        () => import("./FaqPage-v349.js"),
        vF([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21])
      ),
  },
  {
    path: "/user-reviews-and-tutorials",
    component: () =>
      vF4(
        () => import("./TutorialsPage-v349.js"),
        vF([22, 7, 8, 23, 24, 10, 16, 17, 12, 18, 14, 19])
      ),
  },
  {
    path: "/how-to-use-in-the-classroom",
    component: () =>
      vF4(
        () => import("./ClassroomPage-v349.js"),
        vF([25, 7, 8, 23, 24, 10, 16, 17, 12, 18, 14, 19])
      ),
  },
  {
    path: "/privacy-policy",
    alias: "/privacy-policy.html",
    component: () =>
      vF4(
        () => import("./PrivacyPolicyPage-v349.js"),
        vF([26, 7, 8, 20, 27, 10, 16, 17, 12, 18, 14, 19, 28])
      ),
  },
  {
    path: "/terms",
    component: () =>
      vF4(
        () => import("./TermsOfServicePage-v349.js"),
        vF([29, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
      ),
  },
  {
    path: "/changelog",
    component: () =>
      vF4(
        () => import("./ChangelogPage-v349.js"),
        vF([30, 7, 8, 10, 16, 17, 12, 18, 14, 19, 27, 31])
      ),
  },
  {
    path: "/gallery",
    component: () =>
      vF4(
        () => import("./GalleryPage-v349.js"),
        vF([
          32, 33, 7, 8, 9, 10, 16, 17, 12, 18, 14, 19, 34, 35, 36, 37, 13, 38,
          39,
        ])
      ),
  },
  {
    path: "/api-doc",
    component: () =>
      vF4(
        () => import("./ApiPage-v349.js"),
        vF([40, 7, 8, 9, 10, 41, 14, 13, 42, 38, 16, 17, 12, 18, 19, 43])
      ),
  },
  {
    path: "/:lang([a-z][a-z][a-z]?|[a-z][a-z]-[A-Z][A-Z])?",
    children: [
      {
        path: "",
        component: () =>
          vF4(
            () => import("./EditWheelPage-v349.js"),
            vF([
              44, 33, 7, 8, 10, 12, 11, 13, 14, 15, 42, 17, 35, 36, 37, 45, 46,
              47, 5, 48, 49, 38, 50, 51, 52, 53, 27, 54, 24, 20, 41, 55, 56,
            ])
          ),
      },
      {
        path: "noads",
        component: () =>
          vF4(
            () => import("./EditWheelPage-v349.js"),
            vF([
              44, 33, 7, 8, 10, 12, 11, 13, 14, 15, 42, 17, 35, 36, 37, 45, 46,
              47, 5, 48, 49, 38, 50, 51, 52, 53, 27, 54, 24, 20, 41, 55, 56,
            ])
          ),
      },
      {
        path: ":sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
        alias: "view/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
        component: () =>
          vF4(
            () => import("./SharedWheelPage-v349.js"),
            vF([
              57, 33, 10, 8, 12, 42, 13, 47, 14, 5, 48, 49, 38, 46, 50, 55, 58,
            ])
          ),
      },
      {
        path: "gallery",
        component: () =>
          vF4(
            () => import("./GalleryPage-v349.js"),
            vF([
              32, 33, 7, 8, 9, 10, 16, 17, 12, 18, 14, 19, 34, 35, 36, 37, 13,
              38, 39,
            ])
          ),
      },
    ],
  },
  {
    path: "/view/:lang([a-z][a-z][a-z]?|[a-z][a-z]-[A-Z][A-Z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)?",
    component: () =>
      vF4(
        () => import("./SharedWheelPage-v349.js"),
        vF([57, 33, 10, 8, 12, 42, 13, 47, 14, 5, 48, 49, 38, 46, 50, 55, 58])
      ),
  },
  {
    path: "/export",
    component: () =>
      vF4(
        () => import("./ExportPage-v349.js"),
        vF([59, 7, 8, 9, 10, 42, 13, 16, 17, 12, 18, 14, 19, 60])
      ),
  },
  {
    path: "/translations",
    component: () =>
      vF4(
        () => import("./TranslationPage-v349.js"),
        vF([61, 7, 8, 27, 10, 16, 17, 12, 18, 14, 19, 41])
      ),
  },
  {
    path: "/migrate-account",
    component: () =>
      vF4(
        () => import("./MigrateAccountPage-v349.js"),
        vF([62, 7, 8, 13, 42, 38, 11, 12, 14, 15, 16, 17, 18, 19, 51, 63])
      ),
  },
  {
    path: "/admin",
    meta: {
      adminOnly: true,
    },
    children: [
      {
        path: "",
        component: () =>
          vF4(
            () => import("./AdminPage-v349.js"),
            vF([64, 65, 35, 7, 8, 9, 10, 18, 12, 54, 24, 14, 66])
          ),
      },
      {
        path: "review",
        component: () =>
          vF4(
            () => import("./ReviewWheelPage-v349.js"),
            vF([
              67, 65, 35, 45, 37, 7, 8, 27, 9, 10, 12, 13, 47, 14, 5, 48, 18,
              46, 38, 68,
            ])
          ),
      },
      {
        path: "gallery",
        component: () =>
          vF4(
            () => import("./GalleryReviewPage-v349.js"),
            vF([69, 65, 7, 8, 9, 10, 34, 35, 36, 37, 14, 13, 38, 39, 70])
          ),
      },
      {
        path: "user",
        component: () =>
          vF4(
            () => import("./AdminUserPage-v349.js"),
            vF([71, 27, 38, 52, 42, 13, 14, 53, 47, 12, 5, 48])
          ),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => vF4(() => import("./Error404-v349.js"), []),
  },
];
const vF141 = () => {
  const t = f327({
    scrollBehavior: (n) =>
      n.hash
        ? {
            el: n.hash,
            top: 50,
          }
        : {
            top: 0,
          },
    routes: vA27,
    history: f294("/"),
  });
  t.beforeEach(async (n, r, i) => {
    if (n.matched[0]?.meta.adminOnly) {
      await f616();
      const o = await f619();
      if (await f637(o)) {
        i();
      } else {
        alert("Please log in as an admin user.");
        i(false);
      }
    } else {
      i();
    }
  });
  t.onError((n) => {
    f570("RouterError", n);
    if (
      confirm(`An update is available. Do you want to reload?

If reloading does not fix the issue, try using https://old.wheelofnames.com.`)
    ) {
      window.location.reload();
    }
  });
  return t;
};
async function f653(e, t) {
  const n = e(vF947);
  n.use(vO35, t);
  const r = typeof vVVF136 == "function" ? await vVVF136({}) : vVVF136;
  n.use(r);
  const i = f50(
    typeof vF141 == "function"
      ? await vF141({
          store: r,
        })
      : vF141
  );
  r.use(({ store: s }) => {
    s.router = i;
  });
  return {
    app: n,
    store: r,
    router: i,
  };
}
const vO48 = {
  name: "fontawesome-v6",
  type: {
    positive: "fas fa-check",
    negative: "fas fa-triangle-exclamation",
    info: "fas fa-circle-info",
    warning: "fas fa-exclamation",
  },
  arrow: {
    up: "fas fa-arrow-up",
    right: "fas fa-arrow-right",
    down: "fas fa-arrow-down",
    left: "fas fa-arrow-left",
    dropdown: "fas fa-caret-down",
  },
  chevron: {
    left: "fas fa-chevron-left",
    right: "fas fa-chevron-right",
  },
  colorPicker: {
    spectrum: "fas fa-eye-dropper",
    tune: "fas fa-sliders",
    palette: "fas fa-swatchbook",
  },
  pullToRefresh: {
    icon: "fas fa-rotate",
  },
  carousel: {
    left: "fas fa-chevron-left",
    right: "fas fa-chevron-right",
    up: "fas fa-chevron-up",
    down: "fas fa-chevron-down",
    navigationIcon: "fas fa-circle",
  },
  chip: {
    remove: "fas fa-circle-xmark",
    selected: "fas fa-check",
  },
  datetime: {
    arrowLeft: "fas fa-chevron-left",
    arrowRight: "fas fa-chevron-right",
    now: "far fa-clock",
    today: "far fa-calendar-check",
  },
  editor: {
    bold: "fas fa-bold",
    italic: "fas fa-italic",
    strikethrough: "fas fa-strikethrough",
    underline: "fas fa-underline",
    unorderedList: "fas fa-list-ul",
    orderedList: "fas fa-list-ol",
    subscript: "fas fa-subscript",
    superscript: "fas fa-superscript",
    hyperlink: "fas fa-link",
    toggleFullscreen: "fas fa-maximize",
    quote: "fas fa-quote-right",
    left: "fas fa-align-left",
    center: "fas fa-align-center",
    right: "fas fa-align-right",
    justify: "fas fa-align-justify",
    print: "fas fa-print",
    outdent: "fas fa-outdent",
    indent: "fas fa-indent",
    removeFormat: "fas fa-eraser",
    formatting: "fas fa-heading",
    fontSize: "fas fa-text-height",
    align: "fas fa-align-left",
    hr: "far fa-square-minus",
    undo: "fas fa-rotate-left",
    redo: "fas fa-rotate-right",
    heading: "fas fa-heading",
    code: "fas fa-code",
    size: "fas fa-text-height",
    font: "fas fa-font",
    viewSource: "fas fa-code",
  },
  expansionItem: {
    icon: "fas fa-chevron-down",
    denseIcon: "fas fa-caret-down",
  },
  fab: {
    icon: "fas fa-plus",
    activeIcon: "fas fa-xmark",
  },
  field: {
    clear: "fas fa-circle-xmark",
    error: "fas fa-circle-exclamation",
  },
  pagination: {
    first: "fas fa-backward-step",
    prev: "fas fa-chevron-left",
    next: "fas fa-chevron-right",
    last: "fas fa-forward-step",
  },
  rating: {
    icon: "fas fa-star",
  },
  stepper: {
    done: "fas fa-check",
    active: "fas fa-pencil",
    error: "fas fa-triangle-exclamation",
  },
  tabs: {
    left: "fas fa-chevron-left",
    right: "fas fa-chevron-right",
    up: "fas fa-chevron-up",
    down: "fas fa-chevron-down",
  },
  table: {
    arrowUp: "fas fa-arrow-up",
    warning: "fas fa-triangle-exclamation",
    firstPage: "fas fa-backward-step",
    prevPage: "fas fa-chevron-left",
    nextPage: "fas fa-chevron-right",
    lastPage: "fas fa-forward-step",
  },
  tree: {
    icon: "fas fa-play",
  },
  uploader: {
    done: "fas fa-check",
    clear: "fas fa-xmark",
    add: "fas fa-square-plus",
    upload: "fas fa-upload",
    removeQueue: "fas fa-bars-staggered",
    removeUploaded: "fas fa-clipboard-check",
  },
};
function f654(e, t, n) {
  let r;
  function i() {
    if (r !== undefined) {
      vO31.remove(r);
      r = undefined;
    }
  }
  vVF495(() => {
    if (e.value === true) {
      i();
    }
  });
  return {
    removeFromHistory: i,
    addToHistory() {
      r = {
        condition: () => n.value === true,
        handler: t,
      };
      vO31.add(r);
    },
  };
}
function f655(e) {
  if (Object(e.$parent) === e.$parent) {
    return e.$parent;
  }
  let { parent: t } = e.$;
  while (Object(t) === t) {
    if (Object(t.proxy) === t.proxy) {
      return t.proxy;
    }
    t = t.parent;
  }
}
function f656(e, t) {
  if (typeof t.type == "symbol") {
    if (Array.isArray(t.children) === true) {
      t.children.forEach((n) => {
        f656(e, n);
      });
    }
  } else {
    e.add(t);
  }
}
function f657(e) {
  const t = new Set();
  e.forEach((n) => {
    f656(t, n);
  });
  return Array.from(t);
}
function f658(e) {
  return e.appContext.config.globalProperties.$router !== undefined;
}
function f659(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
function f660() {
  let e = null;
  const t = vF79();
  function n() {
    if (e !== null) {
      clearTimeout(e);
      e = null;
    }
  }
  f99(n);
  vVF495(n);
  return {
    removeTimeout: n,
    registerTimeout(r, i) {
      n();
      if (f659(t) === false) {
        e = setTimeout(() => {
          e = null;
          r();
        }, i);
      }
    },
  };
}
function f661() {
  let e;
  const t = vF79();
  function n() {
    e = undefined;
  }
  f99(n);
  vVF495(n);
  return {
    removeTick: n,
    registerTick(r) {
      e = r;
      f70(() => {
        if (e === r) {
          if (f659(t) === false) {
            e();
          }
          e = undefined;
        }
      });
    },
  };
}
const vO49 = {
  modelValue: {
    type: Boolean,
    default: null,
  },
  "onUpdate:modelValue": [Function, Array],
};
const vA28 = ["beforeShow", "show", "beforeHide", "hide"];
function f662({
  showing: e,
  canShow: t,
  hideOnRouteChange: n,
  handleShow: r,
  handleHide: i,
  processOnMount: s,
}) {
  const o = vF79();
  const { props: a, emit: l, proxy: c } = o;
  let u;
  function f(m) {
    if (e.value === true) {
      p(m);
    } else {
      d(m);
    }
  }
  function d(m) {
    if (
      a.disable === true ||
      m?.qAnchorHandled === true ||
      (t !== undefined && t(m) !== true)
    ) {
      return;
    }
    const C = a["onUpdate:modelValue"] !== undefined;
    if (C === true) {
      l("update:modelValue", true);
      u = m;
      f70(() => {
        if (u === m) {
          u = undefined;
        }
      });
    }
    if (a.modelValue === null || C === false) {
      h(m);
    }
  }
  function h(m) {
    if (e.value !== true) {
      e.value = true;
      l("beforeShow", m);
      if (r !== undefined) {
        r(m);
      } else {
        l("show", m);
      }
    }
  }
  function p(m) {
    if (a.disable === true) {
      return;
    }
    const C = a["onUpdate:modelValue"] !== undefined;
    if (C === true) {
      l("update:modelValue", false);
      u = m;
      f70(() => {
        if (u === m) {
          u = undefined;
        }
      });
    }
    if (a.modelValue === null || C === false) {
      E(m);
    }
  }
  function E(m) {
    if (e.value !== false) {
      e.value = false;
      l("beforeHide", m);
      if (i !== undefined) {
        i(m);
      } else {
        l("hide", m);
      }
    }
  }
  function A(m) {
    if (a.disable === true && m === true) {
      if (a["onUpdate:modelValue"] !== undefined) {
        l("update:modelValue", false);
      }
    } else if ((m === true) !== e.value) {
      (m === true ? h : E)(u);
    }
  }
  f150(() => a.modelValue, A);
  if (n !== undefined && f658(o) === true) {
    f150(
      () => c.$route.fullPath,
      () => {
        if (n.value === true && e.value === true) {
          p();
        }
      }
    );
  }
  if (s === true) {
    vVF492(() => {
      A(a.modelValue);
    });
  }
  const b = {
    show: d,
    hide: p,
    toggle: f,
  };
  Object.assign(c, b);
  return b;
}
const vO50 = {
  transitionShow: {
    type: String,
    default: "fade",
  },
  transitionHide: {
    type: String,
    default: "fade",
  },
  transitionDuration: {
    type: [String, Number],
    default: 300,
  },
};
function f663(e, t = () => {}, n = () => {}) {
  return {
    transitionProps: M(() => {
      const r = `q-transition--${e.transitionShow || t()}`;
      const i = `q-transition--${e.transitionHide || n()}`;
      return {
        appear: true,
        enterFromClass: `${r}-enter-from`,
        enterActiveClass: `${r}-enter-active`,
        enterToClass: `${r}-enter-to`,
        leaveFromClass: `${i}-leave-from`,
        leaveActiveClass: `${i}-leave-active`,
        leaveToClass: `${i}-leave-to`,
      };
    }),
    transitionStyle: M(
      () => `--q-transition-duration: ${e.transitionDuration}ms`
    ),
  };
}
let vA29 = [];
let vA30 = [];
function f664(e) {
  vA30 = vA30.filter((t) => t !== e);
}
function f665(e) {
  f664(e);
  vA30.push(e);
}
function f666(e) {
  f664(e);
  if (vA30.length === 0 && vA29.length !== 0) {
    vA29[vA29.length - 1]();
    vA29 = [];
  }
}
function f667(e) {
  if (vA30.length === 0) {
    e();
  } else {
    vA29.push(e);
  }
}
function f668(e) {
  vA29 = vA29.filter((t) => t !== e);
}
const vA31 = [];
const vA32 = [];
let vLN12 = 1;
let v176 = document.body;
function f669(e, t) {
  const n = document.createElement("div");
  n.id = t !== undefined ? `q-portal--${t}--${vLN12++}` : e;
  if (vO34.globalNodes !== undefined) {
    const r = vO34.globalNodes.class;
    if (r !== undefined) {
      n.className = r;
    }
  }
  v176.appendChild(n);
  vA31.push(n);
  vA32.push(t);
  return n;
}
function f670(e) {
  const t = vA31.indexOf(e);
  vA31.splice(t, 1);
  vA32.splice(t, 1);
  e.remove();
}
function f671(e) {
  if (e === v176) {
    return;
  }
  v176 = e;
  if (
    v176 === document.body ||
    vA32.reduce((n, r) => (r === "dialog" ? n + 1 : n), 0) < 2
  ) {
    vA31.forEach((n) => {
      if (n.contains(v176) === false) {
        v176.appendChild(n);
      }
    });
    return;
  }
  const t = vA32.lastIndexOf("dialog");
  for (let n = 0; n < vA31.length; n++) {
    const r = vA31[n];
    if ((n === t || vA32[n] !== "dialog") && r.contains(v176) === false) {
      v176.appendChild(r);
    }
  }
}
const vA33 = [];
function f672(e) {
  return vA33.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function f673(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      e.hide(t);
      if (e.$props.separateClosePopup === true) {
        return f655(e);
      }
    } else if (e.__qPortal === true) {
      const n = f655(e);
      if (n?.$options.name === "QPopupProxy") {
        e.hide(t);
        return n;
      } else {
        return e;
      }
    }
    e = f655(e);
  } while (e != null);
}
function f674(e, t, n) {
  while (n !== 0 && e !== undefined && e !== null) {
    if (e.__qPortal === true) {
      n--;
      if (e.$options.name === "QMenu") {
        e = f673(e, t);
        continue;
      }
      e.hide(t);
    }
    e = f655(e);
  }
}
const vF231 = f231({
  name: "QPortal",
  setup(e, { slots: t }) {
    return () => t.default();
  },
});
function f675(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") {
      return true;
    }
    if (e.type.name === "QDialog" || e.type.name === "QMenu") {
      return false;
    }
    e = e.parent;
  }
  return false;
}
function f676(e, t, n, r) {
  const i = f52(false);
  const s = f52(false);
  let o = null;
  const a = {};
  const l = r === "dialog" && f675(e);
  function c(f) {
    if (f === true) {
      f666(a);
      s.value = true;
      return;
    }
    s.value = false;
    if (i.value === false) {
      if (l === false && o === null) {
        o = f669(false, r);
      }
      i.value = true;
      vA33.push(e.proxy);
      f665(a);
    }
  }
  function u(f) {
    s.value = false;
    if (f !== true) {
      return;
    }
    f666(a);
    i.value = false;
    const d = vA33.indexOf(e.proxy);
    if (d !== -1) {
      vA33.splice(d, 1);
    }
    if (o !== null) {
      f670(o);
      o = null;
    }
  }
  vVF496(() => {
    u(true);
  });
  e.proxy.__qPortal = true;
  f227(e.proxy, "contentEl", () => t.value);
  return {
    showPortal: c,
    hidePortal: u,
    portalIsActive: i,
    portalIsAccessible: s,
    renderPortal: () =>
      l === true
        ? n()
        : i.value === true
        ? [
            q(
              vVO10,
              {
                to: o,
              },
              q(vF231, n)
            ),
          ]
        : undefined,
  };
}
function f677(e, t) {
  const n = e.style;
  for (const r in t) {
    n[r] = t[r];
  }
}
function f678(e) {
  if (e == null) {
    return;
  }
  if (typeof e == "string") {
    try {
      return document.querySelector(e) || undefined;
    } catch {
      return;
    }
  }
  const t = f55(e);
  if (t) {
    return t.$el || t;
  }
}
function f679(e, t) {
  if (e == null || e.contains(t) === true) {
    return true;
  }
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling) {
    if (n.contains(t)) {
      return true;
    }
  }
  return false;
}
const vA34 = [Element, String];
const vA35 = [
  null,
  document,
  document.body,
  document.scrollingElement,
  document.documentElement,
];
function f680(e, t) {
  let n = f678(t);
  if (n === undefined) {
    if (e == null) {
      return window;
    }
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  if (vA35.includes(n)) {
    return window;
  } else {
    return n;
  }
}
function f681(e) {
  if (e === window) {
    return window.pageYOffset || window.scrollY || document.body.scrollTop || 0;
  } else {
    return e.scrollTop;
  }
}
function f682(e) {
  if (e === window) {
    return (
      window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    );
  } else {
    return e.scrollLeft;
  }
}
function f683(e, t, n = 0) {
  const r = arguments[3] === undefined ? performance.now() : arguments[3];
  const i = f681(e);
  if (n <= 0) {
    if (i !== t) {
      f685(e, t);
    }
    return;
  }
  requestAnimationFrame((s) => {
    const o = s - r;
    const a = i + ((t - i) / Math.max(o, n)) * o;
    f685(e, a);
    if (a !== t) {
      f683(e, t, n - o, s);
    }
  });
}
function f684(e, t, n = 0) {
  const r = arguments[3] === undefined ? performance.now() : arguments[3];
  const i = f682(e);
  if (n <= 0) {
    if (i !== t) {
      f686(e, t);
    }
    return;
  }
  requestAnimationFrame((s) => {
    const o = s - r;
    const a = i + ((t - i) / Math.max(o, n)) * o;
    f686(e, a);
    if (a !== t) {
      f684(e, t, n - o, s);
    }
  });
}
function f685(e, t) {
  if (e === window) {
    window.scrollTo(
      window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
      t
    );
    return;
  }
  e.scrollTop = t;
}
function f686(e, t) {
  if (e === window) {
    window.scrollTo(
      t,
      window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    );
    return;
  }
  e.scrollLeft = t;
}
function f687(e, t, n) {
  if (n) {
    f683(e, t, n);
    return;
  }
  f685(e, t);
}
function f688(e, t, n) {
  if (n) {
    f684(e, t, n);
    return;
  }
  f686(e, t);
}
let v177;
function f689() {
  if (v177 !== undefined) {
    return v177;
  }
  const e = document.createElement("p");
  const t = document.createElement("div");
  f677(e, {
    width: "100%",
    height: "200px",
  });
  f677(t, {
    position: "absolute",
    top: "0px",
    left: "0px",
    visibility: "hidden",
    width: "200px",
    height: "150px",
    overflow: "hidden",
  });
  t.appendChild(e);
  document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let r = e.offsetWidth;
  if (n === r) {
    r = t.clientWidth;
  }
  t.remove();
  v177 = n - r;
  return v177;
}
function f690(e, t = true) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) {
    return false;
  } else if (t) {
    return (
      e.scrollHeight > e.clientHeight &&
      (e.classList.contains("scroll") ||
        e.classList.contains("overflow-auto") ||
        ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"]))
    );
  } else {
    return (
      e.scrollWidth > e.clientWidth &&
      (e.classList.contains("scroll") ||
        e.classList.contains("overflow-auto") ||
        ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]))
    );
  }
}
let vLN014 = 0;
let v178;
let v179;
let v180;
let v181 = false;
let v182;
let v183;
let v184;
let v185 = null;
function f691(e) {
  if (f692(e)) {
    f239(e);
  }
}
function f692(e) {
  if (
    e.target === document.body ||
    e.target.classList.contains("q-layout__backdrop")
  ) {
    return true;
  }
  const t = f236(e);
  const n = e.shiftKey && !e.deltaX;
  const r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY);
  const i = n || r ? e.deltaY : e.deltaX;
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    if (f690(o, r)) {
      if (r) {
        if (i < 0 && o.scrollTop === 0) {
          return true;
        } else {
          return i > 0 && o.scrollTop + o.clientHeight === o.scrollHeight;
        }
      } else if (i < 0 && o.scrollLeft === 0) {
        return true;
      } else {
        return i > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
      }
    }
  }
  return true;
}
function f693(e) {
  if (e.target === document) {
    document.scrollingElement.scrollTop = document.scrollingElement.scrollTop;
  }
}
function f694(e) {
  if (v181 !== true) {
    v181 = true;
    requestAnimationFrame(() => {
      v181 = false;
      const { height: t } = e.target;
      const { clientHeight: n, scrollTop: r } = document.scrollingElement;
      if (v180 === undefined || t !== window.innerHeight) {
        v180 = n - t;
        document.scrollingElement.scrollTop = r;
      }
      if (r > v180) {
        document.scrollingElement.scrollTop -= Math.ceil((r - v180) / 8);
      }
    });
  }
}
function f695(e) {
  const t = document.body;
  const n = window.visualViewport !== undefined;
  if (e === "add") {
    const { overflowY: r, overflowX: i } = window.getComputedStyle(t);
    v178 = f682(window);
    v179 = f681(window);
    v182 = t.style.left;
    v183 = t.style.top;
    v184 = window.location.href;
    t.style.left = `-${v178}px`;
    t.style.top = `-${v179}px`;
    if (
      i !== "hidden" &&
      (i === "scroll" || t.scrollWidth > window.innerWidth)
    ) {
      t.classList.add("q-body--force-scrollbar-x");
    }
    if (
      r !== "hidden" &&
      (r === "scroll" || t.scrollHeight > window.innerHeight)
    ) {
      t.classList.add("q-body--force-scrollbar-y");
    }
    t.classList.add("q-body--prevent-scroll");
    document.qScrollPrevented = true;
    if (vO27.is.ios === true) {
      if (n === true) {
        window.scrollTo(0, 0);
        window.visualViewport.addEventListener(
          "resize",
          f694,
          vO29.passiveCapture
        );
        window.visualViewport.addEventListener(
          "scroll",
          f694,
          vO29.passiveCapture
        );
        window.scrollTo(0, 0);
      } else {
        window.addEventListener("scroll", f693, vO29.passiveCapture);
      }
    }
  }
  if (vO27.is.desktop === true && vO27.is.mac === true) {
    window[`${e}EventListener`]("wheel", f691, vO29.notPassive);
  }
  if (e === "remove") {
    if (vO27.is.ios === true) {
      if (n === true) {
        window.visualViewport.removeEventListener(
          "resize",
          f694,
          vO29.passiveCapture
        );
        window.visualViewport.removeEventListener(
          "scroll",
          f694,
          vO29.passiveCapture
        );
      } else {
        window.removeEventListener("scroll", f693, vO29.passiveCapture);
      }
    }
    t.classList.remove("q-body--prevent-scroll");
    t.classList.remove("q-body--force-scrollbar-x");
    t.classList.remove("q-body--force-scrollbar-y");
    document.qScrollPrevented = false;
    t.style.left = v182;
    t.style.top = v183;
    if (window.location.href === v184) {
      window.scrollTo(v178, v179);
    }
    v180 = undefined;
  }
}
function f696(e) {
  let t = "add";
  if (e === true) {
    vLN014++;
    if (v185 !== null) {
      clearTimeout(v185);
      v185 = null;
      return;
    }
    if (vLN014 > 1) {
      return;
    }
  } else {
    if (vLN014 === 0 || (vLN014--, vLN014 > 0)) {
      return;
    }
    t = "remove";
    if (vO27.is.ios === true && vO27.is.nativeMobile === true) {
      if (v185 !== null) {
        clearTimeout(v185);
      }
      v185 = setTimeout(() => {
        f695(t);
        v185 = null;
      }, 100);
      return;
    }
  }
  f695(t);
}
function f697() {
  let e;
  return {
    preventBodyScroll(t) {
      if (t !== e && (e !== undefined || t === true)) {
        e = t;
        f696(t);
      }
    },
  };
}
function f698(e, t) {
  return (e !== undefined && e()) || t;
}
function f699(e, t) {
  if (e !== undefined) {
    const n = e();
    if (n != null) {
      return n.slice();
    }
  }
  return t;
}
function f700(e, t) {
  if (e !== undefined) {
    return t.concat(e());
  } else {
    return t;
  }
}
function f701(e, t) {
  if (e === undefined) {
    return t;
  } else if (t !== undefined) {
    return t.concat(e());
  } else {
    return e();
  }
}
function f702(e, t, n, r, i, s) {
  t.key = r + i;
  const o = q(e, t, n);
  if (i === true) {
    return f80(o, s());
  } else {
    return o;
  }
}
const vA36 = [];
let v186;
function f703(e) {
  v186 = e.keyCode === 27;
}
function f704() {
  if (v186 === true) {
    v186 = false;
  }
}
function f705(e) {
  if (v186 === true) {
    v186 = false;
    if (f247(e, 27) === true) {
      vA36[vA36.length - 1](e);
    }
  }
}
function f706(e) {
  window[e]("keydown", f703);
  window[e]("blur", f704);
  window[e]("keyup", f705);
  v186 = false;
}
function f707(e) {
  if (vO27.is.desktop === true) {
    vA36.push(e);
    if (vA36.length === 1) {
      f706("addEventListener");
    }
  }
}
function f708(e) {
  const t = vA36.indexOf(e);
  if (t !== -1) {
    vA36.splice(t, 1);
    if (vA36.length === 0) {
      f706("removeEventListener");
    }
  }
}
const vA37 = [];
function f709(e) {
  vA37[vA37.length - 1](e);
}
function f710(e) {
  if (vO27.is.desktop === true) {
    vA37.push(e);
    if (vA37.length === 1) {
      document.body.addEventListener("focusin", f709);
    }
  }
}
function f711(e) {
  const t = vA37.indexOf(e);
  if (t !== -1) {
    vA37.splice(t, 1);
    if (vA37.length === 0) {
      document.body.removeEventListener("focusin", f709);
    }
  }
}
let vLN015 = 0;
const vO51 = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center",
};
const vO52 = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"],
};
const vF2312 = f231({
  name: "QDialog",
  inheritAttrs: false,
  props: {
    ...vO49,
    ...vO50,
    transitionShow: String,
    transitionHide: String,
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    backdropFilter: String,
    position: {
      type: String,
      default: "standard",
      validator: (e) =>
        ["standard", "top", "bottom", "left", "right"].includes(e),
    },
  },
  emits: [...vA28, "shake", "click", "escapeKey"],
  setup(e, { slots: t, emit: n, attrs: r }) {
    const i = vF79();
    const s = f52(null);
    const o = f52(false);
    const a = f52(false);
    let l = null;
    let c = null;
    let u;
    let f;
    const d = M(
      () =>
        e.persistent !== true &&
        e.noRouteDismiss !== true &&
        e.seamless !== true
    );
    const { preventBodyScroll: h } = f697();
    const { registerTimeout: p } = f660();
    const { registerTick: E, removeTick: A } = f661();
    const { transitionProps: b, transitionStyle: m } = f663(
      e,
      () => vO52[e.position][0],
      () => vO52[e.position][1]
    );
    const C = M(
      () =>
        m.value +
        (e.backdropFilter !== undefined
          ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`
          : "")
    );
    const {
      showPortal: y,
      hidePortal: x,
      portalIsAccessible: L,
      renderPortal: I,
    } = f676(i, s, f718, "dialog");
    const { hide: B } = f662({
      showing: o,
      hideOnRouteChange: d,
      handleShow: f712,
      handleHide: J,
      processOnMount: true,
    });
    const { addToHistory: k, removeFromHistory: R } = f654(o, B, d);
    const V = M(
      () =>
        `q-dialog__inner flex no-pointer-events q-dialog__inner--${
          e.maximized === true ? "maximized" : "minimized"
        } q-dialog__inner--${e.position} ${vO51[e.position]}${
          a.value === true ? " q-dialog__inner--animating" : ""
        }${e.fullWidth === true ? " q-dialog__inner--fullwidth" : ""}${
          e.fullHeight === true ? " q-dialog__inner--fullheight" : ""
        }${e.square === true ? " q-dialog__inner--square" : ""}`
    );
    const S = M(() => o.value === true && e.seamless !== true);
    const G = M(() =>
      e.autoClose === true
        ? {
            onClick: z,
          }
        : {}
    );
    const D = M(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${
        S.value === true ? "modal" : "seamless"
      }`,
      r.class,
    ]);
    f150(
      () => e.maximized,
      (p18) => {
        if (o.value === true) {
          f715(p18);
        }
      }
    );
    f150(S, (p19) => {
      h(p19);
      if (p19 === true) {
        f710(f717);
        f707(f713);
      } else {
        f711(f717);
        f708(f713);
      }
    });
    function f712(p20) {
      k();
      c =
        e.noRefocus === false && document.activeElement !== null
          ? document.activeElement
          : null;
      f715(e.maximized);
      y();
      a.value = true;
      if (e.noFocus !== true) {
        document.activeElement?.blur();
        E(Q);
      } else {
        A();
      }
      p(() => {
        if (i.proxy.$q.platform.is.ios === true) {
          if (e.seamless !== true && document.activeElement) {
            const { top: F, bottom: Y } =
              document.activeElement.getBoundingClientRect();
            const { innerHeight: X } = window;
            const v187 =
              window.visualViewport !== undefined
                ? window.visualViewport.height
                : X;
            if (F > 0 && Y > v187 / 2) {
              document.scrollingElement.scrollTop = Math.min(
                document.scrollingElement.scrollHeight - v187,
                Y >= X
                  ? Infinity
                  : Math.ceil(
                      document.scrollingElement.scrollTop + Y - v187 / 2
                    )
              );
            }
            document.activeElement.scrollIntoView();
          }
          f = true;
          s.value.click();
          f = false;
        }
        y(true);
        a.value = false;
        n("show", p20);
      }, e.transitionDuration);
    }
    function J(p21) {
      A();
      R();
      f714(true);
      a.value = true;
      x();
      if (c !== null) {
        (
          (p21?.type.indexOf("key") === 0
            ? c.closest('[tabindex]:not([tabindex^="-"])')
            : undefined) || c
        ).focus();
        c = null;
      }
      p(() => {
        x(true);
        a.value = false;
        n("hide", p21);
      }, e.transitionDuration);
    }
    function Q(p22) {
      f667(() => {
        let F = s.value;
        if (F !== null) {
          if (p22 !== undefined) {
            const Y = F.querySelector(p22);
            if (Y !== null) {
              Y.focus({
                preventScroll: true,
              });
              return;
            }
          }
          if (F.contains(document.activeElement) !== true) {
            F =
              F.querySelector(
                "[autofocus][tabindex], [data-autofocus][tabindex]"
              ) ||
              F.querySelector(
                "[autofocus] [tabindex], [data-autofocus] [tabindex]"
              ) ||
              F.querySelector("[autofocus], [data-autofocus]") ||
              F;
            F.focus({
              preventScroll: true,
            });
          }
        }
      });
    }
    function K(p23) {
      if (p23 && typeof p23.focus == "function") {
        p23.focus({
          preventScroll: true,
        });
      } else {
        Q();
      }
      n("shake");
      const F = s.value;
      if (F !== null) {
        F.classList.remove("q-animate--scale");
        F.classList.add("q-animate--scale");
        if (l !== null) {
          clearTimeout(l);
        }
        l = setTimeout(() => {
          l = null;
          if (s.value !== null) {
            F.classList.remove("q-animate--scale");
            Q();
          }
        }, 170);
      }
    }
    function f713() {
      if (e.seamless !== true) {
        if (e.persistent === true || e.noEscDismiss === true) {
          if (e.maximized !== true && e.noShake !== true) {
            K();
          }
        } else {
          n("escapeKey");
          B();
        }
      }
    }
    function f714(p24) {
      if (l !== null) {
        clearTimeout(l);
        l = null;
      }
      if (p24 === true || o.value === true) {
        f715(false);
        if (e.seamless !== true) {
          h(false);
          f711(f717);
          f708(f713);
        }
      }
      if (p24 !== true) {
        c = null;
      }
    }
    function f715(p25) {
      if (p25 === true) {
        if (u !== true) {
          if (vLN015 < 1) {
            document.body.classList.add("q-body--dialog");
          }
          vLN015++;
          u = true;
        }
      } else if (u === true) {
        if (vLN015 < 2) {
          document.body.classList.remove("q-body--dialog");
        }
        vLN015--;
        u = false;
      }
    }
    function z(p26) {
      if (f !== true) {
        B(p26);
        n("click", p26);
      }
    }
    function f716(p27) {
      if (e.persistent !== true && e.noBackdropDismiss !== true) {
        B(p27);
      } else if (e.noShake !== true) {
        K();
      }
    }
    function f717(p28) {
      if (
        e.allowFocusOutside !== true &&
        L.value === true &&
        f679(s.value, p28.target) !== true
      ) {
        Q('[tabindex]:not([tabindex="-1"])');
      }
    }
    Object.assign(i.proxy, {
      focus: Q,
      shake: K,
      __updateRefocusTarget(p29) {
        c = p29 || null;
      },
    });
    vVF495(f714);
    function f718() {
      return q(
        "div",
        {
          role: "dialog",
          "aria-modal": S.value === true ? "true" : "false",
          ...r,
          class: D.value,
        },
        [
          q(
            vVF82,
            {
              name: "q-transition--fade",
              appear: true,
            },
            () =>
              S.value === true
                ? q("div", {
                    class: "q-dialog__backdrop fixed-full",
                    style: C.value,
                    "aria-hidden": "true",
                    tabindex: -1,
                    onClick: f716,
                  })
                : null
          ),
          q(vVF82, b.value, () =>
            o.value === true
              ? q(
                  "div",
                  {
                    ref: s,
                    class: V.value,
                    style: m.value,
                    tabindex: -1,
                    ...G.value,
                  },
                  f698(t.default)
                )
              : null
          ),
        ]
      );
    }
    return I;
  },
});
const vO53 = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46,
};
const vO54 = {
  size: String,
};
function f719(e, t = vO53) {
  return M(() =>
    e.size !== undefined
      ? {
          fontSize: e.size in t ? `${t[e.size]}px` : e.size,
        }
      : null
  );
}
const vLS002424 = "0 0 24 24";
const vF142 = (e) => e;
const vF143 = (e) => `ionicons ${e}`;
const vO55 = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": vF142,
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": vF143,
  "ion-ios": vF143,
  "ion-logo": vF143,
  "iconfont ": vF142,
  "ti-": (e) => `themify-icon ${e}`,
  "bi-": (e) => `bootstrap-icons ${e}`,
  "i-": vF142,
};
const vO56 = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp",
};
const vO57 = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp",
};
const v188 = new RegExp("^(" + Object.keys(vO55).join("|") + ")");
const v189 = new RegExp("^(" + Object.keys(vO56).join("|") + ")");
const v190 = new RegExp("^(" + Object.keys(vO57).join("|") + ")");
const v191 = /^[Mm]\s?[-+]?\.?\d/;
const v192 = /^img:/;
const v193 = /^svguse:/;
const v194 = /^ion-/;
const v195 =
  /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
const vF2313 = f231({
  name: "QIcon",
  props: {
    ...vO54,
    tag: {
      type: String,
      default: "i",
    },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean,
  },
  setup(e, { slots: t }) {
    const {
      proxy: { $q: n },
    } = vF79();
    const r = f719(e);
    const i = M(
      () =>
        "q-icon" +
        (e.left === true ? " on-left" : "") +
        (e.right === true ? " on-right" : "") +
        (e.color !== undefined ? ` text-${e.color}` : "")
    );
    const s = M(() => {
      let o;
      let a = e.name;
      if (a === "none" || !a) {
        return {
          none: true,
        };
      }
      if (n.iconMapFn !== null) {
        const u = n.iconMapFn(a);
        if (u !== undefined) {
          if (u.icon !== undefined) {
            a = u.icon;
            if (a === "none" || !a) {
              return {
                none: true,
              };
            }
          } else {
            return {
              cls: u.cls,
              content: u.content !== undefined ? u.content : " ",
            };
          }
        }
      }
      if (v191.test(a) === true) {
        const [u, f = vLS002424] = a.split("|");
        return {
          svg: true,
          viewBox: f,
          nodes: u.split("&&").map((d) => {
            const [h, p, E] = d.split("@@");
            return q("path", {
              style: p,
              d: h,
              transform: E,
            });
          }),
        };
      }
      if (v192.test(a) === true) {
        return {
          img: true,
          src: a.substring(4),
        };
      }
      if (v193.test(a) === true) {
        const [u, f = vLS002424] = a.split("|");
        return {
          svguse: true,
          src: u.substring(7),
          viewBox: f,
        };
      }
      let l = " ";
      const c = a.match(v188);
      if (c !== null) {
        o = vO55[c[1]](a);
      } else if (v195.test(a) === true) {
        o = a;
      } else if (v194.test(a) === true) {
        o = `ionicons ion-${
          n.platform.is.ios === true ? "ios" : "md"
        }${a.substring(3)}`;
      } else if (v190.test(a) === true) {
        o = "notranslate material-symbols";
        const u = a.match(v190);
        if (u !== null) {
          a = a.substring(6);
          o += vO57[u[1]];
        }
        l = a;
      } else {
        o = "notranslate material-icons";
        const u = a.match(v189);
        if (u !== null) {
          a = a.substring(2);
          o += vO56[u[1]];
        }
        l = a;
      }
      return {
        cls: o,
        content: l,
      };
    });
    return () => {
      const o = {
        class: i.value,
        style: r.value,
        "aria-hidden": "true",
      };
      if (s.value.none === true) {
        return q(e.tag, o, f698(t.default));
      } else if (s.value.img === true) {
        return q(
          e.tag,
          o,
          f700(t.default, [
            q("img", {
              src: s.value.src,
            }),
          ])
        );
      } else if (s.value.svg === true) {
        return q(
          e.tag,
          o,
          f700(t.default, [
            q(
              "svg",
              {
                viewBox: s.value.viewBox || "0 0 24 24",
              },
              s.value.nodes
            ),
          ])
        );
      } else if (s.value.svguse === true) {
        return q(
          e.tag,
          o,
          f700(t.default, [
            q(
              "svg",
              {
                viewBox: s.value.viewBox,
              },
              [
                q("use", {
                  "xlink:href": s.value.src,
                }),
              ]
            ),
          ])
        );
      } else {
        if (s.value.cls !== undefined) {
          o.class += " " + s.value.cls;
        }
        return q(e.tag, o, f700(t.default, [s.value.content]));
      }
    };
  },
});
const vO58 = {
  size: {
    type: [String, Number],
    default: "1em",
  },
  color: String,
};
function f720(e) {
  return {
    cSize: M(() => (e.size in vO53 ? `${vO53[e.size]}px` : e.size)),
    classes: M(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")),
  };
}
const vF2314 = f231({
  name: "QSpinner",
  props: {
    ...vO58,
    thickness: {
      type: Number,
      default: 5,
    },
  },
  setup(e) {
    const { cSize: t, classes: n } = f720(e);
    return () =>
      q(
        "svg",
        {
          class: n.value + " q-spinner-mat",
          width: t.value,
          height: t.value,
          viewBox: "25 25 50 50",
        },
        [
          q("circle", {
            class: "path",
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": e.thickness,
            "stroke-miterlimit": "10",
          }),
        ]
      );
  },
});
function f721(e, t = 250) {
  let n = false;
  let r;
  return function () {
    if (n === false) {
      n = true;
      setTimeout(() => {
        n = false;
      }, t);
      r = e.apply(this, arguments);
    }
    return r;
  };
}
function f722(e, t, n, r) {
  if (n.modifiers.stop === true) {
    f237(e);
  }
  const i = n.modifiers.color;
  let s = n.modifiers.center;
  s = s === true || r === true;
  const o = document.createElement("span");
  const a = document.createElement("span");
  const l = f235(e);
  const { left: c, top: u, width: f, height: d } = t.getBoundingClientRect();
  const h = Math.sqrt(f * f + d * d);
  const p = h / 2;
  const E = `${(f - h) / 2}px`;
  const A = s ? E : `${l.left - c - p}px`;
  const b = `${(d - h) / 2}px`;
  const m = s ? b : `${l.top - u - p}px`;
  a.className = "q-ripple__inner";
  f677(a, {
    height: `${h}px`,
    width: `${h}px`,
    transform: `translate3d(${A},${m},0) scale3d(.2,.2,1)`,
    opacity: 0,
  });
  o.className = `q-ripple${i ? " text-" + i : ""}`;
  o.setAttribute("dir", "ltr");
  o.appendChild(a);
  t.appendChild(o);
  const C = () => {
    o.remove();
    clearTimeout(y);
  };
  n.abort.push(C);
  let y = setTimeout(() => {
    a.classList.add("q-ripple__inner--enter");
    a.style.transform = `translate3d(${E},${b},0) scale3d(1,1,1)`;
    a.style.opacity = 0.2;
    y = setTimeout(() => {
      a.classList.remove("q-ripple__inner--enter");
      a.classList.add("q-ripple__inner--leave");
      a.style.opacity = 0;
      y = setTimeout(() => {
        o.remove();
        n.abort.splice(n.abort.indexOf(C), 1);
      }, 275);
    }, 250);
  }, 50);
}
function f723(e, { modifiers: t, value: n, arg: r }) {
  const i = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: i.early === true,
    stop: i.stop === true,
    center: i.center === true,
    color: i.color || r,
    keyCodes: [].concat(i.keyCodes || 13),
  };
}
const vF232 = f232({
  name: "ripple",
  beforeMount(e, t) {
    const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
    if (n.ripple === false) {
      return;
    }
    const r = {
      cfg: n,
      enabled: t.value !== false,
      modifiers: {},
      abort: [],
      start(i) {
        if (
          r.enabled === true &&
          i.qSkipRipple !== true &&
          i.type === (r.modifiers.early === true ? "pointerdown" : "click")
        ) {
          f722(i, e, r, i.qKeyEvent === true);
        }
      },
      keystart: f721((i) => {
        if (
          r.enabled === true &&
          i.qSkipRipple !== true &&
          f247(i, r.modifiers.keyCodes) === true &&
          i.type === `key${r.modifiers.early === true ? "down" : "up"}`
        ) {
          f722(i, e, r, true);
        }
      }, 300),
    };
    f723(r, t);
    e.__qripple = r;
    f241(r, "main", [
      [e, "pointerdown", "start", "passive"],
      [e, "click", "start", "passive"],
      [e, "keydown", "keystart", "passive"],
      [e, "keyup", "keystart", "passive"],
    ]);
  },
  updated(e, t) {
    if (t.oldValue !== t.value) {
      const n = e.__qripple;
      if (n !== undefined) {
        n.enabled = t.value !== false;
        if (n.enabled === true && Object(t.value) === t.value) {
          f723(n, t);
        }
      }
    }
  },
  beforeUnmount(e) {
    const t = e.__qripple;
    if (t !== undefined) {
      t.abort.forEach((n) => {
        n();
      });
      f242(t, "main");
      delete e._qripple;
    }
  },
});
const vO59 = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch",
};
const v196 = Object.keys(vO59);
const vO60 = {
  align: {
    type: String,
    validator: (e) => v196.includes(e),
  },
};
function f724(e) {
  return M(() => {
    const t =
      e.align === undefined
        ? e.vertical === true
          ? "stretch"
          : "left"
        : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${vO59[t]}`;
  });
}
function f725(e) {
  if (e) {
    if (e.aliasOf) {
      return e.aliasOf.path;
    } else {
      return e.path;
    }
  } else {
    return "";
  }
}
function f726(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function f727(e, t) {
  for (const n in t) {
    const r = t[n];
    const i = e[n];
    if (typeof r == "string") {
      if (r !== i) {
        return false;
      }
    } else if (
      Array.isArray(i) === false ||
      i.length !== r.length ||
      r.some((s, o) => s !== i[o])
    ) {
      return false;
    }
  }
  return true;
}
function f728(e, t) {
  if (Array.isArray(t) === true) {
    return e.length === t.length && e.every((n, r) => n === t[r]);
  } else {
    return e.length === 1 && e[0] === t;
  }
}
function f729(e, t) {
  if (Array.isArray(e) === true) {
    return f728(e, t);
  } else if (Array.isArray(t) === true) {
    return f728(t, e);
  } else {
    return e === t;
  }
}
function f730(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) {
    return false;
  }
  for (const n in e) {
    if (f729(e[n], t[n]) === false) {
      return false;
    }
  }
  return true;
}
const vO61 = {
  to: [String, Object],
  replace: Boolean,
  href: String,
  target: String,
  disable: Boolean,
};
const vO62 = {
  ...vO61,
  exact: Boolean,
  activeClass: {
    type: String,
    default: "q-router-link--active",
  },
  exactActiveClass: {
    type: String,
    default: "q-router-link--exact-active",
  },
};
function f731({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = vF79();
  const { props: r, proxy: i, emit: s } = n;
  const o = f658(n);
  const a = M(() => r.disable !== true && r.href !== undefined);
  const l = M(
    t === true
      ? () =>
          o === true &&
          r.disable !== true &&
          a.value !== true &&
          r.to !== undefined &&
          r.to !== null &&
          r.to !== ""
      : () =>
          o === true &&
          a.value !== true &&
          r.to !== undefined &&
          r.to !== null &&
          r.to !== ""
  );
  const c = M(() => (l.value === true ? m(r.to) : null));
  const u = M(() => c.value !== null);
  const f = M(() => a.value === true || u.value === true);
  const d = M(() =>
    r.type === "a" || f.value === true ? "a" : r.tag || e || "div"
  );
  const h = M(() =>
    a.value === true
      ? {
          href: r.href,
          target: r.target,
        }
      : u.value === true
      ? {
          href: c.value.href,
          target: r.target,
        }
      : {}
  );
  const p = M(() => {
    if (u.value === false) {
      return -1;
    }
    const { matched: x } = c.value;
    const { length: L } = x;
    const I = x[L - 1];
    if (I === undefined) {
      return -1;
    }
    const B = i.$route.matched;
    if (B.length === 0) {
      return -1;
    }
    const k = B.findIndex(f726.bind(null, I));
    if (k !== -1) {
      return k;
    }
    const R = f725(x[L - 2]);
    if (L > 1 && f725(I) === R && B[B.length - 1].path !== R) {
      return B.findIndex(f726.bind(null, x[L - 2]));
    } else {
      return k;
    }
  });
  const E = M(
    () =>
      u.value === true &&
      p.value !== -1 &&
      f727(i.$route.params, c.value.params)
  );
  const A = M(
    () =>
      E.value === true &&
      p.value === i.$route.matched.length - 1 &&
      f730(i.$route.params, c.value.params)
  );
  const b = M(() =>
    u.value === true
      ? A.value === true
        ? ` ${r.exactActiveClass} ${r.activeClass}`
        : r.exact === true
        ? ""
        : E.value === true
        ? ` ${r.activeClass}`
        : ""
      : ""
  );
  function m(x) {
    try {
      return i.$router.resolve(x);
    } catch {}
    return null;
  }
  function C(
    x,
    { returnRouterError: L, to: I = r.to, replace: B = r.replace } = {}
  ) {
    if (r.disable === true) {
      x.preventDefault();
      return Promise.resolve(false);
    }
    if (
      x.metaKey ||
      x.altKey ||
      x.ctrlKey ||
      x.shiftKey ||
      (x.button !== undefined && x.button !== 0) ||
      r.target === "_blank"
    ) {
      return Promise.resolve(false);
    }
    x.preventDefault();
    const k = i.$router[B === true ? "replace" : "push"](I);
    if (L === true) {
      return k;
    } else {
      return k.then(() => {}).catch(() => {});
    }
  }
  function y(x) {
    if (u.value === true) {
      const L = (I) => C(x, I);
      s("click", x, L);
      if (x.defaultPrevented !== true) {
        L();
      }
    } else {
      s("click", x);
    }
  }
  return {
    hasRouterLink: u,
    hasHrefLink: a,
    hasLink: f,
    linkTag: d,
    resolvedLink: c,
    linkIsActive: E,
    linkIsExactActive: A,
    linkClass: b,
    linkAttrs: h,
    getLink: m,
    navigateToRouterLink: C,
    navigateOnClick: y,
  };
}
const vO63 = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};
const vO64 = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24,
};
const vA38 = ["button", "submit", "reset"];
const v197 = /[^\s]\/[^\s]/;
const vA39 = ["flat", "outline", "push", "unelevated"];
function f732(e, t) {
  if (e.flat === true) {
    return "flat";
  } else if (e.outline === true) {
    return "outline";
  } else if (e.push === true) {
    return "push";
  } else if (e.unelevated === true) {
    return "unelevated";
  } else {
    return t;
  }
}
function f733(e) {
  const t = f732(e);
  if (t !== undefined) {
    return {
      [t]: true,
    };
  } else {
    return {};
  }
}
const vO65 = {
  ...vO54,
  ...vO61,
  type: {
    type: String,
    default: "button",
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...vA39.reduce((e, t) => (e[t] = Boolean) && e, {}),
  square: Boolean,
  rounded: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: true,
  },
  align: {
    ...vO60.align,
    default: "center",
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null,
  },
  disable: Boolean,
};
const vO66 = {
  ...vO65,
  round: Boolean,
};
function f734(e) {
  const t = f719(e, vO64);
  const n = f724(e);
  const {
    hasRouterLink: r,
    hasLink: i,
    linkTag: s,
    linkAttrs: o,
    navigateOnClick: a,
  } = f731({
    fallbackTag: "button",
  });
  const l = M(() => {
    const A = e.fab === false && e.fabMini === false ? t.value : {};
    if (e.padding !== undefined) {
      return Object.assign({}, A, {
        padding: e.padding
          .split(/\s+/)
          .map((b) => (b in vO63 ? vO63[b] + "px" : b))
          .join(" "),
        minWidth: "0",
        minHeight: "0",
      });
    } else {
      return A;
    }
  });
  const c = M(() => e.rounded === true || e.fab === true || e.fabMini === true);
  const u = M(() => e.disable !== true && e.loading !== true);
  const f = M(() => (u.value === true ? e.tabindex || 0 : -1));
  const d = M(() => f732(e, "standard"));
  const h = M(() => {
    const A = {
      tabindex: f.value,
    };
    if (i.value === true) {
      Object.assign(A, o.value);
    } else if (vA38.includes(e.type) === true) {
      A.type = e.type;
    }
    if (s.value === "a") {
      if (e.disable === true) {
        A["aria-disabled"] = "true";
      } else if (A.href === undefined) {
        A.role = "button";
      }
      if (r.value !== true && v197.test(e.type) === true) {
        A.type = e.type;
      }
    } else if (e.disable === true) {
      A.disabled = "";
      A["aria-disabled"] = "true";
    }
    if (e.loading === true && e.percentage !== undefined) {
      Object.assign(A, {
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": e.percentage,
      });
    }
    return A;
  });
  const p = M(() => {
    let A;
    if (e.color !== undefined) {
      if (e.flat === true || e.outline === true) {
        A = `text-${e.textColor || e.color}`;
      } else {
        A = `bg-${e.color} text-${e.textColor || "white"}`;
      }
    } else if (e.textColor) {
      A = `text-${e.textColor}`;
    }
    const b =
      e.round === true
        ? "round"
        : `rectangle${
            c.value === true
              ? " q-btn--rounded"
              : e.square === true
              ? " q-btn--square"
              : ""
          }`;
    return `q-btn--${d.value} q-btn--${b}${A !== undefined ? " " + A : ""}${
      u.value === true
        ? " q-btn--actionable q-focusable q-hoverable"
        : e.disable === true
        ? " disabled"
        : ""
    }${
      e.fab === true
        ? " q-btn--fab"
        : e.fabMini === true
        ? " q-btn--fab-mini"
        : ""
    }${e.noCaps === true ? " q-btn--no-uppercase" : ""}${
      e.dense === true ? " q-btn--dense" : ""
    }${e.stretch === true ? " no-border-radius self-stretch" : ""}${
      e.glossy === true ? " glossy" : ""
    }${e.square ? " q-btn--square" : ""}`;
  });
  const E = M(
    () =>
      n.value +
      (e.stack === true ? " column" : " row") +
      (e.noWrap === true ? " no-wrap text-no-wrap" : "") +
      (e.loading === true ? " q-btn__content--hidden" : "")
  );
  return {
    classes: p,
    style: l,
    innerClasses: E,
    attributes: h,
    hasLink: i,
    linkTag: s,
    navigateOnClick: a,
    isActionable: u,
  };
}
const { passiveCapture: vt } = vO29;
let v198 = null;
let v199 = null;
let v200 = null;
const vF2315 = f231({
  name: "QBtn",
  props: {
    ...vO66,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array],
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: r } = vF79();
    const {
      classes: i,
      style: s,
      innerClasses: o,
      attributes: a,
      hasLink: l,
      linkTag: c,
      navigateOnClick: u,
      isActionable: f,
    } = f734(e);
    const d = f52(null);
    const h = f52(null);
    let p = null;
    let E;
    let A = null;
    const b = M(
      () => e.label !== undefined && e.label !== null && e.label !== ""
    );
    const m = M(() =>
      e.disable === true || e.ripple === false
        ? false
        : {
            keyCodes: l.value === true ? [13, 32] : [13],
            ...(e.ripple === true ? {} : e.ripple),
          }
    );
    const C = M(() => ({
      center: e.round,
    }));
    const y = M(() => {
      const D = Math.max(0, Math.min(100, e.percentage));
      if (D > 0) {
        return {
          transition: "transform 0.6s",
          transform: `translateX(${D - 100}%)`,
        };
      } else {
        return {};
      }
    });
    const x = M(() => {
      if (e.loading === true) {
        return {
          onMousedown: G,
          onTouchstart: G,
          onClick: G,
          onKeydown: G,
          onKeyup: G,
        };
      }
      if (f.value === true) {
        const D = {
          onClick: I,
          onKeydown: B,
          onMousedown: R,
        };
        if (r.$q.platform.has.touch === true) {
          const v201 = e.onTouchstart !== undefined ? "" : "Passive";
          D[`onTouchstart${v201}`] = k;
        }
        return D;
      }
      return {
        onClick: f239,
      };
    });
    const L = M(() => ({
      ref: d,
      class: "q-btn q-btn-item non-selectable no-outline " + i.value,
      style: s.value,
      ...a.value,
      ...x.value,
    }));
    function I(D) {
      if (d.value !== null) {
        if (D !== undefined) {
          if (D.defaultPrevented === true) {
            return;
          }
          const v202 = document.activeElement;
          if (
            e.type === "submit" &&
            v202 !== document.body &&
            d.value.contains(v202) === false &&
            v202.contains(d.value) === false
          ) {
            if (D.qAvoidFocus !== true) {
              d.value.focus();
            }
            const J = () => {
              document.removeEventListener("keydown", f239, true);
              document.removeEventListener("keyup", J, vt);
              d.value?.removeEventListener("blur", J, vt);
            };
            document.addEventListener("keydown", f239, true);
            document.addEventListener("keyup", J, vt);
            d.value.addEventListener("blur", J, vt);
          }
        }
        u(D);
      }
    }
    function B(D) {
      if (d.value !== null) {
        n("keydown", D);
        if (f247(D, [13, 32]) === true && v199 !== d.value) {
          if (v199 !== null) {
            S();
          }
          if (D.defaultPrevented !== true) {
            if (D.qAvoidFocus !== true) {
              d.value.focus();
            }
            v199 = d.value;
            d.value.classList.add("q-btn--active");
            document.addEventListener("keyup", V, true);
            d.value.addEventListener("blur", V, vt);
          }
          f239(D);
        }
      }
    }
    function k(D) {
      if (d.value !== null) {
        n("touchstart", D);
        if (D.defaultPrevented !== true) {
          if (v198 !== d.value) {
            if (v198 !== null) {
              S();
            }
            v198 = d.value;
            p = D.target;
            p.addEventListener("touchcancel", V, vt);
            p.addEventListener("touchend", V, vt);
          }
          E = true;
          if (A !== null) {
            clearTimeout(A);
          }
          A = setTimeout(() => {
            A = null;
            E = false;
          }, 200);
        }
      }
    }
    function R(D) {
      if (d.value !== null) {
        D.qSkipRipple = E === true;
        n("mousedown", D);
        if (D.defaultPrevented !== true && v200 !== d.value) {
          if (v200 !== null) {
            S();
          }
          v200 = d.value;
          d.value.classList.add("q-btn--active");
          document.addEventListener("mouseup", V, vt);
        }
      }
    }
    function V(D) {
      if (
        d.value !== null &&
        (D?.type !== "blur" || document.activeElement !== d.value)
      ) {
        if (D?.type === "keyup") {
          if (v199 === d.value && f247(D, [13, 32]) === true) {
            const v203 = new MouseEvent("click", D);
            v203.qKeyEvent = true;
            if (D.defaultPrevented === true) {
              f238(v203);
            }
            if (D.cancelBubble === true) {
              f237(v203);
            }
            d.value.dispatchEvent(v203);
            f239(D);
            D.qKeyEvent = true;
          }
          n("keyup", D);
        }
        S();
      }
    }
    function S(D) {
      const v204 = h.value;
      if (
        D !== true &&
        (v198 === d.value || v200 === d.value) &&
        v204 !== null &&
        v204 !== document.activeElement
      ) {
        v204.setAttribute("tabindex", -1);
        v204.focus();
      }
      if (v198 === d.value) {
        if (p !== null) {
          p.removeEventListener("touchcancel", V, vt);
          p.removeEventListener("touchend", V, vt);
        }
        v198 = p = null;
      }
      if (v200 === d.value) {
        document.removeEventListener("mouseup", V, vt);
        v200 = null;
      }
      if (v199 === d.value) {
        document.removeEventListener("keyup", V, true);
        d.value?.removeEventListener("blur", V, vt);
        v199 = null;
      }
      d.value?.classList.remove("q-btn--active");
    }
    function G(D) {
      f239(D);
      D.qSkipRipple = true;
    }
    vVF495(() => {
      S(true);
    });
    Object.assign(r, {
      click: (D) => {
        if (f.value === true) {
          I(D);
        }
      },
    });
    return () => {
      let D = [];
      if (e.icon !== undefined) {
        D.push(
          q(vF2313, {
            name: e.icon,
            left: e.stack !== true && b.value === true,
            role: "img",
          })
        );
      }
      if (b.value === true) {
        D.push(
          q(
            "span",
            {
              class: "block",
            },
            [e.label]
          )
        );
      }
      D = f700(t.default, D);
      if (e.iconRight !== undefined && e.round === false) {
        D.push(
          q(vF2313, {
            name: e.iconRight,
            right: e.stack !== true && b.value === true,
            role: "img",
          })
        );
      }
      const vA40 = [
        q("span", {
          class: "q-focus-helper",
          ref: h,
        }),
      ];
      if (e.loading === true && e.percentage !== undefined) {
        vA40.push(
          q(
            "span",
            {
              class:
                "q-btn__progress absolute-full overflow-hidden" +
                (e.darkPercentage === true ? " q-btn__progress--dark" : ""),
            },
            [
              q("span", {
                class: "q-btn__progress-indicator fit block",
                style: y.value,
              }),
            ]
          )
        );
      }
      vA40.push(
        q(
          "span",
          {
            class:
              "q-btn__content text-center col items-center q-anchor--skip " +
              o.value,
          },
          D
        )
      );
      if (e.loading !== null) {
        vA40.push(
          q(
            vVF82,
            {
              name: "q-transition--fade",
            },
            () =>
              e.loading === true
                ? [
                    q(
                      "span",
                      {
                        key: "loading",
                        class: "absolute-full flex flex-center",
                      },
                      t.loading !== undefined ? t.loading() : [q(vF2314)]
                    ),
                  ]
                : null
          )
        );
      }
      return f80(q(c.value, L.value, vA40), [
        [vF232, m.value, undefined, C.value],
      ]);
    };
  },
});
const vO67 = {
  dark: {
    type: Boolean,
    default: null,
  },
};
function f735(e, t) {
  return M(() => (e.dark === null ? t.dark.isActive : e.dark));
}
const vF2316 = f231({
  name: "QCard",
  props: {
    ...vO67,
    tag: {
      type: String,
      default: "div",
    },
    square: Boolean,
    flat: Boolean,
    bordered: Boolean,
  },
  setup(e, { slots: t }) {
    const {
      proxy: { $q: n },
    } = vF79();
    const r = f735(e, n);
    const i = M(
      () =>
        "q-card" +
        (r.value === true ? " q-card--dark q-dark" : "") +
        (e.bordered === true ? " q-card--bordered" : "") +
        (e.square === true ? " q-card--square no-border-radius" : "") +
        (e.flat === true ? " q-card--flat no-shadow" : "")
    );
    return () =>
      q(
        e.tag,
        {
          class: i.value,
        },
        f698(t.default)
      );
  },
});
const vF2317 = f231({
  name: "QCardSection",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    horizontal: Boolean,
  },
  setup(e, { slots: t }) {
    const n = M(
      () =>
        `q-card__section q-card__section--${
          e.horizontal === true ? "horiz row no-wrap" : "vert"
        }`
    );
    return () =>
      q(
        e.tag,
        {
          class: n.value,
        },
        f698(t.default)
      );
  },
});
const vF2318 = f231({
  name: "QCardActions",
  props: {
    ...vO60,
    vertical: Boolean,
  },
  setup(e, { slots: t }) {
    const n = f724(e);
    const r = M(
      () =>
        `q-card__actions ${n.value} q-card__actions--${
          e.vertical === true ? "vert column" : "horiz row"
        }`
    );
    return () =>
      q(
        "div",
        {
          class: r.value,
        },
        f698(t.default)
      );
  },
});
const vO68 = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset",
};
const vO69 = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
};
const vF2319 = f231({
  name: "QSeparator",
  props: {
    ...vO67,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String,
  },
  setup(e) {
    const t = vF79();
    const n = f735(e, t.proxy.$q);
    const r = M(() => (e.vertical === true ? "vertical" : "horizontal"));
    const i = M(() => ` q-separator--${r.value}`);
    const s = M(() => (e.inset !== false ? `${i.value}-${vO68[e.inset]}` : ""));
    const o = M(
      () =>
        `q-separator${i.value}${s.value}${
          e.color !== undefined ? ` bg-${e.color}` : ""
        }${n.value === true ? " q-separator--dark" : ""}`
    );
    const a = M(() => {
      const l = {};
      if (e.size !== undefined) {
        l[e.vertical === true ? "width" : "height"] = e.size;
      }
      if (e.spaced !== false) {
        const c =
          e.spaced === true
            ? `${vO69.md}px`
            : e.spaced in vO69
            ? `${vO69[e.spaced]}px`
            : e.spaced;
        const u = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
        l[`margin${u[0]}`] = l[`margin${u[1]}`] = c;
      }
      return l;
    });
    return () =>
      q("hr", {
        class: o.value,
        style: a.value,
        "aria-orientation": r.value,
      });
  },
});
let v205;
let vLN016 = 0;
const v206 = new Array(256);
for (let e = 0; e < 256; e++) {
  v206[e] = (e + 256).toString(16).substring(1);
}
const vF144 = (() => {
  const e =
    typeof crypto !== "undefined"
      ? crypto
      : typeof window !== "undefined"
      ? window.crypto || window.msCrypto
      : undefined;
  if (e !== undefined) {
    if (e.randomBytes !== undefined) {
      return e.randomBytes;
    }
    if (e.getRandomValues !== undefined) {
      return (t) => {
        const n = new Uint8Array(t);
        e.getRandomValues(n);
        return n;
      };
    }
  }
  return (t) => {
    const n = [];
    for (let r = t; r > 0; r--) {
      n.push(Math.floor(Math.random() * 256));
    }
    return n;
  };
})();
const vLN4096 = 4096;
function f736() {
  if (v205 === undefined || vLN016 + 16 > vLN4096) {
    vLN016 = 0;
    v205 = vF144(vLN4096);
  }
  const e = Array.prototype.slice.call(v205, vLN016, (vLN016 += 16));
  e[6] = (e[6] & 15) | 64;
  e[8] = (e[8] & 63) | 128;
  return (
    v206[e[0]] +
    v206[e[1]] +
    v206[e[2]] +
    v206[e[3]] +
    "-" +
    v206[e[4]] +
    v206[e[5]] +
    "-" +
    v206[e[6]] +
    v206[e[7]] +
    "-" +
    v206[e[8]] +
    v206[e[9]] +
    "-" +
    v206[e[10]] +
    v206[e[11]] +
    v206[e[12]] +
    v206[e[13]] +
    v206[e[14]] +
    v206[e[15]]
  );
}
function f737(e) {
  return e ?? null;
}
function f738(e, t) {
  return e ?? (t === true ? `f_${f736()}` : null);
}
function f739({ getValue: e, required: t = true } = {}) {
  if (vF522.value === true) {
    const n = f52(e !== undefined ? f737(e()) : null);
    if (t === true && n.value === null) {
      vVF492(() => {
        n.value = `f_${f736()}`;
      });
    }
    if (e !== undefined) {
      f150(e, (r) => {
        n.value = f738(r, t);
      });
    }
    return n;
  }
  if (e !== undefined) {
    return M(() => f738(e(), t));
  } else {
    return f52(`f_${f736()}`);
  }
}
const v207 = /^on[A-Z]/;
function f740() {
  const { attrs: e, vnode: t } = vF79();
  const n = {
    listeners: f52({}),
    attributes: f52({}),
  };
  function r() {
    const i = {};
    const s = {};
    for (const o in e) {
      if (o !== "class" && o !== "style" && v207.test(o) === false) {
        i[o] = e[o];
      }
    }
    for (const o in t.props) {
      if (v207.test(o) === true) {
        s[o] = t.props[o];
      }
    }
    n.attributes.value = i;
    n.listeners.value = s;
  }
  vVF493(r);
  r();
  return n;
}
function f741({ validate: e, resetValidation: t, requiresQForm: n }) {
  const r = f131(vLS_q_fo_, false);
  if (r !== false) {
    const { props: i, proxy: s } = vF79();
    Object.assign(s, {
      validate: e,
      resetValidation: t,
    });
    f150(
      () => i.disable,
      (o) => {
        if (o === true) {
          if (typeof t == "function") {
            t();
          }
          r.unbindComponent(s);
        } else {
          r.bindComponent(s);
        }
      }
    );
    vVF492(() => {
      if (i.disable !== true) {
        r.bindComponent(s);
      }
    });
    vVF495(() => {
      if (i.disable !== true) {
        r.unbindComponent(s);
      }
    });
  } else if (n === true) {
    console.error("Parent QForm not found on useFormChild()!");
  }
}
const v208 = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/;
const v209 = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/;
const v210 = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const v211 =
  /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/;
const v212 =
  /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
const vO70 = {
  date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
  time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
  fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
  timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
  email: (e) =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      e
    ),
  hexColor: (e) => v208.test(e),
  hexaColor: (e) => v209.test(e),
  hexOrHexaColor: (e) => v210.test(e),
  rgbColor: (e) => v211.test(e),
  rgbaColor: (e) => v212.test(e),
  rgbOrRgbaColor: (e) => v211.test(e) || v212.test(e),
  hexOrRgbColor: (e) => v208.test(e) || v211.test(e),
  hexaOrRgbaColor: (e) => v209.test(e) || v212.test(e),
  anyColor: (e) => v210.test(e) || v211.test(e) || v212.test(e),
};
const vA41 = [true, false, "ondemand"];
const vO71 = {
  modelValue: {},
  error: {
    type: Boolean,
    default: null,
  },
  errorMessage: String,
  noErrorIcon: Boolean,
  rules: Array,
  reactiveRules: Boolean,
  lazyRules: {
    type: [Boolean, String],
    default: false,
    validator: (e) => vA41.includes(e),
  },
};
function f742(e, t) {
  const { props: n, proxy: r } = vF79();
  const i = f52(false);
  const s = f52(null);
  const o = f52(false);
  f741({
    validate: E,
    resetValidation: p,
  });
  let a = 0;
  let l;
  const c = M(
    () => n.rules !== undefined && n.rules !== null && n.rules.length !== 0
  );
  const u = M(
    () => n.disable !== true && c.value === true && t.value === false
  );
  const f = M(() => n.error === true || i.value === true);
  const d = M(() =>
    typeof n.errorMessage == "string" && n.errorMessage.length !== 0
      ? n.errorMessage
      : s.value
  );
  f150(
    () => n.modelValue,
    () => {
      o.value = true;
      if (u.value === true && n.lazyRules === false) {
        A();
      }
    }
  );
  function h() {
    if (n.lazyRules !== "ondemand" && u.value === true && o.value === true) {
      A();
    }
  }
  f150(
    () => n.reactiveRules,
    (b) => {
      if (b === true) {
        if (l === undefined) {
          l = f150(() => n.rules, h, {
            immediate: true,
            deep: true,
          });
        }
      } else if (l !== undefined) {
        l();
        l = undefined;
      }
    },
    {
      immediate: true,
    }
  );
  f150(() => n.lazyRules, h);
  f150(e, (b) => {
    if (b === true) {
      o.value = true;
    } else if (u.value === true && n.lazyRules !== "ondemand") {
      A();
    }
  });
  function p() {
    a++;
    t.value = false;
    o.value = false;
    i.value = false;
    s.value = null;
    A.cancel();
  }
  function E(b = n.modelValue) {
    if (n.disable === true || c.value === false) {
      return true;
    }
    const m = ++a;
    const C =
      t.value !== true
        ? () => {
            o.value = true;
          }
        : () => {};
    const y = (L, I) => {
      if (L === true) {
        C();
      }
      i.value = L;
      s.value = I || null;
      t.value = false;
    };
    const x = [];
    for (let L = 0; L < n.rules.length; L++) {
      const I = n.rules[L];
      let B;
      if (typeof I == "function") {
        B = I(b, vO70);
      } else if (typeof I == "string" && vO70[I] !== undefined) {
        B = vO70[I](b);
      }
      if (B === false || typeof B == "string") {
        y(true, B);
        return false;
      }
      if (B !== true && B !== undefined) {
        x.push(B);
      }
    }
    if (x.length === 0) {
      y(false);
      return true;
    } else {
      t.value = true;
      return Promise.all(x).then(
        (L) => {
          if (L === undefined || Array.isArray(L) === false || L.length === 0) {
            if (m === a) {
              y(false);
            }
            return true;
          }
          const I = L.find((B) => B === false || typeof B == "string");
          if (m === a) {
            y(I !== undefined, I);
          }
          return I === undefined;
        },
        (L) => {
          if (m === a) {
            console.error(L);
            y(true);
          }
          return false;
        }
      );
    }
  }
  const A = f243(E, 0);
  vVF495(() => {
    l?.();
    A.cancel();
  });
  Object.assign(r, {
    resetValidation: p,
    validate: E,
  });
  f227(r, "hasError", () => f.value);
  return {
    isDirtyModel: o,
    hasRules: c,
    hasError: f,
    errorMessage: d,
    validate: E,
    resetValidation: p,
  };
}
function f743(e) {
  return e != null && ("" + e).length !== 0;
}
const vO72 = {
  ...vO67,
  ...vO71,
  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,
  labelColor: String,
  color: String,
  bgColor: String,
  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [Boolean, String],
  square: Boolean,
  loading: Boolean,
  labelSlot: Boolean,
  bottomSlots: Boolean,
  hideBottomSpace: Boolean,
  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,
  counter: Boolean,
  clearable: Boolean,
  clearIcon: String,
  disable: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  for: String,
};
const vO73 = {
  ...vO72,
  maxlength: [Number, String],
};
const vA42 = ["update:modelValue", "clear", "focus", "blur"];
function f744({
  requiredForAttr: e = true,
  tagProp: t,
  changeEvent: n = false,
} = {}) {
  const { props: r, proxy: i } = vF79();
  const s = f735(r, i.$q);
  const o = f739({
    required: e,
    getValue: () => r.for,
  });
  return {
    requiredForAttr: e,
    changeEvent: n,
    tag:
      t === true
        ? M(() => r.tag)
        : {
            value: "label",
          },
    isDark: s,
    editable: M(() => r.disable !== true && r.readonly !== true),
    innerLoading: f52(false),
    focused: f52(false),
    hasPopupOpen: false,
    splitAttrs: f740(),
    targetUid: o,
    rootRef: f52(null),
    targetRef: f52(null),
    controlRef: f52(null),
  };
}
function f745(e) {
  const { props: t, emit: n, slots: r, attrs: i, proxy: s } = vF79();
  const { $q: o } = s;
  let a = null;
  if (e.hasValue === undefined) {
    e.hasValue = M(() => f743(t.modelValue));
  }
  if (e.emitValue === undefined) {
    e.emitValue = (K) => {
      n("update:modelValue", K);
    };
  }
  if (e.controlEvents === undefined) {
    e.controlEvents = {
      onFocusin: k,
      onFocusout: R,
    };
  }
  Object.assign(e, {
    clearValue: V,
    onControlFocusin: k,
    onControlFocusout: R,
    focus: I,
  });
  if (e.computedCounter === undefined) {
    e.computedCounter = M(() => {
      if (t.counter !== false) {
        const K =
          typeof t.modelValue == "string" || typeof t.modelValue == "number"
            ? ("" + t.modelValue).length
            : Array.isArray(t.modelValue) === true
            ? t.modelValue.length
            : 0;
        const v213 = t.maxlength !== undefined ? t.maxlength : t.maxValues;
        return K + (v213 !== undefined ? " / " + v213 : "");
      }
    });
  }
  const {
    isDirtyModel: l,
    hasRules: c,
    hasError: u,
    errorMessage: f,
    resetValidation: d,
  } = f742(e.focused, e.innerLoading);
  const h =
    e.floatingLabel !== undefined
      ? M(
          () =>
            t.stackLabel === true ||
            e.focused.value === true ||
            e.floatingLabel.value === true
        )
      : M(
          () =>
            t.stackLabel === true ||
            e.focused.value === true ||
            e.hasValue.value === true
        );
  const p = M(
    () =>
      t.bottomSlots === true ||
      t.hint !== undefined ||
      c.value === true ||
      t.counter === true ||
      t.error !== null
  );
  const E = M(() =>
    t.filled === true
      ? "filled"
      : t.outlined === true
      ? "outlined"
      : t.borderless === true
      ? "borderless"
      : t.standout
      ? "standout"
      : "standard"
  );
  const A = M(
    () =>
      `q-field row no-wrap items-start q-field--${E.value}${
        e.fieldClass !== undefined ? ` ${e.fieldClass.value}` : ""
      }${t.rounded === true ? " q-field--rounded" : ""}${
        t.square === true ? " q-field--square" : ""
      }${h.value === true ? " q-field--float" : ""}${
        m.value === true ? " q-field--labeled" : ""
      }${t.dense === true ? " q-field--dense" : ""}${
        t.itemAligned === true ? " q-field--item-aligned q-item-type" : ""
      }${e.isDark.value === true ? " q-field--dark" : ""}${
        e.getControl === undefined ? " q-field--auto-height" : ""
      }${e.focused.value === true ? " q-field--focused" : ""}${
        u.value === true ? " q-field--error" : ""
      }${
        u.value === true || e.focused.value === true
          ? " q-field--highlighted"
          : ""
      }${
        t.hideBottomSpace !== true && p.value === true
          ? " q-field--with-bottom"
          : ""
      }${
        t.disable === true
          ? " q-field--disabled"
          : t.readonly === true
          ? " q-field--readonly"
          : ""
      }`
  );
  const b = M(
    () =>
      "q-field__control relative-position row no-wrap" +
      (t.bgColor !== undefined ? ` bg-${t.bgColor}` : "") +
      (u.value === true
        ? " text-negative"
        : typeof t.standout == "string" &&
          t.standout.length !== 0 &&
          e.focused.value === true
        ? ` ${t.standout}`
        : t.color !== undefined
        ? ` text-${t.color}`
        : "")
  );
  const m = M(() => t.labelSlot === true || t.label !== undefined);
  const C = M(
    () =>
      "q-field__label no-pointer-events absolute ellipsis" +
      (t.labelColor !== undefined && u.value !== true
        ? ` text-${t.labelColor}`
        : "")
  );
  const y = M(() => ({
    id: e.targetUid.value,
    editable: e.editable.value,
    focused: e.focused.value,
    floatingLabel: h.value,
    modelValue: t.modelValue,
    emitValue: e.emitValue,
  }));
  const x = M(() => {
    const K = {};
    if (e.targetUid.value) {
      K.for = e.targetUid.value;
    }
    if (t.disable === true) {
      K["aria-disabled"] = "true";
    }
    return K;
  });
  function L() {
    const K = document.activeElement;
    let v214 = e.targetRef?.value;
    if (v214 && (K === null || K.id !== e.targetUid.value)) {
      if (v214.hasAttribute("tabindex") !== true) {
        v214 = v214.querySelector("[tabindex]");
      }
      if (v214 !== K) {
        v214?.focus({
          preventScroll: true,
        });
      }
    }
  }
  function I() {
    f667(L);
  }
  function B() {
    f668(L);
    const K = document.activeElement;
    if (K !== null && e.rootRef.value.contains(K)) {
      K.blur();
    }
  }
  function k(K) {
    if (a !== null) {
      clearTimeout(a);
      a = null;
    }
    if (e.editable.value === true && e.focused.value === false) {
      e.focused.value = true;
      n("focus", K);
    }
  }
  function R(K, p30) {
    if (a !== null) {
      clearTimeout(a);
    }
    a = setTimeout(() => {
      a = null;
      if (
        document.hasFocus() !== true ||
        (e.hasPopupOpen !== true &&
          e.controlRef !== undefined &&
          e.controlRef.value !== null &&
          e.controlRef.value.contains(document.activeElement) === false)
      ) {
        if (e.focused.value === true) {
          e.focused.value = false;
          n("blur", K);
        }
        p30?.();
      }
    });
  }
  function V(K) {
    f239(K);
    if (o.platform.is.mobile !== true) {
      (e.targetRef?.value || e.rootRef.value).focus();
    } else if (e.rootRef.value.contains(document.activeElement) === true) {
      document.activeElement.blur();
    }
    if (t.type === "file") {
      e.inputRef.value.value = null;
    }
    n("update:modelValue", null);
    if (e.changeEvent === true) {
      n("change", null);
    }
    n("clear", t.modelValue);
    f70(() => {
      const v215 = l.value;
      d();
      l.value = v215;
    });
  }
  function S(K) {
    if ([13, 32].includes(K.keyCode)) {
      V(K);
    }
  }
  function G() {
    const K = [];
    if (r.prepend !== undefined) {
      K.push(
        q(
          "div",
          {
            class:
              "q-field__prepend q-field__marginal row no-wrap items-center",
            key: "prepend",
            onClick: f238,
          },
          r.prepend()
        )
      );
    }
    K.push(
      q(
        "div",
        {
          class:
            "q-field__control-container col relative-position row no-wrap q-anchor--skip",
        },
        D()
      )
    );
    if (u.value === true && t.noErrorIcon === false) {
      K.push(
        J("error", [
          q(vF2313, {
            name: o.iconSet.field.error,
            color: "negative",
          }),
        ])
      );
    }
    if (t.loading === true || e.innerLoading.value === true) {
      K.push(
        J(
          "inner-loading-append",
          r.loading !== undefined
            ? r.loading()
            : [
                q(vF2314, {
                  color: t.color,
                }),
              ]
        )
      );
    } else if (
      t.clearable === true &&
      e.hasValue.value === true &&
      e.editable.value === true
    ) {
      K.push(
        J("inner-clearable-append", [
          q(vF2313, {
            class: "q-field__focusable-action",
            name: t.clearIcon || o.iconSet.field.clear,
            tabindex: 0,
            role: "button",
            "aria-hidden": "false",
            "aria-label": o.lang.label.clear,
            onKeyup: S,
            onClick: V,
          }),
        ])
      );
    }
    if (r.append !== undefined) {
      K.push(
        q(
          "div",
          {
            class: "q-field__append q-field__marginal row no-wrap items-center",
            key: "append",
            onClick: f238,
          },
          r.append()
        )
      );
    }
    if (e.getInnerAppend !== undefined) {
      K.push(J("inner-append", e.getInnerAppend()));
    }
    if (e.getControlChild !== undefined) {
      K.push(e.getControlChild());
    }
    return K;
  }
  function D() {
    const K = [];
    if (t.prefix !== undefined && t.prefix !== null) {
      K.push(
        q(
          "div",
          {
            class: "q-field__prefix no-pointer-events row items-center",
          },
          t.prefix
        )
      );
    }
    if (e.getShadowControl !== undefined && e.hasShadow.value === true) {
      K.push(e.getShadowControl());
    }
    if (e.getControl !== undefined) {
      K.push(e.getControl());
    } else if (r.rawControl !== undefined) {
      K.push(r.rawControl());
    } else if (r.control !== undefined) {
      K.push(
        q(
          "div",
          {
            ref: e.targetRef,
            class: "q-field__native row",
            tabindex: -1,
            ...e.splitAttrs.attributes.value,
            "data-autofocus": t.autofocus === true || undefined,
          },
          r.control(y.value)
        )
      );
    }
    if (m.value === true) {
      K.push(
        q(
          "div",
          {
            class: C.value,
          },
          f698(r.label, t.label)
        )
      );
    }
    if (t.suffix !== undefined && t.suffix !== null) {
      K.push(
        q(
          "div",
          {
            class: "q-field__suffix no-pointer-events row items-center",
          },
          t.suffix
        )
      );
    }
    return K.concat(f698(r.default));
  }
  function f746() {
    let K;
    let v216;
    if (u.value === true) {
      if (f.value !== null) {
        K = [
          q(
            "div",
            {
              role: "alert",
            },
            f.value
          ),
        ];
        v216 = `q--slot-error-${f.value}`;
      } else {
        K = f698(r.error);
        v216 = "q--slot-error";
      }
    } else if (t.hideHint !== true || e.focused.value === true) {
      if (t.hint !== undefined) {
        K = [q("div", t.hint)];
        v216 = `q--slot-hint-${t.hint}`;
      } else {
        K = f698(r.hint);
        v216 = "q--slot-hint";
      }
    }
    const v217 = t.counter === true || r.counter !== undefined;
    if (t.hideBottomSpace === true && v217 === false && K === undefined) {
      return;
    }
    const vQ = q(
      "div",
      {
        key: v216,
        class: "q-field__messages col",
      },
      K
    );
    return q(
      "div",
      {
        class:
          "q-field__bottom row items-start q-field__bottom--" +
          (t.hideBottomSpace !== true ? "animated" : "stale"),
        onClick: f238,
      },
      [
        t.hideBottomSpace === true
          ? vQ
          : q(
              vVF82,
              {
                name: "q-transition--field-message",
              },
              () => vQ
            ),
        v217 === true
          ? q(
              "div",
              {
                class: "q-field__counter",
              },
              r.counter !== undefined ? r.counter() : e.computedCounter.value
            )
          : null,
      ]
    );
  }
  function J(K, p31) {
    if (p31 === null) {
      return null;
    } else {
      return q(
        "div",
        {
          key: K,
          class:
            "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",
        },
        p31
      );
    }
  }
  let Q = false;
  f99(() => {
    Q = true;
  });
  f98(() => {
    if (Q === true && t.autofocus === true) {
      s.focus();
    }
  });
  if (t.autofocus === true) {
    vVF492(() => {
      s.focus();
    });
  }
  vVF495(() => {
    if (a !== null) {
      clearTimeout(a);
    }
  });
  Object.assign(s, {
    focus: I,
    blur: B,
  });
  return function () {
    const v218 =
      e.getControl === undefined && r.control === undefined
        ? {
            ...e.splitAttrs.attributes.value,
            "data-autofocus": t.autofocus === true || undefined,
            ...x.value,
          }
        : x.value;
    return q(
      e.tag.value,
      {
        ref: e.rootRef,
        class: [A.value, i.class],
        style: i.style,
        ...v218,
      },
      [
        r.before !== undefined
          ? q(
              "div",
              {
                class:
                  "q-field__before q-field__marginal row no-wrap items-center",
                onClick: f238,
              },
              r.before()
            )
          : null,
        q(
          "div",
          {
            class: "q-field__inner relative-position col self-stretch",
          },
          [
            q(
              "div",
              {
                ref: e.controlRef,
                class: b.value,
                tabindex: -1,
                ...e.controlEvents,
              },
              G()
            ),
            p.value === true ? f746() : null,
          ]
        ),
        r.after !== undefined
          ? q(
              "div",
              {
                class:
                  "q-field__after q-field__marginal row no-wrap items-center",
                onClick: f238,
              },
              r.after()
            )
          : null,
      ]
    );
  };
}
const vO74 = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####",
};
const vO75 = {
  "#": {
    pattern: "[\\d]",
    negate: "[^\\d]",
  },
  S: {
    pattern: "[a-zA-Z]",
    negate: "[^a-zA-Z]",
  },
  N: {
    pattern: "[0-9a-zA-Z]",
    negate: "[^0-9a-zA-Z]",
  },
  A: {
    pattern: "[a-zA-Z]",
    negate: "[^a-zA-Z]",
    transform: (e) => e.toLocaleUpperCase(),
  },
  a: {
    pattern: "[a-zA-Z]",
    negate: "[^a-zA-Z]",
    transform: (e) => e.toLocaleLowerCase(),
  },
  X: {
    pattern: "[0-9a-zA-Z]",
    negate: "[^0-9a-zA-Z]",
    transform: (e) => e.toLocaleUpperCase(),
  },
  x: {
    pattern: "[0-9a-zA-Z]",
    negate: "[^0-9a-zA-Z]",
    transform: (e) => e.toLocaleLowerCase(),
  },
};
const v219 = Object.keys(vO75);
v219.forEach((e) => {
  vO75[e].regex = new RegExp(vO75[e].pattern);
});
const v220 = new RegExp(
  "\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + v219.join("") + "])|(.)",
  "g"
);
const v221 = /[.*+?^${}()|[\]\\]/g;
const vLS9 = "";
const vO76 = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean,
};
function f747(e, t, n, r) {
  let i;
  let s;
  let o;
  let a;
  let l;
  let c;
  const u = f52(null);
  const f = f52(h());
  function d() {
    return (
      e.autogrow === true ||
      ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    );
  }
  f150(() => e.type + e.autogrow, E);
  f150(
    () => e.mask,
    (k) => {
      if (k !== undefined) {
        A(f.value, true);
      } else {
        const R = I(f.value);
        E();
        if (e.modelValue !== R) {
          t("update:modelValue", R);
        }
      }
    }
  );
  f150(
    () => e.fillMask + e.reverseFillMask,
    () => {
      if (u.value === true) {
        A(f.value, true);
      }
    }
  );
  f150(
    () => e.unmaskedValue,
    () => {
      if (u.value === true) {
        A(f.value);
      }
    }
  );
  function h() {
    E();
    if (u.value === true) {
      const k = x(I(e.modelValue));
      if (e.fillMask !== false) {
        return B(k);
      } else {
        return k;
      }
    }
    return e.modelValue;
  }
  function p(k) {
    if (k < i.length) {
      return i.slice(-k);
    }
    let R = "";
    let V = i;
    const S = V.indexOf(vLS9);
    if (S !== -1) {
      for (let G = k - V.length; G > 0; G--) {
        R += vLS9;
      }
      V = V.slice(0, S) + R + V.slice(S);
    }
    return V;
  }
  function E() {
    u.value = e.mask !== undefined && e.mask.length !== 0 && d();
    if (u.value === false) {
      a = undefined;
      i = "";
      s = "";
      return;
    }
    const k = vO74[e.mask] === undefined ? e.mask : vO74[e.mask];
    const R =
      typeof e.fillMask == "string" && e.fillMask.length !== 0
        ? e.fillMask.slice(0, 1)
        : "_";
    const V = R.replace(v221, "\\$&");
    const S = [];
    const G = [];
    const D = [];
    let v222 = e.reverseFillMask === true;
    let J = "";
    let Q = "";
    k.replace(v220, (p32, z, p33, p34, p35) => {
      if (p34 !== undefined) {
        const v223 = vO75[p34];
        D.push(v223);
        Q = v223.negate;
        if (v222 === true) {
          G.push(
            "(?:" +
              Q +
              "+)?(" +
              v223.pattern +
              "+)?(?:" +
              Q +
              "+)?(" +
              v223.pattern +
              "+)?"
          );
          v222 = false;
        }
        G.push("(?:" + Q + "+)?(" + v223.pattern + ")?");
      } else if (p33 !== undefined) {
        J = "\\" + (p33 === "\\" ? "" : p33);
        D.push(p33);
        S.push("([^" + J + "]+)?" + J + "?");
      } else {
        const v224 = z !== undefined ? z : p35;
        J = v224 === "\\" ? "\\\\\\\\" : v224.replace(v221, "\\\\$&");
        D.push(v224);
        S.push("([^" + J + "]+)?" + J + "?");
      }
    });
    const K = new RegExp(
      "^" +
        S.join("") +
        "(" +
        (J === "" ? "." : "[^" + J + "]") +
        "+)?" +
        (J === "" ? "" : "[" + J + "]*") +
        "$"
    );
    const v225 = G.length - 1;
    const v226 = G.map((p36, z) =>
      z === 0 && e.reverseFillMask === true
        ? new RegExp("^" + V + "*" + p36)
        : z === v225
        ? new RegExp(
            "^" +
              p36 +
              "(" +
              (Q === "" ? "." : Q) +
              "+)?" +
              (e.reverseFillMask === true ? "$" : V + "*")
          )
        : new RegExp("^" + p36)
    );
    o = D;
    a = (p37) => {
      const z = K.exec(
        e.reverseFillMask === true ? p37 : p37.slice(0, D.length + 1)
      );
      if (z !== null) {
        p37 = z.slice(1).join("");
      }
      const vA43 = [];
      const v227 = v226.length;
      for (let vLN017 = 0, vP37 = p37; vLN017 < v227; vLN017++) {
        const F = v226[vLN017].exec(vP37);
        if (F === null) {
          break;
        }
        vP37 = vP37.slice(F.shift().length);
        vA43.push(...F);
      }
      if (vA43.length !== 0) {
        return vA43.join("");
      } else {
        return p37;
      }
    };
    i = D.map((p38) => (typeof p38 == "string" ? p38 : vLS9)).join("");
    s = i.split(vLS9).join(R);
  }
  function A(k, R, V) {
    const S = r.value;
    const G = S.selectionEnd;
    const D = S.value.length - G;
    const vI = I(k);
    if (R === true) {
      E();
    }
    const J = x(vI);
    const Q = e.fillMask !== false ? B(J) : J;
    const K = f.value !== Q;
    if (S.value !== Q) {
      S.value = Q;
    }
    if (K === true) {
      f.value = Q;
    }
    if (document.activeElement === S) {
      f70(() => {
        if (Q === s) {
          const v228 = e.reverseFillMask === true ? s.length : 0;
          S.setSelectionRange(v228, v228, "forward");
          return;
        }
        if (V === "insertFromPaste" && e.reverseFillMask !== true) {
          const v229 = S.selectionEnd;
          let v230 = G - 1;
          for (let z = l; z <= v230 && z < v229; z++) {
            if (i[z] !== vLS9) {
              v230++;
            }
          }
          m.right(S, v230);
          return;
        }
        if (
          ["deleteContentBackward", "deleteContentForward"].indexOf(V) !== -1
        ) {
          const v231 =
            e.reverseFillMask === true
              ? G === 0
                ? Q.length > J.length
                  ? 1
                  : 0
                : Math.max(
                    0,
                    Q.length - (Q === s ? 0 : Math.min(J.length, D) + 1)
                  ) + 1
              : G;
          S.setSelectionRange(v231, v231, "forward");
          return;
        }
        if (e.reverseFillMask === true) {
          if (K === true) {
            const v232 = Math.max(
              0,
              Q.length - (Q === s ? 0 : Math.min(J.length, D + 1))
            );
            if (v232 === 1 && G === 1) {
              S.setSelectionRange(v232, v232, "forward");
            } else {
              m.rightReverse(S, v232);
            }
          } else {
            const v233 = Q.length - D;
            S.setSelectionRange(v233, v233, "backward");
          }
        } else if (K === true) {
          const v234 = Math.max(0, i.indexOf(vLS9), Math.min(J.length, G) - 1);
          m.right(S, v234);
        } else {
          const v235 = G - 1;
          m.right(S, v235);
        }
      });
    }
    const v236 = e.unmaskedValue === true ? I(Q) : Q;
    if (
      String(e.modelValue) !== v236 &&
      (e.modelValue !== null || v236 !== "")
    ) {
      n(v236, true);
    }
  }
  function b(k, R, V) {
    const S = x(I(k.value));
    R = Math.max(0, i.indexOf(vLS9), Math.min(S.length, R));
    l = R;
    k.setSelectionRange(R, V, "forward");
  }
  const m = {
    left(k, R) {
      const V = i.slice(R - 1).indexOf(vLS9) === -1;
      let S = Math.max(0, R - 1);
      for (; S >= 0; S--) {
        if (i[S] === vLS9) {
          R = S;
          if (V === true) {
            R++;
          }
          break;
        }
      }
      if (S < 0 && i[R] !== undefined && i[R] !== vLS9) {
        return m.right(k, 0);
      }
      if (R >= 0) {
        k.setSelectionRange(R, R, "backward");
      }
    },
    right(k, R) {
      const V = k.value.length;
      let S = Math.min(V, R + 1);
      for (; S <= V; S++) {
        if (i[S] === vLS9) {
          R = S;
          break;
        } else if (i[S - 1] === vLS9) {
          R = S;
        }
      }
      if (S > V && i[R - 1] !== undefined && i[R - 1] !== vLS9) {
        return m.left(k, V);
      }
      k.setSelectionRange(R, R, "forward");
    },
    leftReverse(k, R) {
      const V = p(k.value.length);
      let S = Math.max(0, R - 1);
      for (; S >= 0; S--) {
        if (V[S - 1] === vLS9) {
          R = S;
          break;
        } else if (V[S] === vLS9 && ((R = S), S === 0)) {
          break;
        }
      }
      if (S < 0 && V[R] !== undefined && V[R] !== vLS9) {
        return m.rightReverse(k, 0);
      }
      if (R >= 0) {
        k.setSelectionRange(R, R, "backward");
      }
    },
    rightReverse(k, R) {
      const V = k.value.length;
      const S = p(V);
      const G = S.slice(0, R + 1).indexOf(vLS9) === -1;
      let D = Math.min(V, R + 1);
      for (; D <= V; D++) {
        if (S[D - 1] === vLS9) {
          R = D;
          if (R > 0 && G === true) {
            R--;
          }
          break;
        }
      }
      if (D > V && S[R - 1] !== undefined && S[R - 1] !== vLS9) {
        return m.leftReverse(k, V);
      }
      k.setSelectionRange(R, R, "forward");
    },
  };
  function C(k) {
    t("click", k);
    c = undefined;
  }
  function y(k) {
    t("keydown", k);
    if (f246(k) === true || k.altKey === true) {
      return;
    }
    const R = r.value;
    const V = R.selectionStart;
    const S = R.selectionEnd;
    if (!k.shiftKey) {
      c = undefined;
    }
    if (k.keyCode === 37 || k.keyCode === 39) {
      if (k.shiftKey && c === undefined) {
        c = R.selectionDirection === "forward" ? V : S;
      }
      const G =
        m[
          (k.keyCode === 39 ? "right" : "left") +
            (e.reverseFillMask === true ? "Reverse" : "")
        ];
      k.preventDefault();
      G(R, c === V ? S : V);
      if (k.shiftKey) {
        const D = R.selectionStart;
        R.setSelectionRange(Math.min(c, D), Math.max(c, D), "forward");
      }
    } else if (k.keyCode === 8 && e.reverseFillMask !== true && V === S) {
      m.left(R, V);
      R.setSelectionRange(R.selectionStart, S, "backward");
    } else if (k.keyCode === 46 && e.reverseFillMask === true && V === S) {
      m.rightReverse(R, S);
      R.setSelectionRange(V, R.selectionEnd, "forward");
    }
  }
  function x(k) {
    if (k == null || k === "") {
      return "";
    }
    if (e.reverseFillMask === true) {
      return L(k);
    }
    const R = o;
    let V = 0;
    let S = "";
    for (let G = 0; G < R.length; G++) {
      const D = k[V];
      const v237 = R[G];
      if (typeof v237 == "string") {
        S += v237;
        if (D === v237) {
          V++;
        }
      } else if (D !== undefined && v237.regex.test(D)) {
        S += v237.transform !== undefined ? v237.transform(D) : D;
        V++;
      } else {
        return S;
      }
    }
    return S;
  }
  function L(k) {
    const R = o;
    const V = i.indexOf(vLS9);
    let S = k.length - 1;
    let G = "";
    for (let D = R.length - 1; D >= 0 && S !== -1; D--) {
      const v238 = R[D];
      let J = k[S];
      if (typeof v238 == "string") {
        G = v238 + G;
        if (J === v238) {
          S--;
        }
      } else if (J !== undefined && v238.regex.test(J)) {
        do {
          G = (v238.transform !== undefined ? v238.transform(J) : J) + G;
          S--;
          J = k[S];
        } while (V === D && J !== undefined && v238.regex.test(J));
      } else {
        return G;
      }
    }
    return G;
  }
  function I(k) {
    if (typeof k != "string" || a === undefined) {
      if (typeof k == "number") {
        return a("" + k);
      } else {
        return k;
      }
    } else {
      return a(k);
    }
  }
  function B(k) {
    if (s.length - k.length <= 0) {
      return k;
    } else if (e.reverseFillMask === true && k.length !== 0) {
      return s.slice(0, -k.length) + k;
    } else {
      return k + s.slice(k.length);
    }
  }
  return {
    innerValue: f,
    hasMask: u,
    moveCursorForPaste: b,
    updateMaskValue: A,
    onMaskedKeydown: y,
    onMaskedClick: C,
  };
}
const vO77 = {
  name: String,
};
function f748(e) {
  return M(() => ({
    type: "hidden",
    name: e.name,
    value: e.modelValue,
  }));
}
function f749(e = {}) {
  return (t, n, r) => {
    t[n](
      q("input", {
        class: "hidden" + (r || ""),
        ...e.value,
      })
    );
  };
}
function f750(e) {
  return M(() => e.name || e.for);
}
function f751(e, t) {
  function n() {
    const r = e.modelValue;
    try {
      const i =
        "DataTransfer" in window
          ? new DataTransfer()
          : "ClipboardEvent" in window
          ? new ClipboardEvent("").clipboardData
          : undefined;
      if (Object(r) === r) {
        ("length" in r ? Array.from(r) : [r]).forEach((s) => {
          i.items.add(s);
        });
      }
      return {
        files: i.files,
      };
    } catch {
      return {
        files: undefined,
      };
    }
  }
  return M(
    t === true
      ? () => {
          if (e.type === "file") {
            return n();
          }
        }
      : n
  );
}
const v239 =
  /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
const v240 =
  /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u;
const v241 = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;
const v242 = /[a-z0-9_ -]$/i;
function f752(e) {
  return function (n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== true) {
        return;
      }
      n.target.qComposing = false;
      e(n);
    } else if (
      n.type === "compositionupdate" &&
      n.target.qComposing !== true &&
      typeof n.data == "string" &&
      (vO27.is.firefox === true
        ? v242.test(n.data) === false
        : v239.test(n.data) === true ||
          v240.test(n.data) === true ||
          v241.test(n.data) === true) === true
    ) {
      n.target.qComposing = true;
    }
  };
}
const vF23110 = f231({
  name: "QInput",
  inheritAttrs: false,
  props: {
    ...vO73,
    ...vO76,
    ...vO77,
    modelValue: [String, Number, FileList],
    shadowText: String,
    type: {
      type: String,
      default: "text",
    },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
  },
  emits: [...vA42, "paste", "change", "keydown", "click", "animationend"],
  setup(e, { emit: t, attrs: n }) {
    const { proxy: r } = vF79();
    const { $q: i } = r;
    const s = {};
    let o = NaN;
    let a;
    let l;
    let c = null;
    let u;
    const f = f52(null);
    const d = f750(e);
    const {
      innerValue: h,
      hasMask: p,
      moveCursorForPaste: E,
      updateMaskValue: A,
      onMaskedKeydown: b,
      onMaskedClick: m,
    } = f747(e, t, J, f);
    const C = f751(e, true);
    const y = M(() => f743(h.value));
    const x = f752(D);
    const L = f744({
      changeEvent: true,
    });
    const I = M(() => e.type === "textarea" || e.autogrow === true);
    const B = M(
      () =>
        I.value === true ||
        ["text", "search", "url", "tel", "password"].includes(e.type)
    );
    const k = M(() => {
      const z = {
        ...L.splitAttrs.listeners.value,
        onInput: D,
        onPaste: G,
        onChange: K,
        onBlur: f754,
        onFocus: f237,
      };
      z.onCompositionstart = z.onCompositionupdate = z.onCompositionend = x;
      if (p.value === true) {
        z.onKeydown = b;
        z.onClick = m;
      }
      if (e.autogrow === true) {
        z.onAnimationend = f753;
      }
      return z;
    });
    const R = M(() => {
      const z = {
        tabindex: 0,
        "data-autofocus": e.autofocus === true || undefined,
        rows: e.type === "textarea" ? 6 : undefined,
        "aria-label": e.label,
        name: d.value,
        ...L.splitAttrs.attributes.value,
        id: L.targetUid.value,
        maxlength: e.maxlength,
        disabled: e.disable === true,
        readonly: e.readonly === true,
      };
      if (I.value === false) {
        z.type = e.type;
      }
      if (e.autogrow === true) {
        z.rows = 1;
      }
      return z;
    });
    f150(
      () => e.type,
      () => {
        if (f.value) {
          f.value.value = e.modelValue;
        }
      }
    );
    f150(
      () => e.modelValue,
      (z) => {
        if (p.value === true) {
          if (l === true && ((l = false), String(z) === o)) {
            return;
          }
          A(z);
        } else if (h.value !== z) {
          h.value = z;
          if (e.type === "number" && s.hasOwnProperty("value") === true) {
            if (a === true) {
              a = false;
            } else {
              delete s.value;
            }
          }
        }
        if (e.autogrow === true) {
          f70(Q);
        }
      }
    );
    f150(
      () => e.autogrow,
      (z) => {
        if (z === true) {
          f70(Q);
        } else if (f.value !== null && n.rows > 0) {
          f.value.style.height = "auto";
        }
      }
    );
    f150(
      () => e.dense,
      () => {
        if (e.autogrow === true) {
          f70(Q);
        }
      }
    );
    function V() {
      f667(() => {
        const z = document.activeElement;
        if (
          f.value !== null &&
          f.value !== z &&
          (z === null || z.id !== L.targetUid.value)
        ) {
          f.value.focus({
            preventScroll: true,
          });
        }
      });
    }
    function S() {
      f.value?.select();
    }
    function G(z) {
      if (p.value === true && e.reverseFillMask !== true) {
        const v243 = z.target;
        E(v243, v243.selectionStart, v243.selectionEnd);
      }
      t("paste", z);
    }
    function D(z) {
      if (!z || !z.target) {
        return;
      }
      if (e.type === "file") {
        t("update:modelValue", z.target.files);
        return;
      }
      const v244 = z.target.value;
      if (z.target.qComposing === true) {
        s.value = v244;
        return;
      }
      if (p.value === true) {
        A(v244, false, z.inputType);
      } else {
        J(v244);
        if (B.value === true && z.target === document.activeElement) {
          const { selectionStart: Ae, selectionEnd: Re } = z.target;
          if (Ae !== undefined && Re !== undefined) {
            f70(() => {
              if (
                z.target === document.activeElement &&
                v244.indexOf(z.target.value) === 0
              ) {
                z.target.setSelectionRange(Ae, Re);
              }
            });
          }
        }
      }
      if (e.autogrow === true) {
        Q();
      }
    }
    function f753(z) {
      t("animationend", z);
      Q();
    }
    function J(z, p39) {
      u = () => {
        c = null;
        if (e.type !== "number" && s.hasOwnProperty("value") === true) {
          delete s.value;
        }
        if (e.modelValue !== z && o !== z) {
          o = z;
          if (p39 === true) {
            l = true;
          }
          t("update:modelValue", z);
          f70(() => {
            if (o === z) {
              o = NaN;
            }
          });
        }
        u = undefined;
      };
      if (e.type === "number") {
        a = true;
        s.value = z;
      }
      if (e.debounce !== undefined) {
        if (c !== null) {
          clearTimeout(c);
        }
        s.value = z;
        c = setTimeout(u, e.debounce);
      } else {
        u();
      }
    }
    function Q() {
      requestAnimationFrame(() => {
        const z = f.value;
        if (z !== null) {
          const v245 = z.parentNode.style;
          const { scrollTop: Ae } = z;
          const { overflowY: Re, maxHeight: ne } =
            i.platform.is.firefox === true ? {} : window.getComputedStyle(z);
          const F = Re !== undefined && Re !== "scroll";
          if (F === true) {
            z.style.overflowY = "hidden";
          }
          v245.marginBottom = z.scrollHeight - 1 + "px";
          z.style.height = "1px";
          z.style.height = z.scrollHeight + "px";
          if (F === true) {
            z.style.overflowY =
              parseInt(ne, 10) < z.scrollHeight ? "auto" : "hidden";
          }
          v245.marginBottom = "";
          z.scrollTop = Ae;
        }
      });
    }
    function K(z) {
      x(z);
      if (c !== null) {
        clearTimeout(c);
        c = null;
      }
      u?.();
      t("change", z.target.value);
    }
    function f754(z) {
      if (z !== undefined) {
        f237(z);
      }
      if (c !== null) {
        clearTimeout(c);
        c = null;
      }
      u?.();
      a = false;
      l = false;
      delete s.value;
      if (e.type !== "file") {
        setTimeout(() => {
          if (f.value !== null) {
            f.value.value = h.value !== undefined ? h.value : "";
          }
        });
      }
    }
    function f755() {
      if (s.hasOwnProperty("value") === true) {
        return s.value;
      } else if (h.value !== undefined) {
        return h.value;
      } else {
        return "";
      }
    }
    vVF495(() => {
      f754();
    });
    vVF492(() => {
      if (e.autogrow === true) {
        Q();
      }
    });
    Object.assign(L, {
      innerValue: h,
      fieldClass: M(
        () =>
          `q-${I.value === true ? "textarea" : "input"}${
            e.autogrow === true ? " q-textarea--autogrow" : ""
          }`
      ),
      hasShadow: M(
        () =>
          e.type !== "file" &&
          typeof e.shadowText == "string" &&
          e.shadowText.length !== 0
      ),
      inputRef: f,
      emitValue: J,
      hasValue: y,
      floatingLabel: M(
        () =>
          (y.value === true &&
            (e.type !== "number" || isNaN(h.value) === false)) ||
          f743(e.displayValue)
      ),
      getControl: () =>
        q(I.value === true ? "textarea" : "input", {
          ref: f,
          class: ["q-field__native q-placeholder", e.inputClass],
          style: e.inputStyle,
          ...R.value,
          ...k.value,
          ...(e.type !== "file"
            ? {
                value: f755(),
              }
            : C.value),
        }),
      getShadowControl: () =>
        q(
          "div",
          {
            class:
              "q-field__native q-field__shadow absolute-bottom no-pointer-events" +
              (I.value === true ? "" : " text-no-wrap"),
          },
          [
            q(
              "span",
              {
                class: "invisible",
              },
              f755()
            ),
            q("span", e.shadowText),
          ]
        ),
    });
    const vF745 = f745(L);
    Object.assign(r, {
      focus: V,
      select: S,
      getNativeElement: () => f.value,
    });
    f227(r, "nativeEl", () => f.value);
    return vF745;
  },
});
function f756(e, t) {
  const n = f52(null);
  const r = M(() =>
    e.disable === true
      ? null
      : q("span", {
          ref: n,
          class: "no-outline",
          tabindex: -1,
        })
  );
  function i(s) {
    const o = t.value;
    if (s?.qAvoidFocus !== true) {
      if (s?.type.indexOf("key") === 0) {
        if (
          document.activeElement !== o &&
          o?.contains(document.activeElement) === true
        ) {
          o.focus();
        }
      } else if (
        n.value !== null &&
        (s === undefined || o?.contains(s.target) === true)
      ) {
        n.value.focus();
      }
    }
  }
  return {
    refocusTargetEl: r,
    refocusTarget: i,
  };
}
const vO78 = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60,
};
const vF145 = () =>
  q(
    "svg",
    {
      key: "svg",
      class: "q-radio__bg absolute non-selectable",
      viewBox: "0 0 24 24",
    },
    [
      q("path", {
        d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12",
      }),
      q("path", {
        class: "q-radio__check",
        d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6",
      }),
    ]
  );
const vF23111 = f231({
  name: "QRadio",
  props: {
    ...vO67,
    ...vO54,
    ...vO77,
    modelValue: {
      required: true,
    },
    val: {
      required: true,
    },
    label: String,
    leftLabel: Boolean,
    checkedIcon: String,
    uncheckedIcon: String,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number],
  },
  emits: ["update:modelValue"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: r } = vF79();
    const i = f735(e, r.$q);
    const s = f719(e, vO78);
    const o = f52(null);
    const { refocusTargetEl: a, refocusTarget: l } = f756(e, o);
    const c = M(() => f49(e.modelValue) === f49(e.val));
    const u = M(
      () =>
        "q-radio cursor-pointer no-outline row inline no-wrap items-center" +
        (e.disable === true ? " disabled" : "") +
        (i.value === true ? " q-radio--dark" : "") +
        (e.dense === true ? " q-radio--dense" : "") +
        (e.leftLabel === true ? " reverse" : "")
    );
    const f = M(() => {
      const y =
        e.color !== undefined && (e.keepColor === true || c.value === true)
          ? ` text-${e.color}`
          : "";
      return `q-radio__inner relative-position q-radio__inner--${
        c.value === true ? "truthy" : "falsy"
      }${y}`;
    });
    const d = M(
      () => (c.value === true ? e.checkedIcon : e.uncheckedIcon) || null
    );
    const h = M(() => (e.disable === true ? -1 : e.tabindex || 0));
    const p = M(() => {
      const y = {
        type: "radio",
      };
      if (e.name !== undefined) {
        Object.assign(y, {
          ".checked": c.value === true,
          "^checked": c.value === true ? "checked" : undefined,
          name: e.name,
          value: e.val,
        });
      }
      return y;
    });
    const E = f749(p);
    function A(y) {
      if (y !== undefined) {
        f239(y);
        l(y);
      }
      if (e.disable !== true && c.value !== true) {
        n("update:modelValue", e.val, y);
      }
    }
    function b(y) {
      if (y.keyCode === 13 || y.keyCode === 32) {
        f239(y);
      }
    }
    function m(y) {
      if (y.keyCode === 13 || y.keyCode === 32) {
        A(y);
      }
    }
    Object.assign(r, {
      set: A,
    });
    const C = vF145();
    return () => {
      const y =
        d.value !== null
          ? [
              q(
                "div",
                {
                  key: "icon",
                  class:
                    "q-radio__icon-container absolute-full flex flex-center no-wrap",
                },
                [
                  q(vF2313, {
                    class: "q-radio__icon",
                    name: d.value,
                  }),
                ]
              ),
            ]
          : [C];
      if (e.disable !== true) {
        E(y, "unshift", " q-radio__native q-ma-none q-pa-none");
      }
      const x = [
        q(
          "div",
          {
            class: f.value,
            style: s.value,
            "aria-hidden": "true",
          },
          y
        ),
      ];
      if (a.value !== null) {
        x.push(a.value);
      }
      const L =
        e.label !== undefined ? f700(t.default, [e.label]) : f698(t.default);
      if (L !== undefined) {
        x.push(
          q(
            "div",
            {
              class: "q-radio__label q-anchor--skip",
            },
            L
          )
        );
      }
      return q(
        "div",
        {
          ref: o,
          class: u.value,
          tabindex: h.value,
          role: "radio",
          "aria-label": e.label,
          "aria-checked": c.value === true ? "true" : "false",
          "aria-disabled": e.disable === true ? "true" : undefined,
          onClick: A,
          onKeydown: b,
          onKeyup: m,
        },
        x
      );
    };
  },
});
const vO79 = {
  ...vO67,
  ...vO54,
  ...vO77,
  modelValue: {
    required: true,
    default: null,
  },
  val: {},
  trueValue: {
    default: true,
  },
  falseValue: {
    default: false,
  },
  indeterminateValue: {
    default: null,
  },
  checkedIcon: String,
  uncheckedIcon: String,
  indeterminateIcon: String,
  toggleOrder: {
    type: String,
    validator: (e) => e === "tf" || e === "ft",
  },
  toggleIndeterminate: Boolean,
  label: String,
  leftLabel: Boolean,
  color: String,
  keepColor: Boolean,
  dense: Boolean,
  disable: Boolean,
  tabindex: [String, Number],
};
const vA44 = ["update:modelValue"];
function f757(e, t) {
  const { props: n, slots: r, emit: i, proxy: s } = vF79();
  const { $q: o } = s;
  const a = f735(n, o);
  const l = f52(null);
  const { refocusTargetEl: c, refocusTarget: u } = f756(n, l);
  const f = f719(n, vO78);
  const d = M(() => n.val !== undefined && Array.isArray(n.modelValue));
  const h = M(() => {
    const S = f49(n.val);
    if (d.value === true) {
      return n.modelValue.findIndex((G) => f49(G) === S);
    } else {
      return -1;
    }
  });
  const p = M(() =>
    d.value === true ? h.value !== -1 : f49(n.modelValue) === f49(n.trueValue)
  );
  const E = M(() =>
    d.value === true ? h.value === -1 : f49(n.modelValue) === f49(n.falseValue)
  );
  const A = M(() => p.value === false && E.value === false);
  const b = M(() => (n.disable === true ? -1 : n.tabindex || 0));
  const m = M(
    () =>
      `q-${e} cursor-pointer no-outline row inline no-wrap items-center${
        n.disable === true ? " disabled" : ""
      }${a.value === true ? ` q-${e}--dark` : ""}${
        n.dense === true ? ` q-${e}--dense` : ""
      }${n.leftLabel === true ? " reverse" : ""}`
  );
  const C = M(() => {
    const S =
      p.value === true ? "truthy" : E.value === true ? "falsy" : "indet";
    const G =
      n.color !== undefined &&
      (n.keepColor === true ||
        (e === "toggle" ? p.value === true : E.value !== true))
        ? ` text-${n.color}`
        : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${S}${G}`;
  });
  const y = M(() => {
    const S = {
      type: "checkbox",
    };
    if (n.name !== undefined) {
      Object.assign(S, {
        ".checked": p.value,
        "^checked": p.value === true ? "checked" : undefined,
        name: n.name,
        value: d.value === true ? n.val : n.trueValue,
      });
    }
    return S;
  });
  const x = f749(y);
  const L = M(() => {
    const S = {
      tabindex: b.value,
      role: e === "toggle" ? "switch" : "checkbox",
      "aria-label": n.label,
      "aria-checked":
        A.value === true ? "mixed" : p.value === true ? "true" : "false",
    };
    if (n.disable === true) {
      S["aria-disabled"] = "true";
    }
    return S;
  });
  function I(S) {
    if (S !== undefined) {
      f239(S);
      u(S);
    }
    if (n.disable !== true) {
      i("update:modelValue", B(), S);
    }
  }
  function B() {
    if (d.value === true) {
      if (p.value === true) {
        const S = n.modelValue.slice();
        S.splice(h.value, 1);
        return S;
      }
      return n.modelValue.concat([n.val]);
    }
    if (p.value === true) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === false) {
        return n.falseValue;
      }
    } else if (E.value === true) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === false) {
        return n.trueValue;
      }
    } else if (n.toggleOrder !== "ft") {
      return n.trueValue;
    } else {
      return n.falseValue;
    }
    return n.indeterminateValue;
  }
  function k(S) {
    if (S.keyCode === 13 || S.keyCode === 32) {
      f239(S);
    }
  }
  function R(S) {
    if (S.keyCode === 13 || S.keyCode === 32) {
      I(S);
    }
  }
  const V = t(p, A);
  Object.assign(s, {
    toggle: I,
  });
  return () => {
    const S = V();
    if (n.disable !== true) {
      x(S, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    }
    const G = [
      q(
        "div",
        {
          class: C.value,
          style: f.value,
          "aria-hidden": "true",
        },
        S
      ),
    ];
    if (c.value !== null) {
      G.push(c.value);
    }
    const D =
      n.label !== undefined ? f700(r.default, [n.label]) : f698(r.default);
    if (D !== undefined) {
      G.push(
        q(
          "div",
          {
            class: `q-${e}__label q-anchor--skip`,
          },
          D
        )
      );
    }
    return q(
      "div",
      {
        ref: l,
        class: m.value,
        ...L.value,
        onClick: I,
        onKeydown: k,
        onKeyup: R,
      },
      G
    );
  };
}
const vF146 = () =>
  q(
    "div",
    {
      key: "svg",
      class: "q-checkbox__bg absolute",
    },
    [
      q(
        "svg",
        {
          class: "q-checkbox__svg fit absolute-full",
          viewBox: "0 0 24 24",
        },
        [
          q("path", {
            class: "q-checkbox__truthy",
            fill: "none",
            d: "M1.73,12.91 8.1,19.28 22.79,4.59",
          }),
          q("path", {
            class: "q-checkbox__indet",
            d: "M4,14H20V10H4",
          }),
        ]
      ),
    ]
  );
const vF23112 = f231({
  name: "QCheckbox",
  props: vO79,
  emits: vA44,
  setup(e) {
    const t = vF146();
    function n(r, i) {
      const s = M(
        () =>
          (r.value === true
            ? e.checkedIcon
            : i.value === true
            ? e.indeterminateIcon
            : e.uncheckedIcon) || null
      );
      return () =>
        s.value !== null
          ? [
              q(
                "div",
                {
                  key: "icon",
                  class:
                    "q-checkbox__icon-container absolute-full flex flex-center no-wrap",
                },
                [
                  q(vF2313, {
                    class: "q-checkbox__icon",
                    name: s.value,
                  }),
                ]
              ),
            ]
          : [t];
    }
    return f757("checkbox", n);
  },
});
const vF23113 = f231({
  name: "QToggle",
  props: {
    ...vO79,
    icon: String,
    iconColor: String,
  },
  emits: vA44,
  setup(e) {
    function t(n, r) {
      const i = M(
        () =>
          (n.value === true
            ? e.checkedIcon
            : r.value === true
            ? e.indeterminateIcon
            : e.uncheckedIcon) || e.icon
      );
      const s = M(() => (n.value === true ? e.iconColor : null));
      return () => [
        q("div", {
          class: "q-toggle__track",
        }),
        q(
          "div",
          {
            class: "q-toggle__thumb absolute flex flex-center no-wrap",
          },
          i.value !== undefined
            ? [
                q(vF2313, {
                  name: i.value,
                  color: s.value,
                }),
              ]
            : undefined
        ),
      ];
    }
    return f757("toggle", t);
  },
});
const vO80 = {
  radio: vF23111,
  checkbox: vF23112,
  toggle: vF23113,
};
const v246 = Object.keys(vO80);
function f758(e, t) {
  if (typeof e == "function") {
    return e;
  }
  const n = e !== undefined ? e : t;
  return (r) => r[n];
}
const vF23114 = f231({
  name: "QOptionGroup",
  props: {
    ...vO67,
    modelValue: {
      required: true,
    },
    options: {
      type: Array,
      validator: (e) => e.every(f259),
      default: () => [],
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    name: String,
    type: {
      type: String,
      default: "radio",
      validator: (e) => v246.includes(e),
    },
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    size: String,
    leftLabel: Boolean,
    inline: Boolean,
    disable: Boolean,
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const {
      proxy: { $q: r },
    } = vF79();
    const i = Array.isArray(e.modelValue);
    if (e.type === "radio") {
      if (i === true) {
        console.error("q-option-group: model should not be array");
      }
    } else if (i === false) {
      console.error("q-option-group: model should be array in your case");
    }
    const s = f735(e, r);
    const o = M(() => vO80[e.type]);
    const a = M(() => f758(e.optionValue, "value"));
    const l = M(() => f758(e.optionLabel, "label"));
    const c = M(() => f758(e.optionDisable, "disable"));
    const u = M(() =>
      e.options.map((p) => ({
        val: a.value(p),
        name: p.name === undefined ? e.name : p.name,
        disable: e.disable || c.value(p),
        leftLabel: p.leftLabel === undefined ? e.leftLabel : p.leftLabel,
        color: p.color === undefined ? e.color : p.color,
        checkedIcon: p.checkedIcon,
        uncheckedIcon: p.uncheckedIcon,
        dark: p.dark === undefined ? s.value : p.dark,
        size: p.size === undefined ? e.size : p.size,
        dense: e.dense,
        keepColor: p.keepColor === undefined ? e.keepColor : p.keepColor,
      }))
    );
    const f = M(
      () =>
        "q-option-group q-gutter-x-sm" +
        (e.inline === true ? " q-option-group--inline" : "")
    );
    const d = M(() => {
      const p = {
        role: "group",
      };
      if (e.type === "radio") {
        p.role = "radiogroup";
        if (e.disable === true) {
          p["aria-disabled"] = "true";
        }
      }
      return p;
    });
    function h(p) {
      t("update:modelValue", p);
    }
    return () =>
      q(
        "div",
        {
          class: f.value,
          ...d.value,
        },
        e.options.map((p, E) => {
          const A =
            n["label-" + E] !== undefined
              ? () => n["label-" + E](p)
              : n.label !== undefined
              ? () => n.label(p)
              : undefined;
          return q("div", [
            q(
              o.value,
              {
                label: A === undefined ? l.value(p) : null,
                modelValue: e.modelValue,
                "onUpdate:modelValue": h,
                ...u.value[E],
              },
              A
            ),
          ]);
        })
      );
  },
});
const vF23115 = f231({
  name: "DialogPluginComponent",
  props: {
    ...vO67,
    title: String,
    message: String,
    prompt: Object,
    options: Object,
    progress: [Boolean, Object],
    html: Boolean,
    ok: {
      type: [String, Object, Boolean],
      default: true,
    },
    cancel: [String, Object, Boolean],
    focus: {
      type: String,
      default: "ok",
      validator: (e) => ["ok", "cancel", "none"].includes(e),
    },
    stackButtons: Boolean,
    color: String,
    cardClass: [String, Array, Object],
    cardStyle: [String, Array, Object],
  },
  emits: ["ok", "hide"],
  setup(e, { emit: t }) {
    const { proxy: n } = vF79();
    const { $q: r } = n;
    const i = f735(e, r);
    const s = f52(null);
    const o = f52(
      e.prompt !== undefined
        ? e.prompt.model
        : e.options !== undefined
        ? e.options.model
        : undefined
    );
    const a = M(
      () =>
        "q-dialog-plugin" +
        (i.value === true ? " q-dialog-plugin--dark q-dark" : "") +
        (e.progress !== false ? " q-dialog-plugin--progress" : "")
    );
    const l = M(() => e.color || (i.value === true ? "amber" : "primary"));
    const c = M(() =>
      e.progress === false
        ? null
        : f259(e.progress) === true
        ? {
            component: e.progress.spinner || vF2314,
            props: {
              color: e.progress.color || l.value,
            },
          }
        : {
            component: vF2314,
            props: {
              color: l.value,
            },
          }
    );
    const u = M(() => e.prompt !== undefined || e.options !== undefined);
    const f = M(() => {
      if (u.value !== true) {
        return {};
      }
      const {
        model: D,
        isValid: ee,
        items: J,
        ...Q
      } = e.prompt !== undefined ? e.prompt : e.options;
      return Q;
    });
    const d = M(() =>
      f259(e.ok) === true || e.ok === true ? r.lang.label.ok : e.ok
    );
    const h = M(() =>
      f259(e.cancel) === true || e.cancel === true
        ? r.lang.label.cancel
        : e.cancel
    );
    const p = M(() =>
      e.prompt !== undefined
        ? e.prompt.isValid !== undefined && e.prompt.isValid(o.value) !== true
        : e.options !== undefined
        ? e.options.isValid !== undefined && e.options.isValid(o.value) !== true
        : false
    );
    const E = M(() => ({
      color: l.value,
      label: d.value,
      ripple: false,
      disable: p.value,
      ...(f259(e.ok) === true
        ? e.ok
        : {
            flat: true,
          }),
      "data-autofocus": (e.focus === "ok" && u.value !== true) || undefined,
      onClick: C,
    }));
    const A = M(() => ({
      color: l.value,
      label: h.value,
      ripple: false,
      ...(f259(e.cancel) === true
        ? e.cancel
        : {
            flat: true,
          }),
      "data-autofocus": (e.focus === "cancel" && u.value !== true) || undefined,
      onClick: y,
    }));
    f150(() => e.prompt && e.prompt.model, L);
    f150(() => e.options && e.options.model, L);
    function b() {
      s.value.show();
    }
    function m() {
      s.value.hide();
    }
    function C() {
      t("ok", f49(o.value));
      m();
    }
    function y() {
      m();
    }
    function x() {
      t("hide");
    }
    function L(D) {
      o.value = D;
    }
    function I(D) {
      if (
        p.value !== true &&
        e.prompt.type !== "textarea" &&
        f247(D, 13) === true
      ) {
        C();
      }
    }
    function B(D, p40) {
      if (e.html === true) {
        return q(vF2317, {
          class: D,
          innerHTML: p40,
        });
      } else {
        return q(
          vF2317,
          {
            class: D,
          },
          () => p40
        );
      }
    }
    function k() {
      return [
        q(vF23110, {
          color: l.value,
          dense: true,
          autofocus: true,
          dark: i.value,
          ...f.value,
          modelValue: o.value,
          "onUpdate:modelValue": L,
          onKeyup: I,
        }),
      ];
    }
    function R() {
      return [
        q(vF23114, {
          color: l.value,
          options: e.options.items,
          dark: i.value,
          ...f.value,
          modelValue: o.value,
          "onUpdate:modelValue": L,
        }),
      ];
    }
    function V() {
      const D = [];
      if (e.cancel) {
        D.push(q(vF2315, A.value));
      }
      if (e.ok) {
        D.push(q(vF2315, E.value));
      }
      return q(
        vF2318,
        {
          class: e.stackButtons === true ? "items-end" : "",
          vertical: e.stackButtons,
          align: "right",
        },
        () => D
      );
    }
    function S() {
      const D = [];
      if (e.title) {
        D.push(B("q-dialog__title", e.title));
      }
      if (e.progress !== false) {
        D.push(
          q(
            vF2317,
            {
              class: "q-dialog__progress",
            },
            () => q(c.value.component, c.value.props)
          )
        );
      }
      if (e.message) {
        D.push(B("q-dialog__message", e.message));
      }
      if (e.prompt !== undefined) {
        D.push(
          q(
            vF2317,
            {
              class: "scroll q-dialog-plugin__form",
            },
            k
          )
        );
      } else if (e.options !== undefined) {
        D.push(
          q(vF2319, {
            dark: i.value,
          }),
          q(
            vF2317,
            {
              class: "scroll q-dialog-plugin__form",
            },
            R
          ),
          q(vF2319, {
            dark: i.value,
          })
        );
      }
      if (e.ok || e.cancel) {
        D.push(V());
      }
      return D;
    }
    function G() {
      return [
        q(
          vF2316,
          {
            class: [a.value, e.cardClass],
            style: e.cardStyle,
            dark: i.value,
          },
          S
        ),
      ];
    }
    Object.assign(n, {
      show: b,
      hide: m,
    });
    return () =>
      q(
        vF2312,
        {
          ref: s,
          onHide: x,
        },
        G
      );
  },
});
function f759(e, t) {
  for (const n in t) {
    if (n !== "spinner" && Object(t[n]) === t[n]) {
      e[n] =
        Object(e[n]) !== e[n]
          ? {}
          : {
              ...e[n],
            };
      f759(e[n], t[n]);
    } else {
      e[n] = t[n];
    }
  }
}
function f760(e, t, n) {
  return (r) => {
    let i;
    let s;
    const o = r.component !== undefined;
    if (o === true) {
      const { component: m, componentProps: C } = r;
      i = typeof m == "string" ? n.component(m) : m;
      s = C || {};
    } else {
      const { class: m, style: C, ...y } = r;
      i = e;
      s = y;
      if (m !== undefined) {
        y.cardClass = m;
      }
      if (C !== undefined) {
        y.cardStyle = C;
      }
    }
    let a;
    let l = false;
    const c = f52(null);
    const u = f669(false, "dialog");
    const f = (m) => {
      if (c.value?.[m] !== undefined) {
        c.value[m]();
        return;
      }
      const C = a.$.subTree;
      if (C?.component) {
        if (C.component.proxy && C.component.proxy[m]) {
          C.component.proxy[m]();
          return;
        }
        if (
          C.component.subTree &&
          C.component.subTree.component &&
          C.component.subTree.component.proxy &&
          C.component.subTree.component.proxy[m]
        ) {
          C.component.subTree.component.proxy[m]();
          return;
        }
      }
      console.error("[Quasar] Incorrectly defined Dialog component");
    };
    const d = [];
    const h = [];
    const p = {
      onOk(m) {
        d.push(m);
        return p;
      },
      onCancel(m) {
        h.push(m);
        return p;
      },
      onDismiss(m) {
        d.push(m);
        h.push(m);
        return p;
      },
      hide() {
        f("hide");
        return p;
      },
      update(m) {
        if (a !== null) {
          if (o === true) {
            Object.assign(s, m);
          } else {
            const { class: C, style: y, ...x } = m;
            if (C !== undefined) {
              x.cardClass = C;
            }
            if (y !== undefined) {
              x.cardStyle = y;
            }
            f759(s, x);
          }
          a.$forceUpdate();
        }
        return p;
      },
    };
    const E = (m) => {
      l = true;
      d.forEach((C) => {
        C(m);
      });
    };
    const A = () => {
      b.unmount(u);
      f670(u);
      b = null;
      a = null;
      if (l !== true) {
        h.forEach((m) => {
          m();
        });
      }
    };
    let b = f261(
      {
        name: "QGlobalDialog",
        setup: () => () =>
          q(i, {
            ...s,
            ref: c,
            onOk: E,
            onHide: A,
            onVnodeMounted(...m) {
              if (typeof s.onVnodeMounted == "function") {
                s.onVnodeMounted(...m);
              }
              f70(() => f("show"));
            },
          }),
      },
      n
    );
    a = b.mount(u);
    return p;
  };
}
const vO81 = {
  install({ $q: e, parentApp: t }) {
    e.dialog = this.create = f760(vF23115, true, t);
  },
};
let v247;
let v248;
let vLN018 = 0;
let v249 = null;
let vO82 = {};
let vO83 = {};
const vO84 = {
  group: "__default_quasar_group__",
  delay: 0,
  message: false,
  html: false,
  spinnerSize: 80,
  spinnerColor: "",
  messageColor: "",
  backgroundColor: "",
  boxClass: "",
  spinner: vF2314,
  customClass: "",
};
const vO85 = {
  ...vO84,
};
function f761(e) {
  if (e?.group !== undefined && vO83[e.group] !== undefined) {
    return Object.assign(vO83[e.group], e);
  }
  const t =
    f259(e) === true && e.ignoreDefaults === true
      ? {
          ...vO84,
          ...e,
        }
      : {
          ...vO85,
          ...e,
        };
  vO83[t.group] = t;
  return t;
}
const vVF925 = vF92(
  {
    isActive: false,
  },
  {
    show(e) {
      vO82 = f761(e);
      const { group: t } = vO82;
      vVF925.isActive = true;
      if (v247 !== undefined) {
        vO82.uid = vLN018;
        v248.$forceUpdate();
      } else {
        vO82.uid = ++vLN018;
        if (v249 !== null) {
          clearTimeout(v249);
        }
        v249 = setTimeout(() => {
          v249 = null;
          const n = f669("q-loading");
          v247 = f261(
            {
              name: "QLoading",
              setup() {
                vVF492(() => {
                  f696(true);
                });
                function r() {
                  if (vVF925.isActive !== true && v247 !== undefined) {
                    f696(false);
                    v247.unmount(n);
                    f670(n);
                    v247 = undefined;
                    v248 = undefined;
                  }
                }
                function i() {
                  if (vVF925.isActive !== true) {
                    return null;
                  }
                  const s = [
                    q(vO82.spinner, {
                      class: "q-loading__spinner",
                      color: vO82.spinnerColor,
                      size: vO82.spinnerSize,
                    }),
                  ];
                  if (vO82.message) {
                    s.push(
                      q("div", {
                        class:
                          "q-loading__message" +
                          (vO82.messageColor
                            ? ` text-${vO82.messageColor}`
                            : ""),
                        [vO82.html === true ? "innerHTML" : "textContent"]:
                          vO82.message,
                      })
                    );
                  }
                  return q(
                    "div",
                    {
                      class:
                        "q-loading fullscreen flex flex-center z-max " +
                        vO82.customClass.trim(),
                      key: vO82.uid,
                    },
                    [
                      q("div", {
                        class:
                          "q-loading__backdrop" +
                          (vO82.backgroundColor
                            ? ` bg-${vO82.backgroundColor}`
                            : ""),
                      }),
                      q(
                        "div",
                        {
                          class:
                            "q-loading__box column items-center " +
                            vO82.boxClass,
                        },
                        s
                      ),
                    ]
                  );
                }
                return () =>
                  q(
                    vVF82,
                    {
                      name: "q-transition--fade",
                      appear: true,
                      onAfterLeave: r,
                    },
                    i
                  );
              },
            },
            vVF925.__parentApp
          );
          v248 = v247.mount(n);
        }, vO82.delay);
      }
      return (n) => {
        if (n === undefined || Object(n) !== n) {
          vVF925.hide(t);
          return;
        }
        vVF925.show({
          ...n,
          group: t,
        });
      };
    },
    hide(e) {
      if (vVF925.isActive === true) {
        if (e === undefined) {
          vO83 = {};
        } else {
          if (vO83[e] === undefined) {
            return;
          }
          {
            delete vO83[e];
            const t = Object.keys(vO83);
            if (t.length !== 0) {
              const n = t[t.length - 1];
              vVF925.show({
                group: n,
              });
              return;
            }
          }
        }
        if (v249 !== null) {
          clearTimeout(v249);
          v249 = null;
        }
        vVF925.isActive = false;
      }
    },
    setDefaults(e) {
      if (f259(e) === true) {
        Object.assign(vO85, e);
      }
    },
    install({ $q: e, parentApp: t }) {
      e.loading = this;
      vVF925.__parentApp = t;
      if (e.config.loading !== undefined) {
        this.setDefaults(e.config.loading);
      }
    },
  }
);
const vF23116 = f231({
  name: "QAvatar",
  props: {
    ...vO54,
    fontSize: String,
    color: String,
    textColor: String,
    icon: String,
    square: Boolean,
    rounded: Boolean,
  },
  setup(e, { slots: t }) {
    const n = f719(e);
    const r = M(
      () =>
        "q-avatar" +
        (e.color ? ` bg-${e.color}` : "") +
        (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") +
        (e.square === true
          ? " q-avatar--square"
          : e.rounded === true
          ? " rounded-borders"
          : "")
    );
    const i = M(() =>
      e.fontSize
        ? {
            fontSize: e.fontSize,
          }
        : null
    );
    return () => {
      const s =
        e.icon !== undefined
          ? [
              q(vF2313, {
                name: e.icon,
              }),
            ]
          : undefined;
      return q(
        "div",
        {
          class: r.value,
          style: n.value,
        },
        [
          q(
            "div",
            {
              class: "q-avatar__content row flex-center overflow-hidden",
              style: i.value,
            },
            f701(t.default, s)
          ),
        ]
      );
    };
  },
});
let vLN019 = 0;
const vO86 = {};
const vO87 = {};
const vO88 = {};
const vO89 = {};
const v250 = /^\s*$/;
const vA45 = [];
const vA46 = [undefined, null, true, false, ""];
const vA47 = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "top",
  "bottom",
  "left",
  "right",
  "center",
];
const vA48 = ["top-left", "top-right", "bottom-left", "bottom-right"];
const vO90 = {
  positive: {
    icon: (e) => e.iconSet.type.positive,
    color: "positive",
  },
  negative: {
    icon: (e) => e.iconSet.type.negative,
    color: "negative",
  },
  warning: {
    icon: (e) => e.iconSet.type.warning,
    color: "warning",
    textColor: "dark",
  },
  info: {
    icon: (e) => e.iconSet.type.info,
    color: "info",
  },
  ongoing: {
    group: false,
    timeout: 0,
    spinner: true,
    color: "grey-8",
  },
};
function f762(e, t, n) {
  if (!e) {
    return f765("parameter required");
  }
  let r;
  const i = {
    textColor: "white",
  };
  if (e.ignoreDefaults !== true) {
    Object.assign(i, vO86);
  }
  if (f259(e) === false) {
    if (i.type) {
      Object.assign(i, vO90[i.type]);
    }
    e = {
      message: e,
    };
  }
  Object.assign(i, vO90[e.type || i.type], e);
  if (typeof i.icon == "function") {
    i.icon = i.icon(t);
  }
  if (i.spinner) {
    if (i.spinner === true) {
      i.spinner = vF2314;
    }
    i.spinner = f50(i.spinner);
  } else {
    i.spinner = false;
  }
  i.meta = {
    hasMedia: i.spinner !== false || !!i.icon || !!i.avatar,
    hasText: f764(i.message) || f764(i.caption),
  };
  if (i.position) {
    if (vA47.includes(i.position) === false) {
      return f765("wrong position", e);
    }
  } else {
    i.position = "bottom";
  }
  if (vA46.includes(i.timeout) === true) {
    i.timeout = 5000;
  } else {
    const l = Number(i.timeout);
    if (isNaN(l) || l < 0) {
      return f765("wrong timeout", e);
    }
    i.timeout = Number.isFinite(l) ? l : 0;
  }
  if (i.timeout === 0) {
    i.progress = false;
  } else if (i.progress === true) {
    i.meta.progressClass =
      "q-notification__progress" +
      (i.progressClass ? ` ${i.progressClass}` : "");
    i.meta.progressStyle = {
      animationDuration: `${i.timeout + 1000}ms`,
    };
  }
  const s = (Array.isArray(e.actions) === true ? e.actions : [])
    .concat(
      e.ignoreDefaults !== true && Array.isArray(vO86.actions) === true
        ? vO86.actions
        : []
    )
    .concat(
      Array.isArray(vO90[e.type]?.actions) === true ? vO90[e.type].actions : []
    );
  const { closeBtn: o } = i;
  if (o) {
    s.push({
      label: typeof o == "string" ? o : t.lang.label.close,
    });
  }
  i.actions = s.map(({ handler: l, noDismiss: c, ...u }) => ({
    flat: true,
    ...u,
    onClick:
      typeof l == "function"
        ? () => {
            l();
            if (c !== true) {
              a();
            }
          }
        : () => {
            a();
          },
  }));
  if (i.multiLine === undefined) {
    i.multiLine = i.actions.length > 1;
  }
  Object.assign(i.meta, {
    class: `q-notification row items-stretch q-notification--${
      i.multiLine === true ? "multi-line" : "standard"
    }${i.color !== undefined ? ` bg-${i.color}` : ""}${
      i.textColor !== undefined ? ` text-${i.textColor}` : ""
    }${i.classes !== undefined ? ` ${i.classes}` : ""}`,
    wrapperClass:
      "q-notification__wrapper col relative-position border-radius-inherit " +
      (i.multiLine === true
        ? "column no-wrap justify-center"
        : "row items-center"),
    contentClass:
      "q-notification__content row items-center" +
      (i.multiLine === true ? "" : " col"),
    leftClass: i.meta.hasText === true ? "additional" : "single",
    attrs: {
      role: "alert",
      ...i.attrs,
    },
  });
  if (i.group === false) {
    i.group = undefined;
    i.meta.group = undefined;
  } else {
    if (i.group === undefined || i.group === true) {
      i.group = [i.message, i.caption, i.multiline]
        .concat(i.actions.map((l) => `${l.label}*${l.icon}`))
        .join("|");
    }
    i.meta.group = i.group + "|" + i.position;
  }
  if (i.actions.length === 0) {
    i.actions = undefined;
  } else {
    i.meta.actionsClass =
      "q-notification__actions row items-center " +
      (i.multiLine === true ? "justify-end" : "col-auto") +
      (i.meta.hasMedia === true ? " q-notification__actions--with-media" : "");
  }
  if (n !== undefined) {
    if (n.notif.meta.timer) {
      clearTimeout(n.notif.meta.timer);
      n.notif.meta.timer = undefined;
    }
    i.meta.uid = n.notif.meta.uid;
    const l = vO88[i.position].value.indexOf(n.notif);
    vO88[i.position].value[l] = i;
  } else {
    const l = vO87[i.meta.group];
    if (l === undefined) {
      i.meta.uid = vLN019++;
      i.meta.badge = 1;
      if (["left", "right", "center"].indexOf(i.position) !== -1) {
        vO88[i.position].value.splice(
          Math.floor(vO88[i.position].value.length / 2),
          0,
          i
        );
      } else {
        const c = i.position.indexOf("top") !== -1 ? "unshift" : "push";
        vO88[i.position].value[c](i);
      }
      if (i.group !== undefined) {
        vO87[i.meta.group] = i;
      }
    } else {
      if (l.meta.timer) {
        clearTimeout(l.meta.timer);
        l.meta.timer = undefined;
      }
      if (i.badgePosition !== undefined) {
        if (vA48.includes(i.badgePosition) === false) {
          return f765("wrong badgePosition", e);
        }
      } else {
        i.badgePosition = `top-${
          i.position.indexOf("left") !== -1 ? "right" : "left"
        }`;
      }
      i.meta.uid = l.meta.uid;
      i.meta.badge = l.meta.badge + 1;
      i.meta.badgeClass = `q-notification__badge q-notification__badge--${
        i.badgePosition
      }${i.badgeColor !== undefined ? ` bg-${i.badgeColor}` : ""}${
        i.badgeTextColor !== undefined ? ` text-${i.badgeTextColor}` : ""
      }${i.badgeClass ? ` ${i.badgeClass}` : ""}`;
      const c = vO88[i.position].value.indexOf(l);
      vO88[i.position].value[c] = vO87[i.meta.group] = i;
    }
  }
  const a = () => {
    f763(i);
    r = undefined;
  };
  if (i.timeout > 0) {
    i.meta.timer = setTimeout(() => {
      i.meta.timer = undefined;
      a();
    }, i.timeout + 1000);
  }
  if (i.group !== undefined) {
    return (l) => {
      if (l !== undefined) {
        f765("trying to update a grouped one which is forbidden", e);
      } else {
        a();
      }
    };
  }
  r = {
    dismiss: a,
    config: e,
    notif: i,
  };
  if (n !== undefined) {
    Object.assign(n, r);
    return;
  }
  return (l) => {
    if (r !== undefined) {
      if (l === undefined) {
        r.dismiss();
      } else {
        const c = Object.assign({}, r.config, l, {
          group: false,
          position: i.position,
        });
        f762(c, t, r);
      }
    }
  };
}
function f763(e) {
  if (e.meta.timer) {
    clearTimeout(e.meta.timer);
    e.meta.timer = undefined;
  }
  const t = vO88[e.position].value.indexOf(e);
  if (t !== -1) {
    if (e.group !== undefined) {
      delete vO87[e.meta.group];
    }
    const n = vA45["" + e.meta.uid];
    if (n) {
      const { width: r, height: i } = getComputedStyle(n);
      n.style.left = `${n.offsetLeft}px`;
      n.style.width = r;
      n.style.height = i;
    }
    vO88[e.position].value.splice(t, 1);
    if (typeof e.onDismiss == "function") {
      e.onDismiss();
    }
  }
}
function f764(e) {
  return e != null && v250.test(e) !== true;
}
function f765(e, t) {
  console.error(`Notify: ${e}`, t);
  return false;
}
function f766() {
  return f231({
    name: "QNotifications",
    devtools: {
      hide: true,
    },
    setup() {
      return () =>
        q(
          "div",
          {
            class: "q-notifications",
          },
          vA47.map((e) =>
            q(
              vVVF88,
              {
                key: e,
                class: vO89[e],
                tag: "div",
                name: `q-notification--${e}`,
              },
              () =>
                vO88[e].value.map((t) => {
                  const n = t.meta;
                  const r = [];
                  if (n.hasMedia === true) {
                    if (t.spinner !== false) {
                      r.push(
                        q(t.spinner, {
                          class:
                            "q-notification__spinner q-notification__spinner--" +
                            n.leftClass,
                          color: t.spinnerColor,
                          size: t.spinnerSize,
                        })
                      );
                    } else if (t.icon) {
                      r.push(
                        q(vF2313, {
                          class:
                            "q-notification__icon q-notification__icon--" +
                            n.leftClass,
                          name: t.icon,
                          color: t.iconColor,
                          size: t.iconSize,
                          role: "img",
                        })
                      );
                    } else if (t.avatar) {
                      r.push(
                        q(
                          vF23116,
                          {
                            class:
                              "q-notification__avatar q-notification__avatar--" +
                              n.leftClass,
                          },
                          () =>
                            q("img", {
                              src: t.avatar,
                              "aria-hidden": "true",
                            })
                        )
                      );
                    }
                  }
                  if (n.hasText === true) {
                    let s;
                    const o = {
                      class: "q-notification__message col",
                    };
                    if (t.html === true) {
                      o.innerHTML = t.caption
                        ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>`
                        : t.message;
                    } else {
                      const a = [t.message];
                      s = t.caption
                        ? [
                            q("div", a),
                            q(
                              "div",
                              {
                                class: "q-notification__caption",
                              },
                              [t.caption]
                            ),
                          ]
                        : a;
                    }
                    r.push(q("div", o, s));
                  }
                  const i = [
                    q(
                      "div",
                      {
                        class: n.contentClass,
                      },
                      r
                    ),
                  ];
                  if (t.progress === true) {
                    i.push(
                      q("div", {
                        key: `${n.uid}|p|${n.badge}`,
                        class: n.progressClass,
                        style: n.progressStyle,
                      })
                    );
                  }
                  if (t.actions !== undefined) {
                    i.push(
                      q(
                        "div",
                        {
                          class: n.actionsClass,
                        },
                        t.actions.map((s) => q(vF2315, s))
                      )
                    );
                  }
                  if (n.badge > 1) {
                    i.push(
                      q(
                        "div",
                        {
                          key: `${n.uid}|${n.badge}`,
                          class: t.meta.badgeClass,
                          style: t.badgeStyle,
                        },
                        [n.badge]
                      )
                    );
                  }
                  return q(
                    "div",
                    {
                      ref: (s) => {
                        vA45["" + n.uid] = s;
                      },
                      key: n.uid,
                      class: n.class,
                      ...n.attrs,
                    },
                    [
                      q(
                        "div",
                        {
                          class: n.wrapperClass,
                        },
                        i
                      ),
                    ]
                  );
                })
            )
          )
        );
    },
  });
}
const vO91 = {
  setDefaults(e) {
    if (f259(e) === true) {
      Object.assign(vO86, e);
    }
  },
  registerType(e, t) {
    if (f259(t) === true) {
      vO90[e] = t;
    }
  },
  install({ $q: e, parentApp: t }) {
    e.notify = this.create = (n) => f762(n, e);
    e.notify.setDefaults = this.setDefaults;
    e.notify.registerType = this.registerType;
    if (e.config.notify !== undefined) {
      this.setDefaults(e.config.notify);
    }
    if (this.__installed !== true) {
      vA47.forEach((r) => {
        vO88[r] = f52([]);
        const i =
          ["left", "center", "right"].includes(r) === true
            ? "center"
            : r.indexOf("top") !== -1
            ? "top"
            : "bottom";
        const s =
          r.indexOf("left") !== -1
            ? "start"
            : r.indexOf("right") !== -1
            ? "end"
            : "center";
        const o = ["left", "right"].includes(r)
          ? `items-${r === "left" ? "start" : "end"} justify-center`
          : r === "center"
          ? "flex-center"
          : `items-${s}`;
        vO89[
          r
        ] = `q-notifications__list q-notifications__list--${i} fixed column no-wrap ${o}`;
      });
      const n = f669("q-notify");
      f261(f766(), t).mount(n);
    }
  },
};
const vO92 = {};
function f767(e) {
  Object.assign(vVF926, {
    request: e,
    exit: e,
    toggle: e,
  });
}
function f768() {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement ||
    null
  );
}
function f769() {
  const e = (vVF926.activeEl = vVF926.isActive === false ? null : f768());
  f671(e === null || e === document.documentElement ? document.body : e);
}
function f770() {
  vVF926.isActive = vVF926.isActive === false;
  f769();
}
function f771(e, t) {
  try {
    const n = e[t]();
    if (n === undefined) {
      return Promise.resolve();
    } else {
      return n;
    }
  } catch (n) {
    return Promise.reject(n);
  }
}
const vVF926 = vF92(
  {
    isActive: false,
    activeEl: null,
  },
  {
    isCapable: false,
    install({ $q: e }) {
      e.fullscreen = this;
    },
  }
);
vO92.request = [
  "requestFullscreen",
  "msRequestFullscreen",
  "mozRequestFullScreen",
  "webkitRequestFullscreen",
].find((e) => document.documentElement[e] !== undefined);
vVF926.isCapable = vO92.request !== undefined;
if (vVF926.isCapable === false) {
  f767(() => Promise.reject("Not capable"));
} else {
  Object.assign(vVF926, {
    request(e) {
      const t = e || document.documentElement;
      const { activeEl: n } = vVF926;
      if (t === n) {
        return Promise.resolve();
      } else {
        return (
          n !== null && t.contains(n) === true
            ? vVF926.exit()
            : Promise.resolve()
        ).finally(() => f771(t, vO92.request));
      }
    },
    exit() {
      if (vVF926.isActive === true) {
        return f771(document, vO92.exit);
      } else {
        return Promise.resolve();
      }
    },
    toggle(e) {
      if (vVF926.isActive === true) {
        return vVF926.exit();
      } else {
        return vVF926.request(e);
      }
    },
  });
  vO92.exit = [
    "exitFullscreen",
    "msExitFullscreen",
    "mozCancelFullScreen",
    "webkitExitFullscreen",
  ].find((e) => document[e]);
  vVF926.isActive = !!f768();
  if (vVF926.isActive === true) {
    f769();
  }
  [
    "onfullscreenchange",
    "onmsfullscreenchange",
    "onwebkitfullscreenchange",
  ].forEach((e) => {
    document[e] = f770;
  });
}
const vO93 = {
  config: {
    dark: "auto",
    notify: {
      progress: true,
    },
    brand: {
      primary: "#3369e8",
      positive: "#009925",
      negative: "#d50f25",
      warning: "#EEB211",
    },
  },
  iconSet: vO48,
  plugins: {
    Dialog: vO81,
    Loading: vVF925,
    Notify: vO91,
    AppFullscreen: vVF926,
  },
};
const vLS10 = "/";
async function f772({ app: e, router: t, store: n }, r) {
  let i = false;
  const s = (l) => {
    try {
      return t.resolve(l).href;
    } catch {}
    if (Object(l) === l) {
      return null;
    } else {
      return l;
    }
  };
  const o = (l) => {
    i = true;
    if (typeof l == "string" && /^https?:\/\//.test(l)) {
      window.location.href = l;
      return;
    }
    const c = s(l);
    if (c !== null) {
      window.location.href = c;
    }
  };
  const a = window.location.href.replace(window.location.origin, "");
  for (let l = 0; i === false && l < r.length; l++) {
    try {
      await r[l]({
        app: e,
        router: t,
        store: n,
        ssrContext: null,
        redirect: o,
        urlPath: a,
        publicPath: vLS10,
      });
    } catch (c) {
      if (c && c.url) {
        o(c.url);
        return;
      }
      console.error("[Quasar] boot error:", c);
      return;
    }
  }
  if (i !== true) {
    e.use(t);
    e.mount("#q-app");
  }
}
f653(vF91, vO93).then((e) => {
  const [t, n] =
    Promise.allSettled !== undefined
      ? [
          "allSettled",
          (r) =>
            r.map((i) => {
              if (i.status === "rejected") {
                console.error("[Quasar] boot error:", i.reason);
                return;
              }
              return i.value.default;
            }),
        ]
      : ["all", (r) => r.map((i) => i.default)];
  return Promise[t]([
    vF4(() => import("./i18n-v349.js"), vF([72, 73])),
    vF4(() => import("./head-v349.js"), vF([74, 55])),
  ]).then((r) => {
    const i = n(r).filter((s) => typeof s == "function");
    f772(e, i);
  });
});
export {
  f622 as $,
  f516 as A,
  f570 as B,
  f698 as C,
  f660 as D,
  vF522 as E,
  v70 as F,
  vVF492 as G,
  vF2314 as H,
  f150 as I,
  f659 as J,
  vF79 as K,
  vF23113 as L,
  f131 as M,
  f256 as N,
  vLS_q_l_ as O,
  vLS_q_pc_ as P,
  vF2316 as Q,
  f130 as R,
  f497 as S,
  vVF82 as T,
  f619 as U,
  f616 as V,
  f634 as W,
  f637 as X,
  f621 as Y,
  f624 as Z,
  f618 as _,
  vLg as a,
  f5 as a$,
  f623 as a0,
  f625 as a1,
  f617 as a2,
  vO67 as a3,
  f735 as a4,
  vO91 as a5,
  vO81 as a6,
  vO28 as a7,
  f593 as a8,
  f585 as a9,
  vF2313 as aA,
  f701 as aB,
  vF232 as aC,
  vO62 as aD,
  f731 as aE,
  vO60 as aF,
  f724 as aG,
  f657 as aH,
  f699 as aI,
  f334 as aJ,
  f333 as aK,
  vF497 as aL,
  f53 as aM,
  f633 as aN,
  vO24 as aO,
  f580 as aP,
  f632 as aQ,
  vVF922 as aR,
  vLS_q_ as aS,
  f577 as aT,
  f604 as aU,
  f601 as aV,
  vF4 as aW,
  vF23110 as aX,
  vF90 as aY,
  f51 as aZ,
  vO22 as a_,
  f591 as aa,
  f560 as ab,
  f592 as ac,
  f652 as ad,
  f456 as ae,
  f232 as af,
  f247 as ag,
  f672 as ah,
  f674 as ai,
  f80 as aj,
  vA28 as ak,
  vA34 as al,
  vO50 as am,
  vO49 as an,
  f661 as ao,
  f663 as ap,
  f662 as aq,
  f676 as ar,
  vVF495 as as,
  f242 as at,
  f241 as au,
  f680 as av,
  f239 as aw,
  vO54 as ax,
  f719 as ay,
  f702 as az,
  f171 as b,
  f739 as b$,
  vVF925 as b0,
  f578 as b1,
  f579 as b2,
  f514 as b3,
  f56 as b4,
  f132 as b5,
  f148 as b6,
  f99 as b7,
  f98 as b8,
  f707 as b9,
  f572 as bA,
  f49 as bB,
  f576 as bC,
  f642 as bD,
  f643 as bE,
  f644 as bF,
  f582 as bG,
  f638 as bH,
  f640 as bI,
  f641 as bJ,
  f583 as bK,
  f620 as bL,
  f639 as bM,
  f481 as bN,
  f472 as bO,
  f647 as bP,
  f648 as bQ,
  f636 as bR,
  f649 as bS,
  f650 as bT,
  f635 as bU,
  f513 as bV,
  f568 as bW,
  f586 as bX,
  f510 as bY,
  f176 as bZ,
  vO65 as b_,
  f708 as ba,
  f710 as bb,
  f235 as bc,
  f711 as bd,
  f673 as be,
  f667 as bf,
  f679 as bg,
  f233 as bh,
  f70 as bi,
  vO29 as bj,
  f681 as bk,
  f682 as bl,
  f689 as bm,
  f40 as bn,
  vVF496 as bo,
  f484 as bp,
  f515 as bq,
  vF23116 as br,
  f3 as bs,
  f645 as bt,
  f646 as bu,
  f238 as bv,
  vA33 as bw,
  vO27 as bx,
  C16 as by,
  vC2 as bz,
  f168 as c,
  f602 as c$,
  f733 as c0,
  f237 as c1,
  vF2319 as c2,
  vA42 as c3,
  vO73 as c4,
  f745 as c5,
  f744 as c6,
  f243 as c7,
  vVF49 as c8,
  vO77 as c9,
  f114 as cA,
  f154 as cB,
  vO72 as cC,
  f751 as cD,
  f227 as cE,
  f567 as cF,
  f519 as cG,
  f587 as cH,
  f520 as cI,
  vO47 as cJ,
  f524 as cK,
  f603 as cL,
  f518 as cM,
  f565 as cN,
  f688 as cO,
  f687 as cP,
  f474 as cQ,
  f525 as cR,
  f526 as cS,
  f522 as cT,
  f564 as cU,
  f562 as cV,
  f511 as cW,
  f575 as cX,
  f486 as cY,
  f110 as cZ,
  vA24 as c_,
  f750 as ca,
  f743 as cb,
  f752 as cc,
  f258 as cd,
  f246 as ce,
  vVF493 as cf,
  vVF494 as cg,
  f588 as ch,
  vVVF88 as ci,
  f571 as cj,
  f574 as ck,
  f599 as cl,
  vF23112 as cm,
  vF23111 as cn,
  vLS_q_tabs_ as co,
  f240 as cp,
  f234 as cq,
  f260 as cr,
  f259 as cs,
  f749 as ct,
  f748 as cu,
  vVO13 as cv,
  vO70 as cw,
  f721 as cx,
  f736 as cy,
  f41 as cz,
  vF2317 as d,
  f598 as d0,
  f175 as e,
  f231 as f,
  M as g,
  q as h,
  f700 as i,
  f167 as j,
  f111 as k,
  f94 as l,
  f52 as m,
  f106 as n,
  f163 as o,
  vF2312 as p,
  f55 as q,
  f109 as r,
  f177 as s,
  vF32 as t,
  f457 as u,
  vF2318 as v,
  f79 as w,
  vF2315 as x,
  f584 as y,
  f569 as z,
};
