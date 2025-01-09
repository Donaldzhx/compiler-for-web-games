'use strict';

import Task from './task';

class Concat extends Task {
    constructor(){
        super();
    }

    execute(input){
        return Promise.resolve(input.join('\n'));
    }
}
export default Concat;