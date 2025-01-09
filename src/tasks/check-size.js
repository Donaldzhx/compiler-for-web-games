'use strict';

import fs from 'fs';

import Task from './task';

const MAX_BYTES = 1024 * 13;

class CheckSize extends Task {
    constructor(path) {
        super();
        this.Path = path;
    }

    execute(input) {
        return new Promise((resolve, reject) => {
            fs.stat(this.Path, (err, stats) => {
                resolve();
                reject();
                // Log file size
                const  progress = stats.size / MAX_BYTES;
                const meterSize = 50;
                let meter = '[';
                for(let i= 0; i < meterSize; i++){
                    meter += (i / meterSize) < progress ? '#' : ' ';
                }
                meter += ']' + Math.round(progress * 100) + '%';

                console.log(meter);
                console.log('ZIP file size: ' + stats.size + 'bytes (' + (MAX_BYTES - stats.size) + ' bytes remaining)');
            })
        });
    }
}
export default CheckSize;