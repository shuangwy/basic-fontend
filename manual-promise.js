const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class myPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks = [];
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== "function") {
      onFulfilled = () => this.value;
    }
    if (typeof onRejected !== "function") {
      onRejected = () => {
        throw this.reason;
      };
    }
    return new myPromise((resolve, reject) => {
      if (this.status === PENDING) {
        this.onRejectedCallbacks.push(() => {
          const x = onFulfilled(this.value);
          try {
            if (x instanceof myPromise) {
              x.then(resolve, reject);
            } else {
              reject(x);
            }
          } catch (e) {
            reject(e);
          }
        });
        this.onResolvedCallbacks.push(() => {
          const x = onRejected(this.reason);
          try {
            if (x instanceof myPromise) {
              x.then(resolve, reject);
            } else {
              resolve(x);
            }
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.status === FULFILLED) {
        const x = onFulfilled(this.value);
        try {
          if (x instanceof myPromise) {
            x.then(resolve, reject);
          } else {
            resolve(x);
          }
        } catch (e) {
          reject(e);
        }
      }
      if (this.status === REJECTED) {
        const x = onRejected(this.reason);
        try {
          if (x instanceof myPromise) {
            x.then(resolve, reject);
          } else {
            reject(x);
          }
        } catch (e) {
          reject(e);
        }
      }
    });
  }
}

const promise = new myPromise((resolve, rejected) => {
  console.log(123);
  resolve("success");
})
  .then((res) => {
    console.log("res", res);
    return 9;
  })
  .then(2, 5)
  .then((r) => {
    console.log("r", r);
  });
