'use strict';

/**
 * Adds a header for X-Response-Time with microsecond precision
 * @return {Function}
 */
module.exports = function responseTime() {
    return function* responseTime(next) {
        let start = process.hrtime();
        yield* next;
        let elapsed = process.hrtime(start);
        let string = (elapsed[0] * 1e3 + elapsed[1] / 1e6).toFixed(3) + 'ms';
        this.set('X-Response-Time', string);
    };
}