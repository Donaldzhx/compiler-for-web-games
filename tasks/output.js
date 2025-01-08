'use strict';

const fs = require('fs');
const Task = require('./task');

class Output extends Task {
    constructor(destination) {
        super();
        this.destination = destination;
    }

    execute(input) {
        super.execute(input);

        //One file to output
        if(this.destination.length) {
            fs.writeFile(this.destination, input, 'binary').then(() => {
                return input;
            });
        }

        //Multiple files to output (Multiple inputs too)
        const promises = [];
        for(let inputLabel in this.destination) {
            const file = this.destination[inputLabel];
            const content = input[inputLabel];
            promises.push(fs.writeFile(file, content));
        }

        return Promise.all(promises).then(() => {
            return input;
        });
    }
}

module.exports = Output;