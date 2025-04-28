/* eslint-disable */
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = (m.f ||= [
    "assets/index.esm-v347.js",
    "assets/index.esm2017-v347.js",
    "assets/index.esm-v3473.js",
    "assets/index.esm-v3472.js",
    "assets/esm-v347.js",
    "assets/_commonjsHelpers-v347.js",
    "assets/FaqPage-v347.js",
    "assets/QToolbar-v347.js",
    "assets/_plugin-vue_export-helper-v347.js",
    "assets/QPage-v347.js",
    "assets/AppFooter-v347.js",
    "assets/use-quasar-v347.js",
    "assets/AppFooter-BhUctadA.css",
    "assets/AppToolbarSimple-v347.js",
    "assets/QToolbarTitle-v347.js",
    "assets/DarkModeToggle.vue_vue_type_script_setup_true_lang-v347.js",
    "assets/AppToolbarSimple-D5i9NBCH.css",
    "assets/QBadge-v347.js",
    "assets/FaqPage-Do39WUBf.css",
    "assets/TutorialsPage-v347.js",
    "assets/QVideo-v347.js",
    "assets/use-ratio-v347.js",
    "assets/ClassroomPage-v347.js",
    "assets/PrivacyPolicyPage-v347.js",
    "assets/QMarkupTable-v347.js",
    "assets/PrivacyPolicyPage-cuqVKRk3.css",
    "assets/TermsOfServicePage-v347.js",
    "assets/ChangelogPage-v347.js",
    "assets/ChangelogPage-muVmCRrg.css",
    "assets/GalleryPage-v347.js",
    "assets/dynamic-import-helper-v347.js",
    "assets/GallerySearch-v347.js",
    "assets/QSpace-v347.js",
    "assets/QChip-v347.js",
    "assets/position-engine-v347.js",
    "assets/Messenger-v347.js",
    "assets/GallerySearch-C-WBgJxy.css",
    "assets/ApiPage-v347.js",
    "assets/AboutCard-v347.js",
    "assets/user-store-v347.js",
    "assets/ApiPage-67p9aTe_.css",
    "assets/EditWheelPage-v347.js",
    "assets/QMenu-v347.js",
    "assets/DialogCloseIcon-v347.js",
    "assets/DialogCloseIcon-DNjj7Fjb.css",
    "assets/ConfettiLauncher-v347.js",
    "assets/ConfettiLauncher--ozpTpaZ.css",
    "assets/QImg-v347.js",
    "assets/vue.BYLJNEcq-v347.js",
    "assets/EditWheelPage-BLTeSVVb.css",
    "assets/SharedWheelPage-v347.js",
    "assets/SharedWheelPage-Dnv5p35Z.css",
    "assets/ExportPage-v347.js",
    "assets/ExportPage-0sRgMNOB.css",
    "assets/TranslationPage-v347.js",
    "assets/AdminPage-v347.js",
    "assets/QBreadcrumbs-v347.js",
    "assets/AdminPage-Cp1v64oL.css",
    "assets/ReviewWheelPage-v347.js",
    "assets/ReviewWheelPage-DMgnrINq.css",
    "assets/GalleryReviewPage-v347.js",
    "assets/GalleryReviewPage-CkulyH81.css",
    "assets/AdminAccountPage-v347.js",
    "assets/i18n-v347.js",
    "assets/en-US-v347.js",
    "assets/head-v347.js",
  ])
) => i.map((i) => d[i]);
const Rh = (function () {
  const t =
    typeof document !== "undefined" && document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) {
    return "modulepreload";
  } else {
    return "preload";
  }
})();
const Mh = function (e) {
  return "/" + e;
};
const il = {};
const ke = function (t, n, r) {
  let s = Promise.resolve();
  if (n && n.length > 0) {
    document.getElementsByTagName("link");
    const o = document.querySelector("meta[property=csp-nonce]");
    const a = o?.nonce || o?.getAttribute("nonce");
    s = Promise.allSettled(
      n.map((l) => {
        l = Mh(l);
        if (l in il) {
          return;
        }
        il[l] = true;
        const c = l.endsWith(".css");
        const u = c ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${u}`)) {
          return;
        }
        const f = document.createElement("link");
        f.rel = c ? "stylesheet" : Rh;
        if (!c) {
          f.as = "script";
        }
        f.crossOrigin = "";
        f.href = l;
        if (a) {
          f.setAttribute("nonce", a);
        }
        document.head.appendChild(f);
        if (c) {
          return new Promise((d, h) => {
            f.addEventListener("load", d);
            f.addEventListener("error", () =>
              h(new Error(`Unable to preload CSS for ${l}`))
            );
          });
        }
      })
    );
  }
  function i(o) {
    const a = new Event("vite:preloadError", {
      cancelable: true,
    });
    a.payload = o;
    window.dispatchEvent(a);
    if (!a.defaultPrevented) {
      throw o;
    }
  }
  return s.then((o) => {
    for (const a of o || []) {
      if (a.status === "rejected") {
        i(a.reason);
      }
    }
    return t().catch(i);
  });
};
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function fa(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) {
    t[n] = 1;
  }
  return (n) => n in t;
}
const be = {};
const rr = [];
const Vt = () => {};
const Fh = () => false;
const di = (e) =>
  e.charCodeAt(0) === 111 &&
  e.charCodeAt(1) === 110 &&
  (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
const da = (e) => e.startsWith("onUpdate:");
const $e = Object.assign;
const ha = (e, t) => {
  const n = e.indexOf(t);
  if (n > -1) {
    e.splice(n, 1);
  }
};
const Dh = Object.prototype.hasOwnProperty;
const Ce = (e, t) => Dh.call(e, t);
const oe = Array.isArray;
const sr = (e) => us(e) === "[object Map]";
const xu = (e) => us(e) === "[object Set]";
const $h = (e) => us(e) === "[object RegExp]";
const le = (e) => typeof e == "function";
const Oe = (e) => typeof e == "string";
const en = (e) => typeof e == "symbol";
const Ne = (e) => e !== null && typeof e == "object";
const Tu = (e) => (Ne(e) || le(e)) && le(e.then) && le(e.catch);
const Nu = Object.prototype.toString;
const us = (e) => Nu.call(e);
const jh = (e) => us(e).slice(8, -1);
const Au = (e) => us(e) === "[object Object]";
const ma = (e) =>
  Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
const Dr = fa(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const hi = (e) => {
  const t = Object.create(null);
  return (n) => (t[n] ||= e(n));
};
const qh = /-(\w)/g;
const mt = hi((e) => e.replace(qh, (t, n) => (n ? n.toUpperCase() : "")));
const Vh = /\B([A-Z])/g;
const tn = hi((e) => e.replace(Vh, "-$1").toLowerCase());
const mi = hi((e) => e.charAt(0).toUpperCase() + e.slice(1));
const Di = hi((e) => (e ? `on${mi(e)}` : ""));
const ut = (e, t) => !Object.is(e, t);
const ir = (e, ...t) => {
  for (let n = 0; n < e.length; n++) {
    e[n](...t);
  }
};
const Iu = (e, t, n, r = false) => {
  Object.defineProperty(e, t, {
    configurable: true,
    enumerable: false,
    writable: r,
    value: n,
  });
};
const So = (e) => {
  const t = parseFloat(e);
  if (isNaN(t)) {
    return e;
  } else {
    return t;
  }
};
const Wh = (e) => {
  const t = Oe(e) ? Number(e) : NaN;
  if (isNaN(t)) {
    return e;
  } else {
    return t;
  }
};
let ol;
const gi = () =>
  (ol ||=
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof self !== "undefined"
      ? self
      : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
      ? global
      : {});
function ga(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      const s = Oe(r) ? zh(r) : ga(r);
      if (s) {
        for (const i in s) {
          t[i] = s[i];
        }
      }
    }
    return t;
  } else if (Oe(e) || Ne(e)) {
    return e;
  }
}
const Bh = /;(?![^(]*\))/g;
const Uh = /:([^]+)/;
const Hh = /\/\*[^]*?\*\//g;
function zh(e) {
  const t = {};
  e.replace(Hh, "")
    .split(Bh)
    .forEach((n) => {
      if (n) {
        const r = n.split(Uh);
        if (r.length > 1) {
          t[r[0].trim()] = r[1].trim();
        }
      }
    });
  return t;
}
function pa(e) {
  let t = "";
  if (Oe(e)) {
    t = e;
  } else if (oe(e)) {
    for (let n = 0; n < e.length; n++) {
      const r = pa(e[n]);
      if (r) {
        t += r + " ";
      }
    }
  } else if (Ne(e)) {
    for (const n in e) {
      if (e[n]) {
        t += n + " ";
      }
    }
  }
  return t.trim();
}
const Kh =
  "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
const Gh = fa(Kh);
function Pu(e) {
  return !!e || e === "";
}
const Lu = (e) => !!e && e.__v_isRef === true;
const Qh = (e) =>
  Oe(e)
    ? e
    : e == null
    ? ""
    : oe(e) || (Ne(e) && (e.toString === Nu || !le(e.toString)))
    ? Lu(e)
      ? Qh(e.value)
      : JSON.stringify(e, Ou, 2)
    : String(e);
const Ou = (e, t) =>
  Lu(t)
    ? Ou(e, t.value)
    : sr(t)
    ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], i) => {
          n[$i(r, i) + " =>"] = s;
          return n;
        }, {}),
      }
    : xu(t)
    ? {
        [`Set(${t.size})`]: [...t.values()].map((n) => $i(n)),
      }
    : en(t)
    ? $i(t)
    : Ne(t) && !oe(t) && !Au(t)
    ? String(t)
    : t;
const $i = (e, t = "") => {
  if (en(e)) {
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
let it;
class Ru {
  constructor(t = false) {
    this.detached = t;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.parent = it;
    if (!t && it) {
      this.index = (it.scopes ||= []).push(this) - 1;
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
      const n = it;
      try {
        it = this;
        return t();
      } finally {
        it = n;
      }
    }
  }
  on() {
    it = this;
  }
  off() {
    it = this.parent;
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
        const s = this.parent.scopes.pop();
        if (s && s !== this) {
          this.parent.scopes[this.index] = s;
          s.index = this.index;
        }
      }
      this.parent = undefined;
    }
  }
}
function va(e) {
  return new Ru(e);
}
function ya() {
  return it;
}
function Mu(e, t = false) {
  if (it) {
    it.cleanups.push(e);
  }
}
let Te;
const ji = new WeakSet();
class Fu {
  constructor(t) {
    this.fn = t;
    this.deps = undefined;
    this.depsTail = undefined;
    this.flags = 5;
    this.next = undefined;
    this.cleanup = undefined;
    this.scheduler = undefined;
    if (it && it.active) {
      it.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (ji.has(this)) {
        ji.delete(this);
        this.trigger();
      }
    }
  }
  notify() {
    if ((!(this.flags & 2) || !!(this.flags & 32)) && !(this.flags & 8)) {
      $u(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    al(this);
    ju(this);
    const t = Te;
    const n = Pt;
    Te = this;
    Pt = true;
    try {
      return this.fn();
    } finally {
      qu(this);
      Te = t;
      Pt = n;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) {
        wa(t);
      }
      this.deps = this.depsTail = undefined;
      al(this);
      if (this.onStop) {
        this.onStop();
      }
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      ji.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  runIfDirty() {
    if (ko(this)) {
      this.run();
    }
  }
  get dirty() {
    return ko(this);
  }
}
let Du = 0;
let $r;
let jr;
function $u(e, t = false) {
  e.flags |= 8;
  if (t) {
    e.next = jr;
    jr = e;
    return;
  }
  e.next = $r;
  $r = e;
}
function ba() {
  Du++;
}
function _a() {
  if (--Du > 0) {
    return;
  }
  if (jr) {
    let t = jr;
    for (jr = undefined; t; ) {
      const n = t.next;
      t.next = undefined;
      t.flags &= -9;
      t = n;
    }
  }
  let e;
  while ($r) {
    let t = $r;
    for ($r = undefined; t; ) {
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
function ju(e) {
  for (let t = e.deps; t; t = t.nextDep) {
    t.version = -1;
    t.prevActiveLink = t.dep.activeLink;
    t.dep.activeLink = t;
  }
}
function qu(e) {
  let t;
  let n = e.depsTail;
  let r = n;
  while (r) {
    const s = r.prevDep;
    if (r.version === -1) {
      if (r === n) {
        n = s;
      }
      wa(r);
      Xh(r);
    } else {
      t = r;
    }
    r.dep.activeLink = r.prevActiveLink;
    r.prevActiveLink = undefined;
    r = s;
  }
  e.deps = t;
  e.depsTail = n;
}
function ko(e) {
  for (let t = e.deps; t; t = t.nextDep) {
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Vu(t.dep.computed) || t.dep.version !== t.version))
    ) {
      return true;
    }
  }
  return !!e._dirty;
}
function Vu(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Xr)
  ) {
    return;
  }
  e.globalVersion = Xr;
  const t = e.dep;
  e.flags |= 2;
  if (t.version > 0 && !e.isSSR && e.deps && !ko(e)) {
    e.flags &= -3;
    return;
  }
  const n = Te;
  const r = Pt;
  Te = e;
  Pt = true;
  try {
    ju(e);
    const s = e.fn(e._value);
    if (t.version === 0 || ut(s, e._value)) {
      e._value = s;
      t.version++;
    }
  } catch (s) {
    t.version++;
    throw s;
  } finally {
    Te = n;
    Pt = r;
    qu(e);
    e.flags &= -3;
  }
}
function wa(e, t = false) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r) {
    r.nextSub = s;
    e.prevSub = undefined;
  }
  if (s) {
    s.prevSub = r;
    e.nextSub = undefined;
  }
  if (n.subs === e && ((n.subs = r), !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) {
      wa(i, true);
    }
  }
  if (!t && !--n.sc && n.map) {
    n.map.delete(n.key);
  }
}
function Xh(e) {
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
let Pt = true;
const Wu = [];
function wn() {
  Wu.push(Pt);
  Pt = false;
}
function Cn() {
  const e = Wu.pop();
  Pt = e === undefined ? true : e;
}
function al(e) {
  const { cleanup: t } = e;
  e.cleanup = undefined;
  if (t) {
    const n = Te;
    Te = undefined;
    try {
      t();
    } finally {
      Te = n;
    }
  }
}
let Xr = 0;
class Yh {
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
class pi {
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
    if (!Te || !Pt || Te === this.computed) {
      return;
    }
    let n = this.activeLink;
    if (n === undefined || n.sub !== Te) {
      n = this.activeLink = new Yh(Te, this);
      if (Te.deps) {
        n.prevDep = Te.depsTail;
        Te.depsTail.nextDep = n;
        Te.depsTail = n;
      } else {
        Te.deps = Te.depsTail = n;
      }
      Bu(n);
    } else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep;
      if (n.prevDep) {
        n.prevDep.nextDep = r;
      }
      n.prevDep = Te.depsTail;
      n.nextDep = undefined;
      Te.depsTail.nextDep = n;
      Te.depsTail = n;
      if (Te.deps === n) {
        Te.deps = r;
      }
    }
    return n;
  }
  trigger(t) {
    this.version++;
    Xr++;
    this.notify(t);
  }
  notify(t) {
    ba();
    try {
      for (let n = this.subs; n; n = n.prevSub) {
        if (n.sub.notify()) {
          n.sub.dep.notify();
        }
      }
    } finally {
      _a();
    }
  }
}
function Bu(e) {
  e.dep.sc++;
  if (e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) {
        Bu(r);
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
const Bs = new WeakMap();
const Fn = Symbol("");
const xo = Symbol("");
const Yr = Symbol("");
function Ze(e, t, n) {
  if (Pt && Te) {
    let r = Bs.get(e);
    if (!r) {
      Bs.set(e, (r = new Map()));
    }
    let s = r.get(n);
    if (!s) {
      r.set(n, (s = new pi()));
      s.map = r;
      s.key = n;
    }
    s.track();
  }
}
function zt(e, t, n, r, s, i) {
  const o = Bs.get(e);
  if (!o) {
    Xr++;
    return;
  }
  const a = (l) => {
    if (l) {
      l.trigger();
    }
  };
  ba();
  if (t === "clear") {
    o.forEach(a);
  } else {
    const l = oe(e);
    const c = l && ma(n);
    if (l && n === "length") {
      const u = Number(r);
      o.forEach((f, d) => {
        if (d === "length" || d === Yr || (!en(d) && d >= u)) {
          a(f);
        }
      });
    } else {
      if (n !== undefined || o.has(undefined)) {
        a(o.get(n));
      }
      if (c) {
        a(o.get(Yr));
      }
      switch (t) {
        case "add":
          if (l) {
            if (c) {
              a(o.get("length"));
            }
          } else {
            a(o.get(Fn));
            if (sr(e)) {
              a(o.get(xo));
            }
          }
          break;
        case "delete":
          if (!l) {
            a(o.get(Fn));
            if (sr(e)) {
              a(o.get(xo));
            }
          }
          break;
        case "set":
          if (sr(e)) {
            a(o.get(Fn));
          }
          break;
      }
    }
  }
  _a();
}
function Jh(e, t) {
  const n = Bs.get(e);
  return n && n.get(t);
}
function Kn(e) {
  const t = ue(e);
  if (t === e) {
    return t;
  } else {
    Ze(t, "iterate", Yr);
    if (wt(e)) {
      return t;
    } else {
      return t.map(et);
    }
  }
}
function vi(e) {
  Ze((e = ue(e)), "iterate", Yr);
  return e;
}
const Zh = {
  __proto__: null,
  [Symbol.iterator]() {
    return qi(this, Symbol.iterator, et);
  },
  concat(...e) {
    return Kn(this).concat(...e.map((t) => (oe(t) ? Kn(t) : t)));
  },
  entries() {
    return qi(this, "entries", (e) => {
      e[1] = et(e[1]);
      return e;
    });
  },
  every(e, t) {
    return Wt(this, "every", e, t, undefined, arguments);
  },
  filter(e, t) {
    return Wt(this, "filter", e, t, (n) => n.map(et), arguments);
  },
  find(e, t) {
    return Wt(this, "find", e, t, et, arguments);
  },
  findIndex(e, t) {
    return Wt(this, "findIndex", e, t, undefined, arguments);
  },
  findLast(e, t) {
    return Wt(this, "findLast", e, t, et, arguments);
  },
  findLastIndex(e, t) {
    return Wt(this, "findLastIndex", e, t, undefined, arguments);
  },
  forEach(e, t) {
    return Wt(this, "forEach", e, t, undefined, arguments);
  },
  includes(...e) {
    return Vi(this, "includes", e);
  },
  indexOf(...e) {
    return Vi(this, "indexOf", e);
  },
  join(e) {
    return Kn(this).join(e);
  },
  lastIndexOf(...e) {
    return Vi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Wt(this, "map", e, t, undefined, arguments);
  },
  pop() {
    return Cr(this, "pop");
  },
  push(...e) {
    return Cr(this, "push", e);
  },
  reduce(e, ...t) {
    return ll(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ll(this, "reduceRight", e, t);
  },
  shift() {
    return Cr(this, "shift");
  },
  some(e, t) {
    return Wt(this, "some", e, t, undefined, arguments);
  },
  splice(...e) {
    return Cr(this, "splice", e);
  },
  toReversed() {
    return Kn(this).toReversed();
  },
  toSorted(e) {
    return Kn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Kn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Cr(this, "unshift", e);
  },
  values() {
    return qi(this, "values", et);
  },
};
function qi(e, t, n) {
  const r = vi(e);
  const s = r[t]();
  if (r !== e && !wt(e)) {
    s._next = s.next;
    s.next = () => {
      const i = s._next();
      i.value &&= n(i.value);
      return i;
    };
  }
  return s;
}
const em = Array.prototype;
function Wt(e, t, n, r, s, i) {
  const o = vi(e);
  const a = o !== e && !wt(e);
  const l = o[t];
  if (l !== em[t]) {
    const f = l.apply(e, i);
    if (a) {
      return et(f);
    } else {
      return f;
    }
  }
  let c = n;
  if (o !== e) {
    if (a) {
      c = function (f, d) {
        return n.call(this, et(f), d, e);
      };
    } else if (n.length > 2) {
      c = function (f, d) {
        return n.call(this, f, d, e);
      };
    }
  }
  const u = l.call(o, c, r);
  if (a && s) {
    return s(u);
  } else {
    return u;
  }
}
function ll(e, t, n, r) {
  const s = vi(e);
  let i = n;
  if (s !== e) {
    if (wt(e)) {
      if (n.length > 3) {
        i = function (o, a, l) {
          return n.call(this, o, a, l, e);
        };
      }
    } else {
      i = function (o, a, l) {
        return n.call(this, o, et(a), l, e);
      };
    }
  }
  return s[t](i, ...r);
}
function Vi(e, t, n) {
  const r = ue(e);
  Ze(r, "iterate", Yr);
  const s = r[t](...n);
  if ((s === -1 || s === false) && ka(n[0])) {
    n[0] = ue(n[0]);
    return r[t](...n);
  } else {
    return s;
  }
}
function Cr(e, t, n = []) {
  wn();
  ba();
  const r = ue(e)[t].apply(e, n);
  _a();
  Cn();
  return r;
}
const tm = fa("__proto__,__v_isRef,__isVue");
const Uu = new Set(
  Object.getOwnPropertyNames(Symbol)
    .filter((e) => e !== "arguments" && e !== "caller")
    .map((e) => Symbol[e])
    .filter(en)
);
function nm(e) {
  if (!en(e)) {
    e = String(e);
  }
  const t = ue(this);
  Ze(t, "has", e);
  return t.hasOwnProperty(e);
}
class Hu {
  constructor(t = false, n = false) {
    this._isReadonly = t;
    this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") {
      return t.__v_skip;
    }
    const s = this._isReadonly;
    const i = this._isShallow;
    if (n === "__v_isReactive") {
      return !s;
    }
    if (n === "__v_isReadonly") {
      return s;
    }
    if (n === "__v_isShallow") {
      return i;
    }
    if (n === "__v_raw") {
      if (
        r === (s ? (i ? dm : Qu) : i ? Gu : Ku).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
      ) {
        return t;
      } else {
        return undefined;
      }
    }
    const o = oe(t);
    if (!s) {
      let l;
      if (o && (l = Zh[n])) {
        return l;
      }
      if (n === "hasOwnProperty") {
        return nm;
      }
    }
    const a = Reflect.get(t, n, Ae(t) ? t : r);
    if ((en(n) ? Uu.has(n) : tm(n)) || (s || Ze(t, "get", n), i)) {
      return a;
    } else if (Ae(a)) {
      if (o && ma(n)) {
        return a;
      } else {
        return a.value;
      }
    } else if (Ne(a)) {
      if (s) {
        return Ea(a);
      } else {
        return Wn(a);
      }
    } else {
      return a;
    }
  }
}
class zu extends Hu {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    if (!this._isShallow) {
      const l = Vn(i);
      if (!wt(r) && !Vn(r)) {
        i = ue(i);
        r = ue(r);
      }
      if (!oe(t) && Ae(i) && !Ae(r)) {
        if (l) {
          return false;
        } else {
          i.value = r;
          return true;
        }
      }
    }
    const o = oe(t) && ma(n) ? Number(n) < t.length : Ce(t, n);
    const a = Reflect.set(t, n, r, Ae(t) ? t : s);
    if (t === ue(s)) {
      if (o) {
        if (ut(r, i)) {
          zt(t, "set", n, r);
        }
      } else {
        zt(t, "add", n, r);
      }
    }
    return a;
  }
  deleteProperty(t, n) {
    const r = Ce(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    if (s && r) {
      zt(t, "delete", n, undefined);
    }
    return s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    if (!en(n) || !Uu.has(n)) {
      Ze(t, "has", n);
    }
    return r;
  }
  ownKeys(t) {
    Ze(t, "iterate", oe(t) ? "length" : Fn);
    return Reflect.ownKeys(t);
  }
}
class rm extends Hu {
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
const sm = new zu();
const im = new rm();
const om = new zu(true);
const To = (e) => e;
const ps = (e) => Reflect.getPrototypeOf(e);
function am(e, t, n) {
  return function (...r) {
    const s = this.__v_raw;
    const i = ue(s);
    const o = sr(i);
    const a = e === "entries" || (e === Symbol.iterator && o);
    const l = e === "keys" && o;
    const c = s[e](...r);
    const u = n ? To : t ? No : et;
    if (!t) {
      Ze(i, "iterate", l ? xo : Fn);
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
function vs(e) {
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
function lm(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw;
      const o = ue(i);
      const a = ue(s);
      if (!e) {
        if (ut(s, a)) {
          Ze(o, "get", s);
        }
        Ze(o, "get", a);
      }
      const { has: l } = ps(o);
      const c = t ? To : e ? No : et;
      if (l.call(o, s)) {
        return c(i.get(s));
      }
      if (l.call(o, a)) {
        return c(i.get(a));
      }
      if (i !== o) {
        i.get(s);
      }
    },
    get size() {
      const s = this.__v_raw;
      if (!e) {
        Ze(ue(s), "iterate", Fn);
      }
      return Reflect.get(s, "size", s);
    },
    has(s) {
      const i = this.__v_raw;
      const o = ue(i);
      const a = ue(s);
      if (!e) {
        if (ut(s, a)) {
          Ze(o, "has", s);
        }
        Ze(o, "has", a);
      }
      if (s === a) {
        return i.has(s);
      } else {
        return i.has(s) || i.has(a);
      }
    },
    forEach(s, i) {
      const o = this;
      const a = o.__v_raw;
      const l = ue(a);
      const c = t ? To : e ? No : et;
      if (!e) {
        Ze(l, "iterate", Fn);
      }
      return a.forEach((u, f) => s.call(i, c(u), c(f), o));
    },
  };
  $e(
    n,
    e
      ? {
          add: vs("add"),
          set: vs("set"),
          delete: vs("delete"),
          clear: vs("clear"),
        }
      : {
          add(s) {
            if (!t && !wt(s) && !Vn(s)) {
              s = ue(s);
            }
            const i = ue(this);
            if (!ps(i).has.call(i, s)) {
              i.add(s);
              zt(i, "add", s, s);
            }
            return this;
          },
          set(s, i) {
            if (!t && !wt(i) && !Vn(i)) {
              i = ue(i);
            }
            const o = ue(this);
            const { has: a, get: l } = ps(o);
            let c = a.call(o, s);
            if (!c) {
              s = ue(s);
              c = a.call(o, s);
            }
            const u = l.call(o, s);
            o.set(s, i);
            if (c) {
              if (ut(i, u)) {
                zt(o, "set", s, i);
              }
            } else {
              zt(o, "add", s, i);
            }
            return this;
          },
          delete(s) {
            const i = ue(this);
            const { has: o, get: a } = ps(i);
            let l = o.call(i, s);
            if (!l) {
              s = ue(s);
              l = o.call(i, s);
            }
            if (a) {
              a.call(i, s);
            }
            const c = i.delete(s);
            if (l) {
              zt(i, "delete", s, undefined);
            }
            return c;
          },
          clear() {
            const s = ue(this);
            const i = s.size !== 0;
            const o = s.clear();
            if (i) {
              zt(s, "clear", undefined, undefined);
            }
            return o;
          },
        }
  );
  ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    n[s] = am(s, e, t);
  });
  return n;
}
function Ca(e, t) {
  const n = lm(e, t);
  return (r, s, i) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(Ce(n, s) && s in r ? n : r, s, i);
}
const cm = {
  get: Ca(false, false),
};
const um = {
  get: Ca(false, true),
};
const fm = {
  get: Ca(true, false),
};
const Ku = new WeakMap();
const Gu = new WeakMap();
const Qu = new WeakMap();
const dm = new WeakMap();
function hm(e) {
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
function mm(e) {
  if (e.__v_skip || !Object.isExtensible(e)) {
    return 0;
  } else {
    return hm(jh(e));
  }
}
function Wn(e) {
  if (Vn(e)) {
    return e;
  } else {
    return Sa(e, false, sm, cm, Ku);
  }
}
function Xu(e) {
  return Sa(e, false, om, um, Gu);
}
function Ea(e) {
  return Sa(e, true, im, fm, Qu);
}
function Sa(e, t, n, r, s) {
  if (!Ne(e) || (e.__v_raw && (!t || !e.__v_isReactive))) {
    return e;
  }
  const i = s.get(e);
  if (i) {
    return i;
  }
  const o = mm(e);
  if (o === 0) {
    return e;
  }
  const a = new Proxy(e, o === 2 ? r : n);
  s.set(e, a);
  return a;
}
function yn(e) {
  if (Vn(e)) {
    return yn(e.__v_raw);
  } else {
    return !!e && !!e.__v_isReactive;
  }
}
function Vn(e) {
  return !!e && !!e.__v_isReadonly;
}
function wt(e) {
  return !!e && !!e.__v_isShallow;
}
function ka(e) {
  if (e) {
    return !!e.__v_raw;
  } else {
    return false;
  }
}
function ue(e) {
  const t = e && e.__v_raw;
  if (t) {
    return ue(t);
  } else {
    return e;
  }
}
function Bn(e) {
  if (!Ce(e, "__v_skip") && Object.isExtensible(e)) {
    Iu(e, "__v_skip", true);
  }
  return e;
}
const et = (e) => (Ne(e) ? Wn(e) : e);
const No = (e) => (Ne(e) ? Ea(e) : e);
function Ae(e) {
  if (e) {
    return e.__v_isRef === true;
  } else {
    return false;
  }
}
function he(e) {
  return Yu(e, false);
}
function Ct(e) {
  return Yu(e, true);
}
function Yu(e, t) {
  if (Ae(e)) {
    return e;
  } else {
    return new gm(e, t);
  }
}
class gm {
  constructor(t, n) {
    this.dep = new pi();
    this.__v_isRef = true;
    this.__v_isShallow = false;
    this._rawValue = n ? t : ue(t);
    this._value = n ? t : et(t);
    this.__v_isShallow = n;
  }
  get value() {
    this.dep.track();
    return this._value;
  }
  set value(t) {
    const n = this._rawValue;
    const r = this.__v_isShallow || wt(t) || Vn(t);
    t = r ? t : ue(t);
    if (ut(t, n)) {
      this._rawValue = t;
      this._value = r ? t : et(t);
      this.dep.trigger();
    }
  }
}
function Xt(e) {
  if (Ae(e)) {
    return e.value;
  } else {
    return e;
  }
}
function Lt(e) {
  if (le(e)) {
    return e();
  } else {
    return Xt(e);
  }
}
const pm = {
  get: (e, t, n) => (t === "__v_raw" ? e : Xt(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    if (Ae(s) && !Ae(n)) {
      s.value = n;
      return true;
    } else {
      return Reflect.set(e, t, n, r);
    }
  },
};
function Ju(e) {
  if (yn(e)) {
    return e;
  } else {
    return new Proxy(e, pm);
  }
}
class vm {
  constructor(t) {
    this.__v_isRef = true;
    this._value = undefined;
    const n = (this.dep = new pi());
    const { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r;
    this._set = s;
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function Zu(e) {
  return new vm(e);
}
function ym(e) {
  const t = oe(e) ? new Array(e.length) : {};
  for (const n in e) {
    t[n] = ef(e, n);
  }
  return t;
}
class bm {
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
    return Jh(ue(this._object), this._key);
  }
}
class _m {
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
function wm(e, t, n) {
  if (Ae(e)) {
    return e;
  } else if (le(e)) {
    return new _m(e);
  } else if (Ne(e) && arguments.length > 1) {
    return ef(e, t, n);
  } else {
    return he(e);
  }
}
function ef(e, t, n) {
  const r = e[t];
  if (Ae(r)) {
    return r;
  } else {
    return new bm(e, t, n);
  }
}
class Cm {
  constructor(t, n, r) {
    this.fn = t;
    this.setter = n;
    this._value = undefined;
    this.dep = new pi(this);
    this.__v_isRef = true;
    this.deps = undefined;
    this.depsTail = undefined;
    this.flags = 16;
    this.globalVersion = Xr - 1;
    this.next = undefined;
    this.effect = this;
    this.__v_isReadonly = !n;
    this.isSSR = r;
  }
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && Te !== this) {
      $u(this, true);
      return true;
    }
  }
  get value() {
    const t = this.dep.track();
    Vu(this);
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
function Em(e, t, n = false) {
  let r;
  let s;
  if (le(e)) {
    r = e;
  } else {
    r = e.get;
    s = e.set;
  }
  return new Cm(r, s, n);
}
const ys = {};
const Us = new WeakMap();
let Pn;
function Sm(e, t = false, n = Pn) {
  if (n) {
    let r = Us.get(n);
    if (!r) {
      Us.set(n, (r = []));
    }
    r.push(e);
  }
}
function km(e, t, n = be) {
  const {
    immediate: r,
    deep: s,
    once: i,
    scheduler: o,
    augmentJob: a,
    call: l,
  } = n;
  const c = (y) => (s ? y : wt(y) || s === false || s === 0 ? Kt(y, 1) : Kt(y));
  let u;
  let f;
  let d;
  let h;
  let p = false;
  let E = false;
  if (Ae(e)) {
    f = () => e.value;
    p = wt(e);
  } else if (yn(e)) {
    f = () => c(e);
    p = true;
  } else if (oe(e)) {
    E = true;
    p = e.some((y) => yn(y) || wt(y));
    f = () =>
      e.map((y) => {
        if (Ae(y)) {
          return y.value;
        }
        if (yn(y)) {
          return c(y);
        }
        if (le(y)) {
          if (l) {
            return l(y, 2);
          } else {
            return y();
          }
        }
      });
  } else if (le(e)) {
    if (t) {
      f = l ? () => l(e, 2) : e;
    } else {
      f = () => {
        if (d) {
          wn();
          try {
            d();
          } finally {
            Cn();
          }
        }
        const y = Pn;
        Pn = u;
        try {
          if (l) {
            return l(e, 3, [h]);
          } else {
            return e(h);
          }
        } finally {
          Pn = y;
        }
      };
    }
  } else {
    f = Vt;
  }
  if (t && s) {
    const y = f;
    const x = s === true ? Infinity : s;
    f = () => Kt(y(), x);
  }
  const A = ya();
  const b = () => {
    u.stop();
    if (A && A.active) {
      ha(A.effects, u);
    }
  };
  if (i && t) {
    const y = t;
    t = (...x) => {
      y(...x);
      b();
    };
  }
  let m = E ? new Array(e.length).fill(ys) : ys;
  const C = (y) => {
    if (!!(u.flags & 1) && (!!u.dirty || !!y)) {
      if (t) {
        const x = u.run();
        if (s || p || (E ? x.some((L, I) => ut(L, m[I])) : ut(x, m))) {
          if (d) {
            d();
          }
          const L = Pn;
          Pn = u;
          try {
            const I = [x, m === ys ? undefined : E && m[0] === ys ? [] : m, h];
            if (l) {
              l(t, 3, I);
            } else {
              t(...I);
            }
            m = x;
          } finally {
            Pn = L;
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
  u = new Fu(f);
  u.scheduler = o ? () => o(C, false) : C;
  h = (y) => Sm(y, false, u);
  d = u.onStop = () => {
    const y = Us.get(u);
    if (y) {
      if (l) {
        l(y, 4);
      } else {
        for (const x of y) {
          x();
        }
      }
      Us.delete(u);
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
function Kt(e, t = Infinity, n) {
  if (t <= 0 || !Ne(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) {
    return e;
  }
  n.add(e);
  t--;
  if (Ae(e)) {
    Kt(e.value, t, n);
  } else if (oe(e)) {
    for (let r = 0; r < e.length; r++) {
      Kt(e[r], t, n);
    }
  } else if (xu(e) || sr(e)) {
    e.forEach((r) => {
      Kt(r, t, n);
    });
  } else if (Au(e)) {
    for (const r in e) {
      Kt(e[r], t, n);
    }
    for (const r of Object.getOwnPropertySymbols(e)) {
      if (Object.prototype.propertyIsEnumerable.call(e, r)) {
        Kt(e[r], t, n);
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
function fs(e, t, n, r) {
  try {
    if (r) {
      return e(...r);
    } else {
      return e();
    }
  } catch (s) {
    yi(s, t, n);
  }
}
function Ot(e, t, n, r) {
  if (le(e)) {
    const s = fs(e, t, n, r);
    if (s && Tu(s)) {
      s.catch((i) => {
        yi(i, t, n);
      });
    }
    return s;
  }
  if (oe(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++) {
      s.push(Ot(e[i], t, n, r));
    }
    return s;
  }
}
function yi(e, t, n, r = true) {
  const s = t ? t.vnode : null;
  const { errorHandler: i, throwUnhandledErrorInProduction: o } =
    (t && t.appContext.config) || be;
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
    if (i) {
      wn();
      fs(i, null, 10, [e, l, c]);
      Cn();
      return;
    }
  }
  xm(e, n, s, r, o);
}
function xm(e, t, n, r = true, s = false) {
  if (s) {
    throw e;
  }
  console.error(e);
}
const ot = [];
let jt = -1;
const or = [];
let fn = null;
let Zn = 0;
const tf = Promise.resolve();
let Hs = null;
function at(e) {
  const t = Hs || tf;
  if (e) {
    return t.then(this ? e.bind(this) : e);
  } else {
    return t;
  }
}
function Tm(e) {
  let t = jt + 1;
  let n = ot.length;
  while (t < n) {
    const r = (t + n) >>> 1;
    const s = ot[r];
    const i = Jr(s);
    if (i < e || (i === e && s.flags & 2)) {
      t = r + 1;
    } else {
      n = r;
    }
  }
  return t;
}
function xa(e) {
  if (!(e.flags & 1)) {
    const t = Jr(e);
    const n = ot[ot.length - 1];
    if (!n || (!(e.flags & 2) && t >= Jr(n))) {
      ot.push(e);
    } else {
      ot.splice(Tm(t), 0, e);
    }
    e.flags |= 1;
    nf();
  }
}
function nf() {
  Hs ||= tf.then(sf);
}
function Nm(e) {
  if (oe(e)) {
    or.push(...e);
  } else if (fn && e.id === -1) {
    fn.splice(Zn + 1, 0, e);
  } else if (!(e.flags & 1)) {
    or.push(e);
    e.flags |= 1;
  }
  nf();
}
function cl(e, t, n = jt + 1) {
  for (; n < ot.length; n++) {
    const r = ot[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) {
        continue;
      }
      ot.splice(n, 1);
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
function rf(e) {
  if (or.length) {
    const t = [...new Set(or)].sort((n, r) => Jr(n) - Jr(r));
    or.length = 0;
    if (fn) {
      fn.push(...t);
      return;
    }
    fn = t;
    Zn = 0;
    for (; Zn < fn.length; Zn++) {
      const n = fn[Zn];
      if (n.flags & 4) {
        n.flags &= -2;
      }
      if (!(n.flags & 8)) {
        n();
      }
      n.flags &= -2;
    }
    fn = null;
    Zn = 0;
  }
}
const Jr = (e) => (e.id == null ? (e.flags & 2 ? -1 : Infinity) : e.id);
function sf(e) {
  try {
    for (jt = 0; jt < ot.length; jt++) {
      const t = ot[jt];
      if (t && !(t.flags & 8)) {
        if (t.flags & 4) {
          t.flags &= -2;
        }
        fs(t, t.i, t.i ? 15 : 14);
        if (!(t.flags & 4)) {
          t.flags &= -2;
        }
      }
    }
  } finally {
    for (; jt < ot.length; jt++) {
      const t = ot[jt];
      if (t) {
        t.flags &= -2;
      }
    }
    jt = -1;
    ot.length = 0;
    rf();
    Hs = null;
    if (ot.length || or.length) {
      sf();
    }
  }
}
let qe = null;
let of = null;
function zs(e) {
  const t = qe;
  qe = e;
  of = (e && e.type.__scopeId) || null;
  return t;
}
function Am(e, t = qe, n) {
  if (!t || e._n) {
    return e;
  }
  const r = (...s) => {
    if (r._d) {
      wl(-1);
    }
    const i = zs(t);
    let o;
    try {
      o = e(...s);
    } finally {
      zs(i);
      if (r._d) {
        wl(1);
      }
    }
    return o;
  };
  r._n = true;
  r._c = true;
  r._d = true;
  return r;
}
function af(e, t) {
  if (qe === null) {
    return e;
  }
  const n = ki(qe);
  const r = (e.dirs ||= []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, a, l = be] = t[s];
    if (i) {
      if (le(i)) {
        i = {
          mounted: i,
          updated: i,
        };
      }
      if (i.deep) {
        Kt(o);
      }
      r.push({
        dir: i,
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
function xn(e, t, n, r) {
  const s = e.dirs;
  const i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    if (i) {
      a.oldValue = i[o].value;
    }
    let l = a.dir[r];
    if (l) {
      wn();
      Ot(l, n, 8, [e.el, a, e, t]);
      Cn();
    }
  }
}
const lf = Symbol("_vte");
const cf = (e) => e.__isTeleport;
const qr = (e) => e && (e.disabled || e.disabled === "");
const ul = (e) => e && (e.defer || e.defer === "");
const fl = (e) => typeof SVGElement !== "undefined" && e instanceof SVGElement;
const dl = (e) =>
  typeof MathMLElement == "function" && e instanceof MathMLElement;
const Ao = (e, t) => {
  const n = e && e.to;
  if (Oe(n)) {
    if (t) {
      return t(n);
    } else {
      return null;
    }
  } else {
    return n;
  }
};
const uf = {
  name: "Teleport",
  __isTeleport: true,
  process(e, t, n, r, s, i, o, a, l, c) {
    const {
      mc: u,
      pc: f,
      pbc: d,
      o: { insert: h, querySelector: p, createText: E, createComment: A },
    } = c;
    const b = qr(t.props);
    let { shapeFlag: m, children: C, dynamicChildren: y } = t;
    if (e == null) {
      const x = (t.el = E(""));
      const L = (t.anchor = E(""));
      h(x, n, r);
      h(L, n, r);
      const I = (k, O) => {
        if (m & 16) {
          if (s && s.isCE) {
            s.ce._teleportTarget = k;
          }
          u(C, k, O, s, i, o, a, l);
        }
      };
      const W = () => {
        const k = (t.target = Ao(t.props, p));
        const O = ff(k, t, E, h);
        if (k) {
          if (o !== "svg" && fl(k)) {
            o = "svg";
          } else if (o !== "mathml" && dl(k)) {
            o = "mathml";
          }
          if (!b) {
            I(k, O);
            Ls(t, false);
          }
        }
      };
      if (b) {
        I(n, L);
        Ls(t, true);
      }
      if (ul(t.props)) {
        je(() => {
          W();
          t.el.__isMounted = true;
        }, i);
      } else {
        W();
      }
    } else {
      if (ul(t.props) && !e.el.__isMounted) {
        je(() => {
          uf.process(e, t, n, r, s, i, o, a, l, c);
          delete e.el.__isMounted;
        }, i);
        return;
      }
      t.el = e.el;
      t.targetStart = e.targetStart;
      const x = (t.anchor = e.anchor);
      const L = (t.target = e.target);
      const I = (t.targetAnchor = e.targetAnchor);
      const W = qr(e.props);
      const k = W ? n : L;
      const O = W ? x : I;
      if (o === "svg" || fl(L)) {
        o = "svg";
      } else if (o === "mathml" || dl(L)) {
        o = "mathml";
      }
      if (y) {
        d(e.dynamicChildren, y, k, s, i, o, a);
        Pa(e, t, true);
      } else if (!l) {
        f(e, t, k, O, s, i, o, a, false);
      }
      if (b) {
        if (W) {
          if (t.props && e.props && t.props.to !== e.props.to) {
            t.props.to = e.props.to;
          }
        } else {
          bs(t, n, x, c, 1);
        }
      } else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const q = (t.target = Ao(t.props, p));
        if (q) {
          bs(t, q, null, c, 0);
        }
      } else if (W) {
        bs(t, L, I, c, 1);
      }
      Ls(t, b);
    }
  },
  remove(e, t, n, { um: r, o: { remove: s } }, i) {
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
      s(c);
      s(u);
    }
    if (i) {
      s(l);
    }
    if (o & 16) {
      const h = i || !qr(d);
      for (let p = 0; p < a.length; p++) {
        const E = a[p];
        r(E, t, n, h, !!E.dynamicChildren);
      }
    }
  },
  move: bs,
  hydrate: Im,
};
function bs(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  if (i === 0) {
    r(e.targetAnchor, t, n);
  }
  const { el: o, anchor: a, shapeFlag: l, children: c, props: u } = e;
  const f = i === 2;
  if (f) {
    r(o, t, n);
  }
  if ((!f || qr(u)) && l & 16) {
    for (let d = 0; d < c.length; d++) {
      s(c[d], t, n, 2);
    }
  }
  if (f) {
    r(a, t, n);
  }
}
function Im(
  e,
  t,
  n,
  r,
  s,
  i,
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
  const d = (t.target = Ao(t.props, l));
  if (d) {
    const h = qr(t.props);
    const p = d._lpa || d.firstChild;
    if (t.shapeFlag & 16) {
      if (h) {
        t.anchor = f(o(e), t, a(e), n, r, s, i);
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
          ff(d, t, u, c);
        }
        f(p && o(p), t, d, n, r, s, i);
      }
    }
    Ls(t, h);
  }
  return t.anchor && o(t.anchor);
}
const Pm = uf;
function Ls(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r;
    let s;
    for (
      t
        ? ((r = e.el), (s = e.anchor))
        : ((r = e.targetStart), (s = e.targetAnchor));
      r && r !== s;

    ) {
      if (r.nodeType === 1) {
        r.setAttribute("data-v-owner", n.uid);
      }
      r = r.nextSibling;
    }
    n.ut();
  }
}
function ff(e, t, n, r) {
  const s = (t.targetStart = n(""));
  const i = (t.targetAnchor = n(""));
  s[lf] = i;
  if (e) {
    r(s, e);
    r(i, e);
  }
  return i;
}
const dn = Symbol("_leaveCb");
const _s = Symbol("_enterCb");
function df() {
  const e = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map(),
  };
  St(() => {
    e.isMounted = true;
  });
  kt(() => {
    e.isUnmounting = true;
  });
  return e;
}
const pt = [Function, Array];
const hf = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  onBeforeEnter: pt,
  onEnter: pt,
  onAfterEnter: pt,
  onEnterCancelled: pt,
  onBeforeLeave: pt,
  onLeave: pt,
  onAfterLeave: pt,
  onLeaveCancelled: pt,
  onBeforeAppear: pt,
  onAppear: pt,
  onAfterAppear: pt,
  onAppearCancelled: pt,
};
const mf = (e) => {
  const t = e.subTree;
  if (t.component) {
    return mf(t.component);
  } else {
    return t;
  }
};
const Lm = {
  name: "BaseTransition",
  props: hf,
  setup(e, { slots: t }) {
    const n = Se();
    const r = df();
    return () => {
      const s = t.default && Ta(t.default(), true);
      if (!s || !s.length) {
        return;
      }
      const i = gf(s);
      const o = ue(e);
      const { mode: a } = o;
      if (r.isLeaving) {
        return Wi(i);
      }
      const l = hl(i);
      if (!l) {
        return Wi(i);
      }
      let c = Zr(l, o, r, n, (f) => (c = f));
      if (l.type !== nt) {
        bn(l, c);
      }
      let u = n.subTree && hl(n.subTree);
      if (u && u.type !== nt && !pn(l, u) && mf(n).type !== nt) {
        let f = Zr(u, o, r, n);
        bn(u, f);
        if (a === "out-in" && l.type !== nt) {
          r.isLeaving = true;
          f.afterLeave = () => {
            r.isLeaving = false;
            if (!(n.job.flags & 8)) {
              n.update();
            }
            delete f.afterLeave;
            u = undefined;
          };
          return Wi(i);
        }
        if (a === "in-out" && l.type !== nt) {
          f.delayLeave = (d, h, p) => {
            const E = pf(r, u);
            E[String(u.key)] = u;
            d[dn] = () => {
              h();
              d[dn] = undefined;
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
      return i;
    };
  },
};
function gf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) {
      if (n.type !== nt) {
        t = n;
        break;
      }
    }
  }
  return t;
}
const Om = Lm;
function pf(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  if (!r) {
    r = Object.create(null);
    n.set(t.type, r);
  }
  return r;
}
function Zr(e, t, n, r, s) {
  const {
    appear: i,
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
  const x = pf(n, e);
  const L = (k, O) => {
    if (k) {
      Ot(k, r, 9, O);
    }
  };
  const I = (k, O) => {
    const q = O[1];
    L(k, O);
    if (oe(k)) {
      if (k.every((S) => S.length <= 1)) {
        q();
      }
    } else if (k.length <= 1) {
      q();
    }
  };
  const W = {
    mode: o,
    persisted: a,
    beforeEnter(k) {
      let O = l;
      if (!n.isMounted) {
        if (i) {
          O = A || l;
        } else {
          return;
        }
      }
      if (k[dn]) {
        k[dn](true);
      }
      const q = x[y];
      if (q && pn(e, q) && q.el[dn]) {
        q.el[dn]();
      }
      L(O, [k]);
    },
    enter(k) {
      let O = c;
      let q = u;
      let S = f;
      if (!n.isMounted) {
        if (i) {
          O = b || c;
          q = m || u;
          S = C || f;
        } else {
          return;
        }
      }
      let G = false;
      const D = (k[_s] = (ee) => {
        if (!G) {
          G = true;
          if (ee) {
            L(S, [k]);
          } else {
            L(q, [k]);
          }
          if (W.delayedLeave) {
            W.delayedLeave();
          }
          k[_s] = undefined;
        }
      });
      if (O) {
        I(O, [k, D]);
      } else {
        D();
      }
    },
    leave(k, O) {
      const q = String(e.key);
      if (k[_s]) {
        k[_s](true);
      }
      if (n.isUnmounting) {
        return O();
      }
      L(d, [k]);
      let S = false;
      const G = (k[dn] = (D) => {
        if (!S) {
          S = true;
          O();
          if (D) {
            L(E, [k]);
          } else {
            L(p, [k]);
          }
          k[dn] = undefined;
          if (x[q] === e) {
            delete x[q];
          }
        }
      });
      x[q] = e;
      if (h) {
        I(h, [k, G]);
      } else {
        G();
      }
    },
    clone(k) {
      const O = Zr(k, t, n, r, s);
      if (s) {
        s(O);
      }
      return O;
    },
  };
  return W;
}
function Wi(e) {
  if (bi(e)) {
    e = Jt(e);
    e.children = null;
    return e;
  }
}
function hl(e) {
  if (!bi(e)) {
    if (cf(e.type) && e.children) {
      return gf(e.children);
    } else {
      return e;
    }
  }
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) {
      return n[0];
    }
    if (t & 32 && le(n.default)) {
      return n.default();
    }
  }
}
function bn(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    bn(e.component.subTree, t);
  } else if (e.shapeFlag & 128) {
    e.ssContent.transition = t.clone(e.ssContent);
    e.ssFallback.transition = t.clone(e.ssFallback);
  } else {
    e.transition = t;
  }
}
function Ta(e, t = false, n) {
  let r = [];
  let s = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const a = n == null ? o.key : String(n) + String(o.key ?? i);
    if (o.type === tt) {
      if (o.patchFlag & 128) {
        s++;
      }
      r = r.concat(Ta(o.children, t, a));
    } else if (t || o.type !== nt) {
      r.push(
        a != null
          ? Jt(o, {
              key: a,
            })
          : o
      );
    }
  }
  if (s > 1) {
    for (let i = 0; i < r.length; i++) {
      r[i].patchFlag = -2;
    }
  }
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
function Un(e, t) {
  if (le(e)) {
    return $e(
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
function vf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ks(e, t, n, r, s = false) {
  if (oe(e)) {
    e.forEach((p, E) => Ks(p, t && (oe(t) ? t[E] : t), n, r, s));
    return;
  }
  if (Dn(r) && !s) {
    if (
      r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component
    ) {
      Ks(e, t, n, r.component.subTree);
    }
    return;
  }
  const i = r.shapeFlag & 4 ? ki(r.component) : r.el;
  const o = s ? null : i;
  const { i: a, r: l } = e;
  const c = t && t.r;
  const u = a.refs === be ? (a.refs = {}) : a.refs;
  const f = a.setupState;
  const d = ue(f);
  const h = f === be ? () => false : (p) => Ce(d, p);
  if (c != null && c !== l) {
    if (Oe(c)) {
      u[c] = null;
      if (h(c)) {
        f[c] = null;
      }
    } else if (Ae(c)) {
      c.value = null;
    }
  }
  if (le(l)) {
    fs(l, a, 12, [o, u]);
  } else {
    const p = Oe(l);
    const E = Ae(l);
    if (p || E) {
      const A = () => {
        if (e.f) {
          const b = p ? (h(l) ? f[l] : u[l]) : l.value;
          if (s) {
            if (oe(b)) {
              ha(b, i);
            }
          } else if (oe(b)) {
            if (!b.includes(i)) {
              b.push(i);
            }
          } else if (p) {
            u[l] = [i];
            if (h(l)) {
              f[l] = u[l];
            }
          } else {
            l.value = [i];
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
        je(A, n);
      } else {
        A();
      }
    }
  }
}
gi().requestIdleCallback;
gi().cancelIdleCallback;
const Dn = (e) => !!e.type.__asyncLoader;
const bi = (e) => e.type.__isKeepAlive;
const Rm = {
  name: "KeepAlive",
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number],
  },
  setup(e, { slots: t }) {
    const n = Se();
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
    const s = new Map();
    const i = new Set();
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
      je(() => {
        I.isDeactivated = false;
        if (I.a) {
          ir(I.a);
        }
        const W = m.props && m.props.onVnodeMounted;
        if (W) {
          yt(W, I.parent, m);
        }
      }, a);
    };
    r.deactivate = (m) => {
      const C = m.component;
      Xs(C.m);
      Xs(C.a);
      c(m, d, null, 1, a);
      je(() => {
        if (C.da) {
          ir(C.da);
        }
        const y = m.props && m.props.onVnodeUnmounted;
        if (y) {
          yt(y, C.parent, m);
        }
        C.isDeactivated = true;
      }, a);
    };
    function h(m) {
      Bi(m);
      u(m, n, a, true);
    }
    function p(m) {
      s.forEach((C, y) => {
        const x = Mo(C.type);
        if (x && !m(x)) {
          E(y);
        }
      });
    }
    function E(m) {
      const C = s.get(m);
      if (C && (!o || !pn(C, o))) {
        h(C);
      } else if (o) {
        Bi(o);
      }
      s.delete(m);
      i.delete(m);
    }
    de(
      () => [e.include, e.exclude],
      ([m, C]) => {
        if (m) {
          p((y) => Or(m, y));
        }
        if (C) {
          p((y) => !Or(C, y));
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
        if (Ys(n.subTree.type)) {
          je(() => {
            s.set(A, ws(n.subTree));
          }, n.subTree.suspense);
        } else {
          s.set(A, ws(n.subTree));
        }
      }
    };
    St(b);
    Na(b);
    kt(() => {
      s.forEach((m) => {
        const { subTree: C, suspense: y } = n;
        const x = ws(C);
        if (m.type === x.type && m.key === x.key) {
          Bi(x);
          const L = x.component.da;
          if (L) {
            je(L, y);
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
      if (!cr(C) || (!(C.shapeFlag & 4) && !(C.shapeFlag & 128))) {
        o = null;
        return C;
      }
      let y = ws(C);
      if (y.type === nt) {
        o = null;
        return y;
      }
      const x = y.type;
      const L = Mo(Dn(y) ? y.type.__asyncResolved || {} : x);
      const { include: I, exclude: W, max: k } = e;
      if ((I && (!L || !Or(I, L))) || (W && L && Or(W, L))) {
        y.shapeFlag &= -257;
        o = y;
        return C;
      }
      const O = y.key == null ? x : y.key;
      const q = s.get(O);
      if (y.el) {
        y = Jt(y);
        if (C.shapeFlag & 128) {
          C.ssContent = y;
        }
      }
      A = O;
      if (q) {
        y.el = q.el;
        y.component = q.component;
        if (y.transition) {
          bn(y, y.transition);
        }
        y.shapeFlag |= 512;
        i.delete(O);
        i.add(O);
      } else {
        i.add(O);
        if (k && i.size > parseInt(k, 10)) {
          E(i.values().next().value);
        }
      }
      y.shapeFlag |= 256;
      o = y;
      if (Ys(C.type)) {
        return C;
      } else {
        return y;
      }
    };
  },
};
const PC = Rm;
function Or(e, t) {
  if (oe(e)) {
    return e.some((n) => Or(n, t));
  } else if (Oe(e)) {
    return e.split(",").includes(t);
  } else if ($h(e)) {
    e.lastIndex = 0;
    return e.test(t);
  } else {
    return false;
  }
}
function yf(e, t) {
  bf(e, "a", t);
}
function _i(e, t) {
  bf(e, "da", t);
}
function bf(e, t, n = He) {
  const r = (e.__wdc ||= () => {
    let s = n;
    while (s) {
      if (s.isDeactivated) {
        return;
      }
      s = s.parent;
    }
    return e();
  });
  wi(t, r, n);
  if (n) {
    let s = n.parent;
    while (s && s.parent) {
      if (bi(s.parent.vnode)) {
        Mm(r, t, n, s);
      }
      s = s.parent;
    }
  }
}
function Mm(e, t, n, r) {
  const s = wi(t, e, r, true);
  Ci(() => {
    ha(r[t], s);
  }, n);
}
function Bi(e) {
  e.shapeFlag &= -257;
  e.shapeFlag &= -513;
}
function ws(e) {
  if (e.shapeFlag & 128) {
    return e.ssContent;
  } else {
    return e;
  }
}
function wi(e, t, n = He, r = false) {
  if (n) {
    const s = (n[e] ||= []);
    const i = (t.__weh ||= (...o) => {
      wn();
      const a = hs(n);
      const l = Ot(t, n, e, o);
      a();
      Cn();
      return l;
    });
    if (r) {
      s.unshift(i);
    } else {
      s.push(i);
    }
    return i;
  }
}
const nn =
  (e) =>
  (t, n = He) => {
    if (!ts || e === "sp") {
      wi(e, (...r) => t(...r), n);
    }
  };
const Fm = nn("bm");
const St = nn("m");
const _f = nn("bu");
const Na = nn("u");
const kt = nn("bum");
const Ci = nn("um");
const Dm = nn("sp");
const $m = nn("rtg");
const jm = nn("rtc");
function qm(e, t = He) {
  wi("ec", e, t);
}
const Vm = "components";
function Wm(e, t) {
  return Um(Vm, e, true, t) || e;
}
const Bm = Symbol.for("v-ndc");
function Um(e, t, n = true, r = false) {
  const s = qe || He;
  if (s) {
    const i = s.type;
    {
      const a = Mo(i, false);
      if (a && (a === t || a === mt(t) || a === mi(mt(t)))) {
        return i;
      }
    }
    const o = ml(s[e] || i[e], t) || ml(s.appContext[e], t);
    if (!o && r) {
      return i;
    } else {
      return o;
    }
  }
}
function ml(e, t) {
  return e && (e[t] || e[mt(t)] || e[mi(mt(t))]);
}
function LC(e, t, n, r) {
  let s;
  const i = n;
  const o = oe(e);
  if (o || Oe(e)) {
    const a = o && yn(e);
    let l = false;
    if (a) {
      l = !wt(e);
      e = vi(e);
    }
    s = new Array(e.length);
    for (let c = 0, u = e.length; c < u; c++) {
      s[c] = t(l ? et(e[c]) : e[c], c, undefined, i);
    }
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++) {
      s[a] = t(a + 1, a, undefined, i);
    }
  } else if (Ne(e)) {
    if (e[Symbol.iterator]) {
      s = Array.from(e, (a, l) => t(a, l, undefined, i));
    } else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        s[l] = t(e[u], u, l, i);
      }
    }
  } else {
    s = [];
  }
  return s;
}
function OC(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (oe(r)) {
      for (let s = 0; s < r.length; s++) {
        e[r[s].name] = r[s].fn;
      }
    } else if (r) {
      e[r.name] = r.key
        ? (...s) => {
            const i = r.fn(...s);
            if (i) {
              i.key = r.key;
            }
            return i;
          }
        : r.fn;
    }
  }
  return e;
}
function RC(e, t, n = {}, r, s) {
  if (qe.ce || (qe.parent && Dn(qe.parent) && qe.parent.ce)) {
    if (t !== "default") {
      n.name = t;
    }
    Js();
    return Zs(tt, null, [Qe("slot", n, r)], 64);
  }
  let i = e[t];
  if (i && i._c) {
    i._d = false;
  }
  Js();
  const o = i && wf(i(n));
  const a = n.key || (o && o.key);
  const l = Zs(
    tt,
    {
      key: (a && !en(a) ? a : `_${t}`) + "",
    },
    o || [],
    o && e._ === 1 ? 64 : -2
  );
  if (!s && l.scopeId) {
    l.slotScopeIds = [l.scopeId + "-s"];
  }
  if (i && i._c) {
    i._d = true;
  }
  return l;
}
function wf(e) {
  if (
    e.some((t) =>
      cr(t) ? t.type !== nt && (t.type !== tt || !!wf(t.children)) : true
    )
  ) {
    return e;
  } else {
    return null;
  }
}
const Io = (e) => (e ? (Wf(e) ? ki(e) : Io(e.parent)) : null);
const Vr = $e(Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => e.props,
  $attrs: (e) => e.attrs,
  $slots: (e) => e.slots,
  $refs: (e) => e.refs,
  $parent: (e) => Io(e.parent),
  $root: (e) => Io(e.root),
  $host: (e) => e.ce,
  $emit: (e) => e.emit,
  $options: (e) => Ef(e),
  $forceUpdate: (e) =>
    (e.f ||= () => {
      xa(e.update);
    }),
  $nextTick: (e) => (e.n ||= at.bind(e.proxy)),
  $watch: (e) => dg.bind(e),
});
const Ui = (e, t) => e !== be && !e.__isScriptSetup && Ce(e, t);
const Hm = {
  get({ _: e }, t) {
    if (t === "__v_skip") {
      return true;
    }
    const {
      ctx: n,
      setupState: r,
      data: s,
      props: i,
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
            return s[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      } else {
        if (Ui(r, t)) {
          o[t] = 1;
          return r[t];
        }
        if (s !== be && Ce(s, t)) {
          o[t] = 2;
          return s[t];
        }
        if ((c = e.propsOptions[0]) && Ce(c, t)) {
          o[t] = 3;
          return i[t];
        }
        if (n !== be && Ce(n, t)) {
          o[t] = 4;
          return n[t];
        }
        if (Po) {
          o[t] = 0;
        }
      }
    }
    const u = Vr[t];
    let f;
    let d;
    if (u) {
      if (t === "$attrs") {
        Ze(e.attrs, "get", "");
      }
      return u(e);
    }
    if ((f = a.__cssModules) && (f = f[t])) {
      return f;
    }
    if (n !== be && Ce(n, t)) {
      o[t] = 4;
      return n[t];
    }
    d = l.config.globalProperties;
    if (Ce(d, t)) {
      return d[t];
    }
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    if (Ui(s, t)) {
      s[t] = n;
      return true;
    } else if (r !== be && Ce(r, t)) {
      r[t] = n;
      return true;
    } else if (Ce(e.props, t) || (t[0] === "$" && t.slice(1) in e)) {
      return false;
    } else {
      i[t] = n;
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
        appContext: s,
        propsOptions: i,
      },
    },
    o
  ) {
    let a;
    return (
      !!n[o] ||
      (e !== be && Ce(e, o)) ||
      Ui(t, o) ||
      ((a = i[0]) && Ce(a, o)) ||
      Ce(r, o) ||
      Ce(Vr, o) ||
      Ce(s.config.globalProperties, o)
    );
  },
  defineProperty(e, t, n) {
    if (n.get != null) {
      e._.accessCache[t] = 0;
    } else if (Ce(n, "value")) {
      this.set(e, t, n.value, null);
    }
    return Reflect.defineProperty(e, t, n);
  },
};
function Gs(e) {
  if (oe(e)) {
    return e.reduce((t, n) => {
      t[n] = null;
      return t;
    }, {});
  } else {
    return e;
  }
}
function MC(e, t) {
  if (!e || !t) {
    return e || t;
  } else if (oe(e) && oe(t)) {
    return e.concat(t);
  } else {
    return $e({}, Gs(e), Gs(t));
  }
}
let Po = true;
function zm(e) {
  const t = Ef(e);
  const n = e.proxy;
  const r = e.ctx;
  Po = false;
  if (t.beforeCreate) {
    gl(t.beforeCreate, e, "bc");
  }
  const {
    data: s,
    computed: i,
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
    errorCaptured: W,
    serverPrefetch: k,
    expose: O,
    inheritAttrs: q,
    components: S,
    directives: G,
    filters: D,
  } = t;
  if (c) {
    Km(c, r, null);
  }
  if (o) {
    for (const Q in o) {
      const K = o[Q];
      if (le(K)) {
        r[Q] = K.bind(n);
      }
    }
  }
  if (s) {
    const Q = s.call(n, n);
    if (Ne(Q)) {
      e.data = Wn(Q);
    }
  }
  Po = true;
  if (i) {
    for (const Q in i) {
      const K = i[Q];
      const ie = le(K) ? K.bind(n, n) : le(K.get) ? K.get.bind(n, n) : Vt;
      const ce = !le(K) && le(K.set) ? K.set.bind(n) : Vt;
      const fe = M({
        get: ie,
        set: ce,
      });
      Object.defineProperty(r, Q, {
        enumerable: true,
        configurable: true,
        get: () => fe.value,
        set: (z) => (fe.value = z),
      });
    }
  }
  if (a) {
    for (const Q in a) {
      Cf(a[Q], r, n, Q);
    }
  }
  if (l) {
    const Q = le(l) ? l.call(n) : l;
    Reflect.ownKeys(Q).forEach((K) => {
      Os(K, Q[K]);
    });
  }
  if (u) {
    gl(u, e, "c");
  }
  function J(Q, K) {
    if (oe(K)) {
      K.forEach((ie) => Q(ie.bind(n)));
    } else if (K) {
      Q(K.bind(n));
    }
  }
  J(Fm, f);
  J(St, d);
  J(_f, h);
  J(Na, p);
  J(yf, E);
  J(_i, A);
  J(qm, W);
  J(jm, L);
  J($m, I);
  J(kt, m);
  J(Ci, y);
  J(Dm, k);
  if (oe(O)) {
    if (O.length) {
      const Q = (e.exposed ||= {});
      O.forEach((K) => {
        Object.defineProperty(Q, K, {
          get: () => n[K],
          set: (ie) => (n[K] = ie),
        });
      });
    } else {
      e.exposed ||= {};
    }
  }
  if (x && e.render === Vt) {
    e.render = x;
  }
  if (q != null) {
    e.inheritAttrs = q;
  }
  if (S) {
    e.components = S;
  }
  if (G) {
    e.directives = G;
  }
  if (k) {
    vf(e);
  }
}
function Km(e, t, n = Vt) {
  if (oe(e)) {
    e = Lo(e);
  }
  for (const r in e) {
    const s = e[r];
    let i;
    if (Ne(s)) {
      if ("default" in s) {
        i = lt(s.from || r, s.default, true);
      } else {
        i = lt(s.from || r);
      }
    } else {
      i = lt(s);
    }
    if (Ae(i)) {
      Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => i.value,
        set: (o) => (i.value = o),
      });
    } else {
      t[r] = i;
    }
  }
}
function gl(e, t, n) {
  Ot(oe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Cf(e, t, n, r) {
  let s = r.includes(".") ? Ff(n, r) : () => n[r];
  if (Oe(e)) {
    const i = t[e];
    if (le(i)) {
      de(s, i);
    }
  } else if (le(e)) {
    de(s, e.bind(n));
  } else if (Ne(e)) {
    if (oe(e)) {
      e.forEach((i) => Cf(i, t, n, r));
    } else {
      const i = le(e.handler) ? e.handler.bind(n) : t[e.handler];
      if (le(i)) {
        de(s, i, e);
      }
    }
  }
}
function Ef(e) {
  const t = e.type;
  const { mixins: n, extends: r } = t;
  const {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o },
  } = e.appContext;
  const a = i.get(t);
  let l;
  if (a) {
    l = a;
  } else if (!s.length && !n && !r) {
    l = t;
  } else {
    l = {};
    if (s.length) {
      s.forEach((c) => Qs(l, c, o, true));
    }
    Qs(l, t, o);
  }
  if (Ne(t)) {
    i.set(t, l);
  }
  return l;
}
function Qs(e, t, n, r = false) {
  const { mixins: s, extends: i } = t;
  if (i) {
    Qs(e, i, n, true);
  }
  if (s) {
    s.forEach((o) => Qs(e, o, n, true));
  }
  for (const o in t) {
    if (!r || o !== "expose") {
      const a = Gm[o] || (n && n[o]);
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  }
  return e;
}
const Gm = {
  data: pl,
  props: vl,
  emits: vl,
  methods: Rr,
  computed: Rr,
  beforeCreate: rt,
  created: rt,
  beforeMount: rt,
  mounted: rt,
  beforeUpdate: rt,
  updated: rt,
  beforeDestroy: rt,
  beforeUnmount: rt,
  destroyed: rt,
  unmounted: rt,
  activated: rt,
  deactivated: rt,
  errorCaptured: rt,
  serverPrefetch: rt,
  components: Rr,
  directives: Rr,
  watch: Xm,
  provide: pl,
  inject: Qm,
};
function pl(e, t) {
  if (t) {
    if (e) {
      return function () {
        return $e(
          le(e) ? e.call(this, this) : e,
          le(t) ? t.call(this, this) : t
        );
      };
    } else {
      return t;
    }
  } else {
    return e;
  }
}
function Qm(e, t) {
  return Rr(Lo(e), Lo(t));
}
function Lo(e) {
  if (oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      t[e[n]] = e[n];
    }
    return t;
  }
  return e;
}
function rt(e, t) {
  if (e) {
    return [...new Set([].concat(e, t))];
  } else {
    return t;
  }
}
function Rr(e, t) {
  if (e) {
    return $e(Object.create(null), e, t);
  } else {
    return t;
  }
}
function vl(e, t) {
  if (e) {
    if (oe(e) && oe(t)) {
      return [...new Set([...e, ...t])];
    } else {
      return $e(Object.create(null), Gs(e), Gs(t ?? {}));
    }
  } else {
    return t;
  }
}
function Xm(e, t) {
  if (!e) {
    return t;
  }
  if (!t) {
    return e;
  }
  const n = $e(Object.create(null), e);
  for (const r in t) {
    n[r] = rt(e[r], t[r]);
  }
  return n;
}
function Sf() {
  return {
    app: null,
    config: {
      isNativeTag: Fh,
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
let Ym = 0;
function Jm(e, t) {
  return function (r, s = null) {
    if (!le(r)) {
      r = $e({}, r);
    }
    if (s != null && !Ne(s)) {
      s = null;
    }
    const i = Sf();
    const o = new WeakSet();
    const a = [];
    let l = false;
    const c = (i.app = {
      _uid: Ym++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Lg,
      get config() {
        return i.config;
      },
      set config(u) {},
      use(u, ...f) {
        if (!o.has(u)) {
          if (u && le(u.install)) {
            o.add(u);
            u.install(c, ...f);
          } else if (le(u)) {
            o.add(u);
            u(c, ...f);
          }
        }
        return c;
      },
      mixin(u) {
        if (!i.mixins.includes(u)) {
          i.mixins.push(u);
        }
        return c;
      },
      component(u, f) {
        if (f) {
          i.components[u] = f;
          return c;
        } else {
          return i.components[u];
        }
      },
      directive(u, f) {
        if (f) {
          i.directives[u] = f;
          return c;
        } else {
          return i.directives[u];
        }
      },
      mount(u, f, d) {
        if (!l) {
          const h = c._ceVNode || Qe(r, s);
          h.appContext = i;
          if (d === true) {
            d = "svg";
          } else if (d === false) {
            d = undefined;
          }
          e(h, u, d);
          l = true;
          c._container = u;
          u.__vue_app__ = c;
          return ki(h.component);
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        if (l) {
          Ot(a, c._instance, 16);
          e(null, c._container);
          delete c._container.__vue_app__;
        }
      },
      provide(u, f) {
        i.provides[u] = f;
        return c;
      },
      runWithContext(u) {
        const f = $n;
        $n = c;
        try {
          return u();
        } finally {
          $n = f;
        }
      },
    });
    return c;
  };
}
let $n = null;
function Os(e, t) {
  if (He) {
    let n = He.provides;
    const r = He.parent && He.parent.provides;
    if (r === n) {
      n = He.provides = Object.create(r);
    }
    n[e] = t;
  }
}
function lt(e, t, n = false) {
  const r = He || qe;
  if (r || $n) {
    const s = $n
      ? $n._context.provides
      : r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : undefined;
    if (s && e in s) {
      return s[e];
    }
    if (arguments.length > 1) {
      if (n && le(t)) {
        return t.call(r && r.proxy);
      } else {
        return t;
      }
    }
  }
}
function Aa() {
  return !!He || !!qe || !!$n;
}
const kf = {};
const xf = () => Object.create(kf);
const Tf = (e) => Object.getPrototypeOf(e) === kf;
function Zm(e, t, n, r = false) {
  const s = {};
  const i = xf();
  e.propsDefaults = Object.create(null);
  Nf(e, t, s, i);
  for (const o in e.propsOptions[0]) {
    if (!(o in s)) {
      s[o] = undefined;
    }
  }
  if (n) {
    e.props = r ? s : Xu(s);
  } else if (e.type.props) {
    e.props = s;
  } else {
    e.props = i;
  }
  e.attrs = i;
}
function eg(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o },
  } = e;
  const a = ue(s);
  const [l] = e.propsOptions;
  let c = false;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (Si(e.emitsOptions, d)) {
          continue;
        }
        const h = t[d];
        if (l) {
          if (Ce(i, d)) {
            if (h !== i[d]) {
              i[d] = h;
              c = true;
            }
          } else {
            const p = mt(d);
            s[p] = Oo(l, a, p, h, e, false);
          }
        } else if (h !== i[d]) {
          i[d] = h;
          c = true;
        }
      }
    }
  } else {
    if (Nf(e, t, s, i)) {
      c = true;
    }
    let u;
    for (const f in a) {
      if (!t || (!Ce(t, f) && ((u = tn(f)) === f || !Ce(t, u)))) {
        if (l) {
          if (n && (n[f] !== undefined || n[u] !== undefined)) {
            s[f] = Oo(l, a, f, undefined, e, true);
          }
        } else {
          delete s[f];
        }
      }
    }
    if (i !== a) {
      for (const f in i) {
        if (!t || !Ce(t, f)) {
          delete i[f];
          c = true;
        }
      }
    }
  }
  if (c) {
    zt(e.attrs, "set", "");
  }
}
function Nf(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = false;
  let a;
  if (t) {
    for (let l in t) {
      if (Dr(l)) {
        continue;
      }
      const c = t[l];
      let u;
      if (s && Ce(s, (u = mt(l)))) {
        if (!i || !i.includes(u)) {
          n[u] = c;
        } else {
          (a ||= {})[u] = c;
        }
      } else if (!Si(e.emitsOptions, l)) {
        if (!(l in r) || c !== r[l]) {
          r[l] = c;
          o = true;
        }
      }
    }
  }
  if (i) {
    const l = ue(n);
    const c = a || be;
    for (let u = 0; u < i.length; u++) {
      const f = i[u];
      n[f] = Oo(s, l, f, c[f], e, !Ce(c, f));
    }
  }
  return o;
}
function Oo(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const a = Ce(o, "default");
    if (a && r === undefined) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && le(l)) {
        const { propsDefaults: c } = s;
        if (n in c) {
          r = c[n];
        } else {
          const u = hs(s);
          r = c[n] = l.call(null, t);
          u();
        }
      } else {
        r = l;
      }
      if (s.ce) {
        s.ce._setProp(n, r);
      }
    }
    if (o[0]) {
      if (i && !a) {
        r = false;
      } else if (o[1] && (r === "" || r === tn(n))) {
        r = true;
      }
    }
  }
  return r;
}
const tg = new WeakMap();
function Af(e, t, n = false) {
  const r = n ? tg : t.propsCache;
  const s = r.get(e);
  if (s) {
    return s;
  }
  const i = e.props;
  const o = {};
  const a = [];
  let l = false;
  if (!le(e)) {
    const u = (f) => {
      l = true;
      const [d, h] = Af(f, t, true);
      $e(o, d);
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
  if (!i && !l) {
    if (Ne(e)) {
      r.set(e, rr);
    }
    return rr;
  }
  if (oe(i)) {
    for (let u = 0; u < i.length; u++) {
      const f = mt(i[u]);
      if (yl(f)) {
        o[f] = be;
      }
    }
  } else if (i) {
    for (const u in i) {
      const f = mt(u);
      if (yl(f)) {
        const d = i[u];
        const h = (o[f] =
          oe(d) || le(d)
            ? {
                type: d,
              }
            : $e({}, d));
        const p = h.type;
        let E = false;
        let A = true;
        if (oe(p)) {
          for (let b = 0; b < p.length; ++b) {
            const m = p[b];
            const C = le(m) && m.name;
            if (C === "Boolean") {
              E = true;
              break;
            } else if (C === "String") {
              A = false;
            }
          }
        } else {
          E = le(p) && p.name === "Boolean";
        }
        h[0] = E;
        h[1] = A;
        if (E || Ce(h, "default")) {
          a.push(f);
        }
      }
    }
  }
  const c = [o, a];
  if (Ne(e)) {
    r.set(e, c);
  }
  return c;
}
function yl(e) {
  return e[0] !== "$" && !Dr(e);
}
const If = (e) => e[0] === "_" || e === "$stable";
const Ia = (e) => (oe(e) ? e.map(qt) : [qt(e)]);
const ng = (e, t, n) => {
  if (t._n) {
    return t;
  }
  const r = Am((...s) => Ia(t(...s)), n);
  r._c = false;
  return r;
};
const Pf = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (If(s)) {
      continue;
    }
    const i = e[s];
    if (le(i)) {
      t[s] = ng(s, i, r);
    } else if (i != null) {
      const o = Ia(i);
      t[s] = () => o;
    }
  }
};
const Lf = (e, t) => {
  const n = Ia(t);
  e.slots.default = () => n;
};
const Of = (e, t, n) => {
  for (const r in t) {
    if (n || r !== "_") {
      e[r] = t[r];
    }
  }
};
const rg = (e, t, n) => {
  const r = (e.slots = xf());
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    if (s) {
      Of(r, t, n);
      if (n) {
        Iu(r, "_", s, true);
      }
    } else {
      Pf(t, r);
    }
  } else if (t) {
    Lf(e, t);
  }
};
const sg = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = true;
  let o = be;
  if (r.shapeFlag & 32) {
    const a = t._;
    if (a) {
      if (n && a === 1) {
        i = false;
      } else {
        Of(s, t, n);
      }
    } else {
      i = !t.$stable;
      Pf(t, s);
    }
    o = t;
  } else if (t) {
    Lf(e, t);
    o = {
      default: 1,
    };
  }
  if (i) {
    for (const a in s) {
      if (!If(a) && o[a] == null) {
        delete s[a];
      }
    }
  }
};
const je = yg;
function ig(e) {
  return og(e);
}
function og(e, t) {
  const n = gi();
  n.__VUE__ = true;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: d,
    setScopeId: h = Vt,
    insertStaticContent: p,
  } = e;
  const E = (
    _,
    w,
    P,
    V = null,
    U = null,
    B = null,
    g = undefined,
    v = null,
    N = !!w.dynamicChildren
  ) => {
    if (_ === w) {
      return;
    }
    if (_ && !pn(_, w)) {
      V = F(_);
      z(_, U, B, true);
      _ = null;
    }
    if (w.patchFlag === -2) {
      N = false;
      w.dynamicChildren = null;
    }
    const { type: R, ref: Z, shapeFlag: H } = w;
    switch (R) {
      case ds:
        A(_, w, P, V);
        break;
      case nt:
        b(_, w, P, V);
        break;
      case Rs:
        if (_ == null) {
          m(w, P, V, g);
        }
        break;
      case tt:
        S(_, w, P, V, U, B, g, v, N);
        break;
      default:
        if (H & 1) {
          x(_, w, P, V, U, B, g, v, N);
        } else if (H & 6) {
          G(_, w, P, V, U, B, g, v, N);
        } else if (H & 64 || H & 128) {
          R.process(_, w, P, V, U, B, g, v, N, te);
        }
    }
    if (Z != null && U) {
      Ks(Z, _ && _.ref, B, w || _, !w);
    }
  };
  const A = (_, w, P, V) => {
    if (_ == null) {
      r((w.el = a(w.children)), P, V);
    } else {
      const U = (w.el = _.el);
      if (w.children !== _.children) {
        c(U, w.children);
      }
    }
  };
  const b = (_, w, P, V) => {
    if (_ == null) {
      r((w.el = l(w.children || "")), P, V);
    } else {
      w.el = _.el;
    }
  };
  const m = (_, w, P, V) => {
    [_.el, _.anchor] = p(_.children, w, P, V, _.el, _.anchor);
  };
  const C = ({ el: _, anchor: w }, P, V) => {
    let U;
    while (_ && _ !== w) {
      U = d(_);
      r(_, P, V);
      _ = U;
    }
    r(w, P, V);
  };
  const y = ({ el: _, anchor: w }) => {
    let P;
    while (_ && _ !== w) {
      P = d(_);
      s(_);
      _ = P;
    }
    s(w);
  };
  const x = (_, w, P, V, U, B, g, v, N) => {
    if (w.type === "svg") {
      g = "svg";
    } else if (w.type === "math") {
      g = "mathml";
    }
    if (_ == null) {
      L(w, P, V, U, B, g, v, N);
    } else {
      k(_, w, U, B, g, v, N);
    }
  };
  const L = (_, w, P, V, U, B, g, v) => {
    let N;
    let R;
    const { props: Z, shapeFlag: H, transition: T, dirs: $ } = _;
    N = _.el = o(_.type, B, Z && Z.is, Z);
    if (H & 8) {
      u(N, _.children);
    } else if (H & 16) {
      W(_.children, N, null, V, U, Hi(_, B), g, v);
    }
    if ($) {
      xn(_, null, V, "created");
    }
    I(N, _, _.scopeId, g, V);
    if (Z) {
      for (const ae in Z) {
        if (ae !== "value" && !Dr(ae)) {
          i(N, ae, null, Z[ae], B, V);
        }
      }
      if ("value" in Z) {
        i(N, "value", null, Z.value, B);
      }
      if ((R = Z.onVnodeBeforeMount)) {
        yt(R, V, _);
      }
    }
    if ($) {
      xn(_, null, V, "beforeMount");
    }
    const re = ag(U, T);
    if (re) {
      T.beforeEnter(N);
    }
    r(N, w, P);
    if ((R = Z && Z.onVnodeMounted) || re || $) {
      je(() => {
        if (R) {
          yt(R, V, _);
        }
        if (re) {
          T.enter(N);
        }
        if ($) {
          xn(_, null, V, "mounted");
        }
      }, U);
    }
  };
  const I = (_, w, P, V, U) => {
    if (P) {
      h(_, P);
    }
    if (V) {
      for (let B = 0; B < V.length; B++) {
        h(_, V[B]);
      }
    }
    if (U) {
      let B = U.subTree;
      if (
        w === B ||
        (Ys(B.type) && (B.ssContent === w || B.ssFallback === w))
      ) {
        const g = U.vnode;
        I(_, g, g.scopeId, g.slotScopeIds, U.parent);
      }
    }
  };
  const W = (_, w, P, V, U, B, g, v, N = 0) => {
    for (let R = N; R < _.length; R++) {
      const Z = (_[R] = v ? hn(_[R]) : qt(_[R]));
      E(null, Z, w, P, V, U, B, g, v);
    }
  };
  const k = (_, w, P, V, U, B, g) => {
    const v = (w.el = _.el);
    let { patchFlag: N, dynamicChildren: R, dirs: Z } = w;
    N |= _.patchFlag & 16;
    const H = _.props || be;
    const T = w.props || be;
    let $;
    if (P) {
      Tn(P, false);
    }
    if (($ = T.onVnodeBeforeUpdate)) {
      yt($, P, w, _);
    }
    if (Z) {
      xn(w, _, P, "beforeUpdate");
    }
    if (P) {
      Tn(P, true);
    }
    if (
      (H.innerHTML && T.innerHTML == null) ||
      (H.textContent && T.textContent == null)
    ) {
      u(v, "");
    }
    if (R) {
      O(_.dynamicChildren, R, v, P, V, Hi(w, U), B);
    } else if (!g) {
      K(_, w, v, null, P, V, Hi(w, U), B, false);
    }
    if (N > 0) {
      if (N & 16) {
        q(v, H, T, P, U);
      } else {
        if (N & 2 && H.class !== T.class) {
          i(v, "class", null, T.class, U);
        }
        if (N & 4) {
          i(v, "style", H.style, T.style, U);
        }
        if (N & 8) {
          const re = w.dynamicProps;
          for (let ae = 0; ae < re.length; ae++) {
            const me = re[ae];
            const Be = H[me];
            const Me = T[me];
            if (Me !== Be || me === "value") {
              i(v, me, Be, Me, U, P);
            }
          }
        }
      }
      if (N & 1 && _.children !== w.children) {
        u(v, w.children);
      }
    } else if (!g && R == null) {
      q(v, H, T, P, U);
    }
    if (($ = T.onVnodeUpdated) || Z) {
      je(() => {
        if ($) {
          yt($, P, w, _);
        }
        if (Z) {
          xn(w, _, P, "updated");
        }
      }, V);
    }
  };
  const O = (_, w, P, V, U, B, g) => {
    for (let v = 0; v < w.length; v++) {
      const N = _[v];
      const R = w[v];
      const Z =
        N.el && (N.type === tt || !pn(N, R) || N.shapeFlag & 70) ? f(N.el) : P;
      E(N, R, Z, null, V, U, B, g, true);
    }
  };
  const q = (_, w, P, V, U) => {
    if (w !== P) {
      if (w !== be) {
        for (const B in w) {
          if (!Dr(B) && !(B in P)) {
            i(_, B, w[B], null, U, V);
          }
        }
      }
      for (const B in P) {
        if (Dr(B)) {
          continue;
        }
        const g = P[B];
        const v = w[B];
        if (g !== v && B !== "value") {
          i(_, B, v, g, U, V);
        }
      }
      if ("value" in P) {
        i(_, "value", w.value, P.value, U);
      }
    }
  };
  const S = (_, w, P, V, U, B, g, v, N) => {
    const R = (w.el = _ ? _.el : a(""));
    const Z = (w.anchor = _ ? _.anchor : a(""));
    let { patchFlag: H, dynamicChildren: T, slotScopeIds: $ } = w;
    if ($) {
      v = v ? v.concat($) : $;
    }
    if (_ == null) {
      r(R, P, V);
      r(Z, P, V);
      W(w.children || [], P, Z, U, B, g, v, N);
    } else if (H > 0 && H & 64 && T && _.dynamicChildren) {
      O(_.dynamicChildren, T, P, U, B, g, v);
      if (w.key != null || (U && w === U.subTree)) {
        Pa(_, w, true);
      }
    } else {
      K(_, w, P, Z, U, B, g, v, N);
    }
  };
  const G = (_, w, P, V, U, B, g, v, N) => {
    w.slotScopeIds = v;
    if (_ == null) {
      if (w.shapeFlag & 512) {
        U.ctx.activate(w, P, V, g, N);
      } else {
        D(w, P, V, U, B, g, N);
      }
    } else {
      ee(_, w, N);
    }
  };
  const D = (_, w, P, V, U, B, g) => {
    const v = (_.component = xg(_, V, U));
    if (bi(_)) {
      v.ctx.renderer = te;
    }
    Tg(v, false, g);
    if (v.asyncDep) {
      if (U) {
        U.registerDep(v, J, g);
      }
      if (!_.el) {
        const N = (v.subTree = Qe(nt));
        b(null, N, w, P);
      }
    } else {
      J(v, _, w, P, U, B, g);
    }
  };
  const ee = (_, w, P) => {
    const V = (w.component = _.component);
    if (pg(_, w, P)) {
      if (V.asyncDep && !V.asyncResolved) {
        Q(V, w, P);
        return;
      } else {
        V.next = w;
        V.update();
      }
    } else {
      w.el = _.el;
      V.vnode = w;
    }
  };
  const J = (_, w, P, V, U, B, g) => {
    const v = () => {
      if (_.isMounted) {
        let { next: H, bu: T, u: $, parent: re, vnode: ae } = _;
        {
          const xt = Rf(_);
          if (xt) {
            if (H) {
              H.el = ae.el;
              Q(_, H, g);
            }
            xt.asyncDep.then(() => {
              if (!_.isUnmounted) {
                v();
              }
            });
            return;
          }
        }
        let me = H;
        let Be;
        Tn(_, false);
        if (H) {
          H.el = ae.el;
          Q(_, H, g);
        } else {
          H = ae;
        }
        if (T) {
          ir(T);
        }
        if ((Be = H.props && H.props.onVnodeBeforeUpdate)) {
          yt(Be, re, H, ae);
        }
        Tn(_, true);
        const Me = bl(_);
        const gt = _.subTree;
        _.subTree = Me;
        E(gt, Me, f(gt.el), F(gt), _, U, B);
        H.el = Me.el;
        if (me === null) {
          vg(_, Me.el);
        }
        if ($) {
          je($, U);
        }
        if ((Be = H.props && H.props.onVnodeUpdated)) {
          je(() => yt(Be, re, H, ae), U);
        }
      } else {
        let H;
        const { el: T, props: $ } = w;
        const { bm: re, m: ae, parent: me, root: Be, type: Me } = _;
        const gt = Dn(w);
        Tn(_, false);
        if (re) {
          ir(re);
        }
        if (!gt && (H = $ && $.onVnodeBeforeMount)) {
          yt(H, me, w);
        }
        Tn(_, true);
        {
          if (Be.ce) {
            Be.ce._injectChildStyle(Me);
          }
          const xt = (_.subTree = bl(_));
          E(null, xt, P, V, _, U, B);
          w.el = xt.el;
        }
        if (ae) {
          je(ae, U);
        }
        if (!gt && (H = $ && $.onVnodeMounted)) {
          const xt = w;
          je(() => yt(H, me, xt), U);
        }
        if (
          (w.shapeFlag & 256 ||
            (me && Dn(me.vnode) && me.vnode.shapeFlag & 256)) &&
          _.a
        ) {
          je(_.a, U);
        }
        _.isMounted = true;
        w = P = V = null;
      }
    };
    _.scope.on();
    const N = (_.effect = new Fu(v));
    _.scope.off();
    const R = (_.update = N.run.bind(N));
    const Z = (_.job = N.runIfDirty.bind(N));
    Z.i = _;
    Z.id = _.uid;
    N.scheduler = () => xa(Z);
    Tn(_, true);
    R();
  };
  const Q = (_, w, P) => {
    w.component = _;
    const V = _.vnode.props;
    _.vnode = w;
    _.next = null;
    eg(_, w.props, V, P);
    sg(_, w.children, P);
    wn();
    cl(_);
    Cn();
  };
  const K = (_, w, P, V, U, B, g, v, N = false) => {
    const R = _ && _.children;
    const Z = _ ? _.shapeFlag : 0;
    const H = w.children;
    const { patchFlag: T, shapeFlag: $ } = w;
    if (T > 0) {
      if (T & 128) {
        ce(R, H, P, V, U, B, g, v, N);
        return;
      } else if (T & 256) {
        ie(R, H, P, V, U, B, g, v, N);
        return;
      }
    }
    if ($ & 8) {
      if (Z & 16) {
        ne(R, U, B);
      }
      if (H !== R) {
        u(P, H);
      }
    } else if (Z & 16) {
      if ($ & 16) {
        ce(R, H, P, V, U, B, g, v, N);
      } else {
        ne(R, U, B, true);
      }
    } else {
      if (Z & 8) {
        u(P, "");
      }
      if ($ & 16) {
        W(H, P, V, U, B, g, v, N);
      }
    }
  };
  const ie = (_, w, P, V, U, B, g, v, N) => {
    _ = _ || rr;
    w = w || rr;
    const R = _.length;
    const Z = w.length;
    const H = Math.min(R, Z);
    let T;
    for (T = 0; T < H; T++) {
      const $ = (w[T] = N ? hn(w[T]) : qt(w[T]));
      E(_[T], $, P, null, U, B, g, v, N);
    }
    if (R > Z) {
      ne(_, U, B, true, false, H);
    } else {
      W(w, P, V, U, B, g, v, N, H);
    }
  };
  const ce = (_, w, P, V, U, B, g, v, N) => {
    let R = 0;
    const Z = w.length;
    let H = _.length - 1;
    let T = Z - 1;
    while (R <= H && R <= T) {
      const $ = _[R];
      const re = (w[R] = N ? hn(w[R]) : qt(w[R]));
      if (pn($, re)) {
        E($, re, P, null, U, B, g, v, N);
      } else {
        break;
      }
      R++;
    }
    while (R <= H && R <= T) {
      const $ = _[H];
      const re = (w[T] = N ? hn(w[T]) : qt(w[T]));
      if (pn($, re)) {
        E($, re, P, null, U, B, g, v, N);
      } else {
        break;
      }
      H--;
      T--;
    }
    if (R > H) {
      if (R <= T) {
        const $ = T + 1;
        const re = $ < Z ? w[$].el : V;
        while (R <= T) {
          E(null, (w[R] = N ? hn(w[R]) : qt(w[R])), P, re, U, B, g, v, N);
          R++;
        }
      }
    } else if (R > T) {
      while (R <= H) {
        z(_[R], U, B, true);
        R++;
      }
    } else {
      const $ = R;
      const re = R;
      const ae = new Map();
      for (R = re; R <= T; R++) {
        const ft = (w[R] = N ? hn(w[R]) : qt(w[R]));
        if (ft.key != null) {
          ae.set(ft.key, R);
        }
      }
      let me;
      let Be = 0;
      const Me = T - re + 1;
      let gt = false;
      let xt = 0;
      const wr = new Array(Me);
      for (R = 0; R < Me; R++) {
        wr[R] = 0;
      }
      for (R = $; R <= H; R++) {
        const ft = _[R];
        if (Be >= Me) {
          z(ft, U, B, true);
          continue;
        }
        let Ft;
        if (ft.key != null) {
          Ft = ae.get(ft.key);
        } else {
          for (me = re; me <= T; me++) {
            if (wr[me - re] === 0 && pn(ft, w[me])) {
              Ft = me;
              break;
            }
          }
        }
        if (Ft === undefined) {
          z(ft, U, B, true);
        } else {
          wr[Ft - re] = R + 1;
          if (Ft >= xt) {
            xt = Ft;
          } else {
            gt = true;
          }
          E(ft, w[Ft], P, null, U, B, g, v, N);
          Be++;
        }
      }
      const rl = gt ? lg(wr) : rr;
      me = rl.length - 1;
      R = Me - 1;
      for (; R >= 0; R--) {
        const ft = re + R;
        const Ft = w[ft];
        const sl = ft + 1 < Z ? w[ft + 1].el : V;
        if (wr[R] === 0) {
          E(null, Ft, P, sl, U, B, g, v, N);
        } else if (gt) {
          if (me < 0 || R !== rl[me]) {
            fe(Ft, P, sl, 2);
          } else {
            me--;
          }
        }
      }
    }
  };
  const fe = (_, w, P, V, U = null) => {
    const { el: B, type: g, transition: v, children: N, shapeFlag: R } = _;
    if (R & 6) {
      fe(_.component.subTree, w, P, V);
      return;
    }
    if (R & 128) {
      _.suspense.move(w, P, V);
      return;
    }
    if (R & 64) {
      g.move(_, w, P, te);
      return;
    }
    if (g === tt) {
      r(B, w, P);
      for (let H = 0; H < N.length; H++) {
        fe(N[H], w, P, V);
      }
      r(_.anchor, w, P);
      return;
    }
    if (g === Rs) {
      C(_, w, P);
      return;
    }
    if (V !== 2 && R & 1 && v) {
      if (V === 0) {
        v.beforeEnter(B);
        r(B, w, P);
        je(() => v.enter(B), U);
      } else {
        const { leave: H, delayLeave: T, afterLeave: $ } = v;
        const re = () => r(B, w, P);
        const ae = () => {
          H(B, () => {
            re();
            if ($) {
              $();
            }
          });
        };
        if (T) {
          T(B, re, ae);
        } else {
          ae();
        }
      }
    } else {
      r(B, w, P);
    }
  };
  const z = (_, w, P, V = false, U = false) => {
    const {
      type: B,
      props: g,
      ref: v,
      children: N,
      dynamicChildren: R,
      shapeFlag: Z,
      patchFlag: H,
      dirs: T,
      cacheIndex: $,
    } = _;
    if (H === -2) {
      U = false;
    }
    if (v != null) {
      Ks(v, null, P, _, true);
    }
    if ($ != null) {
      w.renderCache[$] = undefined;
    }
    if (Z & 256) {
      w.ctx.deactivate(_);
      return;
    }
    const re = Z & 1 && T;
    const ae = !Dn(_);
    let me;
    if (ae && (me = g && g.onVnodeBeforeUnmount)) {
      yt(me, w, _);
    }
    if (Z & 6) {
      Re(_.component, P, V);
    } else {
      if (Z & 128) {
        _.suspense.unmount(P, V);
        return;
      }
      if (re) {
        xn(_, null, w, "beforeUnmount");
      }
      if (Z & 64) {
        _.type.remove(_, w, P, te, V);
      } else if (R && !R.hasOnce && (B !== tt || (H > 0 && H & 64))) {
        ne(R, w, P, false, true);
      } else if ((B === tt && H & 384) || (!U && Z & 16)) {
        ne(N, w, P);
      }
      if (V) {
        ge(_);
      }
    }
    if ((ae && (me = g && g.onVnodeUnmounted)) || re) {
      je(() => {
        if (me) {
          yt(me, w, _);
        }
        if (re) {
          xn(_, null, w, "unmounted");
        }
      }, P);
    }
  };
  const ge = (_) => {
    const { type: w, el: P, anchor: V, transition: U } = _;
    if (w === tt) {
      Ie(P, V);
      return;
    }
    if (w === Rs) {
      y(_);
      return;
    }
    const B = () => {
      s(P);
      if (U && !U.persisted && U.afterLeave) {
        U.afterLeave();
      }
    };
    if (_.shapeFlag & 1 && U && !U.persisted) {
      const { leave: g, delayLeave: v } = U;
      const N = () => g(P, B);
      if (v) {
        v(_.el, B, N);
      } else {
        N();
      }
    } else {
      B();
    }
  };
  const Ie = (_, w) => {
    let P;
    while (_ !== w) {
      P = d(_);
      s(_);
      _ = P;
    }
    s(w);
  };
  const Re = (_, w, P) => {
    const { bum: V, scope: U, job: B, subTree: g, um: v, m: N, a: R } = _;
    Xs(N);
    Xs(R);
    if (V) {
      ir(V);
    }
    U.stop();
    if (B) {
      B.flags |= 8;
      z(g, _, w, P);
    }
    if (v) {
      je(v, w);
    }
    je(() => {
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
  const ne = (_, w, P, V = false, U = false, B = 0) => {
    for (let g = B; g < _.length; g++) {
      z(_[g], w, P, V, U);
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
    const P = w && w[lf];
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
      cl();
      rf();
      Y = false;
    }
  };
  const te = {
    p: E,
    um: z,
    m: fe,
    r: ge,
    mt: D,
    mc: W,
    pc: K,
    pbc: O,
    n: F,
    o: e,
  };
  return {
    render: X,
    hydrate: undefined,
    createApp: Jm(X),
  };
}
function Hi({ type: e, props: t }, n) {
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
function Tn({ effect: e, job: t }, n) {
  if (n) {
    e.flags |= 32;
    t.flags |= 4;
  } else {
    e.flags &= -33;
    t.flags &= -5;
  }
}
function ag(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Pa(e, t, n = false) {
  const r = e.children;
  const s = t.children;
  if (oe(r) && oe(s)) {
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = s[i];
      if (a.shapeFlag & 1 && !a.dynamicChildren) {
        if (a.patchFlag <= 0 || a.patchFlag === 32) {
          a = s[i] = hn(s[i]);
          a.el = o.el;
        }
        if (!n && a.patchFlag !== -2) {
          Pa(o, a);
        }
      }
      if (a.type === ds) {
        a.el = o.el;
      }
    }
  }
}
function lg(e) {
  const t = e.slice();
  const n = [0];
  let r;
  let s;
  let i;
  let o;
  let a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      s = n[n.length - 1];
      if (e[s] < c) {
        t[r] = s;
        n.push(r);
        continue;
      }
      i = 0;
      o = n.length - 1;
      while (i < o) {
        a = (i + o) >> 1;
        if (e[n[a]] < c) {
          i = a + 1;
        } else {
          o = a;
        }
      }
      if (c < e[n[i]]) {
        if (i > 0) {
          t[r] = n[i - 1];
        }
        n[i] = r;
      }
    }
  }
  i = n.length;
  o = n[i - 1];
  while (i-- > 0) {
    n[i] = o;
    o = t[o];
  }
  return n;
}
function Rf(e) {
  const t = e.subTree.component;
  if (t) {
    if (t.asyncDep && !t.asyncResolved) {
      return t;
    } else {
      return Rf(t);
    }
  }
}
function Xs(e) {
  if (e) {
    for (let t = 0; t < e.length; t++) {
      e[t].flags |= 8;
    }
  }
}
const cg = Symbol.for("v-scx");
const ug = () => lt(cg);
function Mf(e, t) {
  return Ei(e, null, t);
}
function fg(e, t) {
  return Ei(e, null, {
    flush: "sync",
  });
}
function de(e, t, n) {
  return Ei(e, t, n);
}
function Ei(e, t, n = be) {
  const { immediate: r, deep: s, flush: i, once: o } = n;
  const a = $e({}, n);
  const l = (t && r) || (!t && i !== "post");
  let c;
  if (ts) {
    if (i === "sync") {
      const h = ug();
      c = h.__watcherHandles ||= [];
    } else if (!l) {
      const h = () => {};
      h.stop = Vt;
      h.resume = Vt;
      h.pause = Vt;
      return h;
    }
  }
  const u = He;
  a.call = (h, p, E) => Ot(h, u, p, E);
  let f = false;
  if (i === "post") {
    a.scheduler = (h) => {
      je(h, u && u.suspense);
    };
  } else if (i !== "sync") {
    f = true;
    a.scheduler = (h, p) => {
      if (p) {
        h();
      } else {
        xa(h);
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
  const d = km(e, t, a);
  if (ts) {
    if (c) {
      c.push(d);
    } else if (l) {
      d();
    }
  }
  return d;
}
function dg(e, t, n) {
  const r = this.proxy;
  const s = Oe(e) ? (e.includes(".") ? Ff(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  if (le(t)) {
    i = t;
  } else {
    i = t.handler;
    n = t;
  }
  const o = hs(this);
  const a = Ei(s, i.bind(r), n);
  o();
  return a;
}
function Ff(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) {
      r = r[n[s]];
    }
    return r;
  };
}
function FC(e, t, n = be) {
  const r = Se();
  const s = mt(t);
  const i = tn(t);
  const o = Df(e, s);
  const a = Zu((l, c) => {
    let u;
    let f = be;
    let d;
    fg(() => {
      const h = e[s];
      if (ut(u, h)) {
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
        if (!ut(p, u) && (f === be || !ut(h, f))) {
          return;
        }
        const E = r.vnode.props;
        if (
          !E ||
          (!(t in E) && !(s in E) && !(i in E)) ||
          (!(`onUpdate:${t}` in E) &&
            !(`onUpdate:${s}` in E) &&
            !(`onUpdate:${i}` in E))
        ) {
          u = h;
          c();
        }
        r.emit(`update:${t}`, p);
        if (ut(h, p) && ut(h, f) && !ut(p, d)) {
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
            value: l++ ? o || be : a,
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
const Df = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${mt(t)}Modifiers`] || e[`${tn(t)}Modifiers`];
function hg(e, t, ...n) {
  if (e.isUnmounted) {
    return;
  }
  const r = e.vnode.props || be;
  let s = n;
  const i = t.startsWith("update:");
  const o = i && Df(r, t.slice(7));
  if (o) {
    if (o.trim) {
      s = n.map((u) => (Oe(u) ? u.trim() : u));
    }
    if (o.number) {
      s = n.map(So);
    }
  }
  let a;
  let l = r[(a = Di(t))] || r[(a = Di(mt(t)))];
  if (!l && i) {
    l = r[(a = Di(tn(t)))];
  }
  if (l) {
    Ot(l, e, 6, s);
  }
  const c = r[a + "Once"];
  if (c) {
    if (!e.emitted) {
      e.emitted = {};
    } else if (e.emitted[a]) {
      return;
    }
    e.emitted[a] = true;
    Ot(c, e, 6, s);
  }
}
function $f(e, t, n = false) {
  const r = t.emitsCache;
  const s = r.get(e);
  if (s !== undefined) {
    return s;
  }
  const i = e.emits;
  let o = {};
  let a = false;
  if (!le(e)) {
    const l = (c) => {
      const u = $f(c, t, true);
      if (u) {
        a = true;
        $e(o, u);
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
  if (!i && !a) {
    if (Ne(e)) {
      r.set(e, null);
    }
    return null;
  } else {
    if (oe(i)) {
      i.forEach((l) => (o[l] = null));
    } else {
      $e(o, i);
    }
    if (Ne(e)) {
      r.set(e, o);
    }
    return o;
  }
}
function Si(e, t) {
  if (!e || !di(t)) {
    return false;
  } else {
    t = t.slice(2).replace(/Once$/, "");
    return Ce(e, t[0].toLowerCase() + t.slice(1)) || Ce(e, tn(t)) || Ce(e, t);
  }
}
function bl(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [i],
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
  const A = zs(e);
  let b;
  let m;
  try {
    if (n.shapeFlag & 4) {
      const y = s || r;
      const x = y;
      b = qt(c.call(x, y, u, f, h, d, p));
      m = a;
    } else {
      const y = t;
      b = qt(
        y.length > 1
          ? y(f, {
              attrs: a,
              slots: o,
              emit: l,
            })
          : y(f, null)
      );
      m = t.props ? a : mg(a);
    }
  } catch (y) {
    Wr.length = 0;
    yi(y, e, 1);
    b = Qe(nt);
  }
  let C = b;
  if (m && E !== false) {
    const y = Object.keys(m);
    const { shapeFlag: x } = C;
    if (y.length && x & 7) {
      if (i && y.some(da)) {
        m = gg(m, i);
      }
      C = Jt(C, m, false, true);
    }
  }
  if (n.dirs) {
    C = Jt(C, null, false, true);
    C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs;
  }
  if (n.transition) {
    bn(C, n.transition);
  }
  b = C;
  zs(A);
  return b;
}
const mg = (e) => {
  let t;
  for (const n in e) {
    if (n === "class" || n === "style" || di(n)) {
      (t ||= {})[n] = e[n];
    }
  }
  return t;
};
const gg = (e, t) => {
  const n = {};
  for (const r in e) {
    if (!da(r) || !(r.slice(9) in t)) {
      n[r] = e[r];
    }
  }
  return n;
};
function pg(e, t, n) {
  const { props: r, children: s, component: i } = e;
  const { props: o, children: a, patchFlag: l } = t;
  const c = i.emitsOptions;
  if (t.dirs || t.transition) {
    return true;
  }
  if (n && l >= 0) {
    if (l & 1024) {
      return true;
    }
    if (l & 16) {
      if (r) {
        return _l(r, o, c);
      } else {
        return !!o;
      }
    }
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (o[d] !== r[d] && !Si(c, d)) {
          return true;
        }
      }
    }
  } else if ((s || a) && (!a || !a.$stable)) {
    return true;
  } else if (r === o) {
    return false;
  } else if (r) {
    if (o) {
      return _l(r, o, c);
    } else {
      return true;
    }
  } else {
    return !!o;
  }
  return false;
}
function _l(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) {
    return true;
  }
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !Si(n, i)) {
      return true;
    }
  }
  return false;
}
function vg({ vnode: e, parent: t }, n) {
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
const Ys = (e) => e.__isSuspense;
function yg(e, t) {
  if (t && t.pendingBranch) {
    if (oe(e)) {
      t.effects.push(...e);
    } else {
      t.effects.push(e);
    }
  } else {
    Nm(e);
  }
}
const tt = Symbol.for("v-fgt");
const ds = Symbol.for("v-txt");
const nt = Symbol.for("v-cmt");
const Rs = Symbol.for("v-stc");
const Wr = [];
let ht = null;
function Js(e = false) {
  Wr.push((ht = e ? null : []));
}
function bg() {
  Wr.pop();
  ht = Wr[Wr.length - 1] || null;
}
let es = 1;
function wl(e, t = false) {
  es += e;
  if (e < 0 && ht && t) {
    ht.hasOnce = true;
  }
}
function jf(e) {
  e.dynamicChildren = es > 0 ? ht || rr : null;
  bg();
  if (es > 0 && ht) {
    ht.push(e);
  }
  return e;
}
function DC(e, t, n, r, s, i) {
  return jf(Vf(e, t, n, r, s, i, true));
}
function Zs(e, t, n, r, s) {
  return jf(Qe(e, t, n, r, s, true));
}
function cr(e) {
  if (e) {
    return e.__v_isVNode === true;
  } else {
    return false;
  }
}
function pn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const qf = ({ key: e }) => e ?? null;
const Ms = ({ ref: e, ref_key: t, ref_for: n }) => {
  if (typeof e == "number") {
    e = "" + e;
  }
  if (e != null) {
    if (Oe(e) || Ae(e) || le(e)) {
      return {
        i: qe,
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
function Vf(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  i = e === tt ? 0 : 1,
  o = false,
  a = false
) {
  const l = {
    __v_isVNode: true,
    __v_skip: true,
    type: e,
    props: t,
    key: t && qf(t),
    ref: t && Ms(t),
    scopeId: of,
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
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: qe,
  };
  if (a) {
    La(l, n);
    if (i & 128) {
      e.normalize(l);
    }
  } else if (n) {
    l.shapeFlag |= Oe(n) ? 8 : 16;
  }
  if (es > 0 && !o && ht && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32) {
    ht.push(l);
  }
  return l;
}
const Qe = _g;
function _g(e, t = null, n = null, r = 0, s = null, i = false) {
  if (!e || e === Bm) {
    e = nt;
  }
  if (cr(e)) {
    const a = Jt(e, t, true);
    if (n) {
      La(a, n);
    }
    if (es > 0 && !i && ht) {
      if (a.shapeFlag & 6) {
        ht[ht.indexOf(e)] = a;
      } else {
        ht.push(a);
      }
    }
    a.patchFlag = -2;
    return a;
  }
  if (Pg(e)) {
    e = e.__vccOpts;
  }
  if (t) {
    t = wg(t);
    let { class: a, style: l } = t;
    if (a && !Oe(a)) {
      t.class = pa(a);
    }
    if (Ne(l)) {
      if (ka(l) && !oe(l)) {
        l = $e({}, l);
      }
      t.style = ga(l);
    }
  }
  const o = Oe(e) ? 1 : Ys(e) ? 128 : cf(e) ? 64 : Ne(e) ? 4 : le(e) ? 2 : 0;
  return Vf(e, t, n, r, s, o, i, true);
}
function wg(e) {
  if (e) {
    if (ka(e) || Tf(e)) {
      return $e({}, e);
    } else {
      return e;
    }
  } else {
    return null;
  }
}
function Jt(e, t, n = false, r = false) {
  const { props: s, ref: i, patchFlag: o, children: a, transition: l } = e;
  const c = t ? Eg(s || {}, t) : s;
  const u = {
    __v_isVNode: true,
    __v_skip: true,
    type: e.type,
    props: c,
    key: c && qf(c),
    ref:
      t && t.ref
        ? n && i
          ? oe(i)
            ? i.concat(Ms(t))
            : [i, Ms(t)]
          : Ms(t)
        : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== tt ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Jt(e.ssContent),
    ssFallback: e.ssFallback && Jt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
  if (l && r) {
    bn(u, l.clone(u));
  }
  return u;
}
function Cg(e = " ", t = 0) {
  return Qe(ds, null, e, t);
}
function $C(e, t) {
  const n = Qe(Rs, null, e);
  n.staticCount = t;
  return n;
}
function jC(e = "", t = false) {
  if (t) {
    Js();
    return Zs(nt, null, e);
  } else {
    return Qe(nt, null, e);
  }
}
function qt(e) {
  if (e == null || typeof e == "boolean") {
    return Qe(nt);
  } else if (oe(e)) {
    return Qe(tt, null, e.slice());
  } else if (cr(e)) {
    return hn(e);
  } else {
    return Qe(ds, null, String(e));
  }
}
function hn(e) {
  if ((e.el === null && e.patchFlag !== -1) || e.memo) {
    return e;
  } else {
    return Jt(e);
  }
}
function La(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) {
    t = null;
  } else if (oe(t)) {
    n = 16;
  } else if (typeof t == "object") {
    if (r & 65) {
      const s = t.default;
      if (s) {
        if (s._c) {
          s._d = false;
        }
        La(e, s());
        if (s._c) {
          s._d = true;
        }
      }
      return;
    } else {
      n = 32;
      const s = t._;
      if (!s && !Tf(t)) {
        t._ctx = qe;
      } else if (s === 3 && qe) {
        if (qe.slots._ === 1) {
          t._ = 1;
        } else {
          t._ = 2;
          e.patchFlag |= 1024;
        }
      }
    }
  } else if (le(t)) {
    t = {
      default: t,
      _ctx: qe,
    };
    n = 32;
  } else {
    t = String(t);
    if (r & 64) {
      n = 16;
      t = [Cg(t)];
    } else {
      n = 8;
    }
  }
  e.children = t;
  e.shapeFlag |= n;
}
function Eg(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r) {
      if (s === "class") {
        if (t.class !== r.class) {
          t.class = pa([t.class, r.class]);
        }
      } else if (s === "style") {
        t.style = ga([t.style, r.style]);
      } else if (di(s)) {
        const i = t[s];
        const o = r[s];
        if (o && i !== o && (!oe(i) || !i.includes(o))) {
          t[s] = i ? [].concat(i, o) : o;
        }
      } else if (s !== "") {
        t[s] = r[s];
      }
    }
  }
  return t;
}
function yt(e, t, n, r = null) {
  Ot(e, t, 7, [n, r]);
}
const Sg = Sf();
let kg = 0;
function xg(e, t, n) {
  const r = e.type;
  const s = (t ? t.appContext : e.appContext) || Sg;
  const i = {
    uid: kg++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    job: null,
    scope: new Ru(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: Af(r, s),
    emitsOptions: $f(r, s),
    emit: null,
    emitted: null,
    propsDefaults: be,
    inheritAttrs: r.inheritAttrs,
    ctx: be,
    data: be,
    props: be,
    attrs: be,
    slots: be,
    refs: be,
    setupState: be,
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
  i.ctx = {
    _: i,
  };
  i.root = t ? t.root : i;
  i.emit = hg.bind(null, i);
  if (e.ce) {
    e.ce(i);
  }
  return i;
}
let He = null;
const Se = () => He || qe;
let ei;
let Ro;
{
  const e = gi();
  const t = (n, r) => {
    let s;
    if (!(s = e[n])) {
      s = e[n] = [];
    }
    s.push(r);
    return (i) => {
      if (s.length > 1) {
        s.forEach((o) => o(i));
      } else {
        s[0](i);
      }
    };
  };
  ei = t("__VUE_INSTANCE_SETTERS__", (n) => (He = n));
  Ro = t("__VUE_SSR_SETTERS__", (n) => (ts = n));
}
const hs = (e) => {
  const t = He;
  ei(e);
  e.scope.on();
  return () => {
    e.scope.off();
    ei(t);
  };
};
const Cl = () => {
  if (He) {
    He.scope.off();
  }
  ei(null);
};
function Wf(e) {
  return e.vnode.shapeFlag & 4;
}
let ts = false;
function Tg(e, t = false, n = false) {
  if (t) {
    Ro(t);
  }
  const { props: r, children: s } = e.vnode;
  const i = Wf(e);
  Zm(e, r, i, t);
  rg(e, s, n);
  const o = i ? Ng(e, t) : undefined;
  if (t) {
    Ro(false);
  }
  return o;
}
function Ng(e, t) {
  const n = e.type;
  e.accessCache = Object.create(null);
  e.proxy = new Proxy(e.ctx, Hm);
  const { setup: r } = n;
  if (r) {
    wn();
    const s = (e.setupContext = r.length > 1 ? Ig(e) : null);
    const i = hs(e);
    const o = fs(r, e, 0, [e.props, s]);
    const a = Tu(o);
    Cn();
    i();
    if ((a || e.sp) && !Dn(e)) {
      vf(e);
    }
    if (a) {
      o.then(Cl, Cl);
      if (t) {
        return o
          .then((l) => {
            El(e, l);
          })
          .catch((l) => {
            yi(l, e, 0);
          });
      }
      e.asyncDep = o;
    } else {
      El(e, o);
    }
  } else {
    Bf(e);
  }
}
function El(e, t, n) {
  if (le(t)) {
    if (e.type.__ssrInlineRender) {
      e.ssrRender = t;
    } else {
      e.render = t;
    }
  } else if (Ne(t)) {
    e.setupState = Ju(t);
  }
  Bf(e);
}
function Bf(e, t, n) {
  const r = e.type;
  e.render ||= r.render || Vt;
  {
    const s = hs(e);
    wn();
    try {
      zm(e);
    } finally {
      Cn();
      s();
    }
  }
}
const Ag = {
  get(e, t) {
    Ze(e, "get", "");
    return e[t];
  },
};
function Ig(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ag),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ki(e) {
  if (e.exposed) {
    return (e.exposeProxy ||= new Proxy(Ju(Bn(e.exposed)), {
      get(t, n) {
        if (n in t) {
          return t[n];
        }
        if (n in Vr) {
          return Vr[n](e);
        }
      },
      has(t, n) {
        return n in t || n in Vr;
      },
    }));
  } else {
    return e.proxy;
  }
}
function Mo(e, t = true) {
  if (le(e)) {
    return e.displayName || e.name;
  } else {
    return e.name || (t && e.__name);
  }
}
function Pg(e) {
  return le(e) && "__vccOpts" in e;
}
const M = (e, t) => Em(e, t, ts);
function j(e, t, n) {
  const r = arguments.length;
  if (r === 2) {
    if (Ne(t) && !oe(t)) {
      if (cr(t)) {
        return Qe(e, null, [t]);
      } else {
        return Qe(e, t);
      }
    } else {
      return Qe(e, null, t);
    }
  } else {
    if (r > 3) {
      n = Array.prototype.slice.call(arguments, 2);
    } else if (r === 3 && cr(n)) {
      n = [n];
    }
    return Qe(e, t, n);
  }
}
const Lg = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Fo;
const Sl = typeof window !== "undefined" && window.trustedTypes;
if (Sl) {
  try {
    Fo = Sl.createPolicy("vue", {
      createHTML: (e) => e,
    });
  } catch {}
}
const Uf = Fo ? (e) => Fo.createHTML(e) : (e) => e;
const Og = "http://www.w3.org/2000/svg";
const Rg = "http://www.w3.org/1998/Math/MathML";
const Ht = typeof document !== "undefined" ? document : null;
const kl = Ht && Ht.createElement("template");
const Mg = {
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
    const s =
      t === "svg"
        ? Ht.createElementNS(Og, e)
        : t === "mathml"
        ? Ht.createElementNS(Rg, e)
        : n
        ? Ht.createElement(e, {
            is: n,
          })
        : Ht.createElement(e);
    if (e === "select" && r && r.multiple != null) {
      s.setAttribute("multiple", r.multiple);
    }
    return s;
  },
  createText: (e) => Ht.createTextNode(e),
  createComment: (e) => Ht.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ht.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, r, s, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === i || s.nextSibling)) {
      while (
        (t.insertBefore(s.cloneNode(true), n), s !== i && !!(s = s.nextSibling))
      );
    } else {
      kl.innerHTML = Uf(
        r === "svg"
          ? `<svg>${e}</svg>`
          : r === "mathml"
          ? `<math>${e}</math>`
          : e
      );
      const a = kl.content;
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
const sn = "transition";
const Er = "animation";
const ur = Symbol("_vtc");
const Hf = {
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
const zf = $e({}, hf, Hf);
const Fg = (e) => {
  e.displayName = "Transition";
  e.props = zf;
  return e;
};
const ns = Fg((e, { slots: t }) => j(Om, Kf(e), t));
const Nn = (e, t = []) => {
  if (oe(e)) {
    e.forEach((n) => n(...t));
  } else if (e) {
    e(...t);
  }
};
const xl = (e) =>
  e ? (oe(e) ? e.some((t) => t.length > 1) : e.length > 1) : false;
function Kf(e) {
  const t = {};
  for (const S in e) {
    if (!(S in Hf)) {
      t[S] = e[S];
    }
  }
  if (e.css === false) {
    return t;
  }
  const {
    name: n = "v",
    type: r,
    duration: s,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = i,
    appearActiveClass: c = o,
    appearToClass: u = a,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`,
  } = e;
  const p = Dg(s);
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
    onAppearCancelled: W = C,
  } = t;
  const k = (S, G, D, ee) => {
    S._enterCancelled = ee;
    ln(S, G ? u : a);
    ln(S, G ? c : o);
    if (D) {
      D();
    }
  };
  const O = (S, G) => {
    S._isLeaving = false;
    ln(S, f);
    ln(S, h);
    ln(S, d);
    if (G) {
      G();
    }
  };
  const q = (S) => (G, D) => {
    const ee = S ? I : m;
    const J = () => k(G, S, D);
    Nn(ee, [G, J]);
    Tl(() => {
      ln(G, S ? l : i);
      $t(G, S ? u : a);
      if (!xl(ee)) {
        Nl(G, r, E, J);
      }
    });
  };
  return $e(t, {
    onBeforeEnter(S) {
      Nn(b, [S]);
      $t(S, i);
      $t(S, o);
    },
    onBeforeAppear(S) {
      Nn(L, [S]);
      $t(S, l);
      $t(S, c);
    },
    onEnter: q(false),
    onAppear: q(true),
    onLeave(S, G) {
      S._isLeaving = true;
      const D = () => O(S, G);
      $t(S, f);
      if (S._enterCancelled) {
        $t(S, d);
        Do();
      } else {
        Do();
        $t(S, d);
      }
      Tl(() => {
        if (S._isLeaving) {
          ln(S, f);
          $t(S, h);
          if (!xl(y)) {
            Nl(S, r, A, D);
          }
        }
      });
      Nn(y, [S, D]);
    },
    onEnterCancelled(S) {
      k(S, false, undefined, true);
      Nn(C, [S]);
    },
    onAppearCancelled(S) {
      k(S, true, undefined, true);
      Nn(W, [S]);
    },
    onLeaveCancelled(S) {
      O(S);
      Nn(x, [S]);
    },
  });
}
function Dg(e) {
  if (e == null) {
    return null;
  }
  if (Ne(e)) {
    return [zi(e.enter), zi(e.leave)];
  }
  {
    const t = zi(e);
    return [t, t];
  }
}
function zi(e) {
  return Wh(e);
}
function $t(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n));
  (e[ur] ||= new Set()).add(t);
}
function ln(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[ur];
  if (n) {
    n.delete(t);
    if (!n.size) {
      e[ur] = undefined;
    }
  }
}
function Tl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let $g = 0;
function Nl(e, t, n, r) {
  const s = (e._endId = ++$g);
  const i = () => {
    if (s === e._endId) {
      r();
    }
  };
  if (n != null) {
    return setTimeout(i, n);
  }
  const { type: o, timeout: a, propCount: l } = Gf(e, t);
  if (!o) {
    return r();
  }
  const c = o + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(c, d);
    i();
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
function Gf(e, t) {
  const n = window.getComputedStyle(e);
  const r = (p) => (n[p] || "").split(", ");
  const s = r(`${sn}Delay`);
  const i = r(`${sn}Duration`);
  const o = Al(s, i);
  const a = r(`${Er}Delay`);
  const l = r(`${Er}Duration`);
  const c = Al(a, l);
  let u = null;
  let f = 0;
  let d = 0;
  if (t === sn) {
    if (o > 0) {
      u = sn;
      f = o;
      d = i.length;
    }
  } else if (t === Er) {
    if (c > 0) {
      u = Er;
      f = c;
      d = l.length;
    }
  } else {
    f = Math.max(o, c);
    u = f > 0 ? (o > c ? sn : Er) : null;
    d = u ? (u === sn ? i.length : l.length) : 0;
  }
  const h =
    u === sn && /\b(transform|all)(,|$)/.test(r(`${sn}Property`).toString());
  return {
    type: u,
    timeout: f,
    propCount: d,
    hasTransform: h,
  };
}
function Al(e, t) {
  while (e.length < t.length) {
    e = e.concat(e);
  }
  return Math.max(...t.map((n, r) => Il(n) + Il(e[r])));
}
function Il(e) {
  if (e === "auto") {
    return 0;
  } else {
    return Number(e.slice(0, -1).replace(",", ".")) * 1000;
  }
}
function Do() {
  return document.body.offsetHeight;
}
function jg(e, t, n) {
  const r = e[ur];
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
const ti = Symbol("_vod");
const Qf = Symbol("_vsh");
const qC = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[ti] = e.style.display === "none" ? "" : e.style.display;
    if (n && t) {
      n.beforeEnter(e);
    } else {
      Sr(e, t);
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
          Sr(e, true);
          r.enter(e);
        } else {
          r.leave(e, () => {
            Sr(e, false);
          });
        }
      } else {
        Sr(e, t);
      }
    }
  },
  beforeUnmount(e, { value: t }) {
    Sr(e, t);
  },
};
function Sr(e, t) {
  e.style.display = t ? e[ti] : "none";
  e[Qf] = !t;
}
const qg = Symbol("");
const Vg = /(^|;)\s*display\s*:/;
function Wg(e, t, n) {
  const r = e.style;
  const s = Oe(n);
  let i = false;
  if (n && !s) {
    if (t) {
      if (Oe(t)) {
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          if (n[a] == null) {
            Fs(r, a, "");
          }
        }
      } else {
        for (const o in t) {
          if (n[o] == null) {
            Fs(r, o, "");
          }
        }
      }
    }
    for (const o in n) {
      if (o === "display") {
        i = true;
      }
      Fs(r, o, n[o]);
    }
  } else if (s) {
    if (t !== n) {
      const o = r[qg];
      if (o) {
        n += ";" + o;
      }
      r.cssText = n;
      i = Vg.test(n);
    }
  } else if (t) {
    e.removeAttribute("style");
  }
  if (ti in e) {
    e[ti] = i ? r.display : "";
    if (e[Qf]) {
      r.display = "none";
    }
  }
}
const Pl = /\s*!important$/;
function Fs(e, t, n) {
  if (oe(n)) {
    n.forEach((r) => Fs(e, t, r));
  } else {
    if (n == null) {
      n = "";
    }
    if (t.startsWith("--")) {
      e.setProperty(t, n);
    } else {
      const r = Bg(e, t);
      if (Pl.test(n)) {
        e.setProperty(tn(r), n.replace(Pl, ""), "important");
      } else {
        e[r] = n;
      }
    }
  }
}
const Ll = ["Webkit", "Moz", "ms"];
const Ki = {};
function Bg(e, t) {
  const n = Ki[t];
  if (n) {
    return n;
  }
  let r = mt(t);
  if (r !== "filter" && r in e) {
    return (Ki[t] = r);
  }
  r = mi(r);
  for (let s = 0; s < Ll.length; s++) {
    const i = Ll[s] + r;
    if (i in e) {
      return (Ki[t] = i);
    }
  }
  return t;
}
const Ol = "http://www.w3.org/1999/xlink";
function Rl(e, t, n, r, s, i = Gh(t)) {
  if (r && t.startsWith("xlink:")) {
    if (n == null) {
      e.removeAttributeNS(Ol, t.slice(6, t.length));
    } else {
      e.setAttributeNS(Ol, t, n);
    }
  } else if (n == null || (i && !Pu(n))) {
    e.removeAttribute(t);
  } else {
    e.setAttribute(t, i ? "" : en(n) ? String(n) : n);
  }
}
function Ml(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    if (n != null) {
      e[t] = t === "innerHTML" ? Uf(n) : n;
    }
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value;
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
      n = Pu(n);
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
    e.removeAttribute(s || t);
  }
}
function er(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Ug(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Fl = Symbol("_vei");
function Hg(e, t, n, r, s = null) {
  const i = (e[Fl] ||= {});
  const o = i[t];
  if (r && o) {
    o.value = r;
  } else {
    const [a, l] = zg(t);
    if (r) {
      const c = (i[t] = Qg(r, s));
      er(e, a, c, l);
    } else if (o) {
      Ug(e, a, o, l);
      i[t] = undefined;
    }
  }
}
const Dl = /(?:Once|Passive|Capture)$/;
function zg(e) {
  let t;
  if (Dl.test(e)) {
    t = {};
    let r;
    while ((r = e.match(Dl))) {
      e = e.slice(0, e.length - r[0].length);
      t[r[0].toLowerCase()] = true;
    }
  }
  return [e[2] === ":" ? e.slice(3) : tn(e.slice(2)), t];
}
let Gi = 0;
const Kg = Promise.resolve();
const Gg = () => Gi || (Kg.then(() => (Gi = 0)), (Gi = Date.now()));
function Qg(e, t) {
  const n = (r) => {
    if (!r._vts) {
      r._vts = Date.now();
    } else if (r._vts <= n.attached) {
      return;
    }
    Ot(Xg(r, n.value), t, 5, [r]);
  };
  n.value = e;
  n.attached = Gg();
  return n;
}
function Xg(e, t) {
  if (oe(t)) {
    const n = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      n.call(e);
      e._stopped = true;
    };
    return t.map((r) => (s) => !s._stopped && r && r(s));
  } else {
    return t;
  }
}
const $l = (e) =>
  e.charCodeAt(0) === 111 &&
  e.charCodeAt(1) === 110 &&
  e.charCodeAt(2) > 96 &&
  e.charCodeAt(2) < 123;
const Yg = (e, t, n, r, s, i) => {
  const o = s === "svg";
  if (t === "class") {
    jg(e, r, o);
  } else if (t === "style") {
    Wg(e, n, r);
  } else if (di(t)) {
    if (!da(t)) {
      Hg(e, t, n, r, i);
    }
  } else if (
    t[0] === "."
      ? ((t = t.slice(1)), true)
      : t[0] === "^"
      ? ((t = t.slice(1)), false)
      : Jg(e, t, r, o)
  ) {
    Ml(e, t, r);
    if (
      !e.tagName.includes("-") &&
      (t === "value" || t === "checked" || t === "selected")
    ) {
      Rl(e, t, r, o, i, t !== "value");
    }
  } else if (e._isVueCE && (/[A-Z]/.test(t) || !Oe(r))) {
    Ml(e, mt(t), r, i, t);
  } else {
    if (t === "true-value") {
      e._trueValue = r;
    } else if (t === "false-value") {
      e._falseValue = r;
    }
    Rl(e, t, r, o);
  }
};
function Jg(e, t, n, r) {
  if (r) {
    return (
      t === "innerHTML" ||
      t === "textContent" ||
      (!!(t in e) && !!$l(t) && !!le(n))
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
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") {
      return false;
    }
  }
  if ($l(t) && Oe(n)) {
    return false;
  } else {
    return t in e;
  }
}
const Xf = new WeakMap();
const Yf = new WeakMap();
const ni = Symbol("_moveCb");
const jl = Symbol("_enterCb");
const Zg = (e) => {
  delete e.props.mode;
  return e;
};
const ep = Zg({
  name: "TransitionGroup",
  props: $e({}, zf, {
    tag: String,
    moveClass: String,
  }),
  setup(e, { slots: t }) {
    const n = Se();
    const r = df();
    let s;
    let i;
    Na(() => {
      if (!s.length) {
        return;
      }
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!ip(s[0].el, n.vnode.el, o)) {
        return;
      }
      s.forEach(np);
      s.forEach(rp);
      const a = s.filter(sp);
      Do();
      a.forEach((l) => {
        const c = l.el;
        const u = c.style;
        $t(c, o);
        u.transform = u.webkitTransform = u.transitionDuration = "";
        const f = (c[ni] = (d) => {
          if (!d || d.target === c) {
            if (!d || /transform$/.test(d.propertyName)) {
              c.removeEventListener("transitionend", f);
              c[ni] = null;
              ln(c, o);
            }
          }
        });
        c.addEventListener("transitionend", f);
      });
    });
    return () => {
      const o = ue(e);
      const a = Kf(o);
      let l = o.tag || tt;
      s = [];
      if (i) {
        for (let c = 0; c < i.length; c++) {
          const u = i[c];
          if (u.el && u.el instanceof Element) {
            s.push(u);
            bn(u, Zr(u, a, r, n));
            Xf.set(u, u.el.getBoundingClientRect());
          }
        }
      }
      i = t.default ? Ta(t.default()) : [];
      for (let c = 0; c < i.length; c++) {
        const u = i[c];
        if (u.key != null) {
          bn(u, Zr(u, a, r, n));
        }
      }
      return Qe(l, null, i);
    };
  },
});
const tp = ep;
function np(e) {
  const t = e.el;
  if (t[ni]) {
    t[ni]();
  }
  if (t[jl]) {
    t[jl]();
  }
}
function rp(e) {
  Yf.set(e, e.el.getBoundingClientRect());
}
function sp(e) {
  const t = Xf.get(e);
  const n = Yf.get(e);
  const r = t.left - n.left;
  const s = t.top - n.top;
  if (r || s) {
    const i = e.el.style;
    i.transform = i.webkitTransform = `translate(${r}px,${s}px)`;
    i.transitionDuration = "0s";
    return e;
  }
}
function ip(e, t, n) {
  const r = e.cloneNode();
  const s = e[ur];
  if (s) {
    s.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    });
  }
  n.split(/\s+/).forEach((a) => a && r.classList.add(a));
  r.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(r);
  const { hasTransform: o } = Gf(r);
  i.removeChild(r);
  return o;
}
const ql = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  if (oe(t)) {
    return (n) => ir(t, n);
  } else {
    return t;
  }
};
function op(e) {
  e.target.composing = true;
}
function Vl(e) {
  const t = e.target;
  if (t.composing) {
    t.composing = false;
    t.dispatchEvent(new Event("input"));
  }
}
const Qi = Symbol("_assign");
const VC = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e[Qi] = ql(s);
    const i = r || (s.props && s.props.type === "number");
    er(e, t ? "change" : "input", (o) => {
      if (o.target.composing) {
        return;
      }
      let a = e.value;
      if (n) {
        a = a.trim();
      }
      if (i) {
        a = So(a);
      }
      e[Qi](a);
    });
    if (n) {
      er(e, "change", () => {
        e.value = e.value.trim();
      });
    }
    if (!t) {
      er(e, "compositionstart", op);
      er(e, "compositionend", Vl);
      er(e, "change", Vl);
    }
  },
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(
    e,
    { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } },
    o
  ) {
    e[Qi] = ql(o);
    if (e.composing) {
      return;
    }
    const a =
      (i || e.type === "number") && !/^0\d/.test(e.value)
        ? So(e.value)
        : e.value;
    const l = t ?? "";
    if (a !== l) {
      if (
        document.activeElement !== e ||
        e.type === "range" ||
        ((!r || t !== n) && (!s || e.value.trim() !== l))
      ) {
        e.value = l;
      }
    }
  },
};
const ap = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace",
};
const WC = (e, t) => {
  const n = (e._withKeys ||= {});
  const r = t.join(".");
  return (n[r] ||= (s) => {
    if (!("key" in s)) {
      return;
    }
    const i = tn(s.key);
    if (t.some((o) => o === i || ap[o] === i)) {
      return e(s);
    }
  });
};
const lp = $e(
  {
    patchProp: Yg,
  },
  Mg
);
let Wl;
function cp() {
  return (Wl ||= ig(lp));
}
const Jf = (...e) => {
  const t = cp().createApp(...e);
  const { mount: n } = t;
  t.mount = (r) => {
    const s = fp(r);
    if (!s) {
      return;
    }
    const i = t._component;
    if (!le(i) && !i.render && !i.template) {
      i.template = s.innerHTML;
    }
    if (s.nodeType === 1) {
      s.textContent = "";
    }
    const o = n(s, false, up(s));
    if (s instanceof Element) {
      s.removeAttribute("v-cloak");
      s.setAttribute("data-v-app", "");
    }
    return o;
  };
  return t;
};
function up(e) {
  if (e instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) {
    return "mathml";
  }
}
function fp(e) {
  if (Oe(e)) {
    return document.querySelector(e);
  } else {
    return e;
  }
}
function yr(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: true,
  });
  return e;
}
const _n = he(false);
let $o;
function dp(e, t) {
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
function hp(e) {
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
const Zf = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function mp(e) {
  const t = e.toLowerCase();
  const n = hp(t);
  const r = dp(t, n);
  const s = {
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
    s[r.browser] = true;
    s.version = r.version;
    s.versionNumber = parseInt(r.version, 10);
  }
  if (r.platform) {
    s[r.platform] = true;
  }
  const i =
    s.android ||
    s.ios ||
    s.bb ||
    s.blackberry ||
    s.ipad ||
    s.iphone ||
    s.ipod ||
    s.kindle ||
    s.playbook ||
    s.silk ||
    s["windows phone"];
  if (i === true || t.indexOf("mobile") !== -1) {
    s.mobile = true;
  } else {
    s.desktop = true;
  }
  if (s["windows phone"]) {
    s.winphone = true;
    delete s["windows phone"];
  }
  if (s.edga || s.edgios || s.edg) {
    s.edge = true;
    r.browser = "edge";
  } else if (s.crios) {
    s.chrome = true;
    r.browser = "chrome";
  } else if (s.fxios) {
    s.firefox = true;
    r.browser = "firefox";
  }
  if (s.ipod || s.ipad || s.iphone) {
    s.ios = true;
  }
  if (s.vivaldi) {
    r.browser = "vivaldi";
    s.vivaldi = true;
  }
  if (
    s.chrome ||
    s.opr ||
    s.safari ||
    s.vivaldi ||
    (s.mobile === true && s.ios !== true && i !== true)
  ) {
    s.webkit = true;
  }
  if (s.opr) {
    r.browser = "opera";
    s.opera = true;
  }
  if (s.safari) {
    if (s.blackberry || s.bb) {
      r.browser = "blackberry";
      s.blackberry = true;
    } else if (s.playbook) {
      r.browser = "playbook";
      s.playbook = true;
    } else if (s.android) {
      r.browser = "android";
      s.android = true;
    } else if (s.kindle) {
      r.browser = "kindle";
      s.kindle = true;
    } else if (s.silk) {
      r.browser = "silk";
      s.silk = true;
    }
  }
  s.name = r.browser;
  s.platform = r.platform;
  if (t.indexOf("electron") !== -1) {
    s.electron = true;
  } else if (document.location.href.indexOf("-extension://") !== -1) {
    s.bex = true;
  } else {
    if (window.Capacitor !== undefined) {
      s.capacitor = true;
      s.nativeMobile = true;
      s.nativeMobileWrapper = "capacitor";
    } else if (
      window._cordovaNative !== undefined ||
      window.cordova !== undefined
    ) {
      s.cordova = true;
      s.nativeMobile = true;
      s.nativeMobileWrapper = "cordova";
    }
    if (_n.value === true) {
      $o = {
        is: {
          ...s,
        },
      };
    }
    if (
      Zf === true &&
      s.mac === true &&
      ((s.desktop === true && s.safari === true) ||
        (s.nativeMobile === true &&
          s.android !== true &&
          s.ios !== true &&
          s.ipad !== true))
    ) {
      delete s.mac;
      delete s.desktop;
      const o =
        Math.min(window.innerHeight, window.innerWidth) > 414
          ? "ipad"
          : "iphone";
      Object.assign(s, {
        mobile: true,
        ios: true,
        platform: o,
        [o]: true,
      });
    }
    if (
      s.mobile !== true &&
      window.navigator.userAgentData &&
      window.navigator.userAgentData.mobile
    ) {
      delete s.desktop;
      s.mobile = true;
    }
  }
  return s;
}
const Bl = navigator.userAgent || navigator.vendor || window.opera;
const gp = {
  has: {
    touch: false,
    webStorage: false,
  },
  within: {
    iframe: false,
  },
};
const Ve = {
  userAgent: Bl,
  is: mp(Bl),
  has: {
    touch: Zf,
  },
  within: {
    iframe: window.self !== window.top,
  },
};
const jo = {
  install(e) {
    const { $q: t } = e;
    if (_n.value === true) {
      e.onSSRHydrated.push(() => {
        Object.assign(t.platform, Ve);
        _n.value = false;
      });
      t.platform = Wn(this);
    } else {
      t.platform = this;
    }
  },
};
{
  let e;
  yr(Ve.has, "webStorage", () => {
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
  Object.assign(jo, Ve);
  if (_n.value === true) {
    Object.assign(jo, $o, gp);
    $o = null;
  }
}
function Ye(e) {
  return Bn(Un(e));
}
function pp(e) {
  return Bn(e);
}
const br = (e, t) => {
  const n = Wn(e);
  for (const r in e) {
    yr(
      t,
      r,
      () => n[r],
      (s) => {
        n[r] = s;
      }
    );
  }
  return t;
};
const ct = {
  hasPassive: false,
  passiveCapture: true,
  notPassiveCapture: true,
};
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(ct, {
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
function rs() {}
function BC(e) {
  return e.button === 0;
}
function vp(e) {
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
function yp(e) {
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
function ri(e) {
  e.stopPropagation();
}
function vn(e) {
  if (e.cancelable !== false) {
    e.preventDefault();
  }
}
function bt(e) {
  if (e.cancelable !== false) {
    e.preventDefault();
  }
  e.stopPropagation();
}
function UC(e, t) {
  if (e === undefined || (t === true && e.__dragPrevented === true)) {
    return;
  }
  const n =
    t === true
      ? (r) => {
          r.__dragPrevented = true;
          r.addEventListener("dragstart", vn, ct.notPassiveCapture);
        }
      : (r) => {
          delete r.__dragPrevented;
          r.removeEventListener("dragstart", vn, ct.notPassiveCapture);
        };
  e.querySelectorAll("a, img").forEach(n);
}
function bp(e, t, n) {
  const r = `__q_${t}_evt`;
  e[r] = e[r] !== undefined ? e[r].concat(n) : n;
  n.forEach((s) => {
    s[0].addEventListener(s[1], e[s[2]], ct[s[3]]);
  });
}
function _p(e, t) {
  const n = `__q_${t}_evt`;
  if (e[n] !== undefined) {
    e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], ct[r[3]]);
    });
    e[n] = undefined;
  }
}
function ed(e, t = 250, n) {
  let r = null;
  function s() {
    const i = arguments;
    const o = () => {
      r = null;
      e.apply(this, i);
    };
    if (r !== null) {
      clearTimeout(r);
    }
    r = setTimeout(o, t);
  }
  s.cancel = () => {
    if (r !== null) {
      clearTimeout(r);
    }
  };
  return s;
}
const Xi = ["sm", "md", "lg", "xl"];
const { passive: Ul } = ct;
const wp = br(
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
    setSizes: rs,
    setDebounce: rs,
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
      const s = document.scrollingElement || document.documentElement;
      const i =
        n === undefined || Ve.is.mobile === true
          ? () => [
              Math.max(window.innerWidth, s.clientWidth),
              Math.max(window.innerHeight, s.clientHeight),
            ]
          : () => [
              n.width * n.scale + window.innerWidth - s.clientWidth,
              n.height * n.scale + window.innerHeight - s.clientHeight,
            ];
      const o = e.config.screen?.bodyClasses === true;
      this.__update = (f) => {
        const [d, h] = i();
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
        Xi.forEach((d) => {
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
          Xi.forEach((d) => {
            this.sizes[d] = parseInt(f.getPropertyValue(`--q-size-${d}`), 10);
          });
        }
        this.setSizes = (d) => {
          Xi.forEach((h) => {
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
          a = d > 0 ? ed(this.__update, d) : this.__update;
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
      if (_n.value === true) {
        t.push(u);
      } else {
        u();
      }
    },
  }
);
const Je = br(
  {
    isActive: false,
    mode: false,
  },
  {
    __media: undefined,
    set(e) {
      Je.mode = e;
      if (e === "auto") {
        if (Je.__media === undefined) {
          Je.__media = window.matchMedia("(prefers-color-scheme: dark)");
          Je.__updateMedia = () => {
            Je.set("auto");
          };
          Je.__media.addListener(Je.__updateMedia);
        }
        e = Je.__media.matches;
      } else if (Je.__media !== undefined) {
        Je.__media.removeListener(Je.__updateMedia);
        Je.__media = undefined;
      }
      Je.isActive = e === true;
      document.body.classList.remove(`body--${e === true ? "light" : "dark"}`);
      document.body.classList.add(`body--${e === true ? "dark" : "light"}`);
    },
    toggle() {
      Je.set(Je.isActive === false);
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
function Cp(e, t, n = document.body) {
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
let td = false;
function Ep(e) {
  td = e.isComposing === true;
}
function nd(e) {
  return (
    td === true ||
    e !== Object(e) ||
    e.isComposing === true ||
    e.qKeyEvent === true
  );
}
function ss(e, t) {
  if (nd(e) === true) {
    return false;
  } else {
    return [].concat(t).includes(e.keyCode);
  }
}
function rd(e) {
  if (e.ios === true) {
    return "ios";
  }
  if (e.android === true) {
    return "android";
  }
}
function Sp({ is: e, has: t, within: n }, r) {
  const s = [
    e.desktop === true ? "desktop" : "mobile",
    `${t.touch === false ? "no-" : ""}touch`,
  ];
  if (e.mobile === true) {
    const i = rd(e);
    if (i !== undefined) {
      s.push("platform-" + i);
    }
  }
  if (e.nativeMobile === true) {
    const i = e.nativeMobileWrapper;
    s.push(i);
    s.push("native-mobile");
    if (
      e.ios === true &&
      (r[i] === undefined || r[i].iosStatusBarPadding !== false)
    ) {
      s.push("q-ios-padding");
    }
  } else if (e.electron === true) {
    s.push("electron");
  } else if (e.bex === true) {
    s.push("bex");
  }
  if (n.iframe === true) {
    s.push("within-iframe");
  }
  return s;
}
function kp() {
  const { is: e } = Ve;
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
      const s = rd(e);
      if (s !== undefined) {
        n.add(`platform-${s}`);
      }
    }
  }
  if (Ve.has.touch === true) {
    n.delete("no-touch");
    n.add("touch");
  }
  if (Ve.within.iframe === true) {
    n.add("within-iframe");
  }
  const r = Array.from(n).join(" ");
  if (t !== r) {
    document.body.className = r;
  }
}
function xp(e) {
  for (const t in e) {
    Cp(t, e[t]);
  }
}
const Tp = {
  install(e) {
    if (this.__installed !== true) {
      if (_n.value === true) {
        kp();
      } else {
        const { $q: t } = e;
        if (t.config.brand !== undefined) {
          xp(t.config.brand);
        }
        const n = Sp(Ve, t.config);
        document.body.classList.add.apply(document.body.classList, n);
      }
      if (Ve.is.ios === true) {
        document.body.addEventListener("touchstart", rs);
      }
      window.addEventListener("keydown", Ep, true);
    }
  },
};
const sd = () => true;
function Np(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function Ap(e) {
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
function Ip(e) {
  if (e.backButtonExit === false) {
    return () => false;
  }
  if (e.backButtonExit === "*") {
    return sd;
  }
  const t = ["#/"];
  if (Array.isArray(e.backButtonExit) === true) {
    t.push(...e.backButtonExit.filter(Np).map(Ap));
  }
  return () => t.includes(window.location.hash);
}
const qo = {
  __history: [],
  add: rs,
  remove: rs,
  install({ $q: e }) {
    if (this.__installed === true) {
      return;
    }
    const { cordova: t, capacitor: n } = Ve.is;
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
        o.condition = sd;
      }
      this.__history.push(o);
    };
    this.remove = (o) => {
      const a = this.__history.indexOf(o);
      if (a >= 0) {
        this.__history.splice(a, 1);
      }
    };
    const s = Ip(
      Object.assign(
        {
          backButtonExit: true,
        },
        r
      )
    );
    const i = () => {
      if (this.__history.length) {
        const o = this.__history[this.__history.length - 1];
        if (o.condition() === true) {
          this.__history.pop();
          o.handler();
        }
      } else if (s() === true) {
        navigator.app.exitApp();
      } else {
        window.history.back();
      }
    };
    if (t === true) {
      document.addEventListener("deviceready", () => {
        document.addEventListener("backbutton", i, false);
      });
    } else {
      window.Capacitor.Plugins.App.addListener("backButton", i);
    }
  },
};
const Hl = {
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
function zl() {
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
const mn = br(
  {
    __qLang: {},
  },
  {
    getLocale: zl,
    set(e = Hl, t) {
      const n = {
        ...e,
        rtl: e.rtl === true,
        getLocale: zl,
      };
      {
        n.set = mn.set;
        if (
          mn.__langConfig === undefined ||
          mn.__langConfig.noHtmlAttrs !== true
        ) {
          const r = document.documentElement;
          r.setAttribute("dir", n.rtl === true ? "rtl" : "ltr");
          r.setAttribute("lang", n.isoName);
        }
        Object.assign(mn.__qLang, n);
      }
    },
    install({ $q: e, lang: t, ssrContext: n }) {
      e.lang = mn.__qLang;
      mn.__langConfig = e.config.lang;
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
              (s) => s !== "set" && s !== "getLocale"
            );
          },
        });
        this.set(t || Hl);
      }
    },
  }
);
const Pp = {
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
const si = br(
  {
    iconMapFn: null,
    __qIconSet: {},
  },
  {
    set(e, t) {
      const n = {
        ...e,
      };
      n.set = si.set;
      Object.assign(si.__qIconSet, n);
    },
    install({ $q: e, iconSet: t, ssrContext: n }) {
      if (e.config.iconMapFn !== undefined) {
        this.iconMapFn = e.config.iconMapFn;
      }
      e.iconSet = this.__qIconSet;
      yr(
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
            return Reflect.ownKeys(r).filter((s) => s !== "set");
          },
        });
        this.set(t || Pp);
      }
    },
  }
);
const Lp = "_q_";
const HC = "_q_l_";
const zC = "_q_pc_";
const Op = "_q_fo_";
const KC = "_q_tabs_";
function GC() {}
const ii = {};
let id = false;
function Rp() {
  id = true;
}
function Yi(e, t) {
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
        if (Yi(e[r], t[r]) !== true) {
          return false;
        }
      }
      return true;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size) {
        return false;
      }
      let i = e.entries();
      for (r = i.next(); r.done !== true; ) {
        if (t.has(r.value[0]) !== true) {
          return false;
        }
        r = i.next();
      }
      i = e.entries();
      r = i.next();
      while (r.done !== true) {
        if (Yi(r.value[1], t.get(r.value[0])) !== true) {
          return false;
        }
        r = i.next();
      }
      return true;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) {
        return false;
      }
      const i = e.entries();
      for (r = i.next(); r.done !== true; ) {
        if (t.has(r.value[0]) !== true) {
          return false;
        }
        r = i.next();
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
    const s = Object.keys(e).filter((i) => e[i] !== undefined);
    n = s.length;
    if (n !== Object.keys(t).filter((i) => t[i] !== undefined).length) {
      return false;
    }
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (Yi(e[i], t[i]) !== true) {
        return false;
      }
    }
    return true;
  }
  return e !== e && t !== t;
}
function dt(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== true;
}
function QC(e) {
  return typeof e == "number" && isFinite(e);
}
const Kl = [jo, Tp, Je, wp, qo, mn, si];
function Oa(e, t) {
  const n = Jf(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...s } = t._context;
  Object.assign(n._context, s);
  return n;
}
function Gl(e, t) {
  t.forEach((n) => {
    n.install(e);
    n.__installed = true;
  });
}
function Mp(e, t, n) {
  e.config.globalProperties.$q = n.$q;
  e.provide(Lp, n.$q);
  Gl(n, Kl);
  if (t.components !== undefined) {
    Object.values(t.components).forEach((r) => {
      if (dt(r) === true && r.name !== undefined) {
        e.component(r.name, r);
      }
    });
  }
  if (t.directives !== undefined) {
    Object.values(t.directives).forEach((r) => {
      if (dt(r) === true && r.name !== undefined) {
        e.directive(r.name, r);
      }
    });
  }
  if (t.plugins !== undefined) {
    Gl(
      n,
      Object.values(t.plugins).filter(
        (r) => typeof r.install == "function" && Kl.includes(r) === false
      )
    );
  }
  if (_n.value === true) {
    n.$q.onSSRHydrated = () => {
      n.onSSRHydrated.forEach((r) => {
        r();
      });
      n.$q.onSSRHydrated = () => {};
    };
  }
}
const Fp = function (e, t = {}) {
  const n = {
    version: "2.18.1",
  };
  if (id === false) {
    if (t.config !== undefined) {
      Object.assign(ii, t.config);
    }
    n.config = {
      ...ii,
    };
    Rp();
  } else {
    n.config = t.config || {};
  }
  Mp(e, t, {
    parentApp: e,
    $q: n,
    lang: t.lang,
    iconSet: t.iconSet,
    onSSRHydrated: [],
  });
};
const Dp = {
  name: "Quasar",
  version: "2.18.1",
  install: Fp,
  lang: mn,
  iconSet: si,
};
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const tr = typeof document !== "undefined";
function od(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function $p(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && od(e.default))
  );
}
const we = Object.assign;
function Ji(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Rt(s) ? s.map(e) : e(s);
  }
  return n;
}
const Br = () => {};
const Rt = Array.isArray;
const ad = /#/g;
const jp = /&/g;
const qp = /\//g;
const Vp = /=/g;
const Wp = /\?/g;
const ld = /\+/g;
const Bp = /%5B/g;
const Up = /%5D/g;
const cd = /%5E/g;
const Hp = /%60/g;
const ud = /%7B/g;
const zp = /%7C/g;
const fd = /%7D/g;
const Kp = /%20/g;
function Ra(e) {
  return encodeURI("" + e)
    .replace(zp, "|")
    .replace(Bp, "[")
    .replace(Up, "]");
}
function Gp(e) {
  return Ra(e).replace(ud, "{").replace(fd, "}").replace(cd, "^");
}
function Vo(e) {
  return Ra(e)
    .replace(ld, "%2B")
    .replace(Kp, "+")
    .replace(ad, "%23")
    .replace(jp, "%26")
    .replace(Hp, "`")
    .replace(ud, "{")
    .replace(fd, "}")
    .replace(cd, "^");
}
function Qp(e) {
  return Vo(e).replace(Vp, "%3D");
}
function Xp(e) {
  return Ra(e).replace(ad, "%23").replace(Wp, "%3F");
}
function Yp(e) {
  if (e == null) {
    return "";
  } else {
    return Xp(e).replace(qp, "%2F");
  }
}
function is(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const Jp = /\/$/;
const Zp = (e) => e.replace(Jp, "");
function Zi(e, t, n = "/") {
  let r;
  let s = {};
  let i = "";
  let o = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  if (a < l && a >= 0) {
    l = -1;
  }
  if (l > -1) {
    r = t.slice(0, l);
    i = t.slice(l + 1, a > -1 ? a : t.length);
    s = e(i);
  }
  if (a > -1) {
    r = r || t.slice(0, a);
    o = t.slice(a, t.length);
  }
  r = rv(r ?? t, n);
  return {
    fullPath: r + (i && "?") + i + o,
    path: r,
    query: s,
    hash: is(o),
  };
}
function ev(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Ql(e, t) {
  if (!t || !e.toLowerCase().startsWith(t.toLowerCase())) {
    return e;
  } else {
    return e.slice(t.length) || "/";
  }
}
function tv(e, t, n) {
  const r = t.matched.length - 1;
  const s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    fr(t.matched[r], n.matched[s]) &&
    dd(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function fr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function dd(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) {
    return false;
  }
  for (const n in e) {
    if (!nv(e[n], t[n])) {
      return false;
    }
  }
  return true;
}
function nv(e, t) {
  if (Rt(e)) {
    return Xl(e, t);
  } else if (Rt(t)) {
    return Xl(t, e);
  } else {
    return e === t;
  }
}
function Xl(e, t) {
  if (Rt(t)) {
    return e.length === t.length && e.every((n, r) => n === t[r]);
  } else {
    return e.length === 1 && e[0] === t;
  }
}
function rv(e, t) {
  if (e.startsWith("/")) {
    return e;
  }
  if (!e) {
    return t;
  }
  const n = t.split("/");
  const r = e.split("/");
  const s = r[r.length - 1];
  if (s === ".." || s === ".") {
    r.push("");
  }
  let i = n.length - 1;
  let o;
  let a;
  for (o = 0; o < r.length; o++) {
    a = r[o];
    if (a !== ".") {
      if (a === "..") {
        if (i > 1) {
          i--;
        }
      } else {
        break;
      }
    }
  }
  return n.slice(0, i).join("/") + "/" + r.slice(o).join("/");
}
const on = {
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
var os;
(function (e) {
  e.pop = "pop";
  e.push = "push";
})((os ||= {}));
var Ur;
(function (e) {
  e.back = "back";
  e.forward = "forward";
  e.unknown = "";
})((Ur ||= {}));
function sv(e) {
  if (!e) {
    if (tr) {
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
  return Zp(e);
}
const iv = /^[^#]+#/;
function ov(e, t) {
  return e.replace(iv, "#") + t;
}
function av(e, t) {
  const n = document.documentElement.getBoundingClientRect();
  const r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const xi = () => ({
  left: window.scrollX,
  top: window.scrollY,
});
function lv(e) {
  let t;
  if ("el" in e) {
    const n = e.el;
    const r = typeof n == "string" && n.startsWith("#");
    const s =
      typeof n == "string"
        ? r
          ? document.getElementById(n.slice(1))
          : document.querySelector(n)
        : n;
    if (!s) {
      return;
    }
    t = av(s, e);
  } else {
    t = e;
  }
  if ("scrollBehavior" in document.documentElement.style) {
    window.scrollTo(t);
  } else {
    window.scrollTo(t.left ?? window.scrollX, t.top ?? window.scrollY);
  }
}
function Yl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Wo = new Map();
function cv(e, t) {
  Wo.set(e, t);
}
function uv(e) {
  const t = Wo.get(e);
  Wo.delete(e);
  return t;
}
let fv = () => location.protocol + "//" + location.host;
function hd(e, t) {
  const { pathname: n, search: r, hash: s } = t;
  const i = e.indexOf("#");
  if (i > -1) {
    let a = s.includes(e.slice(i)) ? e.slice(i).length : 1;
    let l = s.slice(a);
    if (l[0] !== "/") {
      l = "/" + l;
    }
    return Ql(l, "");
  }
  return Ql(n, e) + r + s;
}
function dv(e, t, n, r) {
  let s = [];
  let i = [];
  let o = null;
  const a = ({ state: d }) => {
    const h = hd(e, location);
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
    s.forEach((b) => {
      b(n.value, p, {
        delta: A,
        type: os.pop,
        direction: A ? (A > 0 ? Ur.forward : Ur.back) : Ur.unknown,
      });
    });
  };
  function l() {
    o = n.value;
  }
  function c(d) {
    s.push(d);
    const h = () => {
      const p = s.indexOf(d);
      if (p > -1) {
        s.splice(p, 1);
      }
    };
    i.push(h);
    return h;
  }
  function u() {
    const { history: d } = window;
    if (d.state) {
      d.replaceState(
        we({}, d.state, {
          scroll: xi(),
        }),
        ""
      );
    }
  }
  function f() {
    for (const d of i) {
      d();
    }
    i = [];
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
function Jl(e, t, n, r = false, s = false) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? xi() : null,
  };
}
function hv(e) {
  const { history: t, location: n } = window;
  const r = {
    value: hd(e, n),
  };
  const s = {
    value: t.state,
  };
  if (!s.value) {
    i(
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
  function i(l, c, u) {
    const f = e.indexOf("#");
    const d =
      f > -1
        ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l
        : fv() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", d);
      s.value = c;
    } catch (h) {
      console.error(h);
      n[u ? "replace" : "assign"](d);
    }
  }
  function o(l, c) {
    const u = we({}, t.state, Jl(s.value.back, l, s.value.forward, true), c, {
      position: s.value.position,
    });
    i(l, u, true);
    r.value = l;
  }
  function a(l, c) {
    const u = we({}, s.value, t.state, {
      forward: l,
      scroll: xi(),
    });
    i(u.current, u, true);
    const f = we(
      {},
      Jl(r.value, l, null),
      {
        position: u.position + 1,
      },
      c
    );
    i(l, f, false);
    r.value = l;
  }
  return {
    location: r,
    state: s,
    push: a,
    replace: o,
  };
}
function mv(e) {
  e = sv(e);
  const t = hv(e);
  const n = dv(e, t.state, t.location, t.replace);
  function r(i, o = true) {
    if (!o) {
      n.pauseListeners();
    }
    history.go(i);
  }
  const s = we(
    {
      location: "",
      base: e,
      go: r,
      createHref: ov.bind(null, e),
    },
    t,
    n
  );
  Object.defineProperty(s, "location", {
    enumerable: true,
    get: () => t.location.value,
  });
  Object.defineProperty(s, "state", {
    enumerable: true,
    get: () => t.state.value,
  });
  return s;
}
function gv(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function md(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const gd = Symbol("");
var Zl;
(function (e) {
  e[(e.aborted = 4)] = "aborted";
  e[(e.cancelled = 8)] = "cancelled";
  e[(e.duplicated = 16)] = "duplicated";
})((Zl ||= {}));
function dr(e, t) {
  return we(
    new Error(),
    {
      type: e,
      [gd]: true,
    },
    t
  );
}
function Bt(e, t) {
  return e instanceof Error && gd in e && (t == null || !!(e.type & t));
}
const ec = "[^/]+?";
const pv = {
  sensitive: false,
  strict: false,
  start: true,
  end: true,
};
const vv = /[.+*?^${}()[\]/\\]/g;
function yv(e, t) {
  const n = we({}, pv, t);
  const r = [];
  let s = n.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    if (n.strict && !c.length) {
      s += "/";
    }
    for (let f = 0; f < c.length; f++) {
      const d = c[f];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0) {
        if (!f) {
          s += "/";
        }
        s += d.value.replace(vv, "\\$&");
        h += 40;
      } else if (d.type === 1) {
        const { value: p, repeatable: E, optional: A, regexp: b } = d;
        i.push({
          name: p,
          repeatable: E,
          optional: A,
        });
        const m = b || ec;
        if (m !== ec) {
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
        s += C;
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
    s += "/?";
  }
  if (n.end) {
    s += "$";
  } else if (n.strict && !s.endsWith("/")) {
    s += "(?:/|$)";
  }
  const o = new RegExp(s, n.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(o);
    const f = {};
    if (!u) {
      return null;
    }
    for (let d = 1; d < u.length; d++) {
      const h = u[d] || "";
      const p = i[d - 1];
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
          if (Rt(b) && !E) {
            throw new Error(
              `Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`
            );
          }
          const m = Rt(b) ? b.join("/") : b;
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
    keys: i,
    parse: a,
    stringify: l,
  };
}
function bv(e, t) {
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
function pd(e, t) {
  let n = 0;
  const r = e.score;
  const s = t.score;
  while (n < r.length && n < s.length) {
    const i = bv(r[n], s[n]);
    if (i) {
      return i;
    }
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (tc(r)) {
      return 1;
    }
    if (tc(s)) {
      return -1;
    }
  }
  return s.length - r.length;
}
function tc(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const _v = {
  type: 0,
  value: "",
};
const wv = /[a-zA-Z0-9_]/;
function Cv(e) {
  if (!e) {
    return [[]];
  }
  if (e === "/") {
    return [[_v]];
  }
  if (!e.startsWith("/")) {
    throw new Error(`Invalid path "${e}"`);
  }
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`);
  }
  let n = 0;
  let r = n;
  const s = [];
  let i;
  function o() {
    if (i) {
      s.push(i);
    }
    i = [];
  }
  let a = 0;
  let l;
  let c = "";
  let u = "";
  function f() {
    if (c) {
      if (n === 0) {
        i.push({
          type: 0,
          value: c,
        });
      } else if (n === 1 || n === 2 || n === 3) {
        if (i.length > 1 && (l === "*" || l === "+")) {
          t(
            `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
          );
        }
        i.push({
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
        } else if (wv.test(l)) {
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
  return s;
}
function Ev(e, t, n) {
  const r = yv(Cv(e.path), n);
  const s = we(r, {
    record: e,
    parent: t,
    children: [],
    alias: [],
  });
  if (t && !s.record.aliasOf == !t.record.aliasOf) {
    t.children.push(s);
  }
  return s;
}
function Sv(e, t) {
  const n = [];
  const r = new Map();
  t = ic(
    {
      strict: false,
      end: true,
      sensitive: false,
    },
    t
  );
  function s(f) {
    return r.get(f);
  }
  function i(f, d, h) {
    const p = !h;
    const E = rc(f);
    E.aliasOf = h && h.record;
    const A = ic(t, f);
    const b = [E];
    if ("alias" in f) {
      const y = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const x of y) {
        b.push(
          rc(
            we({}, E, {
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
      m = Ev(y, d, A);
      if (h) {
        h.alias.push(m);
      } else {
        C = C || m;
        if (C !== m) {
          C.alias.push(m);
        }
        if (p && f.name && !sc(m)) {
          o(f.name);
        }
      }
      if (vd(m)) {
        l(m);
      }
      if (E.children) {
        const L = E.children;
        for (let I = 0; I < L.length; I++) {
          i(L[I], m, h && h.children[I]);
        }
      }
      h = h || m;
    }
    if (C) {
      return () => {
        o(C);
      };
    } else {
      return Br;
    }
  }
  function o(f) {
    if (md(f)) {
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
    const d = Tv(f, n);
    n.splice(d, 0, f);
    if (f.record.name && !sc(f)) {
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
        throw dr(1, {
          location: f,
        });
      }
      A = h.record.name;
      p = we(
        nc(
          d.params,
          h.keys
            .filter((C) => !C.optional)
            .concat(h.parent ? h.parent.keys.filter((C) => C.optional) : [])
            .map((C) => C.name)
        ),
        f.params &&
          nc(
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
        throw dr(1, {
          location: f,
          currentLocation: d,
        });
      }
      A = h.record.name;
      p = we({}, d.params, f.params);
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
      meta: xv(b),
    };
  }
  e.forEach((f) => i(f));
  function u() {
    n.length = 0;
    r.clear();
  }
  return {
    addRoute: i,
    resolve: c,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: s,
  };
}
function nc(e, t) {
  const n = {};
  for (const r of t) {
    if (r in e) {
      n[r] = e[r];
    }
  }
  return n;
}
function rc(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: kv(e),
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
function kv(e) {
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
function sc(e) {
  while (e) {
    if (e.record.aliasOf) {
      return true;
    }
    e = e.parent;
  }
  return false;
}
function xv(e) {
  return e.reduce((t, n) => we(t, n.meta), {});
}
function ic(e, t) {
  const n = {};
  for (const r in e) {
    n[r] = r in t ? t[r] : e[r];
  }
  return n;
}
function Tv(e, t) {
  let n = 0;
  let r = t.length;
  while (n !== r) {
    const i = (n + r) >> 1;
    if (pd(e, t[i]) < 0) {
      r = i;
    } else {
      n = i + 1;
    }
  }
  const s = Nv(e);
  if (s) {
    r = t.lastIndexOf(s, r - 1);
  }
  return r;
}
function Nv(e) {
  let t = e;
  while ((t = t.parent)) {
    if (vd(t) && pd(e, t) === 0) {
      return t;
    }
  }
}
function vd({ record: e }) {
  return (
    !!e.name ||
    (!!e.components && !!Object.keys(e.components).length) ||
    !!e.redirect
  );
}
function Av(e) {
  const t = {};
  if (e === "" || e === "?") {
    return t;
  }
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const i = r[s].replace(ld, " ");
    const o = i.indexOf("=");
    const a = is(o < 0 ? i : i.slice(0, o));
    const l = o < 0 ? null : is(i.slice(o + 1));
    if (a in t) {
      let c = t[a];
      if (!Rt(c)) {
        c = t[a] = [c];
      }
      c.push(l);
    } else {
      t[a] = l;
    }
  }
  return t;
}
function oc(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    n = Qp(n);
    if (r == null) {
      if (r !== undefined) {
        t += (t.length ? "&" : "") + n;
      }
      continue;
    }
    (Rt(r) ? r.map((i) => i && Vo(i)) : [r && Vo(r)]).forEach((i) => {
      if (i !== undefined) {
        t += (t.length ? "&" : "") + n;
        if (i != null) {
          t += "=" + i;
        }
      }
    });
  }
  return t;
}
function Iv(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    if (r !== undefined) {
      t[n] = Rt(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r;
    }
  }
  return t;
}
const Pv = Symbol("");
const ac = Symbol("");
const Ti = Symbol("");
const Ma = Symbol("");
const Bo = Symbol("");
function kr() {
  let e = [];
  function t(r) {
    e.push(r);
    return () => {
      const s = e.indexOf(r);
      if (s > -1) {
        e.splice(s, 1);
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
function gn(e, t, n, r, s, i = (o) => o()) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, l) => {
      const c = (d) => {
        if (d === false) {
          l(
            dr(4, {
              from: n,
              to: t,
            })
          );
        } else if (d instanceof Error) {
          l(d);
        } else if (gv(d)) {
          l(
            dr(2, {
              from: t,
              to: d,
            })
          );
        } else {
          if (o && r.enterCallbacks[s] === o && typeof d == "function") {
            o.push(d);
          }
          a();
        }
      };
      const u = i(() => e.call(r && r.instances[s], t, n, c));
      let f = Promise.resolve(u);
      if (e.length < 3) {
        f = f.then(c);
      }
      f.catch((d) => l(d));
    });
}
function eo(e, t, n, r, s = (i) => i()) {
  const i = [];
  for (const o of e) {
    for (const a in o.components) {
      let l = o.components[a];
      if (t === "beforeRouteEnter" || !!o.instances[a]) {
        if (od(l)) {
          const u = (l.__vccOpts || l)[t];
          if (u) {
            i.push(gn(u, n, r, o, a, s));
          }
        } else {
          let c = l();
          i.push(() =>
            c.then((u) => {
              if (!u) {
                throw new Error(
                  `Couldn't resolve component "${a}" at "${o.path}"`
                );
              }
              const f = $p(u) ? u.default : u;
              o.mods[a] = u;
              o.components[a] = f;
              const h = (f.__vccOpts || f)[t];
              return h && gn(h, n, r, o, a, s)();
            })
          );
        }
      }
    }
  }
  return i;
}
function lc(e) {
  const t = lt(Ti);
  const n = lt(Ma);
  const r = M(() => {
    const l = Xt(e.to);
    return t.resolve(l);
  });
  const s = M(() => {
    const { matched: l } = r.value;
    const { length: c } = l;
    const u = l[c - 1];
    const f = n.matched;
    if (!u || !f.length) {
      return -1;
    }
    const d = f.findIndex(fr.bind(null, u));
    if (d > -1) {
      return d;
    }
    const h = cc(l[c - 2]);
    if (c > 1 && cc(u) === h && f[f.length - 1].path !== h) {
      return f.findIndex(fr.bind(null, l[c - 2]));
    } else {
      return d;
    }
  });
  const i = M(() => s.value > -1 && Fv(n.params, r.value.params));
  const o = M(
    () =>
      s.value > -1 &&
      s.value === n.matched.length - 1 &&
      dd(n.params, r.value.params)
  );
  function a(l = {}) {
    if (Mv(l)) {
      const c = t[Xt(e.replace) ? "replace" : "push"](Xt(e.to)).catch(Br);
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
    isActive: i,
    isExactActive: o,
    navigate: a,
  };
}
function Lv(e) {
  if (e.length === 1) {
    return e[0];
  } else {
    return e;
  }
}
const Ov = Un({
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
  },
  useLink: lc,
  setup(e, { slots: t }) {
    const n = Wn(lc(e));
    const { options: r } = lt(Ti);
    const s = M(() => ({
      [uc(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      [uc(
        e.exactActiveClass,
        r.linkExactActiveClass,
        "router-link-exact-active"
      )]: n.isExactActive,
    }));
    return () => {
      const i = t.default && Lv(t.default(n));
      if (e.custom) {
        return i;
      } else {
        return j(
          "a",
          {
            "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
            href: n.href,
            onClick: n.navigate,
            class: s.value,
          },
          i
        );
      }
    };
  },
});
const Rv = Ov;
function Mv(e) {
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
function Fv(e, t) {
  for (const n in t) {
    const r = t[n];
    const s = e[n];
    if (typeof r == "string") {
      if (r !== s) {
        return false;
      }
    } else if (
      !Rt(s) ||
      s.length !== r.length ||
      r.some((i, o) => i !== s[o])
    ) {
      return false;
    }
  }
  return true;
}
function cc(e) {
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
const uc = (e, t, n) => e ?? t ?? n;
const Dv = Un({
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
    const r = lt(Bo);
    const s = M(() => e.route || r.value);
    const i = lt(ac, 0);
    const o = M(() => {
      let c = Xt(i);
      const { matched: u } = s.value;
      let f;
      while ((f = u[c]) && !f.components) {
        c++;
      }
      return c;
    });
    const a = M(() => s.value.matched[o.value]);
    Os(
      ac,
      M(() => o.value + 1)
    );
    Os(Pv, a);
    Os(Bo, s);
    const l = he();
    de(
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
        if (c && u && (!h || !fr(u, h) || !d)) {
          (u.enterCallbacks[f] || []).forEach((E) => E(c));
        }
      },
      {
        flush: "post",
      }
    );
    return () => {
      const c = s.value;
      const u = e.name;
      const f = a.value;
      const d = f && f.components[u];
      if (!d) {
        return fc(n.default, {
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
      const A = j(
        d,
        we({}, p, t, {
          onVnodeUnmounted: (b) => {
            if (b.component.isUnmounted) {
              f.instances[u] = null;
            }
          },
          ref: l,
        })
      );
      return (
        fc(n.default, {
          Component: A,
          route: c,
        }) || A
      );
    };
  },
});
function fc(e, t) {
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
const $v = Dv;
function jv(e) {
  const t = Sv(e.routes, e);
  const n = e.parseQuery || Av;
  const r = e.stringifyQuery || oc;
  const s = e.history;
  const i = kr();
  const o = kr();
  const a = kr();
  const l = Ct(on);
  let c = on;
  if (tr && e.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const u = Ji.bind(null, (F) => "" + F);
  const f = Ji.bind(null, Yp);
  const d = Ji.bind(null, is);
  function h(F, Y) {
    let X;
    let te;
    if (md(F)) {
      X = t.getRecordMatcher(F);
      te = Y;
    } else {
      te = F;
    }
    return t.addRoute(te, X);
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
    Y = we({}, Y || l.value);
    if (typeof F == "string") {
      const P = Zi(n, F, Y.path);
      const V = t.resolve(
        {
          path: P.path,
        },
        Y
      );
      const U = s.createHref(P.fullPath);
      return we(P, V, {
        params: d(V.params),
        hash: is(P.hash),
        redirectedFrom: undefined,
        href: U,
      });
    }
    let X;
    if (F.path != null) {
      X = we({}, F, {
        path: Zi(n, F.path, Y.path).path,
      });
    } else {
      const P = we({}, F.params);
      for (const V in P) {
        if (P[V] == null) {
          delete P[V];
        }
      }
      X = we({}, F, {
        params: f(P),
      });
      Y.params = f(Y.params);
    }
    const te = t.resolve(X, Y);
    const ye = F.hash || "";
    te.params = u(d(te.params));
    const _ = ev(
      r,
      we({}, F, {
        hash: Gp(ye),
        path: te.path,
      })
    );
    const w = s.createHref(_);
    return we(
      {
        fullPath: _,
        hash: ye,
        query: r === oc ? Iv(F.query) : F.query || {},
      },
      te,
      {
        redirectedFrom: undefined,
        href: w,
      }
    );
  }
  function m(F) {
    if (typeof F == "string") {
      return Zi(n, F, l.value.path);
    } else {
      return we({}, F);
    }
  }
  function C(F, Y) {
    if (c !== F) {
      return dr(8, {
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
      we(m(F), {
        replace: true,
      })
    );
  }
  function L(F) {
    const Y = F.matched[F.matched.length - 1];
    if (Y && Y.redirect) {
      const { redirect: X } = Y;
      let te = typeof X == "function" ? X(F) : X;
      if (typeof te == "string") {
        te =
          te.includes("?") || te.includes("#")
            ? (te = m(te))
            : {
                path: te,
              };
        te.params = {};
      }
      return we(
        {
          query: F.query,
          hash: F.hash,
          params: te.path != null ? {} : F.params,
        },
        te
      );
    }
  }
  function I(F, Y) {
    const X = (c = b(F));
    const te = l.value;
    const ye = F.state;
    const _ = F.force;
    const w = F.replace === true;
    const P = L(X);
    if (P) {
      return I(
        we(m(P), {
          state: typeof P == "object" ? we({}, ye, P.state) : ye,
          force: _,
          replace: w,
        }),
        Y || X
      );
    }
    const V = X;
    V.redirectedFrom = Y;
    let U;
    if (!_ && tv(r, te, X)) {
      U = dr(16, {
        to: V,
        from: te,
      });
      fe(te, te, true, false);
    }
    return (U ? Promise.resolve(U) : O(V, te))
      .catch((B) => (Bt(B) ? (Bt(B, 2) ? B : ce(B)) : K(B, V, te)))
      .then((B) => {
        if (B) {
          if (Bt(B, 2)) {
            return I(
              we(
                {
                  replace: w,
                },
                m(B.to),
                {
                  state: typeof B.to == "object" ? we({}, ye, B.to.state) : ye,
                  force: _,
                }
              ),
              Y || V
            );
          }
        } else {
          B = S(V, te, true, w, ye);
        }
        q(V, te, B);
        return B;
      });
  }
  function W(F, Y) {
    const X = C(F, Y);
    if (X) {
      return Promise.reject(X);
    } else {
      return Promise.resolve();
    }
  }
  function k(F) {
    const Y = Ie.values().next().value;
    if (Y && typeof Y.runWithContext == "function") {
      return Y.runWithContext(F);
    } else {
      return F();
    }
  }
  function O(F, Y) {
    let X;
    const [te, ye, _] = qv(F, Y);
    X = eo(te.reverse(), "beforeRouteLeave", F, Y);
    for (const P of te) {
      P.leaveGuards.forEach((V) => {
        X.push(gn(V, F, Y));
      });
    }
    const w = W.bind(null, F, Y);
    X.push(w);
    return ne(X)
      .then(() => {
        X = [];
        for (const P of i.list()) {
          X.push(gn(P, F, Y));
        }
        X.push(w);
        return ne(X);
      })
      .then(() => {
        X = eo(ye, "beforeRouteUpdate", F, Y);
        for (const P of ye) {
          P.updateGuards.forEach((V) => {
            X.push(gn(V, F, Y));
          });
        }
        X.push(w);
        return ne(X);
      })
      .then(() => {
        X = [];
        for (const P of _) {
          if (P.beforeEnter) {
            if (Rt(P.beforeEnter)) {
              for (const V of P.beforeEnter) {
                X.push(gn(V, F, Y));
              }
            } else {
              X.push(gn(P.beforeEnter, F, Y));
            }
          }
        }
        X.push(w);
        return ne(X);
      })
      .then(() => {
        F.matched.forEach((P) => (P.enterCallbacks = {}));
        X = eo(_, "beforeRouteEnter", F, Y, k);
        X.push(w);
        return ne(X);
      })
      .then(() => {
        X = [];
        for (const P of o.list()) {
          X.push(gn(P, F, Y));
        }
        X.push(w);
        return ne(X);
      })
      .catch((P) => (Bt(P, 8) ? P : Promise.reject(P)));
  }
  function q(F, Y, X) {
    a.list().forEach((te) => k(() => te(F, Y, X)));
  }
  function S(F, Y, X, te, ye) {
    const _ = C(F, Y);
    if (_) {
      return _;
    }
    const w = Y === on;
    const P = tr ? history.state : {};
    if (X) {
      if (te || w) {
        s.replace(
          F.fullPath,
          we(
            {
              scroll: w && P && P.scroll,
            },
            ye
          )
        );
      } else {
        s.push(F.fullPath, ye);
      }
    }
    l.value = F;
    fe(F, Y, X, w);
    ce();
  }
  let G;
  function D() {
    G ||= s.listen((F, Y, X) => {
      if (!Re.listening) {
        return;
      }
      const te = b(F);
      const ye = L(te);
      if (ye) {
        I(
          we(ye, {
            replace: true,
            force: true,
          }),
          te
        ).catch(Br);
        return;
      }
      c = te;
      const _ = l.value;
      if (tr) {
        cv(Yl(_.fullPath, X.delta), xi());
      }
      O(te, _)
        .catch((w) =>
          Bt(w, 12)
            ? w
            : Bt(w, 2)
            ? (I(
                we(m(w.to), {
                  force: true,
                }),
                te
              )
                .then((P) => {
                  if (Bt(P, 20) && !X.delta && X.type === os.pop) {
                    s.go(-1, false);
                  }
                })
                .catch(Br),
              Promise.reject())
            : (X.delta && s.go(-X.delta, false), K(w, te, _))
        )
        .then((w) => {
          w = w || S(te, _, false);
          if (w) {
            if (X.delta && !Bt(w, 8)) {
              s.go(-X.delta, false);
            } else if (X.type === os.pop && Bt(w, 20)) {
              s.go(-1, false);
            }
          }
          q(te, _, w);
        })
        .catch(Br);
    });
  }
  let ee = kr();
  let J = kr();
  let Q;
  function K(F, Y, X) {
    ce(F);
    const te = J.list();
    if (te.length) {
      te.forEach((ye) => ye(F, Y, X));
    } else {
      console.error(F);
    }
    return Promise.reject(F);
  }
  function ie() {
    if (Q && l.value !== on) {
      return Promise.resolve();
    } else {
      return new Promise((F, Y) => {
        ee.add([F, Y]);
      });
    }
  }
  function ce(F) {
    if (!Q) {
      Q = !F;
      D();
      ee.list().forEach(([Y, X]) => (F ? X(F) : Y()));
      ee.reset();
    }
    return F;
  }
  function fe(F, Y, X, te) {
    const { scrollBehavior: ye } = e;
    if (!tr || !ye) {
      return Promise.resolve();
    }
    const _ =
      (!X && uv(Yl(F.fullPath, 0))) ||
      ((te || !X) && history.state && history.state.scroll) ||
      null;
    return at()
      .then(() => ye(F, Y, _))
      .then((w) => w && lv(w))
      .catch((w) => K(w, F, Y));
  }
  const z = (F) => s.go(F);
  let ge;
  const Ie = new Set();
  const Re = {
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
    beforeEach: i.add,
    beforeResolve: o.add,
    afterEach: a.add,
    onError: J.add,
    isReady: ie,
    install(F) {
      const Y = this;
      F.component("RouterLink", Rv);
      F.component("RouterView", $v);
      F.config.globalProperties.$router = Y;
      Object.defineProperty(F.config.globalProperties, "$route", {
        enumerable: true,
        get: () => Xt(l),
      });
      if (tr && !ge && l.value === on) {
        ge = true;
        y(s.location).catch((ye) => {});
      }
      const X = {};
      for (const ye in on) {
        Object.defineProperty(X, ye, {
          get: () => l.value[ye],
          enumerable: true,
        });
      }
      F.provide(Ti, Y);
      F.provide(Ma, Xu(X));
      F.provide(Bo, l);
      const te = F.unmount;
      Ie.add(F);
      F.unmount = function () {
        Ie.delete(F);
        if (Ie.size < 1) {
          c = on;
          if (G) {
            G();
          }
          G = null;
          l.value = on;
          ge = false;
          Q = false;
        }
        te();
      };
    },
  };
  function ne(F) {
    return F.reduce((Y, X) => Y.then(() => k(X)), Promise.resolve());
  }
  return Re;
}
function qv(e, t) {
  const n = [];
  const r = [];
  const s = [];
  const i = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < i; o++) {
    const a = t.matched[o];
    if (a) {
      if (e.matched.find((c) => fr(c, a))) {
        r.push(a);
      } else {
        n.push(a);
      }
    }
    const l = e.matched[o];
    if (l) {
      if (!t.matched.find((c) => fr(c, l))) {
        s.push(l);
      }
    }
  }
  return [n, r, s];
}
function XC() {
  return lt(Ti);
}
function Vv(e) {
  return lt(Ma);
}
/*!
 * shared v11.1.2
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
const oi = typeof window !== "undefined";
const En = (e, t = false) => (t ? Symbol.for(e) : Symbol(e));
const Wv = (e, t, n) =>
  Bv({
    l: e,
    k: t,
    s: n,
  });
const Bv = (e) =>
  JSON.stringify(e)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029")
    .replace(/\u0027/g, "\\u0027");
const De = (e) => typeof e == "number" && isFinite(e);
const Uv = (e) => Fa(e) === "[object Date]";
const ai = (e) => Fa(e) === "[object RegExp]";
const Ni = (e) => ve(e) && Object.keys(e).length === 0;
const Xe = Object.assign;
const Hv = Object.create;
const xe = (e = null) => Hv(e);
function dc(e) {
  return e
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
const zv = Object.prototype.hasOwnProperty;
function At(e, t) {
  return zv.call(e, t);
}
const We = Array.isArray;
const Pe = (e) => typeof e == "function";
const se = (e) => typeof e == "string";
const Le = (e) => typeof e == "boolean";
const _e = (e) => e !== null && typeof e == "object";
const Kv = (e) => _e(e) && Pe(e.then) && Pe(e.catch);
const yd = Object.prototype.toString;
const Fa = (e) => yd.call(e);
const ve = (e) => Fa(e) === "[object Object]";
const Gv = (e) =>
  e == null
    ? ""
    : We(e) || (ve(e) && e.toString === yd)
    ? JSON.stringify(e, null, 2)
    : String(e);
function Da(e, t = "") {
  return e.reduce((n, r, s) => (s === 0 ? n + r : n + t + r), "");
}
function Qv(e, t) {
  if (typeof console !== "undefined") {
    console.warn("[intlify] " + e);
    if (t) {
      console.warn(t.stack);
    }
  }
}
const Cs = (e) => !_e(e) || We(e);
function Ds(e, t) {
  if (Cs(e) || Cs(t)) {
    throw new Error("Invalid value");
  }
  const n = [
    {
      src: e,
      des: t,
    },
  ];
  while (n.length) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((i) => {
      if (i !== "__proto__") {
        if (_e(r[i]) && !_e(s[i])) {
          s[i] = Array.isArray(r[i]) ? [] : xe();
        }
        if (Cs(s[i]) || Cs(r[i])) {
          s[i] = r[i];
        } else {
          n.push({
            src: r[i],
            des: s[i],
          });
        }
      }
    });
  }
}
/*!
 * message-compiler v11.1.2
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function Xv(e, t, n) {
  return {
    line: e,
    column: t,
    offset: n,
  };
}
function Uo(e, t, n) {
  return {
    start: e,
    end: t,
  };
}
const Ee = {
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
const Yv = 17;
function Ai(e, t, n = {}) {
  const { domain: r, messages: s, args: i } = n;
  const o = e;
  const a = new SyntaxError(String(o));
  a.code = e;
  if (t) {
    a.location = t;
  }
  a.domain = r;
  return a;
}
function Jv(e) {
  throw e;
}
const Ut = " ";
const Zv = "\r";
const st = `
`;
const ey = "\u2028";
const ty = "\u2029";
function ny(e) {
  const t = e;
  let n = 0;
  let r = 1;
  let s = 1;
  let i = 0;
  const o = (I) => t[I] === Zv && t[I + 1] === st;
  const a = (I) => t[I] === st;
  const l = (I) => t[I] === ty;
  const c = (I) => t[I] === ey;
  const u = (I) => o(I) || a(I) || l(I) || c(I);
  const f = () => n;
  const d = () => r;
  const h = () => s;
  const p = () => i;
  const E = (I) => (o(I) || l(I) || c(I) ? st : t[I]);
  const A = () => E(n);
  const b = () => E(n + i);
  function m() {
    i = 0;
    if (u(n)) {
      r++;
      s = 0;
    }
    if (o(n)) {
      n++;
    }
    n++;
    s++;
    return t[n];
  }
  function C() {
    if (o(n + i)) {
      i++;
    }
    i++;
    return t[n + i];
  }
  function y() {
    n = 0;
    r = 1;
    s = 1;
    i = 0;
  }
  function x(I = 0) {
    i = I;
  }
  function L() {
    const I = n + i;
    while (I !== n) {
      m();
    }
    i = 0;
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
const an = undefined;
const ry = ".";
const hc = "'";
const sy = "tokenizer";
function iy(e, t = {}) {
  const n = t.location !== false;
  const r = ny(e);
  const s = () => r.index();
  const i = () => Xv(r.line(), r.column(), r.index());
  const o = i();
  const a = s();
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
  function f(g, v, N, ...R) {
    const Z = c();
    v.column += N;
    v.offset += N;
    if (u) {
      const H = n ? Uo(Z.startLoc, v) : null;
      const T = Ai(g, H, {
        domain: sy,
        args: R,
      });
      u(T);
    }
  }
  function d(g, v, N) {
    g.endLoc = i();
    g.currentType = v;
    const R = {
      type: v,
    };
    if (n) {
      R.loc = Uo(g.startLoc, g.endLoc);
    }
    if (N != null) {
      R.value = N;
    }
    return R;
  }
  const h = (g) => d(g, 13);
  function p(g, v) {
    if (g.currentChar() === v) {
      g.next();
      return v;
    } else {
      f(Ee.EXPECTED_TOKEN, i(), 0, v);
      return "";
    }
  }
  function E(g) {
    let v = "";
    while (g.currentPeek() === Ut || g.currentPeek() === st) {
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
    if (g === an) {
      return false;
    }
    const v = g.charCodeAt(0);
    return (v >= 97 && v <= 122) || (v >= 65 && v <= 90) || v === 95;
  }
  function m(g) {
    if (g === an) {
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
    const R = b(g.currentPeek());
    g.resetPeek();
    return R;
  }
  function y(g, v) {
    const { currentType: N } = v;
    if (N !== 2) {
      return false;
    }
    E(g);
    const R = g.currentPeek() === "-" ? g.peek() : g.currentPeek();
    const Z = m(R);
    g.resetPeek();
    return Z;
  }
  function x(g, v) {
    const { currentType: N } = v;
    if (N !== 2) {
      return false;
    }
    E(g);
    const R = g.currentPeek() === hc;
    g.resetPeek();
    return R;
  }
  function L(g, v) {
    const { currentType: N } = v;
    if (N !== 7) {
      return false;
    }
    E(g);
    const R = g.currentPeek() === ".";
    g.resetPeek();
    return R;
  }
  function I(g, v) {
    const { currentType: N } = v;
    if (N !== 8) {
      return false;
    }
    E(g);
    const R = b(g.currentPeek());
    g.resetPeek();
    return R;
  }
  function W(g, v) {
    const { currentType: N } = v;
    if (N !== 7 && N !== 11) {
      return false;
    }
    E(g);
    const R = g.currentPeek() === ":";
    g.resetPeek();
    return R;
  }
  function k(g, v) {
    const { currentType: N } = v;
    if (N !== 9) {
      return false;
    }
    const R = () => {
      const H = g.currentPeek();
      if (H === "{") {
        return b(g.peek());
      } else if (
        H === "@" ||
        H === "|" ||
        H === ":" ||
        H === "." ||
        H === Ut ||
        !H
      ) {
        return false;
      } else if (H === st) {
        g.peek();
        return R();
      } else {
        return q(g, false);
      }
    };
    const Z = R();
    g.resetPeek();
    return Z;
  }
  function O(g) {
    E(g);
    const v = g.currentPeek() === "|";
    g.resetPeek();
    return v;
  }
  function q(g, v = true) {
    const N = (Z = false, H = "") => {
      const T = g.currentPeek();
      if (T === "{" || T === "@" || !T) {
        return Z;
      } else if (T === "|") {
        return H !== Ut && H !== st;
      } else if (T === Ut) {
        g.peek();
        return N(true, Ut);
      } else if (T === st) {
        g.peek();
        return N(true, st);
      } else {
        return true;
      }
    };
    const R = N();
    if (v) {
      g.resetPeek();
    }
    return R;
  }
  function S(g, v) {
    const N = g.currentChar();
    if (N === an) {
      return an;
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
  function ee(g) {
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
    return S(g, ee);
  }
  function Q(g) {
    const v = g.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function K(g) {
    return S(g, Q);
  }
  function ie(g) {
    const v = g.charCodeAt(0);
    return (
      (v >= 48 && v <= 57) || (v >= 65 && v <= 70) || (v >= 97 && v <= 102)
    );
  }
  function ce(g) {
    return S(g, ie);
  }
  function fe(g) {
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
      if (N === Ut || N === st) {
        if (q(g)) {
          v += N;
          g.next();
        } else {
          if (O(g)) {
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
  function ge(g) {
    A(g);
    let v = "";
    let N = "";
    while ((v = J(g))) {
      N += v;
    }
    if (g.currentChar() === an) {
      f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0);
    }
    return N;
  }
  function Ie(g) {
    A(g);
    let v = "";
    if (g.currentChar() === "-") {
      g.next();
      v += `-${fe(g)}`;
    } else {
      v += fe(g);
    }
    if (g.currentChar() === an) {
      f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0);
    }
    return v;
  }
  function Re(g) {
    return g !== hc && g !== st;
  }
  function ne(g) {
    A(g);
    p(g, "'");
    let v = "";
    let N = "";
    while ((v = S(g, Re))) {
      if (v === "\\") {
        N += F(g);
      } else {
        N += v;
      }
    }
    const R = g.currentChar();
    if (R === st || R === an) {
      f(Ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0);
      if (R === st) {
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
        f(Ee.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, v);
        return "";
    }
  }
  function Y(g, v, N) {
    p(g, v);
    let R = "";
    for (let Z = 0; Z < N; Z++) {
      const H = ce(g);
      if (!H) {
        f(
          Ee.INVALID_UNICODE_ESCAPE_SEQUENCE,
          i(),
          0,
          `\\${v}${R}${g.currentChar()}`
        );
        break;
      }
      R += H;
    }
    return `\\${v}${R}`;
  }
  function X(g) {
    return g !== "{" && g !== "}" && g !== Ut && g !== st;
  }
  function te(g) {
    A(g);
    let v = "";
    let N = "";
    while ((v = S(g, X))) {
      N += v;
    }
    return N;
  }
  function ye(g) {
    let v = "";
    let N = "";
    while ((v = D(g))) {
      N += v;
    }
    return N;
  }
  function _(g) {
    const v = (N) => {
      const R = g.currentChar();
      if (
        R === "{" ||
        R === "@" ||
        R === "|" ||
        R === "(" ||
        R === ")" ||
        !R ||
        R === Ut
      ) {
        return N;
      } else {
        N += R;
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
          f(Ee.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0);
        }
        g.next();
        N = d(v, 2, "{");
        A(g);
        v.braceNest++;
        return N;
      case "}":
        if (v.braceNest > 0 && v.currentType === 2) {
          f(Ee.EMPTY_PLACEHOLDER, i(), 0);
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
          f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0);
        }
        N = V(g, v) || h(v);
        v.braceNest = 0;
        return N;
      default: {
        let Z = true;
        let H = true;
        let T = true;
        if (O(g)) {
          if (v.braceNest > 0) {
            f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0);
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
          f(Ee.UNTERMINATED_CLOSING_BRACE, i(), 0);
          v.braceNest = 0;
          return U(g, v);
        }
        if ((Z = C(g, v))) {
          N = d(v, 4, ge(g));
          A(g);
          return N;
        }
        if ((H = y(g, v))) {
          N = d(v, 5, Ie(g));
          A(g);
          return N;
        }
        if ((T = x(g, v))) {
          N = d(v, 6, ne(g));
          A(g);
          return N;
        }
        if (!Z && !H && !T) {
          N = d(v, 12, te(g));
          f(Ee.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, N.value);
          A(g);
          return N;
        }
        break;
      }
    }
    return N;
  }
  function V(g, v) {
    const { currentType: N } = v;
    let R = null;
    const Z = g.currentChar();
    if ((N === 7 || N === 8 || N === 11 || N === 9) && (Z === st || Z === Ut)) {
      f(Ee.INVALID_LINKED_FORMAT, i(), 0);
    }
    switch (Z) {
      case "@":
        g.next();
        R = d(v, 7, "@");
        v.inLinked = true;
        return R;
      case ".":
        A(g);
        g.next();
        return d(v, 8, ".");
      case ":":
        A(g);
        g.next();
        return d(v, 9, ":");
      default:
        if (O(g)) {
          R = d(v, 1, w(g));
          v.braceNest = 0;
          v.inLinked = false;
          return R;
        } else if (L(g, v) || W(g, v)) {
          A(g);
          return V(g, v);
        } else if (I(g, v)) {
          A(g);
          return d(v, 11, ye(g));
        } else if (k(g, v)) {
          A(g);
          if (Z === "{") {
            return P(g, v) || R;
          } else {
            return d(v, 10, _(g));
          }
        } else {
          if (N === 7) {
            f(Ee.INVALID_LINKED_FORMAT, i(), 0);
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
      return V(g, v) || h(v);
    }
    switch (g.currentChar()) {
      case "{":
        return P(g, v) || h(v);
      case "}":
        f(Ee.UNBALANCED_CLOSING_BRACE, i(), 0);
        g.next();
        return d(v, 3, "}");
      case "@":
        return V(g, v) || h(v);
      default: {
        if (O(g)) {
          N = d(v, 1, w(g));
          v.braceNest = 0;
          v.inLinked = false;
          return N;
        }
        if (q(g)) {
          return d(v, 0, z(g));
        }
        break;
      }
    }
    return N;
  }
  function B() {
    const { currentType: g, offset: v, startLoc: N, endLoc: R } = l;
    l.lastType = g;
    l.lastOffset = v;
    l.lastStartLoc = N;
    l.lastEndLoc = R;
    l.offset = s();
    l.startLoc = i();
    if (r.currentChar() === an) {
      return d(l, 13);
    } else {
      return U(r, l);
    }
  }
  return {
    nextToken: B,
    currentOffset: s,
    currentPosition: i,
    context: c,
  };
}
const oy = "parser";
const ay = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ly(e, t, n) {
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
function cy(e = {}) {
  const t = e.location !== false;
  const { onError: n } = e;
  function r(b, m, C, y, ...x) {
    const L = b.currentPosition();
    L.offset += y;
    L.column += y;
    if (n) {
      const I = t ? Uo(C, L) : null;
      const W = Ai(m, I, {
        domain: oy,
        args: x,
      });
      n(W);
    }
  }
  function s(b, m, C) {
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
  function i(b, m, C, y) {
    if (t) {
      b.end = m;
      if (b.loc) {
        b.loc.end = C;
      }
    }
  }
  function o(b, m) {
    const C = b.context();
    const y = s(3, C.offset, C.startLoc);
    y.value = m;
    i(y, b.currentOffset(), b.currentPosition());
    return y;
  }
  function a(b, m) {
    const C = b.context();
    const { lastOffset: y, lastStartLoc: x } = C;
    const L = s(5, y, x);
    L.index = parseInt(m, 10);
    b.nextToken();
    i(L, b.currentOffset(), b.currentPosition());
    return L;
  }
  function l(b, m) {
    const C = b.context();
    const { lastOffset: y, lastStartLoc: x } = C;
    const L = s(4, y, x);
    L.key = m;
    b.nextToken();
    i(L, b.currentOffset(), b.currentPosition());
    return L;
  }
  function c(b, m) {
    const C = b.context();
    const { lastOffset: y, lastStartLoc: x } = C;
    const L = s(9, y, x);
    L.value = m.replace(ay, ly);
    b.nextToken();
    i(L, b.currentOffset(), b.currentPosition());
    return L;
  }
  function u(b) {
    const m = b.nextToken();
    const C = b.context();
    const { lastOffset: y, lastStartLoc: x } = C;
    const L = s(8, y, x);
    if (m.type !== 11) {
      r(b, Ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, C.lastStartLoc, 0);
      L.value = "";
      i(L, y, x);
      return {
        nextConsumeToken: m,
        node: L,
      };
    } else {
      if (m.value == null) {
        r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Dt(m));
      }
      L.value = m.value || "";
      i(L, b.currentOffset(), b.currentPosition());
      return {
        node: L,
      };
    }
  }
  function f(b, m) {
    const C = b.context();
    const y = s(7, C.offset, C.startLoc);
    y.value = m;
    i(y, b.currentOffset(), b.currentPosition());
    return y;
  }
  function d(b) {
    const m = b.context();
    const C = s(6, m.offset, m.startLoc);
    let y = b.nextToken();
    if (y.type === 8) {
      const x = u(b);
      C.modifier = x.node;
      y = x.nextConsumeToken || b.nextToken();
    }
    if (y.type !== 9) {
      r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(y));
    }
    y = b.nextToken();
    if (y.type === 2) {
      y = b.nextToken();
    }
    switch (y.type) {
      case 10:
        if (y.value == null) {
          r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(y));
        }
        C.key = f(b, y.value || "");
        break;
      case 4:
        if (y.value == null) {
          r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(y));
        }
        C.key = l(b, y.value || "");
        break;
      case 5:
        if (y.value == null) {
          r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(y));
        }
        C.key = a(b, y.value || "");
        break;
      case 6:
        if (y.value == null) {
          r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(y));
        }
        C.key = c(b, y.value || "");
        break;
      default: {
        r(b, Ee.UNEXPECTED_EMPTY_LINKED_KEY, m.lastStartLoc, 0);
        const x = b.context();
        const L = s(7, x.offset, x.startLoc);
        L.value = "";
        i(L, x.offset, x.startLoc);
        C.key = L;
        i(C, x.offset, x.startLoc);
        return {
          nextConsumeToken: y,
          node: C,
        };
      }
    }
    i(C, b.currentOffset(), b.currentPosition());
    return {
      node: C,
    };
  }
  function h(b) {
    const m = b.context();
    const C = m.currentType === 1 ? b.currentOffset() : m.offset;
    const y = m.currentType === 1 ? m.endLoc : m.startLoc;
    const x = s(2, C, y);
    x.items = [];
    let L = null;
    do {
      const k = L || b.nextToken();
      L = null;
      switch (k.type) {
        case 0:
          if (k.value == null) {
            r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(k));
          }
          x.items.push(o(b, k.value || ""));
          break;
        case 5:
          if (k.value == null) {
            r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(k));
          }
          x.items.push(a(b, k.value || ""));
          break;
        case 4:
          if (k.value == null) {
            r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(k));
          }
          x.items.push(l(b, k.value || ""));
          break;
        case 6:
          if (k.value == null) {
            r(b, Ee.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, Dt(k));
          }
          x.items.push(c(b, k.value || ""));
          break;
        case 7: {
          const O = d(b);
          x.items.push(O.node);
          L = O.nextConsumeToken || null;
          break;
        }
      }
    } while (m.currentType !== 13 && m.currentType !== 1);
    const I = m.currentType === 1 ? m.lastOffset : b.currentOffset();
    const W = m.currentType === 1 ? m.lastEndLoc : b.currentPosition();
    i(x, I, W);
    return x;
  }
  function p(b, m, C, y) {
    const x = b.context();
    let L = y.items.length === 0;
    const I = s(1, m, C);
    I.cases = [];
    I.cases.push(y);
    do {
      const W = h(b);
      L ||= W.items.length === 0;
      I.cases.push(W);
    } while (x.currentType !== 13);
    if (L) {
      r(b, Ee.MUST_HAVE_MESSAGES_IN_PLURAL, C, 0);
    }
    i(I, b.currentOffset(), b.currentPosition());
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
    const m = iy(b, Xe({}, e));
    const C = m.context();
    const y = s(0, C.offset, C.startLoc);
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
        Ee.UNEXPECTED_LEXICAL_ANALYSIS,
        C.lastStartLoc,
        0,
        b[C.offset] || ""
      );
    }
    i(y, m.currentOffset(), m.currentPosition());
    return y;
  }
  return {
    parse: A,
  };
}
function Dt(e) {
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
function uy(e, t = {}) {
  const n = {
    ast: e,
    helpers: new Set(),
  };
  return {
    context: () => n,
    helper: (i) => {
      n.helpers.add(i);
      return i;
    },
  };
}
function mc(e, t) {
  for (let n = 0; n < e.length; n++) {
    $a(e[n], t);
  }
}
function $a(e, t) {
  switch (e.type) {
    case 1:
      mc(e.cases, t);
      t.helper("plural");
      break;
    case 2:
      mc(e.items, t);
      break;
    case 6: {
      $a(e.key, t);
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
function fy(e, t = {}) {
  const n = uy(e);
  n.helper("normalize");
  if (e.body) {
    $a(e.body, n);
  }
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function dy(e) {
  const t = e.body;
  if (t.type === 2) {
    gc(t);
  } else {
    t.cases.forEach((n) => gc(n));
  }
  return e;
}
function gc(e) {
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
      e.static = Da(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        if (r.type === 3 || r.type === 9) {
          delete r.value;
        }
      }
    }
  }
}
function nr(e) {
  e.t = e.type;
  switch (e.type) {
    case 0: {
      const t = e;
      nr(t.body);
      t.b = t.body;
      delete t.body;
      break;
    }
    case 1: {
      const t = e;
      const n = t.cases;
      for (let r = 0; r < n.length; r++) {
        nr(n[r]);
      }
      t.c = n;
      delete t.cases;
      break;
    }
    case 2: {
      const t = e;
      const n = t.items;
      for (let r = 0; r < n.length; r++) {
        nr(n[r]);
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
      nr(t.key);
      t.k = t.key;
      delete t.key;
      if (t.modifier) {
        nr(t.modifier);
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
function hy(e, t) {
  const { filename: n, breakLineCode: r, needIndent: s } = t;
  const i = t.location !== false;
  const o = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: undefined,
    breakLineCode: r,
    needIndent: s,
    indentLevel: 0,
  };
  if (i && e.loc) {
    o.source = e.loc.source;
  }
  const a = () => o;
  function l(E, A) {
    o.code += E;
  }
  function c(E, A = true) {
    const b = A ? r : "";
    l(s ? b + "  ".repeat(E) : b);
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
function my(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`);
  hr(e, t.key);
  if (t.modifier) {
    e.push(", ");
    hr(e, t.modifier);
    e.push(", _type");
  } else {
    e.push(", undefined, _type");
  }
  e.push(")");
}
function gy(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n("normalize")}([`);
  e.indent(r());
  const s = t.items.length;
  for (let i = 0; i < s && (hr(e, t.items[i]), i !== s - 1); i++) {
    e.push(", ");
  }
  e.deindent(r());
  e.push("])");
}
function py(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`);
    e.indent(r());
    const s = t.cases.length;
    for (let i = 0; i < s && (hr(e, t.cases[i]), i !== s - 1); i++) {
      e.push(", ");
    }
    e.deindent(r());
    e.push("])");
  }
}
function vy(e, t) {
  if (t.body) {
    hr(e, t.body);
  } else {
    e.push("null");
  }
}
function hr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      vy(e, t);
      break;
    case 1:
      py(e, t);
      break;
    case 2:
      gy(e, t);
      break;
    case 6:
      my(e, t);
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
const yy = (e, t = {}) => {
  const n = se(t.mode) ? t.mode : "normal";
  const r = se(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s =
    t.breakLineCode ??
    (n === "arrow"
      ? ";"
      : `
`);
  const i = t.needIndent ? t.needIndent : n !== "arrow";
  const o = e.helpers || [];
  const a = hy(e, {
    filename: r,
    breakLineCode: s,
    needIndent: i,
  });
  a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {");
  a.indent(i);
  if (o.length > 0) {
    a.push(
      `const { ${Da(
        o.map((u) => `${u}: _${u}`),
        ", "
      )} } = ctx`
    );
    a.newline();
  }
  a.push("return ");
  hr(a, e);
  a.deindent(i);
  a.push("}");
  delete e.helpers;
  const { code: l, map: c } = a.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : undefined,
  };
};
function by(e, t = {}) {
  const n = Xe({}, t);
  const r = !!n.jit;
  const s = !!n.minify;
  const i = n.optimize == null ? true : n.optimize;
  const a = cy(n).parse(e);
  if (r) {
    if (i) {
      dy(a);
    }
    if (s) {
      nr(a);
    }
    return {
      ast: a,
      code: "",
    };
  } else {
    fy(a, n);
    return yy(a, n);
  }
}
/*!
 * core-base v11.1.2
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function to(e) {
  return (n) => _y(n, e);
}
function _y(e, t) {
  const n = Cy(t);
  if (n == null) {
    throw as(0);
  }
  if (ja(n) === 1) {
    const i = Sy(n);
    return e.plural(i.reduce((o, a) => [...o, pc(e, a)], []));
  } else {
    return pc(e, n);
  }
}
const wy = ["b", "body"];
function Cy(e) {
  return Sn(e, wy);
}
const Ey = ["c", "cases"];
function Sy(e) {
  return Sn(e, Ey, []);
}
function pc(e, t) {
  const n = xy(t);
  if (n != null) {
    if (e.type === "text") {
      return n;
    } else {
      return e.normalize([n]);
    }
  }
  {
    const r = Ny(t).reduce((s, i) => [...s, Ho(e, i)], []);
    return e.normalize(r);
  }
}
const ky = ["s", "static"];
function xy(e) {
  return Sn(e, ky);
}
const Ty = ["i", "items"];
function Ny(e) {
  return Sn(e, Ty, []);
}
function Ho(e, t) {
  const n = ja(t);
  switch (n) {
    case 3:
      return Es(t, n);
    case 9:
      return Es(t, n);
    case 4: {
      const r = t;
      if (At(r, "k") && r.k) {
        return e.interpolate(e.named(r.k));
      }
      if (At(r, "key") && r.key) {
        return e.interpolate(e.named(r.key));
      }
      throw as(n);
    }
    case 5: {
      const r = t;
      if (At(r, "i") && De(r.i)) {
        return e.interpolate(e.list(r.i));
      }
      if (At(r, "index") && De(r.index)) {
        return e.interpolate(e.list(r.index));
      }
      throw as(n);
    }
    case 6: {
      const r = t;
      const s = Ly(r);
      const i = Ry(r);
      return e.linked(Ho(e, i), s ? Ho(e, s) : undefined, e.type);
    }
    case 7:
      return Es(t, n);
    case 8:
      return Es(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Ay = ["t", "type"];
function ja(e) {
  return Sn(e, Ay);
}
const Iy = ["v", "value"];
function Es(e, t) {
  const n = Sn(e, Iy);
  if (n) {
    return n;
  }
  throw as(t);
}
const Py = ["m", "modifier"];
function Ly(e) {
  return Sn(e, Py);
}
const Oy = ["k", "key"];
function Ry(e) {
  const t = Sn(e, Oy);
  if (t) {
    return t;
  }
  throw as(6);
}
function Sn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (At(e, s) && e[s] != null) {
      return e[s];
    }
  }
  return n;
}
function as(e) {
  return new Error(`unhandled node type: ${e}`);
}
const My = (e) => e;
let Ss = xe();
function mr(e) {
  return _e(e) && ja(e) === 0 && (At(e, "b") || At(e, "body"));
}
function Fy(e, t = {}) {
  let n = false;
  const r = t.onError || Jv;
  t.onError = (s) => {
    n = true;
    r(s);
  };
  return {
    ...by(e, t),
    detectError: n,
  };
}
function Dy(e, t) {
  if (se(e)) {
    if (Le(t.warnHtmlMessage)) {
      t.warnHtmlMessage;
    }
    const r = (t.onCacheKey || My)(e);
    const s = Ss[r];
    if (s) {
      return s;
    }
    const { ast: i, detectError: o } = Fy(e, {
      ...t,
      location: false,
      jit: true,
    });
    const a = to(i);
    if (o) {
      return a;
    } else {
      return (Ss[r] = a);
    }
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Ss[n];
      return r || (Ss[n] = to(e));
    } else {
      return to(e);
    }
  }
}
const Gt = {
  INVALID_ARGUMENT: Yv,
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23,
};
const $y = 24;
function Qt(e) {
  return Ai(e, null, undefined);
}
function qa(e, t) {
  if (t.locale != null) {
    return vc(t.locale);
  } else {
    return vc(e.locale);
  }
}
let no;
function vc(e) {
  if (se(e)) {
    return e;
  }
  if (Pe(e)) {
    if (e.resolvedOnce && no != null) {
      return no;
    }
    if (e.constructor.name === "Function") {
      const t = e();
      if (Kv(t)) {
        throw Qt(Gt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      }
      return (no = t);
    } else {
      throw Qt(Gt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
    }
  } else {
    throw Qt(Gt.NOT_SUPPORT_LOCALE_TYPE);
  }
}
function jy(e, t, n) {
  return [
    ...new Set([
      n,
      ...(We(t) ? t : _e(t) ? Object.keys(t) : se(t) ? [t] : [n]),
    ]),
  ];
}
function bd(e, t, n) {
  const r = se(n) ? n : li;
  const s = e;
  s.__localeChainCache ||= new Map();
  let i = s.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let o = [n];
    while (We(o)) {
      o = yc(i, o, t);
    }
    const a = We(t) || !ve(t) ? t : t.default ? t.default : null;
    o = se(a) ? [a] : a;
    if (We(o)) {
      yc(i, o, false);
    }
    s.__localeChainCache.set(r, i);
  }
  return i;
}
function yc(e, t, n) {
  let r = true;
  for (let s = 0; s < t.length && Le(r); s++) {
    const i = t[s];
    if (se(i)) {
      r = qy(e, t[s], n);
    }
  }
  return r;
}
function qy(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const i = s.join("-");
    r = Vy(e, i, n);
    s.splice(-1, 1);
  } while (s.length && r === true);
  return r;
}
function Vy(e, t, n) {
  let r = false;
  if (!e.includes(t) && ((r = true), t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s);
    if ((We(n) || ve(n)) && n[s]) {
      r = n[s];
    }
  }
  return r;
}
const kn = [];
kn[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7],
};
kn[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7],
};
kn[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0],
};
kn[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1],
};
kn[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0],
};
kn[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0],
};
kn[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0],
};
const Wy = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function By(e) {
  return Wy.test(e);
}
function Uy(e) {
  const t = e.charCodeAt(0);
  const n = e.charCodeAt(e.length - 1);
  if (t === n && (t === 34 || t === 39)) {
    return e.slice(1, -1);
  } else {
    return e;
  }
}
function Hy(e) {
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
function zy(e) {
  const t = e.trim();
  if (e.charAt(0) === "0" && isNaN(parseInt(e))) {
    return false;
  } else if (By(t)) {
    return Uy(t);
  } else {
    return "*" + t;
  }
}
function Ky(e) {
  const t = [];
  let n = -1;
  let r = 0;
  let s = 0;
  let i;
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
    s++;
  };
  d[3] = () => {
    if (s > 0) {
      s--;
      r = 4;
      d[0]();
    } else {
      s = 0;
      if (o === undefined || ((o = zy(o)), o === false)) {
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
    i = e[n];
    if (i !== "\\" || !h()) {
      l = Hy(i);
      f = kn[r];
      c = f[l] || f.l || 8;
      if (
        c === 8 ||
        ((r = c[0]),
        c[1] !== undefined && ((u = d[c[1]]), u && ((a = i), u() === false)))
      ) {
        return;
      }
      if (r === 7) {
        return t;
      }
    }
  }
}
const bc = new Map();
function Gy(e, t) {
  if (_e(e)) {
    return e[t];
  } else {
    return null;
  }
}
function Qy(e, t) {
  if (!_e(e)) {
    return null;
  }
  let n = bc.get(t);
  if (!n) {
    n = Ky(t);
    if (n) {
      bc.set(t, n);
    }
  }
  if (!n) {
    return null;
  }
  const r = n.length;
  let s = e;
  let i = 0;
  while (i < r) {
    const o = s[n[i]];
    if (o === undefined || Pe(s)) {
      return null;
    }
    s = o;
    i++;
  }
  return s;
}
const Xy = "11.1.2";
const Ii = -1;
const li = "en-US";
const _c = "";
const wc = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Yy() {
  return {
    upper: (e, t) =>
      t === "text" && se(e)
        ? e.toUpperCase()
        : t === "vnode" && _e(e) && "__v_isVNode" in e
        ? e.children.toUpperCase()
        : e,
    lower: (e, t) =>
      t === "text" && se(e)
        ? e.toLowerCase()
        : t === "vnode" && _e(e) && "__v_isVNode" in e
        ? e.children.toLowerCase()
        : e,
    capitalize: (e, t) =>
      t === "text" && se(e)
        ? wc(e)
        : t === "vnode" && _e(e) && "__v_isVNode" in e
        ? wc(e.children)
        : e,
  };
}
let _d;
function Jy(e) {
  _d = e;
}
let wd;
function Zy(e) {
  wd = e;
}
let Cd;
function eb(e) {
  Cd = e;
}
let Ed = null;
const Cc = (e) => {
  Ed = e;
};
const tb = () => Ed;
let Ec = 0;
function nb(e = {}) {
  const t = Pe(e.onWarn) ? e.onWarn : Qv;
  const n = se(e.version) ? e.version : Xy;
  const r = se(e.locale) || Pe(e.locale) ? e.locale : li;
  const s = Pe(r) ? li : r;
  const i =
    We(e.fallbackLocale) ||
    ve(e.fallbackLocale) ||
    se(e.fallbackLocale) ||
    e.fallbackLocale === false
      ? e.fallbackLocale
      : s;
  const o = ve(e.messages) ? e.messages : ro(s);
  const a = ve(e.datetimeFormats) ? e.datetimeFormats : ro(s);
  const l = ve(e.numberFormats) ? e.numberFormats : ro(s);
  const c = Xe(xe(), e.modifiers, Yy());
  const u = e.pluralRules || xe();
  const f = Pe(e.missing) ? e.missing : null;
  const d = Le(e.missingWarn) || ai(e.missingWarn) ? e.missingWarn : true;
  const h = Le(e.fallbackWarn) || ai(e.fallbackWarn) ? e.fallbackWarn : true;
  const p = !!e.fallbackFormat;
  const E = !!e.unresolving;
  const A = Pe(e.postTranslation) ? e.postTranslation : null;
  const b = ve(e.processor) ? e.processor : null;
  const m = Le(e.warnHtmlMessage) ? e.warnHtmlMessage : true;
  const C = !!e.escapeParameter;
  const y = Pe(e.messageCompiler) ? e.messageCompiler : _d;
  const x = Pe(e.messageResolver) ? e.messageResolver : wd || Gy;
  const L = Pe(e.localeFallbacker) ? e.localeFallbacker : Cd || jy;
  const I = _e(e.fallbackContext) ? e.fallbackContext : undefined;
  const W = e;
  const k = _e(W.__datetimeFormatters) ? W.__datetimeFormatters : new Map();
  const O = _e(W.__numberFormatters) ? W.__numberFormatters : new Map();
  const q = _e(W.__meta) ? W.__meta : {};
  Ec++;
  const S = {
    version: n,
    cid: Ec,
    locale: r,
    fallbackLocale: i,
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
    __meta: q,
  };
  S.datetimeFormats = a;
  S.numberFormats = l;
  S.__datetimeFormatters = k;
  S.__numberFormatters = O;
  return S;
}
const ro = (e) => ({
  [e]: xe(),
});
function Va(e, t, n, r, s) {
  const { missing: i, onWarn: o } = e;
  if (i !== null) {
    const a = i(e, n, t, s);
    if (se(a)) {
      return a;
    } else {
      return t;
    }
  } else {
    return t;
  }
}
function xr(e, t, n) {
  const r = e;
  r.__localeChainCache = new Map();
  e.localeFallbacker(e, n, t);
}
function rb(e, t) {
  if (e === t) {
    return false;
  } else {
    return e.split("-")[0] === t.split("-")[0];
  }
}
function sb(e, t) {
  const n = t.indexOf(e);
  if (n === -1) {
    return false;
  }
  for (let r = n + 1; r < t.length; r++) {
    if (rb(e, t[r])) {
      return true;
    }
  }
  return false;
}
function Sc(e, ...t) {
  const {
    datetimeFormats: n,
    unresolving: r,
    fallbackLocale: s,
    onWarn: i,
    localeFallbacker: o,
  } = e;
  const { __datetimeFormatters: a } = e;
  const [l, c, u, f] = zo(...t);
  const d = Le(u.missingWarn) ? u.missingWarn : e.missingWarn;
  if (Le(u.fallbackWarn)) {
    u.fallbackWarn;
  } else {
    e.fallbackWarn;
  }
  const h = !!u.part;
  const p = qa(e, u);
  const E = o(e, s, p);
  if (!se(l) || l === "") {
    return new Intl.DateTimeFormat(p, f).format(c);
  }
  let A = {};
  let b;
  let m = null;
  const C = "datetime format";
  for (
    let L = 0;
    L < E.length && ((b = E[L]), (A = n[b] || {}), (m = A[l]), !ve(m));
    L++
  ) {
    Va(e, l, b, d, C);
  }
  if (!ve(m) || !se(b)) {
    if (r) {
      return Ii;
    } else {
      return l;
    }
  }
  let y = `${b}__${l}`;
  if (!Ni(f)) {
    y = `${y}__${JSON.stringify(f)}`;
  }
  let x = a.get(y);
  if (!x) {
    x = new Intl.DateTimeFormat(b, Xe({}, m, f));
    a.set(y, x);
  }
  if (h) {
    return x.formatToParts(c);
  } else {
    return x.format(c);
  }
}
const Sd = [
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
function zo(...e) {
  const [t, n, r, s] = e;
  const i = xe();
  let o = xe();
  let a;
  if (se(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l) {
      throw Qt(Gt.INVALID_ISO_DATE_ARGUMENT);
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
      throw Qt(Gt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Uv(t)) {
    if (isNaN(t.getTime())) {
      throw Qt(Gt.INVALID_DATE_ARGUMENT);
    }
    a = t;
  } else if (De(t)) {
    a = t;
  } else {
    throw Qt(Gt.INVALID_ARGUMENT);
  }
  if (se(n)) {
    i.key = n;
  } else if (ve(n)) {
    Object.keys(n).forEach((l) => {
      if (Sd.includes(l)) {
        o[l] = n[l];
      } else {
        i[l] = n[l];
      }
    });
  }
  if (se(r)) {
    i.locale = r;
  } else if (ve(r)) {
    o = r;
  }
  if (ve(s)) {
    o = s;
  }
  return [i.key || "", a, i, o];
}
function kc(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    if (r.__datetimeFormatters.has(i)) {
      r.__datetimeFormatters.delete(i);
    }
  }
}
function xc(e, ...t) {
  const {
    numberFormats: n,
    unresolving: r,
    fallbackLocale: s,
    onWarn: i,
    localeFallbacker: o,
  } = e;
  const { __numberFormatters: a } = e;
  const [l, c, u, f] = Ko(...t);
  const d = Le(u.missingWarn) ? u.missingWarn : e.missingWarn;
  if (Le(u.fallbackWarn)) {
    u.fallbackWarn;
  } else {
    e.fallbackWarn;
  }
  const h = !!u.part;
  const p = qa(e, u);
  const E = o(e, s, p);
  if (!se(l) || l === "") {
    return new Intl.NumberFormat(p, f).format(c);
  }
  let A = {};
  let b;
  let m = null;
  const C = "number format";
  for (
    let L = 0;
    L < E.length && ((b = E[L]), (A = n[b] || {}), (m = A[l]), !ve(m));
    L++
  ) {
    Va(e, l, b, d, C);
  }
  if (!ve(m) || !se(b)) {
    if (r) {
      return Ii;
    } else {
      return l;
    }
  }
  let y = `${b}__${l}`;
  if (!Ni(f)) {
    y = `${y}__${JSON.stringify(f)}`;
  }
  let x = a.get(y);
  if (!x) {
    x = new Intl.NumberFormat(b, Xe({}, m, f));
    a.set(y, x);
  }
  if (h) {
    return x.formatToParts(c);
  } else {
    return x.format(c);
  }
}
const kd = [
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
function Ko(...e) {
  const [t, n, r, s] = e;
  const i = xe();
  let o = xe();
  if (!De(t)) {
    throw Qt(Gt.INVALID_ARGUMENT);
  }
  const a = t;
  if (se(n)) {
    i.key = n;
  } else if (ve(n)) {
    Object.keys(n).forEach((l) => {
      if (kd.includes(l)) {
        o[l] = n[l];
      } else {
        i[l] = n[l];
      }
    });
  }
  if (se(r)) {
    i.locale = r;
  } else if (ve(r)) {
    o = r;
  }
  if (ve(s)) {
    o = s;
  }
  return [i.key || "", a, i, o];
}
function Tc(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    if (r.__numberFormatters.has(i)) {
      r.__numberFormatters.delete(i);
    }
  }
}
const ib = (e) => e;
const ob = (e) => "";
const ab = "text";
const lb = (e) => (e.length === 0 ? "" : Da(e));
const cb = Gv;
function Nc(e, t) {
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
function ub(e) {
  const t = De(e.pluralIndex) ? e.pluralIndex : -1;
  if (e.named && (De(e.named.count) || De(e.named.n))) {
    if (De(e.named.count)) {
      return e.named.count;
    } else if (De(e.named.n)) {
      return e.named.n;
    } else {
      return t;
    }
  } else {
    return t;
  }
}
function fb(e, t) {
  t.count ||= e;
  t.n ||= e;
}
function db(e = {}) {
  const t = e.locale;
  const n = ub(e);
  const r =
    _e(e.pluralRules) && se(t) && Pe(e.pluralRules[t]) ? e.pluralRules[t] : Nc;
  const s = _e(e.pluralRules) && se(t) && Pe(e.pluralRules[t]) ? Nc : undefined;
  const i = (b) => b[r(n, b.length, s)];
  const o = e.list || [];
  const a = (b) => o[b];
  const l = e.named || xe();
  if (De(e.pluralIndex)) {
    fb(n, l);
  }
  const c = (b) => l[b];
  function u(b, m) {
    const C = Pe(e.messages)
      ? e.messages(b, !!m)
      : _e(e.messages)
      ? e.messages[b]
      : false;
    return C || (e.parent ? e.parent.message(b) : ob);
  }
  const f = (b) => (e.modifiers ? e.modifiers[b] : ib);
  const d =
    ve(e.processor) && Pe(e.processor.normalize) ? e.processor.normalize : lb;
  const h =
    ve(e.processor) && Pe(e.processor.interpolate)
      ? e.processor.interpolate
      : cb;
  const p = ve(e.processor) && se(e.processor.type) ? e.processor.type : ab;
  const A = {
    list: a,
    named: c,
    plural: i,
    linked: (b, ...m) => {
      const [C, y] = m;
      let x = "text";
      let L = "";
      if (m.length === 1) {
        if (_e(C)) {
          L = C.modifier || L;
          x = C.type || x;
        } else if (se(C)) {
          L = C || L;
        }
      } else if (m.length === 2) {
        if (se(C)) {
          L = C || L;
        }
        if (se(y)) {
          x = y || x;
        }
      }
      const I = u(b, true)(A);
      const W = x === "vnode" && We(I) && L ? I[0] : I;
      if (L) {
        return f(L)(W, x);
      } else {
        return W;
      }
    },
    message: u,
    type: p,
    interpolate: h,
    normalize: d,
    values: Xe(xe(), o, l),
  };
  return A;
}
const Ac = () => "";
const Yt = (e) => Pe(e);
function Ic(e, ...t) {
  const {
    fallbackFormat: n,
    postTranslation: r,
    unresolving: s,
    messageCompiler: i,
    fallbackLocale: o,
    messages: a,
  } = e;
  const [l, c] = Go(...t);
  const u = Le(c.missingWarn) ? c.missingWarn : e.missingWarn;
  const f = Le(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const d = Le(c.escapeParameter) ? c.escapeParameter : e.escapeParameter;
  const h = !!c.resolvedMessage;
  const p =
    se(c.default) || Le(c.default)
      ? Le(c.default)
        ? i
          ? l
          : () => l
        : c.default
      : n
      ? i
        ? l
        : () => l
      : null;
  const E = n || (p != null && (se(p) || Pe(p)));
  const A = qa(e, c);
  if (d) {
    hb(c);
  }
  let [b, m, C] = h ? [l, A, a[A] || xe()] : xd(e, l, A, o, f, u);
  let y = b;
  let x = l;
  if (!h && !se(y) && !mr(y) && !Yt(y) && E) {
    y = p;
    x = y;
  }
  if (!h && ((!se(y) && !mr(y) && !Yt(y)) || !se(m))) {
    if (s) {
      return Ii;
    } else {
      return l;
    }
  }
  let L = false;
  const I = () => {
    L = true;
  };
  const W = Yt(y) ? y : Td(e, l, m, y, x, I);
  if (L) {
    return y;
  }
  const k = pb(e, m, C, c);
  const O = db(k);
  const q = mb(e, W, O);
  if (r) {
    return r(q, l);
  } else {
    return q;
  }
}
function hb(e) {
  if (We(e.list)) {
    e.list = e.list.map((t) => (se(t) ? dc(t) : t));
  } else if (_e(e.named)) {
    Object.keys(e.named).forEach((t) => {
      if (se(e.named[t])) {
        e.named[t] = dc(e.named[t]);
      }
    });
  }
}
function xd(e, t, n, r, s, i) {
  const { messages: o, onWarn: a, messageResolver: l, localeFallbacker: c } = e;
  const u = c(e, r, n);
  let f = xe();
  let d;
  let h = null;
  const p = "translate";
  for (
    let E = 0;
    E < u.length &&
    ((d = u[E]),
    (f = o[d] || xe()),
    (h = l(f, t)) === null && (h = f[t]),
    !se(h) && !mr(h) && !Yt(h));
    E++
  ) {
    if (!sb(d, u)) {
      const A = Va(e, t, d, i, p);
      if (A !== t) {
        h = A;
      }
    }
  }
  return [h, d, f];
}
function Td(e, t, n, r, s, i) {
  const { messageCompiler: o, warnHtmlMessage: a } = e;
  if (Yt(r)) {
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
  const l = o(r, gb(e, n, s, r, a, i));
  l.locale = n;
  l.key = t;
  l.source = r;
  return l;
}
function mb(e, t, n) {
  return t(n);
}
function Go(...e) {
  const [t, n, r] = e;
  const s = xe();
  if (!se(t) && !De(t) && !Yt(t) && !mr(t)) {
    throw Qt(Gt.INVALID_ARGUMENT);
  }
  const i = De(t) ? String(t) : (Yt(t), t);
  if (De(n)) {
    s.plural = n;
  } else if (se(n)) {
    s.default = n;
  } else if (ve(n) && !Ni(n)) {
    s.named = n;
  } else if (We(n)) {
    s.list = n;
  }
  if (De(r)) {
    s.plural = r;
  } else if (se(r)) {
    s.default = r;
  } else if (ve(r)) {
    Xe(s, r);
  }
  return [i, s];
}
function gb(e, t, n, r, s, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      if (i) {
        i(o);
      }
      throw o;
    },
    onCacheKey: (o) => Wv(t, n, o),
  };
}
function pb(e, t, n, r) {
  const {
    modifiers: s,
    pluralRules: i,
    messageResolver: o,
    fallbackLocale: a,
    fallbackWarn: l,
    missingWarn: c,
    fallbackContext: u,
  } = e;
  const d = {
    locale: t,
    modifiers: s,
    pluralRules: i,
    messages: (h, p) => {
      let E = o(n, h);
      if (E == null && (u || p)) {
        const [, , A] = xd(u || e, h, t, a, l, c);
        E = o(A, h);
      }
      if (se(E) || mr(E)) {
        let A = false;
        const m = Td(e, h, t, E, h, () => {
          A = true;
        });
        if (A) {
          return Ac;
        } else {
          return m;
        }
      } else if (Yt(E)) {
        return E;
      } else {
        return Ac;
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
  if (De(r.plural)) {
    d.pluralIndex = r.plural;
  }
  return d;
}
/*!
 * vue-i18n v11.1.2
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
const vb = "11.1.2";
const Et = {
  UNEXPECTED_RETURN_TYPE: $y,
  INVALID_ARGUMENT: 25,
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  UNEXPECTED_ERROR: 32,
};
function Mt(e, ...t) {
  return Ai(e, null, undefined);
}
const Qo = En("__translateVNode");
const Xo = En("__datetimeParts");
const Yo = En("__numberParts");
const yb = En("__setPluralRules");
const bb = En("__injectWithOption");
const Jo = En("__dispose");
function ls(e) {
  if (!_e(e)) {
    return e;
  }
  for (const t in e) {
    if (At(e, t)) {
      if (!t.includes(".")) {
        if (_e(e[t])) {
          ls(e[t]);
        }
      } else {
        const n = t.split(".");
        const r = n.length - 1;
        let s = e;
        let i = false;
        for (let o = 0; o < r; o++) {
          if (n[o] === "__proto__") {
            throw new Error(`unsafe key: ${n[o]}`);
          }
          if (!(n[o] in s)) {
            s[n[o]] = xe();
          }
          if (!_e(s[n[o]])) {
            i = true;
            break;
          }
          s = s[n[o]];
        }
        if (!i) {
          s[n[r]] = e[t];
          delete e[t];
        }
        if (_e(s[n[r]])) {
          ls(s[n[r]]);
        }
      }
    }
  }
  return e;
}
function Nd(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: i } = t;
  const o = ve(n)
    ? n
    : We(r)
    ? xe()
    : {
        [e]: xe(),
      };
  if (We(r)) {
    r.forEach((a) => {
      if ("locale" in a && "resource" in a) {
        const { locale: l, resource: c } = a;
        if (l) {
          o[l] = o[l] || xe();
          Ds(c, o[l]);
        } else {
          Ds(c, o);
        }
      } else if (se(a)) {
        Ds(JSON.parse(a), o);
      }
    });
  }
  if (s == null && i) {
    for (const a in o) {
      if (At(o, a)) {
        ls(o[a]);
      }
    }
  }
  return o;
}
function _b(e) {
  return e.type;
}
function wb(e, t, n) {
  let r = _e(t.messages) ? t.messages : xe();
  if ("__i18nGlobal" in n) {
    r = Nd(e.locale.value, {
      messages: r,
      __i18n: n.__i18nGlobal,
    });
  }
  const s = Object.keys(r);
  if (s.length) {
    s.forEach((i) => {
      e.mergeLocaleMessage(i, r[i]);
    });
  }
  {
    if (_e(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      if (i.length) {
        i.forEach((o) => {
          e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
        });
      }
    }
    if (_e(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      if (i.length) {
        i.forEach((o) => {
          e.mergeNumberFormat(o, t.numberFormats[o]);
        });
      }
    }
  }
}
function Pc(e) {
  return Qe(ds, null, e, 0);
}
const Lc = () => [];
const Cb = () => false;
let Oc = 0;
function Rc(e) {
  return (t, n, r, s) => e(n, r, Se() || undefined, s);
}
function Ad(e = {}) {
  const { __root: t, __injectWithOption: n } = e;
  const r = t === undefined;
  const s = e.flatJson;
  const i = oi ? he : Ct;
  let o = Le(e.inheritLocale) ? e.inheritLocale : true;
  const a = i(t && o ? t.locale.value : se(e.locale) ? e.locale : li);
  const l = i(
    t && o
      ? t.fallbackLocale.value
      : se(e.fallbackLocale) ||
        We(e.fallbackLocale) ||
        ve(e.fallbackLocale) ||
        e.fallbackLocale === false
      ? e.fallbackLocale
      : a.value
  );
  const c = i(Nd(a.value, e));
  const u = i(
    ve(e.datetimeFormats)
      ? e.datetimeFormats
      : {
          [a.value]: {},
        }
  );
  const f = i(
    ve(e.numberFormats)
      ? e.numberFormats
      : {
          [a.value]: {},
        }
  );
  let d = t
    ? t.missingWarn
    : Le(e.missingWarn) || ai(e.missingWarn)
    ? e.missingWarn
    : true;
  let h = t
    ? t.fallbackWarn
    : Le(e.fallbackWarn) || ai(e.fallbackWarn)
    ? e.fallbackWarn
    : true;
  let p = t ? t.fallbackRoot : Le(e.fallbackRoot) ? e.fallbackRoot : true;
  let E = !!e.fallbackFormat;
  let A = Pe(e.missing) ? e.missing : null;
  let b = Pe(e.missing) ? Rc(e.missing) : null;
  let m = Pe(e.postTranslation) ? e.postTranslation : null;
  let C = t
    ? t.warnHtmlMessage
    : Le(e.warnHtmlMessage)
    ? e.warnHtmlMessage
    : true;
  let y = !!e.escapeParameter;
  const x = t ? t.modifiers : ve(e.modifiers) ? e.modifiers : {};
  let L = e.pluralRules || (t && t.pluralRules);
  let I;
  I = (() => {
    if (r) {
      Cc(null);
    }
    const T = {
      version: vb,
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
    T.__datetimeFormatters = ve(I) ? I.__datetimeFormatters : undefined;
    T.__numberFormatters = ve(I) ? I.__numberFormatters : undefined;
    const $ = nb(T);
    if (r) {
      Cc($);
    }
    return $;
  })();
  xr(I, a.value, l.value);
  function k() {
    return [a.value, l.value, c.value, u.value, f.value];
  }
  const O = M({
    get: () => a.value,
    set: (T) => {
      I.locale = T;
      a.value = T;
    },
  });
  const q = M({
    get: () => l.value,
    set: (T) => {
      I.fallbackLocale = T;
      l.value = T;
      xr(I, a.value, T);
    },
  });
  const S = M(() => c.value);
  const G = M(() => u.value);
  const D = M(() => f.value);
  function ee() {
    if (Pe(m)) {
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
      b = Rc(T);
    }
    A = T;
    I.missing = b;
  }
  const ie = (T, $, re, ae, me, Be) => {
    k();
    let Me;
    try {
      if (!r) {
        I.fallbackContext = t ? tb() : undefined;
      }
      Me = T(I);
    } finally {
      if (!r) {
        I.fallbackContext = undefined;
      }
    }
    if (
      (re !== "translate exists" && De(Me) && Me === Ii) ||
      (re === "translate exists" && !Me)
    ) {
      const [gt, xt] = $();
      if (t && p) {
        return ae(t);
      } else {
        return me(gt);
      }
    } else {
      if (Be(Me)) {
        return Me;
      }
      throw Mt(Et.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ce(...T) {
    return ie(
      ($) => Reflect.apply(Ic, null, [$, ...T]),
      () => Go(...T),
      "translate",
      ($) => Reflect.apply($.t, $, [...T]),
      ($) => $,
      ($) => se($)
    );
  }
  function fe(...T) {
    const [$, re, ae] = T;
    if (ae && !_e(ae)) {
      throw Mt(Et.INVALID_ARGUMENT);
    }
    return ce(
      $,
      re,
      Xe(
        {
          resolvedMessage: true,
        },
        ae || {}
      )
    );
  }
  function z(...T) {
    return ie(
      ($) => Reflect.apply(Sc, null, [$, ...T]),
      () => zo(...T),
      "datetime format",
      ($) => Reflect.apply($.d, $, [...T]),
      () => _c,
      ($) => se($)
    );
  }
  function ge(...T) {
    return ie(
      ($) => Reflect.apply(xc, null, [$, ...T]),
      () => Ko(...T),
      "number format",
      ($) => Reflect.apply($.n, $, [...T]),
      () => _c,
      ($) => se($)
    );
  }
  function Ie(T) {
    return T.map(($) => (se($) || De($) || Le($) ? Pc(String($)) : $));
  }
  const ne = {
    normalize: Ie,
    interpolate: (T) => T,
    type: "vnode",
  };
  function F(...T) {
    return ie(
      ($) => {
        let re;
        const ae = $;
        try {
          ae.processor = ne;
          re = Reflect.apply(Ic, null, [ae, ...T]);
        } finally {
          ae.processor = null;
        }
        return re;
      },
      () => Go(...T),
      "translate",
      ($) => $[Qo](...T),
      ($) => [Pc($)],
      ($) => We($)
    );
  }
  function Y(...T) {
    return ie(
      ($) => Reflect.apply(xc, null, [$, ...T]),
      () => Ko(...T),
      "number format",
      ($) => $[Yo](...T),
      Lc,
      ($) => se($) || We($)
    );
  }
  function X(...T) {
    return ie(
      ($) => Reflect.apply(Sc, null, [$, ...T]),
      () => zo(...T),
      "datetime format",
      ($) => $[Xo](...T),
      Lc,
      ($) => se($) || We($)
    );
  }
  function te(T) {
    L = T;
    I.pluralRules = L;
  }
  function ye(T, $) {
    return ie(
      () => {
        if (!T) {
          return false;
        }
        const re = se($) ? $ : a.value;
        const ae = P(re);
        const me = I.messageResolver(ae, T);
        return mr(me) || Yt(me) || se(me);
      },
      () => [T],
      "translate exists",
      (re) => Reflect.apply(re.te, re, [T, $]),
      Cb,
      (re) => Le(re)
    );
  }
  function _(T) {
    let $ = null;
    const re = bd(I, l.value, a.value);
    for (let ae = 0; ae < re.length; ae++) {
      const me = c.value[re[ae]] || {};
      const Be = I.messageResolver(me, T);
      if (Be != null) {
        $ = Be;
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
  function V(T, $) {
    if (s) {
      const re = {
        [T]: $,
      };
      for (const ae in re) {
        if (At(re, ae)) {
          ls(re[ae]);
        }
      }
      $ = re[T];
    }
    c.value[T] = $;
    I.messages = c.value;
  }
  function U(T, $) {
    c.value[T] = c.value[T] || {};
    const re = {
      [T]: $,
    };
    if (s) {
      for (const ae in re) {
        if (At(re, ae)) {
          ls(re[ae]);
        }
      }
    }
    $ = re[T];
    Ds($, c.value[T]);
    I.messages = c.value;
  }
  function B(T) {
    return u.value[T] || {};
  }
  function g(T, $) {
    u.value[T] = $;
    I.datetimeFormats = u.value;
    kc(I, T, $);
  }
  function v(T, $) {
    u.value[T] = Xe(u.value[T] || {}, $);
    I.datetimeFormats = u.value;
    kc(I, T, $);
  }
  function N(T) {
    return f.value[T] || {};
  }
  function R(T, $) {
    f.value[T] = $;
    I.numberFormats = f.value;
    Tc(I, T, $);
  }
  function Z(T, $) {
    f.value[T] = Xe(f.value[T] || {}, $);
    I.numberFormats = f.value;
    Tc(I, T, $);
  }
  Oc++;
  if (t && oi) {
    de(t.locale, (T) => {
      if (o) {
        a.value = T;
        I.locale = T;
        xr(I, a.value, l.value);
      }
    });
    de(t.fallbackLocale, (T) => {
      if (o) {
        l.value = T;
        I.fallbackLocale = T;
        xr(I, a.value, l.value);
      }
    });
  }
  const H = {
    id: Oc,
    locale: O,
    fallbackLocale: q,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(T) {
      o = T;
      if (T && t) {
        a.value = t.locale.value;
        l.value = t.fallbackLocale.value;
        xr(I, a.value, l.value);
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
    t: ce,
    getLocaleMessage: P,
    setLocaleMessage: V,
    mergeLocaleMessage: U,
    getPostTranslationHandler: ee,
    setPostTranslationHandler: J,
    getMissingHandler: Q,
    setMissingHandler: K,
    [yb]: te,
  };
  H.datetimeFormats = G;
  H.numberFormats = D;
  H.rt = fe;
  H.te = ye;
  H.tm = w;
  H.d = z;
  H.n = ge;
  H.getDateTimeFormat = B;
  H.setDateTimeFormat = g;
  H.mergeDateTimeFormat = v;
  H.getNumberFormat = N;
  H.setNumberFormat = R;
  H.mergeNumberFormat = Z;
  H[bb] = n;
  H[Qo] = F;
  H[Xo] = X;
  H[Yo] = Y;
  return H;
}
const Wa = {
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
function Eb({ slots: e }, t) {
  if (t.length === 1 && t[0] === "default") {
    return (e.default ? e.default() : []).reduce(
      (r, s) => [...r, ...(s.type === tt ? s.children : [s])],
      []
    );
  } else {
    return t.reduce((n, r) => {
      const s = e[r];
      if (s) {
        n[r] = s();
      }
      return n;
    }, xe());
  }
}
function Id() {
  return tt;
}
const Sb = Un({
  name: "i18n-t",
  props: Xe(
    {
      keypath: {
        type: String,
        required: true,
      },
      plural: {
        type: [Number, String],
        validator: (e) => De(e) || !isNaN(e),
      },
    },
    Wa
  ),
  setup(e, t) {
    const { slots: n, attrs: r } = t;
    const s =
      e.i18n ||
      Pi({
        useScope: e.scope,
        __useComponent: true,
      });
    return () => {
      const i = Object.keys(n).filter((f) => f !== "_");
      const o = xe();
      if (e.locale) {
        o.locale = e.locale;
      }
      if (e.plural !== undefined) {
        o.plural = se(e.plural) ? +e.plural : e.plural;
      }
      const a = Eb(t, i);
      const l = s[Qo](e.keypath, a, o);
      const c = Xe(xe(), r);
      const u = se(e.tag) || _e(e.tag) ? e.tag : Id();
      return j(u, c, l);
    };
  },
});
const Mc = Sb;
function kb(e) {
  return We(e) && !se(e[0]);
}
function Pd(e, t, n, r) {
  const { slots: s, attrs: i } = t;
  return () => {
    const o = {
      part: true,
    };
    let a = xe();
    if (e.locale) {
      o.locale = e.locale;
    }
    if (se(e.format)) {
      o.key = e.format;
    } else if (_e(e.format)) {
      if (se(e.format.key)) {
        o.key = e.format.key;
      }
      a = Object.keys(e.format).reduce(
        (d, h) =>
          n.includes(h)
            ? Xe(xe(), d, {
                [h]: e.format[h],
              })
            : d,
        xe()
      );
    }
    const l = r(e.value, o, a);
    let c = [o.key];
    if (We(l)) {
      c = l.map((d, h) => {
        const p = s[d.type];
        const E = p
          ? p({
              [d.type]: d.value,
              index: h,
              parts: l,
            })
          : [d.value];
        if (kb(E)) {
          E[0].key = `${d.type}-${h}`;
        }
        return E;
      });
    } else if (se(l)) {
      c = [l];
    }
    const u = Xe(xe(), i);
    const f = se(e.tag) || _e(e.tag) ? e.tag : Id();
    return j(f, u, c);
  };
}
const xb = Un({
  name: "i18n-n",
  props: Xe(
    {
      value: {
        type: Number,
        required: true,
      },
      format: {
        type: [String, Object],
      },
    },
    Wa
  ),
  setup(e, t) {
    const n =
      e.i18n ||
      Pi({
        useScope: e.scope,
        __useComponent: true,
      });
    return Pd(e, t, kd, (...r) => n[Yo](...r));
  },
});
const Fc = xb;
function Tb(e, t) {
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
function Nb(e) {
  const t = (o) => {
    const { instance: a, value: l } = o;
    if (!a || !a.$) {
      throw Mt(Et.UNEXPECTED_ERROR);
    }
    const c = Tb(e, a.$);
    const u = Dc(l);
    return [Reflect.apply(c.t, c, [...$c(u)]), c];
  };
  return {
    created: (o, a) => {
      const [l, c] = t(a);
      if (oi && e.global === c) {
        o.__i18nWatcher = de(c.locale, () => {
          if (a.instance) {
            a.instance.$forceUpdate();
          }
        });
      }
      o.__composer = c;
      o.textContent = l;
    },
    unmounted: (o) => {
      if (oi && o.__i18nWatcher) {
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
        const c = Dc(a);
        o.textContent = Reflect.apply(l.t, l, [...$c(c)]);
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
function Dc(e) {
  if (se(e)) {
    return {
      path: e,
    };
  }
  if (ve(e)) {
    if (!("path" in e)) {
      throw Mt(Et.REQUIRED_VALUE, "path");
    }
    return e;
  } else {
    throw Mt(Et.INVALID_VALUE);
  }
}
function $c(e) {
  const { path: t, locale: n, args: r, choice: s, plural: i } = e;
  const o = {};
  const a = r || {};
  if (se(n)) {
    o.locale = n;
  }
  if (De(s)) {
    o.plural = s;
  }
  if (De(i)) {
    o.plural = i;
  }
  return [t, a, o];
}
function Ab(e, t, ...n) {
  const r = ve(n[0]) ? n[0] : {};
  if (Le(r.globalInstall) ? r.globalInstall : true) {
    [Mc.name, "I18nT"].forEach((i) => e.component(i, Mc));
    [Fc.name, "I18nN"].forEach((i) => e.component(i, Fc));
    [qc.name, "I18nD"].forEach((i) => e.component(i, qc));
  }
  e.directive("t", Nb(t));
}
const Ib = En("global-vue-i18n");
function YC(e = {}) {
  const t = Le(e.globalInjection) ? e.globalInjection : true;
  const n = new Map();
  const [r, s] = Pb(e);
  const i = En("");
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
      u.__VUE_I18N_SYMBOL__ = i;
      u.provide(u.__VUE_I18N_SYMBOL__, c);
      if (ve(f[0])) {
        const p = f[0];
        c.__composerExtend = p.__composerExtend;
        c.__vueI18nExtend = p.__vueI18nExtend;
      }
      let d = null;
      if (t) {
        d = jb(u, c.global);
      }
      Ab(u, c, ...f);
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
      return s;
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
function Pi(e = {}) {
  const t = Se();
  if (t == null) {
    throw Mt(Et.MUST_BE_CALL_SETUP_TOP);
  }
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  ) {
    throw Mt(Et.NOT_INSTALLED);
  }
  const n = Lb(t);
  const r = Rb(n);
  const s = _b(t);
  const i = Ob(e, s);
  if (i === "global") {
    wb(r, e, s);
    return r;
  }
  if (i === "parent") {
    let l = Mb(n, t, e.__useComponent);
    if (l == null) {
      l = r;
    }
    return l;
  }
  const o = n;
  let a = o.__getInstance(t);
  if (a == null) {
    const l = Xe({}, e);
    if ("__i18n" in s) {
      l.__i18n = s.__i18n;
    }
    if (r) {
      l.__root = r;
    }
    a = Ad(l);
    if (o.__composerExtend) {
      a[Jo] = o.__composerExtend(a);
    }
    Db(o, t, a);
    o.__setInstance(t, a);
  }
  return a;
}
function Pb(e, t) {
  const n = va();
  const r = n.run(() => Ad(e));
  if (r == null) {
    throw Mt(Et.UNEXPECTED_ERROR);
  }
  return [n, r];
}
function Lb(e) {
  const t = lt(e.isCE ? Ib : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t) {
    throw Mt(e.isCE ? Et.NOT_INSTALLED_WITH_PROVIDE : Et.UNEXPECTED_ERROR);
  }
  return t;
}
function Ob(e, t) {
  if (Ni(e)) {
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
function Rb(e) {
  if (e.mode === "composition") {
    return e.global;
  } else {
    return e.global.__composer;
  }
}
function Mb(e, t, n = false) {
  let r = null;
  const s = t.root;
  let i = Fb(t, n);
  while (i != null) {
    const o = e;
    if (e.mode === "composition") {
      r = o.__getInstance(i);
    }
    if (r != null || s === i) {
      break;
    }
    i = i.parent;
  }
  return r;
}
function Fb(e, t = false) {
  if (e == null) {
    return null;
  } else {
    return (t && e.vnode.ctx) || e.parent;
  }
}
function Db(e, t, n) {
  St(() => {}, t);
  Ci(() => {
    const r = n;
    e.__deleteInstance(t);
    const s = r[Jo];
    if (s) {
      s();
      delete r[Jo];
    }
  }, t);
}
const $b = ["locale", "fallbackLocale", "availableLocales"];
const jc = ["t", "rt", "d", "n", "tm", "te"];
function jb(e, t) {
  const n = Object.create(null);
  $b.forEach((s) => {
    const i = Object.getOwnPropertyDescriptor(t, s);
    if (!i) {
      throw Mt(Et.UNEXPECTED_ERROR);
    }
    const o = Ae(i.value)
      ? {
          get() {
            return i.value.value;
          },
          set(a) {
            i.value.value = a;
          },
        }
      : {
          get() {
            return i.get && i.get();
          },
        };
    Object.defineProperty(n, s, o);
  });
  e.config.globalProperties.$i18n = n;
  jc.forEach((s) => {
    const i = Object.getOwnPropertyDescriptor(t, s);
    if (!i || !i.value) {
      throw Mt(Et.UNEXPECTED_ERROR);
    }
    Object.defineProperty(e.config.globalProperties, `$${s}`, i);
  });
  return () => {
    delete e.config.globalProperties.$i18n;
    jc.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
const qb = Un({
  name: "i18n-d",
  props: Xe(
    {
      value: {
        type: [Number, Date],
        required: true,
      },
      format: {
        type: [String, Object],
      },
    },
    Wa
  ),
  setup(e, t) {
    const n =
      e.i18n ||
      Pi({
        useScope: e.scope,
        __useComponent: true,
      });
    return Pd(e, t, Sd, (...r) => n[Xo](...r));
  },
});
const qc = qb;
Jy(Dy);
Zy(Qy);
eb(bd);
function gr(e) {
  if (ya()) {
    Mu(e);
    return true;
  } else {
    return false;
  }
}
const so = new WeakMap();
const Vb = (...e) => {
  var t;
  const n = e[0];
  const r = (t = Se()) == null ? undefined : t.proxy;
  if (r == null && !Aa()) {
    throw new Error("injectLocal must be called in setup");
  }
  if (r && so.has(r) && n in so.get(r)) {
    return so.get(r)[n];
  } else {
    return lt(...e);
  }
};
const ci = typeof window !== "undefined" && typeof document !== "undefined";
if (typeof WorkerGlobalScope !== "undefined") {
  globalThis instanceof WorkerGlobalScope;
}
const Ld = (e) => e != null;
const Wb = Object.prototype.toString;
const Bb = (e) => Wb.call(e) === "[object Object]";
const Hr = () => {};
function Ub(...e) {
  if (e.length !== 1) {
    return wm(...e);
  }
  const t = e[0];
  if (typeof t == "function") {
    return Ea(
      Zu(() => ({
        get: t,
        set: Hr,
      }))
    );
  } else {
    return he(t);
  }
}
function Vc(e) {
  if (e.endsWith("rem")) {
    return Number.parseFloat(e) * 16;
  } else {
    return Number.parseFloat(e);
  }
}
function zr(e) {
  if (Array.isArray(e)) {
    return e;
  } else {
    return [e];
  }
}
function Hb(e) {
  return Se();
}
function zb(e, t = true, n) {
  if (Hb()) {
    St(e, n);
  } else if (t) {
    e();
  } else {
    at(e);
  }
}
function JC(e, t = 1000, n = {}) {
  const { immediate: r = true, immediateCallback: s = false } = n;
  let i = null;
  const o = Ct(false);
  function a() {
    if (i) {
      clearInterval(i);
      i = null;
    }
  }
  function l() {
    o.value = false;
    a();
  }
  function c() {
    const u = Lt(t);
    if (!(u <= 0)) {
      o.value = true;
      if (s) {
        e();
      }
      a();
      if (o.value) {
        i = setInterval(e, u);
      }
    }
  }
  if (r && ci) {
    c();
  }
  if (Ae(t) || typeof t == "function") {
    const u = de(t, () => {
      if (o.value && ci) {
        c();
      }
    });
    gr(u);
  }
  gr(l);
  return {
    isActive: o,
    pause: l,
    resume: c,
  };
}
function Kb(e, t, n) {
  return de(e, t, {
    ...n,
    immediate: true,
  });
}
function ZC(e, t, n) {
  let r;
  if (Ae(n)) {
    r = {
      evaluating: n,
    };
  } else {
    r = {};
  }
  const {
    lazy: s = false,
    evaluating: i = undefined,
    shallow: o = true,
    onError: a = Hr,
  } = r;
  const l = Ct(!s);
  const c = o ? Ct(t) : he(t);
  let u = 0;
  Mf(async (f) => {
    if (!l.value) {
      return;
    }
    u++;
    const d = u;
    let h = false;
    if (i) {
      Promise.resolve().then(() => {
        i.value = true;
      });
    }
    try {
      const p = await e((E) => {
        f(() => {
          if (i) {
            i.value = false;
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
      if (i && d === u) {
        i.value = false;
      }
      h = true;
    }
  });
  if (s) {
    return M(() => {
      l.value = true;
      return c.value;
    });
  } else {
    return c;
  }
}
const _r = ci ? window : undefined;
const Gb = ci ? window.document : undefined;
function Kr(e) {
  const n = Lt(e);
  return n?.$el ?? n;
}
function ui(...e) {
  const t = [];
  const n = () => {
    t.forEach((a) => a());
    t.length = 0;
  };
  const r = (a, l, c, u) => {
    a.addEventListener(l, c, u);
    return () => a.removeEventListener(l, c, u);
  };
  const s = M(() => {
    const a = zr(Lt(e[0])).filter((l) => l != null);
    if (a.every((l) => typeof l != "string")) {
      return a;
    } else {
      return undefined;
    }
  });
  const i = Kb(
    () => {
      var a;
      return [
        ((a = s.value) == null ? undefined : a.map((c) => Kr(c))) ??
          [_r].filter((c) => c != null),
        zr(Lt(s.value ? e[1] : e[0])),
        zr(Xt(s.value ? e[2] : e[1])),
        Lt(s.value ? e[3] : e[2]),
      ];
    },
    ([a, l, c, u]) => {
      n();
      if (!a?.length || !l?.length || !c?.length) {
        return;
      }
      const f = Bb(u)
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
    i();
    n();
  };
  gr(n);
  return o;
}
function Qb() {
  const e = Ct(false);
  const t = Se();
  if (t) {
    St(() => {
      e.value = true;
    }, t);
  }
  return e;
}
function Ba(e) {
  const t = Qb();
  return M(() => {
    t.value;
    return !!e();
  });
}
function Xb(e, t, n = {}) {
  const { window: r = _r, ...s } = n;
  let i;
  const o = Ba(() => r && "MutationObserver" in r);
  const a = () => {
    if (i) {
      i.disconnect();
      i = undefined;
    }
  };
  const l = M(() => {
    const d = Lt(e);
    const h = zr(d).map(Kr).filter(Ld);
    return new Set(h);
  });
  const c = de(
    () => l.value,
    (d) => {
      a();
      if (o.value && d.size) {
        i = new MutationObserver(t);
        d.forEach((h) => i.observe(h, s));
      }
    },
    {
      immediate: true,
      flush: "post",
    }
  );
  const u = () => i?.takeRecords();
  const f = () => {
    c();
    a();
  };
  gr(f);
  return {
    isSupported: o,
    stop: f,
    takeRecords: u,
  };
}
function Yb(e) {
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
function eE(...e) {
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
    target: s = _r,
    eventName: i = "keydown",
    passive: o = false,
    dedupe: a = false,
  } = r;
  const l = Yb(t);
  return ui(
    s,
    i,
    (u) => {
      if (!u.repeat || !Lt(a)) {
        if (l(u)) {
          n(u);
        }
      }
    },
    o
  );
}
const Jb = Symbol("vueuse-ssr-width");
function Zb() {
  const e = Aa() ? Vb(Jb, null) : null;
  if (typeof e == "number") {
    return e;
  } else {
    return undefined;
  }
}
function e_(e, t = {}) {
  const { window: n = _r, ssrWidth: r = Zb() } = t;
  const s = Ba(
    () => n && "matchMedia" in n && typeof n.matchMedia == "function"
  );
  const i = Ct(typeof r == "number");
  const o = Ct();
  const a = Ct(false);
  const l = (c) => {
    a.value = c.matches;
  };
  Mf(() => {
    if (i.value) {
      i.value = !s.value;
      const c = Lt(e).split(",");
      a.value = c.some((u) => {
        const f = u.includes("not all");
        const d = u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const h = u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!d || !!h;
        if (d && p) {
          p = r >= Vc(d[1]);
        }
        if (h && p) {
          p = r <= Vc(h[1]);
        }
        if (f) {
          return !p;
        } else {
          return p;
        }
      });
      return;
    }
    if (s.value) {
      o.value = n.matchMedia(Lt(e));
      a.value = o.value.matches;
    }
  });
  ui(o, "change", l, {
    passive: true,
  });
  return M(() => a.value);
}
function tE(e, t, n = {}) {
  const {
    root: r,
    rootMargin: s = "0px",
    threshold: i = 0,
    window: o = _r,
    immediate: a = true,
  } = n;
  const l = Ba(() => o && "IntersectionObserver" in o);
  const c = M(() => {
    const p = Lt(e);
    return zr(p).map(Kr).filter(Ld);
  });
  let u = Hr;
  const f = Ct(a);
  const d = l.value
    ? de(
        () => [c.value, Kr(r), f.value],
        ([p, E]) => {
          u();
          if (!f.value || !p.length) {
            return;
          }
          const A = new IntersectionObserver(t, {
            root: Kr(E),
            rootMargin: s,
            threshold: i,
          });
          p.forEach((b) => b && A.observe(b));
          u = () => {
            A.disconnect();
            u = Hr;
          };
        },
        {
          immediate: a,
          flush: "post",
        }
      )
    : Hr;
  const h = () => {
    u();
    d();
    f.value = false;
  };
  gr(h);
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
function t_(e = null, t = {}) {
  var s;
  const { document: i = Gb, restoreOnUnmount: o = (f) => f } = t;
  const a = i?.title ?? "";
  const l = Ub(e ?? i?.title ?? null);
  const c = !!e && typeof e == "function";
  function u(f) {
    if (!("titleTemplate" in t)) {
      return f;
    }
    const d = t.titleTemplate || "%s";
    if (typeof d == "function") {
      return d(f);
    } else {
      return Lt(d).replace(/%s/g, f);
    }
  }
  de(
    l,
    (f, d) => {
      if (f !== d && i) {
        i.title = u(f ?? "");
      }
    },
    {
      immediate: true,
    }
  );
  if (t.observe && !t.titleTemplate && i && !c) {
    Xb(
      (s = i.head) == null ? undefined : s.querySelector("title"),
      () => {
        if (i && i.title !== l.value) {
          l.value = u(i.title);
        }
      },
      {
        childList: true,
      }
    );
  }
  gr(() => {
    if (o) {
      const f = o(a, l.value || "");
      if (f != null && i) {
        i.title = f;
      }
    }
  });
  return l;
}
function nE(e = {}) {
  const {
    window: t = _r,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: r = Number.POSITIVE_INFINITY,
    listenOrientation: s = true,
    includeScrollbar: i = true,
    type: o = "inner",
  } = e;
  const a = Ct(n);
  const l = Ct(r);
  const c = () => {
    if (t) {
      if (o === "outer") {
        a.value = t.outerWidth;
        l.value = t.outerHeight;
      } else if (o === "visual" && t.visualViewport) {
        const { width: f, height: d, scale: h } = t.visualViewport;
        a.value = Math.round(f * h);
        l.value = Math.round(d * h);
      } else if (i) {
        a.value = t.innerWidth;
        l.value = t.innerHeight;
      } else {
        a.value = t.document.documentElement.clientWidth;
        l.value = t.document.documentElement.clientHeight;
      }
    }
  };
  c();
  zb(c);
  const u = {
    passive: true,
  };
  ui("resize", c, u);
  if (t && o === "visual" && t.visualViewport) {
    ui(t.visualViewport, "resize", c, u);
  }
  if (s) {
    const f = e_("(orientation: portrait)");
    de(f, () => c());
  }
  return {
    width: a,
    height: l,
  };
}
const n_ = (e) => e;
const r_ = n_;
/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Od;
const Li = (e) => (Od = e);
const Rd = Symbol();
function Zo(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var Gr;
(function (e) {
  e.direct = "direct";
  e.patchObject = "patch object";
  e.patchFunction = "patch function";
})((Gr ||= {}));
function s_() {
  const e = va(true);
  const t = e.run(() => he({}));
  let n = [];
  let r = [];
  const s = Bn({
    install(i) {
      Li(s);
      s._a = i;
      i.provide(Rd, s);
      i.config.globalProperties.$pinia = s;
      r.forEach((o) => n.push(o));
      r = [];
    },
    use(i) {
      if (this._a) {
        n.push(i);
      } else {
        r.push(i);
      }
      return this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return s;
}
const Md = () => {};
function Wc(e, t, n, r = Md) {
  e.push(t);
  const s = () => {
    const i = e.indexOf(t);
    if (i > -1) {
      e.splice(i, 1);
      r();
    }
  };
  if (!n && ya()) {
    Mu(s);
  }
  return s;
}
function Gn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const i_ = (e) => e();
const Bc = Symbol();
const io = Symbol();
function ea(e, t) {
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
    const s = e[n];
    if (Zo(s) && Zo(r) && e.hasOwnProperty(n) && !Ae(r) && !yn(r)) {
      e[n] = ea(s, r);
    } else {
      e[n] = r;
    }
  }
  return e;
}
const o_ = Symbol();
function a_(e) {
  return !Zo(e) || !e.hasOwnProperty(o_);
}
const { assign: cn } = Object;
function l_(e) {
  return !!Ae(e) && !!e.effect;
}
function c_(e, t, n, r) {
  const { state: s, actions: i, getters: o } = t;
  const a = n.state.value[e];
  let l;
  function c() {
    if (!a) {
      n.state.value[e] = s ? s() : {};
    }
    const u = ym(n.state.value[e]);
    return cn(
      u,
      i,
      Object.keys(o || {}).reduce((f, d) => {
        f[d] = Bn(
          M(() => {
            Li(n);
            const h = n._s.get(e);
            return o[d].call(h, h);
          })
        );
        return f;
      }, {})
    );
  }
  l = Fd(e, c, t, n, r, true);
  return l;
}
function Fd(e, t, n = {}, r, s, i) {
  let o;
  const a = cn(
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
  if (!i && !p) {
    r.state.value[e] = {};
  }
  he({});
  let E;
  function A(W) {
    let k;
    c = u = false;
    if (typeof W == "function") {
      W(r.state.value[e]);
      k = {
        type: Gr.patchFunction,
        storeId: e,
        events: h,
      };
    } else {
      ea(r.state.value[e], W);
      k = {
        type: Gr.patchObject,
        payload: W,
        storeId: e,
        events: h,
      };
    }
    const O = (E = Symbol());
    at().then(() => {
      if (E === O) {
        c = true;
      }
    });
    u = true;
    Gn(f, k, r.state.value[e]);
  }
  const b = i
    ? function () {
        const { state: k } = n;
        const O = k ? k() : {};
        this.$patch((q) => {
          cn(q, O);
        });
      }
    : Md;
  function m() {
    o.stop();
    f = [];
    d = [];
    r._s.delete(e);
  }
  const C = (W, k = "") => {
    if (Bc in W) {
      W[io] = k;
      return W;
    }
    const O = function () {
      Li(r);
      const q = Array.from(arguments);
      const S = [];
      const G = [];
      function D(Q) {
        S.push(Q);
      }
      function ee(Q) {
        G.push(Q);
      }
      Gn(d, {
        args: q,
        name: O[io],
        store: x,
        after: D,
        onError: ee,
      });
      let J;
      try {
        J = W.apply(this && this.$id === e ? this : x, q);
      } catch (Q) {
        Gn(G, Q);
        throw Q;
      }
      if (J instanceof Promise) {
        return J.then((Q) => {
          Gn(S, Q);
          return Q;
        }).catch((Q) => {
          Gn(G, Q);
          return Promise.reject(Q);
        });
      } else {
        Gn(S, J);
        return J;
      }
    };
    O[Bc] = true;
    O[io] = k;
    return O;
  };
  const y = {
    _p: r,
    $id: e,
    $onAction: Wc.bind(null, d),
    $patch: A,
    $reset: b,
    $subscribe(W, k = {}) {
      const O = Wc(f, W, k.detached, () => q());
      const q = o.run(() =>
        de(
          () => r.state.value[e],
          (S) => {
            if (k.flush === "sync" ? u : c) {
              W(
                {
                  storeId: e,
                  type: Gr.direct,
                  events: h,
                },
                S
              );
            }
          },
          cn({}, l, k)
        )
      );
      return O;
    },
    $dispose: m,
  };
  const x = Wn(y);
  r._s.set(e, x);
  const I = ((r._a && r._a.runWithContext) || i_)(() =>
    r._e.run(() =>
      (o = va()).run(() =>
        t({
          action: C,
        })
      )
    )
  );
  for (const W in I) {
    const k = I[W];
    if ((Ae(k) && !l_(k)) || yn(k)) {
      if (!i) {
        if (p && a_(k)) {
          if (Ae(k)) {
            k.value = p[W];
          } else {
            ea(k, p[W]);
          }
        }
        r.state.value[e][W] = k;
      }
    } else if (typeof k == "function") {
      const O = C(k, W);
      I[W] = O;
      a.actions[W] = k;
    }
  }
  cn(x, I);
  cn(ue(x), I);
  Object.defineProperty(x, "$state", {
    get: () => r.state.value[e],
    set: (W) => {
      A((k) => {
        cn(k, W);
      });
    },
  });
  r._p.forEach((W) => {
    cn(
      x,
      o.run(() =>
        W({
          store: x,
          app: r._a,
          pinia: r,
          options: a,
        })
      )
    );
  });
  if (p && i && n.hydrate) {
    n.hydrate(x.$state, p);
  }
  c = true;
  u = true;
  return x;
}
/*! #__NO_SIDE_EFFECTS__ */
function u_(e, t, n) {
  let r;
  const s = typeof t == "function";
  r = s ? n : t;
  function i(o, a) {
    const l = Aa();
    o = o || (l ? lt(Rd, null) : null);
    if (o) {
      Li(o);
    }
    o = Od;
    if (!o._s.has(e)) {
      if (s) {
        Fd(e, t, r, o);
      } else {
        c_(e, r, o);
      }
    }
    return o._s.get(e);
  }
  i.$id = e;
  return i;
}
function f_(e, t) {
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
function Dd(e, t, n, r, s) {
  return (
    (t ** 2 - (s / 2) ** 2) ** 0.5 -
      Math.max((s * Math.cos(e)) / (Math.sin(e) * 2), n) >=
    r
  );
}
function d_(e) {
  if (!e) {
    return "";
  }
  const t = e.match(/<img.*?src="(.*?)".*?>/);
  if (t) {
    e = e.replace(t[0], "");
  }
  return y_(e);
}
function $d(e) {
  let t = "";
  if (e) {
    t = e;
    const n = 18;
    if (t.length > n) {
      t = t.substring(0, n - 1) + "…";
    }
  }
  return t;
}
function h_(e, t) {
  if (e) {
    return t;
  }
  {
    const n = [];
    const r = [];
    for (let s of t) {
      const i = m_(s);
      if (!n.includes(i)) {
        n.push(i);
        r.push(s);
      }
    }
    return r;
  }
}
function m_(e) {
  const t = {};
  if (e.text) {
    t.text = e.text;
  }
  if (e.image) {
    t.image = e.image;
  }
  return JSON.stringify(t);
}
function g_(e) {
  let t = "";
  if (e) {
    const n = e.match(/<img.*?src="(.*?)".*?>/);
    if (n) {
      t = n[1];
    }
  }
  return t;
}
function p_(e, t, n, r, s, i) {
  const o = {};
  if (e) {
    o.text = e;
  }
  if (t) {
    o.image = t;
  }
  return o;
}
function v_(e) {
  const t = [...e];
  let n;
  for (let r = t.length - 1; r > 0; r--) {
    n = Math.floor(Math.random() * (r + 1));
    [t[r], t[n]] = [t[n], t[r]];
  }
  return t;
}
function Uc(e) {
  return e.slice(0).sort((t, n) => {
    const r = t.text || "";
    const s = n.text || "";
    return r.localeCompare(s, "en", {
      numeric: true,
      sensitivity: "base",
    });
  });
}
function y_(e) {
  return e
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
function $s() {
  let t = "";
  const n = "abcdefghjkmnpqrstuvwxyz23456789";
  for (let r = 0; r < 10; r++) {
    t += n.charAt(Math.floor(Math.random() * n.length));
  }
  return t;
}
function Ln(e) {
  if (!e || !e.map) {
    return [];
  } else {
    return e.map((t) => {
      t.id = t.id || $s();
      return t;
    });
  }
}
function rE(e, t) {
  e = Math.ceil(e);
  t = Math.floor(t);
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function jd(e) {
  return e.reduce(
    (t, n) =>
      n.weight && (n.enabled === true || !("enabled" in n)) ? t + n.weight : t,
    0
  );
}
function b_(e, t) {
  let n = 0;
  if (e.length === 0) {
    return 0;
  }
  if (e[0].weight) {
    const r = jd(e);
    const s = e.map((a) => (Math.PI * 2 * (a.weight ?? 1)) / r);
    const i = [];
    n = 0;
    let o = s[0] / 2;
    e.forEach((a, l) => {
      i.push(o);
      o += s[l + 1];
    });
    n = 0;
    while (!(t < i[n]) && !(n++, n > i.length - 1));
  } else {
    const r = (Math.PI * 2) / e.length;
    n = Math.round(t / r);
  }
  if (n >= e.length) {
    n = 0;
  }
  return n;
}
function qd(e) {
  if (!e) {
    return "#000000";
  }
  const t = e.charAt(0) === "#" ? e.substring(1, 7) : e;
  const n = parseInt(t.substring(0, 2), 16);
  const r = parseInt(t.substring(2, 4), 16);
  const s = parseInt(t.substring(4, 6), 16);
  const o = [n / 255, r / 255, s / 255].map((l) =>
    l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4
  );
  if (o[0] * 0.2126 + o[1] * 0.7152 + o[2] * 0.0722 > 0.179) {
    return "#000000";
  } else {
    return "#FFFFFF";
  }
}
function sE(e) {
  return new Promise((t) => setTimeout(t, e));
}
function __(e) {
  return ["spin-only", "copyable", "gallery"].includes(e);
}
function w_(e) {
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
function Vd(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
async function iE(e) {
  return new Promise((t) => {
    const n = new Image();
    n.onload = function () {
      const r = S_(n.width, n.height, 200);
      Wd(r, n);
      t(Ha(r, e, 0.5));
    };
    n.src = e;
  });
}
async function oE(e) {
  return new Promise((t) => {
    const n = new Image();
    n.onload = () => {
      const r = Ua(370);
      if (!k_(n)) {
        Wd(r, n, "blur(4px)");
      }
      Bd(r, n, true);
      t(Ha(r, null, 0.5));
    };
    n.src = e;
  });
}
async function aE(e) {
  return new Promise((t) => {
    const n = new Image();
    n.onload = () => {
      const r = Ua(700);
      Bd(r, n, false);
      t(Ha(r, null, 0.7));
    };
    n.src = e;
  });
}
function Tr(e) {
  const t = document.createElement("canvas");
  t.width = e.canvas.width;
  t.height = e.canvas.height;
  return t;
}
function ar(e) {
  const t = document.createElement("canvas").getContext("2d");
  t.drawImage(e, 0, 0);
  const n = t.getImageData(0, 0, 1, 1).data;
  if (T_(n[0], n[1], n[2])) {
    return "#FFFFFFFF";
  } else {
    return N_(n[0], n[1], n[2], n[3]);
  }
}
function C_(e) {
  const t = e.match(/#\w\w\w\w\w\w(\w\w)/);
  if (t) {
    return (parseInt(t[1], 16) / 255) * 100 < 50;
  } else {
    return false;
  }
}
function lE(e) {
  const n = Ua(300);
  const r = n.getContext("2d");
  r.fillStyle = "white";
  r.fillRect(0, 0, 300, 300);
  r.fillStyle = "black";
  r.textBaseline = "middle";
  r.textAlign = "center";
  const s = 270;
  E_(r, e, s);
  r.fillText(e, 150, 150, s);
  return n.toDataURL("image/webp", 0.5);
}
function oo(e) {
  return new Promise(async (t) => {
    const n = new Image();
    n.setAttribute("crossOrigin", "anonymous");
    n.onload = () => t(n);
    n.src = e;
  });
}
function ao(e) {
  return ar(e).slice(7) === "00";
}
function E_(e, t, n) {
  for (
    let r = Math.round(n / 2);
    r >= n / 20 &&
    ((e.font = `${r}px Quicksand, sans-serif`), !(e.measureText(t).width <= n));
    r--
  );
}
function S_(e, t, n) {
  const r = n / e;
  const s = n / t;
  const i = Math.max(r, s);
  const o = document.createElement("canvas");
  o.width = e * i;
  o.height = t * i;
  return o;
}
function Ua(e) {
  const t = document.createElement("canvas");
  t.width = e;
  t.height = e;
  return t;
}
function k_(e) {
  const t = ar(e);
  return t === "#FFFFFFFF" || t.slice(7) === "FF";
}
function x_(e) {
  return e.getImageData(0, 0, 1, 1).data[3] < 5;
}
function T_(e, t, n) {
  return e === t && e === n && e > 230;
}
function N_(e, t, n, r) {
  return `#${ks(e)}${ks(t)}${ks(n)}${ks(r)}`;
}
const ks = (e) => e.toString(16).padStart(2, "0");
function Wd(e, t, n) {
  const r = e.getContext("2d");
  r.save();
  if (n) {
    r.filter = n;
  }
  r.drawImage(t, -2, -2, e.width + 4, e.height + 4);
  r.restore();
}
function Bd(e, t, n) {
  const r = e.width;
  let s = r / Math.min(t.width, t.height);
  if (n) {
    s = r / Math.max(t.width, t.height);
  }
  const i = t.width * s;
  const o = (r - i) / 2;
  const a = t.height * s;
  const l = (r - a) / 2;
  e.getContext("2d").drawImage(t, o, l, i, a);
}
function Ha(e, t, n) {
  let r;
  if (x_(e.getContext("2d"))) {
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
function A_(e, t, n, r, s, i) {
  const o = I_(e, n, r, s, i);
  const a = P_(e, t, r, s, i);
  return `${L_(o, a)}px Quicksand, sans-serif`;
}
const lo = new Map();
function I_(e, t, n, r, s) {
  const i = JSON.stringify({
    texts: t,
    wheelRadius: n,
    hubRadius: r,
    smallestAngle: s,
  });
  if (lo.get(i)) {
    return lo.get(i) || [10];
  }
  let o = "Quicksand, sans-serif";
  const a = t.map((c) => Ud(e, c, o, n, r, s));
  const l = F_(a);
  lo.set(i, l);
  return l;
}
function P_(e, t, n, r, s) {
  return Ud(e, t, "Quicksand, sans-serif", n, r, s);
}
function L_(e, t) {
  for (let n = e.length - 1; n >= 0; n--) {
    if (e[n] <= t) {
      return e[n];
    }
  }
  return e[0];
}
const co = new Map();
function Ud(e, t, n, r, s, i) {
  const o = JSON.stringify({
    displayText: t,
    fontName: n,
    wheelRadius: r,
    hubRadius: s,
    smallestAngle: i,
  });
  if (co.get(o)) {
    return co.get(o) || 10;
  }
  const a = O_(e, t, n, r, s, i);
  co.set(o, a);
  return a;
}
function O_(e, t, n, r, s, i) {
  return R_(e, r, s, i, n, t, 3, 200);
}
function R_(e, t, n, r, s, i, o, a) {
  let l;
  while (true) {
    l = Math.round((o + a) / 2);
    let c = l + "px " + s;
    if (M_(e, t, n, r / 2, i, c, l)) {
      o = l;
    } else {
      a = l;
    }
    if (Math.abs(a - o) < 2) {
      break;
    }
  }
  return l;
}
function M_(e, t, n, r, s, i, o) {
  if (!s) {
    return true;
  }
  e.font = i;
  const a = e.measureText(` ${$d(s)} `).width;
  return Dd(r, t, n, a, o);
}
function F_(e) {
  const t = [...e].sort((s, i) => s - i);
  const n = [];
  let r = t[0];
  n.push(r);
  for (let s = 1; s < t.length; s++) {
    const i = t[s];
    if (i > r * 2) {
      n.push(i);
      r = i;
    }
  }
  return n;
}
function Hc(e) {
  const t = e.context;
  t.save();
  if (e.wheelConfig.type === "image") {
    D_(e);
  }
  if (e.wheelConfig.type === "color") {
    if (e.image) {
      if (W_(e.image)) {
        $_(e);
      } else {
        j_(e);
      }
    } else {
      q_(e);
    }
  }
  t.restore();
}
function D_(e) {
  Ka(e);
  Oi(e, {
    fill: "white",
    outline: "black",
  });
  Ri(e);
}
function $_(e) {
  za(e);
  Ka(e);
  Oi(e, {
    fill: "white",
    outline: "black",
  });
  Ri(e);
}
function j_(e) {
  if (!e.image) {
    return;
  }
  const t = Hd(e.image);
  za({
    ...e,
    color: e.entry.color || t,
  });
  Ka(e);
  Oi(e, {
    fill: "white",
    outline: "black",
  });
  Ri(e);
}
function q_(e) {
  za(e);
  const t = {
    fill: qd(e.color),
    outline: "",
  };
  Oi(e, t);
  Ri(e);
}
function za(e) {
  const t = e.context;
  t.beginPath();
  t.moveTo(0, 0);
  t.arc(0, 0, e.wheelRadius, -e.radians / 2, e.radians / 2);
  t.lineTo(0, 0);
  t.fillStyle = e.color;
  t.fill();
}
function Oi(e, t) {
  if (!e.entry.text) {
    return;
  }
  const n = e.context;
  const r = $d(e.entry.text ?? "");
  n.font = A_(
    n,
    r,
    e.displayEntries.map((s) => s.text || ""),
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
function Ka(e) {
  if (!e.image) {
    return;
  }
  const t = e.radians / 2;
  const n = e.wheelRadius;
  const r = e.hubRadius;
  let s = V_(t, n, r, e.image.height / e.image.width);
  e.context.drawImage(e.image, s.x, s.y, s.w, s.h);
}
function Ri(e) {
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
function V_(e, t, n, r) {
  let s;
  let i = 0;
  for (s = t; s > 0 && ((i = s * r), !Dd(e, t, n, s, i)); s--);
  return {
    x: Math.max((i * Math.cos(e)) / (Math.sin(e) * 2), n),
    y: -i / 2,
    w: s,
    h: i,
  };
}
function Hd(e) {
  return ar(e);
}
function W_(e) {
  return C_(Hd(e));
}
const B_ = {
  XS: 0.01,
  S: 0.2,
  M: 0.3,
  L: 0.4,
  XL: 0.5,
  XXL: 0.6,
};
class U_ {
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
class H_ {
  imageCache = new U_();
  entries = [];
  imageDataCache = {};
  wheelImage = null;
  pointerImage = null;
  coverPlateImage = null;
  wheelShadowImage = null;
  watermarkImage = null;
  draw(t, n, r, s, i, o = "") {
    const a = t.canvas.width * 0.44;
    const l = this.getHubRadius(i, a);
    this.drawBackground(t);
    if (i.drawShadow) {
      this.drawWheelShadow(t, a);
    }
    this.drawCoverImage(t, i, n, a);
    this.drawWheel(t, i, n, a, l, s, r);
    this.drawPointer(t, i, a);
    this.drawCenterImage(t, i, n, l);
    try {
      this.drawCoverPlate(t, a, l, s, r);
    } catch {}
    if (o) {
      this.drawWatermark(t, o, i);
    }
  }
  getHubRadius(t, n) {
    if (t.type === "image") {
      return 0;
    }
    const r = B_[t.hubSize] || 0.2;
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
      this.wheelShadowImage = Tr(t);
      this.drawWheelShadowNoCache(this.wheelShadowImage.getContext("2d"), n);
    }
    t.drawImage(this.wheelShadowImage, 0, 0);
  }
  drawWheelShadowNoCache(t, n) {
    const r = t.canvas.width / 2;
    const s = t.canvas.height / 2;
    const i = t.createRadialGradient(r, s, n, r, s + 4, n + 8);
    i.addColorStop(0, "#00000034");
    i.addColorStop(1, "#00000000");
    t.fillStyle = i;
    t.fillRect(0, 0, t.canvas.width, t.canvas.height);
  }
  drawWheel(t, n, r, s, i, o, a) {
    if (!this.wheelImage) {
      this.wheelImage = Tr(t);
      this.entries = a.slice(0);
      this.drawWheelNoCache({
        context: this.wheelImage.getContext("2d"),
        wheelConfig: n,
        wheelRadius: s,
        hubRadius: i,
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
  drawCoverImage(t, n, r, s) {
    if (n.type === "color") {
      return;
    }
    const i = this.imageCache.getImage(n.getCoverImage());
    if (i) {
      t.save();
      t.translate(t.canvas.width / 2, t.canvas.height / 2);
      t.rotate(r);
      t.beginPath();
      t.arc(0, 0, s - 1, 0, Math.PI * 2, true);
      t.clip();
      t.drawImage(i, -s, -s, s * 2, s * 2);
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
    for (const [r, s] of t.displayEntries.entries()) {
      const i = t.wheelConfig.getEntryColor(r);
      Hc({
        ...t,
        entry: s,
        color: i,
        radians: n,
        image: this.getImageFromData(s.image),
      });
      t.context.rotate(-n);
    }
  }
  drawAdvancedSlices(t) {
    const n = jd(this.entries);
    const r = [];
    this.entries.forEach((s, i) => {
      r[i] = (Math.PI * 2 * (s.weight || 1)) / n;
    });
    for (const [s, i] of t.displayEntries.entries()) {
      const o = r[s] / 2 + r[s + 1] / 2;
      const a = i.color || t.wheelConfig.getEntryColor(s);
      Hc({
        ...t,
        entry: i,
        color: a,
        radians: r[s],
        image: this.getImageFromData(i.image),
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
        this.pointerImage = Tr(t);
        this.drawPointerNoCache(this.pointerImage.getContext("2d"), n, r);
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
  drawCoverPlate(t, n, r, s, i) {
    if (i.length !== s.length) {
      if (!this.coverPlateImage && i.length > 0) {
        this.coverPlateImage = Tr(t);
        this.drawCoverPlateNoCache(
          this.coverPlateImage.getContext("2d"),
          n,
          r,
          i
        );
      }
      if (this.coverPlateImage) {
        t.drawImage(this.coverPlateImage, 0, 0);
      }
    }
  }
  drawCoverPlateNoCache(t, n, r, s) {
    const i = this.imageCache.getImage("/images/brushed-metal.png");
    if (!i) {
      return;
    }
    const o = s.length;
    const a = Math.max((Math.PI * 4) / o, Math.PI / 4);
    t.save();
    t.translate(t.canvas.width / 2, t.canvas.height / 2);
    t.scale(-1, 1);
    t.shadowColor = "#444";
    t.shadowOffsetY = 4;
    t.shadowBlur = 10;
    t.lineWidth = n - r + 10;
    t.strokeStyle = t.createPattern(i, "repeat");
    t.beginPath();
    t.arc(0, 0, (n + r) / 2, -a / 2, a / 2);
    t.stroke();
    t.restore();
  }
  drawCenterImage(t, n, r, s) {
    if (n.type === "image") {
      return;
    }
    const i = this.imageCache.getImage(n.getWheelImage());
    if (i) {
      t.save();
      t.translate(t.canvas.width / 2, t.canvas.height / 2);
      t.rotate(r);
      t.beginPath();
      t.arc(0, 0, s - 1, 0, Math.PI * 2, true);
      t.clip();
      t.drawImage(i, -s, -s, s * 2, s * 2);
      t.restore();
    }
  }
  drawWatermark(t, n, r) {
    if (n) {
      if (!this.watermarkImage) {
        this.watermarkImage = Tr(t);
        this.drawWatermarkNoCache(this.watermarkImage.getContext("2d"), n, r);
      }
      t.drawImage(this.watermarkImage, 0, 0);
    }
  }
  drawWatermarkNoCache(t, n, r) {
    t.save();
    t.textAlign = "end";
    t.font = "14px Quicksand, sans-serif";
    t.fillStyle = qd(r.pageBackgroundColor);
    t.fillText(n, t.canvas.width - 10, t.canvas.height - 10);
    t.restore();
  }
  getImageFromData(t) {
    if (t) {
      if (!this.imageDataCache[t]) {
        const n = new Image();
        const r = this;
        n.onload = () => r.clearCachedWheelImage();
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
class _t {
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
    const t = new _t();
    t.loadValues(this.getValues());
    return t;
  }
  hasOnlyDefaultEntries() {
    return f_(this.getTexts(), new _t().getTexts());
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
      t.entries = t.names.map((n) => p_(d_(n), g_(n)));
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
    if (!t.hasOwnProperty("showTitle")) {
      t.showTitle = true;
    }
    if (t.type === "image" && !t.coverImageType) {
      t.coverImageType = "gallery";
    }
    if (t.isAdvanced && t.entries.length > 0) {
      if (!t.entries[0].hasOwnProperty("enabled")) {
        t.entries.forEach((n) => {
          n.enabled = true;
        });
      }
    }
    if (t.drawShadow === undefined) {
      t.drawShadow = true;
    }
    t.entries.forEach((n) => {
      n.text &&= n.text
        .replace(
          `
`,
          ""
        )
        .replace("\r", "");
    });
    Ln(t.entries);
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
const zc = Object.fromEntries(
  Object.entries(new _t().getValues()).map(([e, t]) => [e, typeof t])
);
function zd(e) {
  const t = new _t(
    Object.fromEntries(
      Object.entries(structuredClone(e)).filter(
        ([n, r]) => n in zc && typeof r === zc[n]
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
class Nr {
  array;
  length;
  elementJsonCache;
  constructor(t) {
    this.array = t.slice(0);
    this.length = t.length;
    this.elementJsonCache = null;
  }
  getElement(t) {
    while (t < 0) {
      t += this.array.length;
    }
    while (t >= this.array.length) {
      t -= this.array.length;
    }
    return this.array[t];
  }
  setElement(t, n) {
    while (t < 0) {
      t += this.array.length;
    }
    while (t >= this.array.length) {
      t -= this.array.length;
    }
    this.array[t] = n;
    this.elementJsonCache = null;
  }
  getArray() {
    return this.array;
  }
  slice(t, n) {
    const r = [];
    for (let s = t; s < n; s++) {
      r.push(this.getElement(s));
    }
    return r;
  }
  getNextElement(t) {
    this.elementJsonCache ||= this.getElementJson();
    const n = JSON.stringify(t);
    const r = this.elementJsonCache.findIndex((s) => s === n);
    return this.getElement(r + 1);
  }
  getElementJson() {
    return this.array.map((t) => JSON.stringify(t));
  }
}
class z_ {
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
class K_ {
  allEntries;
  maxSlices;
  prevIndexAtPointer;
  displayEntries;
  constructor() {
    this.allEntries = new Nr([]);
    this.maxSlices = 1000000;
    this.prevIndexAtPointer = -1;
    this.displayEntries = new Nr([]);
  }
  setEntries(t, n, r) {
    this.maxSlices = n;
    this.allEntries = new Nr(h_(r, t));
    if (this.allEntries.length <= n || this.entriesHaveUnequalWeight(t)) {
      this.displayEntries = this.allEntries;
    } else {
      this.displayEntries = new Nr(this.allEntries.slice(0, n));
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
    {
      const n = new z_(this.prevIndexAtPointer, t, this.displayEntries.length);
      while (!n.isDone()) {
        n.increment();
        const r = n.getIndex();
        const s = Math.floor(r + this.maxSlices / 2) % this.maxSlices;
        const i = this.displayEntries.getElement(s - 1);
        const o = this.allEntries.getNextElement(i);
        this.displayEntries.setElement(s, o);
      }
      this.prevIndexAtPointer = t;
      return true;
    }
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
      const n = this.getRandomInt(t, 0, this.allEntries.length - 1);
      this.displayEntries = new Nr(
        this.allEntries.slice(n, n + this.maxSlices)
      );
    }
  }
  getRandomInt(t, n, r) {
    n = Math.ceil(n);
    r = Math.floor(r);
    return Math.floor(t() * (r - n + 1) + n);
  }
}
let cE = class {
  angle = 0;
  speed = 0;
  fps = 60;
  watermark = "";
  wheelConfig = new _t();
  state;
  wheelPainter = new H_();
  entryPicker = new K_();
  indexFromLastTick = 0;
  indexFromThisTick = 0;
  nameChangedCallback;
  doneSpinningCallback;
  onStateChangeCallback;
  constructor(t, n, r) {
    this.state = new Kd(this);
    this.nameChangedCallback = t || (() => {});
    this.doneSpinningCallback = n || ((s) => {});
    this.onStateChangeCallback = r || ((s) => {});
  }
  setEntries(t, n, r) {
    if (!this.state.isSpinning()) {
      const s = t.filter((i) => i.enabled !== false);
      this.entryPicker.setEntries(s, n, r);
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
    if (this.indexFromThisTick != this.indexFromLastTick) {
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
    return b_(this.entryPicker.getDisplayEntries(), this.angle);
  }
  getEntryAtPointer() {
    return this.entryPicker.getDisplayEntries()[this.getIndexAtPointer()];
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
};
class rn {
  name = "NullSpinState";
  tick(t, ...n) {}
  click(t) {}
  receiveFromNetwork(t, n) {}
  isSpinning() {
    return false;
  }
}
class Kd extends rn {
  name = "InitialDemoSpinState";
  constructor(t) {
    super();
    t.speed = 0.005;
  }
  tick(t) {
    t.angle += t.speed;
  }
  click(t) {
    t.setNewState(new Ga(t));
  }
  receiveFromNetwork(t, n) {
    if (n.name === "Spinning") {
      t.setNewState(new Qa(t, n.decelAngle));
    }
    if (n.name === "Stopped") {
      t.setNewState(new Qd(t, n.position));
    }
  }
}
class Ga extends rn {
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
      t.setNewState(new G_(t, n));
    }
  }
  isSpinning() {
    return true;
  }
}
class Qa extends rn {
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
      t.setNewState(new Q_(t, this.decelAngle));
    }
  }
  receiveFromNetwork(t, n) {
    if (n.name === "AnnounceWinner") {
      t.setNewState(new Gd(t, n.position));
    }
  }
  isSpinning() {
    return true;
  }
}
class G_ extends rn {
  name = "DeceleratingState";
  age;
  MAX_AGE;
  deceleration;
  constructor(t, n) {
    super();
    t.angle = Math.PI * 2 * n();
    t.entryPicker.setRandomPosition(n);
    this.age = 0;
    this.MAX_AGE = t.getStateTimeLengths().decelerating;
    const r = this.MAX_AGE;
    const s = t.speed;
    const i = 0.00015;
    this.deceleration = Math.exp(Math.log(i / s) / r);
  }
  tick(t) {
    t.angle += t.speed;
    if (this.age <= this.MAX_AGE) {
      t.speed = t.speed * this.deceleration;
      this.age += 1;
    } else {
      t.speed = 0;
      t.setNewState(new X_(t, t.angle));
    }
  }
  isSpinning() {
    return true;
  }
}
class Q_ extends rn {
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
    const s = t.speed;
    const i = 0.00015;
    this.deceleration = Math.exp(Math.log(i / s) / r);
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
      t.setNewState(new Kd(t));
    }
    this.age += 1;
  }
  receiveFromNetwork(t, n) {
    if (n.name === "AnnounceWinner") {
      t.setNewState(new Gd(t, n.position));
    }
  }
  isSpinning() {
    return true;
  }
}
class X_ extends rn {
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
    t.setNewState(new Y_(t, t.angle));
  }
}
class Gd extends rn {
  name = "SpectatorAnnounceWinnerState";
  constructor(t, n) {
    super();
    t.angle = n;
  }
  tick(t) {
    t.spinIsDone();
    t.setNewState(new Qd(t, t.angle));
  }
}
class Y_ extends rn {
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
    t.setNewState(new Ga(t));
  }
  receiveFromNetwork(t, n) {
    if (n.name === "Spinning") {
      t.setNewState(new Qa(t, n.decelAngle));
    }
  }
}
class Qd extends rn {
  name = "SpectatorStoppedState";
  constructor(t, n) {
    super();
    t.angle = n;
    t.speed = 0;
  }
  click(t) {
    t.setNewState(new Ga(t));
  }
  receiveFromNetwork(t, n) {
    if (n.name === "Spinning") {
      t.setNewState(new Qa(t, n.decelAngle));
    }
  }
}
const J_ = [
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/spreadsheets.readonly",
];
function Z_(e) {
  if (!e) {
    return "";
  }
  const t = e.match(/<img.*?src="(.*?)".*?>/);
  return Kc(t ? e.replace(t[0], "") : e);
}
function fE(e, t) {
  if (e) {
    return t;
  }
  const n = [];
  const r = [];
  for (const s of t) {
    const i = ta(s);
    if (!n.includes(i)) {
      n.push(i);
      r.push(s);
    }
  }
  return r;
}
function ta(e) {
  const t = {};
  if (e.text) {
    t.text = e.text;
  }
  if (e.image) {
    t.image = e.image;
  }
  return JSON.stringify(t);
}
function dE(e, t) {
  const n = [];
  for (let r = 0; r < e.length; r++) {
    if (ta(t) === ta(e[r])) {
      n.push(r);
    }
    if (t.id === e[r].id) {
      return n[0] !== r;
    }
  }
  return false;
}
function hE(e) {
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
      let s = r;
      for (const a of n) {
        s = s.replace(a, "");
      }
      const i = Z_(s);
      const o = ew(s);
      if (i) {
        if (o) {
          return {
            text: i,
            image: o,
          };
        } else {
          return {
            text: i,
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
function ew(e) {
  let t = "";
  if (e) {
    const n = e.match(/<img.*?src="(.*?)".*?>/);
    if (n?.[1]) {
      t = n[1];
    }
  }
  return t;
}
function mE(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function gE(e, t) {
  if (t) {
    return e.reduce((n, r) => n + (r?.trim() === t.trim() ? 1 : 0), 0);
  } else {
    return 0;
  }
}
function tw(e, t, n) {
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
function nw(e, t) {
  const n = w_(t);
  tw("", `${e}: ${n}`, navigator.userAgent);
  console.error(n);
}
function Xd(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function pE(e) {
  const t = e.replace(/<mark>/g, "||mark||").replace(/<\/mark>/g, "||/mark||");
  return Xd(t)
    .replace(/\|\|mark\|\|/g, "<mark>")
    .replace(/\|\|\/mark\|\|/g, "</mark>");
}
function Kc(e) {
  return e
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}
function vE(e) {
  return e.replace(/<.*?>/g, "");
}
function yE() {
  let t = "";
  const n = "abcdefghjkmnpqrstuvwxyz23456789";
  for (let r = 0; r < 10; r++) {
    t += n.charAt(Math.floor(Math.random() * n.length));
  }
  return t;
}
function bE(e) {
  let t = "";
  let n = "";
  if (e) {
    if (e.image) {
      t = `<img src="${e.image}" style="height:25px" style="font-size:1rem;">`;
    }
    if (e.text) {
      n = Xd(e.text);
      n = n.replace(/^ +$/g, "&nbsp;");
    }
  }
  return `<div>${t}${n}</div>`;
}
function _E(e) {
  if (e === "en") {
    return "";
  } else {
    return e;
  }
}
function wE(e, t) {
  return `https://docs.google.com/forms/d/e/1FAIpQLSeryxMCuDjQUGawpgIeMwSY-81fqwdbpVTIOyh1-WJG5LCeeQ/viewform?entry.1064273724=${encodeURIComponent(
    e
  )}&entry.558479038=${t}`;
}
function CE(e, t) {
  return rw(sw(e), t);
}
function rw(e, t = "en", n = Date.now()) {
  if (!e) {
    return "-";
  }
  const r = Math.floor((n - e) / 1000);
  const s = [
    Math.floor(r / 31536000),
    Math.floor(r / 2592000),
    Math.floor(r / 604800),
    Math.floor(r / 86400),
    Math.floor(r / 3600),
    Math.floor(r / 60),
    r,
  ];
  const i = ["year", "month", "week", "day", "hour", "minute", "second"];
  const o = new Intl.RelativeTimeFormat(t, {
    numeric: "auto",
  });
  for (const a in s) {
    if (s[a] >= 1) {
      return o.format(-s[a], i[a]);
    }
  }
  return "moments ago";
}
function sw(e) {
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
function EE(e) {
  const t = Number(e);
  if (Number.isNaN(t)) {
    return "?";
  } else {
    return `$${t.toFixed(2)}`;
  }
}
function SE(e) {
  const t = Number(e);
  if (!Number.isNaN(t) && t >= 0) {
    return `${Math.round(t * 100)}%`;
  } else {
    return "?";
  }
}
function kE() {
  return window.self !== window.top;
}
function Xa(e) {
  if (location.host.startsWith("localhost")) {
    return `http://localhost:8081/${e}`;
  } else {
    return `/${e}`;
  }
}
function xE(e, t) {
  return Object.entries(e)
    .sort((r, s) =>
      r[0] === "sounds.Sound effects"
        ? -1
        : s[0] === "sounds.Sound effects"
        ? 1
        : r[0] === "sounds.Winter holidays" && t > 9
        ? -1
        : s[0] === "sounds.Winter holidays" && t > 9
        ? 1
        : 0
    )
    .reduce((r, s) => {
      r[s[0]] = s[1];
      return r;
    }, {});
}
async function TE(e) {
  const { extractColors: t } = await ke(async () => {
    const { extractColors: r } = await import("./extract-colors-v347.js");
    return {
      extractColors: r,
    };
  }, []);
  const n = new Image();
  n.src = e;
  return new Promise((r) => {
    n.onload = async () => {
      const s = await t(n);
      r(s.map((i) => i.hex).slice(0, 6));
    };
  });
}
function NE(e, t, n) {
  return e.toSorted((r, s) =>
    t === "title"
      ? r.wheelConfig.title || s.wheelConfig.title
        ? iw(r, s, n)
        : Gc(r, s, n)
      : t === "created"
      ? Gc(r, s, n)
      : 0
  );
}
function iw(e, t, n) {
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
function Gc(e, t, n) {
  if (n === "desc") {
    return t.created - e.created;
  } else {
    return e.created - t.created;
  }
}
async function AE({ wheelConfig: e, idToken: t, shareMode: n }) {
  const r = {
    wheelConfig: zd(e),
    shareMode: n,
  };
  return (await pe("POST", "api/v2/wheels", t, r)).data.path;
}
async function IE(e, t) {
  let n = "api/v2/wheels/shared";
  if (t && t.length > 0) {
    n += `?fields=${t}`;
  }
  return (await pe("GET", n, e)).data.wheels;
}
async function PE(e, t) {
  let n = "api/v2/wheels/private";
  if (t && t.length > 0) {
    n += `?fields=${t}`;
  }
  return (await pe("GET", n, e)).data.wheels;
}
async function LE(e, t) {
  return (await pe("GET", `api/v2/wheels/${e}`, t)).data;
}
async function OE(e, t) {
  let n = "api/v2/wheels";
  if (t && t.length > 0) {
    n += `?fields=${t}`;
  }
  return (await pe("GET", n, e)).data.wheels;
}
async function RE(e, t) {
  const n = "api/v1/wheels/private";
  const r = {
    config: zd(t),
  };
  return (await pe("PUT", n, e, r)).data.path;
}
async function ME(e, t, n) {
  await pe("PUT", `api/v2/wheels/${t}`, e, n);
}
async function FE(e, t) {
  await pe("DELETE", `api/v2/wheels/${t}`, e);
}
async function DE(e) {
  await pe("POST", "api/v2/users", e);
}
async function $E(e, t) {
  await pe("POST", "api/v2/wheels/change-owner", t, {
    oldIdToken: e,
  });
}
async function jE(e) {
  await pe("DELETE", "api/v2/users", e);
}
async function qE(e, t) {
  const n = `api/v2/admin/accounts/${t}`;
  return (await pe("GET", n, e)).data;
}
async function VE(e) {
  return (await pe("GET", "api/v2/admin/review-queue", e)).data;
}
async function WE(e, t) {
  return (
    await pe("POST", "api/v2/admin/translate", e, {
      texts: t,
    })
  ).data.translations;
}
async function ow(e) {
  try {
    return (await pe("GET", "api/v2/admin", e)).data.isAdmin;
  } catch {
    return false;
  }
}
async function BE(e, t) {
  const n = new URLSearchParams();
  if (e) {
    n.append("search", e);
  }
  if (t) {
    n.append("pageNumber", String(t));
  }
  const r = `api/v2/gallery?${n.toString()}`;
  return (await pe("GET", r)).data;
}
async function UE() {
  return (await pe("GET", "api/v2/gallery/suggestions")).data.suggestions;
}
async function HE() {
  return (await pe("GET", "api/v2/client-settings")).data;
}
async function zE(e) {
  return (await pe("POST", "api/v2/api-keys", e)).data.apiKey;
}
async function KE(e) {
  await pe("DELETE", "api/v2/api-keys", e);
}
async function GE(e) {
  return (await pe("GET", "api/v2/api-keys", e)).data;
}
async function QE(e) {
  const t = {
    method: "GET",
    mode: "cors",
    headers: {
      "x-api-key": e,
    },
  };
  const n = await fetch(Xa("api/v2/api-keys"), t);
  return (await Ya(n)).data;
}
async function XE(e, t, n) {
  await pe("PUT", "api/v2/admin/administrators", e, {
    uid: t,
    totalReviews: n,
  });
}
async function YE(e, t, n) {
  await pe("PUT", "api/v2/admin/administrators", e, {
    uid: t,
    sessionReviews: n,
  });
}
async function JE(e) {
  return (await pe("GET", "api/v2/admin/dirty-words", e)).data.dirtyWords;
}
async function ZE(e, t) {
  await pe("PUT", "api/v2/admin/dirty-words", e, {
    dirtyWords: t,
  });
}
async function eS(e) {
  return (await pe("GET", "api/v2/admin/administrators", e)).data
    .administrators;
}
async function tS(e, t, n) {
  await pe("POST", "api/v2/admin/administrators", e, {
    uid: t,
    name: n,
  });
}
async function nS(e, t) {
  await pe("DELETE", "api/v2/admin/administrators", e, {
    uid: t,
  });
}
async function rS(e, t) {
  const n = `api/v2/admin/wheels/${t}`;
  await pe("PUT", n, e, {
    shareMode: "copyable",
  });
}
async function sS(e, t) {
  await pe("DELETE", `api/v2/admin/wheels/${t}`, e);
}
async function iS(e) {
  return (await pe("GET", "api/v2/admin/review-queue/next-shared-wheel", e))
    .data.wheel;
}
async function oS(e) {
  return (await pe("GET", "api/v2/admin/review-queue/next-gallery-wheel", e))
    .data.wheel;
}
async function aS(e, t) {
  const n = `api/v2/admin/review-queue/approve/${t}`;
  await pe("POST", n, e);
}
async function lS(e, t) {
  await pe("POST", `api/v2/admin/review-queue/reject/${t}`, e);
}
async function cS() {
  return (await pe("GET", "api/v2/languages")).data.languages;
}
async function uS() {
  const n = await fetch(
    "https://discord-bot-wada35rq7a-uc.a.run.app/guild-count",
    {
      method: "GET",
      mode: "cors",
    }
  );
  const r = await Ya(n);
  if ("guildCount" in r) {
    return r.guildCount;
  }
  throw new Error("No guildCount property in response");
}
async function fS(e, t) {
  const n = `api/v2/wheels/thumbnails/${t}`;
  return await aw("GET", n, e);
}
async function pe(e, t, n, r) {
  const s = {
    method: e,
    mode: "cors",
    headers: {},
  };
  if (n) {
    s.headers.Authorization = n;
  }
  if (r) {
    s.headers["Content-Type"] = "application/json";
    s.body = JSON.stringify(r);
  }
  const i = await fetch(Xa(t), s);
  return await Ya(i);
}
async function aw(e, t, n, r) {
  const s = {
    method: e,
    mode: "cors",
    headers: {},
  };
  if (n) {
    s.headers.Authorization = n;
  }
  return await (await fetch(Xa(t), s)).blob();
}
async function Ya(e) {
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
async function lw(e) {
  const t = await Yd(e);
  return !!t && !t.isAnonymous;
}
async function Yd(e) {
  if (e.currentUser) {
    return e.currentUser;
  } else {
    return new Promise((t) => {
      e.onAuthStateChanged((n) => t(n));
    });
  }
}
async function cw(e) {
  await e.signInAnonymously();
  return e.currentUser;
}
async function uw(e, t) {
  for (const r of J_) {
    t.addScope(r);
  }
  t.setCustomParameters({
    prompt: "select_account",
  });
  return (await e.signInWithPopup(t)).credential?.accessToken ?? null;
}
const fw = [
  {
    partialName: "noms",
    locale: "fr",
  },
];
const Mi = [
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
function dw(e, t) {
  if (_w(e) === t) {
    return "/";
  } else {
    return `/${t}/`;
  }
}
function dS(e, t, n) {
  return `${e}${dw(e, t)}/${n}`.replace("//", "/");
}
function hw(e, t) {
  const n = Mi.find((s) => s.name === t);
  const r = e.toLowerCase() === "twitter" ? "twitterName" : "googleName";
  return n?.[r] || "en_US";
}
function hS(e) {
  return Mi.find((t) => t.name === e)?.file.slice(0, -5) || "en-US";
}
function mS(e, t) {
  const n = Qc("")(t);
  return Vd(Jd, mw(e), Qc({}), (r) => r.name ?? "")([n]);
}
function gS(e) {
  if (Array.isArray(e)) {
    return Vd(Jd, pw, yw)(e);
  } else {
    return [];
  }
}
function pS() {
  return Mi.map((e) => ({
    name: e.name,
    humanName: e.humanName,
  })).sort(gw);
}
function mw(e) {
  return (t) => t.filter((n) => !Zd(e, n.name));
}
function Jd(e) {
  return Mi.filter((t) => e.some((n) => Zd(n, t.name)));
}
function Qc(e) {
  return (t) => t?.[0] ?? e;
}
function gw(e, t) {
  return e.humanName.localeCompare(t.humanName);
}
function pw(e) {
  return e.filter((t) => !vw(t));
}
function vw(e) {
  return e.name === "en-PI";
}
function yw(e) {
  return e.map(bw);
}
function bw(e) {
  return {
    name: e.name,
    humanName: e.humanName,
  };
}
function _w(e) {
  return fw.find((t) => e.includes(t.partialName))?.locale || "en";
}
function Zd(e, t) {
  if (e.length === t.length) {
    return e === t;
  } else {
    return Xc(e) === Xc(t);
  }
}
function Xc(e) {
  return e.split("-")[0];
}
let ze;
let na;
let uo;
async function ww() {
  if (!ze) {
    await Ew();
    Sw(ze);
    xw(ze);
  }
}
async function vS() {
  return await lw(ze.auth());
}
async function Ja() {
  return await Yd(ze.auth());
}
async function Cw() {
  const e = await Ja();
  if (e) {
    return await e.getIdToken();
  }
}
async function yS() {
  const e = await Ja();
  if (e) {
    return e.uid;
  }
}
async function bS() {
  const e = await Ja();
  if (e?.isAnonymous) {
    return await e.getIdToken();
  }
}
function _S(e) {
  Nw();
  return new Promise((t) => {
    uo ||= new na.auth.AuthUI(ze.auth());
    uo.start(`#${e}`, {
      signInFlow: "popup",
      credentialHelper: na.auth.CredentialHelper.NONE,
      signInOptions: [
        {
          provider: ze.auth.GoogleAuthProvider.PROVIDER_ID,
          customParameters: {
            prompt: "select_account",
          },
        },
        ze.auth.TwitterAuthProvider.PROVIDER_ID,
        ze.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: (n) => {
          t(n.user);
          return !!n.user;
        },
      },
      tosUrl: "/terms",
      privacyPolicyUrl: "/privacy-policy.html",
    });
  });
}
async function wS() {
  const e = ze.auth();
  return await cw(e);
}
async function CS(e) {
  const t = ze.auth();
  t.languageCode = hw("Google", e);
  const n = Tw("Google");
  return await uw(t, n);
}
async function ES() {
  try {
    await ze.auth().signOut();
  } catch {}
}
async function Ew() {
  ze = (await ke(() => import("./index.esm-v347.js"), __vite__mapDeps([0, 1])))
    .default;
  await ke(() => import("./index.esm-v3473.js"), __vite__mapDeps([2, 1]));
  await ke(() => import("./index.esm-v3472.js"), __vite__mapDeps([3, 1]));
  na = await ke(
    () => import("./esm-v347.js"),
    __vite__mapDeps([4, 0, 1, 2, 5])
  );
}
function Sw(e) {
  if (kw()) {
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
function kw() {
  return ze.apps && ze.apps.length > 0;
}
function xw(e) {
  const t = e.firestore();
  try {
    t.enablePersistence({
      synchronizeTabs: true,
    });
  } catch {}
}
function Tw(e) {
  const t = {
    google: new ze.auth.GoogleAuthProvider(),
    facebook: new ze.auth.FacebookAuthProvider(),
    twitter: new ze.auth.TwitterAuthProvider(),
  };
  return t[e.toLowerCase()] || t.google;
}
function Nw() {
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
const Aw = u_("wheel", {
  state: () => ({
    wheelConfig: new _t(),
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
    wheelIsShared: (e) => !!e.shareMode && __(e.shareMode),
    wheelIsCopyable: (e) => !!e.shareMode && e.shareMode !== "spin-only",
    wheelIsAdvanced: (e) => e.wheelConfig.isAdvanced,
    wheelTitle: (e) => e.wheelConfig.title,
    wheelDescription: (e) => e.wheelConfig.description,
    showTitle: (e) => e.wheelConfig.showTitle,
    hubSize: (e) => e.wheelConfig.hubSize,
  },
  actions: {
    setWheelConfig(e) {
      this.wheelConfig = new _t(e);
      this.persistWheelConfig();
    },
    setWheelConfigNoPersist(e) {
      this.wheelConfig = new _t(e);
    },
    saveWheelConfigForUndo() {
      this.previousWheelConfig = this.wheelConfig.getJson();
    },
    undoWheelConfigChange() {
      this.setWheelConfig(new _t(JSON.parse(this.previousWheelConfig)));
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
      const e = new _t();
      e.entries = Ln([
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
      this.wheelConfig.entries = Ln(e);
      this.persistWheelConfig();
    },
    setEntriesNoPersist(e) {
      this.wheelConfig.entries = Ln(e);
    },
    shuffleEntries() {
      this.wheelConfig.entries = v_(this.wheelConfig.entries);
      this.persistWheelConfig();
    },
    sortEntries() {
      this.wheelConfig.entries = Uc(ue(this.wheelConfig.entries));
      this.persistWheelConfig();
    },
    addEntry(e) {
      this.wheelConfig.entries.push({
        ...e,
        id: $s(),
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
      this.wheelConfig.entries = Ln(this.wheelConfig.entries);
      this.persistWheelConfig();
    },
    setTextEntries(e) {
      this.wheelConfig.entries = Ln(
        e.map((t) => ({
          text: t,
        }))
      );
      this.persistWheelConfig();
    },
    addTextEntries(e) {
      this.wheelConfig.entries = Ln([
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
        id: $s(),
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
      this.winners = Uc(this.winners);
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
      this.setWheelConfig(new _t());
      this.clearWinners();
    },
    async addImageEntry(e) {
      let t;
      if (this.wheelConfig.isAdvanced) {
        const n = await oo(e);
        if (ao(n)) {
          t = {
            image: e,
            weight: 1,
            enabled: true,
          };
        } else {
          t = {
            image: e,
            color: ar(n).slice(0, 7),
            weight: 1,
            enabled: true,
          };
        }
      } else {
        t = {
          image: e,
        };
      }
      t.id = $s();
      this.wheelConfig.entries.push(t);
      this.persistWheelConfig();
    },
    async addImageToEntry(e, t) {
      const n = this.wheelConfig.entries.at(t);
      if (n) {
        const r = await oo(e);
        if (!ao(r)) {
          n.color = ar(r).slice(0, 7);
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
            const n = await oo(t.image);
            if (!ao(n)) {
              t.color = ar(n).slice(0, 7);
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
const fo = r_(() => s_());
const Iw = Un({
  __name: "App",
  setup(e) {
    document.querySelector("#preload-static-content")?.remove();
    const t = Vv();
    const { t: n, locale: r } = Pi();
    const s = Aw();
    const i = M(() =>
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
        : s.wheelConfig.title
        ? s.wheelConfig.title
        : `Wheel of Names | ${n("app.Random name picker")}`
    );
    t_(i);
    const o = M(() => s.wheelConfig);
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
    de(
      () => o.value.pageBackgroundColor,
      () => {
        l(o.value.pageBackgroundColor);
      }
    );
    de(
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
    de(
      () => t.path,
      () => {
        c();
        u();
      },
      {
        immediate: true,
      }
    );
    de(
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
      const h = Wm("router-view");
      Js();
      return Zs(h);
    };
  },
});
function SS(e) {
  return e;
}
const Pw = [
  {
    path: "/faq/:section?",
    component: () =>
      ke(
        () => import("./FaqPage-v347.js"),
        __vite__mapDeps([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
      ),
  },
  {
    path: "/user-reviews-and-tutorials",
    component: () =>
      ke(
        () => import("./TutorialsPage-v347.js"),
        __vite__mapDeps([19, 7, 8, 20, 21, 13, 14, 11, 15, 16])
      ),
  },
  {
    path: "/how-to-use-in-the-classroom",
    component: () =>
      ke(
        () => import("./ClassroomPage-v347.js"),
        __vite__mapDeps([22, 7, 8, 20, 21, 13, 14, 11, 15, 16])
      ),
  },
  {
    path: "/privacy-policy",
    alias: "/privacy-policy.html",
    component: () =>
      ke(
        () => import("./PrivacyPolicyPage-v347.js"),
        __vite__mapDeps([23, 7, 8, 17, 24, 13, 14, 11, 15, 16, 25])
      ),
  },
  {
    path: "/terms",
    component: () =>
      ke(
        () => import("./TermsOfServicePage-v347.js"),
        __vite__mapDeps([26, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
      ),
  },
  {
    path: "/changelog",
    component: () =>
      ke(
        () => import("./ChangelogPage-v347.js"),
        __vite__mapDeps([27, 7, 8, 13, 14, 11, 15, 16, 24, 28])
      ),
  },
  {
    path: "/gallery",
    component: () =>
      ke(
        () => import("./GalleryPage-v347.js"),
        __vite__mapDeps([
          29, 30, 7, 8, 9, 13, 14, 11, 15, 16, 31, 32, 33, 34, 35, 36,
        ])
      ),
  },
  {
    path: "/api-doc",
    component: () =>
      ke(
        () => import("./ApiPage-v347.js"),
        __vite__mapDeps([37, 7, 8, 9, 38, 39, 35, 13, 14, 11, 15, 16, 40])
      ),
  },
  {
    path: "/:lang([a-z][a-z][a-z]?|[a-z][a-z]-[A-Z][A-Z])?",
    children: [
      {
        path: "",
        component: () =>
          ke(
            () => import("./EditWheelPage-v347.js"),
            __vite__mapDeps([
              41, 30, 7, 8, 11, 10, 12, 39, 14, 32, 33, 34, 42, 43, 5, 44, 45,
              35, 46, 24, 47, 21, 17, 38, 48, 49,
            ])
          ),
      },
      {
        path: "noads",
        component: () =>
          ke(
            () => import("./EditWheelPage-v347.js"),
            __vite__mapDeps([
              41, 30, 7, 8, 11, 10, 12, 39, 14, 32, 33, 34, 42, 43, 5, 44, 45,
              35, 46, 24, 47, 21, 17, 38, 48, 49,
            ])
          ),
      },
      {
        path: ":sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
        alias: "view/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)",
        component: () =>
          ke(
            () => import("./SharedWheelPage-v347.js"),
            __vite__mapDeps([50, 30, 8, 11, 39, 43, 5, 44, 45, 35, 46, 48, 51])
          ),
      },
      {
        path: "gallery",
        component: () =>
          ke(
            () => import("./GalleryPage-v347.js"),
            __vite__mapDeps([
              29, 30, 7, 8, 9, 13, 14, 11, 15, 16, 31, 32, 33, 34, 35, 36,
            ])
          ),
      },
    ],
  },
  {
    path: "/view/:lang([a-z][a-z][a-z]?|[a-z][a-z]-[A-Z][A-Z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)?",
    component: () =>
      ke(
        () => import("./SharedWheelPage-v347.js"),
        __vite__mapDeps([50, 30, 8, 11, 39, 43, 5, 44, 45, 35, 46, 48, 51])
      ),
  },
  {
    path: "/export",
    component: () =>
      ke(
        () => import("./ExportPage-v347.js"),
        __vite__mapDeps([52, 7, 8, 9, 39, 13, 14, 11, 15, 16, 53])
      ),
  },
  {
    path: "/translations",
    component: () =>
      ke(
        () => import("./TranslationPage-v347.js"),
        __vite__mapDeps([54, 7, 8, 24, 13, 14, 11, 15, 16, 38])
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
          ke(
            () => import("./AdminPage-v347.js"),
            __vite__mapDeps([55, 56, 32, 7, 8, 9, 15, 11, 47, 21, 57])
          ),
      },
      {
        path: "review",
        component: () =>
          ke(
            () => import("./ReviewWheelPage-v347.js"),
            __vite__mapDeps([
              58, 56, 32, 42, 34, 7, 8, 24, 9, 11, 43, 5, 44, 15, 35, 59,
            ])
          ),
      },
      {
        path: "gallery",
        component: () =>
          ke(
            () => import("./GalleryReviewPage-v347.js"),
            __vite__mapDeps([60, 56, 7, 8, 9, 31, 32, 33, 34, 35, 36, 61])
          ),
      },
      {
        path: "account",
        component: () =>
          ke(
            () => import("./AdminAccountPage-v347.js"),
            __vite__mapDeps([62, 39])
          ),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => ke(() => import("./Error404-v347.js"), []),
  },
];
const ho = () => {
  const t = jv({
    scrollBehavior: (n) =>
      n.hash
        ? {
            el: n.hash,
            top: 50,
          }
        : {
            top: 0,
          },
    routes: Pw,
    history: mv("/"),
  });
  t.beforeEach(async (n, r, s) => {
    if (n.matched[0]?.meta.adminOnly) {
      await ww();
      const o = await Cw();
      if (await ow(o)) {
        s();
      } else {
        alert("Please log in as an admin user.");
        s(false);
      }
    } else {
      s();
    }
  });
  t.onError((n) => {
    nw("RouterError", n);
    if (
      confirm(`An update is available. Do you want to reload?

If reloading does not fix the issue, try using https://old.wheelofnames.com.`)
    ) {
      window.location.reload();
    }
  });
  return t;
};
async function Lw(e, t) {
  const n = e(Iw);
  n.use(Dp, t);
  const r = typeof fo == "function" ? await fo({}) : fo;
  n.use(r);
  const s = Bn(
    typeof ho == "function"
      ? await ho({
          store: r,
        })
      : ho
  );
  r.use(({ store: i }) => {
    i.router = s;
  });
  return {
    app: n,
    store: r,
    router: s,
  };
}
const Ow = {
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
function Rw(e, t, n) {
  let r;
  function s() {
    if (r !== undefined) {
      qo.remove(r);
      r = undefined;
    }
  }
  kt(() => {
    if (e.value === true) {
      s();
    }
  });
  return {
    removeFromHistory: s,
    addToHistory() {
      r = {
        condition: () => n.value === true,
        handler: t,
      };
      qo.add(r);
    },
  };
}
function js(e) {
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
function eh(e, t) {
  if (typeof t.type == "symbol") {
    if (Array.isArray(t.children) === true) {
      t.children.forEach((n) => {
        eh(e, n);
      });
    }
  } else {
    e.add(t);
  }
}
function kS(e) {
  const t = new Set();
  e.forEach((n) => {
    eh(t, n);
  });
  return Array.from(t);
}
function th(e) {
  return e.appContext.config.globalProperties.$router !== undefined;
}
function nh(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
function Mw() {
  let e = null;
  const t = Se();
  function n() {
    if (e !== null) {
      clearTimeout(e);
      e = null;
    }
  }
  _i(n);
  kt(n);
  return {
    removeTimeout: n,
    registerTimeout(r, s) {
      n();
      if (nh(t) === false) {
        e = setTimeout(() => {
          e = null;
          r();
        }, s);
      }
    },
  };
}
function Fw() {
  let e;
  const t = Se();
  function n() {
    e = undefined;
  }
  _i(n);
  kt(n);
  return {
    removeTick: n,
    registerTick(r) {
      e = r;
      at(() => {
        if (e === r) {
          if (nh(t) === false) {
            e();
          }
          e = undefined;
        }
      });
    },
  };
}
const Dw = {
  modelValue: {
    type: Boolean,
    default: null,
  },
  "onUpdate:modelValue": [Function, Array],
};
const $w = ["beforeShow", "show", "beforeHide", "hide"];
function jw({
  showing: e,
  canShow: t,
  hideOnRouteChange: n,
  handleShow: r,
  handleHide: s,
  processOnMount: i,
}) {
  const o = Se();
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
      at(() => {
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
      at(() => {
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
      if (s !== undefined) {
        s(m);
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
  de(() => a.modelValue, A);
  if (n !== undefined && th(o) === true) {
    de(
      () => c.$route.fullPath,
      () => {
        if (n.value === true && e.value === true) {
          p();
        }
      }
    );
  }
  if (i === true) {
    St(() => {
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
const qw = {
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
function Vw(e, t = () => {}, n = () => {}) {
  return {
    transitionProps: M(() => {
      const r = `q-transition--${e.transitionShow || t()}`;
      const s = `q-transition--${e.transitionHide || n()}`;
      return {
        appear: true,
        enterFromClass: `${r}-enter-from`,
        enterActiveClass: `${r}-enter-active`,
        enterToClass: `${r}-enter-to`,
        leaveFromClass: `${s}-leave-from`,
        leaveActiveClass: `${s}-leave-active`,
        leaveToClass: `${s}-leave-to`,
      };
    }),
    transitionStyle: M(
      () => `--q-transition-duration: ${e.transitionDuration}ms`
    ),
  };
}
let On = [];
let cs = [];
function rh(e) {
  cs = cs.filter((t) => t !== e);
}
function Ww(e) {
  rh(e);
  cs.push(e);
}
function Yc(e) {
  rh(e);
  if (cs.length === 0 && On.length !== 0) {
    On[On.length - 1]();
    On = [];
  }
}
function Za(e) {
  if (cs.length === 0) {
    e();
  } else {
    On.push(e);
  }
}
function Bw(e) {
  On = On.filter((t) => t !== e);
}
const lr = [];
const Qr = [];
let Uw = 1;
let un = document.body;
function Fi(e, t) {
  const n = document.createElement("div");
  n.id = t !== undefined ? `q-portal--${t}--${Uw++}` : e;
  if (ii.globalNodes !== undefined) {
    const r = ii.globalNodes.class;
    if (r !== undefined) {
      n.className = r;
    }
  }
  un.appendChild(n);
  lr.push(n);
  Qr.push(t);
  return n;
}
function el(e) {
  const t = lr.indexOf(e);
  lr.splice(t, 1);
  Qr.splice(t, 1);
  e.remove();
}
function Hw(e) {
  if (e === un) {
    return;
  }
  un = e;
  if (
    un === document.body ||
    Qr.reduce((n, r) => (r === "dialog" ? n + 1 : n), 0) < 2
  ) {
    lr.forEach((n) => {
      if (n.contains(un) === false) {
        un.appendChild(n);
      }
    });
    return;
  }
  const t = Qr.lastIndexOf("dialog");
  for (let n = 0; n < lr.length; n++) {
    const r = lr[n];
    if ((n === t || Qr[n] !== "dialog") && r.contains(un) === false) {
      un.appendChild(r);
    }
  }
}
const qs = [];
function xS(e) {
  return qs.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function zw(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      e.hide(t);
      if (e.$props.separateClosePopup === true) {
        return js(e);
      }
    } else if (e.__qPortal === true) {
      const n = js(e);
      if (n?.$options.name === "QPopupProxy") {
        e.hide(t);
        return n;
      } else {
        return e;
      }
    }
    e = js(e);
  } while (e != null);
}
function TS(e, t, n) {
  while (n !== 0 && e !== undefined && e !== null) {
    if (e.__qPortal === true) {
      n--;
      if (e.$options.name === "QMenu") {
        e = zw(e, t);
        continue;
      }
      e.hide(t);
    }
    e = js(e);
  }
}
const Kw = Ye({
  name: "QPortal",
  setup(e, { slots: t }) {
    return () => t.default();
  },
});
function Gw(e) {
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
function Qw(e, t, n, r) {
  const s = he(false);
  const i = he(false);
  let o = null;
  const a = {};
  const l = r === "dialog" && Gw(e);
  function c(f) {
    if (f === true) {
      Yc(a);
      i.value = true;
      return;
    }
    i.value = false;
    if (s.value === false) {
      if (l === false && o === null) {
        o = Fi(false, r);
      }
      s.value = true;
      qs.push(e.proxy);
      Ww(a);
    }
  }
  function u(f) {
    i.value = false;
    if (f !== true) {
      return;
    }
    Yc(a);
    s.value = false;
    const d = qs.indexOf(e.proxy);
    if (d !== -1) {
      qs.splice(d, 1);
    }
    if (o !== null) {
      el(o);
      o = null;
    }
  }
  Ci(() => {
    u(true);
  });
  e.proxy.__qPortal = true;
  yr(e.proxy, "contentEl", () => t.value);
  return {
    showPortal: c,
    hidePortal: u,
    portalIsActive: s,
    portalIsAccessible: i,
    renderPortal: () =>
      l === true
        ? n()
        : s.value === true
        ? [
            j(
              Pm,
              {
                to: o,
              },
              j(Kw, n)
            ),
          ]
        : undefined,
  };
}
function ra(e, t) {
  const n = e.style;
  for (const r in t) {
    n[r] = t[r];
  }
}
function Xw(e) {
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
  const t = Xt(e);
  if (t) {
    return t.$el || t;
  }
}
function Yw(e, t) {
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
const NS = [Element, String];
const Jw = [
  null,
  document,
  document.body,
  document.scrollingElement,
  document.documentElement,
];
function AS(e, t) {
  let n = Xw(t);
  if (n === undefined) {
    if (e == null) {
      return window;
    }
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  if (Jw.includes(n)) {
    return window;
  } else {
    return n;
  }
}
function sh(e) {
  if (e === window) {
    return window.pageYOffset || window.scrollY || document.body.scrollTop || 0;
  } else {
    return e.scrollTop;
  }
}
function ih(e) {
  if (e === window) {
    return (
      window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    );
  } else {
    return e.scrollLeft;
  }
}
function oh(e, t, n = 0) {
  const r = arguments[3] === undefined ? performance.now() : arguments[3];
  const s = sh(e);
  if (n <= 0) {
    if (s !== t) {
      sa(e, t);
    }
    return;
  }
  requestAnimationFrame((i) => {
    const o = i - r;
    const a = s + ((t - s) / Math.max(o, n)) * o;
    sa(e, a);
    if (a !== t) {
      oh(e, t, n - o, i);
    }
  });
}
function ah(e, t, n = 0) {
  const r = arguments[3] === undefined ? performance.now() : arguments[3];
  const s = ih(e);
  if (n <= 0) {
    if (s !== t) {
      ia(e, t);
    }
    return;
  }
  requestAnimationFrame((i) => {
    const o = i - r;
    const a = s + ((t - s) / Math.max(o, n)) * o;
    ia(e, a);
    if (a !== t) {
      ah(e, t, n - o, i);
    }
  });
}
function sa(e, t) {
  if (e === window) {
    window.scrollTo(
      window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
      t
    );
    return;
  }
  e.scrollTop = t;
}
function ia(e, t) {
  if (e === window) {
    window.scrollTo(
      t,
      window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    );
    return;
  }
  e.scrollLeft = t;
}
function IS(e, t, n) {
  if (n) {
    oh(e, t, n);
    return;
  }
  sa(e, t);
}
function PS(e, t, n) {
  if (n) {
    ah(e, t, n);
    return;
  }
  ia(e, t);
}
let xs;
function LS() {
  if (xs !== undefined) {
    return xs;
  }
  const e = document.createElement("p");
  const t = document.createElement("div");
  ra(e, {
    width: "100%",
    height: "200px",
  });
  ra(t, {
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
  xs = n - r;
  return xs;
}
function Zw(e, t = true) {
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
let Ar = 0;
let mo;
let go;
let Mr;
let po = false;
let Jc;
let Zc;
let eu;
let An = null;
function e0(e) {
  if (t0(e)) {
    bt(e);
  }
}
function t0(e) {
  if (
    e.target === document.body ||
    e.target.classList.contains("q-layout__backdrop")
  ) {
    return true;
  }
  const t = yp(e);
  const n = e.shiftKey && !e.deltaX;
  const r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY);
  const s = n || r ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    if (Zw(o, r)) {
      if (r) {
        if (s < 0 && o.scrollTop === 0) {
          return true;
        } else {
          return s > 0 && o.scrollTop + o.clientHeight === o.scrollHeight;
        }
      } else if (s < 0 && o.scrollLeft === 0) {
        return true;
      } else {
        return s > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
      }
    }
  }
  return true;
}
function tu(e) {
  if (e.target === document) {
    document.scrollingElement.scrollTop = document.scrollingElement.scrollTop;
  }
}
function Ts(e) {
  if (po !== true) {
    po = true;
    requestAnimationFrame(() => {
      po = false;
      const { height: t } = e.target;
      const { clientHeight: n, scrollTop: r } = document.scrollingElement;
      if (Mr === undefined || t !== window.innerHeight) {
        Mr = n - t;
        document.scrollingElement.scrollTop = r;
      }
      if (r > Mr) {
        document.scrollingElement.scrollTop -= Math.ceil((r - Mr) / 8);
      }
    });
  }
}
function nu(e) {
  const t = document.body;
  const n = window.visualViewport !== undefined;
  if (e === "add") {
    const { overflowY: r, overflowX: s } = window.getComputedStyle(t);
    mo = ih(window);
    go = sh(window);
    Jc = t.style.left;
    Zc = t.style.top;
    eu = window.location.href;
    t.style.left = `-${mo}px`;
    t.style.top = `-${go}px`;
    if (
      s !== "hidden" &&
      (s === "scroll" || t.scrollWidth > window.innerWidth)
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
    if (Ve.is.ios === true) {
      if (n === true) {
        window.scrollTo(0, 0);
        window.visualViewport.addEventListener("resize", Ts, ct.passiveCapture);
        window.visualViewport.addEventListener("scroll", Ts, ct.passiveCapture);
        window.scrollTo(0, 0);
      } else {
        window.addEventListener("scroll", tu, ct.passiveCapture);
      }
    }
  }
  if (Ve.is.desktop === true && Ve.is.mac === true) {
    window[`${e}EventListener`]("wheel", e0, ct.notPassive);
  }
  if (e === "remove") {
    if (Ve.is.ios === true) {
      if (n === true) {
        window.visualViewport.removeEventListener(
          "resize",
          Ts,
          ct.passiveCapture
        );
        window.visualViewport.removeEventListener(
          "scroll",
          Ts,
          ct.passiveCapture
        );
      } else {
        window.removeEventListener("scroll", tu, ct.passiveCapture);
      }
    }
    t.classList.remove("q-body--prevent-scroll");
    t.classList.remove("q-body--force-scrollbar-x");
    t.classList.remove("q-body--force-scrollbar-y");
    document.qScrollPrevented = false;
    t.style.left = Jc;
    t.style.top = Zc;
    if (window.location.href === eu) {
      window.scrollTo(mo, go);
    }
    Mr = undefined;
  }
}
function oa(e) {
  let t = "add";
  if (e === true) {
    Ar++;
    if (An !== null) {
      clearTimeout(An);
      An = null;
      return;
    }
    if (Ar > 1) {
      return;
    }
  } else {
    if (Ar === 0 || (Ar--, Ar > 0)) {
      return;
    }
    t = "remove";
    if (Ve.is.ios === true && Ve.is.nativeMobile === true) {
      if (An !== null) {
        clearTimeout(An);
      }
      An = setTimeout(() => {
        nu(t);
        An = null;
      }, 100);
      return;
    }
  }
  nu(t);
}
function n0() {
  let e;
  return {
    preventBodyScroll(t) {
      if (t !== e && (e !== undefined || t === true)) {
        e = t;
        oa(t);
      }
    },
  };
}
function It(e, t) {
  return (e !== undefined && e()) || t;
}
function OS(e, t) {
  if (e !== undefined) {
    const n = e();
    if (n != null) {
      return n.slice();
    }
  }
  return t;
}
function Rn(e, t) {
  if (e !== undefined) {
    return t.concat(e());
  } else {
    return t;
  }
}
function r0(e, t) {
  if (e === undefined) {
    return t;
  } else if (t !== undefined) {
    return t.concat(e());
  } else {
    return e();
  }
}
function RS(e, t, n, r, s, i) {
  t.key = r + s;
  const o = j(e, t, n);
  if (s === true) {
    return af(o, i());
  } else {
    return o;
  }
}
const jn = [];
let pr;
function s0(e) {
  pr = e.keyCode === 27;
}
function i0() {
  if (pr === true) {
    pr = false;
  }
}
function o0(e) {
  if (pr === true) {
    pr = false;
    if (ss(e, 27) === true) {
      jn[jn.length - 1](e);
    }
  }
}
function lh(e) {
  window[e]("keydown", s0);
  window[e]("blur", i0);
  window[e]("keyup", o0);
  pr = false;
}
function a0(e) {
  if (Ve.is.desktop === true) {
    jn.push(e);
    if (jn.length === 1) {
      lh("addEventListener");
    }
  }
}
function ru(e) {
  const t = jn.indexOf(e);
  if (t !== -1) {
    jn.splice(t, 1);
    if (jn.length === 0) {
      lh("removeEventListener");
    }
  }
}
const qn = [];
function ch(e) {
  qn[qn.length - 1](e);
}
function l0(e) {
  if (Ve.is.desktop === true) {
    qn.push(e);
    if (qn.length === 1) {
      document.body.addEventListener("focusin", ch);
    }
  }
}
function su(e) {
  const t = qn.indexOf(e);
  if (t !== -1) {
    qn.splice(t, 1);
    if (qn.length === 0) {
      document.body.removeEventListener("focusin", ch);
    }
  }
}
let Ns = 0;
const c0 = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center",
};
const iu = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"],
};
const u0 = Ye({
  name: "QDialog",
  inheritAttrs: false,
  props: {
    ...Dw,
    ...qw,
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
  emits: [...$w, "shake", "click", "escapeKey"],
  setup(e, { slots: t, emit: n, attrs: r }) {
    const s = Se();
    const i = he(null);
    const o = he(false);
    const a = he(false);
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
    const { preventBodyScroll: h } = n0();
    const { registerTimeout: p } = Mw();
    const { registerTick: E, removeTick: A } = Fw();
    const { transitionProps: b, transitionStyle: m } = Vw(
      e,
      () => iu[e.position][0],
      () => iu[e.position][1]
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
    } = Qw(s, i, Re, "dialog");
    const { hide: W } = jw({
      showing: o,
      hideOnRouteChange: d,
      handleShow: ee,
      handleHide: J,
      processOnMount: true,
    });
    const { addToHistory: k, removeFromHistory: O } = Rw(o, W, d);
    const q = M(
      () =>
        `q-dialog__inner flex no-pointer-events q-dialog__inner--${
          e.maximized === true ? "maximized" : "minimized"
        } q-dialog__inner--${e.position} ${c0[e.position]}${
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
    de(
      () => e.maximized,
      (ne) => {
        if (o.value === true) {
          fe(ne);
        }
      }
    );
    de(S, (ne) => {
      h(ne);
      if (ne === true) {
        l0(Ie);
        a0(ie);
      } else {
        su(Ie);
        ru(ie);
      }
    });
    function ee(ne) {
      k();
      c =
        e.noRefocus === false && document.activeElement !== null
          ? document.activeElement
          : null;
      fe(e.maximized);
      y();
      a.value = true;
      if (e.noFocus !== true) {
        document.activeElement?.blur();
        E(Q);
      } else {
        A();
      }
      p(() => {
        if (s.proxy.$q.platform.is.ios === true) {
          if (e.seamless !== true && document.activeElement) {
            const { top: F, bottom: Y } =
              document.activeElement.getBoundingClientRect();
            const { innerHeight: X } = window;
            const te =
              window.visualViewport !== undefined
                ? window.visualViewport.height
                : X;
            if (F > 0 && Y > te / 2) {
              document.scrollingElement.scrollTop = Math.min(
                document.scrollingElement.scrollHeight - te,
                Y >= X
                  ? Infinity
                  : Math.ceil(document.scrollingElement.scrollTop + Y - te / 2)
              );
            }
            document.activeElement.scrollIntoView();
          }
          f = true;
          i.value.click();
          f = false;
        }
        y(true);
        a.value = false;
        n("show", ne);
      }, e.transitionDuration);
    }
    function J(ne) {
      A();
      O();
      ce(true);
      a.value = true;
      x();
      if (c !== null) {
        (
          (ne?.type.indexOf("key") === 0
            ? c.closest('[tabindex]:not([tabindex^="-"])')
            : undefined) || c
        ).focus();
        c = null;
      }
      p(() => {
        x(true);
        a.value = false;
        n("hide", ne);
      }, e.transitionDuration);
    }
    function Q(ne) {
      Za(() => {
        let F = i.value;
        if (F !== null) {
          if (ne !== undefined) {
            const Y = F.querySelector(ne);
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
    function K(ne) {
      if (ne && typeof ne.focus == "function") {
        ne.focus({
          preventScroll: true,
        });
      } else {
        Q();
      }
      n("shake");
      const F = i.value;
      if (F !== null) {
        F.classList.remove("q-animate--scale");
        F.classList.add("q-animate--scale");
        if (l !== null) {
          clearTimeout(l);
        }
        l = setTimeout(() => {
          l = null;
          if (i.value !== null) {
            F.classList.remove("q-animate--scale");
            Q();
          }
        }, 170);
      }
    }
    function ie() {
      if (e.seamless !== true) {
        if (e.persistent === true || e.noEscDismiss === true) {
          if (e.maximized !== true && e.noShake !== true) {
            K();
          }
        } else {
          n("escapeKey");
          W();
        }
      }
    }
    function ce(ne) {
      if (l !== null) {
        clearTimeout(l);
        l = null;
      }
      if (ne === true || o.value === true) {
        fe(false);
        if (e.seamless !== true) {
          h(false);
          su(Ie);
          ru(ie);
        }
      }
      if (ne !== true) {
        c = null;
      }
    }
    function fe(ne) {
      if (ne === true) {
        if (u !== true) {
          if (Ns < 1) {
            document.body.classList.add("q-body--dialog");
          }
          Ns++;
          u = true;
        }
      } else if (u === true) {
        if (Ns < 2) {
          document.body.classList.remove("q-body--dialog");
        }
        Ns--;
        u = false;
      }
    }
    function z(ne) {
      if (f !== true) {
        W(ne);
        n("click", ne);
      }
    }
    function ge(ne) {
      if (e.persistent !== true && e.noBackdropDismiss !== true) {
        W(ne);
      } else if (e.noShake !== true) {
        K();
      }
    }
    function Ie(ne) {
      if (
        e.allowFocusOutside !== true &&
        L.value === true &&
        Yw(i.value, ne.target) !== true
      ) {
        Q('[tabindex]:not([tabindex="-1"])');
      }
    }
    Object.assign(s.proxy, {
      focus: Q,
      shake: K,
      __updateRefocusTarget(ne) {
        c = ne || null;
      },
    });
    kt(ce);
    function Re() {
      return j(
        "div",
        {
          role: "dialog",
          "aria-modal": S.value === true ? "true" : "false",
          ...r,
          class: D.value,
        },
        [
          j(
            ns,
            {
              name: "q-transition--fade",
              appear: true,
            },
            () =>
              S.value === true
                ? j("div", {
                    class: "q-dialog__backdrop fixed-full",
                    style: C.value,
                    "aria-hidden": "true",
                    tabindex: -1,
                    onClick: ge,
                  })
                : null
          ),
          j(ns, b.value, () =>
            o.value === true
              ? j(
                  "div",
                  {
                    ref: i,
                    class: q.value,
                    style: m.value,
                    tabindex: -1,
                    ...G.value,
                  },
                  It(t.default)
                )
              : null
          ),
        ]
      );
    }
    return I;
  },
});
const aa = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46,
};
const ms = {
  size: String,
};
function gs(e, t = aa) {
  return M(() =>
    e.size !== undefined
      ? {
          fontSize: e.size in t ? `${t[e.size]}px` : e.size,
        }
      : null
  );
}
const ou = "0 0 24 24";
const vo = (e) => e;
const yo = (e) => `ionicons ${e}`;
const uh = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": vo,
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": yo,
  "ion-ios": yo,
  "ion-logo": yo,
  "iconfont ": vo,
  "ti-": (e) => `themify-icon ${e}`,
  "bi-": (e) => `bootstrap-icons ${e}`,
  "i-": vo,
};
const fh = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp",
};
const dh = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp",
};
const f0 = new RegExp("^(" + Object.keys(uh).join("|") + ")");
const d0 = new RegExp("^(" + Object.keys(fh).join("|") + ")");
const au = new RegExp("^(" + Object.keys(dh).join("|") + ")");
const h0 = /^[Mm]\s?[-+]?\.?\d/;
const m0 = /^img:/;
const g0 = /^svguse:/;
const p0 = /^ion-/;
const v0 =
  /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
const Zt = Ye({
  name: "QIcon",
  props: {
    ...ms,
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
    } = Se();
    const r = gs(e);
    const s = M(
      () =>
        "q-icon" +
        (e.left === true ? " on-left" : "") +
        (e.right === true ? " on-right" : "") +
        (e.color !== undefined ? ` text-${e.color}` : "")
    );
    const i = M(() => {
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
      if (h0.test(a) === true) {
        const [u, f = ou] = a.split("|");
        return {
          svg: true,
          viewBox: f,
          nodes: u.split("&&").map((d) => {
            const [h, p, E] = d.split("@@");
            return j("path", {
              style: p,
              d: h,
              transform: E,
            });
          }),
        };
      }
      if (m0.test(a) === true) {
        return {
          img: true,
          src: a.substring(4),
        };
      }
      if (g0.test(a) === true) {
        const [u, f = ou] = a.split("|");
        return {
          svguse: true,
          src: u.substring(7),
          viewBox: f,
        };
      }
      let l = " ";
      const c = a.match(f0);
      if (c !== null) {
        o = uh[c[1]](a);
      } else if (v0.test(a) === true) {
        o = a;
      } else if (p0.test(a) === true) {
        o = `ionicons ion-${
          n.platform.is.ios === true ? "ios" : "md"
        }${a.substring(3)}`;
      } else if (au.test(a) === true) {
        o = "notranslate material-symbols";
        const u = a.match(au);
        if (u !== null) {
          a = a.substring(6);
          o += dh[u[1]];
        }
        l = a;
      } else {
        o = "notranslate material-icons";
        const u = a.match(d0);
        if (u !== null) {
          a = a.substring(2);
          o += fh[u[1]];
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
        class: s.value,
        style: r.value,
        "aria-hidden": "true",
      };
      if (i.value.none === true) {
        return j(e.tag, o, It(t.default));
      } else if (i.value.img === true) {
        return j(
          e.tag,
          o,
          Rn(t.default, [
            j("img", {
              src: i.value.src,
            }),
          ])
        );
      } else if (i.value.svg === true) {
        return j(
          e.tag,
          o,
          Rn(t.default, [
            j(
              "svg",
              {
                viewBox: i.value.viewBox || "0 0 24 24",
              },
              i.value.nodes
            ),
          ])
        );
      } else if (i.value.svguse === true) {
        return j(
          e.tag,
          o,
          Rn(t.default, [
            j(
              "svg",
              {
                viewBox: i.value.viewBox,
              },
              [
                j("use", {
                  "xlink:href": i.value.src,
                }),
              ]
            ),
          ])
        );
      } else {
        if (i.value.cls !== undefined) {
          o.class += " " + i.value.cls;
        }
        return j(e.tag, o, Rn(t.default, [i.value.content]));
      }
    };
  },
});
const y0 = {
  size: {
    type: [String, Number],
    default: "1em",
  },
  color: String,
};
function b0(e) {
  return {
    cSize: M(() => (e.size in aa ? `${aa[e.size]}px` : e.size)),
    classes: M(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")),
  };
}
const vr = Ye({
  name: "QSpinner",
  props: {
    ...y0,
    thickness: {
      type: Number,
      default: 5,
    },
  },
  setup(e) {
    const { cSize: t, classes: n } = b0(e);
    return () =>
      j(
        "svg",
        {
          class: n.value + " q-spinner-mat",
          width: t.value,
          height: t.value,
          viewBox: "25 25 50 50",
        },
        [
          j("circle", {
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
function _0(e, t = 250) {
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
function lu(e, t, n, r) {
  if (n.modifiers.stop === true) {
    ri(e);
  }
  const s = n.modifiers.color;
  let i = n.modifiers.center;
  i = i === true || r === true;
  const o = document.createElement("span");
  const a = document.createElement("span");
  const l = vp(e);
  const { left: c, top: u, width: f, height: d } = t.getBoundingClientRect();
  const h = Math.sqrt(f * f + d * d);
  const p = h / 2;
  const E = `${(f - h) / 2}px`;
  const A = i ? E : `${l.left - c - p}px`;
  const b = `${(d - h) / 2}px`;
  const m = i ? b : `${l.top - u - p}px`;
  a.className = "q-ripple__inner";
  ra(a, {
    height: `${h}px`,
    width: `${h}px`,
    transform: `translate3d(${A},${m},0) scale3d(.2,.2,1)`,
    opacity: 0,
  });
  o.className = `q-ripple${s ? " text-" + s : ""}`;
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
function cu(e, { modifiers: t, value: n, arg: r }) {
  const s = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: s.early === true,
    stop: s.stop === true,
    center: s.center === true,
    color: s.color || r,
    keyCodes: [].concat(s.keyCodes || 13),
  };
}
const w0 = pp({
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
      start(s) {
        if (
          r.enabled === true &&
          s.qSkipRipple !== true &&
          s.type === (r.modifiers.early === true ? "pointerdown" : "click")
        ) {
          lu(s, e, r, s.qKeyEvent === true);
        }
      },
      keystart: _0((s) => {
        if (
          r.enabled === true &&
          s.qSkipRipple !== true &&
          ss(s, r.modifiers.keyCodes) === true &&
          s.type === `key${r.modifiers.early === true ? "down" : "up"}`
        ) {
          lu(s, e, r, true);
        }
      }, 300),
    };
    cu(r, t);
    e.__qripple = r;
    bp(r, "main", [
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
          cu(n, t);
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
      _p(t, "main");
      delete e._qripple;
    }
  },
});
const hh = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch",
};
const C0 = Object.keys(hh);
const mh = {
  align: {
    type: String,
    validator: (e) => C0.includes(e),
  },
};
function gh(e) {
  return M(() => {
    const t =
      e.align === undefined
        ? e.vertical === true
          ? "stretch"
          : "left"
        : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${hh[t]}`;
  });
}
function uu(e) {
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
function fu(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function E0(e, t) {
  for (const n in t) {
    const r = t[n];
    const s = e[n];
    if (typeof r == "string") {
      if (r !== s) {
        return false;
      }
    } else if (
      Array.isArray(s) === false ||
      s.length !== r.length ||
      r.some((i, o) => i !== s[o])
    ) {
      return false;
    }
  }
  return true;
}
function du(e, t) {
  if (Array.isArray(t) === true) {
    return e.length === t.length && e.every((n, r) => n === t[r]);
  } else {
    return e.length === 1 && e[0] === t;
  }
}
function S0(e, t) {
  if (Array.isArray(e) === true) {
    return du(e, t);
  } else if (Array.isArray(t) === true) {
    return du(t, e);
  } else {
    return e === t;
  }
}
function k0(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) {
    return false;
  }
  for (const n in e) {
    if (S0(e[n], t[n]) === false) {
      return false;
    }
  }
  return true;
}
const ph = {
  to: [String, Object],
  replace: Boolean,
  href: String,
  target: String,
  disable: Boolean,
};
const MS = {
  ...ph,
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
function x0({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  const n = Se();
  const { props: r, proxy: s, emit: i } = n;
  const o = th(n);
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
    const W = s.$route.matched;
    if (W.length === 0) {
      return -1;
    }
    const k = W.findIndex(fu.bind(null, I));
    if (k !== -1) {
      return k;
    }
    const O = uu(x[L - 2]);
    if (L > 1 && uu(I) === O && W[W.length - 1].path !== O) {
      return W.findIndex(fu.bind(null, x[L - 2]));
    } else {
      return k;
    }
  });
  const E = M(
    () =>
      u.value === true && p.value !== -1 && E0(s.$route.params, c.value.params)
  );
  const A = M(
    () =>
      E.value === true &&
      p.value === s.$route.matched.length - 1 &&
      k0(s.$route.params, c.value.params)
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
      return s.$router.resolve(x);
    } catch {}
    return null;
  }
  function C(
    x,
    { returnRouterError: L, to: I = r.to, replace: W = r.replace } = {}
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
    const k = s.$router[W === true ? "replace" : "push"](I);
    if (L === true) {
      return k;
    } else {
      return k.then(() => {}).catch(() => {});
    }
  }
  function y(x) {
    if (u.value === true) {
      const L = (I) => C(x, I);
      i("click", x, L);
      if (x.defaultPrevented !== true) {
        L();
      }
    } else {
      i("click", x);
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
const hu = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};
const T0 = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24,
};
const N0 = ["button", "submit", "reset"];
const A0 = /[^\s]\/[^\s]/;
const I0 = ["flat", "outline", "push", "unelevated"];
function vh(e, t) {
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
function FS(e) {
  const t = vh(e);
  if (t !== undefined) {
    return {
      [t]: true,
    };
  } else {
    return {};
  }
}
const P0 = {
  ...ms,
  ...ph,
  type: {
    type: String,
    default: "button",
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...I0.reduce((e, t) => (e[t] = Boolean) && e, {}),
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
    ...mh.align,
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
const L0 = {
  ...P0,
  round: Boolean,
};
function O0(e) {
  const t = gs(e, T0);
  const n = gh(e);
  const {
    hasRouterLink: r,
    hasLink: s,
    linkTag: i,
    linkAttrs: o,
    navigateOnClick: a,
  } = x0({
    fallbackTag: "button",
  });
  const l = M(() => {
    const A = e.fab === false && e.fabMini === false ? t.value : {};
    if (e.padding !== undefined) {
      return Object.assign({}, A, {
        padding: e.padding
          .split(/\s+/)
          .map((b) => (b in hu ? hu[b] + "px" : b))
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
  const d = M(() => vh(e, "standard"));
  const h = M(() => {
    const A = {
      tabindex: f.value,
    };
    if (s.value === true) {
      Object.assign(A, o.value);
    } else if (N0.includes(e.type) === true) {
      A.type = e.type;
    }
    if (i.value === "a") {
      if (e.disable === true) {
        A["aria-disabled"] = "true";
      } else if (A.href === undefined) {
        A.role = "button";
      }
      if (r.value !== true && A0.test(e.type) === true) {
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
    hasLink: s,
    linkTag: i,
    navigateOnClick: a,
    isActionable: u,
  };
}
const { passiveCapture: vt } = ct;
let Qn = null;
let Xn = null;
let Yn = null;
const la = Ye({
  name: "QBtn",
  props: {
    ...L0,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array],
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: r } = Se();
    const {
      classes: s,
      style: i,
      innerClasses: o,
      attributes: a,
      hasLink: l,
      linkTag: c,
      navigateOnClick: u,
      isActionable: f,
    } = O0(e);
    const d = he(null);
    const h = he(null);
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
          onKeydown: W,
          onMousedown: O,
        };
        if (r.$q.platform.has.touch === true) {
          const ee = e.onTouchstart !== undefined ? "" : "Passive";
          D[`onTouchstart${ee}`] = k;
        }
        return D;
      }
      return {
        onClick: bt,
      };
    });
    const L = M(() => ({
      ref: d,
      class: "q-btn q-btn-item non-selectable no-outline " + s.value,
      style: i.value,
      ...a.value,
      ...x.value,
    }));
    function I(D) {
      if (d.value !== null) {
        if (D !== undefined) {
          if (D.defaultPrevented === true) {
            return;
          }
          const ee = document.activeElement;
          if (
            e.type === "submit" &&
            ee !== document.body &&
            d.value.contains(ee) === false &&
            ee.contains(d.value) === false
          ) {
            if (D.qAvoidFocus !== true) {
              d.value.focus();
            }
            const J = () => {
              document.removeEventListener("keydown", bt, true);
              document.removeEventListener("keyup", J, vt);
              d.value?.removeEventListener("blur", J, vt);
            };
            document.addEventListener("keydown", bt, true);
            document.addEventListener("keyup", J, vt);
            d.value.addEventListener("blur", J, vt);
          }
        }
        u(D);
      }
    }
    function W(D) {
      if (d.value !== null) {
        n("keydown", D);
        if (ss(D, [13, 32]) === true && Xn !== d.value) {
          if (Xn !== null) {
            S();
          }
          if (D.defaultPrevented !== true) {
            if (D.qAvoidFocus !== true) {
              d.value.focus();
            }
            Xn = d.value;
            d.value.classList.add("q-btn--active");
            document.addEventListener("keyup", q, true);
            d.value.addEventListener("blur", q, vt);
          }
          bt(D);
        }
      }
    }
    function k(D) {
      if (d.value !== null) {
        n("touchstart", D);
        if (D.defaultPrevented !== true) {
          if (Qn !== d.value) {
            if (Qn !== null) {
              S();
            }
            Qn = d.value;
            p = D.target;
            p.addEventListener("touchcancel", q, vt);
            p.addEventListener("touchend", q, vt);
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
    function O(D) {
      if (d.value !== null) {
        D.qSkipRipple = E === true;
        n("mousedown", D);
        if (D.defaultPrevented !== true && Yn !== d.value) {
          if (Yn !== null) {
            S();
          }
          Yn = d.value;
          d.value.classList.add("q-btn--active");
          document.addEventListener("mouseup", q, vt);
        }
      }
    }
    function q(D) {
      if (
        d.value !== null &&
        (D?.type !== "blur" || document.activeElement !== d.value)
      ) {
        if (D?.type === "keyup") {
          if (Xn === d.value && ss(D, [13, 32]) === true) {
            const ee = new MouseEvent("click", D);
            ee.qKeyEvent = true;
            if (D.defaultPrevented === true) {
              vn(ee);
            }
            if (D.cancelBubble === true) {
              ri(ee);
            }
            d.value.dispatchEvent(ee);
            bt(D);
            D.qKeyEvent = true;
          }
          n("keyup", D);
        }
        S();
      }
    }
    function S(D) {
      const ee = h.value;
      if (
        D !== true &&
        (Qn === d.value || Yn === d.value) &&
        ee !== null &&
        ee !== document.activeElement
      ) {
        ee.setAttribute("tabindex", -1);
        ee.focus();
      }
      if (Qn === d.value) {
        if (p !== null) {
          p.removeEventListener("touchcancel", q, vt);
          p.removeEventListener("touchend", q, vt);
        }
        Qn = p = null;
      }
      if (Yn === d.value) {
        document.removeEventListener("mouseup", q, vt);
        Yn = null;
      }
      if (Xn === d.value) {
        document.removeEventListener("keyup", q, true);
        d.value?.removeEventListener("blur", q, vt);
        Xn = null;
      }
      d.value?.classList.remove("q-btn--active");
    }
    function G(D) {
      bt(D);
      D.qSkipRipple = true;
    }
    kt(() => {
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
          j(Zt, {
            name: e.icon,
            left: e.stack !== true && b.value === true,
            role: "img",
          })
        );
      }
      if (b.value === true) {
        D.push(
          j(
            "span",
            {
              class: "block",
            },
            [e.label]
          )
        );
      }
      D = Rn(t.default, D);
      if (e.iconRight !== undefined && e.round === false) {
        D.push(
          j(Zt, {
            name: e.iconRight,
            right: e.stack !== true && b.value === true,
            role: "img",
          })
        );
      }
      const ee = [
        j("span", {
          class: "q-focus-helper",
          ref: h,
        }),
      ];
      if (e.loading === true && e.percentage !== undefined) {
        ee.push(
          j(
            "span",
            {
              class:
                "q-btn__progress absolute-full overflow-hidden" +
                (e.darkPercentage === true ? " q-btn__progress--dark" : ""),
            },
            [
              j("span", {
                class: "q-btn__progress-indicator fit block",
                style: y.value,
              }),
            ]
          )
        );
      }
      ee.push(
        j(
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
        ee.push(
          j(
            ns,
            {
              name: "q-transition--fade",
            },
            () =>
              e.loading === true
                ? [
                    j(
                      "span",
                      {
                        key: "loading",
                        class: "absolute-full flex flex-center",
                      },
                      t.loading !== undefined ? t.loading() : [j(vr)]
                    ),
                  ]
                : null
          )
        );
      }
      return af(j(c.value, L.value, ee), [[w0, m.value, undefined, C.value]]);
    };
  },
});
const Hn = {
  dark: {
    type: Boolean,
    default: null,
  },
};
function zn(e, t) {
  return M(() => (e.dark === null ? t.dark.isActive : e.dark));
}
const R0 = Ye({
  name: "QCard",
  props: {
    ...Hn,
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
    } = Se();
    const r = zn(e, n);
    const s = M(
      () =>
        "q-card" +
        (r.value === true ? " q-card--dark q-dark" : "") +
        (e.bordered === true ? " q-card--bordered" : "") +
        (e.square === true ? " q-card--square no-border-radius" : "") +
        (e.flat === true ? " q-card--flat no-shadow" : "")
    );
    return () =>
      j(
        e.tag,
        {
          class: s.value,
        },
        It(t.default)
      );
  },
});
const Ir = Ye({
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
      j(
        e.tag,
        {
          class: n.value,
        },
        It(t.default)
      );
  },
});
const M0 = Ye({
  name: "QCardActions",
  props: {
    ...mh,
    vertical: Boolean,
  },
  setup(e, { slots: t }) {
    const n = gh(e);
    const r = M(
      () =>
        `q-card__actions ${n.value} q-card__actions--${
          e.vertical === true ? "vert column" : "horiz row"
        }`
    );
    return () =>
      j(
        "div",
        {
          class: r.value,
        },
        It(t.default)
      );
  },
});
const F0 = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset",
};
const bo = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
};
const mu = Ye({
  name: "QSeparator",
  props: {
    ...Hn,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String,
  },
  setup(e) {
    const t = Se();
    const n = zn(e, t.proxy.$q);
    const r = M(() => (e.vertical === true ? "vertical" : "horizontal"));
    const s = M(() => ` q-separator--${r.value}`);
    const i = M(() => (e.inset !== false ? `${s.value}-${F0[e.inset]}` : ""));
    const o = M(
      () =>
        `q-separator${s.value}${i.value}${
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
            ? `${bo.md}px`
            : e.spaced in bo
            ? `${bo[e.spaced]}px`
            : e.spaced;
        const u = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
        l[`margin${u[0]}`] = l[`margin${u[1]}`] = c;
      }
      return l;
    });
    return () =>
      j("hr", {
        class: o.value,
        style: a.value,
        "aria-orientation": r.value,
      });
  },
});
let _o;
let As = 0;
const Ke = new Array(256);
for (let e = 0; e < 256; e++) {
  Ke[e] = (e + 256).toString(16).substring(1);
}
const D0 = (() => {
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
const gu = 4096;
function ca() {
  if (_o === undefined || As + 16 > gu) {
    As = 0;
    _o = D0(gu);
  }
  const e = Array.prototype.slice.call(_o, As, (As += 16));
  e[6] = (e[6] & 15) | 64;
  e[8] = (e[8] & 63) | 128;
  return (
    Ke[e[0]] +
    Ke[e[1]] +
    Ke[e[2]] +
    Ke[e[3]] +
    "-" +
    Ke[e[4]] +
    Ke[e[5]] +
    "-" +
    Ke[e[6]] +
    Ke[e[7]] +
    "-" +
    Ke[e[8]] +
    Ke[e[9]] +
    "-" +
    Ke[e[10]] +
    Ke[e[11]] +
    Ke[e[12]] +
    Ke[e[13]] +
    Ke[e[14]] +
    Ke[e[15]]
  );
}
function $0(e) {
  return e ?? null;
}
function pu(e, t) {
  return e ?? (t === true ? `f_${ca()}` : null);
}
function j0({ getValue: e, required: t = true } = {}) {
  if (_n.value === true) {
    const n = he(e !== undefined ? $0(e()) : null);
    if (t === true && n.value === null) {
      St(() => {
        n.value = `f_${ca()}`;
      });
    }
    if (e !== undefined) {
      de(e, (r) => {
        n.value = pu(r, t);
      });
    }
    return n;
  }
  if (e !== undefined) {
    return M(() => pu(e(), t));
  } else {
    return he(`f_${ca()}`);
  }
}
const vu = /^on[A-Z]/;
function q0() {
  const { attrs: e, vnode: t } = Se();
  const n = {
    listeners: he({}),
    attributes: he({}),
  };
  function r() {
    const s = {};
    const i = {};
    for (const o in e) {
      if (o !== "class" && o !== "style" && vu.test(o) === false) {
        s[o] = e[o];
      }
    }
    for (const o in t.props) {
      if (vu.test(o) === true) {
        i[o] = t.props[o];
      }
    }
    n.attributes.value = s;
    n.listeners.value = i;
  }
  _f(r);
  r();
  return n;
}
function V0({ validate: e, resetValidation: t, requiresQForm: n }) {
  const r = lt(Op, false);
  if (r !== false) {
    const { props: s, proxy: i } = Se();
    Object.assign(i, {
      validate: e,
      resetValidation: t,
    });
    de(
      () => s.disable,
      (o) => {
        if (o === true) {
          if (typeof t == "function") {
            t();
          }
          r.unbindComponent(i);
        } else {
          r.bindComponent(i);
        }
      }
    );
    St(() => {
      if (s.disable !== true) {
        r.bindComponent(i);
      }
    });
    kt(() => {
      if (s.disable !== true) {
        r.unbindComponent(i);
      }
    });
  } else if (n === true) {
    console.error("Parent QForm not found on useFormChild()!");
  }
}
const yu = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/;
const bu = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/;
const _u = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const Is =
  /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/;
const Ps =
  /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
const wo = {
  date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
  time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
  fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
  timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
  email: (e) =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      e
    ),
  hexColor: (e) => yu.test(e),
  hexaColor: (e) => bu.test(e),
  hexOrHexaColor: (e) => _u.test(e),
  rgbColor: (e) => Is.test(e),
  rgbaColor: (e) => Ps.test(e),
  rgbOrRgbaColor: (e) => Is.test(e) || Ps.test(e),
  hexOrRgbColor: (e) => yu.test(e) || Is.test(e),
  hexaOrRgbaColor: (e) => bu.test(e) || Ps.test(e),
  anyColor: (e) => _u.test(e) || Is.test(e) || Ps.test(e),
};
const W0 = [true, false, "ondemand"];
const B0 = {
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
    validator: (e) => W0.includes(e),
  },
};
function U0(e, t) {
  const { props: n, proxy: r } = Se();
  const s = he(false);
  const i = he(null);
  const o = he(false);
  V0({
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
  const f = M(() => n.error === true || s.value === true);
  const d = M(() =>
    typeof n.errorMessage == "string" && n.errorMessage.length !== 0
      ? n.errorMessage
      : i.value
  );
  de(
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
  de(
    () => n.reactiveRules,
    (b) => {
      if (b === true) {
        if (l === undefined) {
          l = de(() => n.rules, h, {
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
  de(() => n.lazyRules, h);
  de(e, (b) => {
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
    s.value = false;
    i.value = null;
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
      s.value = L;
      i.value = I || null;
      t.value = false;
    };
    const x = [];
    for (let L = 0; L < n.rules.length; L++) {
      const I = n.rules[L];
      let W;
      if (typeof I == "function") {
        W = I(b, wo);
      } else if (typeof I == "string" && wo[I] !== undefined) {
        W = wo[I](b);
      }
      if (W === false || typeof W == "string") {
        y(true, W);
        return false;
      }
      if (W !== true && W !== undefined) {
        x.push(W);
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
          const I = L.find((W) => W === false || typeof W == "string");
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
  const A = ed(E, 0);
  kt(() => {
    l?.();
    A.cancel();
  });
  Object.assign(r, {
    resetValidation: p,
    validate: E,
  });
  yr(r, "hasError", () => f.value);
  return {
    isDirtyModel: o,
    hasRules: c,
    hasError: f,
    errorMessage: d,
    validate: E,
    resetValidation: p,
  };
}
function ua(e) {
  return e != null && ("" + e).length !== 0;
}
const H0 = {
  ...Hn,
  ...B0,
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
const z0 = {
  ...H0,
  maxlength: [Number, String],
};
const K0 = ["update:modelValue", "clear", "focus", "blur"];
function G0({
  requiredForAttr: e = true,
  tagProp: t,
  changeEvent: n = false,
} = {}) {
  const { props: r, proxy: s } = Se();
  const i = zn(r, s.$q);
  const o = j0({
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
    isDark: i,
    editable: M(() => r.disable !== true && r.readonly !== true),
    innerLoading: he(false),
    focused: he(false),
    hasPopupOpen: false,
    splitAttrs: q0(),
    targetUid: o,
    rootRef: he(null),
    targetRef: he(null),
    controlRef: he(null),
  };
}
function Q0(e) {
  const { props: t, emit: n, slots: r, attrs: s, proxy: i } = Se();
  const { $q: o } = i;
  let a = null;
  if (e.hasValue === undefined) {
    e.hasValue = M(() => ua(t.modelValue));
  }
  if (e.emitValue === undefined) {
    e.emitValue = (K) => {
      n("update:modelValue", K);
    };
  }
  if (e.controlEvents === undefined) {
    e.controlEvents = {
      onFocusin: k,
      onFocusout: O,
    };
  }
  Object.assign(e, {
    clearValue: q,
    onControlFocusin: k,
    onControlFocusout: O,
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
        const ie = t.maxlength !== undefined ? t.maxlength : t.maxValues;
        return K + (ie !== undefined ? " / " + ie : "");
      }
    });
  }
  const {
    isDirtyModel: l,
    hasRules: c,
    hasError: u,
    errorMessage: f,
    resetValidation: d,
  } = U0(e.focused, e.innerLoading);
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
    let ie = e.targetRef?.value;
    if (ie && (K === null || K.id !== e.targetUid.value)) {
      if (ie.hasAttribute("tabindex") !== true) {
        ie = ie.querySelector("[tabindex]");
      }
      if (ie !== K) {
        ie?.focus({
          preventScroll: true,
        });
      }
    }
  }
  function I() {
    Za(L);
  }
  function W() {
    Bw(L);
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
  function O(K, ie) {
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
        ie?.();
      }
    });
  }
  function q(K) {
    bt(K);
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
    at(() => {
      const ie = l.value;
      d();
      l.value = ie;
    });
  }
  function S(K) {
    if ([13, 32].includes(K.keyCode)) {
      q(K);
    }
  }
  function G() {
    const K = [];
    if (r.prepend !== undefined) {
      K.push(
        j(
          "div",
          {
            class:
              "q-field__prepend q-field__marginal row no-wrap items-center",
            key: "prepend",
            onClick: vn,
          },
          r.prepend()
        )
      );
    }
    K.push(
      j(
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
          j(Zt, {
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
                j(vr, {
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
          j(Zt, {
            class: "q-field__focusable-action",
            name: t.clearIcon || o.iconSet.field.clear,
            tabindex: 0,
            role: "button",
            "aria-hidden": "false",
            "aria-label": o.lang.label.clear,
            onKeyup: S,
            onClick: q,
          }),
        ])
      );
    }
    if (r.append !== undefined) {
      K.push(
        j(
          "div",
          {
            class: "q-field__append q-field__marginal row no-wrap items-center",
            key: "append",
            onClick: vn,
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
        j(
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
        j(
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
        j(
          "div",
          {
            class: C.value,
          },
          It(r.label, t.label)
        )
      );
    }
    if (t.suffix !== undefined && t.suffix !== null) {
      K.push(
        j(
          "div",
          {
            class: "q-field__suffix no-pointer-events row items-center",
          },
          t.suffix
        )
      );
    }
    return K.concat(It(r.default));
  }
  function ee() {
    let K;
    let ie;
    if (u.value === true) {
      if (f.value !== null) {
        K = [
          j(
            "div",
            {
              role: "alert",
            },
            f.value
          ),
        ];
        ie = `q--slot-error-${f.value}`;
      } else {
        K = It(r.error);
        ie = "q--slot-error";
      }
    } else if (t.hideHint !== true || e.focused.value === true) {
      if (t.hint !== undefined) {
        K = [j("div", t.hint)];
        ie = `q--slot-hint-${t.hint}`;
      } else {
        K = It(r.hint);
        ie = "q--slot-hint";
      }
    }
    const ce = t.counter === true || r.counter !== undefined;
    if (t.hideBottomSpace === true && ce === false && K === undefined) {
      return;
    }
    const fe = j(
      "div",
      {
        key: ie,
        class: "q-field__messages col",
      },
      K
    );
    return j(
      "div",
      {
        class:
          "q-field__bottom row items-start q-field__bottom--" +
          (t.hideBottomSpace !== true ? "animated" : "stale"),
        onClick: vn,
      },
      [
        t.hideBottomSpace === true
          ? fe
          : j(
              ns,
              {
                name: "q-transition--field-message",
              },
              () => fe
            ),
        ce === true
          ? j(
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
  function J(K, ie) {
    if (ie === null) {
      return null;
    } else {
      return j(
        "div",
        {
          key: K,
          class:
            "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",
        },
        ie
      );
    }
  }
  let Q = false;
  _i(() => {
    Q = true;
  });
  yf(() => {
    if (Q === true && t.autofocus === true) {
      i.focus();
    }
  });
  if (t.autofocus === true) {
    St(() => {
      i.focus();
    });
  }
  kt(() => {
    if (a !== null) {
      clearTimeout(a);
    }
  });
  Object.assign(i, {
    focus: I,
    blur: W,
  });
  return function () {
    const ie =
      e.getControl === undefined && r.control === undefined
        ? {
            ...e.splitAttrs.attributes.value,
            "data-autofocus": t.autofocus === true || undefined,
            ...x.value,
          }
        : x.value;
    return j(
      e.tag.value,
      {
        ref: e.rootRef,
        class: [A.value, s.class],
        style: s.style,
        ...ie,
      },
      [
        r.before !== undefined
          ? j(
              "div",
              {
                class:
                  "q-field__before q-field__marginal row no-wrap items-center",
                onClick: vn,
              },
              r.before()
            )
          : null,
        j(
          "div",
          {
            class: "q-field__inner relative-position col self-stretch",
          },
          [
            j(
              "div",
              {
                ref: e.controlRef,
                class: b.value,
                tabindex: -1,
                ...e.controlEvents,
              },
              G()
            ),
            p.value === true ? ee() : null,
          ]
        ),
        r.after !== undefined
          ? j(
              "div",
              {
                class:
                  "q-field__after q-field__marginal row no-wrap items-center",
                onClick: vn,
              },
              r.after()
            )
          : null,
      ]
    );
  };
}
const wu = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####",
};
const fi = {
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
const yh = Object.keys(fi);
yh.forEach((e) => {
  fi[e].regex = new RegExp(fi[e].pattern);
});
const X0 = new RegExp(
  "\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + yh.join("") + "])|(.)",
  "g"
);
const Cu = /[.*+?^${}()|[\]\\]/g;
const Fe = "";
const Y0 = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean,
};
function J0(e, t, n, r) {
  let s;
  let i;
  let o;
  let a;
  let l;
  let c;
  const u = he(null);
  const f = he(h());
  function d() {
    return (
      e.autogrow === true ||
      ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    );
  }
  de(() => e.type + e.autogrow, E);
  de(
    () => e.mask,
    (k) => {
      if (k !== undefined) {
        A(f.value, true);
      } else {
        const O = I(f.value);
        E();
        if (e.modelValue !== O) {
          t("update:modelValue", O);
        }
      }
    }
  );
  de(
    () => e.fillMask + e.reverseFillMask,
    () => {
      if (u.value === true) {
        A(f.value, true);
      }
    }
  );
  de(
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
        return W(k);
      } else {
        return k;
      }
    }
    return e.modelValue;
  }
  function p(k) {
    if (k < s.length) {
      return s.slice(-k);
    }
    let O = "";
    let q = s;
    const S = q.indexOf(Fe);
    if (S !== -1) {
      for (let G = k - q.length; G > 0; G--) {
        O += Fe;
      }
      q = q.slice(0, S) + O + q.slice(S);
    }
    return q;
  }
  function E() {
    u.value = e.mask !== undefined && e.mask.length !== 0 && d();
    if (u.value === false) {
      a = undefined;
      s = "";
      i = "";
      return;
    }
    const k = wu[e.mask] === undefined ? e.mask : wu[e.mask];
    const O =
      typeof e.fillMask == "string" && e.fillMask.length !== 0
        ? e.fillMask.slice(0, 1)
        : "_";
    const q = O.replace(Cu, "\\$&");
    const S = [];
    const G = [];
    const D = [];
    let ee = e.reverseFillMask === true;
    let J = "";
    let Q = "";
    k.replace(X0, (fe, z, ge, Ie, Re) => {
      if (Ie !== undefined) {
        const ne = fi[Ie];
        D.push(ne);
        Q = ne.negate;
        if (ee === true) {
          G.push(
            "(?:" +
              Q +
              "+)?(" +
              ne.pattern +
              "+)?(?:" +
              Q +
              "+)?(" +
              ne.pattern +
              "+)?"
          );
          ee = false;
        }
        G.push("(?:" + Q + "+)?(" + ne.pattern + ")?");
      } else if (ge !== undefined) {
        J = "\\" + (ge === "\\" ? "" : ge);
        D.push(ge);
        S.push("([^" + J + "]+)?" + J + "?");
      } else {
        const ne = z !== undefined ? z : Re;
        J = ne === "\\" ? "\\\\\\\\" : ne.replace(Cu, "\\\\$&");
        D.push(ne);
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
    const ie = G.length - 1;
    const ce = G.map((fe, z) =>
      z === 0 && e.reverseFillMask === true
        ? new RegExp("^" + q + "*" + fe)
        : z === ie
        ? new RegExp(
            "^" +
              fe +
              "(" +
              (Q === "" ? "." : Q) +
              "+)?" +
              (e.reverseFillMask === true ? "$" : q + "*")
          )
        : new RegExp("^" + fe)
    );
    o = D;
    a = (fe) => {
      const z = K.exec(
        e.reverseFillMask === true ? fe : fe.slice(0, D.length + 1)
      );
      if (z !== null) {
        fe = z.slice(1).join("");
      }
      const ge = [];
      const Ie = ce.length;
      for (let Re = 0, ne = fe; Re < Ie; Re++) {
        const F = ce[Re].exec(ne);
        if (F === null) {
          break;
        }
        ne = ne.slice(F.shift().length);
        ge.push(...F);
      }
      if (ge.length !== 0) {
        return ge.join("");
      } else {
        return fe;
      }
    };
    s = D.map((fe) => (typeof fe == "string" ? fe : Fe)).join("");
    i = s.split(Fe).join(O);
  }
  function A(k, O, q) {
    const S = r.value;
    const G = S.selectionEnd;
    const D = S.value.length - G;
    const ee = I(k);
    if (O === true) {
      E();
    }
    const J = x(ee);
    const Q = e.fillMask !== false ? W(J) : J;
    const K = f.value !== Q;
    if (S.value !== Q) {
      S.value = Q;
    }
    if (K === true) {
      f.value = Q;
    }
    if (document.activeElement === S) {
      at(() => {
        if (Q === i) {
          const ce = e.reverseFillMask === true ? i.length : 0;
          S.setSelectionRange(ce, ce, "forward");
          return;
        }
        if (q === "insertFromPaste" && e.reverseFillMask !== true) {
          const ce = S.selectionEnd;
          let fe = G - 1;
          for (let z = l; z <= fe && z < ce; z++) {
            if (s[z] !== Fe) {
              fe++;
            }
          }
          m.right(S, fe);
          return;
        }
        if (
          ["deleteContentBackward", "deleteContentForward"].indexOf(q) !== -1
        ) {
          const ce =
            e.reverseFillMask === true
              ? G === 0
                ? Q.length > J.length
                  ? 1
                  : 0
                : Math.max(
                    0,
                    Q.length - (Q === i ? 0 : Math.min(J.length, D) + 1)
                  ) + 1
              : G;
          S.setSelectionRange(ce, ce, "forward");
          return;
        }
        if (e.reverseFillMask === true) {
          if (K === true) {
            const ce = Math.max(
              0,
              Q.length - (Q === i ? 0 : Math.min(J.length, D + 1))
            );
            if (ce === 1 && G === 1) {
              S.setSelectionRange(ce, ce, "forward");
            } else {
              m.rightReverse(S, ce);
            }
          } else {
            const ce = Q.length - D;
            S.setSelectionRange(ce, ce, "backward");
          }
        } else if (K === true) {
          const ce = Math.max(0, s.indexOf(Fe), Math.min(J.length, G) - 1);
          m.right(S, ce);
        } else {
          const ce = G - 1;
          m.right(S, ce);
        }
      });
    }
    const ie = e.unmaskedValue === true ? I(Q) : Q;
    if (String(e.modelValue) !== ie && (e.modelValue !== null || ie !== "")) {
      n(ie, true);
    }
  }
  function b(k, O, q) {
    const S = x(I(k.value));
    O = Math.max(0, s.indexOf(Fe), Math.min(S.length, O));
    l = O;
    k.setSelectionRange(O, q, "forward");
  }
  const m = {
    left(k, O) {
      const q = s.slice(O - 1).indexOf(Fe) === -1;
      let S = Math.max(0, O - 1);
      for (; S >= 0; S--) {
        if (s[S] === Fe) {
          O = S;
          if (q === true) {
            O++;
          }
          break;
        }
      }
      if (S < 0 && s[O] !== undefined && s[O] !== Fe) {
        return m.right(k, 0);
      }
      if (O >= 0) {
        k.setSelectionRange(O, O, "backward");
      }
    },
    right(k, O) {
      const q = k.value.length;
      let S = Math.min(q, O + 1);
      for (; S <= q; S++) {
        if (s[S] === Fe) {
          O = S;
          break;
        } else if (s[S - 1] === Fe) {
          O = S;
        }
      }
      if (S > q && s[O - 1] !== undefined && s[O - 1] !== Fe) {
        return m.left(k, q);
      }
      k.setSelectionRange(O, O, "forward");
    },
    leftReverse(k, O) {
      const q = p(k.value.length);
      let S = Math.max(0, O - 1);
      for (; S >= 0; S--) {
        if (q[S - 1] === Fe) {
          O = S;
          break;
        } else if (q[S] === Fe && ((O = S), S === 0)) {
          break;
        }
      }
      if (S < 0 && q[O] !== undefined && q[O] !== Fe) {
        return m.rightReverse(k, 0);
      }
      if (O >= 0) {
        k.setSelectionRange(O, O, "backward");
      }
    },
    rightReverse(k, O) {
      const q = k.value.length;
      const S = p(q);
      const G = S.slice(0, O + 1).indexOf(Fe) === -1;
      let D = Math.min(q, O + 1);
      for (; D <= q; D++) {
        if (S[D - 1] === Fe) {
          O = D;
          if (O > 0 && G === true) {
            O--;
          }
          break;
        }
      }
      if (D > q && S[O - 1] !== undefined && S[O - 1] !== Fe) {
        return m.leftReverse(k, q);
      }
      k.setSelectionRange(O, O, "forward");
    },
  };
  function C(k) {
    t("click", k);
    c = undefined;
  }
  function y(k) {
    t("keydown", k);
    if (nd(k) === true || k.altKey === true) {
      return;
    }
    const O = r.value;
    const q = O.selectionStart;
    const S = O.selectionEnd;
    if (!k.shiftKey) {
      c = undefined;
    }
    if (k.keyCode === 37 || k.keyCode === 39) {
      if (k.shiftKey && c === undefined) {
        c = O.selectionDirection === "forward" ? q : S;
      }
      const G =
        m[
          (k.keyCode === 39 ? "right" : "left") +
            (e.reverseFillMask === true ? "Reverse" : "")
        ];
      k.preventDefault();
      G(O, c === q ? S : q);
      if (k.shiftKey) {
        const D = O.selectionStart;
        O.setSelectionRange(Math.min(c, D), Math.max(c, D), "forward");
      }
    } else if (k.keyCode === 8 && e.reverseFillMask !== true && q === S) {
      m.left(O, q);
      O.setSelectionRange(O.selectionStart, S, "backward");
    } else if (k.keyCode === 46 && e.reverseFillMask === true && q === S) {
      m.rightReverse(O, S);
      O.setSelectionRange(q, O.selectionEnd, "forward");
    }
  }
  function x(k) {
    if (k == null || k === "") {
      return "";
    }
    if (e.reverseFillMask === true) {
      return L(k);
    }
    const O = o;
    let q = 0;
    let S = "";
    for (let G = 0; G < O.length; G++) {
      const D = k[q];
      const ee = O[G];
      if (typeof ee == "string") {
        S += ee;
        if (D === ee) {
          q++;
        }
      } else if (D !== undefined && ee.regex.test(D)) {
        S += ee.transform !== undefined ? ee.transform(D) : D;
        q++;
      } else {
        return S;
      }
    }
    return S;
  }
  function L(k) {
    const O = o;
    const q = s.indexOf(Fe);
    let S = k.length - 1;
    let G = "";
    for (let D = O.length - 1; D >= 0 && S !== -1; D--) {
      const ee = O[D];
      let J = k[S];
      if (typeof ee == "string") {
        G = ee + G;
        if (J === ee) {
          S--;
        }
      } else if (J !== undefined && ee.regex.test(J)) {
        do {
          G = (ee.transform !== undefined ? ee.transform(J) : J) + G;
          S--;
          J = k[S];
        } while (q === D && J !== undefined && ee.regex.test(J));
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
  function W(k) {
    if (i.length - k.length <= 0) {
      return k;
    } else if (e.reverseFillMask === true && k.length !== 0) {
      return i.slice(0, -k.length) + k;
    } else {
      return k + i.slice(k.length);
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
const tl = {
  name: String,
};
function DS(e) {
  return M(() => ({
    type: "hidden",
    name: e.name,
    value: e.modelValue,
  }));
}
function bh(e = {}) {
  return (t, n, r) => {
    t[n](
      j("input", {
        class: "hidden" + (r || ""),
        ...e.value,
      })
    );
  };
}
function Z0(e) {
  return M(() => e.name || e.for);
}
function eC(e, t) {
  function n() {
    const r = e.modelValue;
    try {
      const s =
        "DataTransfer" in window
          ? new DataTransfer()
          : "ClipboardEvent" in window
          ? new ClipboardEvent("").clipboardData
          : undefined;
      if (Object(r) === r) {
        ("length" in r ? Array.from(r) : [r]).forEach((i) => {
          s.items.add(i);
        });
      }
      return {
        files: s.files,
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
const tC =
  /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
const nC =
  /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u;
const rC = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;
const sC = /[a-z0-9_ -]$/i;
function iC(e) {
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
      (Ve.is.firefox === true
        ? sC.test(n.data) === false
        : tC.test(n.data) === true ||
          nC.test(n.data) === true ||
          rC.test(n.data) === true) === true
    ) {
      n.target.qComposing = true;
    }
  };
}
const oC = Ye({
  name: "QInput",
  inheritAttrs: false,
  props: {
    ...z0,
    ...Y0,
    ...tl,
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
  emits: [...K0, "paste", "change", "keydown", "click", "animationend"],
  setup(e, { emit: t, attrs: n }) {
    const { proxy: r } = Se();
    const { $q: s } = r;
    const i = {};
    let o = NaN;
    let a;
    let l;
    let c = null;
    let u;
    const f = he(null);
    const d = Z0(e);
    const {
      innerValue: h,
      hasMask: p,
      moveCursorForPaste: E,
      updateMaskValue: A,
      onMaskedKeydown: b,
      onMaskedClick: m,
    } = J0(e, t, J, f);
    const C = eC(e, true);
    const y = M(() => ua(h.value));
    const x = iC(D);
    const L = G0({
      changeEvent: true,
    });
    const I = M(() => e.type === "textarea" || e.autogrow === true);
    const W = M(
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
        onBlur: ie,
        onFocus: ri,
      };
      z.onCompositionstart = z.onCompositionupdate = z.onCompositionend = x;
      if (p.value === true) {
        z.onKeydown = b;
        z.onClick = m;
      }
      if (e.autogrow === true) {
        z.onAnimationend = ee;
      }
      return z;
    });
    const O = M(() => {
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
    de(
      () => e.type,
      () => {
        if (f.value) {
          f.value.value = e.modelValue;
        }
      }
    );
    de(
      () => e.modelValue,
      (z) => {
        if (p.value === true) {
          if (l === true && ((l = false), String(z) === o)) {
            return;
          }
          A(z);
        } else if (h.value !== z) {
          h.value = z;
          if (e.type === "number" && i.hasOwnProperty("value") === true) {
            if (a === true) {
              a = false;
            } else {
              delete i.value;
            }
          }
        }
        if (e.autogrow === true) {
          at(Q);
        }
      }
    );
    de(
      () => e.autogrow,
      (z) => {
        if (z === true) {
          at(Q);
        } else if (f.value !== null && n.rows > 0) {
          f.value.style.height = "auto";
        }
      }
    );
    de(
      () => e.dense,
      () => {
        if (e.autogrow === true) {
          at(Q);
        }
      }
    );
    function q() {
      Za(() => {
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
        const ge = z.target;
        E(ge, ge.selectionStart, ge.selectionEnd);
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
      const ge = z.target.value;
      if (z.target.qComposing === true) {
        i.value = ge;
        return;
      }
      if (p.value === true) {
        A(ge, false, z.inputType);
      } else {
        J(ge);
        if (W.value === true && z.target === document.activeElement) {
          const { selectionStart: Ie, selectionEnd: Re } = z.target;
          if (Ie !== undefined && Re !== undefined) {
            at(() => {
              if (
                z.target === document.activeElement &&
                ge.indexOf(z.target.value) === 0
              ) {
                z.target.setSelectionRange(Ie, Re);
              }
            });
          }
        }
      }
      if (e.autogrow === true) {
        Q();
      }
    }
    function ee(z) {
      t("animationend", z);
      Q();
    }
    function J(z, ge) {
      u = () => {
        c = null;
        if (e.type !== "number" && i.hasOwnProperty("value") === true) {
          delete i.value;
        }
        if (e.modelValue !== z && o !== z) {
          o = z;
          if (ge === true) {
            l = true;
          }
          t("update:modelValue", z);
          at(() => {
            if (o === z) {
              o = NaN;
            }
          });
        }
        u = undefined;
      };
      if (e.type === "number") {
        a = true;
        i.value = z;
      }
      if (e.debounce !== undefined) {
        if (c !== null) {
          clearTimeout(c);
        }
        i.value = z;
        c = setTimeout(u, e.debounce);
      } else {
        u();
      }
    }
    function Q() {
      requestAnimationFrame(() => {
        const z = f.value;
        if (z !== null) {
          const ge = z.parentNode.style;
          const { scrollTop: Ie } = z;
          const { overflowY: Re, maxHeight: ne } =
            s.platform.is.firefox === true ? {} : window.getComputedStyle(z);
          const F = Re !== undefined && Re !== "scroll";
          if (F === true) {
            z.style.overflowY = "hidden";
          }
          ge.marginBottom = z.scrollHeight - 1 + "px";
          z.style.height = "1px";
          z.style.height = z.scrollHeight + "px";
          if (F === true) {
            z.style.overflowY =
              parseInt(ne, 10) < z.scrollHeight ? "auto" : "hidden";
          }
          ge.marginBottom = "";
          z.scrollTop = Ie;
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
    function ie(z) {
      if (z !== undefined) {
        ri(z);
      }
      if (c !== null) {
        clearTimeout(c);
        c = null;
      }
      u?.();
      a = false;
      l = false;
      delete i.value;
      if (e.type !== "file") {
        setTimeout(() => {
          if (f.value !== null) {
            f.value.value = h.value !== undefined ? h.value : "";
          }
        });
      }
    }
    function ce() {
      if (i.hasOwnProperty("value") === true) {
        return i.value;
      } else if (h.value !== undefined) {
        return h.value;
      } else {
        return "";
      }
    }
    kt(() => {
      ie();
    });
    St(() => {
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
          ua(e.displayValue)
      ),
      getControl: () =>
        j(I.value === true ? "textarea" : "input", {
          ref: f,
          class: ["q-field__native q-placeholder", e.inputClass],
          style: e.inputStyle,
          ...O.value,
          ...k.value,
          ...(e.type !== "file"
            ? {
                value: ce(),
              }
            : C.value),
        }),
      getShadowControl: () =>
        j(
          "div",
          {
            class:
              "q-field__native q-field__shadow absolute-bottom no-pointer-events" +
              (I.value === true ? "" : " text-no-wrap"),
          },
          [
            j(
              "span",
              {
                class: "invisible",
              },
              ce()
            ),
            j("span", e.shadowText),
          ]
        ),
    });
    const fe = Q0(L);
    Object.assign(r, {
      focus: q,
      select: S,
      getNativeElement: () => f.value,
    });
    yr(r, "nativeEl", () => f.value);
    return fe;
  },
});
function _h(e, t) {
  const n = he(null);
  const r = M(() =>
    e.disable === true
      ? null
      : j("span", {
          ref: n,
          class: "no-outline",
          tabindex: -1,
        })
  );
  function s(i) {
    const o = t.value;
    if (i?.qAvoidFocus !== true) {
      if (i?.type.indexOf("key") === 0) {
        if (
          document.activeElement !== o &&
          o?.contains(document.activeElement) === true
        ) {
          o.focus();
        }
      } else if (
        n.value !== null &&
        (i === undefined || o?.contains(i.target) === true)
      ) {
        n.value.focus();
      }
    }
  }
  return {
    refocusTargetEl: r,
    refocusTarget: s,
  };
}
const wh = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60,
};
const aC = () =>
  j(
    "svg",
    {
      key: "svg",
      class: "q-radio__bg absolute non-selectable",
      viewBox: "0 0 24 24",
    },
    [
      j("path", {
        d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12",
      }),
      j("path", {
        class: "q-radio__check",
        d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6",
      }),
    ]
  );
const lC = Ye({
  name: "QRadio",
  props: {
    ...Hn,
    ...ms,
    ...tl,
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
    const { proxy: r } = Se();
    const s = zn(e, r.$q);
    const i = gs(e, wh);
    const o = he(null);
    const { refocusTargetEl: a, refocusTarget: l } = _h(e, o);
    const c = M(() => ue(e.modelValue) === ue(e.val));
    const u = M(
      () =>
        "q-radio cursor-pointer no-outline row inline no-wrap items-center" +
        (e.disable === true ? " disabled" : "") +
        (s.value === true ? " q-radio--dark" : "") +
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
    const E = bh(p);
    function A(y) {
      if (y !== undefined) {
        bt(y);
        l(y);
      }
      if (e.disable !== true && c.value !== true) {
        n("update:modelValue", e.val, y);
      }
    }
    function b(y) {
      if (y.keyCode === 13 || y.keyCode === 32) {
        bt(y);
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
    const C = aC();
    return () => {
      const y =
        d.value !== null
          ? [
              j(
                "div",
                {
                  key: "icon",
                  class:
                    "q-radio__icon-container absolute-full flex flex-center no-wrap",
                },
                [
                  j(Zt, {
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
        j(
          "div",
          {
            class: f.value,
            style: i.value,
            "aria-hidden": "true",
          },
          y
        ),
      ];
      if (a.value !== null) {
        x.push(a.value);
      }
      const L =
        e.label !== undefined ? Rn(t.default, [e.label]) : It(t.default);
      if (L !== undefined) {
        x.push(
          j(
            "div",
            {
              class: "q-radio__label q-anchor--skip",
            },
            L
          )
        );
      }
      return j(
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
const Ch = {
  ...Hn,
  ...ms,
  ...tl,
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
const Eh = ["update:modelValue"];
function Sh(e, t) {
  const { props: n, slots: r, emit: s, proxy: i } = Se();
  const { $q: o } = i;
  const a = zn(n, o);
  const l = he(null);
  const { refocusTargetEl: c, refocusTarget: u } = _h(n, l);
  const f = gs(n, wh);
  const d = M(() => n.val !== undefined && Array.isArray(n.modelValue));
  const h = M(() => {
    const S = ue(n.val);
    if (d.value === true) {
      return n.modelValue.findIndex((G) => ue(G) === S);
    } else {
      return -1;
    }
  });
  const p = M(() =>
    d.value === true ? h.value !== -1 : ue(n.modelValue) === ue(n.trueValue)
  );
  const E = M(() =>
    d.value === true ? h.value === -1 : ue(n.modelValue) === ue(n.falseValue)
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
  const x = bh(y);
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
      bt(S);
      u(S);
    }
    if (n.disable !== true) {
      s("update:modelValue", W(), S);
    }
  }
  function W() {
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
      bt(S);
    }
  }
  function O(S) {
    if (S.keyCode === 13 || S.keyCode === 32) {
      I(S);
    }
  }
  const q = t(p, A);
  Object.assign(i, {
    toggle: I,
  });
  return () => {
    const S = q();
    if (n.disable !== true) {
      x(S, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    }
    const G = [
      j(
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
    const D = n.label !== undefined ? Rn(r.default, [n.label]) : It(r.default);
    if (D !== undefined) {
      G.push(
        j(
          "div",
          {
            class: `q-${e}__label q-anchor--skip`,
          },
          D
        )
      );
    }
    return j(
      "div",
      {
        ref: l,
        class: m.value,
        ...L.value,
        onClick: I,
        onKeydown: k,
        onKeyup: O,
      },
      G
    );
  };
}
const cC = () =>
  j(
    "div",
    {
      key: "svg",
      class: "q-checkbox__bg absolute",
    },
    [
      j(
        "svg",
        {
          class: "q-checkbox__svg fit absolute-full",
          viewBox: "0 0 24 24",
        },
        [
          j("path", {
            class: "q-checkbox__truthy",
            fill: "none",
            d: "M1.73,12.91 8.1,19.28 22.79,4.59",
          }),
          j("path", {
            class: "q-checkbox__indet",
            d: "M4,14H20V10H4",
          }),
        ]
      ),
    ]
  );
const uC = Ye({
  name: "QCheckbox",
  props: Ch,
  emits: Eh,
  setup(e) {
    const t = cC();
    function n(r, s) {
      const i = M(
        () =>
          (r.value === true
            ? e.checkedIcon
            : s.value === true
            ? e.indeterminateIcon
            : e.uncheckedIcon) || null
      );
      return () =>
        i.value !== null
          ? [
              j(
                "div",
                {
                  key: "icon",
                  class:
                    "q-checkbox__icon-container absolute-full flex flex-center no-wrap",
                },
                [
                  j(Zt, {
                    class: "q-checkbox__icon",
                    name: i.value,
                  }),
                ]
              ),
            ]
          : [t];
    }
    return Sh("checkbox", n);
  },
});
const fC = Ye({
  name: "QToggle",
  props: {
    ...Ch,
    icon: String,
    iconColor: String,
  },
  emits: Eh,
  setup(e) {
    function t(n, r) {
      const s = M(
        () =>
          (n.value === true
            ? e.checkedIcon
            : r.value === true
            ? e.indeterminateIcon
            : e.uncheckedIcon) || e.icon
      );
      const i = M(() => (n.value === true ? e.iconColor : null));
      return () => [
        j("div", {
          class: "q-toggle__track",
        }),
        j(
          "div",
          {
            class: "q-toggle__thumb absolute flex flex-center no-wrap",
          },
          s.value !== undefined
            ? [
                j(Zt, {
                  name: s.value,
                  color: i.value,
                }),
              ]
            : undefined
        ),
      ];
    }
    return Sh("toggle", t);
  },
});
const kh = {
  radio: lC,
  checkbox: uC,
  toggle: fC,
};
const dC = Object.keys(kh);
function Co(e, t) {
  if (typeof e == "function") {
    return e;
  }
  const n = e !== undefined ? e : t;
  return (r) => r[n];
}
const hC = Ye({
  name: "QOptionGroup",
  props: {
    ...Hn,
    modelValue: {
      required: true,
    },
    options: {
      type: Array,
      validator: (e) => e.every(dt),
      default: () => [],
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    name: String,
    type: {
      type: String,
      default: "radio",
      validator: (e) => dC.includes(e),
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
    } = Se();
    const s = Array.isArray(e.modelValue);
    if (e.type === "radio") {
      if (s === true) {
        console.error("q-option-group: model should not be array");
      }
    } else if (s === false) {
      console.error("q-option-group: model should be array in your case");
    }
    const i = zn(e, r);
    const o = M(() => kh[e.type]);
    const a = M(() => Co(e.optionValue, "value"));
    const l = M(() => Co(e.optionLabel, "label"));
    const c = M(() => Co(e.optionDisable, "disable"));
    const u = M(() =>
      e.options.map((p) => ({
        val: a.value(p),
        name: p.name === undefined ? e.name : p.name,
        disable: e.disable || c.value(p),
        leftLabel: p.leftLabel === undefined ? e.leftLabel : p.leftLabel,
        color: p.color === undefined ? e.color : p.color,
        checkedIcon: p.checkedIcon,
        uncheckedIcon: p.uncheckedIcon,
        dark: p.dark === undefined ? i.value : p.dark,
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
      j(
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
          return j("div", [
            j(
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
const mC = Ye({
  name: "DialogPluginComponent",
  props: {
    ...Hn,
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
    const { proxy: n } = Se();
    const { $q: r } = n;
    const s = zn(e, r);
    const i = he(null);
    const o = he(
      e.prompt !== undefined
        ? e.prompt.model
        : e.options !== undefined
        ? e.options.model
        : undefined
    );
    const a = M(
      () =>
        "q-dialog-plugin" +
        (s.value === true ? " q-dialog-plugin--dark q-dark" : "") +
        (e.progress !== false ? " q-dialog-plugin--progress" : "")
    );
    const l = M(() => e.color || (s.value === true ? "amber" : "primary"));
    const c = M(() =>
      e.progress === false
        ? null
        : dt(e.progress) === true
        ? {
            component: e.progress.spinner || vr,
            props: {
              color: e.progress.color || l.value,
            },
          }
        : {
            component: vr,
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
      dt(e.ok) === true || e.ok === true ? r.lang.label.ok : e.ok
    );
    const h = M(() =>
      dt(e.cancel) === true || e.cancel === true
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
      ...(dt(e.ok) === true
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
      ...(dt(e.cancel) === true
        ? e.cancel
        : {
            flat: true,
          }),
      "data-autofocus": (e.focus === "cancel" && u.value !== true) || undefined,
      onClick: y,
    }));
    de(() => e.prompt && e.prompt.model, L);
    de(() => e.options && e.options.model, L);
    function b() {
      i.value.show();
    }
    function m() {
      i.value.hide();
    }
    function C() {
      t("ok", ue(o.value));
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
        ss(D, 13) === true
      ) {
        C();
      }
    }
    function W(D, ee) {
      if (e.html === true) {
        return j(Ir, {
          class: D,
          innerHTML: ee,
        });
      } else {
        return j(
          Ir,
          {
            class: D,
          },
          () => ee
        );
      }
    }
    function k() {
      return [
        j(oC, {
          color: l.value,
          dense: true,
          autofocus: true,
          dark: s.value,
          ...f.value,
          modelValue: o.value,
          "onUpdate:modelValue": L,
          onKeyup: I,
        }),
      ];
    }
    function O() {
      return [
        j(hC, {
          color: l.value,
          options: e.options.items,
          dark: s.value,
          ...f.value,
          modelValue: o.value,
          "onUpdate:modelValue": L,
        }),
      ];
    }
    function q() {
      const D = [];
      if (e.cancel) {
        D.push(j(la, A.value));
      }
      if (e.ok) {
        D.push(j(la, E.value));
      }
      return j(
        M0,
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
        D.push(W("q-dialog__title", e.title));
      }
      if (e.progress !== false) {
        D.push(
          j(
            Ir,
            {
              class: "q-dialog__progress",
            },
            () => j(c.value.component, c.value.props)
          )
        );
      }
      if (e.message) {
        D.push(W("q-dialog__message", e.message));
      }
      if (e.prompt !== undefined) {
        D.push(
          j(
            Ir,
            {
              class: "scroll q-dialog-plugin__form",
            },
            k
          )
        );
      } else if (e.options !== undefined) {
        D.push(
          j(mu, {
            dark: s.value,
          }),
          j(
            Ir,
            {
              class: "scroll q-dialog-plugin__form",
            },
            O
          ),
          j(mu, {
            dark: s.value,
          })
        );
      }
      if (e.ok || e.cancel) {
        D.push(q());
      }
      return D;
    }
    function G() {
      return [
        j(
          R0,
          {
            class: [a.value, e.cardClass],
            style: e.cardStyle,
            dark: s.value,
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
      j(
        u0,
        {
          ref: i,
          onHide: x,
        },
        G
      );
  },
});
function xh(e, t) {
  for (const n in t) {
    if (n !== "spinner" && Object(t[n]) === t[n]) {
      e[n] =
        Object(e[n]) !== e[n]
          ? {}
          : {
              ...e[n],
            };
      xh(e[n], t[n]);
    } else {
      e[n] = t[n];
    }
  }
}
function gC(e, t, n) {
  return (r) => {
    let s;
    let i;
    const o = r.component !== undefined;
    if (o === true) {
      const { component: m, componentProps: C } = r;
      s = typeof m == "string" ? n.component(m) : m;
      i = C || {};
    } else {
      const { class: m, style: C, ...y } = r;
      s = e;
      i = y;
      if (m !== undefined) {
        y.cardClass = m;
      }
      if (C !== undefined) {
        y.cardStyle = C;
      }
    }
    let a;
    let l = false;
    const c = he(null);
    const u = Fi(false, "dialog");
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
            Object.assign(i, m);
          } else {
            const { class: C, style: y, ...x } = m;
            if (C !== undefined) {
              x.cardClass = C;
            }
            if (y !== undefined) {
              x.cardStyle = y;
            }
            xh(i, x);
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
      el(u);
      b = null;
      a = null;
      if (l !== true) {
        h.forEach((m) => {
          m();
        });
      }
    };
    let b = Oa(
      {
        name: "QGlobalDialog",
        setup: () => () =>
          j(s, {
            ...i,
            ref: c,
            onOk: E,
            onHide: A,
            onVnodeMounted(...m) {
              if (typeof i.onVnodeMounted == "function") {
                i.onVnodeMounted(...m);
              }
              at(() => f("show"));
            },
          }),
      },
      n
    );
    a = b.mount(u);
    return p;
  };
}
const pC = {
  install({ $q: e, parentApp: t }) {
    e.dialog = this.create = gC(mC, true, t);
  },
};
let Jn;
let Eo;
let Eu = 0;
let In = null;
let Ue = {};
let Mn = {};
const Th = {
  group: "__default_quasar_group__",
  delay: 0,
  message: false,
  html: false,
  spinnerSize: 80,
  spinnerColor: "",
  messageColor: "",
  backgroundColor: "",
  boxClass: "",
  spinner: vr,
  customClass: "",
};
const Nh = {
  ...Th,
};
function vC(e) {
  if (e?.group !== undefined && Mn[e.group] !== undefined) {
    return Object.assign(Mn[e.group], e);
  }
  const t =
    dt(e) === true && e.ignoreDefaults === true
      ? {
          ...Th,
          ...e,
        }
      : {
          ...Nh,
          ...e,
        };
  Mn[t.group] = t;
  return t;
}
const Tt = br(
  {
    isActive: false,
  },
  {
    show(e) {
      Ue = vC(e);
      const { group: t } = Ue;
      Tt.isActive = true;
      if (Jn !== undefined) {
        Ue.uid = Eu;
        Eo.$forceUpdate();
      } else {
        Ue.uid = ++Eu;
        if (In !== null) {
          clearTimeout(In);
        }
        In = setTimeout(() => {
          In = null;
          const n = Fi("q-loading");
          Jn = Oa(
            {
              name: "QLoading",
              setup() {
                St(() => {
                  oa(true);
                });
                function r() {
                  if (Tt.isActive !== true && Jn !== undefined) {
                    oa(false);
                    Jn.unmount(n);
                    el(n);
                    Jn = undefined;
                    Eo = undefined;
                  }
                }
                function s() {
                  if (Tt.isActive !== true) {
                    return null;
                  }
                  const i = [
                    j(Ue.spinner, {
                      class: "q-loading__spinner",
                      color: Ue.spinnerColor,
                      size: Ue.spinnerSize,
                    }),
                  ];
                  if (Ue.message) {
                    i.push(
                      j("div", {
                        class:
                          "q-loading__message" +
                          (Ue.messageColor ? ` text-${Ue.messageColor}` : ""),
                        [Ue.html === true ? "innerHTML" : "textContent"]:
                          Ue.message,
                      })
                    );
                  }
                  return j(
                    "div",
                    {
                      class:
                        "q-loading fullscreen flex flex-center z-max " +
                        Ue.customClass.trim(),
                      key: Ue.uid,
                    },
                    [
                      j("div", {
                        class:
                          "q-loading__backdrop" +
                          (Ue.backgroundColor
                            ? ` bg-${Ue.backgroundColor}`
                            : ""),
                      }),
                      j(
                        "div",
                        {
                          class:
                            "q-loading__box column items-center " + Ue.boxClass,
                        },
                        i
                      ),
                    ]
                  );
                }
                return () =>
                  j(
                    ns,
                    {
                      name: "q-transition--fade",
                      appear: true,
                      onAfterLeave: r,
                    },
                    s
                  );
              },
            },
            Tt.__parentApp
          );
          Eo = Jn.mount(n);
        }, Ue.delay);
      }
      return (n) => {
        if (n === undefined || Object(n) !== n) {
          Tt.hide(t);
          return;
        }
        Tt.show({
          ...n,
          group: t,
        });
      };
    },
    hide(e) {
      if (Tt.isActive === true) {
        if (e === undefined) {
          Mn = {};
        } else {
          if (Mn[e] === undefined) {
            return;
          }
          {
            delete Mn[e];
            const t = Object.keys(Mn);
            if (t.length !== 0) {
              const n = t[t.length - 1];
              Tt.show({
                group: n,
              });
              return;
            }
          }
        }
        if (In !== null) {
          clearTimeout(In);
          In = null;
        }
        Tt.isActive = false;
      }
    },
    setDefaults(e) {
      if (dt(e) === true) {
        Object.assign(Nh, e);
      }
    },
    install({ $q: e, parentApp: t }) {
      e.loading = this;
      Tt.__parentApp = t;
      if (e.config.loading !== undefined) {
        this.setDefaults(e.config.loading);
      }
    },
  }
);
const yC = Ye({
  name: "QAvatar",
  props: {
    ...ms,
    fontSize: String,
    color: String,
    textColor: String,
    icon: String,
    square: Boolean,
    rounded: Boolean,
  },
  setup(e, { slots: t }) {
    const n = gs(e);
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
    const s = M(() =>
      e.fontSize
        ? {
            fontSize: e.fontSize,
          }
        : null
    );
    return () => {
      const i =
        e.icon !== undefined
          ? [
              j(Zt, {
                name: e.icon,
              }),
            ]
          : undefined;
      return j(
        "div",
        {
          class: r.value,
          style: n.value,
        },
        [
          j(
            "div",
            {
              class: "q-avatar__content row flex-center overflow-hidden",
              style: s.value,
            },
            r0(t.default, i)
          ),
        ]
      );
    };
  },
});
let bC = 0;
const Vs = {};
const Ws = {};
const Nt = {};
const Ah = {};
const _C = /^\s*$/;
const Ih = [];
const wC = [undefined, null, true, false, ""];
const nl = [
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
const CC = ["top-left", "top-right", "bottom-left", "bottom-right"];
const Fr = {
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
function Ph(e, t, n) {
  if (!e) {
    return Pr("parameter required");
  }
  let r;
  const s = {
    textColor: "white",
  };
  if (e.ignoreDefaults !== true) {
    Object.assign(s, Vs);
  }
  if (dt(e) === false) {
    if (s.type) {
      Object.assign(s, Fr[s.type]);
    }
    e = {
      message: e,
    };
  }
  Object.assign(s, Fr[e.type || s.type], e);
  if (typeof s.icon == "function") {
    s.icon = s.icon(t);
  }
  if (s.spinner) {
    if (s.spinner === true) {
      s.spinner = vr;
    }
    s.spinner = Bn(s.spinner);
  } else {
    s.spinner = false;
  }
  s.meta = {
    hasMedia: s.spinner !== false || !!s.icon || !!s.avatar,
    hasText: Su(s.message) || Su(s.caption),
  };
  if (s.position) {
    if (nl.includes(s.position) === false) {
      return Pr("wrong position", e);
    }
  } else {
    s.position = "bottom";
  }
  if (wC.includes(s.timeout) === true) {
    s.timeout = 5000;
  } else {
    const l = Number(s.timeout);
    if (isNaN(l) || l < 0) {
      return Pr("wrong timeout", e);
    }
    s.timeout = Number.isFinite(l) ? l : 0;
  }
  if (s.timeout === 0) {
    s.progress = false;
  } else if (s.progress === true) {
    s.meta.progressClass =
      "q-notification__progress" +
      (s.progressClass ? ` ${s.progressClass}` : "");
    s.meta.progressStyle = {
      animationDuration: `${s.timeout + 1000}ms`,
    };
  }
  const i = (Array.isArray(e.actions) === true ? e.actions : [])
    .concat(
      e.ignoreDefaults !== true && Array.isArray(Vs.actions) === true
        ? Vs.actions
        : []
    )
    .concat(
      Array.isArray(Fr[e.type]?.actions) === true ? Fr[e.type].actions : []
    );
  const { closeBtn: o } = s;
  if (o) {
    i.push({
      label: typeof o == "string" ? o : t.lang.label.close,
    });
  }
  s.actions = i.map(({ handler: l, noDismiss: c, ...u }) => ({
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
  if (s.multiLine === undefined) {
    s.multiLine = s.actions.length > 1;
  }
  Object.assign(s.meta, {
    class: `q-notification row items-stretch q-notification--${
      s.multiLine === true ? "multi-line" : "standard"
    }${s.color !== undefined ? ` bg-${s.color}` : ""}${
      s.textColor !== undefined ? ` text-${s.textColor}` : ""
    }${s.classes !== undefined ? ` ${s.classes}` : ""}`,
    wrapperClass:
      "q-notification__wrapper col relative-position border-radius-inherit " +
      (s.multiLine === true
        ? "column no-wrap justify-center"
        : "row items-center"),
    contentClass:
      "q-notification__content row items-center" +
      (s.multiLine === true ? "" : " col"),
    leftClass: s.meta.hasText === true ? "additional" : "single",
    attrs: {
      role: "alert",
      ...s.attrs,
    },
  });
  if (s.group === false) {
    s.group = undefined;
    s.meta.group = undefined;
  } else {
    if (s.group === undefined || s.group === true) {
      s.group = [s.message, s.caption, s.multiline]
        .concat(s.actions.map((l) => `${l.label}*${l.icon}`))
        .join("|");
    }
    s.meta.group = s.group + "|" + s.position;
  }
  if (s.actions.length === 0) {
    s.actions = undefined;
  } else {
    s.meta.actionsClass =
      "q-notification__actions row items-center " +
      (s.multiLine === true ? "justify-end" : "col-auto") +
      (s.meta.hasMedia === true ? " q-notification__actions--with-media" : "");
  }
  if (n !== undefined) {
    if (n.notif.meta.timer) {
      clearTimeout(n.notif.meta.timer);
      n.notif.meta.timer = undefined;
    }
    s.meta.uid = n.notif.meta.uid;
    const l = Nt[s.position].value.indexOf(n.notif);
    Nt[s.position].value[l] = s;
  } else {
    const l = Ws[s.meta.group];
    if (l === undefined) {
      s.meta.uid = bC++;
      s.meta.badge = 1;
      if (["left", "right", "center"].indexOf(s.position) !== -1) {
        Nt[s.position].value.splice(
          Math.floor(Nt[s.position].value.length / 2),
          0,
          s
        );
      } else {
        const c = s.position.indexOf("top") !== -1 ? "unshift" : "push";
        Nt[s.position].value[c](s);
      }
      if (s.group !== undefined) {
        Ws[s.meta.group] = s;
      }
    } else {
      if (l.meta.timer) {
        clearTimeout(l.meta.timer);
        l.meta.timer = undefined;
      }
      if (s.badgePosition !== undefined) {
        if (CC.includes(s.badgePosition) === false) {
          return Pr("wrong badgePosition", e);
        }
      } else {
        s.badgePosition = `top-${
          s.position.indexOf("left") !== -1 ? "right" : "left"
        }`;
      }
      s.meta.uid = l.meta.uid;
      s.meta.badge = l.meta.badge + 1;
      s.meta.badgeClass = `q-notification__badge q-notification__badge--${
        s.badgePosition
      }${s.badgeColor !== undefined ? ` bg-${s.badgeColor}` : ""}${
        s.badgeTextColor !== undefined ? ` text-${s.badgeTextColor}` : ""
      }${s.badgeClass ? ` ${s.badgeClass}` : ""}`;
      const c = Nt[s.position].value.indexOf(l);
      Nt[s.position].value[c] = Ws[s.meta.group] = s;
    }
  }
  const a = () => {
    EC(s);
    r = undefined;
  };
  if (s.timeout > 0) {
    s.meta.timer = setTimeout(() => {
      s.meta.timer = undefined;
      a();
    }, s.timeout + 1000);
  }
  if (s.group !== undefined) {
    return (l) => {
      if (l !== undefined) {
        Pr("trying to update a grouped one which is forbidden", e);
      } else {
        a();
      }
    };
  }
  r = {
    dismiss: a,
    config: e,
    notif: s,
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
          position: s.position,
        });
        Ph(c, t, r);
      }
    }
  };
}
function EC(e) {
  if (e.meta.timer) {
    clearTimeout(e.meta.timer);
    e.meta.timer = undefined;
  }
  const t = Nt[e.position].value.indexOf(e);
  if (t !== -1) {
    if (e.group !== undefined) {
      delete Ws[e.meta.group];
    }
    const n = Ih["" + e.meta.uid];
    if (n) {
      const { width: r, height: s } = getComputedStyle(n);
      n.style.left = `${n.offsetLeft}px`;
      n.style.width = r;
      n.style.height = s;
    }
    Nt[e.position].value.splice(t, 1);
    if (typeof e.onDismiss == "function") {
      e.onDismiss();
    }
  }
}
function Su(e) {
  return e != null && _C.test(e) !== true;
}
function Pr(e, t) {
  console.error(`Notify: ${e}`, t);
  return false;
}
function SC() {
  return Ye({
    name: "QNotifications",
    devtools: {
      hide: true,
    },
    setup() {
      return () =>
        j(
          "div",
          {
            class: "q-notifications",
          },
          nl.map((e) =>
            j(
              tp,
              {
                key: e,
                class: Ah[e],
                tag: "div",
                name: `q-notification--${e}`,
              },
              () =>
                Nt[e].value.map((t) => {
                  const n = t.meta;
                  const r = [];
                  if (n.hasMedia === true) {
                    if (t.spinner !== false) {
                      r.push(
                        j(t.spinner, {
                          class:
                            "q-notification__spinner q-notification__spinner--" +
                            n.leftClass,
                          color: t.spinnerColor,
                          size: t.spinnerSize,
                        })
                      );
                    } else if (t.icon) {
                      r.push(
                        j(Zt, {
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
                        j(
                          yC,
                          {
                            class:
                              "q-notification__avatar q-notification__avatar--" +
                              n.leftClass,
                          },
                          () =>
                            j("img", {
                              src: t.avatar,
                              "aria-hidden": "true",
                            })
                        )
                      );
                    }
                  }
                  if (n.hasText === true) {
                    let i;
                    const o = {
                      class: "q-notification__message col",
                    };
                    if (t.html === true) {
                      o.innerHTML = t.caption
                        ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>`
                        : t.message;
                    } else {
                      const a = [t.message];
                      i = t.caption
                        ? [
                            j("div", a),
                            j(
                              "div",
                              {
                                class: "q-notification__caption",
                              },
                              [t.caption]
                            ),
                          ]
                        : a;
                    }
                    r.push(j("div", o, i));
                  }
                  const s = [
                    j(
                      "div",
                      {
                        class: n.contentClass,
                      },
                      r
                    ),
                  ];
                  if (t.progress === true) {
                    s.push(
                      j("div", {
                        key: `${n.uid}|p|${n.badge}`,
                        class: n.progressClass,
                        style: n.progressStyle,
                      })
                    );
                  }
                  if (t.actions !== undefined) {
                    s.push(
                      j(
                        "div",
                        {
                          class: n.actionsClass,
                        },
                        t.actions.map((i) => j(la, i))
                      )
                    );
                  }
                  if (n.badge > 1) {
                    s.push(
                      j(
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
                  return j(
                    "div",
                    {
                      ref: (i) => {
                        Ih["" + n.uid] = i;
                      },
                      key: n.uid,
                      class: n.class,
                      ...n.attrs,
                    },
                    [
                      j(
                        "div",
                        {
                          class: n.wrapperClass,
                        },
                        s
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
const kC = {
  setDefaults(e) {
    if (dt(e) === true) {
      Object.assign(Vs, e);
    }
  },
  registerType(e, t) {
    if (dt(t) === true) {
      Fr[e] = t;
    }
  },
  install({ $q: e, parentApp: t }) {
    e.notify = this.create = (n) => Ph(n, e);
    e.notify.setDefaults = this.setDefaults;
    e.notify.registerType = this.registerType;
    if (e.config.notify !== undefined) {
      this.setDefaults(e.config.notify);
    }
    if (this.__installed !== true) {
      nl.forEach((r) => {
        Nt[r] = he([]);
        const s =
          ["left", "center", "right"].includes(r) === true
            ? "center"
            : r.indexOf("top") !== -1
            ? "top"
            : "bottom";
        const i =
          r.indexOf("left") !== -1
            ? "start"
            : r.indexOf("right") !== -1
            ? "end"
            : "center";
        const o = ["left", "right"].includes(r)
          ? `items-${r === "left" ? "start" : "end"} justify-center`
          : r === "center"
          ? "flex-center"
          : `items-${i}`;
        Ah[
          r
        ] = `q-notifications__list q-notifications__list--${s} fixed column no-wrap ${o}`;
      });
      const n = Fi("q-notify");
      Oa(SC(), t).mount(n);
    }
  },
};
const Lr = {};
function xC(e) {
  Object.assign(Ge, {
    request: e,
    exit: e,
    toggle: e,
  });
}
function Lh() {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement ||
    null
  );
}
function Oh() {
  const e = (Ge.activeEl = Ge.isActive === false ? null : Lh());
  Hw(e === null || e === document.documentElement ? document.body : e);
}
function TC() {
  Ge.isActive = Ge.isActive === false;
  Oh();
}
function ku(e, t) {
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
const Ge = br(
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
Lr.request = [
  "requestFullscreen",
  "msRequestFullscreen",
  "mozRequestFullScreen",
  "webkitRequestFullscreen",
].find((e) => document.documentElement[e] !== undefined);
Ge.isCapable = Lr.request !== undefined;
if (Ge.isCapable === false) {
  xC(() => Promise.reject("Not capable"));
} else {
  Object.assign(Ge, {
    request(e) {
      const t = e || document.documentElement;
      const { activeEl: n } = Ge;
      if (t === n) {
        return Promise.resolve();
      } else {
        return (
          n !== null && t.contains(n) === true ? Ge.exit() : Promise.resolve()
        ).finally(() => ku(t, Lr.request));
      }
    },
    exit() {
      if (Ge.isActive === true) {
        return ku(document, Lr.exit);
      } else {
        return Promise.resolve();
      }
    },
    toggle(e) {
      if (Ge.isActive === true) {
        return Ge.exit();
      } else {
        return Ge.request(e);
      }
    },
  });
  Lr.exit = [
    "exitFullscreen",
    "msExitFullscreen",
    "mozCancelFullScreen",
    "webkitExitFullscreen",
  ].find((e) => document[e]);
  Ge.isActive = !!Lh();
  if (Ge.isActive === true) {
    Oh();
  }
  [
    "onfullscreenchange",
    "onmsfullscreenchange",
    "onwebkitfullscreenchange",
  ].forEach((e) => {
    document[e] = TC;
  });
}
const NC = {
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
  iconSet: Ow,
  plugins: {
    Dialog: pC,
    Loading: Tt,
    Notify: kC,
    AppFullscreen: Ge,
  },
};
const AC = "/";
async function IC({ app: e, router: t, store: n }, r) {
  let s = false;
  const i = (l) => {
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
    s = true;
    if (typeof l == "string" && /^https?:\/\//.test(l)) {
      window.location.href = l;
      return;
    }
    const c = i(l);
    if (c !== null) {
      window.location.href = c;
    }
  };
  const a = window.location.href.replace(window.location.origin, "");
  for (let l = 0; s === false && l < r.length; l++) {
    try {
      await r[l]({
        app: e,
        router: t,
        store: n,
        ssrContext: null,
        redirect: o,
        urlPath: a,
        publicPath: AC,
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
  if (s !== true) {
    e.use(t);
    e.mount("#q-app");
  }
}
Lw(Jf, NC).then((e) => {
  const [t, n] =
    Promise.allSettled !== undefined
      ? [
          "allSettled",
          (r) =>
            r.map((s) => {
              if (s.status === "rejected") {
                console.error("[Quasar] boot error:", s.reason);
                return;
              }
              return s.value.default;
            }),
        ]
      : ["all", (r) => r.map((s) => s.default)];
  return Promise[t]([
    ke(() => import("./i18n-v347.js"), __vite__mapDeps([63, 64])),
    ke(() => import("./head-v347.js"), __vite__mapDeps([65, 48])),
  ]).then((r) => {
    const s = n(r).filter((i) => typeof i == "function");
    IC(e, s);
  });
});
export {
  LE as $,
  Un as A,
  tw as B,
  fC as C,
  pC as D,
  w_ as E,
  tt as F,
  lt as G,
  GC as H,
  HC as I,
  zC as J,
  u_ as K,
  Cw as L,
  fS as M,
  kC as N,
  KE as O,
  jo as P,
  R0 as Q,
  GE as R,
  zE as S,
  ns as T,
  FE as U,
  ME as V,
  AE as W,
  IE as X,
  RE as Y,
  OE as Z,
  ww as _,
  Qe as a,
  CE as a$,
  PE as a0,
  yS as a1,
  qE as a2,
  ow as a3,
  bS as a4,
  CS as a5,
  Ja as a6,
  $E as a7,
  _S as a8,
  DE as a9,
  bt as aA,
  ms as aB,
  gs as aC,
  RS as aD,
  Zt as aE,
  r0 as aF,
  w0 as aG,
  MS as aH,
  x0 as aI,
  mh as aJ,
  gh as aK,
  kS as aL,
  OS as aM,
  Vv as aN,
  XC as aO,
  Ct as aP,
  af as aQ,
  VC as aR,
  Aw as aS,
  M0 as aT,
  pS as aU,
  hS as aV,
  ke as aW,
  oC as aX,
  WC as aY,
  Ae as aZ,
  qC as a_,
  wS as aa,
  jE as ab,
  ES as ac,
  vS as ad,
  la as ae,
  SS as af,
  YC as ag,
  Wm as ah,
  Pi as ai,
  _E as aj,
  wE as ak,
  Xt as al,
  Je as am,
  Lp as an,
  $w as ao,
  NS as ap,
  qw as aq,
  Dw as ar,
  Fw as as,
  Vw as at,
  jw as au,
  Qw as av,
  kt as aw,
  _p as ax,
  bp as ay,
  AS as az,
  Vf as b,
  xS as b$,
  jC as b0,
  sE as b1,
  QE as b2,
  HE as b3,
  Lt as b4,
  Aa as b5,
  Mf as b6,
  _i as b7,
  yf as b8,
  ss as b9,
  Wn as bA,
  Ci as bB,
  kE as bC,
  nw as bD,
  ue as bE,
  qd as bF,
  gE as bG,
  u0 as bH,
  bE as bI,
  eS as bJ,
  tS as bK,
  nS as bL,
  EE as bM,
  XE as bN,
  JE as bO,
  ZE as bP,
  SE as bQ,
  YE as bR,
  eE as bS,
  JC as bT,
  iS as bU,
  oS as bV,
  WE as bW,
  aS as bX,
  lS as bY,
  VE as bZ,
  pp as b_,
  a0 as ba,
  ru as bb,
  l0 as bc,
  vp as bd,
  su as be,
  zw as bf,
  Za as bg,
  Yw as bh,
  ga as bi,
  rS as bj,
  sS as bk,
  _t as bl,
  cE as bm,
  pE as bn,
  UE as bo,
  BE as bp,
  vn as bq,
  at as br,
  ct as bs,
  qs as bt,
  Ve as bu,
  LS as bv,
  rs as bw,
  Os as bx,
  sh as by,
  ih as bz,
  Zs as c,
  hE as c$,
  TS as c0,
  xE as c1,
  rE as c2,
  $C as c3,
  uS as c4,
  P0 as c5,
  j0 as c6,
  FS as c7,
  ri as c8,
  yC as c9,
  lC as cA,
  KC as cB,
  UC as cC,
  BC as cD,
  QC as cE,
  dt as cF,
  bh as cG,
  DS as cH,
  PC as cI,
  wo as cJ,
  _0 as cK,
  pa as cL,
  MC as cM,
  FC as cN,
  H0 as cO,
  eC as cP,
  yr as cQ,
  Xa as cR,
  mE as cS,
  oE as cT,
  TE as cU,
  aE as cV,
  B_ as cW,
  lE as cX,
  gS as cY,
  cS as cZ,
  iE as c_,
  mu as ca,
  K0 as cb,
  z0 as cc,
  Q0 as cd,
  G0 as ce,
  ed as cf,
  Fm as cg,
  tl as ch,
  Z0 as ci,
  ua as cj,
  iC as ck,
  Yi as cl,
  nd as cm,
  _f as cn,
  Na as co,
  ca as cp,
  Xu as cq,
  tE as cr,
  __ as cs,
  NE as ct,
  tp as cu,
  Xd as cv,
  vE as cw,
  zd as cx,
  dS as cy,
  uC as cz,
  Ir as d,
  PS as d0,
  IS as d1,
  ZC as d2,
  oo as d3,
  ao as d4,
  ar as d5,
  dE as d6,
  fE as d7,
  jd as d8,
  yE as d9,
  nE as da,
  OC as db,
  J_ as dc,
  mS as dd,
  dw as de,
  Cg as e,
  Ye as f,
  M as g,
  j as h,
  Rn as i,
  DC as j,
  RC as k,
  It as l,
  he as m,
  _n as n,
  Js as o,
  St as p,
  vr as q,
  LC as r,
  de as s,
  Qh as t,
  Mw as u,
  nh as v,
  Am as w,
  Se as x,
  Hn as y,
  zn as z,
};
