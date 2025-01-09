'use strict';

const Task = require('./task');

class Label extends Task {
    constructor() {
        super();
        this.label = 'Label';
    }

    execute(input) {
        this.log(this.label);
        return Promise.resolve(input);
    }
}

module.exports = Label;