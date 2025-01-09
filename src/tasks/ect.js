'use strict';

import execFile from 'child_process';
import ect from 'ect-bin';

const Task = require('./task');

class Ect extends Task {
    constructor(file) {
        super();
        this.file = file;
    }

    execute(input) {
        return new Promise((resolve, reject) => {
            execFile(ect, [this.file], err => {
                if (err) reject(err);
                else resolve();
            });
        });
    }
}

export default Ect;