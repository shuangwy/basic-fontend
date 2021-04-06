class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const length = result.length;
    for (let i = 0; i < length; i++) {
      this[i] = result[i];
    }
    this.length = length;
  }
  get(index) {
    return this[index];
  }
  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const ele = this[i];
      fn(ele);
    }
  }
  on(type, fn) {
    return this.each((ele) => ele.addEventListener(type, fn, false));
  }
}
