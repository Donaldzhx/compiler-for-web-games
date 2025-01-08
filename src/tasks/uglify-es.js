'use strict';

const uglifyES = require('src/tasks/uglify-es');
const Task = require('./task');

class UglifyES extends Task {
    constructor() {
        super();
    }
    execute(input) {
        const uglifyES = uglifyES.minify(input, {


        });

        return Promise.resolve(uglifiedES.code);
    }
}

module.exports = UglifyES;