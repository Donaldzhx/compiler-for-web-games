'use strict';

import colors from 'colors/safe';

import Task from './task';

class Block extends Task {
    constructor(label) {
        super();
        this.label = label;
    }

    execute(input){
        console.log('');
        this.log(this.label,colors.white);
        return Promise.resolve(input);
    }
}

module.exports = Block;