'use strict';

/**
 * Adds a header for X-Response-Time with microsecond precision
 * @return {Function}
 */
module.exports = function responseTime() {
    return async function responseTime(ctx, next) {
        const start = process.hrtime();
        await next();
        const elapsed = process.hrtime(start);
        const string = (elapsed[0] * 1e3 + elapsed[1] / 1e6).toFixed(3) + 'ms';
        ctx.set('X-Response-Time', string);
    };
}