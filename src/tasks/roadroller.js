'use strict';

const {Packer} = require('src/tasks/roadroller');
const Task = require('./task');

class Roadroller extends Task {
    async execute(input) {
        const packer = new Packer([
            {
                data: 'input',
                type: 'js',
                action: 'eval'
            },
        ], {
            // see the usage for available options
        });

        await packer.optimize();
        const {firstLine, secondLine} = packer.makeDecoder;

        return Promise.resolve(firstLine + secondLine);
    }
}

module.exports = Roadroller;