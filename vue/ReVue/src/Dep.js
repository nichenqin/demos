class Dep {
  constructor() {
    this.subs = {};
  }

  addSub(target) {
    if (!Reflect.get(this.subs, target.uid)) {
      Reflect.set(this.subs, target.uid, target);
    }
  }

  notify(options) {
    console.log("notify");
    for (var uid in this.subs) {
      Reflect.get(this.subs, uid).update(options);
    }
  }
}

export default Dep;
