/* eslint-disable no-unused-vars */
// TODO: get all referenced functions in here
// enable eslist no-undef rule to help here

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

// add to remove linter error
console.log(cE);
