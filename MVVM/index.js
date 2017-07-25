function MVVM(opt) {
  this.dom = document.querySelector(opt.el);
  this.data = opt.data || {};
  this.renderDom(this.dom);
}

MVVM.prototype = {
  init: {
    sTag: "{{",
    eTag: "}}"
  },
  render: function(node) {
    var self = this;
    var sTag = self.init.sTag;
    var eTag = self.init.eTag;

    var matchs = node.textContent.split(sTag);
    console.log("matchs", matchs);
    if (matchs.length) {
      var ret = "";
      for (var i = 0; i < matchs.length; i++) {
        var match = matchs[i].split(eTag);
        console.log(match);
        if (match.length == 1) {
          ret += matchs[i];
        } else {
          ret = self.data[match[0]];
        }
        node.textContent = ret;
      }
    }
  },
  renderDom: function(dom) {
    var self = this;

    var attrs = dom.attributes;
    var nodes = dom.childNodes;

    Array.prototype.forEach.call(attrs, function(item) {
      self.render(item);
    });

    Array.prototype.forEach.call(nodes, function(item) {
      if (item.nodeType === 1) {
        return self.renderDom(item);
      }
      self.render(item);
    });
  }
};

var app = new MVVM({
  el: "#app",
  data: {
    name: "zhaomenghuan",
    age: "24",
    color: "red"
  }
});
