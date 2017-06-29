var Rx = require('rxjs/Rx');

var observable = Rx.Observable
  .create(observer => {
    observer.next('jerry');
    observer.next('anna');

    setTimeout(function () {
      observer.next('Rxjs 30 Days!')
    }, 3000);
  })

console.log('start');
observable.subscribe(value => {
  console.log(value);
})
console.log('end');
