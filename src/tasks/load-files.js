'use strict';

const fs = require('fs');

const Task = require('./task');

class FileLoader extends Task {
    constructor() {
        super();
        this.files = files;
    }

    execute(input) {
        super.execute(input);

        return Promise.all(this.files.map(file => {
            return fs.readFile(file).then(data => {
                return data.toString();
            });
        }));
    }
}

module.exports = FileLoader;