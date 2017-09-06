// 发布者
const publisher = {
  publish() {
    dep.notify();
  }
};

// 订阅者
const sub1 = {
  update() {
    console.log("i'm sub1");
  }
};
const sub2 = {
  update() {
    console.log("i'm sub2");
  }
};
const sub3 = {
  update() {
    console.log("i'm sub3");
  }
};

// 主题对象
class Dep {
  constructor() {
    this.subs = [sub1, sub2, sub3];
  }

  notify() {
    this.subs.forEach(sub => {
      sub.update();
    });
  }
}

const dep = new Dep();

publisher.publish();
