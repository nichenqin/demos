console.log('starting app');

setTimeout(function () {
  console.log('1');
}, 2000);

setTimeout(function () {
  console.log('2');
}, 0);

console.log('finished up');
