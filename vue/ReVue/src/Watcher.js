import Dep from "./Dep";

let uid = 0;

class Watcher {
  constructor(exp, scope, callback) {
    this.exp = exp;
    this.scope = scope;
    this.callback = callback || function() {};

    this.value = null;
    this.$uid = uid++;
    this.update();
  }

  get() {
    Dep.target = this;
  }

  update() {
    this.get();
  }
}

export default Watcher;
