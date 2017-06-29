var Rx = require('rxjs/Rx');

var source = Rx.Observable.of('jarry', 'anna');

source.subscribe({
  next(value) { console.log(value); },
  error(error) { console.log(error); },
  complete() { console.log('complete!'); }
})


var arr = ['Jerry', 'Anna', 2016, 2017, '30 days'];

var source2 = Rx.Observable.from(arr);

source2.subscribe({
  next(value) { console.log(value); }
})

var string = 'nichenqin';

var source3 = Rx.Observable.from(string);

source3.subscribe({
  next(value) { console.log(value); }
})

var source4 = Rx.Observable
  .from(new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('promise');
    }, 1000);
  }))

source4.subscribe({
  next(value) { console.log(value); }
})

var source5 = Rx.Observable.timer(1000, 1000);

var subscribtion = source5.subscribe({
  next(value) { console.log(value); }
})

setTimeout(function () {
  subscribtion.unsubscribe();
}, 6000);
