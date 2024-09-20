// deno-lint-ignore-file no-explicit-any
export type Resolve<T> = (value: T | PromiseLike<T>) => void;
export type Reject = (reason?: any) => void;
export type ResolvablePromiseInit<T> = PromiseLike<T> | ((resolve: Resolve<T>, reject: Reject) => void);

export class ResolvablePromise<T> implements Promise<T> {
  #promise: Promise<T>;
  #resolve!: Resolve<T>;
  #reject!: Reject;
  #settled = false;

  constructor(init?: ResolvablePromiseInit<T> | null) {
    // super(_ => _(void 0 as any));
    this.#promise = new Promise((res, rej) => {
      const resolve = this.#resolve = v => (this.#settled = true, res(v));
      const reject = this.#reject = r => (this.#settled = true, rej(r));
      if (init == null) return;
      if (typeof init === 'function') init(resolve, reject);
      else if (typeof init.then === 'function') init.then(resolve, reject);
    });
  }

  resolve(x: T | PromiseLike<T>) {
    this.#resolve(x);
  }

  reject(reason?: any) {
    this.#reject(reason);
  }

  /** @deprecated Name of this property might change */
  get settled() { return this.#settled }

  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2> {
    return this.#promise.then(onfulfilled, onrejected);
  }
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<T | TResult> {
    return this.#promise.catch(onrejected);
  }
  finally(onfinally?: (() => void) | null): Promise<T> {
    return this.#promise.finally(onfinally);
  }

  readonly [Symbol.toStringTag] = 'ResolvablePromise'
}

/** @deprecated */
export function resolvablePromise<T>() {
  return new ResolvablePromise<T>();
}
