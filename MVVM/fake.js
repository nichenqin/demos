const toArray = o => Array.prototype.slice.call(o);

class Hares {
  constructor({ data, el }) {
    this.$data = data;
    this.$el = document.querySelector(el);
    this.renderDom(this.$el);
  }

  render(node) {
    console.log(node, node.textContent);
    const sTag = "{{";
    const eTag = "}}";

    const matches = node.textContent.split(sTag);
    if (matches.length) {
      let ret = "";
      matches.forEach(matchStr => {
        const match = matchStr.split(eTag);
        ret = match.length === 1 ? matchStr : this.$data[match[0]];
        node.textContent = ret;
      });
    }
  }

  renderDom(dom) {
    const attrs = toArray(dom.attributes);
    const nodes = toArray(dom.childNodes);

    attrs.forEach(attr => this.render(attr));
    nodes.forEach(
      node => (node.nodeType === 1 ? this.renderDom(node) : this.render(node))
    );
  }
}

const app = new Hares({
  el: "#app",
  data: {
    nameClass: "ninini",
    name: "nichenqin",
    age: 26,
    color: "yellow"
  }
});
