'use strict';

const CleanCss = require('clean-css');
const Task = require('./task');

class UglifyCSS extends Task {
    constructor() {
        super();
    }

    execute(input) {
        return Promise.resolve(new CleanCss().minify(input).styles);
    }
}

module.exports = UglifyCSS;