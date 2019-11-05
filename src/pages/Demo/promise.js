const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
class Promise {
  value;
  reason;
  state = PENDING;
  onFulfilledTask = [];
  onRejectedTask = [];
  constructor(excepter) {
    const resovle = value => {
      if (this.state === PENDING) {
        this.value = value;
        this.onFulfilledTask.forEach(fn => fn());
        this.state = FULFILLED;
      }
    };
    const reject = reason => {
      if (this.state === PENDING) {
        this.reason = reason;
        this.onFulfilledTask.forEach(fn => fn());
        this.state = REJECTED;
      }
    };
    try {
      excepter(resovle, reject);
    } catch (e) {
      reject(e);
    }
  }
  _resolvePromise(x, resolve, reject) {
    if (x instanceof Promise) {
      x.then(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    } else {
      resolve(x);
    }
  }
  then(onFulfilled, onRejected) {
    return new Promise((resolve, reject) => {
      if (this.state === FULFILLED) {
        let x = onFulfilled(this.value);
        this._resolvePromise(x, resolve, reject);
      }
      if (this.state === REJECTED) {
        let x = onRejected(this.reason);
        this._resolvePromise(x, resolve, reject);
      }
      if (this.state === PENDING) {
        this.onFulfilledTask.push(() => {
          let x = onFulfilled(this.value);
          this._resolvePromise(x, resolve, reject);
        });
        this.onRejectedTask.push(() => {
          let x = onRejected(this.reason);
          this._resolvePromise(x, resolve, reject);
        });
      }
    });
  }
}
export default Promise;
