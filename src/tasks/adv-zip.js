'use strict';

import {spawn} from 'child_process';

import Task from './task';

class AdvZip extends Task{
    constructor(filename) {
        super();
        this.filename = filename;
    }

    execute(input){
        return new Promise((resolve, reject) => {
            const subprocess = spawn('advzip', ['-z', this.filename]);

            subprocess.stderr.on('data', data => {
                console.error('stderr', data);
            });
            subprocess.on('exit', code => {
                if (code === 0) {
                    resolve(input);
                }else{
                    reject('advzip failed with error code ' + code);
                }
            });
        });
    }
}
export default AdvZip;