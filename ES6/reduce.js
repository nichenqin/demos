function unique(array) {
    return array.reduce(function (pre, arr) {

        var u = pre.find(function (i) {
            return i === arr;
        })

        if (!u) {
            pre.push(arr);
        }

        return pre;
    }, [])
}

console.log(unique([1, 1, 2, 3, 3, 4, 4]));

