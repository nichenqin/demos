function normal(template, ...expressions) {
  console.log(template);
  console.log(expressions);
}

var name = "nico";
var outfit = "leather jacket";
normal`hello ${name}, you look lovely today in that ${outfit}`;
