'use strict';

const colors = require('colors/safe');

const Task = require('./tasks');

class Block extends Task {
    constructor(label) {
        super();
        this.label = label;
    }

    execute(){
        super.execute(input);

        console.log('');
        this.log(this.label,colors.white.underline);
        return Promise.resolve(input);
    }
}

module.exports = Block;