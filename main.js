Array.prototype.customFilter = function (cb) {
    const out = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            out.push(this[i]);
        }
    }

    return out;
}

Array.prototype.customMap = function (cb) {
    const out = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            out.push(cb(this[i]));
        }
    }

    return out;
}

Array.prototype.customReduce = function (cb, init = 0) {
    let out = init + this[0];

    for (let i = 1; i < this.length; i++) {
        out = cb(out, this[i], i, this);
    }

    return out;
}

const c = console.log;
const arr = [5, 4, 3, 2, 1];

c('filter:\t\t\t', arr.filter(v => v > 2));
c('customFilter:\t', arr.customFilter(v => v > 2));

c('map:\t\t\t', arr.map(v => v + 2));
c('customMap:\t\t', arr.customMap(v => v + 2));

c('reduce:\t\t\t', arr.reduce((s, v) => s + v * 2), 5);
c('customReduce:\t', arr.customReduce((s, v) => s + v * 2), 5);
