'use strict';

import Task from './task';

class Constants extends Task {
    constructor(constants){
        super();
        this.constants = constants;
    }

    execute(input){

        for(let constant in this.constants){
            const value = this.constants[constant];
            const regex = new RegExp('\\b' + constant + '\\b', 'g');

            input = input.replace(regex, value);
        }
        return Promise.resolve(input);
    }
}

export default Constants;